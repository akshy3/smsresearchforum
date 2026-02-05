'use client'

import { useEffect, useState } from 'react'

type Synopsis = {
  id: number
  title: string
  studentName: string
  filePath: string
}

export default function SynopsisPage() {
  const [title, setTitle] = useState('')
  const [studentName, setStudentName] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [list, setList] = useState<Synopsis[]>([])

  async function fetchData() {
    const res = await fetch('/api/synopsis')
    const data = await res.json()
    setList(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  async function handleSubmit() {
    if (!file) return

    const formData = new FormData()
    formData.append('title', title)
    formData.append('studentName', studentName)
    formData.append('file', file)

    await fetch('/api/synopsis', {
      method: 'POST',
      body: formData,
    })

    setTitle('')
    setStudentName('')
    setFile(null)
    fetchData()
  }

  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="mb-4 text-2xl font-semibold">Add PhD Synopsis</h1>

      <div className="rounded-lg bg-white p-6 shadow-sm">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="flex flex-col">
            <span className="mb-1 text-sm font-medium text-gray-700">Title</span>
            <input
              className="block w-full rounded-md border border-gray-200 px-3 py-2 focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
              placeholder="Thesis title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-1 text-sm font-medium text-gray-700">Student</span>
            <input
              className="block w-full rounded-md border border-gray-200 px-3 py-2 focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
              placeholder="Student name"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
          </label>
        </div>

        <div className="mt-4">
          <div className="flex items-center gap-4">
            <input
              id="synopsis-file"
              type="file"
              accept="application/pdf"
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
              className="hidden"
            />

            <label
              htmlFor="synopsis-file"
              className="inline-flex cursor-pointer items-center gap-2 rounded-md bg-gray-100 px-3 py-2 text-gray-700 hover:bg-gray-200"
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
              <span className="text-sm">Choose file</span>
            </label>

            <div className="min-w-0 flex-1">
              <div className="truncate text-sm text-gray-600">
                {file ? file.name : 'No file selected'}
              </div>
              <div className="text-xs text-gray-400">PDF only, max 10MB</div>
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
            className="inline-flex items-center rounded-md bg-sky-600 px-4 py-2 text-white hover:bg-sky-700 disabled:opacity-50"
            disabled={!title || !studentName || !file}
          >
            Submit
          </button>
        </div>
      </div>

      <h2 className="mt-8 mb-4 text-xl font-semibold">Submitted Synopsis</h2>

      {list.length === 0 ? (
        <div className="text-gray-500">No synopsis submitted yet.</div>
      ) : (
        <div className="grid gap-4">
          {list.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-lg bg-white p-4 shadow"
            >
              <div>
                <div className="font-medium text-gray-800">{item.title}</div>
                <div className="text-sm text-gray-500">{item.studentName}</div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={item.filePath}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-md bg-gray-100 px-3 py-1.5 text-gray-700 hover:bg-gray-200"
                >
                  View PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
