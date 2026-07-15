import Link from '@/components/Link'
import { newsletters } from '@/data/newslettersData'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Newsletters',
  description: 'Newsletter archive of SMS Research Forum.',
})

export default function NewslettersPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-white via-slate-50 to-cyan-50 p-6 shadow-sm sm:p-8 dark:border-gray-700 dark:from-gray-900 dark:via-gray-900 dark:to-sky-950/20">
        <p className="text-sm font-semibold tracking-[0.2em] text-sky-700 uppercase dark:text-sky-300">
          SMS Research Forum
        </p>
        <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          Newsletters
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base dark:text-gray-300">
          Browse newsletter issues from SMS Research Forum, including research updates, scholar
          achievements, and academic community notes.
        </p>
      </section>

      <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {newsletters.map((newsletter) => (
          <article
            key={newsletter.href}
            className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-900"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold tracking-wide text-sky-700 uppercase dark:bg-sky-900/30 dark:text-sky-300">
                {newsletter.issue}
              </span>
              <span className="text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-gray-400">
                {newsletter.dateLabel}
              </span>
            </div>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {newsletter.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-gray-300">
              {newsletter.description}
            </p>
            <div className="mt-5">
              <Link
                href={newsletter.href}
                className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                Open PDF
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}
