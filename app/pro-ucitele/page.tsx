import type { Metadata } from 'next';
import Header from '../components/cs/Header';
import Footer from '@/app/components/cs/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Průvodce Násobilkou Pro Učitele | Strategie Výuky',
  description: 'Komplexní zdroje pro učitele pro efektivní výuku násobilky. Obsahuje pedagogické strategie, aktivity ve třídě, diferencované výukové metody a metody hodnocení.',
  keywords: 'výuka násobilky, pedagogické strategie, matematické aktivity, diferencovaná výuka, zdroje pro učitele',
  alternates: {
    canonical: '/pro-ucitele',
    languages: {
      'cs': '/pro-ucitele',
    },
  },
  openGraph: {
    title: 'Průvodce Násobilkou Pro Učitele',
    description: 'Komplexní zdroje pro učitele pro efektivní výuku násobilky.',
    url: 'https://multilang-math.com/pro-ucitele',
    siteName: 'Násobilka',
    locale: 'cs_CZ',
    type: 'website',
  },
};

export default function ProUcitelePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Průvodce Násobilkou Pro Učitele
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Efektivní strategie, aktivity ve třídě a zdroje pro výuku 
              násobilky, aby ji všichni studenti zvládli.
            </p>
          </div>
        </div>
      </section>

      {/* Teaching Strategies Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Efektivní Strategie Výuky
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Strategy 1 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">👁️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Vizualizace</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Používejte vizuální reprezentace, abyste pomohli studentům 
                pochopit násobení jako opakované skupiny.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Obdélníková pole (např.: 3×4 jako 3 řady po 4 objektech)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Plošné modely s čtverečkovaným papírem</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Skokové diagramy na číselné ose</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Konkrétní manipulativy (kostky, žetony, kostky)</span>
                </li>
              </ul>
            </div>

            {/* Strategy 2 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🧩</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Dekompozice</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Naučte studenty rozložit těžká násobení 
                na jednodušší operace.
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
                  <span>Použití zdvojení: 6×4 = 2×(3×4)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Distributivní vlastnost v akci</span>
                </li>
              </ul>
            </div>

            {/* Strategy 3 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🔢</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Vzory</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Pomozte studentům objevit a využít vzory pro 
                usnadnění učení a zapamatování.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Řada 2: všechna sudá čísla</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Řada 5: končí na 0 nebo 5</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Řada 9: ciferný součet = 9, klesající vzor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Komutativní vlastnost: 3×7 = 7×3</span>
                </li>
              </ul>
            </div>

            {/* Strategy 4 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Reálné Aplikace</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Propojte násobení s každodenními situacemi, abyste 
                dali učení význam a kontext.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Nákupní a peněžní problémy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Uspořádání objektů do řad a sloupců</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Kuchařské recepty a měření</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Sport, hry a skupinové aktivity</span>
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
            Aktivity Pro Třídu
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Activity 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🎯</span>
                Násobilkové Bingo
              </h3>
              <p className="text-gray-700 mb-3">
                Studenti vytvoří bingo karty s produkty. 
                Volejte násobení a studenti označují odpovědi.
              </p>
              <div className="bg-blue-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Úroveň:</strong> Začátečník až Pokročilý<br/>
                <strong>Čas:</strong> 15-20 minut
              </div>
            </div>

            {/* Activity 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🏃</span>
                Násobilkový Závod
              </h3>
              <p className="text-gray-700 mb-3">
                Týmy soutěží proti sobě řešením násobilkových úkolů 
                v štafetovém formátu na tabuli.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Úroveň:</strong> Všechny úrovně<br/>
                <strong>Čas:</strong> 10-15 minut
              </div>
            </div>

            {/* Activity 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🎲</span>
                Násobilkové Domino
              </h3>
              <p className="text-gray-700 mb-3">
                Upravené domino kameny, kde studenti 
                spojují násobení s jejich produkty.
              </p>
              <div className="bg-purple-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Úroveň:</strong> Pokročilý<br/>
                <strong>Čas:</strong> 20-30 minut
              </div>
            </div>

            {/* Activity 4 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🎨</span>
                Umění s Poli
              </h3>
              <p className="text-gray-700 mb-3">
                Studenti vytvářejí umělecké návrhy s obdélníkovými poli 
                a označují odpovídající násobení.
              </p>
              <div className="bg-pink-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Úroveň:</strong> Začátečník<br/>
                <strong>Čas:</strong> 30-40 minut
              </div>
            </div>

            {/* Activity 5 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🎪</span>
                Cvičební Stanice
              </h3>
              <p className="text-gray-700 mb-3">
                Zřiďte rotující stanice s různými aktivitami: 
                kartičky, digitální hry, písemné úkoly, manipulativy.
              </p>
              <div className="bg-orange-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Úroveň:</strong> Všechny úrovně<br/>
                <strong>Čas:</strong> 40-50 minut
              </div>
            </div>

            {/* Activity 6 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">📖</span>
                Násobilkové Příběhy
              </h3>
              <p className="text-gray-700 mb-3">
                Studenti píší a ilustrují násobilkové úlohy 
                založené na reálných nebo imaginárních situacích.
              </p>
              <div className="bg-yellow-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Úroveň:</strong> Pokročilý až Expert<br/>
                <strong>Čas:</strong> 30-45 minut
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiated Instruction Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Diferencovaná Výuka
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Beginning Learners */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-2">🌱</span>
                Začátečníci
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Začít s řadami 1, 2, 5 a 10</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Používat mnoho konkrétních manipulativů</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Nejprve zdůraznit opakované sčítání</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Poskytnout referenční tabulky</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Krátké denní cvičení (5-10 minut)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Slavit malé úspěchy</span>
                </li>
              </ul>
            </div>

            {/* Intermediate Learners */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-2">📚</span>
                Pokročilí Studenti
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Zavést řady 3, 4, 6 a 7</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Učit strategie dekompozice</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Cvičit komutativní vlastnost</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Rychlostní hry s mírným tempem</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Kontextové aplikační problémy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Partnerská a malá skupinová práce</span>
                </li>
              </ul>
            </div>

            {/* Advanced Learners */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-2">🚀</span>
                Expertní Studenti
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Řady 8, 9, 11 a 12</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Vícekrokové problémy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Propojení s dělením a zlomky</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Matematické logické výzvy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Vytvářet vlastní problémy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Učit spolužáky</span>
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
            Strategie Hodnocení
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Formative Assessment */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">📊</span>
                Formativní Hodnocení
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Denní Pozorování</h4>
                  <p className="text-gray-700">
                    Pozorujte studenty během cvičení, dělejte si poznámky o 
                    použitých strategiích a častých chybách.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Krátké Mini-Testy</h4>
                  <p className="text-gray-700">
                    1-2 minuty na začátku výuky: 10 úkolů pro hodnocení 
                    plynulosti a zapamatování.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Individuální Tabule</h4>
                  <p className="text-gray-700">
                    Studenti zobrazují odpovědi současně, což umožňuje rychlou 
                    kontrolu celé třídy.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Matematické Rozhovory</h4>
                  <p className="text-gray-700">
                    Krátké individuální rozhovory pro pochopení myšlení 
                    a strategií studentů.
                  </p>
                </div>
              </div>
            </div>

            {/* Summative Assessment */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">📝</span>
                Sumativní Hodnocení
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Testy Plynulosti</h4>
                  <p className="text-gray-700">
                    Časově omezené testy pro měření rychlosti a přesnosti 
                    u konkrétních násobilkových řad.
                  </p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Aplikované Projekty</h4>
                  <p className="text-gray-700">
                    Studenti řeší reálné problémy, které 
                    vyžadují násobení v různých kontextech.
                  </p>
                </div>
                <div className="border-l-4 border-pink-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Portfolia</h4>
                  <p className="text-gray-700">
                    Sbírka prací v průběhu času, která ukazuje pokrok 
                    a rostoucí zvládnutí.
                  </p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Sebehodnocení</h4>
                  <p className="text-gray-700">
                    Studenti sledují svůj vlastní pokrok, identifikují zvládnuté řady 
                    a stanovují cíle.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Tracking */}
          <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-3xl mr-3">📈</span>
              Sledování Pokroku
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/20 rounded-lg p-4">
                <h4 className="font-bold mb-2">Grafy Zvládnutí</h4>
                <p className="text-sm">
                  Studenti vybarvují zvládnuté řady ve vizuálním 
                  12×12 mřížce, aby viděli svůj pokrok.
                </p>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <h4 className="font-bold mb-2">Sledování Času</h4>
                <p className="text-sm">
                  Sledujte zlepšení rychlosti pomocí grafů, které 
                  zobrazují klesající časy.
                </p>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <h4 className="font-bold mb-2">Úspěšné Odznaky</h4>
                <p className="text-sm">
                  Odměňovací systém za zvládnutí každé řady, který 
                  motivuje kontinuální pokrok.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Misconceptions Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Časté Mylné Představy
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <p className="text-gray-700 mb-6 text-lg">
              Rozpoznejte a řešte tyto časté nepochopení, abyste zajistili 
              solidní porozumění násobení:
            </p>

            <div className="space-y-6">
              {/* Misconception 1 */}
              <div className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-2">❌</span>
                  "Násobení vždy dělá čísla větší"
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Proč je to problematické:</strong> Studenti budou zmatení, 
                  když násobí zlomky nebo desetinná čísla.
                </p>
                <p className="text-gray-700">
                  <strong className="text-green-700">Jak to opravit:</strong> Ukažte 
                  příklady jako 5 × 0,5 = 2,5 nebo 3 × 0 = 0. Vysvětlete, že násobení 
                  čísly menšími než 1 výsledek zmenšuje.
                </p>
              </div>

              {/* Misconception 2 */}
              <div className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-2">❌</span>
                  "Pořadí v slovních úlohách nezáleží"
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Proč je to problematické:</strong> Ačkoli 3×4 = 4×3, 
                  kontextový význam může být odlišný (3 skupiny po 4 vs. 4 skupiny po 3).
                </p>
                <p className="text-gray-700">
                  <strong className="text-green-700">Jak to opravit:</strong> Diskutujte o 
                  komutativní vlastnosti, ale zdůrazněte důležitost 
                  pochopení kontextu problému.
                </p>
              </div>

              {/* Misconception 3 */}
              <div className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-2">❌</span>
                  "Násobení je jen učení nazpaměť"
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Proč je to problematické:</strong> Studenti mohou 
                  učit se nazpaměť bez pochopení, což ztěžuje aplikaci a zapamatování.
                </p>
                <p className="text-gray-700">
                  <strong className="text-green-700">Jak to opravit:</strong> Vždy 
                  učte koncepty před učením nazpaměť. Používejte vizuální modely 
                  a strategie porozumění.
                </p>
              </div>

              {/* Misconception 4 */}
              <div className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-2">❌</span>
                  "Vzory vždy fungují bez jejich pochopení"
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Proč je to problematické:</strong> Studenti aplikují 
                  vzory mechanicky bez pochopení matematického "proč".
                </p>
                <p className="text-gray-700">
                  <strong className="text-green-700">Jak to opravit:</strong> Při učení 
                  vzorů (např. řada 9) vždy vysvětlete, proč fungují, 
                  pomocí matematických vlastností.
                </p>
              </div>

              {/* Misconception 5 */}
              <div className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-2">❌</span>
                  "Existuje pouze jeden správný způsob řešení"
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Proč je to problematické:</strong> Omezuje kreativní myšlení 
                  a numerickou flexibilitu.
                </p>
                <p className="text-gray-700">
                  <strong className="text-green-700">Jak to opravit:</strong> Slavte 
                  více strategií. Požádejte studenty, aby sdíleli různé 
                  metody a diskutujte, kdy je která nejužitečnější.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips and Best Practices Section */}
      <section className="py-12 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Tipy a Osvědčené Postupy
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">💡</span>
                Tipy Pro Úspěch
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✦</span>
                  <span>Krátké denní cvičení je lepší než dlouhé sporadické lekce</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✦</span>
                  <span>Slavte pokrok, nejen dokonalost</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✦</span>
                  <span>Obměňujte metody cvičení pro udržení zájmu</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✦</span>
                  <span>Propojte s jinými oblastmi: umění, hudba, sport</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✦</span>
                  <span>Zapojte rodiny s domácími aktivitami</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✦</span>
                  <span>Využijte technologie jako doplněk, ne náhradu</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">🎯</span>
                Doporučené Pořadí
              </h3>
              <div className="space-y-3">
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1</span>
                  <span className="text-gray-700">Řady 1, 2, 10, 5</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2</span>
                  <span className="text-gray-700">Komutativní vlastnost (snižuje zátěž)</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">3</span>
                  <span className="text-gray-700">Řada 4 (zdvojit 2)</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">4</span>
                  <span className="text-gray-700">Řada 9 (speciální vzory)</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">5</span>
                  <span className="text-gray-700">Řady 3 a 6 (trojitý vztah)</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">6</span>
                  <span className="text-gray-700">Řady 7 a 8 (náročnější)</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">7</span>
                  <span className="text-gray-700">Řady 11 a 12 (expertní vzory)</span>
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
            Další Zdroje
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Link 
              href="/cs/nasobilka/1-10" 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-4xl mb-3">📘</div>
              <h3 className="font-bold text-gray-900 mb-2">Řady 1-10</h3>
              <p className="text-sm text-gray-600">Základní zdroje</p>
            </Link>

            <Link 
              href="/cs/nasobilka/11-20" 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-4xl mb-3">📗</div>
              <h3 className="font-bold text-gray-900 mb-2">Řady 11-20</h3>
              <p className="text-sm text-gray-600">Střední úroveň</p>
            </Link>

            <Link 
              href="/pro-studenty" 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-4xl mb-3">👨‍🎓</div>
              <h3 className="font-bold text-gray-900 mb-2">Pro Studenty</h3>
              <p className="text-sm text-gray-600">Průvodce učením</p>
            </Link>

            <Link 
              href="/pro-rodice" 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-4xl mb-3">👨‍👩‍👧</div>
              <h3 className="font-bold text-gray-900 mb-2">Pro Rodiče</h3>
              <p className="text-sm text-gray-600">Podpora doma</p>
            </Link>
          </div>

          <div className="mt-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl shadow-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Potřebujete Další Pomoc?
            </h3>
            <p className="text-lg mb-6">
              Prozkoumejte naše jednotlivé řady pro specifické zdroje, 
              ke stažení cvičení a interaktivní aktivity.
            </p>
            <Link 
              href="/cs/nasobilka"
              className="inline-block bg-white text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
            >
              Zobrazit Všechny Řady
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
