import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import type { ComponentType } from 'react'
import RangePage from '@/app/components/RangePage'
import NumberPage from '@/app/components/NumberPage'
import RangePageEs from '@/app/components/es/RangePage'
import NumberPageEs from '@/app/components/es/NumberPage'
import RangePageDe from '@/app/components/de/RangePage'
import NumberPageDe from '@/app/components/de/NumberPage'
import RangePageCs from '@/app/components/cs/RangePage'
import NumberPageCs from '@/app/components/cs/NumberPage'
import RangePageUk from '@/app/components/uk/RangePage'
import NumberPageUk from '@/app/components/uk/NumberPage'
import RangePageFi from '@/app/components/fi/RangePage'
import NumberPageFi from '@/app/components/fi/NumberPage'
import RangePageFr from '@/app/components/fr/RangePage'
import NumberPageFr from '@/app/components/fr/NumberPage'
import RangePageSv from '@/app/components/sv/RangePage'
import NumberPageSv from '@/app/components/sv/NumberPage'
import RangePagePt from '@/app/components/pt/RangePage'
import NumberPagePt from '@/app/components/pt/NumberPage'
import RangePageEn from '@/app/components/en/RangePage'
import NumberPageEn from '@/app/components/en/NumberPage'
import RangePagePl from '@/app/components/pl/RangePage'
import NumberPagePl from '@/app/components/pl/NumberPage'
import RangePageId from '@/app/components/id/RangePage'
import NumberPageId from '@/app/components/id/NumberPage'
import { i18n, Locale, topicSlugs, siteConfig, guides, languageNames } from '@/lib/i18n-config'
import { getAllRanges, getAllNumbers, getRangeFromNumber, buildAlternatesMetadata } from '@/lib/url-helpers'
import { rangeMetadata, guideMetadata, RangeMetaEntry } from '@/lib/range-metadata'
import { numberMetadata } from '@/lib/number-metadata'

// Import Turkish guide page components
import ForStudents from '@/app/_guide-components/ogrenciler-icin/page'
import ForTeachers from '@/app/_guide-components/ogretmenler-icin/page'
import ForParents from '@/app/_guide-components/veliler-icin/page'

// Import Spanish guide page components
import ForStudentsEs from '@/app/_guide-components/para-estudiantes/page'
import ForTeachersEs from '@/app/_guide-components/para-profesores/page'
import ForParentsEs from '@/app/_guide-components/para-padres/page'

// Import German guide page components
import ForStudentsDe from '@/app/_guide-components/fuer-schueler/page'
import ForTeachersDe from '@/app/_guide-components/fuer-lehrer/page'
import ForParentsDe from '@/app/_guide-components/fuer-eltern/page'

// Import Czech guide page components
import ForStudentsCs from '@/app/_guide-components/pro-studenty/page'
import ForTeachersCs from '@/app/_guide-components/pro-ucitele/page'
import ForParentsCs from '@/app/_guide-components/pro-rodice/page'

// Import Ukrainian guide page components
import ForStudentsUk from '@/app/_guide-components/dlya-uchniv/page'
import ForTeachersUk from '@/app/_guide-components/dlya-vchyteliv/page'
import ForParentsUk from '@/app/_guide-components/dlya-batkiv/page'

// Import Finnish guide page components
import ForStudentsFi from '@/app/_guide-components/oppilaille/page'
import ForTeachersFi from '@/app/_guide-components/opettajille/page'
import ForParentsFi from '@/app/_guide-components/vanhemmille/page'

// Import French guide page components
import ForStudentsFr from '@/app/_guide-components/pour-les-eleves/page'
import ForTeachersFr from '@/app/_guide-components/pour-les-enseignants/page'
import ForParentsFr from '@/app/_guide-components/pour-les-parents/page'

// Import Swedish guide page components
import ForStudentsSv from '@/app/_guide-components/for-elever/page'
import ForTeachersSv from '@/app/_guide-components/for-larare/page'
import ForParentsSv from '@/app/_guide-components/for-foraldrar/page'

// Import Portuguese guide page components
import ForStudentsPt from '@/app/_guide-components/para-estudantes/page'
import ForTeachersPt from '@/app/_guide-components/para-professores/page'
import ForParentsPt from '@/app/_guide-components/para-pais/page'

