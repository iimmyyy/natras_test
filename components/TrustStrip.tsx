'use client'

import { motion } from 'framer-motion'
import { useLang } from './LangContext'

export default function TrustStrip() {
  const { t } = useLang()

  return (
    <section id="markets" style={{ backgroundColor: '#1B3FA0' }} className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-14 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '32px' }}
        >
          <div style={{
            fontFamily: 'var(--font-mono), monospace',
            fontSize: '11px', fontWeight: '600',
            color: 'rgba(255,255,255,0.7)', letterSpacing: '0.14em',
            textTransform: 'uppercase', marginBottom: '12px',
          }}>
            {t.marketsLabel}
          </div>
          <h2 style={{
            fontFamily: 'var(--font-heading), sans-serif',
            fontWeight: '700',
            fontSize: 'clamp(1.5rem, 2.6vw, 2.1rem)',
            color: '#ffffff',
            maxWidth: '640px',
          }}>
            {t.marketsH2}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {t.markets.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              style={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.16)',
                borderRadius: '12px',
                padding: '22px 20px',
                height: '100%',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-heading), sans-serif',
                fontWeight: '700', fontSize: '16px',
                color: '#ffffff', marginBottom: '10px',
              }}>
                {m.title}
              </div>
              <div style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: '13px', lineHeight: '1.6',
                color: '#C9D5F2',
              }}>
                {m.body}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
