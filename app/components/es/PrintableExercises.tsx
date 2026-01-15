'use client'

import { useState, useRef } from 'react'

interface PrintableExercisesProps {
  rangeStart?: number
  rangeEnd?: number
}

export default function PrintableExercises({ rangeStart: defaultRangeStart = 1, rangeEnd: defaultRangeEnd = 10 }: PrintableExercisesProps) {
  const [selectedTable, setSelectedTable] = useState<number>(defaultRangeStart)
  const [questionCount, setQuestionCount] = useState<number>(20)
  const [includeAnswers, setIncludeAnswers] = useState<boolean>(false)
  const [exerciseType, setExerciseType] = useState<'single' | 'mixed' | 'range'>('range')
  const [rangeStart, setRangeStart] = useState<number>(defaultRangeStart)
  const [rangeEnd, setRangeEnd] = useState<number>(defaultRangeEnd)
  const printRef = useRef<HTMLDivElement>(null)

  const generateQuestions = () => {
    const questions: { num1: number; num2: number; answer: number }[] = []
    
    if (exerciseType === 'single') {
      for (let i = 0; i < questionCount; i++) {
        const num2 = Math.floor(Math.random() * 10) + 1
        questions.push({ num1: selectedTable, num2, answer: selectedTable * num2 })
      }
    } else if (exerciseType === 'mixed') {
      for (let i = 0; i < questionCount; i++) {
        const num1 = Math.floor(Math.random() * 10) + 1
        const num2 = Math.floor(Math.random() * 10) + 1
        questions.push({ num1, num2, answer: num1 * num2 })
      }
    } else {
      for (let i = 0; i < questionCount; i++) {
        const num1 = Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart
        const num2 = Math.floor(Math.random() * 10) + 1
        questions.push({ num1, num2, answer: num1 * num2 })
      }
    }
    
    return questions
  }

  const handlePrint = () => {
    const questions = generateQuestions()
    const printWindow = window.open('', '_blank')
    
    if (printWindow) {
      const title = exerciseType === 'single' 
        ? `Ejercicio de la Tabla del ${selectedTable}`
        : exerciseType === 'mixed'
        ? 'Ejercicio de Tablas de Multiplicar Mixtas'
        : `Ejercicio de Tablas de Multiplicar ${rangeStart}-${rangeEnd}`

      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>${title}</title>
            <style>
              @media print {
                body { margin: 0; padding: 20px; }
                .no-print { display: none; }
              }
              body {
                font-family: Arial, sans-serif;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
              }
              h1 {
                text-align: center;
                color: #1e40af;
                margin-bottom: 10px;
              }
              .info {
                text-align: center;
                color: #64748b;
                margin-bottom: 30px;
              }
              .questions {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 20px;
              }
              .question {
                padding: 15px;
                border: 2px solid #e2e8f0;
                border-radius: 8px;
                background: #f8fafc;
              }
              .question-number {
                font-weight: bold;
                color: #475569;
                margin-bottom: 8px;
              }
              .equation {
                font-size: 20px;
                font-weight: bold;
                color: #1e293b;
                margin-bottom: 10px;
              }
              .answer-line {
                border-bottom: 2px solid #cbd5e1;
                padding-bottom: 5px;
                min-height: 30px;
              }
              .answer-key {
                margin-top: 40px;
                padding-top: 20px;
                border-top: 3px dashed #cbd5e1;
              }
              .answer-key h2 {
                color: #15803d;
                margin-bottom: 20px;
              }
              .answers {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 10px;
              }
              .answer-item {
                padding: 8px;
                background: #f0fdf4;
                border-radius: 6px;
                font-size: 14px;
              }
              .print-button {
                display: block;
                margin: 20px auto;
                padding: 12px 24px;
                background: #2563eb;
                color: white;
                border: none;
                border-radius: 8px;
                font-size: 16px;
                cursor: pointer;
              }
              .print-button:hover {
                background: #1d4ed8;
              }
            </style>
          </head>
          <body>
            <button onclick="window.print()" class="print-button no-print">🖨️ Imprimir</button>
            <h1>${title}</h1>
            <div class="info">
              <p>Fecha: ${new Date().toLocaleDateString('es-ES')}</p>
              <p>Total de Preguntas: ${questionCount}</p>
            </div>
            <div class="questions">
              ${questions.map((q, i) => `
                <div class="question">
                  <div class="question-number">Pregunta ${i + 1}</div>
                  <div class="equation">${q.num1} × ${q.num2} = </div>
                  <div class="answer-line"></div>
                </div>
              `).join('')}
            </div>
            ${includeAnswers ? `
              <div class="answer-key">
                <h2>Clave de Respuestas</h2>
                <div class="answers">
                  ${questions.map((q, i) => `
                    <div class="answer-item">
                      <strong>${i + 1}.</strong> ${q.answer}
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </body>
        </html>
      `)
      printWindow.document.close()
    }
  }

  const handleDownloadPDF = async () => {
    // For now, we'll use the print dialog which allows "Save as PDF"
    // In a production environment, you'd use jsPDF or similar library
    handlePrint()
  }

  return (
    <section id="pdf-exercises" className="section-container bg-gradient-to-br from-purple-50 to-pink-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-slate-900 mb-4 text-center">
          📄 Ejercicios Imprimibles
        </h2>
        
        <p className="text-center text-slate-700 max-w-3xl mx-auto mb-12 text-lg">
          Crea ejercicios de tablas de multiplicar personalizados para tus estudiantes o hijos. 
          Imprime o guarda como PDF.
        </p>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Left Column - Settings */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Tipo de Ejercicio
                </label>
                <div className="space-y-2">
                  <label className="flex items-center p-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
                    <input
                      type="radio"
                      name="exerciseType"
                      checked={exerciseType === 'single'}
                      onChange={() => setExerciseType('single')}
                      className="mr-3"
                    />
                    <div>
                      <div className="font-medium text-slate-900">Tabla Única</div>
                      <div className="text-sm text-slate-600">Una tabla de multiplicar específica</div>
                    </div>
                  </label>
                  
                  <label className="flex items-center p-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
                    <input
                      type="radio"
                      name="exerciseType"
                      checked={exerciseType === 'range'}
                      onChange={() => setExerciseType('range')}
                      className="mr-3"
                    />
                    <div>
                      <div className="font-medium text-slate-900">Rango</div>
                      <div className="text-sm text-slate-600">Tablas en un rango específico</div>
                    </div>
                  </label>
                  
                  <label className="flex items-center p-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
                    <input
                      type="radio"
                      name="exerciseType"
                      checked={exerciseType === 'mixed'}
                      onChange={() => setExerciseType('mixed')}
                      className="mr-3"
                    />
                    <div>
                      <div className="font-medium text-slate-900">Mixto</div>
                      <div className="text-sm text-slate-600">Aleatorio de todas las tablas</div>
                    </div>
                  </label>
                </div>
              </div>

              {exerciseType === 'single' && (
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Tabla de Multiplicar
                  </label>
                  <select
                    value={selectedTable}
                    onChange={(e) => setSelectedTable(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                  >
                    {[...Array(11)].map((_, i) => (
                      <option key={i + 2} value={i + 2}>
                        Tabla del {i + 2}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {exerciseType === 'range' && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Inicio
                    </label>
                    <select
                      value={rangeStart}
                      onChange={(e) => setRangeStart(Number(e.target.value))}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                    >
                      {[...Array(11)].map((_, i) => (
                        <option key={i + 2} value={i + 2}>{i + 2}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Fin
                    </label>
                    <select
                      value={rangeEnd}
                      onChange={(e) => setRangeEnd(Number(e.target.value))}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                    >
                      {[...Array(11)].map((_, i) => (
                        <option key={i + 2} value={i + 2} disabled={i + 2 < rangeStart}>
                          {i + 2}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Número de Preguntas: {questionCount}
                </label>
                <input
                  type="range"
                  min="10"
                  max="50"
                  step="5"
                  value={questionCount}
                  onChange={(e) => setQuestionCount(Number(e.target.value))}
                  className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-slate-600 mt-1">
                  <span>10</span>
                  <span>30</span>
                  <span>50</span>
                </div>
              </div>

              <div>
                <label className="flex items-center p-4 bg-amber-50 border-2 border-amber-200 rounded-lg cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeAnswers}
                    onChange={(e) => setIncludeAnswers(e.target.checked)}
                    className="mr-3 w-5 h-5"
                  />
                  <div>
                    <div className="font-medium text-slate-900">Incluir Clave de Respuestas</div>
                    <div className="text-sm text-slate-600">Añade las respuestas al final de la página</div>
                  </div>
                </label>
              </div>
            </div>

            {/* Right Column - Preview */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span>👁️</span> Vista Previa
              </h3>
              
              <div className="bg-white rounded-lg p-4 mb-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Tipo:</span>
                  <span className="font-semibold text-slate-900">
                    {exerciseType === 'single' 
                      ? `Tabla del ${selectedTable}`
                      : exerciseType === 'range'
                      ? `Tablas ${rangeStart}-${rangeEnd}`
                      : 'Mixto'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Número de Preguntas:</span>
                  <span className="font-semibold text-slate-900">{questionCount}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Clave de Respuestas:</span>
                  <span className={`font-semibold ${includeAnswers ? 'text-green-600' : 'text-slate-400'}`}>
                    {includeAnswers ? 'Sí ✓' : 'No ✗'}
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 space-y-2">
                <div className="text-sm font-semibold text-slate-700 mb-2">Preguntas de Ejemplo:</div>
                {[...Array(3)].map((_, i) => {
                  const num1 = exerciseType === 'single' 
                    ? selectedTable 
                    : exerciseType === 'range'
                    ? Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart
                    : Math.floor(Math.random() * 10) + 1
                  const num2 = Math.floor(Math.random() * 10) + 1
                  return (
                    <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                      <span className="text-slate-900 font-medium">{i + 1}. {num1} × {num2} = </span>
                      <span className="text-blue-600 font-bold">___</span>
                    </div>
                  )
                })}
              </div>

              <div className="mt-4 p-3 bg-blue-100 rounded-lg border border-blue-300">
                <p className="text-sm text-blue-900">
                  💡 <strong>Consejo:</strong> Puedes guardar como PDF usando la función de impresión de tu navegador.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center pt-6 border-t-2 border-gray-200">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg"
            >
              <span className="text-xl">🖨️</span>
              Imprimir
            </button>
            <button
              onClick={handleDownloadPDF}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg"
            >
              <span className="text-xl">📥</span>
              Descargar PDF
            </button>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
            <div className="text-3xl mb-3">🎯</div>
            <h4 className="font-bold text-slate-900 mb-2">Personalizable</h4>
            <p className="text-sm text-slate-600">
              Ajusta el número de preguntas, tablas y nivel de dificultad como desees.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
            <div className="text-3xl mb-3">📱</div>
            <h4 className="font-bold text-slate-900 mb-2">Compatible con Móviles</h4>
            <p className="text-sm text-slate-600">
              Puedes imprimir fácilmente desde teléfono, tableta o computadora.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
            <div className="text-3xl mb-3">💾</div>
            <h4 className="font-bold text-slate-900 mb-2">Guardar y Compartir</h4>
            <p className="text-sm text-slate-600">
              Guarda como PDF y compártelo fácilmente con tus estudiantes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
