import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import RangePage from '@/app/components/RangePage'
import NumberPage from '@/app/components/NumberPage'
import { Locale, topicSlugs, siteConfig, guides } from '@/lib/i18n-config'
import { getAbsoluteUrl, getAllRanges, getAllNumbers, getRangeFromNumber } from '@/lib/url-helpers'
import { generateHreflangMetadata } from '@/app/components/HreflangLinks'
import { numberTitles, numberDescriptions, numberSpecialProperties } from '@/lib/number-metadata'

// Import guide page components
import ForStudents from '@/app/ogrenciler-icin/page'
import ForTeachers from '@/app/ogretmenler-icin/page'
import ForParents from '@/app/veliler-icin/page'

interface PageProps {
  params: {
    lang: string
    topic: string
    slug: string
  }
}

// Range metadata configuration
const rangeMetadata: Record<string, {
  title: string
  description: string
  keywords: string
  level: 'beginner' | 'intermediate' | 'advanced'
  color: string
}> = {
  '1-10': {
    title: '1-10 Çarpım Tablosu | Başlangıç Seviyesi Tablolar',
    description: '1, 2, 3, 4, 5, 6, 7, 8, 9, 10 çarpım tablolarını öğrenin. Başlangıç seviyesi için kolay anlaşılır açıklamalar, görsel örnekler ve pratik alıştırmalar.',
    keywords: '1-10 çarpım tablosu, çarpım tablosu, çarpma işlemi, matematik öğrenme',
    level: 'beginner',
    color: 'from-blue-50 to-indigo-50',
  },
  '11-20': {
    title: '11-20 Çarpım Tablosu | Orta Seviye Tablolar',
    description: '11\'den 20\'ye kadar çarpım tablolarını öğrenin. Orta seviye öğrenciler için pratik stratejiler ve alıştırmalar.',
    keywords: '11-20 çarpım tablosu, orta seviye çarpma, matematik pratik',
    level: 'intermediate',
    color: 'from-indigo-50 to-purple-50',
  },
  '21-30': {
    title: '21-30 Çarpım Tablosu | Orta Seviye Tablolar',
    description: '21\'den 30\'a kadar çarpım tablolarını pratik edin. Daha büyük sayılarla çarpma becerilerinizi geliştirin.',
    keywords: '21-30 çarpım tablosu, ileri çarpma, matematik becerisi',
    level: 'intermediate',
    color: 'from-purple-50 to-pink-50',
  },
  '31-40': {
    title: '31-40 Çarpım Tablosu | Orta-İleri Seviye',
    description: '31\'den 40\'a kadar çarpım tablolarını öğrenin. İleri seviye çarpma alıştırmaları.',
    keywords: '31-40 çarpım tablosu, ileri matematik, çarpma pratik',
    level: 'intermediate',
    color: 'from-pink-50 to-rose-50',
  },
  '41-50': {
    title: '41-50 Çarpım Tablosu | İleri Seviye',
    description: '41\'den 50\'ye kadar çarpım tablolarını master edin. İleri seviye öğrenciler için zorlayıcı alıştırmalar.',
    keywords: '41-50 çarpım tablosu, ileri seviye matematik',
    level: 'intermediate',
    color: 'from-rose-50 to-orange-50',
  },
  '51-60': {
    title: '51-60 Çarpım Tablosu | İleri Seviye',
    description: '51\'den 60\'a kadar çarpım tablolarını pratik edin. Daha karmaşık çarpma işlemleri için stratejiler.',
    keywords: '51-60 çarpım tablosu, karmaşık çarpma',
    level: 'advanced',
    color: 'from-orange-50 to-amber-50',
  },
  '61-70': {
    title: '61-70 Çarpım Tablosu | İleri Seviye',
    description: '61\'den 70\'e kadar çarpım tablolarını öğrenin. Uzman seviyesi çarpma becerileri.',
    keywords: '61-70 çarpım tablosu, uzman matematik',
    level: 'advanced',
    color: 'from-amber-50 to-yellow-50',
  },
  '71-80': {
    title: '71-80 Çarpım Tablosu | İleri Seviye',
    description: '71\'den 80\'e kadar çarpım tablolarını master edin. En zorlu çarpma alıştırmaları.',
    keywords: '71-80 çarpım tablosu, zorlu matematik',
    level: 'advanced',
    color: 'from-yellow-50 to-lime-50',
  },
  '81-90': {
    title: '81-90 Çarpım Tablosu | İleri Seviye',
    description: '81\'den 90\'a kadar çarpım tablolarını pratik edin. Maksimum zorluk seviyesi.',
    keywords: '81-90 çarpım tablosu, maksimum zorluk',
    level: 'advanced',
    color: 'from-lime-50 to-emerald-50',
  },
  '91-100': {
    title: '91-100 Çarpım Tablosu | Uzman Seviyesi',
    description: '91\'den 100\'e kadar çarpım tablolarını tamamlayın. Çarpım tablosu ustası olun!',
    keywords: '91-100 çarpım tablosu, uzman seviyesi, çarpma ustası',
    level: 'advanced',
    color: 'from-emerald-50 to-teal-50',
  },
}

