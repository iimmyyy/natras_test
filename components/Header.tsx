'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useLang } from './LangContext'

export default function Header() {
  const { t, lang, setLang } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        backgroundColor: scrolled ? 'rgba(27,63,160,0.97)' : '#1B3FA0',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        boxShadow: scrolled ? '0 2px 24px rgba(12,33,85,0.35)' : 'none',
        borderBottom: '3px solid rgba(255,255,255,0.18)',
        transition: 'background-color 0.3s, box-shadow 0.3s, backdrop-filter 0.3s',
      }}
      className="sticky top-0 z-50 w-full"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 shrink-0 group">
          <Image
            src="/logo-white.svg"
            alt="NUTRAS DIDACTIC"
            width={200}
            height={48}
            style={{ height: '38px', width: 'auto' }}
            priority
          />
        </a>

        {/* Nav — desktop */}
        <nav className="hidden lg:flex items-center gap-7">
          {t.nav.map((item, i) => (
            <a
              key={i}
              href={t.navLinks[i]}
              className="nav-link"
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: '14px',
                fontWeight: '500',
                color: '#AAB7D8',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#AAB7D8')}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Lang toggle */}
          <div
            style={{
              display: 'flex',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '4px',
              overflow: 'hidden',
            }}
          >
            {(['en', 'th'] as const).map(l => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={{
                  fontFamily: 'var(--font-mono), monospace',
                  fontSize: '11px',
                  fontWeight: '600',
                  padding: '5px 10px',
                  background: lang === l ? '#ffffff' : 'transparent',
                  color: lang === l ? '#1B3FA0' : '#9FB6F0',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  letterSpacing: '0.05em',
                }}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="btn-primary hidden sm:inline-flex"
            style={{
              backgroundColor: '#ffffff',
              color: '#0A1B45',
              fontFamily: 'var(--font-sans), sans-serif',
              fontWeight: '700',
              fontSize: '13px',
              padding: '9px 20px',
              borderRadius: '4px',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              letterSpacing: '0.02em',
            }}
          >
            {t.cta}
          </a>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                style={{
                  display: 'block', width: '22px', height: '2px',
                  backgroundColor: '#fff', borderRadius: '2px',
                  transition: 'all 0.3s',
                  transform: menuOpen
                    ? i === 0 ? 'rotate(45deg) translateY(6px)' : i === 2 ? 'rotate(-45deg) translateY(-6px)' : 'scaleX(0)'
                    : 'none',
                }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav
          style={{ backgroundColor: '#0C2155', borderTop: '1px solid rgba(255,255,255,0.1)' }}
          className="lg:hidden px-6 py-4 flex flex-col gap-3"
        >
          {t.nav.map((item, i) => (
            <a
              key={i}
              href={t.navLinks[i]}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: '15px',
                fontWeight: '500',
                color: '#C9D5F2',
                textDecoration: 'none',
                padding: '6px 0',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              backgroundColor: '#ffffff', color: '#0A1B45',
              fontFamily: 'var(--font-sans), sans-serif',
              fontWeight: '700', fontSize: '14px',
              padding: '10px 20px', borderRadius: '4px',
              textDecoration: 'none', marginTop: '8px',
              display: 'inline-block', alignSelf: 'flex-start',
            }}
          >
            {t.cta}
          </a>
        </nav>
      )}
    </header>
  )
}
