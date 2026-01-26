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

export default function NumberPage({ number, rangeStart, rangeEnd }: NumberPageProps) {
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
              <title>Tabuada ${number}</title>
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
              <h1>Tabuada ${number}</h1>
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
        ctx.fillText(number + ' Tabuada', 300, 60)

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
            link.download = number + '-Tabuada.png'
            link.click()
            URL.revokeObjectURL(url)
          }
        })
      } catch (error) {
        console.error('Nedladdning misslyckades:', error)
      }
    }
  }

  // Number-specific content
  const getNumberMeaning = () => {
    const meanings: { [key: number]: string} = {
      1: "Multiplicar por 1 är ett specialfall i matematik. Quando você multiplica qualquer número med 1, o resultado é sempre samma tal. Isso é chamado de multiplikationens identitetsegenskap. Tänk på det så här: 'Hur många grupper har jag?' Om du bara har 1 grupp, har du exakt vad du började med.",
      2: "Multiplicar por 2 betyder att fördubbla ett tal. Quando você multiplica något med 2, lägger du till det till sig själv. Detta är uma das mest praktiska Tabuadasna porque vi ofta behöver fördubbla saker no dia a dia — räkna skopar, cykelhjul eller dela något jämnt mellan två personer.",
      3: "Multiplicar por 3 significa pegar ett tal tre gånger. Du kan tänka på det som att lägga till samma tal till sig självt tre gånger. Esta tabuada é importante para entender trianglar, tripplar och allt som kommer i grupper om tre.",
      4: "Multiplicar por 4 är som att fördubbla två gånger. porque 4 = 2 × 2, kan du fördubbla ett tal och sedan fördubbla resultatet igen. Detta gör 4-tabuadaen lättare Aprender om du redan känner till 2-tabuadaen. Talet 4 ocorre frequentemente i geometri (fyrkanter har 4 sidor) och tidmätning (det finns 4 kvarter).",
      5: "Multiplicar por 5 skapar ett av de vackraste mönstren i matematik. Alla múltiplos de 5 slutar med 0 eller 5, vilket gör Esta tabuada mycket förutsägbar. Den är extremt användbar för att räkna pengar (5-kronor mynt, 5-kronor sedlar) och läsa klockan (5 minuters intervall).",
      6: "Multiplicar por 6 significa pegar grupper om sex tal. 6 är den första 'riktiga' a Tabuada do porque den inte bara är en multipel av 2 eller 3. Men porque 6 = 2 × 3, kan du multiplicera ett tal med 2 och sedan med 3 (eller tvärtom) för Multiplicar por 6. Talet 6 ocorre frequentemente na natureza (bikupans celler) och no dia a dia (äggkartonger, tärningens sidor).",
      7: "Multiplicar por 7 é geralmente uma das tabuadas mais difíceis för elever, porque 7 é um número primo och inte lätt kan härledas från andra tabuadas. Men alla múltiplos de 7 têm belos padrões och podem ser aprendidos através de övning. 7 är ett viktigt tal för veckodagar, kontinenter och många kulturella referenser.",
      8: "Multiplicar por 8 är som att fördubbla tre gånger (8 = 2 × 2 × 2). Fördubbla talet, fördubbla resultatet igen, och fördubbla en gång till — då har du multiplicerat med 8. Esta tabuada är lättare att lära när du känner 2- och 4-tabuadas väl. 8 är ett viktigt tal i geometri (oktogoner) och musik (oktav).",
      9: "Multiplicar por 9 har ett av de mest fascinerande mönstren i matematik. När du adderar siffrorna i vilken multipel av 9 som helst, o resultado é sempre delbart med 9. Dessutom är tiotalet i 9 × n alltid n-1. Esta tabuada kan också läras med fingerknep. porque 9 är bara 1 mindre än 10, kan den också beräknas med 10-tabuadaen.",
      10: "Multiplicar por 10 är uma das enklaste Tabuadasna. Quando você multiplica qualquer número med 10, lägger du bara till en nolla i slutet. Detta utgör grunden för vårt decimalsystem. Aprender Multiplicar por 10 ensina os alunos begreppet platsvärde och hur man arbetar med stora tal. 10-tabuadaen är jämförelsepunkten för entender alla andra Tabuadas.",
      11: "Multiplicar por 11 har ett av de mest intressanta mönstren i matematik. Quando você multiplica ensiffriga tal med 11, är resultatet detta tal upprepat två gånger (11×3=33, 11×7=77). Vid multiplikation av tvåsiffriga tal med 11 finns också ett vackert mönster: du adderar siffrorna och placerar dem i mitten. 11 é um número primo och har särskilda matematiska egenskaper.",
      12: "Multiplicar por 12 är uma das mest praktiska tabuadas, porque 12 är delbart med många tal (1, 2, 3, 4, 6, 12). Denna egenskap gör 12 mycket användbart no dia a dia — det finns 12 föremål i ett dussin, 12 timmar på klockan, 12 månader på året. porque 12 = 3 × 4 = 2 × 6, kan du lära dig Esta tabuada på många sätt.",
      13: "Multiplicar por 13 utvecklar elevers mönsterigenkänning. 13 é um número primo, så det kan inte lätt härledas från andra tabuadas. Men det är mycket användbart att tänka på 13 som 10+3: att multiplicera ett tal med 13 betyder att multiplicera det med 10 och lägga till resultatet av multiplikation med 3. 13 är ett tal med särskild betydelse i många kulturer.",
      14: "Multiplicar por 14 är dubbelt 7-tabuadaen. porque 14 = 2 × 7, om du känner till 7-tabuadaen, kan du fördubbla varje resultat och få 14-tabuadaen. 14 är viktigt i veckoplanering (2 veckor = 14 dagar) och visar egenskaperna hos jämna tal.",
      15: "Multiplicar por 15 kombinerar multipler av 3 och 5. porque 15 = 3 × 5, bär Esta tabuada egenskaperna hos båda talen. Alla múltiplos de 15 är delbara med både 3 och 5. porque 15 minuter är en kvart, används det ofta i tidberäkningar.",
      16: "Multiplicar por 16 är 2:s fjärde potens (2×2×2×2=16). Detta möjliggör att lära 16-tabuadaen genom dubblering kedjor. Du kan fördubbla 8 och få 16. I datavetenskap är 16 ett viktigt tal (hexadecimalt system) och ocorre frequentemente även no dia a dia.",
      17: "Multiplicar por 17 kan vara svårt på grund av dess primtalsegenskaper. 17 kan inte lätt härledas från andra tabuadas. Men det hjälper att tänka på 17 som 20-3 eller 10+7. Aprender 17-tabuadaen utvecklar mentala aritmetikfärdigheter och problemlösningsstrategier.",
      18: "Multiplicar por 18 har många tillvägagångssätt. porque 18 = 2 × 9 = 3 × 6, kan du lära dig Esta tabuada på många sätt. Att fördubbla 9-tabuadaen eller tredubbla 6-tabuadaen ger 18-tabuadaen. 18 är viktigt som myndighetsålder i många länder.",
      19: "Multiplicar por 19 kan inte härledas från andra tabuadas, porque 19 é um número primo. Men det är mycket praktiskt att tänka på 19 som 20-1: multiplicera talet med 20 och subtrahera talet självt. Denna strategi gör beräkning av 19-tabuadaen i huvudet mycket lättare.",
      20: "Multiplicar por 20 är en naturlig fortsättning på 10-tabuadaen. Quando você multiplica qualquer número med 20, kan du multiplicera det med 10 och fördubbla resultatet. Eller lägg bara till en nolla i slutet och fördubbla. 20-tabuadaen används kontinuerligt i pengaräkningar (20 kronor) och mätningar (20 meter, 20 kilogram).",
    }
    return meanings[number] || `Multiplicar por ${number} betyder upprepad addition av ${number}. Varje gång du multiplicerar räknar du grupper av ${number}.`
  }

  const getWhyImportant = () => {
    const importance: { [key: number]: string } = {
      1: "a Tabuada do 1 är grunden för alla multiplikationsoperationer. Den ensina os alunos att tal har en identitet: när de multipliceras med 1, förblir de oförändrade. Detta koncept är viktigt för entender senare algebraiska egenskaper. Även om det verkar enkelt, bygger inlärning av Esta tabuada självförtroende och etablerar mönstret att multiplikation är ordnad och förutsägbar.",
      2: "a Tabuada do 2 é geralmente den första riktiga a Tabuada do som elever lär sig, och det finns en god anledning till detta. Dubblering är ett naturligt koncept som barn möter dagligen. Aprender Esta tabuada gör mental aritmetik mycket snabbare och förbereder eleverna för jämna tal, bråk (halvor) och básico division. Många elever tycker att den är den enklaste tabuadaen, vilket bygger självförtroende för mer komplexa tabuadas.",
      3: "a Tabuada do 3 fyller gapet mellan enkla och komplexa tabuadas. Den kräver att eleverna går bortom enkel dubblering och känner igen nya mönster. Esta tabuada förekommer ständigt i verkliga sammanhang, som att räkna i grupper om tre, förstå triangelformer och arbeta med tid (tre tidsperioder per dag). Elever som lär sig 3-tabuadaen visar behärskning av abstrakt räkning.",
    }
    return importance[number] || `Aprender a Tabuada do ${number} hjälper elever att utveckla flyt med detta viktiga tal. Det ocorre frequentemente i matematik och vardagsliv och är avgörande för att bygga en solid räknefärdighet.`
  }

  const getPatterns = () => {
    const patterns: { [key: number]: { title: string; description: string }[] } = {
      1: [
        { title: "Identitetsmönster", description: "Varje tal multiplicerat med 1 ger sig själv. Detta ändras aldrig: 1×1=1, 1×2=2, 1×3=3, och så vidare." },
        { title: "Förutsägbar Serie", description: "Resultaten räknar bara uppåt: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Du skriver bara siffrorna i ordning." },
        { title: "Grunden för Alla tabuadas", description: "Varje Tabuada börjar med Multiplicar por 1, så detta mönster förekommer i alla tabuadas." },
      ],
      2: [
        { title: "Endast Jämna Tal", description: "Alla múltiplos de 2 är jämna tal. Resultaten slutar alltid med 0, 2, 4, 6 eller 8." },
        { title: "Räkna med Två", description: "Varje svar är 2 större än no anterior: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20." },
        { title: "Dubbleringsmönster", description: "Varje resultat är exakt dubbelt så mycket som faktorn: 2×5=10 är dubbelt så mycket som 5." },
      ],
      3: [
        { title: "Siffersummamönster", description: "Addera siffrorna i varje resultat: 3 (3), 6 (6), 9 (9), 12 (1+2=3), 15 (1+5=6), 18 (1+8=9). Mönstret 3-6-9 upprepas!" },
        { title: "Räkna med Tre", description: "Varje svar ökar med 3: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30." },
        { title: "Udda-Jämn Växling", description: "Resultaten alternerar: udda (3), jämn (6), udda (9), jämn (12), vilket skapar en förutsägbar rytm." },
      ],
    }
    return patterns[number] || []
  }

  const getCommonMistakes = () => {
    const mistakes: { [key: number]: { mistake: string; solution: string }[] } = {
      1: [
        { mistake: "Tro att 1×1=2", solution: "Kom ihåg: vad som helst multiplicerat med 1 förblir detsamma. 1 grupp av 1 är bara 1." },
        { mistake: "Förväxling med addition", solution: "Multiplicar por 1 är annorlunda än att addera. 5+1=6, men 5×1=5." },
      ],
      2: [
        { mistake: "Förväxla 2×6=12 med 2×7=14", solution: "Använd räkning med två: 2, 4, 6, 8, 10, 12, 14. Räkna noggrant utan att hoppa över." },
        { mistake: "Förvirring med stora tal", solution: "Bryt ner: 2×8 är BARA 8+8. Dubblering är enkel addition." },
      ],
    }
    return mistakes[number] || []
  }

  const getPracticeStrategies = () => {
    const strategies: { [key: number]: string[] } = {
      1: [
        "Säg varje multiplikation högt: '1 gånger 1 är 1, 1 gånger 2 är 2...'",
        "Öva att skriva tabuadaen en gång om dagen i en vecka",
        "Hitta mönstret: svaret är alltid samma tal som det andra talet",
        "Använd flashkort, även om Esta tabuada vanligtvis lärs mycket snabbt",
      ],
      2: [
        "Räkna med två medan du går eller går upp för trappor: 2, 4, 6, 8...",
        "Använd dina fingrar: håll fingrarna i par och räkna med två",
        "Öva att dubbla tal i huvudet under dagen",
        "Säg högt: '2 gånger 5 är 5 plus 5, vilket är 10'",
      ],
    }
    return strategies[number] || [
      `Öva att räkna med ${number} högt`,
      "Skriv tabuadaen varje dag i en vecka",
      "Använd flashkort för slumpmässig testning",
      "Öva 5-10 minuter dagligen istället för långt studerande på en gång",
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
                <span className="text-slate-900">Tabuada</span>
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
                <div className="text-xs text-slate-600">Operationer</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md border-2 border-indigo-100">
                <div className="text-2xl sm:text-3xl mb-1">🎮</div>
                <div className="text-xl sm:text-2xl font-bold text-indigo-600">3</div>
                <div className="text-xs text-slate-600">Spel</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md border-2 border-purple-100">
                <div className="text-2xl sm:text-3xl mb-1">📝</div>
                <div className="text-xl sm:text-2xl font-bold text-purple-600">∞</div>
                <div className="text-xs text-slate-600">Exercícios</div>
              </div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4 text-center px-4">
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
              Den här sidan hjälper dig att <span className="font-semibold text-yellow-200">lära dig och förstå a Tabuada do {number}</span>. 
              Du hittar hur {number} beter sig vid multiplikation, 
              <span className="font-semibold text-yellow-200"> ser dess mönster</span> och 
              <span className="font-semibold text-yellow-200">lär dig praktiska sätt</span> att bemästra den.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-4">
              <a 
                href="#practice"
                className="group inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white text-indigo-600 font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 text-sm sm:text-base"
              >
                <span className="text-lg sm:text-xl">🎯</span>
                <span>Começar a Praticar</span>
                <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a 
                href="#games"
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/90 backdrop-blur-sm text-purple-600 font-bold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border-2 border-white/50 text-sm sm:text-base"
              >
                <span className="text-lg sm:text-xl">🎮</span>
                <span>Utforska Spel</span>
              </a>
              <a 
                href="#worksheets"
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/90 backdrop-blur-sm text-green-600 font-bold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border-2 border-white/50 text-sm sm:text-base"
              >
                <span className="text-lg sm:text-xl">📝</span>
                <span className="hidden sm:inline">Baixar Exercícios</span>
                <span className="sm:hidden">Baixar</span>
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
              Vad Täcker a Tabuada do {number}?
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full"></div>
          </div>
          
          <p className="text-sm sm:text-base text-slate-700 mb-6 leading-relaxed text-center max-w-2xl mx-auto">
            a Tabuada do {number} täcker produkten av talet {number} med alla tal från 1-10. 
            Detta lär dig <span className="font-bold text-indigo-600">10 operações básicas</span> som hjälper dig mycket no dia a dia och avancerade matematikämnen.
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
                a Tabuada do {number} har <span className="font-bold text-indigo-600">10 multiplikationsoperationer</span>. 
                Om du förstår mönstren i Esta tabuada kan du lära dig dessa operationer enkelt och räkna snabbt!
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
                  Vad Betyder Talet {number} Vid Multiplikation?
                </h2>
                
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4 sm:mb-6">
                  {getNumberMeaning()}
                </p>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-5 border-2 border-blue-100">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="text-2xl sm:text-3xl">💡</span>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1 sm:mb-2">Enkel Förklaring</h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        När du ser {number} × 4, tänk: "Jag har 4 grupper och varje grupp har {number} element." 
                        Så {number} × 4 = {number} + {number} + {number} + {number} = {number * 4}.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
                  Varför Är Det Viktigt Aprender a Tabuada do {number}
                </h2>
                
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {getWhyImportant()}
                </p>
              </div>
            </div>

            <div className="lg:sticky lg:top-8">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Tabuada {number}
                </h2>
                
                <div className="flex gap-2">
                  <button
                    onClick={handlePrint}
                    className="group flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-white border-2 border-blue-200 text-blue-600 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all text-xs sm:text-sm font-semibold"
                    title="Skriv ut tabuada"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                    <span className="hidden sm:inline">Skriv ut tabuada</span>
                  </button>
                  
                  <button
                    onClick={handleDownload}
                    className="group flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg"
                    title="Baixar som bild"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span className="hidden sm:inline">Baixar som bild</span>
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
            Mönster i a Tabuada do {number}
          </h2>
          
          <p className="text-sm sm:text-base text-slate-700 mb-4 sm:mb-6 leading-relaxed">
            entender mönster gör inlärningen enklare och roligare. a Tabuada do {number} har 
            vackra mönster som kan hjälpa dig att komma ihåg den utan att plugga utantill.
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
            Hur Man Övar a Tabuada do {number}
          </h2>
          
          <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed">
            Aprender Tabuadas kräver konsekvent övning med rätta strategier. 
            Här är beprövade metoder för att specifikt bemästra a Tabuada do {number}:
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
            Erros Comuns När Man Lär Sig a Tabuada do {number}
          </h2>
          
          <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed">
            Många elever gör liknande misstag när de lär sig Esta tabuada. Att vara medveten om dessa Erros Comuns 
            hjälper dig att undvika dem och lära dig mer effektivt.
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
                      <span className="font-semibold text-green-600">Lösning:</span> {item.solution}
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
            Relaterade Tabuadas
          </h2>
          
          <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed">
            a Tabuada do {number} är en del av ett bredare inlärningssystem. 
            Du kan utforska andra tabuadas i samma intervall eller gå vidare till nästa logiska tal.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {number > 1 && (
              <Link
                href={`/pt/tabuada/${number - 1}`}
                className="block bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs sm:text-sm text-slate-600 mb-1">← Föregående Tal</div>
                    <div className="text-lg sm:text-2xl font-bold text-slate-900">
                      Tabuada {number - 1}
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
                href={`/pt/tabuada/${number + 1}`}
                className="block bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 sm:p-6 border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs sm:text-sm text-slate-600 mb-1">Nästa Tal →</div>
                    <div className="text-lg sm:text-2xl font-bold text-slate-900">
                      Tabuada {number + 1}
                    </div>
                  </div>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            )}
            
            <Link
              href={`/pt/tabuada/${rangeStart}-${rangeEnd}`}
              className="block bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-4 sm:p-6 border-2 border-green-200 hover:border-green-400 hover:shadow-lg transition-all group sm:col-span-2"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs sm:text-sm text-slate-600 mb-1">↑ Överliggande Intervall</div>
                  <div className="text-lg sm:text-2xl font-bold text-slate-900">
                    Tabuadas {rangeStart}-{rangeEnd}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 sm:mt-2">
                    Explore todas Tabuadas i detta intervall med ferramentas de prática e jogos
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



