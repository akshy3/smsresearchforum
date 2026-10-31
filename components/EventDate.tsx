'use client'

import { useEffect, useState } from 'react'
import siteMetadata from '@/data/siteMetadata'

const DAY_MS = 24 * 60 * 60 * 1000
const IST_OFFSET_MS = 5.5 * 60 * 60 * 1000

interface EventDateProps {
  start?: string
  end?: string
}

// Upcoming / Past is worked out in the visitor's browser, so an event stops
// showing as upcoming once it's over, without waiting for a new deploy.
export default function EventDate({ start, end }: EventDateProps) {
  const [upcoming, setUpcoming] = useState<boolean | null>(null)

  useEffect(() => {
    if (!start) return
    const endsAt = new Date(end || start).getTime() + DAY_MS - IST_OFFSET_MS // midnight IST after the last day
    setUpcoming(Date.now() < endsAt)
  }, [start, end])

  if (!start) return null

  const format = new Intl.DateTimeFormat(siteMetadata.locale, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  })
  const label = end
    ? format.formatRange(new Date(start), new Date(end))
    : format.format(new Date(start))

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${
        upcoming
          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200'
          : 'bg-slate-100 text-slate-600 dark:bg-gray-800 dark:text-gray-300'
      }`}
    >
      {upcoming !== null && (
        <span className="uppercase">{upcoming ? 'Upcoming' : 'Past event'}</span>
      )}
      <span>
        Event: <time dateTime={start}>{label}</time>
      </span>
    </span>
  )
}
