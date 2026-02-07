import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import SearchButton from './SearchButton'
import Image from 'next/image'

const Header = () => {
  let headerClass =
    'w-full border-b border-slate-200/80 bg-white/95 px-4 py-4 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/90 md:px-10'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center gap-3">
            <div className="rounded-xl border border-slate-200 bg-white p-1 shadow-sm dark:border-gray-700 dark:bg-gray-900">
              <Image src={'/static/images/smslogo.jpg'} alt="smslogo" width={40} height={40} />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden text-base font-bold tracking-wide text-slate-900 uppercase sm:block dark:text-white">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="no-scrollbar hidden max-w-40 items-center gap-x-1 overflow-x-auto sm:flex md:max-w-96">
            {headerNavLinks
              .filter((link) => link.href !== '/')
              .map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="rounded-full px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-sky-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-sky-300"
                >
                  {link.title}
                </Link>
              ))}
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
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