const guideMetadata: Record<string, {
  title: string
  description: string
  keywords: string
}> = {
  'ogrenciler-icin': {
    title: 'Öğrenciler İçin Çarpım Tablosu Rehberi | Adım Adım Öğrenme',
    description: 'Çarpım tablosunu kolayca öğrenmek için adım adım rehber. Görsel materyaller, pratik aktiviteler ve eğlenceli oyunlarla kendi hızında öğren!',
    keywords: 'çarpım tablosu öğrenme, matematik öğrenme, öğrenci rehberi, adım adım çarpım',
  },
  'ogretmenler-icin': {
    title: 'Öğretmenler İçin Çarpım Tablosu Rehberi | Sınıf Kaynakları',
    description: 'Çarpım tablosunu öğretmek için kapsamlı rehber. Ders planları, etkinlikler, değerlendirme araçları ve sınıf stratejileri.',
    keywords: 'çarpım tablosu öğretme, ders planı, matematik öğretimi, sınıf aktiviteleri',
  },
  'veliler-icin': {
    title: 'Veliler İçin Çarpım Tablosu Rehberi | Evde Destekleme',
    description: 'Çocuğunuzun çarpım tablosunu öğrenmesine nasıl destek olabilirsiniz? Pratik ipuçları, aktiviteler ve evde öğrenme stratejileri.',
    keywords: 'çarpım tablosu öğretme, ev ödevi yardımı, çocuk eğitimi, veli rehberi',
  },
}

const guideComponents: Record<string, any> = {
  'ogrenciler-icin': ForStudents,
  'ogretmenler-icin': ForTeachers,
  'veliler-icin': ForParents,
}

// Determine slug type
function getSlugType(slug: string): 'range' | 'number' | 'guide' | null {
  if (/^\d+-\d+$/.test(slug)) return 'range'
  if (/^\d+$/.test(slug)) return 'number'
  if (slug in guideMetadata) return 'guide'
  return null
}

