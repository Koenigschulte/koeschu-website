import Link from 'next/link'
import Image from 'next/image'

export default function IntermManagementPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1.5rem 3rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 700, margin: 0 }}>
          <span className="text-brand">Interim</span><span className="text-blue">Management.</span>
        </h1>
      </section>

      {/* Sections */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem 5rem', display: 'flex', flexDirection: 'column', gap: '5rem' }}>

        {/* Sektion 1: Bild links, Text rechts */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }} className="section-grid">
          <div style={{ position: 'relative', aspectRatio: '4/3', borderRadius: '12px', overflow: 'hidden' }}>
            <Image src="/images/person-pencil.webp" alt="Projektleitung" fill style={{ objectFit: 'cover' }} />
          </div>
          <div>
            <h2 style={{ fontSize: '32px', fontWeight: 700, margin: '0 0 1.25rem', color: '#C76B10' }}>
              Projektleitung – Führung mit Überblick und Verantwortung
            </h2>
            <p style={{ color: '#ffffff', lineHeight: '1.75', fontSize: '18px', margin: 0, fontFamily: 'var(--font-syne)' }}>
              Komplexe Projekte brauchen mehr als nur einen Plan – sie brauchen einen klaren Kopf, der Menschen, Prozesse und Ziele verbindet. Mit langjähriger Erfahrung in der Leitung anspruchsvoller Vorhaben in den Bereichen Energieversorgung, Telekommunikation, Mobilität und IT übernehme ich die operative und strategische Steuerung Ihrer Projekte. Von der Initialisierung über die Meilensteinplanung bis hin zum erfolgreichen Abschluss sorge ich für transparente Kommunikation, effiziente Ressourcennutzung und die Einhaltung von Budget- und Zeitrahmen. Mein Anspruch: Projekte so zu führen, dass Teams motiviert arbeiten, Risiken minimiert werden und Ergebnisse den tatsächlichen Mehrwert für Ihr Unternehmen liefern.
            </p>
          </div>
        </div>

        {/* Sektion 2: Text links, Bild rechts */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }} className="section-grid">
          <div>
            <h2 style={{ fontSize: '32px', fontWeight: 700, margin: '0 0 1.25rem', color: '#C76B10' }}>
              Business Analyse – von Daten zu Entscheidungen
            </h2>
            <p style={{ color: '#ffffff', lineHeight: '1.75', fontSize: '18px', margin: 0, fontFamily: 'var(--font-syne)' }}>
              Eine gute Business Analyse ist mehr als Zahleninterpretation – sie ist der Schlüssel zu fundierten, zukunftsweisenden Entscheidungen. Durch meine Projekterfahrung in datengetriebenen und prozessorientierten Umgebungen unterstütze ich Sie dabei, Ihre Geschäftsprozesse tiefgehend zu verstehen, Optimierungspotenziale zu erkennen und diese in tragfähige Lösungen zu übersetzen. Ich identifiziere fachliche Anforderungen, übersetze sie in technische Spezifikationen und begleite Sie von der Analyse bis zur Umsetzung – immer mit Blick auf Ihre strategischen Ziele. Ergebnis: Sie erhalten belastbare Entscheidungsgrundlagen und klare Handlungsoptionen, um Ihr Unternehmen nachhaltig voranzubringen.
            </p>
          </div>
          <div style={{ position: 'relative', aspectRatio: '4/3', borderRadius: '12px', overflow: 'hidden' }}>
            <Image src="/images/newspapers.webp" alt="Business Analyse" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>

        {/* Sektion 3: Bild links, Text rechts */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }} className="section-grid">
          <div style={{ position: 'relative', aspectRatio: '4/3', borderRadius: '12px', overflow: 'hidden' }}>
            <Image src="/images/arrow.webp" alt="Prozessmanagement" fill style={{ objectFit: 'cover' }} />
          </div>
          <div>
            <h2 style={{ fontSize: '32px', fontWeight: 700, margin: '0 0 1.25rem', color: '#C76B10' }}>
              Prozessmanagement – Effizienz beginnt vor der Digitalisierung
            </h2>
            <p style={{ color: '#ffffff', lineHeight: '1.75', fontSize: '18px', margin: 0, fontFamily: 'var(--font-syne)' }}>
              „Erst Prozesse optimieren – dann digitalisieren." Dieser Leitsatz prägt meinen Ansatz im Prozessmanagement. Denn nur wer seine Abläufe kennt und optimiert, kann digitale Lösungen erfolgreich implementieren. Ich analysiere bestehende Prozesse, identifiziere Schwachstellen und entwickle gemeinsam mit Ihnen effiziente, standardisierte Workflows. Dabei nutze ich bewährte Methoden wie BPMN-gestützte Modellierung, Lean-Ansätze und Prozesskennzahlen, um messbare Verbesserungen zu erreichen. Ob in der Energiebranche, im ÖPNV oder in der IT – meine Arbeit sorgt dafür, dass Ihre Organisation schlanker, schneller und resilienter wird.
            </p>
          </div>
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
          .section-grid, .cta-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
