import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Updates, Authors } from 'contentlayer/generated'
import Link from '@/components/Link'
import SectionContainer from '@/components/SectionContainer'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import Comments from '@/components/Comments'

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<Updates>
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function PostLayout({ content, next, prev, children }: LayoutProps) {
  const { path, slug, date, title, tags } = content
  const basePath = path.split('/')[0]

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
          <header className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 text-center shadow-sm sm:p-10 dark:border-gray-700 dark:from-gray-900 dark:to-gray-900/70">
            <p className="text-xs font-semibold tracking-[0.2em] text-sky-700 uppercase dark:text-sky-300">
              Forum Update
            </p>
            <h1 className="mt-3 text-3xl leading-tight font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
              {title}
            </h1>
            <time
              dateTime={date}
              className="mt-4 inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold tracking-wide text-slate-700 uppercase dark:bg-gray-800 dark:text-gray-300"
            >
              {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
            </time>
            {tags && tags.length > 0 && (
              <div className="mt-5 flex flex-wrap justify-center">
                {tags.map((tag) => (
                  <Tag key={tag} text={tag} />
                ))}
              </div>
            )}
          </header>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-gray-700 dark:bg-gray-900">
            <div className="prose dark:prose-invert max-w-none text-black dark:text-white">
              {children}
            </div>
          </div>

          {siteMetadata.comments && (
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900">
              <Comments slug={slug} />
            </div>
          )}

          <footer className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {prev && prev.path ? (
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-gray-400">
                  Previous Update
                </p>
                <Link
                  href={`/${prev.path}`}
                  className="mt-2 block text-sm font-semibold text-sky-700 hover:text-sky-800 dark:text-sky-300 dark:hover:text-sky-200"
                  aria-label={`Previous update: ${prev.title}`}
                >
                  &larr; {prev.title}
                </Link>
              </div>
            ) : (
              <div />
            )}

            {next && next.path && (
              <div className="rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm sm:text-right dark:border-gray-700 dark:bg-gray-900">
                <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-gray-400">
                  Next Update
                </p>
                <Link
                  href={`/${next.path}`}
                  className="mt-2 block text-sm font-semibold text-sky-700 hover:text-sky-800 dark:text-sky-300 dark:hover:text-sky-200"
                  aria-label={`Next update: ${next.title}`}
                >
                  {next.title} &rarr;
                </Link>
              </div>
            )}
          </footer>

          <div className="mt-6">
            <Link
              href={`/${basePath}`}
              className="text-sm font-semibold text-sky-700 hover:text-sky-800 dark:text-sky-300 dark:hover:text-sky-200"
              aria-label="Back to updates"
            >
              &larr; Back to Updates
            </Link>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
