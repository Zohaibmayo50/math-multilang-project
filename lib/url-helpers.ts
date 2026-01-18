import { Locale, topicSlugs, siteConfig } from './i18n-config'

/**
 * Get the full URL path for a given locale and path segment
 */
export function getLocalizedPath(locale: Locale, path?: string): string {
  const topic = topicSlugs[locale]
  const base = `/${locale}/${topic}`
  
  if (!path) return base
  return `${base}/${path}`
}

/**
 * Get absolute URL for a given locale and path
 */
export function getAbsoluteUrl(locale: Locale, path?: string): string {
  const domain = siteConfig[locale].domain
  const localizedPath = getLocalizedPath(locale, path)
  return `${domain}${localizedPath}`
}

/**
 * Generate hreflang alternates for all languages
 */
export function getHreflangAlternates(path?: string): Array<{
  hreflang: string
  href: string
}> {
  const locales: Locale[] = ['tr', 'es', 'de', 'cs', 'uk', 'fi']
  
  const alternates = locales.map(locale => ({
    hreflang: locale as string,
    href: getAbsoluteUrl(locale, path),
  }))

  // Add x-default pointing to root language selector
  alternates.push({
    hreflang: 'x-default',
    href: siteConfig.tr.domain,
  })

  return alternates
}

/**
 * Get range identifier from number (1-100)
 */
export function getRangeFromNumber(num: number): string {
  if (num <= 10) return '1-10'
  if (num <= 20) return '11-20'
  if (num <= 30) return '21-30'
  if (num <= 40) return '31-40'
  if (num <= 50) return '41-50'
  if (num <= 60) return '51-60'
  if (num <= 70) return '61-70'
  if (num <= 80) return '71-80'
  if (num <= 90) return '81-90'
  return '91-100'
}

/**
 * Generate all range slugs
 */
export function getAllRanges(): string[] {
  return [
    '1-10', '11-20', '21-30', '31-40', '41-50',
    '51-60', '61-70', '71-80', '81-90', '91-100'
  ]
}

/**
 * Generate all number slugs (1-100)
 */
export function getAllNumbers(): string[] {
  return Array.from({ length: 100 }, (_, i) => `${i + 1}`)
}

/**
 * Generate hreflang metadata for Next.js metadata API
 * Server-side version for use in generateMetadata functions
 */
export function generateHreflangMetadata(path?: string) {
  const alternates = getHreflangAlternates(path)
  
  return {
    languages: alternates.reduce((acc, { hreflang, href }) => {
      if (hreflang !== 'x-default') {
        acc[hreflang] = href
      }
      return acc
    }, {} as Record<string, string>),
  }
}
