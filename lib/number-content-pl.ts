// AUTO-EXTRACTED verbatim from app/components/pl/NumberPage.tsx
// Per-number curated content for locale: pl
import type { PatternItem, MistakeItem, RealLifeItem, FunFactItem } from './number-content-types'

const meanings: { [key: number]: string } = {
      1: "Mnożenie przez 1 jest specjalnym przypadkiem w matematyce. Kiedy mnożysz dowolną liczbę przez 1, wynikiem jest zawsze ta sama liczba. Nazywa się to właściwością tożsamości mnożenia. Pomyśl o tym w ten sposób: 'Ile grup mam?' Jeśli masz tylko 1 grupę, masz dokładnie to, od czego zacząłeś.",
      2: "Mnożenie przez 2 oznacza podwojenie liczby. Kiedy mnożysz coś przez 2, dodajesz liczbę do samej siebie. To jedna z najbardziej praktycznych tabliczek mnożenia, ponieważ często musimy podwajać rzeczy w codziennym życiu — liczenie par butów, kół rowerowych lub dzielenie czegoś równo między dwie osoby.",
      3: "Mnożenie przez 3 oznacza wzięcie liczby trzy razy. Możesz myśleć o tym jako o dodaniu tej samej liczby do siebie trzy razy. Ta tabliczka mnożenia jest ważna dla zrozumienia trójkątów, trójek i wszystkiego, co występuje w grupach po trzy.",
      4: "Mnożenie przez 4 to jakby podwojenie dwa razy. Ponieważ 4 = 2 × 2, możesz podwoić liczbę, a następnie podwoić wynik ponownie. To sprawia, że tabliczka mnożenia przez 4 jest łatwiejsza do nauczenia, jeśli już znasz tabliczkę przez 2. Liczba 4 występuje często w geometrii (kwadraty mają 4 boki) i pomiarze czasu (są 4 kwartały).",
      5: "Mnożenie przez 5 tworzy jeden z najpiękniejszych wzorów w matematyce. Wszystkie wielokrotności 5 kończą się na 0 lub 5, co sprawia, że ta tabliczka mnożenia jest bardzo przewidywalna. Jest niezwykle przydatna do liczenia pieniędzy (monety 5-złotowe, banknoty 5-złotowe) i odczytywania zegara (odstępy 5-minutowe).",
      6: "Mnożenie przez 6 oznacza wzięcie grup po sześć liczb. 6 jest pierwszą 'prawdziwą' tabliczką mnożenia, ponieważ nie jest tylko wielokrotnością 2 lub 3. Ale ponieważ 6 = 2 × 3, możesz pomnożyć liczbę przez 2, a następnie przez 3 (lub odwrotnie), aby pomnożyć przez 6. Liczba 6 występuje często w naturze (komórki plastra miodu) i w codziennym życiu (pudełka na jajka, ściany kostki).",
      7: "Mnożenie przez 7 jest generalnie jedną z najtrudniejszych tabliczek mnożenia dla uczniów, ponieważ 7 jest liczbą pierwszą i nie można jej łatwo wyprowadzić z innych tabliczek mnożenia. Ale wszystkie wielokrotności 7 mają piękne wzory i można je nauczyć poprzez praktykę. 7 jest ważną liczbą dla dni tygodnia, kontynentów i wielu odniesień kulturowych.",
      8: "Mnożenie przez 8 to jakby podwojenie trzy razy (8 = 2 × 2 × 2). Podwój liczbę, podwój wynik ponownie i podwój jeszcze raz — wtedy pomnożyłeś przez 8. Ta tabliczka mnożenia jest łatwiejsza do nauczenia, gdy dobrze znasz tabliczki przez 2 i 4. 8 jest ważną liczbą w geometrii (ośmiokąty) i muzyce (oktawy).",
      9: "Mnożenie przez 9 ma jeden z najbardziej fascynujących wzorów w matematyce. Kiedy dodajesz cyfry dowolnej wielokrotności 9, wynik jest zawsze podzielny przez 9. Ponadto cyfra dziesiątek w 9 × n jest zawsze n-1. Tę tabliczkę mnożenia można również nauczyć za pomocą sztuczek palcami. Ponieważ 9 to tylko 1 mniej niż 10, można ją również obliczyć za pomocą tabliczki mnożenia przez 10.",
      10: "Mnożenie przez 10 jest jedną z najłatwiejszych tabliczek mnożenia. Kiedy mnożysz dowolną liczbę przez 10, po prostu dodajesz zero na końcu. To stanowi podstawę naszego systemu dziesiętnego. Nauka mnożenia przez 10 uczy uczniów koncepcji wartości miejsca i jak pracować z dużymi liczbami. Tabliczka mnożenia przez 10 jest punktem odniesienia do zrozumienia wszystkich innych tabliczek mnożenia.",
      11: "Mnożenie przez 11 ma jeden z najciekawszych wzorów w matematyce. Kiedy mnożysz liczby jednocyfrowe przez 11, wynik to ta liczba powtórzona dwa razy (11×3=33, 11×7=77). W mnożeniu dwucyfrowym przez 11 jest również piękny wzór: dodajesz cyfry i umieszczasz je pośrodku. 11 jest liczbą pierwszą i ma specjalne właściwości matematyczne.",
      12: "Mnożenie przez 12 jest jedną z najbardziej praktycznych tabliczek mnożenia, ponieważ 12 jest podzielne przez wiele liczb (1, 2, 3, 4, 6, 12). Ta właściwość sprawia, że 12 jest bardzo przydatne w codziennym życiu — jest 12 sztuk w tuzinie, 12 godzin na zegarze, 12 miesięcy w roku. Ponieważ 12 = 3 × 4 = 2 × 6, możesz nauczyć się tej tabliczki mnożenia na kilka sposobów.",
    }

