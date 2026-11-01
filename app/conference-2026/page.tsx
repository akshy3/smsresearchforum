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

      <section className="overflow-hidden rounded-[2rem] border border-slate-300/70 bg-[#D9E3EF] shadow-[0_24px_80px_-36px_rgba(15,23,42,0.28)] dark:border-gray-700 dark:bg-gray-900">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-6 sm:p-8 lg:p-10">
            <p className="text-sm font-semibold tracking-[0.22em] text-sky-700 uppercase dark:text-sky-300">
              SMS Research Forum
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
              {conference2026.title}
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-base dark:text-gray-300">
              {conference2026.subtitle}
            </p>
            <p className="mt-3 text-sm font-semibold tracking-[0.14em] text-slate-600 uppercase dark:text-gray-400">
              {conference2026.tagline}
            </p>

            <div className="dark:to-gold-950/20 mt-6 rounded-3xl bg-[linear-gradient(135deg,#d8e2ef_0%,#e8eef7_52%,#dbe6f2_100%)] p-5 dark:from-sky-950/30 dark:via-gray-900">
              <p className="text-xs font-semibold tracking-[0.14em] text-sky-800 uppercase dark:text-sky-300">
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
                  Proceedings
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                  Published
                </p>
              </div>
            </div>

            <div className="border-gold-300 from-gold-50 to-navy-50 dark:border-gold-900/50 mt-6 rounded-[1.75rem] border bg-gradient-to-br via-white p-5 shadow-[0_18px_40px_-28px_rgba(12,24,48,0.3)] dark:bg-[linear-gradient(135deg,rgba(57,33,12,0.4)_0%,rgba(17,31,57,0.4)_100%)]">
              <p className="text-gold-700 dark:text-gold-300 text-xs font-semibold tracking-[0.14em] uppercase">
                Conference Concluded
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Proceedings are now available
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-gray-300">
                {conference2026.proceedings.description}
              </p>
              <div className="mt-5">
                <Link
                  href={conference2026.proceedings.href}
                  className="bg-navy-900 hover:bg-navy-800 inline-flex rounded-full px-5 py-3 text-sm font-semibold text-white transition"
                >
                  {conference2026.proceedings.cta}
                </Link>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={conference2026.proceedings.href}
                className="bg-navy-900 hover:bg-navy-800 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_36px_-16px_rgba(12,19,37,0.35)] transition"
              >
                Download Proceedings
              </Link>
              <Link
                href="/conference-2026/conference-papers"
                className="rounded-full border border-slate-300 bg-white/72 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                Conference Papers
              </Link>
              <Link
                href="/conference-2026/participation"
                className="rounded-full border border-slate-300 bg-white/72 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                Participation Details
              </Link>
            </div>
            <p className="mt-4 text-sm font-medium text-slate-600 dark:text-gray-300">
              This page is retained as the archive for conference details, programme information,
              participation guidance, and published proceedings.
            </p>
            <p className="mt-2 text-sm font-medium text-slate-700 dark:text-gray-200">
              Certificates were issued only to registered participants.
            </p>
          </div>

          <div className="relative min-h-[260px] bg-[#D9E3EF] sm:min-h-[320px] lg:min-h-full dark:bg-gray-800">
            <Image
              src={conference2026.heroImage}
              alt={conference2026.title}
              fill
              className="h-full w-full object-contain object-center"
            />
          </div>
        </div>
      </section>

      <section
        id="proceedings"
        className="mt-8 rounded-[1.75rem] border border-slate-300/70 bg-[linear-gradient(135deg,#eef3f8_0%,#e4edf6_100%)] p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900"
      >
        <p className="text-xs font-semibold tracking-[0.14em] text-sky-700 uppercase dark:text-sky-300">
          Conference Archive
        </p>
        <div className="mt-2 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
              {conference2026.proceedings.title}
            </h2>
            <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-700 sm:text-base dark:text-gray-300">
              {conference2026.proceedings.description}
            </p>
          </div>
          <Link
            href={conference2026.proceedings.href}
            className="bg-navy-900 hover:bg-navy-800 inline-flex rounded-full px-5 py-3 text-sm font-semibold text-white transition"
          >
            {conference2026.proceedings.cta}
          </Link>
        </div>
      </section>

      <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <article className="rounded-[1.75rem] border border-slate-300/70 bg-[linear-gradient(135deg,#eef2f8_0%,#e4ebf4_100%)] p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <p className="text-xs font-semibold tracking-[0.14em] text-sky-700 uppercase dark:text-sky-300">
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
          <p className="text-xs font-semibold tracking-[0.14em] text-sky-700 uppercase dark:text-sky-300">
            Conference Papers
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Tracks and Submission Guidance
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base dark:text-gray-300">
            Browse conference tracks, submission areas, and paper guidelines for authors preparing
            abstracts and full papers under the conference theme.
          </p>
          <div className="mt-6 rounded-2xl bg-white/70 p-4 dark:bg-gray-800/70">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              Submission guidance
            </p>
            <p className="mt-2 text-sm text-slate-700 dark:text-gray-300">
              {conference2026.submissionFormatNote}
            </p>
          </div>
          <div className="mt-5">
            <div className="flex flex-wrap gap-3">
              <Link
                href="/conference-2026/conference-papers#guidelines"
                className="bg-navy-900 hover:bg-navy-800 inline-flex rounded-full px-5 py-3 text-sm font-semibold text-white transition"
              >
                Paper Guidelines
              </Link>
              <Link
                href="/conference-2026/conference-papers#tracks"
                className="inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                Explore Tracks
              </Link>
            </div>
          </div>
        </article>
      </section>

      <section className="mt-8">
        <article className="from-navy-50 to-gold-50 rounded-[1.75rem] border border-slate-300/70 bg-gradient-to-br via-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <p className="text-xs font-semibold tracking-[0.14em] text-sky-700 uppercase dark:text-sky-300">
            Conference Timeline
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Key Submission and Registration Dates
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base dark:text-gray-300">
            The conference has concluded. Submission and registration dates are retained here as
            part of the event record for authors, participants, and future reference.
          </p>
          <div className="mt-5">
            <div className="rounded-2xl border border-white/70 bg-white/80 px-4 py-4 dark:border-gray-700 dark:bg-gray-800/70">
              <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-gray-400">
                Registration Closed
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                {conference2026.finalRegistrationDeadline}
              </p>
            </div>
          </div>
        </article>
      </section>

      <section className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <article className="rounded-[1.75rem] border border-slate-300/70 bg-[linear-gradient(135deg,#edf2f8_0%,#e1e9f3_100%)] p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold tracking-[0.14em] text-sky-700 uppercase dark:text-sky-300">
                Key Dates
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
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
                    <p className="text-gold-700 dark:text-gold-300 mt-1 text-xs font-medium tracking-wide uppercase">
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
          <p className="text-xs font-semibold tracking-[0.14em] text-sky-700 uppercase dark:text-sky-300">
            Conference Papers
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Tracks and Submission Areas
          </h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {conference2026.tracks.map((track, index) => (
              <div
                key={track.slug}
                className="rounded-2xl border border-white/70 bg-white/58 px-4 py-4 text-sm font-medium text-slate-800 shadow-sm dark:border-gray-700 dark:bg-gray-800/70 dark:text-gray-200"
              >
                <p className="font-semibold">
                  Track {index + 1}: {track.title}
                </p>
                <p className="mt-1 text-xs font-medium text-slate-600 dark:text-gray-400">
                  {track.subtitle}
                </p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="mt-8 rounded-[1.75rem] border border-slate-300/70 bg-[linear-gradient(135deg,#eef3f8_0%,#e4edf6_100%)] p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
        <p className="text-xs font-semibold tracking-[0.14em] text-sky-700 uppercase dark:text-sky-300">
          Publication Opportunities
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Journals Associated with Selected Full Papers
        </h2>
        <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-700 sm:text-base dark:text-gray-300">
          {conference2026.publicationOpportunities.note}
        </p>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {conference2026.publicationOpportunities.journals.map((journal) => (
            <article
              key={journal.journal}
              className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800/70"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {journal.journal}
              </h3>
              <p className="mt-3 text-sm font-semibold text-slate-700 dark:text-gray-200">
                {journal.indexing}
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-gray-300">{journal.publisher}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <p className="text-xs font-semibold tracking-[0.14em] text-sky-700 uppercase dark:text-sky-300">
            Featured Sessions
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
            What Participants Can Expect
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base dark:text-gray-300">
            The featured sessions currently highlight two special experiences for participants: the
            workshop series and the Meet the Editors session.
          </p>
          <div className="mt-6 grid gap-3">
            {conference2026.activities.map((activity) => (
              <article
                key={activity.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 dark:border-gray-700 dark:bg-gray-800/70"
              >
                <div className="flex flex-wrap items-center gap-2">
                  {activity.tag && (
                    <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold tracking-wide text-sky-800 uppercase dark:bg-gray-900 dark:text-sky-300">
                      {activity.tag}
                    </span>
                  )}
                  <span className="text-[11px] font-semibold tracking-wide text-slate-500 uppercase dark:text-gray-400">
                    {activity.format}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-semibold text-slate-900 dark:text-white">
                  {activity.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-gray-300">
                  {activity.summary}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-5">
            <Link
              href="/conference-2026/programme"
              className="bg-navy-900 hover:bg-navy-800 inline-flex rounded-full px-5 py-3 text-sm font-semibold text-white transition"
            >
              View Featured Sessions
            </Link>
          </div>
        </article>

        <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <p className="text-xs font-semibold tracking-[0.14em] text-sky-700 uppercase dark:text-sky-300">
            Registration Fees
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Participation Snapshot
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
          <div className="mt-5">
            <Link
              href="/conference-2026/participation"
              className="inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              View Participation Details
            </Link>
          </div>
        </article>
      </section>

      <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <p className="text-xs font-semibold tracking-[0.14em] text-sky-700 uppercase dark:text-sky-300">
            Doctoral Colloquium
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
            For Advanced Doctoral Scholars
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-700 dark:text-gray-300">
            <p>{conference2026.doctoralColloquium.eligibility}</p>
            <p>{conference2026.doctoralColloquium.stageRequirement}</p>
          </div>
          <div className="mt-5 rounded-2xl bg-slate-50 px-4 py-4 dark:bg-gray-800/70">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              Submission format
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-gray-300">
              {conference2026.doctoralColloquium.format}
            </p>
          </div>
          <div className="mt-5">
            <Link
              href="/conference-2026/doctoral-colloquium"
              className="bg-navy-900 hover:bg-navy-800 inline-flex rounded-full px-5 py-3 text-sm font-semibold text-white transition"
            >
              View Colloquium Guidelines
            </Link>
          </div>
        </article>

        <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <p className="text-xs font-semibold tracking-[0.14em] text-sky-700 uppercase dark:text-sky-300">
            Doctoral Focus Areas
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
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
          <p className="text-xs font-semibold tracking-[0.14em] text-sky-700 uppercase dark:text-sky-300">
            Conference Navigation
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Explore the Conference Section
          </h2>
          <div className="mt-5 grid gap-3">
            <Link
              href="/conference-2026/conference-papers"
              className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-semibold text-slate-800 hover:border-sky-300 hover:text-sky-700 dark:border-gray-700 dark:bg-gray-800/70 dark:text-gray-200 dark:hover:text-sky-300"
            >
              Conference Papers
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
          <p className="text-xs font-semibold tracking-[0.14em] text-sky-700 uppercase dark:text-sky-300">
            Contact
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
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
                {contact.name && (
                  <p className="mt-2 text-base font-semibold text-slate-900 dark:text-white">
                    {contact.name}
                  </p>
                )}
                {contact.value && (
                  <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                    {contact.value}
                  </p>
                )}
                {contact.note && (
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-gray-300">
                    {contact.note}
                  </p>
                )}
                <div className="mt-3 flex flex-wrap gap-3">
                  {contact.phone && (
                    <Link
                      href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                      className="inline-flex rounded-full border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-700 dark:border-gray-600 dark:text-gray-200 dark:hover:text-sky-300"
                    >
                      {contact.phone}
                    </Link>
                  )}
                  {contact.email && (
                    <Link
                      href={`mailto:${contact.email}`}
                      className="inline-flex rounded-full border border-slate-300 px-3 py-2 text-sm font-semibold text-sky-700 transition hover:border-sky-300 hover:text-sky-800 dark:border-gray-600 dark:text-sky-300 dark:hover:text-sky-200"
                    >
                      {contact.email}
                    </Link>
                  )}
                  {!contact.email && contact.href && contact.value && (
                    <Link
                      href={contact.href}
                      className="inline-flex rounded-full border border-slate-300 px-3 py-2 text-sm font-semibold text-sky-700 transition hover:border-sky-300 hover:text-sky-800 dark:border-gray-600 dark:text-sky-300 dark:hover:text-sky-200"
                    >
                      {contact.value}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  )
}
