'use client'

import Link from 'next/link'
import type { Locale } from '../../../lib/i18n-config'
import { rangePageTranslations } from '../../../lib/range-page-translations'
import { getLocalizedPath } from '../../../lib/url-helpers'
import UniversalHeader from './UniversalHeader'
import UniversalFooter from './UniversalFooter'

// Sibling page sections (not yet unified — each locale still has its own real
// implementation of PracticePreview / GamesSection / PrintableExercises).
// Footer is unified — see UniversalFooter.tsx.

import PracticePreviewTr from '../PracticePreview'
import PracticePreviewEs from '../es/PracticePreview'
import PracticePreviewDe from '../de/PracticePreview'
import PracticePreviewCs from '../cs/PracticePreview'
import PracticePreviewUk from '../uk/PracticePreview'
import PracticePreviewFi from '../fi/PracticePreview'
import PracticePreviewFr from '../fr/PracticePreview'
import PracticePreviewSv from '../sv/PracticePreview'
import PracticePreviewPt from '../pt/PracticePreview'
import PracticePreviewEn from '../en/PracticePreview'
import PracticePreviewPl from '../pl/PracticePreview'
import PracticePreviewId from '../id/PracticePreview'

import GamesSectionTr from '../GamesSection'
import GamesSectionEs from '../es/GamesSection'
import GamesSectionDe from '../de/GamesSection'
import GamesSectionCs from '../cs/GamesSection'
import GamesSectionUk from '../uk/GamesSection'
import GamesSectionFi from '../fi/GamesSection'
import GamesSectionFr from '../fr/GamesSection'
import GamesSectionSv from '../sv/GamesSection'
import GamesSectionPt from '../pt/GamesSection'
import GamesSectionEn from '../en/GamesSection'
import GamesSectionPl from '../pl/GamesSection'
import GamesSectionId from '../id/GamesSection'

import PrintableExercisesTr from '../PrintableExercises'
import PrintableExercisesEs from '../es/PrintableExercises'
import PrintableExercisesDe from '../de/PrintableExercises'
import PrintableExercisesCs from '../cs/PrintableExercises'
import PrintableExercisesUk from '../uk/PrintableExercises'
import PrintableExercisesFi from '../fi/PrintableExercises'
import PrintableExercisesFr from '../fr/PrintableExercises'
import PrintableExercisesSv from '../sv/PrintableExercises'
import PrintableExercisesPt from '../pt/PrintableExercises'
import PrintableExercisesEn from '../en/PrintableExercises'
import PrintableExercisesPl from '../pl/PrintableExercises'
import PrintableExercisesId from '../id/PrintableExercises'

interface UniversalRangePageProps {
  lang: Locale
  rangeStart: number
  rangeEnd: number
  nextRangeUrl?: string
  prevRangeUrl?: string
  difficultyLevel: 'beginner' | 'intermediate' | 'advanced'
  difficultyColor: string
}

type RangeProps = { rangeStart?: number; rangeEnd?: number }

const PracticePreviewByLocale: Record<Locale, React.ComponentType<RangeProps>> = {
  tr: PracticePreviewTr,
  es: PracticePreviewEs,
  de: PracticePreviewDe,
  cs: PracticePreviewCs,
  uk: PracticePreviewUk,
  fi: PracticePreviewFi,
  fr: PracticePreviewFr,
  sv: PracticePreviewSv,
  pt: PracticePreviewPt,
  en: PracticePreviewEn,
  pl: PracticePreviewPl,
  id: PracticePreviewId,
}

const GamesSectionByLocale: Record<Locale, React.ComponentType<RangeProps>> = {
  tr: GamesSectionTr,
  es: GamesSectionEs,
  de: GamesSectionDe,
  cs: GamesSectionCs,
  uk: GamesSectionUk,
  fi: GamesSectionFi,
  fr: GamesSectionFr,
  sv: GamesSectionSv,
  pt: GamesSectionPt,
  en: GamesSectionEn,
  pl: GamesSectionPl,
  id: GamesSectionId,
}

