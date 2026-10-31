import { MetadataRoute } from 'next'
import { allUpdates } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'
import { conferenceNavLinks } from '@/data/conferenceNavLinks'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl

  const blogRoutes = allUpdates
    .filter((post) => !post.draft)
    .map((post) => ({
      url: `${siteUrl}/${post.path}`,
      lastModified: post.lastmod || post.date,
    }))

  const conferenceRoutes = conferenceNavLinks
    .filter((link) => !link.href.includes('#'))
    .map((link) => link.href.slice(1))

  const routes = [
    '',
    'updates',
    'newsletters',
    'about',
    'downloads',
    'gallery',
    ...conferenceRoutes,
  ].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogRoutes]
}
