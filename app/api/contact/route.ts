import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// In-memory rate limit: max 3 submissions per IP per 10 minutes
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 10 * 60 * 1000 })
    return false
  }
  if (entry.count >= 3) return true
  entry.count++
  return false
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'

  const body = await req.json()
  const { name, email, message, _hp, _t } = body

  // Honeypot: Bots füllen dieses Feld aus
  if (_hp) {
    return NextResponse.json({ ok: true })
  }

  // Timing: Formular in unter 2 Sekunden ausgefüllt → Bot
  if (!_t || Date.now() - Number(_t) < 2000) {
    return NextResponse.json({ ok: true })
  }

  // Rate limiting
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Zu viele Anfragen. Bitte warte kurz.' }, { status: 429 })
  }

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Alle Felder sind erforderlich.' }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  await transporter.sendMail({
    from: `"Kontaktformular koeschu.com" <${process.env.SMTP_USER}>`,
    replyTo: email,
    to: 'info@koeschu.com',
    subject: `Kontaktanfrage von ${name}`,
    text: `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></p>
      <hr />
      <p>${message.replace(/\n/g, '<br />')}</p>
    `,
  })

  return NextResponse.json({ ok: true })
}
