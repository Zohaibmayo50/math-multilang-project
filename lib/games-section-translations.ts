import { Locale } from './i18n-config'

/**
 * UI strings for `UniversalGamesSection` (4 mini-games: Speed Challenge,
 * Multiplication Hero, Memory Game, Space Adventure).
 *
 * Card titles (`speedCardTitle`, `heroCardTitle`, `memoryCardTitle`,
 * `spaceCardTitle`) are reused verbatim as the active-game panel heading —
 * every locale's source file repeats the exact same title in both places,
 * just with a fixed emoji prefix (🎯/🏆/🎮/🚀) that's hardcoded in the
 * component rather than stored here. `playButtonLabel` is likewise a single
 * value reused across all 4 game-selection cards (every locale used one
 * consistent word/phrase for all 4 "Play" buttons).
 *
 * `spaceHeightUnit` is optional: 11 of 12 locales suffix the rocket height
 * with a literal "m" (meters); fi/GamesSection.tsx alone renamed the whole
 * stat from "Height" to "Yritykset:" (Attempts) and dropped the unit, which
 * is preserved faithfully here rather than forcing a unit onto a concept fi
 * doesn't use.
 *
 * DATA QUALITY FLAGS (fresh corrected text substituted for contaminated
 * source strings; everything else extracted verbatim):
 *
 * - uk: CONFIRMED bug per audit — app/components/uk/GamesSection.tsx line 299
 *   reads `"Celkové Рахунок: "` (Czech "Celkové" = "Total" + Ukrainian
 *   "Рахунок" = "Score"), the Game Over screen's total-score line. Fixed here
 *   to `"Загальний рахунок:"` — fresh correct Ukrainian for "Total score:",
 *   reusing the file's own established "Рахунок" (line 264, the Quick-game
 *   score stat label, left untouched) for consistency rather than inventing
 *   an unrelated word. Per the explicit instruction for this component, no
 *   other uk string was touched — however a full read of the file turned up
 *   additional uncorrected Czech-clone contamination that should be flagged:
 *   the subtitle (line 197, "hravě pomocí" / "Každá hra nabízí jinou metodu
 *   učení" mixed into Ukrainian), the Speed-card description (line 208,
 *   "Kolik úkolů dokážete vyřešit za 60 секунд?"), the Hero-card description
 *   (line 219, "Прогресujte úrovněmi a staňte se šampiónem"), the "Play
 *   Again" button (line 301, "Грати Znovu" — Czech "Znovu" instead of
 *   Ukrainian "Знову"), and the tips paragraph (line 477, stray Czech "a"
 *   for "and" instead of Ukrainian "і"/"та"). These were left verbatim,
 *   unlike this component's `es`/`de` uk practice in Pass 1's footer or this
 *   pass's PracticePreview/PrintableExercises uk entries, specifically
 *   because this component's task instructions said "Do NOT touch any other
 *   uk string in this file" — flagged here rather than silently left as if
 *   the file were otherwise clean.
 *
 * - fr: app/components/fr/GamesSection.tsx has Spanish-clone contamination
 *   in several spots (same clone-chain pattern seen in this locale's other
 *   components): the section heading (line 193, "Jeux Educativos" — Spanish
 *   "Educativos"), the Hero-game "Lives"/"Progress" stat labels (lines
 *   324/328, "Vidas"/"Progreso"), the Memory-game matches label (line 368,
 *   "Parejas :"), the Memory "New Game" button (line 381, "Nuevo Jeu" —
 *   Spanish "Nuevo" + French "Jeu"), the Space-game "Height"/"Streak" stat
 *   labels (lines 416/420, "Altura"/"Racha"), and the tips heading (line
 *   472, "Consejos de Jeu"). Also fixed a minor French grammar slip in the
 *   Game Over line ("Points Totales" → "Points Totaux", masculine agreement).
 *   All rewritten in fresh correct French below.
 *
 * - pt: app/components/pt/GamesSection.tsx has an entire panel mistranslated
 *   into Swedish rather than Portuguese — the active Space Game panel
 *   heading (line 419, "🚀 Rymdäventyr" instead of "Aventura Espacial",
 *   which pt's own game-selection card at line 249 already uses correctly)
 *   and its "Height"/"Streak" stat labels (lines 424/429, "Höjd"/"Serie").
 *   Fixed to "Aventura Espacial" / "Altura" / "Sequência" below, matching pt's
 *   own established terminology elsewhere in the file.
 */