const PrintableExercisesByLocale: Record<Locale, React.ComponentType<RangeProps>> = {
  tr: PrintableExercisesTr,
  es: PrintableExercisesEs,
  de: PrintableExercisesDe,
  cs: PrintableExercisesCs,
  uk: PrintableExercisesUk,
  fi: PrintableExercisesFi,
  fr: PrintableExercisesFr,
  sv: PrintableExercisesSv,
  pt: PrintableExercisesPt,
  en: PrintableExercisesEn,
  pl: PrintableExercisesPl,
  id: PrintableExercisesId,
}

const colors = [
  'from-blue-500 to-blue-600',
  'from-indigo-500 to-indigo-600',
  'from-purple-500 to-purple-600',
  'from-pink-500 to-pink-600',
  'from-rose-500 to-rose-600',
  'from-orange-500 to-orange-600',
  'from-amber-500 to-amber-600',
  'from-yellow-500 to-yellow-600',
  'from-lime-500 to-lime-600',
  'from-emerald-500 to-emerald-600',
]

/** Replace {token} placeholders in a translation pattern string. */
function fillTemplate(template: string, vars: Record<string, string | number>): string {
  return Object.entries(vars).reduce(
    (acc, [key, value]) => acc.split(`{${key}}`).join(String(value)),
    template
  )
}

