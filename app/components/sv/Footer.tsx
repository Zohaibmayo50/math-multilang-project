import Link from 'next/link'

export default function FooterSv() {
  const currentYear = new Date().getFullYear()
  
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
              <span className="text-xl font-bold">Multiplikationstabeller</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Lär dig multiplikationstabeller från 1 till 100 på roliga och interaktiva sätt.
            </p>
          </div>

          {/* Multiplikationstabeller Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Multiplikationstabeller</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sv/multiplikationstabeller/1-10" className="text-slate-400 hover:text-white transition-colors">
                  1-10 Tabell
                </Link>
              </li>
              <li>
                <Link href="/sv/multiplikationstabeller/11-20" className="text-slate-400 hover:text-white transition-colors">
                  11-20 Tabell
                </Link>
              </li>
              <li>
                <Link href="/sv/multiplikationstabeller/21-30" className="text-slate-400 hover:text-white transition-colors">
                  21-30 Tabell
                </Link>
              </li>
              <li>
                <Link href="/sv/multiplikationstabeller/31-40" className="text-slate-400 hover:text-white transition-colors">
                  31-40 Tabell
                </Link>
              </li>
              <li>
                <Link href="/sv/multiplikationstabeller/41-50" className="text-slate-400 hover:text-white transition-colors">
                  41-50 Tabell
                </Link>
              </li>
            </ul>
          </div>

          {/* Fortsättning Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-400">Fortsättning</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sv/multiplikationstabeller/51-60" className="text-slate-400 hover:text-white transition-colors">
                  51-60 Tabell
                </Link>
              </li>
              <li>
                <Link href="/sv/multiplikationstabeller/61-70" className="text-slate-400 hover:text-white transition-colors">
                  61-70 Tabell
                </Link>
              </li>
              <li>
                <Link href="/sv/multiplikationstabeller/71-80" className="text-slate-400 hover:text-white transition-colors">
                  71-80 Tabell
                </Link>
              </li>
              <li>
                <Link href="/sv/multiplikationstabeller/81-90" className="text-slate-400 hover:text-white transition-colors">
                  81-90 Tabell
                </Link>
              </li>
              <li>
                <Link href="/sv/multiplikationstabeller/91-100" className="text-slate-400 hover:text-white transition-colors">
                  91-100 Tabell
                </Link>
              </li>
            </ul>
          </div>

          {/* Guider Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Guider</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sv/multiplikationstabeller/elever" className="text-slate-400 hover:text-white transition-colors">
                  För Elever
                </Link>
              </li>
              <li>
                <Link href="/sv/multiplikationstabeller/foraldrar" className="text-slate-400 hover:text-white transition-colors">
                  För Föräldrar
                </Link>
              </li>
              <li>
                <Link href="/sv/multiplikationstabeller/larare" className="text-slate-400 hover:text-white transition-colors">
                  För Lärare
                </Link>
              </li>
            </ul>
          </div>

          {/* Övning Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Övning & Spel</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sv/multiplikationstabeller#pdf-exercises" className="text-slate-400 hover:text-white transition-colors">
                  📄 PDF Övningar
                </Link>
              </li>
              <li>
                <Link href="/sv/multiplikationstabeller#games" className="text-slate-400 hover:text-white transition-colors">
                  ⚡ Snabbt Svar
                </Link>
              </li>
              <li>
                <Link href="/sv/multiplikationstabeller#games" className="text-slate-400 hover:text-white transition-colors">
                  🦸 Hjältespel
                </Link>
              </li>
              <li>
                <Link href="/sv/multiplikationstabeller#games" className="text-slate-400 hover:text-white transition-colors">
                  🧠 Minnesspel
                </Link>
              </li>
              <li>
                <Link href="/sv/multiplikationstabeller#games" className="text-slate-400 hover:text-white transition-colors">
                  🚀 Rymdspel
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} Multiplikationstabeller. Alla rättigheter förbehållna.
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <span>Vi Gör Matematik Roligt För Alla 🎓</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
