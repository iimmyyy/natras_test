'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from './LangContext'
import Link from 'next/link'
import { products } from '@/app/data'
import AnimateIn from './AnimateIn'

const productImages: Record<string, string> = {
  ntx3100: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=75',
  ntx2200: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=75',
  ntx1400: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=75',
  nta5200: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=75',
  nta7000: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=75',
  nta3300: 'https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=600&q=75',
  ntm4100: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=75',
  ntm4600: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=75',
  ntm2800: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=75',
  ntr6100: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=75',
  ntr6400: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=75',
  ntr8000: 'https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=600&q=75',
}

const catColors: Record<string, string> = {
  ee: '#1B3FA0', auto: '#0C2155', mech: '#163A8C', ren: '#4A90E2',
}
const catLabels: Record<string, string> = {
  ee: 'Electrical', auto: 'Automation', mech: 'Mechanical', ren: 'Renewable',
}

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
            color: '#FF7A00', letterSpacing: '0.12em',
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
                    color: active ? '#1B3FA0' : '#9FB6F0',
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
                    backgroundColor: catColors[p.category] ?? '#1B3FA0',
                    color: '#ffffff',
                    fontFamily: 'var(--font-mono), monospace',
                    fontSize: '9px', fontWeight: '600',
                    padding: '4px 8px', borderRadius: '4px',
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                  }}>
                    {catLabels[p.category]}
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
                    {p.model}
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
                    color: '#1B3FA0',
                    display: 'flex', alignItems: 'center', gap: '4px',
                  }}>
                    View specs <span style={{ fontSize: '15px' }}>→</span>
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
