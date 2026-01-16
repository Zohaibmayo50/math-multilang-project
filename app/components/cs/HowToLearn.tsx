export default function HowToLearn() {
  return (
    <section className="section-container bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-slate-900 mb-12 text-center">
          Jak se efektivně naučit násobilku?
        </h2>
        
        <div className="space-y-12">
          <article>
            <h3 className="text-slate-900 mb-4 flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                1
              </span>
              <span>Učte se porozuměním vzorům</span>
            </h3>
            <div className="ml-11 space-y-4 text-slate-700">
              <p>
                V násobilce existuje mnoho vzorů a řádů. Objevování 
                těchto vzorů poskytuje logické porozumění místo pouhého memorování:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Násobky 2:</strong> Jsou vždy sudá čísla (2, 4, 6, 8...)
                </li>
                <li>
                  <strong>Násobky 5:</strong> Vždy končí na 0 nebo 5 (5, 10, 15, 20...)
                </li>
                <li>
                  <strong>Násobky 9:</strong> Ciferný součet je vždy dělitelný 9 
                  (18: 1+8=9, 27: 2+7=9)
                </li>
                <li>
                  <strong>Násobky 10:</strong> Vždy končí na 0 (10, 20, 30...)
                </li>
                <li>
                  <strong>Komutativní zákon:</strong> 3 × 4 = 4 × 3 (Pořadí neovlivňuje výsledek)
                </li>
              </ul>
              <p>
                Porozumění těmto vzorům umožňuje pochopit základní logiku, 
                místo zapamatování si téměř 100 hodnot násobení.
              </p>
            </div>
          </article>
          
          <article>
            <h3 className="text-slate-900 mb-4 flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-educational-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                2
              </span>
              <span>Postupné a opakované učení</span>
            </h3>
            <div className="ml-11 space-y-4 text-slate-700">
              <p>
                Není možné ani nutné naučit se násobilku za jeden den. 
                Nejúčinnější přístup je postupné a pravidelné cvičení:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Začněte s malými kroky:</strong> Nejprve začněte s jednoduchými 
                  čísly jako 1, 2, 5 a 10
                </li>
                <li>
                  <strong>Denně 10-15 minut:</strong> Krátké a pravidelné cvičení násobilky je 
                  účinnější než dlouhé jednorázové sezení
                </li>
                <li>
                  <strong>Upevněte předchozí znalosti:</strong> Opakujte naučené před přechodem na 
                  nové číslo
                </li>
                <li>
                  <strong>Cvičte s intervaly:</strong> Zvyšte zapamatování opakováním 
                  po týdnu, měsíci
                </li>
              </ul>
              <p>
                Pravidelné opakování usnadňuje přechod informací z 
                krátkodobé paměti do dlouhodobé paměti a podporuje trvalé učení.
              </p>
            </div>
          </article>
          
          <article>
            <h3 className="text-slate-900 mb-4 flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                3
              </span>
              <span>Učte se cvičením</span>
            </h3>
            <div className="ml-11 space-y-4 text-slate-700">
              <p>
                Porozumění teorii je důležité, ale bez cvičení nedochází k 
                trvalému učení. Výhody cvičení:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Aktivní vybavování:</strong> Aktivní snaha vzpomenout si, místo 
                  pasivního čtení, posiluje mozek
                </li>
                <li>
                  <strong>Analýza chyb:</strong> Identifikujte své slabé stránky zkoumáním 
                  nesprávně vyřešených úkolů
                </li>
                <li>
                  <strong>Rozvoj rychlosti:</strong> S pravidelným cvičením získáte jak 
                  přesnost, tak rychlost
                </li>
                <li>
                  <strong>Aplikace v různých kontextech:</strong> Používejte je v různých 
                  prostředích jako otázky, hry, každodenní problémy
                </li>
              </ul>
              <p>
                Pouze čtením nebo poslechem naučené informace bez cvičení jsou 
                rychle zapomenuty. Aktivní aplikace je základním klíčem k učení.
              </p>
            </div>
          </article>
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-primary-50 to-educational-50 border border-primary-200 rounded-lg p-8">
          <h4 className="text-xl font-semibold text-slate-900 mb-4">
            Důležité upozornění
          </h4>
          <p className="text-slate-700">
            Každé dítě má jiné tempo učení. Zatímco někteří se to naučí za týden, 
            jiní mohou potřebovat několik měsíců. Důležitá je kontinuita, 
            trpělivost a pokrok se správnými metodami. Sledujte podpůrný 
            přístup místo vykonávání tlaku.
          </p>
        </div>
      </div>
    </section>
  )
}
