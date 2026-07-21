'use client'

import { useRef } from 'react'
import Link from 'next/link'
import type { Locale } from '../../../lib/i18n-config'
import { topicSlugs } from '../../../lib/i18n-config'
import { numberPageTranslations } from '../../../lib/number-page-translations'
import { getLocalizedPath } from '../../../lib/url-helpers'
import type { PatternItem, MistakeItem, RealLifeItem, FunFactItem } from '../../../lib/number-content-types'
import UniversalHeader from './UniversalHeader'
import UniversalFooter from './UniversalFooter'
import UniversalPracticePreview from './UniversalPracticePreview'
import UniversalPrintableExercises from './UniversalPrintableExercises'
import UniversalNumberGames from './UniversalNumberGames'

// Number-specific content modules (one per locale, see lib/number-content-*.ts)
import * as trContent from '../../../lib/number-content-tr'
import * as esContent from '../../../lib/number-content-es'
import * as deContent from '../../../lib/number-content-de'
import * as csContent from '../../../lib/number-content-cs'
import * as ukContent from '../../../lib/number-content-uk'
import * as fiContent from '../../../lib/number-content-fi'
import * as frContent from '../../../lib/number-content-fr'
import * as svContent from '../../../lib/number-content-sv'
import * as ptContent from '../../../lib/number-content-pt'
import * as enContent from '../../../lib/number-content-en'
import * as plContent from '../../../lib/number-content-pl'
import * as idContent from '../../../lib/number-content-id'

// All sibling page sections are now unified — see UniversalFooter.tsx,
// UniversalPracticePreview.tsx, UniversalPrintableExercises.tsx, UniversalNumberGames.tsx.

interface UniversalNumberPageProps {
  lang: Locale
  number: number
  rangeStart: number
  rangeEnd: number
}

interface NumberContentModule {
  getNumberMeaning: (n: number) => string | null
  getWhyImportant: (n: number) => string | null
  getPatterns: (n: number) => PatternItem[]
  getCommonMistakes: (n: number) => MistakeItem[]
  getPracticeStrategies: (n: number) => string[]
  getRealLifeExamples: (n: number) => RealLifeItem[] | null
  getFunFacts: (n: number) => FunFactItem[] | null
}

const contentByLocale: Record<Locale, NumberContentModule> = {
  tr: trContent,
  es: esContent,
  de: deContent,
  cs: csContent,
  uk: ukContent,
  fi: fiContent,
  fr: frContent,
  sv: svContent,
  pt: ptContent,
  en: enContent,
  pl: plContent,
  id: idContent,
}

const gradientColors = [
  'from-blue-500 to-indigo-600',
  'from-purple-500 to-pink-600',
  'from-green-500 to-teal-600',
  'from-orange-500 to-red-600',
  'from-cyan-500 to-blue-600',
]

const canvasGradients: { [key: number]: [string, string] } = {
  0: ['#3b82f6', '#4f46e5'],
  1: ['#a855f7', '#ec4899'],
  2: ['#10b981', '#14b8a6'],
  3: ['#f97316', '#ef4444'],
  4: ['#06b6d4', '#3b82f6'],
}

/** Replace {token} placeholders in a translation pattern string. */
function fillTemplate(template: string, vars: Record<string, string | number>): string {
  return Object.entries(vars).reduce(
    (acc, [key, value]) => acc.split(`{${key}}`).join(String(value)),
    template
  )
}

