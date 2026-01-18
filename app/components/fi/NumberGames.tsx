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
      speed: Math.random() * 0.5 + 0.3,
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
      
      if (bpMissed >= 5) {
        setBpGameActive(false)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [bpGameActive, bpMissed])

  const popBalloon = (balloon: Balloon) => {
    if (balloon.isCorrect) {
      setBpScore(s => s + 10)
      setPopAnimation({ id: balloon.id, x: balloon.x, y: balloon.y })
      setTimeout(() => setPopAnimation(null), 500)
    } else {
      setBpMissed(m => m + 1)
    }
    setBalloons(prev => prev.filter(b => b.id !== balloon.id))
  }

  // Racing Game: Generate question
  const generateRaceQuestion = () => {
    const multiplier = Math.floor(Math.random() * 10) + 1
    const correctAnswer = number * multiplier
    const options = [correctAnswer]
    
    while (options.length < 4) {
      const wrong = correctAnswer + (Math.floor(Math.random() * 10) - 5)
      if (wrong > 0 && !options.includes(wrong)) {
        options.push(wrong)
      }
    }
    
    return {
      position: 0,
      question: { multiplier, answer: correctAnswer },
      options: options.sort(() => Math.random() - 0.5)
    }
  }

  const startRaceGame = () => {
    setRaceScore(0)
    setRaceGameActive(true)
    setRaceCar(generateRaceQuestion())
  }

  const handleRaceAnswer = (selected: number) => {
    if (selected === raceCar.question.answer) {
      const newPosition = raceCar.position + 10
      setRaceScore(s => s + 10)
      
      if (newPosition >= 100) {
        setRaceGameActive(false)
        return
      }
      
      setRaceCar({
        ...generateRaceQuestion(),
        position: newPosition
      })
    } else {
      setWrongAnimation(true)
      setTimeout(() => setWrongAnimation(false), 500)
    }
  }

  // Memory Game: Initialize cards
  const initMemoryGame = () => {
    const pairs: Card[] = []
    const numbers = Array.from({length: 6}, (_, i) => i + 1)
    
    numbers.forEach(mult => {
      const value = number * mult
      pairs.push(
        { id: pairs.length, content: `${number} × ${mult}`, value, isFlipped: false, isMatched: false },
        { id: pairs.length + 1, content: `${value}`, value, isFlipped: false, isMatched: false }
      )
    })
    
    setCards(pairs.sort(() => Math.random() - 0.5))
    setFlippedCards([])
    setMemoryScore(0)
    setMemoryMoves(0)
  }

  const handleCardClick = (id: number) => {
    if (flippedCards.length === 2 || cards[id].isFlipped || cards[id].isMatched) return
    
    const newCards = [...cards]
    newCards[id].isFlipped = true
    setCards(newCards)
    
    const newFlipped = [...flippedCards, id]
    setFlippedCards(newFlipped)
    
    if (newFlipped.length === 2) {
      setMemoryMoves(m => m + 1)
      const [first, second] = newFlipped
      
      if (cards[first].value === cards[second].value) {
        setTimeout(() => {
          const updated = [...cards]
          updated[first].isMatched = true
          updated[second].isMatched = true
          setCards(updated)
          setFlippedCards([])
          setMemoryScore(s => s + 20)
        }, 500)
      } else {
        setTimeout(() => {
          const updated = [...cards]
          updated[first].isFlipped = false
          updated[second].isFlipped = false
          setCards(updated)
          setFlippedCards([])
        }, 1000)
      }
    }
  }

  return (
    <section className="section-container bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-slate-900 mb-4 text-center">
          Interaktiiviset Pelit
        </h2>
        <p className="text-center text-slate-600 mb-8">
          Opi kertotaulua pelaamalla! Valitse peli ja aloita hauskuus.
        </p>

        {/* Game Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveGame('balloon')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeGame === 'balloon'
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            🎈 Nopea Quiz
          </button>
          <button
            onClick={() => setActiveGame('race')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeGame === 'race'
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            🏎️ Aikahaaste
          </button>
          <button
            onClick={() => setActiveGame('memory')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeGame === 'memory'
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            🧠 Muistipeli
          </button>
        </div>

        {/* Balloon Pop Game */}
        {activeGame === 'balloon' && (
          <div className="card bg-white">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Nopea Quiz</h3>
            <p className="text-slate-600 mb-6">
              Napsauta palloja, joissa on oikeat vastaukset! Vältä vääriä vastauksia.
            </p>
            
            {!bpGameActive ? (
              <div className="text-center py-8">
                {bpScore > 0 && (
                  <p className="text-2xl font-bold text-primary-600 mb-4">
                    Loppupistemäärä: {bpScore}
                  </p>
                )}
                <button
                  onClick={startBalloonGame}
                  className="px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                >
                  {bpScore > 0 ? 'Pelaa uudelleen' : 'Aloita peli'}
                </button>
              </div>
            ) : (
              <>
                <div className="flex justify-between mb-4 text-lg font-medium">
                  <span>Pisteet: {bpScore}</span>
                  <span>Ohitetut: {bpMissed}/5</span>
                </div>
                
                <div className="relative h-96 bg-gradient-to-b from-sky-200 to-sky-50 rounded-lg overflow-hidden border-4 border-sky-300">
                  {balloons.map(balloon => (
                    <button
                      key={balloon.id}
                      onClick={() => popBalloon(balloon)}
                      className={`absolute transform -translate-x-1/2 transition-all ${
                        balloon.isCorrect ? 'text-green-500' : 'text-red-500'
                      }`}
                      style={{
                        left: `${balloon.x}%`,
                        bottom: `${balloon.y}%`,
                        fontSize: '3rem'
                      }}
                    >
                      🎈
                      <div className="text-sm font-bold text-slate-900 text-center mt-1">
                        {number} × {balloon.multiplier} = {balloon.answer}
                      </div>
                    </button>
                  ))}
                  
                  {popAnimation && (
                    <div
                      className="absolute text-4xl animate-ping"
                      style={{
                        left: `${popAnimation.x}%`,
                        bottom: `${popAnimation.y}%`
                      }}
                    >
                      💥
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        )}

        {/* Racing Game */}
        {activeGame === 'race' && (
          <div className="card bg-white">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Aikahaaste</h3>
            <p className="text-slate-600 mb-6">
              Vastaa kysymyksiin oikein päästäksesi maaliin! 10 oikeaa vastausta voittaaksesi.
            </p>
            
            {!raceGameActive ? (
              <div className="text-center py-8">
                {raceScore > 0 && (
                  <p className="text-2xl font-bold text-primary-600 mb-4">
                    Voitit! Pisteet: {raceScore}
                  </p>
                )}
                <button
                  onClick={startRaceGame}
                  className="px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                >
                  {raceScore > 0 ? 'Pelaa uudelleen' : 'Aloita peli'}
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Edistyminen:</span>
                    <span className="font-medium">{raceCar.position}%</span>
                  </div>
                  <div className="h-4 bg-slate-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-300"
                      style={{ width: `${raceCar.position}%` }}
                    />
                  </div>
                </div>
                
                <div className={`text-center mb-6 ${wrongAnimation ? 'animate-shake' : ''}`}>
                  <p className="text-3xl font-bold text-slate-900 mb-6">
                    {number} × {raceCar.question.multiplier} = ?
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {raceCar.options.map((option, i) => (
                      <button
                        key={i}
                        onClick={() => handleRaceAnswer(option)}
                        className="px-6 py-4 bg-slate-100 hover:bg-primary-100 rounded-lg text-xl font-medium transition-colors"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {/* Memory Game */}
        {activeGame === 'memory' && (
          <div className="card bg-white">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Muistipeli</h3>
            <p className="text-slate-600 mb-6">
              Yhdistä kertolaskut niiden vastausten kanssa!
            </p>
            
            {cards.length === 0 ? (
              <div className="text-center py-8">
                <button
                  onClick={initMemoryGame}
                  className="px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                >
                  Aloita peli
                </button>
              </div>
            ) : (
              <>
                <div className="flex justify-between mb-6 text-lg font-medium">
                  <span>Pisteet: {memoryScore}</span>
                  <span>Siirrot: {memoryMoves}</span>
                </div>
                
                <div className="grid grid-cols-4 gap-4 mb-6">
                  {cards.map((card, i) => (
                    <button
                      key={card.id}
                      onClick={() => handleCardClick(i)}
                      disabled={card.isMatched}
                      className={`aspect-square rounded-lg font-medium text-lg transition-all ${
                        card.isFlipped || card.isMatched
                          ? 'bg-primary-100 text-slate-900'
                          : 'bg-gradient-to-br from-primary-500 to-primary-600 text-white hover:scale-105'
                      } ${card.isMatched ? 'opacity-50' : ''}`}
                    >
                      {(card.isFlipped || card.isMatched) ? card.content : '?'}
                    </button>
                  ))}
                </div>
                
                {cards.every(c => c.isMatched) && (
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600 mb-4">
                      Hienoa! Sait {memoryScore} pistettä {memoryMoves} siirrolla!
                    </p>
                    <button
                      onClick={initMemoryGame}
                      className="px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                    >
                      Pelaa uudelleen
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
