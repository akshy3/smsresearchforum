# Gmail → website seminar intake

Once a day, a small Google Apps Script in the Gmail account that receives OFFICE SMS
mail looks for new seminar notices (pre-synopsis, pre-submission, open defence), reads
the scanned notice PDF with Google's text recognition, and sends it to the website.
Each notice becomes a **draft** on `/manage-seminars`. Nothing appears on the site until
an admin checks the draft and clicks **Publish**.

## One-time setup (about 10 minutes)

1. Sign in to the website, open **/manage-seminars**, scroll to **Gmail script token**
   and click **Copy token**.
2. While signed in to the Gmail account that receives OFFICE SMS mail, open
   <https://script.google.com> → **New project**. Name it "SMS Forum seminar intake".
3. **Project Settings** (gear icon) → tick **Show "appsscript.json" manifest file in
   editor**.
4. In the editor, replace the contents of `appsscript.json` with
   [`gmail-seminar-intake.appsscript.json`](gmail-seminar-intake.appsscript.json), and the
   contents of `Code.gs` with [`gmail-seminar-intake.gs`](gmail-seminar-intake.gs). Save.
5. **Project Settings** → **Script properties** → **Add script property**:
   name `SEMINAR_INTAKE_TOKEN`, value = the token you copied. Save.
6. Back in the editor, choose the `setUp` function and click **Run**. Google asks you to
   allow access (read Gmail, create temporary Drive files for text recognition, connect
   to the website). Approve it. `setUp` creates the daily trigger and runs a first check.
7. Check **Executions** (left sidebar) for the log, then refresh `/manage-seminars` to
   see the drafts. The first check only covers the last 4 days; to try it on older mail,
   run `testOlderNotices` instead (last 30 days).

## Daily routine

Open `/manage-seminars`. For each draft, compare the fields with **Text read from the
notice**, fix anything that was misread, and click **Publish**. Use **Not a seminar** for
emails that aren't seminar notices (for example a postponement; edit the original
seminar's date instead).

## Notes

- The script only reads mail from `smsoffice@cusat.ac.in`. It sends nothing else from
  your mailbox.
- Each notice is sent once. If the website is down, the script retries the next day.
- If the admin password changes, the token changes too: copy the new one into the
  script property.
- To stop it: Apps Script → **Triggers** → delete the `checkSeminarNotices` trigger.