// Import English guide page components
import ForStudentsEn from '@/app/_guide-components/for-students/page'
import ForTeachersEn from '@/app/_guide-components/for-teachers/page'
import ForParentsEn from '@/app/_guide-components/for-parents/page'

// Import Polish guide page components
import DlaUczniwPl from '@/app/_guide-components/dla-uczniow/page'
import DlaNauczycieliPl from '@/app/_guide-components/dla-nauczycieli/page'
import DlaRodzicwPl from '@/app/_guide-components/dla-rodzicow/page'

// Import Indonesian guide page components
import UntukSiswa from '@/app/_guide-components/untuk-siswa/page'
import UntukGuru from '@/app/_guide-components/untuk-guru/page'
import UntukOrangTua from '@/app/_guide-components/untuk-orang-tua/page'

interface PageProps {
  params: {
    lang: string
    topic: string
    slug: string
  }
}

// Locale -> thin wrapper component lookup tables (each wrapper delegates to
// Universal{Number,Range}Page; see app/components/shared/Universal*.tsx).
const NumberPageByLocale: Record<Locale, ComponentType<{ number: number; rangeStart: number; rangeEnd: number }>> = {
  tr: NumberPage,
  es: NumberPageEs,
  de: NumberPageDe,
  cs: NumberPageCs,
  uk: NumberPageUk,
  fi: NumberPageFi,
  fr: NumberPageFr,
  sv: NumberPageSv,
  pt: NumberPagePt,
  en: NumberPageEn,
  pl: NumberPagePl,
  id: NumberPageId,
}

const RangePageByLocale: Record<Locale, ComponentType<{
  rangeStart: number
  rangeEnd: number
  nextRangeUrl?: string
  prevRangeUrl?: string
  difficultyLevel: 'beginner' | 'intermediate' | 'advanced'
  difficultyColor: string
}>> = {
  tr: RangePage,
  es: RangePageEs,
  de: RangePageDe,
  cs: RangePageCs,
  uk: RangePageUk,
  fi: RangePageFi,
  fr: RangePageFr,
  sv: RangePageSv,
  pt: RangePagePt,
  en: RangePageEn,
  pl: RangePagePl,
  id: RangePageId,
}

// Locale -> guide slug -> guide component. Guide components themselves stay
// standalone (not unified); only the dispatch collapses into one table.
const guideComponents: Record<Locale, Record<string, ComponentType>> = {
  tr: {
    'ogrenciler-icin': ForStudents,
    'ogretmenler-icin': ForTeachers,
    'veliler-icin': ForParents,
  },
  es: {
    'para-estudiantes': ForStudentsEs,
    'para-profesores': ForTeachersEs,
    'para-padres': ForParentsEs,
  },
  de: {
    'fuer-schueler': ForStudentsDe,
    'fuer-lehrer': ForTeachersDe,
    'fuer-eltern': ForParentsDe,
  },
  cs: {
    'pro-studenty': ForStudentsCs,
    'pro-ucitele': ForTeachersCs,
    'pro-rodice': ForParentsCs,
  },
  uk: {
    'dlya-uchniv': ForStudentsUk,
    'dlya-vchyteliv': ForTeachersUk,
    'dlya-batkiv': ForParentsUk,
  },
  fi: {
    'oppilaille': ForStudentsFi,
    'opettajille': ForTeachersFi,
    'vanhemmille': ForParentsFi,
  },
  fr: {
    'pour-les-eleves': ForStudentsFr,
    'pour-les-enseignants': ForTeachersFr,
    'pour-les-parents': ForParentsFr,
  },
  sv: {
    'for-elever': ForStudentsSv,
    'for-larare': ForTeachersSv,
    'for-foraldrar': ForParentsSv,
  },
  pt: {
    'para-estudantes': ForStudentsPt,
    'para-professores': ForTeachersPt,
    'para-pais': ForParentsPt,
  },
  en: {
    'for-students': ForStudentsEn,
    'for-teachers': ForTeachersEn,
    'for-parents': ForParentsEn,
  },
  pl: {
    'dla-uczniow': DlaUczniwPl,
    'dla-nauczycieli': DlaNauczycieliPl,
    'dla-rodzicow': DlaRodzicwPl,
  },
  id: {
    'untuk-siswa': UntukSiswa,
    'untuk-guru': UntukGuru,
    'untuk-orang-tua': UntukOrangTua,
  },
}

