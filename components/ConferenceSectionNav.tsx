'use client'

import { usePathname } from 'next/navigation'
import Link from '@/components/Link'
import { conference2026 } from '@/data/conferenceData'
import { conferenceNavLinks } from '@/data/conferenceNavLinks'

export default function ConferenceSectionNav() {
  const pathname = usePathname()

  return (
    <section className="rounded-[1.75rem] border border-slate-300/70 bg-[linear-gradient(135deg,#eef2f8_0%,#e5ebf4_100%)] p-5 shadow-sm backdrop-blur dark:border-gray-700 dark:bg-gray-900/90">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 uppercase dark:text-sky-300">
            Conference Section
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {conference2026.title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-gray-300">
            {conference2026.conferenceIntro}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {conferenceNavLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-[#3A4A6B] text-white shadow-[0_10px_24px_-12px_rgba(12,19,37,0.35)]'
                    : 'border border-slate-300 bg-white/70 text-slate-700 hover:bg-white dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800'
                }`}
              >
                {link.title}
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
