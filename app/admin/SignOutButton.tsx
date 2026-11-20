'use client'

export default function SignOutButton() {
  async function signOut() {
    await fetch('/api/admin/login', { method: 'DELETE' })
    window.location.assign('/')
  }
  return (
    <button
      type="button"
      onClick={signOut}
      className="rounded-md border border-gray-300 px-3 py-1.5 text-sm hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800"
    >
      Sign out
    </button>
  )
}
