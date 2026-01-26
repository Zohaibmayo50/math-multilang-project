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
      1: "Multiplicar por 1 é um caso especial em matemática. Quando você multiplica qualquer número por 1, o resultado é sempre o mesmo número. Isso é chamado de propriedade de identidade da multiplicação. Pense assim: 'Quantos grupos eu tenho?' Se você tem apenas 1 grupo, você tem exatamente o que começou.",
      2: "Multiplicar por 2 significa dobrar um número. Quando você multiplica algo por 2, você adiciona o número a si mesmo. Esta é uma das tabuadas mais práticas porque frequentemente precisamos dobrar coisas no dia a dia — contar pares de sapatos, rodas de bicicleta ou dividir algo igualmente entre duas pessoas.",
      3: "Multiplicar por 3 significa pegar um número três vezes. Você pode pensar nisso como adicionar o mesmo número a si mesmo três vezes. Esta tabuada é importante para entender triângulos, triplos e tudo que vem em grupos de três.",
      4: "Multiplicar por 4 é como dobrar duas vezes. Como 4 = 2 × 2, você pode dobrar um número e depois dobrar o resultado novamente. Isso torna a tabuada do 4 mais fácil de aprender se você já conhece a tabuada do 2. O número 4 ocorre frequentemente em geometria (quadrados têm 4 lados) e medição de tempo (existem 4 trimestres).",
      5: "Multiplicar por 5 cria um dos padrões mais bonitos em matemática. Todos os múltiplos de 5 terminam com 0 ou 5, tornando esta tabuada muito previsível. É extremamente útil para contar dinheiro (moedas de 5 reais, notas de 5 reais) e ler o relógio (intervalos de 5 minutos).",
      6: "Multiplicar por 6 significa pegar grupos de seis números. O 6 é a primeira tabuada 'real' porque não é apenas um múltiplo de 2 ou 3. Mas como 6 = 2 × 3, você pode multiplicar um número por 2 e depois por 3 (ou vice-versa) para multiplicar por 6. O número 6 ocorre frequentemente na natureza (células de favos de mel) e no dia a dia (caixas de ovos, lados de um dado).",
      7: "Multiplicar por 7 é geralmente uma das tabuadas mais difíceis para os alunos, porque 7 é um número primo e não pode ser facilmente derivado de outras tabuadas. Mas todos os múltiplos de 7 têm belos padrões e podem ser aprendidos através da prática. O 7 é um número importante para dias da semana, continentes e muitas referências culturais.",
      8: "Multiplicar por 8 é como dobrar três vezes (8 = 2 × 2 × 2). Dobre o número, dobre o resultado novamente e dobre mais uma vez — então você multiplicou por 8. Esta tabuada é mais fácil de aprender quando você conhece bem as tabuadas do 2 e do 4. O 8 é um número importante em geometria (octógonos) e música (oitavas).",
      9: "Multiplicar por 9 tem um dos padrões mais fascinantes em matemática. Quando você soma os dígitos de qualquer múltiplo de 9, o resultado é sempre divisível por 9. Além disso, a dezena em 9 × n é sempre n-1. Esta tabuada também pode ser aprendida com truques de dedos. Como 9 é apenas 1 menor que 10, também pode ser calculada usando a tabuada do 10.",
      10: "Multiplicar por 10 é uma das tabuadas mais fáceis. Quando você multiplica qualquer número por 10, você apenas adiciona um zero no final. Isso forma a base do nosso sistema decimal. Aprender a multiplicar por 10 ensina aos alunos o conceito de valor posicional e como trabalhar com números grandes. A tabuada do 10 é o ponto de referência para entender todas as outras tabuadas.",
      11: "Multiplicar por 11 tem um dos padrões mais interessantes em matemática. Quando você multiplica números de um dígito por 11, o resultado é esse número repetido duas vezes (11×3=33, 11×7=77). Na multiplicação de números de dois dígitos por 11, também existe um belo padrão: você soma os dígitos e os coloca no meio. O 11 é um número primo e tem propriedades matemáticas especiais.",
      12: "Multiplicar por 12 é uma das tabuadas mais práticas, porque 12 é divisível por muitos números (1, 2, 3, 4, 6, 12). Esta propriedade torna o 12 muito útil no dia a dia — existem 12 itens em uma dúzia, 12 horas no relógio, 12 meses no ano. Como 12 = 3 × 4 = 2 × 6, você pode aprender esta tabuada de várias maneiras.",
      13: "Multiplicar por 13 desenvolve o reconhecimento de padrões dos alunos. O 13 é um número primo, então não pode ser facilmente derivado de outras tabuadas. Mas é muito útil pensar no 13 como 10+3: multiplicar um número por 13 significa multiplicá-lo por 10 e adicionar o resultado da multiplicação por 3. O 13 é um número com significado especial em muitas culturas.",
      14: "Multiplicar por 14 é o dobro da tabuada do 7. Como 14 = 2 × 7, se você conhece a tabuada do 7, pode dobrar cada resultado e obter a tabuada do 14. O 14 é importante no planejamento semanal (2 semanas = 14 dias) e mostra as propriedades dos números pares.",
      15: "Multiplicar por 15 combina múltiplos de 3 e 5. Como 15 = 3 × 5, esta tabuada carrega as propriedades de ambos os números. Todos os múltiplos de 15 são divisíveis por 3 e 5. Como 15 minutos são um quarto de hora, é frequentemente usado em cálculos de tempo.",
      16: "Multiplicar por 16 é a quarta potência de 2 (2×2×2×2=16). Isso permite aprender a tabuada do 16 através de cadeias de dobramento. Você pode dobrar 8 e obter 16. Em ciência da computação, 16 é um número importante (sistema hexadecimal) e ocorre frequentemente também no dia a dia.",
      17: "Multiplicar por 17 pode ser difícil devido às suas propriedades de número primo. O 17 não pode ser facilmente derivado de outras tabuadas. Mas ajuda pensar no 17 como 20-3 ou 10+7. Aprender a tabuada do 17 desenvolve habilidades de aritmética mental e estratégias de resolução de problemas.",
      18: "Multiplicar por 18 tem muitas abordagens. Como 18 = 2 × 9 = 3 × 6, você pode aprender esta tabuada de várias maneiras. Dobrar a tabuada do 9 ou triplicar a tabuada do 6 resulta na tabuada do 18. O 18 é importante como idade da maioridade em muitos países.",
      19: "Multiplicar por 19 não pode ser derivado de outras tabuadas, porque 19 é um número primo. Mas é muito prático pensar no 19 como 20-1: multiplique o número por 20 e subtraia o próprio número. Esta estratégia torna o cálculo da tabuada do 19 de cabeça muito mais fácil.",
      20: "Multiplicar por 20 é uma continuação natural da tabuada do 10. Quando você multiplica qualquer número por 20, pode multiplicá-lo por 10 e dobrar o resultado. Ou apenas adicione um zero no final e dobre. A tabuada do 20 é usada continuamente em cálculos de dinheiro (20 reais) e medições (20 metros, 20 quilogramas).",
    }
    return meanings[number] || `Multiplicar por ${number} significa adição repetida de ${number}. Cada vez que você multiplica, está contando grupos de ${number}.`
  }

  const getWhyImportant = () => {
    const importance: { [key: number]: string } = {
      1: "A tabuada do 1 é a base de todas as operações de multiplicação. Ela ensina aos alunos que os números têm uma identidade: quando multiplicados por 1, permanecem inalterados. Este conceito é importante para entender propriedades algébricas posteriores. Embora pareça simples, aprender esta tabuada constrói autoconfiança e estabelece o padrão de que a multiplicação é ordenada e previsível.",
      2: "A tabuada do 2 é geralmente a primeira tabuada real que os alunos aprendem, e há uma boa razão para isso. Dobrar é um conceito natural que as crianças encontram diariamente. Aprender esta tabuada torna a aritmética mental muito mais rápida e prepara os alunos para números pares, frações (metades) e divisão básica. Muitos alunos acham que é a tabuada mais fácil, o que constrói autoconfiança para tabuadas mais complexas.",
      3: "A tabuada do 3 preenche a lacuna entre tabuadas simples e complexas. Ela exige que os alunos vão além da simples duplicação e reconheçam novos padrões. Esta tabuada ocorre constantemente em contextos reais, como contar em grupos de três, entender formas triangulares e trabalhar com tempo (três períodos por dia). Alunos que aprendem a tabuada do 3 demonstram domínio de contagem abstrata.",
    }
    return importance[number] || `Aprender a tabuada do ${number} ajuda os alunos a desenvolver fluência com este número importante. Ele ocorre frequentemente em matemática e na vida cotidiana e é crucial para construir uma habilidade de cálculo sólida.`
  }

  const getPatterns = () => {
    const patterns: { [key: number]: { title: string; description: string }[] } = {
      1: [
        { title: "Padrão de Identidade", description: "Cada número multiplicado por 1 dá a si mesmo. Isso nunca muda: 1×1=1, 1×2=2, 1×3=3, e assim por diante." },
        { title: "Série Previsível", description: "Os resultados apenas contam para cima: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Você apenas escreve os números em ordem." },
        { title: "Base para Todas as Tabuadas", description: "Cada tabuada começa com multiplicar por 1, então este padrão ocorre em todas as tabuadas." },
      ],
      2: [
        { title: "Apenas Números Pares", description: "Todos os múltiplos de 2 são números pares. Os resultados sempre terminam com 0, 2, 4, 6 ou 8." },
        { title: "Contar de Dois em Dois", description: "Cada resposta é 2 maior que a anterior: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20." },
        { title: "Padrão de Dobramento", description: "Cada resultado é exatamente o dobro do fator: 2×5=10 é o dobro de 5." },
      ],
      3: [
        { title: "Padrão de Soma de Dígitos", description: "Some os dígitos em cada resultado: 3 (3), 6 (6), 9 (9), 12 (1+2=3), 15 (1+5=6), 18 (1+8=9). O padrão 3-6-9 se repete!" },
        { title: "Contar de Três em Três", description: "Cada resposta aumenta em 3: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30." },
        { title: "Alternância Ímpar-Par", description: "Os resultados alternam: ímpar (3), par (6), ímpar (9), par (12), criando um ritmo previsível." },
      ],
    }
    return patterns[number] || []
  }

  const getCommonMistakes = () => {
    const mistakes: { [key: number]: { mistake: string; solution: string }[] } = {
      1: [
        { mistake: "Acreditar que 1×1=2", solution: "Lembre-se: qualquer coisa multiplicada por 1 permanece a mesma. 1 grupo de 1 é apenas 1." },
        { mistake: "Confusão com adição", solution: "Multiplicar por 1 é diferente de somar. 5+1=6, mas 5×1=5." },
      ],
      2: [
        { mistake: "Confundir 2×6=12 com 2×7=14", solution: "Use a contagem de dois em dois: 2, 4, 6, 8, 10, 12, 14. Conte cuidadosamente sem pular." },
        { mistake: "Confusão com números grandes", solution: "Decompor: 2×8 é APENAS 8+8. Dobrar é uma adição simples." },
      ],
    }
    return mistakes[number] || []
  }

  const getPracticeStrategies = () => {
    const strategies: { [key: number]: string[] } = {
      1: [
        "Diga cada multiplicação em voz alta: '1 vezes 1 é 1, 1 vezes 2 é 2...'",
        "Pratique escrever a tabuada uma vez por dia durante uma semana",
        "Encontre o padrão: a resposta é sempre o mesmo número que o segundo número",
        "Use cartões de memória, embora esta tabuada geralmente seja aprendida muito rapidamente",
      ],
      2: [
        "Conte de dois em dois enquanto caminha ou sobe escadas: 2, 4, 6, 8...",
        "Use seus dedos: mantenha os dedos em pares e conte de dois em dois",
        "Pratique dobrar números mentalmente durante o dia",
        "Diga em voz alta: '2 vezes 5 é 5 mais 5, que é 10'",
      ],
    }
    return strategies[number] || [
      `Pratique contar de ${number} em ${number} em voz alta`,
      "Escreva a tabuada todos os dias durante uma semana",
      "Use cartões de memória para testes aleatórios",
      "Pratique 5-10 minutos diariamente em vez de longas sessões de estudo de uma vez",
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
                <div className="text-xs text-slate-600">Operações</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md border-2 border-indigo-100">
                <div className="text-2xl sm:text-3xl mb-1">🎮</div>
                <div className="text-xl sm:text-2xl font-bold text-indigo-600">3</div>
                <div className="text-xs text-slate-600">Jogos</div>
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
              Esta página ajuda você a <span className="font-semibold text-yellow-200">aprender e entender a tabuada do {number}</span>. 
              Você encontrará como o {number} se comporta na multiplicação, 
              <span className="font-semibold text-yellow-200">verá seus padrões</span> e 
              <span className="font-semibold text-yellow-200">aprenderá maneiras práticas</span> de dominá-la.
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
                <span>Explorar Jogos</span>
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
              O Que a Tabuada do {number} Cobre?
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full"></div>
          </div>
          
          <p className="text-sm sm:text-base text-slate-700 mb-6 leading-relaxed text-center max-w-2xl mx-auto">
            A tabuada do {number} cobre o produto do número {number} com todos os números de 1 a 10. 
            Isso ensina <span className="font-bold text-indigo-600">10 operações básicas</span> que ajudam muito no dia a dia e em tópicos matemáticos avançados.
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
                A tabuada do {number} tem <span className="font-bold text-indigo-600">10 operações de multiplicação</span>. 
                Se você entender os padrões nesta tabuada, pode aprender essas operações facilmente e calcular rapidamente!
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
                  O Que Significa o Número {number} na Multiplicação?
                </h2>
                
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4 sm:mb-6">
                  {getNumberMeaning()}
                </p>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-5 border-2 border-blue-100">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="text-2xl sm:text-3xl">💡</span>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1 sm:mb-2">Explicação Simples</h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        Quando você vê {number} × 4, pense: "Eu tenho 4 grupos e cada grupo tem {number} elementos." 
                        Então {number} × 4 = {number} + {number} + {number} + {number} = {number * 4}.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
                  Por Que É Importante Aprender a Tabuada do {number}
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
                    title="Imprimir tabuada"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                    <span className="hidden sm:inline">Imprimir tabuada</span>
                  </button>
                  
                  <button
                    onClick={handleDownload}
                    className="group flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg"
                    title="Baixar como imagem"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span className="hidden sm:inline">Baixar como imagem</span>
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
            Padrões na Tabuada do {number}
          </h2>
          
          <p className="text-sm sm:text-base text-slate-700 mb-4 sm:mb-6 leading-relaxed">
            Entender padrões torna o aprendizado mais fácil e divertido. A tabuada do {number} tem 
            belos padrões que podem ajudá-lo a lembrá-la sem decorar.
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
            Como Praticar a Tabuada do {number}
          </h2>
          
          <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed">
            Aprender tabuadas requer prática consistente com as estratégias certas. 
            Aqui estão métodos comprovados para dominar especificamente a tabuada do {number}:
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
            Erros Comuns ao Aprender a Tabuada do {number}
          </h2>
          
          <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed">
            Muitos alunos cometem erros semelhantes ao aprender esta tabuada. Estar ciente desses erros comuns 
            ajuda você a evitá-los e aprender de forma mais eficaz.
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
                      <span className="font-semibold text-green-600">Solução:</span> {item.solution}
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
            Tabuadas Relacionadas
          </h2>
          
          <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed">
            A tabuada do {number} faz parte de um sistema de aprendizado mais amplo. 
            Você pode explorar outras tabuadas no mesmo intervalo ou passar para o próximo número lógico.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {number > 1 && (
              <Link
                href={`/pt/tabuada/${number - 1}`}
                className="block bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs sm:text-sm text-slate-600 mb-1">← Número Anterior</div>
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
                    <div className="text-xs sm:text-sm text-slate-600 mb-1">Próximo Número →</div>
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
                  <div className="text-xs sm:text-sm text-slate-600 mb-1">↑ Intervalo Superior</div>
                  <div className="text-lg sm:text-2xl font-bold text-slate-900">
                    Tabuadas {rangeStart}-{rangeEnd}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 sm:mt-2">
                    Explore todas as tabuadas neste intervalo com ferramentas de prática e jogos
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



