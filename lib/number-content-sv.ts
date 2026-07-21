// AUTO-EXTRACTED verbatim from app/components/sv/NumberPage.tsx
// Per-number curated content for locale: sv
import type { PatternItem, MistakeItem, RealLifeItem, FunFactItem } from './number-content-types'

const meanings: { [key: number]: string } = {
      1: "Att multiplicera med 1 är ett specialfall i matematik. När du multiplicerar vilket tal som helst med 1, är resultatet alltid samma tal. Detta kallas multiplikationens identitetsegenskap. Tänk på det så här: 'Hur många grupper har jag?' Om du bara har 1 grupp, har du exakt vad du började med.",
      2: "Att multiplicera med 2 betyder att fördubbla ett tal. När du multiplicerar något med 2, lägger du till det till sig själv. Detta är en av de mest praktiska multiplikationstabellerna eftersom vi ofta behöver fördubbla saker i vardagen — räkna skopar, cykelhjul eller dela något jämnt mellan två personer.",
      3: "Att multiplicera med 3 betyder att ta ett tal tre gånger. Du kan tänka på det som att lägga till samma tal till sig självt tre gånger. Denna tabell är viktig för att förstå trianglar, tripplar och allt som kommer i grupper om tre.",
      4: "Att multiplicera med 4 är som att fördubbla två gånger. Eftersom 4 = 2 × 2, kan du fördubbla ett tal och sedan fördubbla resultatet igen. Detta gör 4-tabellen lättare att lära sig om du redan känner till 2-tabellen. Talet 4 förekommer ofta i geometri (fyrkanter har 4 sidor) och tidmätning (det finns 4 kvarter).",
      5: "Att multiplicera med 5 skapar ett av de vackraste mönstren i matematik. Alla multiplar av 5 slutar med 0 eller 5, vilket gör denna tabell mycket förutsägbar. Den är extremt användbar för att räkna pengar (5-kronor mynt, 5-kronor sedlar) och läsa klockan (5 minuters intervall).",
      6: "Att multiplicera med 6 betyder att ta grupper om sex tal. 6 är den första 'riktiga' multiplikationstabellen eftersom den inte bara är en multipel av 2 eller 3. Men eftersom 6 = 2 × 3, kan du multiplicera ett tal med 2 och sedan med 3 (eller tvärtom) för att multiplicera med 6. Talet 6 förekommer ofta i naturen (bikupans celler) och i vardagen (äggkartonger, tärningens sidor).",
      7: "Att multiplicera med 7 är vanligtvis en av de svåraste tabellerna för elever, eftersom 7 är ett primtal och inte lätt kan härledas från andra tabeller. Men alla multiplar av 7 har vackra mönster och kan läras genom övning. 7 är ett viktigt tal för veckodagar, kontinenter och många kulturella referenser.",
      8: "Att multiplicera med 8 är som att fördubbla tre gånger (8 = 2 × 2 × 2). Fördubbla talet, fördubbla resultatet igen, och fördubbla en gång till — då har du multiplicerat med 8. Denna tabell är lättare att lära när du känner 2- och 4-tabellerna väl. 8 är ett viktigt tal i geometri (oktogoner) och musik (oktav).",
      9: "Att multiplicera med 9 har ett av de mest fascinerande mönstren i matematik. När du adderar siffrorna i vilken multipel av 9 som helst, är resultatet alltid delbart med 9. Dessutom är tiotalet i 9 × n alltid n-1. Denna tabell kan också läras med fingerknep. Eftersom 9 är bara 1 mindre än 10, kan den också beräknas med 10-tabellen.",
      10: "Att multiplicera med 10 är en av de enklaste multiplikationstabellerna. När du multiplicerar vilket tal som helst med 10, lägger du bara till en nolla i slutet. Detta utgör grunden för vårt decimalsystem. Att lära sig att multiplicera med 10 lär eleverna begreppet platsvärde och hur man arbetar med stora tal. 10-tabellen är jämförelsepunkten för att förstå alla andra multiplikationstabeller.",
      11: "Att multiplicera med 11 har ett av de mest intressanta mönstren i matematik. När du multiplicerar ensiffriga tal med 11, är resultatet detta tal upprepat två gånger (11×3=33, 11×7=77). Vid multiplikation av tvåsiffriga tal med 11 finns också ett vackert mönster: du adderar siffrorna och placerar dem i mitten. 11 är ett primtal och har särskilda matematiska egenskaper.",
      12: "Att multiplicera med 12 är en av de mest praktiska tabellerna, eftersom 12 är delbart med många tal (1, 2, 3, 4, 6, 12). Denna egenskap gör 12 mycket användbart i vardagen — det finns 12 föremål i ett dussin, 12 timmar på klockan, 12 månader på året. Eftersom 12 = 3 × 4 = 2 × 6, kan du lära dig denna tabell på många sätt.",
      13: "Att multiplicera med 13 utvecklar elevers mönsterigenkänning. 13 är ett primtal, så det kan inte lätt härledas från andra tabeller. Men det är mycket användbart att tänka på 13 som 10+3: att multiplicera ett tal med 13 betyder att multiplicera det med 10 och lägga till resultatet av multiplikation med 3. 13 är ett tal med särskild betydelse i många kulturer.",
      14: "Att multiplicera med 14 är dubbelt 7-tabellen. Eftersom 14 = 2 × 7, om du känner till 7-tabellen, kan du fördubbla varje resultat och få 14-tabellen. 14 är viktigt i veckoplanering (2 veckor = 14 dagar) och visar egenskaperna hos jämna tal.",
      15: "Att multiplicera med 15 kombinerar multipler av 3 och 5. Eftersom 15 = 3 × 5, bär denna tabell egenskaperna hos båda talen. Alla multiplar av 15 är delbara med både 3 och 5. Eftersom 15 minuter är en kvart, används det ofta i tidberäkningar.",
      16: "Att multiplicera med 16 är 2:s fjärde potens (2×2×2×2=16). Detta möjliggör att lära 16-tabellen genom dubblering kedjor. Du kan fördubbla 8 och få 16. I datavetenskap är 16 ett viktigt tal (hexadecimalt system) och förekommer ofta även i vardagen.",
      17: "Att multiplicera med 17 kan vara svårt på grund av dess primtalsegenskaper. 17 kan inte lätt härledas från andra tabeller. Men det hjälper att tänka på 17 som 20-3 eller 10+7. Att lära sig 17-tabellen utvecklar mentala aritmetikfärdigheter och problemlösningsstrategier.",
      18: "Att multiplicera med 18 har många tillvägagångssätt. Eftersom 18 = 2 × 9 = 3 × 6, kan du lära dig denna tabell på många sätt. Att fördubbla 9-tabellen eller tredubbla 6-tabellen ger 18-tabellen. 18 är viktigt som myndighetsålder i många länder.",
      19: "Att multiplicera med 19 kan inte härledas från andra tabeller, eftersom 19 är ett primtal. Men det är mycket praktiskt att tänka på 19 som 20-1: multiplicera talet med 20 och subtrahera talet självt. Denna strategi gör beräkning av 19-tabellen i huvudet mycket lättare.",
      20: "Att multiplicera med 20 är en naturlig fortsättning på 10-tabellen. När du multiplicerar vilket tal som helst med 20, kan du multiplicera det med 10 och fördubbla resultatet. Eller lägg bara till en nolla i slutet och fördubbla. 20-tabellen används kontinuerligt i pengaräkningar (20 kronor) och mätningar (20 meter, 20 kilogram).",
    }

