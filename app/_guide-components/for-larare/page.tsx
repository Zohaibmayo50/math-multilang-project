import Link from 'next/link'
import Header from '@/app/components/sv/Header'
import Footer from '@/app/components/sv/Footer'

export const metadata = {
  title: 'För Lärare: Multiplikationstabell Guide | Klassrumsundervisning Material',
  description: 'Professionella resurser för undervisning i multiplikationstabeller i klassrummet, pedagogiska strategier, aktivitetsförslag och bedömningsverktyg.',
  keywords: 'multiplikationstabell undervisning, klassrumsaktiviteter, pedagogiska metoder, matematik undervisning',
  alternates: {
    canonical: '/for-larare',
  },
}

export default function ForTeachers() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white pt-20 pb-12 md:pt-24 md:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
                För Lärare: Multiplikationstabell Guide
              </h1>
              <p className="text-lg sm:text-xl text-emerald-100 mb-6 md:mb-8">
                Professionella resurser, pedagogiska strategier och aktivitetsförslag för undervisning i multiplikationstabeller i klassrummet.
              </p>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                <span className="text-emerald-100">Professionellt stöd för effektiv undervisning</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Pedagogical Approach */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Pedagogisk Metod
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">
                Undervisning i multiplikationstabeller bör byggas på konceptuell förståelse, inte bara utantillinlärning. 
                Det är viktigt att eleverna förstår innebörden av multiplikation och utvecklar olika strategier.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-500">
                  <h3 className="text-lg font-semibold text-emerald-900 mb-3">Från Konkret till Abstrakt</h3>
                  <p className="text-slate-700">Börja med fysiska material, gå via visuella representationer till abstrakta numeriska operationer.</p>
                </div>
                <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500">
                  <h3 className="text-lg font-semibold text-teal-900 mb-3">Strategiutveckling</h3>
                  <p className="text-slate-700">Utveckla flexibelt tänkande genom att visa eleverna flera lösningsvägar.</p>
                </div>
                <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-500">
                  <h3 className="text-lg font-semibold text-cyan-900 mb-3">Meningsfullt Lärande</h3>
                  <p className="text-slate-700">Relatera multiplikationstabeller till verkliga problem och skapa sammanhang.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Teaching Methods */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Undervisningsmetoder
            </h2>
            <div className="space-y-4 md:space-y-6">
              {/* Method 1 */}
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📦</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Matriser och Grupperingar</h3>
                    <p className="text-slate-700 mb-4">
                      Gruppera objekt i matriser för att visa att multiplikation är upprepad addition.
                    </p>
                    <div className="bg-emerald-50 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-emerald-900 mb-2">Tillämpning:</h4>
                      <ul className="space-y-2 text-slate-700">
                        <li className="flex items-start">
                          <span className="text-emerald-600 mr-2">•</span>
                          <span>Be eleverna sitta i 4 rader × 6 elever</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-600 mr-2">•</span>
                          <span>Arrangera block eller räknare i matriser</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-600 mr-2">•</span>
                          <span>Rita punktmatriser på tavlan för visualisering</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Method 2 */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔢</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Areamodell (Area Model)</h3>
                    <p className="text-slate-700 mb-4">
                      Visualisera multiplikation med rektangulära ytor.
                    </p>
                    <div className="bg-teal-50 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-teal-900 mb-2">Exempel:</h4>
                      <p className="text-slate-700 mb-3">För 5 × 3:</p>
                      <div className="bg-white p-4 rounded border-2 border-teal-200 inline-block">
                        <div className="grid grid-cols-5 gap-1">
                          {[...Array(15)].map((_, i) => (
                            <div key={i} className="w-8 h-8 bg-teal-200 border border-teal-400"></div>
                          ))}
                        </div>
                        <p className="text-center mt-2 text-sm text-slate-600">5 kolumner × 3 rader = 15 enhetsrutor</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Method 3 */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">➗</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Uppdelningsstrategi</h3>
                    <p className="text-slate-700 mb-4">
                      Lös komplexa multiplikationer genom att dela upp dem i enklare delar.
                    </p>
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-cyan-900 mb-2">Exempel: 7 × 8</h4>
                      <div className="space-y-2 text-slate-700">
                        <p>• Metod 1: (5 × 8) + (2 × 8) = 40 + 16 = 56</p>
                        <p>• Metod 2: (7 × 5) + (7 × 3) = 35 + 21 = 56</p>
                        <p>• Metod 3: (7 × 10) - (7 × 2) = 70 - 14 = 56</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Method 4 */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Kommutativa Lagen (Commutative Property)</h3>
                    <p className="text-slate-700 mb-4">
                      Visa eleverna att 3 × 4 och 4 × 3 är samma sak och halvera inlärningsbördan.
                    </p>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="text-slate-700">
                        <strong>Tips:</strong> Vänd ett fysiskt material (t.ex. kortmatris) 90 grader för att 
                        visuellt demonstrera den kommutativa lagen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Classroom Activities */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Klassrumsaktivitetsförslag
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {/* Activity 1 */}
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900">Multiplikationstabell Bingo</h3>
                </div>
                <p className="text-slate-700 mb-3">
                  Ge varje elev ett 4×4 eller 5×5 bingokort. Läs upp multiplikationsfrågor, 
                  eleverna markerar svaret på sina kort.
                </p>
                <div className="bg-emerald-50 p-3 rounded-lg text-sm">
                  <p className="font-semibold text-emerald-900 mb-1">Mål:</p>
                  <p className="text-slate-700">Snabb återkallning, uppmärksamhet, rolig repetition</p>
                </div>
              </div>

              {/* Activity 2 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">Multiplikationshörn</h3>
                </div>
                <p className="text-slate-700 mb-3">
                  Tilldela olika tal (t.ex. 6, 7, 8, 9) till klassrummets fyra hörn. 
                  Säg en faktor, eleverna springer till hörnet med rätt svar.
                </p>
                <div className="bg-teal-50 p-3 rounded-lg text-sm">
                  <p className="font-semibold text-teal-900 mb-1">Mål:</p>
                  <p className="text-slate-700">Kinetiskt lärande, snabbtänkande, energiutsläpp</p>
                </div>
              </div>

              {/* Activity 3 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">Multiplikationsdomino</h3>
                </div>
                <p className="text-slate-700 mb-3">
                  Varje kort har en multiplikationsfråga på ena sidan och svaret på en annan fråga på andra sidan. 
                  Eleverna matchar som domino och skapar en kedja.
                </p>
                <div className="bg-cyan-50 p-3 rounded-lg text-sm">
                  <p className="font-semibold text-cyan-900 mb-1">Mål:</p>
                  <p className="text-slate-700">Problemlösning, samarbete, logiskt tänkande</p>
                </div>
              </div>

              {/* Activity 4 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    4
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">Verkliga Problem</h3>
                </div>
                <p className="text-slate-700 mb-3">
                  Be eleverna skapa multiplikationsproblem från sina egna liv 
                  (t.ex: 6 rader i klassrummet, 4 böcker i varje rad).
                </p>
                <div className="bg-blue-50 p-3 rounded-lg text-sm">
                  <p className="font-semibold text-blue-900 mb-1">Mål:</p>
                  <p className="text-slate-700">Kontextskapande, kreativitet, meningsfullt lärande</p>
                </div>
              </div>

              {/* Activity 5 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    5
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">Multiplikationskonst</h3>
                </div>
                <p className="text-slate-700 mb-3">
                  Rita rektanglar på rutat papper för att visualisera multiplikationsresultat. 
                  Förvandla till mönster med olika färger.
                </p>
                <div className="bg-indigo-50 p-3 rounded-lg text-sm">
                  <p className="font-semibold text-indigo-900 mb-1">Mål:</p>
                  <p className="text-slate-700">Visuell-rumslig intelligens, integration med konst</p>
                </div>
              </div>

              {/* Activity 6 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    6
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">Multiplikationskedjetävling</h3>
                </div>
                <p className="text-slate-700 mb-3">
                  I grupper löser varje elev en multiplikationsfråga och skickar resultatet till nästa 
                  kompis. Snabbaste gruppen vinner.
                </p>
                <div className="bg-purple-50 p-3 rounded-lg text-sm">
                  <p className="font-semibold text-purple-900 mb-1">Mål:</p>
                  <p className="text-slate-700">Teamwork, hastighet, motivation</p>
                </div>
              </div>
            </div>
          </section>

          {/* Differentiated Instruction */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Differentierad Undervisning
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">
                Varje elevs inlärningshastighet och stil är olika. Utveckla strategier som passar 
                elever på olika nivåer i klassrummet.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {/* Struggling Students */}
                <div className="bg-red-50 p-6 rounded-lg border-t-4 border-red-400">
                  <h3 className="text-lg font-semibold text-red-900 mb-4">Kämpande elever</h3>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Använd mer konkret material</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Undervisa i mindre grupper (2-5)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Tillhandahåll multiplikationstabelldiagram</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Gör upprepad övning och förstärkning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Ge individuellt eller smågruppsstöd</span>
                    </li>
                  </ul>
                </div>

                {/* On-Level Students */}
                <div className="bg-yellow-50 p-6 rounded-lg border-t-4 border-yellow-400">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-4">Elever på rätt nivå</h3>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Balanserad användning av konkret och abstrakt material</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Samarbetsaktiviteter</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Spel och tävlingar</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Undervisning i olika strategier</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Regelbunden utvärdering och återkoppling</span>
                    </li>
                  </ul>
                </div>

                {/* Advanced Students */}
                <div className="bg-green-50 p-6 rounded-lg border-t-4 border-green-400">
                  <h3 className="text-lg font-semibold text-green-900 mb-4">Avancerade elever</h3>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Komplexa problem och utvidgningar</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Multiplikation med tal större än 10 (11-20)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Upptäcka matematiska mönster</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Ledarroller (kamratundervisning)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Projektbaserat lärande</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Assessment Tools */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Bedömnings- och Utvärderingsverktyg
            </h2>
            <div className="space-y-4 md:space-y-6">
              {/* Formative Assessment */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Formativ Bedömning</h3>
                <p className="text-slate-700 mb-4">
                  För att följa elevers framsteg under inlärningsprocessen och justera undervisningen:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-emerald-900 mb-2">Exitkort</h4>
                    <p className="text-sm text-slate-700">
                      Kort med 3-5 multiplikationsfrågor i slutet av lektionen. Ger omedelbar förståelsekontroll.
                    </p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-emerald-900 mb-2">Whiteboardsvar</h4>
                    <p className="text-sm text-slate-700">
                      Alla elever visar sina svar på mini-whiteboards samtidigt. Övervakning av hela klassen.
                    </p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-emerald-900 mb-2">Observationsanteckningar</h4>
                    <p className="text-sm text-slate-700">
                      Registrera elevers strategier och svårigheter under aktiviteter.
                    </p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-emerald-900 mb-2">Kamratbedömning</h4>
                    <p className="text-sm text-slate-700">
                      Elever kontrollerar varandras arbete, förstärker inlärningen.
                    </p>
                  </div>
                </div>
              </div>

              {/* Summative Assessment */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Summativ Bedömning</h3>
                <p className="text-slate-700 mb-4">
                  För att utvärdera läranderesultat vid specifika perioder:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 bg-teal-50 p-4 rounded-lg">
                    <svg className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-teal-900 mb-1">Veckotest</h4>
                      <p className="text-sm text-slate-700">Korta test med 20 frågor varje vecka som täcker inlärda tabeller.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-teal-50 p-4 rounded-lg">
                    <svg className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-teal-900 mb-1">Tidstester</h4>
                      <p className="text-sm text-slate-700">Snabba återkallningstest som ska slutföras inom 1-2 minuter.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-teal-50 p-4 rounded-lg">
                    <svg className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-teal-900 mb-1">Problemlösningsuppgifter</h4>
                      <p className="text-sm text-slate-700">Mät förmågan att tillämpa multiplikationstabeller i verkliga problem.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Tracking */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8 border-2 border-purple-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Framstegsuppföljning</h3>
                <p className="text-slate-700 mb-4">
                  Håll individuella framstegsgraf för varje elev:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Vilka tabeller de behärskar, vilka de kämpar med</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Utvecklingstrend över tid (noggrannhet och hastighet)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Strategier de använder och föredragna metoder</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Common Misconceptions */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Vanliga Missuppfattningar och Lösningar
            </h2>
            <div className="space-y-4">
              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer group">
                <summary className="text-lg font-semibold text-slate-900 flex items-center justify-between">
                  <span>"Multiplikation gör alltid större"</span>
                  <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-slate-700">
                  <p className="mb-2"><strong>Missuppfattning:</strong> Elever tror att resultatet av multiplikation alltid är större än faktorerna.</p>
                  <p className="mb-2"><strong>Verklighet:</strong> Multiplikation med 1 ändrar inte resultatet, multiplikation med 0 ger noll.</p>
                  <p className="bg-amber-50 p-3 rounded"><strong>Lösning:</strong> Visa tydligt dessa specialfall med exempel som 0×5=0 och 1×7=7.</p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer group">
                <summary className="text-lg font-semibold text-slate-900 flex items-center justify-between">
                  <span>"Ordningen av faktorer spelar roll"</span>
                  <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-slate-700">
                  <p className="mb-2"><strong>Missuppfattning:</strong> Att tro att 3×4 och 4×3 är olika.</p>
                  <p className="mb-2"><strong>Verklighet:</strong> Enligt kommutativa lagen ger båda samma resultat.</p>
                  <p className="bg-amber-50 p-3 rounded"><strong>Lösning:</strong> Vänd fysiskt matrismodeller för att ge visuellt bevis.</p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer group">
                <summary className="text-lg font-semibold text-slate-900 flex items-center justify-between">
                  <span>"Multiplikation är bara utantillärning"</span>
                  <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-slate-700">
                  <p className="mb-2"><strong>Missuppfattning:</strong> Uppfattningen att multiplikationstabeller bara är en lista att memorera.</p>
                  <p className="mb-2"><strong>Verklighet:</strong> Multiplikation innehåller mönster, relationer och strategier.</p>
                  <p className="bg-amber-50 p-3 rounded"><strong>Lösning:</strong> Utveckla flexibelt tänkande genom att lära ut strategier som uppdelning och kommutativa lagen.</p>
                </div>
              </details>
            </div>
          </section>

          {/* Resources */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Ytterligare Resurser och Material
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Utskrivbart Material</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">📄</span>
                      <span>Multiplikationstabelldiagram (1-10, 1-12)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">📄</span>
                      <span>Tomma multiplikationstabellmallar</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">📄</span>
                      <span>Flashkortsset</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">📄</span>
                      <span>Arbetsblad (olika nivåer)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Digitala Verktyg</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2">💻</span>
                      <span>Interaktiva spel på denna webbplats</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2">💻</span>
                      <span>Online övningsplattformar</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2">💻</span>
                      <span>Pedagogiska matematikspel</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2">💻</span>
                      <span>Framstegsuppföljningsappar</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg shadow-lg p-6 sm:p-8 text-white text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Börja Använda i Ditt Klassrum!
            </h2>
            <p className="text-base sm:text-lg text-emerald-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Ge dina elever en effektiv, rolig och meningsfull inlärningsupplevelse av 
              multiplikationstabeller genom att använda denna plattform i klassrummet.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link 
                href="/sv/multiplikationstabeller/1-10"
                className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors inline-flex items-center justify-center"
              >
                Utforska Tabellerna
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/sv/multiplikationstabeller"
                className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-800 transition-colors inline-flex items-center justify-center"
              >
                Tillbaka till Startsidan
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
