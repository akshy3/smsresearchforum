import { genPageMetadata } from 'app/seo'
import { conference2026 } from '@/data/conferenceData'
import ConferenceSectionNav from '@/components/ConferenceSectionNav'

export const metadata = genPageMetadata({
  title: `${conference2026.shortTitle} - Doctoral Colloquium`,
  description: conference2026.doctoralColloquium.eligibility,
  image: conference2026.heroImage,
})

export default function ConferenceDoctoralColloquiumPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <ConferenceSectionNav />

      <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr]">
        <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 uppercase dark:text-sky-300">
            Doctoral Colloquium
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Eligibility and Format
          </h1>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-gray-300">
            <p>{conference2026.doctoralColloquium.eligibility}</p>
            <p>{conference2026.doctoralColloquium.stageRequirement}</p>
            <p>{conference2026.doctoralColloquium.format}</p>
          </div>
        </article>

        <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 uppercase dark:text-sky-300">
            Submission Structure
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Abstract Should Include
          </h2>
          <ul className="mt-5 space-y-3">
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
        </article>
      </section>

      <section className="mt-8 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
        <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 uppercase dark:text-sky-300">
          Focus Areas
        </p>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Research Areas Welcomed in the Colloquium
        </h2>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {conference2026.doctoralColloquium.focusAreas.map((area) => (
            <div
              key={area}
              className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700 dark:border-gray-700 dark:bg-gray-800/70 dark:text-gray-200"
            >
              {area}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
