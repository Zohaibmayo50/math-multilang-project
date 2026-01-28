import Link from 'next/link'
import Header from '@/app/components/pt/Header'
import Footer from '@/app/components/pt/Footer'

export const metadata = {
  title: 'Para Estudantes: Guia de Tabuada | Aprendizado Passo a Passo',
  description: 'Guia passo a passo para aprender tabuada facilmente. Aprenda no seu próprio ritmo com materiais visuais, atividades práticas e jogos divertidos!',
  keywords: 'aprender tabuada, matemática para estudantes, guia de tabuada, multiplicação passo a passo',
  alternates: {
    canonical: '/para-estudantes',
  },
}

export default function ForStudantes() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white pt-20 pb-12 md:pt-24 md:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
                Aprender Tabuada é Muito Fácil! 🎯
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 mb-6 md:mb-8">
                Avance no seu próprio ritmo, aprenda enquanto se diverte e torne-se um herói da matemática! 
                Este guia vai ajudá-lo a aprender tabuada passo a passo.
              </p>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-blue-100">Você também pode fazer isso!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Why Learn */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Por Que Devo Aprender Tabuada? 🤔
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">
                A tabuada é o super poder do mundo matemático! Isto é o que ela lhe dará:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                    ⚡
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Cálculo Rápido</h3>
                    <p className="text-slate-700">¡Podrás resolver problemas matemáticos mucho más rápido!</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-2xl">
                    🎮
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Uso en la Vida Diaria</h3>
                    <p className="text-slate-700">¡Te será útil al hacer compras, en juegos, en todas partes!</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-2xl">
                    🏆
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Aumento de Confianza</h3>
                    <p className="text-slate-700">Sua confiança em matemática aumentará e você terá mais sucesso!</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-2xl">
                    🧠
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Poder Cerebral</h3>
                    <p className="text-slate-700">Sua memória ficará mais forte e você aprenderá a pensar mais rápido!</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Learning Path */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Caminho de Aprendizado Passo a Passo 🚀
            </h2>
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border-l-4 border-green-500">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">Comece com as Tabuadas Fáceis (1, 2, 5, 10)</h3>
                    <p className="text-slate-700 mb-3">
                      Começar com as tabuadas mais fáceis vai te dar confiança! São muito simples e você as aprenderá rápido.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-900 mb-2">Por que essas tabuadas são fáceis?</p>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• <strong>Tabuada do 1:</strong> Cada número fica igual! (1×5=5)</li>
                        <li>• <strong>Tabuada do 2:</strong> Some o número duas vezes! (2×4 = 4+4 = 8)</li>
                        <li>• <strong>Tabuada do 5:</strong> Sempre termina em 5 ou 0!</li>
                        <li>• <strong>Tabuada do 10:</strong> Adicione um zero no final! (10×3 = 30)</li>
                      </ul>
                    </div>
                    <div className="mt-3">
                      <Link href="/pt/tabuada/1-10" className="text-green-600 hover:text-green-700 font-medium inline-flex items-center">
                        Ir para Tabuadas 1-10 →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border-l-4 border-blue-500">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">Avance para Tabuadas de Nível Médio (3, 4, 6)</h3>
                    <p className="text-slate-700 mb-3">
                      Agora você está pronto para tabuadas um pouco mais desafiadoras! Não se preocupe, também há truques para essas.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-900 mb-2">Truques:</p>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• <strong>Tabuada do 3:</strong> Some o número 3 vezes (3×4 = 4+4+4 = 12)</li>
                        <li>• <strong>Tabuada do 4:</strong> Multiplique por 2, depois duplique (4×5 = 2×5×2 = 20)</li>
                        <li>• <strong>Tabuada do 6:</strong> Use a tabuada do 5 e adicione 1 mais (6×4 = 5×4 + 4 = 24)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-500">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Desafie-se com as Tabuadas Difíceis (7, 8, 9)</h3>
                    <p className="text-slate-700 mb-3">
                      Essas tabuadas são um pouco mais difíceis, mas você já aprendeu muito até agora! Com técnicas especiais você também dominará essas.
                    </p>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-semibold text-yellow-900 mb-2">Técnicas Especiais:</p>
                      <ul className="space-y-2 text-slate-700 text-sm">
                        <li>• <strong>Tabuada do 9 - Truque dos Dedos:</strong> Abra suas mãos, abaixe o dedo do número que você vai multiplicar. Dedos abertos à esquerda = dezenas, dedos à direita = unidades!</li>
                        <li>• <strong>Tabuada do 8:</strong> Multiplique por 10, depois subtraia 2 vezes (8×7 = 10×7 - 2×7 = 70-14 = 56)</li>
                        <li>• <strong>Tabuada do 7:</strong> Para as difíceis use a tabuada do 5 (7×6 = 5×6 + 2×6 = 30+12 = 42)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Practica Constantemente 💪</h3>
                    <p className="text-slate-700 mb-3">
                      Para no olvidar todo lo que has aprendido, practica un poco cada día. ¡Lo mejor es practicar poco pero regularmente!
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-900 mb-2">Consejos de Práctica Diaria:</p>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• Estudia 10-15 minutos cada día (¡no mucho, pero regular!)</li>
                        <li>• Practica jugando - ¡es divertido!</li>
                        <li>• Organiza competencias con tu familia</li>
                        <li>• Cuando veas multiplicaciones en la vida diaria, calcúlalas (ej: "3 cajas, 5 chocolates en cada una, ¿cuántos en total?")</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Visual Learning */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Aprendizaje Visual - Entiende con Imágenes 🎨
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">
                ¡Visualizar la multiplicación en tu mente facilita el aprendizaje! Aquí hay algunas técnicas visuales:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {/* Arrays */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Arreglos (Arrays)</h3>
                  <p className="text-slate-700 mb-4 text-sm">Ejemplo de 4 × 3 = 12:</p>
                  <div className="bg-white p-4 rounded inline-block">
                    <div className="grid grid-cols-4 gap-2">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="w-8 h-8 bg-blue-400 rounded"></div>
                      ))}
                    </div>
                    <p className="text-center mt-2 text-sm text-slate-600">4 columnas × 3 filas = 12</p>
                  </div>
                </div>

                {/* Number Line */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Saltos en la Recta Numérica</h3>
                  <p className="text-slate-700 mb-4 text-sm">3 × 4: saltos de 4 (0→4→8→12)</p>
                  <div className="bg-white p-4 rounded">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-green-700">0</span>
                      <span className="text-green-500">→</span>
                      <span className="text-sm font-bold text-green-700">4</span>
                      <span className="text-green-500">→</span>
                      <span className="text-sm font-bold text-green-700">8</span>
                      <span className="text-green-500">→</span>
                      <span className="text-sm font-bold text-green-700">12</span>
                    </div>
                    <p className="text-center mt-2 text-xs text-slate-600">3 pasos, cada paso 4 unidades</p>
                  </div>
                </div>

                {/* Skip Counting */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Conteo Saltado</h3>
                  <p className="text-slate-700 mb-3 text-sm">Cuenta de 5 en 5: 5, 10, 15, 20, 25...</p>
                  <div className="bg-white p-3 rounded text-center">
                    <p className="text-purple-700 font-bold text-lg">5 - 10 - 15 - 20 - 25</p>
                    <p className="text-xs text-slate-600 mt-2">¡Si memorizas estos números, la tabla del 5 es muy fácil!</p>
                  </div>
                </div>

                {/* Patterns */}
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Nota los Patrones</h3>
                  <p className="text-slate-700 mb-3 text-sm">El secreto de la tabla del 9:</p>
                  <div className="bg-white p-3 rounded">
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>9×1=<strong className="text-pink-600">09</strong> (0+9=9)</li>
                      <li>9×2=<strong className="text-pink-600">18</strong> (1+8=9)</li>
                      <li>9×3=<strong className="text-pink-600">27</strong> (2+7=9)</li>
                      <li>9×4=<strong className="text-pink-600">36</strong> (3+6=9)</li>
                      <li className="text-xs italic">¡Los dígitos siempre suman 9!</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Practice Tips */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Dicas para Praticar 🎯
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  🎮
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Jogue</h3>
                <p className="text-slate-700 mb-3">
                  Pratique com os jogos divertidos deste site. Aprender enquanto joga é muito mais divertido!
                </p>
                <Link href="/pt/tabuada" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center text-sm">
                  Descubra os Jogos →
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  📝
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Faça Testes</h3>
                <p className="text-slate-700 mb-3">
                  Use cartões ou peça a alguém para fazer perguntas. Fazer testes acelera seu aprendizado!
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  🎵
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Canções e Ritmos</h3>
                <p className="text-slate-700 mb-3">
                  Transforme a tabuada em canções! É mais fácil memorizar com música.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  🏆
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Recompense-se</h3>
                <p className="text-slate-700 mb-3">
                  Quando aprender uma tabuada, recompense-se! Colecione adesivos ou faça algo pequeno.
                </p>
              </div>
            </div>
          </section>

          {/* Progress Tracking */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Acompanhe seu Progresso 📊
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">
                Ver quanto você progrediu te motiva! Aqui estão métodos de acompanhamento:
              </p>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">✅ Lista de Verificação de Tabuadas</h3>
                  <p className="text-slate-700 text-sm">
                    Escreva em um papel as tabuadas de 1 a 10. Cada vez que aprender uma, coloque um grande check! 
                    Quando todos os checks estiverem completos, você será um herói da tabuada! 🌟
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">📈 Gráfico de Progresso</h3>
                  <p className="text-slate-700 text-sm">
                    Registre quantas perguntas você respondeu corretamente a cada semana. Desenhe um gráfico e veja seu progresso. 
                    Cada semana você está melhorando!
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">⭐ Sistema de Estrelas</h3>
                  <p className="text-slate-700 text-sm">
                    Para cada resposta correta, desenhe uma estrela. Quando chegar a 100 estrelas, dê a si mesmo um prêmio especial!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Motivation */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Segredos de Motivação e Sucesso 💫
            </h2>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🌟</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Seja Paciente</h3>
                      <p className="text-slate-700 text-sm">Tudo leva tempo. Você consegue, apenas pratique!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💪</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Erros são Normais</h3>
                      <p className="text-slate-700 text-sm">Não se sinta mal quando errar, faz parte do aprendizado!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Estabeleça Metas Pequenas</h3>
                      <p className="text-slate-700 text-sm">Uma tabuada por dia é suficiente, não se apresse!</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🤝</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Peça Ajuda</h3>
                      <p className="text-slate-700 text-sm">Se há algo que você não entende, pergunte à sua família ou professor!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎉</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Celebre suas Conquistas</h3>
                      <p className="text-slate-700 text-sm">Cada pequena conquista é importante, valorize a si mesmo!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">😊</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Divirta-se!</h3>
                      <p className="text-slate-700 text-sm">Aprender deve ser divertido, experimente os jogos!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Reference */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Guia Rápido de Truques 🔑
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-900 mb-2">Multiplicar por 0</h4>
                  <p className="text-sm text-slate-700">Tudo é zero! 0×1000=0</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-green-900 mb-2">Multiplicar por 1</h4>
                  <p className="text-sm text-slate-700">O número fica igual! 1×7=7</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold text-purple-900 mb-2">Multiplicar por 2</h4>
                  <p className="text-sm text-slate-700">Duplique o número! 2×6=12</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-bold text-pink-900 mb-2">Multiplicar por 5</h4>
                  <p className="text-sm text-slate-700">O resultado termina em 0 ou 5!</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-900 mb-2">Multiplicar por 9</h4>
                  <p className="text-sm text-slate-700">Os dígitos somam 9! Truque dos dedos!</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-bold text-indigo-900 mb-2">Multiplicar por 10</h4>
                  <p className="text-sm text-slate-700">Adicione um 0! 10×8=80</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-6 sm:p-8 text-white text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              É Hora de Começar! 🚀
            </h2>
            <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Agora você está pronto! Lembre-se, cada grande herói da matemática começou com pequenos passos. 
              Você também consegue! 💪✨
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/pt/tabuada/1-10"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                <span className="mr-2">🎯</span>
                Começar Agora
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/pt/tabuada"
                className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-flex items-center justify-center"
              >
                Voltar ao Início
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-blue-400">
              <p className="text-blue-100 text-sm">
                💡 <strong>Dica:</strong> Estudar 10-15 minutos por dia é muito mais eficaz do que estudar 1 hora entediante!
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

