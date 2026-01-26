import Link from 'next/link'
import Header from '@/app/components/pt/Header'
import Footer from '@/app/components/pt/Footer'

export const metadata = {
  title: 'Guia de Tabuada para Pais | Apoie o Aprendizado em Casa',
  description: 'Como ajudar seu filho a aprender tabuada em casa. Dicas práticas, jogos educativos e estratégias de motivação.',
  keywords: 'ajudar crianças com tabuada, matemática em casa, educação para pais, atividades educativas',
  alternates: {
    canonical: '/para-padres',
  },
}

export default function ParaPais() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white pt-20 pb-12 md:pt-24 md:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
                Guia de Tabuada Para Pais
              </h1>
              <p className="text-lg sm:text-xl text-purple-100 mb-6 md:mb-8">
                Como apoiar seu filho no aprendizado de tabuada? 
                Este guia contém estratégias eficazes e conselhos práticos.
              </p>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                <span className="text-purple-100">Seu guia para o sucesso do seu filho</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Why It Matters */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Por Que é Importante?
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4">
                A tabuada é um dos passos mais importantes na jornada matemática do seu filho. 
                Não apenas para matemática, mas também tem importância crítica para o desenvolvimento da resolução de problemas, pensamento lógico e autoconfiança.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">Base para Matemática Avançada</h3>
                  <p className="text-slate-700 text-sm">Divisão, frações, álgebra - todos dependem da tabuada.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Confiança Acadêmica</h3>
                  <p className="text-slate-700 text-sm">O sucesso na tabuada aumenta a confiança geral na escola.</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Habilidades para a Vida</h3>
                  <p className="text-slate-700 text-sm">Cálculos rápidos são úteis ao fazer compras, cozinhar e no dia a dia.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Support Strategies */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Estratégias de Apoio em Casa
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                    🎯
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Torne Concreto</h3>
                    <p className="text-slate-700 mb-3">
                      Ensine a tabuada com situações da vida real em vez de números abstratos.
                    </p>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>"Se você tem 3 caixas e 4 maçãs em cada caixa, quantas maçãs no total?"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>"Uma caixa de ovos tem 6 ovos. Quantos ovos em 4 caixas?"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Use objetos físicos (botões, doces, brinquedos) para visualizar</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                    ⏰
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Prática Curta mas Regular</h3>
                    <p className="text-slate-700 mb-3">
                      É mais eficaz praticar 10-15 minutos por dia do que 1 hora uma vez por semana.
                    </p>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      <li>• Durante o café da manhã - 5 perguntas rápidas</li>
                      <li>• No caminho para a escola - contar de 2 em 2, de 5 em 5</li>
                      <li>• Antes de dormir - revisão de 5 minutos</li>
                      <li>• Nos fins de semana - jogos de multiplicação</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-2xl">
                    🎮
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Aprendizado Baseado em Jogos</h3>
                    <p className="text-slate-700 mb-3">
                      Transformar o aprendizado em jogo aumenta tanto a motivação quanto a retenção.
                    </p>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      <li>• Use os jogos deste site</li>
                      <li>• Jogue jogos de cartas de multiplicação</li>
                      <li>• Organize competições familiares</li>
                      <li>• Ofereça pequenas recompensas pelas conquistas</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Fun Activities */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Atividades Divertidas em Casa
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">🏏 Jogos de Cartas</h3>
                <div className="space-y-3 text-slate-700 text-sm">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">Guerra de Multiplicação</h4>
                    <p className="text-slate-600">Tire duas cartas e multiplique-as. A resposta correta ganha pontos!</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">Memória de Multiplicação</h4>
                    <p className="text-slate-600">Combine as cartas de perguntas com as respostas - como o jogo da memória!</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">🍳 Matemática na Cozinha</h3>
                <div className="space-y-3 text-slate-700 text-sm">
                  <p>Use a tabuada ao cozinhar:</p>
                  <ul className="space-y-2">
                    <li>• "Se precisamos de 2 ovos por panqueca e faremos 4 panquecas, quantos ovos precisamos?"</li>
                    <li>• "Se a receita é para 3 pessoas e somos 6, quanto precisamos?"</li>
                    <li>• Contar colheres, medir ingredientes</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">🛒 Prática de Multiplicação no Supermercado</h3>
                <div className="space-y-3 text-slate-700 text-sm">
                  <ul className="space-y-2">
                    <li>• "3 iogurtes custam R$2 cada, quanto no total?"</li>
                    <li>• "Uma sacola de maçãs contém 6 maçãs. Se comprarmos 4 sacolas, quantas maçãs?"</li>
                    <li>• Comparar preços, calcular economias</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">🎨 Atividades Criativas</h3>
                <div className="space-y-3 text-slate-700 text-sm">
                  <ul className="space-y-2">
                    <li>• Criar cartazes de tabuada</li>
                    <li>• Escrever canções ou rimas de multiplicação</li>
                    <li>• Jogar dados e multiplicar os resultados</li>
                    <li>• Criar histórias com problemas de multiplicação</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Common Challenges */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Desafios Comuns e Soluções
            </h2>
            <div className="space-y-4">
              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
                <summary className="font-semibold text-slate-900 text-lg flex items-center gap-3">
                  <span className="text-purple-500">❓</span>
                  Meu filho tem medo/evita a tabuada
                </summary>
                <div className="mt-4 text-slate-700 space-y-2 text-sm">
                  <p><strong>Solução:</strong> Comece com tabuadas fáceis (1, 2, 5, 10) para construir confiança. Foque no progresso, não na perfeição. Celebre cada pequena conquista.</p>
                  <p>Evite pressionar ou criar ansiedade. Aprender deve ser divertido, não estressante.</p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
                <summary className="font-semibold text-slate-900 text-lg flex items-center gap-3">
                  <span className="text-blue-500">❓</span>
                  Memoriza mas não entende o conceito
                </summary>
                <div className="mt-4 text-slate-700 space-y-2 text-sm">
                  <p><strong>Solução:</strong> Use objetos concretos e modelos visuais. Mostre que 3×4 significa "3 grupos de 4" ou "4+4+4".</p>
                  <p>Use arranjos de objetos, desenhos, manipulativos. A compreensão conceitual é mais importante que a memorização mecânica.</p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
                <summary className="font-semibold text-slate-900 text-lg flex items-center gap-3">
                  <span className="text-green-500">❓</span>
                  Confunde as tabuadas entre si
                </summary>
                <div className="mt-4 text-slate-700 space-y-2 text-sm">
                  <p><strong>Solução:</strong> Foque em uma tabuada por vez. Pratique bem uma tabuada antes de passar para a próxima.</p>
                  <p>Use códigos de cores ou associações visuais para diferentes tabuadas. Pratique a diferenciação: "É 3×4 ou 4×3?"</p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
                <summary className="font-semibold text-slate-900 text-lg flex items-center gap-3">
                  <span className="text-yellow-500">❓</span>
                  Esquece o que aprendeu antes
                </summary>
                <div className="mt-4 text-slate-700 space-y-2 text-sm">
                  <p><strong>Solução:</strong> Revisão regular é essencial. Pratique as tabuadas aprendidas anteriormente junto com as novas.</p>
                  <p>Crie um programa de revisão: cada semana inclua tabuadas antigas. Use jogos para tornar a revisão divertida.</p>
                </div>
              </details>
            </div>
          </section>

          {/* Motivation Tips */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Como Manter a Motivação
            </h2>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg shadow-md p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-4">✅ Fazer</h3>
                  <ul className="space-y-3 text-slate-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Elogiar o esforço, não apenas a resposta correta</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Celebrar o progresso com pequenas recompensas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Tornar o aprendizado um jogo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Estabelecer metas alcançáveis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Criar um ambiente de apoio e sem pressão</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-pink-900 mb-4">❌ Evitar</h3>
                  <ul className="space-y-3 text-slate-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Comparar com irmãos ou outras crianças</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Criar pressão ou ansiedade sobre os erros</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Sessões de prática longas e entediantes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Usar linguagem negativa ("Isso é fácil, por que você não consegue?")</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Esperar perfeição imediata</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-lg p-6 sm:p-8 text-white text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Comece a Jornada da Tabuada com Seu Filho Hoje
            </h2>
            <p className="text-base sm:text-lg text-purple-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Lembre-se, cada criança aprende no seu próprio ritmo. Com seu apoio e as estratégias corretas, 
              seu filho dominará a tabuada. Paciência, prática e positividade!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/pt/tabuada/1-10"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center justify-center"
              >
                <span className="mr-2">🎯</span>
                Explorar Tabuada
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/para-estudantes"
                className="bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors inline-flex items-center justify-center"
              >
                Ver Guia para Estudantes
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-purple-400">
              <p className="text-purple-100 text-sm">
                💡 <strong>Dica de Ouro:</strong> Sua atitude positiva em relação à matemática influencia a atitude do seu filho. 
                Mostre entusiasmo e seu filho também ficará empolgado!
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

