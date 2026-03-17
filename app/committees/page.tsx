import { genPageMetadata } from 'app/seo'
import Link from '@/components/Link'

export const metadata = genPageMetadata({ title: 'Committees' })

const committees = [
  {
    name: 'Programme Committee',
    summary:
      'This committee is responsible for organizing academic events such as workshops, seminars, conferences, and webinars that keep research scholars engaged with current ideas and expert perspectives in management studies.',
    duties: [
      'Organize workshops, seminars, conferences, and webinars on relevant topics in management and interdisciplinary research.',
      'Curate event topics and develop agendas that align with member interests and current industry trends.',
      'Identify and invite guest speakers, industry experts, and researchers for forum events.',
      'Oversee logistics including venue selection, registration processes, and technical support.',
      'Gather participant feedback after events to evaluate outcomes and improve future programmes.',
      'Document committee activities regularly and communicate updates to the Editorial Committee.',
    ],
  },
  {
    name: 'Career and Placement Committee',
    summary:
      'This committee focuses on connecting members with industry opportunities through networking, skill-building sessions, mentorship, and placement support that strengthen career readiness.',
    duties: [
      'Build and maintain relationships with companies, organizations, and industry professionals to facilitate job opportunities.',
      'Organize workshops on resume writing, interview preparation, and professional networking.',
      'Coordinate placement drives and job fairs to connect scholars with employers and internship opportunities.',
      'Establish mentorship initiatives that connect members with experienced professionals for career and personal development.',
      'Provide job listings, internship opportunities, and career-related resources for members.',
      'Document committee activities regularly and communicate updates to the Editorial Committee.',
    ],
  },
  {
    name: 'Editorial Committee',
    summary:
      'This committee oversees the creation and dissemination of publications that highlight the forum’s achievements, activities, and member research while strengthening internal and external communication.',
    duties: [
      'Develop and curate content for newsletters, reports, and promotional materials.',
      'Oversee periodic publications featuring research achievements, forum events, and key updates.',
      'Review and edit member submissions for clarity, coherence, and academic quality before publication.',
      'Promote members’ research findings and forum activities through relevant communication channels.',
      'Develop and implement communication strategies to effectively share the forum’s initiatives.',
      'Curate and maintain documentation received from other committees.',
    ],
  },
  {
    name: 'Social and Welfare Committee',
    summary:
      'This committee promotes member well-being and a strong sense of community through social engagement, wellness initiatives, inclusion-focused activities, and peer support.',
    duties: [
      'Organize social events, leisure activities, and team-building exercises that strengthen community and camaraderie.',
      'Implement wellness programmes focused on physical and mental well-being, including stress management and recreational activities.',
      'Promote diversity and inclusion through events and initiatives that ensure members feel welcome and valued.',
      'Act as a support contact for members facing personal or academic concerns.',
      'Create informal networking opportunities that help members build relationships across disciplines.',
      'Document committee activities regularly and communicate updates to the Editorial Committee.',
    ],
  },
]

export default function CommitteesPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm sm:p-8 lg:p-10 dark:border-gray-700 dark:from-gray-900 dark:to-gray-900/70">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-sky-700 uppercase dark:text-sky-300">
              SMS Research Forum
            </p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
              Committees
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base dark:text-gray-300">
              The SMS Research Forum is organized into specialized committees that support academic
              programming, career development, communication, and scholar wellbeing. Each committee
              contributes to a vibrant and inclusive research culture by translating the
              forum&apos;s mission into practical initiatives and sustained collaboration.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-xl border border-slate-200 bg-white px-4 py-4 dark:border-gray-700 dark:bg-gray-900">
              <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-gray-400">
                Sub-Committees
              </p>
              <p className="mt-1 text-3xl font-bold text-slate-900 dark:text-white">4</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white px-4 py-4 dark:border-gray-700 dark:bg-gray-900">
              <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-gray-400">
                Shared Focus
              </p>
              <p className="mt-1 text-sm leading-relaxed font-medium text-slate-700 dark:text-gray-300">
                Academic excellence, career support, communication, and community welfare.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
        {committees.map((committee) => (
          <article
            key={committee.name}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 uppercase dark:text-sky-300">
                  Committee
                </p>
                <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  {committee.name}
                </h2>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-gray-300">
              {committee.summary}
            </p>

            <div className="mt-6">
              <h3 className="text-sm font-bold tracking-wide text-slate-900 uppercase dark:text-white">
                Duties and Responsibilities
              </h3>
              <ul className="mt-4 space-y-3">
                {committee.duties.map((duty) => (
                  <li
                    key={duty}
                    className="flex items-start gap-3 text-sm text-slate-600 dark:text-gray-300"
                  >
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-sky-500" />
                    <span className="leading-relaxed">{duty}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Coordinated Forum Governance
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base dark:text-gray-300">
          Together, these committees help the forum run consistently, respond to member needs, and
          create meaningful academic and professional opportunities for research scholars.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/initiatives"
            className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700"
          >
            Explore Initiatives
          </Link>
          <Link
            href="/about"
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            Learn About the Forum
          </Link>
        </div>
      </section>
    </div>
  )
}
