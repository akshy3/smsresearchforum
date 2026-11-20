import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'
import { checkSynopsisFile, readSynopsisFields, storageFileName } from '@/lib/synopsisInput'

export async function POST(req: Request) {
  const formData = await req.formData()

  const { data, error } = readSynopsisFields((key) => formData.get(key))
  if (error) return NextResponse.json({ error }, { status: 400 })

  const file = formData.get('file')
  const check = await checkSynopsisFile(file)
  if (!check.ok) return NextResponse.json({ error: check.error }, { status: 400 })

  const supabase = createClient(cookies())
  const fileName = storageFileName((file as File).name, check.ext)
  const { error: uploadError } = await supabase.storage
    .from('synopsis')
    .upload(fileName, file as File, { contentType: check.mime })

  if (uploadError) {
    console.error('Supabase Storage Error:', uploadError)
    return NextResponse.json({ error: uploadError.message }, { status: 500 })
  }

  const synopsis = await prisma.synopsis.create({
    data: {
      title: data.title!,
      studentName: data.studentName!,
      stream: data.stream!,
      year: data.year!,
      researchArea: data.researchArea ?? null,
      advisor: data.advisor ?? null,
      status: 'submitted',
      filePath: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/synopsis/${fileName}`,
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
