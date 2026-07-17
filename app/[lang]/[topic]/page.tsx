import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import type { ComponentType } from 'react'
import UniversalHeader from '@/app/components/shared/UniversalHeader'

import Hero from '@/app/components/Hero'
import HeroEs from '@/app/components/es/Hero'
import HeroDe from '@/app/components/de/Hero'
import HeroCs from '@/app/components/cs/Hero'
import HeroUk from '@/app/components/uk/Hero'
import HeroFi from '@/app/components/fi/Hero'
import HeroFr from '@/app/components/fr/Hero'
import HeroSv from '@/app/components/sv/Hero'
import HeroPt from '@/app/components/pt/Hero'
import HeroEn from '@/app/components/en/Hero'
import HeroPl from '@/app/components/pl/Hero'
import HeroId from '@/app/components/id/Hero'

import DefinitionSection from '@/app/components/DefinitionSection'
import DefinitionSectionEs from '@/app/components/es/DefinitionSection'
import DefinitionSectionDe from '@/app/components/de/DefinitionSection'
import DefinitionSectionCs from '@/app/components/cs/DefinitionSection'
import DefinitionSectionUk from '@/app/components/uk/DefinitionSection'
import DefinitionSectionFi from '@/app/components/fi/DefinitionSection'
import DefinitionSectionFr from '@/app/components/fr/DefinitionSection'
import DefinitionSectionSv from '@/app/components/sv/DefinitionSection'
import DefinitionSectionPt from '@/app/components/pt/DefinitionSection'
import DefinitionSectionEn from '@/app/components/en/DefinitionSection'
import DefinitionSectionPl from '@/app/components/pl/DefinitionSection'
import DefinitionSectionId from '@/app/components/id/DefinitionSection'

import WhyItMatters from '@/app/components/WhyItMatters'
import WhyItMattersEs from '@/app/components/es/WhyItMatters'
import WhyItMattersDe from '@/app/components/de/WhyItMatters'
import WhyItMattersCs from '@/app/components/cs/WhyItMatters'
import WhyItMattersUk from '@/app/components/uk/WhyItMatters'
import WhyItMattersFi from '@/app/components/fi/WhyItMatters'
import WhyItMattersFr from '@/app/components/fr/WhyItMatters'
import WhyItMattersSv from '@/app/components/sv/WhyItMatters'
import WhyItMattersPt from '@/app/components/pt/WhyItMatters'
import WhyItMattersEn from '@/app/components/en/WhyItMatters'
import WhyItMattersPl from '@/app/components/pl/WhyItMatters'
import WhyItMattersId from '@/app/components/id/WhyItMatters'

import HowToLearn from '@/app/components/HowToLearn'
import HowToLearnEs from '@/app/components/es/HowToLearn'
import HowToLearnDe from '@/app/components/de/HowToLearn'
import HowToLearnCs from '@/app/components/cs/HowToLearn'
import HowToLearnUk from '@/app/components/uk/HowToLearn'
import HowToLearnFi from '@/app/components/fi/HowToLearn'
import HowToLearnFr from '@/app/components/fr/HowToLearn'
import HowToLearnSv from '@/app/components/sv/HowToLearn'
import HowToLearnPt from '@/app/components/pt/HowToLearn'
import HowToLearnEn from '@/app/components/en/HowToLearn'
import HowToLearnPl from '@/app/components/pl/HowToLearn'
import HowToLearnId from '@/app/components/id/HowToLearn'

import LearningPaths from '@/app/components/LearningPaths'
import LearningPathsEs from '@/app/components/es/LearningPaths'
import LearningPathsDe from '@/app/components/de/LearningPaths'
import LearningPathsCs from '@/app/components/cs/LearningPaths'
import LearningPathsUk from '@/app/components/uk/LearningPaths'
import LearningPathsFi from '@/app/components/fi/LearningPaths'
import LearningPathsFr from '@/app/components/fr/LearningPaths'
import LearningPathsSv from '@/app/components/sv/LearningPaths'
import LearningPathsPt from '@/app/components/pt/LearningPaths'
import LearningPathsEn from '@/app/components/en/LearningPaths'
import LearningPathsPl from '@/app/components/pl/LearningPaths'
import LearningPathsId from '@/app/components/id/LearningPaths'

