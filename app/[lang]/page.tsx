import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { i18n, Locale, topicSlugs, languageNames, siteConfig } from '@/lib/i18n-config'
import { buildAlternatesMetadata } from '@/lib/url-helpers'

interface PageProps {
  params: {
    lang: string
  }
}

// Topic metadata for each language
const topicMetadata: Record<Locale, {
  title: string
  description: string
  shortDescription: string
  icon: string
  status: 'available' | 'coming-soon'
}[]> = {
  en: [
    {
      title: 'Multiplication Tables',
      description: 'Master multiplication tables from 1 to 100 with interactive lessons, practice exercises, and fun games.',
      shortDescription: 'Learn tables 1-100',
      icon: '✖️',
      status: 'available'
    },
    {
      title: 'Addition Tables',
      description: 'Coming soon: Interactive addition tables to build strong mental math skills.',
      shortDescription: 'Tables 1-100 (Coming Soon)',
      icon: '➕',
      status: 'coming-soon'
    }
  ],
  tr: [
    {
      title: 'Çarpım Tablosu',
      description: '1\'den 100\'e kadar çarpım tablolarını interaktif dersler, pratik alıştırmalar ve eğlenceli oyunlarla öğrenin.',
      shortDescription: '1-100 arası tablolar',
      icon: '✖️',
      status: 'available'
    },
    {
      title: 'Toplama Tablosu',
      description: 'Yakında: Zihinsel matematik becerilerini geliştirmek için interaktif toplama tabloları.',
      shortDescription: '1-100 arası tablolar (Yakında)',
      icon: '➕',
      status: 'coming-soon'
    }
  ],
  es: [
    {
      title: 'Tablas de Multiplicar',
      description: 'Domina las tablas de multiplicar del 1 al 100 con lecciones interactivas, ejercicios prácticos y juegos divertidos.',
      shortDescription: 'Aprende las tablas 1-100',
      icon: '✖️',
      status: 'available'
    },
    {
      title: 'Tablas de Suma',
      description: 'Próximamente: Tablas de suma interactivas para desarrollar habilidades matemáticas mentales.',
      shortDescription: 'Tablas 1-100 (Próximamente)',
      icon: '➕',
      status: 'coming-soon'
    }
  ],
  de: [
    {
      title: 'Einmaleins',
      description: 'Meistere das Einmaleins von 1 bis 100 mit interaktiven Lektionen, Übungen und unterhaltsamen Spielen.',
      shortDescription: 'Lerne Tabellen 1-100',
      icon: '✖️',
      status: 'available'
    },
    {
      title: 'Additionstabellen',
      description: 'Demnächst: Interaktive Additionstabellen zum Aufbau starker Kopfrechenfähigkeiten.',
      shortDescription: 'Tabellen 1-100 (Demnächst)',
      icon: '➕',
      status: 'coming-soon'
    }
  ],
  cs: [
    {
      title: 'Násobilka',
      description: 'Ovládněte malou násobilku od 1 do 100 s interaktivními lekcemi, cvičeními a zábavnými hrami.',
      shortDescription: 'Naučte se tabulky 1-100',
      icon: '✖️',
      status: 'available'
    },
    {
      title: 'Tabulky sčítání',
      description: 'Již brzy: Interaktivní tabulky sčítání pro rozvoj dovedností mentální matematiky.',
      shortDescription: 'Tabulky 1-100 (Již brzy)',
      icon: '➕',
      status: 'coming-soon'
    }
  ],
  uk: [
    {
      title: 'Таблиця множення',
      description: 'Опануйте таблицю множення від 1 до 100 з інтерактивними уроками, вправами та веселими іграми.',
      shortDescription: 'Вивчіть таблиці 1-100',
      icon: '✖️',
      status: 'available'
    },
    {
      title: 'Таблиця додавання',
      description: 'Найближчим часом: Інтерактивні таблиці додавання для розвитку навичок ментальної математики.',
      shortDescription: 'Таблиці 1-100 (Найближчим часом)',
      icon: '➕',
      status: 'coming-soon'
    }
  ],
  fi: [
    {
      title: 'Kertotaulut',
      description: 'Hallitse kertotaulut 1:stä 100:aan interaktiivisten oppituntien, harjoitusten ja hauskojenpelien avulla.',
      shortDescription: 'Opi taulut 1-100',
      icon: '✖️',
      status: 'available'
    },
    {
      title: 'Yhteenlaskutaulut',
      description: 'Tulossa pian: Interaktiiviset yhteenlaskutaulut vahvojen päässälaskutaitojen rakentamiseen.',
      shortDescription: 'Taulut 1-100 (Tulossa pian)',
      icon: '➕',
      status: 'coming-soon'
    }
  ],
  fr: [
    {
      title: 'Table de Multiplication',
      description: 'Maîtrisez les tables de multiplication de 1 à 100 avec des leçons interactives, des exercices pratiques et des jeux amusants.',
      shortDescription: 'Apprenez les tables 1-100',
      icon: '✖️',
      status: 'available'
    },
    {
      title: "Tables d'Addition",
      description: "Bientôt disponible : Tables d'addition interactives pour développer de solides compétences en calcul mental.",
      shortDescription: 'Tables 1-100 (Bientôt)',
      icon: '➕',
      status: 'coming-soon'
    }
  ],
  sv: [
    {
      title: 'Multiplikationstabeller',
      description: 'Bemästra multiplikationstabeller från 1 till 100 med interaktiva lektioner, övningar och roliga spel.',
      shortDescription: 'Lär dig tabeller 1-100',
      icon: '✖️',
      status: 'available'
    },
    {
      title: 'Additionstabeller',
      description: 'Kommer snart: Interaktiva additionstabeller för att bygga starka mentala matematikfärdigheter.',
      shortDescription: 'Tabeller 1-100 (Kommer snart)',
      icon: '➕',
      status: 'coming-soon'
    }
  ],
  pt: [
    {
      title: 'Tabuada',
      description: 'Domine a tabuada de 1 a 100 com aulas interativas, exercícios práticos e jogos divertidos.',
      shortDescription: 'Aprenda tabuadas 1-100',
      icon: '✖️',
      status: 'available'
    },
    {
      title: 'Tabuada de Adição',
      description: 'Em breve: Tabuadas de adição interativas para desenvolver habilidades matemáticas mentais fortes.',
      shortDescription: 'Tabuadas 1-100 (Em breve)',
      icon: '➕',
      status: 'coming-soon'
    }
  ],
  pl: [
    {
      title: 'Tabliczki Mnożenia',
      description: 'Opanuj tabliczki mnożenia od 1 do 100 dzięki interaktywnym lekcjom, ćwiczeniom i zabawnym grom.',
      shortDescription: 'Naucz się tabliczek 1-100',
      icon: '✖️',
      status: 'available'
    },
    {
      title: 'Tabliczki Dodawania',
      description: 'Wkrótce: Interaktywne tabliczki dodawania do budowania silnych umiejętności rachunku pamięciowego.',
      shortDescription: 'Tabliczki 1-100 (Wkrótce)',
      icon: '➕',
      status: 'coming-soon'
    }
  ],
  id: [
    {
      title: 'Tabel Perkalian',
      description: 'Kuasai tabel perkalian dari 1 hingga 100 dengan pelajaran interaktif, latihan praktis, dan permainan yang menyenangkan.',
      shortDescription: 'Pelajari tabel 1-100',
      icon: '✖️',
      status: 'available'
    },
    {
      title: 'Tabel Penjumlahan',
      description: 'Segera hadir: Tabel penjumlahan interaktif untuk membangun keterampilan matematika mental yang kuat.',
      shortDescription: 'Tabel 1-100 (Segera hadir)',
      icon: '➕',
      status: 'coming-soon'
    }
  ]
}

