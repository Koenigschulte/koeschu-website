import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#171717',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      marginTop: 'auto',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '3rem 1.5rem 1.5rem',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem',
        }}>
          {/* Logo + text */}
          <div>
            <Image src="/images/logo.png" alt="koeschu.com" width={105} height={55} style={{ height: '55px', width: 'auto', objectFit: 'contain', marginBottom: '0.75rem', display: 'block' }} />
            <p style={{ color: '#ffffff', fontSize: '13px', lineHeight: '1.6', margin: 0, fontFamily: 'var(--font-syne)' }}>
              Alexander Königschulte begleitet Organisationen dabei, Veränderungen nachhaltig zu gestalten, Potenziale zu entfalten und Chancen neuer Technologien gewinnbringend zu nutzen. Sein Ziel: nachhaltiger Erfolg, effiziente Abläufe und ein klarer Vorsprung im Wettbewerb.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 style={{ color: '#ffffff', fontWeight: 700, fontSize: '20px', marginBottom: '0.75rem', marginTop: 0, fontFamily: 'var(--font-syne)' }}>Menü</h3>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { label: 'Home page', href: '/' },
                { label: 'Interim Management', href: '/intermmanagement' },
                { label: 'EinfachKI.', href: '/einfachki' },
                { label: 'Kontakt', href: '/contact' },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{ color: '#ffffff', fontSize: '13px', fontFamily: 'var(--font-syne)' }}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Address */}
          <div>
            <h3 style={{ color: '#ffffff', fontWeight: 700, fontSize: '20px', marginBottom: '0.75rem', marginTop: 0, fontFamily: 'var(--font-syne)' }}>Adresse</h3>
            <p style={{ color: '#ffffff', fontSize: '13px', lineHeight: '1.6', margin: 0, fontFamily: 'var(--font-syne)' }}>
              Im Röhrken 27c<br />
              58456 Witten
            </p>
          </div>

          {/* Contact + LinkedIn */}
          <div>
            <h3 style={{ color: '#ffffff', fontWeight: 700, fontSize: '20px', marginBottom: '0.75rem', marginTop: 0, fontFamily: 'var(--font-syne)' }}>Kontakt</h3>
            <p style={{ color: '#ffffff', fontSize: '13px', lineHeight: '1.8', margin: '0 0 0.75rem', fontFamily: 'var(--font-syne)' }}>
              <a href="mailto:info@koeschu.com" style={{ color: '#ffffff' }}>info@koeschu.com</a><br />
              <a href="tel:+491636003939" style={{ color: '#ffffff' }}>+49 163 6003939</a>
            </p>
            <p style={{ color: '#ffffff', fontSize: '20px', margin: '0 0 0.5rem', fontFamily: 'var(--font-syne)' }}>Follow me!</p>
            <a
              href="https://www.linkedin.com/in/alexander-k%C3%B6nigschulte-5084797/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '13px', fontFamily: 'var(--font-syne)' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <Link href="/impressumdatenschutz" style={{ color: '#ffffff', fontSize: '13px', fontFamily: 'var(--font-syne)' }}>Datenschutzerklärung</Link>
          <Link href="/impressumdatenschutz" style={{ color: '#ffffff', fontSize: '13px', fontFamily: 'var(--font-syne)' }}>Impressum</Link>
        </div>
      </div>
    </footer>
  )
}
