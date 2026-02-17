#!/usr/bin/env node
/**
 * Sitemap Generator for Mathematives.com (JavaScript version)
 * 
 * Generates:
 * - /public/sitemap.xml (sitemap index)
 * - /public/sitemaps/sitemap-{lang}.xml (one per language)
 * 
 * Each URL includes hreflang alternates for all languages.
 * Run: node scripts/generate-sitemaps.js
 */

const fs = require('fs')
const path = require('path')

// ============================================================================
// CONFIGURATION
// ============================================================================

const BASE_URL = 'https://mathematives.com'

const LANGUAGES = ['tr', 'es', 'de', 'cs', 'uk', 'fi', 'fr', 'sv', 'pt', 'en', 'pl', 'id']

const TOPIC_SLUGS = {
  tr: 'carpim-tablosu',
  es: 'tablas-de-multiplicar',
  cs: 'nasobilka',
  de: 'einmaleins',
  uk: 'tablycya-mnozhennya',
  fi: 'kertotaulut',
  fr: 'table-de-multiplication',
  sv: 'multiplikationstabeller',
  pt: 'tabuada',
  en: 'multiplication-tables',
  pl: 'tabliczki-mnozenia',
  id: 'tabel-perkalian',
}

const GUIDES = {
  tr: { students: 'ogrenciler-icin', teachers: 'ogretmenler-icin', parents: 'veliler-icin' },
  es: { students: 'para-estudiantes', teachers: 'para-profesores', parents: 'para-padres' },
  cs: { students: 'pro-studenty', teachers: 'pro-ucitele', parents: 'pro-rodice' },
  de: { students: 'fuer-schueler', teachers: 'fuer-lehrer', parents: 'fuer-eltern' },
  uk: { students: 'dlya-uchniv', teachers: 'dlya-vchyteliv', parents: 'dlya-batkiv' },
  fi: { students: 'oppilaille', teachers: 'opettajille', parents: 'vanhemmille' },
  fr: { students: 'pour-les-eleves', teachers: 'pour-les-enseignants', parents: 'pour-les-parents' },
  sv: { students: 'for-elever', teachers: 'for-larare', parents: 'for-foraldrar' },
  pt: { students: 'para-estudantes', teachers: 'para-professores', parents: 'para-pais' },
  en: { students: 'for-students', teachers: 'for-teachers', parents: 'for-parents' },
  pl: { students: 'dla-uczniow', teachers: 'dla-nauczycieli', parents: 'dla-rodzicow' },
  id: { students: 'untuk-siswa', teachers: 'untuk-guru', parents: 'untuk-orang-tua' },
}

const OUTPUT_DIR = path.join(process.cwd(), 'public')
const SITEMAPS_DIR = path.join(OUTPUT_DIR, 'sitemaps')

// Priority rules
const PRIORITIES = {
  root: 1.0,
  langHub: 0.9,
  topicHome: 1.0,
  range: 0.8,
  number: 0.7,
  guide: 0.6,
}

// Change frequency
const FREQUENCIES = {
  root: 'weekly',
  langHub: 'monthly',
  topicHome: 'weekly',
  range: 'monthly',
  number: 'monthly',
  guide: 'monthly',
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function getCurrentDate() {
  return new Date().toISOString().split('T')[0]
}

function getAllRanges() {
  return ['1-10', '11-20', '21-30', '31-40', '41-50', '51-60', '61-70', '71-80', '81-90', '91-100']
}

function getAllNumbers() {
  return Array.from({ length: 100 }, (_, i) => `${i + 1}`)
}

function generateHreflangAlternates(pathFn) {
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

function createUrlEntry(url, priority, changeFreq, pathFn) {
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

function generateLanguageUrls(locale) {
  const topicSlug = TOPIC_SLUGS[locale]
  const ranges = getAllRanges()
  const numbers = getAllNumbers()
  const localeGuides = GUIDES[locale]
  
  const urls = []
  
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
    pathFn: (l) => `${BASE_URL}/${l}/${TOPIC_SLUGS[l]}`,
  })
  
  // 3. Range pages
  ranges.forEach(range => {
    urls.push({
      url: `${BASE_URL}/${locale}/${topicSlug}/${range}`,
      priority: PRIORITIES.range,
      changeFreq: FREQUENCIES.range,
      pathFn: (l) => `${BASE_URL}/${l}/${TOPIC_SLUGS[l]}/${range}`,
    })
  })
  
  // 4. Number pages (1-100)
  numbers.forEach(number => {
    urls.push({
      url: `${BASE_URL}/${locale}/${topicSlug}/${number}`,
      priority: PRIORITIES.number,
      changeFreq: FREQUENCIES.number,
      pathFn: (l) => `${BASE_URL}/${l}/${TOPIC_SLUGS[l]}/${number}`,
    })
  })
  
  // 5. Guide pages
  Object.entries(localeGuides).forEach(([guideType, guideSlug]) => {
    urls.push({
      url: `${BASE_URL}/${locale}/${topicSlug}/${guideSlug}`,
      priority: PRIORITIES.guide,
      changeFreq: FREQUENCIES.guide,
      pathFn: (l) => `${BASE_URL}/${l}/${TOPIC_SLUGS[l]}/${GUIDES[l][guideType]}`,
    })
  })
  
  // Generate XML for each URL
  return urls.map(({ url, priority, changeFreq, pathFn }) =>
    createUrlEntry(url, priority, changeFreq, pathFn)
  )
}

function generateLanguageSitemap(locale) {
  const urlEntries = generateLanguageUrls(locale)
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries.join('')}</urlset>`
}

function generateSitemapIndex() {
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
    
    // Count URLs
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

module.exports = { generateSitemapIndex, generateLanguageSitemap }
