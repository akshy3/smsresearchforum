import { NextRequest, NextResponse } from 'next/server'
import { ADMIN_COOKIE, isValidAdminToken, sameText } from '@/lib/adminSession'

// Admin pages and API writes need the ADMIN_PASSWORD. People sign in on /admin-login,
// which sets a signed cookie; scripts can still send it as HTTP Basic auth (any username).
// Without ADMIN_PASSWORD set, they stay locked.
// Reading synopses (GET /api/synopsis) stays public for the /synopsis page.

function needsAdmin(req: NextRequest) {
  const { pathname } = req.nextUrl
  if (pathname.startsWith('/manage-synopsis') || pathname.startsWith('/users')) return true
  if (pathname.startsWith('/api/users')) return true
  if (pathname.startsWith('/api/synopsis')) return req.method !== 'GET' && req.method !== 'HEAD'
  return false
}

function hasBasicAuth(req: NextRequest, expected: string) {
  const header = req.headers.get('authorization') || ''
  if (!header.startsWith('Basic ')) return false
  try {
    const decoded = atob(header.slice(6))
    return sameText(decoded.slice(decoded.indexOf(':') + 1), expected)
  } catch {
    return false
  }
}

async function isAdmin(req: NextRequest) {
  const expected = process.env.ADMIN_PASSWORD
  if (!expected) return false
  if (await isValidAdminToken(req.cookies.get(ADMIN_COOKIE)?.value, expected)) return true
  return hasBasicAuth(req, expected)
}

export async function middleware(req: NextRequest) {
  if (!needsAdmin(req) || (await isAdmin(req))) return NextResponse.next()

  const { pathname, search } = req.nextUrl
  if (pathname.startsWith('/api/')) {
    return NextResponse.json({ error: 'Admin login required' }, { status: 401 })
  }

  const login = new URL('/admin-login', req.url)
  login.searchParams.set('next', pathname + search)
  return NextResponse.redirect(login)
}

export const config = {
  matcher: [
    '/manage-synopsis/:path*',
    '/users/:path*',
    '/api/users/:path*',
    '/api/synopsis/:path*',
  ],
}
