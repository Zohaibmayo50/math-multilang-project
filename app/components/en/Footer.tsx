import Link from 'next/link'

export default function FooterEn() {
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
              <span className="text-xl font-bold">Times Tables</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Learn multiplication tables from 1 to 100 in a fun and interactive way.
            </p>
          </div>

          {/* Tables Section */}
          <div>
            <div className="text-lg font-semibold mb-4 text-blue-400">Times Tables</div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/en/multiplication-tables/1-10" className="text-slate-400 hover:text-white transition-colors">
                  Tables 1-10
                </Link>
              </li>
              <li>
                <Link href="/en/multiplication-tables/11-20" className="text-slate-400 hover:text-white transition-colors">
                  Tables 11-20
                </Link>
              </li>
              <li>
                <Link href="/en/multiplication-tables/21-30" className="text-slate-400 hover:text-white transition-colors">
                  Tables 21-30
                </Link>
              </li>
              <li>
                <Link href="/en/multiplication-tables/31-40" className="text-slate-400 hover:text-white transition-colors">
                  Tables 31-40
                </Link>
              </li>
              <li>
                <Link href="/en/multiplication-tables/41-50" className="text-slate-400 hover:text-white transition-colors">
                  Tables 41-50
                </Link>
              </li>
            </ul>
          </div>

          {/* More Tables Section */}
          <div>
            <div className="text-lg font-semibold mb-4 text-indigo-400">More Tables</div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/en/multiplication-tables/51-60" className="text-slate-400 hover:text-white transition-colors">
                  Tables 51-60
                </Link>
              </li>
              <li>
                <Link href="/en/multiplication-tables/61-70" className="text-slate-400 hover:text-white transition-colors">
                  Tables 61-70
                </Link>
              </li>
              <li>
                <Link href="/en/multiplication-tables/71-80" className="text-slate-400 hover:text-white transition-colors">
                  Tables 71-80
                </Link>
              </li>
              <li>
                <Link href="/en/multiplication-tables/81-90" className="text-slate-400 hover:text-white transition-colors">
                  Tables 81-90
                </Link>
              </li>
              <li>
                <Link href="/en/multiplication-tables/91-100" className="text-slate-400 hover:text-white transition-colors">
                  Tables 91-100
                </Link>
              </li>
            </ul>
          </div>

          {/* Guides Section */}
          <div>
            <div className="text-lg font-semibold mb-4 text-purple-400">Guides</div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/en/multiplication-tables/for-students" className="text-slate-400 hover:text-white transition-colors">
                  For Students
                </Link>
              </li>
              <li>
                <Link href="/en/multiplication-tables/for-parents" className="text-slate-400 hover:text-white transition-colors">
                  For Parents
                </Link>
              </li>
              <li>
                <Link href="/en/multiplication-tables/for-teachers" className="text-slate-400 hover:text-white transition-colors">
                  For Teachers
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice Section */}
          <div>
            <div className="text-lg font-semibold mb-4 text-emerald-400">Practice & Games</div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/en/multiplication-tables#pdf-exercises" className="text-slate-400 hover:text-white transition-colors">
                  📄 PDF Exercises
                </Link>
              </li>
              <li>
                <Link href="/en/multiplication-tables#games" className="text-slate-400 hover:text-white transition-colors">
                  ⚡ Quick Answer
                </Link>
              </li>
              <li>
                <Link href="/en/multiplication-tables#games" className="text-slate-400 hover:text-white transition-colors">
                  🦸 Hero Game
                </Link>
              </li>
              <li>
                <Link href="/en/multiplication-tables#games" className="text-slate-400 hover:text-white transition-colors">
                  🧠 Memory Game
                </Link>
              </li>
              <li>
                <Link href="/en/multiplication-tables#games" className="text-slate-400 hover:text-white transition-colors">
                  🚀 Space Game
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} Mathematives. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <span>Making Math Fun For Everyone 🎓</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
