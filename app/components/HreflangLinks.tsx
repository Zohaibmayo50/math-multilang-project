'use client'

import { usePathname } from 'next/navigation'
import { getHreflangAlternates } from '@/lib/url-helpers'
import { Locale } from '@/lib/i18n-config'

interface HreflangLinksProps {
  locale: Locale
  path?: string
}

/**
 * Component that injects hreflang tags for multilingual SEO
 * Automatically generates language alternates for tr, es, de, and x-default
 */
export default function HreflangLinks({ locale, path }: HreflangLinksProps) {
  const alternates = getHreflangAlternates(path)

  return (
    <>
      {alternates.map(({ hreflang, href }) => (
        <link
          key={hreflang}
          rel="alternate"
          hrefLang={hreflang}
          href={href}
        />
      ))}
    </>
  )
}

/**
 * Server-side version for use in metadata
 */
export function generateHreflangMetadata(path?: string) {
  const alternates = getHreflangAlternates(path)
  
  return {
    languages: alternates.reduce((acc, { hreflang, href }) => {
      if (hreflang !== 'x-default') {
        acc[hreflang] = href
      }
      return acc
    }, {} as Record<string, string>),
  }
}
