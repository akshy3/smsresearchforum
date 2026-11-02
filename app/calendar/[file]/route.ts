import { allUpdates } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'
import { buildIcs } from '@/lib/events'

// /calendar/<post-slug>.ics: a calendar file for each event post, built at deploy.
// Served with the text/calendar type so Safari and iOS open "Add to Calendar".
export const dynamic = 'force-static'
export const dynamicParams = false

const eventPosts = () => allUpdates.filter((post) => post.eventDate && !post.draft)

export function generateStaticParams() {
  return eventPosts().map((post) => ({ file: `${post.slug}.ics` }))
}

export async function GET(_request: Request, { params }: { params: Promise<{ file: string }> }) {
  const { file } = await params
  const post = eventPosts().find((p) => `${p.slug}.ics` === file)
  if (!post?.eventDate) return new Response('Not found', { status: 404 })

  const body = buildIcs(
    {
      title: post.title,
      url: `${siteMetadata.siteUrl}/${post.path}`,
      summary: post.summary,
      eventDate: post.eventDate,
      eventEndDate: post.eventEndDate,
      eventTime: post.eventTime,
      eventMode: post.eventMode,
      eventLink: post.eventLink,
    },
    new Date(post.lastmod || post.date)
  )

  return new Response(body, {
    headers: {
      'Content-Type': 'text/calendar; charset=utf-8',
      'Content-Disposition': `inline; filename="${file}"`,
    },
  })
}
