import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Hero from '@/app/components/Hero'
import DefinitionSection from '@/app/components/DefinitionSection'
import WhyItMatters from '@/app/components/WhyItMatters'
import HowToLearn from '@/app/components/HowToLearn'
import LearningPaths from '@/app/components/LearningPaths'
import PracticePreview from '@/app/components/PracticePreview'
import GamesSection from '@/app/components/GamesSection'
import PrintableExercises from '@/app/components/PrintableExercises'
import AudienceSection from '@/app/components/AudienceSection'
import Footer from '@/app/components/Footer'
import HeroEs from '@/app/components/es/Hero'
import DefinitionSectionEs from '@/app/components/es/DefinitionSection'
import WhyItMattersEs from '@/app/components/es/WhyItMatters'
import HowToLearnEs from '@/app/components/es/HowToLearn'
import LearningPathsEs from '@/app/components/es/LearningPaths'
import PracticePreviewEs from '@/app/components/es/PracticePreview'
import GamesSectionEs from '@/app/components/es/GamesSection'
import PrintableExercisesEs from '@/app/components/es/PrintableExercises'
import AudienceSectionEs from '@/app/components/es/AudienceSection'
import FooterEs from '@/app/components/es/Footer'
import { Locale, topicSlugs, siteConfig } from '@/lib/i18n-config'
import { getAbsoluteUrl, getHreflangAlternates, generateHreflangMetadata } from '@/lib/url-helpers'

interface PageProps {
  params: {
    lang: string
    topic: string
  }
}

