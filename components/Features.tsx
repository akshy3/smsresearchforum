import { BookOpenIcon, DownloadIcon, MailIcon, UserGroupIcon } from '@heroicons/react/outline'
import Link from '@/components/Link'

const features = [
  {
    name: 'Quarterly Newsletter',
    description:
      'Stay updated with the latest research, scholar achievements, and upcoming academic opportunities.',
    icon: MailIcon,
    href: '/newsletters',
  },
  {
    name: 'Committees and Community',
    description:
      'See how the forum is organized through committees that support programmes, editorial work, careers, and scholar wellbeing.',
    icon: UserGroupIcon,
    href: '/about#committees',
  },
  {
    name: 'Synopsis Library',
    description: 'Browse PhD synopses from SMS research scholars by stream, year, and advisor.',
    icon: BookOpenIcon,
    href: '/synopsis',
  },
  {
    name: 'Downloads',
    description: 'Proceedings, newsletters, and other supporting material for research scholars.',
    icon: DownloadIcon,
    href: '/downloads',
  },
]

export default function Features() {
  return (
    <section className="px-4 pt-10 md:px-10">
      <div className="mb-6 max-w-3xl">
        <p className="text-sm font-semibold tracking-[0.2em] text-sky-700 uppercase dark:text-sky-300">
          Explore
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          Around the Forum
        </h2>
      </div>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <li key={feature.name}>
            <Link
              href={feature.href}
              className="group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-900"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-sky-700 transition group-hover:bg-sky-600 group-hover:text-white dark:bg-sky-900/40 dark:text-sky-300">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="mt-4 text-lg leading-6 font-semibold text-slate-900 dark:text-white">
                {feature.name}
              </span>
              <span className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-gray-300">
                {feature.description}
              </span>
              <span className="mt-4 text-sm font-semibold text-sky-700 dark:text-sky-300">
                Open &rarr;
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
