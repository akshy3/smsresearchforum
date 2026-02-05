import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(req: Request) {
  const formData = await req.formData()

  const title = formData.get('title') as string
  const studentName = formData.get('studentName') as string
  const file = formData.get('file') as File

  if (!file) {
    return NextResponse.json({ error: 'No file' }, { status: 400 })
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  const uploadDir = path.join(process.cwd(), 'public/uploads')
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true })
  }

  const fileName = `${Date.now()}-${file.name}`
  const filePath = `/uploads/${fileName}`

  fs.writeFileSync(path.join(uploadDir, fileName), buffer)

  const synopsis = await prisma.synopsis.create({
    data: {
      title,
      studentName,
      filePath,
    },
  })

  return NextResponse.json(synopsis, { status: 201 })
}

export async function GET() {
  const data = await prisma.synopsis.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return NextResponse.json(data)
}
