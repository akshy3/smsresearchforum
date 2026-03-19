import { permanentRedirect } from 'next/navigation'

export default function LegacyConferencePapersPage() {
  permanentRedirect('/conference-2026/conference-papers')
}
