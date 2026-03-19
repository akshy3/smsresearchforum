import Link from '@/components/Link'
import { genPageMetadata } from 'app/seo'
import { conference2026 } from '@/data/conferenceData'
import ConferenceSectionNav from '@/components/ConferenceSectionNav'

export const metadata = genPageMetadata({
  title: `${conference2026.shortTitle} - Participation`,
  description: conference2026.formatSummary,
  image: conference2026.heroImage,
})

export default function ConferenceParticipationPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <ConferenceSectionNav />

      <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 uppercase dark:text-sky-300">
            Participation Modes
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Registering and Presenting
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-gray-300">
            {conference2026.formatSummary}
          </p>
          <div className="mt-5 rounded-2xl bg-slate-50 p-4 dark:bg-gray-800/70">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              Registration status
            </p>
            <p className="mt-2 text-sm text-slate-600 dark:text-gray-300">
              Registration is now open for both offline participation and online conference paper
              presentation. Please choose the correct form based on your mode of participation.
            </p>
          </div>
          <div className="mt-5 grid gap-4">
            {conference2026.registrationLinks.map((registration) => (
              <div
                key={registration.href}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-gray-700 dark:bg-gray-800/70"
              >
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  {registration.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-gray-300">
                  {registration.note}
                </p>
                <div className="mt-4">
                  <Link
                    href={registration.href}
                    className="inline-flex rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_36px_-16px_rgba(14,165,233,0.9)] transition hover:opacity-95"
                  >
                    Open Registration Form
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={conference2026.submissionInterestLink}
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              Contact Organizers
            </Link>
          </div>
        </article>

        <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 uppercase dark:text-sky-300">
            Fee Structure
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Registration Fees
          </h2>
          <div className="mt-6 space-y-3">
            {conference2026.registrationFees.map((fee) => (
              <div
                key={fee.label}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 dark:border-gray-700 dark:bg-gray-800/70"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {fee.label}
                  </p>
                  <p className="text-sm font-semibold text-slate-700 dark:text-gray-200">
                    {fee.value}
                  </p>
                </div>
                {fee.note && (
                  <p className="mt-2 text-sm text-slate-600 dark:text-gray-300">{fee.note}</p>
                )}
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="mt-8 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
        <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 uppercase dark:text-sky-300">
          Contacts
        </p>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Organizing Team Contacts
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {conference2026.contacts.map((contact) => (
            <div
              key={contact.label}
              className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 dark:border-gray-700 dark:bg-gray-800/70"
            >
              <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-gray-400">
                {contact.label}
              </p>
              <Link
                href={contact.href}
                className="mt-2 inline-block text-sm font-semibold text-sky-700 hover:text-sky-800 dark:text-sky-300 dark:hover:text-sky-200"
              >
                {contact.value}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
