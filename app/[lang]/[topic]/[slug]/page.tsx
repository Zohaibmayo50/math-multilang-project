import { notFound } from 'next/navigation'
import { Metadata } from 'next'
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
import { Locale, topicSlugs, siteConfig, guides } from '@/lib/i18n-config'
import { getAbsoluteUrl, getAllRanges, getAllNumbers, getRangeFromNumber, generateHreflangMetadata } from '@/lib/url-helpers'
import { numberTitles, numberDescriptions, numberSpecialProperties } from '@/lib/number-metadata'
import { numberTitlesEs, numberDescriptionsEs, numberSpecialPropertiesEs } from '@/lib/number-metadata-es'
import { numberTitlesDe, numberDescriptionsDe, numberSpecialPropertiesDe } from '@/lib/number-metadata-de'
import { numberTitlesCs, numberDescriptionsCs, numberSpecialPropertiesCs } from '@/lib/number-metadata-cs'
import { numberTitlesUk, numberDescriptionsUk, numberSpecialPropertiesUk } from '@/lib/number-metadata-uk'
import { numberTitlesFi, numberDescriptionsFi, numberSpecialPropertiesFi } from '@/lib/number-metadata-fi'
import { numberTitlesFr, numberDescriptionsFr, numberSpecialPropertiesFr } from '@/lib/number-metadata-fr'
import { numberTitlesSv, numberDescriptionsSv, numberSpecialPropertiesSv } from '@/lib/number-metadata-sv'
import { numberTitlesPt, numberDescriptionsPt, numberSpecialPropertiesPt } from '@/lib/number-metadata-pt'
import { numberTitles as numberTitlesEn, numberDescriptions as numberDescriptionsEn, numberSpecialProperties as numberSpecialPropertiesEn } from '@/lib/number-metadata-en'
import { numberTitlesPl, numberDescriptionsPl, numberSpecialPropertiesPl } from '@/lib/number-metadata-pl'

// Import Turkish guide page components
import ForStudents from '@/app/ogrenciler-icin/page'
import ForTeachers from '@/app/ogretmenler-icin/page'
import ForParents from '@/app/veliler-icin/page'

// Import Spanish guide page components
import ForStudentsEs from '@/app/para-estudiantes/page'
import ForTeachersEs from '@/app/para-profesores/page'
import ForParentsEs from '@/app/para-padres/page'

// Import German guide page components
import ForStudentsDe from '@/app/fuer-schueler/page'
import ForTeachersDe from '@/app/fuer-lehrer/page'
import ForParentsDe from '@/app/fuer-eltern/page'

// Import Czech guide page components
import ForStudentsCs from '@/app/pro-studenty/page'
import ForTeachersCs from '@/app/pro-ucitele/page'
import ForParentsCs from '@/app/pro-rodice/page'

// Import Ukrainian guide page components
import ForStudentsUk from '@/app/dlya-uchniv/page'
import ForTeachersUk from '@/app/dlya-vchyteliv/page'
import ForParentsUk from '@/app/dlya-batkiv/page'

// Import Finnish guide page components
import ForStudentsFi from '@/app/oppilaille/page'
import ForTeachersFi from '@/app/opettajille/page'
import ForParentsFi from '@/app/vanhemmille/page'

// Import French guide page components
import ForStudentsFr from '@/app/pour-les-eleves/page'
import ForTeachersFr from '@/app/pour-les-enseignants/page'
import ForParentsFr from '@/app/pour-les-parents/page'

// Import Swedish guide page components
import ForStudentsSv from '@/app/for-elever/page'
import ForTeachersSv from '@/app/for-larare/page'
import ForParentsSv from '@/app/for-foraldrar/page'

// Import Portuguese guide page components
import ForStudentsPt from '@/app/para-estudantes/page'
import ForTeachersPt from '@/app/para-professores/page'
import ForParentsPt from '@/app/para-pais/page'

// Import English guide page components
import ForStudentsEn from '@/app/for-students/page'
import ForTeachersEn from '@/app/for-teachers/page'
import ForParentsEn from '@/app/for-parents/page'

// Import Polish guide page components
import DlaUczniwPl from '@/app/dla-uczniow/page'
import DlaNauczycieliPl from '@/app/dla-nauczycieli/page'
import DlaRodzicwPl from '@/app/dla-rodzicow/page'

interface PageProps {
  params: {
    lang: string
    topic: string
    slug: string
  }
}