export async function generateStaticParams() {
  const params: Array<{ lang: string; topic: string; slug: string }> = []
  
  const langs = [
    { lang: 'tr', topic: 'carpim-tablosu' },
    { lang: 'es', topic: 'tablas-de-multiplicar' },
    { lang: 'de', topic: 'einmaleins' },
  ]

  langs.forEach(({ lang, topic }) => {
    const locale = lang as Locale
    
    // Add ranges
    getAllRanges().forEach(range => {
      params.push({ lang, topic, slug: range })
    })
    
    // Add numbers
    getAllNumbers().forEach(number => {
      params.push({ lang, topic, slug: number })
    })
    
    // Add guides for this locale
    const localeGuides = guides[locale]
    Object.values(localeGuides).forEach(guide => {
      params.push({ lang, topic, slug: guide })
    })
  })

  return params
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, topic, slug } = await params
  
  if (!['tr', 'es', 'de'].includes(lang) || topic !== topicSlugs[lang as Locale]) {
    return {}
  }

  const locale = lang as Locale
  const config = siteConfig[locale]
  const slugType = getSlugType(slug)
  
  if (!slugType) {
    return {}
  }

  const hreflang = generateHreflangMetadata(slug)

  // Turkish metadata (production)
  if (locale === 'tr') {
    if (slugType === 'range') {
      const meta = rangeMetadata[slug]
      if (!meta) return {}
      
      return {
        metadataBase: new URL(config.domain),
        title: meta.title,
        description: meta.description,
        keywords: meta.keywords,
        alternates: {
          canonical: `/${lang}/${topic}/${slug}`,
          ...hreflang,
        },
        robots: {
          index: true,
          follow: true,
        },
      }
    }
    
    if (slugType === 'number') {
      const num = parseInt(slug, 10)
      return {
        metadataBase: new URL(config.domain),
        title: numberTitles[num] || `${num} Çarpım Tablosu`,
        description: numberDescriptions[num] || `${num} çarpım tablosunu öğrenin.`,
        alternates: {
          canonical: `/${lang}/${topic}/${slug}`,
          ...hreflang,
        },
        robots: {
          index: true,
          follow: true,
        },
      }
    }
    
    if (slugType === 'guide') {
      const meta = guideMetadata[slug]
      if (!meta) return {}
      
      return {
        metadataBase: new URL(config.domain),
        title: meta.title,
        description: meta.description,
        keywords: meta.keywords,
        alternates: {
          canonical: `/${lang}/${topic}/${slug}`,
          ...hreflang,
        },
        robots: {
          index: true,
          follow: true,
        },
      }
    }
  }

  // Placeholder for ES/DE
  return {
    metadataBase: new URL(config.domain),
    title: `${slug} - ${config.name}`,
    description: `Learn ${slug}`,
    alternates: {
      canonical: `/${lang}/${topic}/${slug}`,
      ...hreflang,
    },
    robots: {
      index: false,
      follow: true,
    },
  }
}

