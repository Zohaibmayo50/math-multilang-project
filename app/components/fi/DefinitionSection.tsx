export default function DefinitionSection() {
  return (
    <section id="definition" className="section-container bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-slate-900 mb-8 text-center">
          Mitä on kertotaulu?
        </h2>
        
        <div className="space-y-6 text-slate-700">
          <p>
            Kertotaulu on matemaattinen työkalu, joka esittää järjestelmällisesti kahden luvun 
            kertolaskun tulokset. Yleensä se sisältää lukujen 1-10 kertolaskut, mutta 
            syventävässä oppimisessa sitä voidaan laajentaa 100:aan asti.
          </p>
          
          <p>
            Esimerkiksi 3 × 4 = 12 on osa kertotaulua. 
            Tämä ilmaus tarkoittaa "luku 3 lisättynä neljä kertaa" tai "luku 4 lisättynä kolme kertaa". 
            Kertotaulu mahdollistaa tällaisten laskutoimitusten nopean ja käytännöllisen suorittamisen.
          </p>
          
          <p>
            Kertotaulu ei ole vain laskentätyökalu, vaan myös 
            koulutusjärjestelmä, joka auttaa meitä ymmärtämään lukujen välisiä 
            malleja ja suhteita. Jokaisella luvulla on oma järjestyksensä ja logiikkansa kertotaulussa.
          </p>
          
          <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-lg mt-8">
            <p className="font-medium text-slate-900">
              Perusmääritelmä:
            </p>
            <p className="mt-2">
              Kertotaulu on perustavanlaatuinen opetustyökalu, joka järjestelmällisesti 
              näyttää kertolaskutoimitusten tulokset, kehittää oppilaiden matemaattisia 
              ajattelutaitoja ja edistää matemaattista päättelyä.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
