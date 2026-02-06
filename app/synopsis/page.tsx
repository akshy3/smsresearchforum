'use client'

import { useEffect, useState, useMemo } from 'react'

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
  createdAt: string
}

export default function SynopsisLibrary() {
  const [synopses, setSynopses] = useState<Synopsis[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedStream, setSelectedStream] = useState<string>('')
  const [selectedYear, setSelectedYear] = useState<string>('')
  const [selectedStatus, setSelectedStatus] = useState<string>('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  useEffect(() => {
    const fetchSynopses = async () => {
      try {
        setIsLoading(true)
        const res = await fetch('/api/synopsis')
        const data = await res.json()
        setSynopses(data)
      } catch (error) {
        console.error('Error fetching synopses:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchSynopses()
  }, [])

  const uniqueStreams = useMemo(
    () => [...new Set(synopses.map((s) => s.stream))].sort(),
    [synopses]
  )

  const uniqueYears = useMemo(
    () => [...new Set(synopses.map((s) => s.year))].sort((a, b) => b - a),
    [synopses]
  )

  const uniqueStatus = useMemo(() => [...new Set(synopses.map((s) => s.status))].sort(), [synopses])

  const filteredSynopses = useMemo(() => {
    return synopses.filter((s) => {
      const matchesSearch =
        searchQuery === '' ||
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.stream.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (s.researchArea?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false)

      const matchesStream = selectedStream === '' || s.stream === selectedStream
      const matchesYear = selectedYear === '' || s.year === parseInt(selectedYear)
      const matchesStatus = selectedStatus === '' || s.status === selectedStatus

      return matchesSearch && matchesStream && matchesYear && matchesStatus
    })
  }, [synopses, searchQuery, selectedStream, selectedYear, selectedStatus])

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedStream('')
    setSelectedYear('')
    setSelectedStatus('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="mb-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            PhD Synopsis Library
          </h1>
          <p className="text-slate-600">Explore research synopses from our doctoral students</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Search */}
        <div className="mb-8">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            id="search"
            type="text"
            placeholder="Search by title, student name, stream, or research area..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
          />
        </div>

        {/* Filters */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Stream */}
          <div>
            <label htmlFor="stream" className="mb-2 block text-sm font-medium text-slate-700">
              Stream
            </label>
            <select
              id="stream"
              value={selectedStream}
              onChange={(e) => setSelectedStream(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
            >
              <option value="">All Streams</option>
              {uniqueStreams.map((stream) => (
                <option key={stream} value={stream}>
                  {stream}
                </option>
              ))}
            </select>
          </div>

          {/* Year */}
          <div>
            <label htmlFor="year" className="mb-2 block text-sm font-medium text-slate-700">
              Year
            </label>
            <select
              id="year"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
            >
              <option value="">All Years</option>
              {uniqueYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          {/* Status */}
          <div>
            <label htmlFor="status" className="mb-2 block text-sm font-medium text-slate-700">
              Status
            </label>
            <select
              id="status"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
            >
              <option value="">All Status</option>
              {uniqueStatus.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          {/* View (Fixed) */}
          <div>
            <p id="view-label" className="mb-2 block text-sm font-medium text-slate-700">
              View
            </p>
            <div role="group" aria-labelledby="view-label" className="flex gap-2">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium ${
                  viewMode === 'grid' ? 'bg-sky-600 text-white' : 'border border-slate-300 bg-white'
                }`}
              >
                Grid
              </button>
              <button
                type="button"
                onClick={() => setViewMode('list')}
                className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium ${
                  viewMode === 'list' ? 'bg-sky-600 text-white' : 'border border-slate-300 bg-white'
                }`}
              >
                List
              </button>
            </div>
          </div>
        </div>

        {!isLoading && (
          <div className="mb-6 text-sm text-slate-600">
            Showing {filteredSynopses.length} of {synopses.length} synopses
          </div>
        )}
      </div>
    </div>
  )
}
