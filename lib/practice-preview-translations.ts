import { Locale } from './i18n-config'

/**
 * UI strings for `UniversalPracticePreview` (quick-practice quiz + 4-tier exercise flow).
 *
 * Templates use `{token}` placeholders applied via the shared `fillTemplate` helper:
 * - `heading`: `{start}` / `{end}`
 * - `questionsCountTemplate`: `{n}`
 * - `tableSingleTemplate`: `{n}` (used when a tier's range collapses to one table)
 * - `tableRangeTemplate`: `{start}` / `{end}`
 * - `questionCounterTemplate`: `{current}` / `{total}`
 * - `scoreInExerciseTemplate`: `{n}`
 *
 * `expertMixedLabel` is an optional per-locale override for the Expert tier's range
 * label. Only tr and id's source files used a distinct "mixed/all tables" phrase for
 * the Expert tier instead of a numeric range (e.g. tr: "Karışık Tüm Tablolar", id:
 * "Campuran Semua Tabel") — the other 10 locales just reused the numeric range pattern
 * for Expert too. Preserved as an explicit override rather than silently dropped.
 *
 * `tipsParagraph` / `tipsList` are mutually exclusive: 11 locales render a single tip
 * paragraph; id/PracticePreview.tsx alone used a 5-item bulleted list instead, so it's
 * kept faithfully as `tipsList` rather than collapsed into invented paragraph prose.
 *
 * KNOWN SOURCE INCONSISTENCY (not fixed, just noted): tr and id hardcode their exercise
 * range labels (e.g. tr's Easy tier literally reads "2-5 Çarpım Tablosu") independently
 * of the `rangeStart`/`rangeEnd` props, and those hardcoded numbers don't even match
 * what their own `startExercise` config would compute (min=rangeStart=1, not 2, for the
 * default range). The other 10 locales compute the label from rangeStart/rangeEnd via a
 * template, which is self-consistent with the numbers actually quizzed. This file adopts
 * the majority (computed) pattern for tr/id as well via `tableSingleTemplate` /
 * `tableRangeTemplate`, which changes tr/id's literal label text but fixes the
 * label/quiz-content mismatch and matches the other 10 locales' architecture.
 *
 * DATA QUALITY FLAGS (fresh corrected text substituted for contaminated source strings,
 * everything else extracted verbatim):
 *
 * - uk: 5 spots in app/components/uk/PracticePreview.tsx mixed Czech words into
 *   Ukrainian text (clone-from-cs artifact): the subtitle (line 140-141, "pro upevnění
 *   naučené násobilky" / "zábavným způsobem"), `exerciseCompleteHeading` (line 339,
 *   "Вправи Dokončeno!"), `incorrectAnswersHeading` (line 380, "Неправильно Odpovědi:"),
 *   `tipsHeading` (line 409-410, "Tipy pro Вправи"), and `tipsParagraph` (line 412-417,
 *   heavily mixed). All five rewritten in fresh correct Ukrainian below.
 *
 * - es: 5 spots in app/components/es/PracticePreview.tsx left untranslated Turkish
 *   leftovers (clone-from-tr artifact): `questionCounterTemplate` (line 290, "Soru"),
 *   `resultWrongLabel` (line 349, "Yanlış"), `backButtonLabel` (line 367, "Geri Dön"),
 *   and `yourAnswerLabel` (line 389, "Senin cevabın"). Also line 343 reused "Doğru"
 *   where `statCorrectLabel`/"Correctas" belongs. Fixed to Spanish below.
 *
 * - de: 12 spots in app/components/de/PracticePreview.tsx mixed Spanish AND Turkish
 *   leftovers (clone chain tr→es→de, incompletely translated at each hop):
 *   `startButtonLabel` (line 270, "Comenzar"), `questionCounterTemplate` (line 290,
 *   "Soru"), `scoreInExerciseTemplate` (line 293, "Correctas"), `answerPlaceholder`
 *   in the active-exercise input (line 314, "Tu respuesta"), `nextButtonLabel` /
 *   `finishButtonLabel` (line 323, "Siguiente"/"Finalizar"), `statCorrectLabel` /
 *   `resultWrongLabel` in the completion grid (lines 343/349, "Doğru"/"Yanlış"),
 *   `statSuccessLabel` reuse (line 355, "Éxito"), `backButtonLabel` (line 367,
 *   "Geri Dön"), `tryAgainButtonLabel` (line 373, "Resolver de Nuevo"),
 *   `incorrectAnswersHeading` (line 380, "Respuestas Incorrectas:"), and
 *   `yourAnswerLabel` (line 389, "Senin cevabın"). All fixed to German below.
 *
 * - fr: 13 spots in app/components/fr/PracticePreview.tsx mixed Spanish, Turkish, and
 *   mojibake (Ã©-style UTF-8 corruption of accented "é"), consistent with the same
 *   clone-chain pattern: `answerPlaceholder` (lines 204/314, "Tu rÃ©ponse" — mojibake +
 *   Spanish "Tu"), `checkAnswerButton` (line 213, "Verificar"), `newQuestionButton`
 *   (line 245, "Nueva Question"), `easyLevelLabel` (line 107, "Fácil"),
 *   `hardLevelLabel` (line 119, "Difícil"), `questionCounterTemplate` (line 290,
 *   "Soru"), `resultWrongLabel` (line 349, "Yanlış"), `backButtonLabel` (line 367,
 *   "Geri Dön"), `tryAgainButtonLabel` (line 373, "RÃ©soudre de Nuevo"),
 *   `incorrectAnswersHeading` (line 380, "RÃ©ponses Incorrectas:"), `yourAnswerLabel`
 *   (line 389, "Senin cevabın"), `tipsHeading` (line 410, "Consejos al Pratiquer"),
 *   and `tipsParagraph` (line 412-416, mid-sentence Spanish). All rewritten in fresh
 *   correct French below (formal "vous" register, matching the file's own
 *   "Réessayez !" usage).
 */
