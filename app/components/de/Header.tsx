'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
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
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-lg">
              <span className="text-xl md:text-2xl font-bold text-white">×</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Einmaleins
              </span>
              <span className="text-xs text-slate-500 hidden sm:block">Lernen, Verstehen, Üben</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {/* Çarpım Tablosu Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium flex items-center gap-1">
                Einmaleins Tabellen
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link href="/1-10" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Tabellen 1-10
                  </Link>
                  <Link href="/11-20" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Tabellen 11-20
                  </Link>
                  <Link href="/21-30" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Tabellen 21-30
                  </Link>
                  <Link href="/31-40" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Tabellen 31-40
                  </Link>
                  <Link href="/41-50" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Tabellen 41-50
                  </Link>
                  <Link href="/51-60" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Tabellen 51-60
                  </Link>
                  <Link href="/61-70" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Tabellen 61-70
                  </Link>
                  <Link href="/71-80" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Tabellen 71-80
                  </Link>
                  <Link href="/81-90" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Tabellen 81-90
                  </Link>
                  <Link href="/91-100" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Tabellen 91-100
                  </Link>
                </div>
              </div>
            </div>

            {/* Rehberler Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium flex items-center gap-1">
                Leitfäden
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link href="/fuer-schueler" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    👨‍🎓 Für Schüler
                  </Link>
                  <Link href="/fuer-eltern" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    👨‍👩‍👧‍👦 Für Eltern
                  </Link>
                  <Link href="/fuer-lehrer" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    👩‍🏫 Für Lehrer
                  </Link>
                </div>
              </div>
            </div>

            <Link 
              href="/#pdf-exercises" 
              className="px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
            >
              Übungen PDF
            </Link>
            <Link 
              href="/#games" 
              className="px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
            >
              Interaktive Spiele
            </Link>
            <Link 
              href="/#learning-paths" 
              className="ml-2 px-6 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Jetzt Starten 🚀
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-slate-700 hover:bg-blue-50 rounded-lg transition-colors"
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
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 bg-white border-t border-blue-100">
          {/* Çarpım Tablosu Section */}
          <div className="py-2">
            <h3 className="px-4 py-2 text-sm font-semibold text-slate-900 border-b border-slate-200">
              📚 Einmaleins Tabellen
            </h3>
            <div className="mt-2 space-y-1">
              <Link href="/1-10" onClick={closeMobileMenu} className="block px-6 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                Tabellen 1-10
              </Link>
              <Link href="/11-20" onClick={closeMobileMenu} className="block px-6 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                Tabellen 11-20
              </Link>
              <Link href="/21-30" onClick={closeMobileMenu} className="block px-6 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                Tabellen 21-30
              </Link>
              <Link href="/31-40" onClick={closeMobileMenu} className="block px-6 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                Tabellen 31-40
              </Link>
              <Link href="/41-50" onClick={closeMobileMenu} className="block px-6 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                Tabellen 41-50
              </Link>
              <Link href="/51-60" onClick={closeMobileMenu} className="block px-6 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                Tabellen 51-60
              </Link>
              <Link href="/61-70" onClick={closeMobileMenu} className="block px-6 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                Tabellen 61-70
              </Link>
              <Link href="/71-80" onClick={closeMobileMenu} className="block px-6 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                Tabellen 71-80
              </Link>
              <Link href="/81-90" onClick={closeMobileMenu} className="block px-6 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                Tabellen 81-90
              </Link>
              <Link href="/91-100" onClick={closeMobileMenu} className="block px-6 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                Tabellen 91-100
              </Link>
            </div>
          </div>

          {/* Rehberler Section */}
          <div className="py-2 border-t border-slate-200">
            <h3 className="px-4 py-2 text-sm font-semibold text-slate-900">
              📖 Leitfäden
            </h3>
            <div className="mt-2 space-y-1">
              <Link href="/fuer-schueler" onClick={closeMobileMenu} className="block px-6 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                👨‍🎓 Für Schüler
              </Link>
              <Link href="/fuer-eltern" onClick={closeMobileMenu} className="block px-6 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                👨‍👩‍👧‍👦 Für Eltern
              </Link>
              <Link href="/fuer-lehrer" onClick={closeMobileMenu} className="block px-6 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                👩‍🏫 Für Lehrer
              </Link>
            </div>
          </div>

          {/* Other Links */}
          <div className="py-2 border-t border-slate-200">
            <Link 
              href="/#pdf-exercises" 
              onClick={closeMobileMenu}
              className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium"
            >
              📄 Übungen PDF
            </Link>
            <Link 
              href="/#games" 
              onClick={closeMobileMenu}
              className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium"
            >
              🎮 Interaktive Spiele
            </Link>
            <Link 
              href="/#learning-paths" 
              onClick={closeMobileMenu}
              className="block px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg text-center hover:shadow-lg transition-all"
            >
              Jetzt Starten 🚀
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
