import Link from 'next/link'
import HeaderPl from '@/app/components/pl/Header'
import FooterPl from '@/app/components/pl/Footer'

export const metadata = {
  title: 'Dla Nauczycieli: Przewodnik po Tabliczkach Mnożenia | Materiały Pedagogiczne',
  description: 'Profesjonalne zasoby do nauczania tabliczki mnożenia w klasie, strategie pedagogiczne, propozycje zajęć i narzędzia oceniania.',
  keywords: 'nauczanie tabliczki mnożenia, zajęcia w klasie, metody pedagogiczne, nauczanie matematyki',
  alternates: {
    canonical: '/dla-nauczycieli',
  },
}

export default function DlaNauczycieli() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <HeaderPl />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Przewodnik po Tabliczkach Mnożenia dla Nauczycieli
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Skuteczne strategie i zajęcia w klasie do nauczania tabliczki mnożenia. 
              Zasoby, dzięki którym wszyscy uczniowie ją opanują.
            </p>
          </div>
        </div>
      </section>

      {/* Teaching Strategies Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Skuteczne Strategie Nauczania
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Strategy 1 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">👁️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Wizualizacja</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Używaj reprezentacji wizualnych, aby pomóc uczniom zrozumieć 
                mnożenie jako powtarzające się grupy.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Prostokątne tablice (np. 3×4 jako 3 rzędy po 4 obiekty)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Modele powierzchniowe używając papieru milimetrowego</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Diagramy skoków na osi liczbowej</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Konkretne manipulatywne (klocki, liczniki, kostki)</span>
                </li>
              </ul>
            </div>

            {/* Strategy 2 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🧩</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Dekompozycja</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Naucz uczniów rozkładać trudne mnożenia 
                na prostsze operacje.
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
                  <span>Użyj podwajania: 6×4 = 2×(3×4)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Własność rozdzielności w akcji</span>
                </li>
              </ul>
            </div>

            {/* Strategy 3 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🔢</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Wzory</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Pomóż uczniom odkryć i używać wzorów, aby ułatwić 
                naukę i zapamiętywanie.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Tabliczka 2: wszystkie liczby parzyste</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Tabliczka 5: kończy się na 0 lub 5</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Tabliczka 9: suma cyfr = 9, malejący wzór</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Własność przemienna: 3×7 = 7×3</span>
                </li>
              </ul>
            </div>

            {/* Strategy 4 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Zastosowania w Rzeczywistym Świecie</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Połącz mnożenie z codziennymi sytuacjami, aby nadać 
                znaczenie i kontekst nauce.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Zakupy i problemy z pieniędzmi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Organizowanie przedmiotów w rzędy i kolumny</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Przepisy kulinarne i pomiary</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Sport, gry i zajęcia grupowe</span>
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
            Zajęcia w Klasie
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Activity 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🎯</span>
                Bingo Mnożenia
              </h3>
              <p className="text-gray-700 mb-3">
                Uczniowie tworzą karty bingo z iloczynami. 
                Wyczytuj mnożenia, a uczniowie zaznaczają odpowiedzi.
              </p>
              <div className="bg-blue-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Poziom:</strong> Początkujący do Średnio zaawansowany<br/>
                <strong>Czas:</strong> 15-20 minut
              </div>
            </div>

            {/* Activity 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🏃</span>
                Wyścigi Mnożenia
              </h3>
              <p className="text-gray-700 mb-3">
                Zespoły rywalizują, odpowiadając na problemy mnożenia 
                w formacie sztafety przy tablicy.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Poziom:</strong> Wszystkie poziomy<br/>
                <strong>Czas:</strong> 10-15 minut
              </div>
            </div>

            {/* Activity 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🎲</span>
                Domino Mnożenia
              </h3>
              <p className="text-gray-700 mb-3">
                Zmodyfikowane kostki domina, gdzie uczniowie dopasowują 
                mnożenia do ich iloczynów.
              </p>
              <div className="bg-purple-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Poziom:</strong> Średnio zaawansowany<br/>
                <strong>Czas:</strong> 20-30 minut
              </div>
            </div>

            {/* Activity 4 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🎨</span>
                Sztuka Tablic
              </h3>
              <p className="text-gray-700 mb-3">
                Uczniowie tworzą artystyczne projekty używając 
                prostokątnych tablic i oznaczają odpowiednie mnożenia.
              </p>
              <div className="bg-pink-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Poziom:</strong> Początkujący<br/>
                <strong>Czas:</strong> 30-40 minut
              </div>
            </div>

            {/* Activity 5 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🎪</span>
                Stacje Ćwiczeń
              </h3>
              <p className="text-gray-700 mb-3">
                Ustaw rotujące stacje z różnymi zajęciami: 
                fiszki, gry cyfrowe, problemy pisemne, manipulatywne.
              </p>
              <div className="bg-orange-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Poziom:</strong> Wszystkie poziomy<br/>
                <strong>Czas:</strong> 40-50 minut
              </div>
            </div>

            {/* Activity 6 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">📖</span>
                Historie Mnożenia
              </h3>
              <p className="text-gray-700 mb-3">
                Uczniowie piszą i ilustrują problemy mnożenia 
                oparte na rzeczywistych lub wyimaginowanych sytuacjach.
              </p>
              <div className="bg-yellow-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Poziom:</strong> Średnio zaawansowany do Zaawansowany<br/>
                <strong>Czas:</strong> 30-45 minut
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiated Instruction Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Zróżnicowane Nauczanie
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Beginning Learners */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-2">🌱</span>
                Uczniowie Początkujący
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Zacznij od tabliczek 1, 2, 5 i 10</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Używaj dużo konkretnych manipulatywnych</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Podkreśl początkowo powtarzane dodawanie</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Dostarcz wykresy referencyjne</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Krótkie codzienne ćwiczenia (5-10 minut)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Świętuj małe osiągnięcia</span>
                </li>
              </ul>
            </div>

            {/* Intermediate Learners */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-2">📚</span>
                Uczniowie Średnio Zaawansowani
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Wprowadź tabliczki 3, 4, 6 i 7</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Ucz strategii dekompozycji</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Ćwicz własność przemienną</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Gry o umiarkowanej prędkości</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Problemy z zastosowaniem kontekstowym</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Praca partnerska i w małych grupach</span>
                </li>
              </ul>
            </div>

            {/* Advanced Learners */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-2">🚀</span>
                Uczniowie Zaawansowani
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Tabliczki 8, 9, 11 i 12</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Problemy wieloetapowe</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Połączenie z dzieleniem i ułamkami</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Wyzwania logiczne z matematyki</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Tworzenie własnych problemów</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Korepetycje rówieśnicze</span>
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
            Strategie Oceniania
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Formative Assessment */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">📊</span>
                Ocenianie Formujące
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Codzienna Obserwacja</h4>
                  <p className="text-gray-700">
                    Obserwuj uczniów podczas ćwiczeń, rób notatki o 
                    używanych strategiach i typowych błędach.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Szybkie Mini-testy</h4>
                  <p className="text-gray-700">
                    1-2 minuty na początku lekcji: 10 problemów do oceny 
                    płynności i zapamiętywania.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Indywidualne Tabliczki</h4>
                  <p className="text-gray-700">
                    Uczniowie pokazują odpowiedzi jednocześnie, umożliwiając 
                    szybkie sprawdzenie całej klasy.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Wywiady Matematyczne</h4>
                  <p className="text-gray-700">
                    Krótkie rozmowy jeden na jeden, aby zrozumieć rozumowanie 
                    i strategie ucznia.
                  </p>
                </div>
              </div>
            </div>

            {/* Summative Assessment */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">📝</span>
                Ocenianie Podsumowujące
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Testy Płynności</h4>
                  <p className="text-gray-700">
                    Oceny czasowe do pomiaru szybkości i dokładności 
                    w określonych zakresach tabliczek.
                  </p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Projekty Stosowane</h4>
                  <p className="text-gray-700">
                    Uczniowie rozwiązują problemy z życia, które wymagają 
                    mnożenia w różnych kontekstach.
                  </p>
                </div>
                <div className="border-l-4 border-pink-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Portfolio</h4>
                  <p className="text-gray-700">
                    Kolekcja prac w czasie pokazująca postępy 
                    i rosnące mistrzostwo.
                  </p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Samoocena</h4>
                  <p className="text-gray-700">
                    Uczniowie śledzą własne postępy, identyfikują opanowane tabliczki 
                    i ustalają cele.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Tracking */}
          <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-3xl mr-3">📈</span>
              Śledzenie Postępów
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/20 rounded-lg p-4">
                <h4 className="font-bold mb-2">Wykresy Mistrzostwa</h4>
                <p className="text-sm">
                  Uczniowie kolorują opanowane tabliczki na wizualnej siatce 12×12, 
                  aby zobaczyć swoje postępy.
                </p>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <h4 className="font-bold mb-2">Śledzenie Czasu</h4>
                <p className="text-sm">
                  Śledź poprawę prędkości za pomocą wykresów pokazujących 
                  malejący czas realizacji.
                </p>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <h4 className="font-bold mb-2">Odznaki Osiągnięć</h4>
                <p className="text-sm">
                  System nagród za opanowanie każdej tabliczki, motywujący 
                  do ciągłych postępów.
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
            Typowe Nieporozumienia
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <p className="text-gray-700 mb-6 text-lg">
              Rozpoznaj i rozwiąż te częste nieporozumienia, aby zapewnić 
              solidne zrozumienie mnożenia:
            </p>

            <div className="space-y-6">
              {/* Misconception 1 */}
              <div className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-2">❌</span>
                  "Mnożenie zawsze zwiększa liczby"
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Dlaczego jest problematyczne:</strong> Uczniowie są zdezorientowani, 
                  gdy mnożą przez ułamki lub liczby dziesiętne.
                </p>
                <p className="text-gray-700">
                  <strong className="text-green-700">Jak to naprawić:</strong> Pokaż 
                  przykłady jak 5 × 0,5 = 2,5 lub 3 × 0 = 0. Wyjaśnij, że mnożenie 
                  przez liczby mniejsze niż 1 zmniejsza wynik.
                </p>
              </div>

              {/* Misconception 2 */}
              <div className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-2">❌</span>
                  "Kolejność nie ma znaczenia w problemach słownych"
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Dlaczego jest problematyczne:</strong> 3×4 = 4×3 w matematyce. Ale 
                  kontekst może być różny: 3 grupy po 4 vs. 4 grupy po 3.
                </p>
                <p className="text-gray-700">
                  <strong className="text-green-700">Jak to naprawić:</strong> Omów 
                  własność przemienną, ale podkreśl znaczenie zrozumienia 
                  kontekstu problemu.
                </p>
              </div>

              {/* Misconception 3 */}
              <div className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-2">❌</span>
                  "Mnożenie to tylko zapamiętywanie"
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Dlaczego jest problematyczne:</strong> Uczniowie mogą 
                  zapamiętywać bez zrozumienia, co utrudnia zastosowanie i zapamiętywanie.
                </p>
                <p className="text-gray-700">
                  <strong className="text-green-700">Jak to naprawić:</strong> Zawsze 
                  ucz koncepcji przed zapamiętywaniem. Używaj modeli wizualnych 
                  i strategii zrozumienia.
                </p>
              </div>

              {/* Misconception 4 */}
              <div className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-2">❌</span>
                  "Wzory zawsze działają bez ich zrozumienia"
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Dlaczego jest problematyczne:</strong> Uczniowie stosują 
                  wzory mechanicznie bez zrozumienia matematycznego "dlaczego".
                </p>
                <p className="text-gray-700">
                  <strong className="text-green-700">Jak to naprawić:</strong> Ucząc 
                  wzorów (np. tabliczka 9), zawsze wyjaśniaj, dlaczego działają, 
                  używając właściwości matematycznych.
                </p>
              </div>

              {/* Misconception 5 */}
              <div className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-2">❌</span>
                  "Jest tylko jeden prawidłowy sposób rozwiązania"
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Dlaczego jest problematyczne:</strong> Ogranicza kreatywne 
                  myślenie i elastyczność numeryczną.
                </p>
                <p className="text-gray-700">
                  <strong className="text-green-700">Jak to naprawić:</strong> Świętuj 
                  wiele strategii. Poproś uczniów o dzielenie się różnymi 
                  metodami i omów, kiedy każda jest najbardziej przydatna.
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
            Wskazówki i Najlepsze Praktyki
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">💡</span>
                Wskazówki Sukcesu
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✦</span>
                  <span>Krótkie, codzienne ćwiczenia są lepsze niż długie sporadyczne sesje</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✦</span>
                  <span>Świętuj postępy, a nie tylko perfekcję</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✦</span>
                  <span>Różnicuj metody ćwiczeń, aby utrzymać zainteresowanie</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✦</span>
                  <span>Łącz z innymi przedmiotami: sztuka, muzyka, wychowanie fizyczne</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✦</span>
                  <span>Angażuj rodziny w zajęcia domowe</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✦</span>
                  <span>Używaj technologii jako uzupełnienia, nie zastępstwa</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">🎯</span>
                Sugerowana Sekwencja
              </h3>
              <div className="space-y-3">
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1</span>
                  <span className="text-gray-700">Tabliczki 1, 2, 10, 5</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2</span>
                  <span className="text-gray-700">Własność przemienna (zmniejsza obciążenie)</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">3</span>
                  <span className="text-gray-700">Tabliczka 4 (podwójne 2)</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">4</span>
                  <span className="text-gray-700">Tabliczka 9 (specjalne wzory)</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">5</span>
                  <span className="text-gray-700">Tabliczki 3 i 6 (relacja potrójnej)</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">6</span>
                  <span className="text-gray-700">Tabliczki 7, 8 (bardziej wymagające)</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">7</span>
                  <span className="text-gray-700">Tabliczki 11, 12 (zaawansowane wzory)</span>
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
            Dodatkowe Zasoby
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Link 
              href="/pl/tabliczki-mnozenia/1-10" 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-4xl mb-3">📘</div>
              <h3 className="font-bold text-gray-900 mb-2">Tabliczki 1-10</h3>
              <p className="text-sm text-gray-600">Podstawowe zasoby</p>
            </Link>

            <Link 
              href="/pl/tabliczki-mnozenia/11-20" 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-4xl mb-3">📗</div>
              <h3 className="font-bold text-gray-900 mb-2">Tabliczki 11-20</h3>
              <p className="text-sm text-gray-600">Poziom średnio zaawansowany</p>
            </Link>

            <Link 
              href="/pl/tabliczki-mnozenia/dla-uczniow" 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-4xl mb-3">👨‍🎓</div>
              <h3 className="font-bold text-gray-900 mb-2">Dla Uczniów</h3>
              <p className="text-sm text-gray-600">Przewodnik nauki</p>
            </Link>

            <Link 
              href="/pl/tabliczki-mnozenia/dla-rodzicow" 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-4xl mb-3">👨‍👩‍👧</div>
              <h3 className="font-bold text-gray-900 mb-2">Dla Rodziców</h3>
              <p className="text-sm text-gray-600">Wsparcie domowe</p>
            </Link>
          </div>

          <div className="mt-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl shadow-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Potrzebujesz Więcej Pomocy?
            </h3>
            <p className="text-lg mb-6">
              Poznaj nasze indywidualne tabliczki mnożenia z konkretnymi zasobami, 
              ćwiczeniami do druku i interaktywnymi zajęciami.
            </p>
            <Link 
              href="/pl/tabliczki-mnozenia"
              className="inline-block bg-white text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
            >
              Zobacz Wszystkie Tabliczki Mnożenia
            </Link>
          </div>
        </div>
      </section>

      <FooterPl />
    </div>
  );
}
