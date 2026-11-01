'use client'

import { ReactNode, useState } from 'react'

interface FoldProps {
  as?: 'article' | 'section' | 'div'
  className?: string
  children: ReactNode
}

// On phones, long cards show their opening lines and a "Show more" button;
// from the sm breakpoint up they are always shown in full. The text stays in
// the page either way, so search engines still see it.
export default function Fold({ as: Tag = 'article', className = '', children }: FoldProps) {
  const [open, setOpen] = useState(false)

  return (
    <Tag className={className}>
      <div
        className={
          open
            ? undefined
            : 'max-sm:max-h-72 max-sm:overflow-hidden max-sm:[mask-image:linear-gradient(to_bottom,#000_60%,transparent)]'
        }
      >
        {children}
      </div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="mt-2 inline-flex min-h-11 items-center text-sm font-semibold text-sky-700 sm:hidden dark:text-sky-300"
      >
        {open ? 'Show less ↑' : 'Show more ↓'}
      </button>
    </Tag>
  )
}
