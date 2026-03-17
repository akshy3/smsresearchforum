import { GlobeAltIcon, LightningBoltIcon, MailIcon, ScaleIcon } from '@heroicons/react/outline'
import Link from '@/components/Link'
import { conference2026 } from '@/data/conferenceData'

const features = [
  {
    name: 'Quarterly Newsletter',
    description:
      'Stay updated with the latest research, scholar achievements, and upcoming academic opportunities.',
    icon: GlobeAltIcon,
    href: '/updates',
  },
  {
    name: 'Committees and Community',
    description:
      'See how the forum is organized through committees that support programmes, editorial work, careers, and scholar wellbeing.',
    icon: ScaleIcon,
    href: '/committees',
  },
  {
    name: "Conference and Colloquium '26",
    description:
      'Our current flagship academic programme bringing together conference presentations and a doctoral colloquium.',
    icon: LightningBoltIcon,
    href: '/conference-2026',
  },
  {
    name: 'Research Resources',
    description:
      'Access the synopsis library, updates, and other supporting resources for SMS research scholars.',
    icon: MailIcon,
    href: '/downloads',
  },
]

export default function Features() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-white to-sky-50/30" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.2em] text-sky-700 uppercase">
            Forum Highlights
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Key Forum Activities and Support
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            SMS Research Forum brings together research culture, academic events, communication, and
            scholar support, while also spotlighting major programmes like the 2026 conference.
          </p>
        </div>

        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="group rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
            >
              <dt className="flex items-center gap-4">
                <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700 transition group-hover:bg-sky-600 group-hover:text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="text-lg leading-6 font-semibold text-slate-900">{feature.name}</p>
              </dt>
              <dd className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                {feature.description}
              </dd>
              <div className="mt-5">
                <Link
                  href={feature.href}
                  className="text-sm font-semibold text-sky-700 hover:text-sky-800 dark:hover:text-sky-300"
                >
                  Open section &rarr;
                </Link>
              </div>
            </div>
          ))}
        </dl>

        <div className="mt-8 rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-6 shadow-sm">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 uppercase">
                Flagship Programme
              </p>
              <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900">
                {conference2026.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                {conference2026.tagline}. The forum&apos;s current headline academic programme is
                positioned here as a major initiative without replacing the broader identity of SMS
                Research Forum.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 px-4 py-4">
                <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                  Event Dates
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  {conference2026.eventDates}
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 px-4 py-4">
                <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                  Abstract Deadline
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  {conference2026.abstractSubmissionDeadline}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <Link
              href="/conference-2026"
              className="text-sm font-semibold text-sky-700 hover:text-sky-800 dark:hover:text-sky-300"
            >
              Visit conference section &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
