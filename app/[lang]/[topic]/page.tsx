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
import HeaderSv from '@/app/components/sv/Header'
import HeroSv from '@/app/components/sv/Hero'
import DefinitionSectionSv from '@/app/components/sv/DefinitionSection'
import WhyItMattersSv from '@/app/components/sv/WhyItMatters'
import HowToLearnSv from '@/app/components/sv/HowToLearn'
import LearningPathsSv from '@/app/components/sv/LearningPaths'
import PracticePreviewSv from '@/app/components/sv/PracticePreview'
import GamesSectionSv from '@/app/components/sv/GamesSection'
import PrintableExercisesSv from '@/app/components/sv/PrintableExercises'
import AudienceSectionSv from '@/app/components/sv/AudienceSection'
import FooterSv from '@/app/components/sv/Footer'
import HeaderPt from '@/app/components/pt/Header'
import HeroPt from '@/app/components/pt/Hero'
import DefinitionSectionPt from '@/app/components/pt/DefinitionSection'
import WhyItMattersPt from '@/app/components/pt/WhyItMatters'
import HowToLearnPt from '@/app/components/pt/HowToLearn'
import LearningPathsPt from '@/app/components/pt/LearningPaths'
import PracticePreviewPt from '@/app/components/pt/PracticePreview'
import GamesSectionPt from '@/app/components/pt/GamesSection'
import PrintableExercisesPt from '@/app/components/pt/PrintableExercises'
import AudienceSectionPt from '@/app/components/pt/AudienceSection'
import FooterPt from '@/app/components/pt/Footer'
import HeaderEn from '@/app/components/en/Header'
import HeroEn from '@/app/components/en/Hero'
import DefinitionSectionEn from '@/app/components/en/DefinitionSection'
import WhyItMattersEn from '@/app/components/en/WhyItMatters'
import HowToLearnEn from '@/app/components/en/HowToLearn'
import LearningPathsEn from '@/app/components/en/LearningPaths'
import PracticePreviewEn from '@/app/components/en/PracticePreview'
import GamesSectionEn from '@/app/components/en/GamesSection'
import PrintableExercisesEn from '@/app/components/en/PrintableExercises'
import AudienceSectionEn from '@/app/components/en/AudienceSection'
import FooterEn from '@/app/components/en/Footer'
import HeaderPl from '@/app/components/pl/Header'
import HeroPl from '@/app/components/pl/Hero'
import DefinitionSectionPl from '@/app/components/pl/DefinitionSection'
import WhyItMattersPl from '@/app/components/pl/WhyItMatters'
import HowToLearnPl from '@/app/components/pl/HowToLearn'
import LearningPathsPl from '@/app/components/pl/LearningPaths'
import PracticePreviewPl from '@/app/components/pl/PracticePreview'
import GamesSectionPl from '@/app/components/pl/GamesSection'
import PrintableExercisesPl from '@/app/components/pl/PrintableExercises'
import AudienceSectionPl from '@/app/components/pl/AudienceSection'
import FooterPl from '@/app/components/pl/Footer'
import HeaderId from '@/app/components/id/Header'
import HeroId from '@/app/components/id/Hero'
import LearningPathsId from '@/app/components/id/LearningPaths'
import PracticePreviewId from '@/app/components/id/PracticePreview'
import GamesSectionId from '@/app/components/id/GamesSection'
import PrintableExercisesId from '@/app/components/id/PrintableExercises'
import DefinitionSectionId from '@/app/components/id/DefinitionSection'
import WhyItMattersId from '@/app/components/id/WhyItMatters'
import HowToLearnId from '@/app/components/id/HowToLearn'
import AudienceSectionId from '@/app/components/id/AudienceSection'
import FooterId from '@/app/components/id/Footer'
import { Locale, topicSlugs, siteConfig } from '@/lib/i18n-config'
import { getAbsoluteUrl, buildAlternatesMetadata } from '@/lib/url-helpers'

interface PageProps {
  params: {
    lang: string
    topic: string
  }
}

