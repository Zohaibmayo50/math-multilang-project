// AUTO-EXTRACTED verbatim from app/components/fi/NumberPage.tsx
// Per-number curated content for locale: fi
import type { PatternItem, MistakeItem, RealLifeItem, FunFactItem } from './number-content-types'

const meanings: { [key: number]: string } = {
      1: "Luvulla 1 kertominen on erityistapaus matematiikassa. Kun kerrot minkä tahansa luvun 1:llä, tulos on aina sama luku. Tätä kutsutaan kertolaskun identiteettiominaisuudeksi. Ajattele sitä näin: 'Kuinka monta ryhmää minulla on?' Jos sinulla on vain 1 ryhmä, sinulla on täsmälleen se, millä aloitit.",
      2: "Luvulla 2 kertominen tarkoittaa luvun kaksinkertaistamista. Kun kerrot jotain 2:lla, lisäät sen itseensä. Tämä on yksi käytännöllisimmistä kertotauluista, koska meidän täytyy usein kaksinkertaistaa asioita jokapäiväisessä elämässä — laskea kenkäpareja, polkupyörän pyöriä tai jakaa jotain tasapuolisesti kahden ihmisen kesken.",
      3: "Luvulla 3 kertominen tarkoittaa luvun ottamista kolme kertaa. Voit ajatella sitä saman luvun lisäämisenä itseensä kolme kertaa. Tämä taulu on tärkeä kolmioiden, kolmikoiden ja kaiken, mikä tulee kolmen ryhmissä, ymmärtämiseksi.",
      4: "Luvulla 4 kertominen on kuin kaksinkertaistaminen kahdesti. Koska 4 = 2 × 2, voit kaksinkertaistaa luvun ja sitten kaksinkertaistaa tuloksen uudelleen. Tämä tekee 4-taulun oppimisesta helpompaa, jos tiedät jo 2-taulun. Luku 4 esiintyy usein geometriassa (neliöillä on 4 sivua) ja ajan mittauksessa (on 4 neljännestuntia).",
      5: "Luvulla 5 kertominen luo yhden kauneimmista kuvioista matematiikassa. Kaikki luvun 5 kerrannaisluvut päättyvät 0:aan tai 5:een, mikä tekee tästä taulusta erittäin ennustettavan. Se on äärimmäisen hyödyllinen rahan laskemisessa (5 sentin kolikot, 5 euron setelit) ja kellonajan lukemisessa (5 minuutin välein).",
      6: "Luvulla 6 kertominen tarkoittaa kuuden luvun ryhmän ottamista. 6 on ensimmäinen 'todellinen' kertotaulu, koska se ei ole vain 2:n tai 3:n kerrannaisuus. Mutta koska 6 = 2 × 3, voit kertoa luvun 2:lla ja sitten 3:lla (tai päinvastoin) kertoaksesi 6:lla. Luku 6 esiintyy usein luonnossa (mehiläiskennon solut) ja jokapäiväisessä elämässä (munakennot, nopan sivut).",
      7: "Luvulla 7 kertominen on yleensä yksi vaikeimmista tauluista opiskelijoille, koska 7 on alkuluku eikä sitä voi helposti johtaa muista tauluista. Kaikissa luvun 7 kerrannaisuuksissa on kuitenkin kauniita kuvioita ja ne voidaan oppia harjoittelulla. 7 on tärkeä luku viikonpäiville, maapallon mantereille ja monille kulttuuriviittauksille.",
      8: "Luvulla 8 kertominen on kuin kaksinkertaistaminen kolme kertaa (8 = 2 × 2 × 2). Kaksinkertaista luku, kaksinkertaista tulos uudelleen ja kaksinkertaista vielä kerran — silloin olet kertanut 8:lla. Tämä taulu on helpompi oppia, kun tiedät hyvin 2- ja 4-taulut. 8 on tärkeä luku geometriassa (kahdeksankulmiot) ja musiikissa (oktaavi).",
      9: "Luvulla 9 kertomisella on yksi kiehtovimmista kuvioista matematiikassa. Kun lasket yhteen minkä tahansa luvun 9 kerrannaisuuden numerot, tulos on aina jaollinen 9:llä. Myös 9 × n:n kymmenluku on aina n-1. Tämä taulu voidaan oppia myös sormitemppuilla. Koska 9 on vain 1 vähemmän kuin 10, se voidaan myös laskea käyttäen 10-taulua.",
      10: "Luvulla 10 kertominen on yksi helpoimmista kertotauluista. Kun kerrot minkä tahansa luvun 10:llä, lisäät vain nollan loppuun. Tämä muodostaa kymmenjärjestelmämme perustan. Luvulla 10 kertomisen oppiminen opettaa oppilaille paikkaarvojen käsitteen ja kuinka työskennellä suurten lukujen kanssa. 10-taulu on vertailukohta kaikkien muiden kertotaulujen ymmärtämiselle.",
      11: "Luvulla 11 kertomisella on yksi mielenkiintoisimmista kuvioista matematiikassa. Kun kerrot yksinumeroiset luvut 11:llä, tulos on tämä luku toistettuna kahdesti (11×3=33, 11×7=77). Kaksinumeroisten lukujen kerrottaessa 11:llä on myös kaunis kuvio: lasket numerot yhteen ja laitat ne keskelle. 11 on alkuluku ja sillä on erityisiä matemaattisia ominaisuuksia.",
      12: "Luvulla 12 kertominen on yksi käytännöllisimmistä tauluista, koska 12 on jaollinen monilla luvuilla (1, 2, 3, 4, 6, 12). Tämä ominaisuus tekee 12:sta erittäin hyödyllisen jokapäiväisessä elämässä — on 12 esinettä tusinassa, 12 tuntia kellossa, 12 kuukautta vuodessa. Koska 12 = 3 × 4 = 2 × 6, voit oppia tämän taulun monella tavalla.",
      13: "Luvulla 13 kertominen kehittää opiskelijoiden kuvioiden tunnistusta. 13 on alkuluku, joten sitä ei voi helposti johtaa muista tauluista. On kuitenkin erittäin hyödyllistä ajatella 13 muodossa 10+3: luvun kertominen 13:lla tarkoittaa sen kertomista 10:llä ja 3:n kertomisen tuloksen lisäämistä. 13 on luku, jolla on erityinen merkitys monissa kulttuureissa.",
      14: "Luvulla 14 kertominen on kaksinkertainen 7-taulu. Koska 14 = 2 × 7, jos tiedät 7-taulun, voit kaksinkertaistaa jokaisen tuloksen ja saada 14-taulun. 14 on tärkeä viikoittaisessa suunnittelussa (2 viikkoa = 14 päivää) ja se osoittaa parillisten lukujen ominaisuuksia.",
      15: "Luvulla 15 kertominen yhdistää 3:n ja 5:n kerrannaisuudet. Koska 15 = 3 × 5, tämä taulu kantaa molempien lukujen ominaisuuksia. Kaikki luvun 15 kerrannaisuudet ovat jaollisia sekä 3:lla että 5:llä. Koska 15 minuuttia on neljännestunti, sitä käytetään usein aikanlaskuissa.",
      16: "Luvulla 16 kertominen on 2:n neljäs potenssi (2×2×2×2=16). Tämä mahdollistaa 16-taulun oppimisen kaksinkertaistamisketjuilla. Voit kaksinkertaistaa 8 ja saada 16. Tietojenkäsittelyssä 16 on tärkeä luku (heksadesimaalijärjestelmä) ja se esiintyy usein myös jokapäiväisessä elämässä.",
      17: "Luvulla 17 kertominen voi olla vaikeaa sen alkulukuominaisuuksien vuoksi. 17:ää ei voi helposti johtaa muista tauluista. Mutta auttaa ajatella 17 muodossa 20-3 tai 10+7. Luvun 17 taulun oppiminen kehittää mielen aritmetiikan taitoja ja ongelmanratkaisustrategioita.",
      18: "Luvulla 18 kertomisessa on monia lähestymistapoja. Koska 18 = 2 × 9 = 3 × 6, voit oppia tämän taulun monella tavalla. 9-taulun kaksinkertaistaminen tai 6-taulun kolminkertaistaminen antaa 18-taulun. 18 on tärkeä täysi-ikäisyyden ikänä monissa maissa.",
      19: "Luvulla 19 kertomista ei voi johtaa muista tauluista, koska 19 on alkuluku. On kuitenkin erittäin käytännöllistä ajatella 19 muodossa 20-1: kerro luku 20:llä ja vähennä itse luku. Tämä strategia tekee 19-taulun laskemisesta mielessä paljon helpompaa.",
      20: "Luvulla 20 kertominen on luonnollinen jatke 10-taululle. Kun kerrot minkä tahansa luvun 20:llä, voit kertoa sen 10:llä ja kaksinkertaistaa tuloksen. Tai lisää vain nolla loppuun ja kaksinkertaista. 20-taulua käytetään jatkuvasti rahalaskuissa (20 euroa) ja mittauksissa (20 metriä, 20 kilogrammaa).",
      // Continues for numbers 21-100...
    }

