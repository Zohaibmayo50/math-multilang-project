'use client'

import Link from 'next/link'
import Header from './Header'
import PracticePreview from './PracticePreview'
import GamesSection from './GamesSection'
import PrintableExercises from './PrintableExercises'
import Footer from './Footer'

interface RangePageProps {
  rangeStart: number
  rangeEnd: number
  nextRangeUrl?: string
  prevRangeUrl?: string
  difficultyLevel: 'beginner' | 'intermediate' | 'advanced'
  difficultyColor: string
}

export default function RangePage({ 
  rangeStart, 
  rangeEnd, 
  nextRangeUrl, 
  prevRangeUrl,
  difficultyLevel,
  difficultyColor
}: RangePageProps) {
  const rangeNumbers = Array.from(
    { length: rangeEnd - rangeStart + 1 }, 
    (_, i) => rangeStart + i
  )
  
  const difficultyLabels = {
    beginner: 'Niveau Débutant',
    intermediate: 'Niveau Intermédiaire',
    advanced: 'Niveau Avancé'
  }
  
  const difficultyDescriptions = {
    beginner: 'Cette plage est idéale pour les étudiants qui commencent à apprendre la multiplication.',
    intermediate: 'Cette plage est pour les étudiants qui connaissent les tables de base et veulent améliorer leurs compétences.',
    advanced: 'Cette plage est pour les étudiants avancés qui veulent pratiquer la multiplication avec de plus grands nombres.'
  }
  
  const colors = [
    'from-blue-500 to-blue-600',
    'from-indigo-500 to-indigo-600',
    'from-purple-500 to-purple-600',
    'from-pink-500 to-pink-600',
    'from-rose-500 to-rose-600',
    'from-orange-500 to-orange-600',
    'from-amber-500 to-amber-600',
    'from-yellow-500 to-yellow-600',
    'from-lime-500 to-lime-600',
    'from-emerald-500 to-emerald-600'
  ]
  
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero / Range Introduction */}
        <section className={`relative overflow-hidden bg-gradient-to-br ${difficultyColor} pt-20 pb-16 md:pt-24 md:pb-20`}>
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Numbers */}
          {rangeNumbers.slice(0, 5).map((num, index) => (
            <div
              key={num}
              className={`absolute text-7xl md:text-8xl font-bold opacity-10 animate-float${index % 2 === 0 ? '' : '-delayed'}`}
              style={{
                top: `${10 + index * 15}%`,
                left: index % 2 === 0 ? `${10 + index * 10}%` : 'auto',
                right: index % 2 !== 0 ? `${5 + index * 8}%` : 'auto'
              }}
            >
              {num}
            </div>
          ))}
          
          {/* Colorful Circles */}
          <div className="absolute top-20 right-[30%] w-32 h-32 bg-yellow-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 left-[20%] w-40 h-40 bg-pink-300/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-[45%] w-28 h-28 bg-green-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-[15%] w-36 h-36 bg-purple-300/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 relative z-10">
          {/* Difficulty Badge with Icon */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border-2 border-white/50">
              <span className="text-3xl">
                {difficultyLevel === 'beginner' ? '🌟' : difficultyLevel === 'intermediate' ? '🚀' : '⭐'}
              </span>
              <span className="text-base font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {difficultyLabels[difficultyLevel]}
              </span>
              {difficultyLevel === 'beginner' && <span className="text-2xl">✨</span>}
              {difficultyLevel === 'intermediate' && <span className="text-2xl">💪</span>}
              {difficultyLevel === 'advanced' && <span className="text-2xl">🏆</span>}
            </div>
          </div>
          
          {/* Main Heading with Fun Elements */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-5xl md:text-6xl animate-bounce">🎯</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {rangeStart} - {rangeEnd}
                </span>
                <br />
                <span className="text-slate-900">Table de Multiplication</span>
              </h1>
              <span className="text-5xl md:text-6xl animate-bounce" style={{ animationDelay: '0.2s' }}>🎨</span>
            </div>
            
            {/* Fun Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto mt-8 mb-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-md border-2 border-blue-100">
                <div className="text-3xl mb-1">📚</div>
                <div className="text-2xl font-bold text-blue-600">{rangeNumbers.length}</div>
                <div className="text-xs text-slate-600">Nombres</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-md border-2 border-indigo-100">
                <div className="text-3xl mb-1">✖️</div>
                <div className="text-2xl font-bold text-indigo-600">{rangeNumbers.length * 10}</div>
                <div className="text-xs text-slate-600">Opérations</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-md border-2 border-purple-100 col-span-2 md:col-span-1">
                <div className="text-3xl mb-1">🎮</div>
                <div className="text-2xl font-bold text-purple-600">Illimitée</div>
                <div className="text-xs text-slate-600">Pratique</div>
              </div>
            </div>
          </div>
          
          {/* Description with Better Typography */}
          <div className="max-w-3xl mx-auto space-y-4 text-center">
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
              Apprenez la <span className="font-semibold text-blue-600">table de multiplication de {rangeStart} à {rangeEnd}</span> avec 
              <span className="font-semibold text-indigo-600"> des jeux amusants</span>, 
              <span className="font-semibold text-purple-600"> des exercices interactifs</span> et 
              <span className="font-semibold text-pink-600"> des fiches imprimables</span> !
            </p>
            
            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <a 
                href="#practice"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                <span className="text-xl">🎯</span>
                <span>Pratiquer Maintenant</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a 
                href="#games"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm text-indigo-600 font-bold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border-2 border-indigo-100"
              >
                <span className="text-xl">🎮</span>
                <span>Apprendre en Jouant</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Context */}
      <section className="section-container bg-white py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 flex items-center justify-center gap-3">
              <span className="text-3xl">📖</span>
              Que Couvre la Table de {rangeStart} à {rangeEnd} ?
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full"></div>
          </div>
          
          <p className="text-base text-slate-700 mb-6 leading-relaxed text-center max-w-2xl mx-auto">
            Cette plage comprend la table de multiplication de chaque nombre entre {rangeStart} et {rangeEnd}. 
            Chacun de ces nombres est multiplié par les nombres de 1 à 10 pour les apprendre.
          </p>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-100 shadow-md">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
              {rangeNumbers.map((num, index) => (
                <div key={num} className="flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow group">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold text-xl shadow-md group-hover:scale-110 transition-transform">
                    {num}
                  </span>
                  <span className="text-lg mt-1">{index % 4 === 0 ? '⭐' : index % 4 === 1 ? '🌟' : index % 4 === 2 ? '✨' : '💫'}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-white/60 rounded-xl p-4 flex items-center gap-3">
              <span className="text-3xl">💡</span>
              <p className="text-sm text-slate-700 leading-relaxed">
                Les étudiants apprennent un total de <span className="font-bold text-indigo-600">{rangeNumbers.length * 10} opérations de multiplication</span> dans cette plage. 
                Grâce à la <span className="font-bold text-purple-600">propriété commutative</span>, ils n'ont en réalité besoin de mémoriser que moins d'opérations 
                (par exemple <span className="font-mono bg-blue-50 px-2 py-0.5 rounded text-xs">{rangeStart} × {rangeEnd} = {rangeEnd} × {rangeStart}</span>).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Area */}
      <PracticePreview rangeStart={rangeStart} rangeEnd={rangeEnd} />

      {/* Games Section */}
      <GamesSection rangeStart={rangeStart} rangeEnd={rangeEnd} />

      {/* Printable Worksheets */}
      <PrintableExercises rangeStart={rangeStart} rangeEnd={rangeEnd} />

      {/* Range Table */}
      <section className="section-container bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-slate-900">
              Tables de Multiplication de {rangeStart} à {rangeEnd} - Liste Complète
            </h2>
            <button
              onClick={() => {
                const printWindow = window.open('', '_blank')
                if (printWindow) {
                  printWindow.document.write(`
                    <!DOCTYPE html>
                    <html>
                    <head>
                      <title>Tables de Multiplication de ${rangeStart} à ${rangeEnd}</title>
                      <style>
                        @media print {
                          @page { margin: 1cm; }
                        }
                        body {
                          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                          padding: 20px;
                          max-width: 1200px;
                          margin: 0 auto;
                        }
                        h1 {
                          text-align: center;
                          color: #1e293b;
                          margin-bottom: 30px;
                          font-size: 28px;
                        }
                        .grid {
                          display: grid;
                          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                          gap: 20px;
                          margin-top: 20px;
                        }
                        .table-box {
                          border: 2px solid #3b82f6;
                          border-radius: 12px;
                          padding: 15px;
                          background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
                        }
                        .table-title {
                          font-size: 18px;
                          font-weight: bold;
                          text-align: center;
                          margin-bottom: 12px;
                          color: #1e40af;
                        }
                        .equation {
                          display: flex;
                          justify-content: space-between;
                          padding: 6px 10px;
                          margin: 4px 0;
                          background: white;
                          border-radius: 6px;
                          font-size: 14px;
                        }
                        .equation-left {
                          color: #475569;
                        }
                        .equation-right {
                          font-weight: 600;
                          color: #1e293b;
                        }
                      </style>
                    </head>
                    <body>
                      <h1>Tables de Multiplication de ${rangeStart} à ${rangeEnd} - Liste Complète</h1>
                      <div class="grid">
                        ${rangeNumbers.map(num => `
                          <div class="table-box">
                            <div class="table-title">Table de ${num}</div>
                            ${[...Array(10)].map((_, i) => `
                              <div class="equation">
                                <span class="equation-left">${num} × ${i + 1}</span>
                                <span class="equation-right">= ${num * (i + 1)}</span>
                              </div>
                            `).join('')}
                          </div>
                        `).join('')}
                      </div>
                    </body>
                    </html>
                  `)
                  printWindow.document.close()
                  setTimeout(() => {
                    printWindow.print()
                  }, 250)
                }
              }}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              TÃ©lÃ©charger / Imprimer Tabla
            </button>
          </div>
          
          <p className="text-center text-slate-700 mb-8 max-w-3xl mx-auto">
            Vous pouvez voir ci-dessous toutes les tables de multiplication de {rangeStart} à {rangeEnd} ensemble. 
            Chaque nombre a sa propre case de couleur.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {rangeNumbers.map((num, index) => {
              const colorIndex = index % colors.length
              
              return (
                <div key={num} className={`bg-gradient-to-br ${colors[colorIndex]} rounded-xl p-4 text-white`}>
                  <div className="font-bold text-lg mb-3 text-center">Table de {num}</div>
                  <div className="space-y-1 text-sm">
                    {[...Array(10)].map((_, i) => (
                      <div key={i} className="flex justify-between items-center bg-white/20 rounded px-2 py-1">
                        <span>{num} × {i + 1}</span>
                        <span className="font-semibold">= {num * (i + 1)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Links to Number Pages */}
      <section className="section-container bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Tables de Multiplicar Individuales en este Plage
          </h2>
          
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Si vous souhaitez apprendre la table de multiplication de chaque nombre en détail, vous pouvez accéder à la 
            page correspondante via les liens suivants. Chaque page contient des modèles, 
            des conseils et des outils de pratique spécifiques pour ce nombre.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {rangeNumbers.map((num) => (
              <Link
                key={num}
                href={`/fr/table-de-multiplication/${num}`}
                className="block bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-slate-900 mb-1">
                      Table de Multiplication de {num}
                    </div>
                    <p className="text-slate-600">
                      Explication détaillée et exemples du nombre {num}
                    </p>
                  </div>
                  <svg 
                    className="w-6 h-6 text-blue-600 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Difficulty & Progression */}
      <section className="section-container bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            ¿Por Qué es Importante este Plage?
          </h2>
          
          <div className="space-y-6">
            <div className={`bg-white rounded-xl p-6 border-l-4 ${
              difficultyLevel === 'beginner' ? 'border-green-500' : 
              difficultyLevel === 'intermediate' ? 'border-yellow-500' : 
              'border-red-500'
            }`}>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                🎯 {difficultyLabels[difficultyLevel]}
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {difficultyDescriptions[difficultyLevel]} {rangeStart === 1 ? 
                  'Comme les nombres sont petits, les étudiants peuvent comprendre et vérifier les résultats plus facilement.' :
                  'Cette plage s\'appuie sur les connaissances acquises dans la plage précédente.'}
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                🧠 Développement Cognitif
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Cette plage aide les étudiants à développer leurs compétences en calcul mental. 
                Avec une pratique régulière, ils commencent à se souvenir automatiquement des multiplications de ces nombres.
              </p>
            </div>
            
            {nextRangeUrl && (
              <div className="bg-white rounded-xl p-6 border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  📈 Préparation pour l'Étape Suivante
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Les étudiants qui apprennent bien cette plage sont prêts à passer à la suivante. 
                  Chaque plage renforce encore la logique de la multiplication et développe la pensée mathématique.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Patterns & Observations */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Modèles dans les Tables de Multiplication de {rangeStart} à {rangeEnd}
          </h2>
          
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Au lieu d'essayer de mémoriser la table de multiplication, comprendre les modèles qu'elle contient 
            accélère le processus d'apprentissage et le rend plus durable.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🔄</span>
                Symétrie (Propriété Commutative)
              </h3>
              <p className="text-slate-700 mb-3">
                Dans la multiplication, l'ordre peut être changé : {rangeStart} × {rangeEnd} = {rangeEnd} × {rangeStart}. 
                Cette propriété facilite l'apprentissage.
              </p>
              <p className="text-sm text-slate-600 italic">
                Exemple : Si vous connaissez un nombre, vous connaissez aussi son inverse.
              </p>
            </div>
            
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">➕</span>
                Addition Répétée
              </h3>
              <p className="text-slate-700 mb-3">
                {rangeStart} × 3 = {rangeStart} + {rangeStart} + {rangeStart} = {rangeStart * 3}. 
                La multiplication est l'addition répétée du même nombre.
              </p>
              <p className="text-sm text-slate-600 italic">
                Cette logique est importante pour comprendre le sens fondamental de la multiplication.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">✖️</span>
                Modèles de Nombres Pairs
              </h3>
              <p className="text-slate-700 mb-3">
                {rangeNumbers.filter(n => n % 2 === 0).length > 0 ? 
                  `Les nombres pairs dans cette plage (${rangeNumbers.filter(n => n % 2 === 0).join(', ')}) donnent toujours des résultats pairs.` :
                  'Les tables de multiplication des nombres dans cette plage montrent des modèles spécifiques.'
                }
              </p>
              <p className="text-sm text-slate-600 italic">
                Comprendre la logique des nombres pairs et impairs réduit les erreurs.
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🔢</span>
                Modèles du Dernier Chiffre
              </h3>
              <p className="text-slate-700 mb-3">
                Dans la table de multiplication de chaque nombre, les derniers chiffres se répètent dans un ordre spécifique. 
                Remarquer ce modèle est utile pour la vérification.
              </p>
              <p className="text-sm text-slate-600 italic">
                Par exemple : Les nombres qui se terminent par 5 se terminent toujours par 0 ou 5.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Study This Range */}
      <section className="section-container bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Comment Apprendre la Table de Multiplication de {rangeStart} à {rangeEnd} ?
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                1. Approche Systématique
              </h3>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                Au lieu d'essayer d'apprendre tous les nombres de cette plage à la fois, concentrez-vous sur 1-2 nombres 
                chaque jour. Après avoir bien appris un nombre, passez au suivant.
              </p>
              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-600">
                <p className="text-slate-700">
                  <strong>Recommandation :</strong> Après avoir révisé chaque nombre pendant 3-4 jours consécutifs, 
                  commencez à résoudre des problèmes mélangés.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                2. Techniques de Visualisation
              </h3>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                Imaginer les nombres visuellement facilite la mémorisation :
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-700">
                  <span className="text-blue-600 font-bold mr-3 mt-1">•</span>
                  <div>
                    <strong>Pensez en groupes :</strong> Imaginez {rangeStart} × 4 comme {rangeStart} personnes 
                    formant 4 groupes.
                  </div>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="text-blue-600 font-bold mr-3 mt-1">•</span>
                  <div>
                    <strong>Créez des histoires :</strong> Créer une petite histoire pour chaque nombre rend 
                    la mémorisation amusante.
                  </div>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="text-blue-600 font-bold mr-3 mt-1">•</span>
                  <div>
                    <strong>Utilisez des cartes colorées :</strong> Attribuer une couleur différente à chaque nombre renforce 
                    la mémoire visuelle.
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                3. Exercices de Pratique
              </h3>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                La pratique régulière garantit que les informations apprises deviennent permanentes :
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <p className="font-semibold text-slate-900 mb-2">Questions et Réponses Rapides</p>
                  <p className="text-slate-700 text-sm">
                    Résolvez au moins 10 questions aléatoires par jour et chronométrez-vous.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <p className="font-semibold text-slate-900 mb-2">Tests Écrits</p>
                  <p className="text-slate-700 text-sm">
                    Faites un test écrit une fois par semaine et analysez vos erreurs.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <p className="font-semibold text-slate-900 mb-2">Jeux</p>
                  <p className="text-slate-700 text-sm">
                    Jouer à des jeux de tables de multiplication permet d'apprendre tout en s'amusant.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <p className="font-semibold text-slate-900 mb-2">Compétition avec des Amis</p>
                  <p className="text-slate-700 text-sm">
                    Vous pouvez augmenter votre motivation en compétitionnant avec vos amis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation: Previous & Next Range */}
      <section className="section-container bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            {nextRangeUrl ? 'Continuez Votre Parcours d\'Apprentissage' : 'Félicitations !'}
          </h2>
          
          {nextRangeUrl ? (
            <>
              <p className="text-xl mb-8 leading-relaxed opacity-95 text-center">
                Si vous pouvez utiliser confortablement la table de multiplication de {rangeStart} à {rangeEnd}, 
                vous êtes prêt à passer à l'étape suivante !
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                {prevRangeUrl && (
                  <Link
                    href={prevRangeUrl}
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                    Plage Précédente
                  </Link>
                )}
                
                <Link
                  href={nextRangeUrl}
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
                >
                  Aller à la Plage Suivante
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </>
          ) : (
            <p className="text-xl leading-relaxed opacity-95 text-center">
              Vous avez terminé toutes les tables de multiplication ! Vous connaissez maintenant toutes les opérations de multiplication de 1 à 100.
            </p>
          )}
          
          <p className="mt-6 text-sm opacity-80 text-center">
            Soyez patient et constant pour apprendre toutes les tables de multiplication. Chaque plage s'appuie sur la précédente.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
    </>
  )
}
