import { conferenceNavLinks } from './conferenceNavLinks'
import { downloadNavLinks } from './downloadNavLinks'

const headerNavLinks = [
  { href: '/', title: 'Home' },
  {
    href: '/conference-2026',
    title: "Conference '26",
    description: 'International Conference and Doctoral Colloquium 2026',
    children: conferenceNavLinks,
  },
  {
    href: '/downloads',
    title: 'Downloads',
    description: 'Resources, archives, and supporting material',
    children: downloadNavLinks,
  },
  { href: '/updates', title: 'Updates' },
  // { href: '/tags', title: 'Tags' },
  { href: '/initiatives', title: 'Initiatives' },
  { href: '/committees', title: 'Committees' },
  { href: '/about', title: 'About' },

  // { href: '/contact', title: 'Contact' },
]

export default headerNavLinks
