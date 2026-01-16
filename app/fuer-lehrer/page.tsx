import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Einmaleins-Leitfaden für Lehrer | Unterrichtsstrategien',
  description: 'Umfassende Ressourcen für Lehrer zum effektiven Unterrichten des Einmaleins. Enthält pädagogische Strategien, Klassenzimmeraktivitäten, differenzierte Unterrichtsmethoden und Bewertungsmethoden.',
  keywords: 'Einmaleins unterrichten, pädagogische Strategien, Mathematikaktivitäten, differenzierter Unterricht, Lehrerressourcen',
  alternates: {
    canonical: 'https://einmaleins.online/fuer-lehrer',
    languages: {
      'de': 'https://einmaleins.online/fuer-lehrer',
    },
  },
  openGraph: {
    title: 'Einmaleins-Leitfaden für Lehrer',
    description: 'Umfassende Ressourcen für Lehrer zum effektiven Unterrichten des Einmaleins.',
    url: 'https://einmaleins.online/fuer-lehrer',
    siteName: 'Einmaleins',
    locale: 'de_DE',
    type: 'website',
  },
};

export default function FuerLehrerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Einmaleins-Leitfaden für Lehrer
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Effektive Strategien, Klassenzimmeraktivitäten und Ressourcen zum Unterrichten 
              des Einmaleins, damit alle Schüler es meistern können.
            </p>
          </div>
        </div>
      </section>

      {/* Teaching Strategies Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Effektive Unterrichtsstrategien
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Strategy 1 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">👁️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Visualisierung</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Verwenden Sie visuelle Darstellungen, um Schülern zu helfen, 
                die Multiplikation als wiederholte Gruppen zu verstehen.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Rechteckige Anordnungen (z.B.: 3×4 als 3 Reihen von 4 Objekten)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Flächenmodelle mit Karopapier</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Sprungdiagramme auf dem Zahlenstrahl</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Konkrete Manipulativa (Blöcke, Chips, Würfel)</span>
                </li>
              </ul>
            </div>

            {/* Strategy 2 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🧩</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Zerlegung</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Lehren Sie Schüler, schwierige Multiplikationen 
                in einfachere Operationen zu zerlegen.
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
                  <span>Verdopplung verwenden: 6×4 = 2×(3×4)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Distributiveigenschaft in Aktion</span>
                </li>
              </ul>
            </div>

            {/* Strategy 3 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🔢</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Muster</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Helfen Sie Schülern, Muster zu entdecken und zu nutzen, um 
                das Lernen und Auswendiglernen zu erleichtern.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>2er-Reihe: alle geraden Zahlen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>5er-Reihe: enden auf 0 oder 5</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>9er-Reihe: Quersumme = 9, absteigendes Muster</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Kommutativeigenschaft: 3×7 = 7×3</span>
                </li>
              </ul>
            </div>

            {/* Strategy 4 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Reale Anwendungen</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Verknüpfen Sie die Multiplikation mit alltäglichen Situationen, um 
                dem Lernen Bedeutung und Kontext zu geben.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Einkaufs- und Geldprobleme</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Anordnung von Objekten in Reihen und Spalten</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Kochrezepte und Messungen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Sport, Spiele und Gruppenaktivitäten</span>
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
            Aktivitäten für das Klassenzimmer
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Activity 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🎯</span>
                Einmaleins-Bingo
              </h3>
              <p className="text-gray-700 mb-3">
                Schüler erstellen Bingo-Karten mit Produkten. 
                Rufen Sie Multiplikationen auf und Schüler markieren die Antworten.
              </p>
              <div className="bg-blue-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Niveau:</strong> Anfänger bis Fortgeschrittene<br/>
                <strong>Zeit:</strong> 15-20 Minuten
              </div>
            </div>

            {/* Activity 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🏃</span>
                Einmaleins-Rennen
              </h3>
              <p className="text-gray-700 mb-3">
                Teams treten gegeneinander an, indem sie Multiplikationsaufgaben 
                in einem Staffelformat an der Tafel lösen.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Niveau:</strong> Alle Niveaus<br/>
                <strong>Zeit:</strong> 10-15 Minuten
              </div>
            </div>

            {/* Activity 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🎲</span>
                Einmaleins-Domino
              </h3>
              <p className="text-gray-700 mb-3">
                Modifizierte Domino-Steine, bei denen Schüler 
                Multiplikationen mit ihren Produkten zusammenbringen.
              </p>
              <div className="bg-purple-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Niveau:</strong> Fortgeschrittene<br/>
                <strong>Zeit:</strong> 20-30 Minuten
              </div>
            </div>

            {/* Activity 4 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🎨</span>
                Kunst mit Anordnungen
              </h3>
              <p className="text-gray-700 mb-3">
                Schüler erstellen künstlerische Designs mit rechteckigen Anordnungen 
                und beschriften die entsprechenden Multiplikationen.
              </p>
              <div className="bg-pink-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Niveau:</strong> Anfänger<br/>
                <strong>Zeit:</strong> 30-40 Minuten
              </div>
            </div>

            {/* Activity 5 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🎪</span>
                Übungsstationen
              </h3>
              <p className="text-gray-700 mb-3">
                Richten Sie rotierende Stationen mit verschiedenen Aktivitäten ein: 
                Lernkarten, digitale Spiele, schriftliche Aufgaben, Manipulativa.
              </p>
              <div className="bg-orange-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Niveau:</strong> Alle Niveaus<br/>
                <strong>Zeit:</strong> 40-50 Minuten
              </div>
            </div>

            {/* Activity 6 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">📖</span>
                Einmaleins-Geschichten
              </h3>
              <p className="text-gray-700 mb-3">
                Schüler schreiben und illustrieren Multiplikationsaufgaben 
                basierend auf realen oder imaginären Situationen.
              </p>
              <div className="bg-yellow-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Niveau:</strong> Fortgeschrittene bis Experten<br/>
                <strong>Zeit:</strong> 30-45 Minuten
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiated Instruction Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Differenzierter Unterricht
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Beginning Learners */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-2">🌱</span>
                Anfänger-Schüler
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Mit den Reihen 1, 2, 5 und 10 beginnen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Viele konkrete Manipulativa verwenden</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Zunächst wiederholte Addition betonen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Referenztabellen bereitstellen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Kurze tägliche Übung (5-10 Minuten)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Kleine Erfolge feiern</span>
                </li>
              </ul>
            </div>

            {/* Intermediate Learners */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-2">📚</span>
                Fortgeschrittene Schüler
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Reihen 3, 4, 6 und 7 einführen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Zerlegungsstrategien lehren</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Kommutativeigenschaft üben</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Geschwindigkeitsspiele mit moderatem Tempo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Kontextbezogene Anwendungsprobleme</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Partner- und Kleingruppenarbeit</span>
                </li>
              </ul>
            </div>

            {/* Advanced Learners */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-2">🚀</span>
                Experten-Schüler
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Reihen 8, 9, 11 und 12</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Mehrschrittige Probleme</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Verknüpfung mit Division und Brüchen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Mathematische Logik-Herausforderungen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Eigene Probleme erstellen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Mitschüler unterrichten</span>
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
            Bewertungsstrategien
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Formative Assessment */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">📊</span>
                Formative Bewertung
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Tägliche Beobachtung</h4>
                  <p className="text-gray-700">
                    Beobachten Sie Schüler während der Übung, machen Sie Notizen über 
                    verwendete Strategien und häufige Fehler.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Kurze Mini-Tests</h4>
                  <p className="text-gray-700">
                    1-2 Minuten zu Beginn des Unterrichts: 10 Aufgaben zur Bewertung 
                    von Flüssigkeit und Merkfähigkeit.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Einzeltafeln</h4>
                  <p className="text-gray-700">
                    Schüler zeigen gleichzeitig Antworten, was eine schnelle 
                    Überprüfung der ganzen Klasse ermöglicht.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Mathematik-Interviews</h4>
                  <p className="text-gray-700">
                    Kurze Einzelgespräche, um das Denken 
                    und die Strategien der Schüler zu verstehen.
                  </p>
                </div>
              </div>
            </div>

            {/* Summative Assessment */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">📝</span>
                Summative Bewertung
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Flüssigkeitstests</h4>
                  <p className="text-gray-700">
                    Zeitlich begrenzte Tests zur Messung von Geschwindigkeit und Genauigkeit 
                    bei bestimmten Einmaleins-Reihen.
                  </p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Angewandte Projekte</h4>
                  <p className="text-gray-700">
                    Schüler lösen reale Probleme, die 
                    Multiplikation in verschiedenen Kontexten erfordern.
                  </p>
                </div>
                <div className="border-l-4 border-pink-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Portfolios</h4>
                  <p className="text-gray-700">
                    Sammlung von Arbeiten im Laufe der Zeit, die Fortschritt 
                    und wachsende Beherrschung zeigen.
                  </p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Selbstbewertung</h4>
                  <p className="text-gray-700">
                    Schüler verfolgen ihren eigenen Fortschritt, identifizieren beherrschte Reihen 
                    und setzen Ziele.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Tracking */}
          <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-3xl mr-3">📈</span>
              Fortschrittsverfolgung
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/20 rounded-lg p-4">
                <h4 className="font-bold mb-2">Beherrschungsdiagramme</h4>
                <p className="text-sm">
                  Schüler färben beherrschte Reihen in einem visuellen 
                  12×12-Raster ein, um ihren Fortschritt zu sehen.
                </p>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <h4 className="font-bold mb-2">Zeiterfassung</h4>
                <p className="text-sm">
                  Verbesserungen bei der Geschwindigkeit mit Diagrammen verfolgen, die 
                  abnehmende Zeiten zeigen.
                </p>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <h4 className="font-bold mb-2">Erfolgsabzeichen</h4>
                <p className="text-sm">
                  Belohnungssystem für die Beherrschung jeder Reihe, das 
                  kontinuierlichen Fortschritt motiviert.
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
            HÃ¤ufige Fehlvorstellungen
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <p className="text-gray-700 mb-6 text-lg">
              Erkennen und adressieren Sie diese häufigen Missverständnisse, um ein 
              solides Verständnis der Multiplikation sicherzustellen:
            </p>

            <div className="space-y-6">
              {/* Misconception 1 */}
              <div className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-2">❌</span>
                  "Multiplikation macht Zahlen immer größer"
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Warum das problematisch ist:</strong> Schüler werden verwirrt, 
                  wenn sie mit Brüchen oder Dezimalzahlen multiplizieren.
                </p>
                <p className="text-gray-700">
                  <strong className="text-green-700">So korrigieren Sie es:</strong> Zeigen Sie 
                  Beispiele wie 5 × 0,5 = 2,5 oder 3 × 0 = 0. Erklären Sie, dass Multiplikation 
                  mit Zahlen kleiner als 1 das Ergebnis verkleinert.
                </p>
              </div>

              {/* Misconception 2 */}
              <div className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-2">❌</span>
                  "Die Reihenfolge spielt bei Textaufgaben keine Rolle"
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Warum das problematisch ist:</strong> Obwohl 3×4 = 4×3 ist, kann die 
                  kontextuelle Bedeutung unterschiedlich sein (3 Gruppen von 4 vs. 4 Gruppen von 3).
                </p>
                <p className="text-gray-700">
                  <strong className="text-green-700">So korrigieren Sie es:</strong> Besprechen Sie 
                  die Kommutativeigenschaft, betonen Sie aber die Wichtigkeit, 
                  den Kontext des Problems zu verstehen.
                </p>
              </div>

              {/* Misconception 3 */}
              <div className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-2">❌</span>
                  "Multiplizieren ist nur Auswendiglernen"
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Warum das problematisch ist:</strong> Schüler können 
                  auswendig lernen ohne zu verstehen, was die Anwendung und Merkfähigkeit erschwert.
                </p>
                <p className="text-gray-700">
                  <strong className="text-green-700">So korrigieren Sie es:</strong> Immer 
                  Konzepte vor dem Auswendiglernen lehren. Visuelle Modelle 
                  und Verständnisstrategien verwenden.
                </p>
              </div>

              {/* Misconception 4 */}
              <div className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-2">❌</span>
                  "Muster funktionieren immer ohne sie zu verstehen"
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Warum das problematisch ist:</strong> Schüler wenden 
                  Muster mechanisch an, ohne das mathematische "Warum" zu verstehen.
                </p>
                <p className="text-gray-700">
                  <strong className="text-green-700">So korrigieren Sie es:</strong> Beim Lehren von 
                  Mustern (z.B. 9er-Reihe) immer erklären, warum sie funktionieren, 
                  unter Verwendung mathematischer Eigenschaften.
                </p>
              </div>

              {/* Misconception 5 */}
              <div className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-2">❌</span>
                  "Es gibt nur einen richtigen Lösungsweg"
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Warum das problematisch ist:</strong> Begrenzt kreatives Denken 
                  und numerische Flexibilität.
                </p>
                <p className="text-gray-700">
                  <strong className="text-green-700">So korrigieren Sie es:</strong> Feiern Sie 
                  mehrere Strategien. Bitten Sie Schüler, verschiedene 
                  Methoden zu teilen und diskutieren Sie, wann jede am nützlichsten ist.
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
            Tipps und Best Practices
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">💡</span>
                Tipps für Erfolg
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✦</span>
                  <span>Kurze tägliche Übung ist besser als lange sporadische Sitzungen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✦</span>
                  <span>Feiern Sie den Fortschritt, nicht nur die Perfektion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✦</span>
                  <span>Variieren Sie die Übungsmethoden, um das Interesse aufrechtzuerhalten</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✦</span>
                  <span>Verknüpfen Sie mit anderen Bereichen: Kunst, Musik, Sport</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✦</span>
                  <span>Beziehen Sie Familien mit Aktivitäten für zu Hause ein</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✦</span>
                  <span>Nutzen Sie Technologie als Ergänzung, nicht als Ersatz</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">🎯</span>
                Empfohlene Reihenfolge
              </h3>
              <div className="space-y-3">
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1</span>
                  <span className="text-gray-700">Reihen 1, 2, 10, 5</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2</span>
                  <span className="text-gray-700">Kommutativeigenschaft (reduziert die Last)</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">3</span>
                  <span className="text-gray-700">4er-Reihe (2er verdoppeln)</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">4</span>
                  <span className="text-gray-700">9er-Reihe (spezielle Muster)</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">5</span>
                  <span className="text-gray-700">3er und 6er-Reihen (Dreifachbeziehung)</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">6</span>
                  <span className="text-gray-700">7er und 8er-Reihen (herausfordernder)</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">7</span>
                  <span className="text-gray-700">11er und 12er-Reihen (Experten-Muster)</span>
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
            Zusätzliche Ressourcen
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Link 
              href="/1-10" 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-4xl mb-3">📘</div>
              <h3 className="font-bold text-gray-900 mb-2">Reihen 1-10</h3>
              <p className="text-sm text-gray-600">Grundlegende Ressourcen</p>
            </Link>

            <Link 
              href="/11-20" 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-4xl mb-3">📗</div>
              <h3 className="font-bold text-gray-900 mb-2">Reihen 11-20</h3>
              <p className="text-sm text-gray-600">Mittleres Niveau</p>
            </Link>

            <Link 
              href="/fuer-schueler" 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-4xl mb-3">👨‍🎓</div>
              <h3 className="font-bold text-gray-900 mb-2">Für Schüler</h3>
              <p className="text-sm text-gray-600">Lernleitfaden</p>
            </Link>

            <Link 
              href="/fuer-eltern" 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-4xl mb-3">👨‍👩‍👧</div>
              <h3 className="font-bold text-gray-900 mb-2">Für Eltern</h3>
              <p className="text-sm text-gray-600">Unterstützung zu Hause</p>
            </Link>
          </div>

          <div className="mt-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl shadow-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Benötigen Sie weitere Hilfe?
            </h3>
            <p className="text-lg mb-6">
              Erkunden Sie unsere einzelnen Reihen für spezifische Ressourcen, 
              herunterladbare Übungen und interaktive Aktivitäten.
            </p>
            <Link 
              href="/"
              className="inline-block bg-white text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
            >
              Alle Reihen ansehen
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

