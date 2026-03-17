'use client'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import SearchButton from './SearchButton'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()
  let headerClass =
    'w-full border-b border-slate-200/80 bg-white/90 px-4 py-3 backdrop-blur-xl dark:border-gray-800 dark:bg-gray-950/85 md:px-8 lg:px-10'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4">
        <Link
          href="/"
          aria-label={siteMetadata.headerTitle}
          className="min-w-0 flex-1 lg:flex-none"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-1.5 shadow-[0_10px_30px_-18px_rgba(14,165,233,0.55)] dark:border-gray-700 dark:bg-gray-900">
              <Image src={'/static/images/smslogo.jpg'} alt="smslogo" width={40} height={40} />
            </div>
            <div className="min-w-0">
              {typeof siteMetadata.headerTitle === 'string' ? (
                <div className="truncate text-[11px] font-black tracking-[0.14em] text-slate-900 uppercase sm:text-sm sm:tracking-[0.24em] dark:text-white">
                  SMS Research Forum
                </div>
              ) : (
                siteMetadata.headerTitle
              )}
              <p className="mt-0.5 hidden truncate text-xs font-medium tracking-[0.12em] text-slate-500 uppercase sm:block dark:text-gray-400">
                School of Management Studies, CUSAT
              </p>
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <nav className="hidden items-center gap-x-1 rounded-full border border-slate-200/80 bg-white/80 p-1.5 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.45)] backdrop-blur lg:flex dark:border-gray-800 dark:bg-gray-900/80">
            {headerNavLinks
              .filter((link) => link.href !== '/')
              .map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition duration-200 ${
                    pathname === link.href
                      ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-[0_10px_24px_-12px_rgba(14,165,233,0.9)]'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-sky-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-sky-300'
                  }`}
                >
                  {link.title}
                </Link>
              ))}
          </nav>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <SearchButton />
            {/* <ThemeSwitch /> */}
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
