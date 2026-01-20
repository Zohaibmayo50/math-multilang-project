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
import HeroDe from '@/app/components/de/Hero'
import DefinitionSectionDe from '@/app/components/de/DefinitionSection'
import WhyItMattersDe from '@/app/components/de/WhyItMatters'
import HowToLearnDe from '@/app/components/de/HowToLearn'
import LearningPathsDe from '@/app/components/de/LearningPaths'
import PracticePreviewDe from '@/app/components/de/PracticePreview'
import GamesSectionDe from '@/app/components/de/GamesSection'
import PrintableExercisesDe from '@/app/components/de/PrintableExercises'
import AudienceSectionDe from '@/app/components/de/AudienceSection'
import FooterDe from '@/app/components/de/Footer'
import HeroCs from '@/app/components/cs/Hero'
import DefinitionSectionCs from '@/app/components/cs/DefinitionSection'
import WhyItMattersCs from '@/app/components/cs/WhyItMatters'
import HowToLearnCs from '@/app/components/cs/HowToLearn'
import LearningPathsCs from '@/app/components/cs/LearningPaths'
import PracticePreviewCs from '@/app/components/cs/PracticePreview'
import GamesSectionCs from '@/app/components/cs/GamesSection'
import PrintableExercisesCs from '@/app/components/cs/PrintableExercises'
import AudienceSectionCs from '@/app/components/cs/AudienceSection'
import FooterCs from '@/app/components/cs/Footer'
import HeroUk from '@/app/components/uk/Hero'
import DefinitionSectionUk from '@/app/components/uk/DefinitionSection'
import WhyItMattersUk from '@/app/components/uk/WhyItMatters'
import HowToLearnUk from '@/app/components/uk/HowToLearn'
import LearningPathsUk from '@/app/components/uk/LearningPaths'
import PracticePreviewUk from '@/app/components/uk/PracticePreview'
import GamesSectionUk from '@/app/components/uk/GamesSection'
import PrintableExercisesUk from '@/app/components/uk/PrintableExercises'
import AudienceSectionUk from '@/app/components/uk/AudienceSection'
import FooterUk from '@/app/components/uk/Footer'
import HeroFi from '@/app/components/fi/Hero'
import DefinitionSectionFi from '@/app/components/fi/DefinitionSection'
import WhyItMattersFi from '@/app/components/fi/WhyItMatters'
import HowToLearnFi from '@/app/components/fi/HowToLearn'
import LearningPathsFi from '@/app/components/fi/LearningPaths'
import PracticePreviewFi from '@/app/components/fi/PracticePreview'
import GamesSectionFi from '@/app/components/fi/GamesSection'
import PrintableExercisesFi from '@/app/components/fi/PrintableExercises'
import AudienceSectionFi from '@/app/components/fi/AudienceSection'
import FooterFi from '@/app/components/fi/Footer'
import HeroFr from '@/app/components/fr/Hero'
import DefinitionSectionFr from '@/app/components/fr/DefinitionSection'
import WhyItMattersFr from '@/app/components/fr/WhyItMatters'
import HowToLearnFr from '@/app/components/fr/HowToLearn'
import LearningPathsFr from '@/app/components/fr/LearningPaths'
import PracticePreviewFr from '@/app/components/fr/PracticePreview'
import GamesSectionFr from '@/app/components/fr/GamesSection'
import PrintableExercisesFr from '@/app/components/fr/PrintableExercises'
import AudienceSectionFr from '@/app/components/fr/AudienceSection'
import FooterFr from '@/app/components/fr/Footer'
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
    { lang: 'cs', topic: 'nasobilka' },
    { lang: 'uk', topic: 'tablycya-mnozhennya' },
    { lang: 'fi', topic: 'kertotaulut' },
    { lang: 'fr', topic: 'table-de-multiplication' },
  ]
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, topic } = await params
  
  // Validate params
  if (!['tr', 'es', 'de', 'cs', 'uk', 'fi', 'fr'].includes(lang) || topic !== topicSlugs[lang as Locale]) {
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

  // German metadata (production)
  if (locale === 'de') {
    return {
      metadataBase: new URL(config.domain),
      title: 'Einmaleins 1-100 | PDF-Übungen und Interaktive Spiele',
      description: 'Lerne das Einmaleins von 1 bis 100 kostenlos. Interaktive Übungen, Lernspiele und druckbare Arbeitsblätter für Kinder.',
      keywords: 'einmaleins, einmaleins-tabellen, multiplikation, mathematik, lernen, übung, bildung, pdf übungen',
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
        title: 'Einmaleins – Lernen, Verstehen und Üben',
        description: 'Lerne das Einmaleins Schritt für Schritt.',
        type: 'website',
        locale: 'de_DE',
        url: baseUrl,
        siteName: config.name,
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Einmaleins – Lernen, Verstehen und Üben',
        description: 'Lerne das Einmaleins Schritt für Schritt.',
      },
    }
  }

  // Czech metadata (production)
  if (locale === 'cs') {
    return {
      metadataBase: new URL(config.domain),
      title: 'Násobilka 1-100 | PDF Cvičení a Interaktivní Hry',
      description: 'Naučte se násobilku od 1 do 100 zdarma. Interaktivní cvičení, vzdělávací hry a PDF pracovní listy - ideální platforma matematiky pro děti.',
      keywords: 'násobilka, multiplication table, matematika, učení, cvičení, vzdělávání, pdf cvičení',
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
        title: 'Násobilka – Učit se, Rozumět a Cvičit',
        description: 'Naučte se násobilku krok za krokem.',
        type: 'website',
        locale: 'cs_CZ',
        url: baseUrl,
        siteName: config.name,
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Násobilka – Učit se, Rozumět a Cvičit',
        description: 'Naučte se násobilku krok za krokem.',
      },
    }
  }

  // Ukrainian metadata (production)
  if (locale === 'uk') {
    return {
      metadataBase: new URL(config.domain),
      title: 'Таблиця множення 1-100 | PDF Вправи та Інтерактивні Ігри',
      description: 'Вивчіть таблицю множення від 1 до 100 безкоштовно. Інтерактивні вправи, освітні ігри та PDF робочі аркуші - ідеальна математична платформа для дітей.',
      keywords: 'таблиця множення, multiplication table, математика, навчання, практика, освіта, pdf вправи',
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
        title: 'Таблиця множення – Вчитися, Розуміти та Практикувати',
        description: 'Навчіться таблиці множення крок за кроком.',
        type: 'website',
        locale: 'uk_UA',
        url: baseUrl,
        siteName: config.name,
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Таблиця множення – Вчитися, Розуміти та Практикувати',
        description: 'Навчіться таблиці множення крок за кроком.',
      },
    }
  }

  // Finnish metadata (production)
  if (locale === 'fi') {
    return {
      metadataBase: new URL(config.domain),
      title: 'Kertotaulut 1-100 | PDF-harjoitukset ja Interaktiiviset Pelit',
      description: 'Opi kertotaulut 1-100 ilmaiseksi. Interaktiiviset harjoitukset, opetuspelit ja PDF-työarkit lapsille.',
      keywords: 'kertotaulut, kertotaulu, matematiikka, oppiminen, harjoittelu, koulutus, pdf harjoitukset',
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
        title: 'Kertotaulut – Opi, Ymmärrä ja Harjoittele',
        description: 'Opi kertotaulut askel askeleelta.',
        type: 'website',
        locale: 'fi_FI',
        url: baseUrl,
        siteName: config.name,
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Kertotaulut – Opi, Ymmärrä ja Harjoittele',
        description: 'Opi kertotaulut askel askeleelta.',
      },
    }
  }

  // French metadata (production)
  if (locale === 'fr') {
    return {
      metadataBase: new URL(config.domain),
      title: 'Table de Multiplication 1-100 | Exercices PDF et Jeux Interactifs',
      description: 'Apprenez les tables de multiplication de 1 à 100 gratuitement. Exercices interactifs, jeux éducatifs et feuilles de travail PDF pour enfants.',
      keywords: 'table de multiplication, tables de multiplication, mathématiques, apprentissage, pratique, éducation, exercices pdf',
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
        title: 'Table de Multiplication – Apprendre, Comprendre et Pratiquer',
        description: 'Apprenez les tables de multiplication étape par étape.',
        type: 'website',
        locale: 'fr_FR',
        url: baseUrl,
        siteName: config.name,
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Table de Multiplication – Apprendre, Comprendre et Pratiquer',
        description: 'Apprenez les tables de multiplication étape par étape.',
      },
    }
  }

  return {}
}