export default async function SlugPage({ params }: PageProps) {
  const { lang, topic, slug } = await params

  if (!['tr', 'es', 'de'].includes(lang) || topic !== topicSlugs[lang as Locale]) {
    notFound()
  }

  const locale = lang as Locale
  const slugType = getSlugType(slug)
  
  if (!slugType) {
    notFound()
  }

  // Turkish version (production-ready)
  if (locale === 'tr') {
    const baseUrl = siteConfig.tr.domain
    
    // RANGE PAGE
    if (slugType === 'range') {
      const meta = rangeMetadata[slug]
      if (!meta) notFound()
      
      const [start, end] = slug.split('-').map(Number)
      if (!start || !end || start > end) notFound()
      
      const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": `${baseUrl}/tr/carpim-tablosu/${slug}#webpage`,
            "url": `${baseUrl}/tr/carpim-tablosu/${slug}`,
            "name": `${slug} Çarpım Tablosu - ${meta.level === 'beginner' ? 'Başlangıç' : meta.level === 'intermediate' ? 'Orta' : 'İleri'} Seviyesi`,
            "description": meta.description,
            "isPartOf": {
              "@id": `${baseUrl}/#website`
            },
            "about": {
              "@id": `${baseUrl}/tr/carpim-tablosu/${slug}#learningresource`
            },
            "inLanguage": "tr-TR"
          },
          {
            "@type": "LearningResource",
            "@id": `${baseUrl}/tr/carpim-tablosu/${slug}#learningresource`,
            "name": `${slug} Çarpım Tablosu Öğrenme Kaynağı`,
            "description": meta.description,
            "educationalLevel": meta.level === 'beginner' ? 'Beginner' : meta.level === 'intermediate' ? 'Intermediate' : 'Advanced',
            "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
            "teaches": `${start}, ${start + 1}, ... ${end} çarpım tablolarını anlama ve uygulama becerileri`,
            "typicalAgeRange": meta.level === 'beginner' ? '6-8' : meta.level === 'intermediate' ? '7-10' : '9-12',
            "inLanguage": "tr-TR",
            "educationalUse": ["practice", "self-study", "homework"],
            "audience": {
              "@type": "EducationalAudience",
              "educationalRole": ["student"]
            },
            "hasPart": Array.from({ length: end - start + 1 }, (_, i) => ({
              "@type": "LearningResource",
              "name": `${start + i} Çarpım Tablosu`,
              "url": `${baseUrl}/tr/carpim-tablosu/${start + i}`
            }))
          }
        ]
      }

      const allRanges = getAllRanges()
      const currentIndex = allRanges.indexOf(slug)
      const nextRange = currentIndex < allRanges.length - 1 ? allRanges[currentIndex + 1] : undefined
      const prevRange = currentIndex > 0 ? allRanges[currentIndex - 1] : undefined

      return (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
          <RangePage
            rangeStart={start}
            rangeEnd={end}
            nextRangeUrl={nextRange ? `/tr/carpim-tablosu/${nextRange}` : undefined}
            prevRangeUrl={prevRange ? `/tr/carpim-tablosu/${prevRange}` : undefined}
            difficultyLevel={meta.level}
            difficultyColor={meta.color}
          />
        </>
      )
    }
    
    // NUMBER PAGE
    if (slugType === 'number') {
      const num = parseInt(slug, 10)
      if (isNaN(num) || num < 1 || num > 100) notFound()
      
      const range = getRangeFromNumber(num)
      const [rangeStart, rangeEnd] = range.split('-').map(Number)
      const specialProp = numberSpecialProperties[num] || `${num} ile Çarpma`

      const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": `${baseUrl}/tr/carpim-tablosu/${num}#webpage`,
            "url": `${baseUrl}/tr/carpim-tablosu/${num}`,
            "name": `${num} Çarpım Tablosu - ${specialProp}`,
            "description": numberDescriptions[num],
            "isPartOf": {
              "@id": `${baseUrl}/#website`
            },
            "about": {
              "@id": `${baseUrl}/tr/carpim-tablosu/${num}#learningresource`
            },
            "breadcrumb": {
              "@id": `${baseUrl}/tr/carpim-tablosu/${num}#breadcrumb`
            },
            "inLanguage": "tr-TR"
          },
          {
            "@type": "BreadcrumbList",
            "@id": `${baseUrl}/tr/carpim-tablosu/${num}#breadcrumb`,
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@id": `${baseUrl}/tr/carpim-tablosu`,
                  "name": "Ana Sayfa"
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@id": `${baseUrl}/tr/carpim-tablosu/${range}`,
                  "name": `${range} Çarpım Tablosu`
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@id": `${baseUrl}/tr/carpim-tablosu/${num}`,
                  "name": `${num} Çarpım Tablosu`
                }
              }
            ]
          },
          {
            "@type": "LearningResource",
            "@id": `${baseUrl}/tr/carpim-tablosu/${num}#learningresource`,
            "name": `${num} Çarpım Tablosu Öğrenme Kaynağı`,
            "description": numberDescriptions[num],
            "educationalLevel": rangeStart <= 10 ? "Beginner" : rangeStart <= 50 ? "Intermediate" : "Advanced",
            "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
            "teaches": `${num} çarpım tablosu, ${specialProp.toLowerCase()}, çarpmanın temel kavramları`,
            "typicalAgeRange": rangeStart <= 10 ? "6-8" : rangeStart <= 50 ? "7-10" : "9-12",
            "inLanguage": "tr-TR",
            "educationalUse": ["practice", "self-study"],
            "audience": {
              "@type": "EducationalAudience",
              "educationalRole": ["student"]
            },
            "isPartOf": {
              "@id": `${baseUrl}/tr/carpim-tablosu/${range}#learningresource`
            }
          }
        ]
      }

      return (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
          <NumberPage number={num} rangeStart={rangeStart} rangeEnd={rangeEnd} />
        </>
      )
    }
    
    // GUIDE PAGE
    if (slugType === 'guide') {
      const Component = guideComponents[slug]
      if (!Component) notFound()
      
      return <Component />
    }
  }

  // Placeholder for ES/DE
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          {slug} - {siteConfig[locale].name}
        </h1>
        <p className="text-slate-500">
          Content coming soon in {lang.toUpperCase()}...
        </p>
      </div>
    </main>
  )
}
