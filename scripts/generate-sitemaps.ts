#!/usr/bin/env ts-node
/**
 * Sitemap Generator for Mathematives.com
 * 
 * Generates:
 * - /public/sitemap.xml (sitemap index)
 * - /public/sitemaps/sitemap-{lang}.xml (one per language)
 * 
 * Each URL includes hreflang alternates for all languages.
 * Run: node --loader ts-node/esm scripts/generate-sitemaps.ts
 * Or: npx ts-node scripts/generate-sitemaps.ts
 */

import * as fs from 'fs'
import * as path from 'path'
import { i18n, topicSlugs, guides, type Locale } from '../lib/i18n-config.js'
import { getAllRanges, getAllNumbers } from '../lib/url-helpers.js'

// ============================================================================
// CONFIGURATION
// ============================================================================

const BASE_URL = 'https://mathematives.com'
const LANGUAGES = i18n.locales
const OUTPUT_DIR = path.join(process.cwd(), 'public')
const SITEMAPS_DIR = path.join(OUTPUT_DIR, 'sitemaps')

// Priority rules
const PRIORITIES = {
  root: 1.0,          // Language selector root
  langHub: 0.9,       // Language hub pages
  topicHome: 1.0,     // Topic homepage
  range: 0.8,         // Range pages (1-10, etc.)
  number: 0.7,        // Individual number pages
  guide: 0.6,         // Guide pages
}

// Change frequency
const FREQUENCIES = {
  root: 'weekly' as const,
  langHub: 'monthly' as const,
  topicHome: 'weekly' as const,
  range: 'monthly' as const,
  number: 'monthly' as const,
  guide: 'monthly' as const,
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Escape XML special characters
 */
function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

/**
 * Get the current date in ISO format (for lastmod)
 */
function getCurrentDate(): string {
  return new Date().toISOString().split('T')[0]
}

/**
 * Generate hreflang alternates for a given path structure
 * @param pathFn - Function that generates the path for a given locale
 */
function generateHreflangAlternates(pathFn: (locale: Locale) => string): string {
  let alternates = ''
  
  // Add x-default (points to root)
  alternates += `    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/" />\n`
  
  // Add all language alternates
  LANGUAGES.forEach(lang => {
    const url = pathFn(lang)
    alternates += `    <xhtml:link rel="alternate" hreflang="${lang}" href="${escapeXml(url)}" />\n`
  })
  
  return alternates
}

/**
 * Create a URL entry with hreflang alternates
 */
function createUrlEntry(
  url: string,
  priority: number,
  changeFreq: string,
  pathFn: (locale: Locale) => string
): string {
  return `  <url>
    <loc>${escapeXml(url)}</loc>
    <lastmod>${getCurrentDate()}</lastmod>
    <changefreq>${changeFreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
${generateHreflangAlternates(pathFn)}  </url>\n`
}

// ============================================================================
// URL GENERATION FUNCTIONS
// ============================================================================

/**
 * Generate all URLs for a specific language
 */
function generateLanguageUrls(locale: Locale): string[] {
  const topicSlug = topicSlugs[locale]
  const ranges = getAllRanges()
  const numbers = getAllNumbers()
  const localeGuides = guides[locale]
  
  const urls: Array<{
    url: string
    priority: number
    changeFreq: string
    pathFn: (l: Locale) => string
  }> = []
  
  // 1. Language hub page (/{lang})
  urls.push({
    url: `${BASE_URL}/${locale}`,
    priority: PRIORITIES.langHub,
    changeFreq: FREQUENCIES.langHub,
    pathFn: (l) => `${BASE_URL}/${l}`,
  })
  
  // 2. Topic homepage (/{lang}/multiplication-tables)
  urls.push({
    url: `${BASE_URL}/${locale}/${topicSlug}`,
    priority: PRIORITIES.topicHome,
    changeFreq: FREQUENCIES.topicHome,
    pathFn: (l) => `${BASE_URL}/${l}/${topicSlugs[l]}`,
  })
  
  // 3. Range pages (/{lang}/multiplication-tables/1-10, etc.)
  ranges.forEach(range => {
    urls.push({
      url: `${BASE_URL}/${locale}/${topicSlug}/${range}`,
      priority: PRIORITIES.range,
      changeFreq: FREQUENCIES.range,
      pathFn: (l) => `${BASE_URL}/${l}/${topicSlugs[l]}/${range}`,
    })
  })
  
  // 4. Number pages (/{lang}/multiplication-tables/1 to 100)
  numbers.forEach(number => {
    urls.push({
      url: `${BASE_URL}/${locale}/${topicSlug}/${number}`,
      priority: PRIORITIES.number,
      changeFreq: FREQUENCIES.number,
      pathFn: (l) => `${BASE_URL}/${l}/${topicSlugs[l]}/${number}`,
    })
  })
  
  // 5. Guide pages
  Object.entries(localeGuides).forEach(([guideType, guideSlug]) => {
    urls.push({
      url: `${BASE_URL}/${locale}/${topicSlug}/${guideSlug}`,
      priority: PRIORITIES.guide,
      changeFreq: FREQUENCIES.guide,
      pathFn: (l) => `${BASE_URL}/${l}/${topicSlugs[l]}/${guides[l][guideType as keyof typeof guides[Locale]]}`,
    })
  })
  
  // Generate XML for each URL
  return urls.map(({ url, priority, changeFreq, pathFn }) =>
    createUrlEntry(url, priority, changeFreq, pathFn)
  )
}

/**
 * Generate a complete language sitemap
 */
function generateLanguageSitemap(locale: Locale): string {
  const urlEntries = generateLanguageUrls(locale)
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries.join('')}</urlset>`
}

/**
 * Generate the sitemap index
 */
function generateSitemapIndex(): string {
  const lastMod = getCurrentDate()
  
  const sitemapRefs = LANGUAGES.map(lang => 
    `  <sitemap>
    <loc>${BASE_URL}/sitemaps/sitemap-${lang}.xml</loc>
    <lastmod>${lastMod}</lastmod>
  </sitemap>`
  ).join('\n')
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapRefs}
</sitemapindex>`
}

