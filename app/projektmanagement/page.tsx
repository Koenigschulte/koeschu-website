import Link from 'next/link'
import Image from 'next/image'

export default function ProjektmanagementPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1.5rem 3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }} className="section-grid">
          {/* Image left */}
          <div style={{ position: 'relative', aspectRatio: '4/3', borderRadius: '12px', overflow: 'hidden' }}>
            <Image src="/images/pencil-paper.webp" alt="Projektmanagement" fill style={{ objectFit: 'cover' }} />
          </div>
          {/* Title + Q&A right */}
          <div>
            <h1 style={{ fontSize: '48px', fontWeight: 700, margin: '0 0 1.5rem' }}>
              <span className="text-brand">Projektmanagement.</span>
            </h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <p style={{ color: '#ffffff', fontSize: '20px', fontWeight: 700, fontFamily: 'var(--font-syne)', margin: '0 0 0.5rem' }}>Was ist das?</p>
                <p style={{ color: '#ffffff', fontSize: '18px', lineHeight: '1.75', fontFamily: 'var(--font-syne)', margin: 0 }}>Die zentrale Koordination aller Maßnahmen – damit Use Cases, Tools, Governance und Kommunikation zusammenspielen und effizient umgesetzt werden.</p>
              </div>
              <div>
                <p style={{ color: '#ffffff', fontSize: '20px', fontWeight: 700, fontFamily: 'var(--font-syne)', margin: '0 0 0.5rem' }}>Was machen wir?</p>
                <p style={{ color: '#ffffff', fontSize: '18px', lineHeight: '1.75', fontFamily: 'var(--font-syne)', margin: 0 }}>Wir übernehmen die Projektleitung – mit klarer Struktur, verbindlichen Abläufen und transparenter Kommunikation. Dazu gehören:<br />– Meilensteinplanung<br />– Schnittstellensteuerung<br />– Risikomanagement<br />– Berichtswesen für Entscheider:innen</p>
              </div>
              <div>
                <p style={{ color: '#ffffff', fontSize: '20px', fontWeight: 700, fontFamily: 'var(--font-syne)', margin: '0 0 0.5rem' }}>Wo ist Individualisierung nötig?</p>
                <p style={{ color: '#ffffff', fontSize: '18px', lineHeight: '1.75', fontFamily: 'var(--font-syne)', margin: 0 }}>PM-Tiefe, Beteiligungsformate und Abstimmungszyklen passen wir an Ihre Organisation und Führungsstruktur an.</p>
              </div>
              <div>
                <p style={{ color: '#ffffff', fontSize: '20px', fontWeight: 700, fontFamily: 'var(--font-syne)', margin: '0 0 0.5rem' }}>Was bringen wir mit?</p>
                <p style={{ color: '#ffffff', fontSize: '18px', lineHeight: '1.75', fontFamily: 'var(--font-syne)', margin: 0 }}>– Projektmodelle für klassische, hybride und agile Umfelder<br />– Templates für Planung, Steuerung &amp; Reporting<br />– Erfahrung in interdisziplinären KI-Projekten</p>
              </div>
              <div>
                <p style={{ color: '#ffffff', fontSize: '20px', fontWeight: 700, fontFamily: 'var(--font-syne)', margin: '0 0 0.5rem' }}>Warum mit unserer Unterstützung?</p>
                <p style={{ color: '#ffffff', fontSize: '18px', lineHeight: '1.75', fontFamily: 'var(--font-syne)', margin: 0 }}>Ohne Steuerung wird selbst das beste Konzept zäh. Wir halten alles zusammen – strukturiert, transparent und verbindlich.</p>
              </div>
              <p style={{ color: '#ffffff', fontSize: '18px', lineHeight: '1.75', fontFamily: 'var(--font-syne)', margin: 0 }}>
                👉 Für eine schnelle Einführung bringen wir Standards mit, individualisieren nur da, wo es erforderlich und sinnvoll ist – damit eine KI-Einführung schnell erfolgt und erste Erfolge wirksam und sichtbar werden.
              </p>
              <p style={{ fontWeight: 700, fontSize: '18px', fontFamily: 'var(--font-syne)', margin: 0 }}>
                <span className="text-brand">Einfach</span><span className="text-blue">KI.</span>{' '}<span className="text-brand">Einfach</span><span className="text-blue">Machen.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }} className="cta-grid">
          <div style={{ textAlign: 'center' }}>
            <h2 className="text-brand" style={{ fontSize: '32px', fontWeight: 700, margin: '0 0 1.5rem' }}>Nimm Kontakt auf!</h2>
            <Link href="/contact" className="btn-filled">Kontakt</Link>
          </div>
          <div style={{ position: 'relative', height: '260px', borderRadius: '12px', overflow: 'hidden' }}>
            <Image src="/images/keyboard.jpg" alt="Keyboard" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .section-grid, .cta-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
