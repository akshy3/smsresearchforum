import { GlobeAltIcon, LightningBoltIcon, MailIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Quarterly Newsletter',
    description: 'Stay updated with the latest research, achievements, and opportunities.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Monthly Workshops',
    description:
      'Hands-on sessions on research methods, publishing strategies, and industry trends.',
    icon: ScaleIcon,
  },
  {
    name: 'Career and Placement Cell',
    description: 'Bridging scholars with industries and academic institutions for career growth.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Doctoral Colloquium',
    description: 'An annual flagship event for research presentations and academic networking.',
    icon: MailIcon,
  },
]

export default function Features() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-white to-sky-50/30" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.2em] text-sky-700 uppercase">
            Forum Highlights
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Key Initiatives That Shape Scholar Life
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Built to support research excellence through publication, collaboration, mentorship, and
            career readiness.
          </p>
        </div>

        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="group rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
            >
              <dt className="flex items-center gap-4">
                <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700 transition group-hover:bg-sky-600 group-hover:text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="text-lg leading-6 font-semibold text-slate-900">{feature.name}</p>
              </dt>
              <dd className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
