'use client'

import { FormEvent, Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'

function LoginForm() {
  const searchParams = useSearchParams()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Only follow same-site paths after login.
  const nextParam = searchParams.get('next') || '/manage-synopsis'
  const next =
    nextParam.startsWith('/') && !nextParam.startsWith('//') ? nextParam : '/manage-synopsis'

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      if (res.ok) {
        window.location.assign(next)
        return
      }
      setError('That password is not correct.')
    } catch {
      setError('Could not reach the server. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg bg-white p-4 shadow-sm sm:p-6">
      <label className="flex flex-col">
        <span className="mb-1 text-sm font-medium text-gray-700">Admin password</span>
        <input
          type="password"
          autoComplete="current-password"
          required
          className="block w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-900 focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {error && (
        <p role="alert" className="mt-3 text-sm text-red-600">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={isSubmitting || !password}
        className="mt-4 w-full rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700 disabled:opacity-50"
      >
        {isSubmitting ? 'Signing in…' : 'Sign in'}
      </button>
    </form>
  )
}

export default function AdminLoginPage() {
  return (
    <div className="mx-auto w-full max-w-sm px-4 py-12">
      <h1 className="mb-4 text-xl font-semibold sm:text-2xl">Admin sign in</h1>
      <Suspense>
        <LoginForm />
      </Suspense>
    </div>
  )
}
