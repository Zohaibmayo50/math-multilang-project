import { Locale } from './i18n-config'

/**
 * UI strings for `UniversalNumberGames` (3 mini-games tied to a single number:
 * Balloon Pop, Racing Game, Memory Game).
 *
 * `sectionHeading` / `subtitle` use a `{number}` token (fillTemplate). Tab
 * labels have a `*Short` variant for the `sm:hidden` mobile abbreviation
 * every locale's source file already used. `memoryWinTextTemplate` uses `{n}`
 * for the move count.
 *
 * DATA QUALITY FLAGS (fresh corrected text substituted for contaminated
 * source strings; everything else extracted verbatim):
 *
 * - uk: CONFIRMED bugs per audit — app/components/uk/NumberGames.tsx lines
 *   307, 386, 464 mix Ukrainian verbs with Czech nouns: `"Почати Hru 🎈"`
 *   (balloon start), `"Грати Znovu"` / `"Почати Závod"` (race replay/start,
 *   packed into one ternary at line 386), and `"Почati Hru 🧠"` (memory
 *   start — actually spelled "Почати Hru 🧠"). Fixed to fresh correct
 *   Ukrainian: `"Почати Гру 🎈"`, `"Грати Знову"` / `"Почати Перегони"`, and
 *   `"Почати Гру 🧠"`.
 *
 *   IMPORTANT — scope of what was and wasn't fixed: per this component's
 *   task instructions, only those 3 named line locations were corrected;
 *   "everything else verbatim" was explicit. A full read of the file shows
 *   uk/NumberGames.tsx is far more pervasively broken than the 3 named spots
 *   suggest — unlike this pass's other 3 components (where uk was mostly
 *   correct Ukrainian with isolated Czech contamination), here roughly 80%
 *   of the visible UI text is straight-up Czech (not Ukrainian at all),
 *   e.g. the section heading "Hry s Násobilkou {number}", both tab labels
 *   "Praskání Balonků"/"Závodní Hra"/"Paměťová Hra", "Skóre:"/"Zmeškaných:"/
 *   "Celkové Skóre:", "Poslední Skóre:", "Jste připraveni na závod?", and
 *   the balloon instructions/memory instructions paragraphs — with only
 *   occasional Ukrainian words dropped in ("Правильно", "Вітаємо", "Ходів").
 *   All of this was left verbatim per the explicit instruction, but is
 *   flagged here plainly rather than silently passed through as if only 3
 *   spots were wrong. One more instance of the exact same "Грати Znovu" bug
 *   (Czech "Znovu" instead of Ukrainian "Знову") also appears at line 511 in
 *   the memory-game win screen — a 4th occurrence of the identical
 *   contamination pattern the audit named for line 386 — but since line 511
 *   wasn't one of the 3 explicitly named locations, it was left unfixed
 *   (`memoryPlayAgainLabel` below is verbatim "Грати Znovu", NOT the fixed
 *   "Грати Знову" used for `racePlayAgainLabel`).
 *
 * - es: app/components/es/NumberGames.tsx lines 288/291 read `"Skor:"` /
 *   `"Kaçan:"` — literal untranslated Turkish ("Score"/"Missed"), a
 *   clone-from-tr artifact in the balloon-game stat panel. Fixed to
 *   `"Puntuación:"` / `"Perdidos:"` (matching this file's own "Última
 *   Puntuación:" label used elsewhere, and pt's equivalent "Perdidos:").
 *
 * - fr: app/components/fr/NumberGames.tsx is contaminated with both
 *   Spanish and literal Turkish across many spots (clone chain
 *   tr→es→fr): the balloon/race tab labels (lines 259/269, "Explotar
 *   Globos"/"Globos", "Jeu de Carreras"/"Carrera" — Spanish, while this
 *   same file's own active-panel headings at lines 298/364 are already
 *   correct French "Jeu d'Éclatement de Ballons"/"Jeu de Course"), the
 *   balloon score/missed labels (lines 288/291, Turkish "Skor:"/"Kaçan:"),
 *   the balloon and memory start buttons (lines 306/463, Spanish+French
 *   "Iniciar Jeu"), the balloon last-score label (line 310, Spanish
 *   "Última Puntuación:"), and the memory matched/moves labels (lines
 *   470/473, Spanish "Emparejadas:"/"Movimientos:"). All rewritten in
 *   fresh correct French below, reusing this file's own already-correct
 *   panel headings for consistency.
 *
 * - fi: app/components/fi/NumberGames.tsx has 4 spots with literal
 *   untranslated Turkish left over from cloning, isolated to the
 *   memory-game panel and the in-race score display: the memory start
 *   button (line 464, "Oyunu Başlat 🧠" instead of "Aloita peli 🧠" — this
 *   file's own balloon start button at line 307 already reads correctly),
 *   the memory matched/moves labels (lines 471/474, "Eşleşen:"/"Hamle:"),
 *   and the in-race score label (line 440, "Skor:" instead of "Pisteet:",
 *   this file's own balloon score label at line 289). Fixed to fresh
 *   correct Finnish below.
 */
