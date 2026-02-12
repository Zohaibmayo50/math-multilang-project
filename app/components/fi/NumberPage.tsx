'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'
import PracticePreview from './PracticePreview'
import PrintableExercises from './PrintableExercises'
import NumberGames from './NumberGames'

interface NumberPageProps {
  number: number
  rangeStart: number
  rangeEnd: number
}

export default function NumberPage({ number, rangeStart, rangeEnd }: NumberPageProps) {
  const tableRef = useRef<HTMLDivElement>(null)
  
  const colors = [
    'from-blue-500 to-indigo-600',
    'from-purple-500 to-pink-600',
    'from-green-500 to-teal-600',
    'from-orange-500 to-red-600',
    'from-cyan-500 to-blue-600',
  ]
  
  const colorIndex = (number - 1) % colors.length

  // Print function
  const handlePrint = () => {
    if (tableRef.current) {
      const printWindow = window.open('', '', 'width=800,height=600')
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>Kertotaulu ${number}</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  padding: 20px;
                  max-width: 600px;
                  margin: 0 auto;
                }
                h1 {
                  text-align: center;
                  color: #1e40af;
                  margin-bottom: 30px;
                }
                .table-item {
                  display: flex;
                  justify-content: space-between;
                  padding: 12px 20px;
                  margin: 8px 0;
                  background: #f0f9ff;
                  border-radius: 8px;
                  font-size: 18px;
                }
                .equation {
                  font-weight: 500;
                }
                .result {
                  font-weight: bold;
                  color: #1e40af;
                }
                @media print {
                  body { padding: 10px; }
                  .table-item { page-break-inside: avoid; }
                }
              </style>
            </head>
            <body>
              <h1>Kertotaulu ${number}</h1>
              ${Array.from({ length: 10 }, (_, i) => `
                <div class="table-item">
                  <span class="equation">${number} × ${i + 1}</span>
                  <span class="result">= ${number * (i + 1)}</span>
                </div>
              `).join('')}
            </body>
          </html>
        `)
        printWindow.document.close()
        printWindow.focus()
        setTimeout(() => {
          printWindow.print()
          printWindow.close()
        }, 250)
      }
    }
  }

  // Download as image function
  const handleDownload = async () => {
    if (tableRef.current) {
      try {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        canvas.width = 600
        canvas.height = 700
        
        const gradient = ctx.createLinearGradient(0, 0, 600, 700)
        const gradients: { [key: number]: [string, string] } = {
          0: ['#3b82f6', '#4f46e5'],
          1: ['#a855f7', '#ec4899'],
          2: ['#10b981', '#14b8a6'],
          3: ['#f97316', '#ef4444'],
          4: ['#06b6d4', '#3b82f6']
        }
        const [color1, color2] = gradients[colorIndex]
        gradient.addColorStop(0, color1)
        gradient.addColorStop(1, color2)
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, 600, 700)

        ctx.fillStyle = '#ffffff'
        ctx.font = 'bold 36px Arial'
        ctx.textAlign = 'center'
        ctx.fillText(number + ' Kertotaulu', 300, 60)

        ctx.font = '24px Arial'
        let y = 120
        for (let i = 1; i <= 10; i++) {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'
          ctx.beginPath()
          ctx.roundRect(30, y - 30, 540, 50, 10)
          ctx.fill()

          ctx.fillStyle = '#ffffff'
          ctx.textAlign = 'left'
          ctx.font = '22px Arial'
          ctx.fillText(number + ' × ' + i, 50, y)
          
          ctx.textAlign = 'right'
          ctx.font = 'bold 26px Arial'
          ctx.fillText('= ' + (number * i), 550, y)
          
          y += 60
        }

        canvas.toBlob((blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = url
            link.download = number + '-kertotaulu.png'
            link.click()
            URL.revokeObjectURL(url)
          }
        })
      } catch (error) {
        console.error('Lataus epäonnistui:', error)
      }
    }
  }

  // Number-specific content
  const getNumberMeaning = () => {
    const meanings: { [key: number]: string} = {
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
    return meanings[number] || `Luvulla ${number} kertominen tarkoittaa luvun ${number} toistuvaa ottamista. Joka kerta kun kerrot, lasket ryhmiä ${number}:sta.`
  }

  const getWhyImportant = () => {
    const importance: { [key: number]: string } = {
      1: "Kertotaulu 1 on kaikkien kertolaskuoperaatioiden perusta. Se opettaa oppilaille, että luvuilla on identiteetti: 1:llä kerrottaessa ne pysyvät muuttumattomina. Tämä käsite on tärkeä myöhempien algebrallisten ominaisuuksien ymmärtämiseksi. Vaikka se vaikuttaa yksinkertaiselta, tämän taulun oppiminen luo luottamusta ja vakiinnuttaa mallin, että kertolasku on järjestetty ja ennustettava.",
      2: "Kertotaulu 2 on yleensä ensimmäinen todellinen kertotaulu, jonka oppilaat oppivat, ja tällä on hyvä syy. Kaksinkertaistaminen on luonnollinen käsite, jonka lapset kohtaavat päivittäin. Tämän taulun oppiminen tekee mielen aritmetiikasta paljon nopeampaa ja valmistaa oppilaita parillisiin lukuihin, murtolukuihin (puolikkaat) ja perusjakoon. Monet oppilaat pitävät sitä helpoimpana tauluna, mikä luo luottamusta monimutkaisempiin tauluihin.",
      3: "Kertotaulu 3 täyttää aukon yksinkertaisten ja monimutkaisten taulujen välillä. Se vaatii oppilaita menemään yksinkertaisen kaksinkertaistamisen yli ja tunnistamaan uusia kuvioita. Tämä taulu esiintyy jatkuvasti tosielämän yhteyksissä, kuten laskeminen kolmen ryhmissä, kolmiomuotojen ymmärtäminen ja ajan kanssa työskentely (kolme ajanjaksoa päivässä). Oppilaat, jotka oppivat 3-taulun, osoittavat hallitsevansa abstraktin laskemisen.",
      // Additional importance entries for other numbers...
    }
    return importance[number] || `Kertotaulun ${number} oppiminen auttaa opiskelijoita kehittämään sujuvuutta tämän tärkeän luvun kanssa. Se esiintyy usein matematiikassa ja jokapäiväisessä elämässä ja on välttämätöntä vankan laskutaidon rakentamiselle.`
  }

  const getPatterns = () => {
    const patterns: { [key: number]: { title: string; description: string }[] } = {
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
    return patterns[number] || []
  }

  const getCommonMistakes = () => {
    const mistakes: { [key: number]: { mistake: string; solution: string }[] } = {
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
    return mistakes[number] || []
  }

  const getPracticeStrategies = () => {
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
    return strategies[number] || [
      `Harjoittele laskemista ${number}:n välein ääneen`,
      "Kirjoita taulu joka päivä viikon ajan",
      "Käytä muistikortteja satunnaiseen testaukseen",
      "Harjoittele 5-10 minuuttia päivittäin pitkän opiskelun sijaan kerralla",
    ]
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
        {/* Hero Section */}
        <section className={`relative overflow-hidden bg-gradient-to-br ${colors[colorIndex]} pt-16 pb-12 sm:pt-20 sm:pb-16 md:pt-24 md:pb-20`}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[1, 2, 3, 4, 5].map((multiplier, index) => (
            <div
              key={multiplier}
              className={`absolute text-5xl sm:text-6xl md:text-7xl font-bold opacity-10 animate-float${index % 2 === 0 ? '' : '-delayed'}`}
              style={{
                top: `${10 + index * 15}%`,
                left: index % 2 === 0 ? `${10 + index * 10}%` : 'auto',
                right: index % 2 !== 0 ? `${5 + index * 8}%` : 'auto'
              }}
            >
              {number * multiplier}
            </div>
          ))}
          
          <div className="absolute top-20 right-[30%] w-24 sm:w-32 h-24 sm:h-32 bg-yellow-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 left-[20%] w-32 sm:w-40 h-32 sm:h-40 bg-pink-300/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-[45%] w-20 sm:w-28 h-20 sm:h-28 bg-green-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-[15%] w-28 sm:w-36 h-28 sm:h-36 bg-purple-300/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border-2 border-white/50">
              <span className="text-2xl sm:text-3xl">🔢</span>
              <span className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {number}
              </span>
              <span className="text-2xl sm:text-3xl">✖️</span>
            </div>
          </div>
          
          <div className="text-center mb-6 sm:mb-8">
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
              <span className="text-4xl sm:text-5xl md:text-6xl animate-bounce">🎯</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-slate-900">Kertotaulu</span>
                <br className="sm:hidden" />
                <span className="sm:inline"> </span>
                <span className="text-slate-900">{number}</span>
              </h1>
              <span className="text-4xl sm:text-5xl md:text-6xl animate-bounce" style={{ animationDelay: '0.2s' }}>🎨</span>
            </div>
            
            <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-2xl mx-auto mt-6 sm:mt-8 mb-4 sm:mb-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md border-2 border-blue-100">
                <div className="text-2xl sm:text-3xl mb-1">📊</div>
                <div className="text-xl sm:text-2xl font-bold text-blue-600">10</div>
                <div className="text-xs text-slate-600">Toimintoa</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md border-2 border-indigo-100">
                <div className="text-2xl sm:text-3xl mb-1">🎮</div>
                <div className="text-xl sm:text-2xl font-bold text-indigo-600">3</div>
                <div className="text-xs text-slate-600">Peliä</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md border-2 border-purple-100">
                <div className="text-2xl sm:text-3xl mb-1">📝</div>
                <div className="text-xl sm:text-2xl font-bold text-purple-600">∞</div>
                <div className="text-xs text-slate-600">Harjoituksia</div>
              </div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4 text-center px-4">
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
              Tämä sivu auttaa sinua <span className="font-semibold text-yellow-200">oppimaan ja ymmärtämään kertotaulun {number}</span>. 
              Löydät, miten {number} käyttäytyy kerrottaessa, 
              <span className="font-semibold text-yellow-200"> näet sen kuviot</span> ja 
              <span className="font-semibold text-yellow-200">opit käytännöllisiä tapoja</span> hallita se.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-4">
              <a 
                href="#practice"
                className="group inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white text-indigo-600 font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 text-sm sm:text-base"
              >
                <span className="text-lg sm:text-xl">🎯</span>
                <span>Aloita Harjoittelu</span>
                <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a 
                href="#games"
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/90 backdrop-blur-sm text-purple-600 font-bold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border-2 border-white/50 text-sm sm:text-base"
              >
                <span className="text-lg sm:text-xl">🎮</span>
                <span>Tutustu Peleihin</span>
              </a>
              <a 
                href="#worksheets"
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/90 backdrop-blur-sm text-green-600 font-bold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border-2 border-white/50 text-sm sm:text-base"
              >
                <span className="text-lg sm:text-xl">📝</span>
                <span className="hidden sm:inline">Lataa Harjoituksia</span>
                <span className="sm:hidden">Lataa</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Introduction */}
      <section className="section-container bg-white py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 flex items-center justify-center gap-3">
              <span className="text-2xl sm:text-3xl">📖</span>
              Mitä Kertotaulu {number} Kattaa?
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full"></div>
          </div>
          
          <p className="text-sm sm:text-base text-slate-700 mb-6 leading-relaxed text-center max-w-2xl mx-auto">
            Kertotaulu {number} kattaa luvun {number} tulon kaikkien lukujen 1-10 kanssa. 
            Tämä opettaa sinulle <span className="font-bold text-indigo-600">10 perustoimintoa</span>, jotka auttavat sinua paljon jokapäiväisessä elämässä ja edistyneissä matematiikan aiheissa.
          </p>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 sm:p-6 border-2 border-blue-100 shadow-md">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mb-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((multiplier) => (
                <div key={multiplier} className="flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm rounded-xl p-2 sm:p-3 shadow-sm hover:shadow-md transition-shadow group">
                  <span className="text-xs sm:text-sm text-slate-600 mb-1">{number} × {multiplier}</span>
                  <span className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold text-base sm:text-xl shadow-md group-hover:scale-110 transition-transform">
                    {number * multiplier}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="bg-white/60 rounded-xl p-3 sm:p-4 flex items-start gap-2 sm:gap-3">
              <span className="text-2xl sm:text-3xl">💡</span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Kertotaulussa {number} on <span className="font-bold text-indigo-600">10 kertolaskutoimitusta</span>. 
                Jos ymmärrät tämän taulun kuviot, voit oppia nämä toiminnot helposti ja laskea nopeasti!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Number Context & Meaning + Table Combined */}
      <section className="section-container bg-white py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
            <div className="space-y-5 sm:space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
                  Mitä Luku {number} Tarkoittaa Kerrottaessa?
                </h2>
                
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4 sm:mb-6">
                  {getNumberMeaning()}
                </p>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-5 border-2 border-blue-100">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="text-2xl sm:text-3xl">💡</span>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1 sm:mb-2">Yksinkertainen Selitys</h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        Kun näet {number} × 4, ajattele: "Minulla on 4 ryhmää ja jokaisessa ryhmässä on {number} alkiota." 
                        Joten {number} × 4 = {number} + {number} + {number} + {number} = {number * 4}.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
                  Miksi On Tärkeää Oppia Kertotaulu {number}
                </h2>
                
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {getWhyImportant()}
                </p>
              </div>
            </div>

            <div className="lg:sticky lg:top-8">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Kertotaulu {number}
                </h2>
                
                <div className="flex gap-2">
                  <button
                    onClick={handlePrint}
                    className="group flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-white border-2 border-blue-200 text-blue-600 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all text-xs sm:text-sm font-semibold"
                    title="Tulosta taulu"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                    <span className="hidden sm:inline">Tulosta taulu</span>
                  </button>
                  
                  <button
                    onClick={handleDownload}
                    className="group flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg"
                    title="Lataa kuvana"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span className="hidden sm:inline">Lataa kuvana</span>
                  </button>
                </div>
              </div>
              
              <div ref={tableRef} className={`bg-gradient-to-br ${colors[colorIndex]} rounded-2xl p-4 sm:p-6 text-white shadow-xl`}>
                <div className="space-y-1.5 sm:space-y-2">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="flex justify-between items-center bg-white/20 backdrop-blur-sm rounded-lg px-3 sm:px-5 py-2 sm:py-2.5 hover:bg-white/30 transition-colors">
                      <span className="font-medium text-sm sm:text-base">{number} × {i + 1}</span>
                      <span className="font-bold text-base sm:text-lg">= {number * (i + 1)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patterns & Observations */}
      <section className="section-container bg-white py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
            Kuviot Kertotaulussa {number}
          </h2>
          
          <p className="text-sm sm:text-base text-slate-700 mb-4 sm:mb-6 leading-relaxed">
            Kuvioiden ymmärtäminen tekee oppimisesta helpompaa ja hauskempaa. Kertotaulussa {number} on 
            kauniita kuvioita, jotka voivat auttaa sinua muistamaan sen ilman ulkoa opettelua.
          </p>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {getPatterns().map((pattern, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-3 sm:p-4 border-2 border-amber-100">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1.5 sm:mb-2 flex items-center gap-2">
                  <span className="text-lg sm:text-xl">{index === 0 ? '🔄' : index === 1 ? '📊' : '✨'}</span>
                  {pattern.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {pattern.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <div id="practice">
        <PracticePreview rangeStart={number} rangeEnd={number} />
      </div>

      {/* Interactive Games */}
      <div id="games">
        <NumberGames number={number} />
      </div>

      {/* Printable Worksheets */}
      <div id="worksheets">
        <PrintableExercises rangeStart={number} rangeEnd={number} />
      </div>

      {/* How to Practice */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
            Kuinka Harjoitella Kertotaulua {number}
          </h2>
          
          <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed">
            Kertotaulujen oppiminen vaatii johdonmukaista harjoittelua oikeilla strategioilla. 
            Tässä on todettuja menetelmiä erityisesti kertotaulun {number} hallitsemiseksi:
          </p>
          
          <div className="grid gap-3 sm:gap-4">
            {getPracticeStrategies().map((strategy, index) => (
              <div key={index} className="flex items-start gap-3 sm:gap-4 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-4 sm:p-5 border-2 border-green-100">
                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm sm:text-base">
                  {index + 1}
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed pt-0.5 sm:pt-1">
                  {strategy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="section-container bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
            Yleiset Virheet Kertotaulun {number} Oppimisessa
          </h2>
          
          <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed">
            Monet oppilaat tekevät samanlaisia virheitä oppiessaan tätä taulua. Tietoisuus näistä yleisistä virheistä 
            auttaa sinua välttämään niitä ja oppimaan tehokkaammin.
          </p>
          
          <div className="space-y-4 sm:space-y-6">
            {getCommonMistakes().map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-4 sm:p-6 border-l-4 border-red-500 shadow-md">
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="text-2xl sm:text-3xl">⚠️</span>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1.5 sm:mb-2">
                      {item.mistake}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      <span className="font-semibold text-green-600">Ratkaisu:</span> {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Multiplication Tables */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
            Liittyvät Kertotaulut
          </h2>
          
          <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed">
            Kertotaulu {number} on osa laajempaa oppimisjärjestelmää. 
            Voit tutkia muita tauluja samalla alueella tai siirtyä seuraavaan loogiseen lukuun.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {number > 1 && (
              <Link
                href={`/fi/kertotaulut/${number - 1}`}
                className="block bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs sm:text-sm text-slate-600 mb-1">← Edellinen Luku</div>
                    <div className="text-lg sm:text-2xl font-bold text-slate-900">
                      Kertotaulu {number - 1}
                    </div>
                  </div>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
              </Link>
            )}
            
            {number < 100 && (
              <Link
                href={`/fi/kertotaulut/${number + 1}`}
                className="block bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 sm:p-6 border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs sm:text-sm text-slate-600 mb-1">Seuraava Luku →</div>
                    <div className="text-lg sm:text-2xl font-bold text-slate-900">
                      Kertotaulu {number + 1}
                    </div>
                  </div>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            )}
            
            <Link
              href={`/fi/kertotaulut/${rangeStart}-${rangeEnd}`}
              className="block bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-4 sm:p-6 border-2 border-green-200 hover:border-green-400 hover:shadow-lg transition-all group sm:col-span-2"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs sm:text-sm text-slate-600 mb-1">↑ Ylätason Alue</div>
                  <div className="text-lg sm:text-2xl font-bold text-slate-900">
                    Kertotaulut {rangeStart}-{rangeEnd}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 sm:mt-2">
                    Tutustu kaikkiin tämän alueen kertotauluihin harjoittelutyökaluilla ja peleillä
                  </p>
                </div>
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
    </>
  )
}
