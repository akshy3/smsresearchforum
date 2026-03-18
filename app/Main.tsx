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
        <div className="rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-white via-slate-50 to-sky-50/70 p-6 shadow-sm sm:p-8 dark:border-gray-700 dark:from-gray-900 dark:via-gray-900 dark:to-sky-950/20">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-sky-700 uppercase dark:text-sky-300">
                Featured Programme
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                {conference2026.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-gray-300">
                A major academic programme of SMS Research Forum, bringing together conference
                presentations, thematic discussions, and a dedicated doctoral colloquium for
                emerging researchers.
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
                  Participation Guide
                </Link>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-4 dark:border-gray-700 dark:bg-gray-800/70">
                <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-gray-400">
                  Theme
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                  {conference2026.theme}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-4 dark:border-gray-700 dark:bg-gray-800/70">
                <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-gray-400">
                  Venue
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                  {conference2026.venue}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-4 dark:border-gray-700 dark:bg-gray-800/70">
                <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-gray-400">
                  Abstract Deadline
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                  {conference2026.abstractSubmissionDeadline}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-4 dark:border-gray-700 dark:bg-gray-800/70">
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
        <div className="rounded-2xl border border-slate-400/45 bg-gradient-to-br from-[#3A4A6B] via-[#334361] to-[#2B3854] p-6 shadow-[0_24px_50px_-24px_rgba(12,19,37,0.45)] sm:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2 md:space-y-4">
              <p className="text-sm font-semibold tracking-[0.2em] text-sky-200 uppercase">
                Newsroom
              </p>
              <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
                Latest Updates
              </h1>
              <p className="max-w-3xl text-sm leading-relaxed text-slate-100 sm:text-base">
                Recent announcements, workshops, programme notes, and forum activities from SMS
                Research Forum.
              </p>
            </div>
            {posts.length > 0 && (
              <Link
                href="/updates"
                className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-sky-50 transition hover:bg-white/16"
              >
                Browse all updates
              </Link>
            )}
          </div>

          <ul className="mt-8 space-y-4">
            {!posts.length && (
              <li className="rounded-2xl border border-dashed border-white/20 bg-white/10 px-5 py-8 text-center text-sm text-sky-50/90">
                Updates will appear here as the forum publishes announcements and event notes.
              </li>
            )}
            {posts.slice(0, MAX_DISPLAY).map((post) => {
              const { slug, date, title, summary, tags } = post
              return (
                <li
                  key={slug}
                  className="rounded-2xl border border-white/65 bg-white/92 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
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
                      <div className="prose mt-3 max-w-none text-slate-700 dark:text-gray-300">
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
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">{/* <NewsletterForm /> */}</div>
      )}
      <Stats />
    </>
  )
}
