import Link from 'next/link'
import Header from '@/app/components/sv/Header'
import Footer from '@/app/components/sv/Footer'


export default function ForStudents() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white pt-20 pb-12 md:pt-24 md:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
                Att Lära Sig Multiplikationstabellen är Jättelätt! 🎯
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 mb-6 md:mb-8">
                Lär dig i din egen takt, ha roligt medan du lär dig och bli en matematikhjälte! 
                Den här guiden hjälper dig att lära dig multiplikationstabellen steg för steg.
              </p>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-blue-100">Du kan också göra det!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Why Learn */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Varför Ska Jag Lära Mig Multiplikationstabellen? 🤔
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">
                Multiplikationstabellen är matematikvärldens superkraft! Här är vad den ger dig:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                    ⚡
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Snabb Beräkning</h3>
                    <p className="text-slate-700">Du kommer att kunna lösa matematikproblem mycket snabbare!</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-2xl">
                    🎮
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Användning i Vardagen</h3>
                    <p className="text-slate-700">Det kommer att vara användbart överallt - vid shopping, i spel, överallt!</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-2xl">
                    🏆
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Ökat Självförtroende</h3>
                    <p className="text-slate-700">Ditt självförtroende i matematik kommer att öka och du blir mer framgångsrik!</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-2xl">
                    🧠
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Hjärnkraft</h3>
                    <p className="text-slate-700">Ditt minne kommer att bli starkare och du lär dig att tänka snabbare!</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Learning Path */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Steg för Steg Lärandeväg 🚀
            </h2>
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border-l-4 border-green-500">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">Börja med Enkla Tabeller (1, 2, 5, 10)</h3>
                    <p className="text-slate-700 mb-3">
                      Att börja med de enklaste tabellerna ger dig självförtroende! Dessa är mycket enkla och du kommer att lära dig dem snabbt.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-900 mb-2">Varför är dessa tabeller lätta?</p>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• <strong>1-tabellen:</strong> Varje tal förblir sig själv! (1×5=5)</li>
                        <li>• <strong>2-tabellen:</strong> Lägg bara till talet två gånger! (2×4 = 4+4 = 8)</li>
                        <li>• <strong>5-tabellen:</strong> Slutar alltid på 5 eller 0!</li>
                        <li>• <strong>10-tabellen:</strong> Lägg bara till en nolla! (10×3 = 30)</li>
                      </ul>
                    </div>
                    <div className="mt-3">
                      <Link href="/sv/multiplikationstabeller/1-10" className="text-green-600 hover:text-green-700 font-medium inline-flex items-center">
                        Gå till 1-10 Tabeller →
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
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">Gå Vidare till Mellannivå Tabeller (3, 4, 6)</h3>
                    <p className="text-slate-700 mb-3">
                      Nu är du redo för lite mer utmanande tabeller! Oroa dig inte, det finns tips för dessa också.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-900 mb-2">Tips:</p>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• <strong>3-tabellen:</strong> Lägg till talet 3 gånger (3×4 = 4+4+4 = 12)</li>
                        <li>• <strong>4-tabellen:</strong> Multiplicera med 2, sedan dubblera (4×5 = 2×5×2 = 20)</li>
                        <li>• <strong>6-tabellen:</strong> Lägg till 1 till 5-tabellen (6×4 = 5×4 + 4 = 24)</li>
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
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Utmana Dig Själv med Svåra Tabeller (7, 8, 9)</h3>
                    <p className="text-slate-700 mb-3">
                      Dessa tabeller är lite svårare men du har redan lärt dig så mycket! Med speciella tekniker klarar du även dessa.
                    </p>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-semibold text-yellow-900 mb-2">Speciella Tekniker:</p>
                      <ul className="space-y-2 text-slate-700 text-sm">
                        <li>• <strong>9-tabellen - Fingertrick:</strong> Öppna händerna, böj ner det finger som motsvarar talet du multiplicerar med. Öppna fingrar till vänster = tiotal, till höger = ental!</li>
                        <li>• <strong>8-tabellen:</strong> Multiplicera med 10, dra av 2 gånger (8×7 = 10×7 - 2×7 = 70-14 = 56)</li>
                        <li>• <strong>7-tabellen:</strong> För svåra, använd 5-tabellen (7×6 = 5×6 + 2×6 = 30+12 = 42)</li>
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
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Öva Kontinuerligt 💪</h3>
                    <p className="text-slate-700 mb-3">
                      För att inte glömma det du har lärt dig, öva lite varje dag. Kort men regelbunden övning är bäst!
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-900 mb-2">Dagliga Övningstips:</p>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• Öva 10-15 minuter varje dag (inte långt, men regelbundet!)</li>
                        <li>• Öva genom att spela spel - det är roligt!</li>
                        <li>• Ordna tävlingar med familjen</li>
                        <li>• När du ser multiplikation i vardagen, räkna ut det (t.ex: "3 lådor, 5 chokladbitar i varje, hur många totalt?")</li>
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
              Visuellt Lärande - Förstå med Bilder 🎨
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">
                Att visualisera multiplikation i ditt huvud gör lärandet lättare! Här är några visuella tekniker:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {/* Arrays */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Matriser (Arrays)</h3>
                  <p className="text-slate-700 mb-4 text-sm">Exempel på 4 × 3 = 12:</p>
                  <div className="bg-white p-4 rounded inline-block">
                    <div className="grid grid-cols-4 gap-2">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="w-8 h-8 bg-blue-400 rounded"></div>
                      ))}
                    </div>
                    <p className="text-center mt-2 text-sm text-slate-600">4 kolumner × 3 rader = 12</p>
                  </div>
                </div>

                {/* Number Line */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Hopp på Tallinjen</h3>
                  <p className="text-slate-700 mb-4 text-sm">3 × 4: Hoppa i fyror (0→4→8→12)</p>
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
                    <p className="text-center mt-2 text-xs text-slate-600">3 steg, varje steg 4 enheter</p>
                  </div>
                </div>

                {/* Skip Counting */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Hoppa och Räkna</h3>
                  <p className="text-slate-700 mb-3 text-sm">Räkna i femmor: 5, 10, 15, 20, 25...</p>
                  <div className="bg-white p-3 rounded text-center">
                    <p className="text-purple-700 font-bold text-lg">5 - 10 - 15 - 20 - 25</p>
                    <p className="text-xs text-slate-600 mt-2">Om du lär dig dessa siffror blir 5-tabellen mycket lätt!</p>
                  </div>
                </div>

                {/* Patterns */}
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Upptäck Mönster</h3>
                  <p className="text-slate-700 mb-3 text-sm">9-tabellens hemlighet:</p>
                  <div className="bg-white p-3 rounded">
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>9×1=<strong className="text-pink-600">09</strong> (0+9=9)</li>
                      <li>9×2=<strong className="text-pink-600">18</strong> (1+8=9)</li>
                      <li>9×3=<strong className="text-pink-600">27</strong> (2+7=9)</li>
                      <li>9×4=<strong className="text-pink-600">36</strong> (3+6=9)</li>
                      <li className="text-xs italic">Siffrorna summerar alltid till 9!</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Practice Tips */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Övningstips 🎯
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  🎮
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Spela Spel</h3>
                <p className="text-slate-700 mb-3">
                  Öva med de roliga spelen på denna webbplats. Att lära sig genom att spela är mycket roligare!
                </p>
                <Link href="/sv/multiplikationstabeller" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center text-sm">
                  Upptäck Spelen →
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  📝
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Testa Dig Själv</h3>
                <p className="text-slate-700 mb-3">
                  Använd kort eller låt någon fråga dig. Att testa dig själv påskyndar inlärningen!
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  🎵
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Sånger och Rytmer</h3>
                <p className="text-slate-700 mb-3">
                  Gör multiplikationstabellerna till sånger! Det är lättare att komma ihåg med musik.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  🏆
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Belöna Dig Själv</h3>
                <p className="text-slate-700 mb-3">
                  När du lär dig en tabell, belöna dig själv! Samla klistermärken eller gör något litet.
                </p>
              </div>
            </div>
          </section>

          {/* Progress Tracking */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Följ Din Framsteg 📊
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">
                Att se hur långt du har kommit motiverar dig! Här är spårningsmetoder:
              </p>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">✅ Tabell Checklista</h3>
                  <p className="text-slate-700 text-sm">
                    Skriv tabellerna 1 till 10 på ett papper. Markera med en stor bock när du lär dig var och en! 
                    När alla är markerade är du en multiplikationstabell-hjälte! 🌟
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">📈 Framstegsgraf</h3>
                  <p className="text-slate-700 text-sm">
                    Registrera hur många frågor du svarar rätt på varje vecka. Rita en graf och se framstegen. 
                    Du blir bättre varje vecka!
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">⭐ Stjärnsystem</h3>
                  <p className="text-slate-700 text-sm">
                    Rita en stjärna för varje rätt svar. När du når 100 stjärnor, ge dig själv en speciell belöning!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Motivation */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Motivation och Framgångstips 💫
            </h2>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🌟</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Ha Tålamod</h3>
                      <p className="text-slate-700 text-sm">Allt tar tid. Du kan också göra det, bara öva!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💪</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Misstag är Normala</h3>
                      <p className="text-slate-700 text-sm">Bli inte ledsen när du gör fel, det är en del av lärandet!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Sätt Små Mål</h3>
                      <p className="text-slate-700 text-sm">En tabell om dagen räcker, skynda dig inte!</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🤝</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Be om Hjälp</h3>
                      <p className="text-slate-700 text-sm">Om du inte förstår något, fråga din familj eller lärare!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎉</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Fira Dina Framgångar</h3>
                      <p className="text-slate-700 text-sm">Varje liten framgång är viktig, uppskatta dig själv!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">😊</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Ha Kul!</h3>
                      <p className="text-slate-700 text-sm">Lärande ska vara roligt, prova spelen!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Reference */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Snabbtips Guide 🔑
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-900 mb-2">Multiplikation med 0</h4>
                  <p className="text-sm text-slate-700">Allt blir noll! 0×1000=0</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-green-900 mb-2">Multiplikation med 1</h4>
                  <p className="text-sm text-slate-700">Talet förblir sig själv! 1×7=7</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold text-purple-900 mb-2">Multiplikation med 2</h4>
                  <p className="text-sm text-slate-700">Dubbla talet! 2×6=12</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-bold text-pink-900 mb-2">Multiplikation med 5</h4>
                  <p className="text-sm text-slate-700">Resultatet slutar på 0 eller 5!</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-900 mb-2">Multiplikation med 9</h4>
                  <p className="text-sm text-slate-700">Siffrorna summerar till 9! Fingertrick!</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-bold text-indigo-900 mb-2">Multiplikation med 10</h4>
                  <p className="text-sm text-slate-700">Lägg till en nolla! 10×8=80</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-6 sm:p-8 text-white text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Dags att Börja Nu! 🚀
            </h2>
            <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Nu är du redo! Kom ihåg, varje stor matematikhjälte började med små steg. 
              Du kan också göra det! 💪✨
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/sv/multiplikationstabeller/1-10"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                <span className="mr-2">🎯</span>
                Börja Omedelbart
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/sv/multiplikationstabeller"
                className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-flex items-center justify-center"
              >
                Tillbaka till Startsidan
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-blue-400">
              <p className="text-blue-100 text-sm">
                💡 <strong>Tips:</strong> Att öva 10-15 minuter om dagen är mycket effektivare än att studera i 1 timme med uttråkning!
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
