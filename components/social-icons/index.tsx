import {
  Mail,
  Github,
  Facebook,
  Youtube,
  Linkedin,
  Twitter,
  X,
  Mastodon,
  Threads,
  Instagram,
  Medium,
  Bluesky,
} from './icons'

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  x: X,
  mastodon: Mastodon,
  threads: Threads,
  instagram: Instagram,
  medium: Medium,
  bluesky: Bluesky,
}

type SocialIconProps = {
  kind: keyof typeof components
  href: string | undefined
  size?: number
  /** 'light' for icons on dark backgrounds such as the footer */
  tone?: 'default' | 'light'
}

const SocialIcon = ({ kind, href, size = 8, tone = 'default' }: SocialIconProps) => {
  if (
    !href ||
    (kind === 'mail' && !/^mailto:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(href))
  )
    return null

  const SocialSvg = components[kind]

  return (
    <a
      // Padding with a matching negative margin gives a 44px tap area without moving the icon
      className="-m-2.5 inline-flex p-2.5 text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current ${
          tone === 'light'
            ? 'hover:text-gold-300 text-slate-300'
            : 'hover:text-primary-500 dark:hover:text-primary-400 text-gray-700 dark:text-gray-200'
        } h-${size} w-${size}`}
      />
    </a>
  )
}

export default SocialIcon
