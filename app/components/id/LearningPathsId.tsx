import Link from 'next/link'

export default function LearningPathsId() {
  return (
    <section id="learning-paths" className="section-container bg-gradient-to-br from-primary-50 via-white to-educational-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-slate-900 mb-6 text-center">
          Mulai Belajar Tabel Perkalian
        </h2>
        
        <p className="text-center text-slate-700 max-w-3xl mx-auto mb-12 text-lg">
          Jalur pembelajaran tabel perkalian komprehensif yang dibagi menjadi 10 level. 
          Setiap level berisi penjelasan detail, pola, dan strategi pembelajaran.
        </p>
        
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <Link href="/id/tabel-perkalian/1-10" className="link-card group">
            <div className="flex flex-col h-full">
              <div className="w-20 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-lg font-bold text-white">1-10</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Level 1
              </h3>
              <p className="text-slate-700 text-sm mb-3 flex-grow">
                Tabel perkalian dasar. Titik awal untuk semua siswa.
              </p>
              <div className="inline-flex items-center text-xs px-3 py-1.5 bg-green-100 text-green-700 rounded-full font-medium mb-3 w-fit">
                😊 Mudah
              </div>
              <div className="text-blue-600 font-medium text-xs group-hover:text-blue-700 flex items-center">
                Belajar
                <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link href="/id/tabel-perkalian/11-20" className="link-card group">
            <div className="flex flex-col h-full">
              <div className="w-20 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-lg font-bold text-white">11-20</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Level 2
              </h3>
              <p className="text-slate-700 text-sm mb-3 flex-grow">
                Dapatkan keterampilan perkalian dengan bilangan dua digit.
              </p>
              <div className="inline-flex items-center text-xs px-3 py-1.5 bg-green-100 text-green-700 rounded-full font-medium mb-3 w-fit">
                😊 Mudah
              </div>
              <div className="text-indigo-600 font-medium text-xs group-hover:text-indigo-700 flex items-center">
                Belajar
                <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link href="/id/tabel-perkalian/21-30" className="link-card group">
            <div className="flex flex-col h-full">
              <div className="w-20 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-lg font-bold text-white">21-30</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Level 3
              </h3>
              <p className="text-slate-700 text-sm mb-3 flex-grow">
                Tabel perkalian tingkat menengah dan pola.
              </p>
              <div className="inline-flex items-center text-xs px-3 py-1.5 bg-yellow-100 text-yellow-700 rounded-full font-medium mb-3 w-fit">
                🤔 Sedang
              </div>
              <div className="text-purple-600 font-medium text-xs group-hover:text-purple-700 flex items-center">
                Belajar
                <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link href="/id/tabel-perkalian/31-40" className="link-card group">
            <div className="flex flex-col h-full">
              <div className="w-20 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-lg font-bold text-white">31-40</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Level 4
              </h3>
              <p className="text-slate-700 text-sm mb-3 flex-grow">
                Keterampilan perhitungan mental tingkat lanjut.
              </p>
              <div className="inline-flex items-center text-xs px-3 py-1.5 bg-yellow-100 text-yellow-700 rounded-full font-medium mb-3 w-fit">
                🤔 Sedang
              </div>
              <div className="text-pink-600 font-medium text-xs group-hover:text-pink-700 flex items-center">
                Belajar
                <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link href="/id/tabel-perkalian/41-50" className="link-card group">
            <div className="flex flex-col h-full">
              <div className="w-20 h-10 bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-lg font-bold text-white">41-50</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Level 5
              </h3>
              <p className="text-slate-700 text-sm mb-3 flex-grow">
                Menguasai tabel perkalian hingga angka 50.
              </p>
              <div className="inline-flex items-center text-xs px-3 py-1.5 bg-orange-100 text-orange-700 rounded-full font-medium mb-3 w-fit">
                😰 Sulit
              </div>
              <div className="text-rose-600 font-medium text-xs group-hover:text-rose-700 flex items-center">
                Belajar
                <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link href="/id/tabel-perkalian/51-60" className="link-card group">
            <div className="flex flex-col h-full">
              <div className="w-20 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-lg font-bold text-white">51-60</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Level 6
              </h3>
              <p className="text-slate-700 text-sm mb-3 flex-grow">
                Perkalian bilangan besar dan teknik canggih.
              </p>
              <div className="inline-flex items-center text-xs px-3 py-1.5 bg-orange-100 text-orange-700 rounded-full font-medium mb-3 w-fit">
                😰 Sulit
              </div>
              <div className="text-orange-600 font-medium text-xs group-hover:text-orange-700 flex items-center">
                Belajar
                <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link href="/id/tabel-perkalian/61-70" className="link-card group">
            <div className="flex flex-col h-full">
              <div className="w-20 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-lg font-bold text-white">61-70</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Level 7
              </h3>
              <p className="text-slate-700 text-sm mb-3 flex-grow">
                Keterampilan perkalian menengah lanjutan.
              </p>
              <div className="inline-flex items-center text-xs px-3 py-1.5 bg-red-100 text-red-700 rounded-full font-medium mb-3 w-fit">
                🔥 Ahli
              </div>
              <div className="text-amber-600 font-medium text-xs group-hover:text-amber-700 flex items-center">
                Belajar
                <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link href="/id/tabel-perkalian/71-80" className="link-card group">
            <div className="flex flex-col h-full">
              <div className="w-20 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-lg font-bold text-white">71-80</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Level 8
              </h3>
              <p className="text-slate-700 text-sm mb-3 flex-grow">
                Tantangan perkalian untuk siswa mahir.
              </p>
              <div className="inline-flex items-center text-xs px-3 py-1.5 bg-red-100 text-red-700 rounded-full font-medium mb-3 w-fit">
                🔥 Ahli
              </div>
              <div className="text-yellow-600 font-medium text-xs group-hover:text-yellow-700 flex items-center">
                Belajar
                <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link href="/id/tabel-perkalian/81-90" className="link-card group">
            <div className="flex flex-col h-full">
              <div className="w-20 h-10 bg-gradient-to-br from-lime-500 to-lime-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-lg font-bold text-white">81-90</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Level 9
              </h3>
              <p className="text-slate-700 text-sm mb-3 flex-grow">
                Perkalian tingkat mahir untuk siswa berprestasi.
              </p>
              <div className="inline-flex items-center text-xs px-3 py-1.5 bg-red-100 text-red-700 rounded-full font-medium mb-3 w-fit">
                🔥 Ahli
              </div>
              <div className="text-lime-600 font-medium text-xs group-hover:text-lime-700 flex items-center">
                Belajar
                <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link href="/id/tabel-perkalian/91-100" className="link-card group">
            <div className="flex flex-col h-full">
              <div className="w-20 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-lg font-bold text-white">91-100</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Level 10
              </h3>
              <p className="text-slate-700 text-sm mb-3 flex-grow">
                Penguasaan lengkap tabel perkalian hingga 100.
              </p>
              <div className="inline-flex items-center text-xs px-3 py-1.5 bg-red-100 text-red-700 rounded-full font-medium mb-3 w-fit">
                🔥 Ahli
              </div>
              <div className="text-emerald-600 font-medium text-xs group-hover:text-emerald-700 flex items-center">
                Belajar
                <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
