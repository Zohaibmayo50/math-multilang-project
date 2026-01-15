import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import RangePage from '@/app/components/RangePage'
import NumberPage from '@/app/components/NumberPage'
import RangePageEs from '@/app/components/es/RangePage'
import NumberPageEs from '@/app/components/es/NumberPage'
import { Locale, topicSlugs, siteConfig, guides } from '@/lib/i18n-config'
import { getAbsoluteUrl, getAllRanges, getAllNumbers, getRangeFromNumber, generateHreflangMetadata } from '@/lib/url-helpers'
import { numberTitles, numberDescriptions, numberSpecialProperties } from '@/lib/number-metadata'
import { numberTitlesEs, numberDescriptionsEs, numberSpecialPropertiesEs } from '@/lib/number-metadata-es'

// Import Turkish guide page components
import ForStudents from '@/app/ogrenciler-icin/page'
import ForTeachers from '@/app/ogretmenler-icin/page'
import ForParents from '@/app/veliler-icin/page'

// Import Spanish guide page components
import ForStudentsEs from '@/app/para-estudiantes/page'
import ForTeachersEs from '@/app/para-profesores/page'
import ForParentsEs from '@/app/para-padres/page'

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

// Spanish Range Metadata
const rangeMetadataEs: Record<string, {
  title: string
  description: string
  keywords: string
  level: 'beginner' | 'intermediate' | 'advanced'
  color: string
}> = {
  '1-10': {
    title: 'Tablas de Multiplicar del 1 al 10 | Nivel Principiante',
    description: 'Aprende las tablas de multiplicar del 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Explicaciones fáciles para nivel principiante, ejemplos visuales y ejercicios prácticos.',
    keywords: 'tablas de multiplicar del 1 al 10, tablas de multiplicar, multiplicación, aprendizaje de matemáticas',
    level: 'beginner',
    color: 'from-blue-50 to-indigo-50',
  },
  '11-20': {
    title: 'Tablas de Multiplicar del 11 al 20 | Números de Dos Dígitos',
    description: 'Aprende las tablas de multiplicar del 11, 12, 13, 14, 15, 16, 17, 18, 19, 20. Domina las operaciones de multiplicación con números de dos dígitos.',
    keywords: 'tablas de multiplicar del 11 al 20, tablas de multiplicar, multiplicación, aprendizaje de matemáticas',
    level: 'intermediate',
    color: 'from-indigo-50 to-purple-50',
  },
  '21-30': {
    title: 'Tablas de Multiplicar del 21 al 30 | Nivel Intermedio',
    description: 'Aprende las tablas de multiplicar del 21 al 30. Explicaciones detalladas y ejercicios prácticos para estudiantes de nivel intermedio.',
    keywords: 'tablas de multiplicar del 21 al 30, tablas de multiplicar, multiplicación, aprendizaje de matemáticas',
    level: 'intermediate',
    color: 'from-purple-50 to-pink-50',
  },
  '31-40': {
    title: 'Tablas de Multiplicar del 31 al 40 | Multiplicación Avanzada',
    description: 'Aprende las tablas de multiplicar del 31, 32, 33, 34, 35, 36, 37, 38, 39, 40. Materiales educativos completos para habilidades de multiplicación avanzadas.',
    keywords: 'tablas de multiplicar del 31 al 40, tablas de multiplicar, multiplicación, aprendizaje de matemáticas',
    level: 'intermediate',
    color: 'from-pink-50 to-rose-50',
  },
  '41-50': {
    title: 'Tablas de Multiplicar del 41 al 50 | Nivel Intermedio-Avanzado',
    description: 'Aprende las tablas de multiplicar del 41 al 50. Ejercicios interactivos para dominar la multiplicación con números grandes.',
    keywords: 'tablas de multiplicar del 41 al 50, tablas de multiplicar, multiplicación, aprendizaje de matemáticas',
    level: 'intermediate',
    color: 'from-rose-50 to-orange-50',
  },
  '51-60': {
    title: 'Tablas de Multiplicar del 51 al 60 | Nivel Avanzado',
    description: 'Aprende las tablas de multiplicar del 51, 52, 53, 54, 55, 56, 57, 58, 59, 60. Materiales de estudio detallados para estudiantes de nivel avanzado.',
    keywords: 'tablas de multiplicar del 51 al 60, tablas de multiplicar, multiplicación, aprendizaje de matemáticas',
    level: 'advanced',
    color: 'from-orange-50 to-amber-50',
  },
  '61-70': {
    title: 'Tablas de Multiplicar del 61 al 70 | Números Altos',
    description: 'Aprende las tablas de multiplicar del 61 al 70. Recursos educativos completos para multiplicación con números altos.',
    keywords: 'tablas de multiplicar del 61 al 70, tablas de multiplicar, multiplicación, aprendizaje de matemáticas',
    level: 'advanced',
    color: 'from-amber-50 to-yellow-50',
  },
  '71-80': {
    title: 'Tabla del 71 al 80 | Multiplicación Nivel Avanzado',
    description: 'Aprende las tablas de multiplicar del 71, 72, 73, 74, 75, 76, 77, 78, 79, 80. Desarrolla habilidades matemáticas de nivel avanzado.',
    keywords: 'tablas de multiplicar del 71 al 80, tablas de multiplicar, multiplicación, aprender matemáticas',
    level: 'advanced',
    color: 'from-yellow-50 to-lime-50',
  },
  '81-90': {
    title: 'Tabla del 81 al 90 | Nivel Experto',
    description: 'Aprende las tablas de multiplicar del 81 al 90. Operaciones de multiplicación desafiantes y estrategias para estudiantes de nivel experto.',
    keywords: 'tablas de multiplicar del 81 al 90, tablas de multiplicar, multiplicación, aprender matemáticas',
    level: 'advanced',
    color: 'from-lime-50 to-emerald-50',
  },
  '91-100': {
    title: 'Tablas de Multiplicar del 91 al 100 | Nivel Más Alto',
    description: 'Aprende las tablas de multiplicar del 91, 92, 93, 94, 95, 96, 97, 98, 99, 100. Educación completa para habilidades de multiplicación de nivel más alto.',
    keywords: 'tablas de multiplicar del 91 al 100, tablas de multiplicar, multiplicación, aprendizaje de matemáticas',
    level: 'advanced',
    color: 'from-emerald-50 to-teal-50',
  },
}