// Determine slug type
function getSlugType(slug: string, locale: Locale): 'range' | 'number' | 'guide' | null {
  if (/^\d+-\d+$/.test(slug)) return 'range'
  if (/^\d+$/.test(slug)) return 'number'
  const localeGuides = guides[locale]
  if (localeGuides && Object.values(localeGuides).includes(slug)) return 'guide'
  return null
}

export async function generateStaticParams() {
  const params: Array<{ lang: string; topic: string; slug: string }> = []

  // Derived from i18n-config instead of a hardcoded list, so it can never drift
  // out of sync with the locales/topic slugs defined there.
  const langs = i18n.locales.map(locale => ({ lang: locale, topic: topicSlugs[locale] }))

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

    const localeGuides = guides[locale]
    Object.values(localeGuides).forEach(guide => {
      params.push({ lang, topic, slug: guide })
    })
  })

  // 10 ranges + 100 numbers + 3 guides = 113 slugs per locale x 12 locales = 1356 total params.
  if (process.env.NODE_ENV !== 'production') {
    console.assert(
      params.length === 1356,
      `generateStaticParams: expected 1356 params (113 per locale x 12 locales), got ${params.length}`
    )
  }

  return params
}

// Helper function to add OpenGraph and Twitter metadata
function enrichMetadata(
  baseMetadata: Metadata,
  lang: string,
  topic: string,
  slug: string,
  title: string,
  description: string
): Metadata {
  const config = siteConfig[lang as Locale]
  const fullUrl = `${config.domain}/${lang}/${topic}/${slug}`
  // TODO: this duplicates locale data conceptually (it's an OG-locale variant of the
  // `Locale` type), but lib/i18n-config.ts has no existing tr_TR/es_MX-style OG-locale
  // map to import here, so it stays inline for now.
  const localeMap: Record<string, string> = {
    en: 'en_US',
    tr: 'tr_TR',
    es: 'es_MX',
    de: 'de_DE',
    cs: 'cs_CZ',
    uk: 'uk_UA',
    fi: 'fi_FI',
    fr: 'fr_FR',
    sv: 'sv_SE',
    pt: 'pt_BR',
    pl: 'pl_PL',
    id: 'id_ID',
  }

  return {
    ...baseMetadata,
    openGraph: {
      title,
      description,
      type: 'website',
      locale: localeMap[lang] || 'en_US',
      url: fullUrl,
      siteName: config.name,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

// --- Locale-specific JSON-LD schema title/description phrasing ---
// These preserve the exact wording each locale used before this refactor. Most locales
// simply reuse the page metadata title/description; a few (es for ranges, en for numbers)
// historically used different, hand-written copy for the JSON-LD payload specifically.
// Kept as lookup tables (not locale branching) so the dispatch below stays data-driven.
const rangeSchemaTitleOverride: Partial<Record<Locale, (slug: string) => string>> = {
  es: (slug) => `Tablas de Multiplicar del ${slug}`,
}

const numberSchemaTitle: Record<Locale, (num: number, specialProp: string) => string> = {
  tr: (num, sp) => `${num} Çarpım Tablosu - ${sp}`,
  es: (num, sp) => `Tabla de Multiplicar del ${num} - ${sp}`,
  de: (num, sp) => `${num}er-Einmaleins - ${sp}`,
  cs: (num, sp) => `Násobilka ${num} - ${sp}`,
  uk: (num, sp) => `Таблиця Множення ${num} - ${sp}`,
  fi: (num, sp) => `Kertotaulu ${num} - ${sp}`,
  fr: (num, sp) => `Table de Multiplication ${num} - ${sp}`,
  sv: (num, sp) => `Multiplikationstabell ${num} - ${sp}`,
  pt: (num, sp) => `Tabuada do ${num} - ${sp}`,
  en: (num) => `${num} Times Table`,
  pl: (num, sp) => `Tabliczka Mnożenia ${num} - ${sp}`,
  id: (num, sp) => `Tabel Perkalian ${num} - ${sp}`,
}

const numberSchemaDescriptionOverride: Partial<Record<Locale, (num: number) => string>> = {
  en: (num) => `Learn the ${num} times table`,
}

function generateSlugSchema(
  slugType: 'number' | 'range' | 'guide',
  slug: string,
  lang: string,
  topic: string,
  config: any,
  metadata: { title: string; description: string }
) {
  const baseUrl = config.domain
  const fullUrl = `${baseUrl}/${lang}/${topic}/${slug}`

  // Breadcrumb schema (all pages)
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
        name: languageNames[lang as Locale],
        item: `${baseUrl}/${lang}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: lang === 'en' ? 'Multiplication Tables' :
              lang === 'tr' ? 'Çarpım Tablosu' :
              lang === 'es' ? 'Tablas de Multiplicar' :
              lang === 'de' ? 'Einmaleins' :
              lang === 'cs' ? 'Násobilka' :
              lang === 'uk' ? 'Таблиця множення' :
              lang === 'fi' ? 'Kertotaulut' :
              lang === 'fr' ? 'Table de Multiplication' :
              lang === 'sv' ? 'Multiplikationstabeller' :
              lang === 'pt' ? 'Tabuada' :
              lang === 'pl' ? 'Tabliczka Mnożenia' : 'Tabel Perkalian',
        item: `${baseUrl}/${lang}/${topic}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: metadata.title,
        item: fullUrl,
      },
    ],
  }

  if (slugType === 'number') {
    // Number pages: EducationalContent + WebPage + BreadcrumbList
    const number = parseInt(slug, 10)
    return {
      breadcrumb: breadcrumbSchema,
      webpage: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: metadata.title,
        description: metadata.description,
        url: fullUrl,
        inLanguage: lang,
        isPartOf: {
          '@type': 'WebSite',
          name: 'Mathematives',
          url: 'https://mathematives.com',
        },
      },
      educational: {
        '@context': 'https://schema.org',
        '@type': 'LearningResource',
        name: metadata.title,
        description: metadata.description,
        url: fullUrl,
        inLanguage: lang,
        educationalLevel: number <= 10 ? 'Beginner' : number <= 50 ? 'Intermediate' : 'Advanced',
        learningResourceType: 'Interactive Resource',
        teaches: metadata.description,
        typicalAgeRange: '6-12',
        educationalUse: ['practice', 'self-study',  'homework'],
      },
    }
  }

  if (slugType === 'range') {
    // Range pages: ItemList + BreadcrumbList
    const [start, end] = slug.split('-').map(Number)
    const numbers = Array.from({ length: end - start + 1 }, (_, i) => start + i)

    return {
      breadcrumb: breadcrumbSchema,
      itemList: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: metadata.title,
        description: metadata.description,
        numberOfItems: numbers.length,
        itemListElement: numbers.map((num, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: `${lang === 'en' ? 'Times Table' : lang === 'tr' ? 'Çarpım Tablosu' : lang === 'es' ? 'Tabla de Multiplicar' : lang === 'de' ? 'Einmaleins' : lang === 'cs' ? 'Násobilka' : lang === 'uk' ? 'Таблиця множення' : lang === 'fi' ? 'Kertotaulu' : lang === 'fr' ? 'Table de Multiplication' : lang === 'sv' ? 'Multiplikationstabell' : lang === 'pt' ? 'Tabuada' : lang === 'pl' ? 'Tabliczka Mnożenia' : 'Tabel Perkalian'} ${num}`,
          url: `${baseUrl}/${lang}/${topic}/${num}`,
        })),
      },
    }
  }

  if (slugType === 'guide') {
    // Guide pages: Article + BreadcrumbList
    return {
      breadcrumb: breadcrumbSchema,
      article: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: metadata.title,
        description: metadata.description,
        url: fullUrl,
        inLanguage: lang,
        author: {
          '@type': 'Organization',
          name: 'Mathematives',
          url: 'https://mathematives.com',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Mathematives',
          url: 'https://mathematives.com',
        },
      },
    }
  }

  return { breadcrumb: breadcrumbSchema }
}

