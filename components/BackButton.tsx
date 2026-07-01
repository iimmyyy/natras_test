'use client'

import { useRouter } from 'next/navigation'

export default function BackButton() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        background: 'rgba(255,255,255,0.1)',
        border: '1px solid rgba(255,255,255,0.2)',
        color: '#ffffff',
        fontFamily: 'var(--font-sans), sans-serif',
        fontSize: '13px',
        fontWeight: '600',
        padding: '8px 16px',
        borderRadius: '6px',
        cursor: 'pointer',
        transition: 'background 0.2s, border-color 0.2s',
        letterSpacing: '0.01em',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.18)'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
      }}
    >
      ← กลับ
    </button>
  )
}
