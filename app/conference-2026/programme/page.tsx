import Image from 'next/image'
import Link from '@/components/Link'
import { genPageMetadata } from 'app/seo'
import { conference2026 } from '@/data/conferenceData'
import ConferenceSectionNav from '@/components/ConferenceSectionNav'

export const metadata = genPageMetadata({
  title: `${conference2026.shortTitle} - Programme`,
  description: 'Explore the conference workshops and Meet the Editors session in the programme.',
  image: conference2026.heroImage,
})

export default function ConferenceProgrammePage() {
  const workshops = conference2026.activities.find((activity) => activity.title === 'Workshops')
  const meetTheEditors = conference2026.activities.find(
    (activity) => activity.title === 'Meet the Editors'
  )

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <ConferenceSectionNav />

      <section className="mt-8 rounded-[1.75rem] border border-slate-300/70 bg-[linear-gradient(135deg,#e8eef7_0%,#dde6f1_100%)] p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
        <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 uppercase dark:text-sky-300">
          Conference Programme
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Workshops and Meet the Editors
        </h1>
        <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-700 sm:text-base dark:text-gray-300">
          This programme page highlights the two featured special sessions in the conference:
          workshops for hands-on learning and Meet the Editors for publication-focused dialogue.
        </p>
      </section>

      <section className="mt-8 rounded-[1.75rem] border border-slate-300/70 bg-[linear-gradient(135deg,#edf2f8_0%,#e3ebf4_100%)] p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 uppercase dark:text-sky-300">
            Featured Programme
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Meet the Editors and Workshops
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base dark:text-gray-300">
            These featured sessions bring publication-focused conversation and hands-on learning
            into the same conference programme. Meet the Editors anchors the academic dialogue,
            while the workshops extend that experience through focused practical sessions.
          </p>
        </div>

        {meetTheEditors && (
          <div className="mt-6">
            <article className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/80 shadow-sm dark:border-gray-700 dark:bg-gray-800/70">
              {meetTheEditors.image && (
                <div className="relative aspect-[16/10] w-full bg-slate-100 dark:bg-gray-900">
                  <Image
                    src={meetTheEditors.image}
                    alt="Meet the Editors flyer for Conference and Colloquium 2026"
                    fill
                    className="object-contain"
                  />
                </div>
              )}

              <div className="p-6">
                <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 uppercase dark:text-sky-300">
                  Lead Session
                </p>
                <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  {meetTheEditors.title}
                </h3>
                {meetTheEditors.subtitle && (
                  <p className="mt-4 text-xl leading-snug font-semibold text-slate-800 dark:text-gray-100">
                    {meetTheEditors.subtitle}
                  </p>
                )}
                <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base dark:text-gray-300">
                  {meetTheEditors.summary}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {meetTheEditors.dateTime && (
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 dark:border-gray-700 dark:bg-gray-900/70">
                      <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-gray-400">
                        Date and Time
                      </p>
                      <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                        {meetTheEditors.dateTime}
                      </p>
                    </div>
                  )}
                  {meetTheEditors.venue && (
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 dark:border-gray-700 dark:bg-gray-900/70">
                      <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-gray-400">
                        Venue
                      </p>
                      <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                        {meetTheEditors.venue}
                      </p>
                    </div>
                  )}
                </div>

                {meetTheEditors.speakers && (
                  <div className="mt-6">
                    <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase dark:text-gray-400">
                      Journal Editors
                    </p>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      {meetTheEditors.speakers.map((speaker) => (
                        <article
                          key={speaker.name}
                          className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 dark:border-gray-700 dark:bg-gray-900/70"
                        >
                          <h4 className="text-base font-bold text-slate-900 dark:text-white">
                            {speaker.name}
                          </h4>
                          <p className="mt-2 text-sm font-semibold text-slate-700 dark:text-gray-200">
                            {speaker.role}
                          </p>
                          <p className="mt-1 text-sm text-slate-600 dark:text-gray-300">
                            {speaker.affiliation}
                          </p>
                        </article>
                      ))}
                    </div>
                  </div>
                )}

                {meetTheEditors.moderator && (
                  <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 dark:border-gray-700 dark:bg-gray-900/70">
                    <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase dark:text-gray-400">
                      Moderator
                    </p>
                    <h4 className="mt-2 text-base font-bold text-slate-900 dark:text-white">
                      {meetTheEditors.moderator.name}
                    </h4>
                    <p className="mt-2 text-sm font-semibold text-slate-700 dark:text-gray-200">
                      {meetTheEditors.moderator.role}
                    </p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-gray-300">
                      {meetTheEditors.moderator.affiliation}
                    </p>
                  </div>
                )}
              </div>
            </article>
          </div>
        )}

        {workshops?.sessions && (
          <div className="mt-8">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 uppercase dark:text-sky-300">
                Workshops
              </p>
              <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Workshop Sessions in the Programme
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base dark:text-gray-300">
                The workshop segment combines holistic research design and case-based learning with
                sessions led by senior academic experts. These sessions complement the conference
                and colloquium by offering hands-on learning for scholars and faculty members.
              </p>
            </div>

            <div className="mt-6 grid gap-4 xl:grid-cols-2">
              {workshops.sessions.map((session) => (
                <article
                  key={session.title}
                  className="overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/80 shadow-sm dark:border-gray-700 dark:bg-gray-800/70"
                >
                  {session.image && (
                    <div className="relative aspect-[4/5] w-full bg-slate-100 dark:bg-gray-900">
                      <Image
                        src={session.image}
                        alt={`${session.title} workshop flyer`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase dark:text-gray-400">
                      Workshop
                    </p>
                    <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                      {session.title}
                    </h3>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 dark:border-gray-700 dark:bg-gray-900/70">
                        <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-gray-400">
                          Date and Time
                        </p>
                        <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                          {session.dateTime}
                        </p>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 dark:border-gray-700 dark:bg-gray-900/70">
                        <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-gray-400">
                          Venue
                        </p>
                        <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                          {session.venue}
                        </p>
                      </div>
                    </div>
                    <div className="mt-5 rounded-2xl bg-slate-50 px-4 py-4 dark:bg-gray-900/70">
                      <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase dark:text-gray-400">
                        Resource Person
                      </p>
                      <h4 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
                        {session.speaker.name}
                      </h4>
                      <p className="mt-2 text-sm font-semibold text-slate-700 dark:text-gray-200">
                        {session.speaker.role}
                      </p>
                      <p className="mt-1 text-sm text-slate-600 dark:text-gray-300">
                        {session.speaker.affiliation}
                      </p>
                    </div>
                    {session.highlights && (
                      <ul className="mt-5 space-y-3">
                        {session.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-3 text-sm leading-relaxed text-slate-700 dark:text-gray-300"
                          >
                            <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-sky-500" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </section>

      <section className="mt-8 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
        <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 uppercase dark:text-sky-300">
          Next Steps
        </p>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Register and Prepare
        </h2>
        <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-700 sm:text-base dark:text-gray-300">
          Participants can review the programme here, then move to the participation and conference
          paper sections for registration, submission guidance, and contact information.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/conference-2026/participation"
            className="inline-flex rounded-full bg-[#3A4A6B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#334361]"
          >
            View Participation Options
          </Link>
          <Link
            href="/conference-2026/conference-papers"
            className="inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            Review Paper Guidelines
          </Link>
        </div>
      </section>
    </div>
  )
}
