import { Locale } from './i18n-config'

/**
 * UI strings for the per-number page (`UniversalNumberPage`), structurally parallel
 * to `lib/header-translations.ts`.
 *
 * Fields ending in a description that mentions "{number}", "{rangeStart}", "{rangeEnd}"
 * or "{product4}" are *patterns*: the component fills these tokens in with `fillTemplate()`
 * before rendering. Fields without placeholders are used as plain strings.
 */
export interface NumberPageTranslations {
  /** '{number} Times Table' — hero h1, table card heading, print popup title/h1,
   *  download canvas title, and (with number-1 / number+1) the prev/next card titles. */
  pageTitle: string
  /** Hero paragraph. Pattern: {number} */
  heroDescription: string
  statOperations: string
  statGames: string
  statExercises: string
  ctaPractice: string
  ctaGames: string
  ctaWorksheets: string
  ctaWorksheetsShort: string

  /** Pattern: {number} */
  visualIntroHeading: string
  /** Pattern: {number} */
  visualIntroText: string
  /** Pattern: {number} */
  visualIntroTip: string

  /** Pattern: {number} */
  meaningHeading: string
  simpleExplanationHeading: string
  /** Pattern: {number}, {product4} */
  simpleExplanationText: string
  /** Pattern: {number} */
  whyImportantHeading: string

  printLabel: string
  printTitle: string
  /** Pattern: {number} */
  printAriaLabel: string
  downloadLabel: string
  downloadTitle: string
  /** Pattern: {number} */
  downloadAriaLabel: string
  /** Console-only text logged if canvas download fails. Pattern: none. */
  downloadErrorMessage: string

  /** Pattern: {number} */
  patternsHeading: string
  /** Pattern: {number} */
  patternsIntro: string

  /** Pattern: {number} */
  practiceHeading: string
  /** Pattern: {number} */
  practiceIntro: string

  /** Pattern: {number} */
  mistakesHeading: string
  mistakesIntro: string
  solutionLabel: string

  relatedHeading: string
  /** Pattern: {number} */
  relatedIntro: string
  prevLabel: string
  nextLabel: string
  parentRangeLabel: string
  /** Pattern: {rangeStart}, {rangeEnd} */
  parentRangeText: string
  parentRangeDescription: string
}

