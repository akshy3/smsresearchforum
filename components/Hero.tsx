'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from '@heroicons/react/outline'

const features = [
  { name: 'Push to Deploy', icon: CloudUploadIcon },
  { name: 'SSL Certificates', icon: LockClosedIcon },
  { name: 'Simple Queues', icon: RefreshIcon },
  { name: 'Advanced Security', icon: ShieldCheckIcon },
  { name: 'Powerful API', icon: CogIcon },
  { name: 'Database Backups', icon: ServerIcon },
]

export default function Hero() {
  return (
    <>
      <div>
        <div>
          {/* Hero card */}
          <div className="relative">
            {/* <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" /> */}
            <div className="mx-auto">
              <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
                <div className="absolute inset-0">
                  <Image
                    className="h-full w-full object-cover"
                    src="/static/images/SMS.jpg"
                    alt="People working on laptops"
                    width={1200}
                    height={1200}
                  />
                  <div className="absolute inset-0 bg-gray-500 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">Empowering Scholars. </span>
                    <span className="block text-indigo-200">Fostering Innovation.</span>
                  </h1>
                  <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
                    Welcome to SMS Research Forum — a vibrant community dedicated to academic
                    excellence, collaborative research, and professional development at CUSAT.
                  </p>
                  <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                    <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                      <Link
                        href="/about"
                        className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-800 shadow-sm hover:bg-indigo-100 sm:px-8"
                      >
                        Learn More
                      </Link>
                      <Link
                        href="/updates"
                        className="bg-opacity-60 hover:bg-opacity-70 flex items-center justify-center rounded-md border border-transparent bg-indigo-800 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 sm:px-8"
                      >
                        Updates
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
      <div>
        <Image
          src={'/static/images/iftar.jpg'}
          alt="Hero Image"
          className="mt-10 h-96 w-full object-cover sm:block"
          width={1000}
          height={1000}
        />
      </div> */}

      {/* <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">Deploy faster</h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Everything you need to deploy your app
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper
          malesuada. Eleifend condimentum id viverra nulla.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div> */}
    </>
  )
}
