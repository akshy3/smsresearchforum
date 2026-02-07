import initiativesData from '@/data/initiativesData'
import Image from '@/components/Image'
import Link from '@/components/Link'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Initiatives' })

export default function InitiativesPage() {
  const ongoingCount = initiativesData.filter(
    (initiative) => initiative.status === 'Ongoing'
  ).length
  const annualCount = initiativesData.filter((initiative) => initiative.status === 'Annual').length
  const categoryCount = new Set(initiativesData.map((initiative) => initiative.category)).size

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm sm:p-8 dark:border-gray-700 dark:from-gray-900 dark:to-gray-900/70">
        <p className="text-sm font-semibold tracking-[0.2em] text-sky-700 uppercase dark:text-sky-300">
          SMS Research Forum
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
          Initiatives
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base dark:text-gray-300">
          A focused portfolio of academic, career, and community initiatives designed to improve
          research quality, collaboration, and scholar outcomes at SMS, CUSAT.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-gray-900">
            <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-gray-400">
              Active Tracks
            </p>
            <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
              {categoryCount}
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-gray-900">
            <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-gray-400">
              Ongoing Initiatives
            </p>
            <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">{ongoingCount}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-gray-900">
            <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-gray-400">
              Annual Flagships
            </p>
            <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">{annualCount}</p>
          </div>
        </div>
      </section>

      <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {initiativesData.map((initiative) => (
          <article
            key={initiative.title}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-900"
          >
            {initiative.imgSrc && (
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={initiative.imgSrc}
                  alt={initiative.title}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
            )}

            <div className="p-5 sm:p-6">
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-sky-50 px-2.5 py-1 text-xs font-semibold text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
                  {initiative.category}
                </span>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:bg-gray-800 dark:text-gray-300">
                  {initiative.status}
                </span>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:bg-gray-800 dark:text-gray-300">
                  {initiative.cadence}
                </span>
              </div>

              <h2 className="text-xl leading-snug font-bold tracking-tight text-slate-900 dark:text-white">
                {initiative.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-gray-300">
                {initiative.description}
              </p>

              <div className="mt-4 space-y-2 text-sm text-slate-700 dark:text-gray-300">
                <p>
                  <span className="font-semibold text-slate-900 dark:text-white">Lead:</span>{' '}
                  {initiative.lead}
                </p>
                <p>
                  <span className="font-semibold text-slate-900 dark:text-white">Impact:</span>{' '}
                  {initiative.impact}
                </p>
              </div>

              {initiative.href && (
                <div className="mt-5">
                  <Link
                    href={initiative.href}
                    className="text-sm font-semibold text-sky-700 hover:text-sky-800 dark:text-sky-300 dark:hover:text-sky-200"
                    aria-label={`Learn more about ${initiative.title}`}
                  >
                    Explore related page &rarr;
                  </Link>
                </div>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Want to Contribute?</h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-gray-300">
          Scholars can propose new initiatives through their committee representatives or connect
          with the forum coordinators during monthly review meetings.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/about"
            className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700"
          >
            Meet the Team
          </Link>
          <Link
            href="/updates"
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            View Recent Updates
          </Link>
        </div>
      </section>
    </div>
  )
}
