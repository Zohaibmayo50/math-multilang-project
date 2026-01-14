import { MetadataRoute } from 'next'
import { i18n, topicSlugs, siteConfig, guides } from '@/lib/i18n-config'
import { getAllRanges, getAllNumbers } from '@/lib/url-helpers'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.tr.domain
  const sitemap: MetadataRoute.Sitemap = []

  // Root language selector page
  sitemap.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
  })

  // Generate pages for all languages
  i18n.locales.forEach(locale => {
    const topicSlug = topicSlugs[locale]
    const topicBase = `${baseUrl}/${locale}/${topicSlug}`

    // Topic homepage for each language
    sitemap.push({
      url: topicBase,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: locale === 'tr' ? 0.95 : 0.5, // Higher priority for Turkish
    })

    // Range pages
    const ranges = getAllRanges()
    ranges.forEach((range, index) => {
      sitemap.push({
        url: `${topicBase}/${range}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: locale === 'tr' ? (index === 0 ? 0.9 : 0.8) : 0.4,
      })
    })

    // Number pages (1-100)
    const numbers = getAllNumbers()
    numbers.forEach(number => {
      sitemap.push({
        url: `${topicBase}/${number}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: locale === 'tr' ? 0.7 : 0.3,
      })
    })

    // Guide pages
    const localeGuides = guides[locale]
    Object.values(localeGuides).forEach(guideSlug => {
      sitemap.push({
        url: `${topicBase}/${guideSlug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: locale === 'tr' ? 0.9 : 0.4,
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