const importance: { [key: number]: string } = {
      1: "Tabliczka mnożenia przez 1 jest podstawą wszystkich operacji mnożenia. Uczy uczniów, że liczby mają tożsamość: kiedy są mnożone przez 1, pozostają niezmienione. Ta koncepcja jest ważna dla zrozumienia późniejszych właściwości algebraicznych. Choć wydaje się prosta, nauka tej tabliczki mnożenia buduje pewność siebie i ustanawia wzór, że mnożenie jest uporządkowane i przewidywalne.",
      2: "Tabliczka mnożenia przez 2 jest generalnie pierwszą prawdziwą tabliczką mnożenia, której uczą się uczniowie, i jest ku temu dobry powód. Podwajanie jest naturalną koncepcją, którą dzieci spotykają codziennie. Nauka tej tabliczki mnożenia sprawia, że arytmetyka mentalna jest znacznie szybsza i przygotowuje uczniów na liczby parzyste, ułamki (połowy) i podstawowe dzielenie. Wielu uczniów uważa ją za najłatwiejszą tabliczkę mnożenia, co buduje pewność siebie dla bardziej złożonych tabliczek mnożenia.",
      3: "Tabliczka mnożenia przez 3 łączy lukę między prostymi a złożonymi tabliczkami mnożenia. Wymaga od uczniów wyjścia poza proste podwajanie i rozpoznania nowych wzorów. Ta tabliczka mnożenia występuje stale w kontekstach rzeczywistych, takich jak liczenie w grupach po trzy, rozumienie kształtów trójkątnych i praca z czasem (trzy okresy dziennie). Uczniowie, którzy nauczą się tabliczki mnożenia przez 3, demonstrują mistrzostwo w abstrakcyjnym liczeniu.",
    }

const patterns: { [key: number]: PatternItem[] } = {
      1: [
        { title: "Wzór Tożsamości", description: "Każda liczba pomnożona przez 1 daje siebie. To się nigdy nie zmienia: 1×1=1, 1×2=2, 1×3=3 i tak dalej." },
        { title: "Przewidywalna Seria", description: "Wyniki po prostu liczą w górę: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Po prostu zapisujesz liczby w kolejności." },
        { title: "Fundament Dla Wszystkich Tabliczek Mnożenia", description: "Każda tabliczka mnożenia zaczyna się od mnożenia przez 1, więc ten wzór występuje we wszystkich tabliczkach mnożenia." },
      ],
      2: [
        { title: "Tylko Liczby Parzyste", description: "Wszystkie wielokrotności 2 są liczbami parzystymi. Wyniki zawsze kończą się na 0, 2, 4, 6 lub 8." },
        { title: "Liczenie Po Dwójkach", description: "Każda odpowiedź jest o 2 więcej niż poprzednia: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20." },
        { title: "Wzór Podwajania", description: "Każdy wynik jest dokładnie podwojeniem czynnika: 2×5=10 to podwojenie 5." },
      ],
      3: [
        { title: "Wzór Sumy Cyfr", description: "Dodaj cyfry w każdym wyniku: 3 (3), 6 (6), 9 (9), 12 (1+2=3), 15 (1+5=6), 18 (1+8=9). Wzór 3-6-9 się powtarza!" },
        { title: "Liczenie Po Trójkach", description: "Każda odpowiedź wzrasta o 3: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30." },
        { title: "Przemienność Nieparzystych-Parzystych", description: "Wyniki się przeplatają: nieparzyste (3), parzyste (6), nieparzyste (9), parzyste (12), tworząc przewidywalny rytm." },
      ],
    }

