'use client'

import Link from 'next/link'
import type { Locale } from '../../../lib/i18n-config'
import { guides } from '../../../lib/i18n-config'
import { getLocalizedPath } from '../../../lib/url-helpers'
import { studentsContent } from '../../../lib/guide-content-students'
import { parentsContent } from '../../../lib/guide-content-parents'
import UniversalHeader from './UniversalHeader'

// Sibling page sections (not yet unified — each locale still has its own real
// implementation of Footer). Same import block as UniversalRangePage.tsx / UniversalNumberPage.tsx.
import FooterTr from '../Footer'
import FooterEs from '../es/Footer'
import FooterDe from '../de/Footer'
import FooterCs from '../cs/Footer'
import FooterUk from '../uk/Footer'
import FooterFi from '../fi/Footer'
import FooterFr from '../fr/Footer'
import FooterSv from '../sv/Footer'
import FooterPt from '../pt/Footer'
import FooterEn from '../en/Footer'
import FooterPl from '../pl/Footer'
import FooterId from '../id/Footer'

const FooterByLocale: Record<Locale, React.ComponentType> = {
  tr: FooterTr,
  es: FooterEs,
  de: FooterDe,
  cs: FooterCs,
  uk: FooterUk,
  fi: FooterFi,
  fr: FooterFr,
  sv: FooterSv,
  pt: FooterPt,
  en: FooterEn,
  pl: FooterPl,
  id: FooterId,
}

interface UniversalStudentsParentsPageProps {
  lang: Locale
  type: 'students' | 'parents'
}

const colorConfig = {
  students: {
    heroBg: 'from-blue-600 to-indigo-600',
    pageBg: 'from-blue-50 to-indigo-50',
    ctaBg: 'from-blue-600 to-indigo-600',
  },
  parents: {
    heroBg: 'from-purple-600 to-pink-600',
    pageBg: 'from-purple-50 to-pink-50',
    ctaBg: 'from-purple-600 to-pink-600',
  },
}

// ============================================================================
// Fixed rotation palettes — these are identical constants across all 12 locales
// in the original source files, so they're hardcoded here rather than duplicated
// as data. Only PROSE varies by locale (stored in the content modules).
// ============================================================================

const whyLearnIconBg = ['bg-blue-100', 'bg-indigo-100', 'bg-purple-100', 'bg-pink-100']

const learningPathColors = [
  { border: 'border-green-500', dot: 'bg-green-500', box: 'bg-green-50', label: 'text-green-900' },
  { border: 'border-blue-500', dot: 'bg-blue-500', box: 'bg-blue-50', label: 'text-blue-900' },
  { border: 'border-yellow-500', dot: 'bg-yellow-500', box: 'bg-yellow-50', label: 'text-yellow-900' },
  { border: 'border-purple-500', dot: 'bg-purple-500', box: 'bg-purple-50', label: 'text-purple-900' },
]

const practiceTipIconBg = ['bg-blue-100', 'bg-green-100', 'bg-purple-100', 'bg-yellow-100']

const progressCardColors = [
  { bg: 'from-green-50 to-emerald-50', border: 'border-green-500', title: 'text-green-900' },
  { bg: 'from-blue-50 to-cyan-50', border: 'border-blue-500', title: 'text-blue-900' },
  { bg: 'from-purple-50 to-pink-50', border: 'border-purple-500', title: 'text-purple-900' },
]

const quickTrickColors = [
  { bg: 'bg-blue-50', title: 'text-blue-900' },
  { bg: 'bg-green-50', title: 'text-green-900' },
  { bg: 'bg-purple-50', title: 'text-purple-900' },
  { bg: 'bg-pink-50', title: 'text-pink-900' },
  { bg: 'bg-yellow-50', title: 'text-yellow-900' },
  { bg: 'bg-indigo-50', title: 'text-indigo-900' },
]

const whyItMattersColors = [
  { border: 'border-purple-500', bg: 'bg-purple-50', title: 'text-purple-900' },
  { border: 'border-blue-500', bg: 'bg-blue-50', title: 'text-blue-900' },
  { border: 'border-green-500', bg: 'bg-green-50', title: 'text-green-900' },
  { border: 'border-pink-500', bg: 'bg-pink-50', title: 'text-pink-900' },
]

const supportStrategyIconBg = ['bg-green-100', 'bg-blue-100', 'bg-purple-100', 'bg-pink-100', 'bg-yellow-100']

