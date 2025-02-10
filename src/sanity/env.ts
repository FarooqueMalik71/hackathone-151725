export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-18'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
  "skMBtWIJiQrR1WYwkUNBVelELg6KUPo1VfGcI750yutUfSBEjAqVgY6a1wkDSuC4uw7XPLXFHV2rTNpmeqpc5p4Ce5M3TIpJaXdIdlwlVksWpkcYDkKwHtKOZlWCVIpU2GCy7jmfhPy3PWgHkYqC8O8l1gi77oum7oKMYw7uMMKVKf1LUBil",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
