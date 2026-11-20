import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
import { readSeminarFields, todayInIndia } from '@/lib/seminarInput'

export const dynamic = 'force-dynamic'

// Public: published seminars from today onwards, soonest first.
export async function GET() {
  const seminars = await prisma.seminar.findMany({
    where: { status: 'published', date: { gte: todayInIndia() } },
    orderBy: [{ date: 'asc' }, { time: 'asc' }],
    select: {
      id: true,
      kind: true,
      scholar: true,
      title: true,
      guide: true,
      date: true,
      time: true,
      venue: true,
      meetingLink: true,
    },
  })
  return NextResponse.json(seminars, {
    headers: { 'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600' },
  })
}

// Admin (checked in middleware): add a seminar by hand.
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}))
  const { data, error } = readSeminarFields((key) => body[key])
  if (error) return NextResponse.json({ error }, { status: 400 })

  const seminar = await prisma.seminar.create({
    data: {
      kind: data.kind!,
      scholar: data.scholar!,
      title: data.title!,
      guide: data.guide ?? null,
      date: data.date ?? null,
      time: data.time ?? null,
      venue: data.venue ?? null,
      meetingLink: data.meetingLink ?? null,
      status: data.status ?? 'draft',
      source: 'manual',
    },
  })
  return NextResponse.json(seminar, { status: 201 })
}
