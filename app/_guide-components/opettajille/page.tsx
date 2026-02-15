import type { Metadata } from 'next';
import Header from '@/app/components/fi/Header';
import Footer from '@/app/components/fi/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kertotaulut Opettajille | Opetusstrategiat',
  description: 'Kattavat resurssit opettajille kertotaulujen tehokkaaseen opettamiseen. Sisältää pedagogisia strategioita, luokkahuoneaktiviteetteja, eriyttämismenetelmiä ja arviointimenetelmiä.',
  keywords: 'kertotaulujen opettaminen, pedagogiset strategiat, matematiikka-aktiviteetit, eriytetty opetus, opettajan resurssit',
  alternates: {
    canonical: '/opettajille',
    languages: {
      'fi': '/opettajille',
    },
  },
  openGraph: {
    title: 'Kertotaulut Opettajille | Opetusstrategiat',
    description: 'Kattavat resurssit opettajille kertotaulujen tehokkaaseen opettamiseen.',
    url: 'https://mathematives.com/opettajille',
    siteName: 'Kertotaulut',
    locale: 'fi_FI',
    type: 'website',
  },
};

export default function OpettajillePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Kertotaulujen Opas Opettajille
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Tehokkaat strategiat, luokkahuoneaktiviteetit ja resurssit kertotaulujen 
              opettamiseen niin, että kaikki oppilaat menestyvät.
            </p>
          </div>
        </div>
      </section>

      {/* Teaching Strategies Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Tehokkaat Opetusstrategiat
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Strategy 1 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">👁️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Visualisointi</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Käytä visuaalisia esityksiä auttamaan oppilaita ymmärtämään 
                kertolaskun toistuvina ryhminä.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Suorakaiteen muotoiset ruudukot (esim. 3×4 kolmena rivinä, 4 kohdetta)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Pinta-alamallit ruutupaperilla</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Hyppykaaviot lukusuoralla</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Konkreettiset manipulaatiot (palikat, pelilastut, nappulat)</span>
                </li>
              </ul>
            </div>

            {/* Strategy 2 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🧩</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Hajottaminen</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Opeta oppilaita hajottamaan vaikeat kertolaskut 
                yksinkertaisempiin operaatioihin.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>7×6 = (5×6) + (2×6) = 30 + 12 = 42</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>9×8 = (10×8) - (1×8) = 80 - 8 = 72</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Tuplauksen käyttö: 6×4 = 2×(3×4)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Jakautumislaki toiminnassa</span>
                </li>
              </ul>
            </div>

            {/* Strategy 3 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🔢</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Kaavat</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Auta oppilaita tunnistamaan ja hyödyntämään kaavoja 
                helpottamaan oppimista ja muistamista.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Kertolasku 2: kaikki parilliset luvut</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Kertolasku 5: päättyy 0:aan tai 5:een</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Kertolasku 9: numeroiden summa = 9, laskeva kaava</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Vaihdantalaki: 3×7 = 7×3</span>
                </li>
              </ul>
            </div>

            {/* Strategy 4 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Tosielämän Sovellukset</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Yhdistä kertolasku jokapäiväisiin tilanteisiin antaaksesi 
                oppimiselle merkityksen ja kontekstin.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Ostokset ja rahatehtävät</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Esineiden järjestäminen riveihin ja sarakkeisiin</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Ruokareseptit ja mittaukset</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Urheilu, pelit ja ryhmäaktiviteetit</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Classroom Activities Section */}
      <section className="py-12 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Luokkahuoneaktiviteetit
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Activity 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🎯</span>
                Kertotaulu-Bingo
              </h3>
              <p className="text-gray-700 mb-3">
                Oppilaat luovat bingo-kortit vastauksilla. 
                Sano kertolaskuja ja oppilaat merkitsevät vastaukset.
              </p>
              <div className="bg-blue-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Taso:</strong> Aloittelija - Edistynyt<br/>
                <strong>Aika:</strong> 15-20 minuuttia
              </div>
            </div>

            {/* Activity 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🏃</span>
                Kertolaskukilpailu
              </h3>
              <p className="text-gray-700 mb-3">
                Joukkueet kilpailevat toisiaan vastaan ratkaisten kertolaskutehtäviä 
                viestijuoksumuodossa taululla.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Taso:</strong> Kaikki tasot<br/>
                <strong>Aika:</strong> 10-15 minuuttia
              </div>
            </div>

            {/* Activity 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🎲</span>
                Kertotauludomino
              </h3>
              <p className="text-gray-700 mb-3">
                Muokatut dominonappulat, joissa oppilaat 
                yhdistävät kertolaskut niiden vastauksiin.
              </p>
              <div className="bg-purple-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Taso:</strong> Edistynyt<br/>
                <strong>Aika:</strong> 20-30 minuuttia
              </div>
            </div>

            {/* Activity 4 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🎨</span>
                Taidetta Taulukoilla
              </h3>
              <p className="text-gray-700 mb-3">
                Oppilaat luovat taiteellisia malleja suorakaiteen muotoisilla taulukoilla 
                ja merkitsevät vastaavan kertolaskun.
              </p>
              <div className="bg-pink-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Taso:</strong> Aloittelija<br/>
                <strong>Aika:</strong> 30-40 minuuttia
              </div>
            </div>

            {/* Activity 5 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🎪</span>
                Harjoituspisteet
              </h3>
              <p className="text-gray-700 mb-3">
                Perusta kiertäviä pisteitä erilaisilla aktiviteeteilla: 
                kortit, digitaaliset pelit, kirjalliset tehtävät, manipulaatiot.
              </p>
              <div className="bg-orange-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Taso:</strong> Kaikki tasot<br/>
                <strong>Aika:</strong> 40-50 minuuttia
              </div>
            </div>

            {/* Activity 6 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">📖</span>
                Kertolaskutarinat
              </h3>
              <p className="text-gray-700 mb-3">
                Oppilaat kirjoittavat ja kuvittavat sanallisia kertolaskutehtäviä 
                todellisten tai kuvitteellisten tilanteiden pohjalta.
              </p>
              <div className="bg-yellow-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Taso:</strong> Edistynyt - Asiantuntija<br/>
                <strong>Aika:</strong> 30-45 minuuttia
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiated Instruction Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Eriytetty Opetus
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Beginning Learners */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-2">🌱</span>
                Aloittelijat
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Aloita kertolaskuilla 1, 2, 5 ja 10</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Käytä runsaasti konkreettisia manipulaatioita</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Korosta aluksi toistuvaa yhteenlaskua</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Tarjoa viitekaavioita</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Lyhyet päivittäiset harjoitukset (5-10 min)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Juhli pieniä onnistumisia</span>
                </li>
              </ul>
            </div>

            {/* Intermediate Learners */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-2">📚</span>
                Keskitason Oppilaat
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Esittele kertolaskut 3, 4, 6 ja 7</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Opeta hajottamisstrategioita</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Harjoittele vaihdantalakia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Nopeuspelit maltillisella tahdilla</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Kontekstuaaliset sovellustehtävät</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Pari- ja pienryhmätyö</span>
                </li>
              </ul>
            </div>

            {/* Advanced Learners */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-2">🚀</span>
                Asiantuntijat
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Kertolaskut 8, 9, 11 ja 12</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Monivaiheisia tehtäviä</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Yhdistä jakoon ja murtolukuihin</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Matemaattisia loogisia haasteita</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Luo omia tehtäviä</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Opeta luokkatovereita</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Strategies Section */}
      <section className="py-12 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Arviointistrategiat
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Formative Assessment */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">📊</span>
                Formatiivinen Arviointi
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Päivittäiset Pikatarkistukset</h4>
                  <p className="text-gray-700">
                    3-5 minuutin tehtävät kertaamaan edellisen päivän oppimista 
                    ja tunnistamaan aukkoja.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Väliportaat</h4>
                  <p className="text-gray-700">
                    Käytä välikorteja (vihreä/punainen) tai peukaloita (ylös/alas) 
                    nopeaan ymmärryksen tarkistamiseen.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Havainnointi</h4>
                  <p className="text-gray-700">
                    Tarkkaile oppilaita aktiviteettien aikana ja merkitse muistiin 
                    strategioiden käyttöä ja ymmärrystä.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Digitaaliset Työkalut</h4>
                  <p className="text-gray-700">
                    Käytä verkkoalustoja, jotka tarjoavat välitöntä palautetta 
                    ja seuraavat edistymistä ajan mittaan.
                  </p>
                </div>
              </div>
            </div>

            {/* Summative Assessment */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">✅</span>
                Summatiivinen Arviointi
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Ajoitetut Testit</h4>
                  <p className="text-gray-700">
                    Asteittain lisää nopeusvaatimuksia, kun tarkkuus paranee. 
                    Aloita 5 minuutista ja lyhennä 2-3 minuuttiin.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Projektipohjainen Arviointi</h4>
                  <p className="text-gray-700">
                    Oppilaat luovat postereita, pelejä tai esityksiä, jotka 
                    osoittavat kertolaskujen ymmärrystä.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Suulliset Tentit</h4>
                  <p className="text-gray-700">
                    Yksilöllisiä arvioita, joissa oppilaat selittävät 
                    strategioitaan ja ajatteluprosessejaan.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Edistymisen Seuranta</h4>
                  <p className="text-gray-700">
                    Säilytä kaavioita, jotka näyttävät opitut kertolaskut 
                    ajan mittaan, juhlistaen virstanpylväitä.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Opettajan Resurssit
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Resource 1 */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-3">📋</div>
              <h3 className="text-xl font-bold mb-2">Tulostettavat Työkirjat</h3>
              <p className="text-blue-100">
                Lataa ja tulosta harjoitusarkit, pelit ja aktiviteetit.
              </p>
            </div>

            {/* Resource 2 */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-3">💻</div>
              <h3 className="text-xl font-bold mb-2">Digitaaliset Työkalut</h3>
              <p className="text-green-100">
                Interaktiiviset pelit ja sovellukset, jotka tekevät harjoittelusta hauskaa.
              </p>
            </div>

            {/* Resource 3 */}
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg p-6 text-white hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-3">📚</div>
              <h3 className="text-xl font-bold mb-2">Tuntisuunnitelmat</h3>
              <p className="text-purple-100">
                Valmiit tuntisuunnitelmat kaikille vaikeusasteille.
              </p>
            </div>

            {/* Resource 4 */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg p-6 text-white hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-xl font-bold mb-2">Arviointityökalut</h3>
              <p className="text-orange-100">
                Testejä, tarkistuslistoja ja edistymisen seurantamalleja.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips for Success Section */}
      <section className="py-12 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Vinkkejä Menestykseen
          </h2>
          
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-xl p-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <span className="text-3xl mr-4">💡</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Johdonmukaisuus on Avain
                  </h3>
                  <p className="text-gray-700">
                    Lyhyet, päivittäiset harjoitustuokiot (5-10 minuuttia) ovat 
                    tehokkaampla kuin pitkät satunnaiset istunnot.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-3xl mr-4">🎉</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Juhli Edistymistä
                  </h3>
                  <p className="text-gray-700">
                    Tunnusta kaikki saavutukset, olipa kyseessä sitten yksi uusi opittu 
                    kertolasku tai nopean testin suorittaminen.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-3xl mr-4">🎮</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Tee siitä Hauskaa
                  </h3>
                  <p className="text-gray-700">
                    Käytä pelejä, lauluja ja kilpailuja pitääksesi oppilaat 
                    kiinnostuneina ja motivoituneina.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-3xl mr-4">👨‍👩‍👧‍👦</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Osallista Vanhemmat
                  </h3>
                  <p className="text-gray-700">
                    Lähetä kotiin harjoitusideoita ja kannusta vanhempia 
                    harjoittelemaan lastensa kanssa.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-3xl mr-4">📈</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Seuraa Edistymistä
                  </h3>
                  <p className="text-gray-700">
                    Käytä kaavioita ja taulukoita auttaaksesi oppilaita näkemään 
                    kehityksensä ja asettamaan tavoitteita.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-3xl mr-4">🤝</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Vertaisopetus
                  </h3>
                  <p className="text-gray-700">
                    Anna vahvempien oppilaiden opettaa heikompia - molemmat 
                    hyötyvät kokemuksesta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Aloita Oppilaiden Menestyksen Tukeminen Tänään
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Tutustu kertotauluihimme ja löydä täydelliset resurssit luokkahuoneeseesi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/fi/kertotaulut/oppilaille"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                Oppilasresurssit
              </Link>
              <Link
                href="/fi/kertotaulut/1"
                className="bg-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-400 transition-colors shadow-lg"
              >
                Selaa Kertotauluja
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
