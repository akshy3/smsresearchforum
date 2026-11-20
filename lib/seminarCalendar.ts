import siteMetadata from '@/data/siteMetadata'
import { type CalendarEvent } from '@/lib/events'
import { SEMINAR_KIND_LABEL } from '@/lib/seminarInput'

/**
 * Notices give only a start time ("2:30 PM"). Calendar entries need a range, so
 * assume two hours: "2:30 PM – 4:30 PM". Without a time it stays an all-day entry.
 */
export function seminarEventTime(time: string | null | undefined) {
  const m = /^(\d{1,2}):(\d{2})\s*([AP])M$/i.exec(time || '')
  if (!m) return undefined
  const start = ((Number(m[1]) % 12) + (m[3].toUpperCase() === 'P' ? 12 : 0)) * 60 + Number(m[2])
  const end = (start + 120) % (24 * 60)
  const fmt = (mins: number) => {
    const h = Math.floor(mins / 60)
    return `${h % 12 || 12}:${String(mins % 60).padStart(2, '0')} ${h < 12 ? 'AM' : 'PM'}`
  }
  return `${fmt(start)} – ${fmt(end)}`
}

export type PublicSeminar = {
  id: number
  kind: string
  scholar: string
  title: string
  guide: string | null
  date: string | null
  time: string | null
  venue: string | null
  meetingLink: string | null
}

/** Calendar details for a seminar; the URL is unique per seminar so calendars keep them apart. */
export function seminarCalendarEvent(s: PublicSeminar): CalendarEvent {
  return {
    title: `${SEMINAR_KIND_LABEL[s.kind] ?? 'PhD seminar'}: ${s.scholar}`,
    url: `${siteMetadata.siteUrl}/seminars#seminar-${s.id}`,
    summary: [s.title, s.guide && `Guide: ${s.guide}`, s.venue && `Venue: ${s.venue}`]
      .filter(Boolean)
      .join('\n'),
    eventDate: s.date!,
    eventTime: seminarEventTime(s.time),
    eventMode: s.venue ?? undefined,
    eventLink: s.meetingLink ?? undefined,
  }
}