// Spanish Guide Metadata
const guideMetadataEs: Record<string, {
  title: string
  description: string
  keywords: string
}> = {
  'para-estudiantes': {
    title: 'Guía de Tablas de Multiplicar para Estudiantes | Aprende Paso a Paso',
    description: 'Guía paso a paso para aprender tablas de multiplicar fácilmente. Materiales visuales, actividades prácticas y juegos divertidos para aprender a tu ritmo.',
    keywords: 'aprender tablas de multiplicar, matemáticas para estudiantes, guía de tablas, multiplicación paso a paso',
  },
  'para-profesores': {
    title: 'Guía de Tablas de Multiplicar para Profesores | Estrategias de Enseñanza',
    description: 'Recursos completos para profesores sobre cómo enseñar tablas de multiplicar de manera efectiva. Incluye estrategias pedagógicas, actividades de aula, instrucción diferenciada y métodos de evaluación.',
    keywords: 'enseñar tablas de multiplicar, estrategias pedagógicas, actividades de matemáticas, instrucción diferenciada, recursos para profesores',
  },
  'para-padres': {
    title: 'Guía de Tablas de Multiplicar para Padres | Apoya el Aprendizaje en Casa',
    description: 'Cómo ayudar a tu hijo a aprender tablas de multiplicar en casa. Consejos prácticos, juegos educativos y estrategias de motivación.',
    keywords: 'ayudar a niños con tablas de multiplicar, matemáticas en casa, educación para padres, actividades educativas',
  },
}

const guideComponents: Record<string, any> = {
  'ogrenciler-icin': ForStudents,
  'ogretmenler-icin': ForTeachers,
  'veliler-icin': ForParents,
  'para-estudiantes': ForStudentsEs,
  'para-profesores': ForTeachersEs,
  'para-padres': ForParentsEs,
}

