import Link from 'next/link'
import Header from '@/app/components/fi/Header'
import Footer from '@/app/components/fi/Footer'

export const metadata = {
  title: 'Kertotaulut Oppilaille | Oppiminen Vaihe Vaiheelta',
  description: 'Vaiheittainen opas kertotaulujen helpompaan oppimiseen. Visuaaliset materiaalit, harjoitukset ja hauskoja pelejä omassa tahdissa oppimiseen.',
  keywords: 'kertotaulujen oppiminen, matematiikka oppilaille, kertotauluopas, kertolaskut vaihe vaiheelta',
  alternates: {
    canonical: '/oppilaille',
  },
}

export default function ForStudents() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white pt-20 pb-12 md:pt-24 md:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
                Oppia Kertotauluja On Helppoa! 🎯
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 mb-6 md:mb-8">
                Opi omassa tahdissasi, pidä hauskaa ja tule matematiikan sankariksi! 
                Tämä opas auttaa sinua oppimaan kertotaulut vaihe vaiheelta.
              </p>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-blue-100">Sinäkin pystyt tähän!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Why Learn */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Miksi minun pitäisi oppia kertotaulut? 🤔
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">
                Kertotaulut ovat matematiikan maailman supervoimia! Ne antavat sinulle:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                    ⚡
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Nopea Laskutaito</h3>
                    <p className="text-slate-700">Pystyt ratkaisemaan matematiikan tehtävät paljon nopeammin!</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-2xl">
                    🎮
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Käyttö Arjessa</h3>
                    <p className="text-slate-700">Ostoksilla, peleissä - kaikkialla tarvitset sitä!</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-2xl">
                    🏆
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Enemmän Itsevarmuutta</h3>
                    <p className="text-slate-700">Itsevarmuutesi matematiikassa kasvaa ja olet menestyneempi!</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-2xl">
                    🧠
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Aivojen Voima</h3>
                    <p className="text-slate-700">Muistisi vahvistuu ja opit ajattelemaan nopeammin!</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Learning Path */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Oppimispolku Vaihe Vaiheelta 🚀
            </h2>
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border-l-4 border-green-500">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">Aloita Helpoista Riveistä (1, 2, 5, 10)</h3>
                    <p className="text-slate-700 mb-3">
                      Helpoimmista riveistä aloittaminen antaa sinulle itsevarmuutta! Ne ovat hyvin helppoja ja opit ne nopeasti.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-900 mb-2">Miksi nämä rivit ovat helppoja?</p>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• <strong>Rivi 1:</strong> Jokainen luku pysyy samana! (1×5=5)</li>
                        <li>• <strong>Rivi 2:</strong> Kaksinkertaista luku! (2×4 = 4+4 = 8)</li>
                        <li>• <strong>Rivi 5:</strong> Päättyy aina viiteen tai nollaan!</li>
                        <li>• <strong>Rivi 10:</strong> Lisää nolla loppuun! (10×3 = 30)</li>
                      </ul>
                    </div>
                    <div className="mt-3">
                      <Link href="/fi/kertotaulut/1-10" className="text-green-600 hover:text-green-700 font-medium inline-flex items-center">
                        Riveille 1-10 →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border-l-4 border-blue-500">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">Siirry Keskivaikeisiin Riveihin (3, 4, 6)</h3>
                    <p className="text-slate-700 mb-3">
                      Nyt olet valmis hieman vaikeampiin riveihin! Älä pelkää, näihinkin on niksejä.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-900 mb-2">Vinkkejä:</p>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• <strong>Rivi 3:</strong> Lisää luku 3 kertaa (3×4 = 4+4+4 = 12)</li>
                        <li>• <strong>Rivi 4:</strong> Kerro kahdella, sitten tuplaa (4×5 = 2×5×2 = 20)</li>
                        <li>• <strong>Rivi 6:</strong> Käytä riviä 5 ja lisää vielä kerran (6×4 = 5×4 + 4 = 24)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-500">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Haaste Vaikeimmilla Riveillä (7, 8, 9)</h3>
                    <p className="text-slate-700 mb-3">
                      Nämä rivit ovat vähän vaikeampia, mutta olet jo oppinut paljon! Erikoistekniikoilla selviät myös näistä.
                    </p>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-semibold text-yellow-900 mb-2">Erikoistekniikoita:</p>
                      <ul className="space-y-2 text-slate-700 text-sm">
                        <li>• <strong>Rivi 9 - Sormitemppu:</strong> Levitä kädet, taita sen luvun sormi jolla kerrot. Vasemmalla olevat sormeet = kymmenet, oikealla olevat = ykköset!</li>
                        <li>• <strong>Rivi 8:</strong> Kerro 10:llä, sitten vähennä 2× (8×7 = 10×7 - 2×7 = 70-14 = 56)</li>
                        <li>• <strong>Rivi 7:</strong> Vaikeissa käytä riviä 5 (7×6 = 5×6 + 2×6 = 30+12 = 42)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Harjoittele Säännöllisesti 💪</h3>
                    <p className="text-slate-700 mb-3">
                      Jotta et unohda oppimaasi, harjoittele joka päivä vähän. Parasta: vähän, mutta säännöllisesti!
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-900 mb-2">Vinkkejä Päivittäiseen Harjoitteluun:</p>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• Opi joka päivä 10-15 minuuttia (ei paljon, mutta säännöllisesti!)</li>
                        <li>• Harjoittele leikkien - se on hauskaa!</li>
                        <li>• Järjestä kilpailuja perheen kanssa</li>
                        <li>• Kun arjessa näet kertolaskuja, laske ne (esim: "3 pakettia, 5 keksiä jokaisessa, montako yhteensä?")</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Visual Learning */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Visuaalinen Oppiminen - Ymmärrä Kuvien Avulla 🎨
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">
                Kertolaskujen visualisointi päässäsi helpottaa oppimista! Tässä visuaalisia tekniikoita:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {/* Arrays */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Taulukot</h3>
                  <p className="text-slate-700 mb-4 text-sm">Esimerkki 4 × 3 = 12:</p>
                  <div className="bg-white p-4 rounded inline-block">
                    <div className="grid grid-cols-4 gap-2">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="w-8 h-8 bg-blue-400 rounded"></div>
                      ))}
                    </div>
                    <p className="text-center mt-2 text-sm text-slate-600">4 saraketta × 3 riviä = 12</p>
                  </div>
                </div>

                {/* Number Line */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Hyppelyt Lukusuoralla</h3>
                  <p className="text-slate-700 mb-4 text-sm">3 × 4: Hypit neljän (0→4→8→12)</p>
                  <div className="bg-white p-4 rounded">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-green-700">0</span>
                      <span className="text-green-500">→</span>
                      <span className="text-sm font-bold text-green-700">4</span>
                      <span className="text-green-500">→</span>
                      <span className="text-sm font-bold text-green-700">8</span>
                      <span className="text-green-500">→</span>
                      <span className="text-sm font-bold text-green-700">12</span>
                    </div>
                    <p className="text-center mt-2 text-xs text-slate-600">3 askelta, jokainen askel 4 yksikköä</p>
                  </div>
                </div>

                {/* Skip Counting */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Hyppylaskenta</h3>
                  <p className="text-slate-700 mb-3 text-sm">Laske viidellä: 5, 10, 15, 20, 25...</p>
                  <div className="bg-white p-3 rounded text-center">
                    <p className="text-purple-700 font-bold text-lg">5 - 10 - 15 - 20 - 25</p>
                    <p className="text-xs text-slate-600 mt-2">Kun osaat nämä luvut ulkoa, rivi 5 on superhelppo!</p>
                  </div>
                </div>

                {/* Patterns */}
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Tunnista Kuviot</h3>
                  <p className="text-slate-700 mb-3 text-sm">Rivin 9 salaisuus:</p>
                  <div className="bg-white p-3 rounded">
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>9×1=<strong className="text-pink-600">09</strong> (0+9=9)</li>
                      <li>9×2=<strong className="text-pink-600">18</strong> (1+8=9)</li>
                      <li>9×3=<strong className="text-pink-600">27</strong> (2+7=9)</li>
                      <li>9×4=<strong className="text-pink-600">36</strong> (3+6=9)</li>
                      <li className="text-xs italic">Numerot antavat aina 9!</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Practice Tips */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Harjoitusvinkkejä 🎯
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  🎮
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Pelit</h3>
                <p className="text-slate-700 mb-3">
                  Harjoittele hauskuilla peleillä tällä sivustolla. Oppiminen pelaten on paljon hauskempaa!
                </p>
                <Link href="/fi/kertotaulut" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center text-sm">
                  Tutustu peleihin →
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  📝
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Testaa Itseäsi</h3>
                <p className="text-slate-700 mb-3">
                  Käytä kortteja tai pyydä jotakuta kysymään sinulta kysymyksiä. Itsensä testaaminen nopeuttaa oppimista!
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  🎵
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Laulut ja Rytmit</h3>
                <p className="text-slate-700 mb-3">
                  Luo kertotauluista lauluja! Musiikin avulla ne on paljon helpompi muistaa.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  🏆
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Palkitse Itsesi</h3>
                <p className="text-slate-700 mb-3">
                  Kun opit rivin, palkitse itsesi! Kerää tarroja tai tee jotain mukavaa.
                </p>
              </div>
            </div>
          </section>

          {/* Progress Tracking */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Seuraa Edistymistäsi 📊
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">
                Nähdä kuinka paljon edistystä olet tehnyt motivoi! Tässä seurantamenetelmiä:
              </p>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">✅ Rivien Tarkistuslista</h3>
                  <p className="text-slate-700 text-sm">
                    Kirjoita rivit 1-10 paperille. Aina kun opit yhden, laita iso rasti! 
                    Kun kaikki on merkitty, olet kertotaulujen sankari! 🌟
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">📈 Edistymiskaavio</h3>
                  <p className="text-slate-700 text-sm">
                    Kirjaa joka viikko, kuinka moneen kysymykseen vastasit oikein. Piirrä kaavio ja näet edistymisesi. 
                    Joka viikko olet parempi!
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">⭐ Tähtijärjestelmä</h3>
                  <p className="text-slate-700 text-sm">
                    Jokaisesta oikeasta vastauksesta piirrä itsellesi tähti. Kun saavutat 100 tähteä, anna itsellesi erityinen palkinto!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Motivation */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Motivaatio ja Menestymisen Salaisuudet 💫
            </h2>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🌟</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Ole Kärsivällinen</h3>
                      <p className="text-slate-700 text-sm">Kaikki vaatii aikaa. Selviät tästä, jatka vain harjoittelua!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💪</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Virheet Ovat Normaaleja</h3>
                      <p className="text-slate-700 text-sm">Älä pahoita mieltäsi virheistä, ne ovat osa oppimista!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Aseta Pieniä Tavoitteita</h3>
                      <p className="text-slate-700 text-sm">Yksi rivi päivässä riittää, älä kiirehtine!</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🤝</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Pyydä Apua</h3>
                      <p className="text-slate-700 text-sm">Kun et ymmärrä jotain, kysy perheeltäsi tai opettajalta!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎉</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Juhli Onnistumisiasi</h3>
                      <p className="text-slate-700 text-sm">Jokainen pieni onnistuminen on tärkeä, ole ylpeä itsestäsi!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">😊</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Pidä Hauskaa!</h3>
                      <p className="text-slate-700 text-sm">Oppimisen tulisi olla hauskaa, kokeile pelejä!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Reference */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Pikaviittaus Vinkkeihin 🔑
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-900 mb-2">Kertolasku Nollalla</h4>
                  <p className="text-sm text-slate-700">Kaikki on nolla! 0×1000=0</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-green-900 mb-2">Kertolasku Yhdellä</h4>
                  <p className="text-sm text-slate-700">Luku pysyy samana! 1×7=7</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold text-purple-900 mb-2">Kertolasku Kahdella</h4>
                  <p className="text-sm text-slate-700">Tuplaa luku! 2×6=12</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-bold text-pink-900 mb-2">Kertolasku Viidellä</h4>
                  <p className="text-sm text-slate-700">Tulos päättyy 0:aan tai 5:een!</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-900 mb-2">Kertolasku Yhdeksällä</h4>
                  <p className="text-sm text-slate-700">Numerot antavat 9! Sormitemppu!</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-bold text-indigo-900 mb-2">Kertolasku Kymmenellä</h4>
                  <p className="text-sm text-slate-700">Lisää nolla loppuun! 10×8=80</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-6 sm:p-8 text-white text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Aika Aloittaa! 🚀
            </h2>
            <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Nyt olet valmis! Muista, jokainen suuri matematiikan sankari aloitti pienistä askelista. 
              Ja sinäkin pystyt tähän! 💪✨
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/fi/kertotaulut/1-10"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                <span className="mr-2">🎯</span>
                Aloita Nyt
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/fi/kertotaulut"
                className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-flex items-center justify-center"
              >
                Takaisin Pääsivulle
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-blue-400">
              <p className="text-blue-100 text-sm">
                💡 <strong>Vinkki:</strong> Opiskella 10-15 minuuttia päivittäin on paljon tehokkaampaa kuin 1 pitkäveteinen tunti!
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
