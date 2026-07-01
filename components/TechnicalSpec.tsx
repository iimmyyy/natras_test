'use client'

import Image from 'next/image'
import AnimateIn from './AnimateIn'
import { useLang } from './LangContext'
import { specRows } from '@/app/data'

export default function TechnicalSpec() {
  const { t } = useLang()

  return (
    <section
      id="spec"
      className="grid-overlay w-full"
      style={{ background: 'linear-gradient(135deg, #0A1B45 0%, #0C2155 60%, #163A8C 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — image */}
          <AnimateIn direction="left">
            <div
              style={{
                height: '420px',
                borderRadius: '12px',
                border: '1px solid rgba(185,199,236,0.15)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Image
                src="/products/nt-hydrogen.jpg"
                alt="NuTras Hydrogen Power Generation Trainer"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(10,27,69,0.85) 0%, transparent 60%)',
              }} />
              <div style={{
                position: 'absolute', bottom: '24px', left: '24px',
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono), monospace',
                  fontSize: '10px', color: '#ffffff',
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  marginBottom: '4px',
                }}>
                  Featured unit
                </div>
                <div style={{
                  fontFamily: 'var(--font-heading), sans-serif',
                  fontWeight: '700', fontSize: '18px', color: '#ffffff',
                }}>
                  Hydrogen Power Generation Trainer
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* Right — spec table */}
          <AnimateIn direction="right" delay={0.1}>
            <div style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: '11px', fontWeight: '600',
              color: '#ffffff', letterSpacing: '0.14em',
              textTransform: 'uppercase', marginBottom: '14px',
            }}>
              {t.specLabel}
            </div>
            <h2 style={{
              fontFamily: 'var(--font-heading), sans-serif',
              fontWeight: '700',
              fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
              color: '#ffffff', marginBottom: '6px',
            }}>
              {t.specH2}
            </h2>
            <div style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: '12px', color: '#7F9AE8',
              marginBottom: '28px', letterSpacing: '0.06em',
            }}>
              {t.specSub}
            </div>

            <div style={{
              border: '1px solid rgba(185,199,236,0.15)',
              borderRadius: '10px',
              overflow: 'hidden',
            }}>
              {specRows.map((row, i) => (
                <div
                  key={i}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1.6fr',
                    borderBottom: i < specRows.length - 1 ? '1px solid rgba(185,199,236,0.1)' : 'none',
                    transition: 'background 0.15s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.04)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                >
                  <div style={{
                    fontFamily: 'var(--font-mono), monospace',
                    fontSize: '11px', color: '#7F9AE8',
                    padding: '14px 16px',
                    textTransform: 'uppercase', letterSpacing: '0.08em',
                    borderRight: '1px solid rgba(185,199,236,0.1)',
                  }}>
                    {row.key}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-sans), sans-serif',
                    fontSize: '14px', color: '#C9D5F2',
                    padding: '14px 16px', fontWeight: '500',
                  }}>
                    {row.value}
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
