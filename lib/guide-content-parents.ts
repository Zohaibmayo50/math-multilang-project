import type { Locale } from './i18n-config'

// Data for the "parents" guide-page type (12 locales), extracted verbatim from the
// original app/_guide-components/{slug}/page.tsx files.
//
// STRUCTURE: 8 locales (es, de, cs, uk, fi, pt, en, pl) share one "baseline" shape with
// 5 content sections + CTA. tr/sv add two extra sections (Weekly Plan + Progress Tracking)
// and reorder Motivation to appear before Fun Activities in the original markup. id adds
// Weekly Plan (different, block-based shape) + a unique "When to Seek Help" section, plus
// larger card counts in several sections. fr is a special case (see flag below).
//
// This component renders sections in ONE canonical order for all locales — regardless of
// where a given locale originally placed a section — so the migration is a deliberate
// normalization of section ORDER for tr/sv/id (all original content is preserved and
// rendered, just not necessarily in the original page's sequence). Optional sections
// (weeklyPlan / progressTracking / whenToSeekHelp) are rendered only when present for a
// locale and are never fabricated for locales that lack them.
//
// DATA QUALITY / DESIGN FLAG (pour-les-parents / fr): this source file is a genuine outlier
// on THREE axes simultaneously, none of which are just prose differences:
//   1. Color scheme: fr uses orange-500/amber-600 (hero) and orange-50/amber-50 (page bg),
//      NOT the purple-600/pink-600 + purple-50/pink-50 every other parents locale uses.
//      Per the confirmed product decision, colorConfig is fixed per TYPE (not per locale),
//      so this migration renders fr with the same purple/pink scheme as all other locales —
//      a visible, deliberate departure from the original fr page's colors.
//   2. "Common Challenges" uses static always-visible colored boxes in the original, NOT the
//      <details>/<summary> accordion every other parents locale uses. This migration
//      normalizes fr's challenges into the same accordion UI as all other locales.
//   3. fr's CTA second button links back to the TOPIC HOME ("Retour à l'Accueil"), not to
//      the students guide like every other locale's CTA — captured via
//      `ctaButton2Target: 'topicHome'` below instead of the usual 'students' cross-link.
// See the final report for full detail; none of this was silently papered over.

export interface ParentBlock {
  emoji?: string
  title: string
  body?: string
  boxLabel?: string
  bullets?: string[]
  subgroups?: { title: string; items: string[] }[]
  subcards?: { title: string; body: string }[]
  meta?: string
  linkLabel?: string
}

export interface ChallengeItem {
  question: string
  solutionLabel: string
  paragraphs?: string[]
  bullets?: string[]
  /** id-only: extra italic closing tip line inside the accordion body. */
  tip?: string
}

export interface WeeklyPlanTableRow {
  day: string
  activity: string
  duration: string
}

export interface WeeklyPlan {
  heading: string
  note?: string
  format: 'table' | 'blocks'
  tableRows?: WeeklyPlanTableRow[]
  blocks?: { title: string; body: string }[]
}

export interface ProgressTrackingItem {
  title: string
  body: string
  tip?: string
}

export interface ProgressTracking {
  heading: string
  intro?: string
  items: ProgressTrackingItem[]
}

export interface WhenToSeekHelpSign {
  icon: string
  title: string
  body: string
}

export interface WhenToSeekHelp {
  heading: string
  intro: string
  signsColumn1: WhenToSeekHelpSign[]
  signsColumn2: WhenToSeekHelpSign[]
  resourceLabel: string
  resourceBody: string
}

export interface ParentsContent {
  heroTitle: string
  heroSubtitle: string
  heroCaption: string

  whyItMattersHeading: string
  whyItMattersIntro: string
  whyItMattersCards: ParentBlock[]

  supportHeading: string
  supportStrategies: ParentBlock[]

  funActivitiesHeading: string
  funActivitiesIntro?: string
  funActivitiesCards: ParentBlock[]

  challengesHeading: string
  challengesIntro?: string
  challenges: ChallengeItem[]

  motivationHeading: string
  motivationDoHeading: string
  motivationDoItems: string[]
  motivationAvoidHeading: string
  motivationAvoidItems: string[]

  weeklyPlan?: WeeklyPlan
  progressTracking?: ProgressTracking
  whenToSeekHelp?: WhenToSeekHelp

  ctaHeading: string
  ctaBody: string
  ctaButton1Label: string
  ctaButton2Label: string
  /** fr is the only locale whose 2nd CTA button targets topic-home instead of the students guide. */
  ctaButton2Target: 'students' | 'topicHome'
  ctaTipLabel?: string
  ctaTipBody?: string
}

