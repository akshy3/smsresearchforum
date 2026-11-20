import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
import { sameText, seminarIntakeToken } from '@/lib/adminSession'
import { parseNotice, pickNoticeText, seminarKind } from '@/lib/seminarNotice'
import { cleanText } from '@/lib/synopsisInput'

// Called once a day by the Gmail script (scripts/gmail-seminar-intake.gs) for each new
// OFFICE SMS notice. Each seminar notice becomes a draft; nothing is published here.
//
// Body: { messageId, subject, bodyText, texts: string[] }  (texts = text read from PDFs)
// Header: Authorization: Bearer <token shown on /manage-seminars>

export async function POST(req: Request) {
  const expected = await seminarIntakeToken(process.env.ADMIN_PASSWORD)
  const header = req.headers.get('authorization') || ''
  const token = header.startsWith('Bearer ') ? header.slice(7).trim() : ''
  if (!expected || !token || !sameText(token, expected)) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
  }

  const body = await req.json().catch(() => null)
  const messageId = cleanText(body?.messageId)
  const subject = cleanText(body?.subject)
  const bodyText = typeof body?.bodyText === 'string' ? body.bodyText.slice(0, 5000) : ''
  const texts: string[] = Array.isArray(body?.texts)
    ? body.texts.filter((t: unknown) => typeof t === 'string').map((t: string) => t.slice(0, 20000))
    : []
  if (!messageId) return NextResponse.json({ error: 'messageId is required' }, { status: 400 })

  // Only seminar notices: skip progress presentations, circulars and the like.
  const noticeText = pickNoticeText(texts)
  if (!seminarKind(`${subject}\n${noticeText}`)) {
    return NextResponse.json({ status: 'ignored', reason: 'not a seminar notice' })
  }

  if (await prisma.seminar.findUnique({ where: { sourceId: messageId } })) {
    return NextResponse.json({ status: 'duplicate' })
  }

  const parsed = parseNotice(noticeText || bodyText, subject)
  const seminar = await prisma.seminar.create({
    data: {
      kind: parsed.kind ?? 'pre-synopsis',
      scholar: parsed.scholar ?? '(check notice)',
      title: parsed.title || subject || '(check notice)',
      guide: parsed.guide,
      date: parsed.date,
      time: parsed.time,
      venue: parsed.venue,
      meetingLink: parsed.meetingLink,
      status: 'draft',
      source: 'gmail',
      sourceId: messageId,
      rawText: [`Subject: ${subject}`, bodyText, noticeText]
        .filter(Boolean)
        .join('\n\n')
        .slice(0, 20000),
    },
  })

  return NextResponse.json({ status: 'created', id: seminar.id }, { status: 201 })
}
