'use client'

import Image from 'next/image'
import { useLang } from './LangContext'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer style={{ backgroundColor: '#0A1B45' }} className="w-full">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div>
            <Image
              src="/logo-white.svg"
              alt="NUTRAS DIDACTIC"
              width={180}
              height={44}
              style={{ height: '34px', width: 'auto', marginBottom: '16px', opacity: 0.9 }}
            />
            <p style={{
              fontFamily: 'var(--font-sans), sans-serif',
              fontSize: '13px', lineHeight: '1.7',
              color: '#6B80B0', maxWidth: '240px',
            }}>
              {t.footerTagline}
            </p>
            {/* Socials */}
            <div style={{ display: 'flex', gap: '8px', marginTop: '20px' }}>
              {[
                { label: 'in', title: 'LinkedIn' },
                { label: 'YT', title: 'YouTube' },
                { label: 'X', title: 'Twitter' },
              ].map(s => (
                <a
                  key={s.label}
                  href="#"
                  title={s.title}
                  style={{
                    width: '32px', height: '32px',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '6px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-mono), monospace',
                    fontSize: '11px', fontWeight: '700',
                    color: '#7F9AE8', textDecoration: 'none',
                    transition: 'border-color 0.2s, color 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#60A5FA'
                    e.currentTarget.style.color = '#60A5FA'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                    e.currentTarget.style.color = '#7F9AE8'
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: '10px', fontWeight: '600',
              color: '#4B5E8A', letterSpacing: '0.12em',
              textTransform: 'uppercase', marginBottom: '16px',
            }}>
              Products
            </div>
            {t.footerProducts.map((item, i) => (
              <a key={i} href="#products" style={{
                display: 'block',
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: '13px', color: '#8DA0C8',
                textDecoration: 'none', marginBottom: '10px',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#8DA0C8')}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Company */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: '10px', fontWeight: '600',
              color: '#4B5E8A', letterSpacing: '0.12em',
              textTransform: 'uppercase', marginBottom: '16px',
            }}>
              Company
            </div>
            {t.footerCompany.map((item, i) => (
              <a key={i} href="#about" style={{
                display: 'block',
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: '13px', color: '#8DA0C8',
                textDecoration: 'none', marginBottom: '10px',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#8DA0C8')}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: '10px', fontWeight: '600',
              color: '#4B5E8A', letterSpacing: '0.12em',
              textTransform: 'uppercase', marginBottom: '16px',
            }}>
              Contact
            </div>
            {t.footerContact.split('\n').map((line, i) => (
              <div key={i} style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: '13px', color: '#8DA0C8',
                marginBottom: '8px', lineHeight: '1.5',
              }}>
                {line}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.07)',
          paddingTop: '24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '12px',
        }}>
          <div style={{
            fontFamily: 'var(--font-sans), sans-serif',
            fontSize: '12px', color: '#4B5E8A',
          }}>
            {t.copyright}
          </div>
          <div style={{
            fontFamily: 'var(--font-mono), monospace',
            fontSize: '11px', color: '#4B5E8A',
            letterSpacing: '0.06em',
          }}>
            {t.certs}
          </div>
        </div>
      </div>
    </footer>
  )
}
