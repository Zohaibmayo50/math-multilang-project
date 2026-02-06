'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'
import PracticePreview from './PracticePreview'
import PrintableExercises from './PrintableExercises'
import NumberGames from './NumberGames'

interface NumberPageProps {
  number: number
  rangeStart: number
  rangeEnd: number
}

export default function NumberPagePl({ number, rangeStart, rangeEnd }: NumberPageProps) {
  const tableRef = useRef<HTMLDivElement>(null)
  
  const colors = [
    'from-blue-500 to-indigo-600',
    'from-purple-500 to-pink-600',
    'from-green-500 to-teal-600',
    'from-orange-500 to-red-600',
    'from-cyan-500 to-blue-600',
  ]
  
  const colorIndex = (number - 1) % colors.length

  // Print function
  const handlePrint = () => {
    if (tableRef.current) {
      const printWindow = window.open('', '', 'width=800,height=600')
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>Tabliczka Mnożenia ${number}</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  padding: 20px;
                  max-width: 600px;
                  margin: 0 auto;
                }
                h1 {
                  text-align: center;
                  color: #1e40af;
                  margin-bottom: 30px;
                }
                .table-item {
                  display: flex;
                  justify-content: space-between;
                  padding: 12px 20px;
                  margin: 8px 0;
                  background: #f0f9ff;
                  border-radius: 8px;
                  font-size: 18px;
                }
                .equation {
                  font-weight: 500;
                }
                .result {
                  font-weight: bold;
                  color: #1e40af;
                }
                @media print {
                  body { padding: 10px; }
                  .table-item { page-break-inside: avoid; }
                }
              </style>
            </head>
            <body>
              <h1>Tabliczka Mnożenia ${number}</h1>
              ${Array.from({ length: 10 }, (_, i) => `
                <div class="table-item">
                  <span class="equation">${number} × ${i + 1}</span>
                  <span class="result">= ${number * (i + 1)}</span>
                </div>
              `).join('')}
            </body>
          </html>
        `)
        printWindow.document.close()
        printWindow.focus()
        setTimeout(() => {
          printWindow.print()
          printWindow.close()
        }, 250)
      }
    }
  }

  // Download as image function
  const handleDownload = async () => {
    if (tableRef.current) {
      try {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        canvas.width = 600
        canvas.height = 700
        
        const gradient = ctx.createLinearGradient(0, 0, 600, 700)
        const gradients: { [key: number]: [string, string] } = {
          0: ['#3b82f6', '#4f46e5'],
          1: ['#a855f7', '#ec4899'],
          2: ['#10b981', '#14b8a6'],
          3: ['#f97316', '#ef4444'],
          4: ['#06b6d4', '#3b82f6']
        }
        const [color1, color2] = gradients[colorIndex]
        gradient.addColorStop(0, color1)
        gradient.addColorStop(1, color2)
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, 600, 700)

        ctx.fillStyle = '#ffffff'
        ctx.font = 'bold 36px Arial'
        ctx.textAlign = 'center'
        ctx.fillText('Tabliczka Mnożenia ' + number, 300, 60)

        ctx.font = '24px Arial'
        let y = 120
        for (let i = 1; i <= 10; i++) {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'
          ctx.beginPath()
          ctx.roundRect(30, y - 30, 540, 50, 10)
          ctx.fill()

          ctx.fillStyle = '#ffffff'
          ctx.textAlign = 'left'
          ctx.font = '22px Arial'
          ctx.fillText(number + ' × ' + i, 50, y)
          
          ctx.textAlign = 'right'
          ctx.font = 'bold 26px Arial'
          ctx.fillText('= ' + (number * i), 550, y)
          
          y += 60
        }

        canvas.toBlob((blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = url
            link.download = 'tabliczka-mnozenia-' + number + '.png'
            link.click()
            URL.revokeObjectURL(url)
          }
        })
      } catch (error) {
        console.error('Pobieranie nie powiodło się:', error)
      }
    }
  }

  // Number-specific content
  const getNumberMeaning = () => {
    const meanings: { [key: number]: string} = {
      1: "Mnożenie przez 1 jest specjalnym przypadkiem w matematyce. Kiedy mnożysz dowolną liczbę przez 1, wynikiem jest zawsze ta sama liczba. Nazywa się to właściwością tożsamości mnożenia. Pomyśl o tym w ten sposób: 'Ile grup mam?' Jeśli masz tylko 1 grupę, masz dokładnie to, od czego zacząłeś.",
      2: "Mnożenie przez 2 oznacza podwojenie liczby. Kiedy mnożysz coś przez 2, dodajesz liczbę do samej siebie. To jedna z najbardziej praktycznych tabliczek mnożenia, ponieważ często musimy podwajać rzeczy w codziennym życiu — liczenie par butów, kół rowerowych lub dzielenie czegoś równo między dwie osoby.",
      3: "Mnożenie przez 3 oznacza wzięcie liczby trzy razy. Możesz myśleć o tym jako o dodaniu tej samej liczby do siebie trzy razy. Ta tabliczka mnożenia jest ważna dla zrozumienia trójkątów, trójek i wszystkiego, co występuje w grupach po trzy.",
      4: "Mnożenie przez 4 to jakby podwojenie dwa razy. Ponieważ 4 = 2 × 2, możesz podwoić liczbę, a następnie podwoić wynik ponownie. To sprawia, że tabliczka mnożenia przez 4 jest łatwiejsza do nauczenia, jeśli już znasz tabliczkę przez 2. Liczba 4 występuje często w geometrii (kwadraty mają 4 boki) i pomiarze czasu (są 4 kwartały).",
      5: "Mnożenie przez 5 tworzy jeden z najpiękniejszych wzorów w matematyce. Wszystkie wielokrotności 5 kończą się na 0 lub 5, co sprawia, że ta tabliczka mnożenia jest bardzo przewidywalna. Jest niezwykle przydatna do liczenia pieniędzy (monety 5-złotowe, banknoty 5-złotowe) i odczytywania zegara (odstępy 5-minutowe).",
      6: "Mnożenie przez 6 oznacza wzięcie grup po sześć liczb. 6 jest pierwszą 'prawdziwą' tabliczką mnożenia, ponieważ nie jest tylko wielokrotnością 2 lub 3. Ale ponieważ 6 = 2 × 3, możesz pomnożyć liczbę przez 2, a następnie przez 3 (lub odwrotnie), aby pomnożyć przez 6. Liczba 6 występuje często w naturze (komórki plastra miodu) i w codziennym życiu (pudełka na jajka, ściany kostki).",
      7: "Mnożenie przez 7 jest generalnie jedną z najtrudniejszych tabliczek mnożenia dla uczniów, ponieważ 7 jest liczbą pierwszą i nie można jej łatwo wyprowadzić z innych tabliczek mnożenia. Ale wszystkie wielokrotności 7 mają piękne wzory i można je nauczyć poprzez praktykę. 7 jest ważną liczbą dla dni tygodnia, kontynentów i wielu odniesień kulturowych.",
      8: "Mnożenie przez 8 to jakby podwojenie trzy razy (8 = 2 × 2 × 2). Podwój liczbę, podwój wynik ponownie i podwój jeszcze raz — wtedy pomnożyłeś przez 8. Ta tabliczka mnożenia jest łatwiejsza do nauczenia, gdy dobrze znasz tabliczki przez 2 i 4. 8 jest ważną liczbą w geometrii (ośmiokąty) i muzyce (oktawy).",
      9: "Mnożenie przez 9 ma jeden z najbardziej fascynujących wzorów w matematyce. Kiedy dodajesz cyfry dowolnej wielokrotności 9, wynik jest zawsze podzielny przez 9. Ponadto cyfra dziesiątek w 9 × n jest zawsze n-1. Tę tabliczkę mnożenia można również nauczyć za pomocą sztuczek palcami. Ponieważ 9 to tylko 1 mniej niż 10, można ją również obliczyć za pomocą tabliczki mnożenia przez 10.",
      10: "Mnożenie przez 10 jest jedną z najłatwiejszych tabliczek mnożenia. Kiedy mnożysz dowolną liczbę przez 10, po prostu dodajesz zero na końcu. To stanowi podstawę naszego systemu dziesiętnego. Nauka mnożenia przez 10 uczy uczniów koncepcji wartości miejsca i jak pracować z dużymi liczbami. Tabliczka mnożenia przez 10 jest punktem odniesienia do zrozumienia wszystkich innych tabliczek mnożenia.",
      11: "Mnożenie przez 11 ma jeden z najciekawszych wzorów w matematyce. Kiedy mnożysz liczby jednocyfrowe przez 11, wynik to ta liczba powtórzona dwa razy (11×3=33, 11×7=77). W mnożeniu dwucyfrowym przez 11 jest również piękny wzór: dodajesz cyfry i umieszczasz je pośrodku. 11 jest liczbą pierwszą i ma specjalne właściwości matematyczne.",
      12: "Mnożenie przez 12 jest jedną z najbardziej praktycznych tabliczek mnożenia, ponieważ 12 jest podzielne przez wiele liczb (1, 2, 3, 4, 6, 12). Ta właściwość sprawia, że 12 jest bardzo przydatne w codziennym życiu — jest 12 sztuk w tuzinie, 12 godzin na zegarze, 12 miesięcy w roku. Ponieważ 12 = 3 × 4 = 2 × 6, możesz nauczyć się tej tabliczki mnożenia na kilka sposobów.",
    }
    return meanings[number] || `Mnożenie przez ${number} oznacza powtarzane dodawanie ${number}. Za każdym razem, gdy mnożysz, liczysz grupy po ${number}.`
  }

  const getWhyImportant = () => {
    const importance: { [key: number]: string } = {
      1: "Tabliczka mnożenia przez 1 jest podstawą wszystkich operacji mnożenia. Uczy uczniów, że liczby mają tożsamość: kiedy są mnożone przez 1, pozostają niezmienione. Ta koncepcja jest ważna dla zrozumienia późniejszych właściwości algebraicznych. Choć wydaje się prosta, nauka tej tabliczki mnożenia buduje pewność siebie i ustanawia wzór, że mnożenie jest uporządkowane i przewidywalne.",
      2: "Tabliczka mnożenia przez 2 jest generalnie pierwszą prawdziwą tabliczką mnożenia, której uczą się uczniowie, i jest ku temu dobry powód. Podwajanie jest naturalną koncepcją, którą dzieci spotykają codziennie. Nauka tej tabliczki mnożenia sprawia, że arytmetyka mentalna jest znacznie szybsza i przygotowuje uczniów na liczby parzyste, ułamki (połowy) i podstawowe dzielenie. Wielu uczniów uważa ją za najłatwiejszą tabliczkę mnożenia, co buduje pewność siebie dla bardziej złożonych tabliczek mnożenia.",
      3: "Tabliczka mnożenia przez 3 łączy lukę między prostymi a złożonymi tabliczkami mnożenia. Wymaga od uczniów wyjścia poza proste podwajanie i rozpoznania nowych wzorów. Ta tabliczka mnożenia występuje stale w kontekstach rzeczywistych, takich jak liczenie w grupach po trzy, rozumienie kształtów trójkątnych i praca z czasem (trzy okresy dziennie). Uczniowie, którzy nauczą się tabliczki mnożenia przez 3, demonstrują mistrzostwo w abstrakcyjnym liczeniu.",
    }
    return importance[number] || `Nauka tabliczki mnożenia przez ${number} pomaga uczniom rozwijać biegłość z tą ważną liczbą. Występuje ona często w matematyce i codziennym życiu i jest kluczowa dla budowania solidnych umiejętności obliczeniowych.`
  }

  const getPatterns = () => {
    const patterns: { [key: number]: { title: string; description: string }[] } = {
      1: [
        { title: "Wzór Tożsamości", description: "Każda liczba pomnożona przez 1 daje siebie. To się nigdy nie zmienia: 1×1=1, 1×2=2, 1×3=3 i tak dalej." },
        { title: "Przewidywalna Seria", description: "Wyniki po prostu liczą w górę: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Po prostu zapisujesz liczby w kolejności." },
        { title: "Fundament Dla Wszystkich Tabliczek Mnożenia", description: "Każda tabliczka mnożenia zaczyna się od mnożenia przez 1, więc ten wzór występuje we wszystkich tabliczkach mnożenia." },
      ],
      2: [
        { title: "Tylko Liczby Parzyste", description: "Wszystkie wielokrotności 2 są liczbami parzystymi. Wyniki zawsze kończą się na 0, 2, 4, 6 lub 8." },
        { title: "Liczenie Po Dwójkach", description: "Każda odpowiedź jest o 2 więcej niż poprzednia: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20." },
        { title: "Wzór Podwajania", description: "Każdy wynik jest dokładnie podwojeniem czynnika: 2×5=10 to podwojenie 5." },
      ],
      3: [
        { title: "Wzór Sumy Cyfr", description: "Dodaj cyfry w każdym wyniku: 3 (3), 6 (6), 9 (9), 12 (1+2=3), 15 (1+5=6), 18 (1+8=9). Wzór 3-6-9 się powtarza!" },
        { title: "Liczenie Po Trójkach", description: "Każda odpowiedź wzrasta o 3: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30." },
        { title: "Przemienność Nieparzystych-Parzystych", description: "Wyniki się przeplatają: nieparzyste (3), parzyste (6), nieparzyste (9), parzyste (12), tworząc przewidywalny rytm." },
      ],
    }
    return patterns[number] || []
  }

  const getCommonMistakes = () => {
    const mistakes: { [key: number]: { mistake: string; solution: string }[] } = {
      1: [
        { mistake: "Przekonanie, że 1×1=2", solution: "Pamiętaj: cokolwiek pomnożone przez 1 pozostaje takie samo. 1 grupa 1 to tylko 1." },
        { mistake: "Pomylenie z dodawaniem", solution: "Mnożenie przez 1 różni się od dodawania. 5+1=6, ale 5×1=5." },
      ],
      2: [
        { mistake: "Pomylenie 2×6=12 z 2×7=14", solution: "Użyj liczenia z przeskokiem: 2, 4, 6, 8, 10, 12, 14. Licz ostrożnie bez pomijania." },
        { mistake: "Pomylenie z większymi liczbami", solution: "Rozłóż to: 2×8 to PO PROSTU 8+8. Podwajanie to proste dodawanie." },
      ],
    }
    return mistakes[number] || []
  }

  const getPracticeStrategies = () => {
    const strategies: { [key: number]: string[] } = {
      1: [
        "Wypowiadaj każde mnożenie głośno: 'Jeden razy jeden to jeden, jeden razy dwa to dwa...'",
        "Ćwicz pisanie tabliczki mnożenia raz dziennie przez tydzień",
        "Znajdź wzór: odpowiedź jest zawsze taka sama jak druga liczba",
        "Używaj fiszek, chociaż ta tabliczka mnożenia jest zwykle uczenia się bardzo szybko",
      ],
      2: [
        "Licz po dwójkach podczas chodzenia lub wspinania się po schodach: 2, 4, 6, 8...",
        "Używaj palców: trzymaj palce w parach i licz po dwójkach",
        "Ćwicz podwajanie liczb mentalnie przez cały dzień",
        "Mów głośno: 'Dwa razy pięć to pięć plus pięć, co daje dziesięć'",
      ],
    }
    return strategies[number] || [
      `Ćwicz liczenie po ${number}`,
      "Zapisuj tabliczkę mnożenia codziennie przez tydzień",
      "Używaj fiszek do losowego testowania",
      "Ćwicz 5-10 minut dziennie zamiast długich sesji nauki na raz",
    ]
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
        {/* Hero Section */}
        <section className={`relative overflow-hidden bg-gradient-to-br ${colors[colorIndex]} pt-16 pb-12 sm:pt-20 sm:pb-16 md:pt-24 md:pb-20`}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[1, 2, 3, 4, 5].map((multiplier, index) => (
            <div
              key={multiplier}
              className={`absolute text-5xl sm:text-6xl md:text-7xl font-bold opacity-10 animate-float${index % 2 === 0 ? '' : '-delayed'}`}
              style={{
                top: `${10 + index * 15}%`,
                left: index % 2 === 0 ? `${10 + index * 10}%` : 'auto',
                right: index % 2 !== 0 ? `${5 + index * 8}%` : 'auto'
              }}
            >
              {number * multiplier}
            </div>
          ))}
          
          <div className="absolute top-20 right-[30%] w-24 sm:w-32 h-24 sm:h-32 bg-yellow-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 left-[20%] w-32 sm:w-40 h-32 sm:h-40 bg-pink-300/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-[45%] w-20 sm:w-28 h-20 sm:h-28 bg-green-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-[15%] w-28 sm:w-36 h-28 sm:h-36 bg-purple-300/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border-2 border-white/50">
              <span className="text-2xl sm:text-3xl">🔢</span>
              <span className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {number}
              </span>
              <span className="text-2xl sm:text-3xl">✖️</span>
            </div>
          </div>
          
          <div className="text-center mb-6 sm:mb-8">
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
              <span className="text-4xl sm:text-5xl md:text-6xl animate-bounce">🎯</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-slate-900">Tabliczka Mnożenia</span>
                <br className="sm:hidden" />
                <span className="sm:inline"> </span>
                <span className="text-slate-900">{number}</span>
              </h1>
              <span className="text-4xl sm:text-5xl md:text-6xl animate-bounce" style={{ animationDelay: '0.2s' }}>🎨</span>
            </div>
            
            <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-2xl mx-auto mt-6 sm:mt-8 mb-4 sm:mb-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md border-2 border-blue-100">
                <div className="text-2xl sm:text-3xl mb-1">📊</div>
                <div className="text-xl sm:text-2xl font-bold text-blue-600">10</div>
                <div className="text-xs text-slate-600">Operacji</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md border-2 border-indigo-100">
                <div className="text-2xl sm:text-3xl mb-1">🎮</div>
                <div className="text-xl sm:text-2xl font-bold text-indigo-600">3</div>
                <div className="text-xs text-slate-600">Gry</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md border-2 border-purple-100">
                <div className="text-2xl sm:text-3xl mb-1">📝</div>
                <div className="text-xl sm:text-2xl font-bold text-purple-600">∞</div>
                <div className="text-xs text-slate-600">Ćwiczeń</div>
              </div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4 text-center px-4">
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
              Ta strona pomaga Ci <span className="font-semibold text-yellow-200">nauczyć się i zrozumieć tabliczkę mnożenia przez {number}</span>. 
              Dowiesz się, jak {number} zachowuje się w mnożeniu, 
              <span className="font-semibold text-yellow-200">zobaczysz jej wzory</span> i 
              <span className="font-semibold text-yellow-200">nauczysz się praktycznych sposobów</span> jej opanowania.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-4">
              <a 
                href="#practice"
                className="group inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white text-indigo-600 font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 text-sm sm:text-base"
              >
                <span className="text-lg sm:text-xl">🎯</span>
                <span>Zacznij Ćwiczyć</span>
                <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a 
                href="#games"
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/90 backdrop-blur-sm text-purple-600 font-bold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border-2 border-white/50 text-sm sm:text-base"
              >
                <span className="text-lg sm:text-xl">🎮</span>
                <span>Odkryj Gry</span>
              </a>
              <a 
                href="#worksheets"
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/90 backdrop-blur-sm text-green-600 font-bold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border-2 border-white/50 text-sm sm:text-base"
              >
                <span className="text-lg sm:text-xl">📝</span>
                <span className="hidden sm:inline">Pobierz Ćwiczenia</span>
                <span className="sm:hidden">Pobierz</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Introduction */}
      <section className="section-container bg-white py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 flex items-center justify-center gap-3">
              <span className="text-2xl sm:text-3xl">📖</span>
              Co Obejmuje Tabliczka Mnożenia przez {number}?
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full"></div>
          </div>
          
          <p className="text-sm sm:text-base text-slate-700 mb-6 leading-relaxed text-center max-w-2xl mx-auto">
            Tabliczka mnożenia przez {number} obejmuje iloczyn liczby {number} ze wszystkimi liczbami od 1 do 10. 
            To uczy <span className="font-bold text-indigo-600">10 podstawowych operacji</span>, które bardzo pomagają w codziennym życiu i zaawansowanych tematach matematycznych.
          </p>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 sm:p-6 border-2 border-blue-100 shadow-md">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mb-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((multiplier) => (
                <div key={multiplier} className="flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm rounded-xl p-2 sm:p-3 shadow-sm hover:shadow-md transition-shadow group">
                  <span className="text-xs sm:text-sm text-slate-600 mb-1">{number} × {multiplier}</span>
                  <span className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold text-base sm:text-xl shadow-md group-hover:scale-110 transition-transform">
                    {number * multiplier}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="bg-white/60 rounded-xl p-3 sm:p-4 flex items-start gap-2 sm:gap-3">
              <span className="text-2xl sm:text-3xl">💡</span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Tabliczka mnożenia przez {number} ma <span className="font-bold text-indigo-600">10 operacji mnożenia</span>. 
                Jeśli zrozumiesz wzory w tej tabliczce mnożenia, możesz łatwo nauczyć się tych operacji i szybko obliczać!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Number Context & Meaning + Table Combined */}
      <section className="section-container bg-white py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
            <div className="space-y-5 sm:space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
                  Co Oznacza Liczba {number} w Mnożeniu?
                </h2>
                
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4 sm:mb-6">
                  {getNumberMeaning()}
                </p>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-5 border-2 border-blue-100">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="text-2xl sm:text-3xl">💡</span>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1 sm:mb-2">Proste Wyjaśnienie</h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        Kiedy widzisz {number} × 4, pomyśl: "Mam 4 grupy i każda grupa ma {number} przedmiotów." 
                        Więc {number} × 4 = {number} + {number} + {number} + {number} = {number * 4}.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
                  Dlaczego Ważne Jest Nauczenie Się Tabliczki Mnożenia przez {number}
                </h2>
                
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {getWhyImportant()}
                </p>
              </div>
            </div>

            <div className="lg:sticky lg:top-8">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Tabliczka Mnożenia {number}
                </h2>
                
                <div className="flex gap-2">
                  <button
                    onClick={handlePrint}
                    className="group flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-white border-2 border-blue-200 text-blue-600 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all text-xs sm:text-sm font-semibold"
                    title="Drukuj tabliczkę mnożenia"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                    <span className="hidden sm:inline">Drukuj tabliczkę</span>
                  </button>
                  
                  <button
                    onClick={handleDownload}
                    className="group flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg"
                    title="Pobierz jako obraz"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span className="hidden sm:inline">Pobierz jako obraz</span>
                  </button>
                </div>
              </div>
              
              <div ref={tableRef} className={`bg-gradient-to-br ${colors[colorIndex]} rounded-2xl p-4 sm:p-6 text-white shadow-xl`}>
                <div className="space-y-1.5 sm:space-y-2">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="flex justify-between items-center bg-white/20 backdrop-blur-sm rounded-lg px-3 sm:px-5 py-2 sm:py-2.5 hover:bg-white/30 transition-colors">
                      <span className="font-medium text-sm sm:text-base">{number} × {i + 1}</span>
                      <span className="font-bold text-base sm:text-lg">= {number * (i + 1)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patterns & Observations */}
      <section className="section-container bg-white py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
            Wzory w Tabliczce Mnożenia przez {number}
          </h2>
          
          <p className="text-sm sm:text-base text-slate-700 mb-4 sm:mb-6 leading-relaxed">
            Zrozumienie wzorów ułatwia naukę i czyni ją przyjemniejszą. Tabliczka mnożenia przez {number} ma 
            piękne wzory, które mogą pomóc Ci ją zapamiętać bez memoryzacji.
          </p>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {getPatterns().map((pattern, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-3 sm:p-4 border-2 border-amber-100">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1.5 sm:mb-2 flex items-center gap-2">
                  <span className="text-lg sm:text-xl">{index === 0 ? '🔄' : index === 1 ? '📊' : '✨'}</span>
                  {pattern.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {pattern.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <div id="practice">
        <PracticePreview rangeStart={number} rangeEnd={number} />
      </div>

      {/* Interactive Games */}
      <div id="games">
        <NumberGames number={number} />
      </div>

      {/* Printable Worksheets */}
      <div id="worksheets">
        <PrintableExercises rangeStart={number} rangeEnd={number} />
      </div>

      {/* How to Practice */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
            Jak Ćwiczyć Tabliczkę Mnożenia przez {number}
          </h2>
          
          <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed">
            Nauka tabliczek mnożenia wymaga konsekwentnej praktyki z właściwymi strategiami. 
            Oto sprawdzone metody opanowania specjalnie tabliczki mnożenia przez {number}:
          </p>
          
          <div className="grid gap-3 sm:gap-4">
            {getPracticeStrategies().map((strategy, index) => (
              <div key={index} className="flex items-start gap-3 sm:gap-4 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-4 sm:p-5 border-2 border-green-100">
                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm sm:text-base">
                  {index + 1}
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed pt-0.5 sm:pt-1">
                  {strategy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="section-container bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
            Częste Błędy Podczas Nauki Tabliczki Mnożenia przez {number}
          </h2>
          
          <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed">
            Wielu uczniów popełnia podobne błędy podczas nauki tej tabliczki mnożenia. Świadomość tych częstych błędów 
            pomaga ich unikać i uczyć się bardziej efektywnie.
          </p>
          
          <div className="space-y-4 sm:space-y-6">
            {getCommonMistakes().map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-4 sm:p-6 border-l-4 border-red-500 shadow-md">
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="text-2xl sm:text-3xl">⚠️</span>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1.5 sm:mb-2">
                      {item.mistake}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      <span className="font-semibold text-green-600">Rozwiązanie:</span> {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Multiplication Tables */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
            Powiązane Tabliczki Mnożenia
          </h2>
          
          <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed">
            Tabliczka mnożenia przez {number} jest częścią szerszego systemu nauki. 
            Możesz odkrywać inne tabliczki mnożenia w tym samym zakresie lub przejść do następnej logicznej liczby.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {number > 1 && (
              <Link
                href={`/pl/tabliczki-mnozenia/${number - 1}`}
                className="block bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs sm:text-sm text-slate-600 mb-1">← Poprzednia Liczba</div>
                    <div className="text-lg sm:text-2xl font-bold text-slate-900">
                      Tabliczka Mnożenia {number - 1}
                    </div>
                  </div>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
              </Link>
            )}
            
            {number < 100 && (
              <Link
                href={`/pl/tabliczki-mnozenia/${number + 1}`}
                className="block bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 sm:p-6 border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs sm:text-sm text-slate-600 mb-1">Następna Liczba →</div>
                    <div className="text-lg sm:text-2xl font-bold text-slate-900">
                      Tabliczka Mnożenia {number + 1}
                    </div>
                  </div>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            )}
            
            <Link
              href={`/pl/tabliczki-mnozenia/${rangeStart}-${rangeEnd}`}
              className="block bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-4 sm:p-6 border-2 border-green-200 hover:border-green-400 hover:shadow-lg transition-all group sm:col-span-2"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs sm:text-sm text-slate-600 mb-1">↑ Zakres Nadrzędny</div>
                  <div className="text-lg sm:text-2xl font-bold text-slate-900">
                    Tabliczki Mnożenia {rangeStart}-{rangeEnd}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 sm:mt-2">
                    Odkryj wszystkie tabliczki mnożenia w tym zakresie z narzędziami do praktyki i grami
                  </p>
                </div>
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
    </>
  )
}
