import Image from 'next/image'
import Link from '@/components/Link'
import { genPageMetadata } from 'app/seo'
import { conference2026 } from '@/data/conferenceData'
import ConferenceSectionNav from '@/components/ConferenceSectionNav'

export const metadata = genPageMetadata({
  title: conference2026.title,
  description: conference2026.subtitle,
  image: conference2026.heroImage,
})

export default function Conference2026Page() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <ConferenceSectionNav />

      <section className="overflow-hidden rounded-[2rem] border border-slate-300/70 bg-[linear-gradient(135deg,#e8eef7_0%,#dfe7f2_46%,#d4dfed_100%)] shadow-[0_24px_80px_-36px_rgba(15,23,42,0.28)] dark:border-gray-700 dark:bg-gray-900">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-6 sm:p-8 lg:p-10">
            <p className="text-sm font-semibold tracking-[0.22em] text-sky-700 uppercase dark:text-sky-300">
              SMS Research Forum
            </p>
            <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
              {conference2026.title}
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-base dark:text-gray-300">
              {conference2026.subtitle}
            </p>
            <p className="mt-3 text-sm font-semibold tracking-[0.18em] text-slate-600 uppercase dark:text-gray-400">
              {conference2026.tagline}
            </p>

            <div className="mt-6 rounded-3xl bg-[linear-gradient(135deg,#d8e2ef_0%,#e8eef7_52%,#dbe6f2_100%)] p-5 dark:from-sky-950/30 dark:via-gray-900 dark:to-cyan-950/20">
              <p className="text-xs font-semibold tracking-[0.18em] text-sky-800 uppercase dark:text-sky-300">
                Conference Theme
              </p>
              <p className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
                {conference2026.theme}
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/70 bg-white/62 px-4 py-4 dark:border-gray-700 dark:bg-gray-800/70">
                <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-gray-400">
                  Venue
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                  {conference2026.venue}
                </p>
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/62 px-4 py-4 dark:border-gray-700 dark:bg-gray-800/70">
                <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-gray-400">
                  Event Dates
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                  {conference2026.eventDates}
                </p>
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/62 px-4 py-4 dark:border-gray-700 dark:bg-gray-800/70">
                <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-gray-400">
                  Abstract Deadline
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                  {conference2026.abstractSubmissionDeadline}
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/conference-2026/call-for-papers"
                className="rounded-full bg-[#3A4A6B] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_36px_-16px_rgba(12,19,37,0.35)] transition hover:bg-[#334361]"
              >
                Explore Tracks
              </Link>
              <Link
                href="/conference-2026/participation"
                className="rounded-full border border-slate-300 bg-white/72 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                Participation Details
              </Link>
            </div>
          </div>

          <div className="relative min-h-[320px]">
            <Image
              src={conference2026.heroImage}
              alt={conference2026.title}
              fill
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" />
          </div>
        </div>
      </section>

      <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <article className="rounded-[1.75rem] border border-slate-300/70 bg-[linear-gradient(135deg,#eef2f8_0%,#e4ebf4_100%)] p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 uppercase dark:text-sky-300">
            Conference Overview
          </p>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base dark:text-gray-300">
            {conference2026.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-5 rounded-2xl bg-white/70 p-4 dark:bg-gray-800/70">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              Presentation Mode
            </p>
            <p className="mt-2 text-sm text-slate-700 dark:text-gray-300">
              {conference2026.formatSummary}
            </p>
          </div>
        </article>

        <article className="rounded-[1.75rem] border border-slate-300/70 bg-[linear-gradient(135deg,#eef2f8_0%,#e4ebf4_100%)] p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 uppercase dark:text-sky-300">
            Call for Abstracts
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base dark:text-gray-300">
            {conference2026.callForAbstracts}
          </p>
          <div className="mt-6 rounded-2xl bg-white/70 p-4 dark:bg-gray-800/70">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              Submission update
            </p>
            <p className="mt-2 text-sm text-slate-700 dark:text-gray-300">
              {conference2026.submissionFormatNote}
            </p>
          </div>
        </article>
      </section>

      <section className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <article className="rounded-[1.75rem] border border-slate-300/70 bg-[linear-gradient(135deg,#edf2f8_0%,#e1e9f3_100%)] p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 uppercase dark:text-sky-300">
                Key Dates
              </p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Important Timeline
              </h2>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {conference2026.keyDates.map((item) => (
              <div
                key={item.label}
                className="flex items-start justify-between gap-4 rounded-2xl border border-white/70 bg-white/70 px-4 py-4 dark:border-gray-700 dark:bg-gray-800/70"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {item.label}
                  </p>
                  {item.isTentative && (
                    <p className="mt-1 text-xs font-medium tracking-wide text-amber-700 uppercase dark:text-amber-300">
                      Tentative / awaiting confirmation
                    </p>
                  )}
                </div>
                <p className="text-right text-sm font-semibold text-slate-700 dark:text-gray-300">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-[1.75rem] border border-slate-400/70 bg-[linear-gradient(135deg,#d6e0ed_0%,#cad7e6_100%)] p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 uppercase dark:text-sky-300">
            Tracks and Themes
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Suggested Submission Areas
          </h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {conference2026.tracks.map((track) => (
              <div
                key={track.slug}
                className="rounded-2xl border border-white/70 bg-white/58 px-4 py-4 text-sm font-medium text-slate-800 shadow-sm dark:border-gray-700 dark:bg-gray-800/70 dark:text-gray-200"
              >
                <p className="font-semibold">{track.title}</p>
                <p className="mt-1 text-xs font-medium text-slate-600 dark:text-gray-400">
                  {track.subtitle}
                </p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 uppercase dark:text-sky-300">
            Conference Highlights
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            What Participants Can Expect
          </h2>
          <ul className="mt-6 space-y-3">
            {conference2026.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-3 text-sm text-slate-700 dark:text-gray-300"
              >
                <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-sky-500" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 uppercase dark:text-sky-300">
            Registration Fees
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Fee Structure
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
                  <p className="text-sm font-semibold text-slate-800 dark:text-gray-200">
                    {fee.value}
                  </p>
                </div>
                {fee.note && (
                  <p className="mt-2 text-sm text-slate-700 dark:text-gray-300">{fee.note}</p>
                )}
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-700 dark:text-gray-300">
            Non-presenting participants, including early-stage researchers, postgraduate students,
            and faculty, are also welcome to attend the conference.
          </p>
        </article>
      </section>

      <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 uppercase dark:text-sky-300">
            Doctoral Colloquium
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Eligibility and Submission Scope
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-700 dark:text-gray-300">
            <p>{conference2026.doctoralColloquium.eligibility}</p>
            <p>{conference2026.doctoralColloquium.stageRequirement}</p>
            <p>{conference2026.doctoralColloquium.format}</p>
          </div>
          <div className="mt-5">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              The abstract should include:
            </p>
            <ul className="mt-3 space-y-2">
              {conference2026.doctoralColloquium.abstractIncludes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-slate-700 dark:text-gray-300"
                >
                  <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-sky-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 uppercase dark:text-sky-300">
            Doctoral Focus Areas
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Areas Welcomed in the Colloquium
          </h2>
          <div className="mt-6 grid gap-3">
            {conference2026.doctoralColloquium.focusAreas.map((area) => (
              <div
                key={area}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-800 dark:border-gray-700 dark:bg-gray-800/70 dark:text-gray-200"
              >
                {area}
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 uppercase dark:text-sky-300">
            Conference Navigation
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Explore the Conference Section
          </h2>
          <div className="mt-5 grid gap-3">
            <Link
              href="/conference-2026/call-for-papers"
              className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-semibold text-slate-800 hover:border-sky-300 hover:text-sky-700 dark:border-gray-700 dark:bg-gray-800/70 dark:text-gray-200 dark:hover:text-sky-300"
            >
              Call for Papers
            </Link>
            <Link
              href="/conference-2026/doctoral-colloquium"
              className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-semibold text-slate-800 hover:border-sky-300 hover:text-sky-700 dark:border-gray-700 dark:bg-gray-800/70 dark:text-gray-200 dark:hover:text-sky-300"
            >
              Doctoral Colloquium
            </Link>
            <Link
              href="/conference-2026/participation"
              className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-semibold text-slate-800 hover:border-sky-300 hover:text-sky-700 dark:border-gray-700 dark:bg-gray-800/70 dark:text-gray-200 dark:hover:text-sky-300"
            >
              Participation
            </Link>
          </div>
        </article>

        <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 uppercase dark:text-sky-300">
            Contact
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Stay in Touch
          </h2>
          <div className="mt-5 space-y-3">
            {conference2026.contacts.map((contact) => (
              <div
                key={contact.label}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 dark:border-gray-700 dark:bg-gray-800/70"
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
        </article>
      </section>
    </div>
  )
}
