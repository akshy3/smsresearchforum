import Image from 'next/image'

/* This example requires Tailwind CSS v2.0+ */
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
    <div className="relative bg-gray-900">
      <div className="absolute bottom-0 h-80 w-full xl:inset-0 xl:h-full">
        <div className="h-full w-full xl:grid xl:grid-cols-2">
          <div className="h-full xl:relative xl:col-start-2">
            <Image
              className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
              src="/static/images/smslogo.jpg"
              alt="People working on laptops"
              width={1000}
              height={1000}
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
        <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
          <h2 className="text-sm font-semibold tracking-wide text-indigo-300 uppercase">
            Our Structure
          </h2>
          <p className="mt-3 text-3xl font-extrabold text-white">Core Committee</p>
          <p className="mt-5 text-lg text-gray-300">
            Directed by Dr. Zakkariya K A (Director, SMS) and Dr. Devi Soumyaja (Research
            Coordinator), alongside elected research-scholar coordinators.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2">
            {metrics.map((item) => (
              <p key={item.id}>
                <span className="block text-2xl font-bold text-white">{item.stat}</span>
                <span className="mt-1 block text-base text-gray-300">
                  <span className="font-medium text-white">{item.emphasis}</span> {item.rest}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
