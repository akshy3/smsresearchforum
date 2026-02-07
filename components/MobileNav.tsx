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
  const navRef = useRef<HTMLElement | null>(null)
  const pathname = usePathname()

  const openNav = () => {
    setNavShow(true)
  }

  const closeNav = () => {
    setNavShow(false)
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
        className="rounded-full border border-slate-300 bg-white p-2 text-slate-800 shadow-sm transition hover:border-sky-300 hover:text-sky-700 sm:hidden dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:hover:border-sky-700 dark:hover:text-sky-300"
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
            <div className="fixed inset-0 bg-black/40 backdrop-blur-[1px]" />
          </TransitionChild>

          <TransitionChild
            enter="transition ease-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <DialogPanel className="fixed top-0 right-0 h-full w-[86vw] max-w-sm border-l border-slate-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-950">
              <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4 dark:border-gray-800">
                <Link href="/" className="flex items-center gap-2" onClick={closeNav}>
                  <Image src="/static/images/smslogo.jpg" alt="smslogo" width={28} height={28} />
                  <span className="text-sm font-semibold tracking-wide text-slate-900 uppercase dark:text-white">
                    SMS Research Forum
                  </span>
                </Link>
                <button
                  className="rounded-full border border-slate-300 bg-white p-2 text-slate-700 transition hover:border-sky-300 hover:text-sky-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-sky-700 dark:hover:text-sky-300"
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

              <nav ref={navRef} className="h-[calc(100%-72px)] overflow-y-auto px-3 py-4">
                {headerNavLinks.map((link) => (
                  <div key={link.title} className="mb-1">
                    <Link
                      href={link.href}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition ${
                        pathname === link.href
                          ? 'bg-sky-50 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300'
                          : 'text-slate-800 hover:bg-slate-100 hover:text-sky-700 dark:text-gray-100 dark:hover:bg-gray-900 dark:hover:text-sky-300'
                      }`}
                      onClick={closeNav}
                    >
                      <span>{link.title}</span>
                      <span className="text-sm">&rarr;</span>
                    </Link>
                  </div>
                ))}
              </nav>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  )
}

export default MobileNav
