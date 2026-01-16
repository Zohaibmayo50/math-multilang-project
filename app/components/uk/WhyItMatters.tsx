export default function WhyItMatters() {
  return (
    <section className="section-container bg-gradient-to-br from-educational-50 to-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-slate-900 mb-12 text-center">
          Чому важливо вивчити таблицю множення?
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2">
          <article className="card">
            <div className="mb-4">
              <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Здатність рахувати напам'ять
              </h3>
            </div>
            <p className="text-slate-700">
              Учні, які володіють таблицею множення, можуть у повсякденному житті та у шкільній математиці 
              виконувати обчислення в голові без паперу та олівця. Ця здатність підвищує 
              швидкість та впевненість у вирішенні проблем.
            </p>
          </article>
          
          <article className="card">
            <div className="mb-4">
              <div className="w-12 h-12 bg-educational-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Швидкість та точність
              </h3>
            </div>
            <p className="text-slate-700">
              Розуміння таблиці множення замість простого заучування дозволяє 
              виконувати обчислення як швидко, так і правильно. Ця здатність є 
              особливо важливою на іспитах та в критичних за часом ситуаціях.
            </p>
          </article>
          
          <article className="card">
            <div className="mb-4">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Основа для вищої математики
              </h3>
            </div>
            <p className="text-slate-700">
              Всі операції ділення, дроби, алгебраїчні вирази та 
              складніші математичні концепції ґрунтуються на знанні 
              таблиці множення. Міцна основа гарантує успіх на просунутих рівнях.
            </p>
          </article>
          
          <article className="card">
            <div className="mb-4">
              <div className="w-12 h-12 bg-educational-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Впевненість і мотивація в математиці
              </h3>
            </div>
            <p className="text-slate-700">
              Учні, які володіють таблицею множення, розвивають 
              позитивне ставлення до математики. Ця впевненість має прямий 
              вплив на загальний успіх у математиці та бажання вчитися.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
