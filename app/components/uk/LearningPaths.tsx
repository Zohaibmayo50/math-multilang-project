import Link from 'next/link'

export default function LearningPaths() {
  return (
    <section id="learning-paths" className="section-container bg-gradient-to-br from-primary-50 via-white to-educational-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-slate-900 mb-6 text-center">
          Почніть вивчати таблицю множення зараз
        </h2>
        
        <p className="text-center text-slate-700 max-w-3xl mx-auto mb-12 text-lg">
          Повний навчальний шлях таблиці множення, поділений на 10 рівнів. 
          Кожен рівень містить детальні пояснення, зразки та стратегії навчання.
        </p>
        
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <Link href="/uk/tablycya-mnozhennya/1-10" className="link-card group">
            <div className="flex flex-col h-full">
              <div className="w-20 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-lg font-bold text-white">1-10</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Рівень 1
              </h3>
              <p className="text-slate-700 text-sm mb-3 flex-grow">
                Базові таблиці. Відправна точка для всіх учнів.
              </p>
              <div className="text-blue-600 font-medium text-xs group-hover:text-blue-700 flex items-center">
                Вчитися
                <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link href="/uk/tablycya-mnozhennya/11-20" className="link-card group">
            <div className="flex flex-col h-full">
              <div className="w-20 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-lg font-bold text-white">11-20</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Рівень 2
              </h3>
              <p className="text-slate-700 text-sm mb-3 flex-grow">
                Розвивайте навички з двозначними числами.
              </p>
              <div className="text-indigo-600 font-medium text-xs group-hover:text-indigo-700 flex items-center">
                Вчитися
                <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link href="/uk/tablycya-mnozhennya/21-30" className="link-card group">
            <div className="flex flex-col h-full">
              <div className="w-20 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-lg font-bold text-white">21-30</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Рівень 3
              </h3>
              <p className="text-slate-700 text-sm mb-3 flex-grow">
                Середній рівень та зразки множення.
              </p>
              <div className="text-purple-600 font-medium text-xs group-hover:text-purple-700 flex items-center">
                Вчитися
                <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link href="/uk/tablycya-mnozhennya/31-40" className="link-card group">
            <div className="flex flex-col h-full">
              <div className="w-20 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-lg font-bold text-white">31-40</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Рівень 4
              </h3>
              <p className="text-slate-700 text-sm mb-3 flex-grow">
                Поглиблені навички рахунку напам'ять.
              </p>
              <div className="text-pink-600 font-medium text-xs group-hover:text-pink-700 flex items-center">
                Вчитися
                <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link href="/uk/tablycya-mnozhennya/41-50" className="link-card group">
            <div className="flex flex-col h-full">
              <div className="w-20 h-10 bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-lg font-bold text-white">41-50</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Рівень 5
              </h3>
              <p className="text-slate-700 text-sm mb-3 flex-grow">
                Половина шляху! Опануйте до 50.
              </p>
              <div className="text-rose-600 font-medium text-xs group-hover:text-rose-700 flex items-center">
                Вчитися
                <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link href="/uk/tablycya-mnozhennya/51-60" className="link-card group">
            <div className="flex flex-col h-full">
              <div className="w-20 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-lg font-bold text-white">51-60</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Рівень 6
              </h3>
              <p className="text-slate-700 text-sm mb-3 flex-grow">
                Просунутий рівень. Робота з більшими числами.
              </p>
              <div className="text-orange-600 font-medium text-xs group-hover:text-orange-700 flex items-center">
                Вчитися
                <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link href="/uk/tablycya-mnozhennya/61-70" className="link-card group">
            <div className="flex flex-col h-full">
              <div className="w-20 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-lg font-bold text-white">61-70</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Рівень 7
              </h3>
              <p className="text-slate-700 text-sm mb-3 flex-grow">
                Розвивайте поглиблені стратегії множення.
              </p>
              <div className="text-amber-600 font-medium text-xs group-hover:text-amber-700 flex items-center">
                Вчитися
                <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link href="/uk/tablycya-mnozhennya/71-80" className="link-card group">
            <div className="flex flex-col h-full">
              <div className="w-20 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-lg font-bold text-white">71-80</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Рівень 8
              </h3>
              <p className="text-slate-700 text-sm mb-3 flex-grow">
                Наближаєтесь до експертного рівня!
              </p>
              <div className="text-yellow-600 font-medium text-xs group-hover:text-yellow-700 flex items-center">
                Вчитися
                <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link href="/uk/tablycya-mnozhennya/81-90" className="link-card group">
            <div className="flex flex-col h-full">
              <div className="w-20 h-10 bg-gradient-to-br from-lime-500 to-lime-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-lg font-bold text-white">81-90</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Рівень 9
              </h3>
              <p className="text-slate-700 text-sm mb-3 flex-grow">
                Майже готово! Продовжуйте в тому ж дусі.
              </p>
              <div className="text-lime-600 font-medium text-xs group-hover:text-lime-700 flex items-center">
                Вчитися
                <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link href="/uk/tablycya-mnozhennya/91-100" className="link-card group">
            <div className="flex flex-col h-full">
              <div className="w-20 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-base font-bold text-white">91-100</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Рівень 10
              </h3>
              <p className="text-slate-700 text-sm mb-3 flex-grow">
                Фінальний рівень! Завершіть 100 і станьте експертом.
              </p>
              <div className="text-emerald-600 font-medium text-xs group-hover:text-emerald-700 flex items-center">
                Вчитися
                <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
        
        <div className="mt-10 bg-white border-2 border-primary-200 rounded-lg p-6 text-center">
          <p className="text-slate-700 text-lg">
            <strong className="text-slate-900">Рекомендований шлях:</strong> Почніть з рівня 1 (1-10) 
            і поступово завершуйте всі рівні. Переходьте на наступний рівень після того, як 
            відчуватимете себе впевнено на кожному рівні. Коли досягнете 100, ви — експерт таблиці множення!
          </p>
        </div>
      </div>
    </section>
  )
}
