import { prisma } from '@/lib/prisma'
import { ensureSeminarTable } from '@/lib/seminarTable'
import { NextResponse } from 'next/server'
import { readSeminarFields } from '@/lib/seminarInput'

// Admin only (checked in middleware): edit, publish, reject or delete a seminar.

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  await ensureSeminarTable()
  const { id } = await params
  const existing = await prisma.seminar.findUnique({ where: { id: Number(id) } })
  if (!existing) return NextResponse.json({ error: 'Seminar not found' }, { status: 404 })

  const body = await req.json().catch(() => ({}))
  const { data, error } = readSeminarFields((key) => body[key], { partial: true })
  if (error) return NextResponse.json({ error }, { status: 400 })

  const date = data.date !== undefined ? data.date : existing.date
  if ((data.status ?? existing.status) === 'published' && !date) {
    return NextResponse.json({ error: 'Add the seminar date before publishing' }, { status: 400 })
  }

  const seminar = await prisma.seminar.update({ where: { id: Number(id) }, data })
  return NextResponse.json(seminar)
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  await ensureSeminarTable()
  const { id } = await params
  await prisma.seminar.delete({ where: { id: Number(id) } }).catch(() => null)
  return NextResponse.json({ success: true })
}
