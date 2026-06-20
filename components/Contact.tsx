'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLang } from './LangContext'
import AnimateIn from './AnimateIn'

export default function Contact() {
  const { t } = useLang()
  const [focused, setFocused] = useState<number | null>(null)

  return (
    <section
      id="contact"
      className="grid-overlay w-full"
      style={{ background: 'linear-gradient(135deg, #0C2155 0%, #1B3FA0 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — CTA text */}
          <AnimateIn direction="left">
            <div style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: '11px', fontWeight: '600',
              color: '#ffffff', letterSpacing: '0.14em',
              textTransform: 'uppercase', marginBottom: '16px',
            }}>
              Get in touch
            </div>
            <h2 style={{
              fontFamily: 'var(--font-heading), sans-serif',
              fontWeight: '700',
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              color: '#ffffff', marginBottom: '18px',
              lineHeight: '1.2',
            }}>
              {t.ctaH2}
            </h2>
            <p style={{
              fontFamily: 'var(--font-sans), sans-serif',
              fontSize: '16px', lineHeight: '1.75',
              color: '#C9D5F2', marginBottom: '36px',
            }}>
              {t.ctaBody}
            </p>

            {/* Contact details */}
            {[
              { icon: '📍', label: 'Bangkok, Thailand' },
              { icon: '📞', label: '+66 2 000 0000' },
              { icon: '✉️', label: 'sales@nutras-didactic.com' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                marginBottom: '12px',
              }}>
                <span style={{ fontSize: '16px' }}>{item.icon}</span>
                <span style={{
                  fontFamily: 'var(--font-sans), sans-serif',
                  fontSize: '15px', color: '#9FB6F0',
                }}>
                  {item.label}
                </span>
              </div>
            ))}
          </AnimateIn>

          {/* Right — form card */}
          <AnimateIn direction="right" delay={0.15}>
            <motion.div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                padding: '36px',
                boxShadow: '0 24px 64px rgba(12,33,85,0.4)',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-heading), sans-serif',
                fontWeight: '700', fontSize: '20px',
                color: '#0E1424', marginBottom: '24px',
              }}>
                {t.formTitle}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {t.formFields.map((label, i) => (
                  <div key={i}>
                    <label style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono), monospace',
                      fontSize: '10px', fontWeight: '600',
                      color: '#6B7896', textTransform: 'uppercase',
                      letterSpacing: '0.1em', marginBottom: '6px',
                    }}>
                      {label}
                    </label>
                    {i === 2 ? (
                      <textarea
                        rows={3}
                        placeholder={label}
                        onFocus={() => setFocused(i)}
                        onBlur={() => setFocused(null)}
                        style={{
                          width: '100%', resize: 'vertical',
                          border: `1.5px solid ${focused === i ? '#1B3FA0' : '#E0E5F0'}`,
                          borderRadius: '7px', padding: '10px 14px',
                          fontFamily: 'var(--font-sans), sans-serif',
                          fontSize: '14px', color: '#0E1424',
                          outline: 'none',
                          transition: 'border-color 0.2s',
                          boxShadow: focused === i ? '0 0 0 3px rgba(27,63,160,0.08)' : 'none',
                        }}
                      />
                    ) : (
                      <input
                        type={i === 1 ? 'email' : 'text'}
                        placeholder={label}
                        onFocus={() => setFocused(i)}
                        onBlur={() => setFocused(null)}
                        style={{
                          width: '100%',
                          border: `1.5px solid ${focused === i ? '#1B3FA0' : '#E0E5F0'}`,
                          borderRadius: '7px', padding: '10px 14px',
                          fontFamily: 'var(--font-sans), sans-serif',
                          fontSize: '14px', color: '#0E1424',
                          outline: 'none',
                          transition: 'border-color 0.2s',
                          boxShadow: focused === i ? '0 0 0 3px rgba(27,63,160,0.08)' : 'none',
                        }}
                      />
                    )}
                  </div>
                ))}

                <motion.button
                  className="btn-primary"
                  whileTap={{ scale: 0.98 }}
                  style={{
                    backgroundColor: '#1B3FA0', color: '#ffffff',
                    fontFamily: 'var(--font-sans), sans-serif',
                    fontWeight: '700', fontSize: '15px',
                    padding: '13px 28px', borderRadius: '7px',
                    border: 'none', cursor: 'pointer',
                    marginTop: '4px', width: '100%',
                    letterSpacing: '0.02em',
                  }}
                >
                  {t.formCta}
                </motion.button>
              </div>

              <div style={{
                fontFamily: 'var(--font-mono), monospace',
                fontSize: '10px', color: '#8A98B5',
                textAlign: 'center', marginTop: '14px',
                letterSpacing: '0.04em',
              }}>
                {t.formNote}
              </div>
            </motion.div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
