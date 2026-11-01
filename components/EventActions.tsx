'use client'

import { useEffect, useState } from 'react'
import { eventEndsAt } from '@/lib/events'

interface EventActionsProps {
  title: string
  url: string
  summary?: string
  eventDate?: string
  eventEndDate?: string
  eventTime?: string
  eventMode?: string
}

const IST_OFFSET_MINUTES = 330

const ymd = (d: Date) => d.toISOString().slice(0, 10).replace(/-/g, '')
const stamp = (d: Date) =>
  d
    .toISOString()
    .replace(/[-:]/g, '')
    .replace(/\.\d{3}/, '')

/** "11:00 AM – 12:00 PM (IST)" on a single-day event becomes a timed UTC range;
 *  anything else (no time, or a multi-day event) becomes an all-day entry. */
function eventTimes(eventDate: string, eventEndDate?: string, eventTime?: string) {
  const day = new Date(eventDate)
  const m = !eventEndDate
    ? /(\d{1,2})[.:](\d{2})\s*([AP])\.?M\.?\s*[–-]\s*(\d{1,2})[.:](\d{2})\s*([AP])\.?M/i.exec(
        eventTime || ''
      )
    : null
  if (m) {
    const at = (h: string, min: string, ap: string) => {
      const hours = (Number(h) % 12) + (ap.toUpperCase() === 'P' ? 12 : 0)
      return new Date(day.getTime() + (hours * 60 + Number(min) - IST_OFFSET_MINUTES) * 60_000)
    }
    return { timed: true, start: at(m[1], m[2], m[3]), end: at(m[4], m[5], m[6]) }
  }
  const end = new Date(new Date(eventEndDate || eventDate).getTime() + 24 * 60 * 60 * 1000)
  return { timed: false, start: day, end }
}

function googleCalendarUrl(p: EventActionsProps) {
  const t = eventTimes(p.eventDate!, p.eventEndDate, p.eventTime)
  const dates = t.timed ? `${stamp(t.start)}/${stamp(t.end)}` : `${ymd(t.start)}/${ymd(t.end)}`
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: p.title,
    dates,
    details: `${p.summary ? p.summary + '\n\n' : ''}${p.url}`,
    location: p.eventMode || '',
  })
  return `https://calendar.google.com/calendar/render?${params}`
}

function icsDataUrl(p: EventActionsProps) {
  const t = eventTimes(p.eventDate!, p.eventEndDate, p.eventTime)
  const esc = (v: string) => v.replace(/[\\,;]/g, (c) => '\\' + c).replace(/\n/g, '\\n')
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//SMS Research Forum//Events//EN',
    'BEGIN:VEVENT',
    `UID:${p.url}`,
    `DTSTAMP:${stamp(new Date())}`,
    t.timed ? `DTSTART:${stamp(t.start)}` : `DTSTART;VALUE=DATE:${ymd(t.start)}`,
    t.timed ? `DTEND:${stamp(t.end)}` : `DTEND;VALUE=DATE:${ymd(t.end)}`,
    `SUMMARY:${esc(p.title)}`,
    `DESCRIPTION:${esc(p.url)}`,
    p.eventMode ? `LOCATION:${esc(p.eventMode)}` : '',
    `URL:${p.url}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].filter(Boolean)
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(lines.join('\r\n'))}`
}

const button =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition'

export default function EventActions(props: EventActionsProps) {
  const { title, url, eventDate, eventEndDate } = props
  const [upcoming, setUpcoming] = useState(false)
  const [canShare, setCanShare] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    setCanShare(typeof navigator !== 'undefined' && !!navigator.share)
    if (eventDate) setUpcoming(Date.now() < eventEndsAt(eventDate, eventEndDate))
  }, [eventDate, eventEndDate])

  const share = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title, url })
        return
      }
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Share sheet dismissed or clipboard blocked: nothing to do
    }
  }

  const whatsapp = `https://wa.me/?text=${encodeURIComponent(`${title}\n${url}`)}`
  const fileName = `${title
    .replace(/[^a-z0-9]+/gi, '-')
    .toLowerCase()
    .slice(0, 60)}.ics`

  return (
    <div className="flex flex-wrap gap-2">
      {upcoming && eventDate && (
        <>
          <a
            href={googleCalendarUrl(props)}
            target="_blank"
            rel="noopener noreferrer"
            className={`${button} bg-navy-900 hover:bg-navy-800 text-white`}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <rect x="3" y="5" width="18" height="16" rx="2" />
              <path d="M16 3v4M8 3v4M3 11h18" />
            </svg>
            Add to calendar
          </a>
          <a
            href={icsDataUrl(props)}
            download={fileName}
            className={`${button} border border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800`}
          >
            .ics (iPhone / Outlook)
          </a>
        </>
      )}
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className={`${button} bg-[#25D366] text-white hover:bg-[#1ebe5b]`}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
          <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.5h-.01a9.43 9.43 0 0 1-4.8-1.32l-.35-.2-3.57.93.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.24-9.44 9.45-9.44a9.38 9.38 0 0 1 6.68 2.77 9.38 9.38 0 0 1 2.76 6.68c0 5.21-4.24 9.44-9.44 9.44m8.04-17.48A11.3 11.3 0 0 0 12.05.7C5.78.7.68 5.8.68 12.06c0 2 .52 3.96 1.52 5.68L.58 23.7l6.1-1.6a11.33 11.33 0 0 0 5.37 1.37h.01c6.26 0 11.37-5.1 11.37-11.37 0-3.04-1.18-5.89-3.34-8.04" />
        </svg>
        Share on WhatsApp
      </a>
      <button
        type="button"
        onClick={share}
        className={`${button} border border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800`}
      >
        {copied ? 'Link copied' : canShare ? 'Share' : 'Copy link'}
      </button>
    </div>
  )
}