export interface NumberGamesTranslations {
  sectionHeading: string
  subtitle: string
  balloonTabLabel: string
  balloonTabLabelShort: string
  raceTabLabel: string
  raceTabLabelShort: string
  memoryTabLabel: string
  memoryTabLabelShort: string
  balloonScoreLabel: string
  balloonMissedLabel: string
  balloonGameTitle: string
  balloonInstructions: string
  balloonStartButton: string
  balloonLastScoreLabel: string
  raceGameTitle: string
  raceSubtitle: string
  raceWinHeading: string
  raceTotalScoreLabel: string
  raceReadyHeading: string
  racePlayAgainLabel: string
  raceStartLabel: string
  raceScoreLabel: string
  memoryGameTitle: string
  memorySubtitle: string
  memoryMatchCardsHeading: string
  memoryInstructions: string
  memoryStartButton: string
  memoryMatchedLabel: string
  memoryMovesLabel: string
  memoryWinHeading: string
  memoryWinTextTemplate: string
  memoryPlayAgainLabel: string
}

export const numberGamesTranslations: Record<Locale, NumberGamesTranslations> = {
  tr: {
    sectionHeading: '🎮 {number} Çarpım Tablosu Oyunları',
    subtitle: 'Eğlenceli animasyonlu oyunlarla {number} çarpım tablosunu pekiştirin!',
    balloonTabLabel: 'Balon Patlatma',
    balloonTabLabelShort: 'Balon',
    raceTabLabel: 'Yarış Oyunu',
    raceTabLabelShort: 'Yarış',
    memoryTabLabel: 'Hafıza Oyunu',
    memoryTabLabelShort: 'Hafıza',
    balloonScoreLabel: 'Skor:',
    balloonMissedLabel: 'Kaçan:',
    balloonGameTitle: 'Balon Patlatma Oyunu',
    balloonInstructions: 'Doğru cevabı içeren balonları patlatın! Yanlış balonlara dokunmayın ve doğru balonları kaçırmayın!',
    balloonStartButton: 'Oyunu Başlat 🎈',
    balloonLastScoreLabel: 'Son Skor:',
    raceGameTitle: 'Yarış Oyunu',
    raceSubtitle: 'Doğru cevapları vererek yarışı kazanın!',
    raceWinHeading: '🎉 Tebrikler! Kazandınız!',
    raceTotalScoreLabel: 'Toplam Skor:',
    raceReadyHeading: 'Yarışa Hazır mısınız?',
    racePlayAgainLabel: 'Tekrar Oyna',
    raceStartLabel: 'Yarışı Başlat',
    raceScoreLabel: 'Skor:',
    memoryGameTitle: 'Hafıza Oyunu',
    memorySubtitle: 'Eşleşen kartları bulun!',
    memoryMatchCardsHeading: 'Kartları Eşleştir',
    memoryInstructions: 'Çarpma işlemlerini sonuçlarıyla eşleştirin!',
    memoryStartButton: 'Oyunu Başlat 🧠',
    memoryMatchedLabel: 'Eşleşen:',
    memoryMovesLabel: 'Hamle:',
    memoryWinHeading: '🎉 Tebrikler!',
    memoryWinTextTemplate: '{n} hamlede tamamladınız!',
    memoryPlayAgainLabel: 'Tekrar Oyna',
  },
  es: {
    sectionHeading: '🎮 Juegos de la Tabla del {number}',
    subtitle: '¡Refuerza la tabla del {number} con juegos animados y divertidos!',
    balloonTabLabel: 'Explotar Globos',
    balloonTabLabelShort: 'Globos',
    raceTabLabel: 'Juego de Carreras',
    raceTabLabelShort: 'Carrera',
    memoryTabLabel: 'Juego de Memoria',
    memoryTabLabelShort: 'Memoria',
    balloonScoreLabel: 'Puntuación:',
    balloonMissedLabel: 'Perdidos:',
    balloonGameTitle: 'Juego de Explotar Globos',
    balloonInstructions: '¡Explota los globos que contienen la respuesta correcta! ¡No toques globos incorrectos ni dejes escapar los correctos!',
    balloonStartButton: 'Iniciar Juego 🎈',
    balloonLastScoreLabel: 'Última Puntuación:',
    raceGameTitle: 'Juego de Carreras',
    raceSubtitle: '¡Gana la carrera dando respuestas correctas!',
    raceWinHeading: '🎉 ¡Felicitaciones! ¡Ganaste!',
    raceTotalScoreLabel: 'Puntuación Total:',
    raceReadyHeading: '¿Listo para la Carrera?',
    racePlayAgainLabel: 'Jugar de Nuevo',
    raceStartLabel: 'Iniciar Carrera',
    raceScoreLabel: 'Puntos:',
    memoryGameTitle: 'Juego de Memoria',
    memorySubtitle: '¡Encuentra las tarjetas que coinciden!',
    memoryMatchCardsHeading: 'Emparejar Tarjetas',
    memoryInstructions: '¡Empareja las multiplicaciones con sus resultados!',
    memoryStartButton: 'Iniciar Juego 🧠',
    memoryMatchedLabel: 'Emparejadas:',
    memoryMovesLabel: 'Movimientos:',
    memoryWinHeading: '🎉 ¡Felicitaciones!',
    memoryWinTextTemplate: '¡Completaste en {n} movimientos!',
    memoryPlayAgainLabel: 'Jugar de Nuevo',
  },
  de: {
    sectionHeading: '🎮 Spiele für das {number}er Einmaleins',
    subtitle: 'Übe das {number}er Einmaleins mit animierten und unterhaltsamen Spielen!',
    balloonTabLabel: 'Luftballons Platzen',
    balloonTabLabelShort: 'Ballons',
    raceTabLabel: 'Rennspiel',
    raceTabLabelShort: 'Rennen',
    memoryTabLabel: 'Gedächtnisspiel',
    memoryTabLabelShort: 'Gedächtnis',
    balloonScoreLabel: 'Punkte:',
    balloonMissedLabel: 'Verpasst:',
    balloonGameTitle: 'Luftballons Platzen',
    balloonInstructions: 'Platze die Luftballons mit den richtigen Antworten! Berühre keine falschen Ballons und lass keine richtigen entkommen!',
    balloonStartButton: 'Spiel starten 🎈',
    balloonLastScoreLabel: 'Letzte Punktzahl:',
    raceGameTitle: 'Rennspiel',
    raceSubtitle: 'Gewinne das Rennen mit richtigen Antworten!',
    raceWinHeading: '🎉 Glückwunsch! Du hast gewonnen!',
    raceTotalScoreLabel: 'Gesamtpunktzahl:',
    raceReadyHeading: 'Bereit für das Rennen?',
    racePlayAgainLabel: 'Nochmal spielen',
    raceStartLabel: 'Rennen starten',
    raceScoreLabel: 'Punkte:',
    memoryGameTitle: 'Gedächtnisspiel',
    memorySubtitle: 'Finde die passenden Karten!',
    memoryMatchCardsHeading: 'Karten zuordnen',
    memoryInstructions: 'Ordne die Multiplikationen ihren Ergebnissen zu!',
    memoryStartButton: 'Spiel starten 🧠',
    memoryMatchedLabel: 'Gefunden:',
    memoryMovesLabel: 'Züge:',
    memoryWinHeading: '🎉 Glückwunsch!',
    memoryWinTextTemplate: 'Du hast es geschafft in {n} Zügen!',
    memoryPlayAgainLabel: 'Nochmal spielen',
  },
  cs: {
    sectionHeading: '🎮 Hry s Násobilkou {number}',
    subtitle: 'Procvičujte násobilku {number} zábavnými animovanými hrami!',
    balloonTabLabel: 'Praskání Balonků',
    balloonTabLabelShort: 'Balonky',
    raceTabLabel: 'Závodní Hra',
    raceTabLabelShort: 'Závod',
    memoryTabLabel: 'Paměťová Hra',
    memoryTabLabelShort: 'Paměť',
    balloonScoreLabel: 'Skóre:',
    balloonMissedLabel: 'Zmeškaných:',
    balloonGameTitle: 'Hra na Praskání Balonků',
    balloonInstructions: 'Praskejte balonky se správnými odpověďmi! Nedotýkejte se špatných balonků a nenechte správné uniknout!',
    balloonStartButton: 'Začít Hru 🎈',
    balloonLastScoreLabel: 'Poslední Skóre:',
    raceGameTitle: 'Závodní Hra',
    raceSubtitle: 'Vyhrajte závod správnými odpověďmi!',
    raceWinHeading: '🎉 Gratulujeme! Vyhráli jste!',
    raceTotalScoreLabel: 'Celkové Skóre:',
    raceReadyHeading: 'Jste připraveni na závod?',
    racePlayAgainLabel: 'Hrát Znovu',
    raceStartLabel: 'Začít Závod',
    raceScoreLabel: 'Skóre:',
    memoryGameTitle: 'Paměťová Hra',
    memorySubtitle: 'Najděte shodující se karty!',
    memoryMatchCardsHeading: 'Spárovat Karty',
    memoryInstructions: 'Spárujte násobení s jejich výsledky!',
    memoryStartButton: 'Začít Hru 🧠',
    memoryMatchedLabel: 'Spárované:',
    memoryMovesLabel: 'Tahů:',
    memoryWinHeading: '🎉 Gratulujeme!',
    memoryWinTextTemplate: 'Dokončili jste za {n} tahů!',
    memoryPlayAgainLabel: 'Hrát Znovu',
  },
  uk: {
    sectionHeading: '🎮 Hry s Násobilkou {number}',
    subtitle: 'Практикуйте таблицю множення {number} веселими анімованими іграми!',
    balloonTabLabel: 'Praskání Balonků',
    balloonTabLabelShort: 'Balonky',
    raceTabLabel: 'Závodní Hra',
    raceTabLabelShort: 'Závod',
    memoryTabLabel: 'Paměťová Hra',
    memoryTabLabelShort: 'Paměť',
    balloonScoreLabel: 'Skóre:',
    balloonMissedLabel: 'Zmeškaných:',
    balloonGameTitle: 'Hra na Praskání Balonků',
    balloonInstructions: 'Praskejte balonky se správnými odpověďmi! Nedotýkejte se špatných balonků a nenechte Правильно uniknout!',
    // DATA QUALITY FLAG: was "Почати Hru 🎈" (Ukrainian "Почати" + Czech
    // "Hru") in app/components/uk/NumberGames.tsx line 307. Fixed to fresh
    // correct Ukrainian.
    balloonStartButton: 'Почати Гру 🎈',
    balloonLastScoreLabel: 'Poslední Skóre:',
    raceGameTitle: 'Závodní Hra',
    raceSubtitle: 'Vyhrajte závod správnými odpověďmi!',
    raceWinHeading: '🎉 Вітаємо! Vyhráli jste!',
    raceTotalScoreLabel: 'Celkové Skóre:',
    raceReadyHeading: 'Jste připraveni na závod?',
    // DATA QUALITY FLAG: was "Грати Znovu" (Ukrainian "Грати" + Czech
    // "Znovu") in app/components/uk/NumberGames.tsx line 386. Fixed to fresh
    // correct Ukrainian.
    racePlayAgainLabel: 'Грати Знову',
    // DATA QUALITY FLAG: was "Почати Závod" (Ukrainian "Почати" + Czech
    // "Závod") in app/components/uk/NumberGames.tsx line 386. Fixed to fresh
    // correct Ukrainian.
    raceStartLabel: 'Почати Перегони',
    raceScoreLabel: 'Skóre:',
    memoryGameTitle: 'Paměťová Hra',
    memorySubtitle: 'Najděte shodující se karty!',
    memoryMatchCardsHeading: 'Spárovat Karty',
    memoryInstructions: 'Spárujte множення s jejich výsledky!',
    // DATA QUALITY FLAG: was "Почати Hru 🧠" (Ukrainian "Почати" + Czech
    // "Hru") in app/components/uk/NumberGames.tsx line 464. Fixed to fresh
    // correct Ukrainian.
    memoryStartButton: 'Почати Гру 🧠',
    memoryMatchedLabel: 'Spárované:',
    memoryMovesLabel: 'Ходів:',
    memoryWinHeading: '🎉 Вітаємо!',
    memoryWinTextTemplate: 'Dokončili jste za {n} Ходів!',
    // NOT fixed: identical "Грати Znovu" contamination as racePlayAgainLabel
    // above (Czech "Znovu"), but at line 511 — not one of the 3 explicitly
    // named line numbers (307/386/464) for this component's uk fix, so left
    // verbatim per the "everything else verbatim" instruction. See the
    // file-level DATA QUALITY FLAG comment above for details.
    memoryPlayAgainLabel: 'Грати Znovu',
  },
  fi: {
    sectionHeading: '🎮 {number} Kertotaulun Pelit',
    subtitle: 'Vahvista {number} kertotaulu hauskoilla animoiduilla peleillä!',
    balloonTabLabel: 'Ilmapallopeli',
    balloonTabLabelShort: 'Ilmapallo',
    raceTabLabel: 'Kilpailupeli',
    raceTabLabelShort: 'Kilpailu',
    memoryTabLabel: 'Muistipeli',
    memoryTabLabelShort: 'Muisti',
    balloonScoreLabel: 'Pisteet:',
    balloonMissedLabel: 'Ohitetut:',
    balloonGameTitle: 'Ilmapallopeli',
    balloonInstructions: 'Puhkaise ilmapallot, joissa on oikea vastaus! Älä koske vääriin ilmapalloihin äläkä anna oikeiden mennä ohi!',
    balloonStartButton: 'Aloita peli 🎈',
    balloonLastScoreLabel: 'Viimeisin tulos:',
    raceGameTitle: 'Kilpailupeli',
    raceSubtitle: 'Voita kilpailu vastaamalla oikein!',
    raceWinHeading: '🎉 Onnittelut! Voitit!',
    raceTotalScoreLabel: 'Kokonaispisteet:',
    raceReadyHeading: 'Oletko valmis kilpaan?',
    racePlayAgainLabel: 'Pelaa uudelleen',
    raceStartLabel: 'Aloita kilpailu',
    raceScoreLabel: 'Pisteet:',
    memoryGameTitle: 'Muistipeli',
    memorySubtitle: 'Etsi parit!',
    memoryMatchCardsHeading: 'Yhdistä kortit',
    memoryInstructions: 'Yhdistä kertolaskut tuloksiin!',
    memoryStartButton: 'Aloita peli 🧠',
    memoryMatchedLabel: 'Osumat:',
    memoryMovesLabel: 'Siirrot:',
    memoryWinHeading: '🎉 Onnittelut!',
    memoryWinTextTemplate: 'Suoritit pelin {n} siirrolla!',
    memoryPlayAgainLabel: 'Pelaa uudelleen',
  },
  fr: {
    sectionHeading: '🎮 Jeux de la Table de {number}',
    subtitle: 'Renforcez la table de {number} avec des jeux animés et amusants !',
    balloonTabLabel: 'Éclater les Ballons',
    balloonTabLabelShort: 'Ballons',
    raceTabLabel: 'Jeu de Course',
    raceTabLabelShort: 'Course',
    memoryTabLabel: 'Jeu de Mémoire',
    memoryTabLabelShort: 'Mémoire',
    balloonScoreLabel: 'Score :',
    balloonMissedLabel: 'Ratés :',
    balloonGameTitle: "Jeu d'Éclatement de Ballons",
    balloonInstructions: "Éclatez les ballons qui contiennent la bonne réponse ! Ne touchez pas les ballons incorrects et ne laissez pas échapper les corrects !",
    balloonStartButton: 'Commencer 🎈',
    balloonLastScoreLabel: 'Dernier Score :',
    raceGameTitle: 'Jeu de Course',
    raceSubtitle: 'Gagnez la course en donnant des réponses correctes !',
    raceWinHeading: '🎉 Félicitations ! Vous avez gagné !',
    raceTotalScoreLabel: 'Score Total :',
    raceReadyHeading: 'Prêt pour la Course ?',
    racePlayAgainLabel: 'Jouer à Nouveau',
    raceStartLabel: 'Démarrer la Course',
    raceScoreLabel: 'Points :',
    memoryGameTitle: 'Jeu de Mémoire',
    memorySubtitle: 'Trouvez les cartes qui correspondent !',
    memoryMatchCardsHeading: 'Apparier les Cartes',
    memoryInstructions: 'Associez les multiplications avec leurs résultats !',
    memoryStartButton: 'Commencer 🧠',
    memoryMatchedLabel: 'Assorties :',
    memoryMovesLabel: 'Mouvements :',
    memoryWinHeading: '🎉 Félicitations !',
    memoryWinTextTemplate: 'Vous avez terminé en {n} mouvements !',
    memoryPlayAgainLabel: 'Jouer à Nouveau',
  },
  sv: {
    sectionHeading: '🎮 {number} Gångertabellsspel',
    subtitle: 'Öva {number}-gångertabellen med roliga animerade spel!',
    balloonTabLabel: 'Sprängballonger',
    balloonTabLabelShort: 'Ballonger',
    raceTabLabel: 'Tävlingsspel',
    raceTabLabelShort: 'Tävling',
    memoryTabLabel: 'Minnesspel',
    memoryTabLabelShort: 'Minne',
    balloonScoreLabel: 'Poäng:',
    balloonMissedLabel: 'Missade:',
    balloonGameTitle: 'Sprängballongsspel',
    balloonInstructions: 'Spräng ballongerna med rätt svar! Undvik felaktiga ballonger och missa inte de rätta!',
    balloonStartButton: 'Starta Spelet 🎈',
    balloonLastScoreLabel: 'Senaste Poäng:',
    raceGameTitle: 'Tävlingsspel',
    raceSubtitle: 'Svara rätt för att vinna tävlingen!',
    raceWinHeading: '🎉 Grattis! Du vann!',
    raceTotalScoreLabel: 'Totalt Poäng:',
    raceReadyHeading: 'Redo för tävlingen?',
    racePlayAgainLabel: 'Spela Igen',
    raceStartLabel: 'Starta Tävlingen',
    raceScoreLabel: 'Poäng:',
    memoryGameTitle: 'Minnesspel',
    memorySubtitle: 'Hitta matchande par!',
    memoryMatchCardsHeading: 'Para ihop Korten',
    memoryInstructions: 'Matcha multiplikationer med deras resultat!',
    memoryStartButton: 'Starta Spelet 🧠',
    memoryMatchedLabel: 'Matchade:',
    memoryMovesLabel: 'Drag:',
    memoryWinHeading: '🎉 Grattis!',
    memoryWinTextTemplate: 'Du klarade det på {n} drag!',
    memoryPlayAgainLabel: 'Spela Igen',
  },
  pt: {
    sectionHeading: '🎮 Jogos da Tabuada {number}',
    subtitle: 'Pratique a tabuada do {number} com jogos animados divertidos!',
    balloonTabLabel: 'Estoure Balões',
    balloonTabLabelShort: 'Balões',
    raceTabLabel: 'Jogo de Corrida',
    raceTabLabelShort: 'Corrida',
    memoryTabLabel: 'Jogo da Memória',
    memoryTabLabelShort: 'Memória',
    balloonScoreLabel: 'Pontuação:',
    balloonMissedLabel: 'Perdidos:',
    balloonGameTitle: 'Jogo de Estoure de Balões',
    balloonInstructions: 'Estoure os balões com a resposta correta! Evite balões incorretos e não perca os corretos!',
    balloonStartButton: 'Iniciar Jogo 🎈',
    balloonLastScoreLabel: 'Última Pontuação:',
    raceGameTitle: 'Jogo de Corrida',
    raceSubtitle: 'Responda corretamente para vencer a corrida!',
    raceWinHeading: '🎉 Parabéns! Você venceu!',
    raceTotalScoreLabel: 'Pontuação Total:',
    raceReadyHeading: 'Pronto para a corrida?',
    racePlayAgainLabel: 'Jogar Novamente',
    raceStartLabel: 'Iniciar Corrida',
    raceScoreLabel: 'Pontuação:',
    memoryGameTitle: 'Jogo da Memória',
    memorySubtitle: 'Encontre os pares correspondentes!',
    memoryMatchCardsHeading: 'Combine as Cartas',
    memoryInstructions: 'Combine multiplicações com seus resultados!',
    memoryStartButton: 'Iniciar Jogo 🧠',
    memoryMatchedLabel: 'Combinados:',
    memoryMovesLabel: 'Jogadas:',
    memoryWinHeading: '🎉 Parabéns!',
    memoryWinTextTemplate: 'Você completou em {n} jogadas!',
    memoryPlayAgainLabel: 'Jogar Novamente',
  },
  en: {
    sectionHeading: '🎮 Times Table {number} Games',
    subtitle: 'Practice the {number} times table with fun animated games!',
    balloonTabLabel: 'Pop Balloons',
    balloonTabLabelShort: 'Balloons',
    raceTabLabel: 'Racing Game',
    raceTabLabelShort: 'Race',
    memoryTabLabel: 'Memory Game',
    memoryTabLabelShort: 'Memory',
    balloonScoreLabel: 'Score:',
    balloonMissedLabel: 'Missed:',
    balloonGameTitle: 'Balloon Pop Game',
    balloonInstructions: "Pop the balloons with the correct answer! Avoid wrong balloons and don't miss the right ones!",
    balloonStartButton: 'Start Game 🎈',
    balloonLastScoreLabel: 'Last Score:',
    raceGameTitle: 'Racing Game',
    raceSubtitle: 'Answer correctly to win the race!',
    raceWinHeading: '🎉 Congratulations! You won!',
    raceTotalScoreLabel: 'Total Score:',
    raceReadyHeading: 'Ready for the race?',
    racePlayAgainLabel: 'Play Again',
    raceStartLabel: 'Start Race',
    raceScoreLabel: 'Score:',
    memoryGameTitle: 'Memory Game',
    memorySubtitle: 'Find the matching pairs!',
    memoryMatchCardsHeading: 'Match the Cards',
    memoryInstructions: 'Match multiplications with their results!',
    memoryStartButton: 'Start Game 🧠',
    memoryMatchedLabel: 'Matched:',
    memoryMovesLabel: 'Moves:',
    memoryWinHeading: '🎉 Congratulations!',
    memoryWinTextTemplate: 'You completed it in {n} moves!',
    memoryPlayAgainLabel: 'Play Again',
  },
  pl: {
    sectionHeading: '🎮 Gry z Tabliczką Mnożenia {number}',
    subtitle: 'Ćwicz tabliczkę mnożenia {number} z zabawnymi animowanymi grami!',
    balloonTabLabel: 'Przebijanie Balonów',
    balloonTabLabelShort: 'Balony',
    raceTabLabel: 'Gra Wyścigowa',
    raceTabLabelShort: 'Wyścig',
    memoryTabLabel: 'Gra Pamięciowa',
    memoryTabLabelShort: 'Pamięć',
    balloonScoreLabel: 'Wynik:',
    balloonMissedLabel: 'Pominięte:',
    balloonGameTitle: 'Gra w Przebijanie Balonów',
    balloonInstructions: 'Przebijaj balony z poprawną odpowiedzią! Unikaj złych balonów i nie przegap właściwych!',
    balloonStartButton: 'Rozpocznij Grę 🎈',
    balloonLastScoreLabel: 'Ostatni Wynik:',
    raceGameTitle: 'Gra Wyścigowa',
    raceSubtitle: 'Odpowiadaj poprawnie, aby wygrać wyścig!',
    raceWinHeading: '🎉 Gratulacje! Wygrałeś!',
    raceTotalScoreLabel: 'Całkowity Wynik:',
    raceReadyHeading: 'Gotowy na wyścig?',
    racePlayAgainLabel: 'Zagraj Ponownie',
    raceStartLabel: 'Rozpocznij Wyścig',
    raceScoreLabel: 'Wynik:',
    memoryGameTitle: 'Gra Pamięciowa',
    memorySubtitle: 'Znajdź pasujące pary!',
    memoryMatchCardsHeading: 'Dopasuj Karty',
    memoryInstructions: 'Dopasuj mnożenia z ich wynikami!',
    memoryStartButton: 'Rozpocznij Grę 🧠',
    memoryMatchedLabel: 'Dopasowane:',
    memoryMovesLabel: 'Ruchy:',
    memoryWinHeading: '🎉 Gratulacje!',
    memoryWinTextTemplate: 'Ukończyłeś to w {n} ruchach!',
    memoryPlayAgainLabel: 'Zagraj Ponownie',
  },
  id: {
    sectionHeading: '🎮 Permainan Tabel Perkalian {number}',
    subtitle: 'Kuasai tabel perkalian {number} dengan permainan animasi yang menyenangkan!',
    balloonTabLabel: 'Permainan Balon',
    balloonTabLabelShort: 'Balon',
    raceTabLabel: 'Permainan Balap',
    raceTabLabelShort: 'Balap',
    memoryTabLabel: 'Permainan Memori',
    memoryTabLabelShort: 'Memori',
    balloonScoreLabel: 'Skor:',
    balloonMissedLabel: 'Terlewat:',
    balloonGameTitle: 'Permainan Pecahkan Balon',
    balloonInstructions: 'Pecahkan balon yang berisi jawaban yang benar! Jangan sentuh balon yang salah dan jangan lewatkan balon yang benar!',
    balloonStartButton: 'Mulai Permainan 🎈',
    balloonLastScoreLabel: 'Skor Terakhir:',
    raceGameTitle: 'Permainan Balap',
    raceSubtitle: 'Menangkan balapan dengan menjawab dengan benar!',
    raceWinHeading: '🎉 Selamat! Anda Menang!',
    raceTotalScoreLabel: 'Total Skor:',
    raceReadyHeading: 'Siap untuk Balapan?',
    racePlayAgainLabel: 'Main Lagi',
    raceStartLabel: 'Mulai Balapan',
    raceScoreLabel: 'Skor:',
    memoryGameTitle: 'Permainan Memori',
    memorySubtitle: 'Temukan kartu yang cocok!',
    memoryMatchCardsHeading: 'Cocokkan Kartu',
    memoryInstructions: 'Cocokkan operasi perkalian dengan hasilnya!',
    memoryStartButton: 'Mulai Permainan 🧠',
    memoryMatchedLabel: 'Cocok:',
    memoryMovesLabel: 'Gerakan:',
    memoryWinHeading: '🎉 Selamat!',
    memoryWinTextTemplate: 'Anda menyelesaikan dalam {n} gerakan!',
    memoryPlayAgainLabel: 'Main Lagi',
  },
}
