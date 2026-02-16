import Link from 'next/link'
import { Metadata } from 'next'
import { i18n, languageNames, topicSlugs, siteConfig } from '@/lib/i18n-config'
import { buildAlternatesMetadata } from '@/lib/url-helpers'

export const metadata: Metadata = {
  title: 'Multiplication Tables 1-100 - Free Math Practice in 12 Languages',
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
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">
            Mathematives
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto">
            The free multiplication tables learning platform — available in 12 languages for students, parents, and teachers worldwide.
          </p>
        </div>
      </section>

      {/* Language Selection */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-8">
            Choose Your Language to Start Learning
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {languages.map((lang) => (
              <Link
                key={lang.code}
                href={`/${lang.code}`}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-5 hover:scale-105 border-2 border-transparent hover:border-blue-500 flex items-center gap-4"
              >
                <div className="text-5xl flex-shrink-0">{lang.flag}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {lang.name}
                  </h3>
                  <p className="text-sm text-blue-600 font-medium mt-1">
                    {lang.nativeCta} →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What is Mathematives */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-6">
            What is Mathematives?
          </h2>
          <p className="text-lg text-slate-700 text-center max-w-3xl mx-auto mb-12">
            Mathematives is a completely free, online multiplication tables learning platform designed for students of all ages. Whether you are a child just starting with the basics or an adult looking to sharpen your mental math, our step-by-step lessons cover every multiplication table from 1 to 100 — with clear explanations, helpful tips, and practice exercises.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-xl bg-blue-50">
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="font-bold text-slate-900 mb-2">12 Languages</h3>
              <p className="text-sm text-slate-600">Learn multiplication tables in English, Spanish, French, German, Portuguese, Turkish, Czech, Ukrainian, Finnish, Swedish, Polish, and Indonesian.</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-green-50">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="font-bold text-slate-900 mb-2">Tables 1 to 100</h3>
              <p className="text-sm text-slate-600">Complete coverage of every multiplication table from 1 through 100. Start simple and progress to more advanced numbers at your own pace.</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-purple-50">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold text-slate-900 mb-2">Step-by-Step Lessons</h3>
              <p className="text-sm text-slate-600">Each number page includes a full multiplication chart, number properties, learning tips, and strategies tailored to that specific table.</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-orange-50">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="font-bold text-slate-900 mb-2">100% Free Forever</h3>
              <p className="text-sm text-slate-600">No sign-ups, no subscriptions, no hidden costs. All content is freely accessible to everyone — students, parents, and teachers alike.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-12">
            How It Works — 3 Simple Steps
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Pick Your Language</h3>
              <p className="text-slate-600">Select from 12 available languages above. All content is fully translated and adapted for each language.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Choose a Table</h3>
              <p className="text-slate-600">Browse tables by individual number (1–100) or by range groups (1–10, 11–20, etc.). Each page is dedicated to one number.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Learn and Practice</h3>
              <p className="text-slate-600">Study the complete multiplication chart, learn quick tips and strategies, then test your skills with interactive practice exercises.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-12">
            Who Benefits from Mathematives?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-2xl p-6">
              <div className="text-4xl mb-4">👨‍🎓</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Students</h3>
              <p className="text-slate-700">Whether you are in primary school learning your first times tables or a secondary student building fluency, Mathematives provides structured lessons that make multiplication easy and fun. Learn at your own pace with no pressure.</p>
            </div>
            <div className="bg-orange-50 rounded-2xl p-6">
              <div className="text-4xl mb-4">👨‍👩‍👧</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Parents</h3>
              <p className="text-slate-700">Help your child master multiplication at home. Our clear, distraction-free pages make it easy to study together. Every table includes tips you can use to guide your child, plus printable exercises for offline practice.</p>
            </div>
            <div className="bg-emerald-50 rounded-2xl p-6">
              <div className="text-4xl mb-4">👩‍🏫</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Teachers</h3>
              <p className="text-slate-700">Use Mathematives as a free supplementary classroom resource. Assign specific tables for homework, use our range pages for group activities, or share our guides for pedagogical strategies on teaching multiplication effectively.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Will Learn */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-6">
            What You Will Find on Each Table Page
          </h2>
          <p className="text-lg text-slate-600 text-center max-w-2xl mx-auto mb-10">
            Every multiplication table page on Mathematives is designed to give you everything you need to understand and memorise that number&apos;s products.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm">
              <div className="text-2xl">📋</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Complete Multiplication Chart</h3>
                <p className="text-sm text-slate-600">A full table showing every product — for example, 7 × 1 through 7 × 10 — clearly laid out for quick reference.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm">
              <div className="text-2xl">💡</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Tips and Learning Strategies</h3>
                <p className="text-sm text-slate-600">Useful tricks like the 9&apos;s finger method, doubling strategies for even numbers, and pattern recognition techniques.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm">
              <div className="text-2xl">🔢</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Number Properties</h3>
                <p className="text-sm text-slate-600">Learn whether the number is prime, a perfect square, or has special mathematical properties that make it easier to remember.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm">
              <div className="text-2xl">🎮</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Interactive Practice</h3>
                <p className="text-sm text-slate-600">Test your knowledge with built-in quizzes and exercises that help reinforce what you have learned through active recall.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Is Mathematives really free?</h3>
              <p className="text-slate-700">Yes, completely. There are no hidden fees, subscriptions, or premium tiers. All 100 multiplication tables across all 12 languages are available to everyone at no cost.</p>
            </div>
            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">What age group is this for?</h3>
              <p className="text-slate-700">Mathematives is designed for learners of all ages. Primary school students (ages 6–12) will benefit the most from tables 1–10, while older students and adults can use the platform to master higher tables up to 100.</p>
            </div>
            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Why are multiplication tables important?</h3>
              <p className="text-slate-700">Knowing your times tables by heart is one of the most important foundations of mathematics. It makes division, fractions, algebra, and everyday calculations significantly faster and easier. Students who master multiplication early consistently perform better in all areas of maths.</p>
            </div>
            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Do I need to create an account?</h3>
              <p className="text-slate-700">No. Mathematives requires no registration, no email, and no personal information. Simply choose your language and start learning immediately.</p>
            </div>
            <div className="pb-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Which languages are supported?</h3>
              <p className="text-slate-700">We currently support 12 languages: English, Spanish, French, German, Portuguese, Turkish, Czech, Ukrainian, Finnish, Swedish, Polish, and Indonesian. Each language has fully translated content including table explanations, tips, and user interface elements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Mathematives — Free multiplication tables practice for students, parents, and teachers in 12 languages.
        </p>
      </footer>
    </main>
  )
}