export const parentsContent: Record<Locale, ParentsContent> = {
  es: {
    heroTitle: 'Guía de Tablas de Multiplicar para Padres',
    heroSubtitle:
      '¿Cómo apoyar a tu hijo en el aprendizaje de las tablas de multiplicar? Esta guía contiene estrategias efectivas y consejos prácticos.',
    heroCaption: 'Tu guía para el éxito de tu hijo',

    whyItMattersHeading: '¿Por Qué es Importante?',
    whyItMattersIntro:
      'Las tablas de multiplicar son uno de los pasos más importantes en el viaje matemático de tu hijo. No solo para matemáticas, sino que también tienen una importancia crítica para el desarrollo de la resolución de problemas, el pensamiento lógico y la confianza en sí mismo.',
    whyItMattersCards: [
      { title: 'Base para Matemáticas Avanzadas', body: 'División, fracciones, álgebra - todos dependen de las tablas de multiplicar.' },
      { title: 'Confianza Académica', body: 'El éxito en las tablas de multiplicar aumenta la confianza general en la escuela.' },
      { title: 'Habilidades para la Vida', body: 'Cálculos rápidos son útiles al hacer compras, cocinar y en la vida diaria.' },
    ],

    supportHeading: 'Estrategias de Apoyo en Casa',
    supportStrategies: [
      {
        emoji: '🎯',
        title: 'Hazlo Concreto',
        body: 'Enseña las tablas de multiplicar con situaciones de la vida real en lugar de números abstractos.',
        bullets: [
          '"Si tienes 3 cajas y 4 manzanas en cada caja, ¿cuántas manzanas en total?"',
          '"Una caja de huevos tiene 6 huevos. ¿Cuántos huevos en 4 cajas?"',
          'Usa objetos físicos (botones, dulces, juguetes) para visualizar',
        ],
      },
      {
        emoji: '⏰',
        title: 'Práctica Corta pero Regular',
        body: 'Es más efectivo practicar 10-15 minutos cada día que 1 hora una vez a la semana.',
        bullets: [
          'Durante el desayuno - 5 preguntas rápidas',
          'En el camino a la escuela - contar de 2 en 2, de 5 en 5',
          'Antes de dormir - repaso de 5 minutos',
          'Los fines de semana - juegos de multiplicación',
        ],
      },
      {
        emoji: '🎮',
        title: 'Aprendizaje Basado en Juegos',
        body: 'Convertir el aprendizaje en juego aumenta tanto la motivación como el recuerdo.',
        bullets: [
          'Usa los juegos de este sitio web',
          'Juega juegos de cartas de multiplicación',
          'Organiza competencias familiares',
          'Ofrece pequeñas recompensas por los logros',
        ],
      },
    ],

    funActivitiesHeading: 'Actividades Divertidas en Casa',
    funActivitiesCards: [
      {
        emoji: '🃏',
        title: 'Juegos de Cartas',
        subcards: [
          { title: 'Guerra de Multiplicación', body: 'Saca dos cartas y multiplícalas. ¡La respuesta correcta gana puntos!' },
          { title: 'Memoria de Multiplicación', body: 'Combina las cartas de preguntas con las respuestas - ¡como el juego de memoria!' },
        ],
      },
      {
        emoji: '🍳',
        title: 'Matemáticas en la Cocina',
        body: 'Usa las tablas de multiplicar al cocinar:',
        bullets: [
          '"Si necesitamos 2 huevos por panqueque y haremos 4 panqueques, ¿cuántos huevos necesitamos?"',
          '"Si la receta es para 3 personas y somos 6, ¿cuánto necesitamos?"',
          'Contar cucharadas, medir ingredientes',
        ],
      },
      {
        emoji: '🛒',
        title: 'Práctica de Multiplicación en el Supermercado',
        bullets: [
          '"3 yogures cuestan $2 cada uno, ¿cuánto en total?"',
          '"Una bolsa de manzanas contiene 6 manzanas. Si compramos 4 bolsas, ¿cuántas manzanas?"',
          'Comparar precios, calcular ahorros',
        ],
      },
      {
        emoji: '🎨',
        title: 'Actividades Creativas',
        bullets: [
          'Crear carteles de tablas de multiplicar',
          'Escribir canciones o rimas de multiplicación',
          'Tirar dados y multiplicar los resultados',
          'Crear historias con problemas de multiplicación',
        ],
      },
    ],

    challengesHeading: 'Desafíos Comunes y Soluciones',
    challenges: [
      {
        question: 'Mi hijo tiene miedo/evita las tablas de multiplicar',
        solutionLabel: 'Solución:',
        paragraphs: [
          'Empieza con tablas fáciles (1, 2, 5, 10) para construir confianza. Enfócate en el progreso, no en la perfección. Celebra cada pequeño logro.',
          'Evita presionar o crear ansiedad. Aprende debe ser divertido, no estresante.',
        ],
      },
      {
        question: 'Memoriza pero no entiende el concepto',
        solutionLabel: 'Solución:',
        paragraphs: [
          'Usa objetos concretos y modelos visuales. Muestra que 3×4 significa "3 grupos de 4" o "4+4+4".',
          'Usa arreglos de objetos, dibujos, manipulativos. La comprensión conceptual es más importante que la memorización mecánica.',
        ],
      },
      {
        question: 'Confunde las tablas entre sí',
        solutionLabel: 'Solución:',
        paragraphs: [
          'Enfócate en una tabla a la vez. Practica bien una tabla antes de pasar a la siguiente.',
          'Usa códigos de colores o asociaciones visuales para diferentes tablas. Practica la diferenciación: "¿Es 3×4 o 4×3?"',
        ],
      },
      {
        question: 'Olvida lo que aprendió antes',
        solutionLabel: 'Solución:',
        paragraphs: [
          'Repaso regular es clave. Practica las tablas aprendidas anteriormente junto con las nuevas.',
          'Crea un programa de repaso: cada semana incluye tablas antiguas. Usa juegos para hacer que el repaso sea divertido.',
        ],
      },
    ],

    motivationHeading: 'Cómo Mantener la Motivación',
    motivationDoHeading: '✅ Hacer',
    motivationDoItems: [
      'Elogiar el esfuerzo, no solo la respuesta correcta',
      'Celebrar el progreso con pequeñas recompensas',
      'Hacer que el aprendizaje sea un juego',
      'Establecer metas alcanzables',
      'Crear un ambiente de apoyo y sin presión',
    ],
    motivationAvoidHeading: '❌ Evitar',
    motivationAvoidItems: [
      'Comparar con hermanos u otros niños',
      'Crear presión o ansiedad sobre los errores',
      'Sesiones de práctica largas y aburridas',
      'Usar lenguaje negativo ("Esto es fácil, ¿por qué no puedes?")',
      'Esperar perfección inmediata',
    ],

    ctaHeading: 'Comienza el Viaje de las Tablas de Multiplicar con Tu Hijo Hoy',
    ctaBody:
      'Recuerda, cada niño aprende a su propio ritmo. Con tu apoyo y las estrategias correctas, tu hijo dominará las tablas de multiplicar. ¡Paciencia, práctica y positividad!',
    ctaButton1Label: 'Explorar Tablas de Multiplicar',
    ctaButton2Label: 'Ver Guía para Estudiantes',
    ctaButton2Target: 'students',
    ctaTipLabel: 'Consejo de Oro:',
    ctaTipBody: 'Tu actitud positiva hacia las matemáticas influye en la actitud de tu hijo. ¡Muestra entusiasmo y tu hijo también se entusiasmará!',
  },

  de: {
    heroTitle: 'Einmaleins-Leitfaden für Eltern',
    heroSubtitle: 'Wie unterstützen Sie Ihr Kind beim Lernen des Einmaleins? Dieser Leitfaden enthält effektive Strategien und praktische Tipps.',
    heroCaption: 'Ihr Leitfaden für den Erfolg Ihres Kindes',

    whyItMattersHeading: 'Warum ist es wichtig?',
    whyItMattersIntro:
      'Das Einmaleins ist einer der wichtigsten Schritte in der mathematischen Entwicklung Ihres Kindes. Nicht nur für die Mathematik, sondern auch für die Entwicklung von Problemlösungsfähigkeiten, logischem Denken und Selbstvertrauen ist es von entscheidender Bedeutung.',
    whyItMattersCards: [
      { title: 'Grundlage für höhere Mathematik', body: 'Division, Brüche, Algebra - alle basieren auf dem Einmaleins.' },
      { title: 'Schulisches Selbstvertrauen', body: 'Erfolg beim Einmaleins stärkt das allgemeine Vertrauen in der Schule.' },
      { title: 'Fähigkeiten fürs Leben', body: 'Schnelles Rechnen ist beim Einkaufen, Kochen und im Alltag nützlich.' },
    ],

    supportHeading: 'Unterstützungsstrategien zu Hause',
    supportStrategies: [
      {
        emoji: '🎯',
        title: 'Machen Sie es konkret',
        body: 'Vermitteln Sie das Einmaleins mit realen Situationen statt abstrakten Zahlen.',
        bullets: [
          '"Wenn du 3 Schachteln hast und in jeder Schachtel 4 Äpfel sind, wie viele Äpfel sind das insgesamt?"',
          '"Eine Eierschachtel hat 6 Eier. Wie viele Eier sind in 4 Schachteln?"',
          'Verwenden Sie physische Gegenstände (Knöpfe, Süßigkeiten, Spielzeug) zum Visualisieren',
        ],
      },
      {
        emoji: '⏰',
        title: 'Kurze, aber regelmäßige Übung',
        body: 'Es ist effektiver, jeden Tag 10-15 Minuten zu üben als einmal pro Woche 1 Stunde.',
        bullets: [
          'Beim Frühstück - 5 schnelle Fragen',
          'Auf dem Weg zur Schule - in 2er-, 5er-Schritten zählen',
          'Vor dem Schlafengehen - 5 Minuten Wiederholung',
          'Am Wochenende - Multiplikationsspiele',
        ],
      },
      {
        emoji: '🎮',
        title: 'Spielerisches Lernen',
        body: 'Das Lernen in ein Spiel zu verwandeln steigert sowohl die Motivation als auch das Erinnerungsvermögen.',
        bullets: [
          'Nutzen Sie die Spiele auf dieser Website',
          'Spielen Sie Multiplikations-Kartenspiele',
          'Organisieren Sie Familienwettbewerbe',
          'Bieten Sie kleine Belohnungen für Erfolge an',
        ],
      },
    ],

    funActivitiesHeading: 'Lustige Aktivitäten zu Hause',
    funActivitiesCards: [
      {
        emoji: '🃏',
        title: 'Kartenspiele',
        subcards: [
          { title: 'Multiplikations-Krieg', body: 'Ziehe zwei Karten und multipliziere sie. Die richtige Antwort gewinnt Punkte!' },
          { title: 'Multiplikations-Memory', body: 'Kombiniere Fragekarten mit Antwortkarten - wie beim Memory-Spiel!' },
        ],
      },
      {
        emoji: '🍳',
        title: 'Mathe in der Küche',
        body: 'Nutzen Sie das Einmaleins beim Kochen:',
        bullets: [
          '"Wenn wir 2 Eier pro Pfannkuchen brauchen und 4 Pfannkuchen machen, wie viele Eier brauchen wir?"',
          '"Wenn das Rezept für 3 Personen ist und wir 6 sind, wie viel brauchen wir?"',
          'Löffel zählen, Zutaten abmessen',
        ],
      },
      {
        emoji: '🛒',
        title: 'Multiplikations-Übung im Supermarkt',
        bullets: [
          '"3 Joghurts kosten je 2€, wie viel insgesamt?"',
          '"Eine Tüte Äpfel enthält 6 Äpfel. Wenn wir 4 Tüten kaufen, wie viele Äpfel?"',
          'Preise vergleichen, Ersparnisse berechnen',
        ],
      },
      {
        emoji: '🎨',
        title: 'Kreative Aktivitäten',
        bullets: [
          'Einmaleins-Poster erstellen',
          'Multiplikations-Lieder oder Reime schreiben',
          'Würfel werfen und die Ergebnisse multiplizieren',
          'Geschichten mit Multiplikationsaufgaben erfinden',
        ],
      },
    ],

    challengesHeading: 'Häufige Herausforderungen und Lösungen',
    challenges: [
      {
        question: 'Mein Kind hat Angst vor/vermeidet das Einmaleins',
        solutionLabel: 'Lösung:',
        paragraphs: [
          'Beginnen Sie mit einfachen Reihen (1, 2, 5, 10), um Vertrauen aufzubauen. Konzentrieren Sie sich auf Fortschritt, nicht auf Perfektion. Feiern Sie jeden kleinen Erfolg.',
          'Vermeiden Sie Druck oder Angst zu erzeugen. Lernen sollte Spaß machen, nicht stressig sein.',
        ],
      },
      {
        question: 'Auswendiglernen, aber versteht das Konzept nicht',
        solutionLabel: 'Lösung:',
        paragraphs: [
          'Verwenden Sie konkrete Gegenstände und visuelle Modelle. Zeigen Sie, dass 3×4 "3 Gruppen von 4" oder "4+4+4" bedeutet.',
          'Nutzen Sie Anordnungen von Gegenständen, Zeichnungen, Manipulative. Konzeptionelles Verständnis ist wichtiger als mechanisches Auswendiglernen.',
        ],
      },
      {
        question: 'Verwechselt die Reihen miteinander',
        solutionLabel: 'Lösung:',
        paragraphs: [
          'Konzentrieren Sie sich auf eine Reihe zur Zeit. Üben Sie eine Reihe gründlich, bevor Sie zur nächsten übergehen.',
          'Verwenden Sie Farbcodes oder visuelle Assoziationen für verschiedene Reihen. Üben Sie die Unterscheidung: "Ist es 3×4 oder 4×3?"',
        ],
      },
      {
        question: 'Vergisst das zuvor Gelernte',
        solutionLabel: 'Lösung:',
        paragraphs: [
          'Regelmäßige Wiederholung ist der Schlüssel. Üben Sie früher gelernte Reihen zusammen mit den neuen.',
          'Erstellen Sie einen Wiederholungsplan: Jede Woche alte Reihen einbeziehen. Nutzen Sie Spiele, um die Wiederholung unterhaltsam zu gestalten.',
        ],
      },
    ],

    motivationHeading: 'Wie Sie die Motivation aufrechterhalten',
    motivationDoHeading: '✅ Tun',
    motivationDoItems: [
      'Loben Sie die Anstrengung, nicht nur die richtige Antwort',
      'Feiern Sie Fortschritte mit kleinen Belohnungen',
      'Machen Sie das Lernen zu einem Spiel',
      'Setzen Sie erreichbare Ziele',
      'Schaffen Sie eine unterstützende und druckfreie Umgebung',
    ],
    motivationAvoidHeading: '❌ Vermeiden',
    motivationAvoidItems: [
      'Vergleiche mit Geschwistern oder anderen Kindern',
      'Druck oder Angst wegen Fehlern erzeugen',
      'Lange, langweilige Übungseinheiten',
      'Negative Sprache verwenden ("Das ist einfach, warum kannst du das nicht?")',
      'Sofortige Perfektion erwarten',
    ],

    ctaHeading: 'Beginnen Sie heute die Einmaleins-Reise mit Ihrem Kind',
    ctaBody:
      'Denken Sie daran, jedes Kind lernt in seinem eigenen Tempo. Mit Ihrer Unterstützung und den richtigen Strategien wird Ihr Kind das Einmaleins meistern. Geduld, Übung und Positivität!',
    ctaButton1Label: 'Einmaleins erkunden',
    ctaButton2Label: 'Leitfaden für Schüler ansehen',
    ctaButton2Target: 'students',
    ctaTipLabel: 'Goldener Tipp:',
    ctaTipBody: 'Ihre positive Einstellung zur Mathematik beeinflusst die Einstellung Ihres Kindes. Zeigen Sie Begeisterung und Ihr Kind wird auch begeistert sein!',
  },

  cs: {
    heroTitle: 'Průvodce Násobilkou Pro Rodiče',
    heroSubtitle: 'Jak podpořit své dítě při učení násobilky? Tento průvodce obsahuje efektivní strategie a praktické tipy.',
    heroCaption: 'Váš Průvodce k Úspěchu Vašeho Dítěte',

    whyItMattersHeading: 'Proč Je To Důležité?',
    whyItMattersIntro:
      'Násobilka je jedním z nejdůležitějších kroků v matematickém vývoji vašeho dítěte. Nejen pro matematiku, ale také pro rozvoj schopností řešit problémy, logického myšlení a sebevědomí je zásadní.',
    whyItMattersCards: [
      { title: 'Základ Pro Vyšší Matematiku', body: 'Dělení, zlomky, algebra - všechno je založeno na násobilce.' },
      { title: 'Školní Sebevědomí', body: 'Úspěch v násobilce posílí obecnou důvěru ve škole.' },
      { title: 'Dovednosti Pro Život', body: 'Rychlý počítání je užitečné při nakupování, vaření a v každodenním životě.' },
    ],

    supportHeading: 'Strategie Podpory Doma',
    supportStrategies: [
      {
        emoji: '🎯',
        title: 'Udělejte To Konkrétní',
        body: 'Učte násobilku pomocí reálných situací místo abstraktních čísel.',
        bullets: [
          '"Pokud máš 3 krabice a v každé krabici jsou 4 jablka, kolik jablek je celkem?"',
          '"Krabice na vejce má 6 vajec. Kolik vajec je ve 4 krabicích?"',
          'Používejte fyzické předměty (knoflíky, cukroví, hračky) k vizualizaci',
        ],
      },
      {
        emoji: '⏰',
        title: 'Krátké, Ale Pravidelné Cvičení',
        body: 'Je efektivnější cvičit každý den 10-15 minut než jednou týdně 1 hodinu.',
        bullets: [
          'Při snídani - 5 rychlých otázek',
          'Na cestě do školy - počítání po 2, po 5',
          'Před spaním - 5 minut opakování',
          'O víkendu - násobilkové hry',
        ],
      },
      {
        emoji: '🎮',
        title: 'Herní Učení',
        body: 'Proměnit učení ve hru zvyšuje jak motivaci, tak paměť.',
        bullets: [
          'Používejte hry na této webové stránce',
          'Hrajte násobilkové karetní hry',
          'Organizujte rodinné soutěže',
          'Nabídněte malé odměny za úspěchy',
        ],
      },
    ],

    funActivitiesHeading: 'Zábavné Aktivity Doma',
    funActivitiesCards: [
      {
        emoji: '🃏',
        title: 'Karetní Hry',
        subcards: [
          { title: 'Násobilková Válka', body: 'Vytáhněte dvě karty a vynásobte je. Správná odpověď vyhrává body!' },
          { title: 'Násobilkové Pexeso', body: 'Kombinujte kartičky s otázkami s kartičkami s odpověďmi - jako pexeso!' },
        ],
      },
      {
        emoji: '🍳',
        title: 'Matematika v Kuchyni',
        body: 'Používejte násobilku při vaření:',
        bullets: [
          '"Pokud potřebujeme 2 vejce na palačinku a uděláme 4 palačinky, kolik vajec potřebujeme?"',
          '"Pokud je recept pro 3 osoby a jsme 6, kolik potřebujeme?"',
          'Počítání lžic, odměřování přísad',
        ],
      },
      {
        emoji: '🛒',
        title: 'Násobilkové Cvičení v Obchodě',
        bullets: [
          '"3 jogurty stojí každý 2€, kolik celkem?"',
          '"Pytlík jablek obsahuje 6 jablek. Pokud koupíme 4 pytlíky, kolik jablek?"',
          'Porovnávání cen, výpočet úspor',
        ],
      },
      {
        emoji: '🎨',
        title: 'Kreativní Aktivity',
        bullets: [
          'Vytvářet násobilkové plakáty',
          'Psát násobilkové písně nebo básně',
          'Házet kostkami a násobit výsledky',
          'Vymýšlet příběhy s násobilkovými úlohami',
        ],
      },
    ],

    challengesHeading: 'Časté Výzvy a Řešení',
    challenges: [
      {
        question: 'Moje dítě má strach z násobilky/vyhýbá se jí',
        solutionLabel: 'Řešení:',
        paragraphs: [
          'Začněte s jednoduchými řadami (1, 2, 5, 10), abyste vybudovali důvěru. Zaměřte se na pokrok, ne na dokonalost. Oslavujte každý malý úspěch.',
          'Vyhněte se tlaku nebo vytváření strachu. Učení by mělo být zábavné, ne stresující.',
        ],
      },
      {
        question: 'Učí se nazpaměť, ale nerozumí konceptu',
        solutionLabel: 'Řešení:',
        paragraphs: [
          'Používejte konkrétní předměty a vizuální modely. Ukažte, že 3×4 znamená "3 skupiny po 4" nebo "4+4+4".',
          'Používejte pole objektů, kresby, manipulativy. Konceptuální porozumění je důležitější než mechanické učení nazpaměť.',
        ],
      },
      {
        question: 'Zaměňuje si řady navzájem',
        solutionLabel: 'Řešení:',
        paragraphs: [
          'Zaměřte se na jednu řadu najednou. Důkladně procvičte jednu řadu, než přejdete k další.',
          'Používejte barevné kódy nebo vizuální asociace pro různé řady. Cvičte rozlišování: "Je to 3×4 nebo 4×3?"',
        ],
      },
      {
        question: 'Zapomíná dříve naučené',
        solutionLabel: 'Řešení:',
        paragraphs: [
          'Pravidelné opakování je klíčové. Cvičte dříve naučené řady společně s novými.',
          'Vytvořte rozvrh opakování: Každý týden zahrňte staré řady. Používejte hry, aby opakování bylo zábavné.',
        ],
      },
    ],

    motivationHeading: 'Jak Udržet Motivaci',
    motivationDoHeading: '✅ Dělat',
    motivationDoItems: [
      'Chválit úsilí, nejen správnou odpověď',
      'Oslavovat pokrok s malými odměnami',
      'Udělat z učení hru',
      'Stanovit dosažitelné cíle',
      'Vytvořit podpůrné a bezstresové prostředí',
    ],
    motivationAvoidHeading: '❌ Vyhýbat Se',
    motivationAvoidItems: [
      'Srovnávání se sourozenci nebo jinými dětmi',
      'Tlak nebo strach kvůli chybám',
      'Dlouhé, nudné cvičební lekce',
      'Používání negativního jazyka ("To je snadné, proč to nemůžeš?")',
      'Očekávání okamžité dokonalosti',
    ],

    ctaHeading: 'Začněte Dnes Cestu Násobilky se Svým Dítětem',
    ctaBody:
      'Pamatujte, každé dítě se učí svým vlastním tempem. S vaší podporou a správnými strategiemi vaše dítě násobilku zvládne. Trpělivost, cvičení a pozitivita!',
    ctaButton1Label: 'Prozkoumat Násobilku',
    ctaButton2Label: 'Zobrazit Průvodce Pro Studenty',
    ctaButton2Target: 'students',
    ctaTipLabel: 'Zlatý Tip:',
    ctaTipBody: 'Váš pozitivní přístup k matematice ovlivňuje přístup vašeho dítěte. Ukažte nadšení a vaše dítě bude také nadšené!',
  },

  uk: {
    heroTitle: 'Посібник з Таблиці Множення Для Батьків',
    heroSubtitle: 'Як підтримати свою дитину при вивченні таблиці множення? Цей посібник містить ефективні стратегії та практичні поради.',
    heroCaption: 'Ваш Посібник до Успіху Вашої Дитини',

    whyItMattersHeading: 'Чому Це Важливо?',
    whyItMattersIntro:
      "Таблиця множення є одним з найважливіших кроків у математичному розвитку вашої дитини. Не лише для математики, але й для розвитку здібностей розв'язувати проблеми, логічного мислення та впевненості це критично важливо.",
    whyItMattersCards: [
      { title: 'Основа Для Вищої Математики', body: 'Ділення, дроби, алгебра - все базується на таблиці множення.' },
      { title: 'Шкільна Впевненість', body: 'Успіх у таблиці множення посилить загальну довіру в школі.' },
      { title: 'Навички Для Життя', body: 'Швидкий рахунок корисний при покупках, готуванні та в повсякденному житті.' },
    ],

    supportHeading: 'Стратегії Підтримки Вдома',
    supportStrategies: [
      {
        emoji: '🎯',
        title: 'Зробіть Це Конкретним',
        body: 'Навчайте таблиці множення за допомогою реальних ситуацій замість абстрактних чисел.',
        bullets: [
          '"Якщо маєш 3 коробки і в кожній коробці 4 яблука, скільки яблук всього?"',
          '"Коробка для яєць має 6 яєць. Скільки яєць у 4 коробках?"',
          'Використовуйте фізичні предмети (ґудзики, цукерки, іграшки) для візуалізації',
        ],
      },
      {
        emoji: '⏰',
        title: 'Короткі, Але Регулярні Вправи',
        body: 'Ефективніше вправлятися щодня 10-15 хвилин, ніж раз на тиждень 1 годину.',
        bullets: [
          'При сніданку - 5 швидких питань',
          'По дорозі до школи - рахунок по 2, по 5',
          'Перед сном - 5 хвилин повторення',
          'На вихідних - ігри з таблиці множення',
        ],
      },
      {
        emoji: '🎮',
        title: 'Ігрове Навчання',
        body: "Перетворити навчання в гру підвищує як мотивацію, так і пам'ять.",
        bullets: [
          'Використовуйте ігри на цьому веб-сайті',
          'Грайте в карткові ігри з множення',
          'Організовуйте сімейні змагання',
          'Пропонуйте маленькі винагороди за успіхи',
        ],
      },
    ],

    funActivitiesHeading: 'Цікаві Активності Вдома',
    funActivitiesCards: [
      {
        emoji: '🃏',
        title: 'Карткові Ігри',
        subcards: [
          { title: 'Війна Множення', body: 'Витягніть дві карти і помножте їх. Правильна відповідь виграє очки!' },
          { title: 'Меморі Множення', body: 'Поєднуйте картки з питаннями з картками з відповідями - як меморі!' },
        ],
      },
      {
        emoji: '🍳',
        title: 'Математика на Кухні',
        body: 'Використовуйте множення при готуванні:',
        bullets: [
          '"Якщо потрібно 2 яйця на млинець і робимо 4 млинці, скільки яєць потрібно?"',
          '"Якщо рецепт для 3 осіб, а нас 6, скільки потрібно?"',
          'Підрахунок ложок, відмірювання інгредієнтів',
        ],
      },
      {
        emoji: '🛒',
        title: 'Вправи Множення в Магазині',
        bullets: [
          '"3 йогурти коштують кожен 2€, скільки всього?"',
          '"Пакет яблук містить 6 яблук. Якщо купимо 4 пакети, скільки яблук?"',
          'Порівняння цін, розрахунок знижок',
        ],
      },
      {
        emoji: '🎨',
        title: 'Креативні Активності',
        bullets: [
          'Створювати плакати з таблиці множення',
          'Писати пісні або вірші про множення',
          'Кидати кубики і множити результати',
          'Вигадувати історії із завданнями множення',
        ],
      },
    ],

    challengesHeading: 'Типові Виклики та Рішення',
    challenges: [
      {
        question: 'Моя дитина боїться таблиці множення/уникає її',
        solutionLabel: 'Рішення:',
        paragraphs: [
          'Почніть з простих рядів (1, 2, 5, 10), щоб побудувати довіру. Зосередьтеся на прогресі, а не на досконалості. Святкуйте кожен маленький успіх.',
          'Уникайте тиску або створення страху. Навчання має бути цікавим, а не стресовим.',
        ],
      },
      {
        question: "Вчить напам'ять, але не розуміє концепцію",
        solutionLabel: 'Рішення:',
        paragraphs: [
          'Використовуйте конкретні предмети та візуальні моделі. Покажіть, що 3×4 означає "3 групи по 4" або "4+4+4".',
          "Використовуйте масиви об'єктів, малюнки, маніпулятиви. Концептуальне розуміння важливіше за механічне вивчення напам'ять.",
        ],
      },
      {
        question: 'Плутає ряди між собою',
        solutionLabel: 'Рішення:',
        paragraphs: [
          'Зосередьтеся на одному ряді за раз. Ретельно попрацюйте над одним рядом, перш ніж переходити до наступного.',
          'Використовуйте кольорові коди або візуальні асоціації для різних рядів. Практикуйте розрізнення: "Це 3×4 чи 4×3?"',
        ],
      },
      {
        question: 'Забуває раніше вивчене',
        solutionLabel: 'Рішення:',
        paragraphs: [
          'Регулярне повторення є ключовим. Вправляйте раніше вивчені ряди разом з новими.',
          'Створіть розклад повторення: Щотижня включайте старі ряди. Використовуйте ігри, щоб повторення було цікавим.',
        ],
      },
    ],

    motivationHeading: 'Як Підтримувати Мотивацію',
    motivationDoHeading: '✅ Робити',
    motivationDoItems: [
      'Хвалити зусилля, а не лише правильну відповідь',
      'Святкувати прогрес з маленькими винагородами',
      'Перетворити навчання на гру',
      'Встановити досяжні цілі',
      'Створити підтримуюче та безстресове середовище',
    ],
    motivationAvoidHeading: '❌ Уникати',
    motivationAvoidItems: [
      'Порівняння з братами/сестрами або іншими дітьми',
      'Тиск або страх через помилки',
      'Довгі, нудні вправи',
      'Використання негативної мови ("Це легко, чому ти не можеш?")',
      'Очікування миттєвої досконалості',
    ],

    ctaHeading: 'Почніть Сьогодні Шлях Таблиці Множення зі Своєю Дитиною',
    ctaBody:
      "Пам'ятайте, кожна дитина вчиться у своєму власному темпі. З вашою підтримкою та правильними стратегіями ваша дитина впорається з таблицею множення. Терпіння, вправи та позитив!",
    ctaButton1Label: 'Досліджуй Таблицю Множення',
    ctaButton2Label: 'Переглянути Посібник Для Учнів',
    ctaButton2Target: 'students',
    ctaTipLabel: 'Золота Порада:',
    ctaTipBody: 'Ваше позитивне ставлення до математики впливає на ставлення вашої дитини. Покажіть ентузіазм і ваша дитина теж буде ентузіастом!',
  },

  fi: {
    heroTitle: 'Kertotaulujen Opas Vanhemmille',
    heroSubtitle: 'Kuinka tukea lastasi kertotaulujen oppimisessa? Tämä opas sisältää tehokkaita strategioita ja käytännön vinkkejä.',
    heroCaption: 'Sinun Oppaasi Lapsesi Menestykseen',

    whyItMattersHeading: 'Miksi Se On Tärkeää?',
    whyItMattersIntro:
      'Kertotaulut ovat yksi tärkeimmistä askelista lapsesi matemaattisessa kehityksessä. Ne ovat kriittisiä paitsi matematiikalle, myös ongelmanratkaisutaitojen, loogisen ajattelun ja itseluottamuksen kehittämiselle.',
    whyItMattersCards: [
      { title: 'Perusta Korkeammalle Matematiikalle', body: 'Jakolasku, murtoluvut, algebra - kaikki perustuvat kertotauluihin.' },
      { title: 'Itseluottamus Koulussa', body: 'Menestys kertotauluissa vahvistaa yleistä luottamusta koulussa.' },
      { title: 'Elämäntaitoja', body: 'Nopea laskutaito on hyödyllistä ostoksilla, ruoanlaitossa ja jokapäiväisessä elämässä.' },
    ],

    supportHeading: 'Tukistrategiat Kotona',
    supportStrategies: [
      {
        emoji: '🎯',
        title: 'Tee Siitä Konkreettista',
        body: 'Opeta kertotauluja todellisten tilanteiden avulla abstraktien numeroiden sijaan.',
        bullets: [
          '"Jos sinulla on 3 laatikkoa ja jokaisessa laatikossa on 4 omenaa, kuinka monta omenaa sinulla on yhteensä?"',
          '"Munakenno sisältää 6 munaa. Kuinka monta munaa on 4 kennossa?"',
          'Käytä fyysisiä esineitä (nappeja, karkkeja, leluja) visualisointiin',
        ],
      },
      {
        emoji: '⏰',
        title: 'Lyhyet, Mutta Säännölliset Harjoitukset',
        body: 'On tehokkaampaa harjoitella päivittäin 10-15 minuuttia kuin kerran viikossa 1 tunti.',
        bullets: [
          'Aamiaisen aikana - 5 nopeaa kysymystä',
          'Matkalla kouluun - laskeminen kahden ja viiden sarjoissa',
          'Ennen nukkumaanmenoa - 5 minuuttia kertausta',
          'Viikonloppuisin - kertotaulupelejä',
        ],
      },
      {
        emoji: '🎮',
        title: 'Pelillinen Oppiminen',
        body: 'Oppimisen muuttaminen peliksi lisää sekä motivaatiota että muistia.',
        bullets: [
          'Käytä tämän verkkosivuston pelejä',
          'Pelaa kertolaskukorttipelejä',
          'Järjestä perhekilpailuja',
          'Tarjoa pieniä palkintoja onnistumisista',
        ],
      },
    ],

    funActivitiesHeading: 'Hauskoja Aktiviteetteja Kotona',
    funActivitiesCards: [
      {
        emoji: '🃏',
        title: 'Korttipelit',
        subcards: [
          { title: 'Kertolaskusota', body: 'Nosta kaksi korttia ja kerro ne keskenään. Oikea vastaus voittaa pisteet!' },
          { title: 'Kertolaskumuisti', body: 'Yhdistä kysymyskortit vastauskorteihin - kuten muistipelissä!' },
        ],
      },
      {
        emoji: '🍳',
        title: 'Matematiikkaa Keittiössä',
        body: 'Käytä kertolaskua ruoanlaitossa:',
        bullets: [
          '"Jos tarvitaan 2 munaa per pannukakku ja teemme 4 pannukakkua, kuinka monta munaa tarvitaan?"',
          '"Jos resepti on 3 hengelle ja meitä on 6, kuinka paljon tarvitaan?"',
          'Lusikkojen laskeminen, ainesosien mittaaminen',
        ],
      },
      {
        emoji: '🛒',
        title: 'Kertolaskuharjoitukset Kaupassa',
        bullets: [
          '"3 jogurttia maksavat kumpikin 2€, kuinka paljon yhteensä?"',
          '"Omenapussi sisältää 6 omenaa. Jos ostamme 4 pussia, kuinka monta omenaa?"',
          'Hintojen vertailu, alennusten laskeminen',
        ],
      },
      {
        emoji: '🎨',
        title: 'Luovat Aktiviteetit',
        bullets: [
          'Kertotaulujulisteiden tekeminen',
          'Kertolaskulaulujen tai lorujen kirjoittaminen',
          'Noppien heittäminen ja tulosten kertominen',
          'Tarinoiden keksiminen kertolaskutehtävillä',
        ],
      },
    ],

    challengesHeading: 'Yleiset Haasteet ja Ratkaisut',
    challenges: [
      {
        question: 'Lapseni pelkää kertotauluja/välttelee niitä',
        solutionLabel: 'Ratkaisu:',
        paragraphs: [
          'Aloita helpoista sarjoista (1, 2, 5, 10) luottamuksen rakentamiseksi. Keskity edistymiseen, ei täydellisyyteen. Juhli jokaista pientä menestystä.',
          'Vältä painostusta tai pelkoa virheistä. Oppimisen tulee olla hauskaa, ei stressaavaa.',
        ],
      },
      {
        question: 'Opettelee ulkoa, mutta ei ymmärrä käsitettä',
        solutionLabel: 'Ratkaisu:',
        paragraphs: [
          'Käytä konkreettisia esineitä ja visuaalisia malleja. Näytä, että 3×4 tarkoittaa "3 ryhmää, joissa on 4" tai "4+4+4".',
          'Käytä esinejoukkojen sarjoja, piirustuksia, manipuloitavia esineitä. Käsitteellinen ymmärrys on tärkeämpää kuin mekaaninen ulkoa opettelu.',
        ],
      },
      {
        question: 'Sekoittaa sarjat keskenään',
        solutionLabel: 'Ratkaisu:',
        paragraphs: [
          'Keskity yhteen sarjaan kerrallaan. Työskentele huolellisesti yhden sarjan kanssa ennen seuraavaan siirtymistä.',
          'Käytä värikoodeja tai visuaalisia assosiaatioita eri sarjoille. Harjoittele erottamista: "Onko tämä 3×4 vai 4×3?"',
        ],
      },
      {
        question: 'Unohtaa aiemmin opitut',
        solutionLabel: 'Ratkaisu:',
        paragraphs: [
          'Säännöllinen kertaus on avain. Harjoittele aiemmin opittuja sarjoja yhdessä uusien kanssa.',
          'Luo kertausaikataulu: Sisällytä viikoittain vanhoja sarjoja. Käytä pelejä pitämään kertaus mielenkiintoisena.',
        ],
      },
    ],

    motivationHeading: 'Kuinka Ylläpitää Motivaatiota',
    motivationDoHeading: '✅ Tee',
    motivationDoItems: [
      'Kehuu ponnisteluja, ei pelkästään oikeaa vastausta',
      'Juhli edistymistä pienillä palkinnoilla',
      'Tee oppimisesta peli',
      'Aseta saavutettavissa olevia tavoitteita',
      'Luo tukevaa ja stressitöntä ympäristöä',
    ],
    motivationAvoidHeading: '❌ Vältä',
    motivationAvoidItems: [
      'Vertailua sisaruksiin tai muihin lapsiin',
      'Painostusta tai pelkoa virheistä',
      'Pitkiä, tylsiä harjoituksia',
      'Negatiivisen kielen käyttöä ("Tämä on helppoa, mikset osaa?")',
      'Välittömän täydellisyyden odottamista',
    ],

    ctaHeading: 'Aloita Tänään Kertotaulumatka Lapsesi Kanssa',
    ctaBody:
      'Muista, jokainen lapsi oppii omaan tahtiinsa. Tuellasi ja oikeilla strategioilla lapsesi hallitsee kertotaulut. Kärsivällisyyttä, harjoittelua ja positiivisuutta!',
    ctaButton1Label: 'Tutki Kertotauluja',
    ctaButton2Label: 'Katso Oppaan Oppilaille',
    ctaButton2Target: 'students',
    ctaTipLabel: 'Kultainen Vinkki:',
    ctaTipBody: 'Sinun positiivinen asenteesi matematiikkaa kohtaan vaikuttaa lapsesi asenteeseen. Näytä innostusta ja lapsesikin innostuu!',
  },

  fr: {
    heroTitle: 'Guide Parents : Accompagner les Tables de Multiplication',
    heroSubtitle:
      "Votre rôle est essentiel dans l'apprentissage de votre enfant. Découvrez comment créer un environnement positif et des habitudes efficaces pour maîtriser les tables de multiplication.",
    heroCaption: "Ensemble, l'apprentissage devient un plaisir !",

    whyItMattersHeading: 'Pourquoi Votre Rôle est Essentiel',
    whyItMattersIntro:
      "Les recherches montrent que l'implication des parents dans l'apprentissage des mathématiques a un impact significatif sur la réussite de l'enfant.",
    whyItMattersCards: [
      { emoji: '💛', title: 'Soutien Émotionnel', body: "Votre encouragement réduit l'anxiété mathématique et renforce la confiance de votre enfant." },
      { emoji: '🏠', title: 'Environnement Propice', body: 'Un cadre calme et positif à la maison favorise la concentration et la mémorisation.' },
      { emoji: '📅', title: 'Régularité', body: 'Vous pouvez instaurer des routines de pratique courtes mais régulières — la clé du succès.' },
      { emoji: '🌟', title: 'Modèle Positif', body: 'En montrant que les maths sont utiles au quotidien, vous motivez naturellement votre enfant.' },
    ],

    supportHeading: 'Accompagner Votre Enfant à la Maison',
    supportStrategies: [
      {
        title: 'Créez une Routine Quotidienne',
        body: 'Consacrez 10 à 15 minutes par jour à la pratique des tables. Choisissez un moment calme, idéalement après le goûter ou avant le coucher.',
        boxLabel: 'Conseils pratiques :',
        bullets: [
          'Choisissez un moment fixe chaque jour',
          'Commencez par 5 minutes et augmentez progressivement',
          'Évitez les moments de fatigue ou de faim',
          'Restez présent et disponible pendant la session',
        ],
      },
      {
        title: "Valorisez l'Effort, Pas Seulement le Résultat",
        body: "Félicitez votre enfant pour sa persévérance et ses progrès, même petits. Évitez de comparer avec d'autres enfants.",
        boxLabel: 'Phrases encourageantes :',
        bullets: [
          '"Tu as bien travaillé aujourd\'hui !"',
          '"Je vois tes progrès avec la table de 7 !"',
          '"C\'est normal de se tromper, essayons encore"',
          '"Tu connais déjà 5 tables, c\'est formidable !"',
        ],
      },
      {
        title: 'Utilisez les Mathématiques au Quotidien',
        body: 'Intégrez les tables de multiplication dans la vie de tous les jours pour leur donner du sens.',
        boxLabel: 'Exemples concrets :',
        bullets: [
          'Au supermarché : "3 paquets de 4 yaourts, ça fait combien ?"',
          'En cuisine : "On double la recette, 2 × 3 œufs = ?"',
          'En voiture : "Combien de roues pour 6 voitures ?"',
          'À table : "5 personnes, 3 tranches chacune = ?"',
        ],
      },
    ],

    funActivitiesHeading: 'Activités Ludiques en Famille',
    funActivitiesCards: [
      { emoji: '🎲', title: 'Jeux de Dés', body: 'Lancez deux dés et multipliez les résultats. Le premier à répondre correctement gagne un point !', meta: 'Âge : 7+ · Matériel : 2 dés' },
      { emoji: '🃏', title: 'Bataille de Cartes', body: 'Chaque joueur retourne deux cartes et les multiplie. Le plus grand produit remporte les cartes.', meta: 'Âge : 8+ · Matériel : Jeu de cartes' },
      { emoji: '🎯', title: 'Quiz Chronométré', body: 'Posez 10 questions et chronométrez. Votre enfant essaie de battre son propre record jour après jour.', meta: 'Âge : 7+ · Durée : 5 min' },
      { emoji: '🖍️', title: 'Coloriage Mathématique', body: "Créez une grille de 100 et coloriez les multiples d'un nombre ensemble. Les motifs émerveilleront votre enfant !", meta: 'Âge : 6+ · Matériel : Grille + crayons' },
    ],

    challengesHeading: 'Défis Courants et Solutions',
    challengesIntro: "Votre enfant rencontre des difficultés ? C'est normal. Voici les obstacles les plus fréquents et comment les surmonter.",
    challenges: [
      {
        question: '😰 "Mon enfant a peur des maths"',
        solutionLabel: 'Solution :',
        paragraphs: [
          'Dédramatisez ! Utilisez des jeux plutôt que des exercices formels. Partagez vos propres expériences avec les maths et montrez que les erreurs font partie de l\'apprentissage.',
        ],
      },
      {
        question: '😩 "Il/elle oublie tout le lendemain"',
        solutionLabel: 'Solution :',
        paragraphs: [
          "La répétition espacée est la clé. Révisez les tables apprises les jours précédents avant d'en apprendre de nouvelles. 5 minutes de révision valent plus qu'une heure d'apprentissage intensif.",
        ],
      },
      {
        question: '😤 "Il/elle ne veut pas pratiquer"',
        solutionLabel: 'Solution :',
        paragraphs: [
          'Rendez la pratique ludique ! Utilisez les jeux en ligne de ce site, organisez des défis familiaux, ou intégrez les maths dans des activités que votre enfant aime déjà.',
        ],
      },
      {
        question: '🤔 "Les tables 7, 8 et 9 sont trop dures"',
        solutionLabel: 'Solution :',
        paragraphs: [
          'Grâce à la commutativité (si 3×7=21, alors 7×3=21 aussi), votre enfant connaît déjà une grande partie de ces tables ! Concentrez-vous sur les quelques combinaisons restantes : 7×7, 7×8, 8×8.',
        ],
      },
    ],

    motivationHeading: 'Créer un Environnement Positif',
    motivationDoHeading: 'À Faire',
    motivationDoItems: [
      'Féliciter les efforts et les progrès',
      'Pratiquer de manière ludique',
      'Rester patient et calme',
      "Adapter le rythme à l'enfant",
      'Célébrer chaque petite victoire',
    ],
    motivationAvoidHeading: 'À Éviter',
    motivationAvoidItems: [
      "Comparer avec d'autres enfants",
      'Punir les erreurs',
      'Forcer des sessions trop longues',
      'Dire "c\'est facile" quand l\'enfant échoue',
      'Montrer votre frustration',
    ],

    progressTracking: {
      heading: 'Suivre la Progression de Votre Enfant',
      items: [
        { title: '📋 Tableau de Suivi', body: "Créez un tableau avec les tables de 1 à 10. Collez une étoile pour chaque table maîtrisée. L'objectif visuel motive énormément !" },
        { title: '📊 Journal de Scores', body: 'Notez le score des quiz quotidiens. Montrez le graphique de progression à votre enfant — voir la courbe monter est très motivant.' },
        { title: '🏅 Système de Récompenses', body: 'Définissez des paliers : une sortie après 5 tables maîtrisées, un petit cadeau après toutes les tables. Des récompenses simples mais significatives.' },
      ],
    },

    ctaHeading: "Pratiquez Ensemble dès Aujourd'hui ! 🌟",
    ctaBody: "Explorez nos exercices interactifs et jeux éducatifs avec votre enfant. L'apprentissage en famille est toujours plus efficace et plus amusant !",
    ctaButton1Label: 'Découvrir les Exercices',
    ctaButton2Label: "Retour à l'Accueil",
    ctaButton2Target: 'topicHome',
    ctaTipLabel: 'Conseil :',
    ctaTipBody: "Pratiquez 10 minutes chaque soir en famille — c'est la clé de la réussite !",
  },

  sv: {
    heroTitle: 'För Föräldrar: Multiplikationstabell Guide',
    heroSubtitle: 'Hur kan du stödja ditt barns inlärning av multiplikationstabellen? Denna guide innehåller effektiva strategier och praktiska förslag.',
    heroCaption: 'Din guide för ditt barns framgång',

    whyItMattersHeading: 'Varför är det Viktigt?',
    whyItMattersIntro:
      'Multiplikationstabellen är ett av de viktigaste stegen i ditt barns matematikresa. Det är kritiskt inte bara för matematik, utan också för problemlösning, logiskt tänkande och självförtroendesutveckling.',
    whyItMattersCards: [
      { title: 'Grundläggande Färdighet', body: 'Skapar en solid grund för alla framtida matematikämnen.' },
      { title: 'Självförtroende', body: 'Framgång ökar ditt barns självförtroende i matematik.' },
      { title: 'Vardagsliv', body: 'Används i dagliga aktiviteter som shopping, mätning och tidshantering.' },
    ],

    supportHeading: 'Effektiva Inlärningsstrategier',
    supportStrategies: [
      {
        title: 'Gå Framåt med Små Steg',
        body: 'Försök inte att lära ut alla tabeller på en gång. Börja med enkla tabeller (1, 2, 5, 10).',
        bullets: [
          'Fokusera bara på en tabell per dag',
          'Förstärk gamla tabeller innan du går vidare till nya',
          'Dela upp svåra tabeller i delar',
        ],
      },
      {
        title: 'Integrera i Vardagen',
        body: 'Lär ut multiplikationstabellen med verkliga situationer istället för abstrakta tal.',
        boxLabel: 'Exempel:',
        bullets: [
          '"Det är 4 personer, om alla får 3 chokladbitar, hur många chokladbitar behöver vi?"',
          '"Om du läser 5 sidor varje dag i 6 dagar, hur många sidor har du läst totalt?"',
          '"Om en produkt kostar 7 kronor och vi köper 4 stycken, hur mycket betalar vi?"',
        ],
      },
      {
        title: 'Använd Visuella Verktyg',
        body: 'Använd objekt, ritningar och modeller för att konkretisera abstrakta koncept.',
        subgroups: [
          { title: 'Fysiska Material', items: ['Legoblock', 'Stenar eller knappar', 'Fruktbitar'] },
          { title: 'Ritningar och Diagram', items: ['Rita punkter i matriser', 'Rektangulära ytor', 'Tallinjer'] },
        ],
      },
      {
        title: 'Tillämpa Spelifiering',
        body: 'Öka motivationen genom att göra lärandet roligt.',
        subcards: [
          { title: 'Kortspel', body: 'Dra två kort och beräkna produkten. Rätt svar ger poäng!' },
          { title: 'Tidsrace', body: 'Mät med stoppur hur många frågor som kan besvaras rätt på 1 minut.' },
          { title: 'Belöningssystem', body: 'Samla klistermärken eller stjärnor för varje fullbordad tabell.' },
        ],
      },
    ],

    funActivitiesHeading: 'Hemövningsaktiviteter',
    funActivitiesCards: [
      {
        title: 'Köksmatematik',
        body: 'Använd multiplikationstabellen när du lagar mat:',
        bullets: ['"4 personer, 2 kakor var = 4 × 2 = 8 kakor"', 'Multiplicera receptmängder med 2 eller 3', 'Beräkna antal tallrikar vid bordsdukning'],
      },
      {
        title: 'Shoppingberäkningar',
        body: 'Öva multiplikation i affären eller butiken:',
        bullets: ['"En produkt som kostar 3 kronor, 4 stycken, hur mycket kostar det?"', 'Rabattberäkningar', 'Uppskattning av totalpris'],
      },
      {
        title: 'Tidshantering',
        body: 'Öva med tids- och varaktighetsberäkningar:',
        bullets: ['"Om du läser 3 sidor på 5 minuter, hur många på 15 minuter?"', 'Dagliga rutinberäkningar', 'Varaktighetsmultiplikatorer'],
      },
      {
        title: 'Lektid',
        body: 'Förstärk med roliga spel:',
        bullets: ['Frågor och svar under bilresor', 'Kasta tärning och beräkna multiplikation', 'Pedagogiska onlinespel'],
      },
    ],

    challengesHeading: 'Vanliga Utmaningar och Lösningar',
    challenges: [
      {
        question: 'Mitt barn är rädd för/undviker multiplikationstabellen',
        solutionLabel: 'Lösning:',
        bullets: [
          'Bygg självförtroende genom att börja med enkla tabeller (1, 2, 5, 10)',
          'Förstora framgångar, fira små steg',
          'Kalla det "spel" eller "aktivitet" istället för matematik',
          'Utöva inte press, var tålmodig',
        ],
      },
      {
        question: 'Glömmer inlärda tabeller',
        solutionLabel: 'Lösning:',
        bullets: [
          'Repetera regelbundet (korta dagliga sessioner)',
          'Förstärk med olika metoder (skriva, säga, visuellt)',
          'Skapa möjligheter att använda i vardagen',
          'Tillämpa system för spridd repetition (1 dag, 3 dagar, 1 vecka)',
        ],
      },
      {
        question: 'Fastnar på vissa tabeller (särskilt 7, 8, 9)',
        solutionLabel: 'Lösning:',
        bullets: [
          'Dela dessa tabeller i mindre delar',
          'Lär ut speciella tips och mönster',
          'Använd fingermetoden för 9-tabellen',
          'Ägna mer tid åt svåra tabeller',
          'Visa relationer (8×6 = 4×6 + 4×6)',
        ],
      },
      {
        question: 'Vi kan inte hitta tid att studera',
        solutionLabel: 'Lösning:',
        bullets: [
          'Integrera i dagliga rutiner (vid frukost, i bilen, före sänggåendet)',
          'Gör korta sessioner (10-15 minuter räcker)',
          'Använd naturligt i dagliga aktiviteter',
          'Kvalitet är viktigare än längd',
        ],
      },
    ],

    motivationHeading: 'Motivationstekniker',
    motivationDoHeading: 'Gör Det Här',
    motivationDoItems: [
      'Berömma ditt barns ansträngningar, betona processen inte resultatet',
      'Fira små framgångar',
      'Var tålmodig och håll en positiv attityd',
      'Inkludera lärande i dagliga rutiner',
      'Se misstag som lärandemöjligheter',
    ],
    motivationAvoidHeading: 'Undvik Detta',
    motivationAvoidItems: [
      'Jämför inte med andra barn',
      'Utöva inte press eller bestraffa',
      'Ha inte för långa studiesessioner',
      'Lita inte bara på utantillinlärning',
      'Använd inte negativt språk (som "Matematik är svårt")',
    ],

    weeklyPlan: {
      heading: 'Exempel på Veckoplan',
      format: 'table',
      note: 'Obs: Denna plan bör vara flexibel. Justera varaktigheten enligt ditt barns trötthetsnivå.',
      tableRows: [
        { day: 'Måndag', activity: 'Lär ny tabell (med visuella verktyg)', duration: '15 minuter' },
        { day: 'Tisdag', activity: 'Repetera föregående dags tabell', duration: '10 minuter' },
        { day: 'Onsdag', activity: 'Öva med spel', duration: '20 minuter' },
        { day: 'Torsdag', activity: 'Verkliga problem', duration: '15 minuter' },
        { day: 'Fredag', activity: 'Granska alla veckans tabeller', duration: '15 minuter' },
        { day: 'Lördag', activity: 'Roliga spel och tävlingar', duration: '30 minuter' },
        { day: 'Söndag', activity: 'Vila (valfri lättrepetition)', duration: '-' },
      ],
    },

    progressTracking: {
      heading: 'Framstegsuppföljningsmetoder',
      items: [
        {
          title: '1. Visuell Framstegstabell',
          body: 'Skapa en tabell som kan hängas på väggen. Lägg till en klistermärke eller stjärna för varje inlärd tabell.',
          tip: 'Exempel: En tabell med 10 rutor för tabeller 1-10, färglägg en ruta för varje framgångsrik tabell.',
        },
        {
          title: '2. Veckovis Minitest',
          body: 'Gör ett 5-minuters quiz varje helg. Registrera resultaten.',
          tip: 'Tips: Ge positiv återkoppling som "du har förbättrats så mycket denna vecka" istället för antal rätt/fel.',
        },
        {
          title: '3. Tidsspårning',
          body: 'Låt barnet lösa samma frågor vid olika tillfällen och mät tiden. Hastighetsökning ger motivation.',
          tip: 'Viktigt: Betona noggrannhet mer än hastighet. Hastigheten kommer naturligt med tiden.',
        },
      ],
    },

    ctaHeading: 'Börja Omedelbart!',
    ctaBody: 'Börja multiplikationstabellresan med ditt barn idag. Kom ihåg, varje barn lär sig i sin egen takt och ditt stöd är den mest värdefulla resursen.',
    ctaButton1Label: 'Börja med Tabellerna',
    ctaButton2Label: 'Tillbaka till Startsidan',
    ctaButton2Target: 'topicHome',
  },

  pt: {
    heroTitle: 'Guia de Tabuada Para Pais',
    heroSubtitle: 'Como apoiar seu filho no aprendizado de tabuada? Este guia contém estratégias eficazes e conselhos práticos.',
    heroCaption: 'Seu guia para o sucesso do seu filho',

    whyItMattersHeading: 'Por Que é Importante?',
    whyItMattersIntro:
      'A tabuada é um dos passos mais importantes na jornada matemática do seu filho. Não apenas para matemática, mas também tem importância crítica para o desenvolvimento da resolução de problemas, pensamento lógico e autoconfiança.',
    whyItMattersCards: [
      { title: 'Base para Matemática Avançada', body: 'Divisão, frações, álgebra - todos dependem da tabuada.' },
      { title: 'Confiança Acadêmica', body: 'O sucesso na tabuada aumenta a confiança geral na escola.' },
      { title: 'Habilidades para a Vida', body: 'Cálculos rápidos são úteis ao fazer compras, cozinhar e no dia a dia.' },
    ],

    supportHeading: 'Estratégias de Apoio em Casa',
    supportStrategies: [
      {
        emoji: '🎯',
        title: 'Torne Concreto',
        body: 'Ensine a tabuada com situações da vida real em vez de números abstratos.',
        bullets: [
          '"Se você tem 3 caixas e 4 maçãs em cada caixa, quantas maçãs no total?"',
          '"Uma caixa de ovos tem 6 ovos. Quantos ovos em 4 caixas?"',
          'Use objetos físicos (botões, doces, brinquedos) para visualizar',
        ],
      },
      {
        emoji: '⏰',
        title: 'Prática Curta mas Regular',
        body: 'É mais eficaz praticar 10-15 minutos por dia do que 1 hora uma vez por semana.',
        bullets: [
          'Durante o café da manhã - 5 perguntas rápidas',
          'No caminho para a escola - contar de 2 em 2, de 5 em 5',
          'Antes de dormir - revisão de 5 minutos',
          'Nos fins de semana - jogos de multiplicação',
        ],
      },
      {
        emoji: '🎮',
        title: 'Aprendizado Baseado em Jogos',
        body: 'Transformar o aprendizado em jogo aumenta tanto a motivação quanto a retenção.',
        bullets: [
          'Use os jogos deste site',
          'Jogue jogos de cartas de multiplicação',
          'Organize competições familiares',
          'Ofereça pequenas recompensas pelas conquistas',
        ],
      },
    ],

    funActivitiesHeading: 'Atividades Divertidas em Casa',
    funActivitiesCards: [
      {
        emoji: '🏏',
        title: 'Jogos de Cartas',
        subcards: [
          { title: 'Guerra de Multiplicação', body: 'Tire duas cartas e multiplique-as. A resposta correta ganha pontos!' },
          { title: 'Memória de Multiplicação', body: 'Combine as cartas de perguntas com as respostas - como o jogo da memória!' },
        ],
      },
      {
        emoji: '🍳',
        title: 'Matemática na Cozinha',
        body: 'Use a tabuada ao cozinhar:',
        bullets: [
          '"Se precisamos de 2 ovos por panqueca e faremos 4 panquecas, quantos ovos precisamos?"',
          '"Se a receita é para 3 pessoas e somos 6, quanto precisamos?"',
          'Contar colheres, medir ingredientes',
        ],
      },
      {
        emoji: '🛒',
        title: 'Prática de Multiplicação no Supermercado',
        bullets: [
          '"3 iogurtes custam R$2 cada, quanto no total?"',
          '"Uma sacola de maçãs contém 6 maçãs. Se comprarmos 4 sacolas, quantas maçãs?"',
          'Comparar preços, calcular economias',
        ],
      },
      {
        emoji: '🎨',
        title: 'Atividades Criativas',
        bullets: [
          'Criar cartazes de tabuada',
          'Escrever canções ou rimas de multiplicação',
          'Jogar dados e multiplicar os resultados',
          'Criar histórias com problemas de multiplicação',
        ],
      },
    ],

    challengesHeading: 'Desafios Comuns e Soluções',
    challenges: [
      {
        question: 'Meu filho tem medo/evita a tabuada',
        solutionLabel: 'Solução:',
        paragraphs: [
          'Comece com tabuadas fáceis (1, 2, 5, 10) para construir confiança. Foque no progresso, não na perfeição. Celebre cada pequena conquista.',
          'Evite pressionar ou criar ansiedade. Aprender deve ser divertido, não estressante.',
        ],
      },
      {
        question: 'Memoriza mas não entende o conceito',
        solutionLabel: 'Solução:',
        paragraphs: [
          'Use objetos concretos e modelos visuais. Mostre que 3×4 significa "3 grupos de 4" ou "4+4+4".',
          'Use arranjos de objetos, desenhos, manipulativos. A compreensão conceitual é mais importante que a memorização mecânica.',
        ],
      },
      {
        question: 'Confunde as tabuadas entre si',
        solutionLabel: 'Solução:',
        paragraphs: [
          'Foque em uma tabuada por vez. Pratique bem uma tabuada antes de passar para a próxima.',
          'Use códigos de cores ou associações visuais para diferentes tabuadas. Pratique a diferenciação: "É 3×4 ou 4×3?"',
        ],
      },
      {
        question: 'Esquece o que aprendeu antes',
        solutionLabel: 'Solução:',
        paragraphs: [
          'Revisão regular é essencial. Pratique as tabuadas aprendidas anteriormente junto com as novas.',
          'Crie um programa de revisão: cada semana inclua tabuadas antigas. Use jogos para tornar a revisão divertida.',
        ],
      },
    ],

    motivationHeading: 'Como Manter a Motivação',
    motivationDoHeading: '✅ Fazer',
    motivationDoItems: [
      'Elogiar o esforço, não apenas a resposta correta',
      'Celebrar o progresso com pequenas recompensas',
      'Tornar o aprendizado um jogo',
      'Estabelecer metas alcançáveis',
      'Criar um ambiente de apoio e sem pressão',
    ],
    motivationAvoidHeading: '❌ Evitar',
    motivationAvoidItems: [
      'Comparar com irmãos ou outras crianças',
      'Criar pressão ou ansiedade sobre os erros',
      'Sessões de prática longas e entediantes',
      'Usar linguagem negativa ("Isso é fácil, por que você não consegue?")',
      'Esperar perfeição imediata',
    ],

    ctaHeading: 'Comece a Jornada da Tabuada com Seu Filho Hoje',
    ctaBody:
      'Lembre-se, cada criança aprende no seu próprio ritmo. Com seu apoio e as estratégias corretas, seu filho dominará a tabuada. Paciência, prática e positividade!',
    ctaButton1Label: 'Explorar Tabuada',
    ctaButton2Label: 'Ver Guia para Estudantes',
    ctaButton2Target: 'students',
    ctaTipLabel: 'Dica de Ouro:',
    ctaTipBody: 'Sua atitude positiva em relação à matemática influencia a atitude do seu filho. Mostre entusiasmo e seu filho também ficará empolgado!',
  },

  en: {
    heroTitle: 'Times Tables Guide For Parents',
    heroSubtitle: 'How to support your child in learning times tables? This guide contains effective strategies and practical advice.',
    heroCaption: "Your guide to your child's success",

    whyItMattersHeading: 'Why Is It Important?',
    whyItMattersIntro:
      "Times tables are one of the most important steps in your child's math journey. Not only for math, but they also have critical importance for developing problem-solving skills, logical thinking, and self-confidence.",
    whyItMattersCards: [
      { title: 'Foundation for Advanced Math', body: 'Division, fractions, algebra - all depend on times tables.' },
      { title: 'Academic Confidence', body: 'Success in times tables increases overall confidence at school.' },
      { title: 'Life Skills', body: 'Quick calculations are useful when shopping, cooking, and in daily life.' },
    ],

    supportHeading: 'Home Support Strategies',
    supportStrategies: [
      {
        emoji: '🎯',
        title: 'Make It Concrete',
        body: 'Teach times tables with real-life situations instead of abstract numbers.',
        bullets: [
          '"If you have 3 boxes and 4 apples in each box, how many apples in total?"',
          '"An egg carton has 6 eggs. How many eggs in 4 cartons?"',
          'Use physical objects (buttons, candies, toys) to visualize',
        ],
      },
      {
        emoji: '⏰',
        title: 'Short but Regular Practice',
        body: "It's more effective to practice 10-15 minutes per day than 1 hour once a week.",
        bullets: [
          'During breakfast - 5 quick questions',
          'On the way to school - count by 2s, by 5s',
          'Before bedtime - 5-minute review',
          'On weekends - multiplication games',
        ],
      },
      {
        emoji: '🎮',
        title: 'Game-Based Learning',
        body: 'Turning learning into a game increases both motivation and retention.',
        bullets: [
          'Use the games on this site',
          'Play multiplication card games',
          'Organize family competitions',
          'Offer small rewards for achievements',
        ],
      },
    ],

    funActivitiesHeading: 'Fun Activities at Home',
    funActivitiesCards: [
      {
        emoji: '🏏',
        title: 'Card Games',
        subcards: [
          { title: 'Multiplication War', body: 'Draw two cards and multiply them. The correct answer scores points!' },
          { title: 'Multiplication Memory', body: 'Match question cards with answer cards - like the memory game!' },
        ],
      },
      {
        emoji: '🍳',
        title: 'Kitchen Math',
        body: 'Use times tables while cooking:',
        bullets: [
          '"If we need 2 eggs per pancake and we\'re making 4 pancakes, how many eggs do we need?"',
          '"If the recipe serves 3 people and there are 6 of us, how much do we need?"',
          'Counting spoons, measuring ingredients',
        ],
      },
      {
        emoji: '🛒',
        title: 'Grocery Store Multiplication Practice',
        bullets: [
          '"3 yogurts cost $2 each, how much in total?"',
          '"A bag of apples has 6 apples. If we buy 4 bags, how many apples?"',
          'Compare prices, calculate savings',
        ],
      },
      {
        emoji: '🎨',
        title: 'Creative Activities',
        bullets: [
          'Create times tables posters',
          'Write multiplication songs or rhymes',
          'Roll dice and multiply the results',
          'Create stories with multiplication problems',
        ],
      },
    ],

    challengesHeading: 'Common Challenges and Solutions',
    challenges: [
      {
        question: 'My child is afraid of/avoids times tables',
        solutionLabel: 'Solution:',
        paragraphs: [
          'Start with easy tables (1, 2, 5, 10) to build confidence. Focus on progress, not perfection. Celebrate each small achievement.',
          'Avoid pressuring or creating anxiety. Learning should be fun, not stressful.',
        ],
      },
      {
        question: "Memorizes but doesn't understand the concept",
        solutionLabel: 'Solution:',
        paragraphs: [
          'Use concrete objects and visual models. Show that 3×4 means "3 groups of 4" or "4+4+4".',
          'Use arrays of objects, drawings, manipulatives. Conceptual understanding is more important than mechanical memorization.',
        ],
      },
      {
        question: 'Confuses times tables with each other',
        solutionLabel: 'Solution:',
        paragraphs: [
          'Focus on one times table at a time. Practice one well before moving to the next.',
          'Use color codes or visual associations for different tables. Practice differentiation: "Is it 3×4 or 4×3?"',
        ],
      },
      {
        question: 'Forgets what was learned before',
        solutionLabel: 'Solution:',
        paragraphs: [
          'Regular review is essential. Practice previously learned tables along with new ones.',
          'Create a review schedule: each week include old tables. Use games to make review fun.',
        ],
      },
    ],

    motivationHeading: 'How to Keep Motivation High',
    motivationDoHeading: '✅ Do',
    motivationDoItems: [
      'Praise effort, not just correct answers',
      'Celebrate progress with small rewards',
      'Make learning a game',
      'Set achievable goals',
      'Create a supportive, pressure-free environment',
    ],
    motivationAvoidHeading: '❌ Avoid',
    motivationAvoidItems: [
      'Comparing with siblings or other children',
      'Creating pressure or anxiety about mistakes',
      'Long, boring practice sessions',
      'Using negative language ("This is easy, why can\'t you do it?")',
      'Expecting immediate perfection',
    ],

    ctaHeading: 'Start the Times Tables Journey with Your Child Today',
    ctaBody:
      'Remember, every child learns at their own pace. With your support and the right strategies, your child will master times tables. Patience, practice, and positivity!',
    ctaButton1Label: 'Explore Times Tables',
    ctaButton2Label: 'See Guide for Students',
    ctaButton2Target: 'students',
    ctaTipLabel: 'Golden Tip:',
    ctaTipBody: "Your positive attitude toward math influences your child's attitude. Show enthusiasm and your child will get excited too!",
  },

  pl: {
    heroTitle: 'Przewodnik po Tabliczkach Mnożenia Dla Rodziców',
    heroSubtitle: 'Jak wspierać dziecko w nauce tabliczki mnożenia? Ten przewodnik zawiera skuteczne strategie i praktyczne porady.',
    heroCaption: 'Twój przewodnik do sukcesu dziecka',

    whyItMattersHeading: 'Dlaczego To Jest Ważne?',
    whyItMattersIntro:
      'Tabliczka mnożenia to ważny krok w matematycznej podróży dziecka. Pomaga nie tylko w matematyce. Rozwija też umiejętności rozwiązywania problemów, logiczne myślenie i pewność siebie.',
    whyItMattersCards: [
      { title: 'Podstawa Zaawansowanej Matematyki', body: 'Dzielenie, ułamki, algebra - wszystko zależy od tabliczki mnożenia.' },
      { title: 'Pewność Siebie w Nauce', body: 'Sukces w tabliczkach mnożenia zwiększa ogólną pewność siebie w szkole.' },
      { title: 'Umiejętności Życiowe', body: 'Szybkie obliczenia są przydatne podczas zakupów, gotowania i w życiu codziennym.' },
    ],

    supportHeading: 'Strategie Wsparcia Domowego',
    supportStrategies: [
      {
        emoji: '🎯',
        title: 'Uczyń To Konkretnym',
        body: 'Ucz tabliczki mnożenia za pomocą sytuacji z życia codziennego zamiast abstrakcyjnych liczb.',
        bullets: [
          '"Jeśli masz 3 pudełka i 4 jabłka w każdym pudełku, ile jabłek razem?"',
          '"Karton jajek ma 6 jajek. Ile jajek w 4 kartonach?"',
          'Używaj fizycznych przedmiotów (guzików, cukierków, zabawek) do wizualizacji',
        ],
      },
      {
        emoji: '⏰',
        title: 'Krótkie, Ale Regularne Ćwiczenia',
        body: 'Bardziej efektywne jest ćwiczenie 10-15 minut dziennie niż 1 godzina raz w tygodniu.',
        bullets: [
          'Podczas śniadania - 5 szybkich pytań',
          'W drodze do szkoły - licz po 2, po 5',
          'Przed snem - 5-minutowe powtórzenie',
          'W weekendy - gry mnożące',
        ],
      },
      {
        emoji: '🎮',
        title: 'Nauka Oparta na Grach',
        body: 'Przekształcanie nauki w grę zwiększa zarówno motywację, jak i zapamiętywanie.',
        bullets: [
          'Użyj gier na tej stronie',
          'Graj w gry karciane mnożenia',
          'Organizuj rodzinne zawody',
          'Oferuj małe nagrody za osiągnięcia',
        ],
      },
    ],

    funActivitiesHeading: 'Zabawne Aktywności w Domu',
    funActivitiesCards: [
      {
        emoji: '🏏',
        title: 'Gry Karciane',
        subcards: [
          { title: 'Wojna Mnożenia', body: 'Wyciągnij dwie karty i pomnóż je. Poprawna odpowiedź zdobywa punkty!' },
          { title: 'Memory Mnożenia', body: 'Dopasuj karty z pytaniami do kart z odpowiedziami - jak gra w memory!' },
        ],
      },
      {
        emoji: '🍳',
        title: 'Matematyka w Kuchni',
        body: 'Używaj tabliczki mnożenia podczas gotowania:',
        bullets: [
          '"Jeśli potrzebujemy 2 jajek na naleśnik i robimy 4 naleśniki, ile jajek potrzebujemy?"',
          '"Jeśli przepis jest dla 3 osób, a nas jest 6, ile potrzebujemy?"',
          'Liczenie łyżek, odmierzanie składników',
        ],
      },
      {
        emoji: '🛒',
        title: 'Ćwiczenia Mnożenia w Sklepie Spożywczym',
        bullets: [
          '"3 jogurty kosztują 2 zł każdy, ile razem?"',
          '"Torba jabłek ma 6 jabłek. Jeśli kupimy 4 torby, ile jabłek?"',
          'Porównywanie cen, obliczanie oszczędności',
        ],
      },
      {
        emoji: '🎨',
        title: 'Twórcze Aktywności',
        bullets: [
          'Twórz plakaty z tabliczkami mnożenia',
          'Pisz piosenki lub rymowanki mnożenia',
          'Rzucaj kostkami i mnóż wyniki',
          'Twórz historie z problemami mnożenia',
        ],
      },
    ],

    challengesHeading: 'Typowe Wyzwania i Rozwiązania',
    challenges: [
      {
        question: 'Moje dziecko boi się/unika tabliczki mnożenia',
        solutionLabel: 'Rozwiązanie:',
        paragraphs: [
          'Zacznij od łatwych tabliczek (1, 2, 5, 10), aby budować pewność siebie. Skup się na postępach, a nie perfekcji. Świętuj każde małe osiągnięcie.',
          'Unikaj wywierania presji lub tworzenia niepokoju. Nauka powinna być zabawna, a nie stresująca.',
        ],
      },
      {
        question: 'Zapamiętuje, ale nie rozumie koncepcji',
        solutionLabel: 'Rozwiązanie:',
        paragraphs: [
          'Używaj konkretnych przedmiotów i modeli wizualnych. Pokaż, że 3×4 oznacza "3 grupy po 4" lub "4+4+4".',
          'Używaj tablic z przedmiotów, rysunków, manipulatywów. Zrozumienie koncepcyjne jest ważniejsze niż mechaniczne zapamiętywanie.',
        ],
      },
      {
        question: 'Myli tabliczki mnożenia ze sobą',
        solutionLabel: 'Rozwiązanie:',
        paragraphs: [
          'Skup się na jednej tabliczce na raz. Ćwicz jedną dobrze, zanim przejdziesz do następnej.',
          'Używaj kodowania kolorami lub skojarzeń wizualnych dla różnych tabliczek. Ćwicz różnicowanie: "Czy to 3×4 czy 4×3?"',
        ],
      },
      {
        question: 'Zapomina tego, czego się wcześniej nauczyło',
        solutionLabel: 'Rozwiązanie:',
        paragraphs: [
          'Regularne powtórzenia są niezbędne. Ćwicz wcześniej nauczone tabliczki razem z nowymi.',
          'Stwórz harmonogram powtórek: każdego tygodnia uwzględniaj stare tabliczki. Używaj gier, aby powtórki były zabawne.',
        ],
      },
    ],

    motivationHeading: 'Jak Utrzymać Wysoką Motywację',
    motivationDoHeading: '✅ Rób',
    motivationDoItems: [
      'Chwal wysiłek, nie tylko poprawne odpowiedzi',
      'Świętuj postępy małymi nagrodami',
      'Przekształć naukę w grę',
      'Ustalaj osiągalne cele',
      'Twórz wspierające środowisko bez presji',
    ],
    motivationAvoidHeading: '❌ Unikaj',
    motivationAvoidItems: [
      'Porównywania z rodzeństwem lub innymi dziećmi',
      'Tworzenia presji lub niepokoju o błędy',
      'Długich, nudnych sesji ćwiczeń',
      'Używania negatywnego języka ("To jest łatwe, dlaczego nie możesz tego zrobić?")',
      'Oczekiwania natychmiastowej perfekcji',
    ],

    ctaHeading: 'Rozpocznij Podróż po Tabliczkach Mnożenia z Dzieckiem Już Dziś',
    ctaBody:
      'Pamiętaj, każde dziecko uczy się we własnym tempie. Dzięki Twojemu wsparciu i odpowiednim strategiom, Twoje dziecko opanuje tabliczki mnożenia. Cierpliwość, ćwiczenie i pozytywność!',
    ctaButton1Label: 'Poznaj Tabliczki Mnożenia',
    ctaButton2Label: 'Zobacz Przewodnik dla Uczniów',
    ctaButton2Target: 'students',
    ctaTipLabel: 'Złota Wskazówka:',
    ctaTipBody: 'Twoje pozytywne nastawienie do matematyki wpływa na nastawienie dziecka. Okaż entuzjazm, a dziecko też się podekscytuje!',
  },

  tr: {
    heroTitle: 'Ebeveynler İçin Çarpım Tablosu Rehberi',
    heroSubtitle: 'Çocuğunuzun çarpım tablosunu öğrenmesine nasıl destek olabilirsiniz? Bu rehber, etkili stratejiler ve pratik öneriler içerir.',
    heroCaption: 'Çocuğunuzun başarısı için rehberiniz',

    whyItMattersHeading: 'Neden Önemli?',
    whyItMattersIntro:
      'Çarpım tablosu, çocuğunuzun matematik yolculuğunda atması gereken en önemli adımlardan biridir. Sadece matematik değil, problem çözme, mantıksal düşünme ve özgüven gelişimi için de kritik öneme sahiptir.',
    whyItMattersCards: [
      { title: 'Temel Beceri', body: 'Gelecekteki tüm matematik konuları için sağlam bir temel oluşturur.' },
      { title: 'Özgüven', body: 'Başarı, çocuğunuzun matematiğe olan güvenini artırır.' },
      { title: 'Günlük Hayat', body: 'Alışveriş, ölçüm ve zamanlama gibi günlük işlemlerde kullanılır.' },
    ],

    supportHeading: 'Etkili Öğrenme Stratejileri',
    supportStrategies: [
      {
        title: 'Küçük Adımlarla İlerleyin',
        body: 'Tüm tabloları aynı anda öğretmeye çalışmayın. Önce basit tablolardan (1, 2, 5, 10) başlayın.',
        bullets: [
          'Günde sadece bir tabloya odaklanın',
          'Yeni tabloya geçmeden önce eski tabloyu pekiştirin',
          'Zor tabloları parçalara ayırın',
        ],
      },
      {
        title: 'Günlük Hayata Entegre Edin',
        body: 'Çarpım tablosunu soyut sayılar yerine gerçek yaşam durumlarıyla öğretin.',
        boxLabel: 'Örnekler:',
        bullets: [
          '"4 kişi var, herkese 3 çikolata verirsek kaç çikolata lazım?"',
          '"6 günde her gün 5 sayfa okursan toplamda kaç sayfa okumuş olursun?"',
          '"Alışverişte 7 lira olan üründen 4 tane alırsak ne kadar öderiz?"',
        ],
      },
      {
        title: 'Görsel Araçlar Kullanın',
        body: 'Soyut kavramları somutlaştırmak için nesneler, çizimler ve modellerden yararlanın.',
        subgroups: [
          { title: 'Fiziksel Materyaller', items: ['Lego blokları', 'Taşlar veya düğmeler', 'Meyve parçaları'] },
          { title: 'Çizim ve Şemalar', items: ['Diziler halinde nokta çizimi', 'Dikdörtgen alanlar', 'Sayı doğrusu'] },
        ],
      },
      {
        title: 'Oyunlaştırma Tekniklerini Uygulayın',
        body: 'Öğrenmeyi eğlenceli hale getirerek motivasyonu artırın.',
        subcards: [
          { title: 'Kart Oyunları', body: 'İki kart çekin ve çarpımlarını hesaplayın. Doğru cevap puanı getirir!' },
          { title: 'Zaman Yarışı', body: 'Kronometreyle 1 dakikada kaç soruya doğru cevap verilebileceğini ölçün.' },
          { title: 'Ödül Sistemi', body: 'Her tamamlanan tablo için çıkartma veya yıldız toplayın.' },
        ],
      },
    ],

    funActivitiesHeading: 'Ev İçi Pratik Aktiviteleri',
    funActivitiesCards: [
      {
        title: 'Mutfak Matematiği',
        body: 'Yemek yaparken çarpım tablosunu kullanın:',
        bullets: ['"4 kişi için 2\'şer kurabiye = 4 × 2 = 8 kurabiye"', 'Tarif miktarlarını 2 veya 3 ile çarpma', 'Sofra düzeninde tabak sayısı hesaplama'],
      },
      {
        title: 'Alışveriş Hesaplamaları',
        body: 'Market veya mağazada çarpım pratiği:',
        bullets: ['"3 lira olan üründen 4 tane ne kadar eder?"', 'İndirim hesaplamaları', 'Toplam fiyat tahmini'],
      },
      {
        title: 'Zaman Yönetimi',
        body: 'Saat ve süre hesaplamalarıyla pratik:',
        bullets: ['"5 dakikada 3 sayfa okursan, 15 dakikada kaç sayfa?"', 'Günlük rutin hesaplamaları', 'Süre çarpanları'],
      },
      {
        title: 'Oyun Zamanı',
        body: 'Eğlenceli oyunlarla pekiştirme:',
        bullets: ['Araba yolculuğunda soru-cevap', 'Zar atma ve çarpım hesaplama', 'Online eğitici oyunlar'],
      },
    ],

    challengesHeading: 'Yaygın Zorluklar ve Çözümleri',
    challenges: [
      {
        question: 'Çocuğum çarpım tablosundan korkuyor/kaçınıyor',
        solutionLabel: 'Çözüm:',
        bullets: [
          'Basit tablolardan başlayarak özgüven oluşturun (1, 2, 5, 10)',
          'Başarıları büyük yapın, küçük adımları kutlayın',
          'Matematik yerine "oyun" veya "aktivite" olarak adlandırın',
          'Baskı yapmayın, sabırlı olun',
        ],
      },
      {
        question: 'Öğrendiği tabloları unutuyor',
        solutionLabel: 'Çözüm:',
        bullets: [
          'Düzenli tekrar yapın (günlük kısa seanslar)',
          'Farklı yöntemlerle pekiştirin (yazma, söyleme, görsel)',
          'Günlük hayatta kullanma fırsatları yaratın',
          'Aralıklı tekrar sistemi uygulayın (1 gün, 3 gün, 1 hafta)',
        ],
      },
      {
        question: 'Bazı tablolarda takılıp kalıyor (özellikle 7, 8, 9)',
        solutionLabel: 'Çözüm:',
        bullets: [
          'Bu tabloları daha küçük parçalara bölün',
          'Özel püf noktaları ve desenler öğretin',
          '9 tablosu için parmak yöntemi kullanın',
          'Zor tablolara daha fazla zaman ayırın',
          'İlişkileri gösterin (8×6 = 4×6 + 4×6)',
        ],
      },
      {
        question: 'Çalışmaya zaman ayıramıyoruz',
        solutionLabel: 'Çözüm:',
        bullets: [
          'Günlük rutinlere entegre edin (kahvaltıda, arabada, yatmadan önce)',
          'Kısa seanslar yapın (10-15 dakika yeterli)',
          'Günlük aktivitelerde doğal olarak kullanın',
          'Kalite, süredan önemlidir',
        ],
      },
    ],

    motivationHeading: 'Motivasyon Teknikleri',
    motivationDoHeading: 'Yapılması Gerekenler',
    motivationDoItems: [
      'Çocuğunuzun çabalarını övün, sonucu değil süreci vurgulayın',
      'Küçük başarıları kutlayın',
      'Sabırlı olun ve pozitif kalın',
      'Öğrenmeyi günlük rutine dahil edin',
      'Hataları öğrenme fırsatı olarak görün',
    ],
    motivationAvoidHeading: 'Yapılmaması Gerekenler',
    motivationAvoidItems: [
      'Başka çocuklarla karşılaştırmayın',
      'Baskı yapmayın veya cezalandırmayın',
      'Çok uzun çalışma seansları yapmayın',
      'Sadece ezbere dayalı öğretmeyin',
      'Olumsuz dil kullanmayın ("Matematik zordur" gibi)',
    ],

    weeklyPlan: {
      heading: 'Örnek Haftalık Çalışma Planı',
      format: 'table',
      note: 'Not: Bu plan esnek tutulmalıdır. Çocuğunuzun yorgunluk durumuna göre süreleri ayarlayın.',
      tableRows: [
        { day: 'Pazartesi', activity: 'Yeni tablo öğrenme (görsel araçlarla)', duration: '15 dakika' },
        { day: 'Salı', activity: 'Önceki gün öğrenilen tablonun tekrarı', duration: '10 dakika' },
        { day: 'Çarşamba', activity: 'Oyunlarla pratik yapma', duration: '20 dakika' },
        { day: 'Perşembe', activity: 'Günlük hayat problemleri', duration: '15 dakika' },
        { day: 'Cuma', activity: 'Haftanın tüm tablolarını gözden geçirme', duration: '15 dakika' },
        { day: 'Cumartesi', activity: 'Eğlenceli oyunlar ve yarışmalar', duration: '30 dakika' },
        { day: 'Pazar', activity: 'Dinlenme (isteğe bağlı hafif tekrar)', duration: '-' },
      ],
    },

    progressTracking: {
      heading: 'İlerleme Takip Yöntemleri',
      items: [
        {
          title: '1. Görsel İlerleme Tablosu',
          body: 'Duvara asabileceğiniz bir tablo oluşturun. Her öğrenilen tablo için bir çıkartma veya yıldız ekleyin.',
          tip: 'Örnek: 1-10 arası tablolar için 10 kutucuklu bir tablo, her başarılı tablo için bir kutu boyama.',
        },
        {
          title: '2. Haftalık Mini Testler',
          body: 'Her hafta sonu 5 dakikalık bir quiz yapın. Sonuçları kaydedin.',
          tip: 'İpucu: Doğru/yanlış sayısı yerine "bu hafta şu kadar geliştin" şeklinde pozitif geri bildirim verin.',
        },
        {
          title: '3. Zaman Takibi',
          body: 'Aynı soruları farklı zamanlarda çözdürün ve süreyi ölçün. Hız artışı motivasyon sağlar.',
          tip: 'Önemli: Hızdan çok doğruluğu vurgulayın. Hız zaten zamanla gelecektir.',
        },
      ],
    },

    ctaHeading: 'Hemen Başlayın!',
    ctaBody: 'Çocuğunuzla birlikte çarpım tablosu yolculuğuna bugün başlayın. Unutmayın, her çocuk kendi hızında öğrenir ve sizin desteğiniz en değerli kaynaktır.',
    ctaButton1Label: 'Tablolara Başla',
    ctaButton2Label: 'Ana Sayfaya Dön',
    ctaButton2Target: 'topicHome',
  },

  id: {
    heroTitle: 'Panduan Tabel Perkalian untuk Orang Tua',
    heroSubtitle: 'Bagaimana mendukung anak Anda dalam belajar tabel perkalian? Panduan ini berisi strategi efektif dan saran praktis.',
    heroCaption: 'Panduan Anda untuk kesuksesan anak Anda',

    whyItMattersHeading: 'Mengapa Ini Penting?',
    whyItMattersIntro:
      'Tabel perkalian adalah salah satu langkah paling penting dalam perjalanan matematika anak Anda. Tidak hanya untuk matematika, tetapi mereka juga memiliki kepentingan kritis untuk mengembangkan keterampilan pemecahan masalah, pemikiran logis, dan kepercayaan diri.',
    whyItMattersCards: [
      { title: 'Dasar untuk Matematika Lanjutan', body: 'Pembagian, pecahan, aljabar - semuanya bergantung pada tabel perkalian.' },
      { title: 'Kepercayaan Diri Akademis', body: 'Keberhasilan dalam tabel perkalian meningkatkan kepercayaan diri secara keseluruhan di sekolah.' },
      { title: 'Keterampilan Hidup', body: 'Perhitungan cepat berguna saat berbelanja, memasak, dan dalam kehidupan sehari-hari.' },
    ],

    supportHeading: 'Strategi Dukungan di Rumah',
    supportStrategies: [
      {
        emoji: '🎯',
        title: 'Jadikan Konkret',
        body: 'Ajarkan tabel perkalian dengan situasi kehidupan nyata daripada angka abstrak.',
        bullets: [
          '"Jika kamu punya 3 kotak dan 4 apel di setiap kotak, berapa total apelnya?"',
          '"Karton telur berisi 6 telur. Berapa telur dalam 4 karton?"',
          'Gunakan objek fisik (kancing, permen, mainan) untuk memvisualisasikan',
        ],
      },
      {
        emoji: '⏰',
        title: 'Latihan Singkat tetapi Teratur',
        body: 'Lebih efektif berlatih 10-15 menit per hari daripada 1 jam seminggu sekali.',
        bullets: [
          'Saat sarapan - 5 pertanyaan cepat',
          'Dalam perjalanan ke sekolah - hitung dengan 2, dengan 5',
          'Sebelum tidur - review 5 menit',
          'Di akhir pekan - permainan perkalian',
        ],
      },
      {
        emoji: '🎮',
        title: 'Pembelajaran Berbasis Permainan',
        body: 'Mengubah pembelajaran menjadi permainan meningkatkan motivasi dan retensi.',
        bullets: [
          'Gunakan permainan di situs ini',
          'Mainkan permainan kartu perkalian',
          'Adakan kompetisi keluarga',
          'Tawarkan hadiah kecil untuk pencapaian',
        ],
      },
      {
        emoji: '🎨',
        title: 'Visualisasi dan Seni',
        body: 'Buat pembelajaran visual dan kreatif untuk meningkatkan pemahaman.',
        bullets: [
          'Buat poster tabel perkalian berwarna-warni bersama',
          'Gambar array dan pola',
          'Gunakan krayon atau spidol untuk membuat grafik',
          'Buat kartu flash yang dihias sendiri',
        ],
      },
      {
        emoji: '💬',
        title: 'Dorongan Positif',
        body: 'Fokus pada kemajuan dan usaha, bukan hanya hasil akhir.',
        bullets: [
          '"Saya bangga dengan usahamu!" bukan "Kenapa kamu tidak bisa?"',
          'Rayakan setiap kemajuan kecil',
          'Buat lingkungan belajar yang bebas dari kritik',
          'Tunjukkan bahwa kesalahan adalah bagian dari pembelajaran',
        ],
      },
    ],

    funActivitiesHeading: 'Aktivitas Menyenangkan di Rumah',
    funActivitiesCards: [
      {
        emoji: '🏏',
        title: 'Permainan Kartu',
        subcards: [
          { title: 'Perang Perkalian', body: 'Ambil dua kartu dan kalikan. Jawaban yang benar mendapat poin!' },
          { title: 'Ingatan Perkalian', body: 'Cocokkan kartu pertanyaan dengan kartu jawaban - seperti permainan memori!' },
          { title: 'UNO Perkalian', body: 'Sebelum meletakkan kartu, kalikan angkanya dengan angka di atas kartu!' },
        ],
      },
      {
        emoji: '🍳',
        title: 'Matematika Dapur',
        body: 'Gunakan tabel perkalian saat memasak:',
        bullets: [
          '"Jika kita butuh 2 telur per pancake dan kita membuat 4 pancake, berapa telur yang kita butuhkan?"',
          '"Jika resep untuk 3 orang dan kita 6 orang, berapa banyak yang kita butuhkan?"',
          'Menghitung sendok, mengukur bahan',
          'Menggandakan atau membagi resep',
          '"Berapa potong pizza untuk semua orang jika setiap orang makan 2 potong?"',
        ],
      },
      {
        emoji: '🛒',
        title: 'Latihan Perkalian di Toko Kelontong',
        bullets: [
          '"3 yogurt masing-masing Rp10.000, berapa totalnya?"',
          '"Sekantong apel berisi 6 apel. Jika kita beli 4 kantong, berapa apelnya?"',
          'Bandingkan harga, hitung penghematan',
          '"Jika kita beli 5 kotak dengan masing-masing 8 batang cokelat, berapa total batangnya?"',
          'Hitung total belanjaan dengan perkalian mental',
        ],
      },
      {
        emoji: '🎨',
        title: 'Aktivitas Kreatif',
        bullets: [
          'Buat poster tabel perkalian',
          'Tulis lagu atau sajak perkalian',
          'Lempar dadu dan kalikan hasilnya',
          'Buat cerita dengan soal perkalian',
          'Buat rangkaian bunga atau manik-manik dalam kelompok (3 kelompok dari 4 = 12)',
          'Lukis pola perkalian dengan cat',
        ],
      },
      {
        emoji: '🎵',
        title: 'Musik dan Gerakan',
        bullets: [
          'Nyanyikan tabel perkalian mengikuti melodi favorit',
          'Buat rap atau irama dengan tabel perkalian',
          'Loncati tali sambil menyanyikan tabel perkalian',
          'Gunakan gerakan tangan untuk setiap tabel',
          'Cari lagu perkalian di YouTube atau musik anak-anak',
        ],
      },
      {
        emoji: '🎯',
        title: 'Permainan Keluarga',
        bullets: [
          'Kompetisi mingguan dengan papan skor',
          'Siapa yang bisa menjawab 10 soal paling cepat?',
          'Buat perburuan harta karun dengan soal perkalian',
          'Permainan papan dengan tantangan perkalian',
          'Video game edukatif tentang perkalian',
        ],
      },
    ],

    challengesHeading: 'Tantangan Umum dan Solusi',
    challenges: [
      {
        question: 'Anak saya takut/menghindari tabel perkalian',
        solutionLabel: 'Solusi:',
        paragraphs: [
          'Mulai dengan tabel yang mudah (1, 2, 5, 10) untuk membangun kepercayaan diri. Fokus pada kemajuan, bukan kesempurnaan. Rayakan setiap pencapaian kecil.',
          'Hindari menekan atau menciptakan kecemasan. Pembelajaran harus menyenangkan, bukan stres.',
        ],
        tip: 'Tip: Ubah tabel perkalian menjadi permainan, bukan "pekerjaan rumah".',
      },
      {
        question: 'Menghafal tetapi tidak memahami konsepnya',
        solutionLabel: 'Solusi:',
        paragraphs: [
          'Gunakan objek konkret dan model visual. Tunjukkan bahwa 3×4 berarti "3 kelompok dari 4" atau "4+4+4".',
          'Gunakan array objek, gambar, manipulatif. Pemahaman konseptual lebih penting dari hafalan mekanis.',
        ],
        tip: 'Tip: Selalu tanyakan "Bisakah kamu menunjukkan padaku bagaimana kamu mendapat jawaban itu?"',
      },
      {
        question: 'Membingungkan tabel perkalian satu sama lain',
        solutionLabel: 'Solusi:',
        paragraphs: [
          'Fokus pada satu tabel pada satu waktu. Latih satu dengan baik sebelum pindah ke yang berikutnya.',
          'Gunakan kode warna atau asosiasi visual untuk tabel yang berbeda. Latih diferensiasi: "Apakah ini 3×4 atau 4×3?"',
        ],
        tip: 'Tip: Buat kartu flash berwarna - satu warna untuk setiap tabel.',
      },
      {
        question: 'Melupakan apa yang sudah dipelajari sebelumnya',
        solutionLabel: 'Solusi:',
        paragraphs: [
          'Review teratur adalah kunci. Latih tabel yang sudah dipelajari sebelumnya bersama dengan yang baru.',
          'Buat jadwal review: setiap minggu sertakan tabel lama. Gunakan permainan untuk membuat review menyenangkan.',
        ],
        tip: 'Tip: Review pagi 5 menit dari semua tabel yang sudah dipelajari mencegah lupa.',
      },
      {
        question: 'Terlalu lambat dalam menghitung',
        solutionLabel: 'Solusi:',
        paragraphs: [
          'Kecepatan datang dengan latihan teratur. Mulai dengan akurasi, kecepatan akan mengikuti.',
          'Gunakan latihan waktu dalam dosis kecil (1-2 menit), tingkatkan secara bertahap. Jangan buat anak tertekan.',
        ],
        tip: 'Tip: Rekam waktu anak sendiri dan dorong mereka untuk mengalahkan rekor pribadi mereka, bukan anak lain.',
      },
      {
        question: 'Kehilangan motivasi atau frustrasi',
        solutionLabel: 'Solusi:',
        paragraphs: [
          'Jadikan pembelajaran menyenangkan dengan permainan dan aktivitas. Beri mereka pilihan dalam cara mereka berlatih.',
          'Istirahat teratur, jangan memaksa sesi panjang. Rayakan upaya dan kemajuan, bukan hanya hasil akhir.',
        ],
        tip: 'Tip: Jika anak frustrasi, berhenti dan lakukan sesuatu yang menyenangkan. Kembali lagi nanti dengan sikap segar.',
      },
    ],

    motivationHeading: 'Cara Menjaga Motivasi Tetap Tinggi',
    motivationDoHeading: '✅ Lakukan',
    motivationDoItems: [
      'Puji usaha, bukan hanya jawaban yang benar',
      'Rayakan kemajuan dengan hadiah kecil',
      'Jadikan pembelajaran sebagai permainan',
      'Tetapkan tujuan yang dapat dicapai',
      'Ciptakan lingkungan yang mendukung, bebas tekanan',
      'Belajar bersama dan tunjukkan minat Anda',
      'Gunakan sistem reward yang jelas (stiker, bintang)',
    ],
    motivationAvoidHeading: '❌ Hindari',
    motivationAvoidItems: [
      'Membandingkan dengan saudara atau anak lain',
      'Menciptakan tekanan atau kecemasan tentang kesalahan',
      'Sesi latihan yang panjang dan membosankan',
      'Menggunakan bahasa negatif ("Ini mudah, kenapa kamu tidak bisa?")',
      'Mengharapkan kesempurnaan segera',
      'Berlatih ketika anak lelah atau lapar',
      'Membuat tabel perkalian terasa seperti hukuman',
    ],

    weeklyPlan: {
      heading: 'Rencana Mingguan yang Disarankan',
      format: 'blocks',
      note: 'Ini adalah panduan fleksibel. Sesuaikan dengan jadwal keluarga Anda dan kecepatan belajar anak Anda. Yang paling penting adalah konsistensi, bukan kesempurnaan!',
      blocks: [
        { title: 'Senin & Selasa: Pelajari Tabel Baru', body: 'Perkenalkan satu tabel baru. Gunakan manipulatif, gambar, dan aplikasi dunia nyata. 15-20 menit per hari.' },
        { title: 'Rabu & Kamis: Latih dan Perkuat', body: 'Latih tabel baru dengan permainan dan aktivitas. Mulai review tabel sebelumnya. 15 menit per hari.' },
        { title: 'Jumat: Review Semua Tabel', body: 'Review semua tabel yang sudah dipelajari dengan permainan cepat atau kuis. 10-15 menit.' },
        { title: 'Akhir Pekan: Aktivitas Menyenangkan', body: 'Gunakan tabel perkalian dalam aktivitas kehidupan nyata: memasak, berbelanja, permainan keluarga. Santai dan menyenangkan!' },
      ],
    },

    whenToSeekHelp: {
      heading: 'Kapan Harus Mencari Bantuan',
      intro:
        'Sebagian besar anak akan menguasai tabel perkalian dengan latihan dan dukungan yang tepat. Namun, jika Anda melihat tanda-tanda berikut, pertimbangkan untuk berbicara dengan guru atau spesialis:',
      signsColumn1: [
        { icon: '⚠️', title: 'Kesulitan Berkelanjutan', body: 'Setelah berbulan-bulan latihan teratur, anak masih sangat kesulitan mengingat bahkan tabel yang paling mudah.' },
        { icon: '😰', title: 'Kecemasan Ekstrem', body: 'Anak menunjukkan tanda-tanda kecemasan atau stres yang signifikan ketika menghadapi matematika.' },
        { icon: '🔢', title: 'Masalah Pemrosesan Angka', body: 'Anak memiliki kesulitan dengan konsep angka dasar, tidak hanya tabel perkalian.' },
      ],
      signsColumn2: [
        { icon: '📉', title: 'Regresi', body: 'Anak yang sebelumnya menguasai tabel perkalian tiba-tiba kehilangan kemampuan tersebut.' },
        { icon: '🎯', title: 'Kesenjangan Besar', body: 'Anak jauh di belakang teman sebaya meskipun upaya dan dukungan yang memadai.' },
        { icon: '💔', title: 'Kepercayaan Diri Rendah', body: 'Anak secara konsisten mengatakan "Saya bodoh" atau "Saya tidak bisa melakukan matematika."' },
      ],
      resourceLabel: 'Sumber Bantuan:',
      resourceBody: 'Mulai dengan guru kelas anak Anda. Mereka dapat merekomendasikan tutor, spesialis pendidikan, atau evaluasi untuk kesulitan belajar seperti diskalkulia jika diperlukan.',
    },

    ctaHeading: 'Mulai Perjalanan Tabel Perkalian dengan Anak Anda Hari Ini',
    ctaBody:
      'Ingat, setiap anak belajar dengan kecepatan mereka sendiri. Dengan dukungan Anda dan strategi yang tepat, anak Anda akan menguasai tabel perkalian. Kesabaran, latihan, dan positivitas!',
    ctaButton1Label: 'Jelajahi Tabel Perkalian',
    ctaButton2Label: 'Lihat Panduan untuk Siswa',
    ctaButton2Target: 'students',
    ctaTipLabel: 'Tip Emas:',
    ctaTipBody: 'Sikap positif Anda terhadap matematika mempengaruhi sikap anak Anda. Tunjukkan antusiasme dan anak Anda juga akan bersemangat!',
  },
}
