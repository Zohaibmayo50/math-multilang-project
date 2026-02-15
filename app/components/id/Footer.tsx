import Link from 'next/link'

export default function FooterId() {
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
              <span className="text-xl font-bold">Tabel Perkalian</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Pelajari tabel perkalian dari 1 hingga 100 dengan cara yang menyenangkan dan interaktif.
            </p>
          </div>

          {/* Tabel Perkalian Section */}
          <div>
            <div className="text-lg font-semibold mb-4 text-blue-400">Tabel Perkalian</div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/id/tabel-perkalian/1-10" className="text-slate-400 hover:text-white transition-colors">
                  Tabel 1-10
                </Link>
              </li>
              <li>
                <Link href="/id/tabel-perkalian/11-20" className="text-slate-400 hover:text-white transition-colors">
                  Tabel 11-20
                </Link>
              </li>
              <li>
                <Link href="/id/tabel-perkalian/21-30" className="text-slate-400 hover:text-white transition-colors">
                  Tabel 21-30
                </Link>
              </li>
              <li>
                <Link href="/id/tabel-perkalian/31-40" className="text-slate-400 hover:text-white transition-colors">
                  Tabel 31-40
                </Link>
              </li>
              <li>
                <Link href="/id/tabel-perkalian/41-50" className="text-slate-400 hover:text-white transition-colors">
                  Tabel 41-50
                </Link>
              </li>
            </ul>
          </div>

          {/* Lanjutan Section */}
          <div>
            <div className="text-lg font-semibold mb-4 text-indigo-400">Lanjutan</div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/id/tabel-perkalian/51-60" className="text-slate-400 hover:text-white transition-colors">
                  Tabel 51-60
                </Link>
              </li>
              <li>
                <Link href="/id/tabel-perkalian/61-70" className="text-slate-400 hover:text-white transition-colors">
                  Tabel 61-70
                </Link>
              </li>
              <li>
                <Link href="/id/tabel-perkalian/71-80" className="text-slate-400 hover:text-white transition-colors">
                  Tabel 71-80
                </Link>
              </li>
              <li>
                <Link href="/id/tabel-perkalian/81-90" className="text-slate-400 hover:text-white transition-colors">
                  Tabel 81-90
                </Link>
              </li>
              <li>
                <Link href="/id/tabel-perkalian/91-100" className="text-slate-400 hover:text-white transition-colors">
                  Tabel 91-100
                </Link>
              </li>
            </ul>
          </div>

          {/* Panduan Section */}
          <div>
            <div className="text-lg font-semibold mb-4 text-purple-400">Panduan</div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/id/tabel-perkalian/untuk-siswa" className="text-slate-400 hover:text-white transition-colors">
                  Untuk Siswa
                </Link>
              </li>
              <li>
                <Link href="/id/tabel-perkalian/untuk-orang-tua" className="text-slate-400 hover:text-white transition-colors">
                  Untuk Orang Tua
                </Link>
              </li>
              <li>
                <Link href="/id/tabel-perkalian/untuk-guru" className="text-slate-400 hover:text-white transition-colors">
                  Untuk Guru
                </Link>
              </li>
            </ul>
          </div>

          {/* Latihan Section */}
          <div>
            <div className="text-lg font-semibold mb-4 text-emerald-400">Latihan & Permainan</div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/id/tabel-perkalian#pdf-exercises" className="text-slate-400 hover:text-white transition-colors">
                  📄 Latihan PDF
                </Link>
              </li>
              <li>
                <Link href="/id/tabel-perkalian#games" className="text-slate-400 hover:text-white transition-colors">
                  ⚡ Permainan Cepat
                </Link>
              </li>
              <li>
                <Link href="/id/tabel-perkalian#games" className="text-slate-400 hover:text-white transition-colors">
                  🦸 Permainan Pahlawan
                </Link>
              </li>
              <li>
                <Link href="/id/tabel-perkalian#games" className="text-slate-400 hover:text-white transition-colors">
                  🧠 Permainan Memori
                </Link>
              </li>
              <li>
                <Link href="/id/tabel-perkalian#games" className="text-slate-400 hover:text-white transition-colors">
                  🚀 Permainan Luar Angkasa
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} Mathematives. Hak cipta dilindungi.
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <span>Membuat Matematika Menyenangkan untuk Semua 🎓</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
