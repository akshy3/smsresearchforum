import { genPageMetadata } from 'app/seo'
import { conference2026 } from '@/data/conferenceData'
import ConferenceSectionNav from '@/components/ConferenceSectionNav'

export const metadata = genPageMetadata({
  title: `${conference2026.shortTitle} - Programme Schedule`,
  description:
    'Full programme schedule for the International Conference & Doctoral Colloquium 2026.',
})

const day1 = {
  label: 'Day 1',
  date: '15 May 2026',
  venue: 'Seminar Complex',
  sessions: [
    { time: '08:30 AM – 09:30 AM', title: 'Registration' },
    { time: '09:30 AM – 10:45 AM', title: 'Inaugural Ceremony' },
    { time: '11:15 AM – 01:00 PM', title: 'Meet the Editors Session' },
    { time: '02:00 PM – 05:00 PM', title: 'Workshop', tag: 'Workshop', venue: 'Seminar Complex' },
    { time: '07:00 PM – 09:00 PM', title: 'Cultural Night & Dinner' },
  ],
}

const day2 = {
  label: 'Day 2',
  date: '16 May 2026',
  venue: 'SMS (FN) & Seminar Complex (AN)',
  sessions: [
    {
      time: '09:30 AM – 01:00 PM',
      title: 'Paper Presentation Sessions & Doctoral Colloquium',
      subsections: [
        {
          label: 'Offline Paper Presentations',
          note: 'SMS',
          tracks: [
            'Track 1 – Finance',
            'Track 2 – Human Resource',
            'Track 3 – Marketing',
            'Track 4 & 5 – Operations, Knowledge Systems & Interdisciplinary Research in Management, Strategy & Innovation',
          ],
        },
        {
          label: 'Online Paper Presentations',
          note: 'Google Meet',
          tracks: [
            'Track 1 – Finance',
            'Track 2 – Human Resource',
            'Track 3 – Marketing',
            'Track 4 & 5 – Operations, Knowledge Systems & Interdisciplinary Research in Management, Strategy & Innovation',
          ],
        },
        {
          label: 'Doctoral Colloquium',
          note: 'SMS',
          tracks: ['Single presentation track for all colloquium participants'],
        },
      ],
    },
    {
      time: '02:00 PM – 04:00 PM',
      title: 'Workshop Session',
      venue: 'Seminar Complex',
      tag: 'Workshop',
    },
    { time: '04:00 PM – 04:30 PM', title: 'Valedictory Ceremony' },
  ],
}

type Subsection = { label: string; note: string; tracks: string[] }
type Session = {
  time: string
  title: string
  tag?: string
  venue?: string
  subsections?: Subsection[]
}

function SessionRow({ session }: { session: Session }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/70 bg-white/80 shadow-sm dark:border-gray-700 dark:bg-gray-800/70">
      <div className="flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-start sm:gap-5">
        <p className="shrink-0 text-sm font-semibold text-slate-500 tabular-nums sm:w-44 dark:text-gray-400">
          {session.time}
        </p>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-sm font-bold text-slate-900 dark:text-white">{session.title}</p>
            {session.tag && (
              <span className="rounded-full bg-sky-100 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-sky-700 uppercase dark:bg-sky-900/40 dark:text-sky-300">
                {session.tag}
              </span>
            )}
          </div>
          {session.venue && (
            <p className="mt-1 text-xs font-medium text-slate-500 dark:text-gray-400">
              {session.venue}
            </p>
          )}
          {session.subsections && (
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {session.subsections.map((sub) => (
                <div
                  key={sub.label}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-900/60"
                >
                  <p className="text-xs font-bold text-slate-800 dark:text-white">{sub.label}</p>
                  <p className="mt-0.5 text-[11px] font-semibold tracking-wide text-sky-600 uppercase dark:text-sky-400">
                    {sub.note}
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {sub.tracks.map((track) => (
                      <li
                        key={track}
                        className="flex items-start gap-2 text-xs leading-snug text-slate-700 dark:text-gray-300"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                        {track}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

type Day = typeof day1 | typeof day2

function DaySchedule({ day }: { day: Day }) {
  return (
    <section className="rounded-[1.75rem] border border-slate-300/70 bg-[linear-gradient(135deg,#edf2f8_0%,#e3ebf4_100%)] p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 uppercase dark:text-sky-300">
            {day.label}
          </p>
          <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {day.date}
          </h2>
        </div>
        <div className="rounded-2xl border border-white/70 bg-white/70 px-4 py-2 dark:border-gray-700 dark:bg-gray-800/70">
          <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-gray-400">
            Venue
          </p>
          <p className="mt-0.5 text-sm font-semibold text-slate-900 dark:text-white">{day.venue}</p>
        </div>
      </div>
      <div className="mt-5 space-y-3">
        {day.sessions.map((session) => (
          <SessionRow key={session.time + session.title} session={session} />
        ))}
      </div>
    </section>
  )
}

export default function ConferenceSchedulePage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <ConferenceSectionNav />

      <section className="mt-8 rounded-[1.75rem] border border-slate-300/70 bg-[linear-gradient(135deg,#e8eef7_0%,#dde6f1_100%)] p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
        <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 uppercase dark:text-sky-300">
          Programme
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Programme Schedule
        </h1>
        <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-700 sm:text-base dark:text-gray-300">
          Full schedule for the International Conference &amp; Doctoral Colloquium 2026, held on
          15–16 May 2026 at the School of Management Studies, CUSAT.
        </p>
      </section>

      <div className="mt-6 space-y-6">
        <DaySchedule day={day1} />
        <DaySchedule day={day2} />
      </div>
    </div>
  )
}
