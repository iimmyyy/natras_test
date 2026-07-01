import Image from 'next/image'
import Link from 'next/link'
import type { UIPost } from '@/app/lib/content'

function formatDate(value?: string) {
  if (!value) return ''
  return new Date(value).toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function PostCard({ post }: { post: UIPost }) {
  const tag = post.tags?.[0]
  return (
    <Link href={`/blog/${post.id}`} className="carousel-card" style={{ textDecoration: 'none' }}>
      <article
        className="card-lift"
        style={{
          border: '1px solid #E8EBF2',
          borderRadius: '16px',
          overflow: 'hidden',
          backgroundColor: '#ffffff',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ height: '200px', position: 'relative', overflow: 'hidden', backgroundColor: '#EEF2FA' }}>
          {post.coverImageUrl && (
            <Image src={post.coverImageUrl} alt={post.title} fill className="media-zoom" style={{ objectFit: 'cover' }} />
          )}
          {tag && (
            <span
              style={{
                position: 'absolute',
                top: '14px',
                left: '14px',
                backgroundColor: 'rgba(7,17,31,0.72)',
                color: '#ffffff',
                fontFamily: 'var(--font-mono), monospace',
                fontSize: '9px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '5px 10px',
                borderRadius: '5px',
                backdropFilter: 'blur(4px)',
              }}
            >
              {tag}
            </span>
          )}
        </div>
        <div style={{ padding: '20px 22px 22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
          {post.publishedAt && (
            <div style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '10px', color: '#8A98B5', letterSpacing: '0.08em', marginBottom: '10px' }}>
              {formatDate(post.publishedAt)}
            </div>
          )}
          <h3 style={{ fontFamily: 'var(--font-heading), sans-serif', fontWeight: 600, fontSize: '17px', color: '#0E1424', marginBottom: '10px', lineHeight: 1.35, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {post.title}
          </h3>
          {post.excerpt && (
            <p style={{ fontFamily: 'var(--font-sans), sans-serif', fontSize: '13px', color: '#41506B', lineHeight: 1.6, margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
              {post.excerpt}
            </p>
          )}
          <span
            style={{
              marginTop: 'auto',
              paddingTop: '16px',
              fontFamily: 'var(--font-sans), sans-serif',
              fontSize: '13px',
              fontWeight: 600,
              color: '#1B3FA0',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            อ่านต่อ <span className="read-arrow">→</span>
          </span>
        </div>
      </article>
    </Link>
  )
}