// ============================================================================
// MAIN EXECUTION
// ============================================================================

function main() {
  console.log('🚀 Starting sitemap generation...\n')
  
  // Ensure output directories exist
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true })
  }
  if (!fs.existsSync(SITEMAPS_DIR)) {
    fs.mkdirSync(SITEMAPS_DIR, { recursive: true })
  }
  
  // Generate sitemap index
  console.log('📝 Generating sitemap index...')
  const indexContent = generateSitemapIndex()
  const indexPath = path.join(OUTPUT_DIR, 'sitemap.xml')
  fs.writeFileSync(indexPath, indexContent, 'utf8')
  console.log(`✅ Created: ${indexPath}`)
  
  // Generate individual language sitemaps
  console.log('\n📝 Generating language sitemaps...')
  let totalUrls = 0
  
  LANGUAGES.forEach(lang => {
    const sitemapContent = generateLanguageSitemap(lang)
    const sitemapPath = path.join(SITEMAPS_DIR, `sitemap-${lang}.xml`)
    fs.writeFileSync(sitemapPath, sitemapContent, 'utf8')
    
    // Count URLs (approximate)
    const urlCount = (sitemapContent.match(/<loc>/g) || []).length
    totalUrls += urlCount
    
    console.log(`✅ Created: sitemap-${lang}.xml (${urlCount} URLs)`)
  })
  
  console.log('\n✨ Sitemap generation complete!')
  console.log(`📊 Total: ${LANGUAGES.length} sitemaps, ${totalUrls} URLs`)
  console.log('\n📍 Files created:')
  console.log(`   - /public/sitemap.xml`)
  LANGUAGES.forEach(lang => {
    console.log(`   - /public/sitemaps/sitemap-${lang}.xml`)
  })
}

// Run the script
if (require.main === module) {
  main()
}

export { generateSitemapIndex, generateLanguageSitemap }
