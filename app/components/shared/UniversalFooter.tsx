import Link from 'next/link'
import type { Locale } from '../../../lib/i18n-config'
import { guides } from '../../../lib/i18n-config'
import { getLocalizedPath, getAllRanges } from '../../../lib/url-helpers'
import { footerTranslations } from '../../../lib/footer-translations'

interface UniversalFooterProps {
  lang: Locale
}

/** Replace {token} placeholders in a translation pattern string. */
function fillTemplate(template: string, vars: Record<string, string | number>): string {
  return Object.entries(vars).reduce(
    (acc, [key, value]) => acc.split(`{${key}}`).join(String(value)),
    template
  )
}

export default function UniversalFooter({ lang }: UniversalFooterProps) {
  const currentYear = new Date().getFullYear()
  const t = footerTranslations[lang]
  const topicHome = getLocalizedPath(lang)

  const ranges = getAllRanges()
  const col1Ranges = ranges.slice(0, 5)
  const col2Ranges = ranges.slice(5, 10)

  const rangeLabel = (range: string) => fillTemplate(t.rangeLinkLabel, { range })

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-5 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <span className="text-xl font-bold text-white">×</span>
              </div>
              <span className="text-xl font-bold">{t.brandName}</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t.brandTagline}
            </p>
          </div>

          {/* Column 1: first 5 ranges */}
          <div>
            <div className="text-lg font-semibold mb-4 text-blue-400">{t.col1Heading}</div>
            <ul className="space-y-2 text-sm">
              {col1Ranges.map((range) => (
                <li key={range}>
                  <Link href={getLocalizedPath(lang, range)} className="text-slate-400 hover:text-white transition-colors">
                    {rangeLabel(range)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: next 5 ranges */}
          <div>
            <div className="text-lg font-semibold mb-4 text-indigo-400">{t.col2Heading}</div>
            <ul className="space-y-2 text-sm">
              {col2Ranges.map((range) => (
                <li key={range}>
                  <Link href={getLocalizedPath(lang, range)} className="text-slate-400 hover:text-white transition-colors">
                    {rangeLabel(range)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides Section */}
          <div>
            <div className="text-lg font-semibold mb-4 text-purple-400">{t.col3Heading}</div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={getLocalizedPath(lang, guides[lang].students)} className="text-slate-400 hover:text-white transition-colors">
                  {t.guideStudentsLabel}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath(lang, guides[lang].parents)} className="text-slate-400 hover:text-white transition-colors">
                  {t.guideParentsLabel}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath(lang, guides[lang].teachers)} className="text-slate-400 hover:text-white transition-colors">
                  {t.guideTeachersLabel}
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice & Games Section */}
          <div>
            <div className="text-lg font-semibold mb-4 text-emerald-400">{t.col4Heading}</div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`${topicHome}#pdf-exercises`} className="text-slate-400 hover:text-white transition-colors">
                  {t.pdfExercisesLabel}
                </Link>
              </li>
              <li>
                <Link href={`${topicHome}#games`} className="text-slate-400 hover:text-white transition-colors">
                  {t.quickAnswerLabel}
                </Link>
              </li>
              <li>
                <Link href={`${topicHome}#games`} className="text-slate-400 hover:text-white transition-colors">
                  {t.heroGameLabel}
                </Link>
              </li>
              <li>
                <Link href={`${topicHome}#games`} className="text-slate-400 hover:text-white transition-colors">
                  {t.memoryGameLabel}
                </Link>
              </li>
              <li>
                <Link href={`${topicHome}#games`} className="text-slate-400 hover:text-white transition-colors">
                  {t.spaceGameLabel}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              {fillTemplate(t.copyrightText, { year: currentYear })}
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <span>{t.footerTagline}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
