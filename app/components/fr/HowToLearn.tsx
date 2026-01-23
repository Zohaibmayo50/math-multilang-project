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
              <span>Apprendre en Comprenant les Modèles</span>
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
                  <strong>Multiples de 5 :</strong> Se terminent toujours par 0 ou 5 (5, 10, 15, 20...)
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
                  <strong>10-15 minutes par jour :</strong> L'étude courte et régulière est plus 
                  efectivo que sesiones largas únicas
                </li>
                <li>
                  <strong>Renforcez les connaissances antérieures :</strong> Révisez ce qui a été appris avant 
                  de passer à un nouveau nombre
                </li>
                <li>
                  <strong>Pratiquer à intervalles :</strong> Augmente la rétention en révisant 
                  après une semaine, un mois
                </li>
              </ul>
              <p>
                La répétition régulière facilite le passage de l'information de la mémoire à 
                court terme à la mémoire à long terme et soutient l'apprentissage permanent.
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
                Comprendre la théorie est important, mais sans pratique il n'y a pas de 
                apprentissage permanente. Beneficios de practicar:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Recuperación activa:</strong> Intentar recordar activamente en lugar 
                  que de lire passivement renforce le cerveau
                </li>
                <li>
                  <strong>Análisis de errores:</strong> Identifica tus puntos débiles examinando 
                  les opérations que vous avez faites incorrectement
                </li>
                <li>
                  <strong>Développement de la vitesse :</strong> Avec une pratique régulière, tu gagnes à la fois 
                  précision et vitesse
                </li>
                <li>
                  <strong>Application dans différents contextes :</strong> Utilisez-les dans différents 
                  contextes comme des questions, jeux, problèmes de la vie quotidienne
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
            Cada niño a une vitesse d'apprentissage différente. Tandis que certains apprennent 
            en une semaine, d'autres peuvent prendre plusieurs mois. L'important est la continuité, 
            la patience et avancer avec les bonnes méthodes. Adoptez une approche de soutien dans 
            lugar de presionar.
          </p>
        </div>
      </div>
    </section>
  )
}
