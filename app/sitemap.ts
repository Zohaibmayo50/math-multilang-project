import { MetadataRoute } from 'next'
import { i18n, topicSlugs, siteConfig, guides } from '@/lib/i18n-config'
import { getAllRanges, getAllNumbers } from '@/lib/url-helpers'

// Date each group of pages was last meaningfully updated with new content.
// Update the relevant entry when that group's content actually changes —
// this is what tells Google the page genuinely deserves recrawling.
const CONTENT_LAST_UPDATED: Record<string, string> = {
  homepage: '2026-07-21',
  languageHubs: '2026-07-21',
  topicHubs: '2026-07-21',
  rangePages: '2026-07-21',
  audiencePages: '2026-07-21',
  numberPages_1_12: '2026-07-21',
  numberPages_13_100: '2026-07-21',
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.tr.domain
  const sitemap: MetadataRoute.Sitemap = []

  // Root language selector page
  sitemap.push({
    url: baseUrl,
    lastModified: CONTENT_LAST_UPDATED.homepage,
    changeFrequency: 'weekly',
    priority: 1.0,
  })

  // Generate pages for all languages
  i18n.locales.forEach(locale => {
    const topicSlug = topicSlugs[locale]
    const topicBase = `${baseUrl}/${locale}/${topicSlug}`

    // Language hub page
    sitemap.push({
      url: `${baseUrl}/${locale}`,
      lastModified: CONTENT_LAST_UPDATED.languageHubs,
      changeFrequency: 'weekly',
      priority: 0.8,
    })

    // Topic homepage for each language
    sitemap.push({
      url: topicBase,
      lastModified: CONTENT_LAST_UPDATED.topicHubs,
      changeFrequency: 'weekly',
      priority: 0.8,
    })

    // Range pages
    const ranges = getAllRanges()
    ranges.forEach(range => {
      sitemap.push({
        url: `${topicBase}/${range}`,
        lastModified: CONTENT_LAST_UPDATED.rangePages,
        changeFrequency: 'monthly',
        priority: 0.6,
      })
    })

    // Number pages 1-12 (standard school times tables — treated as primary content)
    const numbers = getAllNumbers()
    numbers.forEach(number => {
      const isCoreTable = Number(number) <= 12
      sitemap.push({
        url: `${topicBase}/${number}`,
        lastModified: isCoreTable
          ? CONTENT_LAST_UPDATED.numberPages_1_12
          : CONTENT_LAST_UPDATED.numberPages_13_100,
        changeFrequency: 'monthly',
        priority: isCoreTable ? 0.5 : 0.4,
      })
    })

    // Guide pages (audience pages: students/teachers/parents)
    const localeGuides = guides[locale]
    Object.values(localeGuides).forEach(guideSlug => {
      sitemap.push({
        url: `${topicBase}/${guideSlug}`,
        lastModified: CONTENT_LAST_UPDATED.audiencePages,
        changeFrequency: 'monthly',
        priority: 0.6,
      })
    })
  })

  return sitemap
}

// Legacy sitemap for old URLs (will be deprecated)
export function legacySitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.tr.domain

  // Generate number pages (1-100) - old structure
  const numberPages = Array.from({ length: 100 }, (_, i) => ({
    url: `${baseUrl}/sayi/${i + 1}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Generate range pages - old structure
  const rangePages = [
    { url: `${baseUrl}/1-10`, priority: 0.9 },
    { url: `${baseUrl}/11-20`, priority: 0.8 },
    { url: `${baseUrl}/21-30`, priority: 0.8 },
    { url: `${baseUrl}/31-40`, priority: 0.8 },
    { url: `${baseUrl}/41-50`, priority: 0.8 },
    { url: `${baseUrl}/51-60`, priority: 0.8 },
    { url: `${baseUrl}/61-70`, priority: 0.8 },
    { url: `${baseUrl}/71-80`, priority: 0.8 },
    { url: `${baseUrl}/81-90`, priority: 0.8 },
    { url: `${baseUrl}/91-100`, priority: 0.8 },
  ].map(page => ({
    ...page,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
  }))

  // Guide pages - old structure
  const guidePages = [
    { url: `${baseUrl}/ogrenciler-icin`, priority: 0.9 },
    { url: `${baseUrl}/veliler-icin`, priority: 0.9 },
    { url: `${baseUrl}/ogretmenler-icin`, priority: 0.9 },
  ].map(page => ({
    ...page,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
  }))

  return [
    ...rangePages,
    ...guidePages,
    ...numberPages,
  ]
}
