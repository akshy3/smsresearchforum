import { genPageMetadata } from 'app/seo'
import UpcomingSeminars from '@/components/UpcomingSeminars'

export const metadata = genPageMetadata({
  title: 'Upcoming PhD Seminars',
  description:
    'Upcoming pre-synopsis seminars and open defences of PhD scholars at the School of Management Studies, CUSAT.',
})

export default function SeminarsPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="to-navy-50 mb-8 rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-white via-slate-50 p-6 shadow-sm sm:p-8 dark:border-gray-700 dark:from-gray-900 dark:via-gray-900 dark:to-sky-950/20">
        <p className="text-sm font-semibold tracking-[0.14em] text-sky-700 uppercase dark:text-sky-300">
          SMS Research Forum
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          Upcoming PhD seminars
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base dark:text-gray-300">
          Pre-synopsis seminars and open defences of doctoral scholars at the School of Management
          Studies, CUSAT. All are welcome to attend.
        </p>
      </section>

      <UpcomingSeminars />
    </div>
  )
}
