import Link from '@/components/Link'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Downloads',
  description: 'Resources, archives, and supporting material from SMS Research Forum.',
})

const resources = [
  {
    title: 'Synopsis Library',
    description:
      'Access doctoral synopsis submissions and browse research work by stream, year, or advisor.',
    href: '/synopsis',
    cta: 'Open Synopsis Library',
  },
  {
    title: "Conference '26",
    description:
      'Find the official conference overview, call for papers, doctoral colloquium details, and participation information.',
    href: '/conference-2026',
    cta: 'Open Conference Section',
  },
]

export default function DownloadsPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-white via-slate-50 to-cyan-50 p-6 shadow-sm sm:p-8 dark:border-gray-700 dark:from-gray-900 dark:via-gray-900 dark:to-sky-950/20">
        <p className="text-sm font-semibold tracking-[0.2em] text-sky-700 uppercase dark:text-sky-300">
          SMS Research Forum
        </p>
        <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          Downloads and Resources
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base dark:text-gray-300">
          A quieter space for reusable materials, research archives, and supporting forum resources.
        </p>
      </section>

      <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {resources.map((resource) => (
          <article
            key={resource.title}
            className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900"
          >
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {resource.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-gray-300">
              {resource.description}
            </p>
            <div className="mt-5">
              <Link
                href={resource.href}
                className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                {resource.cta}
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}
