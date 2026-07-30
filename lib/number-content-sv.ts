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
      13: [
        { context: "De 13 ursprungliga amerikanska kolonierna", detail: "USA började som 13 brittiska kolonier längs Atlantkusten, innan de förklarade sig självständiga." },
        { context: "Kort per färg", detail: "En vanlig kortlek med 52 kort har 13 kort i var och en av sina fyra färger." },
        { context: "Bagardussinet", detail: "Traditionellt betyder ett 'bagardussin' 13 föremål istället för 12." },
      ],
      14: [
        { context: "Fjorton dagar, två veckor", detail: "På engelska används ordet 'fortnight' för en period på 14 dagar." },
        { context: "Alla hjärtans dag", detail: "Alla hjärtans dag infaller varje år den 14 februari." },
        { context: "Verser i en sonett", detail: "En klassisk sonett, som de Shakespeare skrev, har exakt 14 verser." },
      ],
      15: [
        { context: "En kvart", detail: "15 minuter är en kvart — en av de vanligaste vardagliga användningarna av detta tal." },
        { context: "Ett rugby union-lags storlek", detail: "Ett rugby union-lag ställer upp med 15 spelare på planen, till skillnad från de 13 i rugby league." },
      ],
      16: [
        { context: "Uns i ett pund", detail: "I det amerikanska måttsystemet motsvarar 1 pund 16 uns." },
        { context: "Det hexadecimala systemet inom datavetenskap", detail: "Dataloger använder bas 16 (hexadecimal) som ett kompakt sätt att representera binär data." },
        { context: "Bönder på ett schackbräde", detail: "Ett schackspel innehåller totalt 16 bönder — 8 för varje spelare." },
        { context: "'Sweet sixteen'", detail: "Att fylla 16 år betraktas som en viktig milstolpe i flera kulturer." },
      ],
      17: [
        { context: "Talet som 'känns' mest slumpmässigt", detail: "I informella undersökningar där folk ombeds välja ett 'slumpmässigt' tal inom ett litet intervall väljer de 17 oftare än ren slump skulle förutsäga — en egenhet hos den mänskliga psykologin, inte äkta slumpmässighet." },
      ],
      18: [
        { context: "Myndighetsålder i Sverige", detail: "I Sverige, liksom i många andra länder, blir man myndig vid 18 års ålder." },
        { context: "Hål på en golfbana", detail: "En vanlig golfbana har 18 hål." },
      ],
      19: [
        { context: "Slutet på tonåren", detail: "På engelska sträcker sig talen som slutar på '-teen' från 13 till 19 — 19 är det sista innan man fyller 20." },
      ],
      20: [
        { context: "Synskärpa 20/20", detail: "'20/20 vision' är den engelska standardtermen för normal synskärpa, uppmätt på 20 fots avstånd." },
        { context: "Fingrar och tår tillsammans", detail: "De flesta människor har 10 fingrar och 10 tår, tillsammans 20." },
      ],
      21: [
        { context: "Blackjack", detail: "I kortspelet blackjack är 21 den poängsumma spelarna försöker nå utan att gå över." },
        { context: "Laglig dryckesålder i USA", detail: "I USA är den lägsta lagliga åldern för att köpa alkohol 21 år, standardiserad i hela landet genom en federal lag från 1984." },
      ],
      22: [
        { context: "Spelare på en fotbollsplan", detail: "En fullständig fotbollsmatch har 22 spelare på planen — 11 per lag." },
        { context: "Moment 22", detail: "Titeln på Joseph Hellers roman 'Catch-22' har på engelska blivit ett vedertaget uttryck för en situation utan utväg." },
      ],
      23: [
        { context: "Mänskliga kromosompar", detail: "En vanlig mänsklig cell innehåller 23 kromosompar — 46 totalt." },
      ],
      24: [
        { context: "24 timmar på ett dygn", detail: "Ett helt dygn delas in i 24 timmar." },
        { context: "24 karat rent guld", detail: "Guld av 24 karat betraktas som rent guld, den högsta renhetsgrad som används inom smyckestillverkning." },
        { context: "Filmens bildfrekvens", detail: "24 bilder per sekund har varit filmens standardhastighet sedan ljudfilmens era." },
      ],
      25: [
        { context: "En fjärdedel av 100", detail: "25 är exakt en fjärdedel av 100, därav den starka kopplingen mellan detta tal och procent." },
        { context: "Silverbröllop", detail: "Den 25:e bröllopsdagen kallas traditionellt 'silverbröllop'." },
      ],
      26: [
        { context: "Bokstäver i det engelska alfabetet", detail: "Det engelska alfabetet har 26 bokstäver, från A till Ö i den engelska versionen." },
        { context: "Ett maratons längd", detail: "Ett maraton är exakt 42,195 km, vilket motsvarar ungefär 26,2 miles." },
        { context: "Ben i en mänsklig fot", detail: "Enligt vedertagna anatomiska källor innehåller varje mänsklig fot 26 ben." },
      ],
      27: [
        { context: "'27-klubben'", detail: "Flera inflytelserika musiker — bland dem Jimi Hendrix, Janis Joplin och Kurt Cobain — dog vid 27 års ålder, ett mönster som populärkulturen döpt till '27-klubben'." },
      ],
      28: [
        { context: "Dagarna i februari", detail: "Februari har 28 dagar varje år som inte är skottår." },
        { context: "Månens cykel", detail: "Månens fascykel beskrivs ofta grovt som ungefär 28 dagar, även om den exakta synodiska månaden ligger närmare 29,5 dagar." },
      ],
      29: [
        { context: "Februari under skottår", detail: "Under ett skottår har februari 29 dagar istället för de vanliga 28." },
      ],
      30: [
        { context: "Månader med 30 dagar", detail: "April, juni, september och november har alla 30 dagar, precis som den kända ramsan om månaderna påminner om." },
      ],
      31: [
        { context: "Månader med 31 dagar", detail: "Januari, mars, maj, juli, augusti, oktober och december har alla 31 dagar — sju månader totalt." },
      ],
      32: [
        { context: "Vattnets fryspunkt", detail: "Vatten fryser vid 32°F på Fahrenheitskalan." },
        { context: "En fullständig vuxentandsats", detail: "En fullständig vuxen mänsklig tandsats, visdomständer inräknade, uppgår till totalt 32 tänder." },
        { context: "Antalet NFL-lag", detail: "Den amerikanska fotbollsligan NFL består av 32 lag." },
      ],
      33: [
        { context: "Kotor i den mänskliga ryggraden", detail: "Man brukar säga att den mänskliga ryggraden har 33 kotor, även om flera av dem växer samman till korsben och svansben i vuxen ålder." },
        { context: "Jesu ålder vid korsfästelsen", detail: "Enligt den mest utbredda kristna traditionen var Jesus 33 år vid korsfästelsen." },
      ],
      35: [
        { context: "Filmformatet 35mm", detail: "35mm har länge varit standardformatet både inom fotografi och film." },
      ],
      36: [
        { context: "Tum i en yard", detail: "I det amerikanska måttsystemet motsvarar 1 yard 36 tum." },
      ],
      38: [
        { context: "38:e breddgraden", detail: "Denna breddgrad har historiskt förknippats med gränsen mellan Nord- och Sydkorea." },
      ],
      39: [
        { context: "De 39 stegen", detail: "'The 39 Steps' är en klassisk thriller från 1935 regisserad av Alfred Hitchcock, baserad på en roman med samma namn från 1915." },
      ],
      40: [
        { context: "'Fyrtio dagar och fyrtio nätter'", detail: "Talet 40 återkommer flera gånger i Bibeln, bland annat i berättelsen om floden i Första Moseboken." },
        { context: "Den vanliga arbetsveckan", detail: "En 40-timmars arbetsvecka är en vanlig standard i många länder." },
        { context: "Ursprunget till ordet 'karantän'", detail: "'Karantän' kommer från italienskans 'quaranta giorni' ('fyrtio dagar'), den isoleringsperiod som historiskt krävdes av fartyg under pestutbrott." },
      ],
      42: [
        { context: "'Svaret på liv, universum och allting'", detail: "I Douglas Adams roman Liftarens guide till galaxen räknar en enorm superdator ut att svaret på den yttersta frågan är 42." },
        { context: "Antal prickar på ett par tärningar", detail: "En vanlig tärning har totalt 21 prickar (1+2+3+4+5+6), så ett par tärningar ger tillsammans 42 prickar." },
      ],
      44: [
        { context: "USA:s 44:e president", detail: "Barack Obama var USA:s 44:e president." },
      ],
      45: [
        { context: "45-varvsskivor", detail: "Vinylsinglar pressades traditionellt för att spelas i 45 varv per minut." },
      ],
      46: [
        { context: "Kromosomer i en mänsklig cell", detail: "En vanlig mänsklig cell innehåller 46 kromosomer, organiserade i 23 par." },
      ],
      48: [
        { context: "48 timmar", detail: "48 timmar motsvarar exakt två hela dygn." },
        { context: "USA:s sammanhängande delstater", detail: "USA:s 48 sammanhängande delstater utesluter bara de geografiskt separerade Alaska och Hawaii." },
      ],
      50: [
        { context: "USA:s delstater", detail: "USA består av 50 delstater." },
        { context: "Guldbröllop", detail: "Den 50:e bröllopsdagen kallas traditionellt 'guldbröllop'." },
      ],
      51: [
        { context: "Område 51", detail: "Område 51 är en berömd, länge hemligstämplad amerikansk flygvapenbas i Nevada, ofta refererad till i populärkulturen." },
      ],
      52: [
        { context: "Veckor på ett år", detail: "Ett vanligt år har 52 veckor." },
        { context: "Kort i en kortlek", detail: "En vanlig kortlek har 52 kort, jokrar oräknade." },
      ],
      54: [
        { context: "Rutor på en Rubiks kub", detail: "Den klassiska 3×3 Rubiks kub har 9 färgade rutor per sida, vilket ger totalt 54 rutor över dess 6 sidor." },
      ],
      55: [
        { context: "Den forna amerikanska hastighetsgränsen", detail: "Från 1974 till 1995 var 55 miles i timmen den högsta tillåtna hastigheten på amerikanska motorvägar enligt federal lag." },
      ],
      57: [
        { context: "Heinz slogan '57 sorter'", detail: "Företaget H.J. Heinz har använt slogan '57 sorter' sedan 1896, långt efter att man redan sålde fler än 57 produkter." },
      ],
      59: [
        { context: "En sekund innan nästa minut", detail: "En minut har 60 sekunder, så 59 är den sista sekunden innan en ny minut börjar." },
      ],
      60: [
        { context: "Sekunder i en minut", detail: "En minut har 60 sekunder." },
        { context: "Minuter i en timme", detail: "En timme har 60 minuter." },
      ],
      64: [
        { context: "Rutor på ett schackbräde", detail: "Ett vanligt schackbräde är ett 8×8-rutnät och innehåller exakt 64 rutor." },
        { context: "En klassisk Crayola-låda", detail: "Den ikoniska Crayola 'Big Box' har länge innehållit 64 kritfärger." },
        { context: "Nintendo 64", detail: "Nintendo 64 var en legendarisk spelkonsol från 90-talet, uppkallad efter sin 64-bitars processor." },
      ],
      65: [
        { context: "Den traditionella pensionsåldern", detail: "65 år har länge använts som standardpensionsålder i många länder." },
        { context: "En vanlig hastighetsgräns på motorväg", detail: "65 miles i timmen är en vanlig hastighetsgräns på motorvägar i många amerikanska delstater." },
      ],
      66: [
        { context: "Route 66", detail: "Route 66 var en av USA:s ursprungliga motorvägar, från Chicago till Santa Monica, och blev en kulturell symbol för amerikanska bilresor." },
      ],
      70: [
        { context: "'Sjuttio år' — en traditionell biblisk livslängd", detail: "Detta traditionella uttryck för en livslängd på 70 år kommer från Bibeln (Psaltaren 90:10)." },
      ],
      72: [
        { context: "'72-regeln'", detail: "Inom finans ger 72 delat med en räntesats en grov uppskattning av hur många år det tar för en investering att dubblas." },
        { context: "72 timmar", detail: "72 timmar motsvarar exakt tre hela dygn." },
      ],
      75: [
        { context: "Diamantbröllop", detail: "I vissa traditioner kallas den 75:e bröllopsdagen 'diamantbröllop', även om termen oftare förknippas med 60 år, som vid drottning Elizabeth II:s diamantjubileum 2012." },
      ],
      76: [
        { context: "'76 tromboner'", detail: "'Seventy-Six Trombones' är den berömda blåsorkestersången från 1957 års musikal The Music Man." },
      ],
      78: [
        { context: "78-varvsskivor", detail: "78 varv per minut var den allra första standardhastigheten för att spela upp grammofonskivor, innan formaten 33⅓ och 45 blev vanliga." },
      ],
      80: [
        { context: "Jorden runt på 80 dagar", detail: "Jules Vernes klassiska roman från 1873 följer en kapplöpning för att resa jorden runt på 80 dagar." },
      ],
      86: [
        { context: "Restaurangslang '86'", detail: "I bar- och restaurangslang betyder att '86:a' en rätt att ta bort den från menyn; det kan också betyda att avvisa en besvärlig gäst." },
      ],
      88: [
        { context: "Tangenter på ett piano", detail: "Ett vanligt modernt piano har 88 tangenter." },
        { context: "Officiellt erkända stjärnbilder", detail: "Internationella astronomiska unionen erkänner officiellt 88 stjärnbilder." },
      ],
      90: [
        { context: "Längden på en fotbollsmatch", detail: "En reglementsenlig fotbollsmatch varar 90 minuter, uppdelad i två halvlekar på 45 minuter." },
        { context: "En rät vinkel", detail: "En rät vinkel mäter exakt 90 grader." },
      ],
      92: [
        { context: "Urans atomnummer", detail: "Uran, med atomnummer 92, brukar anges som det tyngsta naturligt förekommande grundämnet i det periodiska systemet." },
      ],
      95: [
        { context: "Windows 95", detail: "Windows 95 var ett banbrytande Microsoft-operativsystem lanserat 1995 som hjälpte till att popularisera persondatorer." },
      ],
      99: [
        { context: "Prissättningens psykologi kring '.99'", detail: "Handlare sätter ofta priser som slutar på ,99 (som 19,99 kr) eftersom de uppfattas som märkbart lägre än nästa jämna tal." },
      ],
      100: [
        { context: "Ett sekel", detail: "En period på 100 år kallas ett sekel eller ett århundrade." },
        { context: "100 % som 'helheten'", detail: "Procent bygger på 100 som referenspunkt för en fullständig helhet." },
        { context: "USA:s senat", detail: "USA:s senat har 100 ledamöter — två från vardera av de 50 delstaterna." },
        { context: "Vattnets kokpunkt", detail: "Vid standardatmosfärstryck kokar vatten vid 100°C." },
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
      13: [
        { fact: "13 är ett primtal — dess enda delare är 1 och talet självt." },
        { fact: "Rädslan för talet 13 har ett formellt namn: triskaidekafobi." },
        { fact: "Många byggnader hoppar över våning 13 i numreringen på grund av skrocket kring talet." },
      ],
      14: [
        { fact: "14 = 2 × 7, så varje resultat i 14:ans tabell är exakt dubbelt så stort som motsvarande resultat i 7:ans tabell." },
        { fact: "Det engelska ordet 'fortnight' är en sammandragning av 'fourteen nights' (fjorton nätter), det gamla uttrycket för två veckor." },
      ],
      15: [
        { fact: "15 är ett triangeltal — det är summan av de fem första naturliga talen: 1+2+3+4+5=15." },
        { fact: "15 = 3 × 5, vilket gör det till produkten av de två minsta udda primtalen." },
      ],
      16: [
        { fact: "16 = 2⁴, vilket gör det till den första fjärdepotensen större än 1." },
        { fact: "16 är också en kvadrat: 16 = 4 × 4." },
        { fact: "Datorer använder ofta bas 16 (hexadecimal) eftersom varje hexadecimal siffra motsvarar exakt 4 binära bitar." },
      ],
      17: [
        { fact: "17 är ett primtal utan någon mindre tabell som kan dubblas eller tredubblas för att nå det." },
        { fact: "I informella psykologiska undersökningar, när folk ombeds säga ett 'slumpmässigt' tal mellan 1 och 20, väljer de 17 oproportionerligt ofta — en egenhet kring mänskliga talpreferenser snarare än äkta slump." },
      ],
      18: [
        { fact: "18 = 2 × 9 = 3 × 6, så det finns fler än ett giltigt sätt att dubbla eller tredubbla en mindre tabell för att nå det." },
        { fact: "Eftersom 18 är en multipel av 9 följer alla dess multiplar också 9:ans siffersummeregel." },
      ],
      19: [
        { fact: "19 är ett primtal och det sista av de engelska '-teen'-talen (13 till 19)." },
        { fact: "19 = 20 − 1, så multiplikation med 19 är ofta lättare genom att först multiplicera med 20 och sedan dra bort ursprungstalet." },
      ],
      20: [
        { fact: "Det gamla engelska ordet 'score' betyder 20, som i Lincolns berömda uttryck 'four score and seven years ago' (4×20+7=87)." },
        { fact: "20 = 4 × 5 = 2 × 10, så det finns flera faktorpar att bygga denna tabell från." },
      ],
      21: [
        { fact: "21 = 3 × 7, produkten av två mindre tabeller som eleverna troligen redan kan." },
        { fact: "I blackjack är 21 exakt målpoängen — att gå över den innebär automatisk förlust." },
      ],
      22: [
        { fact: "22 = 2 × 11, så dess tabell är helt enkelt dubbelt så stor som 11:ans tabell." },
        { fact: "Titeln på Joseph Hellers roman 'Catch-22' har på engelska blivit ett fristående uttryck för ett omöjligt dilemma." },
      ],
      23: [
        { fact: "23 är ett primtal — dess enda delare är 1 och talet självt." },
        { fact: "Mänskliga celler innehåller 23 kromosompar, ett av de mest citerade faktumen om talet 23 utanför matematiken." },
      ],
      24: [
        { fact: "24 är ett högt sammansatt tal — dess delare (1, 2, 3, 4, 6, 8, 12, 24) är fler än för något mindre positivt tal." },
        { fact: "24 = 2³ × 3, kombinerar en tvåpotens med en faktor 3." },
      ],
      25: [
        { fact: "25 är en kvadrat: 25 = 5 × 5." },
        { fact: "Eftersom 25 är exakt en fjärdedel av 100 går multiplikation med 25 ofta snabbare som ×100 och sedan ÷4." },
      ],
      26: [
        { fact: "26 = 2 × 13, så dess tabell är helt enkelt dubbelt så stor som 13:ans tabell." },
        { fact: "Alfabetets 26 bokstäver gör 26 till ett av de tal som förekommer oftast i vardagligt skriftspråk." },
      ],
      27: [
        { fact: "27 är en kub: 27 = 3 × 3 × 3, alltså 3³." },
        { fact: "'27-klubben' är en term inom populärkulturen för kända musiker som dog i den åldern — forskare har dock inte hittat statistiska bevis för en ovanlig dödsrisk specifikt vid 27 års ålder." },
      ],
      28: [
        { fact: "28 är ett perfekt tal — dess äkta delare (1, 2, 4, 7, 14) summerar till exakt 28; det är det andra perfekta talet efter 6." },
        { fact: "28 = 4 × 7, vilket kopplar det direkt till två mindre tabeller." },
      ],
      29: [
        { fact: "29 är ett primtal — dess enda delare är 1 och talet självt." },
        { fact: "29 förekommer som datum i kalendern bara under skottår, när februari får en extra dag." },
      ],
      30: [
        { fact: "30 = 2 × 3 × 5, produkten av de tre minsta primtalen." },
        { fact: "30 har ovanligt många små delare för sin storlek, vilket är en av anledningarna till att det så ofta går jämnt upp i vardagliga mätningar." },
      ],
      31: [
        { fact: "31 är ett primtal — dess enda delare är 1 och talet självt." },
        { fact: "31 = 2⁵ − 1, vilket gör det till ett Mersenneprimtal, samma familj som inkluderar 3, 7 och 127." },
      ],
      32: [
        { fact: "32 = 2⁵, tvåans femte potens." },
        { fact: "32 är exakt dubbelt så stort som 16, som i sin tur är dubbelt så stort som 8 — del av en obruten fördubblingskedja ända ner till 1." },
      ],
      33: [
        { fact: "33 = 3 × 11, så dess tabell är direkt tredubbling av 11:ans spegelsiffermönster." },
      ],
      34: [
        { fact: "34 är ett Fibonaccital — det är summan av de två föregående Fibonaccitalen, 13 och 21." },
        { fact: "I en magisk 4×4-kvadrat summerar varje rad, kolumn och diagonal till 34 — den minsta möjliga magiska konstanten för ett 4×4-rutnät." },
      ],
      35: [
        { fact: "35 = 5 × 7, produkten av två mindre tabeller som eleverna redan kan." },
      ],
      36: [
        { fact: "36 är både en kvadrat (6×6) och ett triangeltal (1+2+...+8) — en kombination som mycket få tal delar." },
      ],
      37: [
        { fact: "37 är ett primtal — dess enda delare är 1 och talet självt." },
        { fact: "37 × 3 = 111, vilket gör att 37 går jämnt upp i varje tresiffrigt tal med upprepad siffra (111, 222, 333... ända till 999)." },
      ],
      38: [
        { fact: "38 = 2 × 19, så dess tabell är helt enkelt dubbelt så stor som 19:ans tabell." },
      ],
      39: [
        { fact: "39 = 3 × 13, produkten av två mindre tabeller som eleverna troligen redan kan." },
      ],
      40: [
        { fact: "40 = 2³ × 5, kombinerar en tvåpotens med en faktor 5." },
      ],
      41: [
        { fact: "41 är ett primtal — dess enda delare är 1 och talet självt." },
        { fact: "41 och 43 är tvillingprimtal — de skiljer sig åt med exakt 2." },
      ],
      42: [
        { fact: "42 = 2 × 3 × 7, kombinerar tre av de minsta primtalen som används i standardmultiplikationstabellerna." },
      ],
      43: [
        { fact: "43 är ett primtal — dess enda delare är 1 och talet självt." },
        { fact: "43 bildar, liksom 41, det större värdet i ett par tvillingprimtal separerade av exakt ett jämnt tal, 42." },
      ],
      44: [
        { fact: "44 = 4 × 11, så dess tabell är direkt fyrdubbling av 11:ans tabell." },
      ],
      45: [
        { fact: "45° är exakt hälften av en rät vinkel (90°), vilket är varför 45-graders vinklar ständigt dyker upp inom geometri och design." },
        { fact: "45 är både ett triangeltal (1+2+...+9) och produkten av två mindre tabeller, 9 och 5." },
      ],
      46: [
        { fact: "46 = 2 × 23, så dess tabell är helt enkelt dubbelt så stor som 23:ans tabell." },
      ],
      47: [
        { fact: "47 är ett primtal — dess enda delare är 1 och talet självt." },
        { fact: "47 är ett berömt insiderskämt bland Star Trek-fans och manusförfattare, som tydligen medvetet placerade det i bakgrunden av många avsnitt." },
      ],
      48: [
        { fact: "48 är ett högt sammansatt tal för sin storlek — dess delare (1, 2, 3, 4, 6, 8, 12, 16, 24, 48) är fler än för något mindre positivt tal." },
      ],
      49: [
        { fact: "49 är en kvadrat: 49 = 7 × 7." },
        { fact: "7×7=49 är ett av de mest utantillinlärda enskilda faktumen i hela standardmultiplikationstabellen." },
      ],
      50: [
        { fact: "50 = 2 × 5², kombinerar en enda faktor 2 med kvadraten av 5." },
      ],
      51: [
        { fact: "51 = 3 × 17, produkten av två små primtal." },
      ],
      52: [
        { fact: "52 = 4 × 13, så dess tabell är direkt fyrdubbling av 13:ans tabell." },
      ],
      53: [
        { fact: "53 är ett primtal — dess enda delare är 1 och talet självt." },
      ],
      54: [
        { fact: "54 = 2 × 3³, kombinerar en enda faktor 2 med kuben av 3." },
      ],
      55: [
        { fact: "55 är både ett triangeltal (1+2+...+10) och ett Fibonaccital — en kombination som mycket få tal delar." },
      ],
      56: [
        { fact: "56 = 2³ × 7, kombinerar en tvåpotens med en faktor 7." },
        { fact: "7×8=56 är ett av de mest förväxlade enskilda faktumen i hela standardmultiplikationstabellen." },
      ],
      57: [
        { fact: "57 = 3 × 19, produkten av två små primtal." },
      ],
      58: [
        { fact: "58 = 2 × 29, så dess tabell är helt enkelt dubbelt så stor som 29:ans tabell." },
      ],
      59: [
        { fact: "59 är ett primtal — dess enda delare är 1 och talet självt." },
      ],
      60: [
        { fact: "60 är ett högt sammansatt tal — dess delare (1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60) är fler än för något mindre positivt tal." },
        { fact: "De forntida babylonierna använde ett talsystem med bas 60 (sexagesimalt), vilket är varför tid och vinklar fortfarande delas in i enheter om 60." },
      ],
      61: [
        { fact: "61 är ett primtal — dess enda delare är 1 och talet självt." },
      ],
      62: [
        { fact: "62 = 2 × 31, så dess tabell är helt enkelt dubbelt så stor som 31:ans tabell." },
      ],
      63: [
        { fact: "63 = 3² × 7, kombinerar kvadraten av 3 med en faktor 7." },
        { fact: "63 = 2⁶ − 1 (64 minus 1), alltså precis ett steg under nästa tvåpotens." },
      ],
      64: [
        { fact: "64 är både en kvadrat (8²) och en kub (4³) — ett av få tal som förenar båda dessa egenskaper." },
      ],
      65: [
        { fact: "65 = 5 × 13, produkten av två mindre tabeller." },
      ],
      66: [
        { fact: "66 = 2 × 3 × 11, kombinerar tre av de mindre tabellerna." },
      ],
      67: [
        { fact: "67 är ett primtal — dess enda delare är 1 och talet självt." },
      ],
      68: [
        { fact: "68 = 4 × 17, så dess tabell är direkt fyrdubbling av 17:ans tabell." },
      ],
      69: [
        { fact: "69 = 3 × 23, produkten av två mindre tabeller." },
      ],
      70: [
        { fact: "70 = 2 × 5 × 7, kombinerar tre av de minsta primtalen som används i standardmultiplikationstabellerna." },
      ],
      71: [
        { fact: "71 är ett primtal — dess enda delare är 1 och talet självt." },
      ],
      72: [
        { fact: "72 = 2³ × 3², kombinerar en tvåpotens med kvadraten av 3." },
      ],
      73: [
        { fact: "73 är ett primtal — dess enda delare är 1 och talet självt. Det är också det 21:a primtalet räknat från 2." },
        { fact: "Skrivet i binärt blir 73 lika med 1001001 — ett palindrom som läses likadant i båda riktningarna." },
      ],
      74: [
        { fact: "74 = 2 × 37, så dess tabell är helt enkelt dubbelt så stor som 37:ans tabell." },
      ],
      75: [
        { fact: "75 = 3 × 5², kombinerar en faktor 3 med kvadraten av 5." },
      ],
      76: [
        { fact: "76 = 4 × 19, så dess tabell är direkt fyrdubbling av 19:ans tabell." },
      ],
      77: [
        { fact: "77 = 7 × 11, produkten av två mindre tabeller." },
        { fact: "77 är ett numeriskt palindrom — det läses likadant framlänges som baklänges." },
      ],
      78: [
        { fact: "78 = 2 × 3 × 13, kombinerar tre av de mindre tabellerna." },
      ],
      79: [
        { fact: "79 är ett primtal — dess enda delare är 1 och talet självt." },
      ],
      80: [
        { fact: "80 = 2⁴ × 5, kombinerar en tvåpotens med en faktor 5." },
        { fact: "80 % motsvarar fyra femtedelar (4/5) av en helhet." },
      ],
      81: [
        { fact: "81 är en kvadrat (9×9) och är också lika med 3⁴ (3 upphöjt till 4)." },
      ],
      82: [
        { fact: "82 = 2 × 41, så dess tabell är helt enkelt dubbelt så stor som 41:ans tabell." },
      ],
      83: [
        { fact: "83 är ett primtal — dess enda delare är 1 och talet självt." },
      ],
      84: [
        { fact: "84 = 2² × 3 × 7, kombinerar en tvåpotens med faktorerna 3 och 7." },
      ],
      85: [
        { fact: "85 = 5 × 17, produkten av två mindre tabeller." },
      ],
      86: [
        { fact: "86 = 2 × 43, så dess tabell är helt enkelt dubbelt så stor som 43:ans tabell." },
      ],
      87: [
        { fact: "87 = 3 × 29, produkten av två mindre tabeller." },
      ],
      88: [
        { fact: "88 = 8 × 11, produkten av två mindre tabeller." },
      ],
      89: [
        { fact: "89 är ett primtal — dess enda delare är 1 och talet självt." },
        { fact: "89 är också ett Fibonaccital — det är summan av de två föregående Fibonaccitalen, 34 och 55." },
      ],
      90: [
        { fact: "90 = 2 × 3² × 5, kombinerar en tvåpotens, kvadraten av 3 och en faktor 5." },
      ],
      91: [
        { fact: "91 = 7 × 13, vilket gör det till ett klassiskt exempel inom matematikundervisning på ett tal som ser ut som ett primtal men inte är det." },
      ],
      92: [
        { fact: "92 = 4 × 23, så dess tabell är direkt fyrdubbling av 23:ans tabell." },
      ],
      93: [
        { fact: "93 = 3 × 31, produkten av två mindre tabeller." },
      ],
      94: [
        { fact: "94 = 2 × 47, så dess tabell är helt enkelt dubbelt så stor som 47:ans tabell." },
      ],
      95: [
        { fact: "95 = 5 × 19, produkten av två mindre tabeller." },
      ],
      96: [
        { fact: "96 = 2⁵ × 3, kombinerar en tvåpotens med en enda faktor 3." },
      ],
      97: [
        { fact: "97 är ett primtal — dess enda delare är 1 och talet självt." },
        { fact: "97 är det största primtalet under 100." },
      ],
      98: [
        { fact: "98 = 2 × 7², kombinerar en enda faktor 2 med kvadraten av 7." },
      ],
      99: [
        { fact: "99 = 9 × 11, produkten av två mindre tabeller." },
        { fact: "Eftersom 99 är en multipel av 9 summerar siffrorna i varje multipel av 99 alltid till en multipel av 9." },
      ],
      100: [
        { fact: "100 = 10², kvadraten av 10, och är också lika med 4 × 25." },
      ],
    }

export function getRealLifeExamples(n: number): RealLifeItem[] | null {
  return realLifeExamples[n] ?? null
}

export function getFunFacts(n: number): FunFactItem[] | null {
  return funFacts[n] ?? null
}
