'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function HeaderPl() {
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
          <Link href="/pl/tabliczki-mnozenia" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-lg">
              <span className="text-xl md:text-2xl font-bold text-white">×</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Tabliczki Mnożenia
              </span>
              <span className="text-xs text-slate-500 hidden sm:block">Ucz się, Rozumiej, Ćwicz</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {/* Tables Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium flex items-center gap-1">
                Tabliczki
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link href="/pl/tabliczki-mnozenia/1-10" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Tabliczki 1-10
                  </Link>
                  <Link href="/pl/tabliczki-mnozenia/11-20" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Tabliczki 11-20
                  </Link>
                  <Link href="/pl/tabliczki-mnozenia/21-30" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Tabliczki 21-30
                  </Link>
                  <Link href="/pl/tabliczki-mnozenia/31-40" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Tabliczki 31-40
                  </Link>
                  <Link href="/pl/tabliczki-mnozenia/41-50" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Tabliczki 41-50
                  </Link>
                  <Link href="/pl/tabliczki-mnozenia/51-60" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Tabliczki 51-60
                  </Link>
                  <Link href="/pl/tabliczki-mnozenia/61-70" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Tabliczki 61-70
                  </Link>
                  <Link href="/pl/tabliczki-mnozenia/71-80" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Tabliczki 71-80
                  </Link>
                  <Link href="/pl/tabliczki-mnozenia/81-90" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Tabliczki 81-90
                  </Link>
                  <Link href="/pl/tabliczki-mnozenia/91-100" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Tabliczki 91-100
                  </Link>
                </div>
              </div>
            </div>

            {/* Guides Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium flex items-center gap-1">
                Przewodniki
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link href="/pl/tabliczki-mnozenia/dla-uczniow" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    👨‍🎓 Dla Uczniów
                  </Link>
                  <Link href="/pl/tabliczki-mnozenia/dla-rodzicow" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    👪 Dla Rodziców
                  </Link>
                  <Link href="/pl/tabliczki-mnozenia/dla-nauczycieli" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    👩‍🏫 Dla Nauczycieli
                  </Link>
                </div>
              </div>
            </div>

            {/* PDF Exercises Link */}
            <Link 
              href="/pl/tabliczki-mnozenia#pdf-exercises" 
              className="px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
            >
              📄 Ćwiczenia PDF
            </Link>

            {/* Interactive Games Link */}
            <Link 
              href="/pl/tabliczki-mnozenia#games" 
              className="px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
            >
              🎮 Interaktywne Gry
            </Link>

            {/* CTA Button */}
            <Link
              href="/pl/tabliczki-mnozenia#learning-paths"
              className="ml-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-semibold shadow-md hover:shadow-lg flex items-center gap-2"
            >
              Zacznij Teraz 🚀
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
              <div className="font-semibold text-slate-900 px-2 py-1">Tabliczki Mnożenia</div>
              <Link href="/pl/tabliczki-mnozenia/1-10" onClick={closeMobileMenu} className="block px-6 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                Tabliczki 1-10
              </Link>
              <Link href="/pl/tabliczki-mnozenia/11-20" onClick={closeMobileMenu} className="block px-6 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                Tabliczki 11-20
              </Link>
              <Link href="/pl/tabliczki-mnozenia/21-30" onClick={closeMobileMenu} className="block px-6 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                Tabliczki 21-30
              </Link>
              <Link href="/pl/tabliczki-mnozenia/31-40" onClick={closeMobileMenu} className="block px-6 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                Tabliczki 31-40
              </Link>
              <Link href="/pl/tabliczki-mnozenia/41-50" onClick={closeMobileMenu} className="block px-6 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                Tabliczki 41-50
              </Link>
              <Link href="/pl/tabliczki-mnozenia/51-60" onClick={closeMobileMenu} className="block px-6 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                Tabliczki 51-60
              </Link>
              <Link href="/pl/tabliczki-mnozenia/61-70" onClick={closeMobileMenu} className="block px-6 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                Tabliczki 61-70
              </Link>
              <Link href="/pl/tabliczki-mnozenia/71-80" onClick={closeMobileMenu} className="block px-6 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                Tabliczki 71-80
              </Link>
              <Link href="/pl/tabliczki-mnozenia/81-90" onClick={closeMobileMenu} className="block px-6 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                Tabliczki 81-90
              </Link>
              <Link href="/pl/tabliczki-mnozenia/91-100" onClick={closeMobileMenu} className="block px-6 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                Tabliczki 91-100
              </Link>
            </div>

            {/* Guides Section */}
            <div className="space-y-2 pt-2 border-t border-slate-200">
              <div className="font-semibold text-slate-900 px-2 py-1">Przewodniki</div>
              <Link href="/pl/tabliczki-mnozenia/dla-uczniow" onClick={closeMobileMenu} className="block px-6 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                👨‍🎓 Dla Uczniów
              </Link>
              <Link href="/pl/tabliczki-mnozenia/dla-rodzicow" onClick={closeMobileMenu} className="block px-6 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                👪 Dla Rodziców
              </Link>
              <Link href="/pl/tabliczki-mnozenia/dla-nauczycieli" onClick={closeMobileMenu} className="block px-6 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                👩‍🏫 Dla Nauczycieli
              </Link>
            </div>

            {/* Links Section */}
            <div className="space-y-2 pt-2 border-t border-slate-200">
              <Link href="/pl/tabliczki-mnozenia#pdf-exercises" onClick={closeMobileMenu} className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                📄 Ćwiczenia PDF
              </Link>
              <Link href="/pl/tabliczki-mnozenia#games" onClick={closeMobileMenu} className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                🎮 Interaktywne Gry
              </Link>
            </div>

            {/* CTA Button */}
            <Link
              href="/pl/tabliczki-mnozenia#learning-paths"
              onClick={closeMobileMenu}
              className="block w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center rounded-lg font-semibold shadow-md"
            >
              Zacznij Teraz 🚀
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
