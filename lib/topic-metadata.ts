import { Locale } from './i18n-config'

// Topic-hub page SEO metadata (title/description/keywords/OG/Twitter), keyed by locale.
// Extracted verbatim from the previous inline generateMetadata branches in
// app/[lang]/[topic]/page.tsx.
export const topicMetadata: Record<Locale, {
  title: string
  description: string
  keywords: string
  ogTitle: string
  ogDescription: string
  twitterTitle: string
  twitterDescription: string
}> = {
  en: {
    title: 'Multiplication Tables 1-100',
    description: 'Learn multiplication tables from 1 to 100 for free. Interactive exercises, educational games and PDF worksheets - ideal math platform for children.',
    keywords: 'multiplication tables, times tables, math, learning, practice, education, pdf exercises',
    ogTitle: 'Multiplication Tables – Learn, Understand, and Practice',
    ogDescription: 'Learn multiplication tables step by step.',
    twitterTitle: 'Multiplication Tables – Learn, Understand, and Practice',
    twitterDescription: 'Learn multiplication tables step by step.',
  },
  tr: {
    title: 'Çarpım Tablosu 1-100',
    description: '1\'den 100\'e kadar çarpım tablolarını ücretsiz öğrenin. İnteraktif alıştırmalar, eğitici oyunlar ve PDF çalışma sayfalarıyla çocuklar için ideal matematik platformu.',
    keywords: 'çarpım tablosu, multiplication table, matematik, öğrenme, pratik, eğitim, pdf alıştırmaları',
    ogTitle: 'Çarpım Tablosu – Öğren, Anla ve Pratik Yap',
    ogDescription: 'Çarpım tablosunu adım adım öğrenin, anlayın ve pratik yapın.',
    twitterTitle: 'Çarpım Tablosu – Öğren, Anla ve Pratik Yap',
    twitterDescription: 'Çarpım tablosunu adım adım öğrenin, anlayın ve pratik yapın.',
  },
  es: {
    title: 'Tablas de Multiplicar 1-100',
    description: 'Aprende las tablas de multiplicar del 1 al 100 gratis. Ejercicios interactivos, juegos educativos y hojas de trabajo en PDF para niños.',
    keywords: 'tablas de multiplicar, tabla de multiplicar, matemáticas, aprendizaje, práctica, educación, ejercicios pdf',
    ogTitle: 'Tablas de Multiplicar – Aprende, Comprende y Practica',
    ogDescription: 'Aprende las tablas de multiplicar paso a paso.',
    twitterTitle: 'Tablas de Multiplicar – Aprende, Comprende y Practica',
    twitterDescription: 'Aprende las tablas de multiplicar paso a paso.',
  },
  de: {
    title: 'Einmaleins 1-100',
    description: 'Lerne das Einmaleins von 1 bis 100 kostenlos. Interaktive Übungen, Lernspiele und druckbare Arbeitsblätter für Kinder.',
    keywords: 'einmaleins, einmaleins-tabellen, multiplikation, mathematik, lernen, übung, bildung, pdf übungen',
    ogTitle: 'Einmaleins – Lernen, Verstehen und Üben',
    ogDescription: 'Lerne das Einmaleins Schritt für Schritt.',
    twitterTitle: 'Einmaleins – Lernen, Verstehen und Üben',
    twitterDescription: 'Lerne das Einmaleins Schritt für Schritt.',
  },
  cs: {
    title: 'Násobilka 1-100',
    description: 'Naučte se násobilku od 1 do 100 zdarma. Interaktivní cvičení, vzdělávací hry a PDF pracovní listy - ideální platforma matematiky pro děti.',
    keywords: 'násobilka, multiplication table, matematika, učení, cvičení, vzdělávání, pdf cvičení',
    ogTitle: 'Násobilka – Učit se, Rozumět a Cvičit',
    ogDescription: 'Naučte se násobilku krok za krokem.',
    twitterTitle: 'Násobilka – Učit se, Rozumět a Cvičit',
    twitterDescription: 'Naučte se násobilku krok za krokem.',
  },
  uk: {
    title: 'Таблиця множення 1-100',
    description: 'Вивчіть таблицю множення від 1 до 100 безкоштовно. Інтерактивні вправи, освітні ігри та PDF робочі аркуші - ідеальна математична платформа для дітей.',
    keywords: 'таблиця множення, multiplication table, математика, навчання, практика, освіта, pdf вправи',
    ogTitle: 'Таблиця множення – Вчитися, Розуміти та Практикувати',
    ogDescription: 'Навчіться таблиці множення крок за кроком.',
    twitterTitle: 'Таблиця множення – Вчитися, Розуміти та Практикувати',
    twitterDescription: 'Навчіться таблиці множення крок за кроком.',
  },
  fi: {
    title: 'Kertotaulut 1-100',
    description: 'Opi kertotaulut 1-100 ilmaiseksi. Interaktiiviset harjoitukset, opetuspelit ja PDF-työarkit lapsille.',
    keywords: 'kertotaulut, kertotaulu, matematiikka, oppiminen, harjoittelu, koulutus, pdf harjoitukset',
    ogTitle: 'Kertotaulut – Opi, Ymmärrä ja Harjoittele',
    ogDescription: 'Opi kertotaulut askel askeleelta.',
    twitterTitle: 'Kertotaulut – Opi, Ymmärrä ja Harjoittele',
    twitterDescription: 'Opi kertotaulut askel askeleelta.',
  },
  fr: {
    title: 'Table de Multiplication 1-100',
    description: 'Apprenez les tables de multiplication de 1 à 100 gratuitement. Exercices interactifs, jeux éducatifs et feuilles de travail PDF pour enfants.',
    keywords: 'table de multiplication, tables de multiplication, mathématiques, apprentissage, pratique, éducation, exercices pdf',
    ogTitle: 'Table de Multiplication – Apprendre, Comprendre et Pratiquer',
    ogDescription: 'Apprenez les tables de multiplication étape par étape.',
    twitterTitle: 'Table de Multiplication – Apprendre, Comprendre et Pratiquer',
    twitterDescription: 'Apprenez les tables de multiplication étape par étape.',
  },
  sv: {
    title: 'Multiplikationstabeller 1-100',
    description: 'Lär dig multiplikationstabeller från 1 till 100 gratis. Interaktiva övningar, pedagogiska spel och utskrivbara arbetsblad för barn.',
    keywords: 'multiplikationstabeller, multiplikationstabell, multiplikation, matematik, lärande, övning, utbildning, pdf övningar',
    ogTitle: 'Multiplikationstabeller – Lär, Förstå och Öva',
    ogDescription: 'Lär dig multiplikationstabeller steg för steg.',
    twitterTitle: 'Multiplikationstabeller – Lär, Förstå och Öva',
    twitterDescription: 'Lär dig multiplikationstabeller steg för steg.',
  },
  pt: {
    title: 'Tabuada 1 a 100 - Multiplicação Grátis Online',
    description: 'Aprenda a tabuada de 1 a 100 gratuitamente. Exercícios interativos, jogos educacionais e folhas de trabalho em PDF para crianças.',
    keywords: 'tabuada, tabuada de multiplicação, multiplicação, matemática, aprendizado, prática, educação, exercícios pdf',
    ogTitle: 'Tabuada – Aprenda, Entenda e Pratique',
    ogDescription: 'Aprenda a tabuada passo a passo.',
    twitterTitle: 'Tabuada – Aprenda, Entenda e Pratique',
    twitterDescription: 'Aprenda a tabuada passo a passo.',
  },
  pl: {
    title: 'Tabliczki Mnożenia 1-100',
    description: 'Ucz się tabliczki mnożenia od 1 do 100 za darmo. Interaktywne ćwiczenia, gry edukacyjne i karty pracy PDF - idealna platforma matematyczna dla dzieci.',
    keywords: 'tabliczka mnożenia, multiplication table, matematyka, nauka, ćwiczenie, edukacja, pdf ćwiczenia',
    ogTitle: 'Tabliczki Mnożenia – Ucz się, Rozumiej i Ćwicz',
    ogDescription: 'Naucz się tabliczki mnożenia krok po kroku.',
    twitterTitle: 'Tabliczki Mnożenia – Ucz się, Rozumiej i Ćwicz',
    twitterDescription: 'Naucz się tabliczki mnożenia krok po kroku.',
  },
  id: {
    title: 'Tabel Perkalian 1-100',
    description: 'Pelajari tabel perkalian dari 1 hingga 100 secara gratis. Latihan interaktif, permainan edukatif, dan lembar kerja PDF untuk anak-anak.',
    keywords: 'tabel perkalian, belajar perkalian, matematika, latihan, pendidikan, latihan pdf',
    ogTitle: 'Tabel Perkalian – Belajar, Pahami, dan Praktikkan',
    ogDescription: 'Pelajari tabel perkalian langkah demi langkah.',
    twitterTitle: 'Tabel Perkalian – Belajar, Pahami, dan Praktikkan',
    twitterDescription: 'Pelajari tabel perkalian langkah demi langkah.',
  },
}
