import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Stats from '@/components/Stats'
import { conference2026 } from '@/data/conferenceData'
const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <Hero />
      <section className="px-4 pt-10 md:px-10">
        <div className="rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8 dark:border-gray-700 dark:bg-gray-900">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-sky-700 uppercase dark:text-sky-300">
                Featured Programme
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                {conference2026.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-gray-300">
                The homepage now leads with the forum&apos;s flagship 2026 programme. Explore the
                conference section for theme details, participation guidance, doctoral colloquium
                expectations, and track-wise submission directions.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/conference-2026"
                  className="rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_36px_-16px_rgba(14,165,233,0.9)] transition hover:opacity-95"
                >
                  Open Conference Section
                </Link>
                <Link
                  href="/conference-2026/participation"
                  className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
                >
                  Participation Details
                </Link>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 dark:border-gray-700 dark:bg-gray-800/70">
                <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-gray-400">
                  Theme
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                  {conference2026.theme}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 dark:border-gray-700 dark:bg-gray-800/70">
                <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-gray-400">
                  Venue
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                  {conference2026.venue}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 dark:border-gray-700 dark:bg-gray-800/70">
                <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-gray-400">
                  Abstract Deadline
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                  {conference2026.abstractSubmissionDeadline}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 dark:border-gray-700 dark:bg-gray-800/70">
                <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-gray-400">
                  Format
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                  Hybrid conference and offline doctoral colloquium
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Features />

      <section className="px-4 pt-14 pb-8 md:px-10">
        <div className="rounded-2xl border border-slate-200/70 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm sm:p-8">
          <div className="space-y-2 md:space-y-4">
            <p className="text-sm font-semibold tracking-[0.2em] text-sky-700 uppercase">
              Newsroom
            </p>
            <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-gray-100">
              Latest Updates
            </h1>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base dark:text-gray-300">
              Recent announcements, workshops, programme notes, and forum activities from SMS
              Research Forum.
            </p>
          </div>

          <ul className="mt-8 space-y-4">
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((post) => {
              const { slug, date, title, summary, tags } = post
              return (
                <li
                  key={slug}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <article className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <time
                        dateTime={date}
                        className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold tracking-wide text-slate-700 uppercase"
                      >
                        {formatDate(date, siteMetadata.locale)}
                      </time>
                      <div className="flex flex-wrap">
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                    </div>

                    <div>
                      <h2 className="text-xl leading-snug font-bold tracking-tight text-slate-900 sm:text-2xl">
                        <Link
                          href={`/updates/${slug}`}
                          className="text-slate-900 dark:text-gray-100"
                        >
                          {title}
                        </Link>
                      </h2>
                      <div className="prose mt-3 max-w-none text-gray-700 dark:text-gray-300">
                        {summary}
                      </div>
                    </div>

                    <div className="text-sm font-semibold">
                      <Link
                        href={`/updates/${slug}`}
                        className="text-sky-700 hover:text-sky-800 dark:hover:text-sky-600"
                        aria-label={`Read more: "${title}"`}
                      >
                        Read more &rarr;
                      </Link>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end px-4 md:px-10">
          <Link
            href="/updates"
            className="text-sm font-semibold text-sky-700 hover:text-sky-800 dark:hover:text-sky-500"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">{/* <NewsletterForm /> */}</div>
      )}
      <Stats />
    </>
  )
}
