'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      if (!res.ok) throw new Error()
      setStatus('sent')
      setName('')
      setEmail('')
      setMessage('')
    } catch {
      setStatus('error')
    }
  }

  const fieldWrapperStyle: React.CSSProperties = {
    border: '1px solid #C76B10',
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'stretch',
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: 'transparent',
    border: 'none',
    padding: '12px 16px',
    color: '#ffffff',
    fontSize: '18px',
    outline: 'none',
    fontFamily: 'var(--font-syne)',
  }

  return (
    <section style={{ maxWidth: '640px', margin: '0 auto', padding: '4rem 1.5rem 6rem' }}>
      <h1 style={{ fontSize: '65px', fontWeight: 700, margin: '0 0 1rem', color: '#C76B10' }}>
        Kontakt
      </h1>

      <h2 style={{ fontSize: '42px', fontWeight: 700, margin: '0 0 2.5rem', color: '#C76B10' }}>
        Noch offene Fragen? Jetzt kontaktieren!
      </h2>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={fieldWrapperStyle}>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            style={inputStyle}
          />
        </div>

        <div style={fieldWrapperStyle}>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="deine@email.com"
            style={inputStyle}
          />
        </div>

        <div style={{ ...fieldWrapperStyle, alignItems: 'flex-start' }}>
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Nachricht"
            rows={7}
            style={{ ...inputStyle, resize: 'vertical' }}
          />
        </div>

        <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
          <button
            type="submit"
            disabled={status === 'sending' || status === 'sent'}
            style={{
              background: '#C76B10',
              color: '#171717',
              border: 'none',
              borderRadius: '20px',
              padding: '14px 80px',
              fontSize: '18px',
              fontWeight: 700,
              fontFamily: 'var(--font-syne)',
              cursor: status === 'sending' || status === 'sent' ? 'default' : 'pointer',
              opacity: status === 'sending' ? 0.7 : 1,
              transition: 'opacity 0.2s',
            }}
          >
            {status === 'sending' ? 'Wird gesendet…' : status === 'sent' ? 'Gesendet ✓' : 'Senden'}
          </button>
          {status === 'sent' && (
            <p style={{ color: '#C76B10', fontSize: '16px', fontFamily: 'var(--font-syne)', marginTop: '1rem' }}>
              Vielen Dank! Deine Nachricht wurde gesendet.
            </p>
          )}
          {status === 'error' && (
            <p style={{ color: '#ff6b6b', fontSize: '16px', fontFamily: 'var(--font-syne)', marginTop: '1rem' }}>
              Etwas ist schiefgelaufen. Bitte versuche es erneut oder schreib direkt an info@koeschu.com.
            </p>
          )}
        </div>
      </form>
    </section>
  )
}
