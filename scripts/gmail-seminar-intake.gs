/**
 * SMS Research Forum: daily seminar-notice intake (Google Apps Script).
 *
 * Runs once a day in the Gmail account that receives OFFICE SMS mail. For each new
 * pre-synopsis / pre-submission / open defence notice from smsoffice@cusat.ac.in it
 * reads the scanned PDF notice with Google Drive's text recognition and sends the text
 * to the website, where it becomes a DRAFT seminar. Nothing is published until an admin
 * checks it on /manage-seminars and clicks Publish.
 *
 * Setup: see scripts/gmail-seminar-intake.md. In short: paste this file and
 * appsscript.json into a new Apps Script project, set the SEMINAR_INTAKE_TOKEN script
 * property to the token shown on /manage-seminars, then run setUp() once.
 */

var SITE_URL = 'https://www.smsresearchforum.org'
var SENDER = 'smsoffice@cusat.ac.in'
// Look back a few days so a missed run (or a late email) is still picked up.
var SEARCH = 'from:' + SENDER + ' newer_than:4d'
var SEMINAR_WORDS = /synopsis|pre[\s-]*submission|presub|open\s*defen[cs]e|viva/i
var MAX_PDFS_PER_EMAIL = 3
var MAX_PDF_BYTES = 10 * 1024 * 1024
var DONE_KEY = 'processedMessageIds'

/** Run once: creates the daily trigger (about 7-8 AM in the script's time zone). */
function setUp() {
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (t.getHandlerFunction() === 'checkSeminarNotices') ScriptApp.deleteTrigger(t)
  })
  ScriptApp.newTrigger('checkSeminarNotices').timeBased().everyDays(1).atHour(7).create()
  Logger.log('Daily trigger created. Running a first check now...')
  checkSeminarNotices()
}

/** The daily job. Safe to run by hand at any time: notices are only sent once. */
function checkSeminarNotices() {
  var token = PropertiesService.getScriptProperties().getProperty('SEMINAR_INTAKE_TOKEN')
  if (!token) throw new Error('Set the SEMINAR_INTAKE_TOKEN script property first.')

  var done = loadDone()
  var sent = 0

  GmailApp.search(SEARCH, 0, 50).forEach(function (thread) {
    thread.getMessages().forEach(function (message) {
      var id = message.getId()
      if (done[id] || message.getFrom().toLowerCase().indexOf(SENDER) === -1) return

      var subject = message.getSubject() || ''
      var body = message.getPlainBody() || ''
      if (!SEMINAR_WORDS.test(subject + '\n' + body.slice(0, 2000))) {
        done[id] = Date.now() // not a seminar notice; don't look at it again
        return
      }

      var result = sendToSite(token, {
        messageId: id,
        subject: subject,
        bodyText: body.slice(0, 5000),
        texts: readPdfTexts(message),
      })
      Logger.log(subject + ' -> ' + result.code + ' ' + result.text)
      // Only remember it once the site has it, so failures are retried next day.
      if (result.code >= 200 && result.code < 300) {
        done[id] = Date.now()
        sent++
      }
    })
  })

  saveDone(done)
  Logger.log('Checked mail. Sent ' + sent + ' notice(s) to the site.')
}

/** Text of each PDF attachment, read with Drive's text recognition (OCR). */
function readPdfTexts(message) {
  var texts = []
  message
    .getAttachments()
    .filter(function (a) {
      return /\.pdf$/i.test(a.getName()) || a.getContentType() === 'application/pdf'
    })
    .slice(0, MAX_PDFS_PER_EMAIL)
    .forEach(function (attachment) {
      if (attachment.getSize() > MAX_PDF_BYTES) return
      var fileId = null
      try {
        var file = Drive.Files.create(
          {
            name: 'sms-notice-ocr-' + Date.now(),
            mimeType: 'application/vnd.google-apps.document',
          },
          attachment.copyBlob(),
          { ocrLanguage: 'en', fields: 'id' }
        )
        fileId = file.id
        texts.push(DocumentApp.openById(fileId).getBody().getText().slice(0, 20000))
      } catch (e) {
        Logger.log('Could not read ' + attachment.getName() + ': ' + e)
      } finally {
        if (fileId) {
          try {
            Drive.Files.remove(fileId)
          } catch (e) {
            DriveApp.getFileById(fileId).setTrashed(true)
          }
        }
      }
    })
  return texts
}

function sendToSite(token, payload) {
  var response = UrlFetchApp.fetch(SITE_URL + '/api/seminars/intake', {
    method: 'post',
    contentType: 'application/json',
    headers: { Authorization: 'Bearer ' + token },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true,
  })
  return { code: response.getResponseCode(), text: response.getContentText().slice(0, 200) }
}

// Message ids already handled, kept for 30 days.
function loadDone() {
  var raw = PropertiesService.getScriptProperties().getProperty(DONE_KEY)
  var done = raw ? JSON.parse(raw) : {}
  var cutoff = Date.now() - 30 * 24 * 60 * 60 * 1000
  Object.keys(done).forEach(function (id) {
    if (done[id] < cutoff) delete done[id]
  })
  return done
}

function saveDone(done) {
  PropertiesService.getScriptProperties().setProperty(DONE_KEY, JSON.stringify(done))
}
