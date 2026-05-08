import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1.5rem 4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }} className="hero-grid">

          {/* Left: card */}
          <div className="card">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <Link href="/intermmanagement" className="btn-outline">
                  <span className="text-brand">Interim</span><span className="text-blue">Management.</span>
                </Link>
                <p style={{ color: '#ffffff', fontSize: '18px', margin: '0.5rem 0 0', fontFamily: 'var(--font-syne)', textAlign: 'center' }}>
                  digitale Transformation aktiv Umsetzen
                </p>
              </div>

              <div>
                <Link href="/einfachki" className="btn-outline">
                  <span className="text-brand">Einfach</span><span className="text-blue">KI.</span>
                </Link>
                <p style={{ color: '#ffffff', fontSize: '18px', margin: '0.5rem 0 0', fontFamily: 'var(--font-syne)', textAlign: 'center' }}>
                  Potenzial aus KI &amp; Prozessen heben – messbar, pragmatisch.
                </p>
              </div>
            </div>
          </div>

          {/* Right: photo + name */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{ borderRadius: '20px', overflow: 'hidden', background: '#efefef', display: 'inline-block' }}>
              <Image
                src="/images/alexander.webp"
                alt="Alexander Königschulte"
                width={180}
                height={220}
                style={{ display: 'block' }}
              />
            </div>
            <div style={{ textAlign: 'center' }}>
              <h1 style={{ fontSize: '34px', fontWeight: 700, margin: '0 0 0.25rem' }}>
                <span className="text-brand">AIdriven</span><span className="text-blue">Consultant.</span>
              </h1>
              <p style={{ color: '#888888', margin: 0, fontFamily: 'var(--font-syne)', fontSize: '18px' }}>Alexander Königschulte</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem 4rem' }}>
        <h2 className="text-brand" style={{ fontSize: '42px', textAlign: 'center', margin: '0 0 2rem' }}>Services</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="services-grid">
          {/* InterimManagement card */}
          <div className="card">
            <h2 className="text-brand" style={{ fontSize: '30px', fontWeight: 700, margin: '0 0 1.25rem', textAlign: 'center' }}>
              InterimManagement.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { orange: 'Projekt', blue: 'Leitung.' },
                { orange: 'Business', blue: 'Analyse.' },
                { orange: 'Prozess', blue: 'Management.' },
              ].map((item) => (
                <Link key={item.orange} href="/intermmanagement" className="btn-outline">
                  <span className="text-brand">{item.orange}</span><span className="text-blue">{item.blue}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* EinfachKI card */}
          <Link href="/einfachki" className="ki-card-link" style={{ textDecoration: 'none', display: 'block' }}>
          <div className="card">
            <h2 style={{ fontSize: '30px', fontWeight: 700, margin: '0 0 1.25rem', textAlign: 'center' }}>
              <span className="text-brand">Einfach</span><span className="text-blue">KI.</span>
            </h2>
            <p style={{ color: '#ffffff', lineHeight: '1.75', margin: '0 0 0.75rem', fontSize: '18px', fontFamily: 'var(--font-syne)' }}>
              Du weißt, dass in deinem Unternehmen Potential für Automatisierung und Künstliche Intelligenz steckt, jedoch wirkt der Einstieg zu komplex?
            </p>
            <p style={{ color: '#ffffff', lineHeight: '1.75', margin: '0 0 0.75rem', fontSize: '18px', fontFamily: 'var(--font-syne)' }}>
              KI-Implementierung braucht Struktur. Mit unserer 3-Tage-Standortbestimmung identifizieren wir messbare Use-Cases und erstellen eine klare Roadmap für deine Organisation.
            </p>
            <p style={{ color: '#ffffff', lineHeight: '1.75', margin: '0 0 1.25rem', fontSize: '18px', fontFamily: 'var(--font-syne)' }}>
              <strong>Der Vorteil:</strong> Als gelisteter BAFA-Berater begleite ich diesen Prozess – für mittelständische Unternehmen ist eine staatliche Förderung von 50 % bis zu 80 % der Honorarkosten möglich (je nach Standort des Unternehmens).
            </p>
            <p style={{ fontWeight: 700, margin: '0 0 1rem', fontSize: '18px', fontFamily: 'var(--font-syne)', textAlign: 'center' }}>
              <span className="text-brand">Einfach</span><span className="text-blue">KI.</span>{' '}<span className="text-brand">Einfach</span><span className="text-blue">Machen.</span>
            </p>
            <div style={{ borderRadius: '8px', overflow: 'hidden' }}>
              <iframe
                src="https://www.youtube.com/embed/Rfa3t5LF_f0?modestbranding=1&controls=1&rel=0"
                width="100%"
                style={{ aspectRatio: '16/9', border: 'none', display: 'block' }}
                allowFullScreen
              />
            </div>
          </div>
          </Link>
        </div>
      </section>

      {/* Tätigkeitsbereiche */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem 4rem' }}>
        <h2 className="text-brand" style={{ fontSize: '42px', textAlign: 'center', margin: '0 0 2rem' }}>Tätigkeitsbereiche</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }} className="sectors-grid">
          {/* Energie */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', padding: '24px' }}>
            <h4 style={{ color: '#ffffff', fontWeight: 700, textAlign: 'center', margin: 0, fontSize: '18px', fontFamily: 'var(--font-syne)' }}>Energie</h4>
            <svg width="80" height="80" fill="#444345" viewBox="0 0 32 32">
              <path d="M12.1761 31.0001C12.0086 31.0002 11.843 30.9637 11.6911 30.893C11.5392 30.8223 11.4046 30.7193 11.2968 30.591C11.189 30.4628 11.1106 30.3125 11.067 30.1507C11.0235 29.9889 11.016 29.8195 11.0449 29.6545V29.6476L12.8018 20.0001H5.99989C5.81109 20.0001 5.62616 19.9466 5.46647 19.8459C5.30679 19.7451 5.17888 19.6013 5.09755 19.4309C5.01622 19.2605 4.98478 19.0706 5.00687 18.8831C5.02896 18.6956 5.10369 18.5182 5.22239 18.3713L18.9205 1.43759C19.0764 1.23967 19.2929 1.09826 19.5368 1.03499C19.7807 0.971725 20.0386 0.990079 20.271 1.08725C20.5035 1.18442 20.6978 1.35506 20.8241 1.57306C20.9504 1.79107 21.0018 2.04446 20.9705 2.29446C20.9705 2.31321 20.9655 2.33134 20.9624 2.35009L19.1993 12.0001H25.9999C26.1887 12.0001 26.3736 12.0536 26.5333 12.1543C26.693 12.255 26.8209 12.3989 26.9022 12.5693C26.9836 12.7397 27.015 12.9296 26.9929 13.1171C26.9708 13.3046 26.8961 13.482 26.7774 13.6288L13.0774 30.5626C12.9697 30.6986 12.8328 30.8086 12.6768 30.8843C12.5207 30.9601 12.3496 30.9996 12.1761 31.0001Z"/>
            </svg>
          </div>

          {/* ÖPNV */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', padding: '24px' }}>
            <h4 style={{ color: '#ffffff', fontWeight: 700, textAlign: 'center', margin: 0, fontSize: '18px', fontFamily: 'var(--font-syne)' }}>ÖPNV</h4>
            <svg width="80" height="80" fill="#444345" viewBox="0 0 32 32">
              <path fillRule="evenodd" clipRule="evenodd" d="M20 3H21.5C22.4283 3 23.3185 3.36875 23.9749 4.02513C24.6313 4.6815 25 5.57174 25 6.5V21.9375C25 24.1437 16 26 16 26C16 26 7 24.1437 7 21.9375V6.5C7.00264 5.57255 7.37223 4.68385 8.02804 4.02804C8.68385 3.37223 9.57255 3.00264 10.5 3H12C12 2.73478 12.1054 2.48043 12.2929 2.29289C12.4804 2.10536 12.7348 2 13 2H19C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3ZM14.3333 21.4944C14.8266 21.8241 15.4067 22 16 22C16.7956 22 17.5587 21.6839 18.1213 21.1213C18.6839 20.5587 19 19.7956 19 19C19 18.4067 18.8241 17.8266 18.4944 17.3333C18.1648 16.8399 17.6962 16.4554 17.1481 16.2284C16.5999 16.0013 15.9967 15.9419 15.4147 16.0576C14.8328 16.1734 14.2982 16.4591 13.8787 16.8787C13.4591 17.2982 13.1734 17.8328 13.0576 18.4147C12.9419 18.9967 13.0013 19.5999 13.2284 20.1481C13.4554 20.6962 13.8399 21.1648 14.3333 21.4944ZM21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12V8C22 7.73478 21.8946 7.48043 21.7071 7.29289C21.5196 7.10536 21.2652 7 21 7H11C10.7348 7 10.4804 7.10536 10.2929 7.29289C10.1054 7.48043 10 7.73478 10 8V12C10 12.2652 10.1054 12.5196 10.2929 12.7071C10.4804 12.8946 10.7348 13 11 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071ZM11.7071 26.2929C12.0976 26.6834 12.0976 27.3166 11.7071 27.7071L11.4142 28H20.5858L20.2929 27.7071C19.9024 27.3166 19.9024 26.6834 20.2929 26.2929C20.6834 25.9024 21.3166 25.9024 11.7071 26.2929L24.7071 29.2929C25.0976 29.6834 25.0976 30.3166 24.7071 30.7071C24.3166 31.0976 23.6834 31.0976 23.2929 30.7071L22.5858 30H9.41421L8.70711 30.7071C8.31658 31.0976 7.68342 31.0976 7.29289 30.7071C6.90237 30.3166 6.90237 29.6834 7.29289 29.2929L10.2929 26.2929C10.6834 25.9024 11.3166 25.9024 11.7071 26.2929Z"/>
            </svg>
          </div>

          {/* Telekommunikation */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', padding: '24px' }}>
            <h4 style={{ color: '#ffffff', fontWeight: 700, textAlign: 'center', margin: 0, fontSize: '18px', fontFamily: 'var(--font-syne)' }}>Telekommunikation</h4>
            <svg width="80" height="80" fill="#444345" viewBox="0 0 32 32">
              <path d="M24.4001 29.9996C23.2001 29.9996 21.5001 29.5996 18.9001 28.0996C15.8001 26.2996 13.4001 24.6996 10.3001 21.5996C7.30011 18.5996 5.90011 16.6996 3.80011 12.9996C1.50011 8.79963 1.90011 6.59963 2.30011 5.69963C2.80011 4.59963 3.60011 3.89963 4.60011 3.19963C5.20011 2.79963 5.80011 2.49963 6.40011 2.29963L6.60011 2.19963C7.70011 1.69963 8.30011 2.09963 9.30011 3.09963C10.4001 4.19963 12.0001 6.69963 12.6001 7.89963C13.4001 9.59963 13.6001 10.1996 12.4001 11.6996L12.2001 11.9996C11.7001 12.5996 11.6001 12.7996 11.7001 13.0996C11.8001 13.6996 12.8001 15.5996 14.6001 17.3996C16.3001 19.0996 18.1001 20.0996 18.8001 20.1996C19.1001 20.2996 19.3001 20.1996 20.0001 19.6996L20.3001 19.4996C21.9001 18.2996 22.5001 18.4996 24.2001 19.2996C25.3001 19.8996 27.9001 21.3996 29.0001 22.4996C30.0001 23.4996 30.4001 24.0996 29.9001 25.1996L29.8001 25.3996C29.5001 25.9996 29.2001 26.5996 28.8001 27.1996C28.1001 28.1996 27.5001 28.9996 26.3001 29.4996C25.8001 29.7996 25.2001 29.9996 24.4001 29.9996Z"/>
            </svg>
          </div>

          {/* Software */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', padding: '24px' }}>
            <h4 style={{ color: '#ffffff', fontWeight: 700, textAlign: 'center', margin: 0, fontSize: '18px', fontFamily: 'var(--font-syne)' }}>Software</h4>
            <svg width="80" height="80" fill="#444345" viewBox="0 0 32 32">
              <path fillRule="evenodd" clipRule="evenodd" d="M10 4C8.89543 4 8 4.89543 8 6C8 7.10457 8.89543 8 10 8C11.1046 8 12 7.10457 12 6C12 4.89543 11.1046 4 10 4ZM11 9.87398C12.7252 9.42994 14 7.86384 14 6C14 3.79086 12.2091 2 10 2C7.79086 2 6 3.79086 6 6C6 7.86384 7.27477 9.42994 9 9.87398V22.126C7.27477 22.5701 6 24.1362 6 26C6 28.2091 7.79086 30 10 30C12.2091 30 14 28.2091 14 26C14 24.1669 12.7669 22.6218 11.085 22.1489C11.1514 21.8485 11.2528 21.6045 11.3739 21.4018C11.5943 21.0332 11.9207 20.7341 12.3698 20.4784C13.2765 19.9621 14.5035 19.7072 15.9668 19.4033L16.204 19.354C17.6713 19.0483 19.3718 18.6753 20.6876 17.7798C21.9142 16.9451 22.7505 15.7031 22.9526 13.8859C24.7018 13.4585 26 11.8809 26 10C26 7.79086 24.2091 6 22 6C19.7909 6 18 7.79086 18 10C18 11.8423 19.2454 13.3936 20.9402 13.8581C20.7684 15.0023 20.2416 15.6642 19.5624 16.1264C18.6282 16.7622 17.3287 17.0767 15.796 17.396C15.6862 17.4189 15.5748 17.4419 15.4622 17.4651L15.4607 17.4654C14.1062 17.7445 12.5751 18.0599 11.3802 18.7404C11.2508 18.8141 11.1238 18.8927 11 18.9769V9.87398ZM10 24C8.89543 24 8 24.8954 8 26C8 27.1046 8.89543 28 10 28C11.1046 28 12 27.1046 12 26C12 24.8954 11.1046 24 10 24ZM22 12C23.1046 12 24 11.1046 24 10C24 8.89543 23.1046 8 22 8C20.8954 8 20 8.89543 20 10C20 11.1046 20.8954 12 22 12Z"/>
            </svg>
          </div>

          {/* Automotive */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', padding: '24px' }}>
            <h4 style={{ color: '#ffffff', fontWeight: 700, textAlign: 'center', margin: 0, fontSize: '18px', fontFamily: 'var(--font-syne)' }}>Automotive</h4>
            <svg width="80" height="80" fill="#444345" viewBox="0 0 32 32">
              <path d="M30.8914 17.2638C30.6664 14.7381 30.2957 14.2463 30.1557 14.0612C29.8339 13.6337 29.3189 13.3544 28.7739 13.0612C28.743 13.045 28.7164 13.0217 28.6961 12.9934C28.6758 12.965 28.6624 12.9324 28.6569 12.8979C28.6514 12.8635 28.6539 12.8283 28.6644 12.795C28.6748 12.7617 28.6928 12.7314 28.717 12.7063C28.8179 12.6039 28.8955 12.4809 28.9444 12.3457C28.9932 12.2105 29.0123 12.0664 29.0001 11.9231C28.9766 11.6691 28.8585 11.4332 28.6692 11.2623C28.4799 11.0913 28.2333 10.9977 27.9782 11H27.0032C26.9615 11.0002 26.9197 11.003 26.8782 11.0081C26.8498 10.9958 26.8203 10.9859 26.7901 10.9788C26.2126 9.75813 25.422 8.08687 23.7832 7.27125C21.3526 6.0625 16.8751 6 16.0001 6C15.1251 6 10.6476 6.0625 8.22012 7.26937C6.58137 8.085 5.79074 9.75625 5.21324 10.9769L5.20824 10.9869C5.17944 10.9909 5.15115 10.9981 5.12387 11.0081C5.0824 11.003 5.04066 11.0002 4.99887 11H4.02199C3.76692 10.9977 3.52029 11.0913 3.33101 11.2623C3.14173 11.4332 3.02362 11.6691 3.00012 11.9231C2.98901 12.066 3.0089 12.2096 3.05841 12.3442C3.10792 12.4787 3.18589 12.6009 3.28699 12.7025C3.31118 12.7276 3.3292 12.758 3.33963 12.7913C3.35006 12.8245 3.35262 12.8598 3.34711 12.8942C3.34159 12.9286 3.32815 12.9613 3.30785 12.9896C3.28755 13.018 3.26094 13.0412 3.23012 13.0575C2.68512 13.3525 2.16762 13.6319 1.84824 14.0575C1.70824 14.245 1.33824 14.7344 1.11262 17.26C0.987616 18.6813 0.968866 20.1525 1.06699 21.1C1.27262 23.0688 1.65824 24.2587 1.67449 24.3081C1.73367 24.4878 1.84259 24.647 1.98862 24.7673C2.13465 24.8875 2.3118 24.9639 2.49949 24.9875V25C2.49949 25.2652 2.60485 25.5196 2.79238 25.7071C2.97992 25.8946 3.23427 26 3.49949 26H6.99949C7.26471 26 7.51906 25.8946 7.7066 25.7071C7.89413 25.5196 7.99949 25.2652 7.99949 25C8.53762 25 8.91199 24.9038 9.30887 24.8013C9.88186 24.6469 10.4675 24.5442 11.0589 24.4944C12.9657 24.3125 14.862 24.25 16.0001 24.25C17.1151 24.25 19.0951 24.3125 21.0051 24.4944C21.5988 24.5443 22.1868 24.6474 22.762 24.8025C23.142 24.9 23.5026 24.99 24.002 24.9994C24.002 25.2646 24.1073 25.5189 24.2949 25.7065C24.4824 25.894 24.7368 25.9994 25.002 25.9994H28.502C28.7672 25.9994 29.0216 25.894 29.2091 25.7065C29.3966 25.5189 29.502 25.2646 29.502 24.9994V24.9919C29.6901 24.9687 29.8678 24.8925 30.0143 24.7723C30.1608 24.652 30.2701 24.4925 30.3295 24.3125C30.3457 24.2631 30.7314 23.0731 30.937 21.1044C31.0351 20.1563 31.0176 18.6875 30.8914 17.2638Z"/>
            </svg>
          </div>

          {/* Handel */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', padding: '24px' }}>
            <h4 style={{ color: '#ffffff', fontWeight: 700, textAlign: 'center', margin: 0, fontSize: '18px', fontFamily: 'var(--font-syne)' }}>Handel</h4>
            <svg width="80" height="80" fill="#444345" viewBox="0 0 12 14">
              <path d="M11.805 8.25q0 0.039-0.008 0.055-0.5 2.094-2.094 3.395t-3.734 1.301q-1.141 0-2.207-0.43t-1.902-1.227l-1.008 1.008q-0.148 0.148-0.352 0.148t-0.352-0.148-0.148-0.352v-3.5q0-0.203 0.148-0.352t0.352-0.148h3.5q0.203 0 0.352 0.148t0.148 0.352-0.148 0.352l-1.070 1.070q0.555 0.516 1.258 0.797t1.461 0.281q1.047 0 1.953-0.508t1.453-1.398q0.086-0.133 0.414-0.914 0.062-0.18 0.234-0.18h1.5q0.102 0 0.176 0.074t0.074 0.176zM12 2v3.5q0 0.203-0.148 0.352t-0.352 0.148h-3.5q-0.203 0-0.352-0.148t-0.148-0.352 0.148-0.352l1.078-1.078q-1.156-1.070-2.727-1.070-1.047 0-1.953 0.508t-1.453 1.398q-0.086 0.133-0.414 0.914-0.062 0.18-0.234 0.18h-1.555q-0.102 0-0.176-0.074t-0.074-0.176v-0.055q0.508-2.094 2.109-3.395t3.75-1.301q1.141 0 2.219 0.434t1.914 1.223l1.016-1.008q0.148-0.148 0.352-0.148t0.352 0.148 0.148 0.352z"/>
            </svg>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }} className="cta-grid">
          <div style={{ textAlign: 'center' }}>
            <h2 className="text-brand" style={{ fontSize: '42px', fontWeight: 700, margin: '0 0 1.5rem' }}>
              Nimm Kontakt auf!
            </h2>
            <Link href="/contact" className="btn-filled">Kontakt</Link>
          </div>
          <div style={{ position: 'relative', height: '260px', borderRadius: '12px', overflow: 'hidden' }}>
            <Image
              src="/images/keyboard.jpg"
              alt="Keyboard"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid, .services-grid, .cta-grid { grid-template-columns: 1fr !important; }
          .sectors-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .sectors-grid { grid-template-columns: 1fr !important; }
        }
        .ki-card-link:hover .card {
          background: rgba(123, 150, 181, 0.1) !important;
          border-color: rgba(102, 115, 143, 0.5) !important;
        }
      `}</style>
    </>
  )
}
