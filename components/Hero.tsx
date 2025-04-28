'use client'

export default function Example() {

  return (
    <>
    


    <div className="my-2 text-[#0d2743] py-10 lg:py-0 border-y border-black xl:border-hidden xl:rounded-xl">
      {/* Hero content */}
      <div className="px-10 space-y-5 lg:py-6 dark:text-white">
        <h1 className="text-4xl md:text-65l">
          <span className="font-bold decoration-white decoration-4 ">
          Empowering Scholars. Fostering Innovation.
          </span>
        </h1>
        <h2 className="w-9/12 font-normal">
        Welcome to SMS Research Forum — a vibrant community dedicated to academic excellence, collaborative research, and professional development at CUSAT.
        </h2>
        <button className="border border-black bg-white px-4 py-2 rounded-full font-medium hover:bg-blue-800 hover:text-white active:scale-90 transition duration-100">
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
    <img src={"/static/images/sms_cusat.jpg"} alt="Hero Image" className="hidden sm:block w-full h-96 object-cover mt-10" />

    </div>
    </>  )
}
