import Link from 'next/link'
import Image from 'next/image'

const p = (size: number, bold?: boolean) => ({
  color: '#ffffff' as const,
  fontSize: `${size}px`,
  lineHeight: '1.75' as const,
  fontFamily: 'var(--font-syne)',
  fontWeight: bold ? 700 : 400,
  margin: bold ? '0 0 0.5rem' : '0',
})

export default function ToolsTechnikPage() {
  return (
    <>
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1.5rem 5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }} className="section-grid">

          {/* LEFT: image + Cloud vs. On-Premise */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <div style={{ position: 'relative', aspectRatio: '4/3', borderRadius: '12px', overflow: 'hidden' }}>
              <Image src="/images/wrenches.webp" alt="Tools und Technik" fill style={{ objectFit: 'cover' }} />
            </div>

            {/* Cloud vs. On-Premise */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p style={{ ...p(22, true), margin: '0 0 0.75rem' }}>Cloud vs. On-Premise</p>
              <div>
                <p style={p(20, true)}>Was ist das?</p>
                <p style={p(18)}>Die Wahl der passenden Infrastruktur – unter Berücksichtigung von Sicherheit, Datenschutz, IT-Architektur und langfristiger Skalierbarkeit.</p>
              </div>
              <div>
                <p style={p(20, true)}>Was machen wir?</p>
                <p style={p(18)}>Wir helfen bei der Entscheidung: Cloud, On-Prem oder Hybrid? Dabei analysieren wir:<br />– Ihre IT-Umgebung<br />– Datenschutzvorgaben<br />– Integrationsfähigkeit &amp; Kosten</p>
              </div>
              <div>
                <p style={p(20, true)}>Wo ist Individualisierung nötig?</p>
                <p style={p(18)}>Vorgaben, Compliance-Anforderungen und technologische Voraussetzungen unterscheiden sich je nach Organisation – wir berücksichtigen all das.</p>
              </div>
              <div>
                <p style={p(20, true)}>Was bringen wir mit?</p>
                <p style={p(18)}>– Entscheidungsraster mit Bewertungsmatrix<br />– Erfahrungswerte aus Hybrid- und Cloud-Projekten<br />– Beispiele für Datenschutzkonforme Umsetzungen</p>
              </div>
              <div>
                <p style={p(20, true)}>Warum mit unserer Unterstützung?</p>
                <p style={p(18)}>Die Infrastrukturentscheidung hat technische und rechtliche Konsequenzen. Wir sorgen für ein tragfähiges Setup – mit realistischen Bewertungen und klarer Roadmap.</p>
              </div>
              <p style={p(18)}>👉 Für eine schnelle Einführung bringen wir Standards mit, individualisieren nur da, wo es erforderlich und sinnvoll ist – damit eine KI-Einführung schnell erfolgt und erste Erfolge wirksam und sichtbar werden.</p>
              <p style={{ ...p(18, true), fontWeight: 700 }}>
                <span className="text-brand">Einfach</span><span className="text-blue">KI.</span>{' '}<span className="text-brand">Einfach</span><span className="text-blue">Machen.</span>
              </p>
            </div>
          </div>

          {/* RIGHT: title + Auswahl der KI-Tools */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h1 style={{ fontSize: '48px', fontWeight: 700, margin: '0 0 0.5rem' }}>
              <span className="text-brand">Tools</span><span className="text-blue">&amp;</span><span className="text-brand">Technik.</span>
            </h1>
            <p style={{ ...p(22, true), margin: '0 0 0.75rem' }}>Auswahl der KI-Tools &amp; Kosten</p>
            <div>
              <p style={p(20, true)}>Was ist das?</p>
              <p style={p(18)}>Die fundierte Auswahl passender KI-Werkzeuge – abgestimmt auf Use Case, Datenschutz, Budget und IT-Umfeld. Inklusive realistischer Kostenbetrachtung für Lizenzierung, Betrieb und Pflege.</p>
            </div>
            <div>
              <p style={p(20, true)}>Was machen wir?</p>
              <p style={p(18)}>Wir analysieren Ihre Anforderungen, vergleichen verfügbare Tools und erstellen eine belastbare Entscheidungsgrundlage.</p>
            </div>
            <div>
              <p style={p(20, true)}>Wo ist Individualisierung nötig?</p>
              <p style={p(18)}>Toolauswahl hängt vom konkreten Use Case, bestehenden Systemen, Datenschutzvorgaben und Nutzerprofilen ab.</p>
            </div>
            <div>
              <p style={p(20, true)}>Was bringen wir mit?</p>
              <p style={p(18)}>– Marktüberblick &amp; Toolscreening<br />– Vergleichsraster &amp; TCO-Vorlagen<br />– Erfahrung mit typischen Hidden Costs</p>
            </div>
            <div>
              <p style={p(20, true)}>Warum mit unserer Unterstützung?</p>
              <p style={p(18)}>Der KI-Markt ist hochdynamisch – wöchentlich entstehen neue Tools. Wir helfen, mit einem fokussierten, schlanken Toolset zu starten – passend, skalierbar und ohne Überraschungen.</p>
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
