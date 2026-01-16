'use client'

import { useState } from 'react'
import Link from 'next/link'

type ExerciseType = 'easy' | 'medium' | 'hard' | 'expert' | null

interface PracticePreviewProps {
  rangeStart?: number
  rangeEnd?: number
}

export default function PracticePreview({ rangeStart = 1, rangeEnd = 10 }: PracticePreviewProps) {
  const [activeTab, setActiveTab] = useState<'quick' | 'exercises'>('quick')
  const [question, setQuestion] = useState({ 
    num1: Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart,
    num2: Math.floor(Math.random() * 10) + 1
  })
  const [userAnswer, setUserAnswer] = useState('')
  const [score, setScore] = useState({ correct: 0, total: 0 })
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const [activeExercise, setActiveExercise] = useState<ExerciseType>(null)
  
  // Exercise states
  const [exerciseQuestions, setExerciseQuestions] = useState<Array<{num1: number, num2: number, userAnswer: string, correct: boolean | null}>>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [exerciseCompleted, setExerciseCompleted] = useState(false)

  const generateQuestion = () => {
    setQuestion({
      num1: Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart,
      num2: Math.floor(Math.random() * 10) + 1
    })
    setUserAnswer('')
    setFeedback(null)
  }

  const checkAnswer = () => {
    const correctAnswer = question.num1 * question.num2
    const isCorrect = parseInt(userAnswer) === correctAnswer
    
    setFeedback(isCorrect ? 'correct' : 'wrong')
    setScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }))

    if (isCorrect) {
      setTimeout(() => {
        generateQuestion()
      }, 1500)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && userAnswer) {
      checkAnswer()
    }
  }

  // Exercise functions
  const startExercise = (type: ExerciseType) => {
    const config = {
      easy: { min: rangeStart, max: Math.min(rangeStart + 4, rangeEnd), count: 20 },
      medium: { min: rangeStart, max: Math.min(rangeStart + 7, rangeEnd), count: 30 },
      hard: { min: Math.max(rangeStart, rangeEnd - 5), max: rangeEnd, count: 40 },
      expert: { min: rangeStart, max: rangeEnd, count: 50 }
    }
    
    const { min, max, count } = config[type as keyof typeof config]
    const questions = Array.from({ length: count }, () => ({
      num1: Math.floor(Math.random() * (max - min + 1)) + min,
      num2: Math.floor(Math.random() * 10) + 1,
      userAnswer: '',
      correct: null as boolean | null
    }))
    
    setExerciseQuestions(questions)
    setCurrentQuestionIndex(0)
    setExerciseCompleted(false)
    setActiveExercise(type)
  }

  const submitExerciseAnswer = () => {
    const current = exerciseQuestions[currentQuestionIndex]
    const isCorrect = parseInt(current.userAnswer) === current.num1 * current.num2
    
    const updated = [...exerciseQuestions]
    updated[currentQuestionIndex].correct = isCorrect
    setExerciseQuestions(updated)
    
    if (currentQuestionIndex < exerciseQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      setExerciseCompleted(true)
    }
  }

  const updateExerciseAnswer = (value: string) => {
    const updated = [...exerciseQuestions]
    updated[currentQuestionIndex].userAnswer = value
    setExerciseQuestions(updated)
  }

  const exercises = [
    {
      level: 'Einfach',
      range: rangeStart === rangeEnd ? `Tabelle ${rangeStart}` : `Tabellen ${rangeStart}-${Math.min(rangeStart + 4, rangeEnd)}`,
      questions: '20 Fragen',
      color: 'bg-green-100 text-green-700 border-green-300'
    },
    {
      level: 'Mittel',
      range: rangeStart === rangeEnd ? `Tabelle ${rangeStart}` : `Tabellen ${rangeStart}-${Math.min(rangeStart + 7, rangeEnd)}`,
      questions: '30 Fragen',
      color: 'bg-yellow-100 text-yellow-700 border-yellow-300'
    },
    {
      level: 'Schwer',
      range: rangeStart === rangeEnd ? `Tabelle ${rangeStart}` : `Tabellen ${Math.max(rangeStart, rangeEnd - 5)}-${rangeEnd}`,
      questions: '40 Fragen',
      color: 'bg-orange-100 text-orange-700 border-orange-300'
    },
    {
      level: 'Experte',
      range: rangeStart === rangeEnd ? `Tabelle ${rangeStart}` : `Tabellen ${rangeStart}-${rangeEnd}`,
      questions: '50 Fragen',
      color: 'bg-red-100 text-red-700 border-red-300'
    }
  ]

  return (
    <section id="practice" className="section-container bg-gradient-to-br from-slate-50 to-blue-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-slate-900 mb-4 text-center">
          Übe das Einmaleins
        </h2>
        
        <p className="text-center text-slate-700 max-w-3xl mx-auto mb-12 text-lg">
          Üben ist sehr wichtig, um das gelernte Einmaleins zu festigen. 
          Du kannst mit den folgenden Tools auf unterhaltsame Weise üben.
        </p>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-lg shadow-sm p-1 border border-gray-200">
            <button
              onClick={() => setActiveTab('quick')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'quick'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              ⚡ Schnelle Übung
            </button>
            <button
              onClick={() => setActiveTab('exercises')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'exercises'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              📝 Übungsaufgaben
            </button>
          </div>
        </div>

        {/* Quick Practice */}
        {activeTab === 'quick' && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="flex justify-between items-center mb-8">
                <div className="text-center">
                  <div className="text-sm text-slate-600 mb-1">Richtig</div>
                  <div className="text-2xl font-bold text-green-600">{score.correct}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-slate-600 mb-1">Gesamt</div>
                  <div className="text-2xl font-bold text-blue-600">{score.total}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-slate-600 mb-1">Erfolg</div>
                  <div className="text-2xl font-bold text-purple-600">
                    {score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0}%
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-12 mb-6">
                <div className="text-center mb-8">
                  <div className="text-6xl font-bold text-slate-800 mb-4">
                    {question.num1} × {question.num2} = ?
                  </div>
                </div>

                <div className="flex gap-4 items-center justify-center">
                  <input
                    type="number"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Deine Antwort"
                    className="w-40 text-3xl text-center px-6 py-4 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none"
                    disabled={feedback === 'correct'}
                  />
                  <button
                    onClick={checkAnswer}
                    disabled={!userAnswer || feedback === 'correct'}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                  >
                    Prüfen
                  </button>
                </div>

                {feedback && (
                  <div className={`mt-6 text-center text-xl font-semibold ${
                    feedback === 'correct' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {feedback === 'correct' ? (
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-3xl">✓</span>
                        <span>Ausgezeichnet! Richtige Antwort!</span>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <span className="text-3xl">✗</span>
                          <span>Versuche es nochmal!</span>
                        </div>
                        <div className="text-base text-slate-600">
                          Richtige Antwort: {question.num1 * question.num2}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <button
                onClick={generateQuestion}
                className="w-full bg-gradient-to-r from-slate-600 to-slate-700 text-white py-3 rounded-xl font-semibold hover:from-slate-700 hover:to-slate-800 transition-all"
              >
                🔄 Neue Frage
              </button>
            </div>
          </div>
        )}

        {/* Exercises Tab */}
        {activeTab === 'exercises' && !activeExercise && (
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {exercises.map((exercise, index) => (
              <div 
                key={index}
                onClick={() => startExercise(['easy', 'medium', 'hard', 'expert'][index] as ExerciseType)} 
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all cursor-pointer border-2 border-gray-200 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className={`inline-block px-4 py-2 rounded-lg font-semibold mb-3 border-2 ${exercise.color}`}>
                      {exercise.level}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{exercise.range}</h3>
                    <p className="text-slate-600">{exercise.questions}</p>
                  </div>
                  <div className="text-3xl group-hover:scale-110 transition-transform">📋</div>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all mt-4">
                  Comenzar
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Active Exercise */}
        {activeExercise && !exerciseCompleted && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-blue-600">📝 Übungsaufgabe</h3>
                <button onClick={() => setActiveExercise(null)} className="text-slate-500 hover:text-slate-700">✕</button>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-slate-600">
                    Soru {currentQuestionIndex + 1} / {exerciseQuestions.length}
                  </span>
                  <span className="text-sm font-medium text-slate-600">
                    Correctas: {exerciseQuestions.filter(q => q.correct === true).length}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all"
                    style={{ width: `${((currentQuestionIndex + 1) / exerciseQuestions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-12 mb-6">
                <div className="text-6xl font-bold text-center text-slate-800 mb-8">
                  {exerciseQuestions[currentQuestionIndex].num1} × {exerciseQuestions[currentQuestionIndex].num2} = ?
                </div>
                <div className="flex gap-4 items-center justify-center">
                  <input
                    type="number"
                    value={exerciseQuestions[currentQuestionIndex].userAnswer}
                    onChange={(e) => updateExerciseAnswer(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && exerciseQuestions[currentQuestionIndex].userAnswer && submitExerciseAnswer()}
                    placeholder="Tu respuesta"
                    className="w-40 text-3xl text-center px-6 py-4 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none"
                    autoFocus
                  />
                  <button
                    onClick={submitExerciseAnswer}
                    disabled={!exerciseQuestions[currentQuestionIndex].userAnswer}
                    className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all disabled:opacity-50"
                  >
                    {currentQuestionIndex < exerciseQuestions.length - 1 ? 'Siguiente' : 'Finalizar'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Exercise Completed */}
        {exerciseCompleted && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="text-center py-8">
                <div className="text-6xl mb-4">
                  {(exerciseQuestions.filter(q => q.correct).length / exerciseQuestions.length) >= 0.8 ? '🎉' : '👍'}
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Übung Abgeschlossen!</h3>
                
                <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto mb-8">
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-sm text-slate-600 mb-1">Doğru</div>
                    <div className="text-3xl font-bold text-green-600">
                      {exerciseQuestions.filter(q => q.correct === true).length}
                    </div>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4">
                    <div className="text-sm text-slate-600 mb-1">Yanlış</div>
                    <div className="text-3xl font-bold text-red-600">
                      {exerciseQuestions.filter(q => q.correct === false).length}
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-sm text-slate-600 mb-1">Éxito</div>
                    <div className="text-3xl font-bold text-blue-600">
                      {Math.round((exerciseQuestions.filter(q => q.correct).length / exerciseQuestions.length) * 100)}%
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 justify-center">
                  <button 
                    onClick={() => setActiveExercise(null)}
                    className="bg-gradient-to-r from-slate-600 to-slate-700 text-white px-8 py-3 rounded-xl font-semibold hover:from-slate-700 hover:to-slate-800"
                  >
                    Geri Dön
                  </button>
                  <button 
                    onClick={() => startExercise(activeExercise)}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700"
                  >
                    Resolver de Nuevo
                  </button>
                </div>

                {/* Wrong answers review */}
                {exerciseQuestions.filter(q => q.correct === false).length > 0 && (
                  <div className="mt-8 text-left max-w-xl mx-auto">
                    <h4 className="font-semibold text-slate-900 mb-4">Respuestas Incorrectas:</h4>
                    <div className="space-y-2">
                      {exerciseQuestions.map((q, idx) => 
                        q.correct === false && (
                          <div key={idx} className="bg-red-50 border border-red-200 rounded-lg p-3 flex justify-between items-center">
                            <span className="text-slate-700">
                              {q.num1} × {q.num2} = {q.num1 * q.num2}
                            </span>
                            <span className="text-red-600 font-medium">
                              Senin cevabın: {q.userAnswer}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Tips Section */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-r-xl p-6 mt-12">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">
                💡 Tipps zum Üben
              </h4>
              <p className="text-slate-700">
                Üben bedeutet nicht nur Geschwindigkeit. Denke sorgfältig über jede Frage nach, 
                analysiere deine falschen Antworten und erkenne, welche Einmaleins-Tabellen 
                dir schwer fallen. Regelmäßiges Üben von 10-15 Minuten pro Tag ist die 
                effektivste Methode für langfristiges Lernen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