const funActivityCardBg = [
  'from-yellow-50 to-orange-50',
  'from-green-50 to-emerald-50',
  'from-blue-50 to-cyan-50',
  'from-pink-50 to-rose-50',
  'from-purple-50 to-indigo-50',
  'from-red-50 to-orange-50',
]

const challengeIconColors = ['text-purple-500', 'text-blue-500', 'text-green-500', 'text-yellow-500', 'text-pink-500', 'text-red-500']

export default function UniversalStudentsParentsPage({ lang, type }: UniversalStudentsParentsPageProps) {
  const Footer = FooterByLocale[lang]
  const colors = colorConfig[type]

  const topicHomeHref = getLocalizedPath(lang)
  const rangeHref = getLocalizedPath(lang, '1-10')

  return (
    <>
      <UniversalHeader lang={lang} />
      <main className={`min-h-screen bg-gradient-to-br ${colors.pageBg}`}>
        {/* Hero Section */}
        <div className={`bg-gradient-to-r ${colors.heroBg} text-white pt-20 pb-12 md:pt-24 md:pb-16`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              {type === 'students' ? (
                <StudentsHero lang={lang} />
              ) : (
                <ParentsHero lang={lang} />
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {type === 'students' ? (
            <StudentsSections lang={lang} rangeHref={rangeHref} topicHomeHref={topicHomeHref} />
          ) : (
            <ParentsSections lang={lang} />
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}

// ============================================================================
// STUDENTS
// ============================================================================

function StudentsHero({ lang }: { lang: Locale }) {
  const t = studentsContent[lang]
  return (
    <>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">{t.heroTitle}</h1>
      <p className="text-lg sm:text-xl text-blue-100 mb-6 md:mb-8">{t.heroSubtitle}</p>
      <div className="flex items-center gap-4">
        <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-blue-100">{t.heroCaption}</span>
      </div>
    </>
  )
}

function StudentsSections({ lang, rangeHref, topicHomeHref }: { lang: Locale; rangeHref: string; topicHomeHref: string }) {
  const t = studentsContent[lang]

  return (
    <>
      {/* Why Learn */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">{t.whyLearnHeading}</h2>
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
          <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">{t.whyLearnIntro}</p>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {t.whyLearnCards.map((card, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-12 h-12 ${whyLearnIconBg[i % whyLearnIconBg.length]} rounded-full flex items-center justify-center text-2xl`}>
                  {card.emoji}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{card.title}</h3>
                  <p className="text-slate-700">{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">{t.learningPathHeading}</h2>
        <div className="space-y-4">
          {t.learningPathSteps.map((step, i) => {
            const c = learningPathColors[i % learningPathColors.length]
            return (
              <div key={i} className={`bg-white rounded-lg shadow-md p-4 sm:p-6 border-l-4 ${c.border}`}>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className={`flex-shrink-0 w-10 h-10 ${c.dot} rounded-full flex items-center justify-center text-white font-bold`}>{i + 1}</div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-700 mb-3">{step.body}</p>
                    <div className={`${c.box} p-4 rounded-lg`}>
                      <p className={`font-semibold ${c.label} mb-2`}>{step.boxLabel}</p>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        {step.bullets.map((bullet, bi) => (
                          <li key={bi}>• {bullet}</li>
                        ))}
                      </ul>
                    </div>
                    {step.linkLabel && (
                      <div className="mt-3">
                        <Link href={rangeHref} className="text-green-600 hover:text-green-700 font-medium inline-flex items-center">
                          {step.linkLabel}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Visual Learning */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">{t.visualLearningHeading}</h2>
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
          <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">{t.visualLearningIntro}</p>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {/* Arrays */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t.arraysTitle}</h3>
              <p className="text-slate-700 mb-4 text-sm">{t.arraysExample}</p>
              <div className="bg-white p-4 rounded inline-block">
                <div className="grid grid-cols-4 gap-2">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-8 h-8 bg-blue-400 rounded"></div>
                  ))}
                </div>
                <p className="text-center mt-2 text-sm text-slate-600">{t.arraysCaption}</p>
              </div>
            </div>

            {/* Number Line */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t.numberLineTitle}</h3>
              <p className="text-slate-700 mb-4 text-sm">{t.numberLineExample}</p>
              <div className="bg-white p-4 rounded">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-green-700">0</span>
                  <span className="text-green-500">→</span>
                  <span className="text-sm font-bold text-green-700">4</span>
                  <span className="text-green-500">→</span>
                  <span className="text-sm font-bold text-green-700">8</span>
                  <span className="text-green-500">→</span>
                  <span className="text-sm font-bold text-green-700">12</span>
                </div>
                <p className="text-center mt-2 text-xs text-slate-600">{t.numberLineCaption}</p>
              </div>
            </div>

            {/* Skip Counting */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t.skipCountingTitle}</h3>
              <p className="text-slate-700 mb-3 text-sm">{t.skipCountingExample}</p>
              <div className="bg-white p-3 rounded text-center">
                <p className="text-purple-700 font-bold text-lg">5 - 10 - 15 - 20 - 25</p>
                <p className="text-xs text-slate-600 mt-2">{t.skipCountingTip}</p>
              </div>
            </div>

            {/* Patterns */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{t.patternsTitle}</h3>
              <p className="text-slate-700 mb-3 text-sm">{t.patternsIntro}</p>
              <div className="bg-white p-3 rounded">
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>
                    9×1=<strong className="text-pink-600">09</strong> (0+9=9)
                  </li>
                  <li>
                    9×2=<strong className="text-pink-600">18</strong> (1+8=9)
                  </li>
                  <li>
                    9×3=<strong className="text-pink-600">27</strong> (2+7=9)
                  </li>
                  <li>
                    9×4=<strong className="text-pink-600">36</strong> (3+6=9)
                  </li>
                  <li className="text-xs italic">{t.patternsNote}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Tips */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">{t.practiceTipsHeading}</h2>
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
          {t.practiceTipsCards.map((card, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-4 sm:p-6">
              <div className={`w-12 h-12 ${practiceTipIconBg[i % practiceTipIconBg.length]} rounded-full flex items-center justify-center mb-4 text-2xl`}>
                {card.emoji}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{card.title}</h3>
              <p className="text-slate-700 mb-3">{card.body}</p>
              {card.linkLabel && (
                <Link href={topicHomeHref} className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center text-sm">
                  {card.linkLabel}
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Progress Tracking */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">{t.progressHeading}</h2>
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
          <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">{t.progressIntro}</p>
          <div className="space-y-4">
            {t.progressCards.map((card, i) => {
              const c = progressCardColors[i % progressCardColors.length]
              return (
                <div key={i} className={`bg-gradient-to-r ${c.bg} p-6 rounded-lg border-l-4 ${c.border}`}>
                  <h3 className={`text-lg font-semibold ${c.title} mb-2`}>{card.title}</h3>
                  <p className="text-slate-700 text-sm">{card.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Motivation */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">{t.motivationHeading}</h2>
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg shadow-md p-4 sm:p-6 md:p-8">
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            <div className="space-y-4">
              {t.motivationColumn1.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-2xl">{item.emoji}</span>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-700 text-sm">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {t.motivationColumn2.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-2xl">{item.emoji}</span>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-700 text-sm">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">{t.quickTricksHeading}</h2>
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {t.quickTricksCards.map((card, i) => {
              const c = quickTrickColors[i % quickTrickColors.length]
              return (
                <div key={i} className={`${c.bg} p-4 rounded-lg`}>
                  <h4 className={`font-bold ${c.title} mb-2`}>{card.title}</h4>
                  <p className="text-sm text-slate-700">{card.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-6 sm:p-8 text-white text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">{t.ctaHeading}</h2>
        <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">{t.ctaBody}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={rangeHref}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
          >
            <span className="mr-2">🎯</span>
            {t.ctaButton1Label}
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link
            href={topicHomeHref}
            className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-flex items-center justify-center"
          >
            {t.ctaButton2Label}
          </Link>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-400">
          <p className="text-blue-100 text-sm">
            💡 <strong>{t.ctaTipLabel}</strong> {t.ctaTipBody}
          </p>
        </div>
      </section>
    </>
  )
}

// ============================================================================
// PARENTS
// ============================================================================

function ParentsHero({ lang }: { lang: Locale }) {
  const t = parentsContent[lang]
  return (
    <>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">{t.heroTitle}</h1>
      <p className="text-lg sm:text-xl text-purple-100 mb-6 md:mb-8">{t.heroSubtitle}</p>
      <div className="flex items-center gap-4">
        <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>
        <span className="text-purple-100">{t.heroCaption}</span>
      </div>
    </>
  )
}

function ParentsSections({ lang }: { lang: Locale }) {
  const t = parentsContent[lang]
  const topicHomeHref = getLocalizedPath(lang)
  const rangeHref = getLocalizedPath(lang, '1-10')
  const studentsGuideHref = getLocalizedPath(lang, guides[lang].students)
  const ctaButton2Href = t.ctaButton2Target === 'topicHome' ? topicHomeHref : studentsGuideHref

  return (
    <>
      {/* Why It Matters */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">{t.whyItMattersHeading}</h2>
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
          <p className="text-base sm:text-lg text-slate-700 mb-4">{t.whyItMattersIntro}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
            {t.whyItMattersCards.map((card, i) => {
              const c = whyItMattersColors[i % whyItMattersColors.length]
              return (
                <div key={i} className={`${c.bg} p-6 rounded-lg border-l-4 ${c.border}`}>
                  <h3 className={`text-lg font-semibold ${c.title} mb-2`}>
                    {card.emoji ? `${card.emoji} ` : ''}
                    {card.title}
                  </h3>
                  <p className="text-slate-700 text-sm">{card.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Support Strategies */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">{t.supportHeading}</h2>
        <div className="space-y-6">
          {t.supportStrategies.map((block, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4">
                {block.emoji && (
                  <div className={`flex-shrink-0 w-12 h-12 ${supportStrategyIconBg[i % supportStrategyIconBg.length]} rounded-full flex items-center justify-center text-2xl`}>
                    {block.emoji}
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{block.title}</h3>
                  {block.body && <p className="text-slate-700 mb-3">{block.body}</p>}
                  <ParentBlockExtras block={block} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fun Activities */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">{t.funActivitiesHeading}</h2>
        {t.funActivitiesIntro && <p className="text-slate-700 mb-6">{t.funActivitiesIntro}</p>}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
          {t.funActivitiesCards.map((card, i) => (
            <div key={i} className={`bg-gradient-to-br ${funActivityCardBg[i % funActivityCardBg.length]} rounded-lg shadow-md p-4 sm:p-6`}>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-4">
                {card.emoji ? `${card.emoji} ` : ''}
                {card.title}
              </h3>
              {card.body && !card.subcards && <p className="text-slate-700 mb-3 text-sm">{card.body}</p>}
              {card.subcards && (
                <div className="space-y-3 text-slate-700 text-sm">
                  {card.subcards.map((sc, si) => (
                    <div key={si} className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-900 mb-2">{sc.title}</h4>
                      <p className="text-slate-600">{sc.body}</p>
                    </div>
                  ))}
                </div>
              )}
              {card.bullets && (
                <ul className="space-y-2 text-slate-700 text-sm">
                  {card.bullets.map((b, bi) => (
                    <li key={bi}>• {b}</li>
                  ))}
                </ul>
              )}
              {card.meta && (
                <div className="bg-white/70 p-3 rounded text-sm text-slate-700 mt-3">{card.meta}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Common Challenges */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">{t.challengesHeading}</h2>
        {t.challengesIntro && <p className="text-base sm:text-lg text-slate-700 mb-6">{t.challengesIntro}</p>}
        <div className="space-y-4">
          {t.challenges.map((item, i) => (
            <details key={i} className="bg-white rounded-lg shadow-md p-6 cursor-pointer group">
              <summary className="font-semibold text-slate-900 text-lg flex items-center justify-between gap-3">
                <span className="flex items-center gap-3">
                  <span className={challengeIconColors[i % challengeIconColors.length]}>❓</span>
                  {item.question}
                </span>
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-slate-700 space-y-2 text-sm">
                {item.paragraphs && item.paragraphs.length > 0 && (
                  <p>
                    <strong>{item.solutionLabel}</strong> {item.paragraphs[0]}
                  </p>
                )}
                {item.paragraphs &&
                  item.paragraphs.slice(1).map((p, pi) => <p key={pi}>{p}</p>)}
                {item.bullets && (
                  <>
                    <p>
                      <strong>{item.solutionLabel}</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      {item.bullets.map((b, bi) => (
                        <li key={bi}>{b}</li>
                      ))}
                    </ul>
                  </>
                )}
                {item.tip && <p className="italic">{item.tip}</p>}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Motivation Tips */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">{t.motivationHeading}</h2>
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg shadow-md p-6 md:p-8">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-purple-900 mb-4">{t.motivationDoHeading}</h3>
              <ul className="space-y-3 text-slate-700 text-sm">
                {t.motivationDoItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-pink-900 mb-4">{t.motivationAvoidHeading}</h3>
              <ul className="space-y-3 text-slate-700 text-sm">
                {t.motivationAvoidItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Plan (optional — tr, sv, id only) */}
      {t.weeklyPlan && (
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">{t.weeklyPlan.heading}</h2>
          {t.weeklyPlan.format === 'table' && t.weeklyPlan.tableRows && (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-200">
                    {t.weeklyPlan.tableRows.map((row, i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="px-3 sm:px-6 py-3 sm:py-4 font-semibold text-slate-900 text-sm sm:text-base">{row.day}</td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-slate-700 text-sm sm:text-base">{row.activity}</td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-slate-600 text-sm sm:text-base whitespace-nowrap">{row.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {t.weeklyPlan.format === 'blocks' && t.weeklyPlan.blocks && (
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 space-y-4">
              {t.weeklyPlan.blocks.map((block, i) => (
                <div key={i} className="border-l-4 border-blue-500 pl-6 py-3 bg-blue-50 rounded-r-lg">
                  <h4 className="font-bold text-lg text-blue-900 mb-2">{block.title}</h4>
                  <p className="text-slate-700 text-sm">{block.body}</p>
                </div>
              ))}
            </div>
          )}
          {t.weeklyPlan.note && (
            <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
              <p className="text-sm text-yellow-800">{t.weeklyPlan.note}</p>
            </div>
          )}
        </section>
      )}

      {/* Progress Tracking (optional — tr, sv, fr only) */}
      {t.progressTracking && (
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">{t.progressTracking.heading}</h2>
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
            <div className="space-y-6">
              {t.progressTracking.items.map((item, i) => (
                <div key={i}>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-700 mb-3">{item.body}</p>
                  {item.tip && (
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="text-sm text-slate-600">{item.tip}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* When to Seek Help (optional — id only) */}
      {t.whenToSeekHelp && (
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">{t.whenToSeekHelp.heading}</h2>
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <p className="text-slate-700 mb-6">{t.whenToSeekHelp.intro}</p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                {t.whenToSeekHelp.signsColumn1.map((sign, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{sign.icon}</span>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{sign.title}</h4>
                      <p className="text-slate-700 text-sm">{sign.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {t.whenToSeekHelp.signsColumn2.map((sign, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{sign.icon}</span>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{sign.title}</h4>
                      <p className="text-slate-700 text-sm">{sign.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <p className="text-slate-700 text-sm">
                <strong>{t.whenToSeekHelp.resourceLabel}</strong> {t.whenToSeekHelp.resourceBody}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-lg p-6 sm:p-8 text-white text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">{t.ctaHeading}</h2>
        <p className="text-base sm:text-lg text-purple-100 mb-6 sm:mb-8 max-w-2xl mx-auto">{t.ctaBody}</p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            href={rangeHref}
            className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center justify-center"
          >
            <span className="mr-2">🎯</span>
            {t.ctaButton1Label}
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link
            href={ctaButton2Href}
            className="bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors inline-flex items-center justify-center"
          >
            {t.ctaButton2Label}
          </Link>
        </div>
        {t.ctaTipLabel && t.ctaTipBody && (
          <div className="mt-8 pt-8 border-t border-purple-400">
            <p className="text-purple-100 text-sm">
              💡 <strong>{t.ctaTipLabel}</strong> {t.ctaTipBody}
            </p>
          </div>
        )}
      </section>
    </>
  )
}

/** Renders whichever optional extra fields are present on a ParentBlock: bullets,
 *  a labeled+colored box of bullets, subgroups (two mini-lists), or subcards. */
function ParentBlockExtras({
  block,
}: {
  block: {
    boxLabel?: string
    bullets?: string[]
    subgroups?: { title: string; items: string[] }[]
    subcards?: { title: string; body: string }[]
  }
}) {
  if (block.boxLabel && block.bullets) {
    return (
      <div className="bg-pink-50 p-4 rounded-lg mb-4">
        <p className="text-slate-700 font-medium mb-2">{block.boxLabel}</p>
        <ul className="space-y-2 text-slate-600">
          {block.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    )
  }

  if (block.bullets) {
    return (
      <ul className="space-y-2 text-slate-700 text-sm">
        {block.bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✓</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    )
  }

  if (block.subgroups) {
    return (
      <div className="grid md:grid-cols-2 gap-4">
        {block.subgroups.map((group, i) => (
          <div key={i} className="bg-indigo-50 p-4 rounded-lg">
            <h4 className="font-semibold text-indigo-900 mb-2">{group.title}</h4>
            <ul className="space-y-1 text-slate-600">
              {group.items.map((item, ii) => (
                <li key={ii}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    )
  }

  if (block.subcards) {
    return (
      <div className="space-y-3">
        {block.subcards.map((sc, i) => (
          <div key={i} className="bg-emerald-50 p-4 rounded-lg">
            <h4 className="font-semibold text-emerald-900 mb-2">{sc.title}</h4>
            <p className="text-slate-600">{sc.body}</p>
          </div>
        ))}
      </div>
    )
  }

  return null
}
