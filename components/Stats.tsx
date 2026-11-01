import Image from 'next/image'
import Link from '@/components/Link'

// Committees 2026-27 (full duties are on the About page, from data/committeesData.ts)
const metrics = [
  {
    id: 1,
    emphasis: 'Programme Committee',
    rest: 'Plans workshops, seminars, expert talks, paper discussions and colloquia',
  },
  {
    id: 2,
    emphasis: 'Editorial Committee',
    rest: 'Content, reports, the newsletter, and alumni and placement coordination',
  },
  {
    id: 3,
    emphasis: 'Social & Welfare Committee',
    rest: 'Scholar interaction, welfare, peer support and inclusion',
  },
  {
    id: 4,
    emphasis: 'Technical Committee',
    rest: 'Design, digital publicity, photography, archives and event tech support',
  },
  {
    id: 5,
    emphasis: 'Finance Committee',
    rest: 'Budgets, approved expenditure, bills and financial records',
  },
]

export default function Stats() {
  return (
    <section className="px-4 pt-10 md:px-10">
      <div className="border-navy-800 bg-navy-950 relative overflow-hidden rounded-[2rem] border shadow-[0_30px_80px_-45px_rgba(15,23,42,0.85)]">
        <div className="absolute inset-0">
          <Image
            className="h-full w-full object-cover opacity-20"
            src="/static/images/smslogo.jpg"
            alt="SMS logo backdrop"
            width={1400}
            height={1000}
          />
          <div className="from-navy-950 via-navy-950/90 to-navy-900/70 absolute inset-0 bg-gradient-to-r" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 gap-10 xl:grid-cols-2 xl:items-start">
            <div>
              <p className="text-gold-300 text-sm font-semibold tracking-[0.14em] uppercase">
                Forum Structure
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                How the Forum Works
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-200">
                Directed by Dr. Sam Thomas (Director, SMS) and Dr. Devi Soumyaja (Research
                Coordinator), alongside scholar leadership and committee-based coordination that
                keeps the forum active across the year.
              </p>
              <div className="mt-6">
                <Link
                  href="/about#committees"
                  className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  Explore committees
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {metrics.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:last:col-span-2"
                >
                  <p className="text-base font-semibold text-white">{item.emphasis}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.rest}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
