'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Locale } from '../../../lib/i18n-config'
import { topicSlugs, guides } from '../../../lib/i18n-config'
import { headerTranslations } from '../../../lib/header-translations'
import { getAllRanges } from '../../../lib/url-helpers'
import LanguageSwitcher from './LanguageSwitcher'

interface UniversalHeaderProps {
  lang: Locale
}

export default function UniversalHeader({ lang }: UniversalHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const t = headerTranslations[lang]
  const topic = topicSlugs[lang]
  const guide = guides[lang]
  const ranges = getAllRanges()

  const topicBase = `/${lang}/${topic}`

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)
  const closeMobileMenu = () => setMobileMenuOpen(false)

  /** Build range label from pattern, e.g. "{range} Times Tables" → "1-10 Times Tables" */
  const rangeLabel = (range: string) => t.rangeLabelPattern.replace('{range}', range)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href={topicBase} className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-lg">
              <span className="text-xl md:text-2xl font-bold text-white">×</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {t.logoText}
              </span>
              <span className="text-xs text-slate-500 hidden sm:block">{t.tagline}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {/* Tables Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium flex items-center gap-1">
                {t.tablesLabel}
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {ranges.map((range) => (
                    <Link
                      key={range}
                      href={`${topicBase}/${range}`}
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {rangeLabel(range)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Guides Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium flex items-center gap-1">
                {t.guidesLabel}
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link
                    href={`${topicBase}/${guide.students}`}
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    👨‍🎓 {t.forStudents}
                  </Link>
                  <Link
                    href={`${topicBase}/${guide.parents}`}
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    👪 {t.forParents}
                  </Link>
                  <Link
                    href={`${topicBase}/${guide.teachers}`}
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    👩‍🏫 {t.forTeachers}
                  </Link>
                </div>
              </div>
            </div>

            {/* PDF Exercises Link */}
            <Link
              href={`${topicBase}#pdf-exercises`}
              className="px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
            >
              {t.pdfLabel}
            </Link>

            {/* Interactive Games Link */}
            <Link
              href={`${topicBase}#games`}
              className="px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
            >
              {t.gamesLabel}
            </Link>

            {/* Language Switcher */}
            <LanguageSwitcher lang={lang} />

            {/* CTA Button */}
            <Link
              href={`${topicBase}#learning-paths`}
              className="ml-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-semibold shadow-md hover:shadow-lg flex items-center gap-2"
            >
              {t.ctaText}
            </Link>
          </div>

          {/* Mobile: Language Switcher + Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageSwitcher lang={lang} />
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <div className="px-4 py-4 space-y-2 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {/* Multiplication Tables Section */}
            <div className="space-y-2">
              <div className="font-semibold text-slate-900 px-2 py-1">{t.tablesLabel}</div>
              {ranges.map((range) => (
                <Link
                  key={range}
                  href={`${topicBase}/${range}`}
                  onClick={closeMobileMenu}
                  className="block px-6 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                >
                  {rangeLabel(range)}
                </Link>
              ))}
            </div>

            {/* Guides Section */}
            <div className="space-y-2 pt-2 border-t border-slate-200">
              <div className="font-semibold text-slate-900 px-2 py-1">{t.guidesLabel}</div>
              <Link
                href={`${topicBase}/${guide.students}`}
                onClick={closeMobileMenu}
                className="block px-6 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
              >
                👨‍🎓 {t.forStudents}
              </Link>
              <Link
                href={`${topicBase}/${guide.parents}`}
                onClick={closeMobileMenu}
                className="block px-6 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
              >
                👪 {t.forParents}
              </Link>
              <Link
                href={`${topicBase}/${guide.teachers}`}
                onClick={closeMobileMenu}
                className="block px-6 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
              >
                👩‍🏫 {t.forTeachers}
              </Link>
            </div>

            {/* Links Section */}
            <div className="space-y-2 pt-2 border-t border-slate-200">
              <Link
                href={`${topicBase}#pdf-exercises`}
                onClick={closeMobileMenu}
                className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
              >
                {t.pdfLabel}
              </Link>
              <Link
                href={`${topicBase}#games`}
                onClick={closeMobileMenu}
                className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
              >
                {t.gamesLabel}
              </Link>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href={`${topicBase}#learning-paths`}
                onClick={closeMobileMenu}
                className="block w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-semibold text-center shadow-md"
              >
                {t.ctaText}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
