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
