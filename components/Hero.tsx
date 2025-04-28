'use client'

import Image from 'next/image'

export default function Example() {
  return (
    <>
      <div className="my-2 border-y border-black py-10 text-[#0d2743] lg:py-0 xl:rounded-xl xl:border-hidden">
        {/* Hero content */}
        <div className="space-y-5 px-10 lg:py-6 dark:text-white">
          <h1 className="md:text-65l text-4xl">
            <span className="font-bold decoration-white decoration-4">
              Empowering Scholars. Fostering Innovation.
            </span>
          </h1>
          <h2 className="w-9/12 font-normal">
            Welcome to SMS Research Forum — a vibrant community dedicated to academic excellence,
            collaborative research, and professional development at CUSAT.
          </h2>
          <button className="rounded-full border border-black bg-white px-4 py-2 font-medium transition duration-100 hover:bg-blue-800 hover:text-white active:scale-90">
            Learn More About Us
          </button>
        </div>
        {/* Hero image */}
        {/* <img
        className="hidden sm:inline-flex h-40 lg:h-80 xl:h-full"
        src="https://shubh73-medium.vercel.app/M.png"
        alt=""
      /> */}
      </div>

      <div>
        <Image
          src={'/static/images/sms_cusat.jpg'}
          alt="Hero Image"
          className="mt-10 h-96 w-full object-cover sm:block"
          width={1000}
          height={1000}
        />
      </div>
    </>
  )
}