const importance: { [key: number]: string } = {
      1: "Kertotaulu 1 on kaikkien kertolaskuoperaatioiden perusta. Se opettaa oppilaille, että luvuilla on identiteetti: 1:llä kerrottaessa ne pysyvät muuttumattomina. Tämä käsite on tärkeä myöhempien algebrallisten ominaisuuksien ymmärtämiseksi. Vaikka se vaikuttaa yksinkertaiselta, tämän taulun oppiminen luo luottamusta ja vakiinnuttaa mallin, että kertolasku on järjestetty ja ennustettava.",
      2: "Kertotaulu 2 on yleensä ensimmäinen todellinen kertotaulu, jonka oppilaat oppivat, ja tällä on hyvä syy. Kaksinkertaistaminen on luonnollinen käsite, jonka lapset kohtaavat päivittäin. Tämän taulun oppiminen tekee mielen aritmetiikasta paljon nopeampaa ja valmistaa oppilaita parillisiin lukuihin, murtolukuihin (puolikkaat) ja perusjakoon. Monet oppilaat pitävät sitä helpoimpana tauluna, mikä luo luottamusta monimutkaisempiin tauluihin.",
      3: "Kertotaulu 3 täyttää aukon yksinkertaisten ja monimutkaisten taulujen välillä. Se vaatii oppilaita menemään yksinkertaisen kaksinkertaistamisen yli ja tunnistamaan uusia kuvioita. Tämä taulu esiintyy jatkuvasti tosielämän yhteyksissä, kuten laskeminen kolmen ryhmissä, kolmiomuotojen ymmärtäminen ja ajan kanssa työskentely (kolme ajanjaksoa päivässä). Oppilaat, jotka oppivat 3-taulun, osoittavat hallitsevansa abstraktin laskemisen.",
      // Additional importance entries for other numbers...
    }

const patterns: { [key: number]: PatternItem[] } = {
      1: [
        { title: "Identiteettikuvio", description: "Jokainen luku kerrottuna 1:llä antaa itsensä. Tämä ei koskaan muutu: 1×1=1, 1×2=2, 1×3=3, ja niin edelleen." },
        { title: "Ennustettava Sarja", description: "Tulokset vain laskevat ylöspäin: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Kirjoitat vain numerot järjestyksessä." },
        { title: "Kaikkien Taulujen Perusta", description: "Jokainen kertotaulu alkaa 1:llä kertomisesta, joten tämä kuvio esiintyy kaikissa tauluissa." },
      ],
      2: [
        { title: "Vain Parilliset Luvut", description: "Kaikki luvun 2 kerrannaisluvut ovat parillisia lukuja. Tulokset päättyvät aina 0:aan, 2:een, 4:ään, 6:een tai 8:aan." },
        { title: "Laskeminen Kahden Välein", description: "Jokainen vastaus on 2 suurempi kuin edellinen: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20." },
        { title: "Kaksinkertaistamiskuvio", description: "Jokainen tulos on täsmälleen tekijän kaksinkertainen: 2×5=10 on 5:n kaksinkertainen." },
      ],
      3: [
        { title: "Numeroiden Summakuvio", description: "Laske jokaisen tuloksen numerot yhteen: 3 (3), 6 (6), 9 (9), 12 (1+2=3), 15 (1+5=6), 18 (1+8=9). Kuvio 3-6-9 toistuu!" },
        { title: "Laskeminen Kolmen Välein", description: "Jokainen vastaus kasvaa 3:lla: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30." },
        { title: "Pariton-Parillinen Vuorottelu", description: "Tulokset vuorottelevat: pariton (3), parillinen (6), pariton (9), parillinen (12), luoden ennustettavan rytmin." },
      ],
      // Additional patterns for other numbers follow the same structure...
    }

const mistakes: { [key: number]: MistakeItem[] } = {
      1: [
        { mistake: "Ajatella, että 1×1=2", solution: "Muista: mikä tahansa kerrottuna 1:llä pysyy samana. 1 ryhmä 1:stä on vain 1." },
        { mistake: "Sekoittaminen yhteenlaskuun", solution: "Luvulla 1 kertominen on eri asia kuin lisääminen. 5+1=6, mutta 5×1=5." },
      ],
      2: [
        { mistake: "2×6=12 sekoittaminen 2×7=14:ään", solution: "Käytä laskemista kahden välein: 2, 4, 6, 8, 10, 12, 14. Laske huolellisesti väliin jättämättä." },
        { mistake: "Sekaannus suurilla luvuilla", solution: "Hajota: 2×8 on VAIN 8+8. Kaksinkertaistaminen on yksinkertainen yhteenlasku." },
      ],
      // Additional mistakes for other numbers follow the same pattern...
    }

