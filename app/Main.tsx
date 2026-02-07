import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Stats from '@/components/Stats'
const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <Hero />
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
