import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { products, productImages, productDetails, catLabels, catColors } from '@/app/data'
import BackButton from '@/components/BackButton'

export function generateStaticParams() {
  return products.map(p => ({ id: p.id }))
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = products.find(p => p.id === id)
  if (!product) notFound()

  const detail = productDetails[id]
  const image = productImages[id]
  const catLabel = catLabels[product.category] ?? product.category
  const catColor = catColors[product.category] ?? '#1B3FA0'

  const related = products.filter(p => p.category === product.category && p.id !== id).slice(0, 3)

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>

      {/* Top bar */}
      <div style={{
        background: 'linear-gradient(135deg, #071630 0%, #0C2155 40%, #1B3FA0 100%)',
        borderBottom: '3px solid rgba(255,255,255,0.18)',
        position: 'sticky', top: 0, zIndex: 50,
      }}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <BackButton />
            <div style={{
              width: '1px', height: '20px',
              backgroundColor: 'rgba(255,255,255,0.2)',
            }} />
            <Link href="/">
              <Image src="/logo-white.svg" alt="NUTRAS DIDACTIC" width={160} height={40}
                style={{ height: '30px', width: 'auto' }} />
            </Link>
          </div>
          <a
            href="/#contact"
            style={{
              background: '#ffffff', color: '#1B3FA0',
              fontFamily: 'var(--font-sans), sans-serif',
              fontWeight: '700', fontSize: '13px',
              padding: '8px 18px', borderRadius: '5px',
              textDecoration: 'none', whiteSpace: 'nowrap',
            }}
          >
            Request a quote →
          </a>
        </div>
      </div>

      {/* Hero band */}
      <div
        className="grid-overlay"
        style={{
          background: `linear-gradient(135deg, #071630 0%, #0C2155 40%, ${catColor} 100%)`,
          padding: '56px 0 60px',
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <div style={{
            fontFamily: 'var(--font-mono), monospace',
            fontSize: '11px', color: 'rgba(255,255,255,0.45)',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            marginBottom: '20px', display: 'flex', gap: '8px', alignItems: 'center',
          }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Home</Link>
            <span>›</span>
            <Link href="/#products" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Products</Link>
            <span>›</span>
            <span style={{ color: '#ffffff' }}>{product.model}</span>
          </div>

          {/* Category tag */}
          <div style={{
            display: 'inline-block',
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.25)',
            color: '#ffffff',
            fontFamily: 'var(--font-mono), monospace',
            fontSize: '10px', fontWeight: '700',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            padding: '5px 12px', borderRadius: '4px',
            marginBottom: '14px',
          }}>
            {catLabel}
          </div>

          <h1 style={{
            fontFamily: 'var(--font-heading), sans-serif',
            fontWeight: '700',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: '#ffffff',
            lineHeight: '1.1',
            marginBottom: '6px',
          }}>
            {product.name}
          </h1>
          <div style={{
            fontFamily: 'var(--font-mono), monospace',
            fontSize: '13px', color: 'rgba(255,255,255,0.5)',
            letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>
            {product.model} · {detail.subtitle}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-14 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left — image */}
          <div style={{ position: 'sticky', top: '80px' }}>
            <div style={{
              borderRadius: '14px', overflow: 'hidden',
              border: '1px solid #E8EBF2',
              boxShadow: '0 20px 60px rgba(27,63,160,0.12)',
              position: 'relative', height: '400px',
            }}>
              <Image
                src={image}
                alt={product.name}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(7,22,48,0.5) 0%, transparent 50%)',
              }} />
              {/* Model badge on image */}
              <div style={{
                position: 'absolute', bottom: '20px', left: '20px',
                background: 'rgba(7,22,48,0.85)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '8px', padding: '10px 16px',
                backdropFilter: 'blur(8px)',
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono), monospace',
                  fontSize: '10px', color: 'rgba(255,255,255,0.5)',
                  letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2px',
                }}>Model</div>
                <div style={{
                  fontFamily: 'var(--font-heading), sans-serif',
                  fontSize: '18px', fontWeight: '700', color: '#ffffff',
                }}>
                  {product.model}
                </div>
              </div>
            </div>

            {/* Cert badges */}
            <div style={{
              display: 'flex', gap: '8px', marginTop: '16px', flexWrap: 'wrap',
            }}>
              {['ISO 9001', 'CE Marked', 'IEC Compliant', '3-Year Warranty'].map(b => (
                <div key={b} style={{
                  fontFamily: 'var(--font-mono), monospace',
                  fontSize: '10px', fontWeight: '600',
                  color: '#1B3FA0', letterSpacing: '0.08em',
                  border: '1.5px solid #1B3FA0',
                  borderRadius: '4px', padding: '4px 10px',
                }}>
                  {b}
                </div>
              ))}
            </div>
          </div>

          {/* Right — details */}
          <div>
            {/* Description */}
            <div style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: '10px', fontWeight: '700',
              color: '#1B3FA0', letterSpacing: '0.14em',
              textTransform: 'uppercase', marginBottom: '10px',
            }}>
              Overview
            </div>
            <p style={{
              fontFamily: 'var(--font-sans), sans-serif',
              fontSize: '16px', lineHeight: '1.8',
              color: '#41506B', marginBottom: '24px',
            }}>
              {detail.description}
            </p>

            {/* Highlights */}
            <div style={{
              background: '#F5F7FC',
              borderLeft: '4px solid #1B3FA0',
              borderRadius: '0 10px 10px 0',
              padding: '18px 20px',
              marginBottom: '32px',
            }}>
              <div style={{
                fontFamily: 'var(--font-mono), monospace',
                fontSize: '10px', fontWeight: '700',
                color: '#1B3FA0', letterSpacing: '0.12em',
                textTransform: 'uppercase', marginBottom: '12px',
              }}>
                Key features
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {detail.highlights.map((h, i) => (
                  <li key={i} style={{
                    display: 'flex', alignItems: 'flex-start', gap: '10px',
                    marginBottom: i < detail.highlights.length - 1 ? '10px' : 0,
                  }}>
                    <span style={{
                      marginTop: '4px', flexShrink: 0,
                      width: '16px', height: '16px',
                      background: '#1B3FA0',
                      borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                        <path d="M1 3l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-sans), sans-serif',
                      fontSize: '14px', color: '#41506B', lineHeight: '1.5',
                    }}>
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Spec table */}
            <div style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: '10px', fontWeight: '700',
              color: '#1B3FA0', letterSpacing: '0.14em',
              textTransform: 'uppercase', marginBottom: '14px',
            }}>
              Technical specifications
            </div>
            <div style={{
              border: '1px solid #E8EBF2',
              borderRadius: '10px', overflow: 'hidden',
              marginBottom: '32px',
            }}>
              {detail.specs.map((row, i) => (
                <div
                  key={i}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '160px 1fr',
                    borderBottom: i < detail.specs.length - 1 ? '1px solid #E8EBF2' : 'none',
                  }}
                >
                  <div style={{
                    fontFamily: 'var(--font-mono), monospace',
                    fontSize: '11px', color: '#6B7896',
                    padding: '13px 16px',
                    textTransform: 'uppercase', letterSpacing: '0.06em',
                    borderRight: '1px solid #E8EBF2',
                    fontWeight: '600',
                  }}>
                    {row.key}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-sans), sans-serif',
                    fontSize: '14px', color: '#0E1424',
                    padding: '13px 16px', fontWeight: '500',
                  }}>
                    {row.value}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{
              background: 'linear-gradient(135deg, #0C2155, #1B3FA0)',
              borderRadius: '12px', padding: '28px',
              display: 'flex', alignItems: 'center',
              justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px',
            }}>
              <div>
                <div style={{
                  fontFamily: 'var(--font-heading), sans-serif',
                  fontWeight: '700', fontSize: '17px', color: '#ffffff',
                  marginBottom: '4px',
                }}>
                  Interested in the {product.model}?
                </div>
                <div style={{
                  fontFamily: 'var(--font-sans), sans-serif',
                  fontSize: '14px', color: 'rgba(255,255,255,0.6)',
                }}>
                  Request a quote or ask our engineers a question.
                </div>
              </div>
              <a
                href="/#contact"
                style={{
                  background: '#ffffff', color: '#1B3FA0',
                  fontFamily: 'var(--font-sans), sans-serif',
                  fontWeight: '700', fontSize: '14px',
                  padding: '12px 24px', borderRadius: '6px',
                  textDecoration: 'none', whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                Request a quote →
              </a>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div style={{ marginTop: '64px' }}>
            <div style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: '10px', fontWeight: '700',
              color: '#1B3FA0', letterSpacing: '0.14em',
              textTransform: 'uppercase', marginBottom: '6px',
            }}>
              More in {catLabel}
            </div>
            <h2 style={{
              fontFamily: 'var(--font-heading), sans-serif',
              fontWeight: '700', fontSize: '1.5rem',
              color: '#0E1424', marginBottom: '24px',
            }}>
              Related products
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map(r => (
                <Link key={r.id} href={`/product/${r.id}`} style={{ textDecoration: 'none' }}>
                  <div
                    style={{
                      border: '1px solid #E8EBF2',
                      borderTop: `4px solid ${catColors[r.category]}`,
                      borderRadius: '12px', overflow: 'hidden',
                      backgroundColor: '#FBFCFE',
                      transition: 'transform 0.2s, box-shadow 0.2s',
                    }}
                  >
                    <div style={{ height: '160px', position: 'relative', overflow: 'hidden' }}>
                      <Image
                        src={productImages[r.id]}
                        alt={r.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div style={{ padding: '16px 18px 20px' }}>
                      <div style={{
                        fontFamily: 'var(--font-mono), monospace',
                        fontSize: '10px', color: '#8A98B5',
                        letterSpacing: '0.1em', textTransform: 'uppercase',
                        marginBottom: '4px',
                      }}>
                        {r.model}
                      </div>
                      <div style={{
                        fontFamily: 'var(--font-heading), sans-serif',
                        fontWeight: '600', fontSize: '15px', color: '#0E1424',
                        marginBottom: '10px',
                      }}>
                        {r.name}
                      </div>
                      <span style={{
                        fontFamily: 'var(--font-sans), sans-serif',
                        fontSize: '13px', fontWeight: '600', color: '#1B3FA0',
                      }}>
                        View specs →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer strip */}
      <div style={{
        background: '#0A1B45',
        borderTop: '1px solid rgba(255,255,255,0.07)',
        padding: '20px 0',
      }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between flex-wrap gap-3">
          <Link href="/">
            <Image src="/logo-white.svg" alt="NUTRAS DIDACTIC" width={140} height={36}
              style={{ height: '28px', width: 'auto', opacity: 0.7 }} />
          </Link>
          <div style={{
            fontFamily: 'var(--font-mono), monospace',
            fontSize: '11px', color: '#4B5E8A', letterSpacing: '0.06em',
          }}>
            © 2026 NUTRAS DIDACTIC Co., Ltd. · ISO 9001 · CE · IEC
          </div>
        </div>
      </div>
    </div>
  )
}