export async function generateStaticParams() {
  return [
    { lang: 'tr', topic: 'carpim-tablosu' },
    { lang: 'es', topic: 'tablas-de-multiplicar' },
    { lang: 'de', topic: 'einmaleins' },
  ]
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, topic } = await params
  
  // Validate params
  if (!['tr', 'es', 'de'].includes(lang) || topic !== topicSlugs[lang as Locale]) {
    return {}
  }

  const locale = lang as Locale
  const config = siteConfig[locale]
  const baseUrl = getAbsoluteUrl(locale)
  const hreflang = generateHreflangMetadata()

  // Turkish metadata (production)
  if (locale === 'tr') {
    return {
      metadataBase: new URL(config.domain),
      title: 'Çarpım Tablosu 1-100 | PDF Alıştırmaları ve İnteraktif Oyunlar',
      description: '1\'den 100\'e kadar çarpım tablolarını ücretsiz öğrenin. İnteraktif alıştırmalar, eğitici oyunlar ve PDF çalışma sayfalarıyla çocuklar için ideal matematik platformu.',
      keywords: 'çarpım tablosu, multiplication table, matematik, öğrenme, pratik, eğitim, pdf alıştırmaları',
      alternates: {
        canonical: `/${lang}/${topic}`,
        ...hreflang,
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
      openGraph: {
        title: 'Çarpım Tablosu – Öğren, Anla ve Pratik Yap',
        description: 'Çarpım tablosunu adım adım öğrenin, anlayın ve pratik yapın.',
        type: 'website',
        locale: 'tr_TR',
        url: baseUrl,
        siteName: config.name,
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Çarpım Tablosu – Öğren, Anla ve Pratik Yap',
        description: 'Çarpım tablosunu adım adım öğrenin, anlayın ve pratik yapın.',
      },
    }
  }

  // Spanish metadata (production)
  if (locale === 'es') {
    return {
      metadataBase: new URL(config.domain),
      title: 'Tablas de Multiplicar del 1 al 100 | Ejercicios PDF y Juegos Interactivos',
      description: 'Aprende las tablas de multiplicar del 1 al 100 gratis. Ejercicios interactivos, juegos educativos y hojas de trabajo en PDF para niños.',
      keywords: 'tablas de multiplicar, tabla de multiplicar, matemáticas, aprendizaje, práctica, educación, ejercicios pdf',
      alternates: {
        canonical: `/${lang}/${topic}`,
        ...hreflang,
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
      openGraph: {
        title: 'Tablas de Multiplicar – Aprende, Comprende y Practica',
        description: 'Aprende las tablas de multiplicar paso a paso.',
        type: 'website',
        locale: 'es_MX',
        url: baseUrl,
        siteName: config.name,
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Tablas de Multiplicar – Aprende, Comprende y Practica',
        description: 'Aprende las tablas de multiplicar paso a paso.',
      },
    }
  }

  // Placeholder metadata for DE
  return {
    metadataBase: new URL(config.domain),
    title: `${config.name} - Learn Multiplication Tables 1-100`,
    description: config.description,
    alternates: {
      canonical: `/${lang}/${topic}`,
      ...hreflang,
    },
    robots: {
      index: false, // Don't index placeholder pages yet
      follow: true,
    },
  }
}

export default async function TopicHomePage({ params }: PageProps) {
  const { lang, topic } = await params

  // Validate language and topic match
  if (!['tr', 'es', 'de'].includes(lang) || topic !== topicSlugs[lang as Locale]) {
    notFound()
  }

  const locale = lang as Locale

  // Turkish version (production-ready)
  if (locale === 'tr') {
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": `${siteConfig.tr.domain}/#website`,
          "url": `${siteConfig.tr.domain}/tr/carpim-tablosu/`,
          "name": "Çarpım Tablosu",
          "description": "1'den 100'e kadar çarpım tablolarını öğrenmek için interaktif eğitim platformu. Çocuklar için görsel öğrenme araçları, pratik alıştırmaları ve eğitici oyunlar.",
          "inLanguage": "tr-TR",
          "publisher": {
            "@id": `${siteConfig.tr.domain}/#organization`
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${siteConfig.tr.domain}/tr/carpim-tablosu/{search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@type": "WebPage",
          "@id": `${siteConfig.tr.domain}/tr/carpim-tablosu/#webpage`,
          "url": `${siteConfig.tr.domain}/tr/carpim-tablosu/`,
          "name": "Çarpım Tablosu - 1'den 100'e Kadar Tüm Tablolar",
          "description": "Çocuklar için interaktif çarpım tablosu öğrenme platformu. 1-100 arası tüm çarpım tablolarını pratik yaparak öğrenin. Görsel alıştırmalar, oyunlar ve yazdırılabilir çalışma sayfaları.",
          "isPartOf": {
            "@id": `${siteConfig.tr.domain}/#website`
          },
          "about": {
            "@id": `${siteConfig.tr.domain}/tr/carpim-tablosu/#learningresource`
          },
          "inLanguage": "tr-TR",
          "primaryImageOfPage": {
            "@type": "ImageObject",
            "url": `${siteConfig.tr.domain}/og-image.jpg`,
            "width": 1200,
            "height": 630
          }
        },
        {
          "@type": "EducationalOrganization",
          "@id": `${siteConfig.tr.domain}/#organization`,
          "name": "Çarpım Tablosu",
          "url": `${siteConfig.tr.domain}/tr/carpim-tablosu/`,
          "description": "İlkokul öğrencilerine çarpım tablolarını öğreten eğitim platformu",
          "areaServed": "TR",
          "availableLanguage": ["tr", "es", "de"]
        },
        {
          "@type": "LearningResource",
          "@id": `${siteConfig.tr.domain}/tr/carpim-tablosu/#learningresource`,
          "name": "Çarpım Tablosu Öğrenme Platformu",
          "description": "1'den 100'e kadar çarpım tablolarını öğrenmek için kapsamlı eğitim kaynağı. Her sayı için detaylı açıklamalar, desenler, pratik stratejileri ve interaktif alıştırmalar.",
          "educationalLevel": "Elementary",
          "learningResourceType": [
            "Interactive Resource",
            "Practice Material",
            "Educational Game",
            "Worksheet"
          ],
          "audience": {
            "@type": "EducationalAudience",
            "educationalRole": [
              "student",
              "parent",
              "teacher"
            ]
          },
          "inLanguage": "tr-TR",
          "educationalUse": [
            "practice",
            "self-study",
            "homework",
            "classroom activity"
          ],
          "keywords": [
            "çarpım tablosu",
            "matematik öğrenme",
            "ilkokul matematik",
            "çarpma işlemi",
            "çarpım tablosu ezberleme",
            "matematik pratik",
            "çarpma alıştırmaları",
            "çarpım tablosu oyunları"
          ],
          "teaches": "Çarpma işlemi ve çarpım tablolarını anlama, uygulama ve ezberleme becerileri",
          "typicalAgeRange": "6-12"
        }
      ]
    }

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <main className="min-h-screen">
          <Hero />
          <LearningPaths />
          <PracticePreview />
          <GamesSection />
          <PrintableExercises />
          <DefinitionSection />
          <WhyItMatters />
          <HowToLearn />
          <AudienceSection />
          <Footer />
        </main>
      </>
    )
  }

  // Spanish version (production-ready)
  if (locale === 'es') {
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": `${siteConfig.es.domain}/#website`,
          "url": `${siteConfig.es.domain}/es/tablas-de-multiplicar/`,
          "name": "Tablas de Multiplicar",
          "description": "Plataforma de educación interactiva para aprender las tablas de multiplicar del 1 al 100. Herramientas de aprendizaje visual para niños, ejercicios prácticos y juegos educativos.",
          "inLanguage": "es",
          "publisher": {
            "@id": `${siteConfig.es.domain}/#organization`
          }
        },
        {
          "@type": "WebPage",
          "@id": `${siteConfig.es.domain}/es/tablas-de-multiplicar/#webpage`,
          "url": `${siteConfig.es.domain}/es/tablas-de-multiplicar/`,
          "name": "Tablas de Multiplicar - Del 1 al 100 Todas las Tablas",
          "description": "Plataforma interactiva de aprendizaje de tablas de multiplicar para niños. Aprende todas las tablas de multiplicar del 1 al 100 practicando.",
          "isPartOf": {
            "@id": `${siteConfig.es.domain}/#website`
          },
          "about": {
            "@id": `${siteConfig.es.domain}/es/tablas-de-multiplicar/#learningresource`
          },
          "inLanguage": "es"
        },
        {
          "@type": "EducationalOrganization",
          "@id": `${siteConfig.es.domain}/#organization`,
          "name": "Tablas de Multiplicar",
          "url": `${siteConfig.es.domain}/es/tablas-de-multiplicar/`,
          "description": "Plataforma educativa que enseña las tablas de multiplicar a estudiantes de primaria",
          "areaServed": "Worldwide",
          "availableLanguage": ["es", "tr", "de"]
        },
        {
          "@type": "LearningResource",
          "@id": `${siteConfig.es.domain}/es/tablas-de-multiplicar/#learningresource`,
          "name": "Plataforma de Aprendizaje de Tablas de Multiplicar",
          "description": "Recurso educativo integral para aprender las tablas de multiplicar del 1 al 100.",
          "educationalLevel": "Elementary",
          "learningResourceType": [
            "Interactive Resource",
            "Practice Material",
            "Educational Game",
            "Worksheet"
          ],
          "audience": {
            "@type": "EducationalAudience",
            "educationalRole": [
              "student",
              "parent",
              "teacher"
            ]
          },
          "inLanguage": "es",
          "educationalUse": [
            "practice",
            "self-study",
            "homework",
            "classroom activity"
          ],
          "keywords": [
            "tablas de multiplicar",
            "aprendizaje de matemáticas",
            "matemáticas de primaria",
            "operación de multiplicación"
          ],
          "teaches": "Habilidades para comprender, aplicar y memorizar la operación de multiplicación y las tablas de multiplicar",
          "typicalAgeRange": "6-12"
        }
      ]
    }

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <main className="min-h-screen">
          <HeroEs />
          <LearningPathsEs />
          <PracticePreviewEs />
          <GamesSectionEs />
          <PrintableExercisesEs />
          <DefinitionSectionEs />
          <WhyItMattersEs />
          <HowToLearnEs />
          <AudienceSectionEs />
          <FooterEs />
        </main>
      </>
    )
  }

  // Placeholder for DE
  const config = siteConfig[locale]
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          {config.name}
        </h1>
        <p className="text-xl text-slate-600 mb-8">
          {config.description}
        </p>
        <p className="text-slate-500">
          Content coming soon in {lang.toUpperCase()}...
        </p>
      </div>
    </main>
  )
}
