'use client'

import { useEffect, useState, useMemo } from 'react'

type Synopsis = {
  id: number
  title: string
  studentName: string
  stream: string
  year: number
  researchArea?: string
  // status: string
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
  const [selectedAdvisor, setSelectedAdvisor] = useState<string>('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  // Fetch synopses
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

  // Extract unique values for filters
  const uniqueStreams = useMemo(
    () => [...new Set(synopses.map((s) => s.stream))].sort(),
    [synopses]
  )
  const uniqueYears = useMemo(
    () => [...new Set(synopses.map((s) => s.year))].sort((a, b) => b - a),
    [synopses]
  )
  const uniqueAdvisor = useMemo(
    () => [...new Set(synopses.map((s) => s.advisor))].sort(),
    [synopses]
  )

  // Filter synopses
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
      const matchesAdvisor = selectedAdvisor === '' || s.advisor === selectedAdvisor

      return matchesSearch && matchesStream && matchesYear && matchesAdvisor
    })
  }, [synopses, searchQuery, selectedStream, selectedYear, selectedAdvisor])

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedStream('')
    setSelectedYear('')
    setSelectedAdvisor('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="mb-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            PhD Synopsis Library
          </h1>
          <p className="text-slate-600">Explore research synopses from our doctoral students</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by title, student name, stream, or research area..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm placeholder-slate-400 transition outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
            />
            <svg
              className="absolute top-1/2 right-3 h-5 w-5 -translate-y-1/2 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Filters & Controls */}
        <div className="mb-8 space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Stream Filter */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Stream
                <select
                  value={selectedStream}
                  onChange={(e) => setSelectedStream(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm transition outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                >
                  <option value="">All Streams</option>
                  {uniqueStreams.map((stream) => (
                    <option key={stream} value={stream}>
                      {stream}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {/* Year Filter */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Year
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm transition outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                >
                  <option value="">All Years</option>
                  {uniqueYears.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {/* advisor Filter */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Guide
                <select
                  value={selectedAdvisor}
                  onChange={(e) => setSelectedAdvisor(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm transition outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                >
                  <option value="">All Guides</option>
                  {uniqueAdvisor.map((advisor) => (
                    <option key={advisor} value={advisor}>
                      {advisor}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {/* View Mode Toggle */}
            <div>
              <p className="mb-2 block text-sm font-medium text-slate-700">View</p>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition ${
                    viewMode === 'grid'
                      ? 'bg-sky-600 text-white'
                      : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition ${
                    viewMode === 'list'
                      ? 'bg-sky-600 text-white'
                      : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  List
                </button>
              </div>
            </div>
          </div>

          {/* Clear Filters Button */}
          {(searchQuery || selectedStream || selectedYear) && (
            <button
              onClick={clearFilters}
              className="inline-flex items-center gap-1 rounded-lg bg-slate-200 px-3 py-1 text-sm text-slate-700 transition hover:bg-slate-300"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Clear Filters
            </button>
          )}
        </div>

        {/* Results Info */}
        <div className="mb-6 text-sm text-slate-600">
          Showing <span className="font-semibold text-slate-900">{filteredSynopses.length}</span> of{' '}
          <span className="font-semibold text-slate-900">{synopses.length}</span> synopses
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-slate-300 border-t-sky-600"></div>
              <p className="text-slate-600">Loading synopses...</p>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && filteredSynopses.length === 0 && (
          <div className="rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 py-12 text-center">
            <svg
              className="mx-auto mb-4 h-12 w-12 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M20 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
            <h3 className="mb-1 text-lg font-medium text-slate-900">No synopses found</h3>
            <p className="mb-4 text-slate-600">Try adjusting your search or filter criteria</p>
            <button
              onClick={clearFilters}
              className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-700"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Grid View */}
        {!isLoading && filteredSynopses.length > 0 && viewMode === 'grid' && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredSynopses.map((synopsis) => (
              <div
                key={synopsis.id}
                className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-300 hover:border-sky-300 hover:shadow-md"
              >
                <div className="p-6">
                  <div className="mb-3 flex items-start justify-between gap-2">
                    <h3 className="line-clamp-2 text-lg font-semibold text-slate-900 transition group-hover:text-sky-600">
                      {synopsis.title}
                    </h3>
                    {/* <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium whitespace-nowrap ${
                        synopsis.status === 'published'
                          ? 'bg-green-100 text-green-800'
                          : synopsis.status === 'approved'
                            ? 'bg-blue-100 text-blue-800'
                            : synopsis.status === 'submitted'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {synopsis.status}
                    </span> */}
                  </div>

                  <div className="mb-4 space-y-2">
                    <p className="text-sm text-slate-700">
                      <span className="font-medium">Student:</span> {synopsis.studentName}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">
                        {synopsis.stream}
                      </span>
                      <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                        {synopsis.year}
                      </span>
                    </div>
                  </div>

                  {synopsis.researchArea && (
                    <p className="mb-3 text-sm text-slate-600">
                      <span className="font-medium">Research Area:</span> {synopsis.researchArea}
                    </p>
                  )}

                  {synopsis.advisor && (
                    <p className="mb-4 text-sm text-slate-600">
                      <span className="font-medium">Guide:</span> {synopsis.advisor}
                    </p>
                  )}

                  <a
                    href={synopsis.filePath}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-700"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    View Document
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* List View */}
        {!isLoading && filteredSynopses.length > 0 && viewMode === 'list' && (
          <div className="space-y-3">
            {filteredSynopses.map((synopsis) => (
              <div
                key={synopsis.id}
                className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:border-sky-300 hover:shadow-md"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start gap-3">
                      <div className="flex-1">
                        <h3 className="mb-2 line-clamp-2 text-base font-semibold text-slate-900">
                          {synopsis.title}
                        </h3>
                        <div className="space-y-1 text-sm text-slate-600">
                          <p>
                            <span className="font-medium">Student:</span> {synopsis.studentName}
                          </p>
                          <div className="flex flex-wrap gap-2 pt-1">
                            <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-2.5 py-0.5 text-xs font-medium text-sky-700">
                              {synopsis.stream}
                            </span>
                            <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700">
                              {synopsis.year}
                            </span>
                            {/* <span
                              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                synopsis.status === 'published'
                                  ? 'bg-green-100 text-green-800'
                                  : synopsis.status === 'approved'
                                    ? 'bg-blue-100 text-blue-800'
                                    : synopsis.status === 'submitted'
                                      ? 'bg-yellow-100 text-yellow-800'
                                      : 'bg-gray-100 text-gray-800'
                              }`}
                            >
                              {synopsis.status}
                            </span> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <a
                      href={synopsis.filePath}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium whitespace-nowrap text-white transition hover:bg-sky-700"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      View
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
