import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'

export async function POST(req: Request) {
  const supabase = createClient(cookies())
  const formData = await req.formData()
  const title = formData.get('title') as string
  const studentName = formData.get('studentName') as string
  const file = formData.get('file') as File

  if (!file) {
    return NextResponse.json({ error: 'No file' }, { status: 400 })
  }

  let filePath = `${Date.now()}-${file.name}`

  const { data, error } = await supabase.storage
    .from('synopsis') // replace
    .upload(filePath, file)

  if (error) {
    console.error('Supabase Storage Error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  filePath = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/synopsis/${filePath}`

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
