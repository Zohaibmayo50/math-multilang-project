import { i18n, Locale, topicSlugs, siteConfig, guides } from './i18n-config'

// ============================================================================
// CONSTANTS
// ============================================================================

const BASE_URL = 'https://mathematives.com'
const ALL_LOCALES = i18n.locales

// ============================================================================
// BASIC URL HELPERS
// ============================================================================

/**
 * Get the localized topic path for a given locale.
 * e.g. getLocalizedPath('en') => '/en/multiplication-tables'
 * e.g. getLocalizedPath('tr', '1-10') => '/tr/carpim-tablosu/1-10'
 */
export function getLocalizedPath(locale: Locale, slug?: string): string {
  const topic = topicSlugs[locale]
  const base = `/${locale}/${topic}`
  if (!slug) return base
  return `${base}/${slug}`
}

/**
 * Get absolute URL for a given locale and optional slug.
 * e.g. getAbsoluteUrl('en', '7') => 'https://mathematives.com/en/multiplication-tables/7'
 */
export function getAbsoluteUrl(locale: Locale, slug?: string): string {
  return `${BASE_URL}${getLocalizedPath(locale, slug)}`
}

// ============================================================================
// GUIDE SLUG MAPPING
// ============================================================================

/**
 * Identify the guide type (students/teachers/parents) from a slug in any language.
 * Returns null if the slug is not a guide slug.
 */
export function getGuideType(slug: string): 'students' | 'teachers' | 'parents' | null {
  for (const locale of ALL_LOCALES) {
    const localeGuides = guides[locale]
    if (localeGuides.students === slug) return 'students'
    if (localeGuides.teachers === slug) return 'teachers'
    if (localeGuides.parents === slug) return 'parents'
  }
  return null
}

/**
 * Get the equivalent guide slug for a target locale.
 * e.g. getEquivalentGuideSlug('for-students', 'es') => 'para-estudiantes'
 */
export function getEquivalentGuideSlug(slug: string, targetLocale: Locale): string | null {
  const guideType = getGuideType(slug)
  if (!guideType) return null
  return guides[targetLocale][guideType]
}

// ============================================================================
// HREFLANG SYSTEM
// ============================================================================

/**
 * Page types for hreflang generation.
 * Each type determines how alternate URLs are constructed.
 */
type PageType = 'root' | 'lang-hub' | 'topic' | 'range' | 'number' | 'guide'

interface HreflangLink {
  hreflang: string
  href: string
}

/**
 * Generate hreflang alternate links for any page on the site.
 *
 * Handles all page types with correct URL translation:
 * - root: Language selector (/) — x-default + all lang roots
 * - lang-hub: Language hub (/en) — all lang hubs + x-default
 * - topic: Topic page (/en/multiplication-tables) — translated topic slugs
 * - range: Range page (/en/multiplication-tables/1-10) — same slug, translated topic
 * - number: Number page (/en/multiplication-tables/7) — same slug, translated topic
 * - guide: Guide page (/en/multiplication-tables/for-students) — translated guide slug + topic
 *
 * @param pageType - The type of page
 * @param slug - The current page slug (for range/number/guide pages)
 * @returns Array of hreflang link objects
 */
export function generateHreflangLinks(pageType: PageType, slug?: string): HreflangLink[] {
  const links: HreflangLink[] = []

  switch (pageType) {
    case 'root':
      // Root page: x-default → homepage, plus all language roots
      links.push({ hreflang: 'x-default', href: BASE_URL })
      for (const locale of ALL_LOCALES) {
        links.push({ hreflang: locale, href: `${BASE_URL}/${locale}` })
      }
      break

    case 'lang-hub':
      // Language hub: all language hubs + x-default → homepage
      for (const locale of ALL_LOCALES) {
        links.push({ hreflang: locale, href: `${BASE_URL}/${locale}` })
      }
      links.push({ hreflang: 'x-default', href: BASE_URL })
      break

    case 'topic':
      // Topic page: each locale's translated topic path
      for (const locale of ALL_LOCALES) {
        links.push({ hreflang: locale, href: getAbsoluteUrl(locale) })
      }
      links.push({ hreflang: 'x-default', href: BASE_URL })
      break

    case 'range':
    case 'number':
      // Range/number pages: slug is identical across languages (e.g. '1-10', '7')
      if (!slug) break
      for (const locale of ALL_LOCALES) {
        links.push({ hreflang: locale, href: getAbsoluteUrl(locale, slug) })
      }
      links.push({ hreflang: 'x-default', href: BASE_URL })
      break

    case 'guide':
      // Guide pages: slug is translated per language (e.g. 'for-students' → 'para-estudiantes')
      if (!slug) break
      for (const locale of ALL_LOCALES) {
        const equivalentSlug = getEquivalentGuideSlug(slug, locale)
        if (equivalentSlug) {
          links.push({ hreflang: locale, href: getAbsoluteUrl(locale, equivalentSlug) })
        }
      }
      links.push({ hreflang: 'x-default', href: BASE_URL })
      break
  }

  return links
}

/**
 * Convert hreflang links to Next.js metadata `alternates` format.
 * This is the primary integration point for all pages.
 *
 * Usage in generateMetadata():
 *   return {
 *     alternates: {
 *       canonical: '/en/multiplication-tables/7',
 *       ...buildAlternatesMetadata('number', '7'),
 *     }
 *   }
 */
export function buildAlternatesMetadata(pageType: PageType, slug?: string) {
  const links = generateHreflangLinks(pageType, slug)

  const languages: Record<string, string> = {}
  for (const link of links) {
    // Next.js uses the hreflang value as key in the languages object
    languages[link.hreflang] = link.href
  }

  return { languages }
}

// ============================================================================
// RANGE / NUMBER UTILITIES
// ============================================================================

/**
 * Get range identifier from number (1-100).
 * e.g. getRangeFromNumber(7) => '1-10'
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

/** Generate all range slugs: ['1-10', '11-20', ..., '91-100'] */
export function getAllRanges(): string[] {
  return ['1-10', '11-20', '21-30', '31-40', '41-50', '51-60', '61-70', '71-80', '81-90', '91-100']
}

/** Generate all number slugs: ['1', '2', ..., '100'] */
export function getAllNumbers(): string[] {
  return Array.from({ length: 100 }, (_, i) => `${i + 1}`)
}

// ============================================================================
// LEGACY COMPATIBILITY (deprecated — use buildAlternatesMetadata instead)
// ============================================================================

/** @deprecated Use buildAlternatesMetadata('topic') or similar */
export function generateHreflangMetadata(slug?: string) {
  // Determine page type from slug pattern
  let pageType: PageType = 'topic'
  if (slug) {
    if (/^\d+-\d+$/.test(slug)) pageType = 'range'
    else if (/^\d+$/.test(slug)) pageType = 'number'
    else if (getGuideType(slug)) pageType = 'guide'
  }
  return buildAlternatesMetadata(pageType, slug)
}

/** @deprecated Use getHreflangAlternates via generateHreflangLinks instead */
export function getHreflangAlternates(slug?: string) {
  let pageType: PageType = 'topic'
  if (slug) {
    if (/^\d+-\d+$/.test(slug)) pageType = 'range'
    else if (/^\d+$/.test(slug)) pageType = 'number'
    else if (getGuideType(slug)) pageType = 'guide'
  }
  return generateHreflangLinks(pageType, slug)
}
