import { genPageMetadata } from 'app/seo'
import Image from 'next/image'
import { slug } from 'github-slugger'
import Link from '@/components/Link'
import committeesData, {
  committeesYear,
  committeeGuidelines,
  forumCoordinators,
} from '@/data/committeesData'

export const metadata = genPageMetadata({ title: 'About' })

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
      'We connect scholarship with opportunity through alumni networks, placement information, and career-oriented sessions.',
  },
]

const focusAreas = [
  'Quarterly research newsletters and communication initiatives',
  'Workshops on methods, writing, publishing, and analytics',
  'Doctoral colloquium and scholar presentation forums',
  'Synopsis support and structured mentor guidance',
  'Scholar wellbeing and inclusive community events',
]

const faculty = [
  { name: 'Dr. Sam Thomas', role: 'Director, School of Management Studies' },
  { name: 'Dr. Devi Soumyaja', role: 'Research Coordinator' },
]

const eyebrow = 'text-xs font-semibold tracking-[0.14em] text-sky-700 uppercase dark:text-sky-300'
const card =
  'rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900'

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Banner, matching the home page */}
      <section className="relative overflow-hidden rounded-[2rem] border border-slate-200/70 shadow-[0_30px_80px_-45px_rgba(12,24,48,0.6)]">
        <div className="absolute inset-0">
          <Image
            src="/static/images/sms_cusat.jpg"
            alt="School of Management Studies, CUSAT"
            className="animate-slow-zoom h-full w-full object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
            fill
            priority
          />
          <div className="from-navy-950/90 via-navy-900/70 to-navy-800/30 absolute inset-0 bg-gradient-to-r" />
        </div>
        <div className="relative px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          <p className="animate-fade-up text-gold-300 text-xs font-semibold tracking-[0.14em] uppercase">
            About Us
          </p>
          <h1 className="animate-fade-up mt-3 text-4xl leading-tight font-semibold tracking-tight text-white [animation-delay:120ms] sm:text-5xl">
            SMS Research Forum
          </h1>
          <p className="animate-fade-up mt-4 max-w-2xl text-base leading-relaxed text-slate-100 [animation-delay:240ms] sm:text-lg">
            An initiative of the School of Management Studies, CUSAT, strengthening doctoral
            research culture through academic rigour, collaborative learning, and professional
            development.
          </p>
          <div className="animate-fade-up mt-8 flex flex-col gap-3 [animation-delay:360ms] sm:flex-row">
            <Link
              href="/about#committees"
              className="bg-gold-400 text-navy-950 hover:bg-gold-300 inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition"
            >
              Meet the Committees
            </Link>
            <Link
              href="/updates"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Events &amp; Updates
            </Link>
          </div>
        </div>
      </section>

      {/* Vision, pillars and mission */}
      <section className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className={eyebrow}>What we stand for</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Vision
          </h2>
          <blockquote className="border-gold-400 text-navy-900 mt-4 border-l-4 pl-5 font-serif text-xl leading-relaxed sm:text-2xl dark:text-gray-100">
            To build a future-ready research ecosystem at SMS that is rigorous, collaborative, and
            responsive to the evolving needs of academia, industry, and society.
          </blockquote>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className={`${card} border-t-gold-400 border-t-4 p-5`}>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-gray-300">
                {pillar.description}
              </p>
            </article>
          ))}
          <article className={`${card} p-5 sm:col-span-3`}>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Mission</h3>
            <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-slate-600 sm:grid-cols-2 dark:text-gray-300">
              {focusAreas.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="bg-gold-500 mt-1.5 h-2 w-2 shrink-0 rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* Leadership and committees at a glance */}
      <section className="from-navy-900 to-navy-950 mt-10 overflow-hidden rounded-[2rem] bg-gradient-to-br p-6 text-white sm:p-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <p className="text-gold-300 text-xs font-semibold tracking-[0.14em] uppercase">
              Leadership
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Faculty Guidance</h2>
            <ul className="mt-5 space-y-3">
              {faculty.map((person) => (
                <li
                  key={person.name}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <p className="font-semibold">{person.name}</p>
                  <p className="text-sm text-slate-300">{person.role}</p>
                </li>
              ))}
            </ul>

            <p className="text-gold-300 mt-8 text-xs font-semibold tracking-[0.14em] uppercase">
              Forum Coordinators {committeesYear}
            </p>
            <div className="mt-3 space-y-3">
              {forumCoordinators.map((group) => (
                <div
                  key={group.title}
                  className="border-gold-300/30 bg-gold-400/10 rounded-xl border px-4 py-3"
                >
                  <p className="text-sm text-slate-300">{group.title}</p>
                  <p className="mt-1 font-semibold">{group.names.join(' & ')}</p>
                </div>
              ))}
            </div>

            <p className="mt-5 text-sm leading-relaxed text-slate-300">
              Scholar-led committees carry the forum&apos;s work through the year. If you are a
              scholar at SMS, you are encouraged to participate, present your work, and contribute.
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="text-gold-300 text-xs font-semibold tracking-[0.14em] uppercase">
              Committees {committeesYear}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">At a Glance</h2>
            <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {committeesData.map((committee) => (
                <li key={committee.name}>
                  <a
                    href={`#${slug(committee.name)}`}
                    className="hover:border-gold-300/60 block h-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10"
                  >
                    <p className="font-semibold">{committee.name}</p>
                    <p className="text-gold-200 mt-1 text-sm">
                      Heads: {committee.heads.join(' & ')}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      {committee.heads.length + committee.members.length} members
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Committee details */}
      <section id="committees" className="mt-10 scroll-mt-24">
        <div className="max-w-3xl">
          <p className={eyebrow}>Forum Structure</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Committees {committeesYear}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-gray-300">
            Five committees plan programmes, communicate and document the forum&apos;s work, look
            after scholar welfare, provide technical and digital support, and manage finances.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
          {committeesData.map((committee) => (
            <article
              key={committee.name}
              id={slug(committee.name)}
              className={`${card} flex scroll-mt-24 flex-col p-6`}
            >
              <h3 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
                {committee.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-gray-300">
                {committee.role}
              </p>

              <div className="mt-5">
                <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-gray-400">
                  Committee Heads
                </p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {committee.heads.map((name) => (
                    <li
                      key={name}
                      className="bg-gold-100 text-gold-900 dark:bg-gold-900/40 dark:text-gold-100 rounded-full px-3 py-1 text-sm font-semibold"
                    >
                      {name}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-gray-400">
                  Members
                </p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {committee.members.map((name) => (
                    <li
                      key={name}
                      className="bg-navy-50 text-navy-800 dark:text-navy-100 rounded-full px-3 py-1 text-sm dark:bg-gray-800"
                    >
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="from-navy-900 to-navy-950 mt-8 flex flex-col gap-4 rounded-2xl bg-gradient-to-br p-6 text-white sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-gold-300 text-xs font-semibold tracking-[0.14em] uppercase">
              For committee members
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight">
              {committeeGuidelines.title}
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-300">
              {committeeGuidelines.description}
            </p>
          </div>
          <a
            href={committeeGuidelines.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-400 text-navy-950 hover:bg-gold-300 inline-flex shrink-0 items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            Download PDF
          </a>
        </div>
      </section>
    </div>
  )
}
