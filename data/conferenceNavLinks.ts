export const conferenceNavLinks = [
  { href: '/conference-2026', title: 'Overview', description: 'Theme, highlights, and key dates' },
  {
    href: '/conference-2026/call-for-papers',
    title: 'Call for Papers',
    description: 'Tracks, topics, and conference paper directions',
  },
  {
    href: '/conference-2026/doctoral-colloquium',
    title: 'Doctoral Colloquium',
    description: 'Eligibility, format, and doctoral focus areas',
  },
  {
    href: '/conference-2026/participation',
    title: 'Participation',
    description: 'Fees, presentation modes, and contact guidance',
  },
] as const

export type ConferenceNavLink = (typeof conferenceNavLinks)[number]
