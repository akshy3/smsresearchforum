import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const synopsis = await prisma.synopsis.findUnique({
    where: { id: Number(id) },
  })

  return NextResponse.json(synopsis)
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const body = await req.json()

  const synopsis = await prisma.synopsis.update({
    where: { id: Number(id) },
    data: body,
  })

  return NextResponse.json(synopsis)
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = createClient(cookies())

  // Get the synopsis to retrieve the file path
  const synopsis = await prisma.synopsis.findUnique({
    where: { id: Number(id) },
  })

  if (!synopsis) {
    return NextResponse.json({ error: 'Synopsis not found' }, { status: 404 })
  }

  // Extract the filename from the full URL
  // URL format: https://ufrfeeyzkennxkvcylms.supabase.co/storage/v1/object/public/synopsis/filename
  const filePathParts = synopsis.filePath.split('/synopsis/')
  const fileName = filePathParts[filePathParts.length - 1]

  // Delete the file from Supabase storage
  if (fileName) {
    const { error: storageError } = await supabase.storage.from('synopsis').remove([fileName])

    if (storageError) {
      console.error('Supabase Storage Delete Error:', storageError)
      // Continue with database deletion even if storage deletion fails
    }
  }

  // Delete the database record
  await prisma.synopsis.delete({
    where: { id: Number(id) },
  })

  return NextResponse.json({ success: true })
}
