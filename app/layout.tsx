import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Header from './components/Header'

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
  verification: {
    google: 'your-google-site-verification',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9085160424000244"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KJXX9G2ZD2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KJXX9G2ZD2');
          `}
        </Script>
      </head>
      <body className="antialiased bg-gray-50">
        <Header />
        {children}
      </body>
    </html>
  )
}
