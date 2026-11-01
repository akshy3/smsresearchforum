import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'

interface PageSEOProps {
  title: string
  description?: string
  image?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

/** The branded 1200x630 preview shown when a link is shared (WhatsApp, LinkedIn, X). */
export const defaultShareImage = {
  url: siteMetadata.socialBanner,
  width: 1200,
  height: 630,
  alt: `${siteMetadata.title}, School of Management Studies, CUSAT`,
}

// Our own share images (public/static/images/share/) are all 1200x630, so their
// size is declared too; WhatsApp then shows the large preview straight away.
const shareImage = (image?: string) =>
  !image
    ? defaultShareImage
    : image.includes('/static/images/share/')
      ? { url: image, width: 1200, height: 630 }
      : image

export function genPageMetadata({ title, description, image, ...rest }: PageSEOProps): Metadata {
  return {
    title,
    description: description || siteMetadata.description,
    openGraph: {
      title: `${title} | ${siteMetadata.title}`,
      description: description || siteMetadata.description,
      url: './',
      siteName: siteMetadata.title,
      images: [shareImage(image)],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      title: `${title} | ${siteMetadata.title}`,
      card: 'summary_large_image',
      images: [shareImage(image)],
    },
    ...rest,
  }
}
