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
              <span className="text-xl font-bold">Kertotaulut</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Interaktiivinen oppimisalusta kertotaulujen oppimiseen 1:stä 100:aan
            </p>
          </div>

          {/* Nopeat Linkit - Column 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Nopeat Linkit</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/fi/kertotaulut/1-10" className="text-slate-400 hover:text-white transition-colors">
                  Taulut 1-10
                </Link>
              </li>
              <li>
                <Link href="/fi/kertotaulut/11-20" className="text-slate-400 hover:text-white transition-colors">
                  Taulut 11-20
                </Link>
              </li>
              <li>
                <Link href="/fi/kertotaulut/21-30" className="text-slate-400 hover:text-white transition-colors">
                  Taulut 21-30
                </Link>
              </li>
              <li>
                <Link href="/fi/kertotaulut/31-40" className="text-slate-400 hover:text-white transition-colors">
                  Taulut 31-40
                </Link>
              </li>
              <li>
                <Link href="/fi/kertotaulut/41-50" className="text-slate-400 hover:text-white transition-colors">
                  Taulut 41-50
                </Link>
              </li>
            </ul>
          </div>

          {/* Continue Section - Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-400">Jatka</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/fi/kertotaulut/51-60" className="text-slate-400 hover:text-white transition-colors">
                  Taulut 51-60
                </Link>
              </li>
              <li>
                <Link href="/fi/kertotaulut/61-70" className="text-slate-400 hover:text-white transition-colors">
                  Taulut 61-70
                </Link>
              </li>
              <li>
                <Link href="/fi/kertotaulut/71-80" className="text-slate-400 hover:text-white transition-colors">
                  Taulut 71-80
                </Link>
              </li>
              <li>
                <Link href="/fi/kertotaulut/81-90" className="text-slate-400 hover:text-white transition-colors">
                  Taulut 81-90
                </Link>
              </li>
              <li>
                <Link href="/fi/kertotaulut/91-100" className="text-slate-400 hover:text-white transition-colors">
                  Taulut 91-100
                </Link>
              </li>
            </ul>
          </div>

          {/* Oppaat Section - Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Oppaat</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/fi/kertotaulut/oppilaille" className="text-slate-400 hover:text-white transition-colors">
                  Oppilaille
                </Link>
              </li>
              <li>
                <Link href="/fi/kertotaulut/vanhemmille" className="text-slate-400 hover:text-white transition-colors">
                  Vanhemmille
                </Link>
              </li>
              <li>
                <Link href="/fi/kertotaulut/opettajille" className="text-slate-400 hover:text-white transition-colors">
                  Opettajille
                </Link>
              </li>
            </ul>
          </div>

          {/* Resurssit Section - Column 4 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Resurssit</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/fi/kertotaulut#pdf-exercises" className="text-slate-400 hover:text-white transition-colors">
                  📄 PDF-harjoitukset
                </Link>
              </li>
              <li>
                <Link href="/fi/kertotaulut#games" className="text-slate-400 hover:text-white transition-colors">
                  ⚡ Nopeus Peli
                </Link>
              </li>
              <li>
                <Link href="/fi/kertotaulut#games" className="text-slate-400 hover:text-white transition-colors">
                  🦸 Sankari Peli
                </Link>
              </li>
              <li>
                <Link href="/fi/kertotaulut#games" className="text-slate-400 hover:text-white transition-colors">
                  🧠 Muisti Peli
                </Link>
              </li>
              <li>
                <Link href="/fi/kertotaulut#games" className="text-slate-400 hover:text-white transition-colors">
                  🚀 Avaruus Peli
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} Kertotaulut. Kaikki oikeudet pidätetään.
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <span>Teemme matematiikasta hauskaa kaikille 🎓</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