const pageContent: Record<Locale, {
  heading: string
  subheading: string
  availableTopics: string
  comingSoon: string
}> = {
  en: {
    heading: 'Learn Mathematics',
    subheading: 'Choose a topic to begin your learning journey',
    availableTopics: 'Available Topics',
    comingSoon: 'Coming Soon'
  },
  tr: {
    heading: 'Matematik Öğren',
    subheading: 'Öğrenme yolculuğunuza başlamak için bir konu seçin',
    availableTopics: 'Mevcut Konular',
    comingSoon: 'Yakında'
  },
  es: {
    heading: 'Aprende Matemáticas',
    subheading: 'Elige un tema para comenzar tu viaje de aprendizaje',
    availableTopics: 'Temas Disponibles',
    comingSoon: 'Próximamente'
  },
  de: {
    heading: 'Mathematik Lernen',
    subheading: 'Wähle ein Thema, um deine Lernreise zu beginnen',
    availableTopics: 'Verfügbare Themen',
    comingSoon: 'Demnächst'
  },
  cs: {
    heading: 'Učte se matematiku',
    subheading: 'Vyberte si téma a začněte svou vzdělávací cestu',
    availableTopics: 'Dostupná témata',
    comingSoon: 'Již brzy'
  },
  uk: {
    heading: 'Вивчайте математику',
    subheading: 'Виберіть тему, щоб розпочати свою навчальну подорож',
    availableTopics: 'Доступні теми',
    comingSoon: 'Найближчим часом'
  },
  fi: {
    heading: 'Opi Matematiikkaa',
    subheading: 'Valitse aihe aloittaaksesi oppimismatkasi',
    availableTopics: 'Saatavilla olevat aiheet',
    comingSoon: 'Tulossa pian'
  },
  fr: {
    heading: 'Apprendre les Mathématiques',
    subheading: 'Choisissez un sujet pour commencer votre parcours d\'apprentissage',
    availableTopics: 'Sujets disponibles',
    comingSoon: 'Bientôt disponible'
  },
  sv: {
    heading: 'Lär dig Matematik',
    subheading: 'Välj ett ämne för att börja din inlärningsresa',
    availableTopics: 'Tillgängliga ämnen',
    comingSoon: 'Kommer snart'
  },
  pt: {
    heading: 'Aprenda Matemática',
    subheading: 'Escolha um tópico para começar sua jornada de aprendizado',
    availableTopics: 'Tópicos Disponíveis',
    comingSoon: 'Em breve'
  },
  pl: {
    heading: 'Ucz się Matematyki',
    subheading: 'Wybierz temat, aby rozpocząć swoją podróż edukacyjną',
    availableTopics: 'Dostępne tematy',
    comingSoon: 'Wkrótce'
  },
  id: {
    heading: 'Belajar Matematika',
    subheading: 'Pilih topik untuk memulai perjalanan belajar Anda',
    availableTopics: 'Topik Tersedia',
    comingSoon: 'Segera hadir'
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang: langParam } = await params
  const lang = langParam as Locale
  
  if (!i18n.locales.includes(lang)) {
    return {}
  }

  const content = pageContent[lang]
  const config = siteConfig[lang]

  return {
    title: `${content.heading} | ${config.name} | Mathematives`,
    description: `${content.subheading}. ${config.description}`,
    alternates: {
      canonical: `${config.domain}/${lang}`,
      ...buildAlternatesMetadata('lang-hub'),
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: `${content.heading} | Mathematives`,
      description: config.description,
      url: `${config.domain}/${lang}`,
      siteName: 'Mathematives',
      locale: lang,
      type: 'website',
    }
  }
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({
    lang: locale
  }))
}