const importance: { [key: number]: string } = {
      1: "Multiplikationstabellen 1 är grunden för alla multiplikationsoperationer. Den lär eleverna att tal har en identitet: när de multipliceras med 1, förblir de oförändrade. Detta koncept är viktigt för att förstå senare algebraiska egenskaper. Även om det verkar enkelt, bygger inlärning av denna tabell självförtroende och etablerar mönstret att multiplikation är ordnad och förutsägbar.",
      2: "Multiplikationstabellen 2 är vanligtvis den första riktiga multiplikationstabellen som elever lär sig, och det finns en god anledning till detta. Dubblering är ett naturligt koncept som barn möter dagligen. Att lära sig denna tabell gör mental aritmetik mycket snabbare och förbereder eleverna för jämna tal, bråk (halvor) och grundläggande division. Många elever tycker att den är den enklaste tabellen, vilket bygger självförtroende för mer komplexa tabeller.",
      3: "Multiplikationstabellen 3 fyller gapet mellan enkla och komplexa tabeller. Den kräver att eleverna går bortom enkel dubblering och känner igen nya mönster. Denna tabell förekommer ständigt i verkliga sammanhang, som att räkna i grupper om tre, förstå triangelformer och arbeta med tid (tre tidsperioder per dag). Elever som lär sig 3-tabellen visar behärskning av abstrakt räkning.",
    }

