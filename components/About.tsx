'use client'

import AnimateIn from './AnimateIn'
import { useLang } from './LangContext'

export default function About() {
  const { t } = useLang()

  const cardStyles = [
    { backgroundColor: '#1B3FA0', border: '1px solid transparent', numColor: '#ffffff', labelColor: 'rgba(255,255,255,0.55)', textColor: '#ffffff' },
    { backgroundColor: '#0C2155', border: '1px solid transparent', numColor: '#ffffff', labelColor: 'rgba(255,255,255,0.55)', textColor: '#ffffff' },
    { backgroundColor: '#163A8C', border: '1px solid transparent', numColor: '#ffffff', labelColor: 'rgba(255,255,255,0.55)', textColor: '#ffffff' },
    { backgroundColor: '#EAF0FF', border: '1px solid #C9D5F2', numColor: '#1B3FA0', labelColor: '#6B7896', textColor: '#1B3FA0' },
  ]

  return (
    <section id="about" style={{ backgroundColor: '#ffffff' }} className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-14 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <AnimateIn delay={0}>
              <div style={{
                fontFamily: 'var(--font-mono), monospace',
                fontSize: '11px', fontWeight: '600',
                color: '#1B3FA0', letterSpacing: '0.12em',
                textTransform: 'uppercase', marginBottom: '14px',
              }}>
                {t.aboutLabel}
              </div>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h2
                style={{
                  fontFamily: 'var(--font-heading), sans-serif',
                  fontWeight: '700',
                  fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                  lineHeight: '1.2',
                  marginBottom: '22px',
                  color: '#0E1424',
                  borderLeft: '5px solid #1B3FA0',
                  paddingLeft: '24px',
                }}
              >
                {t.aboutH2}
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: '16px', lineHeight: '1.8',
                color: '#52607C', marginBottom: '16px',
              }}>
                {t.aboutP1}
              </p>
              <p style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: '16px', lineHeight: '1.8',
                color: '#52607C',
              }}>
                {t.aboutP2}
              </p>
            </AnimateIn>
          </div>

          {/* Right — capability cards 2×2 */}
          <div className="grid grid-cols-2 gap-4">
            {t.aboutCards.map((c, i) => {
              const cs = cardStyles[i]
              return (
                <AnimateIn key={i} delay={0.1 + i * 0.09} direction="up">
                  <div
                    className="card-lift"
                    style={{
                      backgroundColor: cs.backgroundColor,
                      border: cs.border,
                      borderRadius: '12px',
                      padding: '24px 20px',
                      height: '100%',
                    }}
                  >
                    <div style={{
                      fontFamily: 'var(--font-heading), sans-serif',
                      fontWeight: '700', fontSize: '17px',
                      color: cs.numColor,
                      lineHeight: '1.25', marginBottom: '10px',
                    }}>
                      {c.title}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-sans), sans-serif',
                      fontSize: '13px', lineHeight: '1.6',
                      color: cs.textColor === '#ffffff' ? 'rgba(255,255,255,0.72)' : '#52607C',
                    }}>
                      {c.body}
                    </div>
                  </div>
                </AnimateIn>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
