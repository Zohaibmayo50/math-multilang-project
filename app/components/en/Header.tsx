'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function HeaderEn() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/en/multiplication-tables" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-lg">
              <span className="text-xl md:text-2xl font-bold text-white">×</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Multiplication Tables
              </span>
              <span className="text-xs text-slate-500 hidden sm:block">Learn, Understand, Practice</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {/* Tables Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium flex items-center gap-1">
                Tables
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link href="/en/multiplication-tables/1-10" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    1-10 Times Tables
                  </Link>
                  <Link href="/en/multiplication-tables/11-20" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    11-20 Times Tables
                  </Link>
                  <Link href="/en/multiplication-tables/21-30" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    21-30 Times Tables
                  </Link>
                  <Link href="/en/multiplication-tables/31-40" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    31-40 Times Tables
                  </Link>
                  <Link href="/en/multiplication-tables/41-50" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    41-50 Times Tables
                  </Link>
                  <Link href="/en/multiplication-tables/51-60" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    51-60 Times Tables
                  </Link>
                  <Link href="/en/multiplication-tables/61-70" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    61-70 Times Tables
                  </Link>
                  <Link href="/en/multiplication-tables/71-80" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    71-80 Times Tables
                  </Link>
                  <Link href="/en/multiplication-tables/81-90" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    81-90 Times Tables
                  </Link>
                  <Link href="/en/multiplication-tables/91-100" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    91-100 Times Tables
                  </Link>
                </div>
              </div>
            </div>

            {/* Guides Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium flex items-center gap-1">
                Guides
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link href="/en/multiplication-tables/for-students" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    👨‍🎓 For Students
                  </Link>
                  <Link href="/en/multiplication-tables/for-parents" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    👪 For Parents
                  </Link>
                  <Link href="/en/multiplication-tables/for-teachers" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    👩‍🏫 For Teachers
                  </Link>
                </div>
              </div>
            </div>

            {/* PDF Exercises Link */}
            <Link 
              href="/en/multiplication-tables#pdf-exercises" 
              className="px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
            >
              📄 PDF Exercises
            </Link>

            {/* Interactive Games Link */}
            <Link 
              href="/en/multiplication-tables#games" 
              className="px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
            >
              🎮 Interactive Games
            </Link>

            {/* CTA Button */}
            <Link
              href="/en/multiplication-tables#learning-paths"
              className="ml-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-semibold shadow-md hover:shadow-lg flex items-center gap-2"
            >
              Start Now 🚀
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <div className="px-4 py-4 space-y-2 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {/* Multiplication Tables Section */}
            <div className="space-y-2">
              <div className="font-semibold text-slate-900 px-2 py-1">Multiplication Tables</div>
              <Link href="/en/multiplication-tables/1-10" onClick={closeMobileMenu} className="block px-6 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                1-10 Times Tables
              </Link>
              <Link href="/en/multiplication-tables/11-20" onClick={closeMobileMenu} className="block px-6 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                11-20 Times Tables
              </Link>
              <Link href="/en/multiplication-tables/21-30" onClick={closeMobileMenu} className="block px-6 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                21-30 Times Tables
              </Link>
              <Link href="/en/multiplication-tables/31-40" onClick={closeMobileMenu} className="block px-6 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                31-40 Times Tables
              </Link>
              <Link href="/en/multiplication-tables/41-50" onClick={closeMobileMenu} className="block px-6 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                41-50 Times Tables
              </Link>
              <Link href="/en/multiplication-tables/51-60" onClick={closeMobileMenu} className="block px-6 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                51-60 Times Tables
              </Link>
              <Link href="/en/multiplication-tables/61-70" onClick={closeMobileMenu} className="block px-6 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                61-70 Times Tables
              </Link>
              <Link href="/en/multiplication-tables/71-80" onClick={closeMobileMenu} className="block px-6 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                71-80 Times Tables
              </Link>
              <Link href="/en/multiplication-tables/81-90" onClick={closeMobileMenu} className="block px-6 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                81-90 Times Tables
              </Link>
              <Link href="/en/multiplication-tables/91-100" onClick={closeMobileMenu} className="block px-6 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                91-100 Times Tables
              </Link>
            </div>

            {/* Guides Section */}
            <div className="space-y-2 pt-2 border-t border-slate-200">
              <div className="font-semibold text-slate-900 px-2 py-1">Guides</div>
              <Link href="/en/multiplication-tables/for-students" onClick={closeMobileMenu} className="block px-6 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                👨‍🎓 For Students
              </Link>
              <Link href="/en/multiplication-tables/for-parents" onClick={closeMobileMenu} className="block px-6 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                👪 For Parents
              </Link>
              <Link href="/en/multiplication-tables/for-teachers" onClick={closeMobileMenu} className="block px-6 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                👩‍🏫 For Teachers
              </Link>
            </div>

            {/* Links Section */}
            <div className="space-y-2 pt-2 border-t border-slate-200">
              <Link href="/en/multiplication-tables#pdf-exercises" onClick={closeMobileMenu} className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                📄 PDF Exercises
              </Link>
              <Link href="/en/multiplication-tables#games" onClick={closeMobileMenu} className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                🎮 Interactive Games
              </Link>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="/en/multiplication-tables#learning-paths"
                onClick={closeMobileMenu}
                className="block w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-semibold text-center shadow-md"
              >
                Start Now 🚀
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
