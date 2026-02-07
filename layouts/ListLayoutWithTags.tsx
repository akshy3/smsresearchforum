'use client'

import { useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import { slug } from 'github-slugger'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Updates } from 'contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import tagData from 'app/tag-data.json'

interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface ListLayoutProps {
  posts: CoreContent<Updates>[]
  title: string
  initialDisplayPosts?: CoreContent<Updates>[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const basePath = pathname
    .replace(/^\//, '') // Remove leading slash
    .replace(/\/page\/\d+\/?$/, '') // Remove any trailing /page
    .replace(/\/$/, '') // Remove trailing slash
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="pt-8">
      <nav className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm dark:border-gray-700 dark:bg-gray-900">
        {!prevPage && (
          <button className="cursor-auto rounded-md px-3 py-1.5 text-gray-400" disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
            className="rounded-md px-3 py-1.5 font-medium text-sky-700 hover:bg-sky-50"
          >
            Previous
          </Link>
        )}
        <span className="font-medium text-gray-700 dark:text-gray-200">
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto rounded-md px-3 py-1.5 text-gray-400" disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
          <Link
            href={`/${basePath}/page/${currentPage + 1}`}
            rel="next"
            className="rounded-md px-3 py-1.5 font-medium text-sky-700 hover:bg-sky-50"
          >
            Next
          </Link>
        )}
      </nav>
    </div>
  )
}

export default function ListLayoutWithTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const pathname = usePathname()
  const [searchValue, setSearchValue] = useState('')
  const tagCounts = tagData as Record<string, number>
  const sortedTags = Object.keys(tagCounts).sort((a, b) => tagCounts[b] - tagCounts[a])

  const basePosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts
  const displayPosts = useMemo(() => {
    if (!searchValue.trim()) return basePosts
    const query = searchValue.toLowerCase()
    return basePosts.filter((post) => {
      const tagText = post.tags?.join(' ') || ''
      const searchable = `${post.title} ${post.summary} ${tagText}`
      return searchable.toLowerCase().includes(query)
    })
  }, [basePosts, searchValue])

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm sm:p-8 dark:border-gray-700 dark:from-gray-900 dark:to-gray-900/70">
        <p className="text-sm font-semibold tracking-[0.2em] text-sky-700 uppercase dark:text-sky-300">
          Updates Hub
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          {title}
        </h1>
        <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base dark:text-gray-300">
          Explore announcements, activities, and academic milestones from the SMS Research Forum.
        </p>

        <div className="relative mt-6 max-w-xl">
          <label>
            <span className="sr-only">Search updates</span>
            <input
              aria-label="Search updates"
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search by title, summary, or tag"
              className="block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 pr-11 text-sm text-slate-900 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
          </label>
          <svg
            className="absolute top-3.5 right-3 h-5 w-5 text-slate-400 dark:text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-start">
        <aside className="lg:sticky lg:top-20 lg:w-[280px] lg:flex-shrink-0">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
            <h2 className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase dark:text-gray-400">
              Categories
            </h2>
            <div className="mt-4">
              {pathname.startsWith('/updates') ? (
                <h3 className="rounded-lg bg-sky-50 px-3 py-2 text-sm font-semibold text-sky-700 uppercase dark:bg-sky-900/30 dark:text-sky-300">
                  All Updates
                </h3>
              ) : (
                <Link
                  href={`/updates`}
                  className="block rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 uppercase hover:bg-slate-100 hover:text-sky-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-sky-300"
                >
                  All Updates
                </Link>
              )}
              <ul className="mt-2 space-y-1">
                {sortedTags.map((t) => {
                  const active = decodeURI(pathname.split('/tags/')[1] || '') === slug(t)
                  return (
                    <li key={t}>
                      {active ? (
                        <h3 className="inline-block rounded-lg bg-sky-50 px-3 py-2 text-sm font-semibold text-sky-700 uppercase dark:bg-sky-900/30 dark:text-sky-300">
                          {`${t} (${tagCounts[t]})`}
                        </h3>
                      ) : (
                        <Link
                          href={`/tags/${slug(t)}`}
                          className="inline-block rounded-lg px-3 py-2 text-sm font-medium text-gray-600 uppercase hover:bg-slate-100 hover:text-sky-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-sky-300"
                          aria-label={`View posts tagged ${t}`}
                        >
                          {`${t} (${tagCounts[t]})`}
                        </Link>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </aside>

        <main className="min-w-0 flex-1">
          {!displayPosts.length && (
            <div className="rounded-xl border border-dashed border-slate-300 bg-white p-8 text-sm text-slate-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
              No updates found.
            </div>
          )}

          <ul className="space-y-4">
            {displayPosts.map((post) => {
              const { path, date, title, summary, tags } = post
              return (
                <li key={path}>
                  <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-sky-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-900">
                    <div className="flex flex-wrap items-center gap-3">
                      <time
                        dateTime={date}
                        suppressHydrationWarning
                        className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold tracking-wide text-slate-700 uppercase dark:bg-gray-800 dark:text-gray-300"
                      >
                        {formatDate(date, siteMetadata.locale)}
                      </time>
                      <div className="flex flex-wrap">
                        {tags?.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                    </div>

                    <h2 className="mt-4 text-xl leading-snug font-bold tracking-tight text-slate-900 sm:text-2xl dark:text-white">
                      <Link href={`/${path}`} className="text-slate-900 dark:text-white">
                        {title}
                      </Link>
                    </h2>

                    <div className="prose mt-3 max-w-none text-slate-600 dark:text-gray-300">
                      {summary}
                    </div>

                    <div className="mt-4">
                      <Link
                        href={`/${path}`}
                        className="text-sm font-semibold text-sky-700 hover:text-sky-800 dark:text-sky-300 dark:hover:text-sky-200"
                        aria-label={`Read update: ${title}`}
                      >
                        Read update &rarr;
                      </Link>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>

          {pagination && pagination.totalPages > 1 && !searchValue && (
            <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
          )}
        </main>
      </div>
    </div>
  )
}
