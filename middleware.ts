import { NextRequest, NextResponse } from 'next/server'

// ---------------------------------------------------------------------------
// Config — mirrors lib/i18n-config.ts (duplicated to stay edge-runtime safe)
// ---------------------------------------------------------------------------

const topicSlugs: Record<string, string> = {
  tr: 'carpim-tablosu',
  es: 'tablas-de-multiplicar',
  cs: 'nasobilka',
  de: 'einmaleins',
  uk: 'tablycya-mnozhennya',
  fi: 'kertotaulut',
  fr: 'table-de-multiplication',
  sv: 'multiplikationstabeller',
  pt: 'tabuada',
  en: 'multiplication-tables',
  pl: 'tabliczki-mnozenia',
  id: 'tabel-perkalian',
}

const guides: Record<string, { students: string; teachers: string; parents: string }> = {
  tr: { students: 'ogrenciler-icin',    teachers: 'ogretmenler-icin',      parents: 'veliler-icin' },
  es: { students: 'para-estudiantes',   teachers: 'para-profesores',        parents: 'para-padres' },
  cs: { students: 'pro-studenty',       teachers: 'pro-ucitele',            parents: 'pro-rodice' },
  de: { students: 'fuer-schueler',      teachers: 'fuer-lehrer',            parents: 'fuer-eltern' },
  uk: { students: 'dlya-uchniv',        teachers: 'dlya-vchyteliv',         parents: 'dlya-batkiv' },
  fi: { students: 'oppilaille',         teachers: 'opettajille',            parents: 'vanhemmille' },
  fr: { students: 'pour-les-eleves',    teachers: 'pour-les-enseignants',   parents: 'pour-les-parents' },
  sv: { students: 'for-elever',         teachers: 'for-larare',             parents: 'for-foraldrar' },
  pt: { students: 'para-estudantes',    teachers: 'para-professores',       parents: 'para-pais' },
  en: { students: 'for-students',       teachers: 'for-teachers',           parents: 'for-parents' },
  pl: { students: 'dla-uczniow',        teachers: 'dla-nauczycieli',        parents: 'dla-rodzicow' },
  id: { students: 'untuk-siswa',        teachers: 'untuk-guru',             parents: 'untuk-orang-tua' },
}

const locales = Object.keys(topicSlugs)

// Build a reverse map: any guide slug from any language → its guide type
const guideSlugToType = new Map<string, 'students' | 'teachers' | 'parents'>()
for (const g of Object.values(guides)) {
  guideSlugToType.set(g.students, 'students')
  guideSlugToType.set(g.teachers, 'teachers')
  guideSlugToType.set(g.parents, 'parents')
}

// ---------------------------------------------------------------------------
// Middleware
// ---------------------------------------------------------------------------

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Only act on 3-segment paths: /{lang}/{topic}/{slug}
  const segments = pathname.split('/').filter(Boolean)
  if (segments.length !== 3) return NextResponse.next()

  const [lang, , slug] = segments

  // Must be a recognised locale
  if (!locales.includes(lang)) return NextResponse.next()

  const correctGuides = guides[lang]

  // Slug already belongs to this locale → no action needed
  if (
    slug === correctGuides.students ||
    slug === correctGuides.teachers ||
    slug === correctGuides.parents
  ) {
    return NextResponse.next()
  }

  // Is it a guide slug from a DIFFERENT language?
  const guideType = guideSlugToType.get(slug)
  if (!guideType) return NextResponse.next()

  // Redirect to the correct guide slug for the current locale
  const url = request.nextUrl.clone()
  url.pathname = `/${lang}/${topicSlugs[lang]}/${correctGuides[guideType]}`
  return NextResponse.redirect(url, { status: 301 })
}

export const config = {
  // Run on all paths except Next.js internals, static files, and API
  matcher: ['/((?!_next|api|favicon\\.ico|favicon\\.svg|sitemap\\.xml|robots\\.txt|.*\\.png|.*\\.jpg|.*\\.svg|.*\\.ico).*)'],
}
