import Link from '@/components/Link'
import ConferenceSectionNav from '@/components/ConferenceSectionNav'
import { conference2026 } from '@/data/conferenceData'

export default function ConferenceAbstractSubmitPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <ConferenceSectionNav />

      <section className="rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-white via-slate-50 to-cyan-50 p-6 shadow-sm sm:p-8 dark:border-gray-700 dark:from-gray-900 dark:via-gray-900 dark:to-sky-950/20">
        <p className="text-sm font-semibold tracking-[0.2em] text-sky-700 uppercase dark:text-sky-300">
          {conference2026.title}
        </p>
        <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          Abstract Submission Portal
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base dark:text-gray-300">
          The in-site submission workflow is not live yet, but this page now serves as the official
          guidance page for authors preparing abstracts and doctoral colloquium submissions.
        </p>
      </section>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <div className="rounded-3xl bg-gradient-to-r from-sky-50 to-cyan-50 p-6 dark:from-sky-950/30 dark:to-cyan-950/20">
            <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 uppercase dark:text-sky-300">
              Portal Status
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Submission portal opening soon
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-gray-300">
              {conference2026.submissionFormatNote}
            </p>
            <p className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">
              Last date to submit abstract: {conference2026.abstractSubmissionDeadline}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href={conference2026.submissionInterestLink}
                className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                Email Submission Interest
              </Link>
              <Link
                href="/conference-2026/call-for-papers"
                className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                View Call for Papers
              </Link>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-gray-700 dark:bg-gray-800/70">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              Doctoral colloquium abstract should include
            </p>
            <ul className="mt-4 space-y-2">
              {conference2026.doctoralColloquium.abstractIncludes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-slate-600 dark:text-gray-300"
                >
                  <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-sky-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {conference2026.tracks.map((track) => (
              <div
                key={track.slug}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700 dark:border-gray-700 dark:bg-gray-800/70 dark:text-gray-200"
              >
                <p>{track.title}</p>
                <p className="mt-1 text-xs font-medium text-slate-500 dark:text-gray-400">
                  {track.subtitle}
                </p>
              </div>
            ))}
          </div>
        </section>

        <aside className="space-y-6">
          <section className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
            <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 uppercase dark:text-sky-300">
              Before You Submit
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-gray-300">
              {conference2026.submissionGuidelines.map((guideline) => (
                <li key={guideline} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-sky-500" />
                  <span>{guideline}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-2xl bg-slate-50 px-4 py-4 dark:bg-gray-800/70">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                Doctoral colloquium format
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-gray-300">
                {conference2026.doctoralColloquium.format}
              </p>
            </div>
          </section>

          <section className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
            <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 uppercase dark:text-sky-300">
              Need Help?
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-gray-300">
              If you face any issue while submitting, contact the organizing team and mention that
              your query is about {conference2026.title}.
            </p>
            <div className="mt-5 space-y-3">
              {conference2026.contacts.map((contact) => (
                <div
                  key={contact.label}
                  className="rounded-2xl bg-slate-50 px-4 py-3 dark:bg-gray-800/70"
                >
                  <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-gray-400">
                    {contact.label}
                  </p>
                  {contact.href ? (
                    <Link
                      href={contact.href}
                      className="mt-2 inline-block text-sm font-semibold text-sky-700 hover:text-sky-800 dark:text-sky-300 dark:hover:text-sky-200"
                    >
                      {contact.value}
                    </Link>
                  ) : (
                    <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                      {contact.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  )
}
