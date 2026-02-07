'use client'

import { useEffect, useMemo, useState } from 'react'

type Synopsis = {
  id: number
  title: string
  studentName: string
  stream: string
  year: number
  researchArea?: string
  status: string
  advisor?: string
  filePath: string
}

export default function SynopsisPage() {
  const [title, setTitle] = useState('')
  const [studentName, setStudentName] = useState('')
  const [stream, setStream] = useState('')
  const [year, setYear] = useState(new Date().getFullYear())
  const [researchArea, setResearchArea] = useState('')
  const [advisor, setAdvisor] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [list, setList] = useState<Synopsis[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editTitle, setEditTitle] = useState('')
  const [editStudentName, setEditStudentName] = useState('')
  const [editStream, setEditStream] = useState('')
  const [editYear, setEditYear] = useState(new Date().getFullYear())
  const [editResearchArea, setEditResearchArea] = useState('')
  const [editAdvisor, setEditAdvisor] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [deletingId, setDeletingId] = useState<number | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)

  const streamOptions = useMemo(
    () =>
      [...new Set(list.map((item) => item.stream.trim()).filter(Boolean))].sort((a, b) =>
        a.localeCompare(b)
      ),
    [list]
  )
  const advisorOptions = useMemo(
    () =>
      [...new Set(list.map((item) => (item.advisor || '').trim()).filter(Boolean))].sort((a, b) =>
        a.localeCompare(b)
      ),
    [list]
  )

  async function fetchData() {
    try {
      setIsLoading(true)
      const res = await fetch('/api/synopsis')
      const data = await res.json()
      setList(data)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  async function handleSubmit() {
    if (!file) return

    setIsSubmitting(true)
    try {
      const formData = new FormData()
      formData.append('title', title)
      formData.append('studentName', studentName)
      formData.append('stream', stream)
      formData.append('year', String(year))
      formData.append('researchArea', researchArea)
      formData.append('advisor', advisor)
      formData.append('file', file)

      await fetch('/api/synopsis', {
        method: 'POST',
        body: formData,
      })

      setTitle('')
      setStudentName('')
      setStream('')
      setYear(new Date().getFullYear())
      setResearchArea('')
      setAdvisor('')
      setFile(null)
      fetchData()
    } finally {
      setIsSubmitting(false)
    }
  }

  function openEdit(item: Synopsis) {
    setEditingId(item.id)
    setEditTitle(item.title)
    setEditStudentName(item.studentName)
    setEditStream(item.stream)
    setEditYear(item.year)
    setEditResearchArea(item.researchArea || '')
    setEditAdvisor(item.advisor || '')
  }

  async function handleEdit() {
    if (!editingId) return

    setIsEditing(true)
    try {
      await fetch(`/api/synopsis/${editingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: editTitle,
          studentName: editStudentName,
          stream: editStream,
          year: editYear,
          researchArea: editResearchArea,
          advisor: editAdvisor,
        }),
      })

      setEditingId(null)
      setEditTitle('')
      setEditStudentName('')
      setEditStream('')
      setEditYear(new Date().getFullYear())
      setEditResearchArea('')
      setEditAdvisor('')
      fetchData()
    } finally {
      setIsEditing(false)
    }
  }

  function closeEdit() {
    setEditingId(null)
    setEditTitle('')
    setEditStudentName('')
  }

  async function handleDelete() {
    if (!deletingId) return

    setIsDeleting(true)
    try {
      await fetch(`/api/synopsis/${deletingId}`, {
        method: 'DELETE',
      })

      setDeletingId(null)
      fetchData()
    } finally {
      setIsDeleting(false)
    }
  }

  function openDeleteConfirm(id: number) {
    setDeletingId(id)
  }

  function closeDeleteConfirm() {
    setDeletingId(null)
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-6 sm:px-6">
      <h1 className="mb-4 text-xl font-semibold sm:text-2xl">Add PhD Synopsis</h1>

      <div className="rounded-lg bg-white p-4 shadow-sm sm:p-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="flex flex-col">
            <span className="mb-1 text-sm font-medium text-gray-700">Title</span>
            <input
              className="block w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
              placeholder="Thesis title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-1 text-sm font-medium text-gray-700">Student</span>
            <input
              className="block w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
              placeholder="Student name"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-1 text-sm font-medium text-gray-700">Stream</span>
            <input
              list="stream-options"
              className="block w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
              placeholder="e.g., Marketing, Finance, Operations"
              value={stream}
              onChange={(e) => setStream(e.target.value)}
            />
            <datalist id="stream-options">
              {streamOptions.map((option) => (
                <option key={option} value={option} />
              ))}
            </datalist>
          </label>

          <label className="flex flex-col">
            <span className="mb-1 text-sm font-medium text-gray-700">Year</span>
            <input
              type="number"
              className="block w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
              placeholder="2026"
              value={year}
              onChange={(e) => setYear(parseInt(e.target.value))}
            />
          </label>

          <label className="flex flex-col sm:col-span-2">
            <span className="mb-1 text-sm font-medium text-gray-700">Research Area</span>
            <input
              className="block w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
              placeholder="e.g., Digital Marketing, Consumer Behavior"
              value={researchArea}
              onChange={(e) => setResearchArea(e.target.value)}
            />
          </label>

          <label className="flex flex-col sm:col-span-2">
            <span className="mb-1 text-sm font-medium text-gray-700">Advisor</span>
            <input
              list="advisor-options"
              className="block w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
              placeholder="Faculty advisor name"
              value={advisor}
              onChange={(e) => setAdvisor(e.target.value)}
            />
            <datalist id="advisor-options">
              {advisorOptions.map((option) => (
                <option key={option} value={option} />
              ))}
            </datalist>
          </label>
        </div>

        <div className="mt-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <input
              id="synopsis-file"
              type="file"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
              className="hidden"
            />

            <label
              htmlFor="synopsis-file"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-md bg-gray-100 px-3 py-2 text-sm text-gray-700 hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 2a1 1 0 00-1 1v6H5a1 1 0 000 2h2v6a1 1 0 102 0v-6h2a1 1 0 100-2H9V3a1 1 0 00-1-1z" />
              </svg>
              <span>Choose file</span>
            </label>

            <div className="min-w-0 flex-1">
              <div className="truncate text-sm text-gray-600">
                {file ? file.name : 'No file selected'}
              </div>
              <div className="text-xs text-gray-400">PDF, DOC, DOCX only, max 10MB</div>
            </div>

            {file && (
              <button
                type="button"
                onClick={() => setFile(null)}
                className="text-sm text-red-500 hover:text-red-600"
              >
                Remove
              </button>
            )}
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={handleSubmit}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
            disabled={!title || !studentName || !stream || !file || isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                <span>Submitting...</span>
              </>
            ) : (
              'Submit'
            )}
          </button>
        </div>
      </div>

      <h2 className="mt-8 mb-4 text-lg font-semibold sm:text-xl">Submitted Synopsis</h2>

      {isLoading ? (
        <div className="flex items-center justify-center gap-2 py-8 text-gray-500">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-sky-600"></div>
          <span className="text-sm">Loading synopsis...</span>
        </div>
      ) : list.length === 0 ? (
        <div className="text-sm text-gray-500">No synopsis submitted yet.</div>
      ) : (
        <div className="grid gap-4">
          {list.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow sm:flex-row sm:items-start sm:justify-between"
            >
              <div className="min-w-0 flex-1">
                <div className="line-clamp-2 text-sm font-medium text-gray-800 sm:text-base">
                  {item.title}
                </div>
                <div className="text-sm text-gray-500">{item.studentName}</div>
                <div className="mt-2 flex flex-col gap-2 text-xs text-gray-600 sm:flex-row sm:flex-wrap sm:gap-4">
                  <span>
                    <strong>Stream:</strong> {item.stream}
                  </span>
                  <span>
                    <strong>Year:</strong> {item.year}
                  </span>
                  {item.researchArea && (
                    <span className="line-clamp-1">
                      <strong>Area:</strong> {item.researchArea}
                    </span>
                  )}
                  {item.advisor && (
                    <span className="line-clamp-1">
                      <strong>Advisor:</strong> {item.advisor}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center">
                <a
                  href={item.filePath}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-gray-100 px-3 py-1.5 text-center text-xs font-medium text-gray-700 hover:bg-gray-200 sm:whitespace-nowrap"
                >
                  View File
                </a>
                <button
                  onClick={() => openEdit(item)}
                  className="inline-flex items-center justify-center rounded-md bg-blue-100 px-3 py-1.5 text-center text-xs font-medium text-blue-700 hover:bg-blue-200 sm:whitespace-nowrap"
                >
                  Edit
                </button>
                <button
                  onClick={() => openDeleteConfirm(item.id)}
                  className="inline-flex items-center justify-center rounded-md bg-red-100 px-3 py-1.5 text-center text-xs font-medium text-red-700 hover:bg-red-200 sm:whitespace-nowrap"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Edit Modal */}
      {editingId !== null && (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-end justify-center bg-black p-4 sm:items-center">
          <div className="max-h-screen w-full max-w-2xl overflow-y-auto rounded-t-lg bg-white p-4 shadow-lg sm:rounded-lg sm:p-6">
            <h2 className="mb-4 text-lg font-semibold sm:text-xl">Edit Synopsis</h2>

            <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="flex flex-col">
                <span className="mb-1 text-sm font-medium text-gray-700">Title</span>
                <input
                  className="rounded-md border border-gray-200 px-3 py-2 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
                  placeholder="Thesis title"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
              </label>

              <label className="flex flex-col">
                <span className="mb-1 text-sm font-medium text-gray-700">Student</span>
                <input
                  className="rounded-md border border-gray-200 px-3 py-2 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
                  placeholder="Student name"
                  value={editStudentName}
                  onChange={(e) => setEditStudentName(e.target.value)}
                />
              </label>

              <label className="flex flex-col">
                <span className="mb-1 text-sm font-medium text-gray-700">Stream</span>
                <input
                  list="edit-stream-options"
                  className="rounded-md border border-gray-200 px-3 py-2 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
                  placeholder="e.g., Marketing, Finance, Operations"
                  value={editStream}
                  onChange={(e) => setEditStream(e.target.value)}
                />
                <datalist id="edit-stream-options">
                  {streamOptions.map((option) => (
                    <option key={option} value={option} />
                  ))}
                </datalist>
              </label>

              <label className="flex flex-col">
                <span className="mb-1 text-sm font-medium text-gray-700">Year</span>
                <input
                  type="number"
                  className="rounded-md border border-gray-200 px-3 py-2 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
                  value={editYear}
                  onChange={(e) => setEditYear(parseInt(e.target.value))}
                />
              </label>

              <label className="flex flex-col sm:col-span-2">
                <span className="mb-1 text-sm font-medium text-gray-700">Research Area</span>
                <input
                  className="rounded-md border border-gray-200 px-3 py-2 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
                  placeholder="e.g., Digital Marketing, Consumer Behavior"
                  value={editResearchArea}
                  onChange={(e) => setEditResearchArea(e.target.value)}
                />
              </label>

              <label className="flex flex-col sm:col-span-2">
                <span className="mb-1 text-sm font-medium text-gray-700">Advisor</span>
                <input
                  list="edit-advisor-options"
                  className="rounded-md border border-gray-200 px-3 py-2 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
                  placeholder="Faculty advisor name"
                  value={editAdvisor}
                  onChange={(e) => setEditAdvisor(e.target.value)}
                />
                <datalist id="edit-advisor-options">
                  {advisorOptions.map((option) => (
                    <option key={option} value={option} />
                  ))}
                </datalist>
              </label>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <button
                onClick={handleEdit}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={isEditing}
              >
                {isEditing ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    <span>Saving...</span>
                  </>
                ) : (
                  'Save'
                )}
              </button>
              <button
                onClick={closeEdit}
                className="flex-1 rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 disabled:opacity-50"
                disabled={isEditing}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deletingId !== null && (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-end justify-center bg-black p-4 sm:items-center">
          <div className="w-full max-w-md rounded-t-lg bg-white p-4 shadow-lg sm:rounded-lg sm:p-6">
            <h2 className="mb-4 text-lg font-semibold">Delete Synopsis</h2>
            <p className="mb-6 text-sm text-gray-600">
              Are you sure you want to delete this synopsis? This action cannot be undone.
            </p>

            <div className="flex flex-col gap-2 sm:flex-row">
              <button
                onClick={handleDelete}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={isDeleting}
              >
                {isDeleting ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    <span>Deleting...</span>
                  </>
                ) : (
                  'Delete'
                )}
              </button>
              <button
                onClick={closeDeleteConfirm}
                className="flex-1 rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 disabled:opacity-50"
                disabled={isDeleting}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
