import Link from 'next/link'
import HeaderPl from '@/app/components/pl/Header'
import FooterPl from '@/app/components/pl/Footer'

export const metadata = {
  title: 'Przewodnik po Tabliczkach Mnożenia dla Rodziców | Wspieranie Nauki w Domu',
  description: 'Jak pomóc dziecku w nauce tabliczki mnożenia w domu. Praktyczne wskazówki, gry edukacyjne i strategie motywacyjne.',
  keywords: 'pomoc dzieciom z tabliczką mnożenia, matematyka w domu, edukacja dla rodziców, zajęcia edukacyjne',
  alternates: {
    canonical: '/dla-rodzicow',
  },
}

export default function DlaRodzicow() {
  return (
    <>
      <HeaderPl />
      <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white pt-20 pb-12 md:pt-24 md:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
                Przewodnik po Tabliczkach Mnożenia Dla Rodziców
              </h1>
              <p className="text-lg sm:text-xl text-purple-100 mb-6 md:mb-8">
                Jak wspierać dziecko w nauce tabliczki mnożenia? 
                Ten przewodnik zawiera skuteczne strategie i praktyczne porady.
              </p>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                <span className="text-purple-100">Twój przewodnik do sukcesu dziecka</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Why It Matters */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Dlaczego To Jest Ważne?
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4">
                Tabliczka mnożenia to jeden z najważniejszych kroków w matematycznej podróży dziecka. 
                Nie tylko dla matematyki, ale mają również kluczowe znaczenie dla rozwijania umiejętności rozwiązywania problemów, logicznego myślenia i pewności siebie.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">Podstawa Zaawansowanej Matematyki</h3>
                  <p className="text-slate-700 text-sm">Dzielenie, ułamki, algebra - wszystko zależy od tabliczki mnożenia.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Pewność Siebie w Nauce</h3>
                  <p className="text-slate-700 text-sm">Sukces w tabliczkach mnożenia zwiększa ogólną pewność siebie w szkole.</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Umiejętności Życiowe</h3>
                  <p className="text-slate-700 text-sm">Szybkie obliczenia są przydatne podczas zakupów, gotowania i w życiu codziennym.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Support Strategies */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Strategie Wsparcia Domowego
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                    🎯
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Uczyń To Konkretnym</h3>
                    <p className="text-slate-700 mb-3">
                      Ucz tabliczki mnożenia za pomocą sytuacji z życia codziennego zamiast abstrakcyjnych liczb.
                    </p>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>"Jeśli masz 3 pudełka i 4 jabłka w każdym pudełku, ile jabłek razem?"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>"Karton jajek ma 6 jajek. Ile jajek w 4 kartonach?"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Używaj fizycznych przedmiotów (guzików, cukierków, zabawek) do wizualizacji</span>
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
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Krótkie, Ale Regularne Ćwiczenia</h3>
                    <p className="text-slate-700 mb-3">
                      Bardziej efektywne jest ćwiczenie 10-15 minut dziennie niż 1 godzina raz w tygodniu.
                    </p>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      <li>• Podczas śniadania - 5 szybkich pytań</li>
                      <li>• W drodze do szkoły - licz po 2, po 5</li>
                      <li>• Przed snem - 5-minutowe powtórzenie</li>
                      <li>• W weekendy - gry mnożące</li>
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
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Nauka Oparta na Grach</h3>
                    <p className="text-slate-700 mb-3">
                      Przekształcanie nauki w grę zwiększa zarówno motywację, jak i zapamiętywanie.
                    </p>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      <li>• Użyj gier na tej stronie</li>
                      <li>• Graj w gry karciane mnożenia</li>
                      <li>• Organizuj rodzinne zawody</li>
                      <li>• Oferuj małe nagrody za osiągnięcia</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Fun Activities */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Zabawne Aktywności w Domu
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">🏏 Gry Karciane</h3>
                <div className="space-y-3 text-slate-700 text-sm">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">Wojna Mnożenia</h4>
                    <p className="text-slate-600">Wyciągnij dwie karty i pomnóż je. Poprawna odpowiedź zdobywa punkty!</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">Memory Mnożenia</h4>
                    <p className="text-slate-600">Dopasuj karty z pytaniami do kart z odpowiedziami - jak gra w memory!</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">🍳 Matematyka w Kuchni</h3>
                <div className="space-y-3 text-slate-700 text-sm">
                  <p>Używaj tabliczki mnożenia podczas gotowania:</p>
                  <ul className="space-y-2">
                    <li>• "Jeśli potrzebujemy 2 jajek na naleśnik i robimy 4 naleśniki, ile jajek potrzebujemy?"</li>
                    <li>• "Jeśli przepis jest dla 3 osób, a nas jest 6, ile potrzebujemy?"</li>
                    <li>• Liczenie łyżek, odmierzanie składników</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">🛒 Ćwiczenia Mnożenia w Sklepie Spożywczym</h3>
                <div className="space-y-3 text-slate-700 text-sm">
                  <ul className="space-y-2">
                    <li>• "3 jogurty kosztują 2 zł każdy, ile razem?"</li>
                    <li>• "Torba jabłek ma 6 jabłek. Jeśli kupimy 4 torby, ile jabłek?"</li>
                    <li>• Porównywanie cen, obliczanie oszczędności</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">🎨 Twórcze Aktywności</h3>
                <div className="space-y-3 text-slate-700 text-sm">
                  <ul className="space-y-2">
                    <li>• Twórz plakaty z tabliczkami mnożenia</li>
                    <li>• Pisz piosenki lub rymowanki mnożenia</li>
                    <li>• Rzucaj kostkami i mnóż wyniki</li>
                    <li>• Twórz historie z problemami mnożenia</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Common Challenges */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Typowe Wyzwania i Rozwiązania
            </h2>
            <div className="space-y-4">
              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
                <summary className="font-semibold text-slate-900 text-lg flex items-center gap-3">
                  <span className="text-purple-500">❓</span>
                  Moje dziecko boi się/unika tabliczki mnożenia
                </summary>
                <div className="mt-4 text-slate-700 space-y-2 text-sm">
                  <p><strong>Rozwiązanie:</strong> Zacznij od łatwych tabliczek (1, 2, 5, 10), aby budować pewność siebie. Skup się na postępach, a nie perfekcji. Świętuj każde małe osiągnięcie.</p>
                  <p>Unikaj wywierania presji lub tworzenia niepokoju. Nauka powinna być zabawna, a nie stresująca.</p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
                <summary className="font-semibold text-slate-900 text-lg flex items-center gap-3">
                  <span className="text-blue-500">❓</span>
                  Zapamiętuje, ale nie rozumie koncepcji
                </summary>
                <div className="mt-4 text-slate-700 space-y-2 text-sm">
                  <p><strong>Rozwiązanie:</strong> Używaj konkretnych przedmiotów i modeli wizualnych. Pokaż, że 3×4 oznacza "3 grupy po 4" lub "4+4+4".</p>
                  <p>Używaj tablic z przedmiotów, rysunków, manipulatywów. Zrozumienie koncepcyjne jest ważniejsze niż mechaniczne zapamiętywanie.</p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
                <summary className="font-semibold text-slate-900 text-lg flex items-center gap-3">
                  <span className="text-green-500">❓</span>
                  Myli tabliczki mnożenia ze sobą
                </summary>
                <div className="mt-4 text-slate-700 space-y-2 text-sm">
                  <p><strong>Rozwiązanie:</strong> Skup się na jednej tabliczce na raz. Ćwicz jedną dobrze, zanim przejdziesz do następnej.</p>
                  <p>Używaj kodowania kolorami lub skojarzeń wizualnych dla różnych tabliczek. Ćwicz różnicowanie: "Czy to 3×4 czy 4×3?"</p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
                <summary className="font-semibold text-slate-900 text-lg flex items-center gap-3">
                  <span className="text-yellow-500">❓</span>
                  Zapomina tego, czego się wcześniej nauczyło
                </summary>
                <div className="mt-4 text-slate-700 space-y-2 text-sm">
                  <p><strong>Rozwiązanie:</strong> Regularne powtórzenia są niezbędne. Ćwicz wcześniej nauczone tabliczki razem z nowymi.</p>
                  <p>Stwórz harmonogram powtórek: każdego tygodnia uwzględniaj stare tabliczki. Używaj gier, aby powtórki były zabawne.</p>
                </div>
              </details>
            </div>
          </section>

          {/* Motivation Tips */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Jak Utrzymać Wysoką Motywację
            </h2>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg shadow-md p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-4">✅ Rób</h3>
                  <ul className="space-y-3 text-slate-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Chwal wysiłek, nie tylko poprawne odpowiedzi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Świętuj postępy małymi nagrodami</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Przekształć naukę w grę</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Ustalaj osiągalne cele</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Twórz wspierające środowisko bez presji</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-pink-900 mb-4">❌ Unikaj</h3>
                  <ul className="space-y-3 text-slate-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Porównywania z rodzeństwem lub innymi dziećmi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Tworzenia presji lub niepokoju o błędy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Długich, nudnych sesji ćwiczeń</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Używania negatywnego języka ("To jest łatwe, dlaczego nie możesz tego zrobić?")</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Oczekiwania natychmiastowej perfekcji</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-lg p-6 sm:p-8 text-white text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Rozpocznij Podróż po Tabliczkach Mnożenia z Dzieckiem Już Dziś
            </h2>
            <p className="text-base sm:text-lg text-purple-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Pamiętaj, każde dziecko uczy się we własnym tempie. Dzięki Twojemu wsparciu i odpowiednim strategiom, 
              Twoje dziecko opanuje tabliczki mnożenia. Cierpliwość, ćwiczenie i pozytywność!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/pl/tabliczki-mnozenia/1-10"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center justify-center"
              >
                <span className="mr-2">🎯</span>
                Poznaj Tabliczki Mnożenia
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/dla-uczniow"
                className="bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors inline-flex items-center justify-center"
              >
                Zobacz Przewodnik dla Uczniów
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-purple-400">
              <p className="text-purple-100 text-sm">
                💡 <strong>Złota Wskazówka:</strong> Twoje pozytywne nastawienie do matematyki wpływa na nastawienie dziecka. 
                Okaż entuzjazm, a dziecko też się podekscytuje!
              </p>
            </div>
          </section>
        </div>
      </main>
      <FooterPl />
    </>
  )
}
