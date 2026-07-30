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

const realLifeExamples: { [key: number]: RealLifeItem[] } = {
      1: [
        { context: "Att vara 'nummer ett'", detail: "I många språk och kulturer betyder att vara nummer ett att inta första platsen eller den högsta rangen — från prispallar till skolbetyg." },
        { context: "Ett enda föremål", detail: "Varje gång du räknar ett enda föremål — ett äpple, en stol — tillämpar du idén att 1 grupp av något helt enkelt är just den saken." },
        { context: "Den första positionen i en sekvens", detail: "Sida 1, Dag 1, Omgång 1 — ettan markerar startpunkten för otaliga numreringssystem." },
      ],
      2: [
        { context: "Par av skor, strumpor och handskar", detail: "De flesta vardagliga par kommer i uppsättningar om 2 — en direkt, konkret modell för fördubbling." },
        { context: "Ögon och öron", detail: "Människokroppen har 2 ögon och 2 öron, bland många andra parade drag." },
        { context: "Cykelhjul", detail: "En vanlig cykel har 2 hjul, till skillnad från en trehjuling (3) eller enhjuling (1)." },
        { context: "Binär kod inom datorteknik", detail: "Datorer lagrar och bearbetar information i binärt format (bas 2), uppbyggt enbart av två siffror: 0 och 1." },
      ],
      3: [
        { context: "Trafikljus", detail: "Vanliga trafikljus använder 3 färger: rött, gult och grönt." },
        { context: "Trianglar", detail: "Varje triangel har exakt 3 sidor och 3 vinklar — den enklast möjliga polygonen." },
        { context: "Prispallar", detail: "Olympiska spelen och många andra tävlingar delar ut 3 medaljer: guld, silver och brons." },
        { context: "Primärfärger", detail: "I den traditionella färglära som lärs ut i skolan betraktas rött, gult och blått som de 3 primärfärgerna." },
      ],
      4: [
        { context: "De fyra årstiderna", detail: "I många delar av världen beskrivs året ha 4 årstider: vår, sommar, höst och vinter." },
        { context: "Väderstreck", detail: "En kompass har 4 huvudriktningar: norr, söder, öster och väster." },
        { context: "Bordsben", detail: "De flesta bord och stolar är byggda med 4 ben för stabilitet." },
        { context: "Färger i en kortlek", detail: "En vanlig kortlek med 52 kort delas in i 4 färger: hjärter, ruter, klöver och spader." },
      ],
      5: [
        { context: "Fingrar på en hand", detail: "De flesta människor har 5 fingrar per hand, vilket gör 5 till ett av de mest naturliga talen att lära sig räkna med tidigt." },
        { context: "De fem sinnena", detail: "Syn, hörsel, lukt, smak och känsel beskrivs vanligen som människans 5 traditionella sinnen." },
        { context: "En pentagon", detail: "En pentagon är en femsidig figur, och Pentagon, USA:s försvarsdepartements högkvarter, har fått sitt namn just av denna form." },
        { context: "Pengar i enheter om 5", detail: "Många valutor har ett mynt eller en sedel i valören 5, till exempel en 5-kronorsmynt." },
      ],
      6: [
        { context: "Sidor på en tärning", detail: "En vanlig sexsidig tärning (en kub) har exakt 6 sidor." },
        { context: "Insekters ben", detail: "Alla insekter har per definition 6 ben — ett av de drag som skiljer dem från spindlar, som har 8." },
        { context: "Gitarrsträngar", detail: "En vanlig akustisk eller elektrisk gitarr har 6 strängar." },
        { context: "Ett halvdussin", detail: "Ägg och bakverk säljs ofta i halvdussin — en förpackning om 6." },
      ],
      7: [
        { context: "Veckans 7 dagar", detail: "Används idag i nästan alla kalendersystem i världen." },
        { context: "7 kontinenter", detail: "Afrika, Antarktis, Asien, Australien, Europa, Nordamerika och Sydamerika — enligt den modell som oftast lärs ut i skolan." },
        { context: "7 toner i en musikskala", detail: "C, D, E, F, G, A, H — innan mönstret upprepas en oktav högre." },
        { context: "Regnbågens 7 färger", detail: "Rött, orange, gult, grönt, blått, indigo och violett — en indelning som Isaac Newton först populariserade." },
        { context: "Antikens sju underverk", detail: "Bland dem den stora pyramiden i Giza, det enda som fortfarande står kvar idag." },
      ],
      8: [
        { context: "Spindlars ben", detail: "Spindlar och andra spindeldjur har 8 ben, till skillnad från insekter som har 6." },
        { context: "En bläckfisks armar", detail: "En bläckfisk har 8 armar — därav namnet (grekiskans 'okto', som betyder åtta)." },
        { context: "En byte inom datorteknik", detail: "Inom datavetenskap utgör 8 bitar 1 byte, grundenheten för att mäta digital lagring och minne." },
        { context: "En musikalisk oktav", detail: "I västerländsk musik omfattar en oktav 8 toner (till exempel från C till nästa C: C, D, E, F, G, A, H, C)." },
      ],
      9: [
        { context: "Innings i baseboll", detail: "En vanlig basebollmatch består av 9 innings." },
        { context: "En 3×3-kvadrat", detail: "9 är ett kvadrattal: ett rutnät med 3 rader och 3 kolumner innehåller exakt 9 rutor, som en tre-i-rad-bräda." },
        { context: "Solsystemet, historiskt sett", detail: "Under en stor del av 1900-talet lärde sig elever att det fanns 9 planeter; Pluto omklassificerades till dvärgplanet 2006, vilket lämnade 8 erkända planeter idag." },
      ],
      10: [
        { context: "Decimalsystemet", detail: "Nästan alla moderna räknesystem har bas 10 och bygger helt på grupper om tio." },
        { context: "Fingrar och tår", detail: "De flesta människor har 10 fingrar och 10 tår, vilket tros vara en av anledningarna till att räkning i basen 10 historiskt blivit så utbredd." },
        { context: "Tiokamp", detail: "Tiokamp är en friidrottsgren som består av exakt 10 grenar." },
        { context: "Pengar i enheter om 10", detail: "Många valutor är uppbyggda kring enheter om 10, som 10-kronorssedlar." },
      ],
      11: [
        { context: "Spelare i ett fotbollslag", detail: "Varje lag ställer upp med 11 spelare på planen i en vanlig fotbollsmatch." },
        { context: "Tvåsiffriga tal med upprepad siffra", detail: "11 är det minsta tvåsiffriga talet som består av en enda upprepad siffra — ett mönster som syns direkt i dess multiplikationstabell." },
      ],
      12: [
        { context: "Månader på ett år", detail: "Kalenderåret är indelat i 12 månader." },
        { context: "Tum i en fot (foot)", detail: "I det brittiska måttsystemet motsvarar 1 fot 12 tum." },
        { context: "Siffror på en klocktavla", detail: "En vanlig analog klocktavla är indelad i 12 siffror." },
        { context: "Ett dussin", detail: "Ägg och bakverk säljs ofta dussinvis — grupper om 12." },
        { context: "Stjärntecken", detail: "Den västerländska zodiaken delas traditionellt in i 12 tecken." },
      ],
    }

