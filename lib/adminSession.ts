// Admin login session: a signed cookie that proves the ADMIN_PASSWORD was entered.
// The token is "<expiry ms>.<HMAC-SHA256 of expiry, keyed by ADMIN_PASSWORD>", so
// changing ADMIN_PASSWORD logs everyone out. Uses Web Crypto so it runs in middleware.

export const ADMIN_COOKIE = 'sms_admin'
export const ADMIN_SESSION_SECONDS = 7 * 24 * 60 * 60

const encoder = new TextEncoder()

export async function sign(value: string, secret: string) {
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )
  const sig = await crypto.subtle.sign('HMAC', key, encoder.encode(value))
  return Array.from(new Uint8Array(sig), (b) => b.toString(16).padStart(2, '0')).join('')
}

export function sameText(a: string, b: string) {
  if (a.length !== b.length) return false
  let diff = 0
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i)
  return diff === 0
}

export async function createAdminToken(secret: string) {
  const expiry = String(Date.now() + ADMIN_SESSION_SECONDS * 1000)
  return `${expiry}.${await sign(expiry, secret)}`
}

/**
 * The token the Gmail script sends with seminar notices. It is derived from
 * ADMIN_PASSWORD, so admins can read it on /manage-seminars, and changing the
 * password changes it.
 */
export async function seminarIntakeToken(secret: string | undefined) {
  return secret ? sign('seminar-intake-v1', secret) : null
}

export async function isValidAdminToken(token: string | undefined, secret: string | undefined) {
  if (!token || !secret) return false
  const [expiry, sig] = token.split('.')
  if (!expiry || !sig || !(Number(expiry) > Date.now())) return false
  return sameText(sig, await sign(expiry, secret))
}
