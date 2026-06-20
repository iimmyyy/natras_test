'use client'

import { motion } from 'framer-motion'
import { useLang } from './LangContext'

const logos = ['Faculty A', 'Polytechnic B', 'Institute C', 'University D', 'College E', 'School F']

export default function TrustStrip() {
  const { t } = useLang()

  return (
    <section style={{ backgroundColor: '#1B3FA0' }}>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: 'var(--font-mono), monospace',
            fontSize: '10px', fontWeight: '600',
            color: 'rgba(255,255,255,0.7)', letterSpacing: '0.12em',
            textTransform: 'uppercase', textAlign: 'center',
            marginBottom: '20px',
          }}
        >
          {t.trustLabel}
        </motion.div>
        <div className="flex flex-wrap justify-center gap-4">
          {logos.map((name, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              style={{
                backgroundColor: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.18)',
                borderRadius: '8px',
                padding: '12px 24px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background-color 0.2s, box-shadow 0.2s',
                cursor: 'default',
              }}
              whileHover={{ boxShadow: '0 4px 20px rgba(0,0,0,0.2)', y: -2 }}
            >
              <span style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: '13px', fontWeight: '600',
                color: '#ffffff', whiteSpace: 'nowrap',
              }}>
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
