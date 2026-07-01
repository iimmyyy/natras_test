'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from './LangContext'
import Link from 'next/link'
import { products, productImages, catColors, catLabels, brandLabels } from '@/app/data'
import AnimateIn from './AnimateIn'

export default function Products() {
  const { t } = useLang()
  const [activeCat, setActiveCat] = useState('all')

  const visible = activeCat === 'all' ? products : products.filter(p => p.category === activeCat)

  return (
    <section id="products" style={{ backgroundColor: '#0C2155' }} className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-14 lg:py-20">
        <AnimateIn>
          <div style={{
            fontFamily: 'var(--font-mono), monospace',
            fontSize: '11px', fontWeight: '600',
            color: '#78c1ff', letterSpacing: '0.12em',
            textTransform: 'uppercase', marginBottom: '12px',
          }}>
            {t.productsLabel}
          </div>
          <h2 style={{
            fontFamily: 'var(--font-heading), sans-serif',
            fontWeight: '700',
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
            color: '#ffffff', marginBottom: '32px',
          }}>
            {t.productsH2}
          </h2>
        </AnimateIn>

        {/* Tabs */}
        <AnimateIn delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-10">
            {t.tabs.map((tab, i) => {
              const key = t.tabKeys[i]
              const active = activeCat === key
              return (
                <button
                  key={key}
                  onClick={() => setActiveCat(key)}
                  className="tab-btn"
                  style={{
                    fontFamily: 'var(--font-sans), sans-serif',
                    fontSize: '13px', fontWeight: active ? '700' : '500',
                    padding: '8px 18px', borderRadius: '6px',
                    border: active ? 'none' : '1px solid rgba(255,255,255,0.2)',
                    backgroundColor: active ? '#ffffff' : 'rgba(255,255,255,0.08)',
                    color: active ? '#003f9a' : '#9FB6F0',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    boxShadow: active ? '0 4px 20px rgba(255,255,255,0.25)' : 'none',
                  }}
                >
                  {tab}
                </button>
              )
            })}
          </div>
        </AnimateIn>

        {/* Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <Link key={p.id} href={`/product/${p.id}`} style={{ textDecoration: 'none', display: 'block' }}>
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="card-lift"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #E8EBF2',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  borderTop: `4px solid ${catColors[p.category] ?? '#1B3FA0'}`,
                }}
              >
                {/* Image */}
                <div style={{ height: '180px', position: 'relative', overflow: 'hidden' }}>
                  <Image
                    src={productImages[p.id]}
                    alt={p.name}
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                    onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)')}
                    onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1)')}
                  />
                  {/* Category pill */}
                  <div style={{
                    position: 'absolute', top: '12px', left: '12px',
                    backgroundColor: catColors[p.category] ?? '#003f9a',
                    color: '#ffffff',
                    fontFamily: 'var(--font-mono), monospace',
                    fontSize: '9px', fontWeight: '600',
                    padding: '4px 8px', borderRadius: '4px',
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                  }}>
                    {catLabels[p.category]}
                  </div>
                  {/* Brand badge */}
                  <div style={{
                    position: 'absolute', top: '12px', right: '12px',
                    backgroundColor: p.brand === 'ln' ? '#f58531' : '#ffffff',
                    color: p.brand === 'ln' ? '#ffffff' : '#003f9a',
                    fontFamily: 'var(--font-mono), monospace',
                    fontSize: '9px', fontWeight: '700',
                    padding: '4px 8px', borderRadius: '4px',
                    letterSpacing: '0.06em',
                    boxShadow: '0 2px 8px rgba(7,17,31,0.18)',
                  }}>
                    {brandLabels[p.brand]}
                  </div>
                </div>
                {/* Content */}
                <div style={{ padding: '18px 20px 20px' }}>
                  <div style={{
                    fontFamily: 'var(--font-mono), monospace',
                    fontSize: '10px', color: '#8A98B5',
                    letterSpacing: '0.1em', marginBottom: '6px',
                    textTransform: 'uppercase',
                  }}>
                    {catLabels[p.category]}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-heading), sans-serif',
                    fontWeight: '600', fontSize: '15px', color: '#0E1424',
                    marginBottom: '14px', lineHeight: '1.3',
                  }}>
                    {p.name}
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-sans), sans-serif',
                    fontSize: '13px', fontWeight: '600',
                    color: '#003f9a',
                    display: 'flex', alignItems: 'center', gap: '4px',
                  }}>
                    ดูรายละเอียด <span style={{ fontSize: '15px' }}>→</span>
                  </span>
                </div>
              </motion.div>
              </Link>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
