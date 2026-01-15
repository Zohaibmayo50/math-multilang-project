export const i18n = {
  defaultLocale: 'tr',
  locales: ['tr', 'es', 'de'],
} as const

export type Locale = (typeof i18n)['locales'][number]

export const languageNames: Record<Locale, string> = {
  tr: 'Türkçe',
  es: 'Español',
  de: 'Deutsch',
}

export const topicSlugs: Record<Locale, string> = {
  tr: 'carpim-tablosu',
  es: 'tablas-de-multiplicar',
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
    domain: 'https://carpimtablosu.com.tr',
    name: 'Tablas de Multiplicar',
    description: 'Plataforma educativa interactiva para aprender las tablas de multiplicar del 1 al 100.',
  },
  de: {
    domain: 'https://carpimtablosu.com.tr',
    name: 'Einmaleins',
    description: 'Interaktive Lernplattform für das Einmaleins von 1 bis 100.',
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
  de: {
    students: 'fuer-schueler',
    teachers: 'fuer-lehrer',
    parents: 'fuer-eltern',
  },
}
