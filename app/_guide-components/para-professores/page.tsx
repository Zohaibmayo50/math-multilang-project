import Link from 'next/link'
import Header from '@/app/components/pt/Header'
import Footer from '@/app/components/pt/Footer'

export const metadata = {
  title: 'Para Professores: Guia de Tabuada | Material de Ensino em Sala de Aula',
  description: 'Recursos profissionais para ensinar tabuada em sala de aula, estratégias pedagógicas, sugestões de atividades e ferramentas de avaliação.',
  keywords: 'ensinar tabuada, atividades em sala de aula, métodos pedagógicos, ensino de matemática',
  alternates: {
    canonical: '/para-professores',
  },
}

export default function ParaProfessores() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Guia de Tabuada para Professores
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Estratégias eficazes e atividades em sala de aula para ensinar 
              tabuada. Recursos para que todos os alunos a dominem.
            </p>
          </div>
        </div>
      </section>

      {/* Teaching Strategies Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Estratégias de Ensino Eficazes
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Strategy 1 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">👁️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Visualização</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Use representações visuais para ajudar os alunos a compreender 
                a multiplicação como grupos repetidos.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Arranjos retangulares (ex: 3×4 como 3 linhas de 4 objetos)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Modelos de área usando papel quadriculado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Diagramas de saltos na reta numérica</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Manipulativos concretos (blocos, fichas, cubos)</span>
                </li>
              </ul>
            </div>

            {/* Strategy 2 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🧩</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Decomposição</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Ensine os alunos a decompor multiplicações difíceis 
                em operações mais simples.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>7×6 = (5×6) + (2×6) = 30 + 12 = 42</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>9×8 = (10×8) - (1×8) = 80 - 8 = 72</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Usar duplicação: 6×4 = 2×(3×4)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Propriedade distributiva em ação</span>
                </li>
              </ul>
            </div>

            {/* Strategy 3 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🔢</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Padrões</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Ajude os alunos a descobrir e usar padrões para facilitar 
                o aprendizado e a memorização.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Tabuada do 2: todos os números pares</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Tabuada do 5: terminam em 0 ou 5</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Tabuada do 9: soma de dígitos = 9, padrão descendente</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Propriedade comutativa: 3×7 = 7×3</span>
                </li>
              </ul>
            </div>

            {/* Strategy 4 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Aplicações Reais</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Conecte a multiplicação com situações cotidianas para dar 
                significado e contexto ao aprendizado.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Problemas de compras y dinero</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Organización de objetos en filas y columnas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Recetas de cocina y medidas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Deportes, juegos y actividades grupales</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Classroom Activities Section */}
      <section className="py-12 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Atividades para a Sala de Aula
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Activity 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🎯</span>
                Bingo de Multiplicação
              </h3>
              <p className="text-gray-700 mb-3">
                Os alunos criam cartões de bingo com produtos. 
                Chame multiplicações e os alunos marcam as respostas.
              </p>
              <div className="bg-blue-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Nível:</strong> Iniciante a Intermediário<br/>
                <strong>Tempo:</strong> 15-20 minutos
              </div>
            </div>

            {/* Activity 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🏃</span>
                Corridas de Multiplicação
              </h3>
              <p className="text-gray-700 mb-3">
                Equipes competem respondendo problemas de multiplicação 
                em um formato de revezamento no quadro.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Nível:</strong> Todos os níveis<br/>
                <strong>Tempo:</strong> 10-15 minutos
              </div>
            </div>

            {/* Activity 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🎲</span>
                Dominó de Multiplicação
              </h3>
              <p className="text-gray-700 mb-3">
                Fichas de dominó modificadas onde os alunos emparelham 
                multiplicações com seus produtos.
              </p>
              <div className="bg-purple-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Nível:</strong> Intermediário<br/>
                <strong>Tempo:</strong> 20-30 minutos
              </div>
            </div>

            {/* Activity 4 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🎨</span>
                Arte com Arranjos
              </h3>
              <p className="text-gray-700 mb-3">
                Os alunos criam desenhos artísticos usando arranjos 
                retangulares e rotulam as multiplicações correspondentes.
              </p>
              <div className="bg-pink-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Nível:</strong> Iniciante<br/>
                <strong>Tempo:</strong> 30-40 minutos
              </div>
            </div>

            {/* Activity 5 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🎪</span>
                Estações de Prática
              </h3>
              <p className="text-gray-700 mb-3">
                Configure estações rotativas com diferentes atividades: 
                cartões didáticos, jogos digitais, problemas escritos, manipulativos.
              </p>
              <div className="bg-orange-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Nível:</strong> Todos os níveis<br/>
                <strong>Tempo:</strong> 40-50 minutos
              </div>
            </div>

            {/* Activity 6 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">📖</span>
                Histórias de Multiplicação
              </h3>
              <p className="text-gray-700 mb-3">
                Os alunos escrevem e ilustram problemas de multiplicação 
                baseados em situações reais ou imaginárias.
              </p>
              <div className="bg-yellow-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Nível:</strong> Intermediário a Avançado<br/>
                <strong>Tempo:</strong> 30-45 minutos
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiated Instruction Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Instrução Diferenciada
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Beginning Learners */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-2">🌱</span>
                Alunos Iniciantes
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Começar com tabuadas do 1, 2, 5 e 10</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Usar muitos manipulativos concretos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Enfatizar soma repetida inicialmente</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Fornecer tabelas de referência</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Prática diária breve (5-10 minutos)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Celebrar pequenas conquistas</span>
                </li>
              </ul>
            </div>

            {/* Intermediate Learners */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-2">📚</span>
                Alunos Intermediários
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Introduzir tabuadas do 3, 4, 6 e 7</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Ensinar estratégias de decomposição</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Praticar propriedade comutativa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Jogos de velocidade moderada</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Problemas de aplicação em contexto</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Trabajo en parejas y grupos pequeños</span>
                </li>
              </ul>
            </div>

            {/* Advanced Learners */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-2">🚀</span>
                Alunos Avançados
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Tabuadas do 8, 9, 11 e 12</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Problemas de múltiplas etapas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Conexão com divisão e frações</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Desafios de lógica matemática</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Criar seus próprios problemas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Tutorear colegas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Strategies Section */}
      <section className="py-12 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Estratégias de Avaliação
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Formative Assessment */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">📊</span>
                Avaliação Formativa
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Observação Diária</h4>
                  <p className="text-gray-700">
                    Observe os alunos durante a prática, faça anotações sobre 
                    estratégias usadas e erros comuns.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Mini Testes Rápidos</h4>
                  <p className="text-gray-700">
                    1-2 minutos no início da aula: 10 problemas para avaliar 
                    fluência e retenção.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Lousas Individuais</h4>
                  <p className="text-gray-700">
                    Os alunos mostram respostas simultaneamente, permitindo 
                    verificação rápida de toda a turma.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Entrevistas Matemáticas</h4>
                  <p className="text-gray-700">
                    Conversas breves um-a-um para entender o raciocínio 
                    e estratégias do aluno.
                  </p>
                </div>
              </div>
            </div>

            {/* Summative Assessment */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">📝</span>
                Evaluación Sumativa
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Pruebas de Fluidez</h4>
                  <p className="text-gray-700">
                    Evaluaciones cronometradas para medir velocidad y precisión 
                    en rangos específicos de tablas.
                  </p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Proyectos Aplicados</h4>
                  <p className="text-gray-700">
                    Os alunos resolvem problemas do mundo real que requerem 
                    multiplicação em vários contextos.
                  </p>
                </div>
                <div className="border-l-4 border-pink-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Portafolios</h4>
                  <p className="text-gray-700">
                    Colección de trabajo a lo largo del tiempo mostrando progreso 
                    y dominio creciente.
                  </p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Autoevaluación</h4>
                  <p className="text-gray-700">
                    Os alunos acompanham seu próprio progresso, identificam tabuadas 
                    dominadas e estabelecem metas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Tracking */}
          <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-3xl mr-3">📈</span>
              Seguimiento del Progreso
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/20 rounded-lg p-4">
                <h4 className="font-bold mb-2">Gráficas de Dominio</h4>
                <p className="text-sm">
                  Os alunos colorem tabuadas dominadas em uma grade visual 
                  de 12×12 para ver seu progresso.
                </p>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <h4 className="font-bold mb-2">Registro de Tiempo</h4>
                <p className="text-sm">
                  Rastrear mejoras en velocidad con gráficas que muestran 
                  tiempos decrecientes.
                </p>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <h4 className="font-bold mb-2">Insignias de Logro</h4>
                <p className="text-sm">
                  Sistema de recompensas por dominar cada tabla, motivando 
                  el progreso continuo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Misconceptions Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Erros Conceituais Comuns
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <p className="text-gray-700 mb-6 text-lg">
              Reconheça e aborde estes mal-entendidos frequentes para assegurar 
              uma compreensão sólida da multiplicação:
            </p>

            <div className="space-y-6">
              {/* Misconception 1 */}
              <div className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-2">❌</span>
                  "A multiplicação sempre torna os números maiores"
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Por que é problemático:</strong> Os alunos ficam confusos 
                  ao multiplicar por frações ou decimais.
                </p>
                <p className="text-gray-700">
                  <strong className="text-green-700">Como corrigir:</strong> Mostrar 
                  exemplos como 5 × 0,5 = 2,5 ou 3 × 0 = 0. Explicar que multiplicar 
                  por números menores que 1 reduz o resultado.
                </p>
              </div>

              {/* Misconception 2 */}
              <div className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-2">❌</span>
                  "A ordem não importa nos problemas verbais"
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Por que é problemático:</strong> 3×4 = 4×3 na matemática. Mas 
                  o contexto pode variar: 3 grupos de 4 vs. 4 grupos de 3.
                </p>
                <p className="text-gray-700">
                  <strong className="text-green-700">Como corrigir:</strong> Discutir 
                  a propriedade comutativa mas enfatizar a importância de entender 
                  o contexto do problema.
                </p>
              </div>

              {/* Misconception 3 */}
              <div className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-2">❌</span>
                  "Multiplicar é apenas memorização"
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Por que é problemático:</strong> Os alunos podem 
                  memorizar sem entender, dificultando a aplicação e retenção.
                </p>
                <p className="text-gray-700">
                  <strong className="text-green-700">Como corrigir:</strong> Sempre 
                  ensinar conceitos antes da memorização. Usar modelos visuais 
                  e estratégias de compreensão.
                </p>
              </div>

              {/* Misconception 4 */}
              <div className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-2">❌</span>
                  "Os padrões sempre funcionam sem entendê-los"
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Por que é problemático:</strong> Os alunos aplicam 
                  padrões mecanicamente sem compreender o "porquê" matemático.
                </p>
                <p className="text-gray-700">
                  <strong className="text-green-700">Como corrigir:</strong> Ao ensinar 
                  padrões (ex: tabuada do 9), sempre explicar por que funcionam 
                  usando propriedades matemáticas.
                </p>
              </div>

              {/* Misconception 5 */}
              <div className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-2">❌</span>
                  "Só há uma maneira correta de resolver"
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Por que é problemático:</strong> Limita o pensamento 
                  criativo e a flexibilidade numérica.
                </p>
                <p className="text-gray-700">
                  <strong className="text-green-700">Como corrigir:</strong> Celebrar 
                  múltiplas estratégias. Pedir aos alunos que compartilhem diferentes 
                  métodos e discutir quando cada um é mais útil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips and Best Practices Section */}
      <section className="py-12 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Conselhos e Melhores Práticas
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">💡</span>
                Dicas para o Sucesso
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✦</span>
                  <span>Prática curta e diária é melhor que sessões longas esporádicas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✦</span>
                  <span>Celebre o progresso, não apenas a perfeição</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✦</span>
                  <span>Varie os métodos de prática para manter o interesse</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✦</span>
                  <span>Conecte com outras áreas: arte, música, educação física</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✦</span>
                  <span>Envolva as famílias com atividades para casa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✦</span>
                  <span>Use tecnologia como complemento, não substituição</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">🎯</span>
                Sequência Sugerida
              </h3>
              <div className="space-y-3">
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1</span>
                  <span className="text-gray-700">Tabuadas do 1, 2, 10, 5</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2</span>
                  <span className="text-gray-700">Propriedade comutativa (reduz a carga)</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">3</span>
                  <span className="text-gray-700">Tabuadas do 4 (duplicar o 2)</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">4</span>
                  <span className="text-gray-700">Tabuada do 9 (padrões especiais)</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">5</span>
                  <span className="text-gray-700">Tabuadas do 3 e 6 (relação tripla)</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">6</span>
                  <span className="text-gray-700">Tabuadas do 7, 8 (mais desafiadoras)</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">7</span>
                  <span className="text-gray-700">Tabuadas do 11, 12 (padrões avançados)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Recursos Adicionais
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Link 
              href="/pt/tabuada/1-10" 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-4xl mb-3">📘</div>
              <h3 className="font-bold text-gray-900 mb-2">Tabuadas 1-10</h3>
              <p className="text-sm text-gray-600">Recursos básicos</p>
            </Link>

            <Link 
              href="/pt/tabuada/11-20" 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-4xl mb-3">📗</div>
              <h3 className="font-bold text-gray-900 mb-2">Tabuadas 11-20</h3>
              <p className="text-sm text-gray-600">Nível intermediário</p>
            </Link>

            <Link 
              href="/pt/tabuada/para-estudantes" 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-4xl mb-3">👨‍🎓</div>
              <h3 className="font-bold text-gray-900 mb-2">Para Estudantes</h3>
              <p className="text-sm text-gray-600">Guia de aprendizagem</p>
            </Link>

            <Link 
              href="/pt/tabuada/para-pais" 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-4xl mb-3">👨‍👩‍👧</div>
              <h3 className="font-bold text-gray-900 mb-2">Para Pais</h3>
              <p className="text-sm text-gray-600">Apoio em casa</p>
            </Link>
          </div>

          <div className="mt-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl shadow-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Precisa de Mais Ajuda?
            </h3>
            <p className="text-lg mb-6">
              Explore nossas tabuadas individuais para recursos específicos, 
              exercícios para download e atividades interativas.
            </p>
            <Link 
              href="/pt/tabuada"
              className="inline-block bg-white text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
            >
              Ver Todas as Tabuadas
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