const mistakes: { [key: number]: MistakeItem[] } = {
      1: [
        { mistake: "Przekonanie, że 1×1=2", solution: "Pamiętaj: cokolwiek pomnożone przez 1 pozostaje takie samo. 1 grupa 1 to tylko 1." },
        { mistake: "Pomylenie z dodawaniem", solution: "Mnożenie przez 1 różni się od dodawania. 5+1=6, ale 5×1=5." },
      ],
      2: [
        { mistake: "Pomylenie 2×6=12 z 2×7=14", solution: "Użyj liczenia z przeskokiem: 2, 4, 6, 8, 10, 12, 14. Licz ostrożnie bez pomijania." },
        { mistake: "Pomylenie z większymi liczbami", solution: "Rozłóż to: 2×8 to PO PROSTU 8+8. Podwajanie to proste dodawanie." },
      ],
    }

const strategies: { [key: number]: string[] } = {
      1: [
        "Wypowiadaj każde mnożenie głośno: 'Jeden razy jeden to jeden, jeden razy dwa to dwa...'",
        "Ćwicz pisanie tabliczki mnożenia raz dziennie przez tydzień",
        "Znajdź wzór: odpowiedź jest zawsze taka sama jak druga liczba",
        "Używaj fiszek, chociaż ta tabliczka mnożenia jest zwykle uczenia się bardzo szybko",
      ],
      2: [
        "Licz po dwójkach podczas chodzenia lub wspinania się po schodach: 2, 4, 6, 8...",
        "Używaj palców: trzymaj palce w parach i licz po dwójkach",
        "Ćwicz podwajanie liczb mentalnie przez cały dzień",
        "Mów głośno: 'Dwa razy pięć to pięć plus pięć, co daje dziesięć'",
      ],
    }

export function getNumberMeaning(n: number): string | null {
  return meanings[n] ?? null
}

export function getWhyImportant(n: number): string | null {
  return importance[n] ?? null
}

export function getPatterns(n: number): PatternItem[] {
  return patterns[n] ?? []
}

export function getCommonMistakes(n: number): MistakeItem[] {
  return mistakes[n] ?? []
}

export function getPracticeStrategies(n: number): string[] {
  return strategies[n] ?? []
}