export default async function LanguageHub({ params }: PageProps) {
  const { lang: langParam } = await params
  const lang = langParam as Locale

  if (!i18n.locales.includes(lang)) {
    notFound()
  }

  const content = pageContent[lang]
  const topics = topicMetadata[lang]
  const availableTopics = topics.filter(t => t.status === 'available')
  const comingSoonTopics = topics.filter(t => t.status === 'coming-soon')

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <Link 
            href="/" 
            className="inline-block mb-6 text-2xl font-bold text-slate-700 hover:text-slate-900 transition-colors"
          >
            ← Mathematives
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            {content.heading}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            {content.subheading}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
            <span className="text-2xl">{languageNames[lang] === 'English' ? '🇺🇸' : 
                                       languageNames[lang] === 'Türkçe' ? '🇹🇷' :
                                       languageNames[lang] === 'Español' ? '🇪🇸' :
                                       languageNames[lang] === 'Deutsch' ? '🇩🇪' :
                                       languageNames[lang] === 'Čeština' ? '🇨🇿' :
                                       languageNames[lang] === 'Українська' ? '🇺🇦' :
                                       languageNames[lang] === 'Suomi' ? '🇫🇮' :
                                       languageNames[lang] === 'Français' ? '🇫🇷' :
                                       languageNames[lang] === 'Svenska' ? '🇸🇪' :
                                       languageNames[lang] === 'Português' ? '🇧🇷' :
                                       languageNames[lang] === 'Polski' ? '🇵🇱' : '🇮🇩'}</span>
            <span className="font-semibold text-slate-700">{languageNames[lang]}</span>
          </div>
        </div>

        {/* Available Topics */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">{content.availableTopics}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {availableTopics.map((topic, index) => (
              <Link
                key={index}
                href={`/${lang}/${topicSlugs[lang]}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 hover:scale-105 border-2 border-transparent hover:border-blue-500"
              >
                <div className="flex items-start gap-4">
                  <div className="text-6xl flex-shrink-0">{topic.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-3">
                      {topic.description}
                    </p>
                    <div className="inline-flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                      <span>{topic.shortDescription}</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Coming Soon Topics */}
        {comingSoonTopics.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">{content.comingSoon}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {comingSoonTopics.map((topic, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-60 rounded-2xl shadow-md p-6 border-2 border-dashed border-slate-300 opacity-75 cursor-not-allowed"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-6xl flex-shrink-0 opacity-50">{topic.icon}</div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-slate-700 mb-2">
                        {topic.title}
                      </h3>
                      <p className="text-sm text-slate-500 mb-3">
                        {topic.description}
                      </p>
                      <div className="inline-flex items-center text-sm font-semibold text-slate-500">
                        <span>{topic.shortDescription}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
