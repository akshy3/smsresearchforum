import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
  })

  return NextResponse.json(user)
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const body = await req.json()

  const user = await prisma.user.update({
    where: { id: Number(id) },
    data: body,
  })

  return NextResponse.json(user)
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  await prisma.user.delete({
    where: { id: Number(id) },
  })

  return NextResponse.json({ success: true })
}