// Range metadata configuration
const rangeMetadata: Record<string, {
  title: string
  description: string
  keywords: string
  level: 'beginner' | 'intermediate' | 'advanced'
  color: string
}> = {
  '1-10': {
    title: '1-10 Çarpım Tablosu | Başlangıç Seviyesi Tablolar',
    description: '1, 2, 3, 4, 5, 6, 7, 8, 9, 10 çarpım tablolarını öğrenin. Başlangıç seviyesi için kolay anlaşılır açıklamalar, görsel örnekler ve pratik alıştırmalar.',
    keywords: '1-10 çarpım tablosu, çarpım tablosu, çarpma işlemi, matematik öğrenme',
    level: 'beginner',
    color: 'from-blue-50 to-indigo-50',
  },
  '11-20': {
    title: '11-20 Çarpım Tablosu | Orta Seviye Tablolar',
    description: '11\'den 20\'ye kadar çarpım tablolarını öğrenin. Orta seviye öğrenciler için pratik stratejiler ve alıştırmalar.',
    keywords: '11-20 çarpım tablosu, orta seviye çarpma, matematik pratik',
    level: 'intermediate',
    color: 'from-indigo-50 to-purple-50',
  },
  '21-30': {
    title: '21-30 Çarpım Tablosu | Orta Seviye Tablolar',
    description: '21\'den 30\'a kadar çarpım tablolarını pratik edin. Daha büyük sayılarla çarpma becerilerinizi geliştirin.',
    keywords: '21-30 çarpım tablosu, ileri çarpma, matematik becerisi',
    level: 'intermediate',
    color: 'from-purple-50 to-pink-50',
  },
  '31-40': {
    title: '31-40 Çarpım Tablosu | Orta-İleri Seviye',
    description: '31\'den 40\'a kadar çarpım tablolarını öğrenin. İleri seviye çarpma alıştırmaları.',
    keywords: '31-40 çarpım tablosu, ileri matematik, çarpma pratik',
    level: 'intermediate',
    color: 'from-pink-50 to-rose-50',
  },
  '41-50': {
    title: '41-50 Çarpım Tablosu | İleri Seviye',
    description: '41\'den 50\'ye kadar çarpım tablolarını master edin. İleri seviye öğrenciler için zorlayıcı alıştırmalar.',
    keywords: '41-50 çarpım tablosu, ileri seviye matematik',
    level: 'intermediate',
    color: 'from-rose-50 to-orange-50',
  },
  '51-60': {
    title: '51-60 Çarpım Tablosu | İleri Seviye',
    description: '51\'den 60\'a kadar çarpım tablolarını pratik edin. Daha karmaşık çarpma işlemleri için stratejiler.',
    keywords: '51-60 çarpım tablosu, karmaşık çarpma',
    level: 'advanced',
    color: 'from-orange-50 to-amber-50',
  },
  '61-70': {
    title: '61-70 Çarpım Tablosu | İleri Seviye',
    description: '61\'den 70\'e kadar çarpım tablolarını öğrenin. Uzman seviyesi çarpma becerileri.',
    keywords: '61-70 çarpım tablosu, uzman matematik',
    level: 'advanced',
    color: 'from-amber-50 to-yellow-50',
  },
  '71-80': {
    title: '71-80 Çarpım Tablosu | İleri Seviye',
    description: '71\'den 80\'e kadar çarpım tablolarını master edin. En zorlu çarpma alıştırmaları.',
    keywords: '71-80 çarpım tablosu, zorlu matematik',
    level: 'advanced',
    color: 'from-yellow-50 to-lime-50',
  },
  '81-90': {
    title: '81-90 Çarpım Tablosu | İleri Seviye',
    description: '81\'den 90\'a kadar çarpım tablolarını pratik edin. Maksimum zorluk seviyesi.',
    keywords: '81-90 çarpım tablosu, maksimum zorluk',
    level: 'advanced',
    color: 'from-lime-50 to-emerald-50',
  },
  '91-100': {
    title: '91-100 Çarpım Tablosu | Uzman Seviyesi',
    description: '91\'den 100\'e kadar çarpım tablolarını tamamlayın. Çarpım tablosu ustası olun!',
    keywords: '91-100 çarpım tablosu, uzman seviyesi, çarpma ustası',
    level: 'advanced',
    color: 'from-emerald-50 to-teal-50',
  },
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

// English Range Metadata
const rangeMetadataEn: Record<string, {
  title: string
  description: string
  keywords: string
  level: 'beginner' | 'intermediate' | 'advanced'
  color: string
}> = {
  '1-10': {
    title: 'Times Tables 1-10 | Beginner Level',
    description: 'Learn multiplication tables for 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Easy explanations for beginners, visual examples and practice exercises.',
    keywords: 'times tables 1-10, multiplication tables, multiplication, math learning',
    level: 'beginner',
    color: 'from-blue-50 to-indigo-50',
  },
  '11-20': {
    title: 'Times Tables 11-20 | Two-Digit Numbers',
    description: 'Learn times tables for 11-20. Master multiplication operations with two-digit numbers.',
    keywords: 'times tables 11-20, multiplication tables, multiplication, math learning',
    level: 'intermediate',
    color: 'from-indigo-50 to-purple-50',
  },
  '21-30': {
    title: 'Times Tables 21-30 | Intermediate Level',
    description: 'Learn times tables from 21 to 30. Detailed explanations and practice exercises.',
    keywords: 'times tables 21-30, multiplication tables',
    level: 'intermediate',
    color: 'from-purple-50 to-pink-50',
  },
  '31-40': {
    title: 'Times Tables 31-40 | Advanced Multiplication',
    description: 'Learn times tables from 31 to 40. Complete educational materials for advanced skills.',
    keywords: 'times tables 31-40, multiplication tables',
    level: 'intermediate',
    color: 'from-pink-50 to-rose-50',
  },
  '41-50': {
    title: 'Times Tables 41-50 | Intermediate-Advanced Level',
    description: 'Learn times tables from 41 to 50. Interactive exercises to master multiplication.',
    keywords: 'times tables 41-50, multiplication tables',
    level: 'intermediate',
    color: 'from-rose-50 to-orange-50',
  },
  '51-60': {
    title: 'Times Tables 51-60 | Advanced Level',
    description: 'Learn times tables from 51 to 60. Detailed study materials for advanced students.',
    keywords: 'times tables 51-60, multiplication tables',
    level: 'advanced',
    color: 'from-orange-50 to-amber-50',
  },
  '61-70': {
    title: 'Times Tables 61-70 | High Numbers',
    description: 'Learn times tables from 61 to 70. Complete educational resources.',
    keywords: 'times tables 61-70, multiplication tables',
    level: 'advanced',
    color: 'from-amber-50 to-yellow-50',
  },
  '71-80': {
    title: 'Times Tables 71-80 | Advanced Level',
    description: 'Learn times tables from 71 to 80. Develop advanced math skills.',
    keywords: 'times tables 71-80, multiplication tables',
    level: 'advanced',
    color: 'from-yellow-50 to-lime-50',
  },
  '81-90': {
    title: 'Times Tables 81-90 | Expert Level',
    description: 'Learn times tables from 81 to 90. Challenging multiplication operations.',
    keywords: 'times tables 81-90, multiplication tables',
    level: 'advanced',
    color: 'from-lime-50 to-emerald-50',
  },
  '91-100': {
    title: 'Times Tables 91-100 | Highest Level',
    description: 'Learn times tables from 91 to 100. Complete education for highest level skills.',
    keywords: 'times tables 91-100, multiplication tables',
    level: 'advanced',
    color: 'from-emerald-50 to-teal-50',
  },
}

// Polish Range Metadata
const rangeMetadataPl: Record<string, {
  title: string
  description: string
  keywords: string
  level: 'beginner' | 'intermediate' | 'advanced'
  color: string
}> = {
  '1-10': {
    title: 'Tabliczki 1-10 | Poziom Początkujący',
    description: 'Naucz się tabliczki mnożenia dla 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Łatwe wyjaśnienia dla początkujących, przykłady wizualne i ćwiczenia praktyczne.',
    keywords: 'tabliczka mnożenia 1-10, tabliczki mnożenia, mnożenie, nauka matematyki',
    level: 'beginner',
    color: 'from-blue-50 to-indigo-50',
  },
  '11-20': {
    title: 'Tabliczki 11-20 | Liczby Dwucyfrowe',
    description: 'Naucz się tabliczek mnożenia 11-20. Opanuj operacje mnożenia z liczbami dwucyfrowymi.',
    keywords: 'tabliczka mnożenia 11-20, tabliczki mnożenia, mnożenie, nauka matematyki',
    level: 'intermediate',
    color: 'from-indigo-50 to-purple-50',
  },
  '21-30': {
    title: 'Tabliczki 21-30 | Poziom Średniozaawansowany',
    description: 'Naucz się tabliczek mnożenia od 21 do 30. Szczegółowe wyjaśnienia i ćwiczenia praktyczne.',
    keywords: 'tabliczka mnożenia 21-30, tabliczki mnożenia',
    level: 'intermediate',
    color: 'from-purple-50 to-pink-50',
  },
  '31-40': {
    title: 'Tabliczki 31-40 | Zaawansowane Mnożenie',
    description: 'Naucz się tabliczek mnożenia od 31 do 40. Kompletne materiały edukacyjne dla zaawansowanych umiejętności.',
    keywords: 'tabliczka mnożenia 31-40, tabliczki mnożenia',
    level: 'intermediate',
    color: 'from-pink-50 to-rose-50',
  },
  '41-50': {
    title: 'Tabliczki 41-50 | Poziom Średnio-Zaawansowany',
    description: 'Naucz się tabliczek mnożenia od 41 do 50. Interaktywne ćwiczenia do opanowania mnożenia.',
    keywords: 'tabliczka mnożenia 41-50, tabliczki mnożenia',
    level: 'intermediate',
    color: 'from-rose-50 to-orange-50',
  },
  '51-60': {
    title: 'Tabliczki 51-60 | Poziom Zaawansowany',
    description: 'Naucz się tabliczek mnożenia od 51 do 60. Szczegółowe materiały do nauki dla zaawansowanych uczniów.',
    keywords: 'tabliczka mnożenia 51-60, tabliczki mnożenia',
    level: 'advanced',
    color: 'from-orange-50 to-amber-50',
  },
  '61-70': {
    title: 'Tabliczki 61-70 | Duże Liczby',
    description: 'Naucz się tabliczek mnożenia od 61 do 70. Kompletne zasoby edukacyjne.',
    keywords: 'tabliczka mnożenia 61-70, tabliczki mnożenia',
    level: 'advanced',
    color: 'from-amber-50 to-yellow-50',
  },
  '71-80': {
    title: 'Tabliczki 71-80 | Zaawansowany Poziom',
    description: 'Naucz się tabliczek mnożenia od 71 do 80. Rozwijaj zaawansowane umiejętności matematyczne.',
    keywords: 'tabliczka mnożenia 71-80, tabliczki mnożenia',
    level: 'advanced',
    color: 'from-yellow-50 to-lime-50',
  },
  '81-90': {
    title: 'Tabliczki 81-90 | Poziom Ekspercki',
    description: 'Naucz się tabliczek mnożenia od 81 do 90. Wymagające operacje mnożenia.',
    keywords: 'tabliczka mnożenia 81-90, tabliczki mnożenia',
    level: 'advanced',
    color: 'from-lime-50 to-emerald-50',
  },
  '91-100': {
    title: 'Tabliczki 91-100 | Najwyższy Poziom',
    description: 'Naucz się tabliczek mnożenia od 91 do 100. Kompletna edukacja dla najwyższego poziomu umiejętności.',
    keywords: 'tabliczka mnożenia 91-100, tabliczki mnożenia',
    level: 'advanced',
    color: 'from-emerald-50 to-teal-50',
  },
}

// Spanish Range Metadata
const rangeMetadataEs: Record<string, {
  title: string
  description: string
  keywords: string
  level: 'beginner' | 'intermediate' | 'advanced'
  color: string
}> = {
  '1-10': {
    title: 'Tablas de Multiplicar del 1 al 10 | Nivel Principiante',
    description: 'Aprende las tablas de multiplicar del 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Explicaciones fáciles para nivel principiante, ejemplos visuales y ejercicios prácticos.',
    keywords: 'tablas de multiplicar del 1 al 10, tablas de multiplicar, multiplicación, aprendizaje de matemáticas',
    level: 'beginner',
    color: 'from-blue-50 to-indigo-50',
  },
  '11-20': {
    title: 'Tablas de Multiplicar del 11 al 20 | Números de Dos Dígitos',
    description: 'Aprende las tablas de multiplicar del 11, 12, 13, 14, 15, 16, 17, 18, 19, 20. Domina las operaciones de multiplicación con números de dos dígitos.',
    keywords: 'tablas de multiplicar del 11 al 20, tablas de multiplicar, multiplicación, aprendizaje de matemáticas',
    level: 'intermediate',
    color: 'from-indigo-50 to-purple-50',
  },
  '21-30': {
    title: 'Tablas de Multiplicar del 21 al 30 | Nivel Intermedio',
    description: 'Aprende las tablas de multiplicar del 21 al 30. Explicaciones detalladas y ejercicios prácticos para estudiantes de nivel intermedio.',
    keywords: 'tablas de multiplicar del 21 al 30, tablas de multiplicar, multiplicación, aprendizaje de matemáticas',
    level: 'intermediate',
    color: 'from-purple-50 to-pink-50',
  },
  '31-40': {
    title: 'Tablas de Multiplicar del 31 al 40 | Multiplicación Avanzada',
    description: 'Aprende las tablas de multiplicar del 31, 32, 33, 34, 35, 36, 37, 38, 39, 40. Materiales educativos completos para habilidades de multiplicación avanzadas.',
    keywords: 'tablas de multiplicar del 31 al 40, tablas de multiplicar, multiplicación, aprendizaje de matemáticas',
    level: 'intermediate',
    color: 'from-pink-50 to-rose-50',
  },
  '41-50': {
    title: 'Tablas de Multiplicar del 41 al 50 | Nivel Intermedio-Avanzado',
    description: 'Aprende las tablas de multiplicar del 41 al 50. Ejercicios interactivos para dominar la multiplicación con números grandes.',
    keywords: 'tablas de multiplicar del 41 al 50, tablas de multiplicar, multiplicación, aprendizaje de matemáticas',
    level: 'intermediate',
    color: 'from-rose-50 to-orange-50',
  },
  '51-60': {
    title: 'Tablas de Multiplicar del 51 al 60 | Nivel Avanzado',
    description: 'Aprende las tablas de multiplicar del 51, 52, 53, 54, 55, 56, 57, 58, 59, 60. Materiales de estudio detallados para estudiantes de nivel avanzado.',
    keywords: 'tablas de multiplicar del 51 al 60, tablas de multiplicar, multiplicación, aprendizaje de matemáticas',
    level: 'advanced',
    color: 'from-orange-50 to-amber-50',
  },
  '61-70': {
    title: 'Tablas de Multiplicar del 61 al 70 | Números Altos',
    description: 'Aprende las tablas de multiplicar del 61 al 70. Recursos educativos completos para multiplicación con números altos.',
    keywords: 'tablas de multiplicar del 61 al 70, tablas de multiplicar, multiplicación, aprendizaje de matemáticas',
    level: 'advanced',
    color: 'from-amber-50 to-yellow-50',
  },
  '71-80': {
    title: 'Tabla del 71 al 80 | Multiplicación Nivel Avanzado',
    description: 'Aprende las tablas de multiplicar del 71, 72, 73, 74, 75, 76, 77, 78, 79, 80. Desarrolla habilidades matemáticas de nivel avanzado.',
    keywords: 'tablas de multiplicar del 71 al 80, tablas de multiplicar, multiplicación, aprender matemáticas',
    level: 'advanced',
    color: 'from-yellow-50 to-lime-50',
  },
  '81-90': {
    title: 'Tabla del 81 al 90 | Nivel Experto',
    description: 'Aprende las tablas de multiplicar del 81 al 90. Operaciones de multiplicación desafiantes y estrategias para estudiantes de nivel experto.',
    keywords: 'tablas de multiplicar del 81 al 90, tablas de multiplicar, multiplicación, aprender matemáticas',
    level: 'advanced',
    color: 'from-lime-50 to-emerald-50',
  },
  '91-100': {
    title: 'Tablas de Multiplicar del 91 al 100 | Nivel Más Alto',
    description: 'Aprende las tablas de multiplicar del 91, 92, 93, 94, 95, 96, 97, 98, 99, 100. Educación completa para habilidades de multiplicación de nivel más alto.',
    keywords: 'tablas de multiplicar del 91 al 100, tablas de multiplicar, multiplicación, aprendizaje de matemáticas',
    level: 'advanced',
    color: 'from-emerald-50 to-teal-50',
  },
}

// German Range Metadata
const rangeMetadataDe: Record<string, {
  title: string
  description: string
  keywords: string
  level: 'beginner' | 'intermediate' | 'advanced'
  color: string
}> = {
  '1-10': {
    title: 'Einmaleins-Tabellen von 1 bis 10 | Anfänger-Level',
    description: 'Lerne die Einmaleins-Tabellen von 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Ideal für Anfänger-Level, mit interaktiven Übungen und Lernspielen.',
    keywords: 'einmaleins 1 bis 10, einmaleins-tabellen, multiplikation, mathematik lernen',
    level: 'beginner',
    color: 'from-blue-50 to-indigo-50',
  },
  '11-20': {
    title: 'Einmaleins-Tabellen von 11 bis 20 | Zweistellige Zahlen',
    description: 'Lerne die Einmaleins-Tabellen von 11, 12, 13, 14, 15, 16, 17, 18, 19, 20. Meistere Multiplikationsoperationen mit zweistelligen Zahlen.',
    keywords: 'einmaleins 11 bis 20, einmaleins-tabellen, multiplikation, mathematik lernen',
    level: 'intermediate',
    color: 'from-indigo-50 to-purple-50',
  },
  '21-30': {
    title: 'Einmaleins-Tabellen von 21 bis 30 | Mittelstufe',
    description: 'Lerne die Einmaleins-Tabellen von 21 bis 30. Detaillierte Erklärungen und praktische Übungen für Mittelstufen-Schüler.',
    keywords: 'einmaleins 21 bis 30, einmaleins-tabellen, multiplikation, mathematik lernen',
    level: 'intermediate',
    color: 'from-purple-50 to-pink-50',
  },
  '31-40': {
    title: 'Einmaleins-Tabellen von 31 bis 40 | Fortgeschrittene Multiplikation',
    description: 'Lerne die Einmaleins-Tabellen von 31, 32, 33, 34, 35, 36, 37, 38, 39, 40. Umfassende Lernmaterialien für fortgeschrittene Multiplikationsfähigkeiten.',
    keywords: 'einmaleins 31 bis 40, einmaleins-tabellen, multiplikation, mathematik lernen',
    level: 'intermediate',
    color: 'from-pink-50 to-rose-50',
  },
  '41-50': {
    title: 'Einmaleins-Tabellen von 41 bis 50 | Mittel-Fortgeschritten',
    description: 'Lerne die Einmaleins-Tabellen von 41 bis 50. Interaktive Übungen zur Beherrschung der Multiplikation mit großen Zahlen.',
    keywords: 'einmaleins 41 bis 50, einmaleins-tabellen, multiplikation, mathematik lernen',
    level: 'intermediate',
    color: 'from-rose-50 to-orange-50',
  },
  '51-60': {
    title: 'Einmaleins-Tabellen von 51 bis 60 | Fortgeschrittenes Level',
    description: 'Lerne die Einmaleins-Tabellen von 51, 52, 53, 54, 55, 56, 57, 58, 59, 60. Detailliertes Studienmaterial für fortgeschrittene Schüler.',
    keywords: 'einmaleins 51 bis 60, einmaleins-tabellen, multiplikation, mathematik lernen',
    level: 'advanced',
    color: 'from-orange-50 to-amber-50',
  },
  '61-70': {
    title: 'Einmaleins-Tabellen von 61 bis 70 | Hohe Zahlen',
    description: 'Lerne die Einmaleins-Tabellen von 61 bis 70. Umfassende Bildungsressourcen für Multiplikation mit hohen Zahlen.',
    keywords: 'einmaleins 61 bis 70, einmaleins-tabellen, multiplikation, mathematik lernen',
    level: 'advanced',
    color: 'from-amber-50 to-yellow-50',
  },
  '71-80': {
    title: 'Einmaleins von 71 bis 80 | Fortgeschrittene Multiplikation',
    description: 'Lerne die Einmaleins-Tabellen von 71, 72, 73, 74, 75, 76, 77, 78, 79, 80. Entwickle mathematische Fähigkeiten auf fortgeschrittenem Niveau.',
    keywords: 'einmaleins 71 bis 80, einmaleins-tabellen, multiplikation, mathematik lernen',
    level: 'advanced',
    color: 'from-yellow-50 to-lime-50',
  },
  '81-90': {
    title: 'Einmaleins von 81 bis 90 | Experten-Level',
    description: 'Lerne die Einmaleins-Tabellen von 81 bis 90. Anspruchsvolle Multiplikationsoperationen und Strategien für Experten-Schüler.',
    keywords: 'einmaleins 81 bis 90, einmaleins-tabellen, multiplikation, mathematik lernen',
    level: 'advanced',
    color: 'from-lime-50 to-emerald-50',
  },
  '91-100': {
    title: 'Einmaleins-Tabellen von 91 bis 100 | Höchstes Level',
    description: 'Lerne die Einmaleins-Tabellen von 91, 92, 93, 94, 95, 96, 97, 98, 99, 100. Vollständige Bildung für Multiplikationsfähigkeiten auf höchstem Level.',
    keywords: 'einmaleins 91 bis 100, einmaleins-tabellen, multiplikation, mathematik lernen',
    level: 'advanced',
    color: 'from-emerald-50 to-teal-50',
  },
}

// Czech Range Metadata
const rangeMetadataCs: Record<string, {
  title: string
  description: string
  keywords: string
  level: 'beginner' | 'intermediate' | 'advanced'
  color: string
}> = {
  '1-10': {
    title: 'Tabulky Násobilky 1 až 10 | Začátečnické Tabulky',
    description: 'Naučte se násobilky 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Snadno srozumitelná vysvětlení pro začátečníky, vizuální příklady a praktická cvičení.',
    keywords: 'násobilka 1 až 10, násobilka, násobení, učení matematiky',
    level: 'beginner',
    color: 'from-blue-50 to-indigo-50',
  },
  '11-20': {
    title: 'Tabulky Násobilky 11 až 20 | Dvouciferná Čísla',
    description: 'Naučte se násobilky 11 až 20. Důležitý krok pro pochopení násobilky s dvoucifernými čísly.',
    keywords: 'násobilka 11 až 20, násobilka, násobení, učení matematiky',
    level: 'beginner',
    color: 'from-indigo-50 to-purple-50',
  },
  '21-30': {
    title: 'Tabulky Násobilky 21 až 30 | Střední Úroveň',
    description: 'Naučte se násobilky 21 až 30. Střední úroveň a vzory násobilky.',
    keywords: 'násobilka 21 až 30, násobilka, násobení, učení matematiky',
    level: 'intermediate',
    color: 'from-purple-50 to-pink-50',
  },
  '31-40': {
    title: 'Tabulky Násobilky 31 až 40 | Pokročilá Násobilka',
    description: 'Naučte se násobilky 31, 32, 33, 34, 35, 36, 37, 38, 39, 40. Pokročilé dovednosti počítání zpaměti.',
    keywords: 'násobilka 31 až 40, násobilka, násobení, učení matematiky',
    level: 'intermediate',
    color: 'from-pink-50 to-rose-50',
  },
  '41-50': {
    title: 'Tabulky Násobilky 41 až 50 | Střední-Pokročilá',
    description: 'Naučte se násobilky 41 až 50. Interaktivní cvičení pro zvládnutí násobilky s velkými čísly.',
    keywords: 'násobilka 41 až 50, násobilka, násobení, učení matematiky',
    level: 'intermediate',
    color: 'from-rose-50 to-orange-50',
  },
  '51-60': {
    title: 'Tabulky Násobilky 51 až 60 | Pokročilá Úroveň',
    description: 'Naučte se násobilky 51, 52, 53, 54, 55, 56, 57, 58, 59, 60. Detailní studijní materiály pro pokročilé studenty.',
    keywords: 'násobilka 51 až 60, násobilka, násobení, učení matematiky',
    level: 'advanced',
    color: 'from-orange-50 to-amber-50',
  },
  '61-70': {
    title: 'Tabulky Násobilky 61 až 70 | Vysoká Čísla',
    description: 'Naučte se násobilky 61 až 70. Komplexní vzdělávací zdroje pro násobilku s vysokými čísly.',
    keywords: 'násobilka 61 až 70, násobilka, násobení, učení matematiky',
    level: 'advanced',
    color: 'from-amber-50 to-yellow-50',
  },
  '71-80': {
    title: 'Tabulky Násobilky 71 až 80 | Pokročilá Násobilka',
    description: 'Naučte se násobilky 71, 72, 73, 74, 75, 76, 77, 78, 79, 80. Rozvíjejte matematické dovednosti na pokročilé úrovni.',
    keywords: 'násobilka 71 až 80, násobilka, násobení, učení matematiky',
    level: 'advanced',
    color: 'from-yellow-50 to-lime-50',
  },
  '81-90': {
    title: 'Tabulky Násobilky 81 až 90 | Expert Úroveň',
    description: 'Naučte se násobilky 81 až 90. Náročné násobící operace a strategie pro experty.',
    keywords: 'násobilka 81 až 90, násobilka, násobení, učení matematiky',
    level: 'advanced',
    color: 'from-lime-50 to-emerald-50',
  },
  '91-100': {
    title: 'Tabulky Násobilky 91 až 100 | Nejvyšší Úroveň',
    description: 'Naučte se násobilky 91, 92, 93, 94, 95, 96, 97, 98, 99, 100. Kompletní vzdělání pro dovednosti násobilky na nejvyšší úrovni.',
    keywords: 'násobilka 91 až 100, násobilka, násobení, učení matematiky',
    level: 'advanced',
    color: 'from-emerald-50 to-teal-50',
  },
}

// Ukrainian Range Metadata
const rangeMetadataUk: Record<string, {
  title: string
  description: string
  keywords: string
  level: 'beginner' | 'intermediate' | 'advanced'
  color: string
}> = {
  '1-10': {
    title: 'Таблиці Множення 1-10 | Початковий Рівень',
    description: 'Навчіться таблиць множення 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Легкі для розуміння пояснення для початківців, візуальні приклади та практичні вправи.',
    keywords: 'таблиця множення 1-10, таблиця множення, множення, навчання математики',
    level: 'beginner',
    color: 'from-blue-50 to-indigo-50',
  },
  '11-20': {
    title: 'Таблиці Множення 11-20 | Двозначні Числа',
    description: 'Навчіться таблиць множення 11-20. Важливий крок для розуміння множення з двозначними числами.',
    keywords: 'таблиця множення 11-20, таблиця множення, множення, навчання математики',
    level: 'beginner',
    color: 'from-indigo-50 to-purple-50',
  },
  '21-30': {
    title: 'Таблиці Множення 21-30 | Середній Рівень',
    description: 'Навчіться таблиць множення 21-30. Середній рівень та шаблони множення.',
    keywords: 'таблиця множення 21-30, таблиця множення, множення, навчання математики',
    level: 'intermediate',
    color: 'from-purple-50 to-pink-50',
  },
  '31-40': {
    title: 'Таблиці Множення 31-40 | Просунуте Множення',
    description: 'Навчіться таблиць множення 31, 32, 33, 34, 35, 36, 37, 38, 39, 40. Просунуті навички обчислення напам\'ять.',
    keywords: 'таблиця множення 31-40, таблиця множення, множення, навчання математики',
    level: 'intermediate',
    color: 'from-pink-50 to-rose-50',
  },
  '41-50': {
    title: 'Таблиці Множення 41-50 | Середньо-Просунутий',
    description: 'Навчіться таблиць множення 41-50. Інтерактивні вправи для освоєння множення з великими числами.',
    keywords: 'таблиця множення 41-50, таблиця множення, множення, навчання математики',
    level: 'intermediate',
    color: 'from-rose-50 to-orange-50',
  },
  '51-60': {
    title: 'Таблиці Множення 51-60 | Просунутий Рівень',
    description: 'Навчіться таблиць множення 51, 52, 53, 54, 55, 56, 57, 58, 59, 60. Детальні навчальні матеріали для просунутих учнів.',
    keywords: 'таблиця множення 51-60, таблиця множення, множення, навчання математики',
    level: 'advanced',
    color: 'from-orange-50 to-amber-50',
  },
  '61-70': {
    title: 'Таблиці Множення 61-70 | Великі Числа',
    description: 'Навчіться таблиць множення 61-70. Комплексні освітні ресурси для множення з великими числами.',
    keywords: 'таблиця множення 61-70, таблиця множення, множення, навчання математики',
    level: 'advanced',
    color: 'from-amber-50 to-yellow-50',
  },
  '71-80': {
    title: 'Таблиці Множення 71-80 | Просунуте Множення',
    description: 'Навчіться таблиць множення 71, 72, 73, 74, 75, 76, 77, 78, 79, 80. Розвивайте математичні навички на просунутому рівні.',
    keywords: 'таблиця множення 71-80, таблиця множення, множення, навчання математики',
    level: 'advanced',
    color: 'from-yellow-50 to-lime-50',
  },
  '81-90': {
    title: 'Таблиці Множення 81-90 | Експертний Рівень',
    description: 'Навчіться таблиць множення 81-90. Складні операції множення та стратегії для експертів.',
    keywords: 'таблиця множення 81-90, таблиця множення, множення, навчання математики',
    level: 'advanced',
    color: 'from-lime-50 to-emerald-50',
  },
  '91-100': {
    title: 'Таблиці Множення 91-100 | Найвищий Рівень',
    description: 'Навчіться таблиць множення 91, 92, 93, 94, 95, 96, 97, 98, 99, 100. Повна освіта для навичок множення на найвищому рівні.',
    keywords: 'таблиця множення 91-100, таблиця множення, множення, навчання математики',
    level: 'advanced',
    color: 'from-emerald-50 to-teal-50',
  },
}

// Finnish Range Metadata
const rangeMetadataFi: Record<string, {
  title: string
  description: string
  keywords: string
  level: 'beginner' | 'intermediate' | 'advanced'
  color: string
}> = {
  '1-10': {
    title: 'Kertotaulut 1-10 | Aloittelijan Taso',
    description: 'Opi kertotaulut 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Helposti ymmärrettävät selitykset aloittelijoille, visuaaliset esimerkit ja käytännön harjoitukset.',
    keywords: 'kertotaulu 1-10, kertotaulu, kertominen, matematiikan oppiminen',
    level: 'beginner',
    color: 'from-blue-50 to-indigo-50',
  },
  '11-20': {
    title: 'Kertotaulut 11-20 | Kaksinumeroiset Luvut',
    description: 'Opi kertotaulut 11-20. Tärkeä askel kaksinumeroisten lukujen kertolaskun ymmärtämiseen.',
    keywords: 'kertotaulu 11-20, kertotaulu, kertominen, matematiikan oppiminen',
    level: 'beginner',
    color: 'from-indigo-50 to-purple-50',
  },
  '21-30': {
    title: 'Kertotaulut 21-30 | Keskitaso',
    description: 'Opi kertotaulut 21-30. Keskitaso ja kertolaskun mallit.',
    keywords: 'kertotaulu 21-30, kertotaulu, kertominen, matematiikan oppiminen',
    level: 'intermediate',
    color: 'from-purple-50 to-pink-50',
  },
  '31-40': {
    title: 'Kertotaulut 31-40 | Edistynyt Kertolasku',
    description: 'Opi kertotaulut 31, 32, 33, 34, 35, 36, 37, 38, 39, 40. Edistyneet päässälaskutaidot.',
    keywords: 'kertotaulu 31-40, kertotaulu, kertominen, matematiikan oppiminen',
    level: 'intermediate',
    color: 'from-pink-50 to-rose-50',
  },
  '41-50': {
    title: 'Kertotaulut 41-50 | Keskitaso-Edistynyt',
    description: 'Opi kertotaulut 41-50. Interaktiiviset harjoitukset isojen lukujen kertolaskun hallitsemiseen.',
    keywords: 'kertotaulu 41-50, kertotaulu, kertominen, matematiikan oppiminen',
    level: 'intermediate',
    color: 'from-rose-50 to-orange-50',
  },
  '51-60': {
    title: 'Kertotaulut 51-60 | Edistynyt Taso',
    description: 'Opi kertotaulut 51, 52, 53, 54, 55, 56, 57, 58, 59, 60. Yksityiskohtaiset oppimateriaalit edistyneille oppilaille.',
    keywords: 'kertotaulu 51-60, kertotaulu, kertominen, matematiikan oppiminen',
    level: 'advanced',
    color: 'from-orange-50 to-amber-50',
  },
  '61-70': {
    title: 'Kertotaulut 61-70 | Suuret Luvut',
    description: 'Opi kertotaulut 61-70. Kattavat opetusresurssit suurten lukujen kertolaskuun.',
    keywords: 'kertotaulu 61-70, kertotaulu, kertominen, matematiikan oppiminen',
    level: 'advanced',
    color: 'from-amber-50 to-yellow-50',
  },
  '71-80': {
    title: 'Kertotaulut 71-80 | Edistynyt Kertolasku',
    description: 'Opi kertotaulut 71, 72, 73, 74, 75, 76, 77, 78, 79, 80. Kehitä matemaattisia taitoja edistyneellä tasolla.',
    keywords: 'kertotaulu 71-80, kertotaulu, kertominen, matematiikan oppiminen',
    level: 'advanced',
    color: 'from-yellow-50 to-lime-50',
  },
  '81-90': {
    title: 'Kertotaulut 81-90 | Asiantuntijataso',
    description: 'Opi kertotaulut 81-90. Haastavat kertolaskut ja strategiat asiantuntijoille.',
    keywords: 'kertotaulu 81-90, kertotaulu, kertominen, matematiikan oppiminen',
    level: 'advanced',
    color: 'from-lime-50 to-emerald-50',
  },
  '91-100': {
    title: 'Kertotaulut 91-100 | Korkein Taso',
    description: 'Opi kertotaulut 91, 92, 93, 94, 95, 96, 97, 98, 99, 100. Täydellinen opetus kertolaskutaidoille korkeimmalla tasolla.',
    keywords: 'kertotaulu 91-100, kertotaulu, kertominen, matematiikan oppiminen',
    level: 'advanced',
    color: 'from-emerald-50 to-teal-50',
  },
}

// French Range Metadata
const rangeMetadataFr: Record<string, {
  title: string
  description: string
  keywords: string
  level: 'beginner' | 'intermediate' | 'advanced'
  color: string
}> = {
  '1-10': {
    title: 'Tables de Multiplication 1-10 | Niveau Débutant',
    description: 'Apprenez les tables de multiplication 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Explications faciles pour débutants, exemples visuels et exercices pratiques.',
    keywords: 'table de multiplication 1-10, table de multiplication, multiplication, apprentissage des mathématiques',
    level: 'beginner',
    color: 'from-blue-50 to-indigo-50',
  },
  '11-20': {
    title: 'Tables de Multiplication 11-20 | Nombres à Deux Chiffres',
    description: 'Apprenez les tables de multiplication 11-20. Étape importante pour comprendre la multiplication des nombres à deux chiffres.',
    keywords: 'table de multiplication 11-20, table de multiplication, multiplication, apprentissage des mathématiques',
    level: 'beginner',
    color: 'from-indigo-50 to-purple-50',
  },
  '21-30': {
    title: 'Tables de Multiplication 21-30 | Niveau Intermédiaire',
    description: 'Apprenez les tables de multiplication 21-30. Niveau intermédiaire et modèles de multiplication.',
    keywords: 'table de multiplication 21-30, table de multiplication, multiplication, apprentissage des mathématiques',
    level: 'intermediate',
    color: 'from-purple-50 to-pink-50',
  },
  '31-40': {
    title: 'Tables de Multiplication 31-40 | Multiplication Avancée',
    description: 'Apprenez les tables de multiplication 31, 32, 33, 34, 35, 36, 37, 38, 39, 40. Compétences avancées en calcul mental.',
    keywords: 'table de multiplication 31-40, table de multiplication, multiplication, apprentissage des mathématiques',
    level: 'intermediate',
    color: 'from-pink-50 to-rose-50',
  },
  '41-50': {
    title: 'Tables de Multiplication 41-50 | Niveau Intermédiaire-Avancé',
    description: 'Apprenez les tables de multiplication 41-50. Exercices interactifs pour maîtriser la multiplication de grands nombres.',
    keywords: 'table de multiplication 41-50, table de multiplication, multiplication, apprentissage des mathématiques',
    level: 'intermediate',
    color: 'from-rose-50 to-orange-50',
  },
  '51-60': {
    title: 'Tables de Multiplication 51-60 | Niveau Avancé',
    description: 'Apprenez les tables de multiplication 51, 52, 53, 54, 55, 56, 57, 58, 59, 60. Matériels d\'étude détaillés pour les élèves de niveau avancé.',
    keywords: 'table de multiplication 51-60, table de multiplication, multiplication, apprentissage des mathématiques',
    level: 'advanced',
    color: 'from-orange-50 to-amber-50',
  },
  '61-70': {
    title: 'Tables de Multiplication 61-70 | Grands Nombres',
    description: 'Apprenez les tables de multiplication 61-70. Ressources éducatives complètes pour la multiplication de grands nombres.',
    keywords: 'table de multiplication 61-70, table de multiplication, multiplication, apprentissage des mathématiques',
    level: 'advanced',
    color: 'from-amber-50 to-yellow-50',
  },
  '71-80': {
    title: 'Tables de Multiplication 71-80 | Multiplication Niveau Avancé',
    description: 'Apprenez les tables de multiplication 71, 72, 73, 74, 75, 76, 77, 78, 79, 80. Développez des compétences mathématiques de niveau avancé.',
    keywords: 'table de multiplication 71-80, table de multiplication, multiplication, apprendre les mathématiques',
    level: 'advanced',
    color: 'from-yellow-50 to-lime-50',
  },
  '81-90': {
    title: 'Tables de Multiplication 81-90 | Niveau Expert',
    description: 'Apprenez les tables de multiplication 81-90. Opérations de multiplication difficiles et stratégies pour les élèves de niveau expert.',
    keywords: 'table de multiplication 81-90, table de multiplication, multiplication, apprendre les mathématiques',
    level: 'advanced',
    color: 'from-lime-50 to-emerald-50',
  },
  '91-100': {
    title: 'Tables de Multiplication 91-100 | Niveau le Plus Élevé',
    description: 'Apprenez les tables de multiplication 91, 92, 93, 94, 95, 96, 97, 98, 99, 100. Éducation complète pour les compétences en multiplication de niveau le plus élevé.',
    keywords: 'table de multiplication 91-100, table de multiplication, multiplication, apprentissage des mathématiques',
    level: 'advanced',
    color: 'from-emerald-50 to-teal-50',
  },
}

// Swedish Range Metadata
const rangeMetadataSv: Record<string, {
  title: string
  description: string
  keywords: string
  level: 'beginner' | 'intermediate' | 'advanced'
  color: string
}> = {
  '1-10': {
    title: 'Multiplikationstabeller 1-10 | Nybörjarnivå',
    description: 'Lär dig multiplikationstabellerna 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Enkla förklaringar för nybörjare, visuella exempel och praktiska övningar.',
    keywords: 'multiplikationstabell 1-10, multiplikationstabell, multiplikation, matematiklärande',
    level: 'beginner',
    color: 'from-blue-50 to-indigo-50',
  },
  '11-20': {
    title: 'Multiplikationstabeller 11-20 | Tvåsiffriga Tal',
    description: 'Lär dig multiplikationstabellerna 11-20. Viktigt steg för att förstå tvåsiffrig multiplikation.',
    keywords: 'multiplikationstabell 11-20, multiplikationstabell, multiplikation, matematiklärande',
    level: 'beginner',
    color: 'from-indigo-50 to-purple-50',
  },
  '21-30': {
    title: 'Multiplikationstabeller 21-30 | Mellanliggande Nivå',
    description: 'Lär dig multiplikationstabellerna 21-30. Mellanliggande nivå och multiplikationsmönster.',
    keywords: 'multiplikationstabell 21-30, multiplikationstabell, multiplikation, matematiklärande',
    level: 'intermediate',
    color: 'from-purple-50 to-pink-50',
  },
  '31-40': {
    title: 'Multiplikationstabeller 31-40 | Avancerad Multiplikation',
    description: 'Lär dig multiplikationstabellerna 31, 32, 33, 34, 35, 36, 37, 38, 39, 40. Avancerade färdigheter i mental matematik.',
    keywords: 'multiplikationstabell 31-40, multiplikationstabell, multiplikation, matematiklärande',
    level: 'intermediate',
    color: 'from-pink-50 to-rose-50',
  },
  '41-50': {
    title: 'Multiplikationstabeller 41-50 | Mellanliggande-Avancerad Nivå',
    description: 'Lär dig multiplikationstabellerna 41-50. Interaktiva övningar för att bemästra multiplikation av stora tal.',
    keywords: 'multiplikationstabell 41-50, multiplikationstabell, multiplikation, matematiklärande',
    level: 'intermediate',
    color: 'from-rose-50 to-orange-50',
  },
  '51-60': {
    title: 'Multiplikationstabeller 51-60 | Avancerad Nivå',
    description: 'Lär dig multiplikationstabellerna 51, 52, 53, 54, 55, 56, 57, 58, 59, 60. Detaljerat studiematerial för elever på avancerad nivå.',
    keywords: 'multiplikationstabell 51-60, multiplikationstabell, multiplikation, matematiklärande',
    level: 'advanced',
    color: 'from-orange-50 to-amber-50',
  },
  '61-70': {
    title: 'Multiplikationstabeller 61-70 | Stora Tal',
    description: 'Lär dig multiplikationstabellerna 61-70. Omfattande pedagogiska resurser för multiplikation av stora tal.',
    keywords: 'multiplikationstabell 61-70, multiplikationstabell, multiplikation, matematiklärande',
    level: 'advanced',
    color: 'from-amber-50 to-yellow-50',
  },
  '71-80': {
    title: 'Multiplikationstabeller 71-80 | Avancerad Multiplikation',
    description: 'Lär dig multiplikationstabellerna 71, 72, 73, 74, 75, 76, 77, 78, 79, 80. Utveckla matematiska färdigheter på avancerad nivå.',
    keywords: 'multiplikationstabell 71-80, multiplikationstabell, multiplikation, matematiklärande',
    level: 'advanced',
    color: 'from-yellow-50 to-lime-50',
  },
  '81-90': {
    title: 'Multiplikationstabeller 81-90 | Expertnivå',
    description: 'Lär dig multiplikationstabellerna 81-90. Utmanande multiplikationsoperationer och strategier för elever på expertnivå.',
    keywords: 'multiplikationstabell 81-90, multiplikationstabell, multiplikation, matematiklärande',
    level: 'advanced',
    color: 'from-lime-50 to-emerald-50',
  },
  '91-100': {
    title: 'Multiplikationstabeller 91-100 | Högsta Nivån',
    description: 'Lär dig multiplikationstabellerna 91, 92, 93, 94, 95, 96, 97, 98, 99, 100. Komplett utbildning för multiplikationsfärdigheter på högsta nivå.',
    keywords: 'multiplikationstabell 91-100, multiplikationstabell, multiplikation, matematiklärande',
    level: 'advanced',
    color: 'from-emerald-50 to-teal-50',
  },
}

// Portuguese Range Metadata
const rangeMetadataPt: Record<string, {
  title: string
  description: string
  keywords: string
  level: 'beginner' | 'intermediate' | 'advanced'
  color: string
}> = {
  '1-10': {
    title: 'Tabuada de 1 a 10 | Nível Iniciante',
    description: 'Aprenda a tabuada de 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Explicações simples para iniciantes, exemplos visuais e exercícios práticos.',
    keywords: 'tabuada 1-10, tabuada, multiplicação, aprendizado de matemática',
    level: 'beginner',
    color: 'from-blue-50 to-indigo-50',
  },
  '11-20': {
    title: 'Tabuada de 11 a 20 | Números de Dois Dígitos',
    description: 'Aprenda a tabuada de 11-20. Passo importante para entender a multiplicação de números de dois dígitos.',
    keywords: 'tabuada 11-20, tabuada, multiplicação, aprendizado de matemática',
    level: 'beginner',
    color: 'from-indigo-50 to-purple-50',
  },
  '21-30': {
    title: 'Tabuada de 21 a 30 | Nível Intermediário',
    description: 'Aprenda a tabuada de 21-30. Nível intermediário e padrões de multiplicação.',
    keywords: 'tabuada 21-30, tabuada, multiplicação, aprendizado de matemática',
    level: 'intermediate',
    color: 'from-purple-50 to-pink-50',
  },
  '31-40': {
    title: 'Tabuada de 31 a 40 | Multiplicação Avançada',
    description: 'Aprenda a tabuada de 31, 32, 33, 34, 35, 36, 37, 38, 39, 40. Habilidades avançadas de cálculo mental.',
    keywords: 'tabuada 31-40, tabuada, multiplicação, aprendizado de matemática',
    level: 'intermediate',
    color: 'from-pink-50 to-rose-50',
  },
  '41-50': {
    title: 'Tabuada de 41 a 50 | Nível Intermediário-Avançado',
    description: 'Aprenda a tabuada de 41-50. Exercícios interativos para dominar a multiplicação de números grandes.',
    keywords: 'tabuada 41-50, tabuada, multiplicação, aprendizado de matemática',
    level: 'intermediate',
    color: 'from-rose-50 to-orange-50',
  },
  '51-60': {
    title: 'Tabuada de 51 a 60 | Nível Avançado',
    description: 'Aprenda a tabuada de 51, 52, 53, 54, 55, 56, 57, 58, 59, 60. Material de estudo detalhado para alunos de nível avançado.',
    keywords: 'tabuada 51-60, tabuada, multiplicação, aprendizado de matemática',
    level: 'advanced',
    color: 'from-orange-50 to-amber-50',
  },
  '61-70': {
    title: 'Tabuada de 61 a 70 | Números Grandes',
    description: 'Aprenda a tabuada de 61-70. Recursos educacionais abrangentes para multiplicação de números grandes.',
    keywords: 'tabuada 61-70, tabuada, multiplicação, aprendizado de matemática',
    level: 'advanced',
    color: 'from-amber-50 to-yellow-50',
  },
  '71-80': {
    title: 'Tabuada de 71 a 80 | Multiplicação Avançada',
    description: 'Aprenda a tabuada de 71, 72, 73, 74, 75, 76, 77, 78, 79, 80. Desenvolva habilidades matemáticas de nível avançado.',
    keywords: 'tabuada 71-80, tabuada, multiplicação, aprendizado de matemática',
    level: 'advanced',
    color: 'from-yellow-50 to-lime-50',
  },
  '81-90': {
    title: 'Tabuada de 81 a 90 | Nível Expert',
    description: 'Aprenda a tabuada de 81-90. Operações de multiplicação desafiadoras e estratégias para alunos de nível expert.',
    keywords: 'tabuada 81-90, tabuada, multiplicação, aprendizado de matemática',
    level: 'advanced',
    color: 'from-lime-50 to-emerald-50',
  },
  '91-100': {
    title: 'Tabuada de 91 a 100 | Nível Mais Alto',
    description: 'Aprenda a tabuada de 91, 92, 93, 94, 95, 96, 97, 98, 99, 100. Educação completa para habilidades de multiplicação de nível mais alto.',
    keywords: 'tabuada 91-100, tabuada, multiplicação, aprendizado de matemática',
    level: 'advanced',
    color: 'from-emerald-50 to-teal-50',
  },
}

// English Guide Metadata
const guideMetadataEn: Record<string, {
  title: string
  description: string
  keywords: string
}> = {
  'for-students': {
    title: 'For Students: Times Tables Guide | Step-by-Step Learning',
    description: 'Step-by-step guide to learn times tables easily. Learn at your own pace with visual materials, practical activities and fun games!',
    keywords: 'learn times tables, math for students, times tables guide, step by step multiplication',
  },
  'for-parents': {
    title: 'For Parents: Supporting Times Tables Learning | Effective Methods',
    description: 'Effective methods and strategies to support your child learning times tables. Tools to make learning fun and effective at home.',
    keywords: 'times tables for parents, supporting math learning, effective education methods, home practice',
  },
  'for-teachers': {
    title: 'For Teachers: Times Tables Teaching Guide | Classroom Resources',
    description: 'Comprehensive teaching guide for times tables. Classroom activities, assessment tools and differentiation strategies.',
    keywords: 'teaching times tables, classroom math, teacher resources, multiplication teaching',
  },
}

// Polish Guide Metadata
const guideMetadataPl: Record<string, {
  title: string
  description: string
  keywords: string
}> = {
  'dla-uczniow': {
    title: 'Przewodnik po Tabliczce Mnożenia dla Uczniów | Nauka Krok po Kroku',
    description: 'Przewodnik krok po kroku do łatwej nauki tabliczki mnożenia. Ucz się we własnym tempie dzięki materiałom wizualnym, praktycznym ćwiczeniom i zabawnym grom!',
    keywords: 'nauka tabliczki mnożenia, matematyka dla uczniów, przewodnik tabliczki, mnożenie krok po kroku',
  },
  'dla-nauczycieli': {
    title: 'Przewodnik po Tabliczce Mnożenia dla Nauczycieli | Strategie Nauczania',
    description: 'Kompleksowe zasoby dla nauczycieli dotyczące efektywnego nauczania tabliczki mnożenia. Zawiera strategie pedagogiczne, zajęcia klasowe, nauczanie zróżnicowane i metody oceny.',
    keywords: 'nauczanie tabliczki mnożenia, strategie pedagogiczne, zajęcia matematyczne, nauczanie zróżnicowane, zasoby dla nauczycieli',
  },
  'dla-rodzicow': {
    title: 'Przewodnik po Tabliczce Mnożenia dla Rodziców | Wsparcie Nauki w Domu',
    description: 'Jak pomóc dziecku nauczyć się tabliczki mnożenia w domu. Praktyczne wskazówki, gry edukacyjne i strategie motywacyjne.',
    keywords: 'pomoc dzieciom z tabliczką mnożenia, matematyka w domu, edukacja rodziców, zajęcia edukacyjne',
  },
}

// Spanish Guide Metadata
const guideMetadataEs: Record<string, {
  title: string
  description: string
  keywords: string
}> = {
  'para-estudiantes': {
    title: 'Guía de Tablas de Multiplicar para Estudiantes | Aprende Paso a Paso',
    description: 'Guía paso a paso para aprender tablas de multiplicar fácilmente. Materiales visuales, actividades prácticas y juegos divertidos para aprender a tu ritmo.',
    keywords: 'aprender tablas de multiplicar, matemáticas para estudiantes, guía de tablas, multiplicación paso a paso',
  },
  'para-profesores': {
    title: 'Guía de Tablas de Multiplicar para Profesores | Estrategias de Enseñanza',
    description: 'Recursos completos para profesores sobre cómo enseñar tablas de multiplicar de manera efectiva. Incluye estrategias pedagógicas, actividades de aula, instrucción diferenciada y métodos de evaluación.',
    keywords: 'enseñar tablas de multiplicar, estrategias pedagógicas, actividades de matemáticas, instrucción diferenciada, recursos para profesores',
  },
  'para-padres': {
    title: 'Guía de Tablas de Multiplicar para Padres | Apoya el Aprendizaje en Casa',
    description: 'Cómo ayudar a tu hijo a aprender tablas de multiplicar en casa. Consejos prácticos, juegos educativos y estrategias de motivación.',
    keywords: 'ayudar a niños con tablas de multiplicar, matemáticas en casa, educación para padres, actividades educativas',
  },
}

// German Guide Metadata
const guideMetadataDe: Record<string, {
  title: string
  description: string
  keywords: string
}> = {
  'fuer-schueler': {
    title: 'Einmaleins-Leitfaden für Schüler | Schritt-für-Schritt Lernen',
    description: 'Schritt-für-Schritt-Leitfaden zum einfachen Lernen des Einmaleins. Visuelle Materialien, praktische Aktivitäten und unterhaltsame Spiele zum Lernen in deinem eigenen Tempo.',
    keywords: 'einmaleins lernen, mathematik für schüler, lernhilfe, multiplikation schritt für schritt',
  },
  'fuer-lehrer': {
    title: 'Einmaleins-Leitfaden für Lehrer | Unterrichtsstrategien',
    description: 'Umfassende Ressourcen für Lehrer zum effektiven Unterrichten des Einmaleins. Enthält pädagogische Strategien, Klassenaktivitäten, differenzierte Anleitung und Bewertungsmethoden.',
    keywords: 'einmaleins unterrichten, pädagogische strategien, mathematik aktivitäten, differenzierter unterricht, lehrerressourcen',
  },
  'fuer-eltern': {
    title: 'Einmaleins-Leitfaden für Eltern | Unterstützen Sie das Lernen zu Hause',
    description: 'Wie Sie Ihrem Kind beim Lernen des Einmaleins zu Hause helfen können. Praktische Tipps, Lernspiele und Motivationsstrategien.',
    keywords: 'kindern beim einmaleins helfen, mathematik zu hause, elternbildung, lernaktivitäten',
  },
}

// Czech Guide Metadata
const guideMetadataCs: Record<string, {
  title: string
  description: string
  keywords: string
}> = {
  'pro-studenty': {
    title: 'Průvodce Násobilkou pro Studenty | Učení Krok za Krokem',
    description: 'Průvodce krok za krokem pro snadné učení násobilky. Vizuální materiály, praktické aktivity a zábavné hry pro učení vlastním tempem.',
    keywords: 'naučit se násobilku, matematika pro studenty, průvodce násobilkou, násobení krok za krokem',
  },
  'pro-ucitele': {
    title: 'Průvodce Násobilkou pro Učitele | Výukové Strategie',
    description: 'Komplexní zdroje pro učitele o efektivním vyučování násobilky. Zahrnuje pedagogické strategie, aktivity ve třídě, diferencovanou výuku a metody hodnocení.',
    keywords: 'vyučovat násobilku, pedagogické strategie, matematické aktivity, diferencovaná výuka, zdroje pro učitele',
  },
  'pro-rodice': {
    title: 'Průvodce Násobilkou pro Rodiče | Podpořte Učení Doma',
    description: 'Jak pomoci vašemu dítěti naučit se násobilku doma. Praktické tipy, vzdělávací hry a motivační strategie.',
    keywords: 'pomoci dětem s násobilkou, matematika doma, vzdělávání rodičů, výukové aktivity',
  },
}

// Ukrainian Guide Metadata
const guideMetadataUk: Record<string, {
  title: string
  description: string
  keywords: string
}> = {
  'dlya-uchniv': {
    title: 'Посібник з Таблиці Множення для Учнів | Навчання Крок за Кроком',
    description: 'Покроковий посібник для легкого вивчення таблиці множення. Візуальні матеріали, практичні вправи та цікаві ігри для навчання у власному темпі.',
    keywords: 'вивчити таблицю множення, математика для учнів, посібник з таблиці множення, множення крок за кроком',
  },
  'dlya-vchyteliv': {
    title: 'Посібник з Таблиці Множення для Вчителів | Стратегії Навчання',
    description: 'Комплексні ресурси для вчителів про ефективне викладання таблиці множення. Включає педагогічні стратегії, класні активності, диференційоване навчання та методи оцінювання.',
    keywords: 'викладати таблицю множення, педагогічні стратегії, математичні активності, диференційоване навчання, ресурси для вчителів',
  },
  'dlya-batkiv': {
    title: 'Посібник з Таблиці Множення для Батьків | Підтримка Навчання Вдома',
    description: 'Як допомогти вашій дитині вивчити таблицю множення вдома. Практичні поради, освітні ігри та мотиваційні стратегії.',
    keywords: 'допомогти дітям з таблицею множення, математика вдома, освіта батьків, навчальні активності',
  },
}

// Finnish Guide Metadata
const guideMetadataFi: Record<string, {
  title: string
  description: string
  keywords: string
}> = {
  'oppilaille': {
    title: 'Kertotauluopas Oppilaille | Opiskele Vaihe Vaiheelta',
    description: 'Vaiheittainen opas kertotaulun helpppoon oppimiseen. Visuaaliset materiaalit, käytännön harjoitukset ja hauskat pelit omaan tahtiin opiskeluun.',
    keywords: 'oppia kertotaulu, matematiikka oppilaille, kertotauluopas, kertolasku vaihe vaiheelta',
  },
  'opettajille': {
    title: 'Kertotauluopas Opettajille | Opetusstrategiat',
    description: 'Kattavat resurssit opettajille kertotaulun tehokkaasta opettamisesta. Sisältää pedagogisia strategioita, luokkahuoneen toimintoja, eriyttävää opetusta ja arviointimenetelmiä.',
    keywords: 'opettaa kertotaulu, pedagogiset strategiat, matematiikan toiminnot, eriyttävä opetus, opettajan resurssit',
  },
  'vanhemmille': {
    title: 'Kertotauluopas Vanhemmille | Tue Oppimista Kotona',
    description: 'Kuinka auttaa lastasi oppimaan kertotaulu kotona. Käytännön vinkkejä, opetuspelejä ja motivointistrategioita.',
    keywords: 'auttaa lapsia kertotaulussa, matematiikka kotona, vanhempien koulutus, opetustoiminnot',
  },
}

// French Guide Metadata
const guideMetadataFr: Record<string, {
  title: string
  description: string
  keywords: string
}> = {
  'pour-les-eleves': {
    title: 'Guide des Tables de Multiplication pour Élèves | Apprendre Étape par Étape',
    description: 'Guide étape par étape pour apprendre les tables de multiplication facilement. Matériaux visuels, activités pratiques et jeux amusants pour apprendre à votre rythme.',
    keywords: 'apprendre les tables de multiplication, mathématiques pour élèves, guide des tables, multiplication étape par étape',
  },
  'pour-les-enseignants': {
    title: 'Guide des Tables de Multiplication pour Enseignants | Stratégies Pédagogiques',
    description: 'Ressources complètes pour les enseignants sur l\'enseignement efficace des tables de multiplication. Comprend des stratégies pédagogiques, activités en classe, enseignement différencié et méthodes d\'évaluation.',
    keywords: 'enseigner les tables de multiplication, stratégies pédagogiques, activités mathématiques, enseignement différencié, ressources pour enseignants',
  },
  'pour-les-parents': {
    title: 'Guide des Tables de Multiplication pour Parents | Soutenir l\'Apprentissage à la Maison',
    description: 'Comment aider votre enfant à apprendre les tables de multiplication à la maison. Conseils pratiques, jeux éducatifs et stratégies de motivation.',
    keywords: 'aider les enfants avec les tables, mathématiques à la maison, éducation des parents, activités d\'apprentissage',
  },
}

// Swedish Guide Metadata
const guideMetadataSv: Record<string, {
  title: string
  description: string
  keywords: string
}> = {
  'for-elever': {
    title: 'Multiplikationstabellguide för Elever | Lär Steg för Steg',
    description: 'Steg-för-steg-guide för att lära dig multiplikationstabeller enkelt. Visuellt material, praktiska övningar och roliga spel för att lära i din egen takt.',
    keywords: 'lära multiplikationstabeller, matematik för elever, tabellguide, multiplikation steg för steg',
  },
  'for-larare': {
    title: 'Multiplikationstabellguide för Lärare | Undervisningsstrategier',
    description: 'Omfattande resurser för lärare om effektiv undervisning av multiplikationstabeller. Inkluderar pedagogiska strategier, klassrumsaktiviteter, differentierad undervisning och utvärderingsmetoder.',
    keywords: 'undervisa multiplikationstabeller, pedagogiska strategier, matematikaktiviteter, differentierad undervisning, lärarresurser',
  },
  'for-foraldrar': {
    title: 'Multiplikationstabellguide för Föräldrar | Stöd Lärande Hemma',
    description: 'Hur du hjälper ditt barn att lära sig multiplikationstabeller hemma. Praktiska tips, pedagogiska spel och motivationsstrategier.',
    keywords: 'hjälpa barn med tabeller, matematik hemma, föräldrarutbildning, lärandeaktiviteter',
  },
}

// Portuguese Guide Metadata
const guideMetadataPt: Record<string, {
  title: string
  description: string
  keywords: string
}> = {
  'para-estudantes': {
    title: 'Guia de Tabuada para Estudantes | Aprendizado Passo a Passo',
    description: 'Guia passo a passo para aprender a tabuada facilmente. Aprenda no seu próprio ritmo com materiais visuais, atividades práticas e jogos divertidos!',
    keywords: 'aprender tabuada, matemática para estudantes, guia de tabuada, multiplicação passo a passo',
  },
  'para-professores': {
    title: 'Guia de Tabuada para Professores | Estratégias de Ensino',
    description: 'Recursos abrangentes para professores sobre como ensinar a tabuada de forma eficaz. Inclui estratégias pedagógicas, atividades em sala de aula, ensino diferenciado e métodos de avaliação.',
    keywords: 'ensinar tabuada, estratégias pedagógicas, atividades de matemática, ensino diferenciado, recursos para professores',
  },
  'para-pais': {
    title: 'Guia de Tabuada para Pais | Como Ajudar Seu Filho',
    description: 'Como apoiar o aprendizado da tabuada do seu filho em casa. Dicas práticas, jogos educativos e estratégias de motivação.',
    keywords: 'ajudar crianças com tabuada, matemática em casa, educação dos pais, atividades de aprendizado',
  },
}

const guideComponents: Record<string, any> = {
  'for-students': ForStudentsEn,
  'for-teachers': ForTeachersEn,
  'for-parents': ForParentsEn,
  'ogrenciler-icin': ForStudents,
  'ogretmenler-icin': ForTeachers,
  'veliler-icin': ForParents,
  'para-estudiantes': ForStudentsEs,
  'para-profesores': ForTeachersEs,
  'para-padres': ForParentsEs,
  'fuer-schueler': ForStudentsDe,
  'fuer-lehrer': ForTeachersDe,
  'fuer-eltern': ForParentsDe,
  'pro-studenty': ForStudentsCs,
  'pro-ucitele': ForTeachersCs,
  'pro-rodice': ForParentsCs,
  'dlya-uchniv': ForStudentsUk,
  'dlya-vchyteliv': ForTeachersUk,
  'dlya-batkiv': ForParentsUk,
  'oppilaille': ForStudentsFi,
  'opettajille': ForTeachersFi,
  'vanhemmille': ForParentsFi,
  'pour-les-eleves': ForStudentsFr,
  'pour-les-enseignants': ForTeachersFr,
  'pour-les-parents': ForParentsFr,
  'for-elever': ForStudentsSv,
  'for-larare': ForTeachersSv,
  'for-foraldrar': ForParentsSv,
  'para-estudantes': ForStudentsPt,
  'para-professores': ForTeachersPt,
  'para-pais': ForParentsPt,
  'dla-uczniow': DlaUczniwPl,
  'dla-nauczycieli': DlaNauczycieliPl,
  'dla-rodzicow': DlaRodzicwPl,
}

// Determine slug type
function getSlugType(slug: string, locale: Locale): 'range' | 'number' | 'guide' | null {
  if (/^\d+-\d+$/.test(slug)) return 'range'
  if (/^\d+$/.test(slug)) return 'number'
  // Check against locale-specific guide metadata
  if (locale === 'en' && slug in guideMetadataEn) return 'guide'
  if (locale === 'cs' && slug in guideMetadataCs) return 'guide'
  if (locale === 'uk' && slug in guideMetadataUk) return 'guide'
  if (locale === 'fi' && slug in guideMetadataFi) return 'guide'
  if (locale === 'fr' && slug in guideMetadataFr) return 'guide'
  if (locale === 'sv' && slug in guideMetadataSv) return 'guide'
  if (locale === 'pt' && slug in guideMetadataPt) return 'guide'
  if (locale === 'pl' && slug in guideMetadataPl) return 'guide'
  if (locale === 'tr' && slug in guideMetadata) return 'guide'
  if (locale === 'es' && slug in guideMetadataEs) return 'guide'
  if (locale === 'de' && slug in guideMetadataDe) return 'guide'
  return null
}

export async function generateStaticParams() {
  const params: Array<{ lang: string; topic: string; slug: string }> = []
  
  const langs = [
    { lang: 'pl', topic: 'tabliczki-mnozenia' },
    { lang: 'en', topic: 'multiplication-tables' },
    { lang: 'tr', topic: 'carpim-tablosu' },
    { lang: 'es', topic: 'tablas-de-multiplicar' },
    { lang: 'cs', topic: 'nasobilka' },
    { lang: 'de', topic: 'einmaleins' },
    { lang: 'uk', topic: 'tablycya-mnozhennya' },
    { lang: 'fi', topic: 'kertotaulut' },
    { lang: 'fr', topic: 'table-de-multiplication' },
    { lang: 'sv', topic: 'multiplikationstabeller' },
    { lang: 'pt', topic: 'tabuada' },
  ]

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
    
    // Add guides for this locale
    const localeGuides = guides[locale]
    Object.values(localeGuides).forEach(guide => {
      params.push({ lang, topic, slug: guide })
    })
  })

  return params
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, topic, slug } = await params
  
  if (!['pl', 'en', 'tr', 'es', 'de', 'cs', 'uk', 'fi', 'fr', 'sv', 'pt'].includes(lang) || topic !== topicSlugs[lang as Locale]) {
    return {}
  }

  const locale = lang as Locale
  const config = siteConfig[locale]
  const slugType = getSlugType(slug, locale)
  
  if (!slugType) {
    return {}
  }

  const hreflang = generateHreflangMetadata(slug)

  // Polish metadata
  if (locale === 'pl') {
    if (slugType === 'range') {
      const meta = rangeMetadataPl[slug]
      if (!meta) return {}
      
      return {
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
      }
    }
    
    if (slugType === 'number') {
      const num = parseInt(slug, 10)
      if (isNaN(num) || num < 1 || num > 100) return {}
      
      const title = numberTitlesPl[num]
      const description = numberDescriptionsPl[num]
      
      return {
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
      }
    }
    
    if (slugType === 'guide') {
      const meta = guideMetadataPl[slug]
      if (!meta) return {}
      
      return {
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
      }
    }
  }

  // English metadata (production)
  if (locale === 'en') {
    if (slugType === 'range') {
      const meta = rangeMetadataEn[slug]
      if (!meta) return {}
      
      return {
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
      }
    }
    
    if (slugType === 'number') {
      const num = parseInt(slug, 10)
      return {
        metadataBase: new URL(config.domain),
        title: numberTitlesEn[num] || `${num} Times Table`,
        description: numberDescriptionsEn[num] || `Learn the ${num} times table.`,
        alternates: {
          canonical: `/${lang}/${topic}/${slug}`,
          ...hreflang,
        },
        robots: {
          index: true,
          follow: true,
        },
      }
    }
    
    if (slugType === 'guide') {
      const meta = guideMetadataEn[slug]
      if (!meta) return {}
      
      return {
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
      }
    }
  }

  // Turkish metadata (production)
  if (locale === 'tr') {
    if (slugType === 'range') {
      const meta = rangeMetadata[slug]
      if (!meta) return {}
      
      return {
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
      }
    }
    
    if (slugType === 'number') {
      const num = parseInt(slug, 10)
      return {
        metadataBase: new URL(config.domain),
        title: numberTitles[num] || `${num} Çarpım Tablosu`,
        description: numberDescriptions[num] || `${num} çarpım tablosunu öğrenin.`,
        alternates: {
          canonical: `/${lang}/${topic}/${slug}`,
          ...hreflang,
        },
        robots: {
          index: true,
          follow: true,
        },
      }
    }
    
    if (slugType === 'guide') {
      const meta = guideMetadata[slug]
      if (!meta) return {}
      
      return {
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
      }
    }
  }

  // Spanish metadata (production)
  if (locale === 'es') {
    if (slugType === 'range') {
      const meta = rangeMetadataEs[slug]
      if (!meta) return {}
      
      return {
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
      }
    }
    
    if (slugType === 'number') {
      const num = parseInt(slug, 10)
      return {
        metadataBase: new URL(config.domain),
        title: numberTitlesEs[num] || `Tabla del ${num}`,
        description: numberDescriptionsEs[num] || `Aprende la tabla del ${num}.`,
        alternates: {
          canonical: `/${lang}/${topic}/${slug}`,
          ...hreflang,
        },
        robots: {
          index: true,
          follow: true,
        },
      }
    }
    
    if (slugType === 'guide') {
      const meta = guideMetadataEs[slug]
      if (!meta) return {}
      
      return {
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
      }
    }
  }

  // German metadata
  if (locale === 'de') {
    if (slugType === 'range') {
      const meta = rangeMetadataDe[slug]
      if (!meta) return {}
      
      return {
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
      }
    }
    
    if (slugType === 'number') {
      const num = parseInt(slug, 10)
      if (isNaN(num) || num < 1 || num > 100) return {}
      
      const title = numberTitlesDe[num]
      const description = numberDescriptionsDe[num]
      
      return {
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
      }
    }
    
    if (slugType === 'guide') {
      const meta = guideMetadataDe[slug]
      if (!meta) return {}
      
      return {
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
      }
    }
  }

  // Czech metadata
  if (locale === 'cs') {
    if (slugType === 'range') {
      const meta = rangeMetadataCs[slug]
      if (!meta) return {}
      
      return {
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
      }
    }
    
    if (slugType === 'number') {
      const num = parseInt(slug, 10)
      if (isNaN(num) || num < 1 || num > 100) return {}
      
      const title = numberTitlesCs[num]
      const description = numberDescriptionsCs[num]
      
      return {
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
      }
    }
    
    if (slugType === 'guide') {
      const meta = guideMetadataCs[slug]
      if (!meta) return {}
      
      return {
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
      }
    }
  }

  // Ukrainian metadata
  if (locale === 'uk') {
    if (slugType === 'range') {
      const meta = rangeMetadataUk[slug]
      if (!meta) return {}
      
      return {
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
      }
    }
    
    if (slugType === 'number') {
      const num = parseInt(slug, 10)
      if (isNaN(num) || num < 1 || num > 100) return {}
      
      const title = numberTitlesUk[num]
      const description = numberDescriptionsUk[num]
      
      return {
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
      }
    }
    
    if (slugType === 'guide') {
      const meta = guideMetadataUk[slug]
      if (!meta) return {}
      
      return {
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
      }
    }
  }

  // Finnish metadata
  if (locale === 'fi') {
    if (slugType === 'range') {
      const meta = rangeMetadataFi[slug]
      if (!meta) return {}
      
      return {
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
      }
    }
    
    if (slugType === 'number') {
      const num = parseInt(slug, 10)
      if (isNaN(num) || num < 1 || num > 100) return {}
      
      const title = numberTitlesFi[num]
      const description = numberDescriptionsFi[num]
      
      return {
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
      }
    }
    
    if (slugType === 'guide') {
      const meta = guideMetadataFi[slug]
      if (!meta) return {}
      
      return {
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
      }
    }
  }

  // French metadata
  if (locale === 'fr') {
    if (slugType === 'range') {
      const meta = rangeMetadataFr[slug]
      if (!meta) return {}
      
      return {
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
      }
    }
    
    if (slugType === 'number') {
      const num = parseInt(slug, 10)
      if (isNaN(num) || num < 1 || num > 100) return {}
      
      const title = numberTitlesFr[num]
      const description = numberDescriptionsFr[num]
      
      return {
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
      }
    }
    
    if (slugType === 'guide') {
      const meta = guideMetadataFr[slug]
      if (!meta) return {}
      
      return {
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
      }
    }
  }

  // Swedish metadata
  if (locale === 'sv') {
    if (slugType === 'range') {
      const meta = rangeMetadataSv[slug]
      if (!meta) return {}
      
      return {
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
      }
    }
    
    if (slugType === 'number') {
      const num = parseInt(slug, 10)
      if (isNaN(num) || num < 1 || num > 100) return {}
      
      const title = numberTitlesSv[num]
      const description = numberDescriptionsSv[num]
      
      return {
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
      }
    }
    
    if (slugType === 'guide') {
      const meta = guideMetadataSv[slug]
      if (!meta) return {}
      
      return {
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
      }
    }
  }

  // Portuguese metadata
  if (locale === 'pt') {
    if (slugType === 'range') {
      const meta = rangeMetadataPt[slug]
      if (!meta) return {}
      
      return {
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
      }
    }
    
    if (slugType === 'number') {
      const num = parseInt(slug, 10)
      if (isNaN(num) || num < 1 || num > 100) return {}
      
      const title = numberTitlesPt[num]
      const description = numberDescriptionsPt[num]
      
      return {
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
      }
    }
    
    if (slugType === 'guide') {
      const meta = guideMetadataPt[slug]
      if (!meta) return {}
      
      return {
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
      }
    }
  }

  return {}
}

