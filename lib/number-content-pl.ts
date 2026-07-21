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

export function getRealLifeExamples(_n: number): RealLifeItem[] | null {
  return null
}

export function getFunFacts(_n: number): FunFactItem[] | null {
  return null
}
