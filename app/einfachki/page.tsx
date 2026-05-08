import Link from 'next/link'
import Image from 'next/image'

const cards = [
  {
    titleBrand: 'Nutzen',
    titleBlue: '&Anwendung.',
    image: '/images/dollar.webp',
    alt: 'Nutzen und Anwendung',
    href: '/nutzenanwendung',
    bullets: [
      'Identifikation relevanter Use Cases',
      'Bewertung des wirtschaftlichen Mehrwerts',
      'Integration in bestehende Prozesse',
      'Schritt-für-Schritt-Rollout',
    ],
  },
  {
    titleBrand: 'Tools',
    titleBlue: '&Technik.',
    image: '/images/wrenches.webp',
    alt: 'Tools und Technik',
    href: '/toolstechnik',
    bullets: [
      'Auswahl passender KI-Anwendungen',
      'Cloud- vs. On-Premise-Strategie',
      'Kostenanalyse & Administration',
      'Sicherer Betrieb und Wartung',
    ],
  },
  {
    titleBrand: 'Recht',
    titleBlue: '&Sicherheit.',
    image: '/images/gavel.webp',
    alt: 'Recht und Sicherheit',
    href: '/rechtsicherheit',
    bullets: [
      'DSGVO-konforme Umsetzung',
      'Governance-Modelle für KI',
      'Orientierung am EU-AI-Act',
      'Ethische Leitlinien im Einsatz von KI',
    ],
  },
  {
    titleBrand: 'Wissen',
    titleBlue: '&Veränderung.',
    image: '/images/brain.webp',
    alt: 'Wissen und Veränderung',
    href: '/wissenveranderung',
    bullets: [
      'Schulungen & Training für Mitarbeiter',
      'Aufbau von internem KI-Know-how',
      'Change Management für Akzeptanz',
      'Unterstützung bei kulturellem Wandel',
    ],
  },
  {
    titleBrand: 'Projektmanagement.',
    titleBlue: '',
    image: '/images/pencil-paper.webp',
    alt: 'Projektmanagement',
    href: '/projektmanagement',
    bullets: [
      'Zentrale Koordination aller Maßnahmen',
      'Meilensteinplanung & Schnittstellensteuerung',
      'Risikomanagement & Reporting',
      'Klassische, hybride & agile Projektmodelle',
      'Strukturierte, transparente & verbindliche Umsetzung',
    ],
  },
]

export default function EinfachKIPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1.5rem 3rem' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 700, margin: '0 0 2rem', textAlign: 'center' }}>
          <span className="text-brand">Einfach</span><span className="text-blue">KI.</span>{' '}<span className="text-brand">Einfach</span><span className="text-blue">Machen.</span>
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }} className="hero-grid">
          <div>
            <p style={{ color: '#ffffff', fontSize: '18px', lineHeight: '1.75', margin: '0 0 1rem', fontFamily: 'var(--font-syne)' }}>
              Du weißt, dass in deinem Unternehmen Potential für Automatisierung und Künstliche Intelligenz steckt, jedoch wirkt der Einstieg zu komplex?
            </p>
            <p style={{ color: '#ffffff', fontSize: '18px', lineHeight: '1.75', margin: '0 0 1rem', fontFamily: 'var(--font-syne)' }}>
              KI-Implementierung braucht Struktur. Mit unserer 3-Tage-Standortbestimmung identifizieren wir messbare Use-Cases und erstellen eine klare Roadmap für deine Organisation.
            </p>
            <p style={{ color: '#ffffff', fontSize: '18px', lineHeight: '1.75', margin: 0, fontFamily: 'var(--font-syne)' }}>
              <u>Der Vorteil</u>: Als gelisteter BAFA-Berater begleite ich diesen Prozess – für mittelständische Unternehmen ist eine staatliche Förderung von 50 % bis zu 80 % der Honorarkosten möglich (je nach Standort des Unternehmens).
            </p>
          </div>
          <div style={{ borderRadius: '8px', overflow: 'hidden' }}>
            <iframe
              src="https://www.youtube.com/embed/Rfa3t5LF_f0?modestbranding=1&controls=1&rel=0"
              width="100%"
              style={{ aspectRatio: '16/9', border: 'none', display: 'block' }}
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }} className="ki-cards-grid">
          {cards.map((card, idx) => (
            <Link key={card.titleBrand} href={card.href} className="ki-subcard-link" style={{ textDecoration: 'none', display: 'block' }}>
              <div
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                }}
              >
                <p style={{ fontSize: '22px', fontWeight: 400, margin: 0, fontFamily: 'var(--font-syne)' }}>
                  <span className="text-brand">{card.titleBrand}</span>
                  {card.titleBlue && (
                    <>
                      <span className="text-blue">&amp;</span>
                      <span className="text-brand">{card.titleBlue.slice(1)}</span>
                    </>
                  )}
                </p>
                <div style={{ position: 'relative', aspectRatio: '16/9', borderRadius: '8px', overflow: 'hidden' }}>
                  <Image src={card.image} alt={card.alt} fill style={{ objectFit: 'cover' }} />
                </div>
                <ul style={{ margin: 0, paddingLeft: '1.25rem', listStyleType: 'disc' }}>
                  {card.bullets.map((bullet) => (
                    <li key={bullet} style={{ color: '#ffffff', fontSize: '18px', lineHeight: '1.75', fontFamily: 'var(--font-syne)' }}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }} className="cta-grid">
          <div>
            <h2 className="text-brand" style={{ fontSize: '32px', fontWeight: 700, margin: '0 0 1.5rem' }}>
              Nimm Kontakt auf!
            </h2>
            <Link href="/contact" className="btn-filled">Kontakt</Link>
          </div>
          <div style={{ position: 'relative', height: '260px', borderRadius: '12px', overflow: 'hidden' }}>
            <Image src="/images/keyboard.jpg" alt="Keyboard" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid, .cta-grid { grid-template-columns: 1fr !important; }
          .ki-cards-grid { grid-template-columns: 1fr !important; }
          .ki-cards-grid > div { grid-column: span 1 !important; }
        }
        .ki-subcard-link:hover .card {
          background: rgba(123, 150, 181, 0.1) !important;
          border-color: rgba(102, 115, 143, 0.5) !important;
        }
      `}</style>
    </>
  )
}
