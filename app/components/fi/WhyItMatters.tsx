export default function WhyItMatters() {
  return (
    <section className="section-container bg-gradient-to-br from-educational-50 to-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-slate-900 mb-12 text-center">
          Miksi oppia kertotauluja?
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2">
          <article className="card">
            <div className="mb-4">
              <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Päässälaskutaito
              </h3>
            </div>
            <p className="text-slate-700">
              Oppilaat, jotka hallitsevat kertotaulun, voivat jokapäiväisessä elämässä ja 
              koulumatematiikassa suorittaa laskutoimituksia päässä ilman paperia ja kynää. 
              Tämä taito lisää ongelmien ratkaisun nopeutta ja luottamusta.
            </p>
          </article>
          
          <article className="card">
            <div className="mb-4">
              <div className="w-12 h-12 bg-educational-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Nopeus ja tarkkuus
              </h3>
            </div>
            <p className="text-slate-700">
              Kertotaulun ymmärtäminen pelkän ulkoa oppimisen sijaan mahdollistaa 
              laskutoimitusten suorittamisen sekä nopeasti että oikein. Tämä taito on 
              erityisen tärkeä kokeissa ja aikakritiisissä tilanteissa.
            </p>
          </article>
          
          <article className="card">
            <div className="mb-4">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Perusta korkeammalle matematiikalle
              </h3>
            </div>
            <p className="text-slate-700">
              Kaikki jakolaskut, murtoluvut, algebralliset lausekkeet ja 
              monimutkaisemmat matemaattiset käsitteet perustuvat kertotaulun 
              hallintaan. Vahva perusta takaa menestyksen edistyneemmillä tasoilla.
            </p>
          </article>
          
          <article className="card">
            <div className="mb-4">
              <div className="w-12 h-12 bg-educational-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Itseluottamus ja motivaatio matematiikassa
              </h3>
            </div>
            <p className="text-slate-700">
              Oppilaat, jotka hallitsevat kertotaulun, kehittävät 
              positiivisen asenteen matematiikkaa kohtaan. Tämä itseluottamus vaikuttaa 
              suoraan yleiseen matematiikan menestykseen ja oppimishaluun.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
