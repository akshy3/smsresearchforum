'use client'

import { useEffect, useState } from 'react'
import { eventEndsAt, formatEventDate } from '@/lib/events'

interface EventDateProps {
  start?: string
  end?: string
}

// Upcoming / Past is worked out in the visitor's browser, so an event stops
// showing as upcoming once it's over, without waiting for a new deploy.
export default function EventDate({ start, end }: EventDateProps) {
  const [upcoming, setUpcoming] = useState<boolean | null>(null)

  useEffect(() => {
    if (start) setUpcoming(Date.now() < eventEndsAt(start, end))
  }, [start, end])

  if (!start) return null

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
        Event: <time dateTime={start}>{formatEventDate(start, end)}</time>
      </span>
    </span>
  )
}