export interface GamesSectionTranslations {
  sectionHeading: string
  subtitle: string
  speedCardTitle: string
  speedCardDesc: string
  heroCardTitle: string
  heroCardDesc: string
  memoryCardTitle: string
  memoryCardDesc: string
  spaceCardTitle: string
  spaceCardDesc: string
  playButtonLabel: string
  timeLabel: string
  timeUnit: string
  scoreLabel: string
  gameOverHeading: string
  totalScoreLabel: string
  playAgainLabel: string
  heroLevelLabel: string
  heroLivesLabel: string
  heroProgressLabel: string
  submitButtonLabel: string
  memoryMatchesLabel: string
  memoryWinHeading: string
  memoryWinText: string
  newGameLabel: string
  spaceHeightLabel: string
  spaceHeightUnit?: string
  spaceStreakLabel: string
  launchButtonLabel: string
  tipsHeading: string
  tipsParagraph: string
}

export const gamesSectionTranslations: Record<Locale, GamesSectionTranslations> = {
  tr: {
    sectionHeading: '🎮 Eğitici Oyunlar',
    subtitle: 'Çarpım tablosunu oyunlar ile eğlenceli bir şekilde öğrenin. Her oyun farklı bir öğrenme yöntemi sunar.',
    speedCardTitle: 'Hızlı Yanıt',
    speedCardDesc: '60 saniyede kaç soru çözebilirsin?',
    heroCardTitle: 'Çarpım Kahramanı',
    heroCardDesc: 'Seviyeleri geçerek şampiyonluğa ulaş',
    memoryCardTitle: 'Hafıza Oyunu',
    memoryCardDesc: 'Kartları eşleştirerek çarp',
    spaceCardTitle: 'Uzay Macerası',
    spaceCardDesc: 'Doğru cevapla roketini yükselt',
    playButtonLabel: 'Oyna',
    timeLabel: 'Süre',
    timeUnit: 's',
    scoreLabel: 'Puan',
    gameOverHeading: 'Oyun Bitti!',
    totalScoreLabel: 'Toplam Puan:',
    playAgainLabel: 'Tekrar Oyna',
    heroLevelLabel: 'Seviye',
    heroLivesLabel: 'Can',
    heroProgressLabel: 'İlerleme',
    submitButtonLabel: 'Gönder',
    memoryMatchesLabel: 'Eşleşmeler:',
    memoryWinHeading: 'Tebrikler!',
    memoryWinText: 'Tüm kartları eşleştirdin!',
    newGameLabel: 'Yeni Oyun',
    spaceHeightLabel: 'Yükseklik',
    spaceHeightUnit: 'm',
    spaceStreakLabel: 'Seri',
    launchButtonLabel: 'Fırlat! 🚀',
    tipsHeading: '🎯 Oyun İpuçları',
    tipsParagraph: 'Her oyun farklı bir öğrenme tekniği kullanır. Hızlı Yanıt hızınızı artırır, Çarpım Kahramanı zorluk seviyelerini aşamanızı sağlar, Hafıza Oyunu görsel öğrenmeyi geliştirir ve Uzay Macerası motivasyonunuzu artırır.',
  },
  es: {
    sectionHeading: '🎮 Juegos Educativos',
    subtitle: 'Aprende las tablas de multiplicar de forma divertida con juegos. Cada juego ofrece un método de aprendizaje diferente.',
    speedCardTitle: 'Respuesta Rápida',
    speedCardDesc: '¿Cuántas preguntas puedes resolver en 60 segundos?',
    heroCardTitle: 'Héroe de las Tablas',
    heroCardDesc: 'Avanza por los niveles y alcanza el campeonato',
    memoryCardTitle: 'Juego de Memoria',
    memoryCardDesc: 'Empareja las cartas y multiplica',
    spaceCardTitle: 'Aventura Espacial',
    spaceCardDesc: 'Eleva tu cohete con respuestas correctas',
    playButtonLabel: 'Jugar',
    timeLabel: 'Tiempo',
    timeUnit: 's',
    scoreLabel: 'Puntos',
    gameOverHeading: '¡Juego Terminado!',
    totalScoreLabel: 'Puntos Totales:',
    playAgainLabel: 'Jugar de Nuevo',
    heroLevelLabel: 'Nivel',
    heroLivesLabel: 'Vidas',
    heroProgressLabel: 'Progreso',
    submitButtonLabel: 'Enviar',
    memoryMatchesLabel: 'Parejas:',
    memoryWinHeading: '¡Felicidades!',
    memoryWinText: '¡Has emparejado todas las cartas!',
    newGameLabel: 'Nuevo Juego',
    spaceHeightLabel: 'Altura',
    spaceHeightUnit: 'm',
    spaceStreakLabel: 'Racha',
    launchButtonLabel: '¡Despegar! 🚀',
    tipsHeading: '🎯 Consejos de Juego',
    tipsParagraph: 'Cada juego utiliza una técnica de aprendizaje diferente. Respuesta Rápida aumenta tu velocidad, Héroe de las Tablas te ayuda a superar niveles de dificultad, Juego de Memoria desarrolla el aprendizaje visual y Aventura Espacial aumenta tu motivación.',
  },
  de: {
    sectionHeading: '🎮 Einmaleins Spiele',
    subtitle: 'Lerne das Einmaleins spielerisch mit interaktiven Spielen. Jedes Spiel bietet eine andere Lernmethode.',
    speedCardTitle: 'Schnellantwort',
    speedCardDesc: 'Wie viele Aufgaben kannst du in 60 Sekunden lösen?',
    heroCardTitle: 'Einmaleins-Held',
    heroCardDesc: 'Steige durch die Level auf und werde Champion',
    memoryCardTitle: 'Memory-Spiel',
    memoryCardDesc: 'Finde die Kartenpaare und multipliziere',
    spaceCardTitle: 'Weltraum-Abenteuer',
    spaceCardDesc: 'Lass deine Rakete mit richtigen Antworten steigen',
    playButtonLabel: 'Spielen',
    timeLabel: 'Zeit',
    timeUnit: 's',
    scoreLabel: 'Punkte',
    gameOverHeading: 'Spiel Beendet!',
    totalScoreLabel: 'Gesamtpunkte:',
    playAgainLabel: 'Nochmal Spielen',
    heroLevelLabel: 'Level',
    heroLivesLabel: 'Leben',
    heroProgressLabel: 'Fortschritt',
    submitButtonLabel: 'Absenden',
    memoryMatchesLabel: 'Paare:',
    memoryWinHeading: 'Glückwunsch!',
    memoryWinText: 'Du hast alle Kartenpaare gefunden!',
    newGameLabel: 'Neues Spiel',
    spaceHeightLabel: 'Höhe',
    spaceHeightUnit: 'm',
    spaceStreakLabel: 'Serie',
    launchButtonLabel: 'Abheben! 🚀',
    tipsHeading: '🎯 Spiel-Tipps',
    tipsParagraph: 'Jedes Spiel nutzt eine andere Lerntechnik. Schnellantwort steigert deine Geschwindigkeit, Einmaleins-Held hilft dir, Schwierigkeitsstufen zu meistern, Memory-Spiel fördert das visuelle Lernen und Weltraum-Abenteuer erhöht deine Motivation.',
  },
  cs: {
    sectionHeading: '🎮 Násobilka Hry',
    subtitle: 'Učte se násobilku hravě pomocí interaktivních her. Každá hra nabízí jinou metodu učení.',
    speedCardTitle: 'Rychlá Odpověď',
    speedCardDesc: 'Kolik úkolů dokážete vyřešit za 60 sekund?',
    heroCardTitle: 'Hrdina Násobilky',
    heroCardDesc: 'Postupujte úrovněmi a staňte se šampiónem',
    memoryCardTitle: 'Pexeso',
    memoryCardDesc: 'Najděte páry karet a násobte',
    spaceCardTitle: 'Vesmírné Dobrodružství',
    spaceCardDesc: 'Nechte raketu stoupat správnými odpověďmi',
    playButtonLabel: 'Hrát',
    timeLabel: 'Čas',
    timeUnit: 's',
    scoreLabel: 'Body',
    gameOverHeading: 'Hra Skončila!',
    totalScoreLabel: 'Celkové body:',
    playAgainLabel: 'Hrát Znovu',
    heroLevelLabel: 'Úroveň',
    heroLivesLabel: 'Životy',
    heroProgressLabel: 'Postup',
    submitButtonLabel: 'Odeslat',
    memoryMatchesLabel: 'Páry:',
    memoryWinHeading: 'Gratulujeme!',
    memoryWinText: 'Našli jste všechny páry karet!',
    newGameLabel: 'Nová Hra',
    spaceHeightLabel: 'Výška',
    spaceHeightUnit: 'm',
    spaceStreakLabel: 'Série',
    launchButtonLabel: 'Vzlétnout! 🚀',
    tipsHeading: '🎯 Herní Tipy',
    tipsParagraph: 'Každá hra využívá jinou techniku učení. Rychlá Odpověď zvyšuje vaši rychlost, Hrdina Násobilky vám pomáhá zvládnout úrovně obtížnosti, Pexeso podporuje vizuální učení a Vesmírné Dobrodružství zvyšuje vaši motivaci.',
  },
  uk: {
    sectionHeading: '🎮 Ігри Таблиці множення',
    subtitle: 'Вивчайте таблицю множення hravě pomocí інтерактивних ігор. Každá hra nabízí jinou metodu učení.',
    speedCardTitle: 'Швидка Відповідь',
    speedCardDesc: 'Kolik úkolů dokážete vyřešit za 60 секунд?',
    heroCardTitle: 'Герой Таблиці множення',
    heroCardDesc: 'Прогресujte úrovněmi a staňte se šampiónem',
    memoryCardTitle: 'Пари',
    memoryCardDesc: 'Знайдіть пари карток і множте',
    spaceCardTitle: 'Космічна Пригода',
    spaceCardDesc: 'Дозвольте ракеті підніматися правильними відповідями',
    playButtonLabel: 'Грати',
    timeLabel: 'Час',
    timeUnit: 's',
    scoreLabel: 'Рахунок',
    gameOverHeading: 'Гра Закінчилася!',
    // DATA QUALITY FLAG: was "Celkové Рахунок:" (Czech "Celkové" + Ukrainian
    // "Рахунок") in app/components/uk/GamesSection.tsx line 299. Fixed to
    // fresh correct Ukrainian, reusing "Рахунок" from `scoreLabel` above
    // (that occurrence, line 264, was already correct Ukrainian) with the
    // proper Ukrainian word for "Total" instead of the Czech one.
    totalScoreLabel: 'Загальний рахунок:',
    playAgainLabel: 'Грати Znovu',
    heroLevelLabel: 'Рівень',
    heroLivesLabel: 'Життя',
    heroProgressLabel: 'Прогрес',
    submitButtonLabel: 'Надіслати',
    memoryMatchesLabel: 'Пари:',
    memoryWinHeading: 'Вітаємо!',
    memoryWinText: 'Ви знайшли всі пари карток!',
    newGameLabel: 'Нова Гра',
    spaceHeightLabel: 'Висота',
    spaceHeightUnit: 'm',
    spaceStreakLabel: 'Серія',
    launchButtonLabel: 'Злетіти! 🚀',
    tipsHeading: '🎯 Ігрові Поради',
    tipsParagraph: 'Кожна гра використовує різну техніку навчання. Швидка Відповідь збільшує вашу швидкість, Герой Таблиці множення допомагає вам опанувати рівні складності, Пари підтримує візуальне навчання a Космічна Пригода підвищує вашу мотивацію.',
  },
  fi: {
    sectionHeading: 'Oppimispelit',
    subtitle: 'Opi kertotauluja hauskojen ja interaktiivisten pelien avulla',
    speedCardTitle: 'Nopea laskenta',
    speedCardDesc: 'Testaa nopeuttasi',
    heroCardTitle: 'Haaste',
    heroCardDesc: 'Harjoittele paineessa',
    memoryCardTitle: 'Muistipeli',
    memoryCardDesc: 'Sovita parit',
    spaceCardTitle: 'Kilpailu',
    spaceCardDesc: 'Kilpaile ystävien kanssa',
    playButtonLabel: 'Pelaa nyt',
    timeLabel: 'Aika',
    timeUnit: 's',
    scoreLabel: 'Pisteet:',
    gameOverHeading: 'Peli Päättyi!',
    totalScoreLabel: 'Kokonaispisteet:',
    playAgainLabel: 'Pelaa Uudelleen',
    heroLevelLabel: 'Taso',
    heroLivesLabel: 'Elämät',
    heroProgressLabel: 'Edistyminen',
    submitButtonLabel: 'Lähetä',
    memoryMatchesLabel: 'Parit:',
    memoryWinHeading: 'Onnittelut!',
    memoryWinText: 'Löysit kaikki parit!',
    newGameLabel: 'Uusi Peli',
    spaceHeightLabel: 'Yritykset:',
    spaceStreakLabel: 'Sarja',
    launchButtonLabel: 'Nosta! 🚀',
    tipsHeading: '🎯 Pelivinkkejä',
    tipsParagraph: 'Jokainen peli käyttää eri oppimistekniikkaa. Nopea laskenta parantaa nopeuttasi, Haaste auttaa sinua hallitsemaan vaikeustasojen, Muistipeli tukee visuaalista oppimista ja Kilpailu lisää motivaatiotasi.',
  },
  fr: {
    sectionHeading: '🎮 Jeux Éducatifs',
    subtitle: "Apprenez les tables de multiplication de façon amusante avec des jeux. Chaque jeu offre une méthode d'apprentissage différente.",
    speedCardTitle: 'Réponse Rapide',
    speedCardDesc: 'Combien de questions pouvez-vous résoudre en 60 secondes ?',
    heroCardTitle: 'Héros des Tables',
    heroCardDesc: 'Progressez à travers les niveaux et atteignez le championnat',
    memoryCardTitle: 'Jeu de Mémoire',
    memoryCardDesc: 'Associez les cartes et multipliez',
    spaceCardTitle: 'Aventure Spatiale',
    spaceCardDesc: 'Élevez votre fusée avec des réponses correctes',
    playButtonLabel: 'Jouer',
    timeLabel: 'Temps',
    timeUnit: 's',
    scoreLabel: 'Points',
    gameOverHeading: 'Jeu Terminé !',
    totalScoreLabel: 'Points Totaux :',
    playAgainLabel: 'Jouer à Nouveau',
    heroLevelLabel: 'Niveau',
    heroLivesLabel: 'Vies',
    heroProgressLabel: 'Progrès',
    submitButtonLabel: 'Envoyer',
    memoryMatchesLabel: 'Paires :',
    memoryWinHeading: 'Félicitations !',
    memoryWinText: 'Vous avez apparié toutes les cartes !',
    newGameLabel: 'Nouveau Jeu',
    spaceHeightLabel: 'Altitude',
    spaceHeightUnit: 'm',
    spaceStreakLabel: 'Série',
    launchButtonLabel: 'Décoller ! 🚀',
    tipsHeading: '🎯 Conseils de Jeu',
    tipsParagraph: "Chaque jeu utilise une technique d'apprentissage différente. Réponse Rapide augmente votre vitesse, Héros des Tables vous aide à surmonter les niveaux de difficulté, Jeu de Mémoire développe l'apprentissage visuel et Aventure Spatiale augmente votre motivation.",
  },
  sv: {
    sectionHeading: '🎮 Pedagogiska Spel',
    subtitle: 'Lär dig multiplikationstabellen på ett roligt sätt med spel. Varje spel erbjuder en annan inlärningsmetod.',
    speedCardTitle: 'Snabbt Svar',
    speedCardDesc: 'Hur många frågor kan du lösa på 60 sekunder?',
    heroCardTitle: 'Multiplikationshjälte',
    heroCardDesc: 'Klara nivåerna och nå mästerskapet',
    memoryCardTitle: 'Minnesspel',
    memoryCardDesc: 'Para ihop korten och multiplicera',
    spaceCardTitle: 'Rymdäventyr',
    spaceCardDesc: 'Lyft din raket med rätta svar',
    playButtonLabel: 'Spela',
    timeLabel: 'Tid',
    timeUnit: 's',
    scoreLabel: 'Poäng',
    gameOverHeading: 'Spelet är slut!',
    totalScoreLabel: 'Totala poäng:',
    playAgainLabel: 'Spela Igen',
    heroLevelLabel: 'Nivå',
    heroLivesLabel: 'Liv',
    heroProgressLabel: 'Framsteg',
    submitButtonLabel: 'Skicka',
    memoryMatchesLabel: 'Matchningar:',
    memoryWinHeading: 'Grattis!',
    memoryWinText: 'Du matchade alla kort!',
    newGameLabel: 'Nytt Spel',
    spaceHeightLabel: 'Höjd',
    spaceHeightUnit: 'm',
    spaceStreakLabel: 'Serie',
    launchButtonLabel: 'Avfyra! 🚀',
    tipsHeading: '🎯 Speltips',
    tipsParagraph: 'Varje spel använder en annan inlärningsteknik. Snabbt Svar ökar din hastighet, Multiplikationshjälte hjälper dig klara svårighetsnivåer, Minnesspel utvecklar visuellt lärande och Rymdäventyr ökar din motivation.',
  },
  pt: {
    sectionHeading: '🎮 Jogos Educacionais',
    subtitle: 'Aprenda a tabuada de forma divertida com jogos. Cada jogo oferece um método de aprendizado diferente.',
    speedCardTitle: 'Resposta Rápida',
    speedCardDesc: 'Quantas perguntas você pode resolver em 60 segundos?',
    heroCardTitle: 'Herói da Multiplicação',
    heroCardDesc: 'Complete os níveis e alcance a maestria',
    memoryCardTitle: 'Jogo da Memória',
    memoryCardDesc: 'Combine os cartões e multiplique',
    spaceCardTitle: 'Aventura Espacial',
    spaceCardDesc: 'Levante seu foguete com respostas corretas',
    playButtonLabel: 'Jogar',
    timeLabel: 'Tempo',
    timeUnit: 's',
    scoreLabel: 'Pontuação',
    gameOverHeading: 'Jogo Terminado!',
    totalScoreLabel: 'Pontuação total:',
    playAgainLabel: 'Jogar Novamente',
    heroLevelLabel: 'Nível',
    heroLivesLabel: 'Vidas',
    heroProgressLabel: 'Progresso',
    submitButtonLabel: 'Enviar',
    memoryMatchesLabel: 'Combinações:',
    memoryWinHeading: 'Parabéns!',
    memoryWinText: 'Você combinou todos os cartões!',
    newGameLabel: 'Novo Jogo',
    spaceHeightLabel: 'Altura',
    spaceHeightUnit: 'm',
    spaceStreakLabel: 'Sequência',
    launchButtonLabel: 'Lançar! 🚀',
    tipsHeading: '🎯 Dicas de Jogos',
    tipsParagraph: 'Cada jogo usa uma técnica de aprendizado diferente. Resposta Rápida aumenta sua velocidade, Herói da Multiplicação ajuda você a superar níveis de dificuldade, Jogo da Memória desenvolve aprendizagem visual e Aventura Espacial aumenta sua motivação.',
  },
  en: {
    sectionHeading: '🎮 Educational Games',
    subtitle: 'Learn multiplication tables in a fun way with games. Each game offers a different learning method.',
    speedCardTitle: 'Speed Challenge',
    speedCardDesc: 'How many questions can you solve in 60 seconds?',
    heroCardTitle: 'Multiplication Hero',
    heroCardDesc: 'Complete levels and reach mastery',
    memoryCardTitle: 'Memory Game',
    memoryCardDesc: 'Match the cards and multiply',
    spaceCardTitle: 'Space Adventure',
    spaceCardDesc: 'Launch your rocket with correct answers',
    playButtonLabel: 'Play',
    timeLabel: 'Time',
    timeUnit: 's',
    scoreLabel: 'Score',
    gameOverHeading: 'Game Over!',
    totalScoreLabel: 'Total score:',
    playAgainLabel: 'Play Again',
    heroLevelLabel: 'Level',
    heroLivesLabel: 'Lives',
    heroProgressLabel: 'Progress',
    submitButtonLabel: 'Submit',
    memoryMatchesLabel: 'Matches:',
    memoryWinHeading: 'Congratulations!',
    memoryWinText: 'You matched all the cards!',
    newGameLabel: 'New Game',
    spaceHeightLabel: 'Height',
    spaceHeightUnit: 'm',
    spaceStreakLabel: 'Streak',
    launchButtonLabel: 'Launch! 🚀',
    tipsHeading: '🎯 Game Tips',
    tipsParagraph: 'Each game uses a different learning technique. Speed Challenge increases your speed, Multiplication Hero helps you overcome difficulty levels, Memory Game develops visual learning, and Space Adventure boosts your motivation.',
  },
  pl: {
    sectionHeading: '🎮 Gry Edukacyjne',
    subtitle: 'Ucz się tabliczek mnożenia w zabawny sposób dzięki grom. Każda gra oferuje inną metodę nauki.',
    speedCardTitle: 'Wyzwanie Szybkości',
    speedCardDesc: 'Ile pytań możesz rozwiązać w 60 sekund?',
    heroCardTitle: 'Bohater Mnożenia',
    heroCardDesc: 'Ukończ poziomy i osiągnij mistrzostwo',
    memoryCardTitle: 'Gra Pamięciowa',
    memoryCardDesc: 'Dopasuj karty i mnóż',
    spaceCardTitle: 'Przygoda Kosmiczna',
    spaceCardDesc: 'Wystartuj swoją rakietą z poprawnymi odpowiedziami',
    playButtonLabel: 'Graj',
    timeLabel: 'Czas',
    timeUnit: 's',
    scoreLabel: 'Wynik',
    gameOverHeading: 'Koniec Gry!',
    totalScoreLabel: 'Całkowity wynik:',
    playAgainLabel: 'Zagraj Ponownie',
    heroLevelLabel: 'Poziom',
    heroLivesLabel: 'Życia',
    heroProgressLabel: 'Postęp',
    submitButtonLabel: 'Zatwierdź',
    memoryMatchesLabel: 'Dopasowania:',
    memoryWinHeading: 'Gratulacje!',
    memoryWinText: 'Dopasowałeś wszystkie karty!',
    newGameLabel: 'Nowa Gra',
    spaceHeightLabel: 'Wysokość',
    spaceHeightUnit: 'm',
    spaceStreakLabel: 'Seria',
    launchButtonLabel: 'Start! 🚀',
    tipsHeading: '🎯 Wskazówki Dotyczące Gry',
    tipsParagraph: 'Każda gra wykorzystuje inną technikę nauki. Wyzwanie Szybkości zwiększa twoją szybkość, Bohater Mnożenia pomaga przezwyciężyć poziomy trudności, Gra Pamięciowa rozwija naukę wizualną, a Przygoda Kosmiczna zwiększa twoją motywację.',
  },
  id: {
    sectionHeading: '🎮 Permainan Edukatif',
    subtitle: 'Pelajari tabel perkalian dengan cara yang menyenangkan melalui permainan. Setiap permainan menawarkan metode pembelajaran yang berbeda.',
    speedCardTitle: 'Jawaban Cepat',
    speedCardDesc: 'Berapa soal yang bisa kamu selesaikan dalam 60 detik?',
    heroCardTitle: 'Pahlawan Perkalian',
    heroCardDesc: 'Capai juara dengan melewati level',
    memoryCardTitle: 'Permainan Memori',
    memoryCardDesc: 'Kalikan dengan mencocokkan kartu',
    spaceCardTitle: 'Petualangan Luar Angkasa',
    spaceCardDesc: 'Naikkan roketmu dengan jawaban benar',
    playButtonLabel: 'Main',
    timeLabel: 'Waktu',
    timeUnit: 'd',
    scoreLabel: 'Skor',
    gameOverHeading: 'Permainan Selesai!',
    totalScoreLabel: 'Total Skor:',
    playAgainLabel: 'Main Lagi',
    heroLevelLabel: 'Level',
    heroLivesLabel: 'Nyawa',
    heroProgressLabel: 'Progres',
    submitButtonLabel: 'Kirim',
    memoryMatchesLabel: 'Pasangan:',
    memoryWinHeading: 'Selamat!',
    memoryWinText: 'Kamu berhasil mencocokkan semua kartu!',
    newGameLabel: 'Permainan Baru',
    spaceHeightLabel: 'Ketinggian',
    spaceHeightUnit: 'm',
    spaceStreakLabel: 'Beruntun',
    launchButtonLabel: 'Luncurkan! 🚀',
    tipsHeading: '🎯 Tips Permainan',
    tipsParagraph: 'Setiap permainan menggunakan teknik pembelajaran yang berbeda. Jawaban Cepat meningkatkan kecepatan Anda, Pahlawan Perkalian membantu Anda melewati tingkat kesulitan, Permainan Memori mengembangkan pembelajaran visual, dan Petualangan Luar Angkasa meningkatkan motivasi Anda.',
  },
}
