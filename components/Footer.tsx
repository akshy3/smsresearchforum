import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="border-navy-800 from-navy-950 via-navy-950 to-navy-900 mt-24 border-t bg-gradient-to-br text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="text-gold-300 text-sm font-semibold tracking-[0.14em] uppercase">
              SMS Research Forum
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Research culture, academic exchange, and scholar support at SMS.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              An initiative of the School of Management Studies, CUSAT, bringing together updates,
              committees, research resources, and flagship programmes such as the International
              Conference and Doctoral Colloquium 2026.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                About the Forum
              </Link>
              <Link
                href="/conference-2026"
                className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Conference '26
              </Link>
            </div>
          </div>

          <div>
            <p className="text-gold-300 text-sm font-semibold tracking-[0.14em] uppercase">
              Quick Links
            </p>
            <div className="mt-4 text-sm text-slate-300">
              <div>
                <Link
                  href="/updates"
                  className="inline-flex min-h-11 items-center transition hover:text-white"
                >
                  Updates
                </Link>
              </div>
              <div>
                <Link
                  href="/about#committees"
                  className="inline-flex min-h-11 items-center transition hover:text-white"
                >
                  Committees
                </Link>
              </div>
              <div>
                <Link
                  href="/downloads"
                  className="inline-flex min-h-11 items-center transition hover:text-white"
                >
                  Downloads
                </Link>
              </div>
              <div>
                <Link
                  href="/conference-2026/participation"
                  className="inline-flex min-h-11 items-center transition hover:text-white"
                >
                  Participation Guide
                </Link>
              </div>
            </div>
          </div>

          <div>
            <p className="text-gold-300 text-sm font-semibold tracking-[0.14em] uppercase">
              Connect
            </p>
            <p className="mt-5 text-sm text-slate-300">Email</p>
            <p className="mt-1 text-sm font-semibold text-white">
              <Link
                href={`mailto:${siteMetadata.email}`}
                className="inline-flex min-h-11 items-center break-all"
              >
                {siteMetadata.email}
              </Link>
            </p>
            <div className="mt-6 flex flex-wrap gap-6">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} tone="light" />
              <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} tone="light" />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} tone="light" />
              <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} tone="light" />
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-4 text-sm text-slate-300">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              © {new Date().getFullYear()}{' '}
              <Link href="/" className="inline-flex min-h-11 items-center">
                {siteMetadata.title}
              </Link>
            </div>
            <div>
              Developed by{' '}
              <Link href="http://digitalsoup.in" className="inline-flex min-h-11 items-center">
                digitalsoup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
