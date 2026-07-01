import Image from 'next/image'
import Link from 'next/link'
import { getPosts } from '@/app/lib/content'
import BackButton from '@/components/BackButton'

export const metadata = {
  title: 'บทความความรู้ · NuTras Didactic',
}

function formatDate(value?: string) {
  if (!value) return ''
  return new Date(value).toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      {/* Top bar */}
      <div
        style={{
          background: 'linear-gradient(135deg, #071630 0%, #0C2155 40%, #1B3FA0 100%)',
          borderBottom: '3px solid rgba(255,255,255,0.18)',
          position: 'sticky',
          top: 0,
          zIndex: 50,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-4">
          <BackButton />
          <div style={{ width: '1px', height: '20px', backgroundColor: 'rgba(255,255,255,0.2)' }} />
          <Link href="/">
            <Image
              src="/nutras-logo-white-t.png"
              alt="NuTras Didactic"
              width={400}
              height={101}
              style={{ height: '30px', width: 'auto' }}
            />
          </Link>
        </div>
      </div>

      {/* Header band */}
      <div style={{ background: 'linear-gradient(135deg, #071630 0%, #0C2155 50%, #1B3FA0 100%)', padding: '56px 0 60px' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '11px', color: '#78c1ff', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Knowledge Blog
          </div>
          <h1 style={{ fontFamily: 'var(--font-heading), sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#ffffff', lineHeight: 1.1 }}>
            บทความความรู้
          </h1>
          <p style={{ fontFamily: 'var(--font-sans), sans-serif', fontSize: '15px', color: 'rgba(255,255,255,0.6)', marginTop: '10px', maxWidth: '620px' }}>
            บทความและองค์ความรู้ด้านชุดฝึกวิศวกรรม เทคโนโลยีการเรียนการสอน และงานอบรมของ NuTras Didactic
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-14 lg:py-20">
        {posts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: '#6B7896', fontFamily: 'var(--font-sans), sans-serif' }}>
            ยังไม่มีบทความในขณะนี้ — เพิ่มบทความได้ที่หน้า <Link href="/studio" style={{ color: '#1B3FA0', fontWeight: 600 }}>/studio</Link>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} style={{ textDecoration: 'none' }}>
                <article
                  className="card-lift"
                  style={{
                    border: '1px solid #E8EBF2',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    backgroundColor: '#ffffff',
                    height: '100%',
                  }}
                >
                  <div style={{ height: '180px', position: 'relative', overflow: 'hidden', backgroundColor: '#EEF2FA' }}>
                    {post.coverImageUrl && (
                      <Image src={post.coverImageUrl} alt={post.title} fill style={{ objectFit: 'cover' }} />
                    )}
                  </div>
                  <div style={{ padding: '18px 20px 22px' }}>
                    {post.publishedAt && (
                      <div style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '10px', color: '#8A98B5', letterSpacing: '0.08em', marginBottom: '8px' }}>
                        {formatDate(post.publishedAt)}
                      </div>
                    )}
                    <h2 style={{ fontFamily: 'var(--font-heading), sans-serif', fontWeight: 600, fontSize: '16px', color: '#0E1424', marginBottom: '8px', lineHeight: 1.35 }}>
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p style={{ fontFamily: 'var(--font-sans), sans-serif', fontSize: '13px', color: '#41506B', lineHeight: 1.6, margin: 0 }}>
                        {post.excerpt}
                      </p>
                    )}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
