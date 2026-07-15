export const downloadNavLinks = [
  {
    href: '/downloads',
    title: 'Resources',
    description: 'Useful forum documents and archives',
  },
  {
    href: '/synopsis',
    title: 'Synopsis Library',
    description: 'Browse doctoral synopsis submissions',
  },
  {
    href: '/newsletters',
    title: 'Newsletters',
    description: 'Read SMS Research Forum newsletter issues',
  },
] as const

export type DownloadNavLink = (typeof downloadNavLinks)[number]
