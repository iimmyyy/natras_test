import Image from 'next/image'
import { PortableText, type PortableTextComponents } from '@portabletext/react'
import { urlFor } from '@/sanity/lib/image'

// Renders Sanity Portable Text (block content) for blog posts and events,
// including inline images. Server-safe — used inside server components.
const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null
      return (
        <span style={{ display: 'block', margin: '24px 0', borderRadius: '10px', overflow: 'hidden' }}>
          <Image
            src={urlFor(value).width(1200).url()}
            alt={value.alt || ''}
            width={1200}
            height={800}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </span>
      )
    },
  },
  block: {
    normal: ({ children }) => (
      <p style={{ fontFamily: 'var(--font-sans), sans-serif', fontSize: '16px', lineHeight: 1.85, color: '#41506B', margin: '0 0 18px' }}>
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2 style={{ fontFamily: 'var(--font-heading), sans-serif', fontWeight: 700, fontSize: '1.5rem', color: '#0E1424', margin: '32px 0 14px' }}>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 style={{ fontFamily: 'var(--font-heading), sans-serif', fontWeight: 700, fontSize: '1.2rem', color: '#0E1424', margin: '26px 0 12px' }}>
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote style={{ borderLeft: '4px solid #1B3FA0', background: '#F5F7FC', padding: '14px 20px', borderRadius: '0 8px 8px 0', margin: '20px 0', color: '#41506B', fontFamily: 'var(--font-sans), sans-serif' }}>
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul style={{ margin: '0 0 18px', paddingLeft: '22px', color: '#41506B', fontFamily: 'var(--font-sans), sans-serif', fontSize: '16px', lineHeight: 1.8 }}>
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol style={{ margin: '0 0 18px', paddingLeft: '22px', color: '#41506B', fontFamily: 'var(--font-sans), sans-serif', fontSize: '16px', lineHeight: 1.8 }}>
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer" style={{ color: '#1B3FA0', textDecoration: 'underline' }}>
        {children}
      </a>
    ),
    strong: ({ children }) => <strong style={{ fontWeight: 700, color: '#0E1424' }}>{children}</strong>,
  },
}

export default function PortableBody({ value }: { value: unknown }) {
  if (!value) return null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <PortableText value={value as any} components={components} />
}