// Determine slug type
function getSlugType(slug: string, locale: Locale): 'range' | 'number' | 'guide' | null {
  if (/^\d+-\d+$/.test(slug)) return 'range'
  if (/^\d+$/.test(slug)) return 'number'
  // Check against locale-specific guide metadata
  if (locale === 'tr' && slug in guideMetadata) return 'guide'
  if (locale === 'es' && slug in guideMetadataEs) return 'guide'
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
  const slugType = getSlugType(slug, locale)
  
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

  // Spanish metadata (production)
  if (locale === 'es') {
    if (slugType === 'range') {
      const meta = rangeMetadataEs[slug]
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
        title: numberTitlesEs[num] || `Tabla del ${num}`,
        description: numberDescriptionsEs[num] || `Aprende la tabla del ${num}.`,
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
      const meta = guideMetadataEs[slug]
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

  // Placeholder for DE
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
  const { lang, topic, slug} = await params

  if (!['tr', 'es', 'de'].includes(lang) || topic !== topicSlugs[lang as Locale]) {
    notFound()
  }

  const locale = lang as Locale
  const slugType = getSlugType(slug, locale)
  
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

  // Spanish version (production-ready)
  if (locale === 'es') {
    const baseUrl = siteConfig.es.domain
    
    // RANGE PAGE
    if (slugType === 'range') {
      const meta = rangeMetadataEs[slug]
      if (!meta) notFound()
      
      const [start, end] = slug.split('-').map(Number)
      if (!start || !end || start > end) notFound()
      
      const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": `${baseUrl}/es/tablas-de-multiplicar/${slug}#webpage`,
            "url": `${baseUrl}/es/tablas-de-multiplicar/${slug}`,
            "name": `Tablas de Multiplicar del ${slug} - ${meta.level === 'beginner' ? 'Nivel Principiante' : meta.level === 'intermediate' ? 'Nivel Intermedio' : 'Nivel Avanzado'}`,
            "description": meta.description,
            "isPartOf": {
              "@id": `${baseUrl}/#website`
            },
            "about": {
              "@id": `${baseUrl}/es/tablas-de-multiplicar/${slug}#learningresource`
            },
            "inLanguage": "es-ES"
          },
          {
            "@type": "LearningResource",
            "@id": `${baseUrl}/es/tablas-de-multiplicar/${slug}#learningresource`,
            "name": `Recurso de Aprendizaje Tablas de Multiplicar del ${slug}`,
            "description": meta.description,
            "educationalLevel": meta.level === 'beginner' ? 'Beginner' : meta.level === 'intermediate' ? 'Intermediate' : 'Advanced',
            "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
            "teaches": `Habilidades para comprender y aplicar tablas de multiplicar del ${start}, ${start + 1}, ... ${end}`,
            "typicalAgeRange": meta.level === 'beginner' ? '6-8' : meta.level === 'intermediate' ? '7-10' : '9-12',
            "inLanguage": "es-ES",
            "educationalUse": ["practice", "self-study", "homework"],
            "audience": {
              "@type": "EducationalAudience",
              "educationalRole": ["student"]
            },
            "hasPart": Array.from({ length: end - start + 1 }, (_, i) => ({
              "@type": "LearningResource",
              "name": `Tabla de Multiplicar del ${start + i}`,
              "url": `${baseUrl}/es/tablas-de-multiplicar/${start + i}`
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
          <RangePageEs
            rangeStart={start}
            rangeEnd={end}
            nextRangeUrl={nextRange ? `/es/tablas-de-multiplicar/${nextRange}` : undefined}
            prevRangeUrl={prevRange ? `/es/tablas-de-multiplicar/${prevRange}` : undefined}
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
      const specialProp = numberSpecialPropertiesEs[num] || `Multiplicación con ${num}`

      const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": `${baseUrl}/es/tablas-de-multiplicar/${num}#webpage`,
            "url": `${baseUrl}/es/tablas-de-multiplicar/${num}`,
            "name": `Tabla de Multiplicar del ${num} - ${specialProp}`,
            "description": numberDescriptionsEs[num],
            "isPartOf": {
              "@id": `${baseUrl}/#website`
            },
            "about": {
              "@id": `${baseUrl}/es/tablas-de-multiplicar/${num}#learningresource`
            },
            "breadcrumb": {
              "@id": `${baseUrl}/es/tablas-de-multiplicar/${num}#breadcrumb`
            },
            "inLanguage": "es-ES"
          },
          {
            "@type": "BreadcrumbList",
            "@id": `${baseUrl}/es/tablas-de-multiplicar/${num}#breadcrumb`,
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@id": `${baseUrl}/es/tablas-de-multiplicar`,
                  "name": "Inicio"
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@id": `${baseUrl}/es/tablas-de-multiplicar/${range}`,
                  "name": `Tablas de Multiplicar del ${range}`
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@id": `${baseUrl}/es/tablas-de-multiplicar/${num}`,
                  "name": `Tabla de Multiplicar del ${num}`
                }
              }
            ]
          },
          {
            "@type": "LearningResource",
            "@id": `${baseUrl}/es/tablas-de-multiplicar/${num}#learningresource`,
            "name": `Recurso de Aprendizaje Tabla de Multiplicar del ${num}`,
            "description": numberDescriptionsEs[num],
            "educationalLevel": rangeStart <= 10 ? "Beginner" : rangeStart <= 50 ? "Intermediate" : "Advanced",
            "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
            "teaches": `Tabla de multiplicar del ${num}, ${specialProp.toLowerCase()}, conceptos básicos de multiplicación`,
            "typicalAgeRange": rangeStart <= 10 ? "6-8" : rangeStart <= 50 ? "7-10" : "9-12",
            "inLanguage": "es-ES",
            "educationalUse": ["practice", "self-study"],
            "audience": {
              "@type": "EducationalAudience",
              "educationalRole": ["student"]
            },
            "isPartOf": {
              "@id": `${baseUrl}/es/tablas-de-multiplicar/${range}#learningresource`
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
          <NumberPageEs number={num} rangeStart={rangeStart} rangeEnd={rangeEnd} />
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

  // Placeholder for DE
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
