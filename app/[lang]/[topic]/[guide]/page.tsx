import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { Locale, topicSlugs, siteConfig, guides } from '@/lib/i18n-config'
import { getAbsoluteUrl } from '@/lib/url-helpers'
import { generateHreflangMetadata } from '@/app/components/HreflangLinks'

// Import the existing guide page components
// We'll dynamically import them based on the guide slug
import ForStudents from '@/app/ogrenciler-icin/page'
import ForTeachers from '@/app/ogretmenler-icin/page'
import ForParents from '@/app/veliler-icin/page'

interface PageProps {
  params: {
    lang: string
    topic: string
    guide: string
  }
}

const guideComponents: Record<string, any> = {
  'ogrenciler-icin': ForStudents,
  'ogretmenler-icin': ForTeachers,
  'veliler-icin': ForParents,
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

export async function generateStaticParams() {
  const params: Array<{ lang: string; topic: string; guide: string }> = []
  
  const langs = [
    { lang: 'tr', topic: 'carpim-tablosu' },
    { lang: 'es', topic: 'tablas-de-multiplicar' },
    { lang: 'de', topic: 'einmaleins' },
  ]

  langs.forEach(({ lang, topic }) => {
    const locale = lang as Locale
    const localeGuides = guides[locale]
    
    Object.values(localeGuides).forEach(guide => {
      params.push({ lang, topic, guide })
    })
  })

  return params
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, topic, guide } = params
  
  if (!['tr', 'es', 'de'].includes(lang) || topic !== topicSlugs[lang as Locale]) {
    return {}
  }

  const locale = lang as Locale
  const config = siteConfig[locale]
  const localeGuides = guides[locale]
  
  // Validate guide belongs to this language
  if (!Object.values(localeGuides).includes(guide)) {
    return {}
  }

  const hreflang = generateHreflangMetadata(guide)

  // Turkish metadata (production)
  if (locale === 'tr') {
    const meta = guideMetadata[guide]
    if (!meta) {
      return {}
    }

    return {
      metadataBase: new URL(config.domain),
      title: meta.title,
      description: meta.description,
      keywords: meta.keywords,
      alternates: {
        canonical: `/${lang}/${topic}/${guide}`,
        ...hreflang,
      },
      robots: {
        index: true,
        follow: true,
      },
    }
  }

  // Placeholder for ES/DE
  const guideType = Object.keys(localeGuides).find(
    key => localeGuides[key as keyof typeof localeGuides] === guide
  )

  return {
    metadataBase: new URL(config.domain),
    title: `${guideType ? guideType.charAt(0).toUpperCase() + guideType.slice(1) : 'Guide'} - ${config.name}`,
    description: `Guide for ${guideType || 'learning'} multiplication tables`,
    alternates: {
      canonical: `/${lang}/${topic}/${guide}`,
      ...hreflang,
    },
    robots: {
      index: false,
      follow: true,
    },
  }
}

export default function GuidePageRoute({ params }: PageProps) {
  const { lang, topic, guide } = params

  if (!['tr', 'es', 'de'].includes(lang) || topic !== topicSlugs[lang as Locale]) {
    notFound()
  }

  const locale = lang as Locale
  const localeGuides = guides[locale]
  
  // Validate guide belongs to this language
  if (!Object.values(localeGuides).includes(guide)) {
    notFound()
  }

  // Turkish version (production-ready) - use existing components
  if (locale === 'tr') {
    const Component = guideComponents[guide]
    if (!Component) {
      notFound()
    }
    
    return <Component />
  }

  // Placeholder for ES/DE
  const guideType = Object.keys(localeGuides).find(
    key => localeGuides[key as keyof typeof localeGuides] === guide
  )

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          {guideType ? `For ${guideType.charAt(0).toUpperCase() + guideType.slice(1)}` : 'Guide'} - {siteConfig[locale].name}
        </h1>
        <p className="text-slate-500">
          Content coming soon in {lang.toUpperCase()}...
        </p>
      </div>
    </main>
  )
}
