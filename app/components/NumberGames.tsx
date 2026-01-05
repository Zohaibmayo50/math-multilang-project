'use client'

import { useState, useEffect } from 'react'

interface NumberGamesProps {
  number: number
}

export default function NumberGames({ number }: NumberGamesProps) {
  const [activeGame, setActiveGame] = useState<'quickfire' | 'missing' | 'truefalse'>('quickfire')
  
  // Quick Fire Game State
  const [qfQuestion, setQfQuestion] = useState({ multiplier: 1, answer: number })
  const [qfInput, setQfInput] = useState('')
  const [qfScore, setQfScore] = useState(0)
  const [qfTimeLeft, setQfTimeLeft] = useState(30)
  const [qfGameActive, setQfGameActive] = useState(false)
  
  // Missing Number Game State
  const [mnQuestion, setMnQuestion] = useState({ multiplier: 1, answer: number, position: 'result' as 'multiplier' | 'result' })
  const [mnInput, setMnInput] = useState('')
  const [mnScore, setMnScore] = useState(0)
  const [mnTotal, setMnTotal] = useState(0)
  
  // True/False Game State
  const [tfQuestion, setTfQuestion] = useState({ multiplier: 1, shown: number, isCorrect: true })
  const [tfScore, setTfScore] = useState(0)
  const [tfTotal, setTfTotal] = useState(0)
  const [tfFeedback, setTfFeedback] = useState<'correct' | 'wrong' | null>(null)

  // Generate Quick Fire Question
  const generateQfQuestion = () => {
    const multiplier = Math.floor(Math.random() * 10) + 1
    setQfQuestion({ multiplier, answer: number * multiplier })
    setQfInput('')
  }

  // Generate Missing Number Question
  const generateMnQuestion = () => {
    const multiplier = Math.floor(Math.random() * 10) + 1
    const position = Math.random() > 0.5 ? 'multiplier' : 'result'
    setMnQuestion({ multiplier, answer: number * multiplier, position })
    setMnInput('')
  }

  // Generate True/False Question
  const generateTfQuestion = () => {
    const multiplier = Math.floor(Math.random() * 10) + 1
    const correctAnswer = number * multiplier
    const isCorrect = Math.random() > 0.3 // 70% correct, 30% wrong
    const shown = isCorrect ? correctAnswer : correctAnswer + (Math.random() > 0.5 ? 1 : -1)
    setTfQuestion({ multiplier, shown, isCorrect })
    setTfFeedback(null)
  }

  // Quick Fire Timer
  useEffect(() => {
    if (qfGameActive && qfTimeLeft > 0) {
      const timer = setTimeout(() => setQfTimeLeft(qfTimeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (qfTimeLeft === 0) {
      setQfGameActive(false)
    }
  }, [qfGameActive, qfTimeLeft])

  // Start Quick Fire Game
  const startQfGame = () => {
    setQfScore(0)
    setQfTimeLeft(30)
    setQfGameActive(true)
    generateQfQuestion()
  }

  // Check Quick Fire Answer
  const checkQfAnswer = () => {
    if (parseInt(qfInput) === qfQuestion.answer) {
      setQfScore(qfScore + 1)
      generateQfQuestion()
    } else {
      setQfInput('')
    }
  }

  // Check Missing Number Answer
  const checkMnAnswer = () => {
    const correctAnswer = mnQuestion.position === 'multiplier' ? mnQuestion.multiplier : mnQuestion.answer
    if (parseInt(mnInput) === correctAnswer) {
      setMnScore(mnScore + 1)
      setMnTotal(mnTotal + 1)
      generateMnQuestion()
    } else {
      setMnTotal(mnTotal + 1)
      generateMnQuestion()
    }
  }

  // Check True/False Answer
  const checkTfAnswer = (userAnswer: boolean) => {
    if (userAnswer === tfQuestion.isCorrect) {
      setTfScore(tfScore + 1)
      setTfFeedback('correct')
    } else {
      setTfFeedback('wrong')
    }
    setTfTotal(tfTotal + 1)
    setTimeout(() => generateTfQuestion(), 1500)
  }

  // Initialize games
  useEffect(() => {
    generateQfQuestion()
    generateMnQuestion()
    generateTfQuestion()
  }, [number])

  return (
    <section className="section-container bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            🎮 {number} Çarpım Tablosu Oyunları
          </h2>
          <p className="text-lg text-slate-700">
            Eğlenceli oyunlarla {number} çarpım tablosunu pekiştirin!
          </p>
        </div>

        {/* Game Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <button
            onClick={() => setActiveGame('quickfire')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              activeGame === 'quickfire'
                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg scale-105'
                : 'bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            ⚡ Hızlı Atış
          </button>
          <button
            onClick={() => setActiveGame('missing')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              activeGame === 'missing'
                ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg scale-105'
                : 'bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            🔍 Kayıp Sayı
          </button>
          <button
            onClick={() => setActiveGame('truefalse')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              activeGame === 'truefalse'
                ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg scale-105'
                : 'bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            ✓✗ Doğru/Yanlış
          </button>
        </div>

        {/* Quick Fire Game */}
        {activeGame === 'quickfire' && (
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-orange-600 mb-2">⚡ Hızlı Atış</h3>
              <p className="text-slate-600">30 saniyede mümkün olduğunca çok soru cevapla!</p>
            </div>

            {!qfGameActive ? (
              <div className="text-center">
                <div className="text-6xl mb-4">🎯</div>
                <button
                  onClick={startQfGame}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform"
                >
                  Oyunu Başlat
                </button>
                {qfScore > 0 && (
                  <div className="mt-6 text-lg">
                    Son Skor: <span className="font-bold text-orange-600">{qfScore}</span>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="text-lg font-semibold">
                    Skor: <span className="text-orange-600">{qfScore}</span>
                  </div>
                  <div className={`text-2xl font-bold ${qfTimeLeft <= 5 ? 'text-red-600 animate-pulse' : 'text-slate-900'}`}>
                    ⏱️ {qfTimeLeft}s
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 mb-6">
                  <div className="text-4xl font-bold text-center mb-6">
                    {number} × {qfQuestion.multiplier} = ?
                  </div>
                  <input
                    type="number"
                    value={qfInput}
                    onChange={(e) => setQfInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && checkQfAnswer()}
                    className="w-full text-3xl text-center p-4 rounded-lg border-2 border-orange-300 focus:border-orange-500 focus:outline-none"
                    placeholder="?"
                    autoFocus
                  />
                </div>

                <button
                  onClick={checkQfAnswer}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform"
                >
                  Cevapla ✓
                </button>
              </div>
            )}
          </div>
        )}

        {/* Missing Number Game */}
        {activeGame === 'missing' && (
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">🔍 Kayıp Sayı</h3>
              <p className="text-slate-600">Eksik sayıyı bul ve doğru cevabı ver!</p>
            </div>

            <div className="flex justify-center gap-4 mb-6">
              <div className="text-lg font-semibold">
                Doğru: <span className="text-green-600">{mnScore}</span>
              </div>
              <div className="text-lg font-semibold">
                Toplam: <span className="text-blue-600">{mnTotal}</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 mb-6">
              <div className="text-4xl font-bold text-center mb-6">
                {mnQuestion.position === 'multiplier' ? (
                  <>{number} × ? = {mnQuestion.answer}</>
                ) : (
                  <>{number} × {mnQuestion.multiplier} = ?</>
                )}
              </div>
              <input
                type="number"
                value={mnInput}
                onChange={(e) => setMnInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && checkMnAnswer()}
                className="w-full text-3xl text-center p-4 rounded-lg border-2 border-blue-300 focus:border-blue-500 focus:outline-none"
                placeholder="?"
                autoFocus
              />
            </div>

            <button
              onClick={checkMnAnswer}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform"
            >
              Kontrol Et ✓
            </button>
          </div>
        )}

        {/* True/False Game */}
        {activeGame === 'truefalse' && (
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-green-600 mb-2">✓✗ Doğru/Yanlış</h3>
              <p className="text-slate-600">Bu çarpma işlemi doğru mu?</p>
            </div>

            <div className="flex justify-center gap-4 mb-6">
              <div className="text-lg font-semibold">
                Doğru: <span className="text-green-600">{tfScore}</span>
              </div>
              <div className="text-lg font-semibold">
                Toplam: <span className="text-teal-600">{tfTotal}</span>
              </div>
            </div>

            <div className={`rounded-xl p-8 mb-6 transition-colors ${
              tfFeedback === 'correct' ? 'bg-green-100' :
              tfFeedback === 'wrong' ? 'bg-red-100' :
              'bg-gradient-to-br from-green-50 to-teal-50'
            }`}>
              <div className="text-5xl font-bold text-center mb-4">
                {number} × {tfQuestion.multiplier} = {tfQuestion.shown}
              </div>
              {tfFeedback && (
                <div className={`text-center text-xl font-semibold ${
                  tfFeedback === 'correct' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {tfFeedback === 'correct' ? '✓ Doğru!' : `✗ Yanlış! Doğru cevap: ${number * tfQuestion.multiplier}`}
                </div>
              )}
            </div>

            {!tfFeedback && (
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => checkTfAnswer(true)}
                  className="bg-gradient-to-r from-green-500 to-teal-500 text-white py-6 rounded-xl font-bold text-xl hover:scale-105 transition-transform"
                >
                  ✓ DOĞRU
                </button>
                <button
                  onClick={() => checkTfAnswer(false)}
                  className="bg-gradient-to-r from-red-500 to-pink-500 text-white py-6 rounded-xl font-bold text-xl hover:scale-105 transition-transform"
                >
                  ✗ YANLIŞ
                </button>
              </div>
            )}
          </div>
        )}

        <div className="mt-8 text-center text-sm text-slate-600">
          <p>💡 İpucu: Oyunlar arasında geçiş yaparak farklı becerileri geliştirebilirsin!</p>
        </div>
      </div>
    </section>
  )
}