export default async function TopicHomePage({ params }: PageProps) {
  const { lang, topic } = await params

  // Validate language and topic match
  if (!['tr', 'es', 'de', 'cs', 'uk', 'fi', 'fr'].includes(lang) || topic !== topicSlugs[lang as Locale]) {
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

  // German version (production-ready)
  if (locale === 'de') {
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": `${siteConfig.de.domain}/#website`,
          "url": `${siteConfig.de.domain}/de/einmaleins/`,
          "name": "Einmaleins",
          "description": "Interaktive Bildungsplattform zum Lernen des Einmaleins von 1 bis 100. Visuelle Lernwerkzeuge für Kinder, praktische Übungen und Lernspiele.",
          "inLanguage": "de-DE",
          "publisher": {
            "@id": `${siteConfig.de.domain}/#organization`
          }
        },
        {
          "@type": "WebPage",
          "@id": `${siteConfig.de.domain}/de/einmaleins/#webpage`,
          "url": `${siteConfig.de.domain}/de/einmaleins/`,
          "name": "Einmaleins - Von 1 bis 100 Alle Tabellen",
          "description": "Interaktive Lernplattform für das Einmaleins für Kinder. Lerne alle Einmaleins-Tabellen von 1 bis 100 durch Üben.",
          "isPartOf": {
            "@id": `${siteConfig.de.domain}/#website`
          },
          "about": {
            "@id": `${siteConfig.de.domain}/de/einmaleins/#learningresource`
          },
          "inLanguage": "de-DE"
        },
        {
          "@type": "EducationalOrganization",
          "@id": `${siteConfig.de.domain}/#organization`,
          "name": "Einmaleins",
          "url": `${siteConfig.de.domain}/de/einmaleins/`,
          "description": "Bildungsplattform, die Grundschülern das Einmaleins beibringt",
          "areaServed": "Worldwide",
          "availableLanguage": ["de", "tr", "es"]
        },
        {
          "@type": "LearningResource",
          "@id": `${siteConfig.de.domain}/de/einmaleins/#learningresource`,
          "name": "Einmaleins Lernplattform",
          "description": "Umfassende Bildungsressource zum Lernen des Einmaleins von 1 bis 100.",
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
          "inLanguage": "de-DE",
          "educationalUse": [
            "practice",
            "self-study",
            "homework",
            "classroom activity"
          ],
          "keywords": [
            "einmaleins",
            "mathematik lernen",
            "grundschul-mathematik",
            "multiplikation",
            "einmaleins lernen",
            "mathematik üben",
            "multiplikationsübungen",
            "einmaleins spiele"
          ],
          "teaches": "Fähigkeiten zum Verstehen, Anwenden und Auswendiglernen von Multiplikation und Einmaleins-Tabellen",
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
          <HeroDe />
          <LearningPathsDe />
          <PracticePreviewDe />
          <GamesSectionDe />
          <PrintableExercisesDe />
          <DefinitionSectionDe />
          <WhyItMattersDe />
          <HowToLearnDe />
          <AudienceSectionDe />
          <FooterDe />
        </main>
      </>
    )
  }

  // Czech version (production-ready)
  if (locale === 'cs') {
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": `${siteConfig.cs.domain}/#website`,
          "url": `${siteConfig.cs.domain}/cs/nasobilka/`,
          "name": "Násobilka",
          "description": "Interaktivní vzdělávací platforma pro učení násobilky od 1 do 100. Vizuální výukové nástroje pro děti, praktická cvičení a vzdělávací hry.",
          "inLanguage": "cs-CZ",
          "publisher": {
            "@id": `${siteConfig.cs.domain}/#organization`
          }
        },
        {
          "@type": "WebPage",
          "@id": `${siteConfig.cs.domain}/cs/nasobilka/#webpage`,
          "url": `${siteConfig.cs.domain}/cs/nasobilka/`,
          "name": "Násobilka - Od 1 do 100 Všechny Tabulky",
          "description": "Interaktivní platforma pro učení násobilky pro děti. Naučte se všechny násobilky od 1 do 100 procvičováním.",
          "isPartOf": {
            "@id": `${siteConfig.cs.domain}/#website`
          },
          "about": {
            "@id": `${siteConfig.cs.domain}/cs/nasobilka/#learningresource`
          },
          "inLanguage": "cs-CZ"
        },
        {
          "@type": "EducationalOrganization",
          "@id": `${siteConfig.cs.domain}/#organization`,
          "name": "Násobilka",
          "url": `${siteConfig.cs.domain}/cs/nasobilka/`,
          "description": "Vzdělávací platforma, která učí žáky základních škol násobilku",
          "areaServed": "Worldwide",
          "availableLanguage": ["cs", "tr", "es", "de"]
        },
        {
          "@type": "LearningResource",
          "@id": `${siteConfig.cs.domain}/cs/nasobilka/#learningresource`,
          "name": "Platforma pro Učení Násobilky",
          "description": "Komplexní vzdělávací zdroj pro učení násobilky od 1 do 100.",
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
          "inLanguage": "cs-CZ",
          "educationalUse": [
            "practice",
            "self-study",
            "homework",
            "classroom activity"
          ],
          "keywords": [
            "násobilka",
            "učení matematiky",
            "základní škola matematika",
            "násobení",
            "učení násobilky",
            "procvičování matematiky",
            "cvičení násobení",
            "násobilka hry"
          ],
          "teaches": "Dovednosti porozumět, aplikovat a zapamatovat si násobení a násobilku",
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
          <HeroCs />
          <LearningPathsCs />
          <PracticePreviewCs />
          <GamesSectionCs />
          <PrintableExercisesCs />
          <DefinitionSectionCs />
          <WhyItMattersCs />
          <HowToLearnCs />
          <AudienceSectionCs />
          <FooterCs />
        </main>
      </>
    )
  }

  // Ukrainian version (production-ready)
  if (locale === 'uk') {
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": `${siteConfig.uk.domain}/#website`,
          "url": `${siteConfig.uk.domain}/uk/tablycya-mnozhennya/`,
          "name": "Таблиця множення",
          "description": "Інтерактивна освітня платформа для вивчення таблиці множення від 1 до 100. Візуальні навчальні інструменти для дітей, практичні вправи та освітні ігри.",
          "inLanguage": "uk-UA",
          "publisher": {
            "@id": `${siteConfig.uk.domain}/#organization`
          }
        },
        {
          "@type": "WebPage",
          "@id": `${siteConfig.uk.domain}/uk/tablycya-mnozhennya/#webpage`,
          "url": `${siteConfig.uk.domain}/uk/tablycya-mnozhennya/`,
          "name": "Таблиця множення - Від 1 до 100 Всі Таблиці",
          "description": "Інтерактивна платформа для вивчення таблиці множення для дітей. Вивчіть всі таблиці множення від 1 до 100 через практику.",
          "isPartOf": {
            "@id": `${siteConfig.uk.domain}/#website`
          },
          "about": {
            "@id": `${siteConfig.uk.domain}/uk/tablycya-mnozhennya/#learningresource`
          },
          "inLanguage": "uk-UA"
        },
        {
          "@type": "EducationalOrganization",
          "@id": `${siteConfig.uk.domain}/#organization`,
          "name": "Таблиця множення",
          "url": `${siteConfig.uk.domain}/uk/tablycya-mnozhennya/`,
          "description": "Освітня платформа, яка навчає учнів початкової школи таблиці множення",
          "areaServed": "Worldwide",
          "availableLanguage": ["uk", "tr", "es", "de", "cs"]
        },
        {
          "@type": "LearningResource",
          "@id": `${siteConfig.uk.domain}/uk/tablycya-mnozhennya/#learningresource`,
          "name": "Платформа для Вивчення Таблиці Множення",
          "description": "Комплексний освітній ресурс для вивчення таблиці множення від 1 до 100.",
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
          "inLanguage": "uk-UA",
          "educationalUse": [
            "practice",
            "self-study",
            "homework",
            "classroom activity"
          ],
          "keywords": [
            "таблиця множення",
            "вивчення математики",
            "математика початкової школи",
            "множення",
            "вивчення таблиці множення",
            "практика математики",
            "вправи множення",
            "ігри з таблиці множення"
          ],
          "teaches": "Навички розуміння, застосування та запам'ятовування множення та таблиці множення",
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
          <HeroUk />
          <LearningPathsUk />
          <PracticePreviewUk />
          <GamesSectionUk />
          <PrintableExercisesUk />
          <DefinitionSectionUk />
          <WhyItMattersUk />
          <HowToLearnUk />
          <AudienceSectionUk />
          <FooterUk />
        </main>
      </>
    )
  }

  // Finnish version (production-ready)
  if (locale === 'fi') {
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": `${siteConfig.fi.domain}/#website`,
          "url": `${siteConfig.fi.domain}/fi/kertotaulut/`,
          "name": "Kertotaulut",
          "description": "Interaktiivinen oppimisalusta kertotaulujen oppimiseen 1-100. Visuaaliset oppimistyökalut lapsille, käytännön harjoitukset ja opetuspelit.",
          "inLanguage": "fi-FI",
          "publisher": {
            "@id": `${siteConfig.fi.domain}/#organization`
          }
        },
        {
          "@type": "WebPage",
          "@id": `${siteConfig.fi.domain}/fi/kertotaulut/#webpage`,
          "url": `${siteConfig.fi.domain}/fi/kertotaulut/`,
          "name": "Kertotaulut - 1-100 Kaikki Taulut",
          "description": "Interaktiivinen kertotaulujen oppimisalusta lapsille. Opi kaikki kertotaulut 1-100 harjoittelemalla.",
          "isPartOf": {
            "@id": `${siteConfig.fi.domain}/#website`
          },
          "about": {
            "@id": `${siteConfig.fi.domain}/fi/kertotaulut/#learningresource`
          },
          "inLanguage": "fi-FI"
        },
        {
          "@type": "EducationalOrganization",
          "@id": `${siteConfig.fi.domain}/#organization`,
          "name": "Kertotaulut",
          "url": `${siteConfig.fi.domain}/fi/kertotaulut/`,
          "description": "Oppimisalusta, joka opettaa alakoululaisille kertotaulut",
          "areaServed": "Worldwide",
          "availableLanguage": ["fi", "tr", "es", "de", "cs", "uk"]
        },
        {
          "@type": "LearningResource",
          "@id": `${siteConfig.fi.domain}/fi/kertotaulut/#learningresource`,
          "name": "Kertotaulujen Oppimisalusta",
          "description": "Kattava oppimisresurssi kertotaulujen oppimiseen 1-100.",
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
          "inLanguage": "fi-FI",
          "educationalUse": [
            "practice",
            "self-study",
            "homework",
            "classroom activity"
          ],
          "keywords": [
            "kertotaulut",
            "matematiikan oppiminen",
            "alakoulun matematiikka",
            "kertominen",
            "kertotaulujen oppiminen",
            "matematiikan harjoittelu",
            "kertolaskuharjoitukset",
            "kertotaulupelit"
          ],
          "teaches": "Taidot ymmärtää, soveltaa ja muistaa kertolaskuja ja kertotauluja",
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
          <HeroFi />
          <LearningPathsFi />
          <PracticePreviewFi />
          <GamesSectionFi />
          <PrintableExercisesFi />
          <DefinitionSectionFi />
          <WhyItMattersFi />
          <HowToLearnFi />
          <AudienceSectionFi />
          <FooterFi />
        </main>
      </>
    )
  }

  // French version (production-ready)
  if (locale === 'fr') {
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": `${siteConfig.fr.domain}/#website`,
          "url": `${siteConfig.fr.domain}/fr/table-de-multiplication/`,
          "name": "Table de Multiplication",
          "description": "Plateforme éducative interactive pour apprendre les tables de multiplication de 1 à 100. Outils d'apprentissage visuel pour les enfants, exercices pratiques et jeux éducatifs.",
          "inLanguage": "fr-FR",
          "publisher": {
            "@id": `${siteConfig.fr.domain}/#organization`
          }
        },
        {
          "@type": "WebPage",
          "@id": `${siteConfig.fr.domain}/fr/table-de-multiplication/#webpage`,
          "url": `${siteConfig.fr.domain}/fr/table-de-multiplication/`,
          "name": "Table de Multiplication - Toutes les Tables de 1 à 100",
          "description": "Plateforme d'apprentissage interactive des tables de multiplication pour les enfants. Apprenez toutes les tables de multiplication de 1 à 100 par la pratique.",
          "isPartOf": {
            "@id": `${siteConfig.fr.domain}/#website`
          },
          "about": {
            "@id": `${siteConfig.fr.domain}/fr/table-de-multiplication/#learningresource`
          },
          "inLanguage": "fr-FR"
        },
        {
          "@type": "EducationalOrganization",
          "@id": `${siteConfig.fr.domain}/#organization`,
          "name": "Table de Multiplication",
          "url": `${siteConfig.fr.domain}/fr/table-de-multiplication/`,
          "description": "Plateforme éducative qui enseigne les tables de multiplication aux élèves du primaire",
          "areaServed": "Worldwide",
          "availableLanguage": ["fr", "tr", "es", "de", "cs", "uk", "fi"]
        },
        {
          "@type": "LearningResource",
          "@id": `${siteConfig.fr.domain}/fr/table-de-multiplication/#learningresource`,
          "name": "Plateforme d'Apprentissage des Tables de Multiplication",
          "description": "Ressource éducative complète pour apprendre les tables de multiplication de 1 à 100.",
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
          "inLanguage": "fr-FR",
          "educationalUse": [
            "practice",
            "self-study",
            "homework",
            "classroom activity"
          ],
          "keywords": [
            "table de multiplication",
            "apprentissage des mathématiques",
            "mathématiques primaire",
            "multiplication",
            "apprendre les tables",
            "exercices de mathématiques",
            "jeux de multiplication"
          ],
          "teaches": "Compétences pour comprendre, appliquer et mémoriser la multiplication et les tables de multiplication",
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
          <HeroFr />
          <LearningPathsFr />
          <PracticePreviewFr />
          <GamesSectionFr />
          <PrintableExercisesFr />
          <DefinitionSectionFr />
          <WhyItMattersFr />
          <HowToLearnFr />
          <AudienceSectionFr />
          <FooterFr />
        </main>
      </>
    )
  }

  notFound()
}
