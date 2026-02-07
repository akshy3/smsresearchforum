import Link from 'next/link'
import { slug } from 'github-slugger'

interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-2 mb-2 inline-flex items-center rounded-full bg-sky-50 px-2.5 py-1 text-xs font-semibold tracking-wide text-sky-700 uppercase transition hover:bg-sky-100 hover:text-sky-800 dark:bg-sky-900/30 dark:text-sky-300 dark:hover:bg-sky-900/50 dark:hover:text-sky-200"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