export default function UniversalRangePage({
  lang,
  rangeStart,
  rangeEnd,
  nextRangeUrl,
  prevRangeUrl,
  difficultyLevel,
  difficultyColor,
}: UniversalRangePageProps) {
  const t = rangePageTranslations[lang]

  const PracticePreview = PracticePreviewByLocale[lang]
  const GamesSection = GamesSectionByLocale[lang]
  const PrintableExercises = PrintableExercisesByLocale[lang]

  const rangeNumbers = Array.from({ length: rangeEnd - rangeStart + 1 }, (_, i) => rangeStart + i)
  const totalOps = rangeNumbers.length * 10
  const tripleSum = rangeStart * 3
  const evenNumbers = rangeNumbers.filter((n) => n % 2 === 0)
  const evenNumbersList = evenNumbers.join(', ')

  const fill = (template: string, extra: Record<string, string | number> = {}) =>
    fillTemplate(template, { rangeStart, rangeEnd, totalOps, tripleSum, evenNumbersList, ...extra })

  const rangeTableTitle = `${fill(t.rangeTableHeading)} - ${t.rangeTableSuffix}`

  // Print function — popup window with a simple printable table.
  // NOTE: the print stylesheet/HTML below must always use the literal CSS/HTML
  // keyword `body`, never a translated word (this was a bug in the old uk source).
  const handlePrint = () => {
    const printWindow = window.open('', '_blank')
    if (!printWindow) return

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>${fill(t.rangeTableHeading)}</title>
        <style>
          @media print {
            @page { margin: 1cm; }
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            padding: 20px;
            max-width: 1200px;
            margin: 0 auto;
          }
          h1 {
            text-align: center;
            color: #1e293b;
            margin-bottom: 30px;
            font-size: 28px;
          }
          .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-top: 20px;
          }
          .table-box {
            border: 2px solid #3b82f6;
            border-radius: 12px;
            padding: 15px;
            background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
          }
          .table-title {
            font-size: 18px;
            font-weight: bold;
            text-align: center;
            margin-bottom: 12px;
            color: #1e40af;
          }
          .equation {
            display: flex;
            justify-content: space-between;
            padding: 6px 10px;
            margin: 4px 0;
            background: white;
            border-radius: 6px;
            font-size: 14px;
          }
          .equation-left {
            color: #475569;
          }
          .equation-right {
            font-weight: 600;
            color: #1e293b;
          }
        </style>
      </head>
      <body>
        <h1>${rangeTableTitle}</h1>
        <div class="grid">
          ${rangeNumbers
            .map(
              (num) => `
            <div class="table-box">
              <div class="table-title">${fill(t.numberTableTitle, { n: num })}</div>
              ${[...Array(10)]
                .map(
                  (_, i) => `
                <div class="equation">
                  <span class="equation-left">${num} × ${i + 1}</span>
                  <span class="equation-right">= ${num * (i + 1)}</span>
                </div>
              `
                )
                .join('')}
            </div>
          `
            )
            .join('')}
        </div>
      </body>
      </html>
    `)
    printWindow.document.close()
    setTimeout(() => {
      printWindow.print()
    }, 250)
  }

  return (
    <>
      <UniversalHeader lang={lang} />
      <main className="min-h-screen bg-gray-50">
        {/* Hero / Range Introduction */}
        <section className={`relative overflow-hidden bg-gradient-to-br ${difficultyColor} pt-20 pb-16 md:pt-24 md:pb-20`}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {rangeNumbers.slice(0, 5).map((num, index) => (
              <div
                key={num}
                className={`absolute text-7xl md:text-8xl font-bold opacity-10 animate-float${index % 2 === 0 ? '' : '-delayed'}`}
                style={{
                  top: `${10 + index * 15}%`,
                  left: index % 2 === 0 ? `${10 + index * 10}%` : 'auto',
                  right: index % 2 !== 0 ? `${5 + index * 8}%` : 'auto',
                }}
              >
                {num}
              </div>
            ))}

            <div className="absolute top-20 right-[30%] w-32 h-32 bg-yellow-300/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-32 left-[20%] w-40 h-40 bg-pink-300/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-[45%] w-28 h-28 bg-green-300/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-[15%] w-36 h-36 bg-purple-300/20 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-5xl mx-auto px-4 relative z-10">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border-2 border-white/50">
                <span className="text-3xl">
                  {difficultyLevel === 'beginner' ? '🌟' : difficultyLevel === 'intermediate' ? '🚀' : '⭐'}
                </span>
                <span className="text-base font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {fill(t.difficultyBadgeLabel, { label: t.difficultyLabels[difficultyLevel] })}
                </span>
                {difficultyLevel === 'beginner' && <span className="text-2xl">✨</span>}
                {difficultyLevel === 'intermediate' && <span className="text-2xl">💪</span>}
                {difficultyLevel === 'advanced' && <span className="text-2xl">🏆</span>}
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-5xl md:text-6xl animate-bounce">🎯</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    {rangeStart} - {rangeEnd}
                  </span>
                  <br />
                  <span className="text-slate-900">{t.heroTitleSuffix}</span>
                </h1>
                <span className="text-5xl md:text-6xl animate-bounce" style={{ animationDelay: '0.2s' }}>🎨</span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto mt-8 mb-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-md border-2 border-blue-100">
                  <div className="text-3xl mb-1">📚</div>
                  <div className="text-2xl font-bold text-blue-600">{rangeNumbers.length}</div>
                  <div className="text-xs text-slate-600">{t.statNumbersLabel}</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-md border-2 border-indigo-100">
                  <div className="text-3xl mb-1">✖️</div>
                  <div className="text-2xl font-bold text-indigo-600">{totalOps}</div>
                  <div className="text-xs text-slate-600">{t.statOperationsLabel}</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-md border-2 border-purple-100 col-span-2 md:col-span-1">
                  <div className="text-3xl mb-1">🎮</div>
                  <div className="text-2xl font-bold text-purple-600">{t.statPracticeValue}</div>
                  <div className="text-xs text-slate-600">{t.statPracticeLabel}</div>
                </div>
              </div>
            </div>

            <div className="max-w-3xl mx-auto space-y-4 text-center">
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed">{fill(t.heroDescription)}</p>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                <a
                  href="#practice"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                >
                  <span className="text-xl">🎯</span>
                  <span>{t.ctaPractice}</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="#games"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm text-indigo-600 font-bold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border-2 border-indigo-100"
                >
                  <span className="text-xl">🎮</span>
                  <span>{t.ctaGames}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Context */}
        <section className="section-container bg-white py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 flex items-center justify-center gap-3">
                <span className="text-3xl">📖</span>
                {fill(t.learningContextHeading)}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full"></div>
            </div>

            <p className="text-base text-slate-700 mb-6 leading-relaxed text-center max-w-2xl mx-auto">
              {fill(t.learningContextIntro)}
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-100 shadow-md">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
                {rangeNumbers.map((num, index) => (
                  <div key={num} className="flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow group">
                    <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold text-xl shadow-md group-hover:scale-110 transition-transform">
                      {num}
                    </span>
                    <span className="text-lg mt-1">{index % 4 === 0 ? '⭐' : index % 4 === 1 ? '🌟' : index % 4 === 2 ? '✨' : '💫'}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white/60 rounded-xl p-4 flex items-center gap-3">
                <span className="text-3xl">💡</span>
                <p className="text-sm text-slate-700 leading-relaxed">{fill(t.learningContextCallout)}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Area */}
        <PracticePreview rangeStart={rangeStart} rangeEnd={rangeEnd} />

        {/* Games Section */}
        <GamesSection rangeStart={rangeStart} rangeEnd={rangeEnd} />

        {/* Printable Worksheets */}
        <PrintableExercises rangeStart={rangeStart} rangeEnd={rangeEnd} />

        {/* Range Table */}
        <section className="section-container bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-slate-900">{rangeTableTitle}</h2>
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg"
                title={t.printButtonTitle}
                aria-label={fill(t.printButtonAriaLabel)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t.printButtonLabel}
              </button>
            </div>

            <p className="text-center text-slate-700 mb-8 max-w-3xl mx-auto">{fill(t.rangeTableIntro)}</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {rangeNumbers.map((num, index) => {
                const colorIndex = index % colors.length
                return (
                  <div key={num} className={`bg-gradient-to-br ${colors[colorIndex]} rounded-xl p-4 text-white`}>
                    <div className="font-bold text-lg mb-3 text-center">{fill(t.numberTableTitle, { n: num })}</div>
                    <div className="space-y-1 text-sm">
                      {[...Array(10)].map((_, i) => (
                        <div key={i} className="flex justify-between items-center bg-white/20 rounded px-2 py-1">
                          <span>{num} × {i + 1}</span>
                          <span className="font-semibold">= {num * (i + 1)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Links to Number Pages */}
        <section className="section-container bg-gradient-to-br from-slate-50 to-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">{t.linksHeading}</h2>

            <p className="text-lg text-slate-700 mb-8 leading-relaxed">{t.linksIntro}</p>

            <div className="grid md:grid-cols-2 gap-4">
              {rangeNumbers.map((num) => (
                <Link
                  key={num}
                  href={getLocalizedPath(lang, String(num))}
                  className="block bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-slate-900 mb-1">{fill(t.linkCardTitle, { n: num })}</div>
                      <p className="text-slate-600">{fill(t.linkCardDescription, { n: num })}</p>
                    </div>
                    <svg className="w-6 h-6 text-blue-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Difficulty & Progression */}
        <section className="section-container bg-gradient-to-br from-slate-50 to-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">{t.progressionHeading}</h2>

            <div className="space-y-6">
              <div
                className={`bg-white rounded-xl p-6 border-l-4 ${
                  difficultyLevel === 'beginner' ? 'border-green-500' : difficultyLevel === 'intermediate' ? 'border-yellow-500' : 'border-red-500'
                }`}
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  🎯 {t.difficultyLabels[difficultyLevel]}
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  {t.difficultyDescriptions[difficultyLevel]}{' '}
                  {rangeStart === 1 ? t.progressionFirstRangeNote : t.progressionLaterRangeNote}
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">🧠 {t.cognitiveHeading}</h3>
                <p className="text-slate-700 leading-relaxed">{t.cognitiveBody}</p>
              </div>

              {nextRangeUrl && (
                <div className="bg-white rounded-xl p-6 border-l-4 border-purple-500">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">📈 {t.nextStepHeading}</h3>
                  <p className="text-slate-700 leading-relaxed">{t.nextStepBody}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Patterns & Observations */}
        <section className="section-container bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">{fill(t.patternsHeading)}</h2>

            <p className="text-lg text-slate-700 mb-8 leading-relaxed">{t.patternsIntro}</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                  <span className="text-2xl mr-2">🔄</span>
                  {t.commutativeCardTitle}
                </h3>
                <p className="text-slate-700 mb-3">{fill(t.commutativeCardBody)}</p>
                <p className="text-sm text-slate-600 italic">{t.commutativeCardExample}</p>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                  <span className="text-2xl mr-2">➕</span>
                  {t.additionCardTitle}
                </h3>
                <p className="text-slate-700 mb-3">{fill(t.additionCardBody)}</p>
                <p className="text-sm text-slate-600 italic">{t.additionCardExample}</p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                  <span className="text-2xl mr-2">✖️</span>
                  {t.evenCardTitle}
                </h3>
                <p className="text-slate-700 mb-3">
                  {evenNumbers.length > 0 ? fill(t.evenCardBodyWithEvens) : t.evenCardBodyNoEvens}
                </p>
                <p className="text-sm text-slate-600 italic">{t.evenCardExample}</p>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                  <span className="text-2xl mr-2">🔢</span>
                  {t.lastDigitCardTitle}
                </h3>
                <p className="text-slate-700 mb-3">{t.lastDigitCardBody}</p>
                <p className="text-sm text-slate-600 italic">{t.lastDigitCardExample}</p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Study This Range */}
        <section className="section-container bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">{fill(t.studyHeading)}</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">{t.studyStep1Title}</h3>
                <p className="text-lg text-slate-700 mb-4 leading-relaxed">{t.studyStep1Body}</p>
                <div className="bg-white rounded-lg p-4 border-l-4 border-blue-600">
                  <p className="text-slate-700">
                    <strong>{t.studyStep1TipLabel}</strong> {t.studyStep1TipBody}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">{t.studyStep2Title}</h3>
                <p className="text-lg text-slate-700 mb-4 leading-relaxed">{t.studyStep2Body}</p>
                <ul className="space-y-3">
                  <li className="flex items-start text-slate-700">
                    <span className="text-blue-600 font-bold mr-3 mt-1">•</span>
                    <div>
                      <strong>{t.studyStep2Bullet1Label}</strong> {fill(t.studyStep2Bullet1Body)}
                    </div>
                  </li>
                  <li className="flex items-start text-slate-700">
                    <span className="text-blue-600 font-bold mr-3 mt-1">•</span>
                    <div>
                      <strong>{t.studyStep2Bullet2Label}</strong> {t.studyStep2Bullet2Body}
                    </div>
                  </li>
                  <li className="flex items-start text-slate-700">
                    <span className="text-blue-600 font-bold mr-3 mt-1">•</span>
                    <div>
                      <strong>{t.studyStep2Bullet3Label}</strong> {t.studyStep2Bullet3Body}
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">{t.studyStep3Title}</h3>
                <p className="text-lg text-slate-700 mb-4 leading-relaxed">{t.studyStep3Body}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-5 border border-gray-200">
                    <p className="font-semibold text-slate-900 mb-2">{t.studyStep3Card1Title}</p>
                    <p className="text-slate-700 text-sm">{t.studyStep3Card1Body}</p>
                  </div>
                  <div className="bg-white rounded-lg p-5 border border-gray-200">
                    <p className="font-semibold text-slate-900 mb-2">{t.studyStep3Card2Title}</p>
                    <p className="text-slate-700 text-sm">{t.studyStep3Card2Body}</p>
                  </div>
                  <div className="bg-white rounded-lg p-5 border border-gray-200">
                    <p className="font-semibold text-slate-900 mb-2">{t.studyStep3Card3Title}</p>
                    <p className="text-slate-700 text-sm">{t.studyStep3Card3Body}</p>
                  </div>
                  <div className="bg-white rounded-lg p-5 border border-gray-200">
                    <p className="font-semibold text-slate-900 mb-2">{t.studyStep3Card4Title}</p>
                    <p className="text-slate-700 text-sm">{t.studyStep3Card4Body}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation: Previous & Next Range */}
        <section className="section-container bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              {nextRangeUrl ? t.navHeadingContinue : t.navHeadingComplete}
            </h2>

            {nextRangeUrl ? (
              <>
                <p className="text-xl mb-8 leading-relaxed opacity-95 text-center">{fill(t.navContinueText)}</p>

                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                  {prevRangeUrl && (
                    <Link
                      href={prevRangeUrl}
                      className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                      </svg>
                      {t.navPrevLabel}
                    </Link>
                  )}

                  <Link
                    href={nextRangeUrl}
                    className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
                  >
                    {t.navNextLabel}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </>
            ) : (
              <p className="text-xl leading-relaxed opacity-95 text-center">{t.navCompleteText}</p>
            )}

            <p className="mt-6 text-sm opacity-80 text-center">{t.navFooterNote}</p>
          </div>
        </section>

        <UniversalFooter lang={lang} />
      </main>
    </>
  )
}
