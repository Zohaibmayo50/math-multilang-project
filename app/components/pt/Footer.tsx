import Link from 'next/link'

export default function FooterPt() {
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
              <span className="text-xl font-bold">Tabuada</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Aprenda a tabuada de 1 a 100 de forma divertida e interativa.
            </p>
          </div>

          {/* Tabuadas Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Tabuadas</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/pt/tabuada/1-10" className="text-slate-400 hover:text-white transition-colors">
                  Tabuada 1-10
                </Link>
              </li>
              <li>
                <Link href="/pt/tabuada/11-20" className="text-slate-400 hover:text-white transition-colors">
                  Tabuada 11-20
                </Link>
              </li>
              <li>
                <Link href="/pt/tabuada/21-30" className="text-slate-400 hover:text-white transition-colors">
                  Tabuada 21-30
                </Link>
              </li>
              <li>
                <Link href="/pt/tabuada/31-40" className="text-slate-400 hover:text-white transition-colors">
                  Tabuada 31-40
                </Link>
              </li>
              <li>
                <Link href="/pt/tabuada/41-50" className="text-slate-400 hover:text-white transition-colors">
                  Tabuada 41-50
                </Link>
              </li>
            </ul>
          </div>

          {/* Continuação Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-400">Continuação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/pt/tabuada/51-60" className="text-slate-400 hover:text-white transition-colors">
                  Tabuada 51-60
                </Link>
              </li>
              <li>
                <Link href="/pt/tabuada/61-70" className="text-slate-400 hover:text-white transition-colors">
                  Tabuada 61-70
                </Link>
              </li>
              <li>
                <Link href="/pt/tabuada/71-80" className="text-slate-400 hover:text-white transition-colors">
                  Tabuada 71-80
                </Link>
              </li>
              <li>
                <Link href="/pt/tabuada/81-90" className="text-slate-400 hover:text-white transition-colors">
                  Tabuada 81-90
                </Link>
              </li>
              <li>
                <Link href="/pt/tabuada/91-100" className="text-slate-400 hover:text-white transition-colors">
                  Tabuada 91-100
                </Link>
              </li>
            </ul>
          </div>

          {/* Guias Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Guias</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/pt/tabuada/para-estudantes" className="text-slate-400 hover:text-white transition-colors">
                  Para Estudantes
                </Link>
              </li>
              <li>
                <Link href="/pt/tabuada/para-pais" className="text-slate-400 hover:text-white transition-colors">
                  Para Pais
                </Link>
              </li>
              <li>
                <Link href="/pt/tabuada/para-professores" className="text-slate-400 hover:text-white transition-colors">
                  Para Professores
                </Link>
              </li>
            </ul>
          </div>

          {/* Prática Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Prática & Jogos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/pt/tabuada#pdf-exercises" className="text-slate-400 hover:text-white transition-colors">
                  📄 Exercícios PDF
                </Link>
              </li>
              <li>
                <Link href="/pt/tabuada#games" className="text-slate-400 hover:text-white transition-colors">
                  ⚡ Resposta Rápida
                </Link>
              </li>
              <li>
                <Link href="/pt/tabuada#games" className="text-slate-400 hover:text-white transition-colors">
                  🦸 Jogo do Herói
                </Link>
              </li>
              <li>
                <Link href="/pt/tabuada#games" className="text-slate-400 hover:text-white transition-colors">
                  🧠 Jogo da Memória
                </Link>
              </li>
              <li>
                <Link href="/pt/tabuada#games" className="text-slate-400 hover:text-white transition-colors">
                  🚀 Jogo Espacial
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} Tabuada. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <span>Tornamos a Matemática Divertida Para Todos 🎓</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}



