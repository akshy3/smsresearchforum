import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
import { seminarIntakeToken } from '@/lib/adminSession'

export const dynamic = 'force-dynamic'

// Admin only (checked in middleware): every seminar, plus the Gmail script's token.
export async function GET() {
  const seminars = await prisma.seminar.findMany({
    orderBy: [{ status: 'asc' }, { date: 'desc' }, { createdAt: 'desc' }],
  })
  const intakeToken = await seminarIntakeToken(process.env.ADMIN_PASSWORD)
  return NextResponse.json({ seminars, intakeToken })
}
