// Sanity connection settings, read from environment variables.
// Fill NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local after creating the project.
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

// Falls back to a placeholder so the app can build before the project exists.
export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder'
