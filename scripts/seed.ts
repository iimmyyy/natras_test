/**
 * Seed / migrate the bundled data.ts catalog into Sanity.
 *
 * Usage:
 *   1. Create an editor token at https://sanity.io/manage
 *      (your project → API → Tokens → Add token → "Editor").
 *   2. Put it in .env.local as:  SANITY_API_WRITE_TOKEN=sk...
 *   3. Run:  npm run seed
 *
 * The script is idempotent — it uses createOrReplace, so re-running updates the
 * same documents instead of creating duplicates. Product images are uploaded
 * from the local /public folder the first time each product is seeded.
 */
import { readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { createClient } from '@sanity/client'
import { products, productImages, productDetails } from '../app/data'

// --- Minimal .env.local loader (tsx does not auto-load env files) -----------
function loadEnv() {
  const envPath = join(process.cwd(), '.env.local')
  if (!existsSync(envPath)) return
  for (const line of readFileSync(envPath, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/)
    if (m && !process.env[m[1]]) {
      process.env[m[1]] = m[2].replace(/^["']|["']$/g, '')
    }
  }
}
loadEnv()

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_WRITE_TOKEN

if (!projectId) {
  console.error('✗ NEXT_PUBLIC_SANITY_PROJECT_ID is not set in .env.local')
  process.exit(1)
}
if (!token) {
  console.error(
    '✗ SANITY_API_WRITE_TOKEN is not set.\n' +
      '  Create an Editor token at https://sanity.io/manage and add it to .env.local:\n' +
      '  SANITY_API_WRITE_TOKEN=sk...'
  )
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: false,
})

// Cache uploaded image assets by local path so we don't re-upload duplicates.
const uploadedAssets = new Map<string, string>()

async function uploadImage(localPath: string): Promise<string | undefined> {
  if (uploadedAssets.has(localPath)) return uploadedAssets.get(localPath)
  const filePath = join(process.cwd(), 'public', localPath)
  if (!existsSync(filePath)) {
    console.warn(`  ! image not found, skipping: ${filePath}`)
    return undefined
  }
  const filename = localPath.split('/').pop() || 'image'
  const asset = await client.assets.upload('image', readFileSync(filePath), { filename })
  uploadedAssets.set(localPath, asset._id)
  return asset._id
}

async function seed() {
  console.log(`Seeding ${products.length} products into ${projectId}/${dataset} ...\n`)

  for (let i = 0; i < products.length; i++) {
    const p = products[i]
    const detail = productDetails[p.id]
    const localImage = productImages[p.id]

    let imageField: Record<string, unknown> | undefined
    if (localImage) {
      const assetId = await uploadImage(localImage)
      if (assetId) {
        imageField = { _type: 'image', asset: { _type: 'reference', _ref: assetId } }
      }
    }

    const doc = {
      _id: `product-${p.id}`,
      _type: 'product',
      name: p.name,
      slug: { _type: 'slug', current: p.id },
      category: p.category,
      brand: p.brand,
      order: i,
      ...(imageField ? { image: imageField } : {}),
      ...(detail
        ? {
            subtitle: detail.subtitle,
            description: detail.description,
            highlights: detail.highlights,
            specs: detail.specs.map((s, idx) => ({
              _key: `spec-${idx}`,
              key: s.key,
              value: s.value,
            })),
            ...(detail.lnUrl ? { lnUrl: detail.lnUrl } : {}),
          }
        : {}),
    }

    await client.createOrReplace(doc)
    console.log(`  ✓ ${p.id}  —  ${p.name}`)
  }

  console.log('\nDone. Open /studio to review and edit the content.')
}

seed().catch((err) => {
  console.error('\n✗ Seed failed:', err.message || err)
  process.exit(1)
})
