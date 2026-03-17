import { permanentRedirect } from 'next/navigation'

export default function CommitteesPage() {
  permanentRedirect('/about#committees')
}