export const numberPageTranslations: Record<Locale, NumberPageTranslations> = {
  tr: {
    pageTitle: '{number} Çarpım Tablosu',
    heroDescription:
      'Bu sayfa, {number} çarpım tablosunu öğrenmenize ve anlamanıza yardımcı olacaktır. {number}\'in çarpmada nasıl davrandığını keşfedecek, desenlerini görecek ve ustalaşmak için pratik yollar öğreneceksiniz.',
    statOperations: 'İşlem',
    statGames: 'Oyun',
    statExercises: 'Pratik',
    ctaPractice: 'Pratik Yap',
    ctaGames: 'Oyunları Keşfet',
    ctaWorksheets: 'Alıştırma İndir',
    ctaWorksheetsShort: 'İndir',
    visualIntroHeading: '{number} Çarpım Tablosu Neyi Kapsar?',
    visualIntroText:
      '{number} çarpım tablosu, {number} sayısının 1\'den 10\'a kadar olan tüm sayılarla çarpımını kapsar. Bu size günlük hayatta ve ileri matematik konularında çok yardımcı olacak 10 temel işlemi öğretir.',
    visualIntroTip:
      '{number} çarpım tablosunda 10 çarpma işlemi var. Bu tablodaki desenleri anlayarak, bu işlemleri kolayca ezberleyebilir ve hızlı bir şekilde hesaplayabilirsiniz!',
    meaningHeading: '{number} Sayısı Çarpmada Ne Anlama Gelir?',
    simpleExplanationHeading: 'Basit Açıklama',
    simpleExplanationText:
      '{number} × 4 gördüğünüzde şunu düşünün: "4 grubum var ve her grupta {number} öğe var." Yani {number} × 4 = {number} + {number} + {number} + {number} = {product4}.',
    whyImportantHeading: '{number} Çarpım Tablosunu Öğrenmek Neden Önemlidir',
    printLabel: 'Yazdır',
    printTitle: 'Yazdır',
    printAriaLabel: '{number} çarpım tablosunu yazdır',
    downloadLabel: 'İndir',
    downloadTitle: 'İndir',
    downloadAriaLabel: '{number} çarpım tablosunu görsel olarak indir',
    downloadErrorMessage: 'İndirme başarısız oldu:',
    patternsHeading: '{number} Çarpım Tablosundaki Desenler',
    patternsIntro:
      'Desenleri anlamak öğrenmeyi daha kolay ve eğlenceli hale getirir. {number} çarpım tablosu, salt ezberleme yapmadan hatırlamanıza yardımcı olabilecek güzel desenlere sahiptir.',
    practiceHeading: '{number} Çarpım Tablosu Nasıl Pratik Yapılır',
    practiceIntro:
      'Çarpım tablolarını öğrenmek doğru stratejilerle tutarlı pratik gerektirir. İşte özellikle {number} çarpım tablosunda ustalaşmak için kanıtlanmış yöntemler:',
    mistakesHeading: '{number} Tablosunu Öğrenirken Yapılan Yaygın Hatalar',
    mistakesIntro:
      'Birçok öğrenci bu tabloyu öğrenirken benzer hatalar yapar. Bu yaygın hataların farkında olmak, onlardan kaçınmanıza ve daha verimli öğrenmenize yardımcı olacaktır.',
    solutionLabel: 'Çözüm:',
    relatedHeading: 'İlgili Çarpım Tabloları',
    relatedIntro:
      '{number} çarpım tablosu daha büyük bir öğrenme sisteminin parçasıdır. Aynı aralıktaki diğer tabloları keşfedebilir veya bir sonraki mantıksal sayıya geçebilirsiniz.',
    prevLabel: '← Önceki Sayı',
    nextLabel: 'Sonraki Sayı →',
    parentRangeLabel: '↑ Üst Aralık',
    parentRangeText: '{rangeStart}\'den {rangeEnd}\'a Çarpım Tabloları',
    parentRangeDescription: 'Bu aralıktaki tüm çarpım tablolarını pratik araçları ve oyunlarla keşfedin',
  },

  es: {
    pageTitle: 'Tabla del {number}',
    heroDescription:
      'Esta página te ayudará a aprender y comprender la tabla del {number}. Descubrirás cómo se comporta el {number} en la multiplicación, verás sus patrones y aprenderás formas prácticas de dominarla.',
    statOperations: 'Operaciones',
    statGames: 'Juegos',
    statExercises: 'Práctica',
    ctaPractice: 'Practicar',
    ctaGames: 'Explorar Juegos',
    ctaWorksheets: 'Descargar Ejercicios',
    ctaWorksheetsShort: 'Descargar',
    visualIntroHeading: '¿Qué Cubre la Tabla del {number}?',
    visualIntroText:
      'La tabla del {number} cubre el producto del número {number} con todos los números del 1 al 10. Esto te enseña 10 operaciones básicas que te ayudarán mucho en la vida diaria y en temas matemáticos avanzados.',
    visualIntroTip:
      'La tabla del {number} tiene 10 operaciones de multiplicación. Si comprendes los patrones de esta tabla, podrás aprender estas operaciones fácilmente y calcular rápidamente.',
    meaningHeading: '¿Qué Significa el Número {number} en la Multiplicación?',
    simpleExplanationHeading: 'Explicación Simple',
    simpleExplanationText:
      'Cuando ves {number} × 4, piensa: "Tengo 4 grupos y cada grupo tiene {number} elementos." Entonces {number} × 4 = {number} + {number} + {number} + {number} = {product4}.',
    whyImportantHeading: 'Por Qué Es Importante Aprender la Tabla del {number}',
    printLabel: 'Imprimir',
    printTitle: 'Imprimir',
    printAriaLabel: 'Imprimir la tabla del {number}',
    downloadLabel: 'Descargar',
    downloadTitle: 'Descargar',
    downloadAriaLabel: 'Descargar la tabla del {number} como imagen',
    downloadErrorMessage: 'Error al descargar:',
    patternsHeading: 'Patrones en la Tabla del {number}',
    patternsIntro:
      'Entender los patrones hace que el aprendizaje sea más fácil y divertido. La tabla del {number} tiene hermosos patrones que pueden ayudarte a recordarla sin memorizar de memoria.',
    practiceHeading: 'Cómo Practicar la Tabla del {number}',
    practiceIntro:
      'Aprender las tablas de multiplicar requiere práctica consistente con las estrategias correctas. Aquí hay métodos comprobados para dominar específicamente la tabla del {number}:',
    mistakesHeading: 'Errores Comunes al Aprender la Tabla del {number}',
    mistakesIntro:
      'Muchos estudiantes cometen errores similares al aprender esta tabla. Ser consciente de estos errores comunes te ayudará a evitarlos y aprender de manera más efectiva.',
    solutionLabel: 'Solución:',
    relatedHeading: 'Tablas de Multiplicar Relacionadas',
    relatedIntro:
      'La tabla del {number} es parte de un sistema de aprendizaje más amplio. Puedes explorar otras tablas en el mismo rango o pasar al siguiente número lógico.',
    prevLabel: '← Número Anterior',
    nextLabel: 'Siguiente Número →',
    parentRangeLabel: '↑ Rango Superior',
    parentRangeText: 'Tablas del {rangeStart} al {rangeEnd}',
    parentRangeDescription: 'Explora todas las tablas de multiplicar en este rango con herramientas de práctica y juegos',
  },

  de: {
    pageTitle: '{number}er-Einmaleins-Tabelle',
    heroDescription:
      'Diese Seite hilft dir, das {number}er-Einmaleins zu lernen und zu verstehen. Du wirst entdecken, wie sich die {number} bei der Multiplikation verhält, ihre Muster sehen und praktische Wege lernen, um sie zu beherrschen.',
    statOperations: 'Operationen',
    statGames: 'Spiele',
    statExercises: 'Übung',
    ctaPractice: 'Üben',
    ctaGames: 'Spiele entdecken',
    ctaWorksheets: 'Übungen herunterladen',
    ctaWorksheetsShort: 'Herunterladen',
    visualIntroHeading: 'Was deckt die {number}er-Tabelle ab?',
    visualIntroText:
      'Die {number}er-Einmaleinstabelle deckt das Produkt der Zahl {number} mit allen Zahlen von 1 bis 10 ab. Das lehrt dich 10 grundlegende Operationen, die dir sehr im Alltag und bei fortgeschrittenen mathematischen Themen helfen werden.',
    visualIntroTip:
      'Die {number}er-Tabelle hat 10 Multiplikationsoperationen. Wenn du die Muster dieser Tabelle verstehst, kannst du diese Operationen leicht lernen und schnell berechnen!',
    meaningHeading: 'Was bedeutet die Zahl {number} in der Multiplikation?',
    simpleExplanationHeading: 'Einfache Erklärung',
    simpleExplanationText:
      'Wenn du {number} × 4 siehst, denk: „Ich habe 4 Gruppen und jede Gruppe hat {number} Elemente." Also {number} × 4 = {number} + {number} + {number} + {number} = {product4}.',
    whyImportantHeading: 'Warum es wichtig ist, die {number}er-Tabelle zu lernen',
    printLabel: 'Drucken',
    printTitle: 'Drucken',
    printAriaLabel: 'Die {number}er-Tabelle drucken',
    downloadLabel: 'Herunterladen',
    downloadTitle: 'Herunterladen',
    downloadAriaLabel: 'Die {number}er-Tabelle als Bild herunterladen',
    downloadErrorMessage: 'Download fehlgeschlagen:',
    patternsHeading: 'Muster in der Einmaleins-Tabelle von {number}',
    patternsIntro:
      'Muster zu verstehen macht das Lernen einfacher und macht mehr Spaß. Die Einmaleins-Tabelle von {number} hat wunderschöne Muster, die dir helfen können, sie zu merken, ohne auswendig zu lernen.',
    practiceHeading: 'Wie man die Einmaleins-Tabelle von {number} übt',
    practiceIntro:
      'Das Lernen der Einmaleins-Tabellen erfordert konsequentes Üben mit den richtigen Strategien. Hier sind bewährte Methoden, um speziell die Einmaleins-Tabelle von {number} zu meistern:',
    mistakesHeading: 'Häufige Fehler beim Lernen der Einmaleins-Tabelle von {number}',
    mistakesIntro:
      'Viele Schüler machen ähnliche Fehler beim Lernen dieser Tabelle. Sich dieser häufigen Fehler bewusst zu sein, hilft dir, sie zu vermeiden und effektiver zu lernen.',
    solutionLabel: 'Lösung:',
    relatedHeading: 'Verwandte Einmaleins-Tabellen',
    relatedIntro:
      'Die Einmaleins-Tabelle von {number} ist Teil eines breiteren Lernsystems. Du kannst andere Tabellen im selben Bereich erkunden oder zur nächsten logischen Zahl übergehen.',
    prevLabel: '← Vorherige Zahl',
    nextLabel: 'Nächste Zahl →',
    parentRangeLabel: '↑ Übergeordneter Bereich',
    parentRangeText: 'Einmaleins-Tabellen von {rangeStart} bis {rangeEnd}',
    parentRangeDescription: 'Entdecke alle Einmaleins-Tabellen in diesem Bereich mit Übungstools und Spielen',
  },

  cs: {
    pageTitle: 'Násobilka {number}',
    heroDescription:
      'Tato stránka vám pomůže naučit se a pochopit násobilku {number}. Objevíte, jak se {number} chová při násobení, uvidíte její vzory a naučíte se praktické způsoby, jak ji zvládnout.',
    statOperations: 'Operací',
    statGames: 'Hry',
    statExercises: 'Cvičení',
    ctaPractice: 'Začít Cvičit',
    ctaGames: 'Objevit Hry',
    ctaWorksheets: 'Stáhnout Cvičení',
    ctaWorksheetsShort: 'Stáhnout',
    visualIntroHeading: 'Co pokrývá násobilka {number}?',
    visualIntroText:
      'Násobilka {number} pokrývá součin čísla {number} se všemi čísly od 1 do 10. To vás naučí 10 základních operací, které vám velmi pomůžou v každodenním životě a pokročilých matematických tématech.',
    visualIntroTip:
      'Násobilka {number} má 10 násobících operací. Pokud porozumíte vzorům této tabulky, můžete se tyto operace snadno naučit a rychle vypočítat!',
    meaningHeading: 'Co znamená číslo {number} při násobení?',
    simpleExplanationHeading: 'Jednoduché Vysvětlení',
    simpleExplanationText:
      'Když vidíte {number} × 4, myslete: "Mám 4 skupiny a každá skupina má {number} prvků." Tedy {number} × 4 = {number} + {number} + {number} + {number} = {product4}.',
    whyImportantHeading: 'Proč je důležité naučit se násobilku {number}',
    printLabel: 'Tisk',
    printTitle: 'Tisk',
    printAriaLabel: 'Vytisknout násobilku {number}',
    downloadLabel: 'Stáhnout',
    downloadTitle: 'Stáhnout',
    downloadAriaLabel: 'Stáhnout násobilku {number} jako obrázek',
    downloadErrorMessage: 'Stahování se nezdařilo:',
    patternsHeading: 'Vzory v násobilce {number}',
    patternsIntro:
      'Pochopení vzorů činí učení snadnějším a zábavnějším. Násobilka {number} má krásné vzory, které vám mohou pomoci si je zapamatovat bez memorování.',
    practiceHeading: 'Jak procvičovat násobilku {number}',
    practiceIntro:
      'Učení násobiček vyžaduje konzistentní cvičení se správnými strategiemi. Zde jsou osvědčené metody pro zvládnutí konkrétně násobilky {number}:',
    mistakesHeading: 'Časté chyby při učení násobilky {number}',
    mistakesIntro:
      'Mnoho studentů dělá podobné chyby při učení této tabulky. Uvědomění si těchto častých chyb vám pomůže se jim vyhnout a učit se efektivněji.',
    solutionLabel: 'Řešení:',
    relatedHeading: 'Související Násobilky',
    relatedIntro:
      'Násobilka {number} je součástí širšího učebního systému. Můžete prozkoumat další tabulky ve stejném rozsahu nebo přejít k dalšímu logickému číslu.',
    prevLabel: '← Předchozí číslo',
    nextLabel: 'Další číslo →',
    parentRangeLabel: '↑ Nadřazený rozsah',
    parentRangeText: 'Násobilky {rangeStart} až {rangeEnd}',
    parentRangeDescription: 'Objevte všechny násobilky v tomto rozsahu s nástroji pro cvičení a hrami',
  },

  uk: {
    pageTitle: 'Таблиця множення на {number}',
    heroDescription:
      'Ця сторінка допоможе вам вивчити та зрозуміти таблицю множення на {number}. Ви дізнаєтесь, як {number} поводиться при множенні, побачите її закономірності та навчитесь практичним способам, як її опанувати.',
    statOperations: 'Дій',
    statGames: 'Ігри',
    statExercises: 'Вправи',
    ctaPractice: 'Почати практикувати',
    ctaGames: 'Переглянути ігри',
    ctaWorksheets: 'Завантажити вправи',
    ctaWorksheetsShort: 'Завантажити',
    visualIntroHeading: 'Що охоплює таблиця множення на {number}?',
    visualIntroText:
      'Таблиця множення на {number} охоплює добуток числа {number} з усіма числами від 1 до 10. Це навчить вас 10 базових дій, які дуже допоможуть у повсякденному житті та на просунутих темах з математики.',
    visualIntroTip:
      'Таблиця множення на {number} містить 10 дій множення. Розуміючи закономірності цієї таблиці, ви зможете легко запам\'ятати ці дії та швидко рахувати!',
    meaningHeading: 'Що означає число {number} у множенні?',
    simpleExplanationHeading: 'Просте пояснення',
    simpleExplanationText:
      'Коли ви бачите {number} × 4, подумайте: «У мене 4 групи, і в кожній групі по {number} предметів». Отже, {number} × 4 = {number} + {number} + {number} + {number} = {product4}.',
    whyImportantHeading: 'Чому важливо вивчити таблицю множення на {number}',
    printLabel: 'Друк',
    printTitle: 'Друкувати',
    printAriaLabel: 'Роздрукувати таблицю множення на {number}',
    downloadLabel: 'Завантажити',
    downloadTitle: 'Завантажити',
    downloadAriaLabel: 'Завантажити таблицю множення на {number} як зображення',
    downloadErrorMessage: 'Помилка завантаження:',
    patternsHeading: 'Закономірності в таблиці множення на {number}',
    patternsIntro:
      'Розуміння закономірностей робить навчання легшим і цікавішим. Таблиця множення на {number} має красиві закономірності, які допоможуть вам запам\'ятати її без зубріння.',
    practiceHeading: 'Як практикувати таблицю множення на {number}',
    practiceIntro:
      'Вивчення таблиць множення вимагає постійної практики з правильними стратегіями. Ось перевірені методи для опанування саме таблиці множення на {number}:',
    mistakesHeading: 'Поширені помилки при вивченні таблиці множення на {number}',
    mistakesIntro:
      'Багато учнів роблять подібні помилки під час вивчення цієї таблиці. Знання цих поширених помилок допоможе вам їх уникнути та навчатися ефективніше.',
    solutionLabel: 'Рішення:',
    relatedHeading: 'Пов\'язані таблиці множення',
    relatedIntro:
      'Таблиця множення на {number} є частиною ширшої системи навчання. Ви можете дослідити інші таблиці в тому ж діапазоні або перейти до наступного логічного числа.',
    prevLabel: '← Попереднє число',
    nextLabel: 'Наступне число →',
    parentRangeLabel: '↑ Батьківський діапазон',
    parentRangeText: 'Таблиці множення {rangeStart}-{rangeEnd}',
    parentRangeDescription: 'Досліджуйте всі таблиці множення в цьому діапазоні за допомогою інструментів практики та ігор',
  },

  fi: {
    pageTitle: 'Kertotaulu {number}',
    heroDescription:
      'Tämä sivu auttaa sinua oppimaan ja ymmärtämään kertotaulun {number}. Löydät, miten {number} käyttäytyy kerrottaessa, näet sen kuviot ja opit käytännöllisiä tapoja hallita se.',
    statOperations: 'Toimintoa',
    statGames: 'Peliä',
    statExercises: 'Harjoituksia',
    ctaPractice: 'Aloita Harjoittelu',
    ctaGames: 'Tutustu Peleihin',
    ctaWorksheets: 'Lataa Harjoituksia',
    ctaWorksheetsShort: 'Lataa',
    visualIntroHeading: 'Mitä Kertotaulu {number} Kattaa?',
    visualIntroText:
      'Kertotaulu {number} kattaa luvun {number} tulon kaikkien lukujen 1-10 kanssa. Tämä opettaa sinulle 10 perustoimintoa, jotka auttavat sinua paljon jokapäiväisessä elämässä ja edistyneissä matematiikan aiheissa.',
    visualIntroTip:
      'Kertotaulussa {number} on 10 kertolaskutoimitusta. Jos ymmärrät tämän taulun kuviot, voit oppia nämä toiminnot helposti ja laskea nopeasti!',
    meaningHeading: 'Mitä Luku {number} Tarkoittaa Kerrottaessa?',
    simpleExplanationHeading: 'Yksinkertainen Selitys',
    simpleExplanationText:
      'Kun näet {number} × 4, ajattele: "Minulla on 4 ryhmää ja jokaisessa ryhmässä on {number} alkiota." Joten {number} × 4 = {number} + {number} + {number} + {number} = {product4}.',
    whyImportantHeading: 'Miksi On Tärkeää Oppia Kertotaulu {number}',
    printLabel: 'Tulosta',
    printTitle: 'Tulosta taulu',
    printAriaLabel: 'Tulosta kertotaulu {number}',
    downloadLabel: 'Lataa',
    downloadTitle: 'Lataa kuvana',
    downloadAriaLabel: 'Lataa kertotaulu {number} kuvana',
    downloadErrorMessage: 'Lataus epäonnistui:',
    patternsHeading: 'Kuviot Kertotaulussa {number}',
    patternsIntro:
      'Kuvioiden ymmärtäminen tekee oppimisesta helpompaa ja hauskempaa. Kertotaulussa {number} on kauniita kuvioita, jotka voivat auttaa sinua muistamaan sen ilman ulkoa opettelua.',
    practiceHeading: 'Kuinka Harjoitella Kertotaulua {number}',
    practiceIntro:
      'Kertotaulujen oppiminen vaatii johdonmukaista harjoittelua oikeilla strategioilla. Tässä on todettuja menetelmiä erityisesti kertotaulun {number} hallitsemiseksi:',
    mistakesHeading: 'Yleiset Virheet Kertotaulun {number} Oppimisessa',
    mistakesIntro:
      'Monet oppilaat tekevät samanlaisia virheitä oppiessaan tätä taulua. Tietoisuus näistä yleisistä virheistä auttaa sinua välttämään niitä ja oppimaan tehokkaammin.',
    solutionLabel: 'Ratkaisu:',
    relatedHeading: 'Liittyvät Kertotaulut',
    relatedIntro:
      'Kertotaulu {number} on osa laajempaa oppimisjärjestelmää. Voit tutkia muita tauluja samalla alueella tai siirtyä seuraavaan loogiseen lukuun.',
    prevLabel: '← Edellinen Luku',
    nextLabel: 'Seuraava Luku →',
    parentRangeLabel: '↑ Ylätason Alue',
    parentRangeText: 'Kertotaulut {rangeStart}-{rangeEnd}',
    parentRangeDescription: 'Tutustu kaikkiin tämän alueen kertotauluihin harjoittelutyökaluilla ja peleillä',
  },

  fr: {
    pageTitle: 'Table de {number}',
    heroDescription:
      'Cette page vous aidera à apprendre et à comprendre la table de {number}. Vous découvrirez comment {number} se comporte dans la multiplication, verrez ses motifs et apprendrez des moyens pratiques de la maîtriser.',
    statOperations: 'Opérations',
    statGames: 'Jeux',
    statExercises: 'Exercices',
    ctaPractice: 'Pratiquer',
    ctaGames: 'Découvrir les Jeux',
    ctaWorksheets: 'Télécharger les Exercices',
    ctaWorksheetsShort: 'Télécharger',
    visualIntroHeading: 'Que Couvre la Table de {number} ?',
    visualIntroText:
      'La table de {number} couvre le produit du nombre {number} avec tous les nombres de 1 à 10. Cela enseigne 10 opérations de base qui aident beaucoup dans la vie quotidienne et les sujets mathématiques avancés.',
    visualIntroTip:
      'La table de {number} comporte 10 opérations de multiplication. En comprenant les motifs de cette table, vous pouvez apprendre ces opérations facilement et calculer rapidement !',
    meaningHeading: 'Que Signifie le Nombre {number} en Multiplication ?',
    simpleExplanationHeading: 'Explication Simple',
    simpleExplanationText:
      'Quand tu vois {number} × 4, pense : « J\'ai 4 groupes et chaque groupe a {number} éléments. » Donc {number} × 4 = {number} + {number} + {number} + {number} = {product4}.',
    whyImportantHeading: 'Pourquoi Est-il Important d\'Apprendre la Table de {number}',
    printLabel: 'Imprimer',
    printTitle: 'Imprimer',
    printAriaLabel: 'Imprimer la table de {number}',
    downloadLabel: 'Télécharger',
    downloadTitle: 'Télécharger',
    downloadAriaLabel: 'Télécharger la table de {number} en image',
    downloadErrorMessage: 'Échec du téléchargement :',
    patternsHeading: 'Motifs dans la Table de {number}',
    patternsIntro:
      'Comprendre les motifs rend l\'apprentissage plus facile et amusant. La table de {number} a de beaux motifs qui peuvent vous aider à la retenir sans mémorisation par cœur.',
    practiceHeading: 'Comment Pratiquer la Table de {number}',
    practiceIntro:
      'Apprendre les tables de multiplication nécessite une pratique constante avec les bonnes stratégies. Voici des méthodes éprouvées pour maîtriser spécifiquement la table de {number} :',
    mistakesHeading: 'Erreurs Courantes en Apprenant la Table de {number}',
    mistakesIntro:
      'De nombreux élèves commettent des erreurs similaires en apprenant cette table. Être conscient de ces erreurs courantes vous aidera à les éviter et à apprendre plus efficacement.',
    solutionLabel: 'Solution :',
    relatedHeading: 'Tables de Multiplication Associées',
    relatedIntro:
      'La table de {number} fait partie d\'un système d\'apprentissage plus large. Vous pouvez explorer d\'autres tables dans la même plage ou passer au nombre logique suivant.',
    prevLabel: '← Nombre Précédent',
    nextLabel: 'Nombre Suivant →',
    parentRangeLabel: '↑ Plage Supérieure',
    parentRangeText: 'Tables de {rangeStart} à {rangeEnd}',
    parentRangeDescription: 'Explorez toutes les tables de multiplication dans cette plage avec des outils de pratique et des jeux',
  },

  sv: {
    pageTitle: 'Multiplikationstabell {number}',
    heroDescription:
      'Den här sidan hjälper dig att lära dig och förstå multiplikationstabellen {number}. Du hittar hur {number} beter sig vid multiplikation, ser dess mönster och lär dig praktiska sätt att bemästra den.',
    statOperations: 'Operationer',
    statGames: 'Spel',
    statExercises: 'Övningar',
    ctaPractice: 'Börja Öva',
    ctaGames: 'Utforska Spel',
    ctaWorksheets: 'Ladda ner Övningar',
    ctaWorksheetsShort: 'Ladda ner',
    visualIntroHeading: 'Vad Täcker Multiplikationstabellen {number}?',
    visualIntroText:
      'Multiplikationstabellen {number} täcker produkten av talet {number} med alla tal från 1-10. Detta lär dig 10 grundläggande operationer som hjälper dig mycket i vardagen och avancerade matematikämnen.',
    visualIntroTip:
      'Multiplikationstabellen {number} har 10 multiplikationsoperationer. Om du förstår mönstren i denna tabell kan du lära dig dessa operationer enkelt och räkna snabbt!',
    meaningHeading: 'Vad Betyder Talet {number} Vid Multiplikation?',
    simpleExplanationHeading: 'Enkel Förklaring',
    simpleExplanationText:
      'När du ser {number} × 4, tänk: "Jag har 4 grupper och varje grupp har {number} element." Så {number} × 4 = {number} + {number} + {number} + {number} = {product4}.',
    whyImportantHeading: 'Varför Är Det Viktigt Att Lära Sig Multiplikationstabellen {number}',
    printLabel: 'Skriv ut',
    printTitle: 'Skriv ut tabell',
    printAriaLabel: 'Skriv ut multiplikationstabellen {number}',
    downloadLabel: 'Ladda ner',
    downloadTitle: 'Ladda ner som bild',
    downloadAriaLabel: 'Ladda ner multiplikationstabellen {number} som bild',
    downloadErrorMessage: 'Nedladdningen misslyckades:',
    patternsHeading: 'Mönster i Multiplikationstabellen {number}',
    patternsIntro:
      'Att förstå mönster gör inlärningen enklare och roligare. Multiplikationstabellen {number} har vackra mönster som kan hjälpa dig att komma ihåg den utan att plugga utantill.',
    practiceHeading: 'Hur Man Övar Multiplikationstabellen {number}',
    practiceIntro:
      'Att lära sig multiplikationstabeller kräver konsekvent övning med rätta strategier. Här är beprövade metoder för att specifikt bemästra multiplikationstabellen {number}:',
    mistakesHeading: 'Vanliga Misstag När Man Lär Sig Multiplikationstabellen {number}',
    mistakesIntro:
      'Många elever gör liknande misstag när de lär sig denna tabell. Att vara medveten om dessa vanliga misstag hjälper dig att undvika dem och lära dig mer effektivt.',
    solutionLabel: 'Lösning:',
    relatedHeading: 'Relaterade Multiplikationstabeller',
    relatedIntro:
      'Multiplikationstabellen {number} är en del av ett bredare inlärningssystem. Du kan utforska andra tabeller i samma intervall eller gå vidare till nästa logiska tal.',
    prevLabel: '← Föregående Tal',
    nextLabel: 'Nästa Tal →',
    parentRangeLabel: '↑ Överliggande Intervall',
    parentRangeText: 'Multiplikationstabeller {rangeStart}-{rangeEnd}',
    parentRangeDescription: 'Utforska alla multiplikationstabeller i detta intervall med övningsverktyg och spel',
  },

  pt: {
    pageTitle: 'Tabuada {number}',
    heroDescription:
      'Esta página ajuda você a aprender e entender a tabuada do {number}. Você encontrará como o {number} se comporta na multiplicação, verá seus padrões e aprenderá maneiras práticas de dominá-la.',
    statOperations: 'Operações',
    statGames: 'Jogos',
    statExercises: 'Exercícios',
    ctaPractice: 'Começar a Praticar',
    ctaGames: 'Explorar Jogos',
    ctaWorksheets: 'Baixar Exercícios',
    ctaWorksheetsShort: 'Baixar',
    visualIntroHeading: 'O Que a Tabuada do {number} Cobre?',
    visualIntroText:
      'A tabuada do {number} cobre o produto do número {number} com todos os números de 1 a 10. Isso ensina 10 operações básicas que ajudam muito no dia a dia e em tópicos matemáticos avançados.',
    visualIntroTip:
      'A tabuada do {number} tem 10 operações de multiplicação. Se você entender os padrões nesta tabuada, pode aprender essas operações facilmente e calcular rapidamente!',
    meaningHeading: 'O Que Significa o Número {number} na Multiplicação?',
    simpleExplanationHeading: 'Explicação Simples',
    simpleExplanationText:
      'Quando você vê {number} × 4, pense: "Eu tenho 4 grupos e cada grupo tem {number} elementos." Então {number} × 4 = {number} + {number} + {number} + {number} = {product4}.',
    whyImportantHeading: 'Por Que É Importante Aprender a Tabuada do {number}',
    printLabel: 'Imprimir',
    printTitle: 'Imprimir tabuada',
    printAriaLabel: 'Imprimir a tabuada do {number}',
    downloadLabel: 'Baixar',
    downloadTitle: 'Baixar como imagem',
    downloadAriaLabel: 'Baixar a tabuada do {number} como imagem',
    downloadErrorMessage: 'Falha no download:',
    patternsHeading: 'Padrões na Tabuada do {number}',
    patternsIntro:
      'Entender padrões torna o aprendizado mais fácil e divertido. A tabuada do {number} tem belos padrões que podem ajudá-lo a lembrá-la sem decorar.',
    practiceHeading: 'Como Praticar a Tabuada do {number}',
    practiceIntro:
      'Aprender tabuadas requer prática consistente com as estratégias certas. Aqui estão métodos comprovados para dominar especificamente a tabuada do {number}:',
    mistakesHeading: 'Erros Comuns ao Aprender a Tabuada do {number}',
    mistakesIntro:
      'Muitos alunos cometem erros semelhantes ao aprender esta tabuada. Estar ciente desses erros comuns ajuda você a evitá-los e aprender de forma mais eficaz.',
    solutionLabel: 'Solução:',
    relatedHeading: 'Tabuadas Relacionadas',
    relatedIntro:
      'A tabuada do {number} faz parte de um sistema de aprendizado mais amplo. Você pode explorar outras tabuadas no mesmo intervalo ou passar para o próximo número lógico.',
    prevLabel: '← Número Anterior',
    nextLabel: 'Próximo Número →',
    parentRangeLabel: '↑ Intervalo Superior',
    parentRangeText: 'Tabuadas {rangeStart}-{rangeEnd}',
    parentRangeDescription: 'Explore todas as tabuadas neste intervalo com ferramentas de prática e jogos',
  },

  en: {
    pageTitle: '{number} Times Table',
    heroDescription:
      'This page helps you learn and understand the {number} times table. You\'ll find how {number} behaves in multiplication, see its patterns and learn practical ways to master it.',
    statOperations: 'Operations',
    statGames: 'Games',
    statExercises: 'Exercises',
    ctaPractice: 'Start Practicing',
    ctaGames: 'Explore Games',
    ctaWorksheets: 'Download Worksheets',
    ctaWorksheetsShort: 'Download',
    visualIntroHeading: 'What Does the {number} Times Table Cover?',
    visualIntroText:
      'The {number} times table covers the product of the number {number} with all numbers from 1 to 10. This teaches 10 basic operations that help a lot in daily life and advanced mathematical topics.',
    visualIntroTip:
      'The {number} times table has 10 multiplication operations. If you understand the patterns in this times table, you can learn these operations easily and calculate quickly!',
    meaningHeading: 'What Does the Number {number} Mean in Multiplication?',
    simpleExplanationHeading: 'Simple Explanation',
    simpleExplanationText:
      'When you see {number} × 4, think: "I have 4 groups and each group has {number} items." So {number} × 4 = {number} + {number} + {number} + {number} = {product4}.',
    whyImportantHeading: 'Why Is It Important to Learn the {number} Times Table',
    printLabel: 'Print table',
    printTitle: 'Print times table',
    printAriaLabel: 'Print the {number} times table',
    downloadLabel: 'Download as image',
    downloadTitle: 'Download as image',
    downloadAriaLabel: 'Download the {number} times table as an image',
    downloadErrorMessage: 'Download failed:',
    patternsHeading: 'Patterns in the {number} Times Table',
    patternsIntro:
      'Understanding patterns makes learning easier and more fun. The {number} times table has beautiful patterns that can help you remember it without memorization.',
    practiceHeading: 'How to Practice the {number} Times Table',
    practiceIntro:
      'Learning times tables requires consistent practice with the right strategies. Here are proven methods to master specifically the {number} times table:',
    mistakesHeading: 'Common Mistakes When Learning the {number} Times Table',
    mistakesIntro:
      'Many students make similar mistakes when learning this times table. Being aware of these common errors helps you avoid them and learn more effectively.',
    solutionLabel: 'Solution:',
    relatedHeading: 'Related Times Tables',
    relatedIntro:
      'The {number} times table is part of a broader learning system. You can explore other times tables in the same range or move on to the next logical number.',
    prevLabel: '← Previous Number',
    nextLabel: 'Next Number →',
    parentRangeLabel: '↑ Parent Range',
    parentRangeText: '{rangeStart}-{rangeEnd} Times Tables',
    parentRangeDescription: 'Explore all times tables in this range with practice tools and games',
  },

  pl: {
    pageTitle: 'Tabliczka Mnożenia {number}',
    heroDescription:
      'Ta strona pomaga Ci nauczyć się i zrozumieć tabliczkę mnożenia przez {number}. Dowiesz się, jak {number} zachowuje się w mnożeniu, zobaczysz jej wzory i nauczysz się praktycznych sposobów jej opanowania.',
    statOperations: 'Operacji',
    statGames: 'Gry',
    statExercises: 'Ćwiczeń',
    ctaPractice: 'Zacznij Ćwiczyć',
    ctaGames: 'Odkryj Gry',
    ctaWorksheets: 'Pobierz Ćwiczenia',
    ctaWorksheetsShort: 'Pobierz',
    visualIntroHeading: 'Co Obejmuje Tabliczka Mnożenia przez {number}?',
    visualIntroText:
      'Tabliczka mnożenia przez {number} obejmuje iloczyn liczby {number} ze wszystkimi liczbami od 1 do 10. To uczy 10 podstawowych operacji, które bardzo pomagają w codziennym życiu i zaawansowanych tematach matematycznych.',
    visualIntroTip:
      'Tabliczka mnożenia przez {number} ma 10 operacji mnożenia. Jeśli zrozumiesz wzory w tej tabliczce mnożenia, możesz łatwo nauczyć się tych operacji i szybko obliczać!',
    meaningHeading: 'Co Oznacza Liczba {number} w Mnożeniu?',
    simpleExplanationHeading: 'Proste Wyjaśnienie',
    simpleExplanationText:
      'Kiedy widzisz {number} × 4, pomyśl: "Mam 4 grupy i każda grupa ma {number} przedmiotów." Więc {number} × 4 = {number} + {number} + {number} + {number} = {product4}.',
    whyImportantHeading: 'Dlaczego Ważne Jest Nauczenie Się Tabliczki Mnożenia przez {number}',
    printLabel: 'Drukuj',
    printTitle: 'Drukuj tabliczkę mnożenia',
    printAriaLabel: 'Wydrukuj tabliczkę mnożenia przez {number}',
    downloadLabel: 'Pobierz',
    downloadTitle: 'Pobierz jako obraz',
    downloadAriaLabel: 'Pobierz tabliczkę mnożenia przez {number} jako obraz',
    downloadErrorMessage: 'Pobieranie nie powiodło się:',
    patternsHeading: 'Wzory w Tabliczce Mnożenia przez {number}',
    patternsIntro:
      'Zrozumienie wzorów ułatwia naukę i czyni ją przyjemniejszą. Tabliczka mnożenia przez {number} ma piękne wzory, które mogą pomóc Ci ją zapamiętać bez memoryzacji.',
    practiceHeading: 'Jak Ćwiczyć Tabliczkę Mnożenia przez {number}',
    practiceIntro:
      'Nauka tabliczek mnożenia wymaga konsekwentnej praktyki z właściwymi strategiami. Oto sprawdzone metody opanowania specjalnie tabliczki mnożenia przez {number}:',
    mistakesHeading: 'Częste Błędy Podczas Nauki Tabliczki Mnożenia przez {number}',
    mistakesIntro:
      'Wielu uczniów popełnia podobne błędy podczas nauki tej tabliczki mnożenia. Świadomość tych częstych błędów pomaga ich unikać i uczyć się bardziej efektywnie.',
    solutionLabel: 'Rozwiązanie:',
    relatedHeading: 'Powiązane Tabliczki Mnożenia',
    relatedIntro:
      'Tabliczka mnożenia przez {number} jest częścią szerszego systemu nauki. Możesz odkrywać inne tabliczki mnożenia w tym samym zakresie lub przejść do następnej logicznej liczby.',
    prevLabel: '← Poprzednia Liczba',
    nextLabel: 'Następna Liczba →',
    parentRangeLabel: '↑ Zakres Nadrzędny',
    parentRangeText: 'Tabliczki Mnożenia {rangeStart}-{rangeEnd}',
    parentRangeDescription: 'Odkryj wszystkie tabliczki mnożenia w tym zakresie z narzędziami do praktyki i grami',
  },

  id: {
    pageTitle: 'Tabel Perkalian {number}',
    heroDescription:
      'Halaman ini akan membantu Anda mempelajari dan memahami tabel perkalian {number}. Anda akan menemukan bagaimana {number} berperilaku dalam perkalian, melihat polanya, dan mempelajari cara praktis untuk menguasainya.',
    statOperations: 'Operasi',
    statGames: 'Permainan',
    statExercises: 'Latihan',
    ctaPractice: 'Mulai Berlatih',
    ctaGames: 'Jelajahi Permainan',
    ctaWorksheets: 'Unduh Lembar Kerja',
    ctaWorksheetsShort: 'Unduh',
    visualIntroHeading: 'Apa Saja yang Dicakup Tabel Perkalian {number}?',
    visualIntroText:
      'Tabel perkalian {number} mencakup hasil kali angka {number} dengan semua angka dari 1 hingga 10. Ini mengajarkan 10 operasi dasar yang sangat membantu dalam kehidupan sehari-hari dan topik matematika lanjutan.',
    visualIntroTip:
      'Tabel perkalian {number} memiliki 10 operasi perkalian. Dengan memahami pola dalam tabel ini, Anda dapat mempelajari operasi-operasi ini dengan mudah dan menghitung dengan cepat!',
    meaningHeading: 'Apa Arti Angka {number} dalam Perkalian?',
    simpleExplanationHeading: 'Penjelasan Sederhana',
    simpleExplanationText:
      'Saat Anda melihat {number} × 4, pikirkan: "Saya punya 4 kelompok dan setiap kelompok berisi {number} item." Jadi {number} × 4 = {number} + {number} + {number} + {number} = {product4}.',
    whyImportantHeading: 'Mengapa Penting Mempelajari Tabel Perkalian {number}',
    printLabel: 'Cetak',
    printTitle: 'Cetak tabel',
    printAriaLabel: 'Cetak tabel perkalian {number}',
    downloadLabel: 'Unduh',
    downloadTitle: 'Unduh sebagai gambar',
    downloadAriaLabel: 'Unduh tabel perkalian {number} sebagai gambar',
    downloadErrorMessage: 'Unduhan gagal:',
    patternsHeading: 'Pola dalam Tabel Perkalian {number}',
    patternsIntro:
      'Memahami pola membuat pembelajaran lebih mudah dan menyenangkan. Tabel perkalian {number} memiliki pola-pola indah yang dapat membantu Anda mengingatnya tanpa menghafal.',
    practiceHeading: 'Cara Berlatih Tabel Perkalian {number}',
    practiceIntro:
      'Mempelajari tabel perkalian membutuhkan latihan yang konsisten dengan strategi yang tepat. Berikut adalah metode yang terbukti untuk menguasai tabel perkalian {number} secara khusus:',
    mistakesHeading: 'Kesalahan Umum Saat Mempelajari Tabel Perkalian {number}',
    mistakesIntro:
      'Banyak siswa membuat kesalahan serupa saat mempelajari tabel perkalian ini. Menyadari kesalahan umum ini akan membantu Anda menghindarinya dan belajar lebih efektif.',
    solutionLabel: 'Solusi:',
    relatedHeading: 'Tabel Perkalian Terkait',
    relatedIntro:
      'Tabel perkalian {number} adalah bagian dari sistem pembelajaran yang lebih luas. Anda dapat menjelajahi tabel perkalian lain dalam rentang yang sama atau lanjut ke angka logis berikutnya.',
    prevLabel: '← Angka Sebelumnya',
    nextLabel: 'Angka Berikutnya →',
    parentRangeLabel: '↑ Rentang Utama',
    parentRangeText: 'Tabel Perkalian {rangeStart}-{rangeEnd}',
    parentRangeDescription: 'Jelajahi semua tabel perkalian dalam rentang ini dengan alat latihan dan permainan',
  },
}
