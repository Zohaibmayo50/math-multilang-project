export default function HowToLearn() {
  return (
    <section className="section-container bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-slate-900 mb-12 text-center">
          Comment Apprendre les Tables de Multiplication de Façon Efficace ?
        </h2>
        
        <div className="space-y-12">
          <article>
            <h3 className="text-slate-900 mb-4 flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                1
              </span>
              <span>Apprendre en Comprenant les ModÃ¨les</span>
            </h3>
            <div className="ml-11 space-y-4 text-slate-700">
              <p>
                Dans les tables de multiplication, il existe de nombreux modèles et ordres. Découvrir 
                ces modèles fournit une compréhension logique au lieu d'une simple mémorisation :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Multiples de 2 :</strong> Sont toujours des nombres pairs (2, 4, 6, 8...)
                </li>
                <li>
                  <strong>Múltiplos de 5:</strong> Se terminent toujours par 0 ou 5 (5, 10, 15, 20...)
                </li>
                <li>
                  <strong>Multiples de 9 :</strong> La somme de leurs chiffres est toujours un multiple de 9 
                  (18: 1+8=9, 27: 2+7=9)
                </li>
                <li>
                  <strong>Multiples de 10 :</strong> Se terminent toujours par 0 (10, 20, 30...)
                </li>
                <li>
                  <strong>Propriété commutative :</strong> 3 × 4 = 4 × 3 (L'ordre n'affecte pas le résultat)
                </li>
              </ul>
              <p>
                Comprendre ces modèles vous permet de saisir la logique fondamentale au lieu 
                de mémoriser près de 100 valeurs de multiplication.
              </p>
            </div>
          </article>
          
          <article>
            <h3 className="text-slate-900 mb-4 flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-educational-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                2
              </span>
              <span>Apprentissage Répétitif et Graduel</span>
            </h3>
            <div className="ml-11 space-y-4 text-slate-700">
              <p>
                Il n'est ni possible ni nécessaire d'apprendre les tables de multiplication en un jour. 
                L'approche la plus efficace est la répétition graduelle et régulière :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Commencez par de petites étapes :</strong> Commencez d'abord par des nombres 
                  faciles comme 1, 2, 5 et 10
                </li>
                <li>
                  <strong>10-15 minutes par jour :</strong> El estudio corto y regular es más 
                  efectivo que sesiones largas únicas
                </li>
                <li>
                  <strong>Renforcez les connaissances antérieures :</strong> Révisez ce qui a été appris avant 
                  de passer à un nouveau nombre
                </li>
                <li>
                  <strong>Practica con intervalos:</strong> Aumenta la retención repasando 
                  después de una semana, un mes
                </li>
              </ul>
              <p>
                La repetición regular facilita el paso de la información de la memoria a 
                corto plazo a la memoria a largo plazo y apoya el apprentissage permanente.
              </p>
            </div>
          </article>
          
          <article>
            <h3 className="text-slate-900 mb-4 flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                3
              </span>
              <span>Apprendre en Pratiquant</span>
            </h3>
            <div className="ml-11 space-y-4 text-slate-700">
              <p>
                Comprender la teoría es importante, pero sin práctica no ocurre un 
                apprentissage permanente. Beneficios de practicar:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Recuperación activa:</strong> Intentar recordar activamente en lugar 
                  de leer pasivamente fortalece el cerebro
                </li>
                <li>
                  <strong>Análisis de errores:</strong> Identifica tus puntos débiles examinando 
                  las operaciones que hiciste incorrectamente
                </li>
                <li>
                  <strong>Desarrollo de velocidad:</strong> Con práctica regular ganas tanto 
                  precisión como velocidad
                </li>
                <li>
                  <strong>Aplicación en diferentes contextos:</strong> Úsalas en diferentes 
                  entornos como preguntas, juegos, problemas de la vida diaria
                </li>
              </ul>
              <p>
                Les informations apprises uniquement par la lecture ou l'écoute sans pratique sont oubliées 
                rapidement. L'application active est la clé fondamentale de l'apprentissage.
              </p>
            </div>
          </article>
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-primary-50 to-educational-50 border border-primary-200 rounded-lg p-8">
          <h4 className="text-xl font-semibold text-slate-900 mb-4">
            Recordatorio Importante
          </h4>
          <p className="text-slate-700">
            Cada niño tiene una velocidad de apprentissage diferente. Tandis que certains apprennent 
            en una semana, otros pueden tardar varios meses. Lo importante es la continuidad, 
            la paciencia y avanzar con los métodos correctos. Adopta un enfoque de apoyo en 
            lugar de presionar.
          </p>
        </div>
      </div>
    </section>
  )
}