const strategies: { [key: number]: string[] } = {
      1: [
        "Sano jokainen kertolasku ääneen: '1 kertaa 1 on 1, 1 kertaa 2 on 2...'",
        "Harjoittele taulun kirjoittamista kerran päivässä viikon ajan",
        "Etsi kuvio: vastaus on aina sama luku kuin toinen luku",
        "Käytä muistikortteja, vaikka tämä taulu opitaan yleensä erittäin nopeasti",
      ],
      2: [
        "Laske kahden välein kävelyn tai portaiden nousun aikana: 2, 4, 6, 8...",
        "Käytä sormiasi: pidä sormia pareittain ja laske kahden välein",
        "Harjoittele numerojen kaksinkertaistamista mielessä päivän aikana",
        "Sano ääneen: '2 kertaa 5 on 5 plus 5, mikä on 10'",
      ],
      // Additional strategies for other numbers...
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
        { context: "'Numero yksi' oleminen", detail: "Monissa kielissä ja kulttuureissa numero yksi tarkoittaa ensimmäistä sijaa tai korkeinta asemaa — urheilun palkintopalleilta koulun arvosanoihin." },
        { context: "Yksi ainoa esine", detail: "Aina kun lasket yhden esineen — yhden omenan, yhden tuolin — sovellat ajatusta, että 1 ryhmä jotakin on yksinkertaisesti se yksi asia." },
        { context: "Ensimmäinen asema sarjassa", detail: "Sivu 1, Päivä 1, Kierros 1 — ykkönen merkitsee lukemattomien numerointijärjestelmien lähtökohtaa." },
      ],
      2: [
        { context: "Kenkä-, sukka- ja hansikasparit", detail: "Suurin osa arkisista pareista koostuu 2 kappaleesta — suora, konkreettinen malli kaksinkertaistamisesta." },
        { context: "Silmät ja korvat", detail: "Ihmisellä on 2 silmää ja 2 korvaa, monien muiden parillisten elinten joukossa." },
        { context: "Polkupyörän pyörät", detail: "Tavallisessa polkupyörässä on 2 pyörää, toisin kuin kolmipyörässä (3) tai yksipyörässä (1)." },
        { context: "Binäärikoodi tietotekniikassa", detail: "Tietokoneet tallentavat ja käsittelevät tietoa binäärimuodossa (kantaluku 2), joka rakentuu vain kahdesta numerosta: 0 ja 1." },
      ],
      3: [
        { context: "Liikennevalot", detail: "Tavalliset liikennevalot käyttävät 3 väriä: punaista, keltaista ja vihreää." },
        { context: "Kolmiot", detail: "Jokaisessa kolmiossa on täsmälleen 3 sivua ja 3 kulmaa — yksinkertaisin mahdollinen monikulmio." },
        { context: "Mitalikorokkeet", detail: "Olympialaisissa ja monissa muissa kilpailuissa jaetaan 3 mitalia: kulta, hopea ja pronssi." },
        { context: "Perusvärit", detail: "Koulussa perinteisesti opetetussa väriopissa punaista, keltaista ja sinistä pidetään 3 perusvärinä." },
      ],
      4: [
        { context: "Neljä vuodenaikaa", detail: "Monilla alueilla maailmassa vuosi jaetaan 4 vuodenaikaan: kevät, kesä, syksy ja talvi." },
        { context: "Ilmansuunnat", detail: "Kompassissa on 4 pääilmansuuntaa: pohjoinen, etelä, itä ja länsi." },
        { context: "Pöydän jalat", detail: "Useimmissa pöydissä ja tuoleissa on 4 jalkaa vakauden vuoksi." },
        { context: "Korttipakan maat", detail: "Tavallinen 52 kortin pakka jakautuu 4 maahan: hertta, ruutu, risti ja pata." },
      ],
      5: [
        { context: "Yhden käden sormet", detail: "Useimmilla ihmisillä on 5 sormea kädessä, mikä tekee 5:stä yhden luonnollisimmista luvuista varhaiseen laskemisen opetteluun." },
        { context: "Viisi aistia", detail: "Näkö, kuulo, haju, maku ja tunto kuvataan yleisesti ihmisen 5 perinteisenä aistina." },
        { context: "Viisikulmio", detail: "Viisikulmio on viisisivuinen muoto, ja Yhdysvaltain puolustusministeriön päämaja, Pentagon, on saanut nimensä juuri tästä muodosta." },
        { context: "Rahaa 5:n yksiköissä", detail: "Monissa valuutoissa on 5:n kolikko tai seteli, kuten 5 euron seteli." },
      ],
      6: [
        { context: "Nopan sivut", detail: "Tavallisessa kuusisivuisessa nopassa (kuutiossa) on täsmälleen 6 sivua." },
        { context: "Hyönteisten jalat", detail: "Kaikilla hyönteisillä on määritelmän mukaan 6 jalkaa — yksi piirre, joka erottaa ne 8-jalkaisista hämähäkeistä." },
        { context: "Kitaran kielet", detail: "Tavallisessa akustisessa tai sähkökitarassa on 6 kieltä." },
        { context: "Puoli tusinaa", detail: "Munia ja leivonnaisia myydään usein puolen tusinan erissä — 6 kappaleen pakkauksissa." },
      ],
      7: [
        { context: "Viikon 7 päivää", detail: "Käytössä nykyään lähes kaikissa maailman kalenterijärjestelmissä." },
        { context: "7 maanosaa", detail: "Afrikka, Antarktis, Aasia, Australia, Eurooppa, Pohjois-Amerikka ja Etelä-Amerikka — kouluissa yleisimmin opetetussa mallissa." },
        { context: "Musiikkiasteikon 7 säveltä", detail: "C, D, E, F, G, A, H — ennen kuin kuvio toistuu oktaavia korkeammalla." },
        { context: "Sateenkaaren 7 väriä", detail: "Punainen, oranssi, keltainen, vihreä, sininen, indigo ja violetti — jaottelu, jonka Isaac Newton popularisoi ensimmäisenä." },
        { context: "Antiikin maailman seitsemän ihmettä", detail: "Mukaan lukien Gizan suuri pyramidi, ainoa niistä, joka on yhä pystyssä." },
      ],
      8: [
        { context: "Hämähäkkien jalat", detail: "Hämähäkeillä ja muilla hämähäkkieläimillä on 8 jalkaa, toisin kuin hyönteisillä, joilla on 6." },
        { context: "Mustekalan lonkerot", detail: "Mustekalalla on 8 lonkeroa — siitä sen nimikin tulee (kreikan 'okto', joka tarkoittaa kahdeksaa)." },
        { context: "Tavu tietotekniikassa", detail: "Tietotekniikassa 8 bittiä muodostaa 1 tavun, digitaalisen tallennustilan ja muistin perusyksikön." },
        { context: "Musiikillinen oktaavi", detail: "Länsimaisessa musiikissa oktaavi kattaa 8 säveltä (esimerkiksi C:stä seuraavaan C:hen: C, D, E, F, G, A, H, C)." },
      ],
      9: [
        { context: "Baseball-erät", detail: "Tavallinen baseball-ottelu koostuu 9 erästä." },
        { context: "3×3-neliö", detail: "9 on neliöluku: ruudukko, jossa on 3 riviä ja 3 saraketta, sisältää täsmälleen 9 ruutua, kuten ristinolla-lauta." },
        { context: "Aurinkokunta, historiallisesti", detail: "Suuren osan 1900-lukua oppilaat oppivat, että planeettoja on 9; Pluto luokiteltiin kääpiöplaneetaksi vuonna 2006, jolloin tunnustettuja planeettoja on nykyään 8." },
      ],
      10: [
        { context: "Kymmenjärjestelmä", detail: "Lähes kaikki nykyaikaiset laskentajärjestelmät perustuvat kantalukuun 10, rakentuen kokonaan kymmenen ryhmistä." },
        { context: "Sormet ja varpaat", detail: "Useimmilla ihmisillä on 10 sormea ja 10 varvasta, minkä uskotaan olleen yksi syy siihen, miksi kymmenjärjestelmä on levinnyt historiallisesti niin laajalle." },
        { context: "Kymmenottelu", detail: "Kymmenottelu on yleisurheilulaji, joka koostuu täsmälleen 10 lajista." },
        { context: "Rahaa 10:n yksiköissä", detail: "Monet valuutat rakentuvat 10:n yksiköiden ympärille, kuten 10 euron setelit." },
      ],
      11: [
        { context: "Jalkapallojoukkueen pelaajat", detail: "Kummallakin joukkueella on tavallisessa jalkapallo-ottelussa 11 pelaajaa kentällä." },
        { context: "Kaksinumeroiset toistoluvut", detail: "11 on pienin kaksinumeroinen luku, joka koostuu yhdestä toistuvasta numerosta — kuvio, joka näkyy suoraan sen kertotaulussa." },
      ],
      12: [
        { context: "Vuoden kuukaudet", detail: "Kalenterivuosi jakautuu 12 kuukauteen." },
        { context: "Tuumat jalassa (foot)", detail: "Brittiläisessä mittajärjestelmässä 1 jalka vastaa 12 tuumaa." },
        { context: "Kellotaulun numerot", detail: "Tavallinen analoginen kellotaulu on jaettu 12 numeroon." },
        { context: "Tusina", detail: "Munia ja leivonnaisia myydään usein tusinoittain — 12 kappaleen erissä." },
        { context: "Eläinradan merkit", detail: "Länsimainen eläinrata jaetaan perinteisesti 12 merkkiin." },
      ],
      13: [
        { context: "13 alkuperäistä amerikkalaista siirtokuntaa", detail: "Yhdysvallat alkoi 13 brittiläisenä siirtokuntana Atlantin rannikolla, ennen kuin ne julistautuivat itsenäisiksi." },
        { context: "Kortit kussakin maassa", detail: "Tavallisessa 52 kortin pakassa on 13 korttia kussakin neljästä maasta." },
        { context: "Leipurin tusina", detail: "Perinteisesti 'leipurin tusina' tarkoittaa 13 kappaletta 12:n sijaan." },
        { context: "Triskaidekafobia", detail: "13 on länsimaisessa kulttuurissa epäonneen eniten yhdistetty luku — sen pelolla on jopa oma nimi." },
      ],
      14: [
        { context: "Neljätoista päivää, kaksi viikkoa", detail: "Englannin sana 'fortnight' tarkoittaa 14 päivän jaksoa." },
        { context: "Ystävänpäivä", detail: "Ystävänpäivä on joka vuosi 14. helmikuuta." },
        { context: "Sonetin säkeet", detail: "Perinteisessä sonetissa, kuten Shakespearen kirjoittamissa, on täsmälleen 14 säettä." },
      ],
      15: [
        { context: "Varttitunti", detail: "15 minuuttia on varttitunti — yksi tämän luvun yleisimmistä arkikäytöistä." },
        { context: "Rugby unionin joukkueen koko", detail: "Rugby unionin joukkue asettaa kentälle 15 pelaajaa, toisin kuin rugby leaguen 13." },
      ],
      16: [
        { context: "Unsseja paunassa", detail: "Yhdysvaltain mittajärjestelmässä 1 pauna vastaa 16 unssia." },
        { context: "Heksadesimaalijärjestelmä tietotekniikassa", detail: "Tietojenkäsittelijät käyttävät kantalukua 16 (heksadesimaali) kompaktina tapana esittää binääridataa." },
        { context: "Sotilaat shakkilaudalla", detail: "Shakkipeli sisältää yhteensä 16 sotilasta — 8 kummallekin pelaajalle." },
        { context: "'Makea kuusitoista'", detail: "16-vuotispäivää pidetään useissa kulttuureissa merkittävänä virstanpylväänä." },
      ],
      17: [
        { context: "Luku, joka 'tuntuu' satunnaisimmalta", detail: "Epävirallisissa kyselyissä, joissa ihmisiä pyydetään valitsemaan 'satunnainen' luku pienestä välistä, he valitsevat 17:n useammin kuin puhdas sattuma ennustaisi — ihmispsykologian, ei todellisen satunnaisuuden, kummallisuus." },
      ],
      18: [
        { context: "Täysi-ikäisyys Suomessa", detail: "Suomessa, kuten monissa muissakin maissa, täysi-ikäisyys saavutetaan 18-vuotiaana." },
        { context: "Reiät golfkentällä", detail: "Tavallisessa golfkentässä on 18 reikää." },
      ],
      19: [
        { context: "Teini-ikävuosien loppu", detail: "Englannissa '-teen'-päätteiset luvut ulottuvat 13:sta 19:ään — 19 on viimeinen ennen 20-vuotispäivää." },
      ],
      20: [
        { context: "20/20-näöntarkkuus", detail: "'20/20 vision' on englanninkielinen vakiotermi normaalille näöntarkkuudelle, mitattuna 20 jalan etäisyydeltä." },
        { context: "Sormet ja varpaat yhteensä", detail: "Useimmilla ihmisillä on 10 sormea ja 10 varvasta, yhteensä 20." },
      ],
      21: [
        { context: "Blackjack", detail: "Korttipeli blackjackissä 21 on tavoitepistemäärä, johon pelaajat pyrkivät ylittämättä sitä." },
        { context: "Laillinen alkoholin juomisikä Yhdysvalloissa", detail: "Yhdysvalloissa laillinen vähimmäisikä alkoholin ostamiseen on 21 vuotta, yhtenäistetty koko maassa vuoden 1984 liittovaltion lailla." },
      ],
      22: [
        { context: "Pelaajat jalkapallokentällä", detail: "Täydessä jalkapallo-ottelussa kentällä on 22 pelaajaa — 11 kummastakin joukkueesta." },
        { context: "Kutsumanimi 22", detail: "Joseph Hellerin romaanin nimi 'Catch-22' on muuttunut englannissa yleiseksi ilmaisuksi umpikujatilanteesta." },
      ],
      23: [
        { context: "Ihmisen kromosomiparit", detail: "Tyypillinen ihmissolu sisältää 23 kromosomiparia — yhteensä 46 kromosomia." },
      ],
      24: [
        { context: "24 tuntia vuorokaudessa", detail: "Täysi vuorokausi jakautuu 24 tuntiin." },
        { context: "24 karaatin puhdas kulta", detail: "24 karaatin kultaa pidetään puhtaana kultana, korkeimpana korukäytössä käytettynä pitoisuutena." },
        { context: "Elokuvan kuvataajuus", detail: "24 kuvaa sekunnissa on ollut elokuvan standardi äänielokuvan aikakaudesta lähtien." },
      ],
      25: [
        { context: "Neljäsosa sadasta", detail: "25 on täsmälleen neljäsosa sadasta — siksi tämän luvun ja prosenttien yhteys on niin vahva." },
        { context: "Hopeahäät", detail: "25-vuotishäitä kutsutaan perinteisesti 'hopeahäiksi'." },
      ],
      26: [
        { context: "Kirjaimet englannin aakkosissa", detail: "Englannin aakkosissa on 26 kirjainta, A:sta Ö:hön asti englanninkielisessä versiossa." },
        { context: "Maratonin pituus", detail: "Maraton on täsmälleen 42,195 km, mikä vastaa noin 26,2 mailia." },
        { context: "Luut ihmisen jalkaterässä", detail: "Vakioanatomian mukaan jokaisessa ihmisen jalkaterässä on 26 luuta." },
      ],
      27: [
        { context: "'27:n klubi'", detail: "Useat vaikutusvaltaiset muusikot — muun muassa Jimi Hendrix, Janis Joplin ja Kurt Cobain — kuolivat 27-vuotiaina, kuvio, jonka populaarikulttuuri nimesi '27:n klubiksi'." },
      ],
      28: [
        { context: "Helmikuun päivät", detail: "Helmikuussa on 28 päivää joka vuonna, joka ei ole karkausvuosi." },
        { context: "Kuun kiertokulku", detail: "Kuun vaiheiden kiertokulkua kuvataan usein karkeasti noin 28 päivän mittaiseksi, vaikka tarkka synodinen kuukausi on lähempänä 29,5 päivää." },
      ],
      29: [
        { context: "Helmikuu karkausvuonna", detail: "Karkausvuonna helmikuussa on 29 päivää tavallisen 28:n sijaan." },
      ],
      30: [
        { context: "30-päiväiset kuukaudet", detail: "Huhtikuussa, kesäkuussa, syyskuussa ja marraskuussa on kussakin 30 päivää, kuten tunnettu kuukausiloru muistuttaa." },
      ],
      31: [
        { context: "31-päiväiset kuukaudet", detail: "Tammikuussa, maaliskuussa, toukokuussa, heinäkuussa, elokuussa, lokakuussa ja joulukuussa on kussakin 31 päivää — seitsemän kuukautta yhteensä." },
      ],
      32: [
        { context: "Veden jäätymispiste", detail: "Vesi jäätyy 32°F:ssa Fahrenheit-asteikolla." },
        { context: "Täysi aikuisen hammasrivistö", detail: "Täysi aikuisen ihmisen hammasrivistö, viisaudenhampaat mukaan lukien, sisältää yhteensä 32 hammasta." },
        { context: "NFL-joukkueiden määrä", detail: "Yhdysvaltain jalkapalloliiga NFL koostuu 32 joukkueesta." },
      ],
      33: [
        { context: "Nikamat ihmisen selkärangassa", detail: "Ihmisen selkärangan sanotaan usein sisältävän 33 nikamaa, vaikka useat niistä sulautuvat aikuisiässä ristiluuksi ja häntäluuksi." },
        { context: "Jeesuksen ikä ristiinnaulitsemisessa", detail: "Laajimman kristillisen perinteen mukaan Jeesus oli 33-vuotias ristiinnaulitsemishetkellä." },
      ],
      35: [
        { context: "35mm-elokuvaformaatti", detail: "35mm on pitkään ollut vakioformaatti sekä valokuvauksessa että elokuvassa." },
      ],
      36: [
        { context: "Tuumat jaardissa", detail: "Yhdysvaltain mittajärjestelmässä 1 jaardi vastaa 36 tuumaa." },
      ],
      38: [
        { context: "38. leveyspiiri", detail: "Tämä leveyspiiri on historiallisesti yhdistetty Pohjois- ja Etelä-Korean väliseen rajaan." },
      ],
      39: [
        { context: "39 askelta", detail: "'The 39 Steps' on Alfred Hitchcockin ohjaama klassikkojännäri vuodelta 1935, joka perustuu samannimiseen vuoden 1915 romaaniin." },
      ],
      40: [
        { context: "'Neljäkymmentä päivää ja neljäkymmentä yötä'", detail: "Luku 40 esiintyy Raamatussa toistuvasti, muun muassa vedenpaisumuskertomuksessa 1. Mooseksen kirjassa." },
        { context: "Tavallinen työviikko", detail: "40 tunnin työviikko on yleinen standardi monissa maissa." },
        { context: "Sanan 'karanteeni' alkuperä", detail: "'Karanteeni' tulee italian sanoista 'quaranta giorni' ('neljäkymmentä päivää') — historiallisesta eristysajasta, joka laivoilta vaadittiin ruttoepidemioiden aikana." },
      ],
      42: [
        { context: "'Vastaus elämään, maailmankaikkeuteen ja kaikkeen'", detail: "Douglas Adamsin romaanissa Linnunradan käsikirja liftareille jättiläismäinen supertietokone laskee, että vastaus perimmäiseen kysymykseen on 42." },
        { context: "Silmälukujen määrä nopparissa", detail: "Tavallisessa nopassa on yhteensä 21 silmälukua (1+2+3+4+5+6), joten nopparissa niitä on yhteensä 42." },
      ],
      44: [
        { context: "Yhdysvaltain 44. presidentti", detail: "Barack Obama toimi Yhdysvaltain 44. presidenttinä." },
      ],
      45: [
        { context: "45 RPM -äänilevyt", detail: "Vinyylisinglet painettiin perinteisesti pyörimään 45 kierrosta minuutissa." },
      ],
      46: [
        { context: "Kromosomit ihmisen solussa", detail: "Tyypillinen ihmissolu sisältää 46 kromosomia, järjestäytyneenä 23 pariksi." },
      ],
      48: [
        { context: "48 tuntia", detail: "48 tuntia vastaa täsmälleen kahta täyttä vuorokautta." },
        { context: "Yhdysvaltain yhtenäiset osavaltiot", detail: "Yhdysvaltain 48 yhtenäistä osavaltiota jättävät ulkopuolelle vain maantieteellisesti erillään olevat Alaskan ja Havaijin." },
      ],
      50: [
        { context: "Yhdysvaltain osavaltioiden määrä", detail: "Yhdysvallat koostuu 50 osavaltiosta." },
        { context: "Kultahäät", detail: "50-vuotishäitä kutsutaan perinteisesti 'kultahäiksi'." },
      ],
      51: [
        { context: "Alue 51", detail: "Alue 51 on kuuluisa, pitkään salainen Yhdysvaltain ilmavoimien tukikohta Nevadassa, johon viitataan usein populaarikulttuurissa." },
      ],
      52: [
        { context: "Viikot vuodessa", detail: "Tavallisessa vuodessa on 52 viikkoa." },
        { context: "Kortit korttipakassa", detail: "Tavallisessa korttipakassa on 52 korttia, jokerit pois lukien." },
      ],
      54: [
        { context: "Ruudut Rubikin kuutiossa", detail: "Klassisessa 3×3 Rubikin kuutiossa on 9 värillistä ruutua kutakin sivua kohti, mikä tekee 6 sivulla yhteensä 54 ruutua." },
      ],
      55: [
        { context: "Entinen Yhdysvaltain nopeusrajoitus", detail: "Vuosina 1974–1995 55 mailia tunnissa oli Yhdysvaltain moottoriteiden liittovaltion lailla säädetty enimmäisnopeus." },
      ],
      57: [
        { context: "Heinzin '57 lajitelmaa' -iskulause", detail: "H.J. Heinz -yhtiö on käyttänyt iskulausetta '57 lajitelmaa' vuodesta 1896, kauan sen jälkeen kun tuotteita on ollut jo yli 57." },
      ],
      59: [
        { context: "Sekunti ennen täyttä minuuttia", detail: "Minuutissa on 60 sekuntia, joten 59 on viimeinen sekunti ennen uuden minuutin alkua." },
      ],
      60: [
        { context: "Sekunnit minuutissa", detail: "Minuutissa on 60 sekuntia." },
        { context: "Minuutit tunnissa", detail: "Tunnissa on 60 minuuttia." },
      ],
      64: [
        { context: "Ruudut shakkilaudalla", detail: "Tavallinen shakkilauta on 8×8-ruudukko ja sisältää täsmälleen 64 ruutua." },
        { context: "Klassinen Crayola-rasia", detail: "Ikoninen Crayolan 'Big Box' on pitkään sisältänyt 64 väriliidun väriä." },
        { context: "Nintendo 64", detail: "Nintendo 64 oli 1990-luvun merkkipaaluna pidetty pelikonsoli, nimetty 64-bittisen prosessorinsa mukaan." },
      ],
      65: [
        { context: "Perinteinen eläkeikä", detail: "65 vuotta on pitkään ollut monissa maissa vakioeläkeikä." },
        { context: "Yleinen moottoritien nopeusrajoitus", detail: "65 mailia tunnissa on yleinen nopeusrajoitus moottoriteillä monissa Yhdysvaltain osavaltioissa." },
      ],
      66: [
        { context: "Route 66", detail: "Route 66 oli yksi Yhdysvaltain alkuperäisistä valtateistä Chicagosta Santa Monicaan, ja siitä tuli amerikkalaisen tienpäällä matkustamisen kulttuurisymboli." },
      ],
      70: [
        { context: "'Seitsemänkymmentä vuotta' — perinteinen raamatullinen elinikä", detail: "Tämä perinteinen ilmaisu 70 vuoden elinikää kuvaamaan tulee Raamatusta (psalmi 90:10)." },
      ],
      72: [
        { context: "'72:n sääntö'", detail: "Rahoituksessa luvun 72 jakaminen korkokannalla antaa karkean arvion siitä, kuinka monta vuotta sijoitus tarvitsee kaksinkertaistuakseen." },
        { context: "72 tuntia", detail: "72 tuntia vastaa täsmälleen kolmea täyttä vuorokautta." },
      ],
      75: [
        { context: "Timanttihäät", detail: "Joissakin perinteissä 75-vuotishäitä kutsutaan 'timanttihäiksi', vaikka termi liitetään useammin 60 vuoteen, kuten kuningatar Elisabet II:n timanttijuhlavuoteen 2012." },
      ],
      76: [
        { context: "'76 pasuunaa'", detail: "'Seventy-Six Trombones' on kuuluisa soittokuntalaulu vuoden 1957 musikaalista The Music Man." },
      ],
      78: [
        { context: "78 RPM -äänilevyt", detail: "78 kierrosta minuutissa oli grammofonilevyjen ensimmäinen vakiotoistonopeus, ennen kuin 33⅓- ja 45-formaatit yleistyivät." },
      ],
      80: [
        { context: "Maailman ympäri 80 päivässä", detail: "Jules Vernen vuoden 1873 klassikkoromaani kertoo kilpajuoksusta kiertää maapallo 80 päivässä." },
      ],
      86: [
        { context: "Ravintolaslangin '86'", detail: "Baari- ja ravintolaslangissa jonkin annoksen '86:aaminen' tarkoittaa sen poistamista menusta; se voi tarkoittaa myös häiritsevän asiakkaan poistamista." },
      ],
      88: [
        { context: "Koskettimet pianossa", detail: "Tavallisessa nykyaikaisessa pianossa on 88 kosketinta." },
        { context: "Virallisesti tunnustetut tähtikuviot", detail: "Kansainvälinen tähtitieteellinen unioni tunnustaa virallisesti 88 tähtikuviota." },
      ],
      90: [
        { context: "Jalkapallo-ottelun kesto", detail: "Virallinen jalkapallo-ottelu kestää 90 minuuttia, jaettuna kahteen 45 minuutin puoliaikaan." },
        { context: "Suora kulma", detail: "Suora kulma on täsmälleen 90 astetta." },
      ],
      92: [
        { context: "Uraanin järjestysluku", detail: "Uraania, jonka järjestysluku on 92, pidetään perinteisesti jaksollisen järjestelmän raskaimpana luonnossa esiintyvänä alkuaineena." },
      ],
      95: [
        { context: "Windows 95", detail: "Windows 95 oli merkittävä Microsoftin käyttöjärjestelmä, joka julkaistiin vuonna 1995 ja auttoi tekemään henkilökohtaisista tietokoneista suositun." },
      ],
      99: [
        { context: "Hinnoittelun psykologia '.99'", detail: "Kauppiaat merkitsevät hinnat usein päättymään ,99:ään (kuten 19,99), koska ne koetaan huomattavasti seuraavaa pyöreää lukua alhaisemmiksi." },
      ],
      100: [
        { context: "Vuosisata", detail: "100 vuoden ajanjaksoa kutsutaan vuosisadaksi." },
        { context: "100 % 'kokonaisuutena'", detail: "Prosentit rakentuvat luvun 100 ympärille täydellisen kokonaisuuden vertailukohtana." },
        { context: "Yhdysvaltain senaatti", detail: "Yhdysvaltain senaatissa on 100 jäsentä — kaksi kustakin 50 osavaltiosta." },
        { context: "Veden kiehumispiste", detail: "Vakioilmanpaineessa vesi kiehuu 100°C:ssa Celsius-asteikolla." },
      ],
    }

