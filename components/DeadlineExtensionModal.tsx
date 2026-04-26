'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function DeadlineExtensionModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!sessionStorage.getItem('deadlineModalDismissed')) {
      const t = setTimeout(() => setOpen(true), 600)
      return () => clearTimeout(t)
    }
  }, [])

  function dismiss() {
    sessionStorage.setItem('deadlineModalDismissed', '1')
    setOpen(false)
  }

  function handleBackdropClick(e: React.MouseEvent) {
    if (e.target === e.currentTarget) dismiss()
  }

  function handleBackdropKey(e: React.KeyboardEvent) {
    if (e.target === e.currentTarget && (e.key === 'Enter' || e.key === ' ')) dismiss()
  }

  if (!open) return null

  return (
    <div
      role="presentation"
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 px-4 pt-20 pb-6 backdrop-blur-sm"
      onClick={handleBackdropClick}
      onKeyDown={handleBackdropKey}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Abstract Submission Deadline Extended"
        className="relative w-full max-w-md flex-shrink-0 overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-gray-900"
      >
        <button
          onClick={dismiss}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/30 text-white transition hover:bg-black/50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
          </svg>
        </button>
        <Image
          src="/static/images/DC26/Extended.jpg"
          alt="Abstract Submission Deadline Extended to 4 May 2026"
          width={600}
          height={850}
          className="h-auto w-full"
          priority
        />
        <div className="flex justify-center border-t border-slate-100 px-6 py-4 dark:border-gray-700">
          <button
            onClick={dismiss}
            className="rounded-full bg-indigo-700 px-8 py-2 text-sm font-semibold text-white transition hover:bg-indigo-800"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  )
}