import PracticePreview from '@/app/components/PracticePreview'
import PracticePreviewEs from '@/app/components/es/PracticePreview'
import PracticePreviewDe from '@/app/components/de/PracticePreview'
import PracticePreviewCs from '@/app/components/cs/PracticePreview'
import PracticePreviewUk from '@/app/components/uk/PracticePreview'
import PracticePreviewFi from '@/app/components/fi/PracticePreview'
import PracticePreviewFr from '@/app/components/fr/PracticePreview'
import PracticePreviewSv from '@/app/components/sv/PracticePreview'
import PracticePreviewPt from '@/app/components/pt/PracticePreview'
import PracticePreviewEn from '@/app/components/en/PracticePreview'
import PracticePreviewPl from '@/app/components/pl/PracticePreview'
import PracticePreviewId from '@/app/components/id/PracticePreview'

import GamesSection from '@/app/components/GamesSection'
import GamesSectionEs from '@/app/components/es/GamesSection'
import GamesSectionDe from '@/app/components/de/GamesSection'
import GamesSectionCs from '@/app/components/cs/GamesSection'
import GamesSectionUk from '@/app/components/uk/GamesSection'
import GamesSectionFi from '@/app/components/fi/GamesSection'
import GamesSectionFr from '@/app/components/fr/GamesSection'
import GamesSectionSv from '@/app/components/sv/GamesSection'
import GamesSectionPt from '@/app/components/pt/GamesSection'
import GamesSectionEn from '@/app/components/en/GamesSection'
import GamesSectionPl from '@/app/components/pl/GamesSection'
import GamesSectionId from '@/app/components/id/GamesSection'

import PrintableExercises from '@/app/components/PrintableExercises'
import PrintableExercisesEs from '@/app/components/es/PrintableExercises'
import PrintableExercisesDe from '@/app/components/de/PrintableExercises'
import PrintableExercisesCs from '@/app/components/cs/PrintableExercises'
import PrintableExercisesUk from '@/app/components/uk/PrintableExercises'
import PrintableExercisesFi from '@/app/components/fi/PrintableExercises'
import PrintableExercisesFr from '@/app/components/fr/PrintableExercises'
import PrintableExercisesSv from '@/app/components/sv/PrintableExercises'
import PrintableExercisesPt from '@/app/components/pt/PrintableExercises'
import PrintableExercisesEn from '@/app/components/en/PrintableExercises'
import PrintableExercisesPl from '@/app/components/pl/PrintableExercises'
import PrintableExercisesId from '@/app/components/id/PrintableExercises'

import AudienceSection from '@/app/components/AudienceSection'
import AudienceSectionEs from '@/app/components/es/AudienceSection'
import AudienceSectionDe from '@/app/components/de/AudienceSection'
import AudienceSectionCs from '@/app/components/cs/AudienceSection'
import AudienceSectionUk from '@/app/components/uk/AudienceSection'
import AudienceSectionFi from '@/app/components/fi/AudienceSection'
import AudienceSectionFr from '@/app/components/fr/AudienceSection'
import AudienceSectionSv from '@/app/components/sv/AudienceSection'
import AudienceSectionPt from '@/app/components/pt/AudienceSection'
import AudienceSectionEn from '@/app/components/en/AudienceSection'
import AudienceSectionPl from '@/app/components/pl/AudienceSection'
import AudienceSectionId from '@/app/components/id/AudienceSection'

