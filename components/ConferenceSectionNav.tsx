'use client'

import { usePathname } from 'next/navigation'
import Link from '@/components/Link'
import { conference2026 } from '@/data/conferenceData'
import { conferenceNavLinks } from '@/data/conferenceNavLinks'

// A compact bar above every conference page: each page has its own title, so
// this only names the section and lists its pages (one swipeable row on phones).
export default function ConferenceSectionNav() {
  const pathname = usePathname()

  return (
    <nav
      aria-label="Conference section"
      className="rounded-[1.5rem] border border-slate-300/70 bg-[linear-gradient(135deg,#eef2f8_0%,#e5ebf4_100%)] py-4 shadow-sm dark:border-gray-700 dark:bg-gray-900/90"
    >
      <p className="px-4 text-xs font-semibold tracking-[0.14em] text-sky-700 uppercase sm:px-5 dark:text-sky-300">
        {conference2026.shortTitle} · {conference2026.eventDates}
      </p>
      <div className="mt-3 flex gap-2 overflow-x-auto px-4 [scrollbar-width:none] sm:flex-wrap sm:overflow-visible sm:px-5">
        {conferenceNavLinks.map((link) => {
          const isActive = pathname === link.href
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive ? 'page' : undefined}
              className={`inline-flex min-h-11 shrink-0 items-center rounded-full px-4 text-sm font-semibold whitespace-nowrap transition ${
                isActive
                  ? 'bg-navy-900 text-white shadow-[0_10px_24px_-12px_rgba(12,19,37,0.35)]'
                  : 'border border-slate-300 bg-white/70 text-slate-700 hover:bg-white dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800'
              }`}
            >
              {link.title}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
