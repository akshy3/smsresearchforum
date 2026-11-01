'use client'

import { useEffect, useState } from 'react'
import Link from '@/components/Link'
import { eventEndsAt, formatEventDate } from '@/lib/events'

export interface EventSummary {
  title: string
  path: string
  eventDate: string
  eventEndDate?: string
  eventTime?: string
  eventMode?: string
}

// The soonest event that hasn't ended, chosen in the visitor's browser so the
// card moves on (or disappears) by itself once an event is over.
export default function NextEvent({ events }: { events: EventSummary[] }) {
  const [next, setNext] = useState<EventSummary | null>(null)

  useEffect(() => {
    const now = Date.now()
    const upcoming = events
      .filter((e) => now < eventEndsAt(e.eventDate, e.eventEndDate))
      .sort((a, b) => a.eventDate.localeCompare(b.eventDate))
    setNext(upcoming[0] || null)
  }, [events])

  if (!next) return null

  const details = [
    formatEventDate(next.eventDate, next.eventEndDate),
    next.eventTime,
    next.eventMode,
  ].filter(Boolean)

  return (
    <section className="animate-fade-up px-4 pt-6 md:px-10" aria-label="Next event">
      <Link
        href={`/${next.path}`}
        className="group border-l-gold-400 hover:border-l-gold-500 flex flex-col gap-4 rounded-2xl border border-l-[6px] border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center sm:justify-between sm:p-6 dark:border-gray-700 dark:bg-gray-900"
      >
        <div className="min-w-0">
          <p className="text-gold-700 dark:text-gold-300 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="bg-gold-400 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 motion-reduce:animate-none" />
              <span className="bg-gold-500 relative inline-flex h-2 w-2 rounded-full" />
            </span>
            Next event
          </p>
          <h2 className="mt-2 text-xl leading-snug font-semibold tracking-tight text-slate-900 sm:text-2xl dark:text-white">
            {next.title}
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-gray-300">{details.join(' · ')}</p>
        </div>
        <span className="bg-gold-400 text-navy-950 group-hover:bg-gold-300 inline-flex shrink-0 items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition">
          View details &rarr;
        </span>
      </Link>
    </section>
  )
}
