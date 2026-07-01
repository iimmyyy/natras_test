import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

// Read-only client used by the Next.js site to fetch published content.
// useCdn: true serves cached content fast; revalidation keeps it fresh.
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})
