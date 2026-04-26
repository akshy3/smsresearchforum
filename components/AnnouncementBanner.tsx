'use client'

import Link from '@/components/Link'

const message =
  'Abstract Submission Deadline Extended to 4 May 2026  •  International Conference & Doctoral Colloquium 2026  •  SMS Research Forum, School of Management Studies, CUSAT  •  "Ignite the Research Aptitude"  •  '

export default function AnnouncementBanner() {
  return (
    <div className="overflow-hidden border-b border-slate-800 bg-slate-900 py-2 text-sky-100">
      <Link
        href="/conference-2026"
        aria-label="View conference details — deadline extended to 4 May 2026"
        className="block"
      >
        <div className="flex">
          <div className="animate-marquee text-sm font-semibold tracking-wide whitespace-nowrap">
            {message.repeat(3)}
          </div>
        </div>
      </Link>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