const realLifeExamples: { [key: number]: RealLifeItem[] } = {
      1: [
        { context: "Bycie 'numerem jeden'", detail: "W wielu językach i kulturach bycie numerem jeden oznacza pierwsze miejsce lub najwyższą pozycję — od podium sportowego po szkolne rankingi." },
        { context: "Pojedynczy przedmiot", detail: "Za każdym razem, gdy liczysz jeden przedmiot — jedno jabłko, jedno krzesło — stosujesz ideę, że 1 grupa czegoś to po prostu ta jedna rzecz." },
        { context: "Pierwsza pozycja w kolejności", detail: "Strona 1, Dzień 1, Runda 1 — jedynka wyznacza punkt startowy niezliczonych systemów numeracji." },
      ],
      2: [
        { context: "Pary butów, skarpetek i rękawiczek", detail: "Większość codziennych par składa się z 2 sztuk — bezpośredni, namacalny model podwajania." },
        { context: "Oczy i uszy", detail: "Ludzkie ciało ma 2 oczy i 2 uszy, obok wielu innych parzystych narządów." },
        { context: "Koła roweru", detail: "Standardowy rower ma 2 koła, w przeciwieństwie do trójkołowca (3) czy jednokołowca (1)." },
        { context: "Kod binarny w informatyce", detail: "Komputery przechowują i przetwarzają informacje w systemie binarnym (podstawa 2), zbudowanym wyłącznie z dwóch cyfr: 0 i 1." },
      ],
      3: [
        { context: "Sygnalizacja świetlna", detail: "Standardowe światła drogowe używają 3 kolorów: czerwonego, żółtego i zielonego." },
        { context: "Trójkąty", detail: "Każdy trójkąt ma dokładnie 3 boki i 3 kąty — najprostszy możliwy wielokąt." },
        { context: "Podium medalowe", detail: "Igrzyska olimpijskie i wiele innych zawodów przyznaje 3 medale: złoty, srebrny i brązowy." },
        { context: "Barwy podstawowe", detail: "W tradycyjnej teorii barw uczonej w szkole czerwony, żółty i niebieski uznaje się za 3 barwy podstawowe." },
      ],
      4: [
        { context: "Cztery pory roku", detail: "W wielu regionach świata rok dzieli się na 4 pory roku: wiosnę, lato, jesień i zimę." },
        { context: "Strony świata", detail: "Kompas ma 4 główne kierunki: północ, południe, wschód i zachód." },
        { context: "Nogi stołu", detail: "Większość stołów i krzeseł ma dla stabilności 4 nogi." },
        { context: "Kolory w talii kart", detail: "Standardowa talia 52 kart dzieli się na 4 kolory: kier, karo, trefl i pik." },
      ],
      5: [
        { context: "Palce jednej dłoni", detail: "Większość ludzi ma 5 palców na dłoni, co czyni 5 jedną z najbardziej naturalnych liczb do wczesnej nauki liczenia." },
        { context: "Pięć zmysłów", detail: "Wzrok, słuch, węch, smak i dotyk są powszechnie opisywane jako 5 tradycyjnych zmysłów człowieka." },
        { context: "Pięciokąt", detail: "Pięciokąt to figura o pięciu bokach, a siedziba amerykańskiego Departamentu Obrony, Pentagon, zawdzięcza swoją nazwę właśnie temu kształtowi." },
        { context: "Pieniądze w jednostkach po 5", detail: "Wiele walut zawiera jednostkę 5, jak moneta 5-złotowa." },
      ],
      6: [
        { context: "Ściany kostki do gry", detail: "Standardowa sześcienna kostka do gry ma dokładnie 6 ścian." },
        { context: "Nogi owadów", detail: "Wszystkie owady z definicji mają 6 nóg — to jedna z cech odróżniających je od pająków, które mają 8." },
        { context: "Struny gitary", detail: "Standardowa gitara akustyczna lub elektryczna ma 6 strun." },
        { context: "Pół tuzina", detail: "Jajka i wypieki często sprzedaje się w ilości pół tuzina — czyli 6 sztuk." },
      ],
      7: [
        { context: "7 dni tygodnia", detail: "Używane dziś w niemal każdym systemie kalendarzowym na świecie." },
        { context: "7 kontynentów", detail: "Afryka, Antarktyda, Azja, Australia, Europa, Ameryka Północna i Ameryka Południowa — w modelu najczęściej nauczanym w szkołach." },
        { context: "7 dźwięków w gamie muzycznej", detail: "C, D, E, F, G, A, H — zanim wzór powtórzy się o oktawę wyżej." },
        { context: "7 kolorów tęczy", detail: "Czerwony, pomarańczowy, żółty, zielony, niebieski, indygo i fioletowy — podział spopularyzowany po raz pierwszy przez Isaaca Newtona." },
        { context: "Siedem Cudów Świata Starożytnego", detail: "W tym Wielka Piramida w Gizie, jedyny cud, który przetrwał do dziś." },
      ],
      8: [
        { context: "Nogi pająków", detail: "Pająki i inne pajęczaki mają 8 nóg, w przeciwieństwie do owadów, które mają 6." },
        { context: "Ramiona ośmiornicy", detail: "Ośmiornica ma 8 ramion — stąd jej nazwa (od greckiego 'okto', czyli osiem)." },
        { context: "Bajt w informatyce", detail: "W informatyce 8 bitów tworzy 1 bajt, podstawową jednostkę do mierzenia pamięci i przechowywania danych cyfrowych." },
        { context: "Oktawa w muzyce", detail: "W muzyce zachodniej oktawa obejmuje 8 dźwięków (na przykład od C do kolejnego C: C, D, E, F, G, A, H, C)." },
      ],
      9: [
        { context: "Zmiany w baseballu", detail: "Standardowy mecz baseballu składa się z 9 zmian (inningów)." },
        { context: "Kwadrat 3×3", detail: "9 to liczba kwadratowa: siatka z 3 wierszy i 3 kolumn zawiera dokładnie 9 pól, jak plansza do kółka i krzyżyka." },
        { context: "Układ Słoneczny, historycznie", detail: "Przez większą część XX wieku uczniowie uczyli się, że istnieje 9 planet; Pluton został przeklasyfikowany na planetę karłowatą w 2006 roku, pozostawiając dziś 8 uznanych planet." },
      ],
      10: [
        { context: "System dziesiętny", detail: "Niemal wszystkie nowoczesne systemy liczenia są oparte na podstawie 10, zbudowane w całości z grup po dziesięć." },
        { context: "Palce u rąk i nóg", detail: "Większość ludzi ma 10 palców u rąk i 10 u nóg, co uważa się za jeden z powodów, dla których liczenie w systemie dziesiętnym tak bardzo się rozpowszechniło." },
        { context: "Dziesięciobój", detail: "Dziesięciobój to konkurencja lekkoatletyczna złożona dokładnie z 10 dyscyplin." },
        { context: "Pieniądze w jednostkach po 10", detail: "Wiele walut jest zbudowanych wokół jednostek po 10, jak banknot 10-złotowy." },
      ],
      11: [
        { context: "Zawodnicy w drużynie piłkarskiej", detail: "Każda drużyna wystawia na boisku 11 zawodników w standardowym meczu piłki nożnej." },
        { context: "Dwucyfrowe liczby z powtórzoną cyfrą", detail: "11 to najmniejsza dwucyfrowa liczba złożona z jednej powtórzonej cyfry — wzór ten widać bezpośrednio w jej tabliczce mnożenia." },
      ],
      12: [
        { context: "Miesiące w roku", detail: "Rok kalendarzowy dzieli się na 12 miesięcy." },
        { context: "Cale w stopie (foot)", detail: "W systemie miar angielskich 1 stopa równa się 12 calom." },
        { context: "Cyfry na tarczy zegara", detail: "Standardowa tarcza zegara analogowego jest podzielona na 12 cyfr." },
        { context: "Tuzin", detail: "Jajka i wypieki często sprzedaje się na tuziny — grupy po 12." },
        { context: "Znaki zodiaku", detail: "Zachodni zodiak tradycyjnie dzieli się na 12 znaków." },
      ],
    }

