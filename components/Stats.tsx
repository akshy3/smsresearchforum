import Image from 'next/image'
import Link from '@/components/Link'

const metrics = [
  {
    id: 1,
    emphasis: 'Programme Committee',
    rest: 'Plans seminars, workshops, and flagship academic events',
  },
  {
    id: 2,
    emphasis: 'Career & Placement Committee',
    rest: 'Supports internships, placements, and researcher career development',
  },
  {
    id: 3,
    emphasis: 'Editorial Committee',
    rest: 'Curates newsletters, reports, and forum communication',
  },
  {
    id: 4,
    emphasis: 'Social & Welfare Committee',
    rest: 'Builds scholar community, inclusion, and wellbeing initiatives',
  },
]

export default function Stats() {
  return (
    <section className="relative mt-16 overflow-hidden rounded-[2rem] border border-slate-800/70 bg-slate-900 shadow-[0_30px_80px_-45px_rgba(15,23,42,0.85)]">
      <div className="absolute inset-0">
        <Image
          className="h-full w-full object-cover opacity-20"
          src="/static/images/smslogo.jpg"
          alt="SMS logo backdrop"
          width={1400}
          height={1000}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-10 xl:grid-cols-2 xl:items-start">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-cyan-300 uppercase">
              Forum Structure
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              How the Forum Works
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-200">
              Directed by Dr. Sam Thomas (Director, SMS) and Dr. Devi Soumyaja (Research
              Coordinator), alongside scholar leadership and committee-based coordination that keeps
              the forum active across the year.
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
                className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              >
                <p className="text-base font-semibold text-white">{item.emphasis}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.rest}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
