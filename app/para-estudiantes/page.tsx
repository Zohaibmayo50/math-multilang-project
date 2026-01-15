import Link from 'next/link'
import Footer from '@/app/components/Footer'

export const metadata = {
  title: 'Guía de Tablas de Multiplicar para Estudiantes | Aprende Paso a Paso',
  description: 'Guía paso a paso para aprender tablas de multiplicar fácilmente. Materiales visuales, actividades prácticas y juegos divertidos para aprender a tu ritmo.',
  keywords: 'aprender tablas de multiplicar, matemáticas para estudiantes, guía de tablas, multiplicación paso a paso',
  alternates: {
    canonical: '/para-estudiantes',
  },
}

export default function ForStudents() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white pt-20 pb-12 md:pt-24 md:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
                ¡Aprender las Tablas de Multiplicar es Muy Fácil! 🎯
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 mb-6 md:mb-8">
                ¡Avanza a tu propio ritmo, aprende mientras te diviertes y conviértete en un héroe de las matemáticas! 
                Esta guía te ayudará a aprender las tablas de multiplicar paso a paso.
              </p>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-blue-100">¡Tú también puedes hacerlo!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Why Learn */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              ¿Por Qué Debo Aprender las Tablas de Multiplicar? 🤔
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">
                ¡Las tablas de multiplicar son el súper poder del mundo matemático! Esto es lo que te darán:
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
                    <p className="text-slate-700">¡Tu confianza en matemáticas aumentará y tendrás más éxito!</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-2xl">
                    🧠
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Poder Cerebral</h3>
                    <p className="text-slate-700">¡Tu memoria se fortalecerá y aprenderás a pensar más rápido!</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Learning Path */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Camino de Aprendizaje Paso a Paso 🚀
            </h2>
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border-l-4 border-green-500">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">Comienza con las Tablas Fáciles (1, 2, 5, 10)</h3>
                    <p className="text-slate-700 mb-3">
                      ¡Comenzar con las tablas más fáciles te dará confianza! Son muy simples y las aprenderás rápido.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-900 mb-2">¿Por qué estas tablas son fáciles?</p>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• <strong>Tabla del 1:</strong> ¡Cada número se queda igual! (1×5=5)</li>
                        <li>• <strong>Tabla del 2:</strong> ¡Suma el número dos veces! (2×4 = 4+4 = 8)</li>
                        <li>• <strong>Tabla del 5:</strong> ¡Siempre termina en 5 o 0!</li>
                        <li>• <strong>Tabla del 10:</strong> ¡Agrega un cero al final! (10×3 = 30)</li>
                      </ul>
                    </div>
                    <div className="mt-3">
                      <Link href="/1-10" className="text-green-600 hover:text-green-700 font-medium inline-flex items-center">
                        Ir a las Tablas 1-10 →
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
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">Avanza a Tablas de Nivel Medio (3, 4, 6)</h3>
                    <p className="text-slate-700 mb-3">
                      ¡Ahora estás listo para tablas un poco más desafiantes! No te preocupes, también hay trucos para estas.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-900 mb-2">Trucos:</p>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• <strong>Tabla del 3:</strong> Suma el número 3 veces (3×4 = 4+4+4 = 12)</li>
                        <li>• <strong>Tabla del 4:</strong> Multiplica por 2, luego duplica (4×5 = 2×5×2 = 20)</li>
                        <li>• <strong>Tabla del 6:</strong> Usa la tabla del 5 y agrega 1 más (6×4 = 5×4 + 4 = 24)</li>
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
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Desafíate con las Tablas Difíciles (7, 8, 9)</h3>
                    <p className="text-slate-700 mb-3">
                      Estas tablas son un poco más difíciles, ¡pero has aprendido mucho hasta ahora! Con técnicas especiales también dominarás estas.
                    </p>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-semibold text-yellow-900 mb-2">Técnicas Especiales:</p>
                      <ul className="space-y-2 text-slate-700 text-sm">
                        <li>• <strong>Tabla del 9 - Truco de los Dedos:</strong> Abre tus manos, baja el dedo del número que vas a multiplicar. Dedos abiertos a la izquierda = decenas, dedos a la derecha = unidades!</li>
                        <li>• <strong>Tabla del 8:</strong> Multiplica por 10, luego resta 2 veces (8×7 = 10×7 - 2×7 = 70-14 = 56)</li>
                        <li>• <strong>Tabla del 7:</strong> Para las difíciles usa la tabla del 5 (7×6 = 5×6 + 2×6 = 30+12 = 42)</li>
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
              Consejos para Practicar 🎯
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  🎮
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Juega</h3>
                <p className="text-slate-700 mb-3">
                  Practica con los juegos divertidos de este sitio. ¡Aprender mientras juegas es mucho más divertido!
                </p>
                <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center text-sm">
                  Descubre los Juegos →
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  📝
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Hazte Pruebas</h3>
                <p className="text-slate-700 mb-3">
                  Usa tarjetas o pide a alguien que te haga preguntas. ¡Hacerte pruebas acelera tu aprendizaje!
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  🎵
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Canciones y Ritmos</h3>
                <p className="text-slate-700 mb-3">
                  ¡Convierte las tablas de multiplicar en canciones! Es más fácil memorizar con música.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  🏆
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Prémiate</h3>
                <p className="text-slate-700 mb-3">
                  ¡Cuando aprendas una tabla, prémiate! Colecciona calcomanías o haz algo pequeño.
                </p>
              </div>
            </div>
          </section>

          {/* Progress Tracking */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Rastrea tu Progreso 📊
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">
                ¡Ver cuánto has progresado te motiva! Aquí hay métodos de seguimiento:
              </p>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">✅ Lista de Verificación de Tablas</h3>
                  <p className="text-slate-700 text-sm">
                    Escribe en un papel las tablas del 1 al 10. ¡Cada vez que aprendas una, ponle una gran palomita! 
                    ¡Cuando todas las palomitas estén completas, serás un héroe de las tablas de multiplicar! 🌟
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">📈 Gráfica de Progreso</h3>
                  <p className="text-slate-700 text-sm">
                    Registra cuántas preguntas respondiste correctamente cada semana. Dibuja una gráfica y ve tu progreso. 
                    ¡Cada semana vas mejorando!
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">⭐ Sistema de Estrellas</h3>
                  <p className="text-slate-700 text-sm">
                    Por cada respuesta correcta, dibuja una estrella. ¡Cuando llegues a 100 estrellas, date un premio especial!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Motivation */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Secretos de Motivación y Éxito 💫
            </h2>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🌟</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Sé Paciente</h3>
                      <p className="text-slate-700 text-sm">Todo toma tiempo. ¡Tú puedes hacerlo, solo practica!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💪</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Los Errores son Normales</h3>
                      <p className="text-slate-700 text-sm">No te sientas mal cuando te equivoques, ¡es parte del aprendizaje!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Establece Metas Pequeñas</h3>
                      <p className="text-slate-700 text-sm">Una tabla al día es suficiente, ¡no te apresures!</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🤝</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Pide Ayuda</h3>
                      <p className="text-slate-700 text-sm">Si hay algo que no entiendes, ¡pregunta a tu familia o maestro!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎉</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Celebra tus Logros</h3>
                      <p className="text-slate-700 text-sm">Cada pequeño logro es importante, ¡valórate a ti mismo!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">😊</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">¡Diviértete!</h3>
                      <p className="text-slate-700 text-sm">Aprender debe ser divertido, ¡prueba los juegos!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Reference */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Guía Rápida de Trucos 🔑
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-900 mb-2">Multiplicar por 0</h4>
                  <p className="text-sm text-slate-700">¡Todo es cero! 0×1000=0</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-green-900 mb-2">Multiplicar por 1</h4>
                  <p className="text-sm text-slate-700">¡El número se queda igual! 1×7=7</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold text-purple-900 mb-2">Multiplicar por 2</h4>
                  <p className="text-sm text-slate-700">¡Duplica el número! 2×6=12</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-bold text-pink-900 mb-2">Multiplicar por 5</h4>
                  <p className="text-sm text-slate-700">¡El resultado termina en 0 o 5!</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-900 mb-2">Multiplicar por 9</h4>
                  <p className="text-sm text-slate-700">¡Los dígitos suman 9! ¡Truco de dedos!</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-bold text-indigo-900 mb-2">Multiplicar por 10</h4>
                  <p className="text-sm text-slate-700">¡Agrega un 0! 10×8=80</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-6 sm:p-8 text-white text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              ¡Es Hora de Empezar! 🚀
            </h2>
            <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              ¡Ahora estás listo! Recuerda, cada gran héroe de las matemáticas comenzó con pequeños pasos. 
              ¡Tú también puedes hacerlo! 💪✨
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/1-10"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                <span className="mr-2">🎯</span>
                Empezar Ahora
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/"
                className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-flex items-center justify-center"
              >
                Volver a Inicio
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-blue-400">
              <p className="text-blue-100 text-sm">
                💡 <strong>Consejo:</strong> ¡Estudiar 10-15 minutos al día es mucho más efectivo que estudiar 1 hora aburrido!
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

