export default function WhyItMatters() {
  return (
    <section className="section-container bg-gradient-to-br from-educational-50 to-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-slate-900 mb-12 text-center">
          Pourquoi est-il Important d'Apprendre les Tables de Multiplication ?
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
                Habilidad de Cálculo Mental
              </h3>
            </div>
            <p className="text-slate-700">
              Les étudiants qui maîtrisent les tables de multiplication peuvent effectuer 
              des calculs mentalement dans la vie quotidienne et en mathématiques scolaires sans 
              avoir besoin de papier et crayon. Cette compétence augmente la vitesse et la confiance 
              lors de la résolution de problèmes.
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
                Rapidez y Precisión
              </h3>
            </div>
            <p className="text-slate-700">
              Comprendre les tables de multiplication au lieu de simplement les mémoriser permet 
              d'effectuer des opérations à la fois rapidement et correctement. Cette compétence est 
              particulièrement importante lors des examens et des situations avec limite de temps.
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
                Base pour les Mathématiques Avancées
              </h3>
            </div>
            <p className="text-slate-700">
              Toutes les opérations de division, fractions, expressions algébriques et 
              concepts mathématiques plus complexes sont basés sur la connaissance des 
              tables de multiplication. Une base solide garantit le succès aux niveaux avancés.
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
                Confiance et Motivation en Mathématiques
              </h3>
            </div>
            <p className="text-slate-700">
              Les étudiants qui connaissent les tables de multiplication développent une 
              attitude positive envers les mathématiques. Cette confiance affecte directement 
              le succès général dans les cours de mathématiques et le désir d'apprendre.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
