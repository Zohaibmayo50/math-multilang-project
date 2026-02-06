import Link from 'next/link'

export default function FooterPl() {
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
              <span className="text-xl font-bold">Tabliczki</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Naucz się tabliczki mnożenia od 1 do 100 w zabawny i interaktywny sposób.
            </p>
          </div>

          {/* Tables Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Tabliczki</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/pl/tabliczki-mnozenia/1-10" className="text-slate-400 hover:text-white transition-colors">
                  Tabliczki 1-10
                </Link>
              </li>
              <li>
                <Link href="/pl/tabliczki-mnozenia/11-20" className="text-slate-400 hover:text-white transition-colors">
                  Tabliczki 11-20
                </Link>
              </li>
              <li>
                <Link href="/pl/tabliczki-mnozenia/21-30" className="text-slate-400 hover:text-white transition-colors">
                  Tabliczki 21-30
                </Link>
              </li>
              <li>
                <Link href="/pl/tabliczki-mnozenia/31-40" className="text-slate-400 hover:text-white transition-colors">
                  Tabliczki 31-40
                </Link>
              </li>
              <li>
                <Link href="/pl/tabliczki-mnozenia/41-50" className="text-slate-400 hover:text-white transition-colors">
                  Tabliczki 41-50
                </Link>
              </li>
            </ul>
          </div>

          {/* More Tables Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-400">Więcej Tabliczek</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/pl/tabliczki-mnozenia/51-60" className="text-slate-400 hover:text-white transition-colors">
                  Tabliczki 51-60
                </Link>
              </li>
              <li>
                <Link href="/pl/tabliczki-mnozenia/61-70" className="text-slate-400 hover:text-white transition-colors">
                  Tabliczki 61-70
                </Link>
              </li>
              <li>
                <Link href="/pl/tabliczki-mnozenia/71-80" className="text-slate-400 hover:text-white transition-colors">
                  Tabliczki 71-80
                </Link>
              </li>
              <li>
                <Link href="/pl/tabliczki-mnozenia/81-90" className="text-slate-400 hover:text-white transition-colors">
                  Tabliczki 81-90
                </Link>
              </li>
              <li>
                <Link href="/pl/tabliczki-mnozenia/91-100" className="text-slate-400 hover:text-white transition-colors">
                  Tabliczki 91-100
                </Link>
              </li>
            </ul>
          </div>

          {/* Guides Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Przewodniki</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/pl/tabliczki-mnozenia/dla-uczniow" className="text-slate-400 hover:text-white transition-colors">
                  Dla Uczniów
                </Link>
              </li>
              <li>
                <Link href="/pl/tabliczki-mnozenia/dla-rodzicow" className="text-slate-400 hover:text-white transition-colors">
                  Dla Rodziców
                </Link>
              </li>
              <li>
                <Link href="/pl/tabliczki-mnozenia/dla-nauczycieli" className="text-slate-400 hover:text-white transition-colors">
                  Dla Nauczycieli
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Ćwiczenia i Gry</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/pl/tabliczki-mnozenia#pdf-exercises" className="text-slate-400 hover:text-white transition-colors">
                  📄 Ćwiczenia PDF
                </Link>
              </li>
              <li>
                <Link href="/pl/tabliczki-mnozenia#games" className="text-slate-400 hover:text-white transition-colors">
                  ⚡ Szybka Odpowiedź
                </Link>
              </li>
              <li>
                <Link href="/pl/tabliczki-mnozenia#games" className="text-slate-400 hover:text-white transition-colors">
                  🦸 Gra Bohatera
                </Link>
              </li>
              <li>
                <Link href="/pl/tabliczki-mnozenia#games" className="text-slate-400 hover:text-white transition-colors">
                  🧠 Gra Pamięciowa
                </Link>
              </li>
              <li>
                <Link href="/pl/tabliczki-mnozenia#games" className="text-slate-400 hover:text-white transition-colors">
                  🚀 Gra Kosmiczna
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} Tabliczki Mnożenia. Wszelkie prawa zastrzeżone.
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <span>Matematyka dla Każdego 🎓</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
