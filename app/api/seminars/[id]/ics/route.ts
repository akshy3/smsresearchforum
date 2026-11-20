import { prisma } from '@/lib/prisma'
import { buildIcs } from '@/lib/events'
import { seminarCalendarEvent } from '@/lib/seminarCalendar'

// /api/seminars/<id>/ics: "Add to calendar" file for a published seminar.
export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const s = await prisma.seminar.findUnique({ where: { id: Number(id) } })
  if (!s || s.status !== 'published' || !s.date) return new Response('Not found', { status: 404 })

  return new Response(buildIcs(seminarCalendarEvent(s), s.updatedAt), {
    headers: {
      'Content-Type': 'text/calendar; charset=utf-8',
      'Content-Disposition': `inline; filename="seminar-${s.id}.ics"`,
    },
  })
}
