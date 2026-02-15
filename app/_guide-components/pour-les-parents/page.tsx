import Link from 'next/link'
import Header from '@/app/components/fr/Header'
import Footer from '@/app/components/fr/Footer'

export const metadata = {
  title: 'Guide Parents : Accompagner l\'Apprentissage des Tables de Multiplication',
  description: 'Guide pratique pour les parents : comment aider votre enfant à apprendre les tables de multiplication à la maison. Activités familiales, conseils et soutien.',
  keywords: 'parents tables de multiplication, aider enfant multiplication, activités mathématiques maison, accompagner apprentissage',
  alternates: {
    canonical: '/pour-les-parents',
  },
}

export default function ForParents() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-500 to-amber-600 text-white pt-20 pb-12 md:pt-24 md:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
                Guide Parents : Accompagner les Tables de Multiplication
              </h1>
              <p className="text-lg sm:text-xl text-orange-100 mb-6 md:mb-8">
                Votre rôle est essentiel dans l&apos;apprentissage de votre enfant. Découvrez comment créer un environnement 
                positif et des habitudes efficaces pour maîtriser les tables de multiplication.
              </p>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                <span className="text-orange-100">Ensemble, l&apos;apprentissage devient un plaisir !</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Why Your Role Matters */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Pourquoi Votre Rôle est Essentiel
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">
                Les recherches montrent que l&apos;implication des parents dans l&apos;apprentissage des mathématiques a un impact significatif sur la réussite de l&apos;enfant.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-2xl">
                    💛
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Soutien Émotionnel</h3>
                    <p className="text-slate-700">Votre encouragement réduit l&apos;anxiété mathématique et renforce la confiance de votre enfant.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-2xl">
                    🏠
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Environnement Propice</h3>
                    <p className="text-slate-700">Un cadre calme et positif à la maison favorise la concentration et la mémorisation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-2xl">
                    📅
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Régularité</h3>
                    <p className="text-slate-700">Vous pouvez instaurer des routines de pratique courtes mais régulières — la clé du succès.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-2xl">
                    🌟
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Modèle Positif</h3>
                    <p className="text-slate-700">En montrant que les maths sont utiles au quotidien, vous motivez naturellement votre enfant.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Supporting at Home */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Accompagner Votre Enfant à la Maison
            </h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border-l-4 border-orange-500">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">Créez une Routine Quotidienne</h3>
                    <p className="text-slate-700 mb-3">
                      Consacrez 10 à 15 minutes par jour à la pratique des tables. Choisissez un moment calme, 
                      idéalement après le goûter ou avant le coucher.
                    </p>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-semibold text-orange-900 mb-2">Conseils pratiques :</p>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• Choisissez un moment fixe chaque jour</li>
                        <li>• Commencez par 5 minutes et augmentez progressivement</li>
                        <li>• Évitez les moments de fatigue ou de faim</li>
                        <li>• Restez présent et disponible pendant la session</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border-l-4 border-amber-500">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">Valorisez l&apos;Effort, Pas Seulement le Résultat</h3>
                    <p className="text-slate-700 mb-3">
                      Félicitez votre enfant pour sa persévérance et ses progrès, même petits. 
                      Évitez de comparer avec d&apos;autres enfants.
                    </p>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <p className="font-semibold text-amber-900 mb-2">Phrases encourageantes :</p>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• &quot;Tu as bien travaillé aujourd&apos;hui !&quot;</li>
                        <li>• &quot;Je vois tes progrès avec la table de 7 !&quot;</li>
                        <li>• &quot;C&apos;est normal de se tromper, essayons encore&quot;</li>
                        <li>• &quot;Tu connais déjà 5 tables, c&apos;est formidable !&quot;</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border-l-4 border-yellow-500">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">Utilisez les Mathématiques au Quotidien</h3>
                    <p className="text-slate-700 mb-3">
                      Intégrez les tables de multiplication dans la vie de tous les jours pour leur donner du sens.
                    </p>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-semibold text-yellow-900 mb-2">Exemples concrets :</p>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• Au supermarché : &quot;3 paquets de 4 yaourts, ça fait combien ?&quot;</li>
                        <li>• En cuisine : &quot;On double la recette, 2 × 3 œufs = ?&quot;</li>
                        <li>• En voiture : &quot;Combien de roues pour 6 voitures ?&quot;</li>
                        <li>• À table : &quot;5 personnes, 3 tranches chacune = ?&quot;</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Fun Activities Together */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Activités Ludiques en Famille
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  🎲
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Jeux de Dés</h3>
                <p className="text-slate-700 mb-3">
                  Lancez deux dés et multipliez les résultats. Le premier à répondre correctement gagne un point !
                </p>
                <div className="bg-orange-50 p-3 rounded text-sm text-slate-700">
                  <strong>Âge :</strong> 7+ · <strong>Matériel :</strong> 2 dés
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  🃏
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Bataille de Cartes</h3>
                <p className="text-slate-700 mb-3">
                  Chaque joueur retourne deux cartes et les multiplie. Le plus grand produit remporte les cartes.
                </p>
                <div className="bg-amber-50 p-3 rounded text-sm text-slate-700">
                  <strong>Âge :</strong> 8+ · <strong>Matériel :</strong> Jeu de cartes
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  🎯
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Quiz Chronométré</h3>
                <p className="text-slate-700 mb-3">
                  Posez 10 questions et chronométrez. Votre enfant essaie de battre son propre record jour après jour.
                </p>
                <div className="bg-yellow-50 p-3 rounded text-sm text-slate-700">
                  <strong>Âge :</strong> 7+ · <strong>Durée :</strong> 5 min
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  🖍️
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Coloriage Mathématique</h3>
                <p className="text-slate-700 mb-3">
                  Créez une grille de 100 et coloriez les multiples d&apos;un nombre ensemble. Les motifs émerveilleront votre enfant !
                </p>
                <div className="bg-rose-50 p-3 rounded text-sm text-slate-700">
                  <strong>Âge :</strong> 6+ · <strong>Matériel :</strong> Grille + crayons
                </div>
              </div>
            </div>
          </section>

          {/* Common Challenges */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Défis Courants et Solutions
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-6">
                Votre enfant rencontre des difficultés ? C&apos;est normal. Voici les obstacles les plus fréquents et comment les surmonter.
              </p>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg border-l-4 border-orange-500">
                  <h3 className="text-lg font-semibold text-orange-900 mb-2">😰 &quot;Mon enfant a peur des maths&quot;</h3>
                  <p className="text-slate-700">
                    <strong>Solution :</strong> Dédramatisez ! Utilisez des jeux plutôt que des exercices formels. 
                    Partagez vos propres expériences avec les maths et montrez que les erreurs font partie de l&apos;apprentissage.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-lg border-l-4 border-amber-500">
                  <h3 className="text-lg font-semibold text-amber-900 mb-2">😩 &quot;Il/elle oublie tout le lendemain&quot;</h3>
                  <p className="text-slate-700">
                    <strong>Solution :</strong> La répétition espacée est la clé. Révisez les tables apprises les jours précédents avant 
                    d&apos;en apprendre de nouvelles. 5 minutes de révision valent plus qu&apos;une heure d&apos;apprentissage intensif.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-yellow-50 to-lime-50 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-2">😤 &quot;Il/elle ne veut pas pratiquer&quot;</h3>
                  <p className="text-slate-700">
                    <strong>Solution :</strong> Rendez la pratique ludique ! Utilisez les jeux en ligne de ce site, organisez des défis familiaux, 
                    ou intégrez les maths dans des activités que votre enfant aime déjà.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-lime-50 to-green-50 p-6 rounded-lg border-l-4 border-lime-500">
                  <h3 className="text-lg font-semibold text-lime-900 mb-2">🤔 &quot;Les tables 7, 8 et 9 sont trop dures&quot;</h3>
                  <p className="text-slate-700">
                    <strong>Solution :</strong> Grâce à la commutativité (si 3×7=21, alors 7×3=21 aussi), votre enfant connaît déjà une 
                    grande partie de ces tables ! Concentrez-vous sur les quelques combinaisons restantes : 7×7, 7×8, 8×8.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Creating Positive Environment */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Créer un Environnement Positif
            </h2>
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✅</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">À Faire</h3>
                      <ul className="text-slate-700 text-sm space-y-1">
                        <li>• Féliciter les efforts et les progrès</li>
                        <li>• Pratiquer de manière ludique</li>
                        <li>• Rester patient et calme</li>
                        <li>• Adapter le rythme à l&apos;enfant</li>
                        <li>• Célébrer chaque petite victoire</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">❌</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">À Éviter</h3>
                      <ul className="text-slate-700 text-sm space-y-1">
                        <li>• Comparer avec d&apos;autres enfants</li>
                        <li>• Punir les erreurs</li>
                        <li>• Forcer des sessions trop longues</li>
                        <li>• Dire &quot;c&apos;est facile&quot; quand l&apos;enfant échoue</li>
                        <li>• Montrer votre frustration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Progress Tracking for Parents */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Suivre la Progression de Votre Enfant
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
                <div className="bg-orange-50 p-5 rounded-lg border-t-4 border-orange-500">
                  <h3 className="text-lg font-semibold text-orange-900 mb-3">📋 Tableau de Suivi</h3>
                  <p className="text-slate-700 text-sm">
                    Créez un tableau avec les tables de 1 à 10. Collez une étoile pour chaque table maîtrisée. 
                    L&apos;objectif visuel motive énormément !
                  </p>
                </div>
                <div className="bg-amber-50 p-5 rounded-lg border-t-4 border-amber-500">
                  <h3 className="text-lg font-semibold text-amber-900 mb-3">📊 Journal de Scores</h3>
                  <p className="text-slate-700 text-sm">
                    Notez le score des quiz quotidiens. Montrez le graphique de progression à votre enfant — 
                    voir la courbe monter est très motivant.
                  </p>
                </div>
                <div className="bg-yellow-50 p-5 rounded-lg border-t-4 border-yellow-500">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-3">🏅 Système de Récompenses</h3>
                  <p className="text-slate-700 text-sm">
                    Définissez des paliers : une sortie après 5 tables maîtrisées, un petit cadeau après toutes les tables. 
                    Des récompenses simples mais significatives.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-orange-500 to-amber-600 rounded-lg shadow-lg p-6 sm:p-8 text-white text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Pratiquez Ensemble dès Aujourd&apos;hui ! 🌟
            </h2>
            <p className="text-base sm:text-lg text-orange-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Explorez nos exercices interactifs et jeux éducatifs avec votre enfant. 
              L&apos;apprentissage en famille est toujours plus efficace et plus amusant !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/fr/table-de-multiplication/1-10"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors inline-flex items-center justify-center"
              >
                <span className="mr-2">🎯</span>
                Découvrir les Exercices
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/fr/table-de-multiplication"
                className="bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-800 transition-colors inline-flex items-center justify-center"
              >
                Retour à l&apos;Accueil
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-orange-400">
              <p className="text-orange-100 text-sm">
                💡 <strong>Conseil :</strong> Pratiquez 10 minutes chaque soir en famille — c&apos;est la clé de la réussite !
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
