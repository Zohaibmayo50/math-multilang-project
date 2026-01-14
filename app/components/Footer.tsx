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
              <span className="text-xl font-bold">Çarpım Tablosu</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              1'den 100'e kadar çarpım tablosunu eğlenceli ve interaktif yollarla öğrenin.
            </p>
          </div>

          {/* Çarpım Tablosu Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Çarpım Tablosu</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tr/carpim-tablosu/1-10" className="text-slate-400 hover:text-white transition-colors">
                  1-10 Tablosu
                </Link>
              </li>
              <li>
                <Link href="/tr/carpim-tablosu/11-20" className="text-slate-400 hover:text-white transition-colors">
                  11-20 Tablosu
                </Link>
              </li>
              <li>
                <Link href="/tr/carpim-tablosu/21-30" className="text-slate-400 hover:text-white transition-colors">
                  21-30 Tablosu
                </Link>
              </li>
              <li>
                <Link href="/tr/carpim-tablosu/31-40" className="text-slate-400 hover:text-white transition-colors">
                  31-40 Tablosu
                </Link>
              </li>
              <li>
                <Link href="/tr/carpim-tablosu/41-50" className="text-slate-400 hover:text-white transition-colors">
                  41-50 Tablosu
                </Link>
              </li>
            </ul>
          </div>

          {/* Devam Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-400">Devam</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tr/carpim-tablosu/51-60" className="text-slate-400 hover:text-white transition-colors">
                  51-60 Tablosu
                </Link>
              </li>
              <li>
                <Link href="/tr/carpim-tablosu/61-70" className="text-slate-400 hover:text-white transition-colors">
                  61-70 Tablosu
                </Link>
              </li>
              <li>
                <Link href="/tr/carpim-tablosu/71-80" className="text-slate-400 hover:text-white transition-colors">
                  71-80 Tablosu
                </Link>
              </li>
              <li>
                <Link href="/tr/carpim-tablosu/81-90" className="text-slate-400 hover:text-white transition-colors">
                  81-90 Tablosu
                </Link>
              </li>
              <li>
                <Link href="/tr/carpim-tablosu/91-100" className="text-slate-400 hover:text-white transition-colors">
                  91-100 Tablosu
                </Link>
              </li>
            </ul>
          </div>

          {/* Rehberler Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Rehberler</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tr/carpim-tablosu/ogrenciler-icin" className="text-slate-400 hover:text-white transition-colors">
                  Öğrenciler İçin
                </Link>
              </li>
              <li>
                <Link href="/tr/carpim-tablosu/veliler-icin" className="text-slate-400 hover:text-white transition-colors">
                  Veliler İçin
                </Link>
              </li>
              <li>
                <Link href="/tr/carpim-tablosu/ogretmenler-icin" className="text-slate-400 hover:text-white transition-colors">
                  Öğretmenler İçin
                </Link>
              </li>
            </ul>
          </div>

          {/* Pratik Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Pratik & Oyunlar</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tr/carpim-tablosu#pdf-exercises" className="text-slate-400 hover:text-white transition-colors">
                  📄 PDF Alıştırmalar
                </Link>
              </li>
              <li>
                <Link href="/tr/carpim-tablosu#games" className="text-slate-400 hover:text-white transition-colors">
                  ⚡ Hız Oyunu
                </Link>
              </li>
              <li>
                <Link href="/tr/carpim-tablosu#games" className="text-slate-400 hover:text-white transition-colors">
                  🦸 Kahraman Oyunu
                </Link>
              </li>
              <li>
                <Link href="/tr/carpim-tablosu#games" className="text-slate-400 hover:text-white transition-colors">
                  🧠 Hafıza Oyunu
                </Link>
              </li>
              <li>
                <Link href="/tr/carpim-tablosu#games" className="text-slate-400 hover:text-white transition-colors">
                  🚀 Uzay Oyunu
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} Çarpım Tablosu. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <span>Herkes İçin Matematiği Eğlenceli Hale Getiriyoruz 🎓</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
