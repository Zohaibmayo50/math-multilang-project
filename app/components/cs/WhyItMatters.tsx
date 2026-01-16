export default function WhyItMatters() {
  return (
    <section className="section-container bg-gradient-to-br from-educational-50 to-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-slate-900 mb-12 text-center">
          Proč je důležité naučit se násobilku?
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
                Schopnost počítání zpaměti
              </h3>
            </div>
            <p className="text-slate-700">
              Studenti, kteří ovládají násobilku, mohou v každodenním životě a ve školní matematice 
              provádět výpočty v hlavě bez papíru a tužky. Tato schopnost zvyšuje 
              rychlost a sebedůvěru při řešení problémů.
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
                Rychlost a přesnost
              </h3>
            </div>
            <p className="text-slate-700">
              Porozumění násobilce místo pouhého memorování umožňuje 
              provádět výpočty jak rychle, tak správně. Tato schopnost je 
              obzvláště důležitá při zkouškách a v časově kritických situacích.
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
                Základ pro vyšší matematiku
              </h3>
            </div>
            <p className="text-slate-700">
              Všechny operace dělení, zlomky, algebraické výrazy a 
              složitější matematické koncepty jsou založeny na znalosti 
              násobilky. Pevný základ garantuje úspěch v pokročilých úrovních.
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
                Sebedůvěra a motivace v matematice
              </h3>
            </div>
            <p className="text-slate-700">
              Studenti, kteří ovládají násobilku, rozvíjejí 
              pozitivní postoj k matematice. Tato sebedůvěra má přímý 
              dopad na celkový úspěch v matematice a ochotu učit se.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
