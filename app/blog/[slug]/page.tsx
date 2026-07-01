import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPost, getPosts } from '@/app/lib/content'
import BackButton from '@/components/BackButton'
import PortableBody from '@/components/PortableBody'

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((p) => ({ slug: p.id }))
}

function formatDate(value?: string) {
  if (!value) return ''
  return new Date(value).toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

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

      <article className="max-w-3xl mx-auto px-6 py-14 lg:py-20">
        <div style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '11px', color: '#1B3FA0', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '14px', display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Link href="/blog" style={{ color: '#1B3FA0', textDecoration: 'none' }}>บทความ</Link>
          {post.publishedAt && (
            <>
              <span>›</span>
              <span style={{ color: '#8A98B5' }}>{formatDate(post.publishedAt)}</span>
            </>
          )}
        </div>

        <h1 style={{ fontFamily: 'var(--font-heading), sans-serif', fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: '#0E1424', lineHeight: 1.15, marginBottom: '18px' }}>
          {post.title}
        </h1>

        {post.tags && post.tags.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
            {post.tags.map((tag) => (
              <span key={tag} style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '11px', color: '#1B3FA0', background: '#EEF2FA', padding: '4px 10px', borderRadius: '4px' }}>
                {tag}
              </span>
            ))}
          </div>
        )}

        {post.coverImageUrl && (
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', borderRadius: '14px', overflow: 'hidden', marginBottom: '32px', border: '1px solid #E8EBF2' }}>
            <Image src={post.coverImageUrl} alt={post.title} fill style={{ objectFit: 'cover' }} priority />
          </div>
        )}

        <PortableBody value={post.body} />

        <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid #E8EBF2' }}>
          <Link href="/blog" style={{ fontFamily: 'var(--font-sans), sans-serif', fontSize: '14px', fontWeight: 600, color: '#1B3FA0', textDecoration: 'none' }}>
            ← กลับไปหน้าบทความ
          </Link>
        </div>
      </article>
    </div>
  )
}
