'use client'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import SearchButton from './SearchButton'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Fragment } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'

const Header = () => {
  const pathname = usePathname()
  let headerClass =
    'relative z-[90] w-full border-b border-slate-200/80 bg-white/90 px-4 py-3 backdrop-blur-xl dark:border-gray-800 dark:bg-gray-950/85 md:px-8 lg:px-10'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0'
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
              .map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.children?.some((child) => pathname === child.href) ?? false)

                if (link.children) {
                  return (
                    <Menu as="div" key={link.title} className="relative">
                      <MenuButton
                        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition duration-200 ${
                          isActive
                            ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-[0_10px_24px_-12px_rgba(14,165,233,0.9)]'
                            : 'text-slate-700 hover:bg-slate-100 hover:text-sky-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-sky-300'
                        }`}
                      >
                        <span>{link.title}</span>
                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </MenuButton>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-150"
                        enterFrom="opacity-0 translate-y-2"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-2"
                      >
                        <MenuItems className="absolute top-[calc(100%+0.75rem)] left-1/2 z-[80] w-80 -translate-x-1/2 rounded-3xl border border-slate-200/80 bg-white p-3 shadow-[0_24px_60px_-28px_rgba(15,23,42,0.45)] outline-none dark:border-gray-800 dark:bg-gray-900">
                          <div className="rounded-2xl bg-gradient-to-r from-sky-50 to-cyan-50 px-4 py-3 dark:from-sky-950/40 dark:to-cyan-950/30">
                            <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 uppercase dark:text-sky-300">
                              {link.title}
                            </p>
                            {link.description && (
                              <p className="mt-1 text-sm text-slate-600 dark:text-gray-300">
                                {link.description}
                              </p>
                            )}
                          </div>
                          <div className="mt-3 space-y-2">
                            {link.children.map((child) => {
                              const isChildActive = pathname === child.href
                              return (
                                <MenuItem key={child.href}>
                                  <Link
                                    href={child.href}
                                    className={`block rounded-2xl px-4 py-3 transition ${
                                      isChildActive
                                        ? 'bg-sky-50 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300'
                                        : 'text-slate-700 hover:bg-slate-50 hover:text-sky-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-sky-300'
                                    }`}
                                  >
                                    <p className="text-sm font-semibold">{child.title}</p>
                                    <p
                                      className={`mt-1 text-xs ${
                                        isChildActive
                                          ? 'text-sky-600 dark:text-sky-200'
                                          : 'text-slate-500 dark:text-gray-400'
                                      }`}
                                    >
                                      {child.description}
                                    </p>
                                  </Link>
                                </MenuItem>
                              )
                            })}
                          </div>
                        </MenuItems>
                      </Transition>
                    </Menu>
                  )
                }

                return (
                  <Link
                    key={link.title}
                    href={link.href}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-[0_10px_24px_-12px_rgba(14,165,233,0.9)]'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-sky-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-sky-300'
                    }`}
                  >
                    {link.title}
                  </Link>
                )
              })}
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
