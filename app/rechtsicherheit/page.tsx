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

export default function RechtSicherheitPage() {
  return (
    <>
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1.5rem 5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }} className="section-grid">

          {/* LEFT: image + EU AI Act */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <div style={{ position: 'relative', aspectRatio: '4/3', borderRadius: '12px', overflow: 'hidden' }}>
              <Image src="/images/gavel.webp" alt="Recht und Sicherheit" fill style={{ objectFit: 'cover' }} />
            </div>

            {/* EU AI Act */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p style={{ ...p(22, true), margin: '0 0 0.75rem' }}>EU AI Act</p>
              <div>
                <p style={p(20, true)}>Was ist das?</p>
                <p style={p(18)}>Das neue EU-Regelwerk für den Einsatz von KI – mit Pflichten zu Transparenz, Risikoabschätzung und Dokumentation.</p>
              </div>
              <div>
                <p style={p(20, true)}>Was machen wir?</p>
                <p style={p(18)}>Wir analysieren Ihre Use Cases hinsichtlich AI-Act-Relevanz, Risikoklasse und Umsetzungsanforderungen. Wir helfen bei:<br />– Risikoeinstufung<br />– Dokumentation &amp; Handlungsempfehlung<br />– Aufbereitung für interne Entscheidungsträger</p>
              </div>
              <div>
                <p style={p(20, true)}>Wo ist Individualisierung nötig?</p>
                <p style={p(18)}>Die Bewertung variiert stark je nach Branche, Datenlage und Use Case. Wir stimmen die Einordnung auf Ihre Kontexte und Strategien ab.</p>
              </div>
              <div>
                <p style={p(20, true)}>Was bringen wir mit?</p>
                <p style={p(18)}>– Bewertungsmodell &amp; Praxisbeispiele<br />– Vorlagen für interne Kommunikation<br />– Empfehlungen auf Basis des aktuellen Rechtsstands</p>
              </div>
              <div>
                <p style={p(20, true)}>Warum mit unserer Unterstützung?</p>
                <p style={p(18)}>Viele Unternehmen überschätzen Risiken – oder erkennen sie zu spät. Wir liefern eine fundierte, praxisnahe Einordnung zur Orientierung und Handlungssicherheit.</p>
              </div>
            </div>
          </div>

          {/* RIGHT: title + DSGVO + Governance & Ethik */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h1 style={{ fontSize: '48px', fontWeight: 700, margin: '0 0 0.5rem' }}>
              <span className="text-brand">Recht</span><span className="text-blue">&amp;</span><span className="text-brand">Sicherheit.</span>
            </h1>

            {/* DSGVO & Datenschutz */}
            <p style={{ ...p(22, true), margin: '0 0 0.75rem' }}>DSGVO &amp; Datenschutz</p>
            <div>
              <p style={p(20, true)}>Was ist das?</p>
              <p style={p(18)}>Die rechtliche Absicherung von KI-Anwendungen – mit Fokus auf DSGVO, Datensicherheit und betriebsinterne Anforderungen.</p>
            </div>
            <div>
              <p style={p(20, true)}>Was machen wir?</p>
              <p style={p(18)}>Wir analysieren geplante Use Cases hinsichtlich DSGVO-Konformität – inklusive Datenkategorien, Verarbeitungszweck, Hosting und Drittstaatenbezug. Dabei berücksichtigen wir sowohl gesetzliche Anforderungen als auch unternehmensspezifische Datenschutzrichtlinien (z. B. Umgang mit Mitarbeiterdaten, Toolfreigaben). Wir beraten bei Datenschutzfolgeabschätzungen, Anbieterwahl und begleiten die Kommunikation mit Datenschutzbeauftragten und ggf. Betriebsrat.</p>
            </div>
            <div>
              <p style={p(20, true)}>Wo ist Individualisierung nötig?</p>
              <p style={p(18)}>Datenschutz ist nie „one size fits all". Einige Unternehmen verlangen strikte On-Prem-Lösungen, andere arbeiten bereits mit europäischen Cloud-Anbietern. Auch interne Vorgaben (z. B. keine Verarbeitung von Personaldaten ohne Betriebsrat) müssen berücksichtigt werden.</p>
            </div>
            <div>
              <p style={p(20, true)}>Was bringen wir mit?</p>
              <p style={p(18)}>– Vorgehensmodelle für Datenschutz-Checks<br />– Vorlagen für Folgeabschätzungen &amp; interne Richtlinien<br />– Marktüberblick über datenschutzkonforme Tools<br />– Kommunikationshilfen für Betriebsrat &amp; Datenschutzbeauftragte</p>
            </div>
            <div>
              <p style={p(20, true)}>Warum mit unserer Unterstützung?</p>
              <p style={p(18)}>KI-Projekte geraten oft ins Stocken, weil Datenschutzfragen zu spät oder zu pauschal behandelt werden. Wir schaffen Transparenz, vermeiden Stolperfallen und ermöglichen pragmatische Lösungen.</p>
            </div>

            {/* Governance & Ethik */}
            <div style={{ marginTop: '2rem' }}>
              <p style={{ ...p(22, true), margin: '0 0 0.75rem' }}>Governance &amp; Ethik</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <p style={p(20, true)}>Was ist das?</p>
                  <p style={p(18)}>Die Festlegung von Regeln, Rollen und Richtlinien für den verantwortungsvollen und kontrollierten Einsatz von KI im Unternehmen – inklusive ethischer Bewertung.</p>
                </div>
                <div>
                  <p style={p(20, true)}>Was machen wir?</p>
                  <p style={p(18)}>Wir entwickeln ein Governance-Framework für den KI-Einsatz. Dabei geht es konkret um:<br />– Welche Tools sind erlaubt?<br />– Wer darf sie nutzen und wer gibt sie frei?<br />– Wer trägt Verantwortung für Inhalte, Kosten und Lizenzen?<br />– Wie wird mit KI-generierten Ergebnissen umgegangen (z. B. Haftung, Korrekturpflichten)?<br />– Welche ethischen Grundsätze gelten (Fairness, Transparenz etc.)?</p>
                </div>
                <div>
                  <p style={p(20, true)}>Wo ist Individualisierung nötig?</p>
                  <p style={p(18)}>Die Governance muss zur Unternehmenskultur passen. Wir entwickeln ein Modell, das zu Ihrem Grad an Mitbestimmung, Hierarchie und Verantwortung passt.</p>
                </div>
                <div>
                  <p style={p(20, true)}>Was bringen wir mit?</p>
                  <p style={p(18)}>– Ein vorkonfiguriertes Governance-Modell<br />– Rollenkonzepte &amp; Richtlinien-Vorlagen<br />– Ethik-Leitlinien aus Best Practices<br />– Kommunikationsbausteine zur Einführung</p>
                </div>
                <div>
                  <p style={p(20, true)}>Warum mit unserer Unterstützung?</p>
                  <p style={p(18)}>Wer Governance „auf der grünen Wiese" entwickelt, verliert Zeit. Gleichzeitig blockieren fehlende Regeln den sicheren Einsatz von KI. Wir liefern ein direkt nutzbares Modell, das schnell Wirkung entfaltet.</p>
                </div>
                <p style={p(18)}>👉 Für eine schnelle Einführung bringen wir Standards mit, individualisieren nur da, wo es erforderlich und sinnvoll ist – damit eine KI-Einführung schnell erfolgt und erste Erfolge wirksam und sichtbar werden.</p>
                <p style={{ ...p(18, true), fontWeight: 700 }}>
                  <span className="text-brand">Einfach</span><span className="text-blue">KI.</span>{' '}<span className="text-brand">Einfach</span><span className="text-blue">Machen.</span>
                </p>
              </div>
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
