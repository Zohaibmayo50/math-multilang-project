export default function HowToLearn() {
  return (
    <section className="section-container bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-slate-900 mb-12 text-center">
          Comment Apprendre Efficacement la Table de Multiplication ?
        </h2>
        
        <div className="space-y-12">
          <article>
            <h3 className="text-slate-900 mb-4 flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                1
              </span>
              <span>Apprendre en Comprenant les Motifs</span>
            </h3>
            <div className="ml-11 space-y-4 text-slate-700">
              <p>
                La table de multiplication contient de nombreux motifs et régularités. 
                Découvrir ces motifs permet une compréhension logique plutôt qu'une simple mémorisation :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Multiples de 2 :</strong> Toujours un nombre pair (2, 4, 6, 8...)
                </li>
                <li>
                  <strong>Multiples de 5 :</strong> Se terminent toujours par 0 ou 5 (5, 10, 15, 20...)
                </li>
                <li>
                  <strong>Multiples de 9 :</strong> La somme des chiffres est toujours un multiple de 9 
                  (18: 1+8=9, 27: 2+7=9)
                </li>
                <li>
                  <strong>Multiples de 10 :</strong> Se terminent toujours par 0 (10, 20, 30...)
                </li>
                <li>
                  <strong>Propriété de commutativité :</strong> 3 × 4 = 4 × 3 (Le résultat reste le même même si l'ordre change)
                </li>
              </ul>
              <p>
                Comprendre ces motifs vous permet de saisir la logique de base plutôt que 
                de mémoriser près de 100 valeurs de multiplication.
              </p>
            </div>
          </article>
          
          <article>
            <h3 className="text-slate-900 mb-4 flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-educational-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                2
              </span>
              <span>Apprentissage Répété et Progressif</span>
            </h3>
            <div className="ml-11 space-y-4 text-slate-700">
              <p>
                Il n'est ni possible ni nécessaire d'apprendre la table de multiplication en une journée. 
                L'approche la plus efficace est la répétition progressive et régulière :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Commencez par de petites étapes :</strong> Commencez d'abord par des 
                  nombres faciles comme 1, 2, 5 et 10
                </li>
                <li>
                  <strong>10-15 minutes chaque jour :</strong> Des sessions courtes et régulières 
                  sont plus efficaces que de longues sessions uniques
                </li>
                <li>
                  <strong>Consolidez les connaissances précédentes :</strong> Révisez ce que vous 
                  avez appris avant de passer à un nouveau nombre
                </li>
                <li>
                  <strong>Faites des révisions espacées :</strong> Révisez après une semaine, puis 
                  après un mois pour augmenter la rétention
                </li>
              </ul>
              <p>
                La répétition régulière permet à l'information de passer de la mémoire à court terme 
                à la mémoire à long terme et soutient un apprentissage durable.
              </p>
            </div>
          </article>
          
          <article>
            <h3 className="text-slate-900 mb-4 flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                3
              </span>
              <span>Apprendre par la Pratique</span>
            </h3>
            <div className="ml-11 space-y-4 text-slate-700">
              <p>
                Comprendre la théorie est important, mais l'apprentissage durable ne se 
                produit pas sans pratique. Les avantages de la pratique :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Rappel actif :</strong> Essayer de se rappeler activement l'information 
                  plutôt que de la lire passivement renforce le cerveau
                </li>
                <li>
                  <strong>Analyse des erreurs :</strong> Identifiez vos points faibles en examinant 
                  les opérations que vous faites incorrectement
                </li>
                <li>
                  <strong>Développement de la vitesse :</strong> Avec une pratique régulière, vous 
                  gagnez à la fois en précision et en vitesse
                </li>
                <li>
                  <strong>Application dans différents contextes :</strong> Utilisez-la dans différents 
                  environnements comme les questions, les jeux, les problèmes de la vie quotidienne
                </li>
              </ul>
              <p>
                Les connaissances apprises uniquement par la lecture ou l'écoute sans pratique 
                sont rapidement oubliées. L'application active est la clé fondamentale de l'apprentissage.
              </p>
            </div>
          </article>
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-primary-50 to-educational-50 border border-primary-200 rounded-lg p-8">
          <h4 className="text-xl font-semibold text-slate-900 mb-4">
            Rappel Important
          </h4>
          <p className="text-slate-700">
            Chaque enfant a un rythme d'apprentissage différent. Alors que l'un peut apprendre 
            en une semaine, un autre peut prendre plusieurs mois. L'important est la continuité, 
            la patience et de progresser avec les bonnes méthodes. Adoptez une approche 
            encourageante plutôt que de mettre la pression.
          </p>
        </div>
      </div>
    </section>
  )
}
