'use client'

import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import { Fragment, useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'
import Image from 'next/image'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const navRef = useRef<HTMLElement | null>(null)
  const pathname = usePathname()

  const openNav = () => {
    setNavShow(true)
  }

  const closeNav = () => {
    setNavShow(false)
    setExpandedSection(null)
  }

  const onToggleNav = () => {
    if (navShow) {
      closeNav()
    } else {
      openNav()
    }
  }

  useEffect(() => {
    if (!navRef.current) return
    if (navShow) {
      disableBodyScroll(navRef.current)
    } else {
      enableBodyScroll(navRef.current)
    }
  }, [navShow])

  useEffect(() => {
    return clearAllBodyScrollLocks
  }, [])

  return (
    <>
      <button
        aria-label="Toggle Menu"
        onClick={onToggleNav}
        className="rounded-full border border-slate-200/80 bg-white/90 p-2.5 text-slate-800 shadow-[0_12px_30px_-18px_rgba(15,23,42,0.45)] backdrop-blur transition hover:border-sky-300 hover:text-sky-700 sm:hidden dark:border-gray-700 dark:bg-gray-900/90 dark:text-gray-100 dark:hover:border-sky-700 dark:hover:text-sky-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <Transition appear show={navShow} as={Fragment}>
        <Dialog as="div" onClose={closeNav} className="relative z-[70]">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-slate-950/45 backdrop-blur-sm" />
          </TransitionChild>

          <TransitionChild
            enter="transition ease-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <DialogPanel className="fixed top-0 right-0 h-full w-[88vw] max-w-sm border-l border-slate-200/80 bg-white/95 shadow-2xl backdrop-blur-xl dark:border-gray-800 dark:bg-gray-950/95">
              <div className="border-b border-slate-200/80 px-4 py-5 dark:border-gray-800">
                <div className="flex items-start justify-between gap-3">
                  <Link href="/" className="flex min-w-0 items-center gap-3" onClick={closeNav}>
                    <div className="rounded-2xl border border-slate-200/80 bg-white p-1.5 shadow-[0_10px_30px_-18px_rgba(14,165,233,0.55)] dark:border-gray-700 dark:bg-gray-900">
                      <Image
                        src="/static/images/smslogo.jpg"
                        alt="smslogo"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-black tracking-[0.2em] text-slate-900 uppercase dark:text-white">
                        SMS Research Forum
                      </p>
                      <p className="mt-0.5 truncate text-[11px] font-medium tracking-[0.12em] text-slate-500 uppercase dark:text-gray-400">
                        School of Management Studies, CUSAT
                      </p>
                    </div>
                  </Link>
                  <button
                    className="rounded-full border border-slate-200/80 bg-white/90 p-2 text-slate-700 shadow-sm transition hover:border-sky-300 hover:text-sky-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-sky-700 dark:hover:text-sky-300"
                    aria-label="Close Menu"
                    onClick={closeNav}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mt-4 rounded-2xl bg-gradient-to-r from-sky-50 to-cyan-50 px-4 py-3 dark:from-sky-950/40 dark:to-cyan-950/30">
                  <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 uppercase dark:text-sky-300">
                    Navigation
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-gray-300">
                    Explore forum updates, initiatives, committees, and scholar resources.
                  </p>
                </div>
              </div>

              <nav ref={navRef} className="h-[calc(100%-140px)] overflow-y-auto px-3 py-4">
                <div className="space-y-2">
                  {headerNavLinks.map((link) => {
                    const isActive =
                      pathname === link.href ||
                      (link.children?.some((child) => pathname === child.href) ?? false)

                    if (link.children) {
                      const isExpanded = expandedSection === link.href || isActive
                      return (
                        <div
                          key={link.title}
                          className={`rounded-2xl border transition ${
                            isActive
                              ? 'border-sky-200 bg-sky-50 dark:border-sky-700 dark:bg-sky-900/20'
                              : 'border-transparent bg-slate-50 dark:bg-gray-900/80'
                          }`}
                        >
                          <button
                            type="button"
                            onClick={() =>
                              setExpandedSection((current) =>
                                current === link.href ? null : link.href
                              )
                            }
                            className="flex w-full items-center justify-between px-4 py-3.5 text-left"
                          >
                            <div>
                              <p className="text-base font-semibold text-slate-800 dark:text-gray-100">
                                {link.title}
                              </p>
                              <p className="mt-1 text-xs font-medium tracking-wide text-slate-500 dark:text-gray-400">
                                {link.description || `Open the ${link.title.toLowerCase()} section`}
                              </p>
                            </div>
                            <span className="text-slate-400 dark:text-gray-500">
                              {isExpanded ? '−' : '+'}
                            </span>
                          </button>
                          {isExpanded && (
                            <div className="space-y-2 px-3 pb-3">
                              {link.children.map((child) => {
                                const isChildActive = pathname === child.href
                                return (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    className={`block rounded-2xl px-4 py-3 transition ${
                                      isChildActive
                                        ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-[0_18px_30px_-18px_rgba(14,165,233,0.85)]'
                                        : 'bg-white text-slate-800 hover:text-sky-700 dark:bg-gray-950 dark:text-gray-100 dark:hover:text-sky-300'
                                    }`}
                                    onClick={closeNav}
                                  >
                                    <p className="text-sm font-semibold">{child.title}</p>
                                    <p
                                      className={`mt-1 text-xs ${
                                        isChildActive
                                          ? 'text-sky-50/90'
                                          : 'text-slate-500 dark:text-gray-400'
                                      }`}
                                    >
                                      {child.description}
                                    </p>
                                  </Link>
                                )
                              })}
                            </div>
                          )}
                        </div>
                      )
                    }

                    return (
                      <Link
                        key={link.title}
                        href={link.href}
                        className={`group flex items-center justify-between rounded-2xl border px-4 py-3.5 text-base font-semibold transition ${
                          isActive
                            ? 'border-sky-200 bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-[0_18px_30px_-18px_rgba(14,165,233,0.85)] dark:border-sky-700'
                            : 'border-transparent bg-slate-50 text-slate-800 hover:border-slate-200 hover:bg-white hover:text-sky-700 dark:bg-gray-900/80 dark:text-gray-100 dark:hover:border-gray-700 dark:hover:bg-gray-900 dark:hover:text-sky-300'
                        }`}
                        onClick={closeNav}
                      >
                        <div>
                          <span>{link.title}</span>
                          <p
                            className={`mt-1 text-xs font-medium tracking-wide ${
                              isActive ? 'text-sky-50/90' : 'text-slate-500 dark:text-gray-400'
                            }`}
                          >
                            {link.href === '/'
                              ? 'Return to the main landing page'
                              : `Open the ${link.title.toLowerCase()} page`}
                          </p>
                        </div>
                        <span
                          className={`text-sm transition ${
                            isActive
                              ? 'translate-x-0 text-white'
                              : 'text-slate-400 group-hover:translate-x-1 group-hover:text-sky-600 dark:text-gray-500 dark:group-hover:text-sky-300'
                          }`}
                        >
                          &rarr;
                        </span>
                      </Link>
                    )
                  })}
                </div>
              </nav>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  )
}

export default MobileNav
