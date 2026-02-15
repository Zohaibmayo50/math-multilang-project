import Link from 'next/link'
import Footer from '@/app/components/Footer'

export const metadata = {
  title: 'Einmaleins-Leitfaden für Eltern | Unterstützen Sie das Lernen zu Hause',
  description: 'Wie Sie Ihrem Kind beim Lernen des Einmaleins zu Hause helfen können. Praktische Tipps, Lernspiele und Motivationsstrategien.',
  keywords: 'Kindern beim Einmaleins helfen, Mathe zu Hause, Elternbildung, Lernaktivitäten',
  alternates: {
    canonical: '/fuer-eltern',
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
                Einmaleins-Leitfaden für Eltern
              </h1>
              <p className="text-lg sm:text-xl text-purple-100 mb-6 md:mb-8">
                Wie unterstützen Sie Ihr Kind beim Lernen des Einmaleins? 
                Dieser Leitfaden enthält effektive Strategien und praktische Tipps.
              </p>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                <span className="text-purple-100">Ihr Leitfaden für den Erfolg Ihres Kindes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Why It Matters */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Warum ist es wichtig?
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4">
                Das Einmaleins ist einer der wichtigsten Schritte in der mathematischen Entwicklung Ihres Kindes. 
                Nicht nur für die Mathematik, sondern auch für die Entwicklung von Problemlösungsfähigkeiten, logischem Denken und Selbstvertrauen ist es von entscheidender Bedeutung.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">Grundlage für höhere Mathematik</h3>
                  <p className="text-slate-700 text-sm">Division, Brüche, Algebra - alle basieren auf dem Einmaleins.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Schulisches Selbstvertrauen</h3>
                  <p className="text-slate-700 text-sm">Erfolg beim Einmaleins stärkt das allgemeine Vertrauen in der Schule.</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Fähigkeiten fürs Leben</h3>
                  <p className="text-slate-700 text-sm">Schnelles Rechnen ist beim Einkaufen, Kochen und im Alltag nützlich.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Support Strategies */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Unterstützungsstrategien zu Hause
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                    🎯
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Machen Sie es konkret</h3>
                    <p className="text-slate-700 mb-3">
                      Vermitteln Sie das Einmaleins mit realen Situationen statt abstrakten Zahlen.
                    </p>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>"Wenn du 3 Schachteln hast und in jeder Schachtel 4 Äpfel sind, wie viele Äpfel sind das insgesamt?"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>"Eine Eierschachtel hat 6 Eier. Wie viele Eier sind in 4 Schachteln?"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Verwenden Sie physische Gegenstände (Knöpfe, Süßigkeiten, Spielzeug) zum Visualisieren</span>
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
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Kurze, aber regelmäßige Übung</h3>
                    <p className="text-slate-700 mb-3">
                      Es ist effektiver, jeden Tag 10-15 Minuten zu üben als einmal pro Woche 1 Stunde.
                    </p>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      <li>• Beim Frühstück - 5 schnelle Fragen</li>
                      <li>• Auf dem Weg zur Schule - in 2er-, 5er-Schritten zählen</li>
                      <li>• Vor dem Schlafengehen - 5 Minuten Wiederholung</li>
                      <li>• Am Wochenende - Multiplikationsspiele</li>
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
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Spielerisches Lernen</h3>
                    <p className="text-slate-700 mb-3">
                      Das Lernen in ein Spiel zu verwandeln steigert sowohl die Motivation als auch das Erinnerungsvermögen.
                    </p>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      <li>• Nutzen Sie die Spiele auf dieser Website</li>
                      <li>• Spielen Sie Multiplikations-Kartenspiele</li>
                      <li>• Organisieren Sie Familienwettbewerbe</li>
                      <li>• Bieten Sie kleine Belohnungen für Erfolge an</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Fun Activities */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Lustige Aktivitäten zu Hause
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">🃏 Kartenspiele</h3>
                <div className="space-y-3 text-slate-700 text-sm">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">Multiplikations-Krieg</h4>
                    <p className="text-slate-600">Ziehe zwei Karten und multipliziere sie. Die richtige Antwort gewinnt Punkte!</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">Multiplikations-Memory</h4>
                    <p className="text-slate-600">Kombiniere Fragekarten mit Antwortkarten - wie beim Memory-Spiel!</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">🍳 Mathe in der Küche</h3>
                <div className="space-y-3 text-slate-700 text-sm">
                  <p>Nutzen Sie das Einmaleins beim Kochen:</p>
                  <ul className="space-y-2">
                    <li>• "Wenn wir 2 Eier pro Pfannkuchen brauchen und 4 Pfannkuchen machen, wie viele Eier brauchen wir?"</li>
                    <li>• "Wenn das Rezept für 3 Personen ist und wir 6 sind, wie viel brauchen wir?"</li>
                    <li>• Löffel zählen, Zutaten abmessen</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">🛒 Multiplikations-Übung im Supermarkt</h3>
                <div className="space-y-3 text-slate-700 text-sm">
                  <ul className="space-y-2">
                    <li>• "3 Joghurts kosten je 2€, wie viel insgesamt?"</li>
                    <li>• "Eine Tüte Äpfel enthält 6 Äpfel. Wenn wir 4 Tüten kaufen, wie viele Äpfel?"</li>
                    <li>• Preise vergleichen, Ersparnisse berechnen</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">🎨 Kreative Aktivitäten</h3>
                <div className="space-y-3 text-slate-700 text-sm">
                  <ul className="space-y-2">
                    <li>• Einmaleins-Poster erstellen</li>
                    <li>• Multiplikations-Lieder oder Reime schreiben</li>
                    <li>• Würfel werfen und die Ergebnisse multiplizieren</li>
                    <li>• Geschichten mit Multiplikationsaufgaben erfinden</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Common Challenges */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Häufige Herausforderungen und Lösungen
            </h2>
            <div className="space-y-4">
              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
                <summary className="font-semibold text-slate-900 text-lg flex items-center gap-3">
                  <span className="text-purple-500">❓</span>
                  Mein Kind hat Angst vor/vermeidet das Einmaleins
                </summary>
                <div className="mt-4 text-slate-700 space-y-2 text-sm">
                  <p><strong>Lösung:</strong> Beginnen Sie mit einfachen Reihen (1, 2, 5, 10), um Vertrauen aufzubauen. Konzentrieren Sie sich auf Fortschritt, nicht auf Perfektion. Feiern Sie jeden kleinen Erfolg.</p>
                  <p>Vermeiden Sie Druck oder Angst zu erzeugen. Lernen sollte Spaß machen, nicht stressig sein.</p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
                <summary className="font-semibold text-slate-900 text-lg flex items-center gap-3">
                  <span className="text-blue-500">❓</span>
                  Auswendiglernen, aber versteht das Konzept nicht
                </summary>
                <div className="mt-4 text-slate-700 space-y-2 text-sm">
                  <p><strong>Lösung:</strong> Verwenden Sie konkrete Gegenstände und visuelle Modelle. Zeigen Sie, dass 3×4 "3 Gruppen von 4" oder "4+4+4" bedeutet.</p>
                  <p>Nutzen Sie Anordnungen von Gegenständen, Zeichnungen, Manipulative. Konzeptionelles Verständnis ist wichtiger als mechanisches Auswendiglernen.</p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
                <summary className="font-semibold text-slate-900 text-lg flex items-center gap-3">
                  <span className="text-green-500">❓</span>
                  Verwechselt die Reihen miteinander
                </summary>
                <div className="mt-4 text-slate-700 space-y-2 text-sm">
                  <p><strong>Lösung:</strong> Konzentrieren Sie sich auf eine Reihe zur Zeit. Üben Sie eine Reihe gründlich, bevor Sie zur nächsten übergehen.</p>
                  <p>Verwenden Sie Farbcodes oder visuelle Assoziationen für verschiedene Reihen. Üben Sie die Unterscheidung: "Ist es 3×4 oder 4×3?"</p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
                <summary className="font-semibold text-slate-900 text-lg flex items-center gap-3">
                  <span className="text-yellow-500">❓</span>
                  Vergisst das zuvor Gelernte
                </summary>
                <div className="mt-4 text-slate-700 space-y-2 text-sm">
                  <p><strong>Lösung:</strong> Regelmäßige Wiederholung ist der Schlüssel. Üben Sie früher gelernte Reihen zusammen mit den neuen.</p>
                  <p>Erstellen Sie einen Wiederholungsplan: Jede Woche alte Reihen einbeziehen. Nutzen Sie Spiele, um die Wiederholung unterhaltsam zu gestalten.</p>
                </div>
              </details>
            </div>
          </section>

          {/* Motivation Tips */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Wie Sie die Motivation aufrechterhalten
            </h2>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg shadow-md p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-4">✅ Tun</h3>
                  <ul className="space-y-3 text-slate-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Loben Sie die Anstrengung, nicht nur die richtige Antwort</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Feiern Sie Fortschritte mit kleinen Belohnungen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Machen Sie das Lernen zu einem Spiel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Setzen Sie erreichbare Ziele</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Schaffen Sie eine unterstützende und druckfreie Umgebung</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-pink-900 mb-4">❌ Vermeiden</h3>
                  <ul className="space-y-3 text-slate-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Vergleiche mit Geschwistern oder anderen Kindern</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Druck oder Angst wegen Fehlern erzeugen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Lange, langweilige Übungseinheiten</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Negative Sprache verwenden ("Das ist einfach, warum kannst du das nicht?")</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Sofortige Perfektion erwarten</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-lg p-6 sm:p-8 text-white text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Beginnen Sie heute die Einmaleins-Reise mit Ihrem Kind
            </h2>
            <p className="text-base sm:text-lg text-purple-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Denken Sie daran, jedes Kind lernt in seinem eigenen Tempo. Mit Ihrer Unterstützung und den richtigen Strategien 
              wird Ihr Kind das Einmaleins meistern. Geduld, Übung und Positivität!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/1-10"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center justify-center"
              >
                <span className="mr-2">🎯</span>
                Einmaleins erkunden
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/fuer-schueler"
                className="bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors inline-flex items-center justify-center"
              >
                Leitfaden für Schüler ansehen
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-purple-400">
              <p className="text-purple-100 text-sm">
                💡 <strong>Goldener Tipp:</strong> Ihre positive Einstellung zur Mathematik beeinflusst die Einstellung Ihres Kindes. 
                Zeigen Sie Begeisterung und Ihr Kind wird auch begeistert sein!
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
