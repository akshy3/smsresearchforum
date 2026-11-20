import { cleanText } from '@/lib/synopsisInput'

export const SEMINAR_KINDS = ['pre-synopsis', 'open-defence'] as const
export const SEMINAR_STATUSES = ['draft', 'published', 'rejected'] as const

export const SEMINAR_KIND_LABEL: Record<string, string> = {
  'pre-synopsis': 'Pre-synopsis seminar',
  'open-defence': 'Open defence & viva-voce',
}

export type SeminarFields = {
  kind: string
  scholar: string
  title: string
  guide: string | null
  date: string | null
  time: string | null
  venue: string | null
  meetingLink: string | null
  status: string
}

/** Today's date in India as YYYY-MM-DD; seminars on or after it are upcoming. */
export function todayInIndia(now = new Date()) {
  return new Date(now.getTime() + 5.5 * 60 * 60 * 1000).toISOString().slice(0, 10)
}

/** Picks and cleans editable seminar fields. `partial` allows leaving fields out (edits). */
export function readSeminarFields(
  get: (key: string) => unknown,
  { partial = false } = {}
): { data: Partial<SeminarFields>; error?: string } {
  const data: Partial<SeminarFields> = {}
  const has = (key: string) => get(key) !== undefined && get(key) !== null

  for (const key of ['scholar', 'title'] as const) {
    if (!has(key)) continue
    const value = cleanText(get(key))
    if (!value) return { data, error: `${key} cannot be empty` }
    data[key] = value.slice(0, 500)
  }
  for (const key of ['guide', 'time', 'venue'] as const) {
    if (has(key)) data[key] = cleanText(get(key)).slice(0, 200) || null
  }

  if (has('kind')) {
    const kind = cleanText(get('kind'))
    if (!(SEMINAR_KINDS as readonly string[]).includes(kind)) return { data, error: 'Unknown kind' }
    data.kind = kind
  }
  if (has('status')) {
    const status = cleanText(get('status'))
    if (!(SEMINAR_STATUSES as readonly string[]).includes(status)) {
      return { data, error: 'Unknown status' }
    }
    data.status = status
  }
  if (has('date')) {
    const date = cleanText(get('date'))
    if (date && !/^\d{4}-\d{2}-\d{2}$/.test(date)) return { data, error: 'date must be YYYY-MM-DD' }
    data.date = date || null
  }
  if (has('meetingLink')) {
    const link = cleanText(get('meetingLink'))
    if (link && !/^https:\/\/\S+$/.test(link))
      return { data, error: 'Meeting link must start with https://' }
    data.meetingLink = link || null
  }

  if (data.status === 'published' && has('date') && !data.date) {
    return { data, error: 'Add the seminar date before publishing' }
  }
  if (!partial) {
    const missing = (['kind', 'scholar', 'title'] as const).filter((k) => data[k] === undefined)
    if (missing.length) return { data, error: `Missing required fields: ${missing.join(', ')}` }
  }
  return { data }
}
