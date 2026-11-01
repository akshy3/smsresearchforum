import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import Hero from '@/components/Hero'
import EventDate from '@/components/EventDate'
import NextEvent, { type EventSummary } from '@/components/NextEvent'
import Features from '@/components/Features'
import Stats from '@/components/Stats'
import { conference2026 } from '@/data/conferenceData'
import { featuredGalleryPhotos } from '@/data/galleryData'
import Image from 'next/image'
const MAX_DISPLAY = 3

export default function Home({ posts }) {
  const events: EventSummary[] = posts
    .filter((post) => post.eventDate)
    .map(({ title, path, eventDate, eventEndDate, eventTime, eventMode }) => ({
      title,
      path,
      eventDate,
      eventEndDate,
      eventTime,
      eventMode,
    }))

  return (
    <>
      <Hero />
      <NextEvent events={events} />

      <section className="px-4 pt-10 md:px-10">
        <div className="border-navy-800 from-navy-900 via-navy-900 to-navy-950 rounded-2xl border bg-gradient-to-br p-6 shadow-[0_24px_50px_-24px_rgba(12,19,37,0.45)] sm:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2 md:space-y-4">
              <p className="text-gold-300 text-sm font-semibold tracking-[0.2em] uppercase">
                Newsroom
              </p>
              <h2 className="text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
                Latest Updates
              </h2>
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
              const { slug, date, title, summary, tags, eventDate, eventEndDate } = post
              return (
                <li
                  key={slug}
                  className="rounded-2xl border border-white/65 bg-white/92 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <article className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <time
                        dateTime={date}
                        className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                      >
                        Posted {formatDate(date, siteMetadata.locale)}
                      </time>
                      <EventDate start={eventDate} end={eventEndDate} />
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

      <section className="px-4 pt-10 md:px-10">
        <div className="rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-slate-50 via-white to-sky-50/70 p-6 shadow-sm sm:p-8 dark:border-gray-700 dark:from-gray-900 dark:via-gray-900 dark:to-sky-950/20">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.2em] text-sky-700 uppercase dark:text-sky-300">
                Gallery
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                Moments from SMS Research Forum
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-gray-300">
                Browse photos from forum events, including the International Conference and Doctoral
                Colloquium 2026.
              </p>
            </div>
            <Link
              href="/gallery"
              className="bg-navy-900 hover:bg-navy-800 inline-flex rounded-full px-5 py-3 text-sm font-semibold text-white transition"
            >
              Open Gallery
            </Link>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {featuredGalleryPhotos.map((photo, index) => (
              <div
                key={photo.src}
                className="relative aspect-[3/2] overflow-hidden rounded-[1.25rem] border border-white/70 bg-slate-100 shadow-sm dark:border-gray-700 dark:bg-gray-800"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Features />

      <section className="px-4 pt-10 md:px-10">
        <div className="rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-white via-slate-50 to-sky-50/70 p-6 shadow-sm sm:p-8 dark:border-gray-700 dark:from-gray-900 dark:via-gray-900 dark:to-sky-950/20">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-sky-700 uppercase dark:text-sky-300">
                Past Programme · {conference2026.eventDates}
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                {conference2026.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-gray-300">
                Our flagship programme brought together conference presentations, thematic
                discussions, and a dedicated doctoral colloquium for emerging researchers. The
                proceedings are now published.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/conference-2026"
                  className="bg-navy-900 hover:bg-navy-800 dark:bg-navy-700 dark:hover:bg-navy-600 rounded-full px-5 py-3 text-sm font-semibold text-white transition"
                >
                  Conference Section
                </Link>
                <Link
                  href={conference2026.proceedings.href}
                  className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
                >
                  Download Proceedings
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
                  Proceedings
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                  Published
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
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">{/* <NewsletterForm /> */}</div>
      )}
      <Stats />
    </>
  )
}
