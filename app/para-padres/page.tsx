import Link from 'next/link'
import Footer from '@/app/components/Footer'

export const metadata = {
  title: 'Guía de Tablas de Multiplicar para Padres | Apoya el Aprendizaje en Casa',
  description: 'Cómo ayudar a tu hijo a aprender tablas de multiplicar en casa. Consejos prácticos, juegos educativos y estrategias de motivación.',
  keywords: 'ayudar a niños con tablas de multiplicar, matemáticas en casa, educación para padres, actividades educativas',
  alternates: {
    canonical: '/para-padres',
  },
}

export default function ForParents() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white pt-20 pb-12 md:pt-24 md:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
                Guía de Tablas de Multiplicar para Padres
              </h1>
              <p className="text-lg sm:text-xl text-purple-100 mb-6 md:mb-8">
                ¿Cómo apoyar a tu hijo en el aprendizaje de las tablas de multiplicar? 
                Esta guía contiene estrategias efectivas y consejos prácticos.
              </p>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                <span className="text-purple-100">Tu guía para el éxito de tu hijo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Why It Matters */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              ¿Por Qué es Importante?
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4">
                Las tablas de multiplicar son uno de los pasos más importantes en el viaje matemático de tu hijo. 
                No solo para matemáticas, sino que también tienen una importancia crítica para el desarrollo de la resolución de problemas, el pensamiento lógico y la confianza en sí mismo.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">Base para Matemáticas Avanzadas</h3>
                  <p className="text-slate-700 text-sm">División, fracciones, álgebra - todos dependen de las tablas de multiplicar.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Confianza Académica</h3>
                  <p className="text-slate-700 text-sm">El éxito en las tablas de multiplicar aumenta la confianza general en la escuela.</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Habilidades para la Vida</h3>
                  <p className="text-slate-700 text-sm">Cálculos rápidos son útiles al hacer compras, cocinar y en la vida diaria.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Support Strategies */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Estrategias de Apoyo en Casa
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                    🎯
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Hazlo Concreto</h3>
                    <p className="text-slate-700 mb-3">
                      Enseña las tablas de multiplicar con situaciones de la vida real en lugar de números abstractos.
                    </p>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>"Si tienes 3 cajas y 4 manzanas en cada caja, ¿cuántas manzanas en total?"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>"Una caja de huevos tiene 6 huevos. ¿Cuántos huevos en 4 cajas?"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Usa objetos físicos (botones, dulces, juguetes) para visualizar</span>
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
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Práctica Corta pero Regular</h3>
                    <p className="text-slate-700 mb-3">
                      Es más efectivo practicar 10-15 minutos cada día que 1 hora una vez a la semana.
                    </p>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      <li>• Durante el desayuno - 5 preguntas rápidas</li>
                      <li>• En el camino a la escuela - contar de 2 en 2, de 5 en 5</li>
                      <li>• Antes de dormir - repaso de 5 minutos</li>
                      <li>• Los fines de semana - juegos de multiplicación</li>
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
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Aprendizaje Basado en Juegos</h3>
                    <p className="text-slate-700 mb-3">
                      Convertir el aprendizaje en juego aumenta tanto la motivación como el recuerdo.
                    </p>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      <li>• Usa los juegos de este sitio web</li>
                      <li>• Juega juegos de cartas de multiplicación</li>
                      <li>• Organiza competencias familiares</li>
                      <li>• Ofrece pequeñas recompensas por los logros</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Fun Activities */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Actividades Divertidas en Casa
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">🃏 Juegos de Cartas</h3>
                <div className="space-y-3 text-slate-700 text-sm">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">Guerra de Multiplicación</h4>
                    <p className="text-slate-600">Saca dos cartas y multiplícalas. ¡La respuesta correcta gana puntos!</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">Memoria de Multiplicación</h4>
                    <p className="text-slate-600">Combina las cartas de preguntas con las respuestas - ¡como el juego de memoria!</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">🍳 Matemáticas en la Cocina</h3>
                <div className="space-y-3 text-slate-700 text-sm">
                  <p>Usa las tablas de multiplicar al cocinar:</p>
                  <ul className="space-y-2">
                    <li>• "Si necesitamos 2 huevos por panqueque y haremos 4 panqueques, ¿cuántos huevos necesitamos?"</li>
                    <li>• "Si la receta es para 3 personas y somos 6, ¿cuánto necesitamos?"</li>
                    <li>• Contar cucharadas, medir ingredientes</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">🛒 Práctica de Multiplicación en el Supermercado</h3>
                <div className="space-y-3 text-slate-700 text-sm">
                  <ul className="space-y-2">
                    <li>• "3 yogures cuestan $2 cada uno, ¿cuánto en total?"</li>
                    <li>• "Una bolsa de manzanas contiene 6 manzanas. Si compramos 4 bolsas, ¿cuántas manzanas?"</li>
                    <li>• Comparar precios, calcular ahorros</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">🎨 Actividades Creativas</h3>
                <div className="space-y-3 text-slate-700 text-sm">
                  <ul className="space-y-2">
                    <li>• Crear carteles de tablas de multiplicar</li>
                    <li>• Escribir canciones o rimas de multiplicación</li>
                    <li>• Tirar dados y multiplicar los resultados</li>
                    <li>• Crear historias con problemas de multiplicación</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Common Challenges */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Desafíos Comunes y Soluciones
            </h2>
            <div className="space-y-4">
              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
                <summary className="font-semibold text-slate-900 text-lg flex items-center gap-3">
                  <span className="text-purple-500">❓</span>
                  Mi hijo tiene miedo/evita las tablas de multiplicar
                </summary>
                <div className="mt-4 text-slate-700 space-y-2 text-sm">
                  <p><strong>Solución:</strong> Empieza con tablas fáciles (1, 2, 5, 10) para construir confianza. Enfócate en el progreso, no en la perfección. Celebra cada pequeño logro.</p>
                  <p>Evita presionar o crear ansiedad. Aprende debe ser divertido, no estresante.</p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
                <summary className="font-semibold text-slate-900 text-lg flex items-center gap-3">
                  <span className="text-blue-500">❓</span>
                  Memoriza pero no entiende el concepto
                </summary>
                <div className="mt-4 text-slate-700 space-y-2 text-sm">
                  <p><strong>Solución:</strong> Usa objetos concretos y modelos visuales. Muestra que 3×4 significa "3 grupos de 4" o "4+4+4".</p>
                  <p>Usa arreglos de objetos, dibujos, manipulativos. La comprensión conceptual es más importante que la memorización mecánica.</p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
                <summary className="font-semibold text-slate-900 text-lg flex items-center gap-3">
                  <span className="text-green-500">❓</span>
                  Confunde las tablas entre sí
                </summary>
                <div className="mt-4 text-slate-700 space-y-2 text-sm">
                  <p><strong>Solución:</strong> Enfócate en una tabla a la vez. Practica bien una tabla antes de pasar a la siguiente.</p>
                  <p>Usa códigos de colores o asociaciones visuales para diferentes tablas. Practica la diferenciación: "¿Es 3×4 o 4×3?"</p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
                <summary className="font-semibold text-slate-900 text-lg flex items-center gap-3">
                  <span className="text-yellow-500">❓</span>
                  Olvida lo que aprendió antes
                </summary>
                <div className="mt-4 text-slate-700 space-y-2 text-sm">
                  <p><strong>Solución:</strong> Repaso regular es clave. Practica las tablas aprendidas anteriormente junto con las nuevas.</p>
                  <p>Crea un programa de repaso: cada semana incluye tablas antiguas. Usa juegos para hacer que el repaso sea divertido.</p>
                </div>
              </details>
            </div>
          </section>

          {/* Motivation Tips */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Cómo Mantener la Motivación
            </h2>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg shadow-md p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-4">✅ Hacer</h3>
                  <ul className="space-y-3 text-slate-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Elogiar el esfuerzo, no solo la respuesta correcta</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Celebrar el progreso con pequeñas recompensas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Hacer que el aprendizaje sea un juego</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Establecer metas alcanzables</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Crear un ambiente de apoyo y sin presión</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-pink-900 mb-4">❌ Evitar</h3>
                  <ul className="space-y-3 text-slate-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Comparar con hermanos u otros niños</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Crear presión o ansiedad sobre los errores</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Sesiones de práctica largas y aburridas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Usar lenguaje negativo ("Esto es fácil, ¿por qué no puedes?")</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Esperar perfección inmediata</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-lg p-6 sm:p-8 text-white text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Comienza el Viaje de las Tablas de Multiplicar con Tu Hijo Hoy
            </h2>
            <p className="text-base sm:text-lg text-purple-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Recuerda, cada niño aprende a su propio ritmo. Con tu apoyo y las estrategias correctas, 
              tu hijo dominará las tablas de multiplicar. ¡Paciencia, práctica y positividad!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/1-10"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center justify-center"
              >
                <span className="mr-2">🎯</span>
                Explorar Tablas de Multiplicar
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/para-estudiantes"
                className="bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors inline-flex items-center justify-center"
              >
                Ver Guía para Estudiantes
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-purple-400">
              <p className="text-purple-100 text-sm">
                💡 <strong>Consejo de Oro:</strong> Tu actitud positiva hacia las matemáticas influye en la actitud de tu hijo. 
                ¡Muestra entusiasmo y tu hijo también se entusiasmará!
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

