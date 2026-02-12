import Link from 'next/link'

export default function Footer() {
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
              <span className="text-xl font-bold">Násobilka</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Naučte se násobilku od 1 do 100 zábavným a interaktivním způsobem.
            </p>
          </div>

          {/* Násobilka Tabulky Bereich */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Násobilka Tabulky</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/cs/nasobilka/1-10" className="text-slate-400 hover:text-white transition-colors">
                  Tabulky 1-10
                </Link>
              </li>
              <li>
                <Link href="/cs/nasobilka/11-20" className="text-slate-400 hover:text-white transition-colors">
                  Tabulky 11-20
                </Link>
              </li>
              <li>
                <Link href="/cs/nasobilka/21-30" className="text-slate-400 hover:text-white transition-colors">
                  Tabulky 21-30
                </Link>
              </li>
              <li>
                <Link href="/cs/nasobilka/31-40" className="text-slate-400 hover:text-white transition-colors">
                  Tabulky 31-40
                </Link>
              </li>
              <li>
                <Link href="/cs/nasobilka/41-50" className="text-slate-400 hover:text-white transition-colors">
                  Tabulky 41-50
                </Link>
              </li>
            </ul>
          </div>

          {/* Continuar Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-400">Pokračovat</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/cs/nasobilka/51-60" className="text-slate-400 hover:text-white transition-colors">
                  Tabulky 51-60
                </Link>
              </li>
              <li>
                <Link href="/cs/nasobilka/61-70" className="text-slate-400 hover:text-white transition-colors">
                  Tabulky 61-70
                </Link>
              </li>
              <li>
                <Link href="/cs/nasobilka/71-80" className="text-slate-400 hover:text-white transition-colors">
                  Tabulky 71-80
                </Link>
              </li>
              <li>
                <Link href="/cs/nasobilka/81-90" className="text-slate-400 hover:text-white transition-colors">
                  Tabulky 81-90
                </Link>
              </li>
              <li>
                <Link href="/cs/nasobilka/91-100" className="text-slate-400 hover:text-white transition-colors">
                  Tabulky 91-100
                </Link>
              </li>
            </ul>
          </div>

          {/* Leitfäden Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Průvodce</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/cs/nasobilka/pro-studenty" className="text-slate-400 hover:text-white transition-colors">
                  Pro Studenty
                </Link>
              </li>
              <li>
                <Link href="/cs/nasobilka/pro-rodice" className="text-slate-400 hover:text-white transition-colors">
                  Pro Rodiče
                </Link>
              </li>
              <li>
                <Link href="/cs/nasobilka/pro-ucitele" className="text-slate-400 hover:text-white transition-colors">
                  Pro Učitele
                </Link>
              </li>
            </ul>
          </div>

          {/* Übung und Spiele Bereich */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Cvičení a Hry</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/cs/nasobilka#pdf-exercises" className="text-slate-400 hover:text-white transition-colors">
                  📄 PDF Cvičení
                </Link>
              </li>
              <li>
                <Link href="/cs/nasobilka#games" className="text-slate-400 hover:text-white transition-colors">
                  ⚡ Rychlostní Hra
                </Link>
              </li>
              <li>
                <Link href="/cs/nasobilka#games" className="text-slate-400 hover:text-white transition-colors">
                  🦸 Hra Hrdinů
                </Link>
              </li>
              <li>
                <Link href="/cs/nasobilka#games" className="text-slate-400 hover:text-white transition-colors">
                  🧠 Paměťová Hra
                </Link>
              </li>
              <li>
                <Link href="/cs/nasobilka#games" className="text-slate-400 hover:text-white transition-colors">
                  🚀 Vesmírná Hra
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} Mathematives. Všechna práva vyhrazena.
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <span>Děláme matematiku zábavnou pro všechny 🎓</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
