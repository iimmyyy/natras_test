import Image from 'next/image'
import Link from 'next/link'
import type { UIEvent } from '@/app/lib/content'

function formatDate(value?: string) {
  if (!value) return ''
  const d = new Date(value)
  return {
    day: d.toLocaleDateString('th-TH', { day: 'numeric' }),
    month: d.toLocaleDateString('th-TH', { month: 'short' }),
    year: d.toLocaleDateString('th-TH', { year: 'numeric' }),
  }
}

export default function EventCard({ event }: { event: UIEvent }) {
  const d = event.date ? formatDate(event.date) : null

  return (
    <Link href={`/events/${event.id}`} className="carousel-card" style={{ textDecoration: 'none' }}>
      <article
        className="card-lift"
        style={{
          borderRadius: '16px',
          overflow: 'hidden',
          position: 'relative',
          height: '320px',
          backgroundColor: '#0C2155',
          border: '1px solid rgba(255,255,255,0.10)',
        }}
      >
        {event.coverImageUrl && (
          <Image src={event.coverImageUrl} alt={event.title} fill className="media-zoom" style={{ objectFit: 'cover' }} />
        )}
        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(7,17,31,0.05) 0%, rgba(7,17,31,0.15) 45%, rgba(7,17,31,0.88) 100%)',
          }}
        />
        {/* Date badge */}
        {d && typeof d !== 'string' && (
          <div
            style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
              backgroundColor: 'rgba(255,255,255,0.94)',
              borderRadius: '10px',
              padding: '8px 12px',
              textAlign: 'center',
              lineHeight: 1.1,
              boxShadow: '0 4px 16px rgba(7,17,31,0.28)',
            }}
          >
            <div style={{ fontFamily: 'var(--font-heading), sans-serif', fontWeight: 700, fontSize: '20px', color: '#0C2155' }}>{d.day}</div>
            <div style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '9px', fontWeight: 600, color: '#1B3FA0', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{d.month}</div>
          </div>
        )}
        {/* Bottom content */}
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '22px' }}>
          {event.location && (
            <div style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '10px', color: '#9FC6FF', letterSpacing: '0.08em', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span>◍</span> {event.location}
            </div>
          )}
          <h3 style={{ fontFamily: 'var(--font-heading), sans-serif', fontWeight: 600, fontSize: '18px', color: '#ffffff', margin: 0, lineHeight: 1.3, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {event.title}
          </h3>
        </div>
      </article>
    </Link>
  )
}
