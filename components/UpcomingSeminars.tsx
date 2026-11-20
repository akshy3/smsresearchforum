'use client'

import { useEffect, useState } from 'react'
import Link from '@/components/Link'
import { formatEventDate, googleCalendarUrl } from '@/lib/events'
import { SEMINAR_KIND_LABEL } from '@/lib/seminarInput'
import { type PublicSeminar, seminarCalendarEvent } from '@/lib/seminarCalendar'

// Published PhD seminars from today onwards, loaded in the browser so the list
// stays current without a redeploy. `limit` shows only the soonest few (home page).
export default function UpcomingSeminars({ limit }: { limit?: number }) {
  const [seminars, setSeminars] = useState<PublicSeminar[] | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    fetch('/api/seminars')
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then(setSeminars)
      .catch(() => setFailed(true))
  }, [])

  const isHome = limit !== undefined
  if (isHome && (!seminars || seminars.length === 0)) return null

  const shown = seminars ? (limit ? seminars.slice(0, limit) : seminars) : []

  return (
    <section aria-label="Upcoming PhD seminars" className={isHome ? 'px-4 pt-10 md:px-10' : ''}>
      {isHome && (
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-semibold tracking-[0.14em] text-sky-700 uppercase dark:text-sky-300">
              School of Management Studies
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
              Upcoming PhD seminars
            </h2>
          </div>
          <Link
            href="/seminars"
            className="text-sm font-semibold text-sky-700 hover:text-sky-800 dark:text-sky-300"
          >
            All seminars &rarr;
          </Link>
        </div>
      )}

      {!isHome && seminars === null && !failed && (
        <p className="text-sm text-slate-500 dark:text-gray-400">Loading seminars…</p>
      )}
      {!isHome && failed && (
        <p className="text-sm text-slate-500 dark:text-gray-400">
          Seminars could not be loaded right now. Please try again later.
        </p>
      )}
      {!isHome && seminars?.length === 0 && (
        <p className="rounded-2xl border border-dashed border-slate-300 px-5 py-8 text-center text-sm text-slate-600 dark:border-gray-600 dark:text-gray-300">
          No upcoming seminars have been announced yet.
        </p>
      )}

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {shown.map((s) => {
          const details = [s.date && formatEventDate(s.date), s.time, s.venue].filter(Boolean)
          return (
            <li
              key={s.id}
              id={`seminar-${s.id}`}
              className="border-l-gold-400 rounded-2xl border border-l-[6px] border-slate-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900"
            >
              <p className="text-gold-700 dark:text-gold-300 text-xs font-semibold tracking-[0.14em] uppercase">
                {SEMINAR_KIND_LABEL[s.kind] ?? 'PhD seminar'}
              </p>
              <h3 className="mt-2 text-lg leading-snug font-semibold text-slate-900 dark:text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-gray-200">
                {s.scholar}
                {s.guide && (
                  <span className="text-slate-500 dark:text-gray-400"> · Guide: {s.guide}</span>
                )}
              </p>
              <p className="mt-1 text-sm text-slate-600 dark:text-gray-300">
                {details.join(' · ')}
              </p>
              <div className="mt-3 flex flex-wrap gap-3 text-sm font-medium">
                {s.meetingLink && (
                  <a
                    href={s.meetingLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-700 hover:text-sky-800 dark:text-sky-300"
                  >
                    Join online
                  </a>
                )}
                {s.date && (
                  <>
                    <a
                      href={googleCalendarUrl(seminarCalendarEvent(s))}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sky-700 hover:text-sky-800 dark:text-sky-300"
                    >
                      Google Calendar
                    </a>
                    <a
                      href={`/api/seminars/${s.id}/ics`}
                      className="text-sky-700 hover:text-sky-800 dark:text-sky-300"
                    >
                      Apple / Outlook
                    </a>
                  </>
                )}
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
