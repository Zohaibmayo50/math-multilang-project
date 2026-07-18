import Link from 'next/link'
import Header from '@/app/components/cs/Header'
import Footer from '@/app/components/cs/Footer'


export default function ForParents() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white pt-20 pb-12 md:pt-24 md:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
                Průvodce Násobilkou Pro Rodiče
              </h1>
              <p className="text-lg sm:text-xl text-purple-100 mb-6 md:mb-8">
                Jak podpořit své dítě při učení násobilky? 
                Tento průvodce obsahuje efektivní strategie a praktické tipy.
              </p>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                <span className="text-purple-100">Váš Průvodce k Úspěchu Vašeho Dítěte</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Why It Matters */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Proč Je To Důležité?
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4">
                Násobilka je jedním z nejdůležitějších kroků v matematickém vývoji vašeho dítěte. 
                Nejen pro matematiku, ale také pro rozvoj schopností řešit problémy, logického myšlení a sebevědomí je zásadní.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">Základ Pro Vyšší Matematiku</h3>
                  <p className="text-slate-700 text-sm">Dělení, zlomky, algebra - všechno je založeno na násobilce.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Školní Sebevědomí</h3>
                  <p className="text-slate-700 text-sm">Úspěch v násobilce posílí obecnou důvěru ve škole.</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Dovednosti Pro Život</h3>
                  <p className="text-slate-700 text-sm">Rychlý počítání je užitečné při nakupování, vaření a v každodenním životě.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Support Strategies */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Strategie Podpory Doma
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                    🎯
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Udělejte To Konkrétní</h3>
                    <p className="text-slate-700 mb-3">
                      Učte násobilku pomocí reálných situací místo abstraktních čísel.
                    </p>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>"Pokud máš 3 krabice a v každé krabici jsou 4 jablka, kolik jablek je celkem?"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>"Krabice na vejce má 6 vajec. Kolik vajec je ve 4 krabicích?"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Používejte fyzické předměty (knoflíky, cukroví, hračky) k vizualizaci</span>
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
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Krátké, Ale Pravidelné Cvičení</h3>
                    <p className="text-slate-700 mb-3">
                      Je efektivnější cvičit každý den 10-15 minut než jednou týdně 1 hodinu.
                    </p>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      <li>• Při snídani - 5 rychlých otázek</li>
                      <li>• Na cestě do školy - počítání po 2, po 5</li>
                      <li>• Před spaním - 5 minut opakování</li>
                      <li>• O víkendu - násobilkové hry</li>
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
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Herní Učení</h3>
                    <p className="text-slate-700 mb-3">
                      Proměnit učení ve hru zvyšuje jak motivaci, tak paměť.
                    </p>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      <li>• Používejte hry na této webové stránce</li>
                      <li>• Hrajte násobilkové karetní hry</li>
                      <li>• Organizujte rodinné soutěže</li>
                      <li>• Nabídněte malé odměny za úspěchy</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Fun Activities */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Zábavné Aktivity Doma
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">🃏 Karetní Hry</h3>
                <div className="space-y-3 text-slate-700 text-sm">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">Násobilková Válka</h4>
                    <p className="text-slate-600">Vytáhněte dvě karty a vynásobte je. Správná odpověď vyhrává body!</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">Násobilkové Pexeso</h4>
                    <p className="text-slate-600">Kombinujte kartičky s otázkami s kartičkami s odpověďmi - jako pexeso!</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">🍳 Matematika v Kuchyni</h3>
                <div className="space-y-3 text-slate-700 text-sm">
                  <p>Používejte násobilku při vaření:</p>
                  <ul className="space-y-2">
                    <li>• "Pokud potřebujeme 2 vejce na palačinku a uděláme 4 palačinky, kolik vajec potřebujeme?"</li>
                    <li>• "Pokud je recept pro 3 osoby a jsme 6, kolik potřebujeme?"</li>
                    <li>• Počítání lžic, odměřování přísad</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">🛒 Násobilkové Cvičení v Obchodě</h3>
                <div className="space-y-3 text-slate-700 text-sm">
                  <ul className="space-y-2">
                    <li>• "3 jogurty stojí každý 2€, kolik celkem?"</li>
                    <li>• "Pytlík jablek obsahuje 6 jablek. Pokud koupíme 4 pytlíky, kolik jablek?"</li>
                    <li>• Porovnávání cen, výpočet úspor</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">🎨 Kreativní Aktivity</h3>
                <div className="space-y-3 text-slate-700 text-sm">
                  <ul className="space-y-2">
                    <li>• Vytvářet násobilkové plakáty</li>
                    <li>• Psát násobilkové písně nebo básně</li>
                    <li>• Házet kostkami a násobit výsledky</li>
                    <li>• Vymýšlet příběhy s násobilkovými úlohami</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Common Challenges */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Časté Výzvy a Řešení
            </h2>
            <div className="space-y-4">
              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
                <summary className="font-semibold text-slate-900 text-lg flex items-center gap-3">
                  <span className="text-purple-500">❓</span>
                  Moje dítě má strach z násobilky/vyhýbá se jí
                </summary>
                <div className="mt-4 text-slate-700 space-y-2 text-sm">
                  <p><strong>Řešení:</strong> Začněte s jednoduchými řadami (1, 2, 5, 10), abyste vybudovali důvěru. Zaměřte se na pokrok, ne na dokonalost. Oslavujte každý malý úspěch.</p>
                  <p>Vyhněte se tlaku nebo vytváření strachu. Učení by mělo být zábavné, ne stresující.</p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
                <summary className="font-semibold text-slate-900 text-lg flex items-center gap-3">
                  <span className="text-blue-500">❓</span>
                  Učí se nazpaměť, ale nerozumí konceptu
                </summary>
                <div className="mt-4 text-slate-700 space-y-2 text-sm">
                  <p><strong>Řešení:</strong> Používejte konkrétní předměty a vizuální modely. Ukažte, že 3×4 znamená "3 skupiny po 4" nebo "4+4+4".</p>
                  <p>Používejte pole objektů, kresby, manipulativy. Konceptuální porozumění je důležitější než mechanické učení nazpaměť.</p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
                <summary className="font-semibold text-slate-900 text-lg flex items-center gap-3">
                  <span className="text-green-500">❓</span>
                  Zaměňuje si řady navzájem
                </summary>
                <div className="mt-4 text-slate-700 space-y-2 text-sm">
                  <p><strong>Řešení:</strong> Zaměřte se na jednu řadu najednou. Důkladně procvičte jednu řadu, než přejdete k další.</p>
                  <p>Používejte barevné kódy nebo vizuální asociace pro různé řady. Cvičte rozlišování: "Je to 3×4 nebo 4×3?"</p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
                <summary className="font-semibold text-slate-900 text-lg flex items-center gap-3">
                  <span className="text-yellow-500">❓</span>
                  Zapomíná dříve naučené
                </summary>
                <div className="mt-4 text-slate-700 space-y-2 text-sm">
                  <p><strong>Řešení:</strong> Pravidelné opakování je klíčové. Cvičte dříve naučené řady společně s novými.</p>
                  <p>Vytvořte rozvrh opakování: Každý týden zahrňte staré řady. Používejte hry, aby opakování bylo zábavné.</p>
                </div>
              </details>
            </div>
          </section>

          {/* Motivation Tips */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Jak Udržet Motivaci
            </h2>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg shadow-md p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-4">✅ Dělat</h3>
                  <ul className="space-y-3 text-slate-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Chválit úsilí, nejen správnou odpověď</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Oslavovat pokrok s malými odměnami</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Udělat z učení hru</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Stanovit dosažitelné cíle</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Vytvořit podpůrné a bezstresové prostředí</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-pink-900 mb-4">❌ Vyhýbat Se</h3>
                  <ul className="space-y-3 text-slate-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Srovnávání se sourozenci nebo jinými dětmi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Tlak nebo strach kvůli chybám</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Dlouhé, nudné cvičební lekce</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Používání negativního jazyka ("To je snadné, proč to nemůžeš?")</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Očekávání okamžité dokonalosti</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-lg p-6 sm:p-8 text-white text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Začněte Dnes Cestu Násobilky se Svým Dítětem
            </h2>
            <p className="text-base sm:text-lg text-purple-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Pamatujte, každé dítě se učí svým vlastním tempem. S vaší podporou a správnými strategiemi 
              vaše dítě násobilku zvládne. Trpělivost, cvičení a pozitivita!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/cs/nasobilka/1-10"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center justify-center"
              >
                <span className="mr-2">🎯</span>
                Prozkoumat Násobilku
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/cs/nasobilka/pro-studenty"
                className="bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors inline-flex items-center justify-center"
              >
                Zobrazit Průvodce Pro Studenty
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-purple-400">
              <p className="text-purple-100 text-sm">
                💡 <strong>Zlatý Tip:</strong> Váš pozitivní přístup k matematice ovlivňuje přístup vašeho dítěte. 
                Ukažte nadšení a vaše dítě bude také nadšené!
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
