import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getEvent, getEvents } from '@/app/lib/content'
import BackButton from '@/components/BackButton'
import PortableBody from '@/components/PortableBody'

export async function generateStaticParams() {
  const events = await getEvents()
  return events.map((e) => ({ slug: e.id }))
}

function formatDate(value?: string) {
  if (!value) return ''
  return new Date(value).toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const event = await getEvent(slug)
  if (!event) notFound()

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      {/* Top bar */}
      <div style={{ background: 'linear-gradient(135deg, #071630 0%, #0C2155 40%, #1B3FA0 100%)', borderBottom: '3px solid rgba(255,255,255,0.18)', position: 'sticky', top: 0, zIndex: 50 }}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-4">
          <BackButton />
          <div style={{ width: '1px', height: '20px', backgroundColor: 'rgba(255,255,255,0.2)' }} />
          <Link href="/">
            <Image src="/nutras-logo-white-t.png" alt="NuTras Didactic" width={400} height={101} style={{ height: '30px', width: 'auto' }} />
          </Link>
        </div>
      </div>

      {/* Hero band */}
      <div style={{ background: 'linear-gradient(135deg, #071630 0%, #0C2155 50%, #1B3FA0 100%)', padding: '52px 0 56px' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '18px', display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Link href="/events" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>กิจกรรม</Link>
            <span>›</span>
            <span style={{ color: '#ffffff' }}>{event.title}</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-heading), sans-serif', fontWeight: 700, fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', color: '#ffffff', lineHeight: 1.12, marginBottom: '10px' }}>
            {event.title}
          </h1>
          <div style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '13px', color: 'rgba(255,255,255,0.55)', letterSpacing: '0.06em' }}>
            {[formatDate(event.date), event.location].filter(Boolean).join('  ·  ')}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-14 lg:py-20">
        {event.coverImageUrl && (
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', borderRadius: '14px', overflow: 'hidden', marginBottom: '32px', border: '1px solid #E8EBF2' }}>
            <Image src={event.coverImageUrl} alt={event.title} fill style={{ objectFit: 'cover' }} priority />
          </div>
        )}

        <PortableBody value={event.body} />

        {event.galleryUrls.length > 0 && (
          <div style={{ marginTop: '40px' }}>
            <div style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '10px', fontWeight: 700, color: '#1B3FA0', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '16px' }}>
              แกลเลอรี
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {event.galleryUrls.map((url, i) => (
                <div key={i} style={{ position: 'relative', aspectRatio: '4 / 3', borderRadius: '10px', overflow: 'hidden', border: '1px solid #E8EBF2' }}>
                  <Image src={url} alt={`${event.title} — ${i + 1}`} fill style={{ objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid #E8EBF2' }}>
          <Link href="/events" style={{ fontFamily: 'var(--font-sans), sans-serif', fontSize: '14px', fontWeight: 600, color: '#1B3FA0', textDecoration: 'none' }}>
            ← กลับไปหน้ากิจกรรม
          </Link>
        </div>
      </div>
    </div>
  )
}