const funFacts: { [key: number]: FunFactItem[] } = {
      1: [
        { fact: "Liczba 1 nie jest ani liczbą pierwszą, ani złożoną — z definicji liczba pierwsza musi mieć dokładnie dwa różne dodatnie dzielniki, a 1 ma tylko jeden (samą siebie)." },
        { fact: "Mnożenie dowolnej liczby przez 1 nazywa się własnością elementu neutralnego mnożenia — jedną z pierwszych formalnych reguł, jakich uczniowie uczą się w arytmetyce." },
        { fact: "W liczbach rzymskich 1 zapisuje się jedną kreską: I — najprostszym symbolem w całym systemie liczbowym." },
      ],
      2: [
        { fact: "2 to jedyna parzysta liczba pierwsza — wszystkie inne liczby parzyste dzielą się przez 2, przez co są liczbami złożonymi." },
        { fact: "Ponieważ 2 jest najmniejszą liczbą pierwszą, jest punktem wyjścia dla całej koncepcji rozkładu na czynniki pierwsze." },
        { fact: "Podwajanie to jeden z najszybszych trików rachunku pamięciowego — wielokrotne podwajanie pojawia się też w informatyce jako potęgi liczby 2: 2, 4, 8, 16, 32..." },
      ],
      3: [
        { fact: "Sztuczka z sumą cyfr dla liczby 3 działa, ponieważ 10 przy dzieleniu przez 3 daje resztę 1 — z tego samego powodu działa też dla liczby 9." },
        { fact: "3 to najmniejsza nieparzysta liczba pierwsza." },
        { fact: "Trójkąt to jedyny wielokąt naturalnie sztywny, dlatego trójkątne kształty są tak często stosowane w mostach i konstrukcjach budynków." },
      ],
      4: [
        { fact: "4 to najmniejsza liczba złożona — pierwsza liczba większa od 1, która nie jest pierwsza, ponieważ dzieli się bez reszty przez 2." },
        { fact: "4 to liczba kwadratowa: 4 = 2 × 2, czyli 2²." },
        { fact: "Ponieważ 4 = 2 × 2, tabliczkę mnożenia przez 4 zawsze można uzyskać, podwajając tabliczkę przez 2 — kto zna tabliczkę przez 2, nie musi uczyć się niczego nowego." },
      ],
      5: [
        { fact: "5 leży dokładnie w połowie drogi między 0 a 10, dlatego tabliczka mnożenia przez 5 zawsze jest połową odpowiadającej tabliczki przez 10." },
        { fact: "5 to liczba pierwsza i jedyna liczba pierwsza kończąca się cyfrą 5." },
        { fact: "Zegary są podzielone na 5-minutowe odstępy, więc mnożenie przez 5 jest wbudowane w sposób, w jaki większość ludzi odczytuje czas, nawet o tym nie myśląc." },
      ],
      6: [
        { fact: "6 to najmniejsza liczba doskonała — suma jej właściwych dzielników (1, 2 i 3) daje dokładnie ją samą: 1+2+3=6." },
        { fact: "6 = 2 × 3, co czyni ją najmniejszą liczbą będącą iloczynem dwóch różnych liczb pierwszych." },
        { fact: "Ponieważ 6 jest parzysta i podzielna przez 3, każda wielokrotność 6 automatycznie dzieli się zarówno przez 2, jak i przez 3." },
      ],
      7: [
        { fact: "Siedem to liczba pierwsza Mersenne'a — jest równa 2³ − 1 (2 × 2 × 2, minus 1), co czyni ją częścią rzadkiej rodziny liczb pierwszych związanych z potęgami 2." },
        { fact: "Tydzień siedmiodniowy sięga starożytnej astronomii babilońskiej, która śledziła dokładnie 7 obiektów niebieskich widocznych gołym okiem: Słońce, Księżyc i pięć planet — Merkurego, Wenus, Marsa, Jowisza i Saturna." },
        { fact: "Siódemka jest uznawana za szczęśliwą liczbę w wielu kulturach, dlatego tak często pojawia się w grach i tradycjach hazardowych na całym świecie." },
        { fact: "Słynny numer kodowy Jamesa Bonda to 007, a Śnieżka mieszka z dokładnie siedmioma krasnoludkami." },
      ],
      8: [
        { fact: "8 = 2³, co czyni ją pierwszą liczbą sześcienną większą od 1 (2 × 2 × 2 = 8)." },
        { fact: "Słowo 'ośmiornica' (octopus) i muzyczny termin 'oktawa' pochodzą z tego samego greckiego rdzenia oznaczającego osiem." },
        { fact: "8 to jedyna liczba między 1 a 12, do której trzeba dojść od 2 poprzez trzy kolejne podwojenia (2 → 4 → 8)." },
      ],
      9: [
        { fact: "9 to liczba kwadratowa: 9 = 3 × 3, czyli 3²." },
        { fact: "Bez względu na to, jak duża jest wielokrotność 9, wielokrotne sumowanie jej cyfr zawsze ostatecznie sprowadza się do 9 — matematycy nazywają tę właściwość 'cyfrowym pierwiastkiem'." },
        { fact: "9 to największa liczba jednocyfrowa, tuż przed tym, jak przy 10 zaczyna się wartość pozycyjna." },
      ],
      10: [
        { fact: "Słowo 'dziesięciobój' pochodzi od greckich rdzeni oznaczających 'dziesięć zawodów'." },
        { fact: "Mnożenie przez 10 to jedyna jednocyfrowa tabliczka mnożenia, w której każdy wynik podlega jednej, bezwyjątkowej regule: dopisz zero." },
        { fact: "Ponieważ większość ludzi ma 10 palców, system dziesiętny (bazujący na 10) uważany jest za jeden z najbardziej rozpowszechnionych systemów liczbowych w historii ludzkości." },
      ],
      11: [
        { fact: "11 to liczba pierwsza — jej jedynymi dzielnikami są 1 i ona sama." },
        { fact: "11 to najmniejsza dwucyfrowa liczba pierwsza." },
        { fact: "Wzór lustrzanych cyfr (11×4=44, 11×7=77) działa tylko dla jednocyfrowych czynników — jeden z najwyraźniejszych przykładów w tabliczkach mnożenia wzoru z wbudowaną granicą." },
      ],
      12: [
        { fact: "12 to liczba silnie złożona — ma więcej dzielników (1, 2, 3, 4, 6, 12) niż jakakolwiek mniejsza liczba dodatnia." },
        { fact: "Słowo 'tuzin' pochodzi od starofrancuskiego 'douzaine', oznaczającego grupę dwunastu." },
        { fact: "Grupę 144 przedmiotów — 12 tuzinów — tradycyjnie nazywa się 'gross' (wielki tuzin)." },
      ],
    }

export function getRealLifeExamples(n: number): RealLifeItem[] | null {
  return realLifeExamples[n] ?? null
}

export function getFunFacts(n: number): FunFactItem[] | null {
  return funFacts[n] ?? null
}
