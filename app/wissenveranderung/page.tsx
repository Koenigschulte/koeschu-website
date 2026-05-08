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

export default function WissenVeranderungPage() {
  return (
    <>
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1.5rem 5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }} className="section-grid">

          {/* LEFT: image + KI-Know-how & Training */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <div style={{ position: 'relative', aspectRatio: '4/3', borderRadius: '12px', overflow: 'hidden' }}>
              <Image src="/images/brain.webp" alt="Wissen und Veränderung" fill style={{ objectFit: 'cover' }} />
            </div>

            {/* KI-Know-how & Training */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p style={{ ...p(22, true), margin: '0 0 0.75rem' }}>KI-Know-how &amp; Training</p>
              <div>
                <p style={p(20, true)}>Was ist das?</p>
                <p style={p(18)}>Der gezielte Aufbau von KI-Kompetenz im Unternehmen – abgestimmt auf den Reifegrad, die Rollen und die konkreten Anwendungsfälle.</p>
              </div>
              <div>
                <p style={p(20, true)}>Was machen wir?</p>
                <p style={p(18)}>Wir bieten praxisnahe Schulungen, E-Learnings und Onboarding-Formate, die Ihre Mitarbeitenden in die Lage versetzen, KI sicher, souverän und kreativ zu nutzen – ohne Überforderung. Wir unterscheiden zwischen:<br />– Grundlagentraining für schnelle Orientierung<br />– Experten-Trainings für Fachbereiche wie IT, Recht oder Marketing</p>
              </div>
              <div>
                <p style={p(20, true)}>Wo ist Individualisierung nötig?</p>
                <p style={p(18)}>Jede Abteilung braucht andere Inhalte – die IT andere als die Rechtsabteilung oder das Marketing. Inhalte und Trainer werden auf Rollen und Tools zugeschnitten.</p>
              </div>
              <div>
                <p style={p(20, true)}>Was bringen wir mit?</p>
                <p style={p(18)}>– Vorbereitete Module &amp; Lernpfade<br />– Self-Learning-Kits &amp; Quickstart-Guides<br />– Erfahrung im Umgang mit kritischen Zielgruppen</p>
              </div>
              <div>
                <p style={p(20, true)}>Warum mit unserer Unterstützung?</p>
                <p style={p(18)}>Wissen ist der Schlüssel zur nachhaltigen KI-Nutzung. Ohne Training bleibt die beste Technologie ungenutzt. Wir schaffen das Fundament für eine lernende, KI-kompetente Organisation.</p>
              </div>
              <p style={p(18)}>👉 Für eine schnelle Einführung bringen wir Standards mit, individualisieren nur da, wo es erforderlich und sinnvoll ist – damit eine KI-Einführung schnell erfolgt und erste Erfolge wirksam und sichtbar werden.</p>
              <p style={{ ...p(18, true), fontWeight: 700 }}>
                <span className="text-brand">Einfach</span><span className="text-blue">KI.</span>{' '}<span className="text-brand">Einfach</span><span className="text-blue">Machen.</span>
              </p>
            </div>
          </div>

          {/* RIGHT: title + Change Management */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h1 style={{ fontSize: '48px', fontWeight: 700, margin: '0 0 0.5rem' }}>
              <span className="text-brand">Wissen</span><span className="text-blue">&amp;</span><span className="text-brand">Veränderung.</span>
            </h1>
            <p style={{ ...p(22, true), margin: '0 0 0.75rem' }}>Change Management</p>
            <div>
              <p style={p(20, true)}>Was ist das?</p>
              <p style={p(18)}>Technologie kann eingeführt werden – Veränderung muss gestaltet werden. Wir sorgen dafür, dass Ihre KI-Initiative nicht nur technisch, sondern auch kulturell ankommt.</p>
            </div>
            <div>
              <p style={p(20, true)}>Was machen wir?</p>
              <p style={p(18)}>Wir begleiten den Wandel mit:<br />– Stakeholderanalyse<br />– Kommunikationsstrategie<br />– Maßnahmen zur Beteiligung &amp; Akzeptanz</p>
            </div>
            <div>
              <p style={p(20, true)}>Wo ist Individualisierung nötig?</p>
              <p style={p(18)}>Kultur, Geschichte und Veränderungsbereitschaft sind in jedem Unternehmen unterschiedlich – wir entwickeln Formate, die zu Ihrer Belegschaft passen.</p>
            </div>
            <div>
              <p style={p(20, true)}>Was bringen wir mit?</p>
              <p style={p(18)}>– Kommunikationspakete &amp; Moderationsformate<br />– Change-Erfahrungen aus sensiblen Umfeldern<br />– Tools zur Akzeptanzmessung und Beteiligung</p>
            </div>
            <div>
              <p style={p(20, true)}>Warum mit unserer Unterstützung?</p>
              <p style={p(18)}>Viele KI-Projekte scheitern an mangelnder Akzeptanz – nicht an der Technik. Wir holen Führung und Mitarbeitende ab und machen Wandel greifbar und tragfähig.</p>
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