// Helper to render schema scripts
function renderSchemas(schemas: ReturnType<typeof generateSlugSchema>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
      />
      {schemas.webpage && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webpage) }}
        />
      )}
      {schemas.educational && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.educational) }}
        />
      )}
      {schemas.itemList && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.itemList) }}
        />
      )}
      {schemas.article && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.article) }}
        />
      )}
    </>
  )
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, topic, slug } = await params

  if (!i18n.locales.includes(lang as Locale) || topic !== topicSlugs[lang as Locale]) {
    return {}
  }

  const locale = lang as Locale
  const config = siteConfig[locale]
  const slugType = getSlugType(slug, locale)

  if (!slugType) {
    return {}
  }

  const hreflang = buildAlternatesMetadata(slugType, slug)

  if (slugType === 'range') {
    const meta = rangeMetadata[locale][slug]
    if (!meta) return {}

    return enrichMetadata(
      {
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
      },
      lang,
      topic,
      slug,
      meta.title,
      meta.description
    )
  }

  if (slugType === 'number') {
    const num = parseInt(slug, 10)
    if (isNaN(num) || num < 1 || num > 100) return {}

    const title = numberMetadata[locale].titles[num]
    const description = numberMetadata[locale].descriptions[num]

    return enrichMetadata(
      {
        metadataBase: new URL(config.domain),
        title,
        description,
        alternates: {
          canonical: `/${lang}/${topic}/${slug}`,
          ...hreflang,
        },
        robots: {
          index: true,
          follow: true,
        },
      },
      lang,
      topic,
      slug,
      title,
      description
    )
  }

  if (slugType === 'guide') {
    const meta = guideMetadata[locale][slug]
    if (!meta) return {}

    return enrichMetadata(
      {
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
      },
      lang,
      topic,
      slug,
      meta.title,
      meta.description
    )
  }

  return {}
}