export default function UniversalNumberPage({ lang, number, rangeStart, rangeEnd }: UniversalNumberPageProps) {
  const tableRef = useRef<HTMLDivElement>(null)

  const t = numberPageTranslations[lang]
  const content = contentByLocale[lang]
  const topic = topicSlugs[lang]


  const colorIndex = (number - 1) % gradientColors.length

  const fill = (template: string, extra: Record<string, string | number> = {}) =>
    fillTemplate(template, { number, rangeStart, rangeEnd, product4: number * 4, ...extra })

  const pageTitle = fill(t.pageTitle)

  // Print function — popup window with a simple printable table.
  // NOTE: the print stylesheet/HTML below must always use the literal CSS/HTML
  // keyword `body`, never a translated word (this was bug in the old uk source).
  const handlePrint = () => {
    if (tableRef.current) {
      const printWindow = window.open('', '', 'width=800,height=600')
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>${pageTitle}</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  padding: 20px;
                  max-width: 600px;
                  margin: 0 auto;
                }
                h1 {
                  text-align: center;
                  color: #1e40af;
                  margin-bottom: 30px;
                }
                .table-item {
                  display: flex;
                  justify-content: space-between;
                  padding: 12px 20px;
                  margin: 8px 0;
                  background: #f0f9ff;
                  border-radius: 8px;
                  font-size: 18px;
                }
                .equation {
                  font-weight: 500;
                }
                .result {
                  font-weight: bold;
                  color: #1e40af;
                }
                @media print {
                  body { padding: 10px; }
                  .table-item { page-break-inside: avoid; }
                }
              </style>
            </head>
            <body>
              <h1>${pageTitle}</h1>
              ${Array.from({ length: 10 }, (_, i) => `
                <div class="table-item">
                  <span class="equation">${number} × ${i + 1}</span>
                  <span class="result">= ${number * (i + 1)}</span>
                </div>
              `).join('')}
            </body>
          </html>
        `)
        printWindow.document.close()
        printWindow.focus()
        setTimeout(() => {
          printWindow.print()
          printWindow.close()
        }, 250)
      }
    }
  }

  // Download as image function — renders the table onto a canvas and saves it as a PNG.
  const handleDownload = async () => {
    if (tableRef.current) {
      try {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        canvas.width = 600
        canvas.height = 700

        const gradient = ctx.createLinearGradient(0, 0, 600, 700)
        const [color1, color2] = canvasGradients[colorIndex]
        gradient.addColorStop(0, color1)
        gradient.addColorStop(1, color2)
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, 600, 700)

        ctx.fillStyle = '#ffffff'
        ctx.font = 'bold 36px Arial'
        ctx.textAlign = 'center'
        ctx.fillText(pageTitle, 300, 60)

        ctx.font = '24px Arial'
        let y = 120
        for (let i = 1; i <= 10; i++) {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'
          ctx.beginPath()
          ctx.roundRect(30, y - 30, 540, 50, 10)
          ctx.fill()

          ctx.fillStyle = '#ffffff'
          ctx.textAlign = 'left'
          ctx.font = '22px Arial'
          ctx.fillText(number + ' × ' + i, 50, y)

          ctx.textAlign = 'right'
          ctx.font = 'bold 26px Arial'
          ctx.fillText('= ' + number * i, 550, y)

          y += 60
        }

        canvas.toBlob((blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = url
            link.download = `${number}-${topic}.png`
            link.click()
            URL.revokeObjectURL(url)
          }
        })
      } catch (error) {
        console.error(t.downloadErrorMessage, error)
      }
    }
  }

  const meaning = content.getNumberMeaning(number)
  const whyImportant = content.getWhyImportant(number)
  const patterns = content.getPatterns(number)
  const mistakes = content.getCommonMistakes(number)
  const strategies = content.getPracticeStrategies(number)
  const realLifeExamples = content.getRealLifeExamples(number)
  const funFacts = content.getFunFacts(number)

  const hasMeaningSection = Boolean(meaning) || Boolean(whyImportant)

  return (
    <>
      <UniversalHeader lang={lang} />
      <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
        {/* Hero Section */}
        <section className={`relative overflow-hidden bg-gradient-to-br ${gradientColors[colorIndex]} pt-16 pb-12 sm:pt-20 sm:pb-16 md:pt-24 md:pb-20`}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[1, 2, 3, 4, 5].map((multiplier, index) => (
              <div
                key={multiplier}
                className={`absolute text-5xl sm:text-6xl md:text-7xl font-bold opacity-10 animate-float${index % 2 === 0 ? '' : '-delayed'}`}
                style={{
                  top: `${10 + index * 15}%`,
                  left: index % 2 === 0 ? `${10 + index * 10}%` : 'auto',
                  right: index % 2 !== 0 ? `${5 + index * 8}%` : 'auto',
                }}
              >
                {number * multiplier}
              </div>
            ))}

            <div className="absolute top-20 right-[30%] w-24 sm:w-32 h-24 sm:h-32 bg-yellow-300/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-32 left-[20%] w-32 sm:w-40 h-32 sm:h-40 bg-pink-300/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-[45%] w-20 sm:w-28 h-20 sm:h-28 bg-green-300/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-[15%] w-28 sm:w-36 h-28 sm:h-36 bg-purple-300/20 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-5xl mx-auto px-4 relative z-10">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border-2 border-white/50">
                <span className="text-2xl sm:text-3xl">🔢</span>
                <span className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  {number}
                </span>
                <span className="text-2xl sm:text-3xl">✖️</span>
              </div>
            </div>

            <div className="text-center mb-6 sm:mb-8">
              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
                <span className="text-4xl sm:text-5xl md:text-6xl animate-bounce">🎯</span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                  {pageTitle}
                </h1>
                <span className="text-4xl sm:text-5xl md:text-6xl animate-bounce" style={{ animationDelay: '0.2s' }}>🎨</span>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-2xl mx-auto mt-6 sm:mt-8 mb-4 sm:mb-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md border-2 border-blue-100">
                  <div className="text-2xl sm:text-3xl mb-1">📊</div>
                  <div className="text-xl sm:text-2xl font-bold text-blue-600">10</div>
                  <div className="text-xs text-slate-600">{t.statOperations}</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md border-2 border-indigo-100">
                  <div className="text-2xl sm:text-3xl mb-1">🎮</div>
                  <div className="text-xl sm:text-2xl font-bold text-indigo-600">3</div>
                  <div className="text-xs text-slate-600">{t.statGames}</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md border-2 border-purple-100">
                  <div className="text-2xl sm:text-3xl mb-1">📝</div>
                  <div className="text-xl sm:text-2xl font-bold text-purple-600">∞</div>
                  <div className="text-xs text-slate-600">{t.statExercises}</div>
                </div>
              </div>
            </div>

            <div className="max-w-3xl mx-auto space-y-4 text-center px-4">
              <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
                {fill(t.heroDescription)}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-4">
                <a
                  href="#practice"
                  className="group inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white text-indigo-600 font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 text-sm sm:text-base"
                >
                  <span className="text-lg sm:text-xl">🎯</span>
                  <span>{t.ctaPractice}</span>
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="#games"
                  className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/90 backdrop-blur-sm text-purple-600 font-bold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border-2 border-white/50 text-sm sm:text-base"
                >
                  <span className="text-lg sm:text-xl">🎮</span>
                  <span>{t.ctaGames}</span>
                </a>
                <a
                  href="#worksheets"
                  className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/90 backdrop-blur-sm text-green-600 font-bold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border-2 border-white/50 text-sm sm:text-base"
                >
                  <span className="text-lg sm:text-xl">📝</span>
                  <span className="hidden sm:inline">{t.ctaWorksheets}</span>
                  <span className="sm:hidden">{t.ctaWorksheetsShort}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Introduction - What This Table Covers */}
        <section className="section-container bg-white py-8 sm:py-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 flex items-center justify-center gap-3">
                <span className="text-2xl sm:text-3xl">📖</span>
                {fill(t.visualIntroHeading)}
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full"></div>
            </div>

            <p className="text-sm sm:text-base text-slate-700 mb-6 leading-relaxed text-center max-w-2xl mx-auto">
              {fill(t.visualIntroText)}
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 sm:p-6 border-2 border-blue-100 shadow-md">
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mb-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((multiplier) => (
                  <div key={multiplier} className="flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm rounded-xl p-2 sm:p-3 shadow-sm hover:shadow-md transition-shadow group">
                    <span className="text-xs sm:text-sm text-slate-600 mb-1">{number} × {multiplier}</span>
                    <span className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold text-base sm:text-xl shadow-md group-hover:scale-110 transition-transform">
                      {number * multiplier}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-white/60 rounded-xl p-3 sm:p-4 flex items-start gap-2 sm:gap-3">
                <span className="text-2xl sm:text-3xl">💡</span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {fill(t.visualIntroTip)}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Number Context & Meaning + Table Combined */}
        <section className="section-container bg-white py-8 sm:py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
              {/* Left: Explanation (hidden entirely if no curated content exists for this number) */}
              {hasMeaningSection && (
                <div className="space-y-5 sm:space-y-6">
                  {meaning && (
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
                        {fill(t.meaningHeading)}
                      </h2>

                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4 sm:mb-6">
                        {meaning}
                      </p>

                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-5 border-2 border-blue-100">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <span className="text-2xl sm:text-3xl">💡</span>
                          <div>
                            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1 sm:mb-2">{t.simpleExplanationHeading}</h3>
                            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                              {fill(t.simpleExplanationText)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {whyImportant && (
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
                        {fill(t.whyImportantHeading)}
                      </h2>

                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                        {whyImportant}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Right: Multiplication Table */}
              <div className={hasMeaningSection ? 'lg:sticky lg:top-8' : 'lg:sticky lg:top-8 lg:col-span-2'}>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {pageTitle}
                  </h2>

                  {/* Print and Download Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={handlePrint}
                      className="group flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-white border-2 border-blue-200 text-blue-600 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all text-xs sm:text-sm font-semibold"
                      title={t.printTitle}
                      aria-label={fill(t.printAriaLabel)}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                      </svg>
                      <span className="hidden sm:inline">{t.printLabel}</span>
                    </button>

                    <button
                      onClick={handleDownload}
                      className="group flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg"
                      title={t.downloadTitle}
                      aria-label={fill(t.downloadAriaLabel)}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      <span className="hidden sm:inline">{t.downloadLabel}</span>
                    </button>
                  </div>
                </div>

                <div ref={tableRef} className={`bg-gradient-to-br ${gradientColors[colorIndex]} rounded-2xl p-4 sm:p-6 text-white shadow-xl`}>
                  <div className="space-y-1.5 sm:space-y-2">
                    {[...Array(10)].map((_, i) => (
                      <div key={i} className="flex justify-between items-center bg-white/20 backdrop-blur-sm rounded-lg px-3 sm:px-5 py-2 sm:py-2.5 hover:bg-white/30 transition-colors">
                        <span className="font-medium text-sm sm:text-base">{number} × {i + 1}</span>
                        <span className="font-bold text-base sm:text-lg">= {number * (i + 1)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Patterns & Observations (section skipped entirely if no curated patterns exist) */}
        {patterns.length > 0 && (
          <section className="section-container bg-white py-8 sm:py-12">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
                {fill(t.patternsHeading)}
              </h2>

              <p className="text-sm sm:text-base text-slate-700 mb-4 sm:mb-6 leading-relaxed">
                {fill(t.patternsIntro)}
              </p>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {patterns.map((pattern, index) => (
                  <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-3 sm:p-4 border-2 border-amber-100">
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1.5 sm:mb-2 flex items-center gap-2">
                      <span className="text-lg sm:text-xl">{index === 0 ? '🔄' : index === 1 ? '📊' : '✨'}</span>
                      {pattern.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {pattern.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Practice Section */}
        <div id="practice">
          <UniversalPracticePreview lang={lang} rangeStart={number} rangeEnd={number} />
        </div>

        {/* Interactive Games */}
        <div id="games">
          <UniversalNumberGames lang={lang} number={number} />
        </div>

        {/* Printable Worksheets */}
        <div id="worksheets">
          <UniversalPrintableExercises lang={lang} rangeStart={number} rangeEnd={number} />
        </div>

        {/* How to Practice (section skipped entirely if no curated strategies exist) */}
        {strategies.length > 0 && (
          <section className="section-container bg-white">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
                {fill(t.practiceHeading)}
              </h2>

              <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed">
                {fill(t.practiceIntro)}
              </p>

              <div className="grid gap-3 sm:gap-4">
                {strategies.map((strategy, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-4 sm:p-5 border-2 border-green-100">
                    <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm sm:text-base">
                      {index + 1}
                    </div>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed pt-0.5 sm:pt-1">
                      {strategy}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Common Mistakes (section skipped entirely if no curated mistakes exist) */}
        {mistakes.length > 0 && (
          <section className="section-container bg-gradient-to-br from-slate-50 to-gray-100">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
                {fill(t.mistakesHeading)}
              </h2>

              <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed">
                {t.mistakesIntro}
              </p>

              <div className="space-y-4 sm:space-y-6">
                {mistakes.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 sm:p-6 border-l-4 border-red-500 shadow-md">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <span className="text-2xl sm:text-3xl">⚠️</span>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1.5 sm:mb-2">
                          {item.mistake}
                        </h3>
                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                          <span className="font-semibold text-green-600">{t.solutionLabel}</span> {item.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Where You See {number} in Real Life (section skipped entirely if no curated examples exist) */}
        {realLifeExamples && realLifeExamples.length > 0 && (
          <section className="section-container bg-white py-8 sm:py-12">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
                {fill(t.realLifeHeading)}
              </h2>

              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {realLifeExamples.map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-3 sm:p-4 border-2 border-sky-100">
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1.5 sm:mb-2">
                      {item.context}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Fun Facts About {number} (section skipped entirely if no curated fun facts exist) */}
        {funFacts && funFacts.length > 0 && (
          <section className="section-container bg-gradient-to-br from-slate-50 to-gray-100">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
                {fill(t.funFactsHeading)}
              </h2>

              <div className="space-y-3 sm:space-y-4">
                {funFacts.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4 bg-white rounded-xl p-4 sm:p-5 border-2 border-purple-100 shadow-sm">
                    <span className="text-xl sm:text-2xl">✨</span>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      {item.fact}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Multiplication Tables */}
        <section className="section-container bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
              {t.relatedHeading}
            </h2>

            <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed">
              {fill(t.relatedIntro)}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {number > 1 && (
                <Link
                  href={getLocalizedPath(lang, String(number - 1))}
                  className="block bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs sm:text-sm text-slate-600 mb-1">{t.prevLabel}</div>
                      <div className="text-lg sm:text-2xl font-bold text-slate-900">
                        {fill(t.pageTitle, { number: number - 1 })}
                      </div>
                    </div>
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </div>
                </Link>
              )}

              {number < 100 && (
                <Link
                  href={getLocalizedPath(lang, String(number + 1))}
                  className="block bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 sm:p-6 border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs sm:text-sm text-slate-600 mb-1">{t.nextLabel}</div>
                      <div className="text-lg sm:text-2xl font-bold text-slate-900">
                        {fill(t.pageTitle, { number: number + 1 })}
                      </div>
                    </div>
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              )}

              <Link
                href={getLocalizedPath(lang, `${rangeStart}-${rangeEnd}`)}
                className="block bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-4 sm:p-6 border-2 border-green-200 hover:border-green-400 hover:shadow-lg transition-all group sm:col-span-2"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs sm:text-sm text-slate-600 mb-1">{t.parentRangeLabel}</div>
                    <div className="text-lg sm:text-2xl font-bold text-slate-900">
                      {fill(t.parentRangeText)}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 sm:mt-2">
                      {t.parentRangeDescription}
                    </p>
                  </div>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <UniversalFooter lang={lang} />
      </main>
    </>
  )
}
