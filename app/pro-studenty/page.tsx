import Link from 'next/link'
import Footer from '@/app/components/Footer'

export const metadata = {
  title: 'Průvodce Násobilkou Pro Studenty | Učit se Krok za Krokem',
  description: 'Průvodce krok za krokem pro snadné učení násobilky. Vizuální materiály, praktické aktivity a zábavné hry pro učení vlastním tempem.',
  keywords: 'učit se násobilku, matematika pro studenty, průvodce násobilkou, násobení krok za krokem',
  alternates: {
    canonical: '/pro-studenty',
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
                Učit se Násobilku je Snadné! 🎯
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 mb-6 md:mb-8">
                Uč se vlastním tempem, bav se a staň se matikářským hrdinou! 
                Tento průvodce ti pomůže naučit se násobilku krok za krokem.
              </p>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-blue-100">I ty to zvládneš!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Why Learn */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Proč bych se měl naučit násobilku? 🤔
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">
                Násobilka je superschopnost matematického světa! To ti dá:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                    ⚡
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Rychlý Počítání</h3>
                    <p className="text-slate-700">Můžeš řešit matematické úlohy mnohem rychleji!</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-2xl">
                    🎮
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Využití v Každodenním Životě</h3>
                    <p className="text-slate-700">Při nakupování, ve hrách - všude to budeš potřebovat!</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-2xl">
                    🏆
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Více Sebevědomí</h3>
                    <p className="text-slate-700">Tvoje sebevědomí v matematice vzroste a budeš úspěšnější!</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-2xl">
                    🧠
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Síla Mozku</h3>
                    <p className="text-slate-700">Tvoje paměť bude silnější a naučíš se rychleji myslet!</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Learning Path */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Krok za Krokem Cesta Učení 🚀
            </h2>
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border-l-4 border-green-500">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">Začni s Jednoduchými Řadami (1, 2, 5, 10)</h3>
                    <p className="text-slate-700 mb-3">
                      Začít s nejjednodušší řadami ti dá sebevědomí! Jsou velmi snadné a naučíš se je rychle.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-900 mb-2">Proč jsou tyto řady snadné?</p>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• <strong>Řada 1:</strong> Každé číslo zůstává stejné! (1×5=5)</li>
                        <li>• <strong>Řada 2:</strong> Přidej číslo dvakrát! (2×4 = 4+4 = 8)</li>
                        <li>• <strong>Řada 5:</strong> Vždy končí na 5 nebo 0!</li>
                        <li>• <strong>Řada 10:</strong> Přidej 0 na konec! (10×3 = 30)</li>
                      </ul>
                    </div>
                    <div className="mt-3">
                      <Link href="/cs/nasobilka/1-10" className="text-green-600 hover:text-green-700 font-medium inline-flex items-center">
                        K řadám 1-10 →
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
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">Přejdi na Středně Těžké Řady (3, 4, 6)</h3>
                    <p className="text-slate-700 mb-3">
                      Teď jsi připraven na trochu těžší řady! Neboj se, i na to jsou triky.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-900 mb-2">Tipy:</p>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• <strong>Řada 3:</strong> Přidej číslo 3× (3×4 = 4+4+4 = 12)</li>
                        <li>• <strong>Řada 4:</strong> Krát 2, pak zdvoj (4×5 = 2×5×2 = 20)</li>
                        <li>• <strong>Řada 6:</strong> Použij řadu 5 a přidej ještě 1 (6×4 = 5×4 + 4 = 24)</li>
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
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Vyzvi se s Těžkými Řadami (7, 8, 9)</h3>
                    <p className="text-slate-700 mb-3">
                      Tyto řady jsou trochu těžší, ale už jsi se naučil hodně! Pomocí speciálních technik zvládneš i tyto.
                    </p>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-semibold text-yellow-900 mb-2">Speciální Techniky:</p>
                      <ul className="space-y-2 text-slate-700 text-sm">
                        <li>• <strong>Řada 9 - Trik s Prsty:</strong> Otevři ruce, skloň prst čísla, které násobíš. Otevřené prsty vlevo = desítky, prsty vpravo = jednotky!</li>
                        <li>• <strong>Řada 8:</strong> Krát 10, pak odečti 2× (8×7 = 10×7 - 2×7 = 70-14 = 56)</li>
                        <li>• <strong>Řada 7:</strong> Pro těžké použij řadu 5 (7×6 = 5×6 + 2×6 = 30+12 = 42)</li>
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
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Cvič Pravidelně 💪</h3>
                    <p className="text-slate-700 mb-3">
                      Abys nezapomněl, co ses naučil, cvič každý den trochu. Nejlepší je: málo, ale pravidelně!
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-900 mb-2">Tipy pro Denní Cvičení:</p>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• Uč se každý den 10-15 minut (ne moc, ale pravidelně!)</li>
                        <li>• Cvič hravě - to je zábava!</li>
                        <li>• Uspořádej soutěže s rodinou</li>
                        <li>• Když v každodenním životě vidíš násobení, vypočítej je (např.: "3 balíčky, 5 sušenek v každém, kolik celkem?")</li>
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
              Vizuální Učení - Porozumět Pomocí Obrázků 🎨
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">
                Vizualizovat násobení ve své hlavě usnadňuje učení! Zde jsou některé vizuální techniky:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {/* Arrays */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Pole (Arrays)</h3>
                  <p className="text-slate-700 mb-4 text-sm">Příklad pro 4 × 3 = 12:</p>
                  <div className="bg-white p-4 rounded inline-block">
                    <div className="grid grid-cols-4 gap-2">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="w-8 h-8 bg-blue-400 rounded"></div>
                      ))}
                    </div>
                    <p className="text-center mt-2 text-sm text-slate-600">4 sloupce × 3 řady = 12</p>
                  </div>
                </div>

                {/* Number Line */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Skoky na Číselné Ose</h3>
                  <p className="text-slate-700 mb-4 text-sm">3 × 4: Skoky po 4 (0→4→8→12)</p>
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
                    <p className="text-center mt-2 text-xs text-slate-600">3 kroky, každý krok 4 jednotky</p>
                  </div>
                </div>

                {/* Skip Counting */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Počítání v Krocích</h3>
                  <p className="text-slate-700 mb-3 text-sm">Počítej po 5: 5, 10, 15, 20, 25...</p>
                  <div className="bg-white p-3 rounded text-center">
                    <p className="text-purple-700 font-bold text-lg">5 - 10 - 15 - 20 - 25</p>
                    <p className="text-xs text-slate-600 mt-2">Když znáš tato čísla zpaměti, řada 5 je super snadná!</p>
                  </div>
                </div>

                {/* Patterns */}
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Rozpoznej Vzory</h3>
                  <p className="text-slate-700 mb-3 text-sm">Tajemství řady 9:</p>
                  <div className="bg-white p-3 rounded">
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>9×1=<strong className="text-pink-600">09</strong> (0+9=9)</li>
                      <li>9×2=<strong className="text-pink-600">18</strong> (1+8=9)</li>
                      <li>9×3=<strong className="text-pink-600">27</strong> (2+7=9)</li>
                      <li>9×4=<strong className="text-pink-600">36</strong> (3+6=9)</li>
                      <li className="text-xs italic">Číslice vždy dávají 9!</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Practice Tips */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Tipy pro Cvičení 🎯
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  🎮
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Hry</h3>
                <p className="text-slate-700 mb-3">
                  Cvič se zábavnými hrami na této stránce. Učení při hraní je mnohem zábavnější!
                </p>
                <Link href="/cs/nasobilka" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center text-sm">
                  Objevuj hry →
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  📝
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Testuj se</h3>
                <p className="text-slate-700 mb-3">
                  Použij kartičky nebo požádej někoho, aby ti kladl otázky. Testování sebe sama urychlí tvé učení!
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  🎵
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Písně a Rytmy</h3>
                <p className="text-slate-700 mb-3">
                  Udělej si z násobilky písně! S hudbou je mnohem snazší si je zapamatovat.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  🏆
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Odměň se</h3>
                <p className="text-slate-700 mb-3">
                  Když se naučíš řadu, odměň se! Sbírej samolepky nebo udělej něco malého.
                </p>
              </div>
            </div>
          </section>

          {/* Progress Tracking */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Sleduj Svůj Pokrok 📊
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">
                Vidět, jak moc pokroku jsi udělal, tě motivuje! Zde jsou metody sledování:
              </p>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">✅ Kontrolní Seznam Řad</h3>
                  <p className="text-slate-700 text-sm">
                    Napiš řady od 1 do 10 na papír. Pokaždé, když se naučíš jednu, dej velké zaškrtnutí! 
                    Když jsou všechny zaškrtnuté, jsi násobilkový hrdina! 🌟
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">📈 Graf Pokroku</h3>
                  <p className="text-slate-700 text-sm">
                    Zaznamenej každý týden, kolik otázek jsi zodpověděl správně. Nakresli graf a uvidíš svůj pokrok. 
                    Každý týden budeš lepší!
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">⭐ Hvězdný Systém</h3>
                  <p className="text-slate-700 text-sm">
                    Za každou správnou odpověď si nakresli hvězdu. Když dosáhneš 100 hvězd, dopřej si speciální odměnu!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Motivation */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Motivační a Úspěšná Tajemství 💫
            </h2>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🌟</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Buď Trpělivý</h3>
                      <p className="text-slate-700 text-sm">Všechno potřebuje čas. Zvládneš to, jen cvič dál!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💪</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Chyby Jsou Normální</h3>
                      <p className="text-slate-700 text-sm">Nebuď smutný, když uděláš chyby, to patří k učení!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Stanovi Malé Cíle</h3>
                      <p className="text-slate-700 text-sm">Jedna řada denně stačí, nehoň se!</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🤝</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Požádej o Pomoc</h3>
                      <p className="text-slate-700 text-sm">Když něčemu nerozumíš, zeptej se rodiny nebo učitele!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎉</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Oslavuj Své Úspěchy</h3>
                      <p className="text-slate-700 text-sm">Každý malý úspěch je důležitý, buď na sebe hrdý!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">😊</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Bav Se!</h3>
                      <p className="text-slate-700 text-sm">Učení by mělo být zábavné, vyzkoušej hry!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Reference */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Rychlý Přehled Tipů 🔑
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-900 mb-2">Násobení 0</h4>
                  <p className="text-sm text-slate-700">Všechno je nula! 0×1000=0</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-green-900 mb-2">Násobení 1</h4>
                  <p className="text-sm text-slate-700">Číslo zůstává stejné! 1×7=7</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold text-purple-900 mb-2">Násobení 2</h4>
                  <p className="text-sm text-slate-700">Zdvoj číslo! 2×6=12</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-bold text-pink-900 mb-2">Násobení 5</h4>
                  <p className="text-sm text-slate-700">Výsledek končí na 0 nebo 5!</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-900 mb-2">Násobení 9</h4>
                  <p className="text-sm text-slate-700">Číslice dávají 9! Trik s prsty!</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-bold text-indigo-900 mb-2">Násobení 10</h4>
                  <p className="text-sm text-slate-700">Přidej 0 na konec! 10×8=80</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-6 sm:p-8 text-white text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Čas Začít! 🚀
            </h2>
            <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Teď jsi připraven! Pamatuj, každý velký matematický hrdina začínal malými kroky. 
              I ty to zvládneš! 💪✨
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/cs/nasobilka/1-10"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                <span className="mr-2">🎯</span>
                Začít Teď
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/cs/nasobilka"
                className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-flex items-center justify-center"
              >
                Zpět na Hlavní Stránku
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-blue-400">
              <p className="text-blue-100 text-sm">
                💡 <strong>Tip:</strong> Učit se 10-15 minut denně je mnohem efektivnější než 1 nudná hodina!
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
