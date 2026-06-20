# NUTRAS Didactic — Frontend

Official website for **NUTRAS Didactic Co., Ltd.**, a manufacturer of educational laboratory equipment for technical and vocational institutions worldwide.

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + inline styles
- **Animations**: Framer Motion
- **Fonts**: IBM Plex Mono · IBM Plex Sans · Space Grotesk (via next/font/google)
- **Images**: next/image with Unsplash

## Features

- Bilingual UI — English / Thai toggle
- Product catalog with category filtering
- Individual product detail pages (`/product/[id]`)
- Contact form section
- Fully static export via `generateStaticParams`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
```

## Project Structure

```
app/
  page.tsx          # Home page
  data.ts           # Products, images, details data
  product/[id]/     # Dynamic product detail pages
components/
  Header.tsx
  Hero.tsx
  Products.tsx
  BackButton.tsx
  ...
public/
  logo-white.svg
```

---

© 2026 NUTRAS Didactic Co., Ltd.