export async function generateStaticParams() {
  return [
    { lang: 'en', topic: 'multiplication-tables' },
    { lang: 'tr', topic: 'carpim-tablosu' },
    { lang: 'es', topic: 'tablas-de-multiplicar' },
    { lang: 'de', topic: 'einmaleins' },
    { lang: 'cs', topic: 'nasobilka' },
    { lang: 'uk', topic: 'tablycya-mnozhennya' },
    { lang: 'fi', topic: 'kertotaulut' },
    { lang: 'fr', topic: 'table-de-multiplication' },
    { lang: 'sv', topic: 'multiplikationstabeller' },
    { lang: 'pt', topic: 'tabuada' },
    { lang: 'pl', topic: 'tabliczki-mnozenia' },
    { lang: 'id', topic: 'tabel-perkalian' },
  ]
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, topic } = await params
  
  // Validate params
  if (!['en', 'tr', 'es', 'de', 'cs', 'uk', 'fi', 'fr', 'sv', 'pt', 'pl', 'id'].includes(lang) || topic !== topicSlugs[lang as Locale]) {
    return {}
  }

  const locale = lang as Locale
  const config = siteConfig[locale]
  const baseUrl = getAbsoluteUrl(locale)
  const hreflang = buildAlternatesMetadata('topic')

  // English metadata (production)
  if (locale === 'en') {
    return {
      metadataBase: new URL(config.domain),
      title: 'Multiplication Tables 1-100',
      description: 'Learn multiplication tables from 1 to 100 for free. Interactive exercises, educational games and PDF worksheets - ideal math platform for children.',
      keywords: 'multiplication tables, times tables, math, learning, practice, education, pdf exercises',
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
        title: 'Multiplication Tables – Learn, Understand, and Practice',
        description: 'Learn multiplication tables step by step.',
        type: 'website',
        locale: 'en_US',
        url: baseUrl,
        siteName: config.name,
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Multiplication Tables – Learn, Understand, and Practice',
        description: 'Learn multiplication tables step by step.',
      },
    }
  }

  // Turkish metadata (production)
  if (locale === 'tr') {
    return {
      metadataBase: new URL(config.domain),
      title: 'Çarpım Tablosu 1-100',
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
      title: 'Tablas de Multiplicar 1-100',
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
      title: 'Einmaleins 1-100',
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
      title: 'Násobilka 1-100',
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
      title: 'Таблиця множення 1-100',
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
      title: 'Kertotaulut 1-100',
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
      title: 'Table de Multiplication 1-100',
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

  // Swedish metadata (production)
  if (locale === 'sv') {
    return {
      metadataBase: new URL(config.domain),
      title: 'Multiplikationstabeller 1-100',
      description: 'Lär dig multiplikationstabeller från 1 till 100 gratis. Interaktiva övningar, pedagogiska spel och utskrivbara arbetsblad för barn.',
      keywords: 'multiplikationstabeller, multiplikationstabell, multiplikation, matematik, lärande, övning, utbildning, pdf övningar',
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
        title: 'Multiplikationstabeller – Lär, Förstå och Öva',
        description: 'Lär dig multiplikationstabeller steg för steg.',
        type: 'website',
        locale: 'sv_SE',
        url: baseUrl,
        siteName: config.name,
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Multiplikationstabeller – Lär, Förstå och Öva',
        description: 'Lär dig multiplikationstabeller steg för steg.',
      },
    }
  }

  // Portuguese metadata (production)
  if (locale === 'pt') {
    return {
      metadataBase: new URL(config.domain),
      title: 'Tabuada 1 a 100 - Multiplicação Grátis Online',
      description: 'Aprenda a tabuada de 1 a 100 gratuitamente. Exercícios interativos, jogos educacionais e folhas de trabalho em PDF para crianças.',
      keywords: 'tabuada, tabuada de multiplicação, multiplicação, matemática, aprendizado, prática, educação, exercícios pdf',
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
        title: 'Tabuada – Aprenda, Entenda e Pratique',
        description: 'Aprenda a tabuada passo a passo.',
        type: 'website',
        locale: 'pt_BR',
        url: baseUrl,
        siteName: config.name,
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Tabuada – Aprenda, Entenda e Pratique',
        description: 'Aprenda a tabuada passo a passo.',
      },
    }
  }

  // Polish metadata (production)
  if (locale === 'pl') {
    return {
      metadataBase: new URL(config.domain),
      title: 'Tabliczki Mnożenia 1-100',
      description: 'Ucz się tabliczki mnożenia od 1 do 100 za darmo. Interaktywne ćwiczenia, gry edukacyjne i karty pracy PDF - idealna platforma matematyczna dla dzieci.',
      keywords: 'tabliczka mnożenia, multiplication table, matematyka, nauka, ćwiczenie, edukacja, pdf ćwiczenia',
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
        title: 'Tabliczki Mnożenia – Ucz się, Rozumiej i Ćwicz',
        description: 'Naucz się tabliczki mnożenia krok po kroku.',
        type: 'website',
        locale: 'pl_PL',
        url: baseUrl,
        siteName: config.name,
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Tabliczki Mnożenia – Ucz się, Rozumiej i Ćwicz',
        description: 'Naucz się tabliczki mnożenia krok po kroku.',
      },
    }
  }

  // Indonesian metadata (production)
  if (locale === 'id') {
    return {
      metadataBase: new URL(config.domain),
      title: 'Tabel Perkalian 1-100',
      description: 'Pelajari tabel perkalian dari 1 hingga 100 secara gratis. Latihan interaktif, permainan edukatif, dan lembar kerja PDF untuk anak-anak.',
      keywords: 'tabel perkalian, belajar perkalian, matematika, latihan, pendidikan, latihan pdf',
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
        title: 'Tabel Perkalian – Belajar, Pahami, dan Praktikkan',
        description: 'Pelajari tabel perkalian langkah demi langkah.',
        type: 'website',
        locale: 'id_ID',
        url: baseUrl,
        siteName: config.name,
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Tabel Perkalian – Belajar, Pahami, dan Praktikkan',
        description: 'Pelajari tabel perkalian langkah demi langkah.',
      },
    }
  }

  return {}
}

