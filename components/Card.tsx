import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => (
  <div className="max-w-[544px] p-4 md:w-1/2">
    <div
      className={`${
        imgSrc && 'h-full'
      } overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-900`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="h-52 w-full object-cover object-center"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="h-52 w-full object-cover object-center"
            width={544}
            height={306}
          />
        ))}
      <div className="p-6">
        <h2 className="mb-3 text-xl leading-snug font-bold tracking-tight text-slate-900 dark:text-white">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`} className="hover:text-sky-700">
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-gray-300">
          {description}
        </p>
        {href && (
          <Link
            href={href}
            className="text-sm font-semibold text-sky-700 hover:text-sky-800 dark:text-sky-300 dark:hover:text-sky-200"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
