import Link from 'next/link'
import Footer from '@/app/components/Footer'

export const metadata = {
  title: 'Einmaleins-Leitfaden für Schüler | Schritt für Schritt Lernen',
  description: 'Schritt-für-Schritt-Anleitung zum einfachen Lernen des Einmaleins. Visuelle Materialien, praktische Aktivitäten und lustige Spiele zum Lernen in deinem eigenen Tempo.',
  keywords: 'Einmaleins lernen, Mathematik für Schüler, Einmaleins-Leitfaden, Multiplikation Schritt für Schritt',
  alternates: {
    canonical: '/fuer-schueler',
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
                Das Einmaleins zu lernen ist ganz einfach! 🎯
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 mb-6 md:mb-8">
                Lerne in deinem eigenen Tempo, hab Spaß dabei und werde ein Mathe-Held! 
                Dieser Leitfaden hilft dir, das Einmaleins Schritt für Schritt zu lernen.
              </p>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-blue-100">Du schaffst das auch!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Why Learn */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Warum sollte ich das Einmaleins lernen? 🤔
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">
                Das Einmaleins ist die Superkraft der Mathe-Welt! Das gibt es dir:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                    ⚡
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Schnelles Rechnen</h3>
                    <p className="text-slate-700">Du kannst Matheaufgaben viel schneller lösen!</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-2xl">
                    🎮
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Nutzen im Alltag</h3>
                    <p className="text-slate-700">Beim Einkaufen, bei Spielen - überall wirst du es brauchen!</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-2xl">
                    🏆
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Mehr Selbstvertrauen</h3>
                    <p className="text-slate-700">Dein Selbstvertrauen in Mathe steigt und du wirst erfolgreicher!</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-2xl">
                    🧠
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Gehirnpower</h3>
                    <p className="text-slate-700">Dein Gedächtnis wird stärker und du lernst schneller zu denken!</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Learning Path */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Schritt-für-Schritt Lernpfad 🚀
            </h2>
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border-l-4 border-green-500">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">Beginne mit den einfachen Reihen (1, 2, 5, 10)</h3>
                    <p className="text-slate-700 mb-3">
                      Mit den einfachsten Reihen zu beginnen gibt dir Selbstvertrauen! Sie sind sehr einfach und du lernst sie schnell.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-900 mb-2">Warum sind diese Reihen einfach?</p>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• <strong>1er-Reihe:</strong> Jede Zahl bleibt gleich! (1×5=5)</li>
                        <li>• <strong>2er-Reihe:</strong> Addiere die Zahl zweimal! (2×4 = 4+4 = 8)</li>
                        <li>• <strong>5er-Reihe:</strong> Endet immer auf 5 oder 0!</li>
                        <li>• <strong>10er-Reihe:</strong> Hänge eine 0 hinten an! (10×3 = 30)</li>
                      </ul>
                    </div>
                    <div className="mt-3">
                      <Link href="/1-10" className="text-green-600 hover:text-green-700 font-medium inline-flex items-center">
                        Zu den Reihen 1-10 →
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
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">Gehe zu mittelschweren Reihen über (3, 4, 6)</h3>
                    <p className="text-slate-700 mb-3">
                      Jetzt bist du bereit für etwas schwierigere Reihen! Keine Sorge, auch dafür gibt es Tricks.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-900 mb-2">Tricks:</p>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• <strong>3er-Reihe:</strong> Addiere die Zahl 3 mal (3×4 = 4+4+4 = 12)</li>
                        <li>• <strong>4er-Reihe:</strong> Mal 2, dann verdopple (4×5 = 2×5×2 = 20)</li>
                        <li>• <strong>6er-Reihe:</strong> Nutze die 5er-Reihe und addiere 1 mehr (6×4 = 5×4 + 4 = 24)</li>
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
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Fordere dich mit den schwierigen Reihen heraus (7, 8, 9)</h3>
                    <p className="text-slate-700 mb-3">
                      Diese Reihen sind etwas schwieriger, aber du hast schon viel gelernt! Mit speziellen Techniken meisterst du auch diese.
                    </p>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-semibold text-yellow-900 mb-2">Spezielle Techniken:</p>
                      <ul className="space-y-2 text-slate-700 text-sm">
                        <li>• <strong>9er-Reihe - Finger-Trick:</strong> Öffne deine Hände, senke den Finger der Zahl, mit der du multiplizierst. Offene Finger links = Zehner, Finger rechts = Einer!</li>
                        <li>• <strong>8er-Reihe:</strong> Mal 10, dann ziehe 2 mal ab (8×7 = 10×7 - 2×7 = 70-14 = 56)</li>
                        <li>• <strong>7er-Reihe:</strong> Für die schwierigen nutze die 5er-Reihe (7×6 = 5×6 + 2×6 = 30+12 = 42)</li>
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
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Übe regelmäßig 💪</h3>
                    <p className="text-slate-700 mb-3">
                      Damit du nicht vergisst, was du gelernt hast, übe jeden Tag ein bisschen. Das Beste ist: wenig, aber regelmäßig!
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-900 mb-2">Tipps für tägliche Übung:</p>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• Lerne jeden Tag 10-15 Minuten (nicht viel, aber regelmäßig!)</li>
                        <li>• Übe spielerisch - das macht Spaß!</li>
                        <li>• Veranstalte Wettbewerbe mit deiner Familie</li>
                        <li>• Wenn du im Alltag Multiplikationen siehst, rechne sie aus (z.B.: "3 Packungen, 5 Kekse in jeder, wie viele insgesamt?")</li>
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
              Visuelles Lernen - Mit Bildern verstehen 🎨
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">
                Multiplikation in deinem Kopf zu visualisieren macht das Lernen einfacher! Hier sind einige visuelle Techniken:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {/* Arrays */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Anordnungen (Arrays)</h3>
                  <p className="text-slate-700 mb-4 text-sm">Beispiel für 4 × 3 = 12:</p>
                  <div className="bg-white p-4 rounded inline-block">
                    <div className="grid grid-cols-4 gap-2">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="w-8 h-8 bg-blue-400 rounded"></div>
                      ))}
                    </div>
                    <p className="text-center mt-2 text-sm text-slate-600">4 Spalten × 3 Reihen = 12</p>
                  </div>
                </div>

                {/* Number Line */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Sprünge auf dem Zahlenstrahl</h3>
                  <p className="text-slate-700 mb-4 text-sm">3 × 4: Sprünge von 4 (0→4→8→12)</p>
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
                    <p className="text-center mt-2 text-xs text-slate-600">3 Schritte, jeder Schritt 4 Einheiten</p>
                  </div>
                </div>

                {/* Skip Counting */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Zählen in Schritten</h3>
                  <p className="text-slate-700 mb-3 text-sm">Zähle in 5er-Schritten: 5, 10, 15, 20, 25...</p>
                  <div className="bg-white p-3 rounded text-center">
                    <p className="text-purple-700 font-bold text-lg">5 - 10 - 15 - 20 - 25</p>
                    <p className="text-xs text-slate-600 mt-2">Wenn du diese Zahlen auswendig kannst, ist die 5er-Reihe super einfach!</p>
                  </div>
                </div>

                {/* Patterns */}
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Erkenne die Muster</h3>
                  <p className="text-slate-700 mb-3 text-sm">Das Geheimnis der 9er-Reihe:</p>
                  <div className="bg-white p-3 rounded">
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>9×1=<strong className="text-pink-600">09</strong> (0+9=9)</li>
                      <li>9×2=<strong className="text-pink-600">18</strong> (1+8=9)</li>
                      <li>9×3=<strong className="text-pink-600">27</strong> (2+7=9)</li>
                      <li>9×4=<strong className="text-pink-600">36</strong> (3+6=9)</li>
                      <li className="text-xs italic">Die Ziffern ergeben immer 9!</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Practice Tips */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Tipps zum Üben 🎯
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  🎮
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Spiele</h3>
                <p className="text-slate-700 mb-3">
                  Übe mit den lustigen Spielen auf dieser Seite. Lernen beim Spielen macht viel mehr Spaß!
                </p>
                <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center text-sm">
                  Entdecke die Spiele →
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  📝
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Teste dich selbst</h3>
                <p className="text-slate-700 mb-3">
                  Nutze Karteikarten oder bitte jemanden, dir Fragen zu stellen. Sich selbst zu testen beschleunigt dein Lernen!
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  🎵
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Lieder und Rhythmen</h3>
                <p className="text-slate-700 mb-3">
                  Mache aus dem Einmaleins Lieder! Mit Musik ist es viel einfacher zu merken.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  🏆
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Belohne dich</h3>
                <p className="text-slate-700 mb-3">
                  Wenn du eine Reihe gelernt hast, belohne dich! Sammle Aufkleber oder mache etwas Kleines.
                </p>
              </div>
            </div>
          </section>

          {/* Progress Tracking */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Verfolge deinen Fortschritt 📊
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">
                Zu sehen, wie viel Fortschritt du gemacht hast, motiviert dich! Hier sind Tracking-Methoden:
              </p>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">✅ Reihen-Checkliste</h3>
                  <p className="text-slate-700 text-sm">
                    Schreibe die Reihen von 1 bis 10 auf ein Papier. Jedes Mal, wenn du eine gelernt hast, machst du ein großes Häkchen! 
                    Wenn alle Häkchen gesetzt sind, bist du ein Einmaleins-Held! 🌟
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">📈 Fortschrittsdiagramm</h3>
                  <p className="text-slate-700 text-sm">
                    Notiere jede Woche, wie viele Fragen du richtig beantwortet hast. Zeichne ein Diagramm und sieh deinen Fortschritt. 
                    Jede Woche wirst du besser!
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">⭐ Sterne-System</h3>
                  <p className="text-slate-700 text-sm">
                    Für jede richtige Antwort malst du einen Stern. Wenn du 100 Sterne erreicht hast, gönn dir eine besondere Belohnung!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Motivation */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Motivations- und Erfolgsgeheimnisse 💫
            </h2>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🌟</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Sei geduldig</h3>
                      <p className="text-slate-700 text-sm">Alles braucht Zeit. Du schaffst das, übe einfach weiter!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💪</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Fehler sind normal</h3>
                      <p className="text-slate-700 text-sm">Sei nicht traurig, wenn du Fehler machst, das gehört zum Lernen dazu!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Setze kleine Ziele</h3>
                      <p className="text-slate-700 text-sm">Eine Reihe pro Tag reicht völlig aus, nicht hetzen!</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🤝</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Frage um Hilfe</h3>
                      <p className="text-slate-700 text-sm">Wenn du etwas nicht verstehst, frag deine Familie oder Lehrer!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎉</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Feiere deine Erfolge</h3>
                      <p className="text-slate-700 text-sm">Jeder kleine Erfolg ist wichtig, sei stolz auf dich!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">😊</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Hab Spaß!</h3>
                      <p className="text-slate-700 text-sm">Lernen soll Spaß machen, probiere die Spiele aus!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Reference */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Schnelle Tipp-Übersicht 🔑
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-900 mb-2">Mit 0 multiplizieren</h4>
                  <p className="text-sm text-slate-700">Alles ist null! 0×1000=0</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-green-900 mb-2">Mit 1 multiplizieren</h4>
                  <p className="text-sm text-slate-700">Die Zahl bleibt gleich! 1×7=7</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold text-purple-900 mb-2">Mit 2 multiplizieren</h4>
                  <p className="text-sm text-slate-700">Verdopple die Zahl! 2×6=12</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-bold text-pink-900 mb-2">Mit 5 multiplizieren</h4>
                  <p className="text-sm text-slate-700">Das Ergebnis endet auf 0 oder 5!</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-900 mb-2">Mit 9 multiplizieren</h4>
                  <p className="text-sm text-slate-700">Die Ziffern ergeben 9! Finger-Trick!</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-bold text-indigo-900 mb-2">Mit 10 multiplizieren</h4>
                  <p className="text-sm text-slate-700">Hänge eine 0 an! 10×8=80</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-6 sm:p-8 text-white text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Zeit zum Loslegen! 🚀
            </h2>
            <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Jetzt bist du bereit! Denk daran, jeder große Mathe-Held hat mit kleinen Schritten angefangen. 
              Du schaffst das auch! 💪✨
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/1-10"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                <span className="mr-2">🎯</span>
                Jetzt beginnen
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/"
                className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-flex items-center justify-center"
              >
                Zurück zur Startseite
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-blue-400">
              <p className="text-blue-100 text-sm">
                💡 <strong>Tipp:</strong> 10-15 Minuten am Tag zu lernen ist viel effektiver als 1 langweilige Stunde!
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
