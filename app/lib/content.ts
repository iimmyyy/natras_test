import 'server-only'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import {
  productsQuery,
  postsQuery,
  postBySlugQuery,
  eventsQuery,
  eventBySlugQuery,
} from '@/sanity/lib/queries'
import type { Brand } from '@/app/data'
import * as local from '@/app/data'

// ---------------------------------------------------------------------------
// Shapes the UI components expect. These mirror the existing data.ts exports so
// components don't need to know whether content came from Sanity or the local
// fallback file.
// ---------------------------------------------------------------------------

export type UIProduct = {
  id: string
  name: string
  category: string
  brand: Brand
}

export type UIProductDetail = {
  subtitle: string
  description: string
  highlights: string[]
  specs: { key: string; value: string }[]
  lnUrl?: string
}

export type Catalog = {
  products: UIProduct[]
  productImages: Record<string, string>
  productDetails: Record<string, UIProductDetail>
}

// Raw product doc coming back from Sanity (image is an asset reference).
type SanityProduct = {
  id: string
  name: string
  category: string
  brand: Brand
  subtitle?: string
  description?: string
  highlights?: string[]
  specs?: { key: string; value: string }[]
  lnUrl?: string
  image?: Parameters<typeof urlFor>[0]
}

// Revalidate every 60s and tag responses so a Studio publish can trigger an
// instant on-demand revalidation via the /api/revalidate webhook.
const CACHE = { next: { revalidate: 60, tags: ['content'] } }

async function safeFetch<T>(query: string, params: Record<string, unknown> = {}): Promise<T | null> {
  try {
    return await client.fetch<T>(query, params, CACHE)
  } catch {
    // New/empty project, network hiccup, or missing dataset — fall back.
    return null
  }
}

const LOCAL_FALLBACK_IMAGE = '/products/power.jpg'

// The full catalog, sourced from Sanity when it has products, otherwise the
// bundled data.ts content so the site always renders.
export async function getCatalog(): Promise<Catalog> {
  const sanity = await safeFetch<SanityProduct[]>(productsQuery)

  if (sanity && sanity.length > 0) {
    const products: UIProduct[] = []
    const productImages: Record<string, string> = {}
    const productDetails: Record<string, UIProductDetail> = {}

    for (const p of sanity) {
      if (!p.id) continue
      products.push({ id: p.id, name: p.name, category: p.category, brand: p.brand })
      productImages[p.id] = p.image
        ? urlFor(p.image).width(1200).height(900).fit('crop').url()
        : local.productImages[p.id] ?? LOCAL_FALLBACK_IMAGE
      productDetails[p.id] = {
        subtitle: p.subtitle ?? '',
        description: p.description ?? '',
        highlights: p.highlights ?? [],
        specs: p.specs ?? [],
        lnUrl: p.lnUrl,
      }
    }

    return { products, productImages, productDetails }
  }

  // Fallback: bundled content.
  return {
    products: local.products,
    productImages: local.productImages,
    productDetails: local.productDetails,
  }
}

// ---------------------------------------------------------------------------
// Blog posts
// ---------------------------------------------------------------------------

export type UIPost = {
  id: string
  title: string
  excerpt?: string
  coverImageUrl?: string
  tags?: string[]
  publishedAt?: string
}

type SanityPost = {
  id: string
  title: string
  excerpt?: string
  coverImage?: Parameters<typeof urlFor>[0]
  tags?: string[]
  publishedAt?: string
  body?: unknown
}

function toCoverUrl(image?: Parameters<typeof urlFor>[0]): string | undefined {
  return image ? urlFor(image).width(1200).height(675).fit('crop').url() : undefined
}

export async function getPosts(): Promise<UIPost[]> {
  const posts = await safeFetch<SanityPost[]>(postsQuery)
  if (!posts) return []
  return posts.map((p) => ({
    id: p.id,
    title: p.title,
    excerpt: p.excerpt,
    coverImageUrl: toCoverUrl(p.coverImage),
    tags: p.tags,
    publishedAt: p.publishedAt,
  }))
}

export async function getPost(slug: string) {
  const post = await safeFetch<SanityPost>(postBySlugQuery, { slug })
  if (!post) return null
  return {
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    coverImageUrl: toCoverUrl(post.coverImage),
    tags: post.tags,
    publishedAt: post.publishedAt,
    body: post.body,
  }
}

// ---------------------------------------------------------------------------
// Events / past activities
// ---------------------------------------------------------------------------

export type UIEvent = {
  id: string
  title: string
  date?: string
  location?: string
  coverImageUrl?: string
}

type SanityEvent = {
  id: string
  title: string
  date?: string
  location?: string
  coverImage?: Parameters<typeof urlFor>[0]
  gallery?: Parameters<typeof urlFor>[0][]
  body?: unknown
}

export async function getEvents(): Promise<UIEvent[]> {
  const events = await safeFetch<SanityEvent[]>(eventsQuery)
  if (!events) return []
  return events.map((e) => ({
    id: e.id,
    title: e.title,
    date: e.date,
    location: e.location,
    coverImageUrl: toCoverUrl(e.coverImage),
  }))
}

export async function getEvent(slug: string) {
  const event = await safeFetch<SanityEvent>(eventBySlugQuery, { slug })
  if (!event) return null
  return {
    id: event.id,
    title: event.title,
    date: event.date,
    location: event.location,
    coverImageUrl: toCoverUrl(event.coverImage),
    galleryUrls: (event.gallery ?? []).map((g) => urlFor(g).width(1200).url()),
    body: event.body,
  }
}
