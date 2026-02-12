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
              <span className="text-xl font-bold">tables de multiplication</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Apprenez les tables de multiplication de 1 à 100 de façon amusante et interactive.
            </p>
          </div>

          {/* tables de multiplication Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">tables de multiplication</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/fr/table-de-multiplication/1-10" className="text-slate-400 hover:text-white transition-colors">
                  Tables 1-10
                </Link>
              </li>
              <li>
                <Link href="/fr/table-de-multiplication/11-20" className="text-slate-400 hover:text-white transition-colors">
                  Tables 11-20
                </Link>
              </li>
              <li>
                <Link href="/fr/table-de-multiplication/21-30" className="text-slate-400 hover:text-white transition-colors">
                  Tables 21-30
                </Link>
              </li>
              <li>
                <Link href="/fr/table-de-multiplication/31-40" className="text-slate-400 hover:text-white transition-colors">
                  Tables 31-40
                </Link>
              </li>
              <li>
                <Link href="/fr/table-de-multiplication/41-50" className="text-slate-400 hover:text-white transition-colors">
                  Tables 41-50
                </Link>
              </li>
            </ul>
          </div>

          {/* Continuar Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-400">Continuar</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/fr/table-de-multiplication/51-60" className="text-slate-400 hover:text-white transition-colors">
                  Tables 51-60
                </Link>
              </li>
              <li>
                <Link href="/fr/table-de-multiplication/61-70" className="text-slate-400 hover:text-white transition-colors">
                  Tables 61-70
                </Link>
              </li>
              <li>
                <Link href="/fr/table-de-multiplication/71-80" className="text-slate-400 hover:text-white transition-colors">
                  Tables 71-80
                </Link>
              </li>
              <li>
                <Link href="/fr/table-de-multiplication/81-90" className="text-slate-400 hover:text-white transition-colors">
                  Tables 81-90
                </Link>
              </li>
              <li>
                <Link href="/fr/table-de-multiplication/91-100" className="text-slate-400 hover:text-white transition-colors">
                  Tables 91-100
                </Link>
              </li>
            </ul>
          </div>

          {/* Guides Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Guides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/fr/table-de-multiplication/pour-les-eleves" className="text-slate-400 hover:text-white transition-colors">
                  Pour les Élèves
                </Link>
              </li>
              <li>
                <Link href="/fr/table-de-multiplication/pour-les-parents" className="text-slate-400 hover:text-white transition-colors">
                  Pour les Parents
                </Link>
              </li>
              <li>
                <Link href="/fr/table-de-multiplication/pour-les-enseignants" className="text-slate-400 hover:text-white transition-colors">
                  Pour les Enseignants
                </Link>
              </li>
            </ul>
          </div>

          {/* Pratique Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Pratique et Jeux</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/fr/table-de-multiplication#pdf-exercises" className="text-slate-400 hover:text-white transition-colors">
                  📄 Exercices PDF
                </Link>
              </li>
              <li>
                <Link href="/fr/table-de-multiplication#games" className="text-slate-400 hover:text-white transition-colors">
                  ⚡ Jeu de Vitesse
                </Link>
              </li>
              <li>
                <Link href="/fr/table-de-multiplication#games" className="text-slate-400 hover:text-white transition-colors">
                  🦸 Jeu du Héros
                </Link>
              </li>
              <li>
                <Link href="/fr/table-de-multiplication#games" className="text-slate-400 hover:text-white transition-colors">
                  🧠 Jeu de Mémoire
                </Link>
              </li>
              <li>
                <Link href="/fr/table-de-multiplication#games" className="text-slate-400 hover:text-white transition-colors">
                  🚀 Jeu Spatial
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} Mathematives. Tous droits réservés.
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <span>Nous rendons les Mathématiques Amusantes pour Tous 🎓</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
