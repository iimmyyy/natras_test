'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLang } from './LangContext'

export default function Hero() {
  const { t } = useLang()

  return (
    <section
      className="grid-overlay w-full relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #071630 0%, #0C2155 35%, #163A8C 70%, #1B3FA0 100%)' }}
    >
      {/* Subtle grid lines only — remove orange blob that washes out bg */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: 'radial-gradient(ellipse at 70% 50%, rgba(255,122,0,0.07) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />
      {/* Brand watermark */}
      <div className="brand-watermark" style={{
        top: '-60px', right: '2%',
        fontSize: 'clamp(240px, 32vw, 520px)',
        color: 'rgba(255,255,255,0.03)',
      }}>N</div>

      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="eyebrow-pill"
              style={{ marginBottom: '20px' }}
            >
              <span className="animate-pulse-dot" style={{
                display: 'inline-block', width: '6px', height: '6px',
                borderRadius: '50%', background: '#ffffff',
              }} />
              {t.heroEyebrow}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: 'var(--font-heading), sans-serif',
                fontWeight: '700',
                fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                lineHeight: '1.12',
                color: '#ffffff',
                marginBottom: '22px',
              }}
            >
              {t.heroH1}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: '16px',
                lineHeight: '1.75',
                color: '#C9D5F2',
                marginBottom: '36px',
                maxWidth: '520px',
              }}
            >
              {t.heroSub}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.44 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a
                href="#products"
                className="btn-primary"
                style={{
                  backgroundColor: '#ffffff',
                  color: '#0A1B45',
                  fontFamily: 'var(--font-sans), sans-serif',
                  fontWeight: '700',
                  fontSize: '15px',
                  padding: '13px 28px',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                {t.heroCta1}
              </a>
              <a
                href="#contact"
                style={{
                  border: '1.5px solid rgba(185,199,236,0.5)',
                  color: '#C9D5F2',
                  fontFamily: 'var(--font-sans), sans-serif',
                  fontWeight: '500',
                  fontSize: '15px',
                  padding: '13px 28px',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#ffffff'
                  e.currentTarget.style.color = '#ffffff'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(185,199,236,0.5)'
                  e.currentTarget.style.color = '#C9D5F2'
                }}
              >
                {t.heroCta2}
              </a>
            </motion.div>

            {/* Focus areas */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.58 }}
              style={{
                borderTop: '1px solid rgba(255,255,255,0.12)',
                paddingTop: '28px',
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                gap: '18px 28px',
                maxWidth: '520px',
              }}
            >
              {t.heroMetrics.map((stat, i) => (
                <div key={i}>
                  <div style={{
                    fontFamily: 'var(--font-heading), sans-serif',
                    fontWeight: '700',
                    fontSize: '26px',
                    color: '#ffffff',
                    lineHeight: '1',
                  }}>
                    {stat.k}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-sans), sans-serif',
                    fontSize: '13px',
                    color: '#C9D5F2',
                    marginTop: '6px',
                    lineHeight: '1.4',
                  }}>
                    {stat.v}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main image box */}
            <div
              className="w-full rounded-xl overflow-hidden"
              style={{
                height: '440px',
                border: '1px solid rgba(255,255,255,0.1)',
                position: 'relative',
              }}
            >
              <Image
                src="/products/power.jpg"
                alt="Lucas-Nülle power engineering training laboratory"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />

              {/* Floating caption */}
              <div
                className="animate-floaty"
                style={{
                  position: 'absolute', bottom: '24px', right: '24px',
                  backgroundColor: '#ffffff',
                  borderRadius: '10px',
                  padding: '12px 18px',
                  boxShadow: '0 12px 40px rgba(27,63,160,0.22)',
                  maxWidth: '230px',
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-mono), monospace',
                  fontSize: '10px', color: '#1B3FA0',
                  fontWeight: '600', letterSpacing: '0.06em',
                  textTransform: 'uppercase', marginBottom: '4px',
                }}>
                  Lucas-Nülle Thailand
                </div>
                <div style={{
                  fontFamily: 'var(--font-sans), sans-serif',
                  fontSize: '12px', color: '#52607C',
                  fontWeight: '500', lineHeight: '1.45',
                }}>
                  ชุดฝึกด้านระบบไฟฟ้ากำลัง EV/ADAS ระบบอัตโนมัติ และ Industry 4.0
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
