import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { ensureSeminarTable } from '@/lib/seminarTable'
import { todayInIndia } from '@/lib/seminarInput'
import SignOutButton from './SignOutButton'

// Admin home (signed-in only, checked in middleware): one place for every admin link.
export const dynamic = 'force-dynamic'
export const metadata = { title: 'Admin', robots: { index: false, follow: false } }

async function counts() {
  try {
    await ensureSeminarTable()
    const [synopses, drafts, upcoming] = await Promise.all([
      prisma.synopsis.count(),
      prisma.seminar.count({ where: { status: 'draft' } }),
      prisma.seminar.count({ where: { status: 'published', date: { gte: todayInIndia() } } }),
    ])
    return { synopses, drafts, upcoming }
  } catch {
    return null // the links still work if the database is unreachable
  }
}

type Tile = { href: string; title: string; text: string; badge?: string }

function TileGrid({ tiles }: { tiles: Tile[] }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {tiles.map((t) => {
        const body = (
          <>
            <div className="flex items-center justify-between gap-2">
              <span className="font-semibold text-gray-900 dark:text-gray-100">{t.title}</span>
              {t.badge && (
                <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900/40 dark:text-amber-200">
                  {t.badge}
                </span>
              )}
            </div>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{t.text}</p>
          </>
        )
        return (
          <Link
            key={t.href}
            href={t.href}
            className="block rounded-lg border border-gray-200 p-4 transition hover:border-sky-500 hover:shadow-sm dark:border-gray-700"
          >
            {body}
          </Link>
        )
      })}
    </div>
  )
}

export default async function AdminPage() {
  const c = await counts()

  const manage: Tile[] = [
    {
      href: '/manage-seminars',
      title: 'Seminars',
      text: 'Check drafts from the Gmail script, publish them, or add one by hand.',
      badge: c?.drafts ? `${c.drafts} to check` : undefined,
    },
    {
      href: '/manage-synopsis',
      title: 'Synopses',
      text: `Upload, edit or replace synopsis files.${c ? ` ${c.synopses} on the site.` : ''}`,
    },
  ]

  const site: Tile[] = [
    {
      href: '/seminars',
      title: 'Seminars page',
      text: c
        ? `${c.upcoming} upcoming seminar${c.upcoming === 1 ? '' : 's'} showing.`
        : 'Public list.',
    },
    { href: '/synopsis', title: 'Synopsis library', text: 'What visitors see.' },
    { href: '/', title: 'Home page', text: 'Includes the upcoming seminars section.' },
  ]

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-6 sm:px-6">
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-xl font-semibold sm:text-2xl">Admin</h1>
        <SignOutButton />
      </div>
      {!c && (
        <p className="mt-3 rounded-md bg-amber-50 p-3 text-sm text-amber-800 dark:bg-amber-900/30 dark:text-amber-200">
          Couldn&apos;t reach the database, so counts are hidden. If Supabase paused the project,
          restore it from the Supabase dashboard.
        </p>
      )}

      <h2 className="mt-6 mb-3 text-sm font-semibold tracking-wide text-gray-500 uppercase">
        Manage
      </h2>
      <TileGrid tiles={manage} />

      <h2 className="mt-8 mb-3 text-sm font-semibold tracking-wide text-gray-500 uppercase">
        Public pages
      </h2>
      <TileGrid tiles={site} />
    </div>
  )
}
