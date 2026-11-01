import { genPageMetadata } from 'app/seo'
import GalleryGrid from '@/components/GalleryGrid'
import { galleryPhotos } from '@/data/galleryData'

export const metadata = genPageMetadata({
  title: 'Gallery',
  description:
    'Photo archive of SMS Research Forum events, including Conference and Doctoral Colloquium 2026.',
  image: galleryPhotos[0]?.src,
})

export default function GalleryPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="rounded-[1.75rem] border border-slate-300/70 bg-[linear-gradient(135deg,#e8eef7_0%,#dde6f1_100%)] p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
        <p className="text-xs font-semibold tracking-[0.14em] text-sky-700 uppercase dark:text-sky-300">
          SMS Research Forum
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Gallery
        </h1>
        <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-700 sm:text-base dark:text-gray-300">
          A visual archive of research forum programmes, academic sessions, participant moments, and
          event highlights from SMS, CUSAT. Tap a photo to view it full screen.
        </p>
      </section>

      <section className="mt-8 rounded-[1.75rem] border border-slate-300/70 bg-[linear-gradient(135deg,#edf2f8_0%,#e3ebf4_100%)] p-4 shadow-sm sm:p-6 dark:border-gray-700 dark:bg-gray-900">
        <GalleryGrid photos={galleryPhotos} />
      </section>
    </div>
  )
}
