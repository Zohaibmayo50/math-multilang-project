'use client'

import { useState, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { i18n, type Locale, languageNames } from '../../../lib/i18n-config'
import { languageFlags } from '../../../lib/header-translations'
import { getAlternateUrl, detectLocaleFromPath } from '../../../lib/url-helpers'

interface LanguageSwitcherProps {
  /** Current language — used as fallback when pathname detection fails */
  lang: Locale
}

export default function LanguageSwitcher({ lang }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  const currentLocale = detectLocaleFromPath(pathname) ?? lang

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  // Close on Escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium border border-slate-200 hover:border-blue-300"
        aria-label="Select language"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span className="text-base leading-none">{languageFlags[currentLocale]}</span>
        <span className="hidden sm:inline">{languageNames[currentLocale]}</span>
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Available languages"
          className="absolute right-0 top-full mt-1 w-52 bg-white rounded-lg shadow-lg border border-slate-200 z-[60] py-1 max-h-80 overflow-y-auto"
        >
          {i18n.locales.map((locale) => {
            const href = getAlternateUrl(pathname, locale)
            const isCurrent = locale === currentLocale
            return (
              <a
                key={locale}
                href={href}
                role="option"
                aria-selected={isCurrent}
                hrefLang={locale}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-2.5 px-4 py-2 text-sm transition-colors ${
                  isCurrent
                    ? 'bg-blue-50 text-blue-700 font-semibold'
                    : 'text-slate-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <span className="text-base leading-none">{languageFlags[locale]}</span>
                <span>{languageNames[locale]}</span>
                {isCurrent && (
                  <svg className="w-4 h-4 ml-auto text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </a>
            )
          })}
        </div>
      )}
    </div>
  )
}