export interface PracticePreviewTranslations {
  heading: string
  subtitle: string
  tabQuickLabel: string
  tabExercisesLabel: string
  statCorrectLabel: string
  statTotalLabel: string
  statSuccessLabel: string
  answerPlaceholder: string
  checkAnswerButton: string
  feedbackCorrectText: string
  feedbackWrongText: string
  correctAnswerPrefix: string
  newQuestionButton: string
  easyLevelLabel: string
  mediumLevelLabel: string
  hardLevelLabel: string
  expertLevelLabel: string
  questionsCountTemplate: string
  tableSingleTemplate: string
  tableRangeTemplate: string
  expertMixedLabel?: string
  startButtonLabel: string
  exerciseHeading: string
  questionCounterTemplate: string
  scoreInExerciseTemplate: string
  nextButtonLabel: string
  finishButtonLabel: string
  exerciseCompleteHeading: string
  resultWrongLabel: string
  backButtonLabel: string
  tryAgainButtonLabel: string
  incorrectAnswersHeading: string
  yourAnswerLabel: string
  tipsHeading: string
  tipsParagraph?: string
  tipsList?: string[]
}

export const practicePreviewTranslations: Record<Locale, PracticePreviewTranslations> = {
  tr: {
    heading: "{start}'den {end}'e Çarpım Tablosunu Pratik Yapın",
    subtitle: 'Öğrendiğiniz çarpım tablosunu pekiştirmek için pratik yapmak çok önemlidir. Aşağıdaki araçlarla eğlenceli bir şekilde pratik yapabilirsiniz.',
    tabQuickLabel: '⚡ Hızlı Pratik',
    tabExercisesLabel: '📝 Alıştırmalar',
    statCorrectLabel: 'Doğru',
    statTotalLabel: 'Toplam',
    statSuccessLabel: 'Başarı',
    answerPlaceholder: 'Cevabınız',
    checkAnswerButton: 'Kontrol Et',
    feedbackCorrectText: 'Harika! Doğru cevap!',
    feedbackWrongText: 'Tekrar dene!',
    correctAnswerPrefix: 'Doğru cevap:',
    newQuestionButton: '🔄 Yeni Soru',
    easyLevelLabel: 'Kolay',
    mediumLevelLabel: 'Orta',
    hardLevelLabel: 'Zor',
    expertLevelLabel: 'Uzman',
    questionsCountTemplate: '{n} Soru',
    tableSingleTemplate: '{n} Çarpım Tablosu',
    tableRangeTemplate: '{start}-{end} Çarpım Tablosu',
    expertMixedLabel: 'Karışık Tüm Tablolar',
    startButtonLabel: 'Başla',
    exerciseHeading: '📝 Alıştırma',
    questionCounterTemplate: 'Soru {current} / {total}',
    scoreInExerciseTemplate: 'Doğru: {n}',
    nextButtonLabel: 'Sonraki',
    finishButtonLabel: 'Bitir',
    exerciseCompleteHeading: 'Alıştırma Tamamlandı!',
    resultWrongLabel: 'Yanlış',
    backButtonLabel: 'Geri Dön',
    tryAgainButtonLabel: 'Tekrar Çöz',
    incorrectAnswersHeading: 'Yanlış Cevaplar:',
    yourAnswerLabel: 'Senin cevabın:',
    tipsHeading: '💡 Pratik Yaparken İpuçları',
    tipsParagraph: 'Pratik yapmak sadece hız kazanmak için değildir. Her soruyu dikkatlice düşünün, yanlış cevaplarınızı analiz edin ve hangi çarpım tablolarında zorlandığınızı belirleyin. Günde 10-15 dakika düzenli pratik, uzun süreli öğrenme için en etkili yöntemdir.',
  },
  es: {
    heading: 'Practica las Tablas del {start} al {end}',
    subtitle: 'Practicar es muy importante para reforzar las tablas de multiplicar que has aprendido. Puedes practicar de manera divertida con las siguientes herramientas.',
    tabQuickLabel: '⚡ Práctica Rápida',
    tabExercisesLabel: '📝 Ejercicios',
    statCorrectLabel: 'Correctas',
    statTotalLabel: 'Total',
    statSuccessLabel: 'Éxito',
    answerPlaceholder: 'Tu respuesta',
    checkAnswerButton: 'Verificar',
    feedbackCorrectText: '¡Excelente! ¡Respuesta correcta!',
    feedbackWrongText: '¡Inténtalo de nuevo!',
    correctAnswerPrefix: 'Respuesta correcta:',
    newQuestionButton: '🔄 Nueva Pregunta',
    easyLevelLabel: 'Fácil',
    mediumLevelLabel: 'Medio',
    hardLevelLabel: 'Difícil',
    expertLevelLabel: 'Experto',
    questionsCountTemplate: '{n} Preguntas',
    tableSingleTemplate: 'Tabla del {n}',
    tableRangeTemplate: 'Tablas {start}-{end}',
    startButtonLabel: 'Comenzar',
    exerciseHeading: '📝 Ejercicio',
    questionCounterTemplate: 'Pregunta {current} / {total}',
    scoreInExerciseTemplate: 'Correctas: {n}',
    nextButtonLabel: 'Siguiente',
    finishButtonLabel: 'Finalizar',
    exerciseCompleteHeading: '¡Ejercicio Completado!',
    resultWrongLabel: 'Incorrectas',
    backButtonLabel: 'Volver',
    tryAgainButtonLabel: 'Resolver de Nuevo',
    incorrectAnswersHeading: 'Respuestas Incorrectas:',
    yourAnswerLabel: 'Tu respuesta:',
    tipsHeading: '💡 Consejos al Practicar',
    tipsParagraph: 'Practicar no es solo para ganar velocidad. Piensa cuidadosamente en cada pregunta, analiza tus respuestas incorrectas e identifica qué tablas de multiplicar te resultan difíciles. La práctica regular de 10-15 minutos al día es el método más efectivo para el aprendizaje a largo plazo.',
  },
  de: {
    heading: 'Übe das Einmaleins von {start} bis {end}',
    subtitle: 'Üben ist sehr wichtig, um das gelernte Einmaleins zu festigen. Du kannst mit den folgenden Tools auf unterhaltsame Weise üben.',
    tabQuickLabel: '⚡ Schnelle Übung',
    tabExercisesLabel: '📝 Übungsaufgaben',
    statCorrectLabel: 'Richtig',
    statTotalLabel: 'Gesamt',
    statSuccessLabel: 'Erfolg',
    answerPlaceholder: 'Deine Antwort',
    checkAnswerButton: 'Prüfen',
    feedbackCorrectText: 'Ausgezeichnet! Richtige Antwort!',
    feedbackWrongText: 'Versuche es nochmal!',
    correctAnswerPrefix: 'Richtige Antwort:',
    newQuestionButton: '🔄 Neue Frage',
    easyLevelLabel: 'Einfach',
    mediumLevelLabel: 'Mittel',
    hardLevelLabel: 'Schwer',
    expertLevelLabel: 'Experte',
    questionsCountTemplate: '{n} Fragen',
    tableSingleTemplate: 'Tabelle {n}',
    tableRangeTemplate: 'Tabellen {start}-{end}',
    startButtonLabel: 'Starten',
    exerciseHeading: '📝 Übungsaufgabe',
    questionCounterTemplate: 'Frage {current} / {total}',
    scoreInExerciseTemplate: 'Richtig: {n}',
    nextButtonLabel: 'Weiter',
    finishButtonLabel: 'Fertig',
    exerciseCompleteHeading: 'Übung Abgeschlossen!',
    resultWrongLabel: 'Falsch',
    backButtonLabel: 'Zurück',
    tryAgainButtonLabel: 'Nochmal Versuchen',
    incorrectAnswersHeading: 'Falsche Antworten:',
    yourAnswerLabel: 'Deine Antwort:',
    tipsHeading: '💡 Tipps zum Üben',
    tipsParagraph: 'Üben bedeutet nicht nur Geschwindigkeit. Denke sorgfältig über jede Frage nach, analysiere deine falschen Antworten und erkenne, welche Einmaleins-Tabellen dir schwer fallen. Regelmäßiges Üben von 10-15 Minuten pro Tag ist die effektivste Methode für langfristiges Lernen.',
  },
  cs: {
    heading: 'Cvičit Násobilku od {start} do {end}',
    subtitle: 'Cvičení je velmi důležité pro upevnění naučené násobilky. Můžete cvičit zábavným způsobem pomocí následujících nástrojů.',
    tabQuickLabel: '⚡ Rychlé Cvičení',
    tabExercisesLabel: '📝 Cvičení',
    statCorrectLabel: 'Správné',
    statTotalLabel: 'Celkem',
    statSuccessLabel: 'Úspěšnost',
    answerPlaceholder: 'Vaše odpověď',
    checkAnswerButton: 'Zkontrolovat',
    feedbackCorrectText: 'Výborně! Správná odpověď!',
    feedbackWrongText: 'Zkuste to znovu!',
    correctAnswerPrefix: 'Správná odpověď:',
    newQuestionButton: '🔄 Nová Otázka',
    easyLevelLabel: 'Snadné',
    mediumLevelLabel: 'Střední',
    hardLevelLabel: 'Těžké',
    expertLevelLabel: 'Expert',
    questionsCountTemplate: '{n} Otázek',
    tableSingleTemplate: 'Tabulka {n}',
    tableRangeTemplate: 'Tabulky {start}-{end}',
    startButtonLabel: 'Začít',
    exerciseHeading: '📝 Cvičení',
    questionCounterTemplate: 'Otázka {current} / {total}',
    scoreInExerciseTemplate: 'Správné: {n}',
    nextButtonLabel: 'Další',
    finishButtonLabel: 'Dokončit',
    exerciseCompleteHeading: 'Cvičení Dokončeno!',
    resultWrongLabel: 'Špatné',
    backButtonLabel: 'Zpět',
    tryAgainButtonLabel: 'Zkusit Znovu',
    incorrectAnswersHeading: 'Špatné Odpovědi:',
    yourAnswerLabel: 'Vaše odpověď:',
    tipsHeading: '💡 Tipy pro Cvičení',
    tipsParagraph: 'Cvičení neznamená pouze rychlost. Pečlivě přemýšlejte o každé otázce, analyzujte své špatné odpovědi a rozpoznejte, které násobilky vám dělají potíže. Pravidelné cvičení 10-15 minut denně je nejúčinnější metodou pro dlouhodobé učení.',
  },
  uk: {
    heading: 'Практикувати Таблицю множення від {start} до {end}',
    subtitle: 'Практика дуже важлива для закріплення вивченої таблиці множення. Ви можете практикувати у веселий спосіб за допомогою наведених нижче інструментів.',
    tabQuickLabel: '⚡ Швидка Практика',
    tabExercisesLabel: '📝 Вправи',
    statCorrectLabel: 'Правильно',
    statTotalLabel: 'Всього',
    statSuccessLabel: 'Успішність',
    answerPlaceholder: 'Ваша відповідь',
    checkAnswerButton: 'Перевірити',
    feedbackCorrectText: 'Чудово! Правильна відповідь!',
    feedbackWrongText: 'Спробуйте ще раз!',
    correctAnswerPrefix: 'Правильна відповідь:',
    newQuestionButton: '🔄 Нове Запитання',
    easyLevelLabel: 'Легко',
    mediumLevelLabel: 'Середній',
    hardLevelLabel: 'Важко',
    expertLevelLabel: 'Експерт',
    questionsCountTemplate: '{n} Запитань',
    tableSingleTemplate: 'Таблиця {n}',
    tableRangeTemplate: 'Таблиці {start}-{end}',
    startButtonLabel: 'Почати',
    exerciseHeading: '📝 Вправи',
    questionCounterTemplate: 'Запитання {current} / {total}',
    scoreInExerciseTemplate: 'Правильно: {n}',
    nextButtonLabel: 'Далі',
    finishButtonLabel: 'Завершити',
    exerciseCompleteHeading: 'Вправу завершено!',
    resultWrongLabel: 'Неправильно',
    backButtonLabel: 'Назад',
    tryAgainButtonLabel: 'Спробувати Знову',
    incorrectAnswersHeading: 'Неправильні відповіді:',
    yourAnswerLabel: 'Ваша відповідь:',
    tipsHeading: '💡 Поради щодо практики',
    tipsParagraph: 'Практика — це не лише про швидкість. Уважно обдумуйте кожне питання, аналізуйте свої неправильні відповіді та визначайте, які таблиці множення викликають труднощі. Регулярна практика по 10-15 хвилин щодня — найефективніший спосіб довготривалого навчання.',
  },
  fi: {
    heading: 'Harjoittele Kertotauluja {start}–{end}',
    subtitle: 'Testaa taitojasi välittömällä palautteella',
    tabQuickLabel: '⚡ Nopea Harjoittelu',
    tabExercisesLabel: '📝 Harjoitukset',
    statCorrectLabel: 'Oikein',
    statTotalLabel: 'Yhteensä',
    statSuccessLabel: 'Onnistuminen',
    answerPlaceholder: 'Vastauksesi',
    checkAnswerButton: 'Tarkista vastaus',
    feedbackCorrectText: 'Oikein! Hienoa työtä! 🎉',
    feedbackWrongText: 'Yritä uudelleen! 💪',
    correctAnswerPrefix: 'Oikea vastaus:',
    newQuestionButton: '🔄 Uusi Kysymys',
    easyLevelLabel: 'Helppo',
    mediumLevelLabel: 'Keskitaso',
    hardLevelLabel: 'Vaikea',
    expertLevelLabel: 'Asiantuntija',
    questionsCountTemplate: '{n} Kysymystä',
    tableSingleTemplate: 'Taulu {n}',
    tableRangeTemplate: 'Taulut {start}-{end}',
    startButtonLabel: 'Aloita',
    exerciseHeading: '📝 Harjoitukset',
    questionCounterTemplate: 'Kysymys {current} / {total}',
    scoreInExerciseTemplate: 'Pisteet: {n}',
    nextButtonLabel: 'Seuraava',
    finishButtonLabel: 'Valmis',
    exerciseCompleteHeading: 'Harjoitus Valmis!',
    resultWrongLabel: 'Väärin',
    backButtonLabel: 'Takaisin',
    tryAgainButtonLabel: 'Yritä Uudelleen',
    incorrectAnswersHeading: 'Väärät Vastaukset:',
    yourAnswerLabel: 'Sinun vastauksesi:',
    tipsHeading: '💡 Harjoitteluvinkkejä',
    tipsParagraph: 'Harjoittelu ei tarkoita vain nopeutta. Mieti jokaista kysymystä huolellisesti, analysoi väärät vastauksesi ja tunnista, mitkä kertotaulut tuottavat sinulle vaikeuksia. Säännöllinen 10-15 minuutin päivittäinen harjoittelu on tehokkain menetelmä pitkäaikaiseen oppimiseen.',
  },
  fr: {
    heading: 'Pratiquez les Tables de {start} à {end}',
    subtitle: "Pratiquer est très important pour renforcer les tables de multiplication que vous avez apprises. Vous pouvez pratiquer de manière ludique avec les outils suivants.",
    tabQuickLabel: '⚡ Pratique Rapide',
    tabExercisesLabel: '📝 Exercices',
    statCorrectLabel: 'Correctes',
    statTotalLabel: 'Total',
    statSuccessLabel: 'Succès',
    answerPlaceholder: 'Votre réponse',
    checkAnswerButton: 'Vérifier',
    feedbackCorrectText: 'Excellent ! Réponse correcte !',
    feedbackWrongText: 'Réessayez !',
    correctAnswerPrefix: 'Réponse correcte :',
    newQuestionButton: '🔄 Nouvelle Question',
    easyLevelLabel: 'Facile',
    mediumLevelLabel: 'Moyen',
    hardLevelLabel: 'Difficile',
    expertLevelLabel: 'Expert',
    questionsCountTemplate: '{n} Questions',
    tableSingleTemplate: 'Table de {n}',
    tableRangeTemplate: 'Tables {start}-{end}',
    startButtonLabel: 'Commencer',
    exerciseHeading: '📝 Exercice',
    questionCounterTemplate: 'Question {current} / {total}',
    scoreInExerciseTemplate: 'Correctes: {n}',
    nextButtonLabel: 'Suivant',
    finishButtonLabel: 'Terminer',
    exerciseCompleteHeading: 'Exercice Terminé !',
    resultWrongLabel: 'Incorrectes',
    backButtonLabel: 'Retour',
    tryAgainButtonLabel: 'Réessayer',
    incorrectAnswersHeading: 'Réponses Incorrectes :',
    yourAnswerLabel: 'Votre réponse :',
    tipsHeading: '💡 Conseils de Pratique',
    tipsParagraph: "Pratiquer n'est pas seulement une question de vitesse. Réfléchissez bien à chaque question, analysez vos réponses incorrectes et identifiez quelles tables de multiplication vous posent des difficultés. Une pratique régulière de 10 à 15 minutes par jour est la méthode la plus efficace pour un apprentissage à long terme.",
  },
  sv: {
    heading: 'Öva Multiplikationstabellerna {start}–{end}',
    subtitle: 'Testa dina färdigheter med omedelbar feedback',
    tabQuickLabel: '⚡ Snabb Övning',
    tabExercisesLabel: '📝 Övningar',
    statCorrectLabel: 'Rätt',
    statTotalLabel: 'Totalt',
    statSuccessLabel: 'Framgång',
    answerPlaceholder: 'Ditt svar',
    checkAnswerButton: 'Kontrollera svar',
    feedbackCorrectText: 'Rätt! Bra jobbat! 🎉',
    feedbackWrongText: 'Försök igen! 💪',
    correctAnswerPrefix: 'Rätt svar:',
    newQuestionButton: '🔄 Ny Fråga',
    easyLevelLabel: 'Lätt',
    mediumLevelLabel: 'Mellan',
    hardLevelLabel: 'Svår',
    expertLevelLabel: 'Expert',
    questionsCountTemplate: '{n} Frågor',
    tableSingleTemplate: 'Tabell {n}',
    tableRangeTemplate: 'Tabeller {start}-{end}',
    startButtonLabel: 'Starta',
    exerciseHeading: '📝 Övningar',
    questionCounterTemplate: 'Fråga {current} / {total}',
    scoreInExerciseTemplate: 'Poäng: {n}',
    nextButtonLabel: 'Nästa',
    finishButtonLabel: 'Klar',
    exerciseCompleteHeading: 'Övning Klar!',
    resultWrongLabel: 'Fel',
    backButtonLabel: 'Tillbaka',
    tryAgainButtonLabel: 'Försök Igen',
    incorrectAnswersHeading: 'Felaktiga Svar:',
    yourAnswerLabel: 'Ditt svar:',
    tipsHeading: '💡 Övningstips',
    tipsParagraph: 'Övning handlar inte bara om hastighet. Tänk noga på varje fråga, analysera dina felaktiga svar och identifiera vilka multiplikationstabeller som orsakar dig svårigheter. Regelbunden 10-15 minuters daglig övning är den mest effektiva metoden för långsiktigt lärande.',
  },
  pt: {
    heading: 'Pratique a Tabuada de {start} a {end}',
    subtitle: 'Teste suas habilidades com feedback instantâneo',
    tabQuickLabel: '⚡ Prática Rápida',
    tabExercisesLabel: '📝 Exercícios',
    statCorrectLabel: 'Corretas',
    statTotalLabel: 'Total',
    statSuccessLabel: 'Taxa de acerto',
    answerPlaceholder: 'Sua resposta',
    checkAnswerButton: 'Verificar resposta',
    feedbackCorrectText: 'Correto! Bom trabalho! 🎉',
    feedbackWrongText: 'Tente novamente! 💪',
    correctAnswerPrefix: 'Resposta correta:',
    newQuestionButton: '🔄 Nova Pergunta',
    easyLevelLabel: 'Fácil',
    mediumLevelLabel: 'Médio',
    hardLevelLabel: 'Difícil',
    expertLevelLabel: 'Expert',
    questionsCountTemplate: '{n} Perguntas',
    tableSingleTemplate: 'Tabela {n}',
    tableRangeTemplate: 'Tabelas {start}-{end}',
    startButtonLabel: 'Iniciar',
    exerciseHeading: '📝 Exercícios',
    questionCounterTemplate: 'Pergunta {current} / {total}',
    scoreInExerciseTemplate: 'Pontuação: {n}',
    nextButtonLabel: 'Próxima',
    finishButtonLabel: 'Concluir',
    exerciseCompleteHeading: 'Exercício Completo!',
    resultWrongLabel: 'Erradas',
    backButtonLabel: 'Voltar',
    tryAgainButtonLabel: 'Tentar Novamente',
    incorrectAnswersHeading: 'Respostas Incorretas:',
    yourAnswerLabel: 'Sua resposta:',
    tipsHeading: '💡 Dicas de Prática',
    tipsParagraph: 'A prática não é apenas sobre velocidade. Pense cuidadosamente em cada pergunta, analise suas respostas incorretas e identifique quais tabuadas estão causando dificuldades. Prática regular de 10-15 minutos diários é o método mais eficaz para aprendizado de longo prazo.',
  },
  en: {
    heading: 'Practice the {start} to {end} Times Tables',
    subtitle: 'Test your skills with instant feedback',
    tabQuickLabel: '⚡ Quick Practice',
    tabExercisesLabel: '📝 Exercises',
    statCorrectLabel: 'Correct',
    statTotalLabel: 'Total',
    statSuccessLabel: 'Success Rate',
    answerPlaceholder: 'Your answer',
    checkAnswerButton: 'Check Answer',
    feedbackCorrectText: 'Correct! Great job! 🎉',
    feedbackWrongText: 'Try again! 💪',
    correctAnswerPrefix: 'Correct answer:',
    newQuestionButton: '🔄 New Question',
    easyLevelLabel: 'Easy',
    mediumLevelLabel: 'Medium',
    hardLevelLabel: 'Hard',
    expertLevelLabel: 'Expert',
    questionsCountTemplate: '{n} Questions',
    tableSingleTemplate: 'Table {n}',
    tableRangeTemplate: 'Tables {start}-{end}',
    startButtonLabel: 'Start',
    exerciseHeading: '📝 Exercises',
    questionCounterTemplate: 'Question {current} / {total}',
    scoreInExerciseTemplate: 'Score: {n}',
    nextButtonLabel: 'Next',
    finishButtonLabel: 'Finish',
    exerciseCompleteHeading: 'Exercise Complete!',
    resultWrongLabel: 'Wrong',
    backButtonLabel: 'Back',
    tryAgainButtonLabel: 'Try Again',
    incorrectAnswersHeading: 'Incorrect Answers:',
    yourAnswerLabel: 'Your answer:',
    tipsHeading: '💡 Practice Tips',
    tipsParagraph: "Practice isn't just about speed. Think carefully about each question, analyze your incorrect answers, and identify which multiplication tables are causing difficulties. Regular practice of 10-15 minutes daily is the most effective method for long-term learning.",
  },
  pl: {
    heading: 'Ćwicz Tabliczki Mnożenia od {start} do {end}',
    subtitle: 'Sprawdź swoje umiejętności z natychmiastową informacją zwrotną',
    tabQuickLabel: '⚡ Szybka Praktyka',
    tabExercisesLabel: '📝 Ćwiczenia',
    statCorrectLabel: 'Poprawne',
    statTotalLabel: 'Razem',
    statSuccessLabel: 'Skuteczność',
    answerPlaceholder: 'Twoja odpowiedź',
    checkAnswerButton: 'Sprawdź Odpowiedź',
    feedbackCorrectText: 'Poprawnie! Świetna robota! 🎉',
    feedbackWrongText: 'Spróbuj ponownie! 💪',
    correctAnswerPrefix: 'Poprawna odpowiedź:',
    newQuestionButton: '🔄 Nowe Pytanie',
    easyLevelLabel: 'Łatwy',
    mediumLevelLabel: 'Średni',
    hardLevelLabel: 'Trudny',
    expertLevelLabel: 'Ekspert',
    questionsCountTemplate: '{n} Pytań',
    tableSingleTemplate: 'Tabliczka {n}',
    tableRangeTemplate: 'Tabliczki {start}-{end}',
    startButtonLabel: 'Start',
    exerciseHeading: '📝 Ćwiczenia',
    questionCounterTemplate: 'Pytanie {current} / {total}',
    scoreInExerciseTemplate: 'Wynik: {n}',
    nextButtonLabel: 'Dalej',
    finishButtonLabel: 'Koniec',
    exerciseCompleteHeading: 'Ćwiczenie Ukończone!',
    resultWrongLabel: 'Błędne',
    backButtonLabel: 'Wstecz',
    tryAgainButtonLabel: 'Spróbuj Ponownie',
    incorrectAnswersHeading: 'Niepoprawne Odpowiedzi:',
    yourAnswerLabel: 'Twoja odpowiedź:',
    tipsHeading: '💡 Wskazówki Dotyczące Praktyki',
    tipsParagraph: 'Praktyka to nie tylko szybkość. Dokładnie przemyśl każde pytanie, przeanalizuj swoje błędne odpowiedzi i zidentyfikuj, które tabliczki mnożenia sprawiają trudności. Regularna praktyka przez 10-15 minut dziennie to najskuteczniejsza metoda dla długoterminowej nauki.',
  },
  id: {
    heading: 'Latihan Tabel Perkalian {start} sampai {end}',
    subtitle: 'Sangat penting untuk berlatih agar dapat menguasai tabel perkalian yang telah dipelajari. Anda dapat berlatih dengan cara yang menyenangkan menggunakan alat-alat di bawah ini.',
    tabQuickLabel: '⚡ Latihan Cepat',
    tabExercisesLabel: '📝 Latihan',
    statCorrectLabel: 'Benar',
    statTotalLabel: 'Total',
    statSuccessLabel: 'Akurasi',
    answerPlaceholder: 'Jawaban Anda',
    checkAnswerButton: 'Periksa',
    feedbackCorrectText: 'Bagus! Jawaban benar!',
    feedbackWrongText: 'Coba lagi!',
    correctAnswerPrefix: 'Jawaban yang benar:',
    newQuestionButton: '🔄 Soal Baru',
    easyLevelLabel: 'Mudah',
    mediumLevelLabel: 'Sedang',
    hardLevelLabel: 'Sulit',
    expertLevelLabel: 'Ahli',
    questionsCountTemplate: '{n} Soal',
    tableSingleTemplate: 'Tabel Perkalian {n}',
    tableRangeTemplate: 'Tabel Perkalian {start}-{end}',
    expertMixedLabel: 'Campuran Semua Tabel',
    startButtonLabel: 'Mulai',
    exerciseHeading: '📝 Latihan',
    questionCounterTemplate: 'Soal {current} / {total}',
    scoreInExerciseTemplate: 'Benar: {n}',
    nextButtonLabel: 'Selanjutnya',
    finishButtonLabel: 'Selesai',
    exerciseCompleteHeading: 'Latihan Selesai!',
    resultWrongLabel: 'Salah',
    backButtonLabel: 'Kembali',
    tryAgainButtonLabel: 'Coba Lagi',
    incorrectAnswersHeading: 'Jawaban yang Salah:',
    yourAnswerLabel: 'Jawaban Anda:',
    tipsHeading: '💡 Tips Saat Berlatih',
    tipsList: [
      'Mulai dengan soal yang mudah terlebih dahulu',
      'Jangan terburu-buru, fokus pada akurasi',
      'Lakukan latihan 10-15 menit setiap hari',
      'Pelajari kesalahan yang Anda buat',
      'Tingkatkan kesulitan secara bertahap',
    ],
  },
}
