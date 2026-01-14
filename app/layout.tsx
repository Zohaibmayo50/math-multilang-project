import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://carpimtablosu.com.tr'),
  title: {
    template: '%s | Multiplication Tables',
    default: 'Multiplication Tables | Learn in Your Language'
  },
  description: 'Learn multiplication tables in multiple languages. Interactive exercises, educational games, and printable worksheets for children.',
  keywords: 'multiplication tables, çarpım tablosu, tablas de multiplicar, einmaleins, math learning',
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
