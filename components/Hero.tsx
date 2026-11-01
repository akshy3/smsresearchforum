'use client'

import Image from 'next/image'
import Link from 'next/link'
import { conference2026 } from '@/data/conferenceData'

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-slate-200/70 shadow-[0_30px_80px_-45px_rgba(15,23,42,0.5)]">
      <div className="absolute inset-0">
        <Image
          className="h-full w-full object-cover"
          src="/static/images/SMS.jpg"
          alt="SMS research forum scholars collaborating"
          width={1600}
          height={1000}
          sizes="(max-width: 1280px) 100vw, 1280px"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/70 to-sky-900/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.35),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(251,191,36,0.2),transparent_35%)]" />
      </div>

      <div className="relative px-5 py-10 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="max-w-4xl">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-sky-100 uppercase backdrop-blur-sm">
            A golden jubilee initiative of the School of Management Studies, CUSAT
          </span>
          <h1 className="mt-5 text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Empowering Scholars.
            <span className="block bg-gradient-to-r from-sky-200 to-cyan-300 bg-clip-text text-transparent">
              Fostering Innovation.
            </span>
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-100 sm:text-lg">
            A collaborative academic space for scholars and faculty at the School of Management
            Studies, CUSAT
            <span className="hidden sm:inline">
              . From workshops and colloquia to flagship programmes like {conference2026.title}, the
              forum supports rigorous, connected, and future-facing scholarship
            </span>
            .
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-lg bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
            >
              About the Forum
            </Link>
            <Link
              href="/updates"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Events &amp; Updates
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
