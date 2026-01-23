import Link from 'next/link'
import Footer from '@/app/components/Footer'

export const metadata = {
  title: 'För Föräldrar: Multiplikationstabell Guide | Hur Du Kan Hjälpa Ditt Barn',
  description: 'Hur kan du stödja ditt barns inlärning av multiplikationstabellen? Effektiva strategier, motivationstekniker och hemaktiviteter.',
  keywords: 'multiplikationstabell undervisning, föräldraguide, barnmatematik, hemuppgifter',
  alternates: {
    canonical: '/for-foraldrar',
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
                För Föräldrar: Multiplikationstabell Guide
              </h1>
              <p className="text-lg sm:text-xl text-purple-100 mb-6 md:mb-8">
                Hur kan du stödja ditt barns inlärning av multiplikationstabellen? 
                Denna guide innehåller effektiva strategier och praktiska förslag.
              </p>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                <span className="text-purple-100">Din guide för ditt barns framgång</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Why It Matters */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Varför är det Viktigt?
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4">
                Multiplikationstabellen är ett av de viktigaste stegen i ditt barns matematikresa. 
                Det är kritiskt inte bara för matematik, utan också för problemlösning, logiskt tänkande och självförtroendesutveckling.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">Grundläggande Färdighet</h3>
                  <p className="text-slate-700">Skapar en solid grund för alla framtida matematikämnen.</p>
                </div>
                <div className="bg-pink-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-pink-900 mb-2">Självförtroende</h3>
                  <p className="text-slate-700">Framgång ökar ditt barns självförtroende i matematik.</p>
                </div>
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-indigo-900 mb-2">Vardagsliv</h3>
                  <p className="text-slate-700">Används i dagliga aktiviteter som shopping, mätning och tidshantering.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Learning Strategies */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Effektiva Inlärningsstrategier
            </h2>
            <div className="space-y-4 md:space-y-6">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-purple-600">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Gå Framåt med Små Steg</h3>
                    <p className="text-slate-700 mb-4">
                      Försök inte att lära ut alla tabeller på en gång. Börja med enkla tabeller (1, 2, 5, 10).
                    </p>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Fokusera bara på en tabell per dag</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Förstärk gamla tabeller innan du går vidare till nya</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Dela upp svåra tabeller i delar</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-pink-600">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Integrera i Vardagen</h3>
                    <p className="text-slate-700 mb-4">
                      Lär ut multiplikationstabellen med verkliga situationer istället för abstrakta tal.
                    </p>
                    <div className="bg-pink-50 p-4 rounded-lg mb-4">
                      <p className="text-slate-700 font-medium mb-2">Exempel:</p>
                      <ul className="space-y-2 text-slate-600">
                        <li>"Det är 4 personer, om alla får 3 chokladbitar, hur många chokladbitar behöver vi?"</li>
                        <li>"Om du läser 5 sidor varje dag i 6 dagar, hur många sidor har du läst totalt?"</li>
                        <li>"Om en produkt kostar 7 kronor och vi köper 4 stycken, hur mycket betalar vi?"</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-indigo-600">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Använd Visuella Verktyg</h3>
                    <p className="text-slate-700 mb-4">
                      Använd objekt, ritningar och modeller för att konkretisera abstrakta koncept.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-indigo-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-indigo-900 mb-2">Fysiska Material</h4>
                        <ul className="space-y-1 text-slate-600">
                          <li>• Legoblock</li>
                          <li>• Stenar eller knappar</li>
                          <li>• Fruktbitar</li>
                        </ul>
                      </div>
                      <div className="bg-indigo-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-indigo-900 mb-2">Ritningar och Diagram</h4>
                        <ul className="space-y-1 text-slate-600">
                          <li>• Rita punkter i matriser</li>
                          <li>• Rektangulära ytor</li>
                          <li>• Tallinjer</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-emerald-600">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Tillämpa Spelifiering</h3>
                    <p className="text-slate-700 mb-4">
                      Öka motivationen genom att göra lärandet roligt.
                    </p>
                    <div className="space-y-3">
                      <div className="bg-emerald-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-emerald-900 mb-2">Kortspel</h4>
                        <p className="text-slate-600">Dra två kort och beräkna produkten. Rätt svar ger poäng!</p>
                      </div>
                      <div className="bg-emerald-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-emerald-900 mb-2">Tidsrace</h4>
                        <p className="text-slate-600">Mät med stoppur hur många frågor som kan besvaras rätt på 1 minut.</p>
                      </div>
                      <div className="bg-emerald-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-emerald-900 mb-2">Belöningssystem</h4>
                        <p className="text-slate-600">Samla klistermärken eller stjärnor för varje fullbordad tabell.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Motivation Tips */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Motivationstekniker
            </h2>
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                    <svg className="w-6 h-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Gör Det Här
                  </h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Berömma ditt barns ansträngningar, betona processen inte resultatet</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Fira små framgångar</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Var tålmodig och håll en positiv attityd</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Inkludera lärande i dagliga rutiner</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Se misstag som lärandemöjligheter</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                    <svg className="w-6 h-6 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Undvik Detta
                  </h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span>Jämför inte med andra barn</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span>Utöva inte press eller bestraffa</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span>Ha inte för långa studiesessioner</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span>Lita inte bara på utantillinlärning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span>Använd inte negativt språk (som "Matematik är svårt")</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Home Activities */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Hemövningsaktiviteter
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3">Köksmatematik</h3>
                <p className="text-slate-700 mb-3">
                  Använd multiplikationstabellen när du lagar mat:
                </p>
                <ul className="text-slate-600 space-y-1 text-sm">
                  <li>• "4 personer, 2 kakor var = 4 × 2 = 8 kakor"</li>
                  <li>• Multiplicera receptmängder med 2 eller 3</li>
                  <li>• Beräkna antal tallrikar vid bordsdukning</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Shoppingberäkningar</h3>
                <p className="text-slate-700 mb-3">
                  Öva multiplikation i affären eller butiken:
                </p>
                <ul className="text-slate-600 space-y-1 text-sm">
                  <li>• "En produkt som kostar 3 kronor, 4 stycken, hur mycket kostar det?"</li>
                  <li>• Rabattberäkningar</li>
                  <li>• Uppskattning av totalpris</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Tidshantering</h3>
                <p className="text-slate-700 mb-3">
                  Öva med tids- och varaktighetsberäkningar:
                </p>
                <ul className="text-slate-600 space-y-1 text-sm">
                  <li>• "Om du läser 3 sidor på 5 minuter, hur många på 15 minuter?"</li>
                  <li>• Dagliga rutinberäkningar</li>
                  <li>• Varaktighetsmultiplikatorer</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Lektid</h3>
                <p className="text-slate-700 mb-3">
                  Förstärk med roliga spel:
                </p>
                <ul className="text-slate-600 space-y-1 text-sm">
                  <li>• Frågor och svar under bilresor</li>
                  <li>• Kasta tärning och beräkna multiplikation</li>
                  <li>• Pedagogiska onlinespel</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Weekly Plan */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Exempel på Veckoplan
            </h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    <tr>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-base">Dag</th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-base">Aktivitet</th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-base">Varaktighet</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-3 sm:px-6 py-3 sm:py-4 font-semibold text-slate-900 text-sm sm:text-base">Måndag</td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-slate-700 text-sm sm:text-base">Lär ny tabell (med visuella verktyg)</td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-slate-600 text-sm sm:text-base whitespace-nowrap">15 minuter</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-3 sm:px-6 py-3 sm:py-4 font-semibold text-slate-900 text-sm sm:text-base">Tisdag</td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-slate-700 text-sm sm:text-base">Repetera föregående dags tabell</td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-slate-600 text-sm sm:text-base whitespace-nowrap">10 minuter</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-3 sm:px-6 py-3 sm:py-4 font-semibold text-slate-900 text-sm sm:text-base">Onsdag</td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-slate-700 text-sm sm:text-base">Öva med spel</td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-slate-600 text-sm sm:text-base whitespace-nowrap">20 minuter</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-3 sm:px-6 py-3 sm:py-4 font-semibold text-slate-900 text-sm sm:text-base">Torsdag</td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-slate-700 text-sm sm:text-base">Verkliga problem</td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-slate-600 text-sm sm:text-base whitespace-nowrap">15 minuter</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-3 sm:px-6 py-3 sm:py-4 font-semibold text-slate-900 text-sm sm:text-base">Fredag</td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-slate-700 text-sm sm:text-base">Granska alla veckans tabeller</td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-slate-600 text-sm sm:text-base whitespace-nowrap">15 minuter</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-3 sm:px-6 py-3 sm:py-4 font-semibold text-slate-900 text-sm sm:text-base">Lördag</td>
                      <td className="px-6 py-4 text-slate-700">Roliga spel och tävlingar</td>
                      <td className="px-6 py-4 text-slate-600">30 minuter</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-slate-900">Söndag</td>
                      <td className="px-6 py-4 text-slate-700">Vila (valfri lättrepetition)</td>
                      <td className="px-6 py-4 text-slate-600">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
              <p className="text-sm text-yellow-800">
                <strong>Obs:</strong> Denna plan bör vara flexibel. Justera varaktigheten enligt ditt barns trötthetsnivå.
              </p>
            </div>
          </section>

          {/* Progress Tracking */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Framstegsuppföljningsmetoder
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">1. Visuell Framstegstabell</h3>
                  <p className="text-slate-700 mb-3">
                    Skapa en tabell som kan hängas på väggen. Lägg till en klistermärke eller stjärna för varje inlärd tabell.
                  </p>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-sm text-slate-600">
                      Exempel: En tabell med 10 rutor för tabeller 1-10, färglägg en ruta för varje framgångsrik tabell.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">2. Veckovis Minitest</h3>
                  <p className="text-slate-700 mb-3">
                    Gör ett 5-minuters quiz varje helg. Registrera resultaten.
                  </p>
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <p className="text-sm text-slate-600">
                      Tips: Ge positiv återkoppling som "du har förbättrats så mycket denna vecka" istället för antal rätt/fel.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">3. Tidsspårning</h3>
                  <p className="text-slate-700 mb-3">
                    Låt barnet lösa samma frågor vid olika tillfällen och mät tiden. Hastighetsökning ger motivation.
                  </p>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <p className="text-sm text-slate-600">
                      Viktigt: Betona noggrannhet mer än hastighet. Hastigheten kommer naturligt med tiden.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Common Challenges */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Vanliga Utmaningar och Lösningar
            </h2>
            <div className="space-y-4">
              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer group">
                <summary className="text-lg font-semibold text-slate-900 flex items-center justify-between">
                  <span>Mitt barn är rädd för/undviker multiplikationstabellen</span>
                  <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-slate-700 space-y-2">
                  <p><strong>Lösning:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Bygg självförtroende genom att börja med enkla tabeller (1, 2, 5, 10)</li>
                    <li>Förstora framgångar, fira små steg</li>
                    <li>Kalla det "spel" eller "aktivitet" istället för matematik</li>
                    <li>Utöva inte press, var tålmodig</li>
                  </ul>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer group">
                <summary className="text-lg font-semibold text-slate-900 flex items-center justify-between">
                  <span>Glömmer inlärda tabeller</span>
                  <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-slate-700 space-y-2">
                  <p><strong>Lösning:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Repetera regelbundet (korta dagliga sessioner)</li>
                    <li>Förstärk med olika metoder (skriva, säga, visuellt)</li>
                    <li>Skapa möjligheter att använda i vardagen</li>
                    <li>Tillämpa system för spridd repetition (1 dag, 3 dagar, 1 vecka)</li>
                  </ul>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer group">
                <summary className="text-lg font-semibold text-slate-900 flex items-center justify-between">
                  <span>Fastnar på vissa tabeller (särskilt 7, 8, 9)</span>
                  <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-slate-700 space-y-2">
                  <p><strong>Lösning:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Dela dessa tabeller i mindre delar</li>
                    <li>Lär ut speciella tips och mönster</li>
                    <li>Använd fingermetoden för 9-tabellen</li>
                    <li>Ägna mer tid åt svåra tabeller</li>
                    <li>Visa relationer (8×6 = 4×6 + 4×6)</li>
                  </ul>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer group">
                <summary className="text-lg font-semibold text-slate-900 flex items-center justify-between">
                  <span>Vi kan inte hitta tid att studera</span>
                  <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-slate-700 space-y-2">
                  <p><strong>Lösning:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Integrera i dagliga rutiner (vid frukost, i bilen, före sänggåendet)</li>
                    <li>Gör korta sessioner (10-15 minuter räcker)</li>
                    <li>Använd naturligt i dagliga aktiviteter</li>
                    <li>Kvalitet är viktigare än längd</li>
                  </ul>
                </div>
              </details>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-lg p-6 sm:p-8 text-white text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Börja Omedelbart!
            </h2>
            <p className="text-base sm:text-lg text-purple-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Börja multiplikationstabellresan med ditt barn idag. 
              Kom ihåg, varje barn lär sig i sin egen takt och ditt stöd är den mest värdefulla resursen.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link 
                href="/1-10"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center justify-center"
              >
                Börja med Tabellerna
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/"
                className="bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors inline-flex items-center justify-center"
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
