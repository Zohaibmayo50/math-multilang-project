'use client'

import Link from 'next/link'
import type { Locale } from '../../../lib/i18n-config'
import { teachersContent } from '../../../lib/guide-content-teachers'
import type {
  ActivityCard,
  DifferentiatedLevel,
  MisconceptionItem,
  SplitMethodItem,
  TeachingStrategiesSplit,
} from '../../../lib/guide-content-teachers'
import UniversalHeader from './UniversalHeader'

// Sibling page sections (not yet unified — each locale still has its own real
// implementation of Footer). Same import block as UniversalStudentsParentsPage.tsx.
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

interface UniversalTeachersPageProps {
  lang: Locale
}

// ============================================================================
// Fixed rotation palettes — decorative constants that don't carry locale-specific
// content, hardcoded here rather than duplicated as data (same convention as
// UniversalStudentsParentsPage.tsx).
// ============================================================================

const strategyIconBg = ['bg-blue-100', 'bg-green-100', 'bg-purple-100', 'bg-orange-100']
const strategyBulletColor = ['text-blue-500', 'text-green-500', 'text-purple-500', 'text-orange-500']

const activityCardBg = ['bg-blue-50', 'bg-green-50', 'bg-purple-50', 'bg-pink-50', 'bg-orange-50', 'bg-yellow-50']
const activityNumberBg = [
  'from-emerald-500 to-teal-500',
  'from-teal-500 to-cyan-500',
  'from-cyan-500 to-blue-500',
  'from-blue-500 to-indigo-500',
  'from-indigo-500 to-purple-500',
  'from-purple-500 to-pink-500',
]

const differentiatedBg = [
  { box: 'from-green-50 to-green-100', title: 'text-slate-900' },
  { box: 'from-blue-50 to-blue-100', title: 'text-slate-900' },
  { box: 'from-purple-50 to-purple-100', title: 'text-slate-900' },
]
const differentiatedCheck = ['text-green-600', 'text-blue-600', 'text-purple-600']

const assessmentItemBorder = ['border-blue-500', 'border-green-500', 'border-purple-500', 'border-orange-500']

const misconceptionAccentColors = ['text-blue-500', 'text-green-500', 'text-purple-500', 'text-orange-500', 'text-pink-500']

