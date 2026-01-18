import Link from 'next/link'
import Header from '@/app/components/fi/Header'
import Footer from '@/app/components/fi/Footer'

export const metadata = {
  title: 'Kertotaulut Vanhemmille | Tue Kotona Oppimista',
  description: 'Kuinka auttaa lastasi oppimaan kertotaulut kotona. Käytännön vinkkejä, opettavaisia pelejä ja motivointistrategioita.',
  keywords: 'kertotaulujen opettaminen, matematiikka kotona, vanhempien opas, oppimisaktiviteetit',
  alternates: {
    canonical: '/vanhemmille',
  },
}

export default function ForParents() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white pt-20 pb-12 md:pt-24 md:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
                Kertotaulujen Opas Vanhemmille
              </h1>
              <p className="text-lg sm:text-xl text-purple-100 mb-6 md:mb-8">
                Kuinka tukea lastasi kertotaulujen oppimisessa? 
                Tämä opas sisältää tehokkaita strategioita ja käytännön vinkkejä.
              </p>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                <span className="text-purple-100">Sinun Oppaasi Lapsesi Menestykseen</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Why It Matters */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Miksi Se On Tärkeää?
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4">
                Kertotaulut ovat yksi tärkeimmistä askelista lapsesi matemaattisessa kehityksessä. 
                Ne ovat kriittisiä paitsi matematiikalle, myös ongelmanratkaisutaitojen, loogisen ajattelun ja itseluottamuksen kehittämiselle.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">Perusta Korkeammalle Matematiikalle</h3>
                  <p className="text-slate-700 text-sm">Jakolasku, murtoluvut, algebra - kaikki perustuvat kertotauluihin.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Itseluottamus Koulussa</h3>
                  <p className="text-slate-700 text-sm">Menestys kertotauluissa vahvistaa yleistä luottamusta koulussa.</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Elämäntaitoja</h3>
                  <p className="text-slate-700 text-sm">Nopea laskutaito on hyödyllistä ostoksilla, ruoanlaitossa ja jokapäiväisessä elämässä.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Support Strategies */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Tukistrategiat Kotona
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                    🎯
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Tee Siitä Konkreettista</h3>
                    <p className="text-slate-700 mb-3">
                      Opeta kertotauluja todellisten tilanteiden avulla abstraktien numeroiden sijaan.
                    </p>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>"Jos sinulla on 3 laatikkoa ja jokaisessa laatikossa on 4 omenaa, kuinka monta omenaa sinulla on yhteensä?"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>"Munakenno sisältää 6 munaa. Kuinka monta munaa on 4 kennossa?"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Käytä fyysisiä esineitä (nappeja, karkkeja, leluja) visualisointiin</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                    ⏰
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Lyhyet, Mutta Säännölliset Harjoitukset</h3>
                    <p className="text-slate-700 mb-3">
                      On tehokkaampaa harjoitella päivittäin 10-15 minuuttia kuin kerran viikossa 1 tunti.
                    </p>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      <li>• Aamiaisen aikana - 5 nopeaa kysymystä</li>
                      <li>• Matkalla kouluun - laskeminen kahden ja viiden sarjoissa</li>
                      <li>• Ennen nukkumaanmenoa - 5 minuuttia kertausta</li>
                      <li>• Viikonloppuisin - kertotaulupelejä</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-2xl">
                    🎮
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Pelillinen Oppiminen</h3>
                    <p className="text-slate-700 mb-3">
                      Oppimisen muuttaminen peliksi lisää sekä motivaatiota että muistia.
                    </p>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      <li>• Käytä tämän verkkosivuston pelejä</li>
                      <li>• Pelaa kertolaskukorttipelejä</li>
                      <li>• Järjestä perhekilpailuja</li>
                      <li>• Tarjoa pieniä palkintoja onnistumisista</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Fun Activities */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Hauskoja Aktiviteetteja Kotona
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">🃏 Korttipelit</h3>
                <div className="space-y-3 text-slate-700 text-sm">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">Kertolaskusota</h4>
                    <p className="text-slate-600">Nosta kaksi korttia ja kerro ne keskenään. Oikea vastaus voittaa pisteet!</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">Kertolaskumuisti</h4>
                    <p className="text-slate-600">Yhdistä kysymyskortit vastauskorteihin - kuten muistipelissä!</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">🍳 Matematiikkaa Keittiössä</h3>
                <div className="space-y-3 text-slate-700 text-sm">
                  <p>Käytä kertolaskua ruoanlaitossa:</p>
                  <ul className="space-y-2">
                    <li>• "Jos tarvitaan 2 munaa per pannukakku ja teemme 4 pannukakkua, kuinka monta munaa tarvitaan?"</li>
                    <li>• "Jos resepti on 3 hengelle ja meitä on 6, kuinka paljon tarvitaan?"</li>
                    <li>• Lusikkojen laskeminen, ainesosien mittaaminen</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">🛒 Kertolaskuharjoitukset Kaupassa</h3>
                <div className="space-y-3 text-slate-700 text-sm">
                  <ul className="space-y-2">
                    <li>• "3 jogurttia maksavat kumpikin 2€, kuinka paljon yhteensä?"</li>
                    <li>• "Omenapussi sisältää 6 omenaa. Jos ostamme 4 pussia, kuinka monta omenaa?"</li>
                    <li>• Hintojen vertailu, alennusten laskeminen</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">🎨 Luovat Aktiviteetit</h3>
                <div className="space-y-3 text-slate-700 text-sm">
                  <ul className="space-y-2">
                    <li>• Kertotaulujulisteiden tekeminen</li>
                    <li>• Kertolaskulaulujen tai lorujen kirjoittaminen</li>
                    <li>• Noppien heittäminen ja tulosten kertominen</li>
                    <li>• Tarinoiden keksiminen kertolaskutehtävillä</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Common Challenges */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Yleiset Haasteet ja Ratkaisut
            </h2>
            <div className="space-y-4">
              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
                <summary className="font-semibold text-slate-900 text-lg flex items-center gap-3">
                  <span className="text-purple-500">❓</span>
                  Lapseni pelkää kertotauluja/välttelee niitä
                </summary>
                <div className="mt-4 text-slate-700 space-y-2 text-sm">
                  <p><strong>Ratkaisu:</strong> Aloita helpoista sarjoista (1, 2, 5, 10) luottamuksen rakentamiseksi. Keskity edistymiseen, ei täydellisyyteen. Juhli jokaista pientä menestystä.</p>
                  <p>Vältä painostusta tai pelkoa virheistä. Oppimisen tulee olla hauskaa, ei stressaavaa.</p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
                <summary className="font-semibold text-slate-900 text-lg flex items-center gap-3">
                  <span className="text-blue-500">❓</span>
                  Opettelee ulkoa, mutta ei ymmärrä käsitettä
                </summary>
                <div className="mt-4 text-slate-700 space-y-2 text-sm">
                  <p><strong>Ratkaisu:</strong> Käytä konkreettisia esineitä ja visuaalisia malleja. Näytä, että 3×4 tarkoittaa "3 ryhmää, joissa on 4" tai "4+4+4".</p>
                  <p>Käytä esinejoukkojen sarjoja, piirustuksia, manipuloitavia esineitä. Käsitteellinen ymmärrys on tärkeämpää kuin mekaaninen ulkoa opettelu.</p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
                <summary className="font-semibold text-slate-900 text-lg flex items-center gap-3">
                  <span className="text-green-500">❓</span>
                  Sekoittaa sarjat keskenään
                </summary>
                <div className="mt-4 text-slate-700 space-y-2 text-sm">
                  <p><strong>Ratkaisu:</strong> Keskity yhteen sarjaan kerrallaan. Työskentele huolellisesti yhden sarjan kanssa ennen seuraavaan siirtymistä.</p>
                  <p>Käytä värikoodeja tai visuaalisia assosiaatioita eri sarjoille. Harjoittele erottamista: "Onko tämä 3×4 vai 4×3?"</p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
                <summary className="font-semibold text-slate-900 text-lg flex items-center gap-3">
                  <span className="text-yellow-500">❓</span>
                  Unohtaa aiemmin opitut
                </summary>
                <div className="mt-4 text-slate-700 space-y-2 text-sm">
                  <p><strong>Ratkaisu:</strong> Säännöllinen kertaus on avain. Harjoittele aiemmin opittuja sarjoja yhdessä uusien kanssa.</p>
                  <p>Luo kertausaikataulu: Sisällytä viikoittain vanhoja sarjoja. Käytä pelejä pitämään kertaus mielenkiintoisena.</p>
                </div>
              </details>
            </div>
          </section>

          {/* Motivation Tips */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Kuinka Ylläpitää Motivaatiota
            </h2>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg shadow-md p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-4">✅ Tee</h3>
                  <ul className="space-y-3 text-slate-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Kehuu ponnisteluja, ei pelkästään oikeaa vastausta</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Juhli edistymistä pienillä palkinnoilla</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Tee oppimisesta peli</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Aseta saavutettavissa olevia tavoitteita</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Luo tukevaa ja stressitöntä ympäristöä</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-pink-900 mb-4">❌ Vältä</h3>
                  <ul className="space-y-3 text-slate-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Vertailua sisaruksiin tai muihin lapsiin</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Painostusta tai pelkoa virheistä</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Pitkiä, tylsiä harjoituksia</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Negatiivisen kielen käyttöä ("Tämä on helppoa, mikset osaa?")</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Välittömän täydellisyyden odottamista</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-lg p-6 sm:p-8 text-white text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Aloita Tänään Kertotaulumatka Lapsesi Kanssa
            </h2>
            <p className="text-base sm:text-lg text-purple-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Muista, jokainen lapsi oppii omaan tahtiinsa. Tuellasi ja oikeilla strategioilla 
              lapsesi hallitsee kertotaulut. Kärsivällisyyttä, harjoittelua ja positiivisuutta!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/fi/kertotaulu/1-10"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center justify-center"
              >
                <span className="mr-2">🎯</span>
                Tutki Kertotauluja
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/oppilaille"
                className="bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors inline-flex items-center justify-center"
              >
                Katso Oppaan Oppilaille
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-purple-400">
              <p className="text-purple-100 text-sm">
                💡 <strong>Kultainen Vinkki:</strong> Sinun positiivinen asenteesi matematiikkaa kohtaan vaikuttaa lapsesi asenteeseen. 
                Näytä innostusta ja lapsesikin innostuu!
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
