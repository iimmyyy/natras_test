'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import AnimateIn from './AnimateIn'

export default function CarouselSection({
  id,
  label,
  title,
  description,
  href,
  hrefText,
  dark = false,
  background,
  fadeColor,
  children,
}: {
  id: string
  label: string
  title: string
  description?: string
  href: string
  hrefText: string
  dark?: boolean
  background: string
  fadeColor?: string
  children: React.ReactNode
}) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState<number | null>(null)

  const scroll = (dir: number) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' })
  }

  const labelColor = dark ? '#78c1ff' : '#1B3FA0'
  const titleColor = dark ? '#ffffff' : '#0E1424'
  const descColor = dark ? 'rgba(255,255,255,0.62)' : '#5A6b8c'
  const arrowBorder = dark ? 'rgba(255,255,255,0.22)' : '#DCE3F1'
  const arrowColor = dark ? '#ffffff' : '#1B3FA0'
  const arrowBg = dark ? 'rgba(255,255,255,0.07)' : '#ffffff'
  const arrowHoverBg = dark ? 'rgba(255,255,255,0.16)' : '#1B3FA0'
  const arrowHoverColor = '#ffffff'
  const edge = fadeColor ?? background

  return (
    <section id={id} style={{ background, position: 'relative', overflow: 'hidden' }} className="w-full">
      {/* Decorative brand glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: dark
            ? 'radial-gradient(680px circle at 90% 8%, rgba(74,144,226,0.14), transparent 58%), radial-gradient(560px circle at 2% 95%, rgba(27,63,160,0.20), transparent 62%)'
            : 'radial-gradient(680px circle at 90% 8%, rgba(27,63,160,0.10), transparent 58%), radial-gradient(560px circle at 2% 92%, rgba(74,144,226,0.09), transparent 60%)',
        }}
      />
      {/* Subtle grid texture on dark */}
      {dark && (
        <div
          aria-hidden
          className="grid-overlay"
          style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.5 }}
        />
      )}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24" style={{ position: 'relative' }}>
        {/* Header */}
        <AnimateIn>
          <div className="flex items-end justify-between gap-6 flex-wrap mb-9">
            <div style={{ maxWidth: '620px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <span style={{ width: '26px', height: '2px', background: labelColor, display: 'inline-block' }} />
                <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '11px', fontWeight: 600, color: labelColor, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  {label}
                </span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-heading), sans-serif', fontWeight: 700, fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', color: titleColor, lineHeight: 1.12 }}>
                {title}
              </h2>
              {description && (
                <p style={{ fontFamily: 'var(--font-sans), sans-serif', fontSize: '15px', color: descColor, marginTop: '12px', lineHeight: 1.65 }}>
                  {description}
                </p>
              )}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4">
              <Link
                href={href}
                style={{ fontFamily: 'var(--font-sans), sans-serif', fontSize: '14px', fontWeight: 600, color: arrowColor, textDecoration: 'none', whiteSpace: 'nowrap' }}
              >
                {hrefText}
              </Link>
              <div className="hidden sm:flex items-center gap-2">
                {[-1, 1].map((dir, i) => (
                  <button
                    key={dir}
                    onClick={() => scroll(dir)}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    aria-label={dir < 0 ? 'Previous' : 'Next'}
                    className="carousel-arrow"
                    style={{
                      border: `1px solid ${hovered === i ? arrowHoverBg : arrowBorder}`,
                      background: hovered === i ? arrowHoverBg : arrowBg,
                      color: hovered === i ? arrowHoverColor : arrowColor,
                    }}
                  >
                    {dir < 0 ? '‹' : '›'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* Track with edge fades */}
        <div style={{ position: 'relative' }}>
          <div
            ref={trackRef}
            className="carousel-track"
            style={{
              display: 'flex',
              gap: '22px',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              paddingBottom: '8px',
              scrollPadding: '0 24px',
            }}
          >
            {children}
          </div>
          {/* right fade hint */}
          <div
            className="hidden md:block"
            style={{
              position: 'absolute', top: 0, right: '-24px', bottom: '8px', width: '80px',
              background: `linear-gradient(90deg, transparent, ${edge})`,
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>
    </section>
  )
}
