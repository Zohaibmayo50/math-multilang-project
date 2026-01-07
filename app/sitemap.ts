import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://carpimtablosu.com.tr'
  
  // Generate number pages (1-100)
  const numberPages = Array.from({ length: 100 }, (_, i) => ({
    url: `${baseUrl}/sayi/${i + 1}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  
  // Generate range pages
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
  
  // Guide pages
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
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...rangePages,
    ...guidePages,
    ...numberPages,
  ]
}
