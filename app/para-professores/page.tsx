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
};

export default function ParaProfessoresPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Guia de Tabuada Para Professores
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Estratégias eficazes, atividades em sala de aula e recursos para ensinar 
              tabuada de forma que todos os alunos possam dominá-la.
            </p>
          </div>
        </div>
      </section>

      {/* Teaching Strategies Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Estrategias de Enseñanza Efectivas
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Strategy 1 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">👁️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Visualización</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Use representaciones visuales para ayudar a los estudiantes a comprender 
                la multiplicación como grupos repetidos.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Arreglos rectangulares (ej: 3×4 como 3 filas de 4 objetos)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Modelos de área usando papel cuadriculado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Diagramas de saltos en la recta numérica</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Manipulativos concretos (bloques, fichas, cubos)</span>
                </li>
              </ul>
            </div>

            {/* Strategy 2 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🧩</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Descomposición</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Enseñe a los estudiantes a descomponer multiplicaciones difíciles 
                en operaciones más simples.
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
                  <span>Usar duplicación: 6×4 = 2×(3×4)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Propiedad distributiva en acción</span>
                </li>
              </ul>
            </div>

            {/* Strategy 3 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🔢</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Patrones</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Ayude a los estudiantes a descubrir y usar patrones para facilitar 
                el aprendizaje y la memorización.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Tabla del 2: todos los números pares</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Tabla del 5: terminan en 0 o 5</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Tabla del 9: suma de dígitos = 9, patrón descendente</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Propiedad conmutativa: 3×7 = 7×3</span>
                </li>
              </ul>
            </div>

            {/* Strategy 4 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Aplicaciones Reales</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Conecte la multiplicación con situaciones cotidianas para dar 
                significado y contexto al aprendizaje.
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
            Actividades para el Aula
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Activity 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🎯</span>
                Bingo de Multiplicación
              </h3>
              <p className="text-gray-700 mb-3">
                Los estudiantes crean tarjetas de bingo con productos. 
                Llame multiplicaciones y los estudiantes marcan las respuestas.
              </p>
              <div className="bg-blue-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Nivel:</strong> Principiante a Intermedio<br/>
                <strong>Tiempo:</strong> 15-20 minutos
              </div>
            </div>

            {/* Activity 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🏃</span>
                Carreras de Multiplicación
              </h3>
              <p className="text-gray-700 mb-3">
                Equipos compiten respondiendo problemas de multiplicación 
                en un formato de relevos en el pizarrón.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Nivel:</strong> Todos los niveles<br/>
                <strong>Tiempo:</strong> 10-15 minutos
              </div>
            </div>

            {/* Activity 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🎲</span>
                Dominó de Multiplicación
              </h3>
              <p className="text-gray-700 mb-3">
                Fichas de dominó modificadas donde los estudiantes emparejan 
                multiplicaciones con sus productos.
              </p>
              <div className="bg-purple-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Nivel:</strong> Intermedio<br/>
                <strong>Tiempo:</strong> 20-30 minutos
              </div>
            </div>

            {/* Activity 4 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🎨</span>
                Arte con Arreglos
              </h3>
              <p className="text-gray-700 mb-3">
                Los estudiantes crean diseños artísticos usando arreglos 
                rectangulares y etiquetan las multiplicaciones correspondientes.
              </p>
              <div className="bg-pink-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Nivel:</strong> Principiante<br/>
                <strong>Tiempo:</strong> 30-40 minutos
              </div>
            </div>

            {/* Activity 5 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🎪</span>
                Estaciones de Práctica
              </h3>
              <p className="text-gray-700 mb-3">
                Configure estaciones rotativas con diferentes actividades: 
                tarjetas didácticas, juegos digitales, problemas escritos, manipulativos.
              </p>
              <div className="bg-orange-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Nivel:</strong> Todos los niveles<br/>
                <strong>Tiempo:</strong> 40-50 minutos
              </div>
            </div>

            {/* Activity 6 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">📖</span>
                Historias de Multiplicación
              </h3>
              <p className="text-gray-700 mb-3">
                Los estudiantes escriben e ilustran problemas de multiplicación 
                basados en situaciones reales o imaginarias.
              </p>
              <div className="bg-yellow-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Nivel:</strong> Intermedio a Avanzado<br/>
                <strong>Tiempo:</strong> 30-45 minutos
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiated Instruction Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Instrucción Diferenciada
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Beginning Learners */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-2">🌱</span>
                Estudiantes Principiantes
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Comenzar con tablas del 1, 2, 5 y 10</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Usar muchos manipulativos concretos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Enfatizar suma repetida inicialmente</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Proporcionar tablas de referencia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Práctica diaria breve (5-10 minutos)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Celebrar pequeños logros</span>
                </li>
              </ul>
            </div>

            {/* Intermediate Learners */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-2">📚</span>
                Estudiantes Intermedios
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Introducir tablas del 3, 4, 6 y 7</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Enseñar estrategias de descomposición</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Practicar propiedad conmutativa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Juegos de velocidad moderada</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Problemas de aplicación en contexto</span>
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
                Estudiantes Avanzados
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Tablas del 8, 9, 11 y 12</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Problemas de múltiples pasos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Conexión con división y fracciones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Desafíos de lógica matemática</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Crear sus propios problemas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Tutorear a compañeros</span>
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
            Estrategias de Evaluación
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Formative Assessment */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">📊</span>
                Evaluación Formativa
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Observación Diaria</h4>
                  <p className="text-gray-700">
                    Observe a los estudiantes durante la práctica, tome notas sobre 
                    estrategias usadas y errores comunes.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Mini Pruebas Rápidas</h4>
                  <p className="text-gray-700">
                    1-2 minutos al inicio de la clase: 10 problemas para evaluar 
                    fluidez y retención.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Pizarras Individuales</h4>
                  <p className="text-gray-700">
                    Los estudiantes muestran respuestas simultáneamente, permitiendo 
                    verificación rápida de toda la clase.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Entrevistas Matemáticas</h4>
                  <p className="text-gray-700">
                    Conversaciones breves uno-a-uno para entender el razonamiento 
                    y estrategias del estudiante.
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
                    Los estudiantes resuelven problemas del mundo real que requieren 
                    multiplicación en varios contextos.
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
                    Los estudiantes rastrean su propio progreso, identifican tablas 
                    dominadas y establecen metas.
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
                  Los estudiantes colorean tablas dominadas en una cuadrícula visual 
                  de 12×12 para ver su progreso.
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
            Errores Conceptuales Comunes
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <p className="text-gray-700 mb-6 text-lg">
              Reconozca y aborde estos malentendidos frecuentes para asegurar 
              una comprensión sólida de la multiplicación:
            </p>

            <div className="space-y-6">
              {/* Misconception 1 */}
              <div className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-2">❌</span>
                  "La multiplicación siempre hace los números más grandes"
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Por qué es problemático:</strong> Los estudiantes se confunden 
                  al multiplicar por fracciones o decimales.
                </p>
                <p className="text-gray-700">
                  <strong className="text-green-700">Cómo corregirlo:</strong> Mostrar 
                  ejemplos como 5 × 0.5 = 2.5 o 3 × 0 = 0. Explicar que multiplicar 
                  por números menores que 1 reduce el resultado.
                </p>
              </div>

              {/* Misconception 2 */}
              <div className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-2">❌</span>
                  "El orden no importa en los problemas verbales"
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Por qué es problemático:</strong> Aunque 3×4 = 4×3, el significado 
                  contextual puede ser diferente (3 grupos de 4 vs. 4 grupos de 3).
                </p>
                <p className="text-gray-700">
                  <strong className="text-green-700">Cómo corregirlo:</strong> Discutir 
                  la propiedad conmutativa pero enfatizar la importancia de entender 
                  el contexto del problema.
                </p>
              </div>

              {/* Misconception 3 */}
              <div className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-2">❌</span>
                  "Multiplicar es solo memorización"
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Por qué es problemático:</strong> Los estudiantes pueden 
                  memorizar sin entender, dificultando la aplicación y retención.
                </p>
                <p className="text-gray-700">
                  <strong className="text-green-700">Cómo corregirlo:</strong> Siempre 
                  enseñar conceptos antes de la memorización. Usar modelos visuales 
                  y estrategias de comprensión.
                </p>
              </div>

              {/* Misconception 4 */}
              <div className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-2">❌</span>
                  "Los patrones siempre funcionan sin entenderlos"
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Por qué es problemático:</strong> Los estudiantes aplican 
                  patrones mecánicamente sin comprender el "por qué" matemático.
                </p>
                <p className="text-gray-700">
                  <strong className="text-green-700">Cómo corregirlo:</strong> Al enseñar 
                  patrones (ej: tabla del 9), siempre explicar por qué funcionan 
                  usando propiedades matemáticas.
                </p>
              </div>

              {/* Misconception 5 */}
              <div className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-2">❌</span>
                  "Solo hay una manera correcta de resolver"
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Por qué es problemático:</strong> Limita el pensamiento 
                  creativo y la flexibilidad numérica.
                </p>
                <p className="text-gray-700">
                  <strong className="text-green-700">Cómo corregirlo:</strong> Celebrar 
                  múltiples estrategias. Pedir a los estudiantes que compartan diferentes 
                  métodos y discutir cuándo cada uno es más útil.
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
            Consejos y Mejores Prácticas
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">💡</span>
                Consejos para el Éxito
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✦</span>
                  <span>Práctica corta y diaria es mejor que sesiones largas esporádicas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✦</span>
                  <span>Celebre el progreso, no solo la perfección</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✦</span>
                  <span>Varíe los métodos de práctica para mantener el interés</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✦</span>
                  <span>Conecte con otras áreas: arte, música, educación física</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✦</span>
                  <span>Involucre a las familias con actividades para el hogar</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✦</span>
                  <span>Use tecnología como complemento, no reemplazo</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">🎯</span>
                Secuencia Sugerida
              </h3>
              <div className="space-y-3">
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1</span>
                  <span className="text-gray-700">Tablas del 1, 2, 10, 5</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2</span>
                  <span className="text-gray-700">Propiedad conmutativa (reduce la carga)</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">3</span>
                  <span className="text-gray-700">Tablas del 4 (duplicar el 2)</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">4</span>
                  <span className="text-gray-700">Tabla del 9 (patrones especiales)</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">5</span>
                  <span className="text-gray-700">Tablas del 3 y 6 (relación triple)</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">6</span>
                  <span className="text-gray-700">Tablas del 7, 8 (más desafiantes)</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">7</span>
                  <span className="text-gray-700">Tablas del 11, 12 (patrones avanzados)</span>
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
            Recursos Adicionales
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Link 
              href="/pt/tabuada/1-10" 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-4xl mb-3">📘</div>
              <h3 className="font-bold text-gray-900 mb-2">Tablas 1-10</h3>
              <p className="text-sm text-gray-600">Recursos básicos</p>
            </Link>

            <Link 
              href="/pt/tabuada/11-20" 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-4xl mb-3">📗</div>
              <h3 className="font-bold text-gray-900 mb-2">Tablas 11-20</h3>
              <p className="text-sm text-gray-600">Nivel intermedio</p>
            </Link>

            <Link 
              href="/para-estudantes" 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-4xl mb-3">👨‍🎓</div>
              <h3 className="font-bold text-gray-900 mb-2">Para Estudantes</h3>
              <p className="text-sm text-gray-600">Guía de aprendizaje</p>
            </Link>

            <Link 
              href="/para-pais" 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-4xl mb-3">👨‍👩‍👧</div>
              <h3 className="font-bold text-gray-900 mb-2">Para Pais</h3>
              <p className="text-sm text-gray-600">Apoyo en casa</p>
            </Link>
          </div>

          <div className="mt-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl shadow-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              ¿Necesita Más Ayuda?
            </h3>
            <p className="text-lg mb-6">
              Explore nuestras tablas individuales para recursos específicos, 
              ejercicios descargables y actividades interactivas.
            </p>
            <Link 
              href="/pt/tabuada"
              className="inline-block bg-white text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
            >
              Ver Todas a tabuada
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

