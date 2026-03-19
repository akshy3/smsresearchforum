export const conferenceNavLinks = [
  { href: '/conference-2026', title: 'Overview', description: 'Theme, highlights, and key dates' },
  {
    href: '/conference-2026/conference-papers',
    title: 'Conference Papers',
    description: 'Tracks, topics, and submission guidelines for conference papers',
  },
  {
    href: '/conference-2026/doctoral-colloquium',
    title: 'Doctoral Colloquium',
    description: 'Eligibility, format, and submission guidelines for doctoral scholars',
  },
  {
    href: '/conference-2026/participation',
    title: 'Participation',
    description: 'Fees, presentation modes, and contact guidance',
  },
] as const

export type ConferenceNavLink = (typeof conferenceNavLinks)[number]
