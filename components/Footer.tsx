import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-800/70 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-cyan-300 uppercase">
              SMS Research Forum
            </p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
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
            <p className="text-sm font-semibold tracking-[0.18em] text-cyan-300 uppercase">
              Quick Links
            </p>
            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <div>
                <Link href="/updates" className="transition hover:text-white">
                  Updates
                </Link>
              </div>
              <div>
                <Link href="/about#committees" className="transition hover:text-white">
                  Committees
                </Link>
              </div>
              <div>
                <Link href="/downloads" className="transition hover:text-white">
                  Downloads
                </Link>
              </div>
              <div>
                <Link href="/conference-2026/participation" className="transition hover:text-white">
                  Participation Guide
                </Link>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-cyan-300 uppercase">
              Connect
            </p>
            <p className="mt-5 text-sm text-slate-300">Email</p>
            <p className="mt-1 text-sm font-semibold text-white">
              <Link href={`mailto:${siteMetadata.email}`}>{siteMetadata.email}</Link>
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
              <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
              <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-4 text-sm text-slate-300">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              © {new Date().getFullYear()} <Link href="/">{siteMetadata.title}</Link>
            </div>
            <div>
              Developed by <Link href="http://digitalsoup.in">digitalsoup</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
