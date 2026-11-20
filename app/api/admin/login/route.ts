import { NextResponse } from 'next/server'
import { ADMIN_COOKIE, ADMIN_SESSION_SECONDS, createAdminToken, sameText } from '@/lib/adminSession'

// POST { password } logs in by setting the admin cookie; DELETE logs out.

export async function POST(req: Request) {
  const expected = process.env.ADMIN_PASSWORD
  const { password } = await req.json().catch(() => ({ password: '' }))

  if (!expected || typeof password !== 'string' || !sameText(password, expected)) {
    return NextResponse.json({ error: 'Wrong password' }, { status: 401 })
  }

  const res = NextResponse.json({ ok: true })
  res.cookies.set(ADMIN_COOKIE, await createAdminToken(expected), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: ADMIN_SESSION_SECONDS,
  })
  return res
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true })
  res.cookies.delete(ADMIN_COOKIE)
  return res
}
