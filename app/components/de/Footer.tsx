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
              <span className="text-xl font-bold">Einmaleins</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Lerne das Einmaleins von 1 bis 100 auf unterhaltsame und interaktive Weise.
            </p>
          </div>

          {/* Einmaleins Tabellen Bereich */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Einmaleins Tabellen</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/1-10" className="text-slate-400 hover:text-white transition-colors">
                  Tabellen 1-10
                </Link>
              </li>
              <li>
                <Link href="/11-20" className="text-slate-400 hover:text-white transition-colors">
                  Tabellen 11-20
                </Link>
              </li>
              <li>
                <Link href="/21-30" className="text-slate-400 hover:text-white transition-colors">
                  Tabellen 21-30
                </Link>
              </li>
              <li>
                <Link href="/31-40" className="text-slate-400 hover:text-white transition-colors">
                  Tabellen 31-40
                </Link>
              </li>
              <li>
                <Link href="/41-50" className="text-slate-400 hover:text-white transition-colors">
                  Tabellen 41-50
                </Link>
              </li>
            </ul>
          </div>

          {/* Continuar Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-400">Weiterführen</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/51-60" className="text-slate-400 hover:text-white transition-colors">
                  Tabellen 51-60
                </Link>
              </li>
              <li>
                <Link href="/61-70" className="text-slate-400 hover:text-white transition-colors">
                  Tabellen 61-70
                </Link>
              </li>
              <li>
                <Link href="/71-80" className="text-slate-400 hover:text-white transition-colors">
                  Tabellen 71-80
                </Link>
              </li>
              <li>
                <Link href="/81-90" className="text-slate-400 hover:text-white transition-colors">
                  Tabellen 81-90
                </Link>
              </li>
              <li>
                <Link href="/91-100" className="text-slate-400 hover:text-white transition-colors">
                  Tabellen 91-100
                </Link>
              </li>
            </ul>
          </div>

          {/* Leitfäden Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Leitfäden</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/fuer-schueler" className="text-slate-400 hover:text-white transition-colors">
                  Für Schüler
                </Link>
              </li>
              <li>
                <Link href="/fuer-eltern" className="text-slate-400 hover:text-white transition-colors">
                  Für Eltern
                </Link>
              </li>
              <li>
                <Link href="/fuer-lehrer" className="text-slate-400 hover:text-white transition-colors">
                  Für Lehrer
                </Link>
              </li>
            </ul>
          </div>

          {/* Übung und Spiele Bereich */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Übung und Spiele</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#pdf-exercises" className="text-slate-400 hover:text-white transition-colors">
                  📄 Übungen PDF
                </Link>
              </li>
              <li>
                <Link href="/#games" className="text-slate-400 hover:text-white transition-colors">
                  ⚡ Geschwindigkeitsspiel
                </Link>
              </li>
              <li>
                <Link href="/#games" className="text-slate-400 hover:text-white transition-colors">
                  🦸 Helden-Spiel
                </Link>
              </li>
              <li>
                <Link href="/#games" className="text-slate-400 hover:text-white transition-colors">
                  🧠 Memory-Spiel
                </Link>
              </li>
              <li>
                <Link href="/#games" className="text-slate-400 hover:text-white transition-colors">
                  🚀 Weltraum-Spiel
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} Einmaleins. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <span>Wir machen Mathe Spaß für Alle 🎓</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
