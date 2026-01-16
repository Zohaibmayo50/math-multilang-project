export default function HowToLearn() {
  return (
    <section className="section-container bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-slate-900 mb-12 text-center">
          Wie lernt man das Einmaleins effektiv?
        </h2>
        
        <div className="space-y-12">
          <article>
            <h3 className="text-slate-900 mb-4 flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                1
              </span>
              <span>Durch Verstehen von Mustern lernen</span>
            </h3>
            <div className="ml-11 space-y-4 text-slate-700">
              <p>
                Im Einmaleins gibt es viele Muster und Ordnungen. Das Entdecken 
                dieser Muster bietet logisches Verständnis statt bloßes Auswendiglernen:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Vielfache von 2:</strong> Sind immer gerade Zahlen (2, 4, 6, 8...)
                </li>
                <li>
                  <strong>Vielfache von 5:</strong> Enden immer auf 0 oder 5 (5, 10, 15, 20...)
                </li>
                <li>
                  <strong>Vielfache von 9:</strong> Die Quersumme ist immer durch 9 teilbar 
                  (18: 1+8=9, 27: 2+7=9)
                </li>
                <li>
                  <strong>Vielfache von 10:</strong> Enden immer auf 0 (10, 20, 30...)
                </li>
                <li>
                  <strong>Kommutativgesetz:</strong> 3 × 4 = 4 × 3 (Die Reihenfolge beeinflusst das Ergebnis nicht)
                </li>
              </ul>
              <p>
                Das Verstehen dieser Muster ermöglicht es, die grundlegende Logik zu erfassen, 
                anstatt fast 100 Multiplikationswerte auswendig zu lernen.
              </p>
            </div>
          </article>
          
          <article>
            <h3 className="text-slate-900 mb-4 flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-educational-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                2
              </span>
              <span>Schrittweises und wiederholtes Lernen</span>
            </h3>
            <div className="ml-11 space-y-4 text-slate-700">
              <p>
                Es ist weder möglich noch notwendig, das Einmaleins an einem Tag zu lernen. 
                Der effektivste Ansatz ist schrittweises und regelmäßiges Üben:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Beginne mit kleinen Schritten:</strong> Fange zunächst mit einfachen 
                  Zahlen wie 1, 2, 5 und 10 an
                </li>
                <li>
                  <strong>Täglich 10-15 Minuten:</strong> Kurzes und regelmäßiges Einmaleins üben ist 
                  effektiver als lange Einzelsitzungen
                </li>
                <li>
                  <strong>Vorwissen festigen:</strong> Wiederhole das Gelernte, bevor du zu einer 
                  neuen Zahl übergehst
                </li>
                <li>
                  <strong>Mit Intervallen üben:</strong> Steigere die Merkfähigkeit durch Wiederholung 
                  nach einer Woche, einem Monat
                </li>
              </ul>
              <p>
                Regelmäßige Wiederholung erleichtert den Übergang von Informationen vom 
                Kurzzeitgedächtnis ins Langzeitgedächtnis und unterstützt dauerhaftes Lernen.
              </p>
            </div>
          </article>
          
          <article>
            <h3 className="text-slate-900 mb-4 flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                3
              </span>
              <span>Durch Üben lernen</span>
            </h3>
            <div className="ml-11 space-y-4 text-slate-700">
              <p>
                Die Theorie zu verstehen ist wichtig, aber ohne Übung erfolgt kein 
                dauerhaftes Lernen. Vorteile des Übens:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Aktives Abrufen:</strong> Aktiv versuchen sich zu erinnern, statt 
                  passiv zu lesen, stärkt das Gehirn
                </li>
                <li>
                  <strong>Fehleranalyse:</strong> Identifiziere deine Schwachstellen durch Untersuchung 
                  der falsch gelösten Aufgaben
                </li>
                <li>
                  <strong>Geschwindigkeitsentwicklung:</strong> Mit regelmäßiger Übung gewinnst du sowohl 
                  Genauigkeit als auch Geschwindigkeit
                </li>
                <li>
                  <strong>Anwendung in verschiedenen Kontexten:</strong> Nutze sie in unterschiedlichen 
                  Umgebungen wie Fragen, Spielen, Alltagsproblemen
                </li>
              </ul>
              <p>
                Nur durch Lesen oder Hören gelernte Informationen ohne Übung werden 
                schnell vergessen. Aktive Anwendung ist der grundlegende Schlüssel zum Lernen.
              </p>
            </div>
          </article>
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-primary-50 to-educational-50 border border-primary-200 rounded-lg p-8">
          <h4 className="text-xl font-semibold text-slate-900 mb-4">
            Wichtiger Hinweis
          </h4>
          <p className="text-slate-700">
            Jedes Kind hat ein unterschiedliches Lerntempo. Während einige es in einer Woche 
            lernen, können andere mehrere Monate brauchen. Wichtig sind Kontinuität, 
            Geduld und Fortschritte mit den richtigen Methoden. Verfolge einen unterstützenden 
            Ansatz, anstatt Druck auszuüben.
          </p>
        </div>
      </div>
    </section>
  )
}
