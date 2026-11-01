import Link from 'next/link'
import { slug } from 'github-slugger'

interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      // The ::after box widens the tap area to 44px tall without changing the look
      className="relative z-10 mr-2 mb-2 inline-flex items-center rounded-full bg-sky-50 px-2.5 py-1 text-xs font-semibold text-sky-700 transition after:absolute after:inset-x-0 after:-inset-y-2.5 after:content-[''] hover:bg-sky-100 hover:text-sky-800 dark:bg-sky-900/30 dark:text-sky-300 dark:hover:bg-sky-900/50 dark:hover:text-sky-200"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