const funFacts: { [key: number]: FunFactItem[] } = {
      1: [
        { fact: "1 är varken ett primtal eller ett sammansatt tal — per definition måste ett primtal ha exakt två olika positiva delare, och 1 har bara en (sig själv)." },
        { fact: "Att multiplicera vilket tal som helst med 1 kallas multiplikationens identitetsegenskap, en av de första formella regler eleverna lär sig i aritmetik." },
        { fact: "Med romerska siffror skrivs 1 med ett enda streck: I — den enklaste symbolen i hela sifferssystemet." },
      ],
      2: [
        { fact: "2 är det enda jämna primtalet — alla andra jämna tal är delbara med 2, vilket gör dem till sammansatta tal." },
        { fact: "Eftersom 2 är det minsta primtalet är det utgångspunkten för hela begreppet primtalsfaktorisering." },
        { fact: "Fördubbling är ett av de snabbaste huvudräkningsknepen som finns — upprepad fördubbling dyker också upp inom datavetenskap som tvåpotenser: 2, 4, 8, 16, 32..." },
      ],
      3: [
        { fact: "Sifferssummeknepet för 3 fungerar eftersom 10 ger resten 1 vid division med 3 — samma anledning till att knepet också fungerar för 9." },
        { fact: "3 är det minsta udda primtalet." },
        { fact: "Triangeln är den enda polygon som är naturligt stel, vilket är varför triangulära former används så mycket i broar och byggnadsstommar." },
      ],
      4: [
        { fact: "4 är det minsta sammansatta talet — det första talet större än 1 som inte är ett primtal, eftersom det är jämnt delbart med 2." },
        { fact: "4 är en kvadrat: 4 = 2 × 2, alltså 2²." },
        { fact: "Eftersom 4 = 2 × 2 kan 4:ans tabell alltid fås genom att fördubbla 2:ans tabell — den som redan kan 2:ans tabell behöver inte lära sig något nytt." },
      ],
      5: [
        { fact: "5 ligger precis mitt emellan 0 och 10, vilket är varför 5:ans tabell alltid är hälften av motsvarande 10:ans tabell." },
        { fact: "5 är ett primtal, och det är det enda primtal som slutar på siffran 5." },
        { fact: "Klockor är indelade i 5-minutersintervall, så multiplikation med 5 är inbyggd i hur de flesta läser av klockan utan att ens tänka på det." },
      ],
      6: [
        { fact: "6 är det minsta perfekta talet — summan av dess äkta delare (1, 2 och 3) är exakt lika med talet självt: 1+2+3=6." },
        { fact: "6 = 2 × 3, vilket gör det till det minsta talet som är produkten av två olika primtal." },
        { fact: "Eftersom 6 är jämnt och delbart med 3 är varje multipel av 6 automatiskt delbar med både 2 och 3." },
      ],
      7: [
        { fact: "Sju är ett Mersenneprimtal — det är lika med 2³ − 1 (2 × 2 × 2, minus 1), vilket gör det till en del av en sällsynt familj primtal kopplade till tvåpotenser." },
        { fact: "Sjudagarsveckan går tillbaka till antik babylonisk astronomi, som följde exakt 7 himlakroppar synliga för blotta ögat: solen, månen och fem planeter — Merkurius, Venus, Mars, Jupiter och Saturnus." },
        { fact: "Sju anses vara ett lyckotal i många kulturer, vilket är varför det dyker upp så ofta i spel och speltraditioner världen över." },
        { fact: "James Bonds berömda kodnummer är 007, och Snövit bor med exakt sju dvärgar." },
      ],
      8: [
        { fact: "8 = 2³, vilket gör det till det första kubiktalet större än 1 (2 × 2 × 2 = 8)." },
        { fact: "Ordet 'bläckfisk' (octopus) och den musikaliska termen 'oktav' härstammar båda från samma grekiska rot som betyder åtta." },
        { fact: "8 är det enda talet mellan 1 och 12 som kräver tre på varandra följande fördubblingar från 2 (2 → 4 → 8)." },
      ],
      9: [
        { fact: "9 är ett kvadrattal: 9 = 3 × 3, alltså 3²." },
        { fact: "Oavsett hur stor en multipel av 9 är, kommer upprepad addition av dess siffror alltid till slut ge 9 — matematiker kallar denna egenskap 'tvärsumma' eller 'digital rot'." },
        { fact: "9 är det största ensiffriga talet, precis innan platsvärdet börjar med 10." },
      ],
      10: [
        { fact: "Ordet 'tiokamp' kommer från grekiska rötter som betyder 'tio tävlingar'." },
        { fact: "Multiplikation med 10 är den enda ensiffriga multiplikationstabellen där varje resultat följer en enda regel utan undantag: lägg till en nolla." },
        { fact: "Eftersom de flesta människor har 10 fingrar anses räkning i basen 10 (decimalsystemet) vara ett av de mest utbredda sifferssystemen i mänsklighetens historia." },
      ],
      11: [
        { fact: "11 är ett primtal — dess enda delare är 1 och talet självt." },
        { fact: "11 är det minsta tvåsiffriga primtalet." },
        { fact: "Spegelsiffermönstret (11×4=44, 11×7=77) fungerar bara för ensiffriga faktorer — ett av de tydligaste exemplen i multiplikationstabellerna på ett mönster med en inbyggd gräns." },
      ],
      12: [
        { fact: "12 är ett högt sammansatt tal — det har fler delare (1, 2, 3, 4, 6, 12) än något mindre positivt tal." },
        { fact: "Ordet 'dussin' kommer från gammalfranskans 'douzaine', som betyder en grupp om tolv." },
        { fact: "En grupp om 144 föremål — 12 dussin — kallas traditionellt för ett 'gross'." },
      ],
    }

export function getRealLifeExamples(n: number): RealLifeItem[] | null {
  return realLifeExamples[n] ?? null
}

export function getFunFacts(n: number): FunFactItem[] | null {
  return funFacts[n] ?? null
}
