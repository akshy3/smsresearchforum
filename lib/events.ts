import siteMetadata from '@/data/siteMetadata'

const DAY_MS = 24 * 60 * 60 * 1000
const IST_OFFSET_MS = 5.5 * 60 * 60 * 1000

/** Midnight IST after the event's last day. */
export function eventEndsAt(start: string, end?: string) {
  return new Date(end || start).getTime() + DAY_MS - IST_OFFSET_MS
}

const dateFormat = new Intl.DateTimeFormat(siteMetadata.locale, {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
})

// Ranges are joined by hand: formatRange's spacing differs between the server
// and browsers, which made React re-render the page.
export function formatEventDate(start: string, end?: string) {
  const s = new Date(start)
  if (!end) return dateFormat.format(s)
  const e = new Date(end)
  if (s.getUTCFullYear() === e.getUTCFullYear() && s.getUTCMonth() === e.getUTCMonth()) {
    const month = s.toLocaleString(siteMetadata.locale, { month: 'short', timeZone: 'UTC' })
    return `${month} ${s.getUTCDate()} – ${e.getUTCDate()}, ${s.getUTCFullYear()}`
  }
  return `${dateFormat.format(s)} – ${dateFormat.format(e)}`
}

// ---------- calendar entries ----------

export interface CalendarEvent {
  title: string
  url: string
  summary?: string
  eventDate: string
  eventEndDate?: string
  eventTime?: string
  eventMode?: string
}

const ymd = (d: Date) => d.toISOString().slice(0, 10).replace(/-/g, '')
const stamp = (d: Date) =>
  d
    .toISOString()
    .replace(/[-:]/g, '')
    .replace(/\.\d{3}/, '')

/** "11:00 AM – 12:00 PM (IST)" on a single-day event becomes a timed UTC range;
 *  anything else (no time, or a multi-day event) becomes an all-day entry. */
function eventTimes({ eventDate, eventEndDate, eventTime }: CalendarEvent) {
  const day = new Date(eventDate)
  const m = !eventEndDate
    ? /(\d{1,2})[.:](\d{2})\s*([AP])\.?M\.?\s*[–-]\s*(\d{1,2})[.:](\d{2})\s*([AP])\.?M/i.exec(
        eventTime || ''
      )
    : null
  if (m) {
    const at = (h: string, min: string, ap: string) => {
      const minutes = ((Number(h) % 12) + (ap.toUpperCase() === 'P' ? 12 : 0)) * 60 + Number(min)
      return new Date(day.getTime() + minutes * 60_000 - IST_OFFSET_MS)
    }
    return { timed: true, start: at(m[1], m[2], m[3]), end: at(m[4], m[5], m[6]) }
  }
  return {
    timed: false,
    start: day,
    end: new Date(new Date(eventEndDate || eventDate).getTime() + DAY_MS),
  }
}

export function googleCalendarUrl(event: CalendarEvent) {
  const t = eventTimes(event)
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    dates: t.timed ? `${stamp(t.start)}/${stamp(t.end)}` : `${ymd(t.start)}/${ymd(t.end)}`,
    details: `${event.summary ? event.summary + '\n\n' : ''}${event.url}`,
    location: event.eventMode || '',
  })
  return `https://calendar.google.com/calendar/render?${params}`
}

/** An iCalendar (.ics) file for Apple Calendar, Outlook and others. Served as a
 *  real file (app/calendar/[file]/route.ts), which Safari hands to Calendar. */
export function buildIcs(event: CalendarEvent, updated: Date) {
  const t = eventTimes(event)
  const esc = (v: string) => v.replace(/[\\,;]/g, (c) => '\\' + c).replace(/\n/g, '\\n')
  // Lines longer than 75 characters are folded, as the iCalendar format requires
  const fold = (line: string) => line.match(/.{1,74}/g)!.join('\r\n ')
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//SMS Research Forum//Events//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${event.url}`,
    `DTSTAMP:${stamp(updated)}`,
    t.timed ? `DTSTART:${stamp(t.start)}` : `DTSTART;VALUE=DATE:${ymd(t.start)}`,
    t.timed ? `DTEND:${stamp(t.end)}` : `DTEND;VALUE=DATE:${ymd(t.end)}`,
    `SUMMARY:${esc(event.title)}`,
    `DESCRIPTION:${esc(`${event.summary ? event.summary + '\n\n' : ''}${event.url}`)}`,
    event.eventMode ? `LOCATION:${esc(event.eventMode)}` : '',
    `URL:${event.url}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].filter(Boolean)
  return lines.map(fold).join('\r\n') + '\r\n'
}
