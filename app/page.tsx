import Link from 'next/link'
import { Metadata } from 'next'
import { i18n, languageNames, topicSlugs, siteConfig } from '@/lib/i18n-config'
import { buildAlternatesMetadata } from '@/lib/url-helpers'

export const metadata: Metadata = {
  title: 'Mathematives - Learn Mathematics in Your Language',
  description: 'Interactive math learning platform available in 12 languages. Choose your language and start learning with fun exercises, games, and guides.',
  alternates: {
    canonical: 'https://mathematives.com',
    ...buildAlternatesMetadata('root'),
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function LanguageSelector() {
  const languages = [
    {
      code: 'en',
      name: languageNames.en,
      flag: '🇺🇸',
      nativeCta: 'Start Learning',
    },
    {
      code: 'tr',
      name: languageNames.tr,
      flag: '🇹🇷',
      nativeCta: 'Öğrenmeye Başla',
    },
    {
      code: 'es',
      name: languageNames.es,
      flag: '🇪🇸',
      nativeCta: 'Empieza a Aprender',
    },
    {
      code: 'de',
      name: languageNames.de,
      flag: '🇩🇪',
      nativeCta: 'Jetzt Lernen',
    },
    {
      code: 'cs',
      name: languageNames.cs,
      flag: '🇨🇿',
      nativeCta: 'Začněte se učit',
    },
    {
      code: 'uk',
      name: languageNames.uk,
      flag: '🇺🇦',
      nativeCta: 'Почати навчання',
    },
    {
      code: 'fi',
      name: languageNames.fi,
      flag: '🇫🇮',
      nativeCta: 'Aloita oppiminen',
    },
    {
      code: 'fr',
      name: languageNames.fr,
      flag: '🇫🇷',
      nativeCta: 'Commencer à apprendre',
    },
    {
      code: 'sv',
      name: languageNames.sv,
      flag: '🇸🇪',
      nativeCta: 'Börja lära dig',
    },
    {
      code: 'pt',
      name: languageNames.pt,
      flag: '🇧🇷',
      nativeCta: 'Comece a aprender',
    },
    {
      code: 'pl',
      name: languageNames.pl,
      flag: '🇵🇱',
      nativeCta: 'Zacznij się uczyć',
    },
    {
      code: 'id',
      name: languageNames.id,
      flag: '🇮🇩',
      nativeCta: 'Mulai Belajar',
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">
            Mathematives
          </h1>
          <p className="text-xl text-slate-600">
            Choose your language to start learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {languages.map((lang) => (
            <Link
              key={lang.code}
              href={`/${lang.code}`}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-5 hover:scale-105 border-2 border-transparent hover:border-blue-500 flex items-center gap-4"
            >
              <div className="text-5xl flex-shrink-0">{lang.flag}</div>
              <div className="flex-1 min-w-0">
                <h2 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {lang.name}
                </h2>
                <p className="text-sm text-blue-600 font-medium mt-1">
                  {lang.nativeCta} →
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-slate-500">
            Mathematives - Interactive math learning platform available in 12 languages
          </p>
        </div>
      </div>
    </main>
  )
}
