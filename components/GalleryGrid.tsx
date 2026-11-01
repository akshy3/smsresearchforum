'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import type { GalleryPhoto } from '@/data/galleryData'

// Photo grid that opens a full-screen viewer: tap a photo, then swipe or use the
// arrows (or ← → keys) to move through, and Esc or × to close.
export default function GalleryGrid({ photos }: { photos: GalleryPhoto[] }) {
  const [open, setOpen] = useState<number | null>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const lastTrigger = useRef<HTMLButtonElement | null>(null)
  const touchX = useRef<number | null>(null)

  const close = useCallback(() => {
    setOpen(null)
    lastTrigger.current?.focus()
  }, [])
  const step = useCallback(
    (by: number) => setOpen((i) => (i === null ? i : (i + by + photos.length) % photos.length)),
    [photos.length]
  )

  useEffect(() => {
    if (open === null) return
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = overflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open, close, step])

  const photo = open === null ? null : photos[open]
  const nav =
    'absolute top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white backdrop-blur-sm transition hover:bg-white/20'

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((p, index) => (
          <button
            key={p.src}
            type="button"
            onClick={(e) => {
              lastTrigger.current = e.currentTarget
              setOpen(index)
            }}
            className="group relative aspect-[3/2] overflow-hidden rounded-[1.25rem] border border-white/70 bg-slate-100 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
            aria-label={`View photo: ${p.alt}`}
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-700 ease-out group-hover:scale-105"
              priority={index < 3}
            />
            <span className="from-navy-950/80 absolute inset-x-0 bottom-0 bg-gradient-to-t to-transparent px-4 pt-8 pb-3 text-sm font-medium text-white">
              {p.alt}
            </span>
          </button>
        ))}
      </div>

      {photo &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={photo.alt}
            className="bg-navy-950 animate-fade-up fixed inset-0 z-[100] flex flex-col [animation-duration:0.3s]"
          >
            <div className="flex items-center justify-between px-4 py-3 text-sm text-slate-300">
              <span>
                {open! + 1} / {photos.length}
              </span>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-3xl leading-none text-white transition hover:bg-white/10"
                aria-label="Close"
              >
                &times;
              </button>
            </div>

            {/* Swipe left/right on the photo to move through */}
            <div
              className="relative flex-1"
              onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
              onTouchEnd={(e) => {
                if (touchX.current === null) return
                const dx = e.changedTouches[0].clientX - touchX.current
                if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1)
                touchX.current = null
              }}
            >
              <Image
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
              {photos.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    className={`${nav} left-3`}
                    aria-label="Previous photo"
                  >
                    &lsaquo;
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    className={`${nav} right-3`}
                    aria-label="Next photo"
                  >
                    &rsaquo;
                  </button>
                </>
              )}
            </div>

            <p className="px-4 py-4 text-center text-sm text-slate-200 sm:text-base">{photo.alt}</p>
          </div>,
          document.body
        )}
    </>
  )
}
