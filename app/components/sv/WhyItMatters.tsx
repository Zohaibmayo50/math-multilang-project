export default function WhyItMatters() {
  return (
    <section className="section-container bg-gradient-to-br from-educational-50 to-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-slate-900 mb-12 text-center">
          Varför lära sig multiplikationstabeller?
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
                Huvudräkningsfärdighet
              </h3>
            </div>
            <p className="text-slate-700">
              Elever som behärskar multiplikationstabellen kan i vardagen och 
              skolmatematiken utföra beräkningar i huvudet utan papper och penna. 
              Denna färdighet ökar problemlösningens hastighet och självförtroende.
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
                Snabbhet och noggrannhet
              </h3>
            </div>
            <p className="text-slate-700">
              Att förstå multiplikationstabellen istället för bara memorering möjliggör 
              att utföra beräkningar både snabbt och korrekt. Denna färdighet är 
              särskilt viktig i prov och tidskritiska situationer.
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
                Grund för högre matematik
              </h3>
            </div>
            <p className="text-slate-700">
              All division, bråk, algebraiska uttryck och 
              mer komplexa matematiska begrepp är baserade på behärskning av multiplikationstabellen. 
              En stark grund garanterar framgång på mer avancerade nivåer.
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
                Självförtroende och motivation i matematik
              </h3>
            </div>
            <p className="text-slate-700">
              Elever som behärskar multiplikationstabellen utvecklar 
              en positiv attityd till matematik. Detta självförtroende påverkar 
              direkt den allmänna matematikframgången och inlärningsviljan.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
