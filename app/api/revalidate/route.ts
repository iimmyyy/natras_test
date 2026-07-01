import { revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

/**
 * On-demand revalidation endpoint for Sanity.
 *
 * Set up in Sanity: your project -> API -> Webhooks -> Create webhook
 *   URL:     https://<your-domain>/api/revalidate?secret=<SANITY_REVALIDATE_SECRET>
 *   Trigger: Create / Update / Delete
 *   Dataset: production
 *
 * Add the matching secret to your env (.env.local and Vercel):
 *   SANITY_REVALIDATE_SECRET=<any-long-random-string>
 *
 * When content is published, this clears the 'content' cache tag so the site
 * shows the new content on the next request instead of waiting for the 60s ISR
 * window. If no secret is configured, the endpoint is disabled (403).
 */
export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET
  if (!secret) {
    return NextResponse.json({ message: 'Revalidation not configured' }, { status: 403 })
  }
  if (req.nextUrl.searchParams.get('secret') !== secret) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  revalidateTag('content', 'max')
  return NextResponse.json({ revalidated: true, now: Date.now() })
}
