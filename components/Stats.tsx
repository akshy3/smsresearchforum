import Image from 'next/image'

const metrics = [
  {
    id: 1,
    stat: '',
    emphasis: 'Programme Committee',
    rest: 'Plans seminars, workshops, and conferences',
  },
  {
    id: 2,
    stat: '',
    emphasis: 'Career & Placement Committee',
    rest: 'Drives internship and job-placement initiatives',
  },
  {
    id: 3,
    stat: '',
    emphasis: 'Editorial Committee',
    rest: 'Produces newsletters and promotional materials',
  },
  {
    id: 4,
    stat: '',
    emphasis: 'Social & Welfare Committee',
    rest: 'Organizes community-building and wellbeing events ​',
  },
]

export default function Stats() {
  return (
    <section className="relative mt-16 overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900">
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
              Governance
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Core Committee Structure
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-200">
              Directed by Dr. Zakkariya K A (Director, SMS) and Dr. Devi Soumyaja (Research
              Coordinator), alongside elected research-scholar coordinators.
            </p>
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
