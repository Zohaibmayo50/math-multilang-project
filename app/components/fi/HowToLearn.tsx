export default function HowToLearn() {
  return (
    <section className="section-container bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-slate-900 mb-12 text-center">
          Kuinka oppia kertotauluja tehokkaasti?
        </h2>
        
        <div className="space-y-12">
          <article>
            <h3 className="text-slate-900 mb-4 flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                1
              </span>
              <span>Opi mallien ymmärtämisen kautta</span>
            </h3>
            <div className="ml-11 space-y-4 text-slate-700">
              <p>
                Kertotaulussa on monia malleja ja järjestyksiä. Näiden mallien 
                löytäminen tarjoaa loogisen ymmärryksen pelkän ulkoa oppimisen sijaan:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Luvun 2 monikerrat:</strong> Aina parillisia lukuja (2, 4, 6, 8...)
                </li>
                <li>
                  <strong>Luvun 5 monikerrat:</strong> Päättyvät aina 0:aan tai 5:een (5, 10, 15, 20...)
                </li>
                <li>
                  <strong>Luvun 9 monikerrat:</strong> Numeroiden summa on aina jaollinen 9:llä 
                  (18: 1+8=9, 27: 2+7=9)
                </li>
                <li>
                  <strong>Luvun 10 monikerrat:</strong> Päättyvät aina 0:aan (10, 20, 30...)
                </li>
                <li>
                  <strong>Vaihdantalaki:</strong> 3 × 4 = 4 × 3 (Järjestys ei vaikuta tulokseen)
                </li>
              </ul>
              <p>
                Näiden mallien ymmärtäminen mahdollistaa peruslogiikan oppimisen, 
                sen sijaan että muistaisit lähes 100 kertolaskun tulosta.
              </p>
            </div>
          </article>
          
          <article>
            <h3 className="text-slate-900 mb-4 flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-educational-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                2
              </span>
              <span>Asteittainen ja toistuva oppiminen</span>
            </h3>
            <div className="ml-11 space-y-4 text-slate-700">
              <p>
                Kertotaulua ei voi eikä tarvitse oppia yhdessä päivässä. 
                Tehokkain lähestymistapa on asteittainen ja säännöllinen harjoittelu:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Aloita pienillä askelilla:</strong> Aloita ensin yksinkertaisilla 
                  luvuilla kuten 1, 2, 5 ja 10
                </li>
                <li>
                  <strong>Päivittäin 10-15 minuuttia:</strong> Lyhyet ja säännölliset kertotauluharjoitukset ovat 
                  tehokkaampia kuin pitkät yksittäiset istunnot
                </li>
                <li>
                  <strong>Vahvista aiempi oppiminen:</strong> Kertaa opittu ennen uuteen 
                  lukuun siirtymistä
                </li>
                <li>
                  <strong>Harjoittele väliajoin:</strong> Lisää muistamista toistamalla 
                  viikon, kuukauden välein
                </li>
              </ul>
              <p>
                Säännöllinen kertaus helpottaa tiedon siirtymistä 
                lyhytaikaisesta muistista pitkäaikaiseen muistiin ja edistää pysyvää oppimista.
              </p>
            </div>
          </article>
          
          <article>
            <h3 className="text-slate-900 mb-4 flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                3
              </span>
              <span>Opi harjoittelemalla</span>
            </h3>
            <div className="ml-11 space-y-4 text-slate-700">
              <p>
                Teorian ymmärtäminen on tärkeää, mutta ilman harjoittelua ei tapahdu 
                pysyvää oppimista. Harjoittelun edut:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Aktiivinen muistaminen:</strong> Aktiivinen ponnistus muistaa, passiivisen 
                  lukemisen sijaan, vahvistaa aivoja
                </li>
                <li>
                  <strong>Virheiden analysointi:</strong> Tunnista heikkoutesi tutkimalla 
                  väärin ratkaistuja tehtäviä
                </li>
                <li>
                  <strong>Nopeuden kehittäminen:</strong> Säännöllisellä harjoittelulla saat sekä 
                  tarkkuutta että nopeutta
                </li>
                <li>
                  <strong>Soveltaminen eri yhteyksissä:</strong> Käytä niitä eri 
                  ympäristöissä, kuten kysymyksissä, peleissä, jokapäiväisissä ongelmissa
                </li>
              </ul>
              <p>
                Pelkällä lukemisella tai kuuntelemalla opittu tieto ilman harjoittelua 
                unohtuu nopeasti. Aktiivinen soveltaminen on oppimisen pääavain.
              </p>
            </div>
          </article>
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-primary-50 to-educational-50 border border-primary-200 rounded-lg p-8">
          <h4 className="text-xl font-semibold text-slate-900 mb-4">
            Tärkeä muistutus
          </h4>
          <p className="text-slate-700">
            Jokaisella lapsella on oma oppimistahtonsa. Kun jotkut oppivat tämän viikossa, 
            toisilla voi kestää useita kuukausia. Tärkeää on jatkuvuus, 
            kärsivällisyys ja edistyminen oikeilla menetelmillä. Noudata tukevaista 
            lähestymistapaa painostamisen sijaan.
          </p>
        </div>
      </div>
    </section>
  )
}