export default async function SlugPage({ params }: PageProps) {
  const { lang, topic, slug } = await params

  if (!i18n.locales.includes(lang as Locale) || topic !== topicSlugs[lang as Locale]) {
    notFound()
  }

  const locale = lang as Locale
  const config = siteConfig[locale]
  const slugType = getSlugType(slug, locale)

  if (!slugType) {
    notFound()
  }

  if (slugType === 'range') {
    const meta: RangeMetaEntry | undefined = rangeMetadata[locale][slug]
    if (!meta) notFound()

    const [start, end] = slug.split('-').map(Number)
    if (isNaN(start) || isNaN(end) || start > end) notFound()

    const schemaTitle = rangeSchemaTitleOverride[locale]?.(slug) ?? meta.title

    const schemas = generateSlugSchema(
      'range',
      slug,
      lang,
      topic,
      config,
      { title: schemaTitle, description: meta.description }
    )

    const allRanges = getAllRanges()
    const currentIndex = allRanges.indexOf(slug)
    const nextRange = currentIndex < allRanges.length - 1 ? allRanges[currentIndex + 1] : undefined
    const prevRange = currentIndex > 0 ? allRanges[currentIndex - 1] : undefined

    const RangeComponent = RangePageByLocale[locale]

    return (
      <>
        {renderSchemas(schemas)}
        <RangeComponent
          rangeStart={start}
          rangeEnd={end}
          nextRangeUrl={nextRange ? `/${lang}/${topic}/${nextRange}` : undefined}
          prevRangeUrl={prevRange ? `/${lang}/${topic}/${prevRange}` : undefined}
          difficultyLevel={meta.level}
          difficultyColor={meta.color}
        />
      </>
    )
  }

  if (slugType === 'number') {
    const num = parseInt(slug, 10)
    if (isNaN(num) || num < 1 || num > 100) notFound()

    const range = getRangeFromNumber(num)
    const [rangeStart, rangeEnd] = range.split('-').map(Number)

    const localeNumberMeta = numberMetadata[locale]
    const specialProp = localeNumberMeta.specialProperties[num]
    const description = localeNumberMeta.descriptions[num]
    const schemaTitle = numberSchemaTitle[locale](num, specialProp)
    const schemaDescription = numberSchemaDescriptionOverride[locale]?.(num) ?? description

    const schemas = generateSlugSchema(
      'number',
      slug,
      lang,
      topic,
      config,
      { title: schemaTitle, description: schemaDescription }
    )

    const NumberComponent = NumberPageByLocale[locale]

    return (
      <>
        {renderSchemas(schemas)}
        <NumberComponent number={num} rangeStart={rangeStart} rangeEnd={rangeEnd} />
      </>
    )
  }

  if (slugType === 'guide') {
    const Component = guideComponents[locale]?.[slug]
    if (!Component) notFound()

    return <Component />
  }

  notFound()
}
