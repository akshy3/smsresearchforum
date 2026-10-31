import { NextRequest, NextResponse } from 'next/server'

// Admin pages and API writes need the ADMIN_PASSWORD (any username) through the
// browser's own login prompt. Without ADMIN_PASSWORD set, they stay locked.
// Reading synopses (GET /api/synopsis) stays public for the /synopsis page.

const REALM = 'SMS Research Forum admin'

function needsAdmin(req: NextRequest) {
  const { pathname } = req.nextUrl
  if (pathname.startsWith('/manage-synopsis') || pathname.startsWith('/users')) return true
  if (pathname.startsWith('/api/users')) return true
  if (pathname.startsWith('/api/synopsis')) return req.method !== 'GET' && req.method !== 'HEAD'
  return false
}

function sameText(a: string, b: string) {
  if (a.length !== b.length) return false
  let diff = 0
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i)
  return diff === 0
}

function isAdmin(req: NextRequest) {
  const expected = process.env.ADMIN_PASSWORD
  const header = req.headers.get('authorization') || ''
  if (!expected || !header.startsWith('Basic ')) return false
  try {
    const decoded = atob(header.slice(6))
    return sameText(decoded.slice(decoded.indexOf(':') + 1), expected)
  } catch {
    return false
  }
}

export function middleware(req: NextRequest) {
  if (!needsAdmin(req) || isAdmin(req)) return NextResponse.next()
  return new NextResponse('Admin login required', {
    status: 401,
    headers: { 'WWW-Authenticate': `Basic realm="${REALM}", charset="UTF-8"` },
  })
}

export const config = {
  matcher: [
    '/manage-synopsis/:path*',
    '/users/:path*',
    '/api/users/:path*',
    '/api/synopsis/:path*',
  ],
}
