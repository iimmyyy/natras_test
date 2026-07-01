import { groq } from 'next-sanity'

// All products, ordered by the manual `order` field then name.
// `id` is derived from the slug so it maps 1:1 onto the existing route params.
export const productsQuery = groq`
  *[_type == "product"] | order(order asc, name asc){
    "id": slug.current,
    name,
    category,
    brand,
    subtitle,
    description,
    highlights,
    "specs": specs[]{ key, value },
    lnUrl,
    image
  }
`

// Blog posts, newest first.
export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc){
    "id": slug.current,
    title,
    excerpt,
    coverImage,
    tags,
    publishedAt
  }
`

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0]{
    "id": slug.current,
    title,
    excerpt,
    coverImage,
    tags,
    publishedAt,
    body
  }
`

// Events / past activities, newest first.
export const eventsQuery = groq`
  *[_type == "event"] | order(date desc){
    "id": slug.current,
    title,
    date,
    location,
    coverImage,
    gallery,
    body
  }
`

export const eventBySlugQuery = groq`
  *[_type == "event" && slug.current == $slug][0]{
    "id": slug.current,
    title,
    date,
    location,
    coverImage,
    gallery,
    body
  }
`

// Singleton site settings (hero copy, contact info).
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]{
    email,
    location,
    heroH1,
    heroSub,
    aboutP1,
    aboutP2
  }
`