const patterns: { [key: number]: PatternItem[] } = {
      1: [
        { title: "Identitetsmönster", description: "Varje tal multiplicerat med 1 ger sig själv. Detta ändras aldrig: 1×1=1, 1×2=2, 1×3=3, och så vidare." },
        { title: "Förutsägbar Serie", description: "Resultaten räknar bara uppåt: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Du skriver bara siffrorna i ordning." },
        { title: "Grunden för Alla Tabeller", description: "Varje multiplikationstabell börjar med att multiplicera med 1, så detta mönster förekommer i alla tabeller." },
      ],
      2: [
        { title: "Endast Jämna Tal", description: "Alla multiplar av 2 är jämna tal. Resultaten slutar alltid med 0, 2, 4, 6 eller 8." },
        { title: "Räkna med Två", description: "Varje svar är 2 större än det föregående: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20." },
        { title: "Dubbleringsmönster", description: "Varje resultat är exakt dubbelt så mycket som faktorn: 2×5=10 är dubbelt så mycket som 5." },
      ],
      3: [
        { title: "Siffersummamönster", description: "Addera siffrorna i varje resultat: 3 (3), 6 (6), 9 (9), 12 (1+2=3), 15 (1+5=6), 18 (1+8=9). Mönstret 3-6-9 upprepas!" },
        { title: "Räkna med Tre", description: "Varje svar ökar med 3: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30." },
        { title: "Udda-Jämn Växling", description: "Resultaten alternerar: udda (3), jämn (6), udda (9), jämn (12), vilket skapar en förutsägbar rytm." },
      ],
    }

const mistakes: { [key: number]: MistakeItem[] } = {
      1: [
        { mistake: "Tro att 1×1=2", solution: "Kom ihåg: vad som helst multiplicerat med 1 förblir detsamma. 1 grupp av 1 är bara 1." },
        { mistake: "Förväxling med addition", solution: "Att multiplicera med 1 är annorlunda än att addera. 5+1=6, men 5×1=5." },
      ],
      2: [
        { mistake: "Förväxla 2×6=12 med 2×7=14", solution: "Använd räkning med två: 2, 4, 6, 8, 10, 12, 14. Räkna noggrant utan att hoppa över." },
        { mistake: "Förvirring med stora tal", solution: "Bryt ner: 2×8 är BARA 8+8. Dubblering är enkel addition." },
      ],
    }

const strategies: { [key: number]: string[] } = {
      1: [
        "Säg varje multiplikation högt: '1 gånger 1 är 1, 1 gånger 2 är 2...'",
        "Öva att skriva tabellen en gång om dagen i en vecka",
        "Hitta mönstret: svaret är alltid samma tal som det andra talet",
        "Använd flashkort, även om denna tabell vanligtvis lärs mycket snabbt",
      ],
      2: [
        "Räkna med två medan du går eller går upp för trappor: 2, 4, 6, 8...",
        "Använd dina fingrar: håll fingrarna i par och räkna med två",
        "Öva att dubbla tal i huvudet under dagen",
        "Säg högt: '2 gånger 5 är 5 plus 5, vilket är 10'",
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
