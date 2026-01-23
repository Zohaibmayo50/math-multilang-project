'use client'

import Link from 'next/link'
import PracticePreview from './PracticePreview'
import GamesSection from './GamesSection'
import PrintableExercises from './PrintableExercises'
import Footer from '../Footer'

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
    beginner: 'Nybörjarnivå',
    intermediate: 'Mellannivå',
    advanced: 'Avancerad Nivå'
  }
  
  const difficultyDescriptions = {
    beginner: 'Detta intervall är idealiskt för elever som är nya på multiplikation.',
    intermediate: 'Detta intervall är för elever som känner till grundläggande multiplikationstabeller och vill utveckla sina färdigheter.',
    advanced: 'Detta intervall är för avancerade elever som vill öva multiplikation med större tal.'
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
                <span className="text-slate-900">Multiplikationstabell</span>
              </h1>
              <span className="text-5xl md:text-6xl animate-bounce" style={{ animationDelay: '0.2s' }}>🎨</span>
            </div>
            
            {/* Fun Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto mt-8 mb-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-md border-2 border-blue-100">
                <div className="text-3xl mb-1">📚</div>
                <div className="text-2xl font-bold text-blue-600">{rangeNumbers.length}</div>
                <div className="text-xs text-slate-600">Tal</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-md border-2 border-indigo-100">
                <div className="text-3xl mb-1">✖️</div>
                <div className="text-2xl font-bold text-indigo-600">{rangeNumbers.length * 10}</div>
                <div className="text-xs text-slate-600">Operationer</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-md border-2 border-purple-100 col-span-2 md:col-span-1">
                <div className="text-3xl mb-1">🎮</div>
                <div className="text-2xl font-bold text-purple-600">Obegränsat</div>
                <div className="text-xs text-slate-600">Övning</div>
              </div>
            </div>
          </div>
          
          {/* Description with Better Typography */}
          <div className="max-w-3xl mx-auto space-y-4 text-center">
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
              <span className="font-semibold text-blue-600">Lär dig multiplikationstabellen från {rangeStart} till {rangeEnd}</span> med 
              <span className="font-semibold text-indigo-600"> roliga spel</span>, 
              <span className="font-semibold text-purple-600"> interaktiva övningar</span> och 
              <span className="font-semibold text-pink-600"> utskrivbara arbetsblad</span>!
            </p>
            
            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <a 
                href="#practice"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                <span className="text-xl">🎯</span>
                <span>Öva Nu</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a 
                href="#games"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm text-indigo-600 font-bold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border-2 border-indigo-100"
              >
                <span className="text-xl">🎮</span>
                <span>Lär dig med Spel</span>
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
              Vad Täcker Multiplikationstabellen från {rangeStart} till {rangeEnd}?
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full"></div>
          </div>
          
          <p className="text-base text-slate-700 mb-6 leading-relaxed text-center max-w-2xl mx-auto">
            Detta intervall innehåller multiplikationstabellen för varje tal mellan {rangeStart} och {rangeEnd}. 
            Vart och ett av dessa tal multipliceras med tal från 1 till 10.
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
                Elever lär sig totalt <span className="font-bold text-indigo-600">{rangeNumbers.length * 10} multiplikationer</span> i detta intervall. 
                Tack vare <span className="font-bold text-purple-600">den kommutativa egenskapen</span> är antalet operationer som faktiskt behöver memoreras färre 
                (till exempel <span className="font-mono bg-blue-50 px-2 py-0.5 rounded text-xs">{rangeStart} × {rangeEnd} = {rangeEnd} × {rangeStart}</span>).
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
              Multiplikationstabell från {rangeStart} till {rangeEnd} - Komplett Lista
            </h2>
            <button
              onClick={() => {
                const printWindow = window.open('', '_blank')
                if (printWindow) {
                  printWindow.document.write(`
                    <!DOCTYPE html>
                    <html>
                    <head>
                      <title>Multiplikationstabell från ${rangeStart} till ${rangeEnd}</title>
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
                      <h1>Multiplikationstabell från ${rangeStart} till ${rangeEnd} - Komplett Lista</h1>
                      <div class="grid">
                        ${rangeNumbers.map(num => `
                          <div class="table-box">
                            <div class="table-title">${num} Gångertabell</div>
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
              Ladda Ner / Skriv Ut Tabell
            </button>
          </div>
          
          <p className="text-center text-slate-700 mb-8 max-w-3xl mx-auto">
            Nedan kan du se alla multiplikationstabeller från {rangeStart} till {rangeEnd} tillsammans. 
            Varje tal har sin egen färgglada ruta.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {rangeNumbers.map((num, index) => {
              const colorIndex = index % colors.length
              
              return (
                <div key={num} className={`bg-gradient-to-br ${colors[colorIndex]} rounded-xl p-4 text-white`}>
                  <div className="font-bold text-lg mb-3 text-center">{num} Gångertabell</div>
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
            Individuella Multiplikationstabeller i Detta Intervall
          </h2>
          
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Om du vill lära dig varje tals multiplikationstabell i detalj kan du gå till den relevanta sidan 
            via länkarna nedan. Varje sida innehåller mönster, tips och övningsverktyg som är specifika för det talet.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {rangeNumbers.map((num) => (
              <Link
                key={num}
                href={`/sv/multiplikationstabeller/${num}`}
                className="block bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-slate-900 mb-1">
                      {num} Gångertabell
                    </div>
                    <p className="text-slate-600">
                      Detaljerad förklaring och exempel för talet {num}
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
            Varför Är Detta Intervall Viktigt?
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
                  'Eftersom talen är små kan eleverna lättare förstå och verifiera resultaten.' :
                  'Detta intervall bygger på kunskapen från föregående intervall.'}
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                🧠 Kognitiv Utveckling
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Detta intervall hjälper elever att utveckla sina mentala beräkningsfärdigheter. 
                Med regelbunden övning börjar de automatiskt komma ihåg produkterna av dessa tal.
              </p>
            </div>
            
            {nextRangeUrl && (
              <div className="bg-white rounded-xl p-6 border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  📈 Förberedelse för Nästa Steg
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Elever som lär sig detta intervall väl är redo att gå vidare till nästa intervall. 
                  Varje intervall stärker förståelsen för multiplikation ytterligare och utvecklar matematiskt tänkande.
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
            Mönster i Multiplikationstabellen från {rangeStart} till {rangeEnd}
          </h2>
          
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Att förstå mönster i multiplikationstabellen istället för att försöka memorera den 
            gör både inlärningsprocessen snabbare och mer bestående.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🔄</span>
                Symmetri (Kommutativ Egenskap)
              </h3>
              <p className="text-slate-700 mb-3">
                Ordningen i multiplikation kan ändras: {rangeStart} × {rangeEnd} = {rangeEnd} × {rangeStart}. 
                Denna egenskap gör inlärningen enklare.
              </p>
              <p className="text-sm text-slate-600 italic">
                Exempel: Om du känner till ett tal, känner du också till dess motsats.
              </p>
            </div>
            
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">➕</span>
                Upprepad Addition
              </h3>
              <p className="text-slate-700 mb-3">
                {rangeStart} × 3 = {rangeStart} + {rangeStart} + {rangeStart} = {rangeStart * 3}. 
                Multiplikation är upprepad addition av samma tal.
              </p>
              <p className="text-sm text-slate-600 italic">
                Denna logik är viktig för att förstå den grundläggande innebörden av multiplikation.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">✖️</span>
                Jämna Tal-Mönster
              </h3>
              <p className="text-slate-700 mb-3">
                {rangeNumbers.filter(n => n % 2 === 0).length > 0 ? 
                  `Jämna tal i detta intervall (${rangeNumbers.filter(n => n % 2 === 0).join(', ')}) ger alltid jämna resultat.` :
                  'Multiplikationstabellerna för tal i detta intervall visar specifika mönster.'
                }
              </p>
              <p className="text-sm text-slate-600 italic">
                Att förstå logiken med jämna och udda tal minskar fel.
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🔢</span>
                Sista Siffrans Mönster
              </h3>
              <p className="text-slate-700 mb-3">
                I varje tals multiplikationstabell upprepas de sista siffrorna i ett visst mönster. 
                Att märka detta mönster är användbart för verifiering.
              </p>
              <p className="text-sm text-slate-600 italic">
                Till exempel: Tal som slutar på 5 slutar alltid på 0 eller 5.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Study This Range */}
      <section className="section-container bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Hur Lär Man Sig Multiplikationstabellen från {rangeStart} till {rangeEnd}?
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                1. Systematisk Metod
              </h3>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                Istället för att försöka lära dig alla tal i detta intervall på en gång, fokusera på 1-2 tal varje dag. 
                Gå vidare till nästa efter att du har lärt dig ett tal ordentligt.
              </p>
              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-600">
                <p className="text-slate-700">
                  <strong>Rekommendation:</strong> Efter att ha repeterat varje tal i 3-4 dagar i rad, 
                  börja lösa blandade problem.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                2. Visualiseringstekniker
              </h3>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                Att visualisera tal gör dem lättare att komma ihåg:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-700">
                  <span className="text-blue-600 font-bold mr-3 mt-1">•</span>
                  <div>
                    <strong>Tänk i grupper:</strong> Föreställ dig {rangeStart} × 4 som {rangeStart} personer 
                    som bildar 4 grupper.
                  </div>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="text-blue-600 font-bold mr-3 mt-1">•</span>
                  <div>
                    <strong>Skapa berättelser:</strong> Att skapa en kort historia för varje tal 
                    gör det roligt att komma ihåg.
                  </div>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="text-blue-600 font-bold mr-3 mt-1">•</span>
                  <div>
                    <strong>Använd färgglada kort:</strong> Att tilldela olika färger till varje tal 
                    stärker det visuella minnet.
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                3. Övningsuppgifter
              </h3>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                Regelbunden övning säkerställer att den inlärda kunskapen blir bestående:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <p className="font-semibold text-slate-900 mb-2">Snabba Frågor-Svar</p>
                  <p className="text-slate-700 text-sm">
                    Lös minst 10 slumpmässiga problem om dagen och mät din tid.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <p className="font-semibold text-slate-900 mb-2">Skriftliga Prov</p>
                  <p className="text-slate-700 text-sm">
                    Gör ett skriftligt prov en gång i veckan och analysera dina misstag.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <p className="font-semibold text-slate-900 mb-2">Spel</p>
                  <p className="text-slate-700 text-sm">
                    Att spela multiplikationsspel gör att man lär sig genom att ha kul.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <p className="font-semibold text-slate-900 mb-2">Tävla med Vänner</p>
                  <p className="text-slate-700 text-sm">
                    Du kan öka din motivation genom att tävla med dina vänner.
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
            {nextRangeUrl ? 'Fortsätt Din Inlärningsresa' : 'Grattis!'}
          </h2>
          
          {nextRangeUrl ? (
            <>
              <p className="text-xl mb-8 leading-relaxed opacity-95 text-center">
                Om du kan använda multiplikationstabellen från {rangeStart} till {rangeEnd} bekvämt, 
                är du redo att gå vidare till nästa steg!
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
                    Föregående Intervall
                  </Link>
                )}
                
                <Link
                  href={nextRangeUrl}
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
                >
                  Gå till Nästa Intervall
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </>
          ) : (
            <p className="text-xl leading-relaxed opacity-95 text-center">
              Du har slutfört alla multiplikationstabeller! Nu känner du till alla multiplikationer från 1 till 100.
            </p>
          )}
          
          <p className="mt-6 text-sm opacity-80 text-center">
            Var tålmodig och regelbunden för att lära dig alla multiplikationstabeller. Varje intervall bygger på det föregående.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
