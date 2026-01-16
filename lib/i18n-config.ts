export const i18n = {
  defaultLocale: 'tr',
  locales: ['tr', 'es', 'de', 'cs'],
} as const

export type Locale = (typeof i18n)['locales'][number]

export const languageNames: Record<Locale, string> = {
  tr: 'Türkçe',
  es: 'Español',
  de: 'Deutsch',
  cs: 'Čeština',
}

export const topicSlugs: Record<Locale, string> = {
  tr: 'carpim-tablosu',
  es: 'tablas-de-multiplicar',
  cs: 'nasobilka',
  de: 'einmaleins',
}

export const siteConfig: Record<Locale, {
  domain: string
  name: string
  description: string
}> = {
  tr: {
    domain: 'https://carpimtablosu.com.tr',
    name: 'Çarpım Tablosu',
    description: '1\'den 100\'e kadar çarpım tablolarını öğrenmek için interaktif eğitim platformu.',
  },
  es: {
    domain: 'https://multilang-math.com',
    name: 'Tablas de Multiplicar',
    description: 'Plataforma educativa interactiva para aprender las tablas de multiplicar del 1 al 100.',
  },
  de: {
    domain: 'https://multilang-math.com',
    name: 'Einmaleins',
    description: 'Interaktive Lernplattform für das Einmaleins von 1 bis 100.',
  },
  cs: {
    domain: 'https://multilang-math.com',
    name: 'Násobilka',
    description: 'Interaktivní vzdělávací platforma pro učení násobilky od 1 do 100.',
  },
}

export const guides: Record<Locale, {
  students: string
  teachers: string
  parents: string
}> = {
  tr: {
    students: 'ogrenciler-icin',
    teachers: 'ogretmenler-icin',
    parents: 'veliler-icin',
  },
  es: {
    students: 'para-estudiantes',
    teachers: 'para-profesores',
    parents: 'para-padres',
  },
  cs: {
    students: 'pro-studenty',
    teachers: 'pro-ucitele',
    parents: 'pro-rodice',
  },
  de: {
    students: 'fuer-schueler',
    teachers: 'fuer-lehrer',
    parents: 'fuer-eltern',
  },
}
