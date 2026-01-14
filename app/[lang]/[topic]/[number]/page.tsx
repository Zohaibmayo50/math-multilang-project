import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import NumberPage from '@/app/components/NumberPage'
import { Locale, topicSlugs, siteConfig } from '@/lib/i18n-config'
import { getAbsoluteUrl, getAllNumbers, getRangeFromNumber } from '@/lib/url-helpers'
import { generateHreflangMetadata } from '@/app/components/HreflangLinks'
import { numberTitles, numberDescriptions, numberSpecialProperties } from '@/lib/number-metadata'

interface PageProps {
  params: {
    lang: string
    topic: string
    number: string
  }
}

export async function generateStaticParams() {
  const numbers = getAllNumbers()
  const params: Array<{ lang: string; topic: string; number: string }> = []
  
  const langs = [
    { lang: 'tr', topic: 'carpim-tablosu' },
    { lang: 'es', topic: 'tablas-de-multiplicar' },
    { lang: 'de', topic: 'einmaleins' },
  ]

  langs.forEach(({ lang, topic }) => {
    numbers.forEach(number => {
      params.push({ lang, topic, number })
    })
  })

  return params
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, topic, number } = params
  
  if (!['tr', 'es', 'de'].includes(lang) || topic !== topicSlugs[lang as Locale]) {
    return {}
  }

  const num = parseInt(number, 10)
  if (isNaN(num) || num < 1 || num > 100) {
    return {}
  }

  const locale = lang as Locale
  const config = siteConfig[locale]
  const hreflang = generateHreflangMetadata(number)

  // Turkish metadata (production)
  if (locale === 'tr') {
    return {
      metadataBase: new URL(config.domain),
      title: numberTitles[num] || `${num} Çarpım Tablosu`,
      description: numberDescriptions[num] || `${num} çarpım tablosunu öğrenin.`,
      alternates: {
        canonical: `/${lang}/${topic}/${number}`,
        ...hreflang,
      },
      robots: {
        index: true,
        follow: true,
      },
    }
  }

  // Placeholder for ES/DE
  return {
    metadataBase: new URL(config.domain),
    title: `${number} - ${config.name}`,
    description: `Learn the ${number} multiplication table`,
    alternates: {
      canonical: `/${lang}/${topic}/${number}`,
      ...hreflang,
    },
    robots: {
      index: false,
      follow: true,
    },
  }
}

export default function NumberPageRoute({ params }: PageProps) {
  const { lang, topic, number } = params

  if (!['tr', 'es', 'de'].includes(lang) || topic !== topicSlugs[lang as Locale]) {
    notFound()
  }

  const num = parseInt(number, 10)
  if (isNaN(num) || num < 1 || num > 100) {
    notFound()
  }

  const locale = lang as Locale
  const range = getRangeFromNumber(num)
  const [rangeStart, rangeEnd] = range.split('-').map(Number)

  // Turkish version (production-ready)
  if (locale === 'tr') {
    const baseUrl = siteConfig.tr.domain
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

  // Placeholder for ES/DE
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          {num} - {siteConfig[locale].name}
        </h1>
        <p className="text-slate-500">
          Content coming soon in {lang.toUpperCase()}...
        </p>
      </div>
    </main>
  )
}
