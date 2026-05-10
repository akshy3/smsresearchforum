import Image from 'next/image'
import { genPageMetadata } from 'app/seo'
import { conference2026 } from '@/data/conferenceData'
import ConferenceSectionNav from '@/components/ConferenceSectionNav'

export const metadata = genPageMetadata({
  title: `${conference2026.shortTitle} - Conference Papers`,
  description: conference2026.callForAbstracts,
  image: conference2026.heroImage,
})

export default function ConferenceCallForPapersPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <ConferenceSectionNav />

      <section className="mt-8 grid grid-cols-1 gap-6 rounded-[1.75rem] border border-slate-300/70 bg-[linear-gradient(135deg,#e8eef7_0%,#dde6f1_100%)] p-6 shadow-sm lg:grid-cols-[1.05fr_0.95fr] dark:border-gray-700 dark:bg-gray-900">
        <article>
          <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 uppercase dark:text-sky-300">
            Conference Papers
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Conference Papers and Submission Guidelines
          </h1>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-700 sm:text-base dark:text-gray-300">
            {conference2026.callForAbstracts}
          </p>
          <div className="mt-6 rounded-[1.25rem] border border-fuchsia-200 bg-[linear-gradient(135deg,#fff7fb_0%,#f4ecff_48%,#eef5ff_100%)] p-4 shadow-[0_12px_28px_-18px_rgba(91,33,182,0.45)] dark:border-fuchsia-900/50 dark:bg-[linear-gradient(135deg,rgba(80,7,36,0.35)_0%,rgba(59,7,100,0.25)_48%,rgba(8,47,73,0.25)_100%)]">
            <p className="text-xs font-semibold tracking-[0.18em] text-fuchsia-700 uppercase dark:text-fuchsia-300">
              Deadline Extended
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-white/80 px-4 py-3 dark:bg-gray-900/40">
                <p className="text-xs font-semibold text-slate-600 dark:text-gray-300">
                  Abstract Submission
                </p>
                <p className="mt-1 text-base font-black text-indigo-700 dark:text-indigo-300">
                  {conference2026.abstractSubmissionDeadline}
                </p>
              </div>
              <div className="rounded-xl bg-white/80 px-4 py-3 dark:bg-gray-900/40">
                <p className="text-xs font-semibold text-slate-600 dark:text-gray-300">
                  Full Paper Submission
                </p>
                <p className="mt-1 text-base font-black text-indigo-700 dark:text-indigo-300">
                  {conference2026.fullPaperSubmissionDeadline}
                </p>
              </div>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-gray-400">
              Full paper submission is mandatory only for consideration for journal publication.
            </p>
          </div>
        </article>

        <article className="overflow-hidden rounded-[1.5rem] border border-white/70 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800/70">
          <div className="relative aspect-[4/5] w-full bg-slate-100 dark:bg-gray-900">
            <Image
              src={conference2026.callForAbstractsFlyer}
              alt="Call for abstract submissions flyer for Conference and Colloquium 2026"
              fill
              className="object-contain"
            />
          </div>
        </article>
      </section>

      <section id="tracks" className="mt-8 scroll-mt-28 space-y-6">
        {conference2026.tracks.map((track, index) => (
          <article
            key={track.slug}
            className="rounded-[1.75rem] border border-slate-400/70 bg-[linear-gradient(135deg,#dbe5f0_0%,#ccd9e8_100%)] p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900"
          >
            <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 uppercase dark:text-sky-300">
              Track {index + 1}
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {track.title}
            </h2>
            <p className="mt-2 text-lg font-semibold text-slate-800 dark:text-gray-200">
              {track.subtitle}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base dark:text-gray-300">
              {track.description}
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {track.topics.map((topic: string) => (
                <div
                  key={topic}
                  className="rounded-2xl border border-white/70 bg-white/60 px-4 py-4 text-sm text-slate-800 dark:border-gray-700 dark:bg-gray-800/70 dark:text-gray-200"
                >
                  {topic}
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section
        id="guidelines"
        className="mt-8 scroll-mt-28 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900"
      >
        <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 uppercase dark:text-sky-300">
          Submission Guidelines
        </p>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          International Conference Submission Guidelines
        </h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {conference2026.submissionGuidelines.conference.map((section) => (
            <article
              key={section.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-gray-700 dark:bg-gray-800/70"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{section.title}</h3>
              <ul className="mt-4 space-y-3">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-slate-700 dark:text-gray-300"
                  >
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-sky-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-[1.75rem] border border-slate-300/70 bg-[linear-gradient(135deg,#edf3f8_0%,#e2ebf5_100%)] p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
        <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 uppercase dark:text-sky-300">
          Publication Opportunities
        </p>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Journal Consideration for Selected Full Papers
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
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
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
    </div>
  )
}
