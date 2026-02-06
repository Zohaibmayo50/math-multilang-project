export default function WhyItMattersPl() {
  return (
    <section className="section-container bg-gradient-to-br from-educational-50 to-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-slate-900 mb-12 text-center">
          Dlaczego Warto Uczyć się Tabliczek Mnożenia?
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
                Umiejętności Rachunku w Pamięci
              </h3>
            </div>
            <p className="text-slate-700">
              Uczniowie, którzy opanowali tabliczki mnożenia, mogą wykonywać obliczenia w pamięci 
              w codziennym życiu i matematyce szkolnej bez papieru i ołówka. 
              Ta umiejętność zwiększa szybkość rozwiązywania problemów i pewność siebie.
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
                Szybkość i Dokładność
              </h3>
            </div>
            <p className="text-slate-700">
              Zrozumienie tabliczek mnożenia zamiast samego ich zapamiętywania umożliwia 
              szybkie i poprawne obliczenia. Ta umiejętność jest 
              szczególnie ważna w testach i sytuacjach wymagających czasu.
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
                Podstawa dla Zaawansowanej Matematyki
              </h3>
            </div>
            <p className="text-slate-700">
              Wszystkie działy, ułamki, wyrażenia algebraiczne i 
              bardziej złożone koncepcje matematyczne opierają się na opanowaniu tabliczek mnożenia. 
              Solidne podstawy zapewniają sukces na bardziej zaawansowanych poziomach.
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
                Pewność Siebie i Motywacja w Matematyce
              </h3>
            </div>
            <p className="text-slate-700">
              Uczniowie, którzy opanowali tabliczki mnożenia, rozwijają 
              pozytywne nastawienie do matematyki. Ta pewność siebie bezpośrednio wpływa na 
              ogólny sukces w matematyce i chęć do nauki.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