import Footer from '@/app/components/Footer'
import FooterEs from '@/app/components/es/Footer'
import FooterDe from '@/app/components/de/Footer'
import FooterCs from '@/app/components/cs/Footer'
import FooterUk from '@/app/components/uk/Footer'
import FooterFi from '@/app/components/fi/Footer'
import FooterFr from '@/app/components/fr/Footer'
import FooterSv from '@/app/components/sv/Footer'
import FooterPt from '@/app/components/pt/Footer'
import FooterEn from '@/app/components/en/Footer'
import FooterPl from '@/app/components/pl/Footer'
import FooterId from '@/app/components/id/Footer'

import { i18n, Locale, topicSlugs, siteConfig, languageNames } from '@/lib/i18n-config'
import { getAbsoluteUrl, getLocalizedPath, buildAlternatesMetadata } from '@/lib/url-helpers'
import { topicMetadata } from '@/lib/topic-metadata'

interface PageProps {
  params: {
    lang: string
    topic: string
  }
}

// Locale -> component lookup tables. No Header table: UniversalHeader is used
// directly (see app/components/shared/UniversalHeader.tsx).
const HeroByLocale: Record<Locale, ComponentType> = {
  tr: Hero, es: HeroEs, de: HeroDe, cs: HeroCs, uk: HeroUk, fi: HeroFi,
  fr: HeroFr, sv: HeroSv, pt: HeroPt, en: HeroEn, pl: HeroPl, id: HeroId,
}

const DefinitionSectionByLocale: Record<Locale, ComponentType> = {
  tr: DefinitionSection, es: DefinitionSectionEs, de: DefinitionSectionDe, cs: DefinitionSectionCs,
  uk: DefinitionSectionUk, fi: DefinitionSectionFi, fr: DefinitionSectionFr, sv: DefinitionSectionSv,
  pt: DefinitionSectionPt, en: DefinitionSectionEn, pl: DefinitionSectionPl, id: DefinitionSectionId,
}

const WhyItMattersByLocale: Record<Locale, ComponentType> = {
  tr: WhyItMatters, es: WhyItMattersEs, de: WhyItMattersDe, cs: WhyItMattersCs,
  uk: WhyItMattersUk, fi: WhyItMattersFi, fr: WhyItMattersFr, sv: WhyItMattersSv,
  pt: WhyItMattersPt, en: WhyItMattersEn, pl: WhyItMattersPl, id: WhyItMattersId,
}

const HowToLearnByLocale: Record<Locale, ComponentType> = {
  tr: HowToLearn, es: HowToLearnEs, de: HowToLearnDe, cs: HowToLearnCs,
  uk: HowToLearnUk, fi: HowToLearnFi, fr: HowToLearnFr, sv: HowToLearnSv,
  pt: HowToLearnPt, en: HowToLearnEn, pl: HowToLearnPl, id: HowToLearnId,
}

const LearningPathsByLocale: Record<Locale, ComponentType> = {
  tr: LearningPaths, es: LearningPathsEs, de: LearningPathsDe, cs: LearningPathsCs,
  uk: LearningPathsUk, fi: LearningPathsFi, fr: LearningPathsFr, sv: LearningPathsSv,
  pt: LearningPathsPt, en: LearningPathsEn, pl: LearningPathsPl, id: LearningPathsId,
}

const PracticePreviewByLocale: Record<Locale, ComponentType<{ rangeStart: number; rangeEnd: number }>> = {
  tr: PracticePreview, es: PracticePreviewEs, de: PracticePreviewDe, cs: PracticePreviewCs,
  uk: PracticePreviewUk, fi: PracticePreviewFi, fr: PracticePreviewFr, sv: PracticePreviewSv,
  pt: PracticePreviewPt, en: PracticePreviewEn, pl: PracticePreviewPl, id: PracticePreviewId,
}

const GamesSectionByLocale: Record<Locale, ComponentType> = {
  tr: GamesSection, es: GamesSectionEs, de: GamesSectionDe, cs: GamesSectionCs,
  uk: GamesSectionUk, fi: GamesSectionFi, fr: GamesSectionFr, sv: GamesSectionSv,
  pt: GamesSectionPt, en: GamesSectionEn, pl: GamesSectionPl, id: GamesSectionId,
}

