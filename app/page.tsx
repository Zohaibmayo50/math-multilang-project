import Link from 'next/link'
import { Metadata } from 'next'
import { i18n, languageNames, topicSlugs, siteConfig } from '@/lib/i18n-config'

export const metadata: Metadata = {
  title: 'Multiplication Tables | Çarpım Tablosu | Tablas de Multiplicar | Einmaleins | Násobilka | Таблиця множення',
  description: 'Learn multiplication tables in your language. Choose Turkish, Spanish, German, Czech, or Ukrainian.',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function LanguageSelector() {
  const languages = [
    {
      code: 'tr',
      name: languageNames.tr,
      flag: '🇹🇷',
      topic: 'Çarpım Tablosu',
      description: '1\'den 100\'e kadar çarpım tablolarını öğrenin',
    },
    {
      code: 'es',
      name: languageNames.es,
      flag: '🇪🇸',
      topic: 'Tablas de Multiplicar',
      description: 'Aprende las tablas de multiplicar del 1 al 100',
    },
    {
      code: 'de',
      name: languageNames.de,
      flag: '🇩🇪',
      topic: 'Einmaleins',
      description: 'Lerne das Einmaleins von 1 bis 100',
    },
    {
      code: 'cs',
      name: languageNames.cs,
      flag: '🇨🇿',
      topic: 'Násobilka',
      description: 'Naučte se malou násobilku od 1 do 100',
    },
    {
      code: 'uk',
      name: languageNames.uk,
      flag: '🇺🇦',
      topic: 'Таблиця множення',
      description: 'Вивчіть таблицю множення від 1 до 100',
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">
            Multiplication Tables
          </h1>
          <p className="text-xl text-slate-600">
            Choose your language to start learning
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {languages.map((lang) => (
            <Link
              key={lang.code}
              href={`/${lang.code}/${topicSlugs[lang.code as keyof typeof topicSlugs]}`}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 hover:scale-105 border-2 border-transparent hover:border-blue-500"
            >
              <div className="text-center">
                <div className="text-6xl mb-4">{lang.flag}</div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {lang.name}
                </h2>
                <p className="text-lg font-semibold text-slate-700 mb-3">
                  {lang.topic}
                </p>
                <p className="text-sm text-slate-600">
                  {lang.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-slate-500">
            Interactive learning platform for multiplication tables 1-100
          </p>
        </div>
      </div>
    </main>
  )
}
