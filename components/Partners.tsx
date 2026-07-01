'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLang } from './LangContext'
import { lucasNuelleCategories } from '@/app/data'
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
            color: '#78c1ff', letterSpacing: '0.12em',
            textTransform: 'uppercase', marginBottom: '12px',
          }}>
            {t.partnersLabel}
          </div>
        </AnimateIn>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left — Lucas-Nülle brand card */}
          <AnimateIn delay={0.05}>
            <div style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '16px', padding: '32px',
            }}>
              <div style={{
                background: '#ffffff', borderRadius: '12px',
                padding: '28px', display: 'flex', alignItems: 'center',
                justifyContent: 'center', marginBottom: '22px',
              }}>
                <Image
                  src="/lucas-nuelle-logo.png"
                  alt="Lucas-Nülle"
                  width={220} height={220}
                  style={{ width: 'auto', height: '120px', objectFit: 'contain' }}
                />
              </div>
              <h3 style={{
                fontFamily: 'var(--font-heading), sans-serif',
                fontWeight: '700', fontSize: '22px',
                color: '#ffffff', marginBottom: '10px',
              }}>
                ตัวแทนจำหน่าย Lucas-Nülle อย่างเป็นทางการ
              </h3>
              <p style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: '15px', color: '#9FB6F0', lineHeight: '1.7',
                marginBottom: '20px',
              }}>
                NuTras Didactic เป็นตัวแทนจำหน่ายชุดฝึก Lucas-Nülle สำหรับตลาด
                ประเทศไทย — ครอบคลุมด้านพลังงาน ยานยนต์ ระบบอัตโนมัติ และงาน
                บำรุงรักษาในอุตสาหกรรม สำหรับมหาวิทยาลัย วิทยาลัย และศูนย์ฝึกอบรม
              </p>
              <a
                href="https://www.lucas-nuelle.us/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  background: '#f58531', color: '#ffffff',
                  fontFamily: 'var(--font-sans), sans-serif',
                  fontWeight: '700', fontSize: '14px',
                  padding: '11px 22px', borderRadius: '6px',
                  textDecoration: 'none',
                }}
              >
เยี่ยมชม Lucas-Nülle ↗
              </a>
            </div>
          </AnimateIn>

          {/* Right — full category list */}
          <AnimateIn delay={0.1}>
            <h3 style={{
              fontFamily: 'var(--font-heading), sans-serif',
              fontWeight: '600', fontSize: '18px',
              color: '#ffffff', marginBottom: '16px',
            }}>
              กลุ่มผลิตภัณฑ์ทั้งหมด
            </h3>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {lucasNuelleCategories.map((c, i) => (
                <motion.a
                  key={i}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  whileHover={{ y: -2 }}
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '10px',
                    padding: '13px 15px',
                    display: 'flex', alignItems: 'center', gap: '10px',
                    textDecoration: 'none',
                  }}
                >
                  <span style={{
                    width: '6px', height: '6px', borderRadius: '50%',
                    background: '#f58531', flexShrink: 0,
                  }} />
                  <span style={{
                    fontFamily: 'var(--font-sans), sans-serif',
                    fontSize: '13px', color: '#C9D5F2', lineHeight: '1.4',
                  }}>
                    {c.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
