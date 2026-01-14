import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://carpimtablosu.com.tr'),
  title: 'Çarpım Tablosu 1-100 | PDF Alıştırmaları ve İnteraktif Oyunlar',
  description: '1\'den 100\'e kadar çarpım tablolarını ücretsiz öğrenin. İnteraktif alıştırmalar, eğitici oyunlar ve PDF çalışma sayfalarıyla çocuklar için ideal matematik platformu.',
  keywords: 'çarpım tablosu, multiplication table, matematik, öğrenme, pratik, eğitim, pdf alıştırmaları',
  authors: [{ name: 'Çarpım Tablosu' }],
  creator: 'Çarpım Tablosu',
  publisher: 'Çarpım Tablosu',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Çarpım Tablosu – Öğren, Anla ve Pratik Yap',
    description: 'Çarpım tablosunu adım adım öğrenin, anlayın ve pratik yapın.',
    type: 'website',
    locale: 'tr_TR',
    url: 'https://carpimtablosu.com.tr',
    siteName: 'Çarpım Tablosu',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Çarpım Tablosu – Öğren, Anla ve Pratik Yap',
    description: 'Çarpım tablosunu adım adım öğrenin, anlayın ve pratik yapın.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className="antialiased bg-gray-50">
        {children}
      </body>
    </html>
  )
}
