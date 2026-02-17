import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Header from '@/app/components/Header'
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
import HeaderEs from '@/app/components/es/Header'
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
import HeaderDe from '@/app/components/de/Header'
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
import HeaderCs from '@/app/components/cs/Header'
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
import HeaderUk from '@/app/components/uk/Header'
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
import HeaderFi from '@/app/components/fi/Header'
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
import HeaderFr from '@/app/components/fr/Header'
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
import { Locale, topicSlugs, siteConfig, languageNames } from '@/lib/i18n-config'
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

  const config = siteConfig[locale]
  const ranges = ['1-10', '11-20', '21-30', '31-40', '41-50', '51-60', '61-70', '71-80', '81-90', '91-100']
  
  // Schema.org structured data - simplified per guidelines
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://mathematives.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: languageNames[locale],
        item: `${config.domain}/${lang}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: locale === 'en' ? 'Multiplication Tables' : 
              locale === 'tr' ? 'Çarpım Tablosu' :
              locale === 'es' ? 'Tablas de Multiplicar' :
              locale === 'de' ? 'Einmaleins' :
              locale === 'cs' ? 'Násobilka' :
              locale === 'uk' ? 'Таблиця множення' :
              locale === 'fi' ? 'Kertotaulut' :
              locale === 'fr' ? 'Table de Multiplication' :
              locale === 'sv' ? 'Multiplikationstabeller' :
              locale === 'pt' ? 'Tabuada' :
              locale === 'pl' ? 'Tabliczka Mnożenia' : 'Tabel Perkalian',
        item: `${config.domain}/${lang}/${topic}`,
      },
    ],
  }

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    numberOfItems: ranges.length,
    itemListElement: ranges.map((range, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: `${locale === 'en' ? 'Times Tables' : locale === 'tr' ? 'Çarpım Tablosu' : locale === 'es' ? 'Tabla de Multiplicar' : locale === 'de' ? 'Einmaleins' : locale === 'cs' ? 'Násobilka' : locale === 'uk' ? 'Таблиця множення' : locale === 'fi' ? 'Kertotaulu' : locale === 'fr' ? 'Table de Multiplication' : locale === 'sv' ? 'Multiplikationstabell' : locale === 'pt' ? 'Tabuada' : locale === 'pl' ? 'Tabliczka Mnożenia' : 'Tabel Perkalian'} ${range}`,
      url: `${config.domain}/${lang}/${topic}/${range}`,
    })),
  }

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: locale === 'en' ? 'Multiplication Tables 1-100' : 
          locale === 'tr' ? 'Çarpım Tablosu 1-100' :
          locale === 'es' ? 'Tablas de Multiplicar 1-100' :
          locale === 'de' ? 'Einmaleins 1-100' :
          locale === 'cs' ? 'Násobilka 1-100' :
          locale === 'uk' ? 'Таблиця множення 1-100' :
          locale === 'fi' ? 'Kertotaulut 1-100' :
          locale === 'fr' ? 'Table de Multiplication 1-100' :
          locale === 'sv' ? 'Multiplikationstabeller 1-100' :
          locale === 'pt' ? 'Tabuada 1-100' :
          locale === 'pl' ? 'Tabliczka Mnożenia 1-100' : 'Tabel Perkalian 1-100',
    description: locale === 'en' ? 'Learn multiplication tables from 1 to 100' : 
                 locale === 'tr' ? '1\'den 100\'e kadar çarpım tablolarını öğrenin' :
                 locale === 'es' ? 'Aprende las tablas de multiplicar del 1 al 100' :
                 locale === 'de' ? 'Lerne das Einmaleins von 1 bis 100' :
                 locale === 'cs' ? 'Naučte se násobilku od 1 do 100' :
                 locale === 'uk' ? 'Вивчіть таблицю множення від 1 до 100' :
                 locale === 'fi' ? 'Opi kertotaulut 1-100' :
                 locale === 'fr' ? 'Apprenez la table de multiplication de 1 à 100' :
                 locale === 'sv' ? 'Lär dig multiplikationstabeller 1-100' :
                 locale === 'pt' ? 'Aprenda a tabuada de 1 a 100' :
                 locale === 'pl' ? 'Naucz się tabliczki mnożenia od 1 do 100' : 'Pelajari tabel perkalian 1-100',
    url: `${config.domain}/${lang}/${topic}`,
    inLanguage: lang,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Mathematives',
      url: 'https://mathematives.com',
    },
  }

  // English version (production-ready)
  if (locale === 'en') {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
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

  // Turkish version - Simplified Schema
  if (locale === 'tr') {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
        />
        <Header />
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
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
        />
        <HeaderEs />
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
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
        />
        <HeaderDe />
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
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
        />
        <HeaderCs />
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
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
        />
        <HeaderUk />
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
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
        />
        <HeaderFi />
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
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
        />
        <HeaderFr />
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
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
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
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
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
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
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
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
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
