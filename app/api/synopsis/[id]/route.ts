import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'
import { checkSynopsisFile, readSynopsisFields, storageFileName } from '@/lib/synopsisInput'

// Stored file paths look like
// https://<project>.supabase.co/storage/v1/object/public/synopsis/<fileName>
function storedFileName(filePath: string) {
  const parts = filePath.split('/synopsis/')
  if (parts.length < 2) return ''
  const name = parts[parts.length - 1]
  try {
    return decodeURIComponent(name)
  } catch {
    return name
  }
}

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const synopsis = await prisma.synopsis.findUnique({
    where: { id: Number(id) },
  })

  return NextResponse.json(synopsis)
}

// Edits the details. Send JSON for details only, or multipart form data with an
// optional `file` to also replace the synopsis file.
export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const existing = await prisma.synopsis.findUnique({ where: { id: Number(id) } })
  if (!existing) return NextResponse.json({ error: 'Synopsis not found' }, { status: 404 })

  const isForm = (req.headers.get('content-type') || '').includes('multipart/form-data')
  const formData = isForm ? await req.formData() : null
  const body = isForm ? null : await req.json().catch(() => ({}))
  const get = (key: string) => (formData ? formData.get(key) : body?.[key])

  const { data, error } = readSynopsisFields(get, { partial: true })
  if (error) return NextResponse.json({ error }, { status: 400 })

  const supabase = createClient(cookies())
  const file = formData?.get('file')
  let filePath: string | undefined

  if (file instanceof File && file.size > 0) {
    const check = await checkSynopsisFile(file)
    if (!check.ok) return NextResponse.json({ error: check.error }, { status: 400 })

    const fileName = storageFileName(file.name, check.ext)
    const { error: uploadError } = await supabase.storage
      .from('synopsis')
      .upload(fileName, file, { contentType: check.mime })
    if (uploadError) {
      console.error('Supabase Storage Error:', uploadError)
      return NextResponse.json({ error: uploadError.message }, { status: 500 })
    }
    filePath = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/synopsis/${fileName}`
  }

  const synopsis = await prisma.synopsis.update({
    where: { id: Number(id) },
    data: filePath ? { ...data, filePath } : data,
  })

  // Remove the old file only after the record points at the new one.
  if (filePath) {
    const oldName = storedFileName(existing.filePath)
    if (oldName) {
      const { error: removeError } = await supabase.storage.from('synopsis').remove([oldName])
      if (removeError) console.error('Supabase Storage Delete Error:', removeError)
    }
  }

  return NextResponse.json(synopsis)
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = createClient(cookies())

  const synopsis = await prisma.synopsis.findUnique({
    where: { id: Number(id) },
  })

  if (!synopsis) {
    return NextResponse.json({ error: 'Synopsis not found' }, { status: 404 })
  }

  const fileName = storedFileName(synopsis.filePath)
  if (fileName) {
    const { error: storageError } = await supabase.storage.from('synopsis').remove([fileName])

    if (storageError) {
      console.error('Supabase Storage Delete Error:', storageError)
      // Continue with database deletion even if storage deletion fails
    }
  }

  await prisma.synopsis.delete({
    where: { id: Number(id) },
  })

  return NextResponse.json({ success: true })
}
