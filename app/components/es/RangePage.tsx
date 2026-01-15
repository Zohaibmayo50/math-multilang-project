'use client'

import Link from 'next/link'
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
    beginner: 'Nivel Principiante',
    intermediate: 'Nivel Intermedio',
    advanced: 'Nivel Avanzado'
  }
  
  const difficultyDescriptions = {
    beginner: 'Este rango es ideal para estudiantes que están comenzando a aprender la multiplicación.',
    intermediate: 'Este rango es para estudiantes que conocen las tablas básicas y quieren mejorar sus habilidades.',
    advanced: 'Este rango es para estudiantes avanzados que quieren practicar la multiplicación con números más grandes.'
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
                <span className="text-slate-900">Tabla de Multiplicar</span>
              </h1>
              <span className="text-5xl md:text-6xl animate-bounce" style={{ animationDelay: '0.2s' }}>🎨</span>
            </div>
            
            {/* Fun Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto mt-8 mb-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-md border-2 border-blue-100">
                <div className="text-3xl mb-1">📚</div>
                <div className="text-2xl font-bold text-blue-600">{rangeNumbers.length}</div>
                <div className="text-xs text-slate-600">Números</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-md border-2 border-indigo-100">
                <div className="text-3xl mb-1">✖️</div>
                <div className="text-2xl font-bold text-indigo-600">{rangeNumbers.length * 10}</div>
                <div className="text-xs text-slate-600">Operaciones</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-md border-2 border-purple-100 col-span-2 md:col-span-1">
                <div className="text-3xl mb-1">🎮</div>
                <div className="text-2xl font-bold text-purple-600">Ilimitada</div>
                <div className="text-xs text-slate-600">Práctica</div>
              </div>
            </div>
          </div>
          
          {/* Description with Better Typography */}
          <div className="max-w-3xl mx-auto space-y-4 text-center">
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
              ¡Aprende la <span className="font-semibold text-blue-600">tabla de multiplicar del {rangeStart} al {rangeEnd}</span> con 
              <span className="font-semibold text-indigo-600"> juegos divertidos</span>, 
              <span className="font-semibold text-purple-600"> ejercicios interactivos</span> y 
              <span className="font-semibold text-pink-600"> hojas de trabajo imprimibles</span>!
            </p>
            
            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <a 
                href="#practice"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                <span className="text-xl">🎯</span>
                <span>Practicar Ahora</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a 
                href="#games"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm text-indigo-600 font-bold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border-2 border-indigo-100"
              >
                <span className="text-xl">🎮</span>
                <span>Aprender Jugando</span>
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
              ¿Qué Cubre la Tabla del {rangeStart} al {rangeEnd}?
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full"></div>
          </div>
          
          <p className="text-base text-slate-700 mb-6 leading-relaxed text-center max-w-2xl mx-auto">
            Este rango incluye la tabla de multiplicar de cada número entre {rangeStart} y {rangeEnd}. 
            Cada uno de estos números se multiplica por los números del 1 al 10 para aprenderlos.
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
                Los estudiantes aprenden un total de <span className="font-bold text-indigo-600">{rangeNumbers.length * 10} operaciones de multiplicación</span> en este rango. 
                Gracias a la <span className="font-bold text-purple-600">propiedad conmutativa</span>, en realidad necesitan memorizar menos operaciones 
                (por ejemplo <span className="font-mono bg-blue-50 px-2 py-0.5 rounded text-xs">{rangeStart} × {rangeEnd} = {rangeEnd} × {rangeStart}</span>).
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
              Tabla de Multiplicar del {rangeStart} al {rangeEnd} - Lista Completa
            </h2>
            <button
              onClick={() => {
                const printWindow = window.open('', '_blank')
                if (printWindow) {
                  printWindow.document.write(`
                    <!DOCTYPE html>
                    <html>
                    <head>
                      <title>Tabla de Multiplicar del ${rangeStart} al ${rangeEnd}</title>
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
                      <h1>Tabla de Multiplicar del ${rangeStart} al ${rangeEnd} - Lista Completa</h1>
                      <div class="grid">
                        ${rangeNumbers.map(num => `
                          <div class="table-box">
                            <div class="table-title">Tabla del ${num}</div>
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
              Descargar / Imprimir Tabla
            </button>
          </div>
          
          <p className="text-center text-slate-700 mb-8 max-w-3xl mx-auto">
            A continuación puedes ver todas las tablas de multiplicar del {rangeStart} al {rangeEnd} juntas. 
            Cada número tiene su propia casilla de color.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {rangeNumbers.map((num, index) => {
              const colorIndex = index % colors.length
              
              return (
                <div key={num} className={`bg-gradient-to-br ${colors[colorIndex]} rounded-xl p-4 text-white`}>
                  <div className="font-bold text-lg mb-3 text-center">Tabla del {num}</div>
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
            Tablas de Multiplicar Individuales en este Rango
          </h2>
          
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Si deseas aprender la tabla de multiplicar de cada número en detalle, puedes acceder a la 
            página correspondiente a través de los siguientes enlaces. Cada página contiene patrones, 
            consejos y herramientas de práctica específicas para ese número.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {rangeNumbers.map((num) => (
              <Link
                key={num}
                href={`/tabla/${num}`}
                className="block bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-slate-900 mb-1">
                      Tabla de Multiplicar del {num}
                    </div>
                    <p className="text-slate-600">
                      Explicación detallada y ejemplos del número {num}
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
            ¿Por Qué es Importante este Rango?
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
                  'Como los números son pequeños, los estudiantes pueden entender y verificar los resultados más fácilmente.' :
                  'Este rango se construye sobre el conocimiento adquirido en el rango anterior.'}
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                🧠 Desarrollo Cognitivo
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Este rango ayuda a los estudiantes a desarrollar sus habilidades de cálculo mental. 
                Con la práctica regular, comienzan a recordar automáticamente las multiplicaciones de estos números.
              </p>
            </div>
            
            {nextRangeUrl && (
              <div className="bg-white rounded-xl p-6 border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  📈 Preparación para el Siguiente Paso
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Los estudiantes que aprenden bien este rango están listos para pasar al siguiente. 
                  Cada rango refuerza aún más la lógica de la multiplicación y desarrolla el pensamiento matemático.
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
            Patrones en la Tabla de Multiplicar del {rangeStart} al {rangeEnd}
          </h2>
          
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            En lugar de intentar memorizar la tabla de multiplicar, entender los patrones que contiene 
            acelera el proceso de aprendizaje y lo hace más duradero.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🔄</span>
                Simetría (Propiedad Conmutativa)
              </h3>
              <p className="text-slate-700 mb-3">
                En la multiplicación, el orden se puede cambiar: {rangeStart} × {rangeEnd} = {rangeEnd} × {rangeStart}. 
                Esta propiedad facilita el aprendizaje.
              </p>
              <p className="text-sm text-slate-600 italic">
                Ejemplo: Si conoces un número, también conoces su inverso.
              </p>
            </div>
            
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">➕</span>
                Suma Repetida
              </h3>
              <p className="text-slate-700 mb-3">
                {rangeStart} × 3 = {rangeStart} + {rangeStart} + {rangeStart} = {rangeStart * 3}. 
                La multiplicación es la suma repetida del mismo número.
              </p>
              <p className="text-sm text-slate-600 italic">
                Esta lógica es importante para comprender el significado fundamental de la multiplicación.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">✖️</span>
                Patrones de Números Pares
              </h3>
              <p className="text-slate-700 mb-3">
                {rangeNumbers.filter(n => n % 2 === 0).length > 0 ? 
                  `Los números pares en este rango (${rangeNumbers.filter(n => n % 2 === 0).join(', ')}) siempre dan resultados pares.` :
                  'Las tablas de multiplicar de los números en este rango muestran patrones específicos.'
                }
              </p>
              <p className="text-sm text-slate-600 italic">
                Comprender la lógica de los números pares e impares reduce los errores.
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🔢</span>
                Patrones del Último Dígito
              </h3>
              <p className="text-slate-700 mb-3">
                En la tabla de multiplicar de cada número, los últimos dígitos se repiten en un orden específico. 
                Notar este patrón es útil para la verificación.
              </p>
              <p className="text-sm text-slate-600 italic">
                Por ejemplo: Los números que terminan en 5 siempre terminan en 0 o 5.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Study This Range */}
      <section className="section-container bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            ¿Cómo Aprender la Tabla de Multiplicar del {rangeStart} al {rangeEnd}?
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                1. Enfoque Sistemático
              </h3>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                En lugar de intentar aprender todos los números de este rango a la vez, concéntrate en 1-2 números 
                cada día. Después de aprender bien un número, pasa al siguiente.
              </p>
              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-600">
                <p className="text-slate-700">
                  <strong>Recomendación:</strong> Después de repasar cada número durante 3-4 días consecutivos, 
                  comienza a resolver problemas mezclados.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                2. Técnicas de Visualización
              </h3>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                Imaginar los números visualmente facilita recordarlos:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-700">
                  <span className="text-blue-600 font-bold mr-3 mt-1">•</span>
                  <div>
                    <strong>Piensa en grupos:</strong> Imagina {rangeStart} × 4 como {rangeStart} personas 
                    formando 4 grupos.
                  </div>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="text-blue-600 font-bold mr-3 mt-1">•</span>
                  <div>
                    <strong>Crea historias:</strong> Crear una historia corta para cada número hace 
                    que recordar sea divertido.
                  </div>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="text-blue-600 font-bold mr-3 mt-1">•</span>
                  <div>
                    <strong>Usa tarjetas de colores:</strong> Asignar un color diferente a cada número fortalece 
                    la memoria visual.
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                3. Ejercicios de Práctica
              </h3>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                La práctica regular asegura que la información aprendida sea permanente:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <p className="font-semibold text-slate-900 mb-2">Preguntas y Respuestas Rápidas</p>
                  <p className="text-slate-700 text-sm">
                    Resuelve al menos 10 preguntas aleatorias al día y mide tu tiempo.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <p className="font-semibold text-slate-900 mb-2">Pruebas Escritas</p>
                  <p className="text-slate-700 text-sm">
                    Haz una prueba escrita una vez a la semana y analiza tus errores.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <p className="font-semibold text-slate-900 mb-2">Juegos</p>
                  <p className="text-slate-700 text-sm">
                    Jugar juegos de tablas de multiplicar permite aprender mientras te diviertes.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <p className="font-semibold text-slate-900 mb-2">Competir con Amigos</p>
                  <p className="text-slate-700 text-sm">
                    Puedes aumentar tu motivación compitiendo con tus amigos.
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
            {nextRangeUrl ? 'Continúa tu Viaje de Aprendizaje' : '¡Felicitaciones!'}
          </h2>
          
          {nextRangeUrl ? (
            <>
              <p className="text-xl mb-8 leading-relaxed opacity-95 text-center">
                Si puedes usar cómodamente la tabla de multiplicar del {rangeStart} al {rangeEnd}, 
                ¡estás listo para pasar al siguiente paso!
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
                    Rango Anterior
                  </Link>
                )}
                
                <Link
                  href={nextRangeUrl}
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
                >
                  Ir al Siguiente Rango
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </>
          ) : (
            <p className="text-xl leading-relaxed opacity-95 text-center">
              ¡Has completado todas las tablas de multiplicar! Ahora conoces todas las operaciones de multiplicación del 1 al 100.
            </p>
          )}
          
          <p className="mt-6 text-sm opacity-80 text-center">
            Sé paciente y constante para aprender todas las tablas de multiplicar. Cada rango se construye sobre el anterior.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
