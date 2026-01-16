export default function WhyItMatters() {
  return (
    <section className="section-container bg-gradient-to-br from-educational-50 to-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-slate-900 mb-12 text-center">
          Warum ist es wichtig, das Einmaleins zu lernen?
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
                Kopfrechnen Fähigkeit
              </h3>
            </div>
            <p className="text-slate-700">
              Schüler, die das Einmaleins beherrschen, können im Alltag und in der Schulmathematik 
              ohne Papier und Stift Berechnungen im Kopf durchführen. Diese Fähigkeit erhöht 
              die Geschwindigkeit und das Selbstvertrauen beim Lösen von Problemen.
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
                Schnelligkeit und Genauigkeit
              </h3>
            </div>
            <p className="text-slate-700">
              Das Einmaleins zu verstehen statt nur auswendig zu lernen, ermöglicht 
              Berechnungen sowohl schnell als auch korrekt durchzuführen. Diese Fähigkeit ist 
              besonders bei Prüfungen und zeitkritischen Situationen von entscheidender Bedeutung.
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
                Grundlage für höhere Mathematik
              </h3>
            </div>
            <p className="text-slate-700">
              Alle Divisionsoperationen, Brüche, algebraische Ausdrücke und 
              komplexere mathematische Konzepte basieren auf der Kenntnis des 
              Einmaleins. Eine solide Grundlage garantiert Erfolg in fortgeschrittenen Stufen.
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
                Selbstvertrauen und Motivation in Mathe
              </h3>
            </div>
            <p className="text-slate-700">
              Schüler, die das Einmaleins beherrschen, entwickeln eine 
              positive Einstellung zur Mathematik. Dieses Selbstvertrauen wirkt sich direkt 
              auf den Gesamterfolg im Mathematikunterricht und die Lernbereitschaft aus.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
