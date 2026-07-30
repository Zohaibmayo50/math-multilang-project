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
      13: [
        { context: "13 pierwotnych kolonii amerykańskich", detail: "Stany Zjednoczone zaczęły jako 13 brytyjskich kolonii wzdłuż wybrzeża atlantyckiego, zanim ogłosiły niepodległość." },
        { context: "Karty w każdym kolorze", detail: "Standardowa talia 52 kart ma 13 kart w każdym z czterech kolorów." },
        { context: "Tuzin piekarski", detail: "Tradycyjnie 'tuzin piekarski' oznacza 13 sztuk zamiast 12." },
        { context: "Triskaidekafobia", detail: "13 jest liczbą najczęściej kojarzoną z pechem w kulturze zachodniej — strach przed nią ma nawet własną nazwę." },
      ],
      14: [
        { context: "Czternaście dni, dwa tygodnie", detail: "W języku angielskim słowo 'fortnight' oznacza okres 14 dni." },
        { context: "Walentynki", detail: "Walentynki przypadają co roku 14 lutego." },
        { context: "Wersy w sonecie", detail: "Klasyczny sonet, taki jak pisał Szekspir, ma dokładnie 14 wersów." },
      ],
      15: [
        { context: "Kwadrans", detail: "15 minut to kwadrans — jedno z najczęstszych codziennych zastosowań tej liczby." },
        { context: "Skład drużyny rugby union", detail: "Drużyna rugby union wystawia na boisku 15 zawodników, inaczej niż 13 w rugby league." },
      ],
      16: [
        { context: "Uncje w funcie", detail: "W amerykańskim systemie miar 1 funt to 16 uncji." },
        { context: "System szesnastkowy w informatyce", detail: "Informatycy używają podstawy 16 (szesnastkowej) jako zwartego sposobu przedstawiania danych binarnych." },
        { context: "Pionki na szachownicy", detail: "Zestaw szachowy zawiera łącznie 16 pionków — po 8 dla każdego gracza." },
        { context: "'Słodkie szesnaście'", detail: "16. urodziny są w kilku kulturach uznawane za ważny kamień milowy." },
      ],
      17: [
        { context: "Liczba, która 'wydaje się' najbardziej losowa", detail: "W nieformalnych ankietach, gdzie proszono o wskazanie 'losowej' liczby z małego zakresu, ludzie wybierają 17 częściej, niż wynikałoby to z czystego przypadku — ciekawostka ludzkiej psychiki, a nie prawdziwej losowości." },
      ],
      18: [
        { context: "Pełnoletność w Polsce", detail: "W Polsce, podobnie jak w wielu innych krajach, pełnoletność osiąga się w wieku 18 lat." },
        { context: "Dołki na polu golfowym", detail: "Standardowe pole golfowe ma 18 dołków." },
      ],
      19: [
        { context: "Koniec wieku nastoletniego", detail: "W języku angielskim liczby kończące się na '-teen' sięgają od 13 do 19 — 19 to ostatnia przed ukończeniem 20 lat." },
      ],
      20: [
        { context: "Ostrość wzroku 20/20", detail: "'Wzrok 20/20' to standardowe angielskie określenie prawidłowej ostrości widzenia, mierzonej z odległości 20 stóp." },
        { context: "Palce u rąk i nóg razem", detail: "Większość ludzi ma 10 palców u rąk i 10 u nóg, co łącznie daje 20." },
      ],
      21: [
        { context: "Blackjack", detail: "W grze karcianej blackjack 21 to wynik docelowy, do którego dążą gracze, nie przekraczając go." },
        { context: "Legalny wiek picia alkoholu w USA", detail: "W Stanach Zjednoczonych minimalny legalny wiek zakupu alkoholu to 21 lat, ujednolicony w całym kraju na mocy ustawy federalnej z 1984 roku." },
      ],
      22: [
        { context: "Zawodnicy na boisku piłkarskim", detail: "Pełny mecz piłki nożnej to 22 zawodników na boisku — po 11 w każdej drużynie." },
        { context: "Paragraf 22", detail: "Tytuł powieści Josepha Hellera 'Paragraf 22' stał się w języku angielskim powszechnym określeniem sytuacji bez wyjścia." },
      ],
      23: [
        { context: "Pary ludzkich chromosomów", detail: "Typowa ludzka komórka zawiera 23 pary chromosomów — łącznie 46 chromosomów." },
      ],
      24: [
        { context: "24 godziny na dobę", detail: "Pełna doba dzieli się na 24 godziny." },
        { context: "24 karaty czystego złota", detail: "Złoto próby 24 karatów uznaje się za czyste złoto — najwyższą próbę stosowaną w jubilerstwie." },
        { context: "Liczba klatek filmowych na sekundę", detail: "24 klatki na sekundę to standardowa prędkość kina od czasów filmu dźwiękowego." },
      ],
      25: [
        { context: "Jedna czwarta setki", detail: "25 to dokładnie jedna czwarta 100 — stąd silny związek tej liczby z procentami." },
        { context: "Srebrne wesele", detail: "25. rocznica ślubu tradycyjnie nazywana jest 'srebrnym weselem'." },
      ],
      26: [
        { context: "Litery w alfabecie polskim", detail: "Współczesny alfabet polski liczy 32 litery, ale podstawowy alfabet łaciński, na którym się opiera, ma 26 liter." },
        { context: "Długość maratonu", detail: "Maraton ma dokładnie 42,195 km, co odpowiada mniej więcej 26,2 mili." },
        { context: "Kości w ludzkiej stopie", detail: "Według standardowych źródeł anatomicznych każda ludzka stopa zawiera 26 kości." },
      ],
      27: [
        { context: "'Klub 27'", detail: "Kilku wpływowych muzyków — m.in. Jimi Hendrix, Janis Joplin i Kurt Cobain — zmarło w wieku 27 lat, co kultura popularna nazwała 'Klubem 27'." },
      ],
      28: [
        { context: "Dni lutego", detail: "Luty ma 28 dni w każdym roku, który nie jest przestępny." },
        { context: "Cykl księżycowy", detail: "Cykl faz Księżyca opisuje się zwykle w przybliżeniu jako trwający około 28 dni, choć dokładny miesiąc synodyczny wynosi bliżej 29,5 dnia." },
      ],
      29: [
        { context: "Luty w roku przestępnym", detail: "W roku przestępnym luty ma 29 dni zamiast zwykłych 28." },
      ],
      30: [
        { context: "Miesiące z 30 dniami", detail: "Kwiecień, czerwiec, wrzesień i listopad mają po 30 dni, co przypomina znany wierszyk o miesiącach." },
      ],
      31: [
        { context: "Miesiące z 31 dniami", detail: "Styczeń, marzec, maj, lipiec, sierpień, październik i grudzień mają po 31 dni — siedem miesięcy w sumie." },
      ],
      32: [
        { context: "Temperatura zamarzania wody", detail: "Woda zamarza w 32°F w skali Fahrenheita." },
        { context: "Pełne uzębienie dorosłego", detail: "Pełne uzębienie dorosłego człowieka, łącznie z zębami mądrości, liczy 32 zęby." },
        { context: "Liczba drużyn NFL", detail: "Amerykańska liga futbolowa NFL składa się z 32 drużyn." },
      ],
      33: [
        { context: "Kręgi w ludzkim kręgosłupie", detail: "Mówi się często, że ludzki kręgosłup ma 33 kręgi, choć kilka z nich zrasta się w wieku dorosłym w kość krzyżową i guziczną." },
        { context: "Wiek Jezusa podczas ukrzyżowania", detail: "Według najbardziej rozpowszechnionej tradycji chrześcijańskiej Jezus miał 33 lata w chwili ukrzyżowania." },
      ],
      35: [
        { context: "Format filmu 35mm", detail: "35mm to od dawna standardowy format zarówno w fotografii, jak i w kinie." },
      ],
      36: [
        { context: "Cale w jardzie", detail: "W systemie miar angielskich 1 jard równa się 36 calom." },
      ],
      38: [
        { context: "38. równoleżnik", detail: "Ta linia szerokości geograficznej jest historycznie kojarzona z granicą między Koreą Północną a Południową." },
      ],
      39: [
        { context: "39 kroków", detail: "'39 kroków' to klasyczny thriller z 1935 roku w reżyserii Alfreda Hitchcocka, oparty na powieści o tym samym tytule z 1915 roku." },
      ],
      40: [
        { context: "'Czterdzieści dni i czterdzieści nocy'", detail: "Liczba 40 pojawia się w Biblii wielokrotnie, między innymi w historii potopu w Księdze Rodzaju." },
        { context: "Standardowy tydzień pracy", detail: "40-godzinny tydzień pracy jest powszechnym standardem w wielu krajach." },
        { context: "Pochodzenie słowa 'kwarantanna'", detail: "Słowo 'kwarantanna' pochodzi od włoskiego 'quaranta giorni' ('czterdzieści dni') — historycznego okresu izolacji nakładanego na statki podczas epidemii dżumy." },
      ],
      42: [
        { context: "'Odpowiedź na Życie, Wszechświat i Całą Resztę'", detail: "W powieści Autostopem przez galaktykę Douglasa Adamsa potężny superkomputer oblicza, że odpowiedzią na ostateczne pytanie jest liczba 42." },
        { context: "Liczba oczek na parze kostek", detail: "Standardowa kostka ma łącznie 21 oczek (1+2+3+4+5+6), więc para kostek daje razem 42 oczka." },
      ],
      44: [
        { context: "44. prezydent USA", detail: "Barack Obama był 44. prezydentem Stanów Zjednoczonych." },
      ],
      45: [
        { context: "Płyty 45 obr./min", detail: "Winylowe single tradycyjnie tłoczono tak, by odtwarzać je z prędkością 45 obrotów na minutę." },
      ],
      46: [
        { context: "Chromosomy w ludzkiej komórce", detail: "Typowa ludzka komórka zawiera 46 chromosomów, ułożonych w 23 pary." },
      ],
      48: [
        { context: "48 godzin", detail: "48 godzin to dokładnie dwie pełne doby." },
        { context: "Stany USA na jednym kontynencie", detail: "48 sąsiadujących ze sobą stanów USA wyklucza jedynie geograficznie odseparowane Alaskę i Hawaje." },
      ],
      50: [
        { context: "50 stanów USA", detail: "Stany Zjednoczone składają się z 50 stanów." },
        { context: "Złote wesele", detail: "50. rocznica ślubu tradycyjnie nazywana jest 'złotym weselem'." },
      ],
      51: [
        { context: "Strefa 51", detail: "Strefa 51 to słynna, przez długi czas tajna baza amerykańskich sił powietrznych w Newadzie, często przywoływana w kulturze popularnej." },
      ],
      52: [
        { context: "Tygodnie w roku", detail: "Standardowy rok ma 52 tygodnie." },
        { context: "Karty w talii", detail: "Standardowa talia kart ma 52 karty, nie licząc jokerów." },
      ],
      54: [
        { context: "Kwadraty na kostce Rubika", detail: "Klasyczna kostka Rubika 3×3 ma 9 kolorowych kwadratów na każdej ściance, co przy 6 ściankach daje łącznie 54 kwadraty." },
      ],
      55: [
        { context: "Dawny amerykański limit prędkości", detail: "Od 1974 do 1995 roku 55 mil na godzinę było maksymalnym limitem prędkości na amerykańskich autostradach na mocy prawa federalnego." },
      ],
      57: [
        { context: "Slogan Heinza '57 odmian'", detail: "Firma H.J. Heinz używa sloganu '57 odmian' od 1896 roku, mimo że dawno sprzedaje więcej niż 57 produktów." },
      ],
      59: [
        { context: "Sekunda przed pełną minutą", detail: "Minuta ma 60 sekund, więc 59 to ostatnia sekunda przed rozpoczęciem nowej minuty." },
      ],
      60: [
        { context: "Sekundy w minucie", detail: "Minuta ma 60 sekund." },
        { context: "Minuty w godzinie", detail: "Godzina ma 60 minut." },
      ],
      64: [
        { context: "Pola na szachownicy", detail: "Standardowa szachownica to siatka 8×8 zawierająca dokładnie 64 pola." },
        { context: "Klasyczne pudełko Crayola", detail: "Kultowe 'Big Box' Crayola od dawna zawiera 64 kolory kredek." },
        { context: "Nintendo 64", detail: "Nintendo 64 to kultowa konsola z lat 90., nazwana od swojego 64-bitowego procesora." },
      ],
      65: [
        { context: "Tradycyjny wiek emerytalny", detail: "65 lat od dawna jest używane jako standardowy wiek emerytalny w wielu krajach." },
        { context: "Typowy limit prędkości na autostradzie", detail: "65 mil na godzinę to popularny limit prędkości na autostradach w wielu stanach USA." },
      ],
      66: [
        { context: "Route 66", detail: "Route 66 była jedną z pierwszych amerykańskich autostrad, prowadzącą z Chicago do Santa Monica, i stała się kulturowym symbolem amerykańskich podróży drogowych." },
      ],
      70: [
        { context: "'Siedemdziesiąt lat' — tradycyjne biblijne określenie długości życia", detail: "To tradycyjne wyrażenie na długość życia wynoszącą 70 lat pochodzi z Biblii (Psalm 90:10)." },
      ],
      72: [
        { context: "'Reguła 72'", detail: "W finansach podzielenie 72 przez stopę procentową daje przybliżoną liczbę lat potrzebnych, aby inwestycja się podwoiła." },
        { context: "72 godziny", detail: "72 godziny to dokładnie trzy pełne doby." },
      ],
      75: [
        { context: "Diamentowe wesele", detail: "W niektórych tradycjach 75. rocznicę nazywa się 'diamentowym weselem', choć termin ten częściej kojarzy się z 60. rocznicą, jak Diamentowy Jubileusz królowej Elżbiety II w 2012 roku." },
      ],
      76: [
        { context: "'76 puzonów'", detail: "'Seventy-Six Trombones' to słynna piosenka orkiestry dętej z musicalu The Music Man z 1957 roku." },
      ],
      78: [
        { context: "Płyty 78 obr./min", detail: "78 obrotów na minutę było pierwszą standardową prędkością odtwarzania płyt gramofonowych, zanim upowszechniły się formaty 33⅓ i 45." },
      ],
      80: [
        { context: "W osiemdziesiąt dni dookoła świata", detail: "Klasyczna powieść Juliusza Verne'a z 1873 roku opowiada o wyścigu z okrążeniem świata w 80 dni." },
      ],
      86: [
        { context: "Restauracyjny żargon '86'", detail: "W żargonie amerykańskich barów i restauracji 'zrobić 86' danemu daniu oznacza usunąć je z menu; może też oznaczać wyproszenie uciążliwego klienta." },
      ],
      88: [
        { context: "Klawisze fortepianu", detail: "Standardowy współczesny fortepian ma 88 klawiszy." },
        { context: "Oficjalnie uznane gwiazdozbiory", detail: "Międzynarodowa Unia Astronomiczna oficjalnie uznaje 88 gwiazdozbiorów." },
      ],
      90: [
        { context: "Czas trwania meczu piłkarskiego", detail: "Regulaminowy mecz piłki nożnej trwa 90 minut, podzielonych na dwie połowy po 45 minut." },
        { context: "Kąt prosty", detail: "Kąt prosty ma dokładnie 90 stopni." },
      ],
      92: [
        { context: "Liczba atomowa uranu", detail: "Uran o liczbie atomowej 92 jest tradycyjnie wskazywany jako najcięższy naturalnie występujący pierwiastek w układzie okresowym." },
      ],
      95: [
        { context: "Windows 95", detail: "Windows 95 to przełomowy system operacyjny Microsoftu wydany w 1995 roku, który pomógł spopularyzować komputery osobiste." },
      ],
      99: [
        { context: "Psychologia cen kończących się na '.99'", detail: "Sprzedawcy często ustalają ceny kończące się na 99 groszy (jak 19,99 zł), ponieważ postrzega się je jako wyraźnie niższe niż kolejna okrągła liczba." },
      ],
      100: [
        { context: "Stulecie", detail: "Okres 100 lat nazywa się stuleciem lub wiekiem." },
        { context: "100% jako 'całość'", detail: "Procenty budowane są wokół liczby 100 jako punktu odniesienia dla pełnej całości." },
        { context: "Senat USA", detail: "Senat Stanów Zjednoczonych liczy 100 członków — po dwóch z każdego z 50 stanów." },
        { context: "Temperatura wrzenia wody", detail: "Przy standardowym ciśnieniu atmosferycznym woda wrze w 100°C." },
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
      13: [
        { fact: "13 jest liczbą pierwszą — jej jedynymi dzielnikami są 1 i ona sama." },
        { fact: "Strach przed liczbą 13 ma oficjalną nazwę: triskaidekafobia." },
        { fact: "Wiele budynków pomija 13. piętro w numeracji z powodu przesądów wokół tej liczby." },
      ],
      14: [
        { fact: "14 = 2 × 7, więc każdy wynik tabliczki mnożenia przez 14 jest dokładnie dwa razy większy od odpowiadającego wyniku tabliczki przez 7." },
        { fact: "Angielskie słowo 'fortnight' to skrócona forma 'fourteen nights' (czternaście nocy), dawnego określenia dwóch tygodni." },
      ],
      15: [
        { fact: "15 to liczba trójkątna — jest sumą pierwszych pięciu liczb naturalnych: 1+2+3+4+5=15." },
        { fact: "15 = 3 × 5, więc jest iloczynem dwóch pierwszych nieparzystych liczb pierwszych." },
      ],
      16: [
        { fact: "16 = 2⁴, czyli pierwsza czwarta potęga większa od 1." },
        { fact: "16 jest też liczbą kwadratową: 16 = 4 × 4." },
        { fact: "Komputery często używają podstawy 16 (szesnastkowej), ponieważ każda cyfra szesnastkowa odpowiada dokładnie 4 bitom binarnym." },
      ],
      17: [
        { fact: "17 jest liczbą pierwszą i nie ma mniejszej tabliczki, którą można by podwoić lub potroić, by ją uzyskać." },
        { fact: "W nieformalnych badaniach psychologicznych, gdy proszono ludzi o podanie 'losowej' liczby między 1 a 20, nieproporcjonalnie często wybierali 17 — ciekawostka dotycząca ludzkich preferencji liczbowych, a nie prawdziwej losowości." },
      ],
      18: [
        { fact: "18 = 2 × 9 = 3 × 6, więc istnieje więcej niż jeden sposób podwojenia lub potrojenia mniejszej tabliczki, by ją uzyskać." },
        { fact: "Ponieważ 18 jest wielokrotnością 9, wszystkie jej wielokrotności podlegają też regule sumy cyfr liczby 9." },
      ],
      19: [
        { fact: "19 jest liczbą pierwszą i ostatnią z angielskich liczb kończących się na '-teen' (od 13 do 19)." },
        { fact: "19 = 20 − 1, więc mnożenie przez 19 jest zwykle łatwiejsze, gdy najpierw pomnoży się przez 20, a potem odejmie liczbę wyjściową." },
      ],
      20: [
        { fact: "Dawne angielskie słowo 'score' oznacza 20, jak w słynnym sformułowaniu Lincolna 'four score and seven years ago' (4×20+7=87)." },
        { fact: "20 = 4 × 5 = 2 × 10, więc istnieje kilka par czynników do zbudowania tej tabliczki." },
      ],
      21: [
        { fact: "21 = 3 × 7, iloczyn dwóch mniejszych tabliczek, które uczniowie prawdopodobnie już znają." },
        { fact: "W blackjacku 21 to dokładnie wynik docelowy — przekroczenie go oznacza automatyczną przegraną." },
      ],
      22: [
        { fact: "22 = 2 × 11, więc jej tabliczka to po prostu podwojona tabliczka przez 11." },
        { fact: "Tytuł powieści Josepha Hellera 'Paragraf 22' stał się w języku angielskim samodzielnym wyrażeniem oznaczającym dylemat bez wyjścia." },
      ],
      23: [
        { fact: "23 jest liczbą pierwszą — jej jedynymi dzielnikami są 1 i ona sama." },
        { fact: "Ludzkie komórki zawierają 23 pary chromosomów — jeden z najczęściej cytowanych faktów o liczbie 23 poza matematyką." },
      ],
      24: [
        { fact: "24 to liczba silnie złożona — jej dzielniki (1, 2, 3, 4, 6, 8, 12, 24) przewyższają liczbą każdą mniejszą liczbę dodatnią." },
        { fact: "24 = 2³ × 3, łącząc potęgę 2 z czynnikiem 3." },
      ],
      25: [
        { fact: "25 to liczba kwadratowa: 25 = 5 × 5." },
        { fact: "Ponieważ 25 to dokładnie jedna czwarta 100, mnożenie przez 25 jest często szybsze jako ×100, a potem ÷4." },
      ],
      26: [
        { fact: "26 = 2 × 13, więc jej tabliczka to po prostu podwojona tabliczka przez 13." },
        { fact: "26 liter alfabetu łacińskiego sprawia, że 26 to jedna z najczęściej spotykanych liczb w codziennym języku pisanym." },
      ],
      27: [
        { fact: "27 to liczba sześcienna: 27 = 3 × 3 × 3, czyli 3³." },
        { fact: "'Klub 27' to termin kultury popularnej odnoszący się do znanych muzyków, którzy zmarli w tym wieku — naukowcy nie znaleźli jednak statystycznych dowodów na nietypowe ryzyko śmierci akurat w wieku 27 lat." },
      ],
      28: [
        { fact: "28 to liczba doskonała — suma jej właściwych dzielników (1, 2, 4, 7, 14) daje dokładnie 28; to druga liczba doskonała po 6." },
        { fact: "28 = 4 × 7, co łączy ją bezpośrednio z dwiema mniejszymi tabliczkami." },
      ],
      29: [
        { fact: "29 jest liczbą pierwszą — jej jedynymi dzielnikami są 1 i ona sama." },
        { fact: "29 pojawia się w kalendarzu jako data tylko w latach przestępnych, gdy luty zyskuje dodatkowy dzień." },
      ],
      30: [
        { fact: "30 = 2 × 3 × 5, iloczyn trzech pierwszych liczb pierwszych." },
        { fact: "30 ma niezwykle dużo małych dzielników jak na swoją wielkość, co jest jednym z powodów, dla których tak często dzieli się bez reszty w codziennych pomiarach." },
      ],
      31: [
        { fact: "31 jest liczbą pierwszą — jej jedynymi dzielnikami są 1 i ona sama." },
        { fact: "31 = 2⁵ − 1, co czyni ją liczbą pierwszą Mersenne'a, do tej samej rodziny należą też 3, 7 i 127." },
      ],
      32: [
        { fact: "32 = 2⁵, czyli piąta potęga liczby 2." },
        { fact: "32 to dokładnie dwukrotność 16, która sama jest dwukrotnością 8 — część nieprzerwanego łańcucha podwojeń sięgającego aż do 1." },
      ],
      33: [
        { fact: "33 = 3 × 11, więc jej tabliczka to bezpośrednio potrojony wzór lustrzanych cyfr z tabliczki przez 11." },
      ],
      34: [
        { fact: "34 to liczba Fibonacciego — jest sumą dwóch poprzednich liczb Fibonacciego, 13 i 21." },
        { fact: "W magicznym kwadracie 4×4 każdy wiersz, kolumna i przekątna sumują się do 34 — to najmniejsza możliwa stała magiczna dla siatki 4×4." },
      ],
      35: [
        { fact: "35 = 5 × 7, iloczyn dwóch mniejszych tabliczek, które uczniowie już znają." },
      ],
      36: [
        { fact: "36 to jednocześnie liczba kwadratowa (6×6) i liczba trójkątna (1+2+...+8) — kombinacja, którą dzieli bardzo niewiele liczb." },
      ],
      37: [
        { fact: "37 jest liczbą pierwszą — jej jedynymi dzielnikami są 1 i ona sama." },
        { fact: "37 × 3 = 111, dlatego 37 dzieli bez reszty każdą trzycyfrową liczbę o powtórzonej cyfrze (111, 222, 333... aż do 999)." },
      ],
      38: [
        { fact: "38 = 2 × 19, więc jej tabliczka to po prostu podwojona tabliczka przez 19." },
      ],
      39: [
        { fact: "39 = 3 × 13, iloczyn dwóch mniejszych tabliczek, które uczniowie prawdopodobnie już znają." },
      ],
      40: [
        { fact: "40 = 2³ × 5, łącząc potęgę 2 z czynnikiem 5." },
      ],
      41: [
        { fact: "41 jest liczbą pierwszą — jej jedynymi dzielnikami są 1 i ona sama." },
        { fact: "41 i 43 to liczby pierwsze bliźniacze — różnią się dokładnie o 2." },
      ],
      42: [
        { fact: "42 = 2 × 3 × 7, łącząc trzy najmniejsze liczby pierwsze używane w standardowych tabliczkach mnożenia." },
      ],
      43: [
        { fact: "43 jest liczbą pierwszą — jej jedynymi dzielnikami są 1 i ona sama." },
        { fact: "43, podobnie jak 41, tworzy większą wartość pary liczb pierwszych bliźniaczych rozdzielonych dokładnie jedną liczbą parzystą, 42." },
      ],
      44: [
        { fact: "44 = 4 × 11, więc jej tabliczka to bezpośrednio poczwórna tabliczka przez 11." },
      ],
      45: [
        { fact: "45° to dokładnie połowa kąta prostego (90°), dlatego kąty 45-stopniowe stale pojawiają się w geometrii i projektowaniu." },
        { fact: "45 to jednocześnie liczba trójkątna (1+2+...+9) i iloczyn dwóch mniejszych tabliczek, 9 i 5." },
      ],
      46: [
        { fact: "46 = 2 × 23, więc jej tabliczka to po prostu podwojona tabliczka przez 23." },
      ],
      47: [
        { fact: "47 jest liczbą pierwszą — jej jedynymi dzielnikami są 1 i ona sama." },
        { fact: "47 to słynny żart wewnętrzny wśród fanów i scenarzystów Star Trek, którzy podobno celowo umieszczali ją w tle wielu odcinków." },
      ],
      48: [
        { fact: "48 to silnie złożona liczba jak na swoją wielkość — jej dzielniki (1, 2, 3, 4, 6, 8, 12, 16, 24, 48) przewyższają liczbą każdą mniejszą liczbę dodatnią." },
      ],
      49: [
        { fact: "49 to liczba kwadratowa: 49 = 7 × 7." },
        { fact: "7×7=49 to jeden z najczęściej zapamiętywanych faktów z całej standardowej tabliczki mnożenia." },
      ],
      50: [
        { fact: "50 = 2 × 5², łącząc pojedynczy czynnik 2 z kwadratem liczby 5." },
      ],
      51: [
        { fact: "51 = 3 × 17, iloczyn dwóch małych liczb pierwszych." },
      ],
      52: [
        { fact: "52 = 4 × 13, więc jej tabliczka to bezpośrednio poczwórna tabliczka przez 13." },
      ],
      53: [
        { fact: "53 jest liczbą pierwszą — jej jedynymi dzielnikami są 1 i ona sama." },
      ],
      54: [
        { fact: "54 = 2 × 3³, łącząc pojedynczy czynnik 2 z sześcianem liczby 3." },
      ],
      55: [
        { fact: "55 to jednocześnie liczba trójkątna (1+2+...+10) i liczba Fibonacciego — kombinacja, którą dzieli bardzo niewiele liczb." },
      ],
      56: [
        { fact: "56 = 2³ × 7, łącząc potęgę 2 z czynnikiem 7." },
        { fact: "7×8=56 to jeden z najczęściej mylonych pojedynczych faktów w całej standardowej tabliczce mnożenia." },
      ],
      57: [
        { fact: "57 = 3 × 19, iloczyn dwóch małych liczb pierwszych." },
      ],
      58: [
        { fact: "58 = 2 × 29, więc jej tabliczka to po prostu podwojona tabliczka przez 29." },
      ],
      59: [
        { fact: "59 jest liczbą pierwszą — jej jedynymi dzielnikami są 1 i ona sama." },
      ],
      60: [
        { fact: "60 to liczba silnie złożona — jej dzielniki (1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60) przewyższają liczbą każdą mniejszą liczbę dodatnią." },
        { fact: "Starożytni Babilończycy używali systemu liczbowego o podstawie 60 (sześćdziesiątkowego), dlatego czas i kąty do dziś dzieli się na jednostki po 60." },
      ],
      61: [
        { fact: "61 jest liczbą pierwszą — jej jedynymi dzielnikami są 1 i ona sama." },
      ],
      62: [
        { fact: "62 = 2 × 31, więc jej tabliczka to po prostu podwojona tabliczka przez 31." },
      ],
      63: [
        { fact: "63 = 3² × 7, łącząc kwadrat liczby 3 z czynnikiem 7." },
        { fact: "63 = 2⁶ − 1 (64 minus 1), czyli dokładnie jedno mniej niż kolejna potęga 2." },
      ],
      64: [
        { fact: "64 to jednocześnie liczba kwadratowa (8²) i liczba sześcienna (4³) — jedna z niewielu liczb łączących obie te własności." },
      ],
      65: [
        { fact: "65 = 5 × 13, iloczyn dwóch mniejszych tabliczek." },
      ],
      66: [
        { fact: "66 = 2 × 3 × 11, łącząc trzy z mniejszych tabliczek." },
      ],
      67: [
        { fact: "67 jest liczbą pierwszą — jej jedynymi dzielnikami są 1 i ona sama." },
      ],
      68: [
        { fact: "68 = 4 × 17, więc jej tabliczka to bezpośrednio poczwórna tabliczka przez 17." },
      ],
      69: [
        { fact: "69 = 3 × 23, iloczyn dwóch mniejszych tabliczek." },
      ],
      70: [
        { fact: "70 = 2 × 5 × 7, łącząc trzy najmniejsze liczby pierwsze używane w standardowych tabliczkach mnożenia." },
      ],
      71: [
        { fact: "71 jest liczbą pierwszą — jej jedynymi dzielnikami są 1 i ona sama." },
      ],
      72: [
        { fact: "72 = 2³ × 3², łącząc potęgę 2 z kwadratem liczby 3." },
      ],
      73: [
        { fact: "73 jest liczbą pierwszą — jej jedynymi dzielnikami są 1 i ona sama. Jest też 21. liczbą pierwszą licząc od 2." },
        { fact: "Zapisana binarnie 73 to 1001001 — palindrom, który czyta się tak samo w obie strony." },
      ],
      74: [
        { fact: "74 = 2 × 37, więc jej tabliczka to po prostu podwojona tabliczka przez 37." },
      ],
      75: [
        { fact: "75 = 3 × 5², łącząc czynnik 3 z kwadratem liczby 5." },
      ],
      76: [
        { fact: "76 = 4 × 19, więc jej tabliczka to bezpośrednio poczwórna tabliczka przez 19." },
      ],
      77: [
        { fact: "77 = 7 × 11, iloczyn dwóch mniejszych tabliczek." },
        { fact: "77 to liczbowy palindrom — czyta się tak samo od lewej do prawej i od prawej do lewej." },
      ],
      78: [
        { fact: "78 = 2 × 3 × 13, łącząc trzy z mniejszych tabliczek." },
      ],
      79: [
        { fact: "79 jest liczbą pierwszą — jej jedynymi dzielnikami są 1 i ona sama." },
      ],
      80: [
        { fact: "80 = 2⁴ × 5, łącząc potęgę 2 z czynnikiem 5." },
        { fact: "80% to cztery piąte (4/5) całości." },
      ],
      81: [
        { fact: "81 to liczba kwadratowa (9×9), a jednocześnie równa się 3⁴ (3 do czwartej potęgi)." },
      ],
      82: [
        { fact: "82 = 2 × 41, więc jej tabliczka to po prostu podwojona tabliczka przez 41." },
      ],
      83: [
        { fact: "83 jest liczbą pierwszą — jej jedynymi dzielnikami są 1 i ona sama." },
      ],
      84: [
        { fact: "84 = 2² × 3 × 7, łącząc potęgę 2 z czynnikami 3 i 7." },
      ],
      85: [
        { fact: "85 = 5 × 17, iloczyn dwóch mniejszych tabliczek." },
      ],
      86: [
        { fact: "86 = 2 × 43, więc jej tabliczka to po prostu podwojona tabliczka przez 43." },
      ],
      87: [
        { fact: "87 = 3 × 29, iloczyn dwóch mniejszych tabliczek." },
      ],
      88: [
        { fact: "88 = 8 × 11, iloczyn dwóch mniejszych tabliczek." },
      ],
      89: [
        { fact: "89 jest liczbą pierwszą — jej jedynymi dzielnikami są 1 i ona sama." },
        { fact: "89 jest też liczbą Fibonacciego — jest sumą dwóch poprzednich liczb Fibonacciego, 34 i 55." },
      ],
      90: [
        { fact: "90 = 2 × 3² × 5, łącząc potęgę 2, kwadrat liczby 3 i czynnik 5." },
      ],
      91: [
        { fact: "91 = 7 × 13, co czyni ją klasycznym przykładem w nauczaniu matematyki liczby, która wygląda na pierwszą, choć nią nie jest." },
      ],
      92: [
        { fact: "92 = 4 × 23, więc jej tabliczka to bezpośrednio poczwórna tabliczka przez 23." },
      ],
      93: [
        { fact: "93 = 3 × 31, iloczyn dwóch mniejszych tabliczek." },
      ],
      94: [
        { fact: "94 = 2 × 47, więc jej tabliczka to po prostu podwojona tabliczka przez 47." },
      ],
      95: [
        { fact: "95 = 5 × 19, iloczyn dwóch mniejszych tabliczek." },
      ],
      96: [
        { fact: "96 = 2⁵ × 3, łącząc potęgę 2 z pojedynczym czynnikiem 3." },
      ],
      97: [
        { fact: "97 jest liczbą pierwszą — jej jedynymi dzielnikami są 1 i ona sama." },
        { fact: "97 to największa liczba pierwsza poniżej 100." },
      ],
      98: [
        { fact: "98 = 2 × 7², łącząc pojedynczy czynnik 2 z kwadratem liczby 7." },
      ],
      99: [
        { fact: "99 = 9 × 11, iloczyn dwóch mniejszych tabliczek." },
        { fact: "Ponieważ 99 jest wielokrotnością 9, cyfry każdej wielokrotności 99 zawsze sumują się do wielokrotności 9." },
      ],
      100: [
        { fact: "100 = 10², czyli kwadrat liczby 10, a jednocześnie równa się 4 × 25." },
      ],
    }

export function getRealLifeExamples(n: number): RealLifeItem[] | null {
  return realLifeExamples[n] ?? null
}

export function getFunFacts(n: number): FunFactItem[] | null {
  return funFacts[n] ?? null
}
