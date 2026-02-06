import Link from 'next/link'

export default function LearningPathsPl() {
  return (
    <section id="learning-paths" className="section-container bg-gradient-to-br from-primary-50 via-white to-educational-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-slate-900 mb-6 text-center">
          Wybierz Swoją Ścieżkę Nauki
        </h2>
        
        <p className="text-center text-slate-700 max-w-3xl mx-auto mb-12 text-lg">
          Zacznij na odpowiednim poziomie i postępuj we własnym tempie
        </p>
        
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <Link href="/pl/tabliczki-mnozenia/1-10" className="link-card group">
            <div className="flex flex-col h-full">
              <div className="w-20 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-lg font-bold text-white">1-10</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Początkujący
              </h3>
              <p className="text-slate-700 text-sm mb-3 flex-grow">
                Podstawowe tabliczki. Punkt wyjścia dla wszystkich uczniów.
              </p>
              <div className="text-blue-600 font-medium text-xs group-hover:text-blue-700 flex items-center">
                Zacznij tabliczki 1-10
                <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link href="/pl/tabliczki-mnozenia/11-20" className="link-card group">
            <div className="flex flex-col h-full">
              <div className="w-20 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-lg font-bold text-white">11-20</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Początkujący
              </h3>
              <p className="text-slate-700 text-sm mb-3 flex-grow">
                Rozwijaj umiejętności z liczbami dwucyfrowymi.
              </p>
              <div className="text-indigo-600 font-medium text-xs group-hover:text-indigo-700 flex items-center">
                Zacznij tabliczki 11-20
                <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link href="/pl/tabliczki-mnozenia/21-30" className="link-card group">
            <div className="flex flex-col h-full">
              <div className="w-20 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-lg font-bold text-white">21-30</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Średniozaawansowany
              </h3>
              <p className="text-slate-700 text-sm mb-3 flex-grow">
                Poziom średni i wzory mnożenia.
              </p>
              <div className="text-purple-600 font-medium text-xs group-hover:text-purple-700 flex items-center">
                Zacznij tabliczki 21-30
                <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link href="/pl/tabliczki-mnozenia/31-40" className="link-card group">
            <div className="flex flex-col h-full">
              <div className="w-20 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-lg font-bold text-white">31-40</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Średniozaawansowany
              </h3>
              <p className="text-slate-700 text-sm mb-3 flex-grow">
                Zaawansowane umiejętności zapamiętywania.
              </p>
              <div className="text-pink-600 font-medium text-xs group-hover:text-pink-700 flex items-center">
                Zacznij tabliczki 31-40
                <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link href="/pl/tabliczki-mnozenia/41-50" className="link-card group">
            <div className="flex flex-col h-full">
              <div className="w-20 h-10 bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-lg font-bold text-white">41-50</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Średniozaawansowany
              </h3>
              <p className="text-slate-700 text-sm mb-3 flex-grow">
                W połowie drogi! Opanuj do 50.
              </p>
              <div className="text-rose-600 font-medium text-xs group-hover:text-rose-700 flex items-center">
                Zacznij tabliczki 41-50
                <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link href="/pl/tabliczki-mnozenia/51-60" className="link-card group">
            <div className="flex flex-col h-full">
              <div className="w-20 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-lg font-bold text-white">51-60</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Zaawansowany
              </h3>
              <p className="text-slate-700 text-sm mb-3 flex-grow">
                Poziom zaawansowany. Pracuj z większymi liczbami.
              </p>
              <div className="text-orange-600 font-medium text-xs group-hover:text-orange-700 flex items-center">
                Zacznij tabliczki 51-60
                <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link href="/pl/tabliczki-mnozenia/61-70" className="link-card group">
            <div className="flex flex-col h-full">
              <div className="w-20 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-lg font-bold text-white">61-70</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Zaawansowany
              </h3>
              <p className="text-slate-700 text-sm mb-3 flex-grow">
                Rozwijaj zaawansowane strategie mnożenia.
              </p>
              <div className="text-amber-600 font-medium text-xs group-hover:text-amber-700 flex items-center">
                Zacznij tabliczki 61-70
                <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link href="/pl/tabliczki-mnozenia/71-80" className="link-card group">
            <div className="flex flex-col h-full">
              <div className="w-20 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-lg font-bold text-white">71-80</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Zaawansowany
              </h3>
              <p className="text-slate-700 text-sm mb-3 flex-grow">
                Wyzwanie mnożenia na poziomie eksperta.
              </p>
              <div className="text-yellow-600 font-medium text-xs group-hover:text-yellow-700 flex items-center">
                Zacznij tabliczki 71-80
                <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link href="/pl/tabliczki-mnozenia/81-90" className="link-card group">
            <div className="flex flex-col h-full">
              <div className="w-20 h-10 bg-gradient-to-br from-lime-500 to-lime-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-lg font-bold text-white">81-90</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Ekspert
              </h3>
              <p className="text-slate-700 text-sm mb-3 flex-grow">
                Prawie tam! Opanuj zakres 80.
              </p>
              <div className="text-lime-600 font-medium text-xs group-hover:text-lime-700 flex items-center">
                Zacznij tabliczki 81-90
                <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link href="/pl/tabliczki-mnozenia/91-100" className="link-card group">
            <div className="flex flex-col h-full">
              <div className="w-20 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-lg font-bold text-white">91-100</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Ekspert
              </h3>
              <p className="text-slate-700 text-sm mb-3 flex-grow">
                Poziom mistrzowski. Ukończ wszystkie 100 tabliczek!
              </p>
              <div className="text-emerald-600 font-medium text-xs group-hover:text-emerald-700 flex items-center">
                Zacznij tabliczki 91-100
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
