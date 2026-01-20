import Link from 'next/link'
import Footer from '@/app/components/Footer'

export const metadata = {
  title: 'Guide des Tables de Multiplication pour Élèves | Apprendre Étape par Étape',
  description: 'Guide étape par étape pour apprendre les tables de multiplication facilement. Matériaux visuels, activités pratiques et jeux amusants pour apprendre à votre rythme.',
  keywords: 'apprendre les tables de multiplication, mathématiques pour élèves, guide des tables, multiplication étape par étape',
  alternates: {
    canonical: '/pour-les-parents',
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
                Apprendre les Tables de Multiplication, C'est Facile ! 🎯
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 mb-6 md:mb-8">
                Progressez à votre propre rythme, apprenez en vous amusant et devenez un héros des mathématiques ! 
                Ce guide vous aidera à apprendre les tables de multiplication étape par étape.
              </p>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-blue-100">Vous pouvez le faire aussi !</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Why Learn */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Pourquoi Apprendre les Tables de Multiplication ? 🤔
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">
                Les tables de multiplication sont le super pouvoir du monde mathématique ! Voici ce qu'elles vous apporteront :
              </p>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                    ⚡
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Calcul Rapide</h3>
                    <p className="text-slate-700">Vous pourrez résoudre les problèmes mathématiques beaucoup plus rapidement !</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-2xl">
                    🎮
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Utilisation Quotidienne</h3>
                    <p className="text-slate-700">Ce sera utile pour faire les courses, jouer, partout !</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-2xl">
                    🏆
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Confiance Accrue</h3>
                    <p className="text-slate-700">Votre confiance en mathématiques augmentera et vous réussirez mieux !</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-2xl">
                    🧠
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Puissance Cérébrale</h3>
                    <p className="text-slate-700">Votre mémoire se renforcera et vous apprendrez à penser plus vite !</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Learning Path */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Parcours d'Apprentissage Étape par Étape 🚀
            </h2>
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border-l-4 border-green-500">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">Commencez avec les Tables Faciles (1, 2, 5, 10)</h3>
                    <p className="text-slate-700 mb-3">
                      Commencer par les tables les plus faciles vous donnera de la confiance ! Elles sont très simples et vous les apprendrez rapidement.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-900 mb-2">Pourquoi ces tables sont-elles faciles ?</p>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• <strong>Table de 1 :</strong> Chaque nombre reste identique ! (1×5=5)</li>
                        <li>• <strong>Table de 2 :</strong> Doublez le nombre ! (2×4 = 4+4 = 8)</li>
                        <li>• <strong>Table de 5 :</strong> Se termine toujours par 5 ou 0 !</li>
                        <li>• <strong>Table de 10 :</strong> Ajoutez un zéro à la fin ! (10×3 = 30)</li>
                      </ul>
                    </div>
                    <div className="mt-3">
                      <Link href="/fr/table-de-multiplication/1-10" className="text-green-600 hover:text-green-700 font-medium inline-flex items-center">
                        Aller aux Tables 1-10 →
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
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">Passez aux Tables de Niveau Intermédiaire (3, 4, 6)</h3>
                    <p className="text-slate-700 mb-3">
                      Maintenant vous êtes prêt pour des tables un peu plus difficiles ! Ne vous inquiétez pas, il y a aussi des astuces pour celles-ci.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-900 mb-2">Astuces :</p>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• <strong>Table de 3 :</strong> Additionnez le nombre 3 fois (3×4 = 4+4+4 = 12)</li>
                        <li>• <strong>Table de 4 :</strong> Multipliez par 2, puis doublez (4×5 = 2×5×2 = 20)</li>
                        <li>• <strong>Table de 6 :</strong> Utilisez la table de 5 et ajoutez-en 1 de plus (6×4 = 5×4 + 4 = 24)</li>
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
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Défiez-vous avec les Tables Difficiles (7, 8, 9)</h3>
                    <p className="text-slate-700 mb-3">
                      Ces tables sont un peu plus difficiles, mais vous avez beaucoup appris jusqu'à présent ! Avec des techniques spéciales, vous les maîtriserez aussi.
                    </p>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-semibold text-yellow-900 mb-2">Techniques Spéciales :</p>
                      <ul className="space-y-2 text-slate-700 text-sm">
                        <li>• <strong>Table de 9 - Astuce des Doigts :</strong> Ouvrez vos mains, baissez le doigt du nombre à multiplier. Doigts ouverts à gauche = dizaines, doigts à droite = unités !</li>
                        <li>• <strong>Table de 8 :</strong> Multipliez par 10, puis soustrayez 2 fois (8×7 = 10×7 - 2×7 = 70-14 = 56)</li>
                        <li>• <strong>Table de 7 :</strong> Pour les difficiles, utilisez la table de 5 (7×6 = 5×6 + 2×6 = 30+12 = 42)</li>
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
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Pratiquez Constamment 💪</h3>
                    <p className="text-slate-700 mb-3">
                      Pour ne pas oublier tout ce que vous avez appris, pratiquez un peu chaque jour. Le mieux est de pratiquer peu mais régulièrement !
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-900 mb-2">Conseils de Pratique Quotidienne :</p>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• Étudiez 10-15 minutes chaque jour (pas beaucoup, mais régulièrement !)</li>
                        <li>• Pratiquez en jouant - c'est amusant !</li>
                        <li>• Organisez des compétitions avec votre famille</li>
                        <li>• Quand vous voyez des multiplications dans la vie quotidienne, calculez-les (ex : "3 boîtes, 5 chocolats dans chacune, combien au total ?")</li>
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
              Apprentissage Visuel - Comprendre avec des Images 🎨
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">
                Visualiser la multiplication dans votre esprit facilite l'apprentissage ! Voici quelques techniques visuelles :
              </p>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {/* Arrays */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Tableaux (Arrays)</h3>
                  <p className="text-slate-700 mb-4 text-sm">Exemple de 4 × 3 = 12 :</p>
                  <div className="bg-white p-4 rounded inline-block">
                    <div className="grid grid-cols-4 gap-2">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="w-8 h-8 bg-blue-400 rounded"></div>
                      ))}
                    </div>
                    <p className="text-center mt-2 text-sm text-slate-600">4 colonnes × 3 rangées = 12</p>
                  </div>
                </div>

                {/* Number Line */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Sauts sur la Droite Numérique</h3>
                  <p className="text-slate-700 mb-4 text-sm">3 × 4 : sauts de 4 (0→4→8→12)</p>
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
                    <p className="text-center mt-2 text-xs text-slate-600">3 étapes, chaque étape 4 unités</p>
                  </div>
                </div>

                {/* Skip Counting */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Comptage par Bonds</h3>
                  <p className="text-slate-700 mb-3 text-sm">Comptez de 5 en 5 : 5, 10, 15, 20, 25...</p>
                  <div className="bg-white p-3 rounded text-center">
                    <p className="text-purple-700 font-bold text-lg">5 - 10 - 15 - 20 - 25</p>
                    <p className="text-xs text-slate-600 mt-2">Si vous mémorisez ces nombres, la table de 5 est très facile !</p>
                  </div>
                </div>

                {/* Patterns */}
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Remarquez les Motifs</h3>
                  <p className="text-slate-700 mb-3 text-sm">Le secret de la table de 9 :</p>
                  <div className="bg-white p-3 rounded">
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>9×1=<strong className="text-pink-600">09</strong> (0+9=9)</li>
                      <li>9×2=<strong className="text-pink-600">18</strong> (1+8=9)</li>
                      <li>9×3=<strong className="text-pink-600">27</strong> (2+7=9)</li>
                      <li>9×4=<strong className="text-pink-600">36</strong> (3+6=9)</li>
                      <li className="text-xs italic">Les chiffres font toujours 9 !</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Practice Tips */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Conseils de Pratique 🎯
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  🎮
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Jouez</h3>
                <p className="text-slate-700 mb-3">
                  Pratiquez avec les jeux amusants de ce site. Apprendre en jouant est beaucoup plus amusant !
                </p>
                <Link href="/fr/table-de-multiplication/1-10" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center text-sm">
                  Découvrir les Jeux →
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  📝
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Testez-vous</h3>
                <p className="text-slate-700 mb-3">
                  Utilisez des cartes flash ou demandez à quelqu'un de vous poser des questions. Se tester accélère votre apprentissage !
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  🎵
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Chansons et Rythmes</h3>
                <p className="text-slate-700 mb-3">
                  Transformez les tables de multiplication en chansons ! C'est plus facile de mémoriser avec de la musique.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  🏆
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Récompensez-vous</h3>
                <p className="text-slate-700 mb-3">
                  Quand vous apprenez une table, récompensez-vous ! Collectionnez des autocollants ou faites quelque chose de spécial.
                </p>
              </div>
            </div>
          </section>

          {/* Progress Tracking */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Suivez votre Progression 📊
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">
                Voir votre progression vous motive ! Voici des méthodes de suivi :
              </p>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">✅ Liste de Contrôle des Tables</h3>
                  <p className="text-slate-700 text-sm">
                    Écrivez sur un papier les tables de 1 à 10. Chaque fois que vous en apprenez une, cochez-la ! 
                    Quand toutes les coches sont complètes, vous serez un héros des tables de multiplication ! 🌟
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">📈 Graphique de Progression</h3>
                  <p className="text-slate-700 text-sm">
                    Enregistrez combien de questions vous avez répondues correctement chaque semaine. Dessinez un graphique et voyez votre progression. 
                    Vous vous améliorez chaque semaine !
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">⭐ Système d'Étoiles</h3>
                  <p className="text-slate-700 text-sm">
                    Pour chaque bonne réponse, dessinez une étoile. Quand vous atteignez 100 étoiles, offrez-vous une récompense spéciale !
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Motivation */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Secrets de Motivation et de Réussite 💫
            </h2>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🌟</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Soyez Patient</h3>
                      <p className="text-slate-700 text-sm">Tout prend du temps. Vous pouvez le faire, il suffit de pratiquer !</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💪</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Les Erreurs sont Normales</h3>
                      <p className="text-slate-700 text-sm">Ne vous sentez pas mal quand vous vous trompez, c'est une partie de l'apprentissage !</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Fixez de Petits Objectifs</h3>
                      <p className="text-slate-700 text-sm">Une table par jour suffit, ne vous précipitez pas !</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🤝</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Demandez de l'Aide</h3>
                      <p className="text-slate-700 text-sm">Si vous ne comprenez pas quelque chose, demandez à votre famille ou à votre enseignant !</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎉</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Célébrez vos Réussites</h3>
                      <p className="text-slate-700 text-sm">Chaque petit succès est important, valorisez-vous !</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">😊</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Amusez-vous !</h3>
                      <p className="text-slate-700 text-sm">Apprendre doit être amusant, essayez les jeux !</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Reference */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Guide Rapide des Astuces 🔑
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-900 mb-2">Multiplier par 0</h4>
                  <p className="text-sm text-slate-700">Tout est zéro ! 0×1000=0</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-green-900 mb-2">Multiplier par 1</h4>
                  <p className="text-sm text-slate-700">Le nombre reste identique ! 1×7=7</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold text-purple-900 mb-2">Multiplier par 2</h4>
                  <p className="text-sm text-slate-700">Doublez le nombre ! 2×6=12</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-bold text-pink-900 mb-2">Multiplier par 5</h4>
                  <p className="text-sm text-slate-700">Le résultat se termine par 0 ou 5 !</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-900 mb-2">Multiplier par 9</h4>
                  <p className="text-sm text-slate-700">Les chiffres font 9 ! Astuce des doigts !</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-bold text-indigo-900 mb-2">Multiplier par 10</h4>
                  <p className="text-sm text-slate-700">Ajoutez un 0 ! 10×8=80</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-6 sm:p-8 text-white text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              C'est l'Heure de Commencer ! 🚀
            </h2>
            <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Maintenant vous êtes prêt ! Rappelez-vous, chaque grand héros des mathématiques a commencé par de petites étapes. 
              Vous pouvez le faire aussi ! 💪✨
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/fr/table-de-multiplication/1-10"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                <span className="mr-2">🎯</span>
                Commencer Maintenant
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/fr/table-de-multiplication"
                className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-flex items-center justify-center"
              >
                Retour à l'Accueil
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-blue-400">
              <p className="text-blue-100 text-sm">
                💡 <strong>Conseil :</strong> Étudier 10-15 minutes par jour est beaucoup plus efficace que d'étudier 1 heure ennuyeusement !
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

