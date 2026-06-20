'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLang } from './LangContext'
import { blogPosts } from '@/app/data'
import AnimateIn from './AnimateIn'

const blogImages = [
  'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=75',
  'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=75',
  'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=75',
  'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=75',
]

export default function Blog() {
  const { t } = useLang()

  return (
    <section id="blog" style={{ backgroundColor: '#ffffff', borderTop: '8px solid #1B3FA0' }} className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-14 lg:py-20">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <AnimateIn>
            <div style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: '11px', fontWeight: '600',
              color: '#1B3FA0', letterSpacing: '0.12em',
              textTransform: 'uppercase', marginBottom: '10px',
            }}>
              {t.blogLabel}
            </div>
            <h2 style={{
              fontFamily: 'var(--font-heading), sans-serif',
              fontWeight: '700',
              fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
              color: '#0E1424',
            }}>
              {t.blogH2}
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <a href="#" style={{
              fontFamily: 'var(--font-sans), sans-serif',
              fontSize: '14px', fontWeight: '600',
              color: '#1B3FA0', textDecoration: 'none',
            }}>
              All resources →
            </a>
          </AnimateIn>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {blogPosts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5 }}
              style={{
                backgroundColor: '#FBFCFE',
                border: '1px solid #E8EBF2',
                borderTop: '3px solid #1B3FA0',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'box-shadow 0.25s',
              }}
              className="card-lift"
            >
              {/* Thumbnail */}
              <div style={{ height: '148px', position: 'relative', overflow: 'hidden' }}>
                <Image
                  src={blogImages[i]}
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1.06)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1)')}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(14,20,36,0.55) 0%, transparent 60%)',
                }} />
                <div style={{
                  position: 'absolute', bottom: '10px', left: '10px',
                  backgroundColor: '#1B3FA0',
                  borderRadius: '4px',
                  padding: '3px 8px',
                  fontFamily: 'var(--font-mono), monospace',
                  fontSize: '9px', fontWeight: '600',
                  color: '#ffffff', letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}>
                  {post.category}
                </div>
              </div>
              {/* Body */}
              <div style={{ padding: '18px' }}>
                <div style={{
                  display: 'flex', gap: '8px', alignItems: 'center',
                  marginBottom: '10px',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-mono), monospace',
                    fontSize: '10px', color: '#8A98B5',
                  }}>
                    {post.tag}
                  </span>
                  <span style={{ color: '#E8EBF2' }}>·</span>
                  <span style={{
                    fontFamily: 'var(--font-mono), monospace',
                    fontSize: '10px', color: '#8A98B5',
                  }}>
                    {post.time}
                  </span>
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-heading), sans-serif',
                  fontWeight: '600', fontSize: '14px',
                  color: '#0E1424', lineHeight: '1.45',
                  marginBottom: '14px',
                }}>
                  {post.title}
                </h3>
                <span style={{
                  fontFamily: 'var(--font-sans), sans-serif',
                  fontSize: '13px', fontWeight: '600',
                  color: '#1B3FA0',
                }}>
                  Read →
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
