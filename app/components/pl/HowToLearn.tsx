export default function HowToLearnPl() {
  return (
    <section className="section-container bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-slate-900 mb-12 text-center">
          Jak Skutecznie Uczyć się Tabliczek Mnożenia?
        </h2>
        
        <div className="space-y-12">
          <article>
            <h3 className="text-slate-900 mb-4 flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                1
              </span>
              <span>Ucz się przez rozumienie wzorców</span>
            </h3>
            <div className="ml-11 space-y-4 text-slate-700">
              <p>
                Tabliczki mnożenia mają wiele wzorców i sekwencji. Znalezienie tych wzorców 
                zapewnia logiczne zrozumienie zamiast samego zapamiętywania:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Wielokrotności 2:</strong> Zawsze liczby parzyste (2, 4, 6, 8...)
                </li>
                <li>
                  <strong>Wielokrotności 5:</strong> Zawsze kończą się na 0 lub 5 (5, 10, 15, 20...)
                </li>
                <li>
                  <strong>Wielokrotności 9:</strong> Suma cyfr jest zawsze podzielna przez 9 
                  (18: 1+8=9, 27: 2+7=9)
                </li>
                <li>
                  <strong>Wielokrotności 10:</strong> Zawsze kończą się na 0 (10, 20, 30...)
                </li>
                <li>
                  <strong>Własność przemienna:</strong> 3 × 4 = 4 × 3 (Kolejność nie wpływa na wynik)
                </li>
              </ul>
              <p>
                Znajomość tych wzorców ułatwia naukę. Nie musisz zapamiętywać
                prawie 100 wyników. Wystarczy poznać logikę.
              </p>
            </div>
          </article>
          
          <article>
            <h3 className="text-slate-900 mb-4 flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-educational-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                2
              </span>
              <span>Stopniowa i powtarzana nauka</span>
            </h3>
            <div className="ml-11 space-y-4 text-slate-700">
              <p>
                Tabliczek mnożenia nie można i nie trzeba uczyć się w jeden dzień. 
                Najskuteczniejszą metodą jest stopniowa i regularna praktyka:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Zacznij od małych kroków:</strong> Zacznij najpierw od prostych liczb 
                  takich jak 1, 2, 5 i 10
                </li>
                <li>
                  <strong>10-15 minut dziennie:</strong> Krótkie i regularne ćwiczenia tabliczek są 
                  skuteczniejsze niż długie, odizolowane sesje
                </li>
                <li>
                  <strong>Utrwal poprzednią naukę:</strong> Powtarzaj to, czego się nauczyłeś przed przejściem do nowej 
                  liczby
                </li>
                <li>
                  <strong>Ćwicz w odstępach:</strong> Zwiększ pojemność pamięci powtarzając 
                  w odstępach tygodnia, miesiąca
                </li>
              </ul>
              <p>
                Regularne powtarzanie pomaga zapamiętać na dłużej. Informacje
                przechodzą z pamięci krótkotrwałej do długotrwałej.
              </p>
            </div>
          </article>
          
          <article>
            <h3 className="text-slate-900 mb-4 flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                3
              </span>
              <span>Ucz się przez praktykę</span>
            </h3>
            <div className="ml-11 space-y-4 text-slate-700">
              <p>
                Zrozumienie teorii jest ważne, ale bez praktyki nie ma 
                trwałej nauki. Zalety praktyki:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Aktywna pamięć:</strong> Aktywna praca nad zapamiętaniem, zamiast pasywnego czytania, 
                  wzmacnia mózg
                </li>
                <li>
                  <strong>Analiza błędów:</strong> Identyfikuj swoje słabości badając 
                  niepoprawnie rozwiązane pytania
                </li>
                <li>
                  <strong>Rozwój szybkości:</strong> Dzięki regularnej praktyce zyskujesz zarówno 
                  dokładność jak i szybkość
                </li>
                <li>
                  <strong>Zastosowanie w różnych kontekstach:</strong> Używaj ich w różnych 
                  środowiskach, takich jak pytania, gry, codzienne problemy
                </li>
              </ul>
              <p>
                Informacje, które są nauczane tylko poprzez czytanie lub słuchanie bez praktyki 
                są szybko zapominane. Aktywne zastosowanie jest głównym kluczem do nauki.
              </p>
            </div>
          </article>
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-primary-50 to-educational-50 border border-primary-200 rounded-lg p-8">
          <h4 className="text-xl font-semibold text-slate-900 mb-4">
            Ważne Przypomnienie
          </h4>
          <p className="text-slate-700">
            Każde dziecko uczy się w swoim tempie. Jedni potrzebują tygodnia,
            inni kilku miesięcy. Ważna jest ciągłość i cierpliwość.
            Stosuj właściwe metody i wspieraj zamiast wywierać presję.
          </p>
        </div>
      </div>
    </section>
  )
}