const funFacts: { [key: number]: FunFactItem[] } = {
      1: [
        { fact: "Luku 1 ei ole alkuluku eikä yhdistetty luku — alkuluvulla täytyy määritelmän mukaan olla täsmälleen kaksi eri positiivista tekijää, ja 1:llä on vain yksi (itsensä)." },
        { fact: "Minkä tahansa luvun kertomista 1:llä kutsutaan kertolaskun neutraalialkio-ominaisuudeksi, yhdeksi ensimmäisistä muodollisista säännöistä, jotka opitaan aritmetiikassa." },
        { fact: "Roomalaisin numeroin 1 kirjoitetaan yhdellä viivalla: I — koko numerojärjestelmän yksinkertaisin symboli." },
      ],
      2: [
        { fact: "2 on ainoa parillinen alkuluku — kaikki muut parilliset luvut ovat jaollisia 2:lla, mikä tekee niistä yhdistettyjä lukuja." },
        { fact: "Koska 2 on pienin alkuluku, se on lähtökohta koko alkutekijähajotelman käsitteelle." },
        { fact: "Kaksinkertaistaminen on yksi nopeimmista päässälaskutempuista — toistuva kaksinkertaistaminen esiintyy myös tietotekniikassa kakkosen potensseina: 2, 4, 8, 16, 32..." },
      ],
      3: [
        { fact: "Numeroiden summan temppu toimii 3:lla siksi, että 10 jättää jakojäännöksen 1, kun sen jakaa 3:lla — sama syy, miksi temppu toimii myös 9:llä." },
        { fact: "3 on pienin pariton alkuluku." },
        { fact: "Kolmio on ainoa luonnostaan jäykkä monikulmio, minkä vuoksi kolmisivuisia muotoja käytetään niin paljon silloissa ja rakennusten rungoissa." },
      ],
      4: [
        { fact: "4 on pienin yhdistetty luku — ensimmäinen 1:tä suurempi luku, joka ei ole alkuluku, koska se on jaollinen tasan 2:lla." },
        { fact: "4 on neliöluku: 4 = 2 × 2, eli 2²." },
        { fact: "Koska 4 = 2 × 2, nelostaulun saa aina kaksinkertaistamalla kakkostaulun — jos osaa jo kakkostaulun, mitään uutta ei tarvitse opetella." },
      ],
      5: [
        { fact: "5 on täsmälleen puolivälissä lukujen 0 ja 10 välillä, minkä vuoksi 5-taulu on aina puolet vastaavasta 10-taulusta." },
        { fact: "5 on alkuluku, ja se on ainoa alkuluku, joka päättyy numeroon 5." },
        { fact: "Kellot on jaettu 5 minuutin väleihin, joten 5:llä kertominen on sisäänrakennettu tapaan, jolla useimmat ihmiset lukevat kelloa edes ajattelematta sitä." },
      ],
      6: [
        { fact: "6 on pienin täydellinen luku — sen omien tekijöiden (1, 2 ja 3) summa on täsmälleen sama kuin luku itse: 1+2+3=6." },
        { fact: "6 = 2 × 3, mikä tekee siitä pienimmän luvun, joka on kahden eri alkuluvun tulo." },
        { fact: "Koska 6 on parillinen ja jaollinen 3:lla, jokainen 6:n kerrannainen on automaattisesti jaollinen sekä 2:lla että 3:lla." },
      ],
      7: [
        { fact: "Seitsemän on Mersennen alkuluku — se on yhtä suuri kuin 2³ − 1 (2 × 2 × 2, miinus 1), mikä tekee siitä osan harvinaista alkulukuperhettä, joka liittyy kakkosen potensseihin." },
        { fact: "7 päivän viikko juontaa juurensa muinaiseen Babylonian tähtitieteeseen, joka seurasi täsmälleen 7:ää paljaalla silmällä näkyvää taivaankappaletta: Aurinkoa, Kuuta ja viittä planeettaa — Merkuriusta, Venusta, Marsia, Jupiteria ja Saturnusta." },
        { fact: "Seitsemää pidetään monissa kulttuureissa onnennumerona, minkä vuoksi se esiintyy niin usein peleissä ja uhkapelaamiseen liittyvissä perinteissä ympäri maailmaa." },
        { fact: "James Bondin tunnettu koodinumero on 007, ja Lumikki asuu täsmälleen seitsemän kääpiön kanssa." },
      ],
      8: [
        { fact: "8 = 2³, mikä tekee siitä ensimmäisen 1:tä suuremman kuutioluvun (2 × 2 × 2 = 8)." },
        { fact: "Sana 'mustekala' (octopus) ja musiikin termi 'oktaavi' juontuvat molemmat samasta kreikkalaisesta kahdeksaa tarkoittavasta sanasta." },
        { fact: "8 on ainoa luku 1:n ja 12:n välillä, joka vaatii kolme peräkkäistä kaksinkertaistamista 2:sta lähtien (2 → 4 → 8)." },
      ],
      9: [
        { fact: "9 on neliöluku: 9 = 3 × 3, eli 3²." },
        { fact: "Riippumatta siitä, kuinka suuri 9:n kerrannainen on, sen numeroiden toistuva yhteenlasku päätyy aina lopulta 9:ään — matemaatikot kutsuvat tätä ominaisuutta 'numerojuureksi'." },
        { fact: "9 on suurin yksinumeroinen luku, aivan ennen kuin paikkajärjestelmä alkaa 10:stä." },
      ],
      10: [
        { fact: "Sana 'kymmenottelu' juontaa kreikkalaisista sanoista, jotka tarkoittavat 'kymmentä kilpailua'." },
        { fact: "10:llä kertominen on ainoa yksinumeroinen kertotaulu, jossa jokainen tulos noudattaa yhtä poikkeuksetonta sääntöä: lisää nolla loppuun." },
        { fact: "Koska useimmilla ihmisillä on 10 sormea, kymmenjärjestelmän (desimaalijärjestelmän) uskotaan olevan yksi ihmiskunnan historian yleisimmistä lukujärjestelmistä." },
      ],
      11: [
        { fact: "11 on alkuluku — sen ainoat tekijät ovat 1 ja se itse." },
        { fact: "11 on pienin kaksinumeroinen alkuluku." },
        { fact: "Peilikuvio (11×4=44, 11×7=77) toimii vain yksinumeroisilla kertojilla — yksi selkeimmistä esimerkeistä kertotauluissa kuviosta, jolla on sisäänrakennettu raja." },
      ],
      12: [
        { fact: "12 on erittäin yhdistetty luku — sillä on enemmän tekijöitä (1, 2, 3, 4, 6, 12) kuin yhdelläkään sitä pienemmällä positiivisella luvulla." },
        { fact: "Sana 'tusina' tulee vanhasta ranskan sanasta 'douzaine', joka tarkoittaa kahdentoista ryhmää." },
        { fact: "144 esineen ryhmää — 12 tusinaa — kutsutaan perinteisesti 'grossiksi'." },
      ],
      13: [
        { fact: "13 on alkuluku — sen ainoat tekijät ovat 1 ja se itse." },
        { fact: "Luvun 13 pelolla on virallinen nimi: triskaidekafobia." },
        { fact: "Monet rakennukset jättävät 13. kerroksen numeroinnista pois tähän lukuun liittyvän taikauskon vuoksi." },
      ],
      14: [
        { fact: "14 = 2 × 7, joten jokainen 14-taulun tulos on täsmälleen kaksinkertainen vastaavaan 7-taulun tulokseen nähden." },
        { fact: "Englannin sana 'fortnight' on lyhentymä sanoista 'fourteen nights' (neljätoista yötä), vanhasta kahden viikon ilmauksesta." },
      ],
      15: [
        { fact: "15 on kolmioluku — se on viiden ensimmäisen luonnollisen luvun summa: 1+2+3+4+5=15." },
        { fact: "15 = 3 × 5, joten se on kahden pienimmän parittoman alkuluvun tulo." },
      ],
      16: [
        { fact: "16 = 2⁴, joten se on ensimmäinen 1:tä suurempi neljäs potenssi." },
        { fact: "16 on myös neliöluku: 16 = 4 × 4." },
        { fact: "Tietokoneet käyttävät paljon kantalukua 16 (heksadesimaali), koska jokainen heksadesimaalinumero vastaa täsmälleen 4 binääribittiä." },
      ],
      17: [
        { fact: "17 on alkuluku, eikä ole olemassa pienempää taulua, jonka kaksin- tai kolminkertaistamalla siihen pääsisi." },
        { fact: "Epävirallisissa psykologisissa kyselyissä, kun ihmisiä pyydetään sanomaan 'satunnainen' luku 1:n ja 20:n väliltä, he valitsevat 17:n suhteettoman usein — kuriositeetti ihmisten lukumieltymyksistä, ei todellisesta satunnaisuudesta." },
      ],
      18: [
        { fact: "18 = 2 × 9 = 3 × 6, joten siihen pääsee useammalla kuin yhdellä tavalla kaksin- tai kolminkertaistamalla pienemmän taulun." },
        { fact: "Koska 18 on 9:n kerrannainen, kaikki sen kerrannaiset noudattavat myös 9:n numeroiden summasääntöä." },
      ],
      19: [
        { fact: "19 on alkuluku ja viimeinen englannin '-teen'-luvuista (13:sta 19:ään)." },
        { fact: "19 = 20 − 1, joten 19:llä kertominen on usein helpompaa kertomalla ensin 20:llä ja vähentämällä sitten alkuperäinen luku." },
      ],
      20: [
        { fact: "Vanha englannin sana 'score' tarkoittaa 20:tä, kuten Lincolnin kuuluisassa lausahduksessa 'four score and seven years ago' (4×20+7=87)." },
        { fact: "20 = 4 × 5 = 2 × 10, joten tämän taulun rakentamiseen on useita tekijäpareja." },
      ],
      21: [
        { fact: "21 = 3 × 7, kahden pienemmän taulun tulo, jotka oppilaat todennäköisesti jo osaavat." },
        { fact: "Blackjackissä 21 on täsmälleen tavoitepistemäärä — sen ylittäminen tarkoittaa automaattista häviötä." },
      ],
      22: [
        { fact: "22 = 2 × 11, joten sen taulu on yksinkertaisesti 11-taulun kaksinkertainen." },
        { fact: "Joseph Hellerin romaanin 'Catch-22' nimestä on tullut englannissa itsenäinen ilmaus umpikujatilanteelle." },
      ],
      23: [
        { fact: "23 on alkuluku — sen ainoat tekijät ovat 1 ja se itse." },
        { fact: "Ihmissolut sisältävät 23 kromosomiparia, yksi matematiikan ulkopuolella eniten siteeratuista faktoista luvusta 23." },
      ],
      24: [
        { fact: "24 on erittäin yhdistetty luku — sen tekijät (1, 2, 3, 4, 6, 8, 12, 24) ovat lukumäärältään enemmän kuin millään pienemmällä positiivisella luvulla." },
        { fact: "24 = 2³ × 3, yhdistää kakkosen potenssin kolmosen tekijään." },
      ],
      25: [
        { fact: "25 on neliöluku: 25 = 5 × 5." },
        { fact: "Koska 25 on täsmälleen neljäsosa sadasta, 25:llä kertominen on usein nopeampaa laskettuna ×100 ja sitten ÷4." },
      ],
      26: [
        { fact: "26 = 2 × 13, joten sen taulu on yksinkertaisesti 13-taulun kaksinkertainen." },
        { fact: "Aakkosten 26 kirjainta tekevät 26:sta yhden arjen kirjoitetun kielen useimmin esiintyvistä luvuista." },
      ],
      27: [
        { fact: "27 on kuutioluku: 27 = 3 × 3 × 3, eli 3³." },
        { fact: "'27:n klubi' on populaarikulttuurin termi kuuluisille muusikoille, jotka kuolivat tuossa iässä — tutkijat eivät kuitenkaan ole löytäneet tilastollista näyttöä epätavallisesta kuolinriskistä juuri 27-vuotiaana." },
      ],
      28: [
        { fact: "28 on täydellinen luku — sen omien tekijöiden (1, 2, 4, 7, 14) summa on täsmälleen 28; se on toinen täydellinen luku 6:n jälkeen." },
        { fact: "28 = 4 × 7, mikä yhdistää sen suoraan kahteen pienempään tauluun." },
      ],
      29: [
        { fact: "29 on alkuluku — sen ainoat tekijät ovat 1 ja se itse." },
        { fact: "29 esiintyy kalenterissa päivämääränä vain karkausvuosina, jolloin helmikuu saa ylimääräisen päivän." },
      ],
      30: [
        { fact: "30 = 2 × 3 × 5, kolmen pienimmän alkuluvun tulo." },
        { fact: "30:llä on kokoonsa nähden poikkeuksellisen paljon pieniä tekijöitä, mikä on yksi syy siihen, miksi se jakautuu niin usein tasan arkisissa mittauksissa." },
      ],
      31: [
        { fact: "31 on alkuluku — sen ainoat tekijät ovat 1 ja se itse." },
        { fact: "31 = 2⁵ − 1, joten se on Mersennen alkuluku; samaan perheeseen kuuluvat myös 3, 7 ja 127." },
      ],
      32: [
        { fact: "32 = 2⁵, kakkosen viides potenssi." },
        { fact: "32 on täsmälleen 16:n kaksinkertainen, joka puolestaan on 8:n kaksinkertainen — osa katkeamatonta kaksinkertaistamisketjua aina 1:een asti." },
      ],
      33: [
        { fact: "33 = 3 × 11, joten sen taulu on suoraan 11-taulun peilikuvion kolminkertainen." },
      ],
      34: [
        { fact: "34 on Fibonaccin luku — se on kahden edellisen Fibonaccin luvun summa, 13 ja 21." },
        { fact: "4×4-taikaneliössä jokainen rivi, sarake ja lävistäjä summautuu lukuun 34 — pienin mahdollinen taikavakio 4×4-ruudukolle." },
      ],
      35: [
        { fact: "35 = 5 × 7, kahden pienemmän taulun tulo, jotka oppilaat jo osaavat." },
      ],
      36: [
        { fact: "36 on sekä neliöluku (6×6) että kolmioluku (1+2+...+8) — yhdistelmä, joka on vain hyvin harvalla luvulla." },
      ],
      37: [
        { fact: "37 on alkuluku — sen ainoat tekijät ovat 1 ja se itse." },
        { fact: "37 × 3 = 111, minkä vuoksi 37 jakaa tasan jokaisen kolminumeroisen toistoluvun (111, 222, 333... aina 999:ään asti)." },
      ],
      38: [
        { fact: "38 = 2 × 19, joten sen taulu on yksinkertaisesti 19-taulun kaksinkertainen." },
      ],
      39: [
        { fact: "39 = 3 × 13, kahden pienemmän taulun tulo, jotka oppilaat todennäköisesti jo osaavat." },
      ],
      40: [
        { fact: "40 = 2³ × 5, yhdistää kakkosen potenssin viitosen tekijään." },
      ],
      41: [
        { fact: "41 on alkuluku — sen ainoat tekijät ovat 1 ja se itse." },
        { fact: "41 ja 43 ovat kaksosalkulukuja — niiden erotus on täsmälleen 2." },
      ],
      42: [
        { fact: "42 = 2 × 3 × 7, yhdistää kolme pienintä vakiokertotauluissa käytettyä alkulukua." },
      ],
      43: [
        { fact: "43 on alkuluku — sen ainoat tekijät ovat 1 ja se itse." },
        { fact: "43 muodostaa, kuten 41, kaksosalkulukuparin suuremman arvon, jonka erottaa täsmälleen yksi parillinen luku, 42." },
      ],
      44: [
        { fact: "44 = 4 × 11, joten sen taulu on suoraan 11-taulun nelinkertainen." },
      ],
      45: [
        { fact: "45° on täsmälleen puolet suorasta kulmasta (90°), minkä vuoksi 45 asteen kulmat esiintyvät jatkuvasti geometriassa ja muotoilussa." },
        { fact: "45 on sekä kolmioluku (1+2+...+9) että kahden pienemmän taulun, 9:n ja 5:n, tulo." },
      ],
      46: [
        { fact: "46 = 2 × 23, joten sen taulu on yksinkertaisesti 23-taulun kaksinkertainen." },
      ],
      47: [
        { fact: "47 on alkuluku — sen ainoat tekijät ovat 1 ja se itse." },
        { fact: "47 on kuuluisa sisäpiirivitsi Star Trekin faneille ja käsikirjoittajille, jotka ilmeisesti sijoittivat sen tarkoituksella monien jaksojen taustalle." },
      ],
      48: [
        { fact: "48 on kokoonsa nähden erittäin yhdistetty luku — sen tekijät (1, 2, 3, 4, 6, 8, 12, 16, 24, 48) ovat lukumäärältään enemmän kuin millään pienemmällä positiivisella luvulla." },
      ],
      49: [
        { fact: "49 on neliöluku: 49 = 7 × 7." },
        { fact: "7×7=49 on yksi koko vakiokertotaulun useimmin ulkoa opituista yksittäisistä faktoista." },
      ],
      50: [
        { fact: "50 = 2 × 5², yhdistää yhden kakkosen tekijän viitosen neliöön." },
      ],
      51: [
        { fact: "51 = 3 × 17, kahden pienen alkuluvun tulo." },
      ],
      52: [
        { fact: "52 = 4 × 13, joten sen taulu on suoraan 13-taulun nelinkertainen." },
      ],
      53: [
        { fact: "53 on alkuluku — sen ainoat tekijät ovat 1 ja se itse." },
      ],
      54: [
        { fact: "54 = 2 × 3³, yhdistää yhden kakkosen tekijän kolmosen kuutioon." },
      ],
      55: [
        { fact: "55 on sekä kolmioluku (1+2+...+10) että Fibonaccin luku — yhdistelmä, joka on vain hyvin harvalla luvulla." },
      ],
      56: [
        { fact: "56 = 2³ × 7, yhdistää kakkosen potenssin seitsemän tekijään." },
        { fact: "7×8=56 on yksi koko vakiokertotaulun useimmin sekoitetuista yksittäisistä faktoista." },
      ],
      57: [
        { fact: "57 = 3 × 19, kahden pienen alkuluvun tulo." },
      ],
      58: [
        { fact: "58 = 2 × 29, joten sen taulu on yksinkertaisesti 29-taulun kaksinkertainen." },
      ],
      59: [
        { fact: "59 on alkuluku — sen ainoat tekijät ovat 1 ja se itse." },
      ],
      60: [
        { fact: "60 on erittäin yhdistetty luku — sen tekijät (1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60) ovat lukumäärältään enemmän kuin millään pienemmällä positiivisella luvulla." },
        { fact: "Muinaiset babylonialaiset käyttivät kantaluvun 60 (seksagesimaali) järjestelmää, minkä vuoksi aika ja kulmat jaetaan edelleen 60:n yksiköihin." },
      ],
      61: [
        { fact: "61 on alkuluku — sen ainoat tekijät ovat 1 ja se itse." },
      ],
      62: [
        { fact: "62 = 2 × 31, joten sen taulu on yksinkertaisesti 31-taulun kaksinkertainen." },
      ],
      63: [
        { fact: "63 = 3² × 7, yhdistää kolmosen neliön seitsemän tekijään." },
        { fact: "63 = 2⁶ − 1 (64 miinus 1), eli täsmälleen yhden verran seuraavan kakkosen potenssin alapuolella." },
      ],
      64: [
        { fact: "64 on sekä neliöluku (8²) että kuutioluku (4³) — yksi harvoista luvuista, joilla on molemmat ominaisuudet." },
      ],
      65: [
        { fact: "65 = 5 × 13, kahden pienemmän taulun tulo." },
      ],
      66: [
        { fact: "66 = 2 × 3 × 11, yhdistää kolme pienemmistä tauluista." },
      ],
      67: [
        { fact: "67 on alkuluku — sen ainoat tekijät ovat 1 ja se itse." },
      ],
      68: [
        { fact: "68 = 4 × 17, joten sen taulu on suoraan 17-taulun nelinkertainen." },
      ],
      69: [
        { fact: "69 = 3 × 23, kahden pienemmän taulun tulo." },
      ],
      70: [
        { fact: "70 = 2 × 5 × 7, yhdistää kolme pienintä vakiokertotauluissa käytettyä alkulukua." },
      ],
      71: [
        { fact: "71 on alkuluku — sen ainoat tekijät ovat 1 ja se itse." },
      ],
      72: [
        { fact: "72 = 2³ × 3², yhdistää kakkosen potenssin kolmosen neliöön." },
      ],
      73: [
        { fact: "73 on alkuluku — sen ainoat tekijät ovat 1 ja se itse. Se on myös 21. alkuluku 2:sta laskien." },
        { fact: "Binäärimuodossa 73 kirjoitetaan 1001001 — palindromi, joka lukee saman suuntaan molempiin suuntiin." },
      ],
      74: [
        { fact: "74 = 2 × 37, joten sen taulu on yksinkertaisesti 37-taulun kaksinkertainen." },
      ],
      75: [
        { fact: "75 = 3 × 5², yhdistää kolmosen tekijän viitosen neliöön." },
      ],
      76: [
        { fact: "76 = 4 × 19, joten sen taulu on suoraan 19-taulun nelinkertainen." },
      ],
      77: [
        { fact: "77 = 7 × 11, kahden pienemmän taulun tulo." },
        { fact: "77 on numeropalindromi — se lukee samalla tavalla eteen- ja taaksepäin." },
      ],
      78: [
        { fact: "78 = 2 × 3 × 13, yhdistää kolme pienemmistä tauluista." },
      ],
      79: [
        { fact: "79 on alkuluku — sen ainoat tekijät ovat 1 ja se itse." },
      ],
      80: [
        { fact: "80 = 2⁴ × 5, yhdistää kakkosen potenssin viitosen tekijään." },
        { fact: "80 % vastaa neljää viidesosaa (4/5) kokonaisuudesta." },
      ],
      81: [
        { fact: "81 on neliöluku (9×9) ja se on myös yhtä suuri kuin 3⁴ (3 potenssiin 4)." },
      ],
      82: [
        { fact: "82 = 2 × 41, joten sen taulu on yksinkertaisesti 41-taulun kaksinkertainen." },
      ],
      83: [
        { fact: "83 on alkuluku — sen ainoat tekijät ovat 1 ja se itse." },
      ],
      84: [
        { fact: "84 = 2² × 3 × 7, yhdistää kakkosen potenssin kolmosen ja seitsemän tekijöihin." },
      ],
      85: [
        { fact: "85 = 5 × 17, kahden pienemmän taulun tulo." },
      ],
      86: [
        { fact: "86 = 2 × 43, joten sen taulu on yksinkertaisesti 43-taulun kaksinkertainen." },
      ],
      87: [
        { fact: "87 = 3 × 29, kahden pienemmän taulun tulo." },
      ],
      88: [
        { fact: "88 = 8 × 11, kahden pienemmän taulun tulo." },
      ],
      89: [
        { fact: "89 on alkuluku — sen ainoat tekijät ovat 1 ja se itse." },
        { fact: "89 on myös Fibonaccin luku — se on kahden edellisen Fibonaccin luvun summa, 34 ja 55." },
      ],
      90: [
        { fact: "90 = 2 × 3² × 5, yhdistää kakkosen potenssin, kolmosen neliön ja viitosen tekijän." },
      ],
      91: [
        { fact: "91 = 7 × 13, minkä vuoksi se on matematiikan opetuksessa klassinen esimerkki luvusta, joka näyttää alkuluvulta muttei ole." },
      ],
      92: [
        { fact: "92 = 4 × 23, joten sen taulu on suoraan 23-taulun nelinkertainen." },
      ],
      93: [
        { fact: "93 = 3 × 31, kahden pienemmän taulun tulo." },
      ],
      94: [
        { fact: "94 = 2 × 47, joten sen taulu on yksinkertaisesti 47-taulun kaksinkertainen." },
      ],
      95: [
        { fact: "95 = 5 × 19, kahden pienemmän taulun tulo." },
      ],
      96: [
        { fact: "96 = 2⁵ × 3, yhdistää kakkosen potenssin yhteen kolmosen tekijään." },
      ],
      97: [
        { fact: "97 on alkuluku — sen ainoat tekijät ovat 1 ja se itse." },
        { fact: "97 on suurin alkuluku alle 100:n." },
      ],
      98: [
        { fact: "98 = 2 × 7², yhdistää yhden kakkosen tekijän seitsemän neliöön." },
      ],
      99: [
        { fact: "99 = 9 × 11, kahden pienemmän taulun tulo." },
        { fact: "Koska 99 on 9:n kerrannainen, minkä tahansa 99:n kerrannaisen numeroiden summa on aina 9:n kerrannainen." },
      ],
      100: [
        { fact: "100 = 10², eli 10:n neliö, ja se on myös yhtä suuri kuin 4 × 25." },
      ],
    }

export function getRealLifeExamples(n: number): RealLifeItem[] | null {
  return realLifeExamples[n] ?? null
}

export function getFunFacts(n: number): FunFactItem[] | null {
  return funFacts[n] ?? null
}
