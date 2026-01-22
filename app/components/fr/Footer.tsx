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
                  Tablas 1-10
                </Link>
              </li>
              <li>
                <Link href="/fr/table-de-multiplication/11-20" className="text-slate-400 hover:text-white transition-colors">
                  Tablas 11-20
                </Link>
              </li>
              <li>
                <Link href="/fr/table-de-multiplication/21-30" className="text-slate-400 hover:text-white transition-colors">
                  Tablas 21-30
                </Link>
              </li>
              <li>
                <Link href="/fr/table-de-multiplication/31-40" className="text-slate-400 hover:text-white transition-colors">
                  Tablas 31-40
                </Link>
              </li>
              <li>
                <Link href="/fr/table-de-multiplication/41-50" className="text-slate-400 hover:text-white transition-colors">
                  Tablas 41-50
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
                  Tablas 51-60
                </Link>
              </li>
              <li>
                <Link href="/fr/table-de-multiplication/61-70" className="text-slate-400 hover:text-white transition-colors">
                  Tablas 61-70
                </Link>
              </li>
              <li>
                <Link href="/fr/table-de-multiplication/71-80" className="text-slate-400 hover:text-white transition-colors">
                  Tablas 71-80
                </Link>
              </li>
              <li>
                <Link href="/fr/table-de-multiplication/81-90" className="text-slate-400 hover:text-white transition-colors">
                  Tablas 81-90
                </Link>
              </li>
              <li>
                <Link href="/fr/table-de-multiplication/91-100" className="text-slate-400 hover:text-white transition-colors">
                  Tablas 91-100
                </Link>
              </li>
            </ul>
          </div>

          {/* Guías Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Guías</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/fr/table-de-multiplication/para-Ã©tudiants" className="text-slate-400 hover:text-white transition-colors">
                  Pour les Ã‰tudiants
                </Link>
              </li>
              <li>
                <Link href="/fr/table-de-multiplication/para-padres" className="text-slate-400 hover:text-white transition-colors">
                  Para Padres
                </Link>
              </li>
              <li>
                <Link href="/fr/table-de-multiplication/para-profesores" className="text-slate-400 hover:text-white transition-colors">
                  Para Profesores
                </Link>
              </li>
            </ul>
          </div>

          {/* Práctica Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Práctica y Juegos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/es/tablas-de-multiplicar#pdf-exercises" className="text-slate-400 hover:text-white transition-colors">
                  📄 Ejercicios PDF
                </Link>
              </li>
              <li>
                <Link href="/es/tablas-de-multiplicar#games" className="text-slate-400 hover:text-white transition-colors">
                  ⚡ Juego de Velocidad
                </Link>
              </li>
              <li>
                <Link href="/es/tablas-de-multiplicar#games" className="text-slate-400 hover:text-white transition-colors">
                  🦸 Juego del Héroe
                </Link>
              </li>
              <li>
                <Link href="/es/tablas-de-multiplicar#games" className="text-slate-400 hover:text-white transition-colors">
                  🧠 Juego de Memoria
                </Link>
              </li>
              <li>
                <Link href="/es/tablas-de-multiplicar#games" className="text-slate-400 hover:text-white transition-colors">
                  🚀 Juego Espacial
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} tables de multiplication. Tous droits réservés.
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
