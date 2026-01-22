'use client'

import { useState, useEffect } from 'react'

type GameType = 'speed' | 'hero' | 'memory' | 'space' | null

interface GamesSectionProps {
  rangeStart?: number
  rangeEnd?: number
}

export default function GamesSection({ rangeStart = 1, rangeEnd = 10 }: GamesSectionProps) {
  const [activeGame, setActiveGame] = useState<GameType>(null)
  
  // Speed Game states
  const [speedTimer, setSpeedTimer] = useState(60)
  const [speedScore, setSpeedScore] = useState(0)
  const [speedQuestion, setSpeedQuestion] = useState({ num1: 5, num2: 6 })
  const [speedAnswer, setSpeedAnswer] = useState('')
  const [speedActive, setSpeedActive] = useState(false)
  
  // Hero Game states
  const [heroLevel, setHeroLevel] = useState(1)
  const [heroLives, setHeroLives] = useState(3)
  const [heroQuestion, setHeroQuestion] = useState({ num1: 2, num2: 3 })
  const [heroAnswer, setHeroAnswer] = useState('')
  const [heroQuestionsCleared, setHeroQuestionsCleared] = useState(0)
  
  // Memory Game states
  const [memoryCards, setMemoryCards] = useState<Array<{id: number, question: string, answer: number, flipped: boolean, matched: boolean}>>([])
  const [memoryFlipped, setMemoryFlipped] = useState<number[]>([])
  const [memoryMatches, setMemoryMatches] = useState(0)
  
  // Space Game states
  const [rocketHeight, setRocketHeight] = useState(0)
  const [spaceQuestion, setSpaceQuestion] = useState({ num1: 3, num2: 4 })
  const [spaceAnswer, setSpaceAnswer] = useState('')
  const [spaceStreak, setSpaceStreak] = useState(0)

  // Speed Game functions
  useEffect(() => {
    if (speedActive && speedTimer > 0) {
      const timer = setTimeout(() => setSpeedTimer(speedTimer - 1), 1000)
      return () => clearTimeout(timer)
    } else if (speedTimer === 0) {
      setSpeedActive(false)
    }
  }, [speedActive, speedTimer])

  const startSpeedGame = () => {
    setSpeedActive(true)
    setSpeedTimer(60)
    setSpeedScore(0)
    generateSpeedQuestion()
  }

  const generateSpeedQuestion = () => {
    setSpeedQuestion({
      num1: Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart,
      num2: Math.floor(Math.random() * 10) + 1
    })
    setSpeedAnswer('')
  }

  const checkSpeedAnswer = () => {
    if (parseInt(speedAnswer) === speedQuestion.num1 * speedQuestion.num2) {
      setSpeedScore(speedScore + 1)
      generateSpeedQuestion()
    } else {
      setSpeedAnswer('')
    }
  }

  // Hero Game functions
  const startHeroGame = () => {
    setHeroLevel(1)
    setHeroLives(3)
    setHeroQuestionsCleared(0)
    setActiveGame('hero')
    generateHeroQuestion()
  }

  const generateHeroQuestion = () => {
    setHeroQuestion({
      num1: Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart,
      num2: Math.floor(Math.random() * 10) + 1
    })
    setHeroAnswer('')
  }

  const checkHeroAnswer = () => {
    const isCorrect = parseInt(heroAnswer) === heroQuestion.num1 * heroQuestion.num2
    if (isCorrect) {
      const newCleared = heroQuestionsCleared + 1
      setHeroQuestionsCleared(newCleared)
      if (newCleared >= heroLevel * 5) {
        setHeroLevel(heroLevel + 1)
        setHeroQuestionsCleared(0)
        generateHeroQuestion()
      } else {
        generateHeroQuestion()
      }
    } else {
      setHeroLives(heroLives - 1)
      setHeroAnswer('')
      if (heroLives <= 1) {
        setActiveGame(null)
      }
    }
  }

  // Memory Game functions
  const startMemoryGame = () => {
    const pairs = []
    for (let i = 0; i < 6; i++) {
      const num1 = Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart
      const num2 = Math.floor(Math.random() * 10) + 1
      pairs.push(
        { id: i * 2, question: `${num1} × ${num2}`, answer: num1 * num2, flipped: false, matched: false },
        { id: i * 2 + 1, question: `${num1 * num2}`, answer: num1 * num2, flipped: false, matched: false }
      )
    }
    setMemoryCards(pairs.sort(() => Math.random() - 0.5))
    setMemoryFlipped([])
    setMemoryMatches(0)
  }

  const flipMemoryCard = (id: number) => {
    if (memoryFlipped.length === 2) return
    if (memoryCards[id].flipped || memoryCards[id].matched) return
    
    const newCards = [...memoryCards]
    newCards[id].flipped = true
    setMemoryCards(newCards)
    
    const newFlipped = [...memoryFlipped, id]
    setMemoryFlipped(newFlipped)
    
    if (newFlipped.length === 2) {
      const [first, second] = newFlipped
      if (memoryCards[first].answer === memoryCards[second].answer && first !== second) {
        setTimeout(() => {
          const matchedCards = [...memoryCards]
          matchedCards[first].matched = true
          matchedCards[second].matched = true
          setMemoryCards(matchedCards)
          setMemoryFlipped([])
          setMemoryMatches(memoryMatches + 1)
        }, 500)
      } else {
        setTimeout(() => {
          const resetCards = [...memoryCards]
          resetCards[first].flipped = false
          resetCards[second].flipped = false
          setMemoryCards(resetCards)
          setMemoryFlipped([])
        }, 1000)
      }
    }
  }

  // Space Game functions
  const startSpaceGame = () => {
    setRocketHeight(0)
    setSpaceStreak(0)
    generateSpaceQuestion()
  }

  const generateSpaceQuestion = () => {
    setSpaceQuestion({
      num1: Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart,
      num2: Math.floor(Math.random() * 10) + 1
    })
    setSpaceAnswer('')
  }

  const checkSpaceAnswer = () => {
    const isCorrect = parseInt(spaceAnswer) === spaceQuestion.num1 * spaceQuestion.num2
    if (isCorrect) {
      setRocketHeight(rocketHeight + 10)
      setSpaceStreak(spaceStreak + 1)
      generateSpaceQuestion()
    } else {
      setSpaceStreak(0)
      setSpaceAnswer('')
    }
  }

  return (
    <section id="games" className="section-container bg-gradient-to-br from-indigo-50 to-purple-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-slate-900 mb-4 text-center">
          🎮 Einmaleins Spiele
        </h2>
        
        <p className="text-center text-slate-700 max-w-3xl mx-auto mb-12 text-lg">
          Lerne das Einmaleins spielerisch mit interaktiven Spielen. Jedes Spiel bietet eine andere Lernmethode.
        </p>

        {/* Game Selection */}
        {!activeGame && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div onClick={() => { setActiveGame('speed'); startSpeedGame(); }} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all cursor-pointer border border-gray-200 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 text-3xl group-hover:scale-110 transition-transform">
                🎯
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Schnellantwort</h3>
              <p className="text-slate-600 mb-4">Wie viele Aufgaben kannst du in 60 Sekunden lösen?</p>
              <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all">
                Spielen
              </button>
            </div>
            
            <div onClick={() => { setActiveGame('hero'); startHeroGame(); }} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all cursor-pointer border border-gray-200 group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 text-3xl group-hover:scale-110 transition-transform">
                🏆
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Einmaleins-Held</h3>
              <p className="text-slate-600 mb-4">Steige durch die Level auf und werde Champion</p>
              <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-2 rounded-lg font-medium hover:from-purple-600 hover:to-purple-700 transition-all">
                Spielen
              </button>
            </div>
            
            <div onClick={() => { setActiveGame('memory'); startMemoryGame(); }} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all cursor-pointer border border-gray-200 group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 text-3xl group-hover:scale-110 transition-transform">
                🎮
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Memory-Spiel</h3>
              <p className="text-slate-600 mb-4">Finde die Kartenpaare und multipliziere</p>
              <button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-2 rounded-lg font-medium hover:from-pink-600 hover:to-pink-700 transition-all">
                Spielen
              </button>
            </div>
            
            <div onClick={() => { setActiveGame('space'); startSpaceGame(); }} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all cursor-pointer border border-gray-200 group">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 text-3xl group-hover:scale-110 transition-transform">
                🚀
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Weltraum-Abenteuer</h3>
              <p className="text-slate-600 mb-4">Lass deine Rakete mit richtigen Antworten steigen</p>
              <button className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white py-2 rounded-lg font-medium hover:from-indigo-600 hover:to-indigo-700 transition-all">
                Spielen
              </button>
            </div>
          </div>
        )}

        {/* Speed Game */}
        {activeGame === 'speed' && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-blue-600">🎯 Schnellantwort</h3>
                <button onClick={() => setActiveGame(null)} className="text-slate-500 hover:text-slate-700">✕</button>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-sm text-slate-600 mb-1">Zeit</div>
                  <div className="text-3xl font-bold text-blue-600">{speedTimer}s</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="text-sm text-slate-600 mb-1">Punkte</div>
                  <div className="text-3xl font-bold text-green-600">{speedScore}</div>
                </div>
              </div>

              {speedActive ? (
                <>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 mb-6">
                    <div className="text-5xl font-bold text-center text-slate-800 mb-6">
                      {speedQuestion.num1} × {speedQuestion.num2} = ?
                    </div>
                    <div className="flex gap-4 items-center justify-center">
                      <input
                        type="number"
                        value={speedAnswer}
                        onChange={(e) => setSpeedAnswer(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && speedAnswer && checkSpeedAnswer()}
                        placeholder="?"
                        className="w-32 text-3xl text-center px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none"
                        autoFocus
                      />
                      <button
                        onClick={checkSpeedAnswer}
                        disabled={!speedAnswer}
                        className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all disabled:opacity-50"
                      >
                        ✓
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🎉</div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">Spiel Beendet!</h4>
                  <p className="text-xl text-slate-600 mb-6">Gesamtpunkte: <span className="font-bold text-green-600">{speedScore}</span></p>
                  <button onClick={startSpeedGame} className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700">
                    Nochmal Spielen
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Hero Game */}
        {activeGame === 'hero' && heroLives > 0 && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-purple-600">🏆 Einmaleins-Held</h3>
                <button onClick={() => setActiveGame(null)} className="text-slate-500 hover:text-slate-700">✕</button>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <div className="text-sm text-slate-600 mb-1">Level</div>
                  <div className="text-3xl font-bold text-purple-600">{heroLevel}</div>
                </div>
                <div className="bg-red-50 rounded-lg p-4 text-center">
                  <div className="text-sm text-slate-600 mb-1">Leben</div>
                  <div className="text-3xl font-bold text-red-600">{'❤️'.repeat(heroLives)}</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-sm text-slate-600 mb-1">Fortschritt</div>
                  <div className="text-2xl font-bold text-blue-600">{heroQuestionsCleared}/{heroLevel * 5}</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 mb-6">
                <div className="text-5xl font-bold text-center text-slate-800 mb-6">
                  {heroQuestion.num1} × {heroQuestion.num2} = ?
                </div>
                <div className="flex gap-4 items-center justify-center">
                  <input
                    type="number"
                    value={heroAnswer}
                    onChange={(e) => setHeroAnswer(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && heroAnswer && checkHeroAnswer()}
                    placeholder="?"
                    className="w-32 text-3xl text-center px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:outline-none"
                    autoFocus
                  />
                  <button
                    onClick={checkHeroAnswer}
                    disabled={!heroAnswer}
                    className="bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-all disabled:opacity-50"
                  >
                    Absenden
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Memory Game */}
        {activeGame === 'memory' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-pink-600">🎮 Memory-Spiel</h3>
                <div className="flex items-center gap-4">
                  <div className="bg-pink-50 rounded-lg px-4 py-2">
                    <span className="text-sm text-slate-600">Paare: </span>
                    <span className="font-bold text-pink-600">{memoryMatches}/6</span>
                  </div>
                  <button onClick={() => setActiveGame(null)} className="text-slate-500 hover:text-slate-700">✕</button>
                </div>
              </div>
              
              {memoryMatches === 6 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🎉</div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">Glückwunsch!</h4>
                  <p className="text-xl text-slate-600 mb-6">Du hast alle Kartenpaare gefunden!</p>
                  <button onClick={startMemoryGame} className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-pink-700 hover:to-purple-700">
                    Neues Spiel
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-4 gap-4">
                  {memoryCards.map((card, index) => (
                    <div
                      key={card.id}
                      onClick={() => flipMemoryCard(index)}
                      className={`aspect-square rounded-xl flex items-center justify-center text-2xl font-bold cursor-pointer transition-all ${
                        card.flipped || card.matched
                          ? 'bg-gradient-to-br from-pink-500 to-purple-500 text-white'
                          : 'bg-gradient-to-br from-slate-200 to-slate-300 text-slate-400 hover:from-slate-300 hover:to-slate-400'
                      } ${card.matched ? 'opacity-50' : ''}`}
                    >
                      {card.flipped || card.matched ? card.question : '?'}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Space Game */}
        {activeGame === 'space' && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-indigo-600">🚀 Weltraum-Abenteuer</h3>
                <button onClick={() => setActiveGame(null)} className="text-slate-500 hover:text-slate-700">✕</button>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-indigo-50 rounded-lg p-4 text-center">
                  <div className="text-sm text-slate-600 mb-1">Höhe</div>
                  <div className="text-3xl font-bold text-indigo-600">{rocketHeight}m</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 text-center">
                  <div className="text-sm text-slate-600 mb-1">Serie</div>
                  <div className="text-3xl font-bold text-orange-600">{spaceStreak} 🔥</div>
                </div>
              </div>

              <div className="relative mb-6">
                <div className="h-64 bg-gradient-to-b from-indigo-900 via-purple-900 to-blue-900 rounded-xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-stars opacity-50"></div>
                  <div 
                    className="absolute left-1/2 transform -translate-x-1/2 transition-all duration-500 text-6xl"
                    style={{ bottom: `${Math.min(rocketHeight / 2, 80)}%` }}
                  >
                    🚀
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8">
                <div className="text-5xl font-bold text-center text-slate-800 mb-6">
                  {spaceQuestion.num1} × {spaceQuestion.num2} = ?
                </div>
                <div className="flex gap-4 items-center justify-center">
                  <input
                    type="number"
                    value={spaceAnswer}
                    onChange={(e) => setSpaceAnswer(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && spaceAnswer && checkSpaceAnswer()}
                    placeholder="?"
                    className="w-32 text-3xl text-center px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-500 focus:outline-none"
                    autoFocus
                  />
                  <button
                    onClick={checkSpaceAnswer}
                    disabled={!spaceAnswer}
                    className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-all disabled:opacity-50"
                  >
                    Abheben! 🚀
                  </button>
                </div>
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
                🎯 Spiel-Tipps
              </h4>
              <p className="text-slate-700">
                Jedes Spiel nutzt eine andere Lerntechnik. Schnellantwort 
                steigert deine Geschwindigkeit, Einmaleins-Held hilft dir, Schwierigkeitsstufen zu meistern, 
                Memory-Spiel fördert das visuelle Lernen und Weltraum-Abenteuer erhöht deine Motivation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
