import { genPageMetadata } from 'app/seo'
import { conference2026 } from '@/data/conferenceData'
import ConferenceSectionNav from '@/components/ConferenceSectionNav'

export const metadata = genPageMetadata({
  title: `${conference2026.shortTitle} - Call for Papers`,
  description: conference2026.callForAbstracts,
  image: conference2026.heroImage,
})

export default function ConferenceCallForPapersPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <ConferenceSectionNav />

      <section className="mt-8 rounded-[1.75rem] border border-slate-300/70 bg-[linear-gradient(135deg,#e8eef7_0%,#dde6f1_100%)] p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
        <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 uppercase dark:text-sky-300">
          Call for Papers
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Conference Tracks and Submission Directions
        </h1>
        <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-700 sm:text-base dark:text-gray-300">
          {conference2026.callForAbstracts}
        </p>
      </section>

      <section className="mt-8 space-y-6">
        {conference2026.tracks.map((track) => (
          <article
            key={track.slug}
            className="rounded-[1.75rem] border border-slate-400/70 bg-[linear-gradient(135deg,#dbe5f0_0%,#ccd9e8_100%)] p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900"
          >
            <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 uppercase dark:text-sky-300">
              Track
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
              {track.topics.map((topic) => (
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
    </div>
  )
}
