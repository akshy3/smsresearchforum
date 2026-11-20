// Server-side checks for synopsis uploads and edits.

// Vercel rejects request bodies over 4.5 MB, so files must stay under that with the form fields.
export const MAX_FILE_BYTES = 4 * 1024 * 1024
export const MAX_FILE_LABEL = '4 MB'

const FILE_TYPES: Record<string, { mime: string; magic: number[] }> = {
  pdf: { mime: 'application/pdf', magic: [0x25, 0x50, 0x44, 0x46] }, // %PDF
  docx: {
    mime: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    magic: [0x50, 0x4b, 0x03, 0x04], // zip
  },
  doc: { mime: 'application/msword', magic: [0xd0, 0xcf, 0x11, 0xe0] }, // OLE2
}

/** Trims and collapses runs of whitespace, so " Mukul  Dev " becomes "Mukul Dev". */
export function cleanText(value: unknown) {
  return typeof value === 'string' ? value.replace(/\s+/g, ' ').trim() : ''
}

export type SynopsisFields = {
  title: string
  studentName: string
  stream: string
  year: number
  researchArea: string | null
  advisor: string | null
}

const REQUIRED = ['title', 'studentName', 'stream', 'year'] as const

/**
 * Picks only the editable fields and cleans them. With `partial`, missing fields are left
 * out (for edits); otherwise the required ones must be present (for new entries).
 */
export function readSynopsisFields(
  get: (key: string) => unknown,
  { partial = false } = {}
): { data: Partial<SynopsisFields>; error?: string } {
  const data: Partial<SynopsisFields> = {}

  for (const key of ['title', 'studentName', 'stream'] as const) {
    const raw = get(key)
    if (raw === undefined || raw === null) continue
    const value = cleanText(raw)
    if (!value) return { data, error: `${key} cannot be empty` }
    if (value.length > 500) return { data, error: `${key} is too long` }
    data[key] = value
  }

  for (const key of ['researchArea', 'advisor'] as const) {
    const raw = get(key)
    if (raw === undefined || raw === null) continue
    data[key] = cleanText(raw).slice(0, 200) || null
  }

  const rawYear = get('year')
  if (rawYear !== undefined && rawYear !== null && rawYear !== '') {
    const year = Number(rawYear)
    const maxYear = new Date().getFullYear() + 1
    if (!Number.isInteger(year) || year < 1990 || year > maxYear) {
      return { data, error: `year must be a whole number between 1990 and ${maxYear}` }
    }
    data.year = year
  }

  if (!partial) {
    const missing = REQUIRED.filter((key) => data[key] === undefined)
    if (missing.length) return { data, error: `Missing required fields: ${missing.join(', ')}` }
  }
  return { data }
}

/** Checks a PDF/DOC/DOCX upload by size, extension and its first bytes. */
export async function checkSynopsisFile(
  file: unknown
): Promise<{ ok: true; ext: string; mime: string } | { ok: false; error: string }> {
  if (!(file instanceof File) || file.size === 0) return { ok: false, error: 'No file' }
  if (file.size > MAX_FILE_BYTES) {
    return { ok: false, error: `File is too large (max ${MAX_FILE_LABEL})` }
  }

  const ext = file.name.split('.').pop()?.toLowerCase() ?? ''
  const type = FILE_TYPES[ext]
  if (!type) return { ok: false, error: 'Only PDF, DOC or DOCX files are allowed' }

  const head = new Uint8Array(await file.slice(0, 4).arrayBuffer())
  if (!type.magic.every((byte, i) => head[i] === byte)) {
    return { ok: false, error: `This file is not a valid .${ext} file` }
  }
  return { ok: true, ext, mime: type.mime }
}

/** A storage-safe file name: timestamp plus the original name reduced to letters, digits and dashes. */
export function storageFileName(originalName: string, ext: string) {
  const base = originalName
    .replace(/\.[^.]+$/, '')
    .normalize('NFKD')
    .replace(/[^\w-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80)
  return `${Date.now()}-${base || 'synopsis'}.${ext}`
}
