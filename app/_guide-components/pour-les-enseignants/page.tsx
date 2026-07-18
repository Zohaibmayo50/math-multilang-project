import Link from 'next/link'
import Header from '@/app/components/fr/Header'
import Footer from '@/app/components/fr/Footer'


export default function ForTeachers() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white pt-20 pb-12 md:pt-24 md:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
                Guide Enseignants : Tables de Multiplication
              </h1>
              <p className="text-lg sm:text-xl text-emerald-100 mb-6 md:mb-8">
                Ressources pédagogiques, stratégies d&apos;enseignement et activités pour enseigner efficacement les tables de multiplication en classe.
              </p>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                <span className="text-emerald-100">Accompagnement professionnel pour un enseignement efficace</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Pedagogical Approach */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Approche Pédagogique
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">
                L&apos;enseignement des tables de multiplication doit reposer sur la compréhension conceptuelle, pas uniquement sur la mémorisation. Les élèves doivent saisir le sens de la multiplication et développer plusieurs stratégies de résolution.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-500">
                  <h3 className="text-lg font-semibold text-emerald-900 mb-3">Du Concret à l&apos;Abstrait</h3>
                  <p className="text-slate-700">Commencez par du matériel physique, passez aux représentations visuelles puis aux opérations numériques abstraites.</p>
                </div>
                <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500">
                  <h3 className="text-lg font-semibold text-teal-900 mb-3">Développement de Stratégies</h3>
                  <p className="text-slate-700">Développez la pensée flexible en montrant aux élèves plusieurs chemins de résolution.</p>
                </div>
                <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-500">
                  <h3 className="text-lg font-semibold text-cyan-900 mb-3">Apprentissage Signifiant</h3>
                  <p className="text-slate-700">Reliez les tables de multiplication à des problèmes réels pour créer du sens et de la motivation.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Teaching Methods */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Méthodes d&apos;Enseignement
            </h2>
            <div className="space-y-4 md:space-y-6">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📦</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Matrices et Regroupements</h3>
                    <p className="text-slate-700 mb-4">
                      Regroupez des objets en matrices pour montrer que la multiplication est une addition répétée.
                    </p>
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-emerald-900 mb-2">Application :</h4>
                      <ul className="space-y-2 text-slate-700">
                        <li className="flex items-start">
                          <span className="text-emerald-600 mr-2">•</span>
                          <span>Demandez aux élèves de s&apos;asseoir en 4 rangées × 6 élèves</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-600 mr-2">•</span>
                          <span>Arrangez des blocs ou des jetons en matrices</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-600 mr-2">•</span>
                          <span>Dessinez des matrices de points au tableau pour visualiser</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔢</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Modèle d&apos;Aire</h3>
                    <p className="text-slate-700 mb-4">
                      Visualisez la multiplication à l&apos;aide de surfaces rectangulaires.
                    </p>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-teal-900 mb-2">Exemple : 5 × 3</h4>
                      <div className="space-y-2 text-slate-700">
                        <p>Représentez 5 colonnes × 3 rangées = 15 carrés unitaires.</p>
                        <p>Les élèves découvrent ainsi que l&apos;aire d&apos;un rectangle est liée à la multiplication.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">➗</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Stratégie de Décomposition</h3>
                    <p className="text-slate-700 mb-4">
                      Résolvez des multiplications complexes en les décomposant en parties plus simples.
                    </p>
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-cyan-900 mb-2">Exemple : 7 × 8</h4>
                      <div className="space-y-2 text-slate-700">
                        <p>• Méthode 1 : (5 × 8) + (2 × 8) = 40 + 16 = 56</p>
                        <p>• Méthode 2 : (7 × 5) + (7 × 3) = 35 + 21 = 56</p>
                        <p>• Méthode 3 : (7 × 10) - (7 × 2) = 70 - 14 = 56</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Classroom Activities */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Activités en Classe
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  🎲
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Bingo Multiplication</h3>
                <p className="text-slate-700 mb-3">
                  Créez des cartes de bingo avec les résultats. Annoncez les opérations et les élèves marquent les résultats correspondants.
                </p>
                <div className="bg-emerald-50 p-3 rounded text-sm text-slate-700">
                  <strong>Niveau :</strong> CE1-CM2 · <strong>Durée :</strong> 20 min
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  🏃
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Course de Relais Mathématique</h3>
                <p className="text-slate-700 mb-3">
                  Divisez la classe en équipes. Chaque coureur résout une multiplication avant de passer le relais.
                </p>
                <div className="bg-teal-50 p-3 rounded text-sm text-slate-700">
                  <strong>Niveau :</strong> CE2-CM2 · <strong>Durée :</strong> 15 min
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  🃏
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Mémory des Tables</h3>
                <p className="text-slate-700 mb-3">
                  Paires de cartes : une avec l&apos;opération (6×7), l&apos;autre avec le résultat (42). Les élèves trouvent les paires.
                </p>
                <div className="bg-cyan-50 p-3 rounded text-sm text-slate-700">
                  <strong>Niveau :</strong> CE1-CE2 · <strong>Durée :</strong> 25 min
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  📐
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Chasse aux Motifs</h3>
                <p className="text-slate-700 mb-3">
                  Les élèves colorient les multiples sur une grille de 100 pour découvrir les motifs de chaque table.
                </p>
                <div className="bg-emerald-50 p-3 rounded text-sm text-slate-700">
                  <strong>Niveau :</strong> CE1-CM1 · <strong>Durée :</strong> 30 min
                </div>
              </div>
            </div>
          </section>

          {/* Differentiated Instruction */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Enseignement Différencié
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-6">
                Adaptez votre enseignement aux besoins de chaque élève pour maximiser la progression de tous.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
                <div className="bg-green-50 p-5 rounded-lg border-t-4 border-green-500">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">🌱 Élèves en Difficulté</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Matériel concret obligatoire</li>
                    <li>• Tables de 1, 2, 5, 10 d&apos;abord</li>
                    <li>• Temps supplémentaire accordé</li>
                    <li>• Évaluation orale privilégiée</li>
                    <li>• Support visuel permanent</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg border-t-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">📚 Niveau Standard</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Progression structurée</li>
                    <li>• Mélange concret et abstrait</li>
                    <li>• Exercices variés et réguliers</li>
                    <li>• Travail en binômes</li>
                    <li>• Auto-évaluation guidée</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-5 rounded-lg border-t-4 border-purple-500">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">🚀 Élèves Avancés</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Défis et problèmes ouverts</li>
                    <li>• Tables au-delà de 10</li>
                    <li>• Problèmes complexes</li>
                    <li>• Rôle de tuteur pour les pairs</li>
                    <li>• Projets mathématiques créatifs</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Assessment */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Méthodes d&apos;Évaluation
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-lg border-l-4 border-emerald-500">
                  <h3 className="text-lg font-semibold text-emerald-900 mb-2">📋 Évaluation Formative</h3>
                  <p className="text-slate-700">
                    Observation quotidienne, questions orales rapides, mini-quiz de 5 minutes en début de cours. Identifiez les difficultés avant qu&apos;elles ne s&apos;installent.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg border-l-4 border-teal-500">
                  <h3 className="text-lg font-semibold text-teal-900 mb-2">📊 Évaluation Sommative</h3>
                  <p className="text-slate-700">
                    Tests chronométrés, résolution de problèmes contextualisés, évaluation de la compréhension des propriétés (commutativité, associativité).
                  </p>
                </div>
                <div className="bg-gradient-to-r from-cyan-50 to-sky-50 p-6 rounded-lg border-l-4 border-cyan-500">
                  <h3 className="text-lg font-semibold text-cyan-900 mb-2">🎯 Suivi de Progression</h3>
                  <p className="text-slate-700">
                    Grille de suivi individuel par table maîtrisée. Chaque élève peut visualiser sa progression et célébrer ses réussites.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg shadow-lg p-6 sm:p-8 text-white text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Commencez à Utiliser ces Ressources ! 🚀
            </h2>
            <p className="text-base sm:text-lg text-emerald-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Exercices interactifs, fiches PDF imprimables et jeux éducatifs pour enrichir vos séances de mathématiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/fr/table-de-multiplication/1-10"
                className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors inline-flex items-center justify-center"
              >
                <span className="mr-2">📚</span>
                Découvrir les Exercices
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/fr/table-de-multiplication"
                className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-800 transition-colors inline-flex items-center justify-center"
              >
                Retour à l&apos;Accueil
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-emerald-400">
              <p className="text-emerald-100 text-sm">
                💡 <strong>Conseil :</strong> 10-15 minutes de pratique quotidienne sont bien plus efficaces qu&apos;une longue séance hebdomadaire !
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