const PrintableExercisesByLocale: Record<Locale, ComponentType> = {
  tr: PrintableExercises, es: PrintableExercisesEs, de: PrintableExercisesDe, cs: PrintableExercisesCs,
  uk: PrintableExercisesUk, fi: PrintableExercisesFi, fr: PrintableExercisesFr, sv: PrintableExercisesSv,
  pt: PrintableExercisesPt, en: PrintableExercisesEn, pl: PrintableExercisesPl, id: PrintableExercisesId,
}

const AudienceSectionByLocale: Record<Locale, ComponentType> = {
  tr: AudienceSection, es: AudienceSectionEs, de: AudienceSectionDe, cs: AudienceSectionCs,
  uk: AudienceSectionUk, fi: AudienceSectionFi, fr: AudienceSectionFr, sv: AudienceSectionSv,
  pt: AudienceSectionPt, en: AudienceSectionEn, pl: AudienceSectionPl, id: AudienceSectionId,
}

const FooterByLocale: Record<Locale, ComponentType> = {
  tr: Footer, es: FooterEs, de: FooterDe, cs: FooterCs, uk: FooterUk, fi: FooterFi,
  fr: FooterFr, sv: FooterSv, pt: FooterPt, en: FooterEn, pl: FooterPl, id: FooterId,
}

// OpenGraph locale codes aren't part of topicMetadata's fields (title/description/
// keywords/og/twitter only) since they're a distinct locale-code concept, not page
// copy. Kept here, same pattern as the analogous map in [slug]/page.tsx.
const ogLocaleMap: Record<Locale, string> = {
  tr: 'tr_TR', es: 'es_MX', de: 'de_DE', cs: 'cs_CZ', uk: 'uk_UA', fi: 'fi_FI',
  fr: 'fr_FR', sv: 'sv_SE', pt: 'pt_BR', en: 'en_US', pl: 'pl_PL', id: 'id_ID',
}

export async function generateStaticParams() {
  // Derived from i18n-config instead of a hardcoded list, so it can never drift
  // out of sync with the locales/topic slugs defined there.
  const params = i18n.locales.map(locale => ({ lang: locale, topic: topicSlugs[locale] }))

  // One param per locale (this route has no slug dimension) = 12 total.
  if (process.env.NODE_ENV !== 'production') {
    console.assert(
      params.length === 12,
      `generateStaticParams: expected 12 params (one per locale), got ${params.length}`
    )
  }

  return params
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, topic } = await params

  if (!i18n.locales.includes(lang as Locale) || topic !== topicSlugs[lang as Locale]) {
    return {}
  }

  const locale = lang as Locale
  const config = siteConfig[locale]
  const baseUrl = getAbsoluteUrl(locale)
  const hreflang = buildAlternatesMetadata('topic')
  const meta = topicMetadata[locale]

  return {
    metadataBase: new URL(config.domain),
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: getLocalizedPath(locale),
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
      title: meta.ogTitle,
      description: meta.ogDescription,
      type: 'website',
      locale: ogLocaleMap[locale],
      url: baseUrl,
      siteName: config.name,
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.twitterTitle,
      description: meta.twitterDescription,
    },
  }
}

export default async function TopicHomePage({ params }: PageProps) {
  const { lang, topic } = await params

  if (!i18n.locales.includes(lang as Locale) || topic !== topicSlugs[lang as Locale]) {
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

  const Hero = HeroByLocale[locale]
  const DefinitionSection = DefinitionSectionByLocale[locale]
  const WhyItMatters = WhyItMattersByLocale[locale]
  const HowToLearn = HowToLearnByLocale[locale]
  const LearningPaths = LearningPathsByLocale[locale]
  const PracticePreview = PracticePreviewByLocale[locale]
  const GamesSection = GamesSectionByLocale[locale]
  const PrintableExercises = PrintableExercisesByLocale[locale]
  const AudienceSection = AudienceSectionByLocale[locale]
  const Footer = FooterByLocale[locale]

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
      <UniversalHeader lang={locale} />
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