export default async function SlugPage({ params }: PageProps) {
  const { lang, topic, slug } = await params

  if (!['pl', 'en', 'tr', 'es', 'de', 'cs', 'uk', 'fi', 'fr', 'sv', 'pt'].includes(lang) || topic !== topicSlugs[lang as Locale]) {
    notFound()
  }

  const locale = lang as Locale
  const slugType = getSlugType(slug, locale)
  
  if (!slugType) {
    notFound()
  }

  // Turkish version (production-ready)
  if (locale === 'tr') {
    const baseUrl = siteConfig.tr.domain
    
    // RANGE PAGE
    if (slugType === 'range') {
      const meta = rangeMetadata[slug]
      if (!meta) notFound()
      
      const [start, end] = slug.split('-').map(Number)
      if (!start || !end || start > end) notFound()
      
      const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": `${baseUrl}/tr/carpim-tablosu/${slug}#webpage`,
            "url": `${baseUrl}/tr/carpim-tablosu/${slug}`,
            "name": `${slug} Çarpım Tablosu - ${meta.level === 'beginner' ? 'Başlangıç' : meta.level === 'intermediate' ? 'Orta' : 'İleri'} Seviyesi`,
            "description": meta.description,
            "isPartOf": {
              "@id": `${baseUrl}/#website`
            },
            "about": {
              "@id": `${baseUrl}/tr/carpim-tablosu/${slug}#learningresource`
            },
            "inLanguage": "tr-TR"
          },
          {
            "@type": "LearningResource",
            "@id": `${baseUrl}/tr/carpim-tablosu/${slug}#learningresource`,
            "name": `${slug} Çarpım Tablosu Öğrenme Kaynağı`,
            "description": meta.description,
            "educationalLevel": meta.level === 'beginner' ? 'Beginner' : meta.level === 'intermediate' ? 'Intermediate' : 'Advanced',
            "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
            "teaches": `${start}, ${start + 1}, ... ${end} çarpım tablolarını anlama ve uygulama becerileri`,
            "typicalAgeRange": meta.level === 'beginner' ? '6-8' : meta.level === 'intermediate' ? '7-10' : '9-12',
            "inLanguage": "tr-TR",
            "educationalUse": ["practice", "self-study", "homework"],
            "audience": {
              "@type": "EducationalAudience",
              "educationalRole": ["student"]
            },
            "hasPart": Array.from({ length: end - start + 1 }, (_, i) => ({
              "@type": "LearningResource",
              "name": `${start + i} Çarpım Tablosu`,
              "url": `${baseUrl}/tr/carpim-tablosu/${start + i}`
            }))
          }
        ]
      }

      const allRanges = getAllRanges()
      const currentIndex = allRanges.indexOf(slug)
      const nextRange = currentIndex < allRanges.length - 1 ? allRanges[currentIndex + 1] : undefined
      const prevRange = currentIndex > 0 ? allRanges[currentIndex - 1] : undefined

      return (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
          <RangePage
            rangeStart={start}
            rangeEnd={end}
            nextRangeUrl={nextRange ? `/tr/carpim-tablosu/${nextRange}` : undefined}
            prevRangeUrl={prevRange ? `/tr/carpim-tablosu/${prevRange}` : undefined}
            difficultyLevel={meta.level}
            difficultyColor={meta.color}
          />
        </>
      )
    }
    
    // NUMBER PAGE
    if (slugType === 'number') {
      const num = parseInt(slug, 10)
      if (isNaN(num) || num < 1 || num > 100) notFound()
      
      const range = getRangeFromNumber(num)
      const [rangeStart, rangeEnd] = range.split('-').map(Number)
      const specialProp = numberSpecialProperties[num] || `${num} ile Çarpma`

      const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": `${baseUrl}/tr/carpim-tablosu/${num}#webpage`,
            "url": `${baseUrl}/tr/carpim-tablosu/${num}`,
            "name": `${num} Çarpım Tablosu - ${specialProp}`,
            "description": numberDescriptions[num],
            "isPartOf": {
              "@id": `${baseUrl}/#website`
            },
            "about": {
              "@id": `${baseUrl}/tr/carpim-tablosu/${num}#learningresource`
            },
            "breadcrumb": {
              "@id": `${baseUrl}/tr/carpim-tablosu/${num}#breadcrumb`
            },
            "inLanguage": "tr-TR"
          },
          {
            "@type": "BreadcrumbList",
            "@id": `${baseUrl}/tr/carpim-tablosu/${num}#breadcrumb`,
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@id": `${baseUrl}/tr/carpim-tablosu`,
                  "name": "Ana Sayfa"
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@id": `${baseUrl}/tr/carpim-tablosu/${range}`,
                  "name": `${range} Çarpım Tablosu`
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@id": `${baseUrl}/tr/carpim-tablosu/${num}`,
                  "name": `${num} Çarpım Tablosu`
                }
              }
            ]
          },
          {
            "@type": "LearningResource",
            "@id": `${baseUrl}/tr/carpim-tablosu/${num}#learningresource`,
            "name": `${num} Çarpım Tablosu Öğrenme Kaynağı`,
            "description": numberDescriptions[num],
            "educationalLevel": rangeStart <= 10 ? "Beginner" : rangeStart <= 50 ? "Intermediate" : "Advanced",
            "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
            "teaches": `${num} çarpım tablosu, ${specialProp.toLowerCase()}, çarpmanın temel kavramları`,
            "typicalAgeRange": rangeStart <= 10 ? "6-8" : rangeStart <= 50 ? "7-10" : "9-12",
            "inLanguage": "tr-TR",
            "educationalUse": ["practice", "self-study"],
            "audience": {
              "@type": "EducationalAudience",
              "educationalRole": ["student"]
            },
            "isPartOf": {
              "@id": `${baseUrl}/tr/carpim-tablosu/${range}#learningresource`
            }
          }
        ]
      }

      return (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
          <NumberPage number={num} rangeStart={rangeStart} rangeEnd={rangeEnd} />
        </>
      )
    }
    
    // GUIDE PAGE
    if (slugType === 'guide') {
      const Component = guideComponents[slug]
      if (!Component) notFound()
      
      return <Component />
    }
  }

  // Spanish version (production-ready)
  if (locale === 'es') {
    const baseUrl = siteConfig.es.domain
    
    // RANGE PAGE
    if (slugType === 'range') {
      const meta = rangeMetadataEs[slug]
      if (!meta) notFound()
      
      const [start, end] = slug.split('-').map(Number)
      if (!start || !end || start > end) notFound()
      
      const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": `${baseUrl}/es/tablas-de-multiplicar/${slug}#webpage`,
            "url": `${baseUrl}/es/tablas-de-multiplicar/${slug}`,
            "name": `Tablas de Multiplicar del ${slug} - ${meta.level === 'beginner' ? 'Nivel Principiante' : meta.level === 'intermediate' ? 'Nivel Intermedio' : 'Nivel Avanzado'}`,
            "description": meta.description,
            "isPartOf": {
              "@id": `${baseUrl}/#website`
            },
            "about": {
              "@id": `${baseUrl}/es/tablas-de-multiplicar/${slug}#learningresource`
            },
            "inLanguage": "es-ES"
          },
          {
            "@type": "LearningResource",
            "@id": `${baseUrl}/es/tablas-de-multiplicar/${slug}#learningresource`,
            "name": `Recurso de Aprendizaje Tablas de Multiplicar del ${slug}`,
            "description": meta.description,
            "educationalLevel": meta.level === 'beginner' ? 'Beginner' : meta.level === 'intermediate' ? 'Intermediate' : 'Advanced',
            "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
            "teaches": `Habilidades para comprender y aplicar tablas de multiplicar del ${start}, ${start + 1}, ... ${end}`,
            "typicalAgeRange": meta.level === 'beginner' ? '6-8' : meta.level === 'intermediate' ? '7-10' : '9-12',
            "inLanguage": "es-ES",
            "educationalUse": ["practice", "self-study", "homework"],
            "audience": {
              "@type": "EducationalAudience",
              "educationalRole": ["student"]
            },
            "hasPart": Array.from({ length: end - start + 1 }, (_, i) => ({
              "@type": "LearningResource",
              "name": `Tabla de Multiplicar del ${start + i}`,
              "url": `${baseUrl}/es/tablas-de-multiplicar/${start + i}`
            }))
          }
        ]
      }

      const allRanges = getAllRanges()
      const currentIndex = allRanges.indexOf(slug)
      const nextRange = currentIndex < allRanges.length - 1 ? allRanges[currentIndex + 1] : undefined
      const prevRange = currentIndex > 0 ? allRanges[currentIndex - 1] : undefined

      return (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
          <RangePageEs
            rangeStart={start}
            rangeEnd={end}
            nextRangeUrl={nextRange ? `/es/tablas-de-multiplicar/${nextRange}` : undefined}
            prevRangeUrl={prevRange ? `/es/tablas-de-multiplicar/${prevRange}` : undefined}
            difficultyLevel={meta.level}
            difficultyColor={meta.color}
          />
        </>
      )
    }
    
    // NUMBER PAGE
    if (slugType === 'number') {
      const num = parseInt(slug, 10)
      if (isNaN(num) || num < 1 || num > 100) notFound()
      
      const range = getRangeFromNumber(num)
      const [rangeStart, rangeEnd] = range.split('-').map(Number)
      const specialProp = numberSpecialPropertiesEs[num] || `Multiplicación con ${num}`

      const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": `${baseUrl}/es/tablas-de-multiplicar/${num}#webpage`,
            "url": `${baseUrl}/es/tablas-de-multiplicar/${num}`,
            "name": `Tabla de Multiplicar del ${num} - ${specialProp}`,
            "description": numberDescriptionsEs[num],
            "isPartOf": {
              "@id": `${baseUrl}/#website`
            },
            "about": {
              "@id": `${baseUrl}/es/tablas-de-multiplicar/${num}#learningresource`
            },
            "breadcrumb": {
              "@id": `${baseUrl}/es/tablas-de-multiplicar/${num}#breadcrumb`
            },
            "inLanguage": "es-ES"
          },
          {
            "@type": "BreadcrumbList",
            "@id": `${baseUrl}/es/tablas-de-multiplicar/${num}#breadcrumb`,
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@id": `${baseUrl}/es/tablas-de-multiplicar`,
                  "name": "Inicio"
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@id": `${baseUrl}/es/tablas-de-multiplicar/${range}`,
                  "name": `Tablas de Multiplicar del ${range}`
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@id": `${baseUrl}/es/tablas-de-multiplicar/${num}`,
                  "name": `Tabla de Multiplicar del ${num}`
                }
              }
            ]
          },
          {
            "@type": "LearningResource",
            "@id": `${baseUrl}/es/tablas-de-multiplicar/${num}#learningresource`,
            "name": `Recurso de Aprendizaje Tabla de Multiplicar del ${num}`,
            "description": numberDescriptionsEs[num],
            "educationalLevel": rangeStart <= 10 ? "Beginner" : rangeStart <= 50 ? "Intermediate" : "Advanced",
            "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
            "teaches": `Tabla de multiplicar del ${num}, ${specialProp.toLowerCase()}, conceptos básicos de multiplicación`,
            "typicalAgeRange": rangeStart <= 10 ? "6-8" : rangeStart <= 50 ? "7-10" : "9-12",
            "inLanguage": "es-ES",
            "educationalUse": ["practice", "self-study"],
            "audience": {
              "@type": "EducationalAudience",
              "educationalRole": ["student"]
            },
            "isPartOf": {
              "@id": `${baseUrl}/es/tablas-de-multiplicar/${range}#learningresource`
            }
          }
        ]
      }

      return (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
          <NumberPageEs number={num} rangeStart={rangeStart} rangeEnd={rangeEnd} />
        </>
      )
    }
    
    // GUIDE PAGE
    if (slugType === 'guide') {
      const Component = guideComponents[slug]
      if (!Component) notFound()
      
      return <Component />
    }
  }

  // German version
  if (locale === 'de') {
    const baseUrl = getAbsoluteUrl(locale)
    
    // RANGE PAGE
    if (slugType === 'range') {
      const meta = rangeMetadataDe[slug]
      if (!meta) notFound()
      
      const [start, end] = slug.split('-').map(Number)
      if (isNaN(start) || isNaN(end)) notFound()

      const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": `${baseUrl}/de/einmaleins/${slug}#webpage`,
            "url": `${baseUrl}/de/einmaleins/${slug}`,
            "name": meta.title,
            "description": meta.description,
            "isPartOf": {
              "@id": `${baseUrl}/#website`
            },
            "about": {
              "@id": `${baseUrl}/de/einmaleins/${slug}#learningresource`
            },
            "inLanguage": "de-DE"
          },
          {
            "@type": "LearningResource",
            "@id": `${baseUrl}/de/einmaleins/${slug}#learningresource`,
            "name": `Lernressource Einmaleins-Tabellen ${slug}`,
            "description": meta.description,
            "educationalLevel": meta.level === 'beginner' ? 'Beginner' : meta.level === 'intermediate' ? 'Intermediate' : 'Advanced',
            "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
            "teaches": `Fähigkeiten zum Verstehen und Anwenden der Einmaleins-Tabellen ${start}, ${start + 1}, ... ${end}`,
            "typicalAgeRange": meta.level === 'beginner' ? '6-8' : meta.level === 'intermediate' ? '7-10' : '9-12',
            "inLanguage": "de-DE",
            "educationalUse": ["practice", "self-study", "homework"],
            "audience": {
              "@type": "EducationalAudience",
              "educationalRole": ["student"]
            },
            "hasPart": Array.from({ length: end - start + 1 }, (_, i) => ({
              "@type": "LearningResource",
              "name": `${start + i}er-Einmaleins`,
              "url": `${baseUrl}/de/einmaleins/${start + i}`
            }))
          }
        ]
      }

      const allRanges = getAllRanges()
      const currentIndex = allRanges.indexOf(slug)
      const nextRange = currentIndex < allRanges.length - 1 ? allRanges[currentIndex + 1] : undefined
      const prevRange = currentIndex > 0 ? allRanges[currentIndex - 1] : undefined

      return (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
          <RangePageDe
            rangeStart={start}
            rangeEnd={end}
            nextRangeUrl={nextRange ? `/de/einmaleins/${nextRange}` : undefined}
            prevRangeUrl={prevRange ? `/de/einmaleins/${prevRange}` : undefined}
            difficultyLevel={meta.level}
            difficultyColor={meta.color}
          />
        </>
      )
    }
    
    // NUMBER PAGE
    if (slugType === 'number') {
      const num = parseInt(slug, 10)
      if (isNaN(num) || num < 1 || num > 100) notFound()
      
      const range = getRangeFromNumber(num)
      const [rangeStart, rangeEnd] = range.split('-').map(Number)
      const specialProp = numberSpecialPropertiesDe[num] || `Multiplikation mit ${num}`

      const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": `${baseUrl}/de/einmaleins/${num}#webpage`,
            "url": `${baseUrl}/de/einmaleins/${num}`,
            "name": `${num}er-Einmaleins - ${specialProp}`,
            "description": numberDescriptionsDe[num],
            "isPartOf": {
              "@id": `${baseUrl}/#website`
            },
            "about": {
              "@id": `${baseUrl}/de/einmaleins/${num}#learningresource`
            },
            "breadcrumb": {
              "@id": `${baseUrl}/de/einmaleins/${num}#breadcrumb`
            },
            "inLanguage": "de-DE"
          },
          {
            "@type": "BreadcrumbList",
            "@id": `${baseUrl}/de/einmaleins/${num}#breadcrumb`,
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@id": `${baseUrl}/`,
                  "name": "Startseite"
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@id": `${baseUrl}/de/einmaleins/${range}`,
                  "name": `Einmaleins ${range}`
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@id": `${baseUrl}/de/einmaleins/${num}`,
                  "name": `${num}er-Einmaleins`
                }
              }
            ]
          },
          {
            "@type": "LearningResource",
            "@id": `${baseUrl}/de/einmaleins/${num}#learningresource`,
            "name": `Lernressource ${num}er-Einmaleins`,
            "description": numberDescriptionsDe[num],
            "educationalLevel": rangeStart <= 10 ? "Beginner" : rangeStart <= 50 ? "Intermediate" : "Advanced",
            "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
            "teaches": `${num}er-Einmaleins, ${specialProp.toLowerCase()}, grundlegende Multiplikationskonzepte`,
            "typicalAgeRange": rangeStart <= 10 ? "6-8" : rangeStart <= 50 ? "7-10" : "9-12",
            "inLanguage": "de-DE",
            "educationalUse": ["practice", "self-study"],
            "audience": {
              "@type": "EducationalAudience",
              "educationalRole": ["student"]
            },
            "isPartOf": {
              "@id": `${baseUrl}/de/einmaleins/${range}#learningresource`
            }
          }
        ]
      }

      return (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
          <NumberPageDe number={num} rangeStart={rangeStart} rangeEnd={rangeEnd} />
        </>
      )
    }
    
    // GUIDE PAGE
    if (slugType === 'guide') {
      const Component = guideComponents[slug]
      if (!Component) notFound()
      
      return <Component />
    }
  }

  // Czech version
  if (locale === 'cs') {
    const baseUrl = getAbsoluteUrl(locale)
    
    // RANGE PAGE
    if (slugType === 'range') {
      const meta = rangeMetadataCs[slug]
      if (!meta) notFound()
      
      const [start, end] = slug.split('-').map(Number)
      if (isNaN(start) || isNaN(end)) notFound()

      const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": `${baseUrl}/cs/nasobilka/${slug}#webpage`,
            "url": `${baseUrl}/cs/nasobilka/${slug}`,
            "name": meta.title,
            "description": meta.description,
            "isPartOf": {
              "@id": `${baseUrl}/#website`
            },
            "about": {
              "@id": `${baseUrl}/cs/nasobilka/${slug}#learningresource`
            },
            "inLanguage": "cs-CZ"
          },
          {
            "@type": "LearningResource",
            "@id": `${baseUrl}/cs/nasobilka/${slug}#learningresource`,
            "name": `Výuková Pomůcka Násobilka ${slug}`,
            "description": meta.description,
            "educationalLevel": meta.level === 'beginner' ? 'Beginner' : meta.level === 'intermediate' ? 'Intermediate' : 'Advanced',
            "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
            "teaches": `Dovednosti pro pochopení a použití násobilky ${start}, ${start + 1}, ... ${end}`,
            "typicalAgeRange": meta.level === 'beginner' ? '6-8' : meta.level === 'intermediate' ? '7-10' : '9-12',
            "inLanguage": "cs-CZ",
            "educationalUse": ["practice", "self-study", "homework"],
            "audience": {
              "@type": "EducationalAudience",
              "educationalRole": ["student"]
            },
            "hasPart": Array.from({ length: end - start + 1 }, (_, i) => ({
              "@type": "LearningResource",
              "name": `Násobilka ${start + i}`,
              "url": `${baseUrl}/cs/nasobilka/${start + i}`
            }))
          }
        ]
      }

      const allRanges = getAllRanges()
      const currentIndex = allRanges.indexOf(slug)
      const nextRange = currentIndex < allRanges.length - 1 ? allRanges[currentIndex + 1] : undefined
      const prevRange = currentIndex > 0 ? allRanges[currentIndex - 1] : undefined

      return (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
          <RangePageCs
            rangeStart={start}
            rangeEnd={end}
            nextRangeUrl={nextRange ? `/cs/nasobilka/${nextRange}` : undefined}
            prevRangeUrl={prevRange ? `/cs/nasobilka/${prevRange}` : undefined}
            difficultyLevel={meta.level}
            difficultyColor={meta.color}
          />
        </>
      )
    }
    
    // NUMBER PAGE
    if (slugType === 'number') {
      const num = parseInt(slug, 10)
      if (isNaN(num) || num < 1 || num > 100) notFound()
      
      const range = getRangeFromNumber(num)
      const [rangeStart, rangeEnd] = range.split('-').map(Number)
      const specialProp = numberSpecialPropertiesCs[num] || `Násobení s ${num}`

      const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": `${baseUrl}/cs/nasobilka/${num}#webpage`,
            "url": `${baseUrl}/cs/nasobilka/${num}`,
            "name": `Násobilka ${num} - ${specialProp}`,
            "description": numberDescriptionsCs[num],
            "isPartOf": {
              "@id": `${baseUrl}/#website`
            },
            "about": {
              "@id": `${baseUrl}/cs/nasobilka/${num}#learningresource`
            },
            "breadcrumb": {
              "@id": `${baseUrl}/cs/nasobilka/${num}#breadcrumb`
            },
            "inLanguage": "cs-CZ"
          },
          {
            "@type": "BreadcrumbList",
            "@id": `${baseUrl}/cs/nasobilka/${num}#breadcrumb`,
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@id": `${baseUrl}/`,
                  "name": "Domů"
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@id": `${baseUrl}/cs/nasobilka/${range}`,
                  "name": `Násobilka ${range}`
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@id": `${baseUrl}/cs/nasobilka/${num}`,
                  "name": `Násobilka ${num}`
                }
              }
            ]
          },
          {
            "@type": "LearningResource",
            "@id": `${baseUrl}/cs/nasobilka/${num}#learningresource`,
            "name": `Výuková Pomůcka Násobilka ${num}`,
            "description": numberDescriptionsCs[num],
            "educationalLevel": rangeStart <= 10 ? "Beginner" : rangeStart <= 50 ? "Intermediate" : "Advanced",
            "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
            "teaches": `Násobilka ${num}, ${specialProp.toLowerCase()}, základní koncepty násobení`,
            "typicalAgeRange": rangeStart <= 10 ? "6-8" : rangeStart <= 50 ? "7-10" : "9-12",
            "inLanguage": "cs-CZ",
            "educationalUse": ["practice", "self-study"],
            "audience": {
              "@type": "EducationalAudience",
              "educationalRole": ["student"]
            },
            "isPartOf": {
              "@id": `${baseUrl}/cs/nasobilka/${range}#learningresource`
            }
          }
        ]
      }

      return (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
          <NumberPageCs number={num} rangeStart={rangeStart} rangeEnd={rangeEnd} />
        </>
      )
    }
    
    // GUIDE PAGE
    if (slugType === 'guide') {
      const Component = guideComponents[slug]
      if (!Component) notFound()
      
      return <Component />
    }
  }

  // Ukrainian version
  if (locale === 'uk') {
    const baseUrl = getAbsoluteUrl(locale)
    
    // RANGE PAGE
    if (slugType === 'range') {
      const meta = rangeMetadataUk[slug]
      if (!meta) notFound()
      
      const [start, end] = slug.split('-').map(Number)
      if (isNaN(start) || isNaN(end)) notFound()

      const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": `${baseUrl}/uk/tablycya-mnozhennya/${slug}#webpage`,
            "url": `${baseUrl}/uk/tablycya-mnozhennya/${slug}`,
            "name": meta.title,
            "description": meta.description,
            "isPartOf": {
              "@id": `${baseUrl}/#website`
            },
            "about": {
              "@id": `${baseUrl}/uk/tablycya-mnozhennya/${slug}#learningresource`
            },
            "inLanguage": "uk-UA"
          },
          {
            "@type": "LearningResource",
            "@id": `${baseUrl}/uk/tablycya-mnozhennya/${slug}#learningresource`,
            "name": `Навчальний Ресурс Таблиця Множення ${slug}`,
            "description": meta.description,
            "educationalLevel": meta.level === 'beginner' ? 'Beginner' : meta.level === 'intermediate' ? 'Intermediate' : 'Advanced',
            "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
            "teaches": `Навички розуміння та використання таблиці множення ${start}, ${start + 1}, ... ${end}`,
            "typicalAgeRange": meta.level === 'beginner' ? '6-8' : meta.level === 'intermediate' ? '7-10' : '9-12',
            "inLanguage": "uk-UA",
            "educationalUse": ["practice", "self-study", "homework"],
            "audience": {
              "@type": "EducationalAudience",
              "educationalRole": ["student"]
            },
            "hasPart": Array.from({ length: end - start + 1 }, (_, i) => ({
              "@type": "LearningResource",
              "name": `Таблиця Множення ${start + i}`,
              "url": `${baseUrl}/uk/tablycya-mnozhennya/${start + i}`
            }))
          }
        ]
      }

      const allRanges = getAllRanges()
      const currentIndex = allRanges.indexOf(slug)
      const nextRange = currentIndex < allRanges.length - 1 ? allRanges[currentIndex + 1] : undefined
      const prevRange = currentIndex > 0 ? allRanges[currentIndex - 1] : undefined

      return (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
          <RangePageUk
            rangeStart={start}
            rangeEnd={end}
            nextRangeUrl={nextRange ? `/uk/tablycya-mnozhennya/${nextRange}` : undefined}
            prevRangeUrl={prevRange ? `/uk/tablycya-mnozhennya/${prevRange}` : undefined}
            difficultyLevel={meta.level}
            difficultyColor={meta.color}
          />
        </>
      )
    }
    
    // NUMBER PAGE
    if (slugType === 'number') {
      const num = parseInt(slug, 10)
      if (isNaN(num) || num < 1 || num > 100) notFound()
      
      const range = getRangeFromNumber(num)
      const [rangeStart, rangeEnd] = range.split('-').map(Number)
      const specialProp = numberSpecialPropertiesUk[num] || `Множення з ${num}`

      const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": `${baseUrl}/uk/tablycya-mnozhennya/${num}#webpage`,
            "url": `${baseUrl}/uk/tablycya-mnozhennya/${num}`,
            "name": `Таблиця Множення ${num} - ${specialProp}`,
            "description": numberDescriptionsUk[num],
            "isPartOf": {
              "@id": `${baseUrl}/#website`
            },
            "about": {
              "@id": `${baseUrl}/uk/tablycya-mnozhennya/${num}#learningresource`
            },
            "breadcrumb": {
              "@id": `${baseUrl}/uk/tablycya-mnozhennya/${num}#breadcrumb`
            },
            "inLanguage": "uk-UA"
          },
          {
            "@type": "BreadcrumbList",
            "@id": `${baseUrl}/uk/tablycya-mnozhennya/${num}#breadcrumb`,
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@id": `${baseUrl}/`,
                  "name": "Головна"
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@id": `${baseUrl}/uk/tablycya-mnozhennya/${range}`,
                  "name": `Таблиця Множення ${range}`
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@id": `${baseUrl}/uk/tablycya-mnozhennya/${num}`,
                  "name": `Таблиця Множення ${num}`
                }
              }
            ]
          },
          {
            "@type": "LearningResource",
            "@id": `${baseUrl}/uk/tablycya-mnozhennya/${num}#learningresource`,
            "name": `Навчальний Ресурс Таблиця Множення ${num}`,
            "description": numberDescriptionsUk[num],
            "educationalLevel": rangeStart <= 10 ? "Beginner" : rangeStart <= 50 ? "Intermediate" : "Advanced",
            "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
            "teaches": `Таблиця множення ${num}, ${specialProp.toLowerCase()}, основні концепції множення`,
            "typicalAgeRange": rangeStart <= 10 ? "6-8" : rangeStart <= 50 ? "7-10" : "9-12",
            "inLanguage": "uk-UA",
            "educationalUse": ["practice", "self-study"],
            "audience": {
              "@type": "EducationalAudience",
              "educationalRole": ["student"]
            },
            "isPartOf": {
              "@id": `${baseUrl}/uk/tablycya-mnozhennya/${range}#learningresource`
            }
          }
        ]
      }

      return (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
          <NumberPageUk number={num} rangeStart={rangeStart} rangeEnd={rangeEnd} />
        </>
      )
    }
    
    // GUIDE PAGE
    if (slugType === 'guide') {
      const Component = guideComponents[slug]
      if (!Component) notFound()
      
      return <Component />
    }
  }

  // Finnish version
  if (locale === 'fi') {
    const baseUrl = getAbsoluteUrl(locale)
    
    // RANGE PAGE
    if (slugType === 'range') {
      const meta = rangeMetadataFi[slug]
      if (!meta) notFound()
      
      const [start, end] = slug.split('-').map(Number)
      if (isNaN(start) || isNaN(end)) notFound()

      const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": `${baseUrl}/fi/kertotaulut/${slug}#webpage`,
            "url": `${baseUrl}/fi/kertotaulut/${slug}`,
            "name": meta.title,
            "description": meta.description,
            "isPartOf": {
              "@id": `${baseUrl}/#website`
            },
            "about": {
              "@id": `${baseUrl}/fi/kertotaulut/${slug}#learningresource`
            },
            "inLanguage": "fi-FI"
          },
          {
            "@type": "LearningResource",
            "@id": `${baseUrl}/fi/kertotaulut/${slug}#learningresource`,
            "name": `Oppimisresurssi Kertotaulu ${slug}`,
            "description": meta.description,
            "educationalLevel": meta.level === 'beginner' ? 'Beginner' : meta.level === 'intermediate' ? 'Intermediate' : 'Advanced',
            "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
            "teaches": `Taidot ymmärtää ja käyttää kertotaulua ${start}, ${start + 1}, ... ${end}`,
            "typicalAgeRange": meta.level === 'beginner' ? '6-8' : meta.level === 'intermediate' ? '7-10' : '9-12',
            "inLanguage": "fi-FI",
            "educationalUse": ["practice", "self-study", "homework"],
            "audience": {
              "@type": "EducationalAudience",
              "educationalRole": ["student"]
            },
            "hasPart": Array.from({ length: end - start + 1 }, (_, i) => ({
              "@type": "LearningResource",
              "name": `Kertotaulu ${start + i}`,
              "url": `${baseUrl}/fi/kertotaulut/${start + i}`
            }))
          }
        ]
      }

      const allRanges = getAllRanges()
      const currentIndex = allRanges.indexOf(slug)
      const nextRange = currentIndex < allRanges.length - 1 ? allRanges[currentIndex + 1] : undefined
      const prevRange = currentIndex > 0 ? allRanges[currentIndex - 1] : undefined

      return (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
          <RangePageFi
            rangeStart={start}
            rangeEnd={end}
            nextRangeUrl={nextRange ? `/fi/kertotaulut/${nextRange}` : undefined}
            prevRangeUrl={prevRange ? `/fi/kertotaulut/${prevRange}` : undefined}
            difficultyLevel={meta.level}
            difficultyColor={meta.color}
          />
        </>
      )
    }
    
    // NUMBER PAGE
    if (slugType === 'number') {
      const num = parseInt(slug, 10)
      if (isNaN(num) || num < 1 || num > 100) notFound()
      
      const range = getRangeFromNumber(num)
      const [rangeStart, rangeEnd] = range.split('-').map(Number)
      const specialProp = numberSpecialPropertiesFi[num] || `Kertominen ${num}:llä`

      const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": `${baseUrl}/fi/kertotaulut/${num}#webpage`,
            "url": `${baseUrl}/fi/kertotaulut/${num}`,
            "name": `Kertotaulu ${num} - ${specialProp}`,
            "description": numberDescriptionsFi[num],
            "isPartOf": {
              "@id": `${baseUrl}/#website`
            },
            "about": {
              "@id": `${baseUrl}/fi/kertotaulut/${num}#learningresource`
            },
            "breadcrumb": {
              "@id": `${baseUrl}/fi/kertotaulut/${num}#breadcrumb`
            },
            "inLanguage": "fi-FI"
          },
          {
            "@type": "BreadcrumbList",
            "@id": `${baseUrl}/fi/kertotaulut/${num}#breadcrumb`,
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@id": `${baseUrl}/`,
                  "name": "Etusivu"
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@id": `${baseUrl}/fi/kertotaulut/${range}`,
                  "name": `Kertotaulu ${range}`
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@id": `${baseUrl}/fi/kertotaulut/${num}`,
                  "name": `Kertotaulu ${num}`
                }
              }
            ]
          },
          {
            "@type": "LearningResource",
            "@id": `${baseUrl}/fi/kertotaulut/${num}#learningresource`,
            "name": `Oppimisresurssi Kertotaulu ${num}`,
            "description": numberDescriptionsFi[num],
            "educationalLevel": rangeStart <= 10 ? "Beginner" : rangeStart <= 50 ? "Intermediate" : "Advanced",
            "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
            "teaches": `Kertotaulu ${num}, ${specialProp.toLowerCase()}, kertolaskun peruskäsitteet`,
            "typicalAgeRange": rangeStart <= 10 ? "6-8" : rangeStart <= 50 ? "7-10" : "9-12",
            "inLanguage": "fi-FI",
            "educationalUse": ["practice", "self-study"],
            "audience": {
              "@type": "EducationalAudience",
              "educationalRole": ["student"]
            },
            "isPartOf": {
              "@id": `${baseUrl}/fi/kertotaulut/${range}#learningresource`
            }
          }
        ]
      }

      return (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
          <NumberPageFi number={num} rangeStart={rangeStart} rangeEnd={rangeEnd} />
        </>
      )
    }
    
    // GUIDE PAGE
    if (slugType === 'guide') {
      const Component = guideComponents[slug]
      if (!Component) notFound()
      
      return <Component />
    }
  }

  // French version
  if (locale === 'fr') {
    const baseUrl = getAbsoluteUrl(locale)
    
    // RANGE PAGE
    if (slugType === 'range') {
      const meta = rangeMetadataFr[slug]
      if (!meta) notFound()
      
      const [start, end] = slug.split('-').map(Number)
      if (isNaN(start) || isNaN(end)) notFound()

      const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": `${baseUrl}/fr/table-de-multiplication/${slug}#webpage`,
            "url": `${baseUrl}/fr/table-de-multiplication/${slug}`,
            "name": meta.title,
            "description": meta.description,
            "isPartOf": {
              "@id": `${baseUrl}/#website`
            },
            "about": {
              "@id": `${baseUrl}/fr/table-de-multiplication/${slug}#learningresource`
            },
            "inLanguage": "fr-FR"
          },
          {
            "@type": "LearningResource",
            "@id": `${baseUrl}/fr/table-de-multiplication/${slug}#learningresource`,
            "name": `Ressource d'Apprentissage Table de Multiplication ${slug}`,
            "description": meta.description,
            "educationalLevel": meta.level === 'beginner' ? 'Débutant' : meta.level === 'intermediate' ? 'Intermédiaire' : 'Avancé',
            "learningResourceType": ["Ressource Interactive", "Matériel de Pratique", "Jeu Éducatif"],
            "teaches": `Compétences pour comprendre et utiliser la table de multiplication ${start}, ${start + 1}, ... ${end}`,
            "typicalAgeRange": meta.level === 'beginner' ? '6-8' : meta.level === 'intermediate' ? '7-10' : '9-12',
            "inLanguage": "fr-FR",
            "educationalUse": ["pratique", "auto-apprentissage", "devoirs"],
            "audience": {
              "@type": "EducationalAudience",
              "educationalRole": ["student"]
            },
            "hasPart": Array.from({ length: end - start + 1 }, (_, i) => ({
              "@type": "LearningResource",
              "name": `Table de Multiplication ${start + i}`,
              "url": `${baseUrl}/fr/table-de-multiplication/${start + i}`
            }))
          }
        ]
      }

      const allRanges = getAllRanges()
      const currentIndex = allRanges.indexOf(slug)
      const nextRange = currentIndex < allRanges.length - 1 ? allRanges[currentIndex + 1] : undefined
      const prevRange = currentIndex > 0 ? allRanges[currentIndex - 1] : undefined

      return (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
          <RangePageFr
            rangeStart={start}
            rangeEnd={end}
            nextRangeUrl={nextRange ? `/fr/table-de-multiplication/${nextRange}` : undefined}
            prevRangeUrl={prevRange ? `/fr/table-de-multiplication/${prevRange}` : undefined}
            difficultyLevel={meta.level}
            difficultyColor={meta.color}
          />
        </>
      )
    }
    
    // NUMBER PAGE
    if (slugType === 'number') {
      const num = parseInt(slug, 10)
      if (isNaN(num) || num < 1 || num > 100) notFound()
      
      const range = getRangeFromNumber(num)
      const [rangeStart, rangeEnd] = range.split('-').map(Number)
      const specialProp = numberSpecialPropertiesFr[num] || `Multiplication par ${num}`

      const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": `${baseUrl}/fr/table-de-multiplication/${num}#webpage`,
            "url": `${baseUrl}/fr/table-de-multiplication/${num}`,
            "name": `Table de Multiplication ${num} - ${specialProp}`,
            "description": numberDescriptionsFr[num],
            "isPartOf": {
              "@id": `${baseUrl}/#website`
            },
            "about": {
              "@id": `${baseUrl}/fr/table-de-multiplication/${num}#learningresource`
            },
            "breadcrumb": {
              "@id": `${baseUrl}/fr/table-de-multiplication/${num}#breadcrumb`
            },
            "inLanguage": "fr-FR"
          },
          {
            "@type": "BreadcrumbList",
            "@id": `${baseUrl}/fr/table-de-multiplication/${num}#breadcrumb`,
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@id": `${baseUrl}/`,
                  "name": "Accueil"
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@id": `${baseUrl}/fr/table-de-multiplication/${range}`,
                  "name": `Table de Multiplication ${range}`
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@id": `${baseUrl}/fr/table-de-multiplication/${num}`,
                  "name": `Table de Multiplication ${num}`
                }
              }
            ]
          },
          {
            "@type": "LearningResource",
            "@id": `${baseUrl}/fr/table-de-multiplication/${num}#learningresource`,
            "name": `Ressource d'Apprentissage Table de Multiplication ${num}`,
            "description": numberDescriptionsFr[num],
            "educationalLevel": rangeStart <= 10 ? "Débutant" : rangeStart <= 50 ? "Intermédiaire" : "Avancé",
            "learningResourceType": ["Ressource Interactive", "Matériel de Pratique", "Jeu Éducatif"],
            "teaches": `Table de multiplication ${num}, ${specialProp.toLowerCase()}, concepts de base de la multiplication`,
            "typicalAgeRange": rangeStart <= 10 ? "6-8" : rangeStart <= 50 ? "7-10" : "9-12",
            "inLanguage": "fr-FR",
            "educationalUse": ["pratique", "auto-apprentissage"],
            "audience": {
              "@type": "EducationalAudience",
              "educationalRole": ["student"]
            },
            "isPartOf": {
              "@id": `${baseUrl}/fr/table-de-multiplication/${range}#learningresource`
            }
          }
        ]
      }

      return (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
          <NumberPageFr number={num} rangeStart={rangeStart} rangeEnd={rangeEnd} />
        </>
      )
    }
    
    // GUIDE PAGE
    if (slugType === 'guide') {
      const Component = guideComponents[slug]
      if (!Component) notFound()
      
      return <Component />
    }
  }

  // Swedish version
  if (locale === 'sv') {
    const baseUrl = getAbsoluteUrl(locale)
    
    // RANGE PAGE
    if (slugType === 'range') {
      const meta = rangeMetadataSv[slug]
      if (!meta) notFound()
      
      const [start, end] = slug.split('-').map(Number)
      if (isNaN(start) || isNaN(end)) notFound()

      const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": `${baseUrl}/sv/multiplikationstabeller/${slug}#webpage`,
            "url": `${baseUrl}/sv/multiplikationstabeller/${slug}`,
            "name": meta.title,
            "description": meta.description,
            "isPartOf": {
              "@id": `${baseUrl}/#website`
            },
            "about": {
              "@id": `${baseUrl}/sv/multiplikationstabeller/${slug}#learningresource`
            },
            "inLanguage": "sv-SE"
          },
          {
            "@type": "LearningResource",
            "@id": `${baseUrl}/sv/multiplikationstabeller/${slug}#learningresource`,
            "name": `Multiplikationstabeller ${slug} Läranderesurs`,
            "description": meta.description,
            "educationalLevel": meta.level === 'beginner' ? 'Nybörjare' : meta.level === 'intermediate' ? 'Mellanliggande' : 'Avancerad',
            "learningResourceType": ["Interaktiv Resurs", "Övningsmaterial", "Pedagogiskt Spel"],
            "teaches": `Färdigheter för att förstå och använda multiplikationstabeller ${start}, ${start + 1}, ... ${end}`,
            "typicalAgeRange": meta.level === 'beginner' ? '6-8' : meta.level === 'intermediate' ? '7-10' : '9-12',
            "inLanguage": "sv-SE",
            "educationalUse": ["övning", "självstudier", "läxor"],
            "audience": {
              "@type": "EducationalAudience",
              "educationalRole": ["student"]
            },
            "hasPart": Array.from({ length: end - start + 1 }, (_, i) => ({
              "@type": "LearningResource",
              "name": `Multiplikationstabell ${start + i}`,
              "url": `${baseUrl}/sv/multiplikationstabeller/${start + i}`
            }))
          }
        ]
      }

      const allRanges = getAllRanges()
      const currentIndex = allRanges.indexOf(slug)
      const nextRange = currentIndex < allRanges.length - 1 ? allRanges[currentIndex + 1] : undefined
      const prevRange = currentIndex > 0 ? allRanges[currentIndex - 1] : undefined

      return (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
          <RangePageSv
            rangeStart={start}
            rangeEnd={end}
            nextRangeUrl={nextRange ? `/sv/multiplikationstabeller/${nextRange}` : undefined}
            prevRangeUrl={prevRange ? `/sv/multiplikationstabeller/${prevRange}` : undefined}
            difficultyLevel={meta.level}
            difficultyColor={meta.color}
          />
        </>
      )
    }
    
    // NUMBER PAGE
    if (slugType === 'number') {
      const num = parseInt(slug, 10)
      if (isNaN(num) || num < 1 || num > 100) notFound()
      
      const range = getRangeFromNumber(num)
      const [rangeStart, rangeEnd] = range.split('-').map(Number)
      const specialProp = numberSpecialPropertiesSv[num] || `Multiplikation med ${num}`

      const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": `${baseUrl}/sv/multiplikationstabeller/${num}#webpage`,
            "url": `${baseUrl}/sv/multiplikationstabeller/${num}`,
            "name": `Multiplikationstabell ${num} - ${specialProp}`,
            "description": numberDescriptionsSv[num],
            "isPartOf": {
              "@id": `${baseUrl}/#website`
            },
            "about": {
              "@id": `${baseUrl}/sv/multiplikationstabeller/${num}#learningresource`
            },
            "breadcrumb": {
              "@id": `${baseUrl}/sv/multiplikationstabeller/${num}#breadcrumb`
            },
            "inLanguage": "sv-SE"
          },
          {
            "@type": "BreadcrumbList",
            "@id": `${baseUrl}/sv/multiplikationstabeller/${num}#breadcrumb`,
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@id": `${baseUrl}/`,
                  "name": "Hem"
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@id": `${baseUrl}/sv/multiplikationstabeller/${range}`,
                  "name": `Multiplikationstabeller ${range}`
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@id": `${baseUrl}/sv/multiplikationstabeller/${num}`,
                  "name": `Multiplikationstabell ${num}`
                }
              }
            ]
          },
          {
            "@type": "LearningResource",
            "@id": `${baseUrl}/sv/multiplikationstabeller/${num}#learningresource`,
            "name": `Multiplikationstabell ${num} Läranderesurs`,
            "description": numberDescriptionsSv[num],
            "educationalLevel": rangeStart <= 10 ? "Nybörjare" : rangeStart <= 50 ? "Mellanliggande" : "Avancerad",
            "learningResourceType": ["Interaktiv Resurs", "Övningsmaterial", "Pedagogiskt Spel"],
            "teaches": `Multiplikationstabell ${num}, ${specialProp.toLowerCase()}, grundläggande multiplikationskoncept`,
            "typicalAgeRange": rangeStart <= 10 ? "6-8" : rangeStart <= 50 ? "7-10" : "9-12",
            "inLanguage": "sv-SE",
            "educationalUse": ["övning", "självstudier"],
            "audience": {
              "@type": "EducationalAudience",
              "educationalRole": ["student"]
            },
            "isPartOf": {
              "@id": `${baseUrl}/sv/multiplikationstabeller/${range}#learningresource`
            }
          }
        ]
      }

      return (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
          <NumberPageSv number={num} rangeStart={rangeStart} rangeEnd={rangeEnd} />
        </>
      )
    }
    
    // GUIDE PAGE
    if (slugType === 'guide') {
      const Component = guideComponents[slug]
      if (!Component) notFound()
      
      return <Component />
    }
  }

  // English version
  if (locale === 'en') {
    if (slugType === 'range') {
      const [start, end] = slug.split('-').map(Number)
      const nextRange = getRangeFromNumber(end + 1)
      const prevRange = start > 1 ? getRangeFromNumber(start - 1) : undefined
      const meta = rangeMetadataEn[slug]
      
      return (
        <RangePageEn
          rangeStart={start}
          rangeEnd={end}
          nextRangeUrl={nextRange ? `/en/multiplication-tables/${nextRange}` : undefined}
          prevRangeUrl={prevRange ? `/en/multiplication-tables/${prevRange}` : undefined}
          difficultyLevel={meta?.level || 'beginner'}
          difficultyColor={meta?.color || 'from-blue-50 to-indigo-50'}
        />
      )
    }
    
    if (slugType === 'number') {
      const num = parseInt(slug, 10)
      const [rangeStart, rangeEnd] = getRangeFromNumber(num).split('-').map(Number)
      
      return (
        <NumberPageEn
          number={num}
          rangeStart={rangeStart}
          rangeEnd={rangeEnd}
        />
      )
    }
    
    if (slugType === 'guide') {
      if (slug === 'for-students') return <ForStudentsEn />
      if (slug === 'for-teachers') return <ForTeachersEn />
      if (slug === 'for-parents') return <ForParentsEn />
    }
  }

  // Portuguese version
  if (locale === 'pt') {
    const baseUrl = siteConfig.pt.domain
    
    // RANGE PAGE
    if (slugType === 'range') {
      const meta = rangeMetadataPt[slug]
      if (!meta) notFound()
      
      const [start, end] = slug.split('-').map(Number)
      if (isNaN(start) || isNaN(end)) notFound()

      const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": `${baseUrl}/pt/tabuada/${slug}#webpage`,
            "url": `${baseUrl}/pt/tabuada/${slug}`,
            "name": meta.title,
            "description": meta.description,
            "isPartOf": {
              "@id": `${baseUrl}/#website`
            },
            "about": {
              "@id": `${baseUrl}/pt/tabuada/${slug}#learningresource`
            },
            "inLanguage": "pt-BR"
          },
          {
            "@type": "LearningResource",
            "@id": `${baseUrl}/pt/tabuada/${slug}#learningresource`,
            "name": `Tabuada ${slug} Recurso de Aprendizagem`,
            "description": meta.description,
            "educationalLevel": meta.level === 'beginner' ? 'Iniciante' : meta.level === 'intermediate' ? 'Intermediário' : 'Avançado',
            "learningResourceType": ["Recurso Interativo", "Material de Prática", "Jogo Educacional"],
            "teaches": `Habilidades para entender e aplicar tabuadas ${start}, ${start + 1}, ... ${end}`,
            "typicalAgeRange": meta.level === 'beginner' ? '6-8' : meta.level === 'intermediate' ? '7-10' : '9-12',
            "inLanguage": "pt-BR",
            "educationalUse": ["prática", "auto-estudo", "lição de casa"],
            "audience": {
              "@type": "EducationalAudience",
              "educationalRole": ["student"]
            },
            "hasPart": Array.from({ length: end - start + 1 }, (_, i) => ({
              "@type": "LearningResource",
              "name": `Tabuada do ${start + i}`,
              "url": `${baseUrl}/pt/tabuada/${start + i}`
            }))
          }
        ]
      }

      const allRanges = getAllRanges()
      const currentIndex = allRanges.indexOf(slug)
      const nextRange = currentIndex < allRanges.length - 1 ? allRanges[currentIndex + 1] : undefined
      const prevRange = currentIndex > 0 ? allRanges[currentIndex - 1] : undefined

      return (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
          <RangePagePt
            rangeStart={start}
            rangeEnd={end}
            nextRangeUrl={nextRange ? `/pt/tabuada/${nextRange}` : undefined}
            prevRangeUrl={prevRange ? `/pt/tabuada/${prevRange}` : undefined}
            difficultyLevel={meta.level}
            difficultyColor={meta.color}
          />
        </>
      )
    }
    
    // NUMBER PAGE
    if (slugType === 'number') {
      const num = parseInt(slug, 10)
      if (isNaN(num) || num < 1 || num > 100) notFound()
      
      const range = getRangeFromNumber(num)
      const [rangeStart, rangeEnd] = range.split('-').map(Number)
      const specialProp = numberSpecialPropertiesPt[num] || `Multiplicação por ${num}`

      const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": `${baseUrl}/pt/tabuada/${num}#webpage`,
            "url": `${baseUrl}/pt/tabuada/${num}`,
            "name": `Tabuada do ${num} - ${specialProp}`,
            "description": numberDescriptionsPt[num],
            "isPartOf": {
              "@id": `${baseUrl}/#website`
            },
            "about": {
              "@id": `${baseUrl}/pt/tabuada/${num}#learningresource`
            },
            "breadcrumb": {
              "@id": `${baseUrl}/pt/tabuada/${num}#breadcrumb`
            },
            "inLanguage": "pt-BR"
          },
          {
            "@type": "BreadcrumbList",
            "@id": `${baseUrl}/pt/tabuada/${num}#breadcrumb`,
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@id": `${baseUrl}/`,
                  "name": "Início"
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@id": `${baseUrl}/pt/tabuada/${range}`,
                  "name": `Tabuada ${range}`
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@id": `${baseUrl}/pt/tabuada/${num}`,
                  "name": `Tabuada do ${num}`
                }
              }
            ]
          },
          {
            "@type": "LearningResource",
            "@id": `${baseUrl}/pt/tabuada/${num}#learningresource`,
            "name": `Tabuada do ${num} Recurso de Aprendizagem`,
            "description": numberDescriptionsPt[num],
            "educationalLevel": rangeStart <= 10 ? "Iniciante" : rangeStart <= 50 ? "Intermediário" : "Avançado",
            "learningResourceType": ["Recurso Interativo", "Material de Prática", "Jogo Educacional"],
            "teaches": `Tabuada do ${num}, ${specialProp.toLowerCase()}, conceitos básicos de multiplicação`,
            "typicalAgeRange": rangeStart <= 10 ? "6-8" : rangeStart <= 50 ? "7-10" : "9-12",
            "inLanguage": "pt-BR",
            "educationalUse": ["prática", "auto-estudo"],
            "audience": {
              "@type": "EducationalAudience",
              "educationalRole": ["student"]
            },
            "isPartOf": {
              "@id": `${baseUrl}/pt/tabuada/${range}#learningresource`
            }
          }
        ]
      }

      return (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
          <NumberPagePt number={num} rangeStart={rangeStart} rangeEnd={rangeEnd} />
        </>
      )
    }
    
    // GUIDE PAGE
    if (slugType === 'guide') {
      const Component = guideComponents[slug]
      if (!Component) notFound()
      
      return <Component />
    }
  }

  // Polish version
  if (locale === 'pl') {
    const baseUrl = getAbsoluteUrl(locale)
    
    // RANGE PAGE
    if (slugType === 'range') {
      const meta = rangeMetadataPl[slug]
      if (!meta) notFound()
      
      const [start, end] = slug.split('-').map(Number)
      if (isNaN(start) || isNaN(end)) notFound()

      const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": `${baseUrl}/pl/tabliczki-mnozenia/${slug}#webpage`,
            "url": `${baseUrl}/pl/tabliczki-mnozenia/${slug}`,
            "name": meta.title,
            "description": meta.description,
            "isPartOf": {
              "@id": `${baseUrl}/#website`
            },
            "about": {
              "@id": `${baseUrl}/pl/tabliczki-mnozenia/${slug}#learningresource`
            },
            "inLanguage": "pl-PL"
          },
          {
            "@type": "LearningResource",
            "@id": `${baseUrl}/pl/tabliczki-mnozenia/${slug}#learningresource`,
            "name": `Zasób Edukacyjny Tabliczki Mnożenia ${slug}`,
            "description": meta.description,
            "educationalLevel": meta.level === 'beginner' ? 'Początkujący' : meta.level === 'intermediate' ? 'Średniozaawansowany' : 'Zaawansowany',
            "learningResourceType": ["Zasób Interaktywny", "Materiały do Ćwiczeń", "Gra Edukacyjna"],
            "teaches": `Umiejętności rozumienia i stosowania tabliczek mnożenia ${start}, ${start + 1}, ... ${end}`,
            "typicalAgeRange": meta.level === 'beginner' ? '6-8' : meta.level === 'intermediate' ? '7-10' : '9-12',
            "inLanguage": "pl-PL",
            "educationalUse": ["ćwiczenia", "samodzielna nauka", "praca domowa"],
            "audience": {
              "@type": "EducationalAudience",
              "educationalRole": ["student"]
            },
            "hasPart": Array.from({ length: end - start + 1 }, (_, i) => ({
              "@type": "LearningResource",
              "name": `Tabliczka Mnożenia ${start + i}`,
              "url": `${baseUrl}/pl/tabliczki-mnozenia/${start + i}`
            }))
          }
        ]
      }

      const allRanges = getAllRanges()
      const currentIndex = allRanges.indexOf(slug)
      const nextRange = currentIndex < allRanges.length - 1 ? allRanges[currentIndex + 1] : undefined
      const prevRange = currentIndex > 0 ? allRanges[currentIndex - 1] : undefined

      return (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
          <RangePagePl
            rangeStart={start}
            rangeEnd={end}
            nextRangeUrl={nextRange ? `/pl/tabliczki-mnozenia/${nextRange}` : undefined}
            prevRangeUrl={prevRange ? `/pl/tabliczki-mnozenia/${prevRange}` : undefined}
            difficultyLevel={meta.level}
            difficultyColor={meta.color}
          />
        </>
      )
    }
    
    // NUMBER PAGE
    if (slugType === 'number') {
      const num = parseInt(slug, 10)
      if (isNaN(num) || num < 1 || num > 100) notFound()
      
      const range = getRangeFromNumber(num)
      const [rangeStart, rangeEnd] = range.split('-').map(Number)
      const specialProp = numberSpecialPropertiesPl[num] || `Mnożenie przez ${num}`

      const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": `${baseUrl}/pl/tabliczki-mnozenia/${num}#webpage`,
            "url": `${baseUrl}/pl/tabliczki-mnozenia/${num}`,
            "name": `Tabliczka Mnożenia ${num} - ${specialProp}`,
            "description": numberDescriptionsPl[num],
            "isPartOf": {
              "@id": `${baseUrl}/#website`
            },
            "about": {
              "@id": `${baseUrl}/pl/tabliczki-mnozenia/${num}#learningresource`
            },
            "breadcrumb": {
              "@id": `${baseUrl}/pl/tabliczki-mnozenia/${num}#breadcrumb`
            },
            "inLanguage": "pl-PL"
          },
          {
            "@type": "BreadcrumbList",
            "@id": `${baseUrl}/pl/tabliczki-mnozenia/${num}#breadcrumb`,
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@id": `${baseUrl}/`,
                  "name": "Strona Główna"
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@id": `${baseUrl}/pl/tabliczki-mnozenia/${range}`,
                  "name": `Tabliczka Mnożenia ${range}`
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@id": `${baseUrl}/pl/tabliczki-mnozenia/${num}`,
                  "name": `Tabliczka Mnożenia ${num}`
                }
              }
            ]
          },
          {
            "@type": "LearningResource",
            "@id": `${baseUrl}/pl/tabliczki-mnozenia/${num}#learningresource`,
            "name": `Zasób Edukacyjny Tabliczka Mnożenia ${num}`,
            "description": numberDescriptionsPl[num],
            "educationalLevel": rangeStart <= 10 ? "Początkujący" : rangeStart <= 50 ? "Średniozaawansowany" : "Zaawansowany",
            "learningResourceType": ["Zasób Interaktywny", "Materiały do Ćwiczeń", "Gra Edukacyjna"],
            "teaches": `Tabliczka mnożenia ${num}, ${specialProp.toLowerCase()}, podstawowe pojęcia mnożenia`,
            "typicalAgeRange": rangeStart <= 10 ? "6-8" : rangeStart <= 50 ? "7-10" : "9-12",
            "inLanguage": "pl-PL",
            "educationalUse": ["ćwiczenia", "samodzielna nauka"],
            "audience": {
              "@type": "EducationalAudience",
              "educationalRole": ["student"]
            },
            "isPartOf": {
              "@id": `${baseUrl}/pl/tabliczki-mnozenia/${range}#learningresource`
            }
          }
        ]
      }

      return (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
          <NumberPagePl number={num} rangeStart={rangeStart} rangeEnd={rangeEnd} />
        </>
      )
    }
    
    // GUIDE PAGE
    if (slugType === 'guide') {
      const Component = guideComponents[slug]
      if (!Component) notFound()
      
      return <Component />
    }
  }

  notFound()
}
