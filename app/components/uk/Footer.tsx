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
              <span className="text-xl font-bold">Таблиця множення</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Вивчайте таблицю множення від 1 до 100 веселим та інтерактивним способом.
            </p>
          </div>

          {/* Násobilka Tabulky Bereich */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Таблиці Множення</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/uk/tablycya-mnozhennya/1-10" className="text-slate-400 hover:text-white transition-colors">
                  Таблиці 1-10
                </Link>
              </li>
              <li>
                <Link href="/uk/tablycya-mnozhennya/11-20" className="text-slate-400 hover:text-white transition-colors">
                  Таблиці 11-20
                </Link>
              </li>
              <li>
                <Link href="/uk/tablycya-mnozhennya/21-30" className="text-slate-400 hover:text-white transition-colors">
                  Таблиці 21-30
                </Link>
              </li>
              <li>
                <Link href="/uk/tablycya-mnozhennya/31-40" className="text-slate-400 hover:text-white transition-colors">
                  Таблиці 31-40
                </Link>
              </li>
              <li>
                <Link href="/uk/tablycya-mnozhennya/41-50" className="text-slate-400 hover:text-white transition-colors">
                  Таблиці 41-50
                </Link>
              </li>
            </ul>
          </div>

          {/* Continuar Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-400">Продовжити</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/uk/tablycya-mnozhennya/51-60" className="text-slate-400 hover:text-white transition-colors">
                  Таблиці 51-60
                </Link>
              </li>
              <li>
                <Link href="/uk/tablycya-mnozhennya/61-70" className="text-slate-400 hover:text-white transition-colors">
                  Таблиці 61-70
                </Link>
              </li>
              <li>
                <Link href="/uk/tablycya-mnozhennya/71-80" className="text-slate-400 hover:text-white transition-colors">
                  Таблиці 71-80
                </Link>
              </li>
              <li>
                <Link href="/uk/tablycya-mnozhennya/81-90" className="text-slate-400 hover:text-white transition-colors">
                  Таблиці 81-90
                </Link>
              </li>
              <li>
                <Link href="/uk/tablycya-mnozhennya/91-100" className="text-slate-400 hover:text-white transition-colors">
                  Таблиці 91-100
                </Link>
              </li>
            </ul>
          </div>

          {/* Leitfäden Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Посібники</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/uk/tablycya-mnozhennya/dlya-uchniv" className="text-slate-400 hover:text-white transition-colors">
                  Для Учнів
                </Link>
              </li>
              <li>
                <Link href="/uk/tablycya-mnozhennya/dlya-batkiv" className="text-slate-400 hover:text-white transition-colors">
                  Для Батьків
                </Link>
              </li>
              <li>
                <Link href="/uk/tablycya-mnozhennya/dlya-vchyteliv" className="text-slate-400 hover:text-white transition-colors">
                  Для Вчителів
                </Link>
              </li>
            </ul>
          </div>

          {/* Übung und Spiele Bereich */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Вправи та Ігри</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/uk/tablycya-mnozhennya#pdf-exercises" className="text-slate-400 hover:text-white transition-colors">
                  📄 PDF Вправи
                </Link>
              </li>
              <li>
                <Link href="/uk/tablycya-mnozhennya#games" className="text-slate-400 hover:text-white transition-colors">
                  ⚡ Швидкісна Гра
                </Link>
              </li>
              <li>
                <Link href="/uk/tablycya-mnozhennya#games" className="text-slate-400 hover:text-white transition-colors">
                  🦸 Гра Героїв
                </Link>
              </li>
              <li>
                <Link href="/uk/tablycya-mnozhennya#games" className="text-slate-400 hover:text-white transition-colors">
                  🧠 Гра Пам'яті
                </Link>
              </li>
              <li>
                <Link href="/uk/tablycya-mnozhennya#games" className="text-slate-400 hover:text-white transition-colors">
                  🚀 Космічна Гра
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} Таблиця множення. Усі права захищені.
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <span>Робимо математику веселою для всіх 🎓</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
