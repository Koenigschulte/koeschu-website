'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: [['Home', true], ['Page.', false]] as [string, boolean][] },
  { href: '/intermmanagement', label: [['Interim', true], ['Management.', false]] as [string, boolean][] },
  { href: '/einfachki', label: [['Einfach', true], ['KI.', false]] as [string, boolean][] },
  { href: '/contact', label: [['Kontakt', true], ['.', false]] as [string, boolean][] },
]

export default function Navigation() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header style={{
      backgroundColor: '#171717',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
    }}>
      <div className="nav-inner" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1.5rem',
        height: '152px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <Image src="/images/logo.png" alt="koeschu.com" width={120} height={60} style={{ height: '60px', width: 'auto', objectFit: 'contain' }} />
        </Link>

        <nav style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }} className="nav-desktop">
          {navLinks.map((link) => {
            const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  textDecoration: 'none',
                  fontSize: '18px',
                  padding: '6px 12px',
                  background: isActive ? 'rgb(48,48,48)' : 'transparent',
                  border: '1px solid transparent',
                  borderRadius: '4px',
                  transition: 'background 0.2s',
                }}
              >
                {link.label.map(([text, isBrand], i) => (
                  <span key={i} style={{ color: isBrand ? '#C76B10' : '#7b96b5' }}>{text}</span>
                ))}
              </Link>
            )
          })}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü öffnen"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
          }}
          className="nav-hamburger"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {menuOpen ? (
              <path d="M6 6L18 18M6 18L18 6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <>
                <path d="M3 6H21" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                <path d="M3 12H21" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                <path d="M3 18H21" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div style={{
          backgroundColor: '#1e1e1e',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          padding: '1rem 1.5rem',
        }}>
          {navLinks.map((link) => {
            const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  border: isActive ? '1px solid rgba(199,107,16,0.6)' : undefined,
                  borderRadius: isActive ? '4px' : undefined,
                  paddingLeft: isActive ? '12px' : undefined,
                  marginBottom: '4px',
                }}
              >
                {link.label.map(([text, isBrand], i) => (
                  <span key={i} style={{ color: isBrand ? '#C76B10' : '#7b96b5' }}>{text}</span>
                ))}
              </Link>
            )
          })}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
          .nav-inner { height: 72px !important; }
        }
        @media (min-width: 769px) {
          .nav-hamburger { display: none !important; }
        }
        .nav-desktop a:hover {
          background: rgb(48,48,48) !important;
        }
      `}</style>
    </header>
  )
}
