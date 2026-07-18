import Link from 'next/link'
import HeaderPl from '@/app/components/pl/Header'
import FooterPl from '@/app/components/pl/Footer'


export default function DlaUczniow() {
  return (
    <>
      <HeaderPl />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white pt-20 pb-12 md:pt-24 md:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
                Nauka Tabliczki Mnożenia Jest Naprawdę Łatwa! 🎯
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 mb-6 md:mb-8">
                Postępuj we własnym tempie, ucz się bawiąc i zostań bohaterem matematyki! 
                Ten przewodnik pomoże Ci nauczyć się tabliczki mnożenia krok po kroku.
              </p>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-blue-100">Ty też możesz to zrobić!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Why Learn */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Dlaczego Powinienem Się Uczyć Tabliczki Mnożenia? 🤔
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">
                Tabliczka mnożenia to supermoc w świecie matematyki! Oto, co Ci da:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                    ⚡
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Szybkie Obliczenia</h3>
                    <p className="text-slate-700">Będziesz rozwiązywać problemy matematyczne znacznie szybciej!</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-2xl">
                    🎮
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Użycie w Codziennym Życiu</h3>
                    <p className="text-slate-700">Przydatne podczas zakupów, w grach, wszędzie!</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-2xl">
                    🏆
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Wzrost Pewności Siebie</h3>
                    <p className="text-slate-700">Twoja pewność siebie w matematyce wzrośnie i odniesiesz większy sukces!</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-2xl">
                    🧠
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Moc Mózgu</h3>
                    <p className="text-slate-700">Twoja pamięć stanie się silniejsza i nauczysz się szybciej myśleć!</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Learning Path */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Ścieżka Nauki Krok po Kroku 🚀
            </h2>
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border-l-4 border-green-500">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">Zacznij od Łatwych Tabliczek (1, 2, 5, 10)</h3>
                    <p className="text-slate-700 mb-3">
                      Zaczynanie od najłatwiejszych tabliczek da Ci pewność siebie! Są bardzo proste i nauczysz się ich szybko.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-900 mb-2">Dlaczego te tabliczki są łatwe?</p>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• <strong>Tabliczka 1:</strong> Każda liczba pozostaje taka sama! (1×5=5)</li>
                        <li>• <strong>Tabliczka 2:</strong> Dodaj liczbę dwa razy! (2×4 = 4+4 = 8)</li>
                        <li>• <strong>Tabliczka 5:</strong> Zawsze kończy się na 5 lub 0!</li>
                        <li>• <strong>Tabliczka 10:</strong> Dodaj zero na końcu! (10×3 = 30)</li>
                      </ul>
                    </div>
                    <div className="mt-3">
                      <Link href="/pl/tabliczki-mnozenia/1-10" className="text-green-600 hover:text-green-700 font-medium inline-flex items-center">
                        Przejdź do Tabliczek 1-10 →
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
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">Przejdź do Średnio Trudnych Tabliczek (3, 4, 6)</h3>
                    <p className="text-slate-700 mb-3">
                      Teraz jesteś gotowy na nieco trudniejsze tabliczki! Nie martw się, dla nich też są sztuczki.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-900 mb-2">Sztuczki:</p>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• <strong>Tabliczka 3:</strong> Dodaj liczbę 3 razy (3×4 = 4+4+4 = 12)</li>
                        <li>• <strong>Tabliczka 4:</strong> Pomnóż przez 2, potem podwój (4×5 = 2×5×2 = 20)</li>
                        <li>• <strong>Tabliczka 6:</strong> Użyj tabliczki 5 i dodaj jeszcze raz (6×4 = 5×4 + 4 = 24)</li>
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
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Wyzwij Się z Trudnymi Tabliczkami (7, 8, 9)</h3>
                    <p className="text-slate-700 mb-3">
                      Te tabliczki są nieco trudniejsze, ale nauczyłeś się już tak dużo! Dzięki specjalnym technikom opanujesz też te.
                    </p>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-semibold text-yellow-900 mb-2">Specjalne Techniki:</p>
                      <ul className="space-y-2 text-slate-700 text-sm">
                        <li>• <strong>Tabliczka 9 - Trik z Palcami:</strong> Wyciągnij obie ręce, opuść palec liczby, którą mnożysz. Palce w górę po lewej = dziesiątki, palce po prawej = jedności!</li>
                        <li>• <strong>Tabliczka 8:</strong> Pomnóż przez 10, potem odejmij 2 razy (8×7 = 10×7 - 2×7 = 70-14 = 56)</li>
                        <li>• <strong>Tabliczka 7:</strong> Dla trudnych użyj tabliczki 5 (7×6 = 5×6 + 2×6 = 30+12 = 42)</li>
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
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Ćwicz Regularnie 💪</h3>
                    <p className="text-slate-700 mb-3">
                      Aby nie zapomnieć tego, czego się nauczyłeś, ćwicz trochę każdego dnia. Najlepiej ćwiczyć mało, ale regularnie!
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-900 mb-2">Wskazówki Dotyczące Codziennego Ćwiczenia:</p>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• Ucz się 10-15 minut każdego dnia (niewiele, ale regularnie!)</li>
                        <li>• Ćwicz grając - to zabawne!</li>
                        <li>• Organizuj zawody z rodziną</li>
                        <li>• Gdy zobaczysz mnożenie w codziennym życiu, oblicz (np. "3 pudełka, 5 czekoladek w każdym, ile razem?")</li>
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
              Nauka Wizualna - Zrozum z Obrazkami 🎨
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">
                Wizualizowanie mnożenia w umyśle ułatwia naukę! Oto kilka technik wizualnych:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {/* Arrays */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Tablice</h3>
                  <p className="text-slate-700 mb-4 text-sm">Przykład 4 × 3 = 12:</p>
                  <div className="bg-white p-4 rounded inline-block">
                    <div className="grid grid-cols-4 gap-2">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="w-8 h-8 bg-blue-400 rounded"></div>
                      ))}
                    </div>
                    <p className="text-center mt-2 text-sm text-slate-600">4 kolumny × 3 rzędy = 12</p>
                  </div>
                </div>

                {/* Number Line */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Skoki na Osi Liczbowej</h3>
                  <p className="text-slate-700 mb-4 text-sm">3 × 4: skoki po 4 (0→4→8→12)</p>
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
                    <p className="text-center mt-2 text-xs text-slate-600">3 kroki, każdy krok 4 jednostki</p>
                  </div>
                </div>

                {/* Skip Counting */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Liczenie z Pomijaniem</h3>
                  <p className="text-slate-700 mb-3 text-sm">Licz po 5: 5, 10, 15, 20, 25...</p>
                  <div className="bg-white p-3 rounded text-center">
                    <p className="text-purple-700 font-bold text-lg">5 - 10 - 15 - 20 - 25</p>
                    <p className="text-xs text-slate-600 mt-2">Jeśli zapamiętasz te liczby, tabliczka 5 jest super łatwa!</p>
                  </div>
                </div>

                {/* Patterns */}
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Zauważ Wzory</h3>
                  <p className="text-slate-700 mb-3 text-sm">Sekret tabliczki 9:</p>
                  <div className="bg-white p-3 rounded">
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>9×1=<strong className="text-pink-600">09</strong> (0+9=9)</li>
                      <li>9×2=<strong className="text-pink-600">18</strong> (1+8=9)</li>
                      <li>9×3=<strong className="text-pink-600">27</strong> (2+7=9)</li>
                      <li>9×4=<strong className="text-pink-600">36</strong> (3+6=9)</li>
                      <li className="text-xs italic">Cyfry zawsze sumują się do 9!</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Practice Tips */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Wskazówki Dotyczące Ćwiczeń 🎯
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  🎮
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Graj w Gry</h3>
                <p className="text-slate-700 mb-3">
                  Ćwicz z zabawnymi grami na tej stronie. Nauka podczas zabawy jest o wiele przyjemniejsza!
                </p>
                <Link href="/pl/tabliczki-mnozenia" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center text-sm">
                  Odkryj Gry →
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  📝
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Rozwiązuj Testy</h3>
                <p className="text-slate-700 mb-3">
                  Używaj fiszek lub poproś kogoś, aby Cię przepytał. Testowanie siebie przyspiesza naukę!
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  🎵
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Piosenki i Rytmy</h3>
                <p className="text-slate-700 mb-3">
                  Zamień tabliczki mnożenia w piosenki! Z muzyką łatwiej zapamiętać.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  🏆
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Nagradzaj Siebie</h3>
                <p className="text-slate-700 mb-3">
                  Kiedy nauczysz się tabliczki mnożenia, nagródź siebie! Zbieraj naklejki lub zrób sobie małą przyjemność.
                </p>
              </div>
            </div>
          </section>

          {/* Progress Tracking */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Śledź Swoje Postępy 📊
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">
                Widząc, jak bardzo się rozwinąłeś, motywujesz się! Oto metody śledzenia:
              </p>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">✅ Lista Kontrolna Tabliczek</h3>
                  <p className="text-slate-700 text-sm">
                    Zapisz tabliczki 1-10 na papierze. Za każdym razem, gdy się jednej nauczysz, postaw duży znacznik! 
                    Kiedy wszystkie znaczniki są kompletne, jesteś bohaterem tabliczki mnożenia! 🌟
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">📈 Wykres Postępów</h3>
                  <p className="text-slate-700 text-sm">
                    Zapisuj, ile pytań odpowiedziałeś poprawnie każdego tygodnia. Narysuj wykres i zobacz swoje postępy. 
                    Każdego tygodnia stajesz się lepszy!
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">⭐ System Gwiazdek</h3>
                  <p className="text-slate-700 text-sm">
                    Za każdą poprawną odpowiedź narysuj gwiazdkę. Kiedy osiągniesz 100 gwiazdek, daj sobie specjalną nagrodę!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Motivation */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Motywacja i Sekrety Sukcesu 💫
            </h2>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🌟</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Bądź Cierpliwy</h3>
                      <p className="text-slate-700 text-sm">Wszystko wymaga czasu. Możesz to zrobić, tylko ćwicz!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💪</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Błędy Są Normalne</h3>
                      <p className="text-slate-700 text-sm">Nie czuj się źle, gdy popełniasz błędy, to część nauki!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Ustal Małe Cele</h3>
                      <p className="text-slate-700 text-sm">Jedna tabliczka dziennie wystarczy, nie spiesz się!</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🤝</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Proś o Pomoc</h3>
                      <p className="text-slate-700 text-sm">Jeśli jest coś, czego nie rozumiesz, zapytaj rodzinę lub nauczyciela!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎉</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Świętuj Swoje Osiągnięcia</h3>
                      <p className="text-slate-700 text-sm">Każde małe osiągnięcie jest ważne, doceniaj siebie!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">😊</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Baw Się Dobrze!</h3>
                      <p className="text-slate-700 text-sm">Nauka powinna być zabawna, spróbuj gier!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Reference */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Przewodnik po Szybkich Sztuczkach 🔑
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-900 mb-2">Mnożenie przez 0</h4>
                  <p className="text-sm text-slate-700">Wszystko to zero! 0×1000=0</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-green-900 mb-2">Mnożenie przez 1</h4>
                  <p className="text-sm text-slate-700">Liczba pozostaje taka sama! 1×7=7</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold text-purple-900 mb-2">Mnożenie przez 2</h4>
                  <p className="text-sm text-slate-700">Podwój liczbę! 2×6=12</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-bold text-pink-900 mb-2">Mnożenie przez 5</h4>
                  <p className="text-sm text-slate-700">Wynik kończy się na 0 lub 5!</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-900 mb-2">Mnożenie przez 9</h4>
                  <p className="text-sm text-slate-700">Cyfry sumują się do 9! Trik z palcami!</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-bold text-indigo-900 mb-2">Mnożenie przez 10</h4>
                  <p className="text-sm text-slate-700">Dodaj 0! 10×8=80</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-6 sm:p-8 text-white text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Czas Zacząć! 🚀
            </h2>
            <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Teraz jesteś gotowy! Pamiętaj, każdy wspaniały bohater matematyki zaczynał od małych kroków. 
              Ty też możesz to zrobić! 💪✨
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/pl/tabliczki-mnozenia/1-10"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                <span className="mr-2">🎯</span>
                Zacznij Teraz
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/pl/tabliczki-mnozenia"
                className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-flex items-center justify-center"
              >
                Wróć do Strony Głównej
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-blue-400">
              <p className="text-blue-100 text-sm">
                💡 <strong>Wskazówka:</strong> Nauka 10-15 minut dziennie jest o wiele bardziej efektywna niż nauka 1 nudnej godziny!
              </p>
            </div>
          </section>
        </div>
      </main>
      <FooterPl />
    </>
  )
}
