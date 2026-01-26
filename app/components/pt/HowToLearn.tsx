export default function HowToLearn() {
  return (
    <section className="section-container bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-slate-900 mb-12 text-center">
          Hur lär man sig Tabuadaer effektivt?
        </h2>
        
        <div className="space-y-12">
          <article>
            <h3 className="text-slate-900 mb-4 flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                1
              </span>
              <span>Lär dig genom mönsterförståelse</span>
            </h3>
            <div className="ml-11 space-y-4 text-slate-700">
              <p>
                Tabuadaen har många mönster och ordningar. Att hitta dessa mönster 
                ger en logisk förståelse istället för bara utantillinlärning:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Multiplar av 2:</strong> Alltid jämna tal (2, 4, 6, 8...)
                </li>
                <li>
                  <strong>Multiplar av 5:</strong> Slutar alltid med 0 eller 5 (5, 10, 15, 20...)
                </li>
                <li>
                  <strong>Multiplar av 9:</strong> Siffersumman är alltid delbar med 9 
                  (18: 1+8=9, 27: 2+7=9)
                </li>
                <li>
                  <strong>Multiplar av 10:</strong> Slutar alltid med 0 (10, 20, 30...)
                </li>
                <li>
                  <strong>Kommutativa lagen:</strong> 3 × 4 = 4 × 3 (Ordningen påverkar inte resultatet)
                </li>
              </ul>
              <p>
                Att förstå dessa mönster gör det möjligt att lära sig grundlogiken, 
                istället för att memorera nästan 100 multiplikationsresultat.
              </p>
            </div>
          </article>
          
          <article>
            <h3 className="text-slate-900 mb-4 flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-educational-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                2
              </span>
              <span>Gradvis och upprepad inlärning</span>
            </h3>
            <div className="ml-11 space-y-4 text-slate-700">
              <p>
                Tabuadaen kan inte och behöver inte läras på en dag. 
                Den mest effektiva metoden är gradvis och regelbunden övning:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Börja med små steg:</strong> Börja först med enkla 
                  tal som 1, 2, 5 och 10
                </li>
                <li>
                  <strong>Dagligen 10-15 minuter:</strong> Korta och regelbundna Tabuadasövningar är 
                  mer effektiva än långa enstaka sessioner
                </li>
                <li>
                  <strong>Stärk tidigare inlärning:</strong> Repetera det inlärda innan du går vidare till ett nytt 
                  tal
                </li>
                <li>
                  <strong>Öva med mellanrum:</strong> Öka minnesförmågan genom att upprepa 
                  med en veckas, månads mellanrum
                </li>
              </ul>
              <p>
                Regelbunden repetition underlättar överföringen av information från 
                korttidsminne till långtidsminne och främjar bestående inlärning.
              </p>
            </div>
          </article>
          
          <article>
            <h3 className="text-slate-900 mb-4 flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                3
              </span>
              <span>Lär dig genom praktik</span>
            </h3>
            <div className="ml-11 space-y-4 text-slate-700">
              <p>
                Att förstå teorin är viktigt, men utan övning sker ingen 
                bestående inlärning. Fördelarna med övning:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Aktivt minne:</strong> Aktivt arbete för att komma ihåg, istället för passiv 
                  läsning, stärker hjärnan
                </li>
                <li>
                  <strong>Felanalys:</strong> Identifiera dina svagheter genom att undersöka 
                  felaktigt lösta uppgifter
                </li>
                <li>
                  <strong>Hastighetsutveckling:</strong> Med regelbunden övning får du både 
                  noggrannhet och hastighet
                </li>
                <li>
                  <strong>Tillämpning i olika sammanhang:</strong> Använd dem i olika 
                  miljöer, som frågor, spel, vardagsproblem
                </li>
              </ul>
              <p>
                Information som endast lärs genom läsning eller lyssning utan övning 
                glöms snabbt. Aktiv tillämpning är inlärningens huvudnyckel.
              </p>
            </div>
          </article>
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-primary-50 to-educational-50 border border-primary-200 rounded-lg p-8">
          <h4 className="text-xl font-semibold text-slate-900 mb-4">
            Viktig påminnelse
          </h4>
          <p className="text-slate-700">
            Varje barn har sin egen inlärningstakt. När vissa lär sig detta på en vecka, 
            kan det ta flera månader för andra. Det viktiga är kontinuitet, 
            tålamod och framsteg med rätta metoder. Följ en stödjande 
            metod istället för press.
          </p>
        </div>
      </div>
    </section>
  )
}