export default function UniversalTeachersPage({ lang }: UniversalTeachersPageProps) {
  const Footer = FooterByLocale[lang]
  const t = teachersContent[lang]

  return (
    <>
      <UniversalHeader lang={lang} />
      <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
        {/* Hero */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white pt-20 pb-12 md:pt-24 md:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">{t.hero.title}</h1>
              <p className="text-lg sm:text-xl text-indigo-100 mb-6 md:mb-8">{t.hero.subtitle}</p>
              {t.hero.caption && (
                <div className="flex items-center gap-4">
                  <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                  <span className="text-indigo-100">{t.hero.caption}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Teaching Strategies — single OR split heading, mutually exclusive */}
          {t.teachingStrategiesSplit ? (
            <TeachingStrategiesSplitSection split={t.teachingStrategiesSplit} />
          ) : (
            t.teachingStrategies && (
              <section className="mb-12 md:mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">{t.teachingStrategiesHeading}</h2>
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  {t.teachingStrategies.map((s, i) => (
                    <div key={i} className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 ${strategyIconBg[i % strategyIconBg.length]} rounded-lg flex items-center justify-center text-2xl`}>{s.emoji}</div>
                        <h3 className="text-xl font-bold text-slate-900">{s.title}</h3>
                      </div>
                      <p className="text-slate-700 mb-4">{s.body}</p>
                      <ul className="space-y-2 text-slate-700">
                        {s.bullets.map((b, bi) => (
                          <li key={bi} className="flex items-start">
                            <span className={`${strategyBulletColor[i % strategyBulletColor.length]} mr-2`}>•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            )
          )}

          {/* Classroom Activities */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">{t.classroomActivities.heading}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {t.classroomActivities.cards.map((card, i) => (
                <ActivityCardView key={i} card={card} index={i} levelLabel={t.classroomActivities.levelLabel} timeLabel={t.classroomActivities.timeLabel} />
              ))}
            </div>
          </section>

          {/* Differentiated Instruction */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">{t.differentiatedInstruction.heading}</h2>
            {t.differentiatedInstruction.intro && <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">{t.differentiatedInstruction.intro}</p>}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {t.differentiatedInstruction.levels.map((level, i) => (
                <DifferentiatedLevelView key={i} level={level} index={i} />
              ))}
            </div>
          </section>

          {/* Assessment Strategies */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">{t.assessment.heading}</h2>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{t.assessment.formativeHeading}</h3>
                {t.assessment.formativeIntro && <p className="text-slate-700 mb-4">{t.assessment.formativeIntro}</p>}
                {t.assessment.formativeBody && <p className="text-slate-700">{t.assessment.formativeBody}</p>}
                {t.assessment.formativeItems && (
                  <div className="space-y-4">
                    {t.assessment.formativeItems.map((item, i) => (
                      <div key={i} className={`border-l-4 ${assessmentItemBorder[i % assessmentItemBorder.length]} pl-4`}>
                        <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                        <p className="text-slate-700 text-sm">{item.body}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{t.assessment.summativeHeading}</h3>
                {t.assessment.summativeIntro && <p className="text-slate-700 mb-4">{t.assessment.summativeIntro}</p>}
                {t.assessment.summativeBody && <p className="text-slate-700">{t.assessment.summativeBody}</p>}
                {t.assessment.summativeItems && (
                  <div className="space-y-4">
                    {t.assessment.summativeItems.map((item, i) => (
                      <div key={i} className={`border-l-4 ${assessmentItemBorder[i % assessmentItemBorder.length]} pl-4`}>
                        <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                        <p className="text-slate-700 text-sm">{item.body}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {t.assessment.progressTracking && (
              <div className="mt-6 md:mt-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-md p-4 sm:p-6 md:p-8 text-white">
                <h3 className="text-xl font-bold mb-4">{t.assessment.progressTracking.heading}</h3>
                {t.assessment.progressTracking.intro && <p className="mb-4">{t.assessment.progressTracking.intro}</p>}
                {t.assessment.progressTracking.body && <p>{t.assessment.progressTracking.body}</p>}
                {t.assessment.progressTracking.items && (
                  <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                    {t.assessment.progressTracking.items.map((item, i) => (
                      <div key={i} className="bg-white/20 rounded-lg p-4">
                        <h4 className="font-bold mb-2">{item.title}</h4>
                        <p className="text-sm">{item.body}</p>
                      </div>
                    ))}
                  </div>
                )}
                {t.assessment.progressTracking.bullets && (
                  <ul className="space-y-2 mt-2">
                    {t.assessment.progressTracking.bullets.map((b, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </section>

          {/* Common Misconceptions (optional) */}
          {t.commonMisconceptions && (
            <section className="mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">{t.commonMisconceptions.heading}</h2>
              {t.commonMisconceptions.intro && <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">{t.commonMisconceptions.intro}</p>}
              <div className="space-y-4">
                {t.commonMisconceptions.items.map((item, i) => (
                  <MisconceptionView key={i} item={item} index={i} />
                ))}
              </div>
            </section>
          )}

          {/* Common Challenges accordion (id only) */}
          {t.commonChallengesAccordion && (
            <section className="mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">{t.commonChallengesAccordion.heading}</h2>
              <div className="space-y-4">
                {t.commonChallengesAccordion.items.map((item, i) => (
                  <details key={i} className="bg-white rounded-lg shadow-md p-6 cursor-pointer group">
                    <summary className="font-semibold text-slate-900 text-lg flex items-center justify-between gap-3">
                      <span className="flex items-center gap-3">
                        <span className="text-xl">❓</span>
                        {item.question}
                      </span>
                      <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="mt-4 text-slate-700 space-y-2 text-sm">
                      <p>
                        <strong>{item.solutionLabel}</strong> {item.solutionBody}
                      </p>
                      {item.extraBody && <p>{item.extraBody}</p>}
                      {item.tip && <p className="italic text-slate-600">{item.tip}</p>}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* Tips and Best Practices (optional) */}
          {t.tipsAndBestPractices && (
            <section className="mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">{t.tipsAndBestPractices.heading}</h2>
              {t.tipsAndBestPractices.singleColumnItems ? (
                <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8 space-y-6">
                  {t.tipsAndBestPractices.singleColumnItems.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="text-2xl">{item.emoji}</span>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h3>
                        <p className="text-slate-700 text-sm">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">{t.tipsAndBestPractices.successHeading}</h3>
                    <ul className="space-y-3 text-slate-700">
                      {t.tipsAndBestPractices.successTips?.map((tip, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-orange-500 mr-2">✦</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">{t.tipsAndBestPractices.sequenceHeading}</h3>
                    <div className="space-y-3">
                      {t.tipsAndBestPractices.sequenceSteps?.map((step) => (
                        <div key={step.number} className="flex items-center bg-slate-50 rounded-lg p-3">
                          <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">{step.number}</span>
                          <span className="text-slate-700">{step.body}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </section>
          )}

          {/* Additional Resources (optional) */}
          {t.additionalResources && (
            <section className="mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">{t.additionalResources.heading}</h2>
              {t.additionalResources.cards && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  {t.additionalResources.cards.map((card, i) =>
                    card.href ? (
                      <Link key={i} href={card.href} className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow text-center">
                        <div className="text-3xl mb-2">{card.emoji}</div>
                        <h3 className="font-bold text-slate-900 mb-1">{card.title}</h3>
                        <p className="text-sm text-slate-600">{card.body}</p>
                      </Link>
                    ) : (
                      <div key={i} className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-center">
                        <div className="text-3xl mb-2">{card.emoji}</div>
                        <h3 className="font-bold text-slate-900 mb-1">{card.title}</h3>
                        <p className="text-sm text-slate-600">{card.body}</p>
                      </div>
                    )
                  )}
                </div>
              )}
              {t.additionalResources.columns && (
                <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
                  <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                    {t.additionalResources.columns.map((col, i) => (
                      <div key={i}>
                        <h3 className="text-lg font-semibold text-slate-900 mb-3">{col.heading}</h3>
                        <ul className="space-y-2 text-slate-700">
                          {col.items.map((item, ii) => (
                            <li key={ii} className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          )}

          {/* Technology Integration (id only) */}
          {t.technologyIntegration && (
            <section className="mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">{t.technologyIntegration.heading}</h2>
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
                <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
                  {t.technologyIntegration.columns.map((col, i) => (
                    <div key={i}>
                      <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <span className="text-xl">{col.icon}</span>
                        {col.heading}
                      </h3>
                      <ul className="space-y-3 text-slate-700">
                        {col.items.map((item, ii) => (
                          <li key={ii} className="flex items-start">
                            <span className="text-purple-500 mr-2">•</span>
                            <div>
                              <strong>{item.label}</strong> {item.body}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-6 md:mt-8 p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                  <h4 className="font-bold text-slate-900 mb-3">{t.technologyIntegration.useSiteBox.heading}</h4>
                  <p className="text-slate-700 mb-4">{t.technologyIntegration.useSiteBox.intro}</p>
                  <div className="grid sm:grid-cols-2 gap-3 text-sm">
                    {t.technologyIntegration.useSiteBox.checklist.map((c, i) => (
                      <div key={i} className="flex items-start">
                        <span className="text-blue-500 mr-2">✓</span>
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Link href={t.technologyIntegration.useSiteBox.buttonHref} className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      {t.technologyIntegration.useSiteBox.buttonLabel}
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Unit Planning Guide (id only) */}
          {t.unitPlanningGuide && (
            <section className="mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">{t.unitPlanningGuide.heading}</h2>
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">{t.unitPlanningGuide.subheading}</h3>
                <div className="space-y-4">
                  {t.unitPlanningGuide.weeks.map((week, i) => (
                    <div key={i} className="border-l-4 border-blue-500 pl-6 py-3">
                      <h4 className="font-bold text-lg text-slate-900 mb-2">{week.heading}</h4>
                      <ul className="text-slate-700 text-sm space-y-1">
                        {week.items.map((item, ii) => (
                          <li key={ii}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-6 md:mt-8 p-4 sm:p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                  <h4 className="font-bold text-slate-900 mb-3">{t.unitPlanningGuide.tipsHeading}</h4>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    {t.unitPlanningGuide.tips.map((tip, i) => (
                      <li key={i}>• {tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg p-6 sm:p-8 text-white text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">{t.cta.heading}</h2>
            <p className="text-base sm:text-lg text-indigo-100 mb-6 sm:mb-8 max-w-2xl mx-auto">{t.cta.body}</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href={t.cta.button1Href}
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors inline-flex items-center justify-center"
              >
                {t.cta.button1Label}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              {t.cta.button2Label && t.cta.button2Href && (
                <Link
                  href={t.cta.button2Href}
                  className="bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-800 transition-colors inline-flex items-center justify-center"
                >
                  {t.cta.button2Label}
                </Link>
              )}
            </div>
            {t.cta.tipLabel && t.cta.tipBody && (
              <div className="mt-8 pt-8 border-t border-indigo-400">
                <p className="text-indigo-100 text-sm">
                  💡 <strong>{t.cta.tipLabel}</strong> {t.cta.tipBody}
                </p>
              </div>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

// ============================================================================
// Sub-components for shapes with multiple rendering variants
// ============================================================================

function TeachingStrategiesSplitSection({ split }: { split: TeachingStrategiesSplit }) {
  return (
    <>
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">{split.heading1}</h2>
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
          <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">{split.intro1}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {split.cards1.map((card, i) => (
              <div key={i} className={`p-6 rounded-lg border-l-4 ${['bg-emerald-50 border-emerald-500', 'bg-teal-50 border-teal-500', 'bg-cyan-50 border-cyan-500'][i % 3]}`}>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{card.title}</h3>
                <p className="text-slate-700">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">{split.heading2}</h2>
        <div className="space-y-4 md:space-y-6">
          {split.methods2.map((method, i) => (
            <SplitMethodView key={i} method={method} index={i} />
          ))}
        </div>
      </section>
    </>
  )
}

function SplitMethodView({ method, index }: { method: SplitMethodItem; index: number }) {
  const iconBg = ['bg-emerald-100', 'bg-teal-100', 'bg-cyan-100', 'bg-indigo-100'][index % 4]
  const boxBg = ['bg-emerald-50', 'bg-teal-50', 'bg-cyan-50', 'bg-indigo-50'][index % 4]
  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
      <div className="flex items-start gap-3 sm:gap-4">
        <div className={`flex-shrink-0 w-12 h-12 ${iconBg} rounded-full flex items-center justify-center text-2xl`}>{method.emoji}</div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-slate-900 mb-3">{method.title}</h3>
          <p className="text-slate-700 mb-4">{method.body}</p>

          {method.applicationBullets && (
            <div className={`${boxBg} p-4 rounded-lg`}>
              {method.applicationLabel && <h4 className="font-semibold text-slate-900 mb-2">{method.applicationLabel}</h4>}
              <ul className="space-y-2 text-slate-700">
                {method.applicationBullets.map((b, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {method.exampleLines && (
            <div className={`${boxBg} p-4 rounded-lg`}>
              {method.exampleLabel && <h4 className="font-semibold text-slate-900 mb-2">{method.exampleLabel}</h4>}
              <div className="space-y-2 text-slate-700">
                {method.exampleLines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          )}

          {method.exampleVisualCaption && (
            <div className={`${boxBg} p-4 rounded-lg`}>
              {method.exampleLabel && <h4 className="font-semibold text-slate-900 mb-2">{method.exampleLabel}</h4>}
              {method.exampleIntro && <p className="text-slate-700 mb-3">{method.exampleIntro}</p>}
              <p className="text-sm text-slate-600">{method.exampleVisualCaption}</p>
            </div>
          )}

          {method.tipBody && (
            <div className={`${boxBg} p-4 rounded-lg`}>
              <p className="text-slate-700">
                {method.tipLabel && <strong>{method.tipLabel} </strong>}
                {method.tipBody}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function ActivityCardView({
  card,
  index,
  levelLabel,
  timeLabel,
}: {
  card: ActivityCard
  index: number
  levelLabel?: string
  timeLabel?: string
}) {
  if (card.level !== undefined) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
          <span className="text-2xl">{card.emoji}</span>
          {card.title}
        </h3>
        <p className="text-slate-700 mb-3 text-sm">{card.body}</p>
        <div className={`${activityCardBg[index % activityCardBg.length]} rounded-lg p-3 text-sm text-slate-700`}>
          <strong>{levelLabel}</strong> {card.level}
          <br />
          <strong>{timeLabel}</strong> {card.time}
        </div>
      </div>
    )
  }
  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-12 h-12 bg-gradient-to-br ${activityNumberBg[index % activityNumberBg.length]} rounded-lg flex items-center justify-center text-white font-bold text-xl`}>
          {card.number}
        </div>
        <h3 className="text-base sm:text-lg font-semibold text-slate-900">{card.title}</h3>
      </div>
      <p className="text-slate-700 mb-3">{card.body}</p>
      <div className={`${activityCardBg[index % activityCardBg.length]} p-3 rounded-lg text-sm`}>
        <p className="font-semibold text-slate-900 mb-1">{card.goalLabel}</p>
        <p className="text-slate-700">{card.goalBody}</p>
      </div>
    </div>
  )
}

function DifferentiatedLevelView({ level, index }: { level: DifferentiatedLevel; index: number }) {
  const c = differentiatedBg[index % differentiatedBg.length]
  return (
    <div className={`bg-gradient-to-br ${c.box} rounded-lg shadow-md p-6`}>
      <h3 className={`text-lg font-semibold ${c.title} mb-4 flex items-center gap-2`}>
        {level.emoji && <span className="text-2xl">{level.emoji}</span>}
        {level.title}
      </h3>
      <ul className="space-y-2 text-slate-700 text-sm">
        {level.items.map((item, i) => (
          <li key={i} className="flex items-start">
            <span className={`${differentiatedCheck[index % differentiatedCheck.length]} mr-2`}>✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function MisconceptionView({ item, index }: { item: MisconceptionItem; index: number }) {
  if (item.format === 'accordion') {
    return (
      <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer group">
        <summary className="text-lg font-semibold text-slate-900 flex items-center justify-between gap-3">
          <span>{item.title}</span>
          <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <div className="mt-4 text-slate-700 space-y-2 text-sm">
          <p>
            <strong>{item.misconceptionLabel}</strong> {item.misconceptionBody}
          </p>
          <p>
            <strong>{item.realityLabel}</strong> {item.realityBody}
          </p>
          <p className="bg-amber-50 p-3 rounded">
            <strong>{item.solutionLabel}</strong> {item.solutionBody}
          </p>
        </div>
      </details>
    )
  }
  return (
    <div className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-6">
      <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
        <span className={misconceptionAccentColors[index % misconceptionAccentColors.length]}>❌</span>
        {item.title}
      </h3>
      <p className="text-slate-700 mb-2">
        <strong>{item.whyLabel}</strong> {item.whyBody}
      </p>
      <p className="text-slate-700">
        <strong className="text-green-700">{item.fixLabel}</strong> {item.fixBody}
      </p>
    </div>
  )
}
