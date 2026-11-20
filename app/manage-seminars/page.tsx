'use client'

import { useCallback, useEffect, useState } from 'react'
import { SEMINAR_KIND_LABEL, todayInIndia } from '@/lib/seminarInput'

type Seminar = {
  id: number
  kind: string
  scholar: string
  title: string
  guide: string | null
  date: string | null
  time: string | null
  venue: string | null
  meetingLink: string | null
  status: string
  source: string
  rawText: string | null
  createdAt: string
}

type Draft = Omit<Seminar, 'id' | 'status' | 'source' | 'rawText' | 'createdAt'>

const EMPTY: Draft = {
  kind: 'pre-synopsis',
  scholar: '',
  title: '',
  guide: '',
  date: '',
  time: '',
  venue: 'Hall of Fame, School of Management Studies',
  meetingLink: '',
}

const inputClass =
  'block w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-900 focus:border-sky-500 focus:ring-2 focus:ring-sky-500'

async function errorFrom(res: Response) {
  const body = await res.json().catch(() => null)
  return body?.error || `Something went wrong (error ${res.status}).`
}

function SeminarFields({ value, onChange }: { value: Draft; onChange: (d: Draft) => void }) {
  const set = (key: keyof Draft) => (e: { target: { value: string } }) =>
    onChange({ ...value, [key]: e.target.value })
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <label className="flex flex-col text-sm">
        <span className="mb-1 font-medium text-gray-700">Type</span>
        <select className={inputClass} value={value.kind} onChange={set('kind')}>
          {Object.entries(SEMINAR_KIND_LABEL).map(([k, label]) => (
            <option key={k} value={k}>
              {label}
            </option>
          ))}
        </select>
      </label>
      <label className="flex flex-col text-sm">
        <span className="mb-1 font-medium text-gray-700">Scholar</span>
        <input className={inputClass} value={value.scholar} onChange={set('scholar')} />
      </label>
      <label className="flex flex-col text-sm sm:col-span-2">
        <span className="mb-1 font-medium text-gray-700">Thesis title</span>
        <input className={inputClass} value={value.title} onChange={set('title')} />
      </label>
      <label className="flex flex-col text-sm">
        <span className="mb-1 font-medium text-gray-700">Guide</span>
        <input className={inputClass} value={value.guide ?? ''} onChange={set('guide')} />
      </label>
      <label className="flex flex-col text-sm">
        <span className="mb-1 font-medium text-gray-700">Date</span>
        <input type="date" className={inputClass} value={value.date ?? ''} onChange={set('date')} />
      </label>
      <label className="flex flex-col text-sm">
        <span className="mb-1 font-medium text-gray-700">Time</span>
        <input
          className={inputClass}
          placeholder="e.g. 2:30 PM"
          value={value.time ?? ''}
          onChange={set('time')}
        />
      </label>
      <label className="flex flex-col text-sm">
        <span className="mb-1 font-medium text-gray-700">Venue</span>
        <input className={inputClass} value={value.venue ?? ''} onChange={set('venue')} />
      </label>
      <label className="flex flex-col text-sm sm:col-span-2">
        <span className="mb-1 font-medium text-gray-700">Online link (optional)</span>
        <input
          className={inputClass}
          placeholder="https://meet.google.com/..."
          value={value.meetingLink ?? ''}
          onChange={set('meetingLink')}
        />
      </label>
    </div>
  )
}

