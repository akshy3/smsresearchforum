import { genPageMetadata } from 'app/seo'
import Image from 'next/image'
import Link from '@/components/Link'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const pillars = [
    {
      title: 'Research Excellence',
      description:
        'We support scholars through methodological training, critical feedback, and publication-oriented academic practice.',
    },
    {
      title: 'Collaborative Community',
      description:
        'The forum creates meaningful peer-to-peer learning spaces where scholars, faculty mentors, and committees work together.',
    },
    {
      title: 'Career Readiness',
      description:
        'We connect scholarship with opportunity through placement support, professional workshops, and academia-industry engagement.',
    },
  ]

  const focusAreas = [
    'Quarterly research newsletters and communication initiatives',
    'Workshops on methods, writing, publishing, and analytics',
    'Doctoral colloquium and scholar presentation forums',
    'Synopsis support and structured mentor guidance',
    'Scholar wellbeing and inclusive community events',
  ]

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50 shadow-sm dark:border-gray-700 dark:from-gray-900 dark:to-gray-900/70">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-6 sm:p-8 lg:p-10">
            <p className="text-sm font-semibold tracking-[0.2em] text-sky-700 uppercase dark:text-sky-300">
              About Us
            </p>
            <h1 className="mt-3 text-3xl leading-tight font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
              SMS Research Forum
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-gray-300">
              An initiative of the School of Management Studies, CUSAT, focused on strengthening
              doctoral research culture through academic rigor, collaborative learning, and
              professional development.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/updates"
                className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700"
              >
                Explore Updates
              </Link>
              <Link
                href="/initiatives"
                className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                View Initiatives
              </Link>
            </div>
          </div>
          <div className="relative min-h-[280px] lg:min-h-full">
            <Image
              src="/static/images/sms_cusat.jpg"
              alt="School of Management Studies, CUSAT"
              className="h-full w-full object-cover"
              fill
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/10 to-transparent" />
          </div>
        </div>
      </section>

      <section className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        {pillars.map((pillar) => (
          <article
            key={pillar.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900"
          >
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">{pillar.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-gray-300">
              {pillar.description}
            </p>
          </article>
        ))}
      </section>

      <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Vision
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-gray-300">
            To build a future-ready research ecosystem at SMS that is rigorous, collaborative, and
            responsive to the evolving needs of academia, industry, and society.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Mission
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 sm:text-base dark:text-gray-300">
            {focusAreas.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-sky-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div className="relative h-64 lg:col-span-2 lg:h-full">
            <Image
              src="/static/images/colloquium2.jpg"
              alt="Research forum event"
              className="h-full w-full object-cover"
              fill
            />
          </div>
          <div className="p-6 lg:col-span-3 lg:p-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Community and Leadership
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-gray-300">
              The forum operates through dedicated committees for programme planning, editorial
              activities, career support, and scholar wellbeing. Under faculty guidance and scholar
              leadership, these committees create continuity in activities and measurable academic
              outcomes.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-gray-300">
              If you are a scholar at SMS, you are encouraged to actively participate, present your
              work, and contribute to upcoming initiatives.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
