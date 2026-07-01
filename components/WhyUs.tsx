'use client'

import { motion } from 'framer-motion'
import { useLang } from './LangContext'
import AnimateIn from './AnimateIn'

export default function WhyUs() {
  const { t } = useLang()

  return (
    <section style={{ backgroundColor: '#0C2155' }} className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-14 lg:py-20">
        <AnimateIn>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: '11px', fontWeight: '600',
              color: '#7F9AE8', letterSpacing: '0.14em',
              textTransform: 'uppercase', marginBottom: '12px',
            }}>
              {t.workflowLabel}
            </div>
            <h2 style={{
              fontFamily: 'var(--font-heading), sans-serif',
              fontWeight: '700',
              fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)',
              color: '#ffffff',
            }}>
              {t.workflowH2}
            </h2>
          </div>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.workflowSteps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, boxShadow: '0 16px 48px rgba(0,0,0,0.25)' }}
              style={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '12px',
                padding: '28px 24px',
                transition: 'border-color 0.2s',
                cursor: 'default',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-mono), monospace',
                fontSize: '28px', fontWeight: '700',
                color: '#ffffff',
                marginBottom: '12px',
                lineHeight: '1',
              }}>
                {item.num}
              </div>
              <div style={{
                fontFamily: 'var(--font-heading), sans-serif',
                fontWeight: '600', fontSize: '16px',
                color: '#ffffff', marginBottom: '10px',
              }}>
                {item.title}
              </div>
              <div style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: '14px', lineHeight: '1.65',
                color: '#C9D5F2',
              }}>
                {item.body}
              </div>
              <div style={{
                marginTop: '20px',
                width: '32px', height: '3px',
                background: 'linear-gradient(90deg, #ffffff, #ffffff)',
                borderRadius: '2px',
              }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