function SeminarCard({ seminar, onChanged }: { seminar: Seminar; onChanged: () => void }) {
  const [draft, setDraft] = useState<Draft>({
    kind: seminar.kind,
    scholar: seminar.scholar,
    title: seminar.title,
    guide: seminar.guide ?? '',
    date: seminar.date ?? '',
    time: seminar.time ?? '',
    venue: seminar.venue ?? '',
    meetingLink: seminar.meetingLink ?? '',
  })
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const [open, setOpen] = useState(seminar.status === 'draft')

  async function save(status?: string) {
    setBusy(true)
    setError('')
    try {
      const res = await fetch(`/api/seminars/${seminar.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(status ? { ...draft, status } : draft),
      })
      if (!res.ok) return setError(await errorFrom(res))
      onChanged()
    } catch {
      setError('Could not reach the server. Please try again.')
    } finally {
      setBusy(false)
    }
  }

  async function remove() {
    if (!window.confirm('Delete this seminar? This cannot be undone.')) return
    setBusy(true)
    await fetch(`/api/seminars/${seminar.id}`, { method: 'DELETE' })
    setBusy(false)
    onChanged()
  }

  const badge =
    seminar.status === 'published'
      ? 'bg-green-100 text-green-800'
      : seminar.status === 'draft'
        ? 'bg-amber-100 text-amber-800'
        : 'bg-gray-100 text-gray-600'

  return (
    <li className="rounded-lg bg-white p-4 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className={`rounded-full px-2 py-0.5 font-semibold ${badge}`}>
              {seminar.status}
            </span>
            <span className="text-gray-500">
              {SEMINAR_KIND_LABEL[seminar.kind]} · {seminar.date || 'no date'}
              {seminar.source === 'gmail' && ' · from Gmail'}
            </span>
          </div>
          <div className="mt-1 font-medium text-gray-900">{seminar.scholar}</div>
          <div className="line-clamp-2 text-sm text-gray-600">{seminar.title}</div>
        </div>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="text-sm font-medium text-sky-700 hover:text-sky-800"
        >
          {open ? 'Close' : 'Edit'}
        </button>
      </div>

      {open && (
        <div className="mt-4 space-y-3">
          <SeminarFields value={draft} onChange={setDraft} />
          {seminar.rawText && (
            <details className="rounded-md bg-gray-50 p-3 text-xs text-gray-700">
              <summary className="cursor-pointer font-medium">
                Text read from the notice (check the fields against this)
              </summary>
              <pre className="mt-2 max-h-64 overflow-auto font-sans whitespace-pre-wrap">
                {seminar.rawText}
              </pre>
            </details>
          )}
          {error && (
            <p role="alert" className="text-sm text-red-600">
              {error}
            </p>
          )}
          <div className="flex flex-wrap gap-2">
            {seminar.status !== 'published' && (
              <button
                type="button"
                disabled={busy}
                onClick={() => save('published')}
                className="rounded-md bg-green-600 px-3 py-2 text-sm font-medium text-white hover:bg-green-700 disabled:opacity-50"
              >
                Publish
              </button>
            )}
            <button
              type="button"
              disabled={busy}
              onClick={() => save()}
              className="rounded-md bg-sky-600 px-3 py-2 text-sm font-medium text-white hover:bg-sky-700 disabled:opacity-50"
            >
              Save
            </button>
            {seminar.status === 'published' && (
              <button
                type="button"
                disabled={busy}
                onClick={() => save('draft')}
                className="rounded-md bg-gray-200 px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-300 disabled:opacity-50"
              >
                Unpublish
              </button>
            )}
            {seminar.status === 'draft' && (
              <button
                type="button"
                disabled={busy}
                onClick={() => save('rejected')}
                className="rounded-md bg-gray-200 px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-300 disabled:opacity-50"
              >
                Not a seminar
              </button>
            )}
            <button
              type="button"
              disabled={busy}
              onClick={remove}
              className="rounded-md bg-red-100 px-3 py-2 text-sm font-medium text-red-700 hover:bg-red-200 disabled:opacity-50"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </li>
  )
}

export default function ManageSeminarsPage() {
  const [seminars, setSeminars] = useState<Seminar[]>([])
  const [token, setToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState('')
  const [newSeminar, setNewSeminar] = useState<Draft>(EMPTY)
  const [addError, setAddError] = useState('')
  const [adding, setAdding] = useState(false)
  const [copied, setCopied] = useState(false)

  const load = useCallback(async () => {
    try {
      const res = await fetch('/api/seminars/admin')
      if (!res.ok) throw new Error(await errorFrom(res))
      const data = await res.json()
      setSeminars(data.seminars)
      setToken(data.intakeToken)
      setLoadError('')
    } catch (e) {
      setLoadError(e instanceof Error ? e.message : 'Could not load seminars.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  async function add(status: string) {
    setAdding(true)
    setAddError('')
    try {
      const res = await fetch('/api/seminars', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...newSeminar, status }),
      })
      if (!res.ok) return setAddError(await errorFrom(res))
      setNewSeminar(EMPTY)
      load()
    } finally {
      setAdding(false)
    }
  }

  const today = todayInIndia()
  const drafts = seminars.filter((s) => s.status === 'draft')
  const upcoming = seminars
    .filter((s) => s.status === 'published' && (s.date ?? '') >= today)
    .sort((a, b) => (a.date ?? '').localeCompare(b.date ?? ''))
  const past = seminars.filter((s) => s.status === 'published' && (s.date ?? '') < today)

  const section = (title: string, list: Seminar[], empty: string) => (
    <section className="mt-8">
      <h2 className="mb-3 text-lg font-semibold">
        {title} <span className="text-sm font-normal text-gray-500">({list.length})</span>
      </h2>
      {list.length === 0 ? (
        <p className="text-sm text-gray-500">{empty}</p>
      ) : (
        <ul className="space-y-3">
          {list.map((s) => (
            <SeminarCard key={`${s.id}-${s.status}-${s.date}`} seminar={s} onChanged={load} />
          ))}
        </ul>
      )}
    </section>
  )

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-6 sm:px-6">
      <h1 className="text-xl font-semibold sm:text-2xl">Manage seminars</h1>
      <p className="mt-1 text-sm text-gray-600">
        Seminar notices from OFFICE SMS arrive here as drafts each morning. Check each one against
        the notice text, then Publish it to show it on the site. Seminars drop off the site after
        their date.
      </p>

      {loading && <p className="mt-6 text-sm text-gray-500">Loading…</p>}
      {loadError && (
        <p role="alert" className="mt-6 text-sm text-red-600">
          {loadError}
        </p>
      )}

      {!loading && !loadError && (
        <>
          {section('Drafts to check', drafts, 'No drafts waiting.')}
          {section('Upcoming (published)', upcoming, 'No upcoming seminars published.')}

          <section className="mt-8 rounded-lg bg-white p-4 shadow-sm">
            <h2 className="mb-3 text-lg font-semibold">Add a seminar by hand</h2>
            <SeminarFields value={newSeminar} onChange={setNewSeminar} />
            {addError && (
              <p role="alert" className="mt-3 text-sm text-red-600">
                {addError}
              </p>
            )}
            <div className="mt-3 flex gap-2">
              <button
                type="button"
                disabled={adding || !newSeminar.scholar || !newSeminar.title}
                onClick={() => add('published')}
                className="rounded-md bg-green-600 px-3 py-2 text-sm font-medium text-white hover:bg-green-700 disabled:opacity-50"
              >
                Add and publish
              </button>
              <button
                type="button"
                disabled={adding || !newSeminar.scholar || !newSeminar.title}
                onClick={() => add('draft')}
                className="rounded-md bg-gray-200 px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-300 disabled:opacity-50"
              >
                Save as draft
              </button>
            </div>
          </section>

          {section('Past (published)', past, 'None yet.')}

          <section className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700">
            <h2 className="mb-2 font-semibold">Gmail script token</h2>
            <p>
              Paste this into the Gmail script&apos;s settings (see
              <code className="mx-1">scripts/gmail-seminar-intake.md</code>). Keep it private. It
              changes if the admin password changes.
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <code className="max-w-full truncate rounded bg-white px-2 py-1 text-xs">
                {token ? `${token.slice(0, 6)}…${token.slice(-4)}` : 'ADMIN_PASSWORD is not set'}
              </code>
              {token && (
                <button
                  type="button"
                  onClick={async () => {
                    await navigator.clipboard.writeText(token)
                    setCopied(true)
                    setTimeout(() => setCopied(false), 2000)
                  }}
                  className="rounded-md bg-white px-3 py-1 text-xs font-medium text-gray-800 shadow-sm hover:bg-gray-100"
                >
                  {copied ? 'Copied' : 'Copy token'}
                </button>
              )}
            </div>
          </section>
        </>
      )}
    </div>
  )
}
