'use client'

import { motion } from 'framer-motion'
import { useLang } from './LangContext'
import { academicPartners, techPartners } from '@/app/data'
import AnimateIn from './AnimateIn'

export default function Partners() {
  const { t } = useLang()

  return (
    <section id="partners" style={{ backgroundColor: '#0A1B45' }} className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-14 lg:py-20">
        <AnimateIn>
          <div style={{
            fontFamily: 'var(--font-mono), monospace',
            fontSize: '11px', fontWeight: '600',
            color: '#ffffff', letterSpacing: '0.12em',
            textTransform: 'uppercase', marginBottom: '12px',
          }}>
            {t.partnersLabel}
          </div>
        </AnimateIn>

        {/* Academic */}
        <AnimateIn delay={0.05}>
          <h3 style={{
            fontFamily: 'var(--font-heading), sans-serif',
            fontWeight: '600', fontSize: '18px',
            color: '#ffffff', marginBottom: '18px',
          }}>
            {t.academicTitle}
          </h3>
        </AnimateIn>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-14">
          {academicPartners.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              whileHover={{ y: -3, boxShadow: '0 8px 28px rgba(0,0,0,0.3)' }}
              style={{
                backgroundColor: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px',
                padding: '20px 12px',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                gap: '6px', cursor: 'default',
                transition: 'border-color 0.2s',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-heading), sans-serif',
                fontWeight: '700', fontSize: '20px',
                color: '#ffffff',
              }}>
                {p.abbr}
              </div>
              <div style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: '10px', color: '#7F9AE8',
                textAlign: 'center', lineHeight: '1.4',
              }}>
                {p.name}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology */}
        <AnimateIn delay={0.1}>
          <h3 style={{
            fontFamily: 'var(--font-heading), sans-serif',
            fontWeight: '600', fontSize: '18px',
            color: '#ffffff', marginBottom: '18px',
          }}>
            {t.techTitle}
          </h3>
        </AnimateIn>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {techPartners.map((name, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              whileHover={{ y: -3, boxShadow: '0 8px 28px rgba(0,0,0,0.3)' }}
              style={{
                backgroundColor: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px',
                padding: '18px 12px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'default',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-mono), monospace',
                fontWeight: '600', fontSize: '12px',
                color: '#ffffff', letterSpacing: '0.06em',
              }}>
                {name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
