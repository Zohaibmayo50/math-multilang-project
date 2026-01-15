'use client'

import { useState, useEffect } from 'react'

interface NumberGamesProps {
  number: number
}

interface Balloon {
  id: number
  multiplier: number
  answer: number
  x: number
  y: number
  speed: number
  isCorrect: boolean
}

interface RaceCar {
  position: number
  question: { multiplier: number; answer: number }
  options: number[]
}

interface Card {
  id: number
  content: string
  value: number
  isFlipped: boolean
  isMatched: boolean
}

export default function NumberGames({ number }: NumberGamesProps) {
  const [activeGame, setActiveGame] = useState<'balloon' | 'race' | 'memory'>('balloon')
  
  // Balloon Pop Game State
  const [balloons, setBalloons] = useState<Balloon[]>([])
  const [bpScore, setBpScore] = useState(0)
  const [bpGameActive, setBpGameActive] = useState(false)
  const [bpMissed, setBpMissed] = useState(0)
  const [popAnimation, setPopAnimation] = useState<{id: number, x: number, y: number} | null>(null)
  
  // Racing Game State
  const [raceCar, setRaceCar] = useState<RaceCar>({ position: 0, question: { multiplier: 1, answer: number }, options: [] })
  const [raceScore, setRaceScore] = useState(0)
  const [raceGameActive, setRaceGameActive] = useState(false)
  const [wrongAnimation, setWrongAnimation] = useState(false)
  
  // Memory Game State
  const [cards, setCards] = useState<Card[]>([])
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [memoryScore, setMemoryScore] = useState(0)
  const [memoryMoves, setMemoryMoves] = useState(0)

  // Balloon Pop: Generate balloons
  const generateBalloon = () => {
    const multiplier = Math.floor(Math.random() * 10) + 1
    const correctAnswer = number * multiplier
    const isCorrect = Math.random() > 0.3
    const answer = isCorrect ? correctAnswer : correctAnswer + (Math.random() > 0.5 ? 1 : -1)
    
    return {
      id: Date.now() + Math.random(),
      multiplier,
      answer,
      x: Math.random() * 80 + 10,
      y: 100,
      speed: Math.random() * 0.5 + 0.4,
      isCorrect
    }
  }

  // Balloon Pop: Start game
  const startBalloonGame = () => {
    setBpScore(0)
    setBpMissed(0)
    setBpGameActive(true)
    setBalloons([generateBalloon()])
  }

  // Balloon Pop: Animation loop
  useEffect(() => {
    if (!bpGameActive) return

    const interval = setInterval(() => {
      setBalloons(prev => {
        const updated = prev.map(b => ({ ...b, y: b.y - b.speed }))
        const remaining = updated.filter(b => {
          if (b.y < -10) {
            if (b.isCorrect) setBpMissed(m => m + 1)
            return false
          }
          return true
        })
        
        // Add new balloon occasionally
        if (Math.random() > 0.7 && remaining.length < 4) {
          remaining.push(generateBalloon())
        }
        
        return remaining
      })
    }, 50)

    return () => clearInterval(interval)
  }, [bpGameActive, number])

  // Balloon Pop: End game if too many missed
  useEffect(() => {
    if (bpMissed >= 5) {
      setBpGameActive(false)
    }
  }, [bpMissed])

  // Balloon Pop: Click balloon
  const popBalloon = (balloon: Balloon) => {
    if (balloon.isCorrect) {
      setBpScore(bpScore + 1)
      setPopAnimation({ id: balloon.id, x: balloon.x, y: balloon.y })
      setTimeout(() => setPopAnimation(null), 500)
    } else {
      setBpMissed(bpMissed + 1)
    }
    setBalloons(balloons.filter(b => b.id !== balloon.id))
  }

  // Racing Game: Generate question
  const generateRaceQuestion = (currentPosition: number = raceCar.position) => {
    const multiplier = Math.floor(Math.random() * 10) + 1
    const correctAnswer = number * multiplier
    const options = [correctAnswer]
    
    while (options.length < 4) {
      const wrong = correctAnswer + (Math.floor(Math.random() * 6) - 3)
      if (!options.includes(wrong) && wrong > 0) {
        options.push(wrong)
      }
    }
    
    setRaceCar({
      position: currentPosition,
      question: { multiplier, answer: correctAnswer },
      options: options.sort(() => Math.random() - 0.5)
    })
  }

  // Racing Game: Start
  const startRaceGame = () => {
    setRaceScore(0)
    setRaceGameActive(true)
    setRaceCar({ position: 0, question: { multiplier: 1, answer: number }, options: [] })
    generateRaceQuestion()
  }

  // Racing Game: Check answer
  const checkRaceAnswer = (selected: number) => {
    if (selected === raceCar.question.answer) {
      setRaceScore(raceScore + 1)
      const newPosition = raceCar.position + 10
      
      if (newPosition >= 100) {
        setRaceCar(prev => ({ ...prev, position: newPosition }))
        setRaceGameActive(false)
      } else {
        setTimeout(() => generateRaceQuestion(newPosition), 300)
      }
    } else {
      setWrongAnimation(true)
      setTimeout(() => setWrongAnimation(false), 500)
    }
  }

  // Memory Game: Initialize cards
  const initMemoryGame = () => {
    const pairs: Card[] = []
    const multipliers = [1, 2, 3, 4, 5, 6]
    
    multipliers.forEach((mult, idx) => {
      pairs.push({
        id: idx * 2,
        content: `${number} × ${mult}`,
        value: number * mult,
        isFlipped: false,
        isMatched: false
      })
      pairs.push({
        id: idx * 2 + 1,
        content: `${number * mult}`,
        value: number * mult,
        isFlipped: false,
        isMatched: false
      })
    })
    
    setCards(pairs.sort(() => Math.random() - 0.5))
    setMemoryScore(0)
    setMemoryMoves(0)
    setFlippedCards([])
  }

  // Memory Game: Flip card
  const flipCard = (id: number) => {
    if (flippedCards.length === 2 || cards[id].isMatched || cards[id].isFlipped) return
    
    const newCards = [...cards]
    newCards[id].isFlipped = true
    setCards(newCards)
    
    const newFlipped = [...flippedCards, id]
    setFlippedCards(newFlipped)
    
    if (newFlipped.length === 2) {
      setMemoryMoves(memoryMoves + 1)
      const [first, second] = newFlipped
      
      if (cards[first].value === cards[second].value) {
        setTimeout(() => {
          const matched = [...cards]
          matched[first].isMatched = true
          matched[second].isMatched = true
          setCards(matched)
          setFlippedCards([])
          setMemoryScore(memoryScore + 1)
        }, 500)
      } else {
        setTimeout(() => {
          const unflipped = [...cards]
          unflipped[first].isFlipped = false
          unflipped[second].isFlipped = false
          setCards(unflipped)
          setFlippedCards([])
        }, 1000)
      }
    }
  }

  return (
    <section className="section-container bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            🎮 Juegos de la Tabla del {number}
          </h2>
          <p className="text-lg text-slate-700">
            ¡Refuerza la tabla del {number} con juegos animados y divertidos!
          </p>
        </div>

        {/* Game Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-8">
          <button
            onClick={() => setActiveGame('balloon')}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all ${
              activeGame === 'balloon'
                ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg scale-105'
                : 'bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            🎈 <span className="hidden sm:inline">Explotar Globos</span><span className="sm:hidden">Globos</span>
          </button>
          <button
            onClick={() => setActiveGame('race')}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all ${
              activeGame === 'race'
                ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg scale-105'
                : 'bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            🏎️ <span className="hidden sm:inline">Juego de Carreras</span><span className="sm:hidden">Carrera</span>
          </button>
          <button
            onClick={() => setActiveGame('memory')}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all ${
              activeGame === 'memory'
                ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg scale-105'
                : 'bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            🧠 <span className="hidden sm:inline">Juego de Memoria</span><span className="sm:hidden">Memoria</span>
          </button>
        </div>

        {/* Balloon Pop Game */}
        {activeGame === 'balloon' && (
          <div className="bg-gradient-to-b from-sky-100 to-sky-300 rounded-2xl p-4 sm:p-8 shadow-xl min-h-[400px] sm:min-h-[600px] relative overflow-hidden">
            <div className="absolute top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-4 flex justify-between items-center z-10">
              <div className="bg-white/90 backdrop-blur-sm px-2 sm:px-4 py-1 sm:py-2 rounded-lg font-bold text-sm sm:text-lg">
                Skor: <span className="text-pink-600">{bpScore}</span>
              </div>
              <div className="bg-white/90 backdrop-blur-sm px-2 sm:px-4 py-1 sm:py-2 rounded-lg font-bold text-sm sm:text-lg">
                Kaçan: <span className={bpMissed >= 3 ? 'text-red-600' : 'text-orange-600'}>{bpMissed}/5</span>
              </div>
            </div>

            {!bpGameActive ? (
              <div className="flex flex-col items-center justify-center h-[350px] sm:h-[500px]">
                <div className="text-6xl sm:text-8xl mb-4 sm:mb-6 animate-bounce">🎈</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 px-4">Juego de Explotar Globos</h3>
                <p className="text-sm sm:text-base text-slate-700 mb-4 sm:mb-6 text-center max-w-md px-4">
                  ¡Explota los globos que contienen la respuesta correcta! ¡No toques globos incorrectos ni dejes escapar los correctos!
                </p>
                <button
                  onClick={startBalloonGame}
                  className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:scale-105 transition-transform shadow-lg"
                >
                  Iniciar Juego 🎈
                </button>
                {bpScore > 0 && (
                  <div className="mt-4 sm:mt-6 text-base sm:text-lg">
                    Última Puntuación: <span className="font-bold text-pink-600">{bpScore}</span>
                  </div>
                )}
              </div>
            ) : (
              <div className="relative h-[350px] sm:h-[500px] mt-8 sm:mt-12">
                {/* Clouds decoration */}
                <div className="absolute top-10 left-5 sm:left-10 text-4xl sm:text-6xl opacity-60 animate-float">☁️</div>
                <div className="absolute top-20 right-5 sm:right-20 text-3xl sm:text-5xl opacity-60 animate-float-delayed">☁️</div>
                
                {/* Balloons */}
                {balloons.map(balloon => (
                  <button
                    key={balloon.id}
                    onClick={() => popBalloon(balloon)}
                    className="absolute transition-all duration-200 hover:scale-110"
                    style={{
                      left: `${balloon.x}%`,
                      bottom: `${balloon.y}%`,
                      transform: 'translateX(-50%)'
                    }}
                  >
                    <div className="relative">
                      <div className={`text-4xl sm:text-6xl ${balloon.isCorrect ? 'animate-float' : ''}`}>
                        🎈
                      </div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 rounded-full px-2 sm:px-3 py-0.5 sm:py-1 font-bold text-xs sm:text-sm whitespace-nowrap">
                        {number}×{balloon.multiplier}={balloon.answer}
                      </div>
                    </div>
                  </button>
                ))}

                {/* Pop animation */}
                {popAnimation && (
                  <div
                    className="absolute animate-ping"
                    style={{
                      left: `${popAnimation.x}%`,
                      bottom: `${popAnimation.y}%`,
                    }}
                  >
                    <div className="text-3xl sm:text-4xl">💥</div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Racing Game */}
        {activeGame === 'race' && (
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">🏎️ Juego de Carreras</h3>
              <p className="text-slate-600">¡Gana la carrera dando respuestas correctas!</p>
            </div>

            {!raceGameActive || raceCar.position >= 90 ? (
              <div className="text-center py-8 sm:py-12">
                <div className="text-6xl sm:text-8xl mb-4 sm:mb-6">🏁</div>
                {raceCar.position >= 90 ? (
                  <>
                    <h3 className="text-2xl sm:text-3xl font-bold text-green-600 mb-3 sm:mb-4 px-4">🎉 ¡Felicitaciones! ¡Ganaste!</h3>
                    <div className="text-xl sm:text-2xl mb-4 sm:mb-6">
                      Puntuación Total: <span className="font-bold text-blue-600">{raceScore}</span>
                    </div>
                  </>
                ) : (
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 px-4">¿Listo para la Carrera?</h3>
                )}
                <button
                  onClick={startRaceGame}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:scale-105 transition-transform"
                >
                  {raceCar.position >= 90 ? 'Jugar de Nuevo' : 'Iniciar Carrera'} 🏎️
                </button>
              </div>
            ) : (
              <div>
                {/* Race Track */}
                <div className="bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl p-3 sm:p-6 mb-4 sm:mb-6 relative overflow-hidden">
                  {/* Track lines */}
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full h-1 border-t-2 sm:border-t-4 border-dashed border-white/30"></div>
                  </div>
                  
                  {/* Car */}
                  <div 
                    className={`text-4xl sm:text-6xl transition-all duration-300 ${wrongAnimation ? 'animate-bounce' : ''}`}
                    style={{ marginLeft: `${raceCar.position}%` }}
                  >
                    🏎️
                  </div>
                  
                  {/* Finish line */}
                  <div className="absolute right-2 sm:right-4 top-0 bottom-0 flex items-center">
                    <div className="text-4xl sm:text-6xl">🏁</div>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="bg-gray-200 rounded-full h-3 sm:h-4 mb-4 sm:mb-6">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 sm:h-4 rounded-full transition-all duration-300"
                    style={{ width: `${raceCar.position}%` }}
                  ></div>
                </div>

                {/* Question */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
                  <div className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">
                    {number} × {raceCar.question.multiplier} = ?
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {raceCar.options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => checkRaceAnswer(option)}
                        className="bg-white hover:bg-blue-100 text-xl sm:text-2xl font-bold py-4 sm:py-6 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all hover:scale-105"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="text-center text-base sm:text-lg font-semibold">
                  Puntos: <span className="text-blue-600">{raceScore}</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Memory Game */}
        {activeGame === 'memory' && (
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-purple-600 mb-2">🧠 Juego de Memoria</h3>
              <p className="text-slate-600">¡Encuentra las tarjetas que coinciden!</p>
            </div>

            {cards.length === 0 ? (
              <div className="text-center py-8 sm:py-12">
                <div className="text-6xl sm:text-8xl mb-4 sm:mb-6">🃏</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 px-4">Emparejar Tarjetas</h3>
                <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 px-4">¡Empareja las multiplicaciones con sus resultados!</p>
                <button
                  onClick={initMemoryGame}
                  className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:scale-105 transition-transform"
                >
                  Iniciar Juego 🧠
                </button>
              </div>
            ) : (
              <div>
                <div className="flex justify-center gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div className="text-base sm:text-lg font-semibold">
                    Emparejadas: <span className="text-green-600">{memoryScore}/6</span>
                  </div>
                  <div className="text-base sm:text-lg font-semibold">
                    Movimientos: <span className="text-purple-600">{memoryMoves}</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-4 max-w-2xl mx-auto">
                  {cards.map((card, idx) => (
                    <button
                      key={card.id}
                      onClick={() => flipCard(idx)}
                      className={`aspect-square rounded-xl font-bold text-base sm:text-xl transition-all duration-300 ${
                        card.isMatched
                          ? 'bg-green-100 border-2 sm:border-4 border-green-400 scale-95'
                          : card.isFlipped
                          ? 'bg-gradient-to-br from-purple-400 to-indigo-400 text-white'
                          : 'bg-gradient-to-br from-purple-100 to-indigo-100 hover:scale-105'
                      }`}
                      disabled={card.isMatched}
                    >
                      {card.isFlipped || card.isMatched ? (
                        <span className="text-sm sm:text-lg">{card.content}</span>
                      ) : (
                        <span className="text-3xl sm:text-4xl">❓</span>
                      )}
                    </button>
                  ))}
                </div>

                {memoryScore === 6 && (
                  <div className="text-center mt-6 sm:mt-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-green-600 mb-3 sm:mb-4">🎉 ¡Felicitaciones!</h3>
                    <p className="text-lg sm:text-xl mb-3 sm:mb-4">
                      ¡Completaste en {memoryMoves} movimientos!
                    </p>
                    <button
                      onClick={initMemoryGame}
                      className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-base sm:text-lg hover:scale-105 transition-transform"
                    >
                      Jugar de Nuevo
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
