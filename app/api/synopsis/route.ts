import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: Request) {
  const formData = await req.formData()

  const title = formData.get('title') as string
  const studentName = formData.get('studentName') as string
  const file = formData.get('file') as File

  if (!file) {
    return NextResponse.json({ error: 'No file' }, { status: 400 })
  }

  const filePath = `synopsis/${Date.now()}-${file.name}`

  const { error } = await supabase.storage
    .from('your-bucket-name') // replace
    .upload(filePath, file)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  const synopsis = await prisma.synopsis.create({
    data: {
      title,
      studentName,
      filePath, // store path only (recommended)
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