export default async function TopicHomePage({ params }: PageProps) {
  const { lang, topic } = await params

  // Validate language and topic match
  if (!['en', 'tr', 'es', 'de', 'cs', 'uk', 'fi', 'fr', 'sv', 'pt', 'pl', 'id'].includes(lang) || topic !== topicSlugs[lang as Locale]) {
    notFound()
  }

  const locale = lang as Locale

  // English version (production-ready)
  if (locale === 'en') {
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": `${siteConfig.en.domain}/#website`,
          "url": `${siteConfig.en.domain}/en/multiplication-tables/`,
          "name": "Multiplication Tables",
          "description": "Interactive educational platform to learn multiplication tables from 1 to 100. Visual learning tools for children, practical exercises and educational games.",
          "inLanguage": "en-US",
          "publisher": {
            "@id": `${siteConfig.en.domain}/#organization`
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${siteConfig.en.domain}/en/multiplication-tables/{search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@type": "WebPage",
          "@id": `${siteConfig.en.domain}/en/multiplication-tables/#webpage`,
          "url": `${siteConfig.en.domain}/en/multiplication-tables/`,
          "name": "Multiplication Tables - All Tables from 1 to 100",
          "description": "Interactive multiplication tables learning platform for children. Learn all multiplication tables from 1-100 through practice.",
          "isPartOf": {
            "@id": `${siteConfig.en.domain}/#website`
          },
          "about": {
            "@id": `${siteConfig.en.domain}/en/multiplication-tables/#learningresource`
          },
          "inLanguage": "en-US"
        },
        {
          "@type": "EducationalOrganization",
          "@id": `${siteConfig.en.domain}/#organization`,
          "name": "Multiplication Tables",
          "url": `${siteConfig.en.domain}/en/multiplication-tables/`,
          "description": "Educational platform that teaches multiplication tables to elementary school students",
          "areaServed": "Worldwide",
          "availableLanguage": ["en", "tr", "es", "de", "cs", "uk", "fi", "fr", "sv", "pt"]
        },
        {
          "@type": "LearningResource",
          "@id": `${siteConfig.en.domain}/en/multiplication-tables/#learningresource`,
          "name": "Multiplication Tables Learning Platform",
          "description": "Comprehensive educational resource for learning multiplication tables from 1 to 100.",
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
          "inLanguage": "en-US",
          "educationalUse": [
            "practice",
            "self-study",
            "homework",
            "classroom activity"
          ],
          "keywords": [
            "multiplication tables",
            "times tables",
            "math learning",
            "elementary math",
            "multiplication",
            "learn times tables",
            "math exercises",
            "multiplication games"
          ],
          "teaches": "Skills to understand, apply and memorize multiplication and times tables",
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
        <HeaderEn />
        <main className="min-h-screen">
          <HeroEn />
          <LearningPathsEn />
          <PracticePreviewEn rangeStart={1} rangeEnd={100} />
          <GamesSectionEn />
          <PrintableExercisesEn />
          <DefinitionSectionEn />
          <WhyItMattersEn />
          <HowToLearnEn />
          <AudienceSectionEn />
          <FooterEn />
        </main>
      </>
    )
  }

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
          <PracticePreview rangeStart={1} rangeEnd={100} />
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
          <PracticePreviewEs rangeStart={1} rangeEnd={100} />
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
          <PracticePreviewDe rangeStart={1} rangeEnd={100} />
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
          <PracticePreviewCs rangeStart={1} rangeEnd={100} />
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
          <PracticePreviewUk rangeStart={1} rangeEnd={100} />
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
          <PracticePreviewFi rangeStart={1} rangeEnd={100} />
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
          <PracticePreviewFr rangeStart={1} rangeEnd={100} />
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

  // Swedish version (production-ready)
  if (locale === 'sv') {
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": `${siteConfig.sv.domain}/#website`,
          "url": `${siteConfig.sv.domain}/sv/multiplikationstabeller/`,
          "name": "Multiplikationstabeller",
          "description": "Interaktiv utbildningsplattform för att lära sig multiplikationstabeller från 1 till 100. Visuella inlärningsverktyg för barn, praktiska övningar och pedagogiska spel.",
          "inLanguage": "sv-SE",
          "publisher": {
            "@id": `${siteConfig.sv.domain}/#organization`
          }
        },
        {
          "@type": "WebPage",
          "@id": `${siteConfig.sv.domain}/sv/multiplikationstabeller/#webpage`,
          "url": `${siteConfig.sv.domain}/sv/multiplikationstabeller/`,
          "name": "Multiplikationstabeller - Alla Tabeller från 1 till 100",
          "description": "Interaktiv inlärningsplattform för multiplikationstabeller för barn. Lär dig alla multiplikationstabeller från 1 till 100 genom övning.",
          "isPartOf": {
            "@id": `${siteConfig.sv.domain}/#website`
          },
          "about": {
            "@id": `${siteConfig.sv.domain}/sv/multiplikationstabeller/#learningresource`
          },
          "inLanguage": "sv-SE"
        },
        {
          "@type": "EducationalOrganization",
          "@id": `${siteConfig.sv.domain}/#organization`,
          "name": "Multiplikationstabeller",
          "url": `${siteConfig.sv.domain}/sv/multiplikationstabeller/`,
          "description": "Utbildningsplattform som undervisar grundskoleelever i multiplikationstabeller",
          "areaServed": "Worldwide",
          "availableLanguage": ["sv", "tr", "es", "de", "cs", "uk", "fi", "fr"]
        },
        {
          "@type": "LearningResource",
          "@id": `${siteConfig.sv.domain}/sv/multiplikationstabeller/#learningresource`,
          "name": "Inlärningsplattform för Multiplikationstabeller",
          "description": "Omfattande utbildningsresurs för att lära sig multiplikationstabeller från 1 till 100.",
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
          "inLanguage": "sv-SE",
          "educationalUse": [
            "practice",
            "self-study",
            "homework",
            "classroom activity"
          ],
          "keywords": [
            "multiplikationstabeller",
            "matematiklärande",
            "grundskolematematik",
            "multiplikation",
            "lära sig tabeller",
            "matematikövningar",
            "multiplikationsspel"
          ],
          "teaches": "Färdigheter för att förstå, tillämpa och memorera multiplikation och multiplikationstabeller",
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
        <HeaderSv />
        <main className="min-h-screen">
          <HeroSv />
          <LearningPathsSv />
          <PracticePreviewSv rangeStart={1} rangeEnd={100} />
          <GamesSectionSv />
          <PrintableExercisesSv />
          <DefinitionSectionSv />
          <WhyItMattersSv />
          <HowToLearnSv />
          <AudienceSectionSv />
          <FooterSv />
        </main>
      </>
    )
  }

  // Portuguese version
  if (locale === 'pt') {
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": `${siteConfig.pt.domain}/#website`,
          "url": `${siteConfig.pt.domain}/pt/tabuada/`,
          "name": "Tabuada",
          "description": "Plataforma educacional interativa para aprender a tabuada de 1 a 100. Ferramentas de aprendizado visual para crianças, exercícios práticos e jogos educacionais.",
          "inLanguage": "pt-BR",
          "publisher": {
            "@id": `${siteConfig.pt.domain}/#organization`
          }
        },
        {
          "@type": "WebPage",
          "@id": `${siteConfig.pt.domain}/pt/tabuada/#webpage`,
          "url": `${siteConfig.pt.domain}/pt/tabuada/`,
          "name": "Tabuada - Todas as Tabuadas de 1 a 100",
          "description": "Plataforma de aprendizado interativo de tabuada para crianças. Aprenda todas as tabuadas de 1 a 100 através de prática.",
          "isPartOf": {
            "@id": `${siteConfig.pt.domain}/#website`
          },
          "about": {
            "@id": `${siteConfig.pt.domain}/pt/tabuada/#learningresource`
          },
          "inLanguage": "pt-BR"
        },
        {
          "@type": "EducationalOrganization",
          "@id": `${siteConfig.pt.domain}/#organization`,
          "name": "Tabuada",
          "url": `${siteConfig.pt.domain}/pt/tabuada/`,
          "description": "Plataforma educacional que ensina tabuada para alunos do ensino fundamental",
          "areaServed": "Worldwide",
          "availableLanguage": ["pt", "tr", "es", "de", "cs", "uk", "fi", "fr", "sv"]
        },
        {
          "@type": "LearningResource",
          "@id": `${siteConfig.pt.domain}/pt/tabuada/#learningresource`,
          "name": "Plataforma de Aprendizado de Tabuada",
          "description": "Recurso educacional abrangente para aprender a tabuada de 1 a 100.",
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
          "inLanguage": "pt-BR",
          "educationalUse": [
            "practice",
            "self-study",
            "homework",
            "classroom activity"
          ],
          "keywords": [
            "tabuada",
            "aprendizado de matemática",
            "matemática do ensino fundamental",
            "multiplicação",
            "aprender tabuada",
            "exercícios de matemática",
            "jogos de multiplicação"
          ],
          "teaches": "Habilidades para entender, aplicar e memorizar multiplicação e tabuadas",
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
        <HeaderPt />
        <main className="min-h-screen">
          <HeroPt />
          <LearningPathsPt />
          <PracticePreviewPt rangeStart={1} rangeEnd={100} />
          <GamesSectionPt />
          <PrintableExercisesPt />
          <DefinitionSectionPt />
          <WhyItMattersPt />
          <HowToLearnPt />
          <AudienceSectionPt />
          <FooterPt />
        </main>
      </>
    )
  }

  // Polish version (production-ready)
  if (locale === 'pl') {
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": `${siteConfig.pl.domain}/#website`,
          "url": `${siteConfig.pl.domain}/pl/tabliczki-mnozenia/`,
          "name": "Tabliczki Mnożenia",
          "description": "Interaktywna platforma edukacyjna do nauki tabliczki mnożenia od 1 do 100. Narzędzia do nauki wizualnej dla dzieci, ćwiczenia praktyczne i gry edukacyjne.",
          "inLanguage": "pl-PL",
          "publisher": {
            "@id": `${siteConfig.pl.domain}/#organization`
          }
        },
        {
          "@type": "WebPage",
          "@id": `${siteConfig.pl.domain}/pl/tabliczki-mnozenia/#webpage`,
          "url": `${siteConfig.pl.domain}/pl/tabliczki-mnozenia/`,
          "name": "Tabliczki Mnożenia - Wszystkie Tabliczki od 1 do 100",
          "description": "Interaktywna platforma do nauki tabliczki mnożenia dla dzieci. Naucz się wszystkich tabliczek mnożenia od 1 do 100 poprzez ćwiczenia.",
          "isPartOf": {
            "@id": `${siteConfig.pl.domain}/#website`
          },
          "about": {
            "@id": `${siteConfig.pl.domain}/pl/tabliczki-mnozenia/#learningresource`
          },
          "inLanguage": "pl-PL"
        },
        {
          "@type": "EducationalOrganization",
          "@id": `${siteConfig.pl.domain}/#organization`,
          "name": "Tabliczki Mnożenia",
          "url": `${siteConfig.pl.domain}/pl/tabliczki-mnozenia/`,
          "description": "Platforma edukacyjna ucząca tabliczki mnożenia uczniów szkół podstawowych",
          "areaServed": "Worldwide",
          "availableLanguage": ["pl", "tr", "es", "de", "cs", "uk", "fi", "fr", "sv", "pt"]
        },
        {
          "@type": "LearningResource",
          "@id": `${siteConfig.pl.domain}/pl/tabliczki-mnozenia/#learningresource`,
          "name": "Platforma Nauki Tabliczki Mnożenia",
          "description": "Kompleksowy zasób edukacyjny do nauki tabliczki mnożenia od 1 do 100.",
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
          "inLanguage": "pl-PL",
          "educationalUse": [
            "practice",
            "self-study",
            "homework",
            "classroom activity"
          ],
          "keywords": [
            "tabliczka mnożenia",
            "nauka matematyki",
            "matematyka szkoły podstawowej",
            "mnożenie",
            "nauka tabliczki",
            "ćwiczenia matematyczne",
            "gry matematyczne"
          ],
          "teaches": "Umiejętności rozumienia, stosowania i zapamiętywania mnożenia i tabliczki mnożenia",
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
        <HeaderPl />
        <main className="min-h-screen">
          <HeroPl />
          <LearningPathsPl />
          <PracticePreviewPl rangeStart={1} rangeEnd={100} />
          <GamesSectionPl />
          <PrintableExercisesPl />
          <DefinitionSectionPl />
          <WhyItMattersPl />
          <HowToLearnPl />
          <AudienceSectionPl />
          <FooterPl />
        </main>
      </>
    )
  }

  // Indonesian version (production-ready)
  if (locale === 'id') {
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": `${siteConfig.id.domain}/#website`,
          "url": `${siteConfig.id.domain}/id/tabel-perkalian/`,
          "name": "Tabel Perkalian",
          "description": "Platform pendidikan interaktif untuk mempelajari tabel perkalian dari 1 hingga 100. Alat pembelajaran visual untuk anak-anak, latihan praktis, dan permainan edukatif.",
          "inLanguage": "id-ID",
          "publisher": {
            "@id": `${siteConfig.id.domain}/#organization`
          }
        },
        {
          "@type": "WebPage",
          "@id": `${siteConfig.id.domain}/id/tabel-perkalian/#webpage`,
          "url": `${siteConfig.id.domain}/id/tabel-perkalian/`,
          "name": "Tabel Perkalian - Semua Tabel dari 1 hingga 100",
          "description": "Platform pembelajaran tabel perkalian interaktif untuk anak-anak. Pelajari semua tabel perkalian dari 1-100 melalui latihan.",
          "isPartOf": {
            "@id": `${siteConfig.id.domain}/#website`
          },
          "about": {
            "@id": `${siteConfig.id.domain}/id/tabel-perkalian/#learningresource`
          },
          "inLanguage": "id-ID"
        },
        {
          "@type": "EducationalOrganization",
          "@id": `${siteConfig.id.domain}/#organization`,
          "name": "Tabel Perkalian",
          "url": `${siteConfig.id.domain}/id/tabel-perkalian/`,
          "description": "Platform pendidikan yang mengajarkan tabel perkalian kepada siswa sekolah dasar",
          "areaServed": "Worldwide",
          "availableLanguage": ["id", "tr", "es", "de", "cs", "uk", "fi", "fr", "sv", "pt", "pl"]
        },
        {
          "@type": "LearningResource",
          "@id": `${siteConfig.id.domain}/id/tabel-perkalian/#learningresource`,
          "name": "Platform Pembelajaran Tabel Perkalian",
          "description": "Sumber pendidikan komprehensif untuk mempelajari tabel perkalian dari 1 hingga 100.",
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
          "inLanguage": "id-ID",
          "educationalUse": [
            "practice",
            "self-study",
            "homework",
            "classroom activity"
          ],
          "keywords": [
            "tabel perkalian",
            "belajar matematika",
            "matematika sekolah dasar",
            "perkalian",
            "belajar tabel",
            "latihan matematika",
            "permainan matematika"
          ],
          "teaches": "Keterampilan untuk memahami, menerapkan, dan menghafal perkalian dan tabel perkalian",
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
        <HeaderId />
        <main className="min-h-screen">
          <HeroId />
          <LearningPathsId />
          <PracticePreviewId rangeStart={1} rangeEnd={100} />
          <GamesSectionId />
          <PrintableExercisesId />
          <DefinitionSectionId />
          <WhyItMattersId />
          <HowToLearnId />
          <AudienceSectionId />
          <FooterId />
        </main>
      </>
    )
  }

  notFound()
}
