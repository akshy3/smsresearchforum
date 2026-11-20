// Turns the text of an OFFICE SMS seminar notice (read from a scanned PDF) into
// draft seminar details. Text recognition is imperfect, so every field is optional
// and a person checks the draft before it is published.

export type SeminarKind = 'pre-synopsis' | 'open-defence'

export type ParsedNotice = {
  kind: SeminarKind | null
  scholar: string | null
  title: string | null
  guide: string | null
  date: string | null // YYYY-MM-DD
  time: string | null
  venue: string | null
  meetingLink: string | null
}

const MONTHS = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
]

const tidy = (s: string | undefined | null) =>
  s
    ? s
        .replace(/\s+/g, ' ')
        .replace(/^[\s,:;.\-–]+|[\s,;:\-–]+$/g, '')
        .trim() || null
    : null

export function seminarKind(text: string): SeminarKind | null {
  if (/open\s*defen[cs]e|viva[\s-]*voce/i.test(text)) return 'open-defence'
  if (/pre[\s-]*(synopsis|submission|sub\b)/i.test(text)) return 'pre-synopsis'
  return null
}

/** "16th April 2026", "17th December, 2025", "8 Oct 2026" → "2026-04-16". */
function findDate(text: string): string | null {
  // Prefer the date the seminar is held "on", not the notice's own date at the top.
  const re =
    /\b(\d{1,2})\s*(?:st|nd|rd|th)?\s*(?:of\s+)?(jan|feb|mar|apr|may|jun|jul|aug|sep|sept|oct|nov|dec)[a-z]*\.?,?\s*(\d{4})/gi
  const onIndex = text.search(/\bon\b\s*\n?\s*\d/i)
  let best: { index: number; value: string } | null = null
  for (const m of text.matchAll(re)) {
    const month = MONTHS.findIndex((name) => name.startsWith(m[2].toLowerCase().slice(0, 3)))
    const day = Number(m[1])
    if (month < 0 || day < 1 || day > 31) continue
    const value = `${m[3]}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    const index = m.index ?? 0
    if (!best || (onIndex >= 0 && index >= onIndex && best.index < onIndex)) {
      best = { index, value }
    }
  }
  return best?.value ?? null
}

/** "at 02.30 p.m", "10:30 a.m." → "2:30 PM", "10:30 AM". */
function findTime(text: string): string | null {
  const m = /\b(\d{1,2})\s*[.:]\s*(\d{2})\s*([ap])\.?\s*m\b\.?/i.exec(text)
  if (!m) return null
  return `${Number(m[1])}:${m[2]} ${m[3].toUpperCase()}M`
}

function findTitle(text: string): string | null {
  // The thesis title is the quoted text on the notice.
  const quoted = /[“"‘']{1,2}([^“”"]{15,400}?)[”"’']{1,2}/.exec(text)
  const entitled = /entitled\s*:?\s*([\s\S]{15,400}?)\s*\n\s*(?:by|BY)\b/.exec(text)
  const title = tidy(quoted ? quoted[1] : entitled?.[1])
  return title ? title.replace(/\.$/, '') : null
}

function findScholar(text: string): string | null {
  const m =
    /\bby\b\s*[:\n]?\s*((?:Mr|Ms|Mrs|Dr|Shri|Smt)\.?\s*)?([A-Z][A-Za-z.\- ]{2,60}?)\s*(?:\(|\n|,|Reg\b|Supervis|Register)/i.exec(
      text
    )
  if (!m) return null
  const name = tidy(m[2])
  if (!name) return null
  // Notices often print names in capitals; show them in title case.
  return name === name.toUpperCase()
    ? name.toLowerCase().replace(/\b([a-z])/g, (c) => c.toUpperCase())
    : name
}

function findGuide(text: string): string | null {
  const m = /(?:supervising\s+guide|research\s+supervisor|guide)\s*[:\-]\s*([^\n]{3,80})/i.exec(
    text
  )
  return m ? tidy(m[1].split(/\s{2,}|\bOn\b|\bDC\b|Member/)[0]) : null
}

function findVenue(text: string): string | null {
  const m = /venue\s*[:\-]?\s*([^\n]{3,120})/i.exec(text)
  return m ? tidy(m[1]) : null
}

function findLink(text: string): string | null {
  const m =
    /https?:\/\/(?:meet\.google\.com|teams\.microsoft\.com|[\w.-]*zoom\.us)\/[^\s)>"]+/i.exec(text)
  return m ? m[0].replace(/[.,]+$/, '') : null
}

export function parseNotice(text: string, subject = ''): ParsedNotice {
  const body = text.replace(/\r/g, '')
  return {
    kind: seminarKind(`${subject}\n${body}`),
    scholar: findScholar(body),
    title: findTitle(body),
    guide: findGuide(body),
    date: findDate(body),
    time: findTime(body),
    venue: findVenue(body),
    meetingLink: findLink(body) || findLink(subject),
  }
}

/** Picks the attachment text that looks like the seminar notice (not the synopsis itself). */
export function pickNoticeText(texts: string[]): string {
  const score = (t: string) =>
    (/\bnotice\b/i.test(t) ? 3 : 0) +
    (/supervising\s+guide/i.test(t) ? 2 : 0) +
    (/venue/i.test(t) ? 2 : 0) +
    (/all are cordially invited/i.test(t) ? 2 : 0) -
    (t.length > 6000 ? 3 : 0)
  return [...texts].sort((a, b) => score(b) - score(a))[0] ?? ''
}
