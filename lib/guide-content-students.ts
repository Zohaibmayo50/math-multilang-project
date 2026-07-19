import type { Locale } from './i18n-config'

// Data for the "students" guide-page type (12 locales), extracted verbatim from the
// original app/_guide-components/{slug}/page.tsx files.
//
// Structural notes shared by every locale (confirmed while reading all 12 files):
// - Hero: heroTitle / heroSubtitle / heroCaption (caption sits next to a fixed checkmark icon).
// - "Why Learn" section: 4 cards, icons fixed in order ⚡ 🎮 🏆 🧠 (only prose differs).
// - "Learning Path" section: 4 numbered steps, border colors fixed green/blue/yellow/purple.
//   Only step 1 carries a link (to the `1-10` range page, resolved via getLocalizedPath).
// - "Visual Learning" section: the four sub-widgets (arrays grid of 12 boxes, number-line
//   0→4→8→12, skip-counting 5-10-15-20-25, the 9x pattern list 9×1=09..9×4=36) are IDENTICAL
//   markup/numbers across all 12 locales — only the surrounding labels/captions differ, so
//   those numeric visuals are hardcoded in the component and only the text fields below are
//   stored here.
// - "Practice Tips" section: 4 cards, icons fixed 🎮 📝 🎵 🏆; only card 1 has a link
//   (to the topic-home page, resolved via getLocalizedPath(lang)).
// - "Track Your Progress" section: 3 cards (checklist / chart / star system), colors fixed
//   green/blue/purple.
// - "Motivation" section: two 3-item columns, icons fixed per position
//   (col1: 🌟 💪 🎯, col2: 🤝 🎉 😊).
// - "Quick Tricks Guide" section: 6 small cards for ×0 ×1 ×2 ×5 ×9 ×10, colors fixed
//   blue/green/purple/pink/yellow/indigo.
// - CTA: heading, body, two buttons (button 1 -> `1-10` range, button 2 -> topic home,
//   both resolved via getLocalizedPath — hrefs are NOT stored here) + a closing tip line.
//
// DATA QUALITY FLAG (para-estudantes / pt): the original source file has several sections
// ("Why Learn" cards 1-2 title/body, the entire Step 4, and the entire "Visual Learning"
// section) written in SPANISH, not Portuguese — apparent copy/paste bug from the es file.
// Per the verbatim-extraction requirement, that Spanish text is preserved exactly as-is
// below; it has NOT been translated or "fixed". See final report for details.

export interface WhyLearnCard {
  emoji: string
  title: string
  body: string
}

export interface LearningPathStep {
  title: string
  body: string
  boxLabel: string
  bullets: string[]
  /** Only step 1 has this — link label for the `1-10` range page. */
  linkLabel?: string
}

export interface PracticeTipCard {
  emoji: string
  title: string
  body: string
  /** Only the first card has this — link label to the topic-home page. */
  linkLabel?: string
}

export interface ProgressCard {
  title: string
  body: string
}

export interface MotivationItem {
  emoji: string
  title: string
  body: string
}

export interface QuickTrickCard {
  title: string
  body: string
}

export interface StudentsContent {
  heroTitle: string
  heroSubtitle: string
  heroCaption: string

  whyLearnHeading: string
  whyLearnIntro: string
  whyLearnCards: WhyLearnCard[]

  learningPathHeading: string
  learningPathSteps: LearningPathStep[]

  visualLearningHeading: string
  visualLearningIntro: string
  arraysTitle: string
  arraysExample: string
  arraysCaption: string
  numberLineTitle: string
  numberLineExample: string
  numberLineCaption: string
  skipCountingTitle: string
  skipCountingExample: string
  skipCountingTip: string
  patternsTitle: string
  patternsIntro: string
  patternsNote: string

  practiceTipsHeading: string
  practiceTipsCards: PracticeTipCard[]

  progressHeading: string
  progressIntro: string
  progressCards: ProgressCard[]

  motivationHeading: string
  motivationColumn1: MotivationItem[]
  motivationColumn2: MotivationItem[]

  quickTricksHeading: string
  quickTricksCards: QuickTrickCard[]

  ctaHeading: string
  ctaBody: string
  ctaButton1Label: string
  ctaButton2Label: string
  ctaTipLabel: string
  ctaTipBody: string
}

export const studentsContent: Record<Locale, StudentsContent> = {
  tr: {
    heroTitle: 'Çarpım Tablosunu Öğrenmek Çok Kolay! 🎯',
    heroSubtitle:
      "Kendi hızında ilerle, eğlenerek öğren ve matematik kahramanı ol! Bu rehber, çarpım tablosunu adım adım öğrenmene yardımcı olacak.",
    heroCaption: 'Sen de yapabilirsin!',

    whyLearnHeading: 'Neden Çarpım Tablosu Öğrenmeliyim? 🤔',
    whyLearnIntro: 'Çarpım tablosu, matematik dünyasının süper gücü! İşte sana neler kazandıracak:',
    whyLearnCards: [
      { emoji: '⚡', title: 'Hızlı Hesaplama', body: 'Matematik sorularını çok daha hızlı çözebileceksin!' },
      { emoji: '🎮', title: 'Günlük Hayatta Kullanım', body: 'Alışverişte, oyunlarda, her yerde işine yarayacak!' },
      { emoji: '🏆', title: 'Özgüven Artışı', body: 'Matematikte kendine güvenin artacak ve daha başarılı olacaksın!' },
      { emoji: '🧠', title: 'Beyin Gücü', body: 'Hafızan güçlenecek ve daha hızlı düşünmeyi öğreneceksin!' },
    ],

    learningPathHeading: 'Adım Adım Öğrenme Yolu 🚀',
    learningPathSteps: [
      {
        title: 'Basit Tablolarla Başla (1, 2, 5, 10)',
        body: 'En kolay tablolardan başlamak sana güven verecek! Bunlar çok basit ve çabuk öğreneceksin.',
        boxLabel: 'Neden bu tablolar kolay?',
        bullets: [
          '1 Tablosu: Her sayı kendisiyle kalır! (1×5=5)',
          '2 Tablosu: Sayıyı iki kere topla! (2×4 = 4+4 = 8)',
          '5 Tablosu: Her zaman 5 veya 0 ile biter!',
          '10 Tablosu: Sonuna sıfır ekle! (10×3 = 30)',
        ],
        linkLabel: '1-10 Tablolarına Git →',
      },
      {
        title: 'Orta Seviye Tablolara Geç (3, 4, 6)',
        body: 'Artık biraz daha zorlayıcı tablolara hazırsın! Endişelenme, bunlar için de püf noktalar var.',
        boxLabel: 'Püf Noktalar:',
        bullets: [
          '3 Tablosu: Sayıyı 3 kere topla (3×4 = 4+4+4 = 12)',
          '4 Tablosu: 2 ile çarp, sonra iki katına çıkar (4×5 = 2×5×2 = 20)',
          '6 Tablosu: 5 tablosuna 1 tane daha ekle (6×4 = 5×4 + 4 = 24)',
        ],
      },
      {
        title: 'Zor Tablolarla Kendini Zorla (7, 8, 9)',
        body: 'Bu tablolar biraz daha zor ama sen şimdiye kadar çok şey öğrendin! Özel tekniklerle bunları da halledeceksin.',
        boxLabel: 'Özel Teknikler:',
        bullets: [
          "9 Tablosu - Parmak Hilesi: Ellerini aç, hangi sayıyla çarpacaksan o parmağı kapat. Solda kaç parmak açık = onlar basamağı, sağda kaç parmak = birler basamağı!",
          "8 Tablosu: 10'la çarp, 2 tane çıkar (8×7 = 10×7 - 2×7 = 70-14 = 56)",
          '7 Tablosu: Zor olanlarda 5 tablosunu kullan (7×6 = 5×6 + 2×6 = 30+12 = 42)',
        ],
      },
      {
        title: 'Sürekli Pratik Yap 💪',
        body: 'Öğrendiğin her şeyi unutmamak için her gün biraz pratik yap. Kısa ama düzenli çalışma en iyisi!',
        boxLabel: 'Günlük Pratik İpuçları:',
        bullets: [
          'Her gün 10-15 dakika çalış (uzun değil, düzenli!)',
          'Oyunlar oynayarak pratik yap - eğlenceli!',
          'Aileyle yarışmalar düzenle',
          'Günlük hayatta çarpım görünce hesapla (örn: "3 kutu, her kutuda 5 çikolata var, toplam kaç?")',
        ],
      },
    ],

    visualLearningHeading: 'Görsel Öğrenme - Resimlerle Anla 🎨',
    visualLearningIntro: 'Çarpımı gözünde canlandırmak öğrenmeni kolaylaştırır! İşte bazı görsel teknikler:',
    arraysTitle: 'Diziler (Arrays)',
    arraysExample: '4 × 3 = 12 örneği:',
    arraysCaption: '4 sütun × 3 satır = 12',
    numberLineTitle: 'Sayı Doğrusu Sıçramaları',
    numberLineExample: "3 × 4: 4'erli sıçramalar (0→4→8→12)",
    numberLineCaption: '3 adım, her adım 4 birim',
    skipCountingTitle: 'Atlamalı Sayma',
    skipCountingExample: "5'erli say: 5, 10, 15, 20, 25...",
    skipCountingTip: 'Bu sayıları ezberlersen 5 tablosu çok kolay!',
    patternsTitle: 'Örüntüleri Fark Et',
    patternsIntro: '9 tablosunun sırrı:',
    patternsNote: 'Rakamlar toplamı hep 9!',

    practiceTipsHeading: 'Pratik Yapma İpuçları 🎯',
    practiceTipsCards: [
      {
        emoji: '🎮',
        title: 'Oyunlar Oyna',
        body: 'Bu sitedeki eğlenceli oyunlarla pratik yap. Oynarken öğrenmek çok daha eğlenceli!',
        linkLabel: 'Oyunları Keşfet →',
      },
      { emoji: '📝', title: 'Kendi Kendine Test Et', body: 'Kartları kullan veya birini sana soru sordur. Kendin test etmek öğrenmeni hızlandırır!' },
      { emoji: '🎵', title: 'Şarkılar ve Ritmler', body: 'Çarpım tablolarını şarkı haline getir! Müzikle ezberlenmek daha kolay.' },
      { emoji: '🏆', title: 'Kendini Ödüllendir', body: 'Bir tabloyu öğrendiğinde kendini ödüllendir! Çıkartma topla veya küçük bir şey yap.' },
    ],

    progressHeading: 'İlerlemeni Takip Et 📊',
    progressIntro: 'Ne kadar ilerlediğini görmek seni motive eder! İşte takip yöntemleri:',
    progressCards: [
      {
        title: '✅ Tablo Kontrol Listesi',
        body: "Bir kağıda 1'den 10'a kadar tabloları yaz. Her birini öğrendiğinde yanına büyük bir tik at! Tüm tikler tamamlanınca çarpım tablosu kahramanı olacaksın! 🌟",
      },
      { title: '📈 İlerleme Grafiği', body: 'Her hafta kaç soru doğru yaptığını kaydet. Grafik çiz ve ilerlemeyi gör. Her hafta daha iyiye gidiyorsun!' },
      { title: '⭐ Yıldız Sistemi', body: 'Her doğru cevap için kendin yıldız çiz. 100 yıldıza ulaşınca kendine özel bir ödül ver!' },
    ],

    motivationHeading: 'Motivasyon ve Başarı Sırları 💫',
    motivationColumn1: [
      { emoji: '🌟', title: 'Sabırlı Ol', body: 'Her şey zaman alır. Sen de yapabilirsin, sadece pratik yap!' },
      { emoji: '💪', title: 'Hatalar Normaldir', body: 'Yanlış yapınca üzülme, bu öğrenmenin bir parçası!' },
      { emoji: '🎯', title: 'Küçük Hedefler Koy', body: 'Günde bir tablo yeterli, acele etme!' },
    ],
    motivationColumn2: [
      { emoji: '🤝', title: 'Yardım İste', body: 'Anlamadığın bir şey olursa aileden veya öğretmeninden sor!' },
      { emoji: '🎉', title: 'Başarılarını Kutla', body: 'Her küçük başarın önemli, kendini takdir et!' },
      { emoji: '😊', title: 'Eğlen!', body: 'Öğrenme eğlenceli olmalı, oyunları dene!' },
    ],

    quickTricksHeading: 'Hızlı Püf Noktaları Rehberi 🔑',
    quickTricksCards: [
      { title: '0 ile Çarpım', body: 'Her şey sıfır olur! 0×1000=0' },
      { title: '1 ile Çarpım', body: 'Sayı kendisi kalır! 1×7=7' },
      { title: '2 ile Çarpım', body: 'Sayıyı ikiye katla! 2×6=12' },
      { title: '5 ile Çarpım', body: 'Sonuç 0 veya 5 ile biter!' },
      { title: '9 ile Çarpım', body: 'Rakamların toplamı 9! Parmak hilesi!' },
      { title: '10 ile Çarpım', body: 'Sonuna 0 ekle! 10×8=80' },
    ],

    ctaHeading: 'Şimdi Başlama Zamanı! 🚀',
    ctaBody: 'Artık hazırsın! Unutma, her büyük matematik kahramanı küçük adımlarla başladı. Sen de yapabilirsin! 💪✨',
    ctaButton1Label: 'Hemen Başla',
    ctaButton2Label: 'Ana Sayfaya Dön',
    ctaTipLabel: 'İpucu:',
    ctaTipBody: 'Günde 10-15 dakika çalışmak, 1 saat boyunca sıkılarak çalışmaktan çok daha etkilidir!',
  },

  es: {
    heroTitle: '¡Aprender las Tablas de Multiplicar es Muy Fácil! 🎯',
    heroSubtitle:
      '¡Avanza a tu propio ritmo, aprende mientras te diviertes y conviértete en un héroe de las matemáticas! Esta guía te ayudará a aprender las tablas de multiplicar paso a paso.',
    heroCaption: '¡Tú también puedes hacerlo!',

    whyLearnHeading: '¿Por Qué Debo Aprender las Tablas de Multiplicar? 🤔',
    whyLearnIntro: '¡Las tablas de multiplicar son el súper poder del mundo matemático! Esto es lo que te darán:',
    whyLearnCards: [
      { emoji: '⚡', title: 'Cálculo Rápido', body: '¡Podrás resolver problemas matemáticos mucho más rápido!' },
      { emoji: '🎮', title: 'Uso en la Vida Diaria', body: '¡Te será útil al hacer compras, en juegos, en todas partes!' },
      { emoji: '🏆', title: 'Aumento de Confianza', body: '¡Tu confianza en matemáticas aumentará y tendrás más éxito!' },
      { emoji: '🧠', title: 'Poder Cerebral', body: '¡Tu memoria se fortalecerá y aprenderás a pensar más rápido!' },
    ],

    learningPathHeading: 'Camino de Aprendizaje Paso a Paso 🚀',
    learningPathSteps: [
      {
        title: 'Comienza con las Tablas Fáciles (1, 2, 5, 10)',
        body: '¡Comenzar con las tablas más fáciles te dará confianza! Son muy simples y las aprenderás rápido.',
        boxLabel: '¿Por qué estas tablas son fáciles?',
        bullets: [
          'Tabla del 1: ¡Cada número se queda igual! (1×5=5)',
          'Tabla del 2: ¡Suma el número dos veces! (2×4 = 4+4 = 8)',
          'Tabla del 5: ¡Siempre termina en 5 o 0!',
          'Tabla del 10: ¡Agrega un cero al final! (10×3 = 30)',
        ],
        linkLabel: 'Ir a las Tablas 1-10 →',
      },
      {
        title: 'Avanza a Tablas de Nivel Medio (3, 4, 6)',
        body: '¡Ahora estás listo para tablas un poco más desafiantes! No te preocupes, también hay trucos para estas.',
        boxLabel: 'Trucos:',
        bullets: [
          'Tabla del 3: Suma el número 3 veces (3×4 = 4+4+4 = 12)',
          'Tabla del 4: Multiplica por 2, luego duplica (4×5 = 2×5×2 = 20)',
          'Tabla del 6: Usa la tabla del 5 y agrega 1 más (6×4 = 5×4 + 4 = 24)',
        ],
      },
      {
        title: 'Desafíate con las Tablas Difíciles (7, 8, 9)',
        body: 'Estas tablas son un poco más difíciles, ¡pero has aprendido mucho hasta ahora! Con técnicas especiales también dominarás estas.',
        boxLabel: 'Técnicas Especiales:',
        bullets: [
          'Tabla del 9 - Truco de los Dedos: Abre tus manos, baja el dedo del número que vas a multiplicar. Dedos abiertos a la izquierda = decenas, dedos a la derecha = unidades!',
          'Tabla del 8: Multiplica por 10, luego resta 2 veces (8×7 = 10×7 - 2×7 = 70-14 = 56)',
          'Tabla del 7: Para las difíciles usa la tabla del 5 (7×6 = 5×6 + 2×6 = 30+12 = 42)',
        ],
      },
      {
        title: 'Practica Constantemente 💪',
        body: 'Para no olvidar todo lo que has aprendido, practica un poco cada día. ¡Lo mejor es practicar poco pero regularmente!',
        boxLabel: 'Consejos de Práctica Diaria:',
        bullets: [
          'Estudia 10-15 minutos cada día (¡no mucho, pero regular!)',
          'Practica jugando - ¡es divertido!',
          'Organiza competencias con tu familia',
          'Cuando veas multiplicaciones en la vida diaria, calcúlalas (ej: "3 cajas, 5 chocolates en cada una, ¿cuántos en total?")',
        ],
      },
    ],

    visualLearningHeading: 'Aprendizaje Visual - Entiende con Imágenes 🎨',
    visualLearningIntro: '¡Visualizar la multiplicación en tu mente facilita el aprendizaje! Aquí hay algunas técnicas visuales:',
    arraysTitle: 'Arreglos (Arrays)',
    arraysExample: 'Ejemplo de 4 × 3 = 12:',
    arraysCaption: '4 columnas × 3 filas = 12',
    numberLineTitle: 'Saltos en la Recta Numérica',
    numberLineExample: '3 × 4: saltos de 4 (0→4→8→12)',
    numberLineCaption: '3 pasos, cada paso 4 unidades',
    skipCountingTitle: 'Conteo Saltado',
    skipCountingExample: 'Cuenta de 5 en 5: 5, 10, 15, 20, 25...',
    skipCountingTip: '¡Si memorizas estos números, la tabla del 5 es muy fácil!',
    patternsTitle: 'Nota los Patrones',
    patternsIntro: 'El secreto de la tabla del 9:',
    patternsNote: '¡Los dígitos siempre suman 9!',

    practiceTipsHeading: 'Consejos para Practicar 🎯',
    practiceTipsCards: [
      { emoji: '🎮', title: 'Juega', body: 'Practica con los juegos divertidos de este sitio. ¡Aprender mientras juegas es mucho más divertido!', linkLabel: 'Descubre los Juegos →' },
      { emoji: '📝', title: 'Hazte Pruebas', body: 'Usa tarjetas o pide a alguien que te haga preguntas. ¡Hacerte pruebas acelera tu aprendizaje!' },
      { emoji: '🎵', title: 'Canciones y Ritmos', body: '¡Convierte las tablas de multiplicar en canciones! Es más fácil memorizar con música.' },
      { emoji: '🏆', title: 'Prémiate', body: '¡Cuando aprendas una tabla, prémiate! Colecciona calcomanías o haz algo pequeño.' },
    ],

    progressHeading: 'Rastrea tu Progreso 📊',
    progressIntro: '¡Ver cuánto has progresado te motiva! Aquí hay métodos de seguimiento:',
    progressCards: [
      {
        title: '✅ Lista de Verificación de Tablas',
        body: 'Escribe en un papel las tablas del 1 al 10. ¡Cada vez que aprendas una, ponle una gran palomita! ¡Cuando todas las palomitas estén completas, serás un héroe de las tablas de multiplicar! 🌟',
      },
      { title: '📈 Gráfica de Progreso', body: 'Registra cuántas preguntas respondiste correctamente cada semana. Dibuja una gráfica y ve tu progreso. ¡Cada semana vas mejorando!' },
      { title: '⭐ Sistema de Estrellas', body: 'Por cada respuesta correcta, dibuja una estrella. ¡Cuando llegues a 100 estrellas, date un premio especial!' },
    ],

    motivationHeading: 'Secretos de Motivación y Éxito 💫',
    motivationColumn1: [
      { emoji: '🌟', title: 'Sé Paciente', body: 'Todo toma tiempo. ¡Tú puedes hacerlo, solo practica!' },
      { emoji: '💪', title: 'Los Errores son Normales', body: 'No te sientas mal cuando te equivoques, ¡es parte del aprendizaje!' },
      { emoji: '🎯', title: 'Establece Metas Pequeñas', body: 'Una tabla al día es suficiente, ¡no te apresures!' },
    ],
    motivationColumn2: [
      { emoji: '🤝', title: 'Pide Ayuda', body: 'Si hay algo que no entiendes, ¡pregunta a tu familia o maestro!' },
      { emoji: '🎉', title: 'Celebra tus Logros', body: 'Cada pequeño logro es importante, ¡valórate a ti mismo!' },
      { emoji: '😊', title: '¡Diviértete!', body: 'Aprender debe ser divertido, ¡prueba los juegos!' },
    ],

    quickTricksHeading: 'Guía Rápida de Trucos 🔑',
    quickTricksCards: [
      { title: 'Multiplicar por 0', body: '¡Todo es cero! 0×1000=0' },
      { title: 'Multiplicar por 1', body: '¡El número se queda igual! 1×7=7' },
      { title: 'Multiplicar por 2', body: '¡Duplica el número! 2×6=12' },
      { title: 'Multiplicar por 5', body: '¡El resultado termina en 0 o 5!' },
      { title: 'Multiplicar por 9', body: '¡Los dígitos suman 9! ¡Truco de dedos!' },
      { title: 'Multiplicar por 10', body: '¡Agrega un 0! 10×8=80' },
    ],

    ctaHeading: '¡Es Hora de Empezar! 🚀',
    ctaBody: '¡Ahora estás listo! Recuerda, cada gran héroe de las matemáticas comenzó con pequeños pasos. ¡Tú también puedes hacerlo! 💪✨',
    ctaButton1Label: 'Empezar Ahora',
    ctaButton2Label: 'Volver a Inicio',
    ctaTipLabel: 'Consejo:',
    ctaTipBody: '¡Estudiar 10-15 minutos al día es mucho más efectivo que estudiar 1 hora aburrido!',
  },

  de: {
    heroTitle: 'Das Einmaleins zu lernen ist ganz einfach! 🎯',
    heroSubtitle:
      'Lerne in deinem eigenen Tempo, hab Spaß dabei und werde ein Mathe-Held! Dieser Leitfaden hilft dir, das Einmaleins Schritt für Schritt zu lernen.',
    heroCaption: 'Du schaffst das auch!',

    whyLearnHeading: 'Warum sollte ich das Einmaleins lernen? 🤔',
    whyLearnIntro: 'Das Einmaleins ist die Superkraft der Mathe-Welt! Das gibt es dir:',
    whyLearnCards: [
      { emoji: '⚡', title: 'Schnelles Rechnen', body: 'Du kannst Matheaufgaben viel schneller lösen!' },
      { emoji: '🎮', title: 'Nutzen im Alltag', body: 'Beim Einkaufen, bei Spielen - überall wirst du es brauchen!' },
      { emoji: '🏆', title: 'Mehr Selbstvertrauen', body: 'Dein Selbstvertrauen in Mathe steigt und du wirst erfolgreicher!' },
      { emoji: '🧠', title: 'Gehirnpower', body: 'Dein Gedächtnis wird stärker und du lernst schneller zu denken!' },
    ],

    learningPathHeading: 'Schritt-für-Schritt Lernpfad 🚀',
    learningPathSteps: [
      {
        title: 'Beginne mit den einfachen Reihen (1, 2, 5, 10)',
        body: 'Mit den einfachsten Reihen zu beginnen gibt dir Selbstvertrauen! Sie sind sehr einfach und du lernst sie schnell.',
        boxLabel: 'Warum sind diese Reihen einfach?',
        bullets: [
          '1er-Reihe: Jede Zahl bleibt gleich! (1×5=5)',
          '2er-Reihe: Addiere die Zahl zweimal! (2×4 = 4+4 = 8)',
          '5er-Reihe: Endet immer auf 5 oder 0!',
          '10er-Reihe: Hänge eine 0 hinten an! (10×3 = 30)',
        ],
        linkLabel: 'Zu den Reihen 1-10 →',
      },
      {
        title: 'Gehe zu mittelschweren Reihen über (3, 4, 6)',
        body: 'Jetzt bist du bereit für etwas schwierigere Reihen! Keine Sorge, auch dafür gibt es Tricks.',
        boxLabel: 'Tricks:',
        bullets: [
          '3er-Reihe: Addiere die Zahl 3 mal (3×4 = 4+4+4 = 12)',
          '4er-Reihe: Mal 2, dann verdopple (4×5 = 2×5×2 = 20)',
          '6er-Reihe: Nutze die 5er-Reihe und addiere 1 mehr (6×4 = 5×4 + 4 = 24)',
        ],
      },
      {
        title: 'Fordere dich mit den schwierigen Reihen heraus (7, 8, 9)',
        body: 'Diese Reihen sind etwas schwieriger, aber du hast schon viel gelernt! Mit speziellen Techniken meisterst du auch diese.',
        boxLabel: 'Spezielle Techniken:',
        bullets: [
          '9er-Reihe - Finger-Trick: Öffne deine Hände, senke den Finger der Zahl, mit der du multiplizierst. Offene Finger links = Zehner, Finger rechts = Einer!',
          '8er-Reihe: Mal 10, dann ziehe 2 mal ab (8×7 = 10×7 - 2×7 = 70-14 = 56)',
          '7er-Reihe: Für die schwierigen nutze die 5er-Reihe (7×6 = 5×6 + 2×6 = 30+12 = 42)',
        ],
      },
      {
        title: 'Übe regelmäßig 💪',
        body: 'Damit du nicht vergisst, was du gelernt hast, übe jeden Tag ein bisschen. Das Beste ist: wenig, aber regelmäßig!',
        boxLabel: 'Tipps für tägliche Übung:',
        bullets: [
          'Lerne jeden Tag 10-15 Minuten (nicht viel, aber regelmäßig!)',
          'Übe spielerisch - das macht Spaß!',
          'Veranstalte Wettbewerbe mit deiner Familie',
          'Wenn du im Alltag Multiplikationen siehst, rechne sie aus (z.B.: "3 Packungen, 5 Kekse in jeder, wie viele insgesamt?")',
        ],
      },
    ],

    visualLearningHeading: 'Visuelles Lernen - Mit Bildern verstehen 🎨',
    visualLearningIntro: 'Multiplikation in deinem Kopf zu visualisieren macht das Lernen einfacher! Hier sind einige visuelle Techniken:',
    arraysTitle: 'Anordnungen (Arrays)',
    arraysExample: 'Beispiel für 4 × 3 = 12:',
    arraysCaption: '4 Spalten × 3 Reihen = 12',
    numberLineTitle: 'Sprünge auf dem Zahlenstrahl',
    numberLineExample: '3 × 4: Sprünge von 4 (0→4→8→12)',
    numberLineCaption: '3 Schritte, jeder Schritt 4 Einheiten',
    skipCountingTitle: 'Zählen in Schritten',
    skipCountingExample: 'Zähle in 5er-Schritten: 5, 10, 15, 20, 25...',
    skipCountingTip: 'Wenn du diese Zahlen auswendig kannst, ist die 5er-Reihe super einfach!',
    patternsTitle: 'Erkenne die Muster',
    patternsIntro: 'Das Geheimnis der 9er-Reihe:',
    patternsNote: 'Die Ziffern ergeben immer 9!',

    practiceTipsHeading: 'Tipps zum Üben 🎯',
    practiceTipsCards: [
      { emoji: '🎮', title: 'Spiele', body: 'Übe mit den lustigen Spielen auf dieser Seite. Lernen beim Spielen macht viel mehr Spaß!', linkLabel: 'Entdecke die Spiele →' },
      { emoji: '📝', title: 'Teste dich selbst', body: 'Nutze Karteikarten oder bitte jemanden, dir Fragen zu stellen. Sich selbst zu testen beschleunigt dein Lernen!' },
      { emoji: '🎵', title: 'Lieder und Rhythmen', body: 'Mache aus dem Einmaleins Lieder! Mit Musik ist es viel einfacher zu merken.' },
      { emoji: '🏆', title: 'Belohne dich', body: 'Wenn du eine Reihe gelernt hast, belohne dich! Sammle Aufkleber oder mache etwas Kleines.' },
    ],

    progressHeading: 'Verfolge deinen Fortschritt 📊',
    progressIntro: 'Zu sehen, wie viel Fortschritt du gemacht hast, motiviert dich! Hier sind Tracking-Methoden:',
    progressCards: [
      { title: '✅ Reihen-Checkliste', body: 'Schreibe die Reihen von 1 bis 10 auf ein Papier. Jedes Mal, wenn du eine gelernt hast, machst du ein großes Häkchen! Wenn alle Häkchen gesetzt sind, bist du ein Einmaleins-Held! 🌟' },
      { title: '📈 Fortschrittsdiagramm', body: 'Notiere jede Woche, wie viele Fragen du richtig beantwortet hast. Zeichne ein Diagramm und sieh deinen Fortschritt. Jede Woche wirst du besser!' },
      { title: '⭐ Sterne-System', body: 'Für jede richtige Antwort malst du einen Stern. Wenn du 100 Sterne erreicht hast, gönn dir eine besondere Belohnung!' },
    ],

    motivationHeading: 'Motivations- und Erfolgsgeheimnisse 💫',
    motivationColumn1: [
      { emoji: '🌟', title: 'Sei geduldig', body: 'Alles braucht Zeit. Du schaffst das, übe einfach weiter!' },
      { emoji: '💪', title: 'Fehler sind normal', body: 'Sei nicht traurig, wenn du Fehler machst, das gehört zum Lernen dazu!' },
      { emoji: '🎯', title: 'Setze kleine Ziele', body: 'Eine Reihe pro Tag reicht völlig aus, nicht hetzen!' },
    ],
    motivationColumn2: [
      { emoji: '🤝', title: 'Frage um Hilfe', body: 'Wenn du etwas nicht verstehst, frag deine Familie oder Lehrer!' },
      { emoji: '🎉', title: 'Feiere deine Erfolge', body: 'Jeder kleine Erfolg ist wichtig, sei stolz auf dich!' },
      { emoji: '😊', title: 'Hab Spaß!', body: 'Lernen soll Spaß machen, probiere die Spiele aus!' },
    ],

    quickTricksHeading: 'Schnelle Tipp-Übersicht 🔑',
    quickTricksCards: [
      { title: 'Mit 0 multiplizieren', body: 'Alles ist null! 0×1000=0' },
      { title: 'Mit 1 multiplizieren', body: 'Die Zahl bleibt gleich! 1×7=7' },
      { title: 'Mit 2 multiplizieren', body: 'Verdopple die Zahl! 2×6=12' },
      { title: 'Mit 5 multiplizieren', body: 'Das Ergebnis endet auf 0 oder 5!' },
      { title: 'Mit 9 multiplizieren', body: 'Die Ziffern ergeben 9! Finger-Trick!' },
      { title: 'Mit 10 multiplizieren', body: 'Hänge eine 0 an! 10×8=80' },
    ],

    ctaHeading: 'Zeit zum Loslegen! 🚀',
    ctaBody: 'Jetzt bist du bereit! Denk daran, jeder große Mathe-Held hat mit kleinen Schritten angefangen. Du schaffst das auch! 💪✨',
    ctaButton1Label: 'Jetzt beginnen',
    ctaButton2Label: 'Zurück zur Startseite',
    ctaTipLabel: 'Tipp:',
    ctaTipBody: '10-15 Minuten am Tag zu lernen ist viel effektiver als 1 langweilige Stunde!',
  },

  cs: {
    heroTitle: 'Učit se Násobilku je Snadné! 🎯',
    heroSubtitle:
      'Uč se vlastním tempem, bav se a staň se matikářským hrdinou! Tento průvodce ti pomůže naučit se násobilku krok za krokem.',
    heroCaption: 'I ty to zvládneš!',

    whyLearnHeading: 'Proč bych se měl naučit násobilku? 🤔',
    whyLearnIntro: 'Násobilka je superschopnost matematického světa! To ti dá:',
    whyLearnCards: [
      { emoji: '⚡', title: 'Rychlý Počítání', body: 'Můžeš řešit matematické úlohy mnohem rychleji!' },
      { emoji: '🎮', title: 'Využití v Každodenním Životě', body: 'Při nakupování, ve hrách - všude to budeš potřebovat!' },
      { emoji: '🏆', title: 'Více Sebevědomí', body: 'Tvoje sebevědomí v matematice vzroste a budeš úspěšnější!' },
      { emoji: '🧠', title: 'Síla Mozku', body: 'Tvoje paměť bude silnější a naučíš se rychleji myslet!' },
    ],

    learningPathHeading: 'Krok za Krokem Cesta Učení 🚀',
    learningPathSteps: [
      {
        title: 'Začni s Jednoduchými Řadami (1, 2, 5, 10)',
        body: 'Začít s nejjednodušší řadami ti dá sebevědomí! Jsou velmi snadné a naučíš se je rychle.',
        boxLabel: 'Proč jsou tyto řady snadné?',
        bullets: [
          'Řada 1: Každé číslo zůstává stejné! (1×5=5)',
          'Řada 2: Přidej číslo dvakrát! (2×4 = 4+4 = 8)',
          'Řada 5: Vždy končí na 5 nebo 0!',
          'Řada 10: Přidej 0 na konec! (10×3 = 30)',
        ],
        linkLabel: 'K řadám 1-10 →',
      },
      {
        title: 'Přejdi na Středně Těžké Řady (3, 4, 6)',
        body: 'Teď jsi připraven na trochu těžší řady! Neboj se, i na to jsou triky.',
        boxLabel: 'Tipy:',
        bullets: [
          'Řada 3: Přidej číslo 3× (3×4 = 4+4+4 = 12)',
          'Řada 4: Krát 2, pak zdvoj (4×5 = 2×5×2 = 20)',
          'Řada 6: Použij řadu 5 a přidej ještě 1 (6×4 = 5×4 + 4 = 24)',
        ],
      },
      {
        title: 'Vyzvi se s Těžkými Řadami (7, 8, 9)',
        body: 'Tyto řady jsou trochu těžší, ale už jsi se naučil hodně! Pomocí speciálních technik zvládneš i tyto.',
        boxLabel: 'Speciální Techniky:',
        bullets: [
          'Řada 9 - Trik s Prsty: Otevři ruce, skloň prst čísla, které násobíš. Otevřené prsty vlevo = desítky, prsty vpravo = jednotky!',
          'Řada 8: Krát 10, pak odečti 2× (8×7 = 10×7 - 2×7 = 70-14 = 56)',
          'Řada 7: Pro těžké použij řadu 5 (7×6 = 5×6 + 2×6 = 30+12 = 42)',
        ],
      },
      {
        title: 'Cvič Pravidelně 💪',
        body: 'Abys nezapomněl, co ses naučil, cvič každý den trochu. Nejlepší je: málo, ale pravidelně!',
        boxLabel: 'Tipy pro Denní Cvičení:',
        bullets: [
          'Uč se každý den 10-15 minut (ne moc, ale pravidelně!)',
          'Cvič hravě - to je zábava!',
          'Uspořádej soutěže s rodinou',
          'Když v každodenním životě vidíš násobení, vypočítej je (např.: "3 balíčky, 5 sušenek v každém, kolik celkem?")',
        ],
      },
    ],

    visualLearningHeading: 'Vizuální Učení - Porozumět Pomocí Obrázků 🎨',
    visualLearningIntro: 'Vizualizovat násobení ve své hlavě usnadňuje učení! Zde jsou některé vizuální techniky:',
    arraysTitle: 'Pole (Arrays)',
    arraysExample: 'Příklad pro 4 × 3 = 12:',
    arraysCaption: '4 sloupce × 3 řady = 12',
    numberLineTitle: 'Skoky na Číselné Ose',
    numberLineExample: '3 × 4: Skoky po 4 (0→4→8→12)',
    numberLineCaption: '3 kroky, každý krok 4 jednotky',
    skipCountingTitle: 'Počítání v Krocích',
    skipCountingExample: 'Počítej po 5: 5, 10, 15, 20, 25...',
    skipCountingTip: 'Když znáš tato čísla zpaměti, řada 5 je super snadná!',
    patternsTitle: 'Rozpoznej Vzory',
    patternsIntro: 'Tajemství řady 9:',
    patternsNote: 'Číslice vždy dávají 9!',

    practiceTipsHeading: 'Tipy pro Cvičení 🎯',
    practiceTipsCards: [
      { emoji: '🎮', title: 'Hry', body: 'Cvič se zábavnými hrami na této stránce. Učení při hraní je mnohem zábavnější!', linkLabel: 'Objevuj hry →' },
      { emoji: '📝', title: 'Testuj se', body: 'Použij kartičky nebo požádej někoho, aby ti kladl otázky. Testování sebe sama urychlí tvé učení!' },
      { emoji: '🎵', title: 'Písně a Rytmy', body: 'Udělej si z násobilky písně! S hudbou je mnohem snazší si je zapamatovat.' },
      { emoji: '🏆', title: 'Odměň se', body: 'Když se naučíš řadu, odměň se! Sbírej samolepky nebo udělej něco malého.' },
    ],

    progressHeading: 'Sleduj Svůj Pokrok 📊',
    progressIntro: 'Vidět, jak moc pokroku jsi udělal, tě motivuje! Zde jsou metody sledování:',
    progressCards: [
      { title: '✅ Kontrolní Seznam Řad', body: 'Napiš řady od 1 do 10 na papír. Pokaždé, když se naučíš jednu, dej velké zaškrtnutí! Když jsou všechny zaškrtnuté, jsi násobilkový hrdina! 🌟' },
      { title: '📈 Graf Pokroku', body: 'Zaznamenej každý týden, kolik otázek jsi zodpověděl správně. Nakresli graf a uvidíš svůj pokrok. Každý týden budeš lepší!' },
      { title: '⭐ Hvězdný Systém', body: 'Za každou správnou odpověď si nakresli hvězdu. Když dosáhneš 100 hvězd, dopřej si speciální odměnu!' },
    ],

    motivationHeading: 'Motivační a Úspěšná Tajemství 💫',
    motivationColumn1: [
      { emoji: '🌟', title: 'Buď Trpělivý', body: 'Všechno potřebuje čas. Zvládneš to, jen cvič dál!' },
      { emoji: '💪', title: 'Chyby Jsou Normální', body: 'Nebuď smutný, když uděláš chyby, to patří k učení!' },
      { emoji: '🎯', title: 'Stanovi Malé Cíle', body: 'Jedna řada denně stačí, nehoň se!' },
    ],
    motivationColumn2: [
      { emoji: '🤝', title: 'Požádej o Pomoc', body: 'Když něčemu nerozumíš, zeptej se rodiny nebo učitele!' },
      { emoji: '🎉', title: 'Oslavuj Své Úspěchy', body: 'Každý malý úspěch je důležitý, buď na sebe hrdý!' },
      { emoji: '😊', title: 'Bav Se!', body: 'Učení by mělo být zábavné, vyzkoušej hry!' },
    ],

    quickTricksHeading: 'Rychlý Přehled Tipů 🔑',
    quickTricksCards: [
      { title: 'Násobení 0', body: 'Všechno je nula! 0×1000=0' },
      { title: 'Násobení 1', body: 'Číslo zůstává stejné! 1×7=7' },
      { title: 'Násobení 2', body: 'Zdvoj číslo! 2×6=12' },
      { title: 'Násobení 5', body: 'Výsledek končí na 0 nebo 5!' },
      { title: 'Násobení 9', body: 'Číslice dávají 9! Trik s prsty!' },
      { title: 'Násobení 10', body: 'Přidej 0 na konec! 10×8=80' },
    ],

    ctaHeading: 'Čas Začít! 🚀',
    ctaBody: 'Teď jsi připraven! Pamatuj, každý velký matematický hrdina začínal malými kroky. I ty to zvládneš! 💪✨',
    ctaButton1Label: 'Začít Teď',
    ctaButton2Label: 'Zpět na Hlavní Stránku',
    ctaTipLabel: 'Tip:',
    ctaTipBody: 'Učit se 10-15 minut denně je mnohem efektivnější než 1 nudná hodina!',
  },

  uk: {
    heroTitle: 'Вивчати Таблицю Множення Легко! 🎯',
    heroSubtitle:
      'Вчіться у власному темпі, розважайтеся та станьте математичним героєм! Цей посібник допоможе вам вивчити таблицю множення крок за кроком.',
    heroCaption: 'Ти теж це зможеш!',

    whyLearnHeading: 'Навіщо мені вивчати таблицю множення? 🤔',
    whyLearnIntro: 'Таблиця множення - це суперздатність математичного світу! Вона дасть тобі:',
    whyLearnCards: [
      { emoji: '⚡', title: 'Швидкий Рахунок', body: "Ти зможеш розв'язувати математичні завдання набагато швидше!" },
      { emoji: '🎮', title: 'Використання в Повсякденному Житті', body: 'При покупках, в іграх - скрізь це буде потрібно!' },
      { emoji: '🏆', title: 'Більше Впевненості', body: 'Твоя впевненість у математиці зросте і ти будеш успішнішим!' },
      { emoji: '🧠', title: 'Сила Мозку', body: "Твоя пам'ять стане сильнішою і ти навчишся швидше думати!" },
    ],

    learningPathHeading: 'Крок за Кроком Шлях Навчання 🚀',
    learningPathSteps: [
      {
        title: 'Почни з Простих Рядів (1, 2, 5, 10)',
        body: 'Починати з найпростіших рядів дасть тобі впевненості! Вони дуже легкі і ти вивчиш їх швидко.',
        boxLabel: 'Чому ці ряди легкі?',
        bullets: [
          'Ряд 1: Кожне число залишається таким самим! (1×5=5)',
          'Ряд 2: Додай число двічі! (2×4 = 4+4 = 8)',
          'Ряд 5: Завжди закінчується на 5 або 0!',
          'Ряд 10: Додай 0 в кінці! (10×3 = 30)',
        ],
        linkLabel: 'До рядів 1-10 →',
      },
      {
        title: 'Перейди до Середньо Складних Рядів (3, 4, 6)',
        body: 'Тепер ти готовий до трохи складніших рядів! Не бійся, на це теж є хитрощі.',
        boxLabel: 'Поради:',
        bullets: [
          'Ряд 3: Додай число 3 рази (3×4 = 4+4+4 = 12)',
          'Ряд 4: Помнож на 2, потім подвої (4×5 = 2×5×2 = 20)',
          'Ряд 6: Використай ряд 5 і додай ще 1 раз (6×4 = 5×4 + 4 = 24)',
        ],
      },
      {
        title: 'Виклик із Складними Рядами (7, 8, 9)',
        body: "Ці ряди трохи складніші, але ти вже багато навчився! За допомогою спеціальних технік ти впораєшся і з цими.",
        boxLabel: 'Спеціальні Техніки:',
        bullets: [
          'Ряд 9 - Трюк з Пальцями: Розкрий руки, зігни палець числа, яке множиш. Розігнуті пальці зліва = десятки, пальці справа = одиниці!',
          'Ряд 8: Помнож на 10, потім відніми 2× (8×7 = 10×7 - 2×7 = 70-14 = 56)',
          'Ряд 7: Для складних використай ряд 5 (7×6 = 5×6 + 2×6 = 30+12 = 42)',
        ],
      },
      {
        title: 'Вправляйся Регулярно 💪',
        body: 'Щоб не забути те, що вивчив, вправляйся кожен день трохи. Найкраще: мало, але регулярно!',
        boxLabel: 'Поради для Щоденних Вправ:',
        bullets: [
          'Вчися кожен день 10-15 хвилин (не багато, але регулярно!)',
          'Вправляйся граючи - це цікаво!',
          'Влаштовуй змагання з родиною',
          'Коли в повсякденному житті бачиш множення, обчислюй його (наприклад: "3 пакунки, 5 печив у кожному, скільки всього?")',
        ],
      },
    ],

    visualLearningHeading: 'Візуальне Навчання - Розумій за Допомогою Зображень 🎨',
    visualLearningIntro: 'Візуалізувати множення у своїй голові полегшує навчання! Ось деякі візуальні техніки:',
    arraysTitle: 'Масиви',
    arraysExample: 'Приклад для 4 × 3 = 12:',
    arraysCaption: '4 стовпці × 3 ряди = 12',
    numberLineTitle: 'Стрибки на Числовій Прямій',
    numberLineExample: '3 × 4: Стрибки по 4 (0→4→8→12)',
    numberLineCaption: '3 кроки, кожен крок 4 одиниці',
    skipCountingTitle: 'Рахунок Кроками',
    skipCountingExample: 'Рахуй по 5: 5, 10, 15, 20, 25...',
    skipCountingTip: "Коли знаєш ці числа напам'ять, ряд 5 супер легкий!",
    patternsTitle: 'Розпізнай Візерунки',
    patternsIntro: 'Секрет ряду 9:',
    patternsNote: 'Цифри завжди дають 9!',

    practiceTipsHeading: 'Поради для Вправ 🎯',
    practiceTipsCards: [
      { emoji: '🎮', title: 'Ігри', body: 'Вправляйся з цікавими іграми на цьому сайті. Навчання під час гри набагато цікавіше!', linkLabel: 'Досліджуй ігри →' },
      { emoji: '📝', title: 'Тестуй Себе', body: 'Використовуй картки або попроси когось ставити тобі питання. Тестування себе прискорює навчання!' },
      { emoji: '🎵', title: 'Пісні та Ритми', body: "Створи з таблиці множення пісні! З музикою набагато легше їх запам'ятати." },
      { emoji: '🏆', title: 'Винагороджуй Себе', body: 'Коли вивчиш ряд, винагороди себе! Збирай наліпки або зроби щось приємне.' },
    ],

    progressHeading: 'Відстежуй Свій Прогрес 📊',
    progressIntro: 'Бачити, скільки прогресу ти зробив, мотивує! Ось методи відстеження:',
    progressCards: [
      { title: '✅ Контрольний Список Рядів', body: 'Напиши ряди від 1 до 10 на папері. Кожного разу, коли вивчиш один, постав велику галочку! Коли всі позначені, ти герой таблиці множення! 🌟' },
      { title: '📈 Графік Прогресу', body: 'Записуй щотижня, скільки питань ти відповів правильно. Намалюй графік і побачиш свій прогрес. Кожного тижня ти будеш кращим!' },
      { title: '⭐ Зоряна Система', body: 'За кожну правильну відповідь намалюй собі зірку. Коли досягнеш 100 зірок, дозволь собі спеціальну винагороду!' },
    ],

    motivationHeading: 'Мотиваційні та Успішні Секрети 💫',
    motivationColumn1: [
      { emoji: '🌟', title: 'Будь Терплячим', body: 'Все потребує часу. Ти впораєшся, просто продовжуй вправлятися!' },
      { emoji: '💪', title: 'Помилки Нормальні', body: 'Не засмучуйся, коли робиш помилки, це частина навчання!' },
      { emoji: '🎯', title: 'Встанови Маленькі Цілі', body: 'Один ряд на день достатньо, не поспішай!' },
    ],
    motivationColumn2: [
      { emoji: '🤝', title: 'Попроси Допомоги', body: 'Коли чогось не розумієш, запитай у родини чи вчителя!' },
      { emoji: '🎉', title: 'Святкуй Свої Успіхи', body: 'Кожен маленький успіх важливий, пишайся собою!' },
      { emoji: '😊', title: 'Розважайся!', body: 'Навчання має бути цікавим, спробуй ігри!' },
    ],

    quickTricksHeading: 'Швидкий Огляд Порад 🔑',
    quickTricksCards: [
      { title: 'Множення на 0', body: 'Все дорівнює нулю! 0×1000=0' },
      { title: 'Множення на 1', body: 'Число залишається таким самим! 1×7=7' },
      { title: 'Множення на 2', body: 'Подвій число! 2×6=12' },
      { title: 'Множення на 5', body: 'Результат закінчується на 0 або 5!' },
      { title: 'Множення на 9', body: 'Цифри дають 9! Трюк з пальцями!' },
      { title: 'Множення на 10', body: 'Додай 0 в кінці! 10×8=80' },
    ],

    ctaHeading: 'Час Почати! 🚀',
    ctaBody: "Тепер ти готовий! Пам'ятай, кожен великий математичний герой починав з малих кроків. І ти це зможеш! 💪✨",
    ctaButton1Label: 'Почати Зараз',
    ctaButton2Label: 'Назад на Головну Сторінку',
    ctaTipLabel: 'Порада:',
    ctaTipBody: 'Вчитися 10-15 хвилин щодня набагато ефективніше, ніж 1 нудна година!',
  },

  fi: {
    heroTitle: 'Oppia Kertotauluja On Helppoa! 🎯',
    heroSubtitle:
      'Opi omassa tahdissasi, pidä hauskaa ja tule matematiikan sankariksi! Tämä opas auttaa sinua oppimaan kertotaulut vaihe vaiheelta.',
    heroCaption: 'Sinäkin pystyt tähän!',

    whyLearnHeading: 'Miksi minun pitäisi oppia kertotaulut? 🤔',
    whyLearnIntro: 'Kertotaulut ovat matematiikan maailman supervoimia! Ne antavat sinulle:',
    whyLearnCards: [
      { emoji: '⚡', title: 'Nopea Laskutaito', body: 'Pystyt ratkaisemaan matematiikan tehtävät paljon nopeammin!' },
      { emoji: '🎮', title: 'Käyttö Arjessa', body: 'Ostoksilla, peleissä - kaikkialla tarvitset sitä!' },
      { emoji: '🏆', title: 'Enemmän Itsevarmuutta', body: 'Itsevarmuutesi matematiikassa kasvaa ja olet menestyneempi!' },
      { emoji: '🧠', title: 'Aivojen Voima', body: 'Muistisi vahvistuu ja opit ajattelemaan nopeammin!' },
    ],

    learningPathHeading: 'Oppimispolku Vaihe Vaiheelta 🚀',
    learningPathSteps: [
      {
        title: 'Aloita Helpoista Riveistä (1, 2, 5, 10)',
        body: 'Helpoimmista riveistä aloittaminen antaa sinulle itsevarmuutta! Ne ovat hyvin helppoja ja opit ne nopeasti.',
        boxLabel: 'Miksi nämä rivit ovat helppoja?',
        bullets: [
          'Rivi 1: Jokainen luku pysyy samana! (1×5=5)',
          'Rivi 2: Kaksinkertaista luku! (2×4 = 4+4 = 8)',
          'Rivi 5: Päättyy aina viiteen tai nollaan!',
          'Rivi 10: Lisää nolla loppuun! (10×3 = 30)',
        ],
        linkLabel: 'Riveille 1-10 →',
      },
      {
        title: 'Siirry Keskivaikeisiin Riveihin (3, 4, 6)',
        body: 'Nyt olet valmis hieman vaikeampiin riveihin! Älä pelkää, näihinkin on niksejä.',
        boxLabel: 'Vinkkejä:',
        bullets: [
          'Rivi 3: Lisää luku 3 kertaa (3×4 = 4+4+4 = 12)',
          'Rivi 4: Kerro kahdella, sitten tuplaa (4×5 = 2×5×2 = 20)',
          'Rivi 6: Käytä riviä 5 ja lisää vielä kerran (6×4 = 5×4 + 4 = 24)',
        ],
      },
      {
        title: 'Haaste Vaikeimmilla Riveillä (7, 8, 9)',
        body: 'Nämä rivit ovat vähän vaikeampia, mutta olet jo oppinut paljon! Erikoistekniikoilla selviät myös näistä.',
        boxLabel: 'Erikoistekniikoita:',
        bullets: [
          'Rivi 9 - Sormitemppu: Levitä kädet, taita sen luvun sormi jolla kerrot. Vasemmalla olevat sormeet = kymmenet, oikealla olevat = ykköset!',
          'Rivi 8: Kerro 10:llä, sitten vähennä 2× (8×7 = 10×7 - 2×7 = 70-14 = 56)',
          'Rivi 7: Vaikeissa käytä riviä 5 (7×6 = 5×6 + 2×6 = 30+12 = 42)',
        ],
      },
      {
        title: 'Harjoittele Säännöllisesti 💪',
        body: 'Jotta et unohda oppimaasi, harjoittele joka päivä vähän. Parasta: vähän, mutta säännöllisesti!',
        boxLabel: 'Vinkkejä Päivittäiseen Harjoitteluun:',
        bullets: [
          'Opi joka päivä 10-15 minuuttia (ei paljon, mutta säännöllisesti!)',
          'Harjoittele leikkien - se on hauskaa!',
          'Järjestä kilpailuja perheen kanssa',
          'Kun arjessa näet kertolaskuja, laske ne (esim: "3 pakettia, 5 keksiä jokaisessa, montako yhteensä?")',
        ],
      },
    ],

    visualLearningHeading: 'Visuaalinen Oppiminen - Ymmärrä Kuvien Avulla 🎨',
    visualLearningIntro: 'Kertolaskujen visualisointi päässäsi helpottaa oppimista! Tässä visuaalisia tekniikoita:',
    arraysTitle: 'Taulukot',
    arraysExample: 'Esimerkki 4 × 3 = 12:',
    arraysCaption: '4 saraketta × 3 riviä = 12',
    numberLineTitle: 'Hyppelyt Lukusuoralla',
    numberLineExample: '3 × 4: Hypit neljän (0→4→8→12)',
    numberLineCaption: '3 askelta, jokainen askel 4 yksikköä',
    skipCountingTitle: 'Hyppylaskenta',
    skipCountingExample: 'Laske viidellä: 5, 10, 15, 20, 25...',
    skipCountingTip: 'Kun osaat nämä luvut ulkoa, rivi 5 on superhelppo!',
    patternsTitle: 'Tunnista Kuviot',
    patternsIntro: 'Rivin 9 salaisuus:',
    patternsNote: 'Numerot antavat aina 9!',

    practiceTipsHeading: 'Harjoitusvinkkejä 🎯',
    practiceTipsCards: [
      { emoji: '🎮', title: 'Pelit', body: 'Harjoittele hauskuilla peleillä tällä sivustolla. Oppiminen pelaten on paljon hauskempaa!', linkLabel: 'Tutustu peleihin →' },
      { emoji: '📝', title: 'Testaa Itseäsi', body: 'Käytä kortteja tai pyydä jotakuta kysymään sinulta kysymyksiä. Itsensä testaaminen nopeuttaa oppimista!' },
      { emoji: '🎵', title: 'Laulut ja Rytmit', body: 'Luo kertotauluista lauluja! Musiikin avulla ne on paljon helpompi muistaa.' },
      { emoji: '🏆', title: 'Palkitse Itsesi', body: 'Kun opit rivin, palkitse itsesi! Kerää tarroja tai tee jotain mukavaa.' },
    ],

    progressHeading: 'Seuraa Edistymistäsi 📊',
    progressIntro: 'Nähdä kuinka paljon edistystä olet tehnyt motivoi! Tässä seurantamenetelmiä:',
    progressCards: [
      { title: '✅ Rivien Tarkistuslista', body: 'Kirjoita rivit 1-10 paperille. Aina kun opit yhden, laita iso rasti! Kun kaikki on merkitty, olet kertotaulujen sankari! 🌟' },
      { title: '📈 Edistymiskaavio', body: 'Kirjaa joka viikko, kuinka moneen kysymykseen vastasit oikein. Piirrä kaavio ja näet edistymisesi. Joka viikko olet parempi!' },
      { title: '⭐ Tähtijärjestelmä', body: 'Jokaisesta oikeasta vastauksesta piirrä itsellesi tähti. Kun saavutat 100 tähteä, anna itsellesi erityinen palkinto!' },
    ],

    motivationHeading: 'Motivaatio ja Menestymisen Salaisuudet 💫',
    motivationColumn1: [
      { emoji: '🌟', title: 'Ole Kärsivällinen', body: 'Kaikki vaatii aikaa. Selviät tästä, jatka vain harjoittelua!' },
      { emoji: '💪', title: 'Virheet Ovat Normaaleja', body: 'Älä pahoita mieltäsi virheistä, ne ovat osa oppimista!' },
      { emoji: '🎯', title: 'Aseta Pieniä Tavoitteita', body: 'Yksi rivi päivässä riittää, älä kiirehtine!' },
    ],
    motivationColumn2: [
      { emoji: '🤝', title: 'Pyydä Apua', body: 'Kun et ymmärrä jotain, kysy perheeltäsi tai opettajalta!' },
      { emoji: '🎉', title: 'Juhli Onnistumisiasi', body: 'Jokainen pieni onnistuminen on tärkeä, ole ylpeä itsestäsi!' },
      { emoji: '😊', title: 'Pidä Hauskaa!', body: 'Oppimisen tulisi olla hauskaa, kokeile pelejä!' },
    ],

    quickTricksHeading: 'Pikaviittaus Vinkkeihin 🔑',
    quickTricksCards: [
      { title: 'Kertolasku Nollalla', body: 'Kaikki on nolla! 0×1000=0' },
      { title: 'Kertolasku Yhdellä', body: 'Luku pysyy samana! 1×7=7' },
      { title: 'Kertolasku Kahdella', body: 'Tuplaa luku! 2×6=12' },
      { title: 'Kertolasku Viidellä', body: 'Tulos päättyy 0:aan tai 5:een!' },
      { title: 'Kertolasku Yhdeksällä', body: 'Numerot antavat 9! Sormitemppu!' },
      { title: 'Kertolasku Kymmenellä', body: 'Lisää nolla loppuun! 10×8=80' },
    ],

    ctaHeading: 'Aika Aloittaa! 🚀',
    ctaBody: 'Nyt olet valmis! Muista, jokainen suuri matematiikan sankari aloitti pienistä askelista. Ja sinäkin pystyt tähän! 💪✨',
    ctaButton1Label: 'Aloita Nyt',
    ctaButton2Label: 'Takaisin Pääsivulle',
    ctaTipLabel: 'Vinkki:',
    ctaTipBody: 'Opiskella 10-15 minuuttia päivittäin on paljon tehokkaampaa kuin 1 pitkäveteinen tunti!',
  },

  fr: {
    heroTitle: "Apprendre les Tables de Multiplication, C'est Facile ! 🎯",
    heroSubtitle:
      "Progressez à votre propre rythme, apprenez en vous amusant et devenez un héros des mathématiques ! Ce guide vous aidera à apprendre les tables de multiplication étape par étape.",
    heroCaption: 'Vous pouvez le faire aussi !',

    whyLearnHeading: 'Pourquoi Apprendre les Tables de Multiplication ? 🤔',
    whyLearnIntro: "Les tables de multiplication sont le super pouvoir du monde mathématique ! Voici ce qu'elles vous apporteront :",
    whyLearnCards: [
      { emoji: '⚡', title: 'Calcul Rapide', body: 'Vous pourrez résoudre les problèmes mathématiques beaucoup plus rapidement !' },
      { emoji: '🎮', title: 'Utilisation Quotidienne', body: 'Ce sera utile pour faire les courses, jouer, partout !' },
      { emoji: '🏆', title: 'Confiance Accrue', body: 'Votre confiance en mathématiques augmentera et vous réussirez mieux !' },
      { emoji: '🧠', title: 'Puissance Cérébrale', body: 'Votre mémoire se renforcera et vous apprendrez à penser plus vite !' },
    ],

    learningPathHeading: "Parcours d'Apprentissage Étape par Étape 🚀",
    learningPathSteps: [
      {
        title: 'Commencez avec les Tables Faciles (1, 2, 5, 10)',
        body: 'Commencer par les tables les plus faciles vous donnera de la confiance ! Elles sont très simples et vous les apprendrez rapidement.',
        boxLabel: 'Pourquoi ces tables sont-elles faciles ?',
        bullets: [
          'Table de 1 : Chaque nombre reste identique ! (1×5=5)',
          'Table de 2 : Doublez le nombre ! (2×4 = 4+4 = 8)',
          'Table de 5 : Se termine toujours par 5 ou 0 !',
          'Table de 10 : Ajoutez un zéro à la fin ! (10×3 = 30)',
        ],
        linkLabel: 'Aller aux Tables 1-10 →',
      },
      {
        title: 'Passez aux Tables de Niveau Intermédiaire (3, 4, 6)',
        body: "Maintenant vous êtes prêt pour des tables un peu plus difficiles ! Ne vous inquiétez pas, il y a aussi des astuces pour celles-ci.",
        boxLabel: 'Astuces :',
        bullets: [
          'Table de 3 : Additionnez le nombre 3 fois (3×4 = 4+4+4 = 12)',
          'Table de 4 : Multipliez par 2, puis doublez (4×5 = 2×5×2 = 20)',
          'Table de 6 : Utilisez la table de 5 et ajoutez-en 1 de plus (6×4 = 5×4 + 4 = 24)',
        ],
      },
      {
        title: 'Défiez-vous avec les Tables Difficiles (7, 8, 9)',
        body: "Ces tables sont un peu plus difficiles, mais vous avez beaucoup appris jusqu'à présent ! Avec des techniques spéciales, vous les maîtriserez aussi.",
        boxLabel: 'Techniques Spéciales :',
        bullets: [
          'Table de 9 - Astuce des Doigts : Ouvrez vos mains, baissez le doigt du nombre à multiplier. Doigts ouverts à gauche = dizaines, doigts à droite = unités !',
          'Table de 8 : Multipliez par 10, puis soustrayez 2 fois (8×7 = 10×7 - 2×7 = 70-14 = 56)',
          'Table de 7 : Pour les difficiles, utilisez la table de 5 (7×6 = 5×6 + 2×6 = 30+12 = 42)',
        ],
      },
      {
        title: 'Pratiquez Constamment 💪',
        body: "Pour ne pas oublier tout ce que vous avez appris, pratiquez un peu chaque jour. Le mieux est de pratiquer peu mais régulièrement !",
        boxLabel: 'Conseils de Pratique Quotidienne :',
        bullets: [
          'Étudiez 10-15 minutes chaque jour (pas beaucoup, mais régulièrement !)',
          "Pratiquez en jouant - c'est amusant !",
          'Organisez des compétitions avec votre famille',
          'Quand vous voyez des multiplications dans la vie quotidienne, calculez-les (ex : "3 boîtes, 5 chocolats dans chacune, combien au total ?")',
        ],
      },
    ],

    visualLearningHeading: 'Apprentissage Visuel - Comprendre avec des Images 🎨',
    visualLearningIntro: "Visualiser la multiplication dans votre esprit facilite l'apprentissage ! Voici quelques techniques visuelles :",
    arraysTitle: 'Tableaux (Arrays)',
    arraysExample: 'Exemple de 4 × 3 = 12 :',
    arraysCaption: '4 colonnes × 3 rangées = 12',
    numberLineTitle: 'Sauts sur la Droite Numérique',
    numberLineExample: '3 × 4 : sauts de 4 (0→4→8→12)',
    numberLineCaption: '3 étapes, chaque étape 4 unités',
    skipCountingTitle: 'Comptage par Bonds',
    skipCountingExample: 'Comptez de 5 en 5 : 5, 10, 15, 20, 25...',
    skipCountingTip: 'Si vous mémorisez ces nombres, la table de 5 est très facile !',
    patternsTitle: 'Remarquez les Motifs',
    patternsIntro: 'Le secret de la table de 9 :',
    patternsNote: 'Les chiffres font toujours 9 !',

    practiceTipsHeading: 'Conseils de Pratique 🎯',
    practiceTipsCards: [
      { emoji: '🎮', title: 'Jouez', body: 'Pratiquez avec les jeux amusants de ce site. Apprendre en jouant est beaucoup plus amusant !', linkLabel: 'Découvrir les Jeux →' },
      { emoji: '📝', title: 'Testez-vous', body: 'Utilisez des cartes flash ou demandez à quelqu\'un de vous poser des questions. Se tester accélère votre apprentissage !' },
      { emoji: '🎵', title: 'Chansons et Rythmes', body: 'Transformez les tables de multiplication en chansons ! C\'est plus facile de mémoriser avec de la musique.' },
      { emoji: '🏆', title: 'Récompensez-vous', body: 'Quand vous apprenez une table, récompensez-vous ! Collectionnez des autocollants ou faites quelque chose de spécial.' },
    ],

    progressHeading: 'Suivez votre Progression 📊',
    progressIntro: 'Voir votre progression vous motive ! Voici des méthodes de suivi :',
    progressCards: [
      { title: '✅ Liste de Contrôle des Tables', body: 'Écrivez sur un papier les tables de 1 à 10. Chaque fois que vous en apprenez une, cochez-la ! Quand toutes les coches sont complètes, vous serez un héros des tables de multiplication ! 🌟' },
      { title: '📈 Graphique de Progression', body: 'Enregistrez combien de questions vous avez répondues correctement chaque semaine. Dessinez un graphique et voyez votre progression. Vous vous améliorez chaque semaine !' },
      { title: "⭐ Système d'Étoiles", body: 'Pour chaque bonne réponse, dessinez une étoile. Quand vous atteignez 100 étoiles, offrez-vous une récompense spéciale !' },
    ],

    motivationHeading: 'Secrets de Motivation et de Réussite 💫',
    motivationColumn1: [
      { emoji: '🌟', title: 'Soyez Patient', body: 'Tout prend du temps. Vous pouvez le faire, il suffit de pratiquer !' },
      { emoji: '💪', title: 'Les Erreurs sont Normales', body: "Ne vous sentez pas mal quand vous vous trompez, c'est une partie de l'apprentissage !" },
      { emoji: '🎯', title: 'Fixez de Petits Objectifs', body: 'Une table par jour suffit, ne vous précipitez pas !' },
    ],
    motivationColumn2: [
      { emoji: '🤝', title: "Demandez de l'Aide", body: "Si vous ne comprenez pas quelque chose, demandez à votre famille ou à votre enseignant !" },
      { emoji: '🎉', title: 'Célébrez vos Réussites', body: 'Chaque petit succès est important, valorisez-vous !' },
      { emoji: '😊', title: 'Amusez-vous !', body: 'Apprendre doit être amusant, essayez les jeux !' },
    ],

    quickTricksHeading: 'Guide Rapide des Astuces 🔑',
    quickTricksCards: [
      { title: 'Multiplier par 0', body: 'Tout est zéro ! 0×1000=0' },
      { title: 'Multiplier par 1', body: 'Le nombre reste identique ! 1×7=7' },
      { title: 'Multiplier par 2', body: 'Doublez le nombre ! 2×6=12' },
      { title: 'Multiplier par 5', body: 'Le résultat se termine par 0 ou 5 !' },
      { title: 'Multiplier par 9', body: 'Les chiffres font 9 ! Astuce des doigts !' },
      { title: 'Multiplier par 10', body: 'Ajoutez un 0 ! 10×8=80' },
    ],

    ctaHeading: "C'est l'Heure de Commencer ! 🚀",
    ctaBody: 'Maintenant vous êtes prêt ! Rappelez-vous, chaque grand héros des mathématiques a commencé par de petites étapes. Vous pouvez le faire aussi ! 💪✨',
    ctaButton1Label: 'Commencer Maintenant',
    ctaButton2Label: "Retour à l'Accueil",
    ctaTipLabel: 'Conseil :',
    ctaTipBody: "Étudier 10-15 minutes par jour est beaucoup plus efficace que d'étudier 1 heure ennuyeusement !",
  },

  sv: {
    heroTitle: 'Att Lära Sig Multiplikationstabellen är Jättelätt! 🎯',
    heroSubtitle:
      'Lär dig i din egen takt, ha roligt medan du lär dig och bli en matematikhjälte! Den här guiden hjälper dig att lära dig multiplikationstabellen steg för steg.',
    heroCaption: 'Du kan också göra det!',

    whyLearnHeading: 'Varför Ska Jag Lära Mig Multiplikationstabellen? 🤔',
    whyLearnIntro: 'Multiplikationstabellen är matematikvärldens superkraft! Här är vad den ger dig:',
    whyLearnCards: [
      { emoji: '⚡', title: 'Snabb Beräkning', body: 'Du kommer att kunna lösa matematikproblem mycket snabbare!' },
      { emoji: '🎮', title: 'Användning i Vardagen', body: 'Det kommer att vara användbart överallt - vid shopping, i spel, överallt!' },
      { emoji: '🏆', title: 'Ökat Självförtroende', body: 'Ditt självförtroende i matematik kommer att öka och du blir mer framgångsrik!' },
      { emoji: '🧠', title: 'Hjärnkraft', body: 'Ditt minne kommer att bli starkare och du lär dig att tänka snabbare!' },
    ],

    learningPathHeading: 'Steg för Steg Lärandeväg 🚀',
    learningPathSteps: [
      {
        title: 'Börja med Enkla Tabeller (1, 2, 5, 10)',
        body: 'Att börja med de enklaste tabellerna ger dig självförtroende! Dessa är mycket enkla och du kommer att lära dig dem snabbt.',
        boxLabel: 'Varför är dessa tabeller lätta?',
        bullets: [
          '1-tabellen: Varje tal förblir sig själv! (1×5=5)',
          '2-tabellen: Lägg bara till talet två gånger! (2×4 = 4+4 = 8)',
          '5-tabellen: Slutar alltid på 5 eller 0!',
          '10-tabellen: Lägg bara till en nolla! (10×3 = 30)',
        ],
        linkLabel: 'Gå till 1-10 Tabeller →',
      },
      {
        title: 'Gå Vidare till Mellannivå Tabeller (3, 4, 6)',
        body: 'Nu är du redo för lite mer utmanande tabeller! Oroa dig inte, det finns tips för dessa också.',
        boxLabel: 'Tips:',
        bullets: [
          '3-tabellen: Lägg till talet 3 gånger (3×4 = 4+4+4 = 12)',
          '4-tabellen: Multiplicera med 2, sedan dubblera (4×5 = 2×5×2 = 20)',
          '6-tabellen: Lägg till 1 till 5-tabellen (6×4 = 5×4 + 4 = 24)',
        ],
      },
      {
        title: 'Utmana Dig Själv med Svåra Tabeller (7, 8, 9)',
        body: 'Dessa tabeller är lite svårare men du har redan lärt dig så mycket! Med speciella tekniker klarar du även dessa.',
        boxLabel: 'Speciella Tekniker:',
        bullets: [
          '9-tabellen - Fingertrick: Öppna händerna, böj ner det finger som motsvarar talet du multiplicerar med. Öppna fingrar till vänster = tiotal, till höger = ental!',
          '8-tabellen: Multiplicera med 10, dra av 2 gånger (8×7 = 10×7 - 2×7 = 70-14 = 56)',
          '7-tabellen: För svåra, använd 5-tabellen (7×6 = 5×6 + 2×6 = 30+12 = 42)',
        ],
      },
      {
        title: 'Öva Kontinuerligt 💪',
        body: 'För att inte glömma det du har lärt dig, öva lite varje dag. Kort men regelbunden övning är bäst!',
        boxLabel: 'Dagliga Övningstips:',
        bullets: [
          'Öva 10-15 minuter varje dag (inte långt, men regelbundet!)',
          'Öva genom att spela spel - det är roligt!',
          'Ordna tävlingar med familjen',
          'När du ser multiplikation i vardagen, räkna ut det (t.ex: "3 lådor, 5 chokladbitar i varje, hur många totalt?")',
        ],
      },
    ],

    visualLearningHeading: 'Visuellt Lärande - Förstå med Bilder 🎨',
    visualLearningIntro: 'Att visualisera multiplikation i ditt huvud gör lärandet lättare! Här är några visuella tekniker:',
    arraysTitle: 'Matriser (Arrays)',
    arraysExample: 'Exempel på 4 × 3 = 12:',
    arraysCaption: '4 kolumner × 3 rader = 12',
    numberLineTitle: 'Hopp på Tallinjen',
    numberLineExample: '3 × 4: Hoppa i fyror (0→4→8→12)',
    numberLineCaption: '3 steg, varje steg 4 enheter',
    skipCountingTitle: 'Hoppa och Räkna',
    skipCountingExample: 'Räkna i femmor: 5, 10, 15, 20, 25...',
    skipCountingTip: 'Om du lär dig dessa siffror blir 5-tabellen mycket lätt!',
    patternsTitle: 'Upptäck Mönster',
    patternsIntro: '9-tabellens hemlighet:',
    patternsNote: 'Siffrorna summerar alltid till 9!',

    practiceTipsHeading: 'Övningstips 🎯',
    practiceTipsCards: [
      { emoji: '🎮', title: 'Spela Spel', body: 'Öva med de roliga spelen på denna webbplats. Att lära sig genom att spela är mycket roligare!', linkLabel: 'Upptäck Spelen →' },
      { emoji: '📝', title: 'Testa Dig Själv', body: 'Använd kort eller låt någon fråga dig. Att testa dig själv påskyndar inlärningen!' },
      { emoji: '🎵', title: 'Sånger och Rytmer', body: 'Gör multiplikationstabellerna till sånger! Det är lättare att komma ihåg med musik.' },
      { emoji: '🏆', title: 'Belöna Dig Själv', body: 'När du lär dig en tabell, belöna dig själv! Samla klistermärken eller gör något litet.' },
    ],

    progressHeading: 'Följ Din Framsteg 📊',
    progressIntro: 'Att se hur långt du har kommit motiverar dig! Här är spårningsmetoder:',
    progressCards: [
      { title: '✅ Tabell Checklista', body: 'Skriv tabellerna 1 till 10 på ett papper. Markera med en stor bock när du lär dig var och en! När alla är markerade är du en multiplikationstabell-hjälte! 🌟' },
      { title: '📈 Framstegsgraf', body: 'Registrera hur många frågor du svarar rätt på varje vecka. Rita en graf och se framstegen. Du blir bättre varje vecka!' },
      { title: '⭐ Stjärnsystem', body: 'Rita en stjärna för varje rätt svar. När du når 100 stjärnor, ge dig själv en speciell belöning!' },
    ],

    motivationHeading: 'Motivation och Framgångstips 💫',
    motivationColumn1: [
      { emoji: '🌟', title: 'Ha Tålamod', body: 'Allt tar tid. Du kan också göra det, bara öva!' },
      { emoji: '💪', title: 'Misstag är Normala', body: 'Bli inte ledsen när du gör fel, det är en del av lärandet!' },
      { emoji: '🎯', title: 'Sätt Små Mål', body: 'En tabell om dagen räcker, skynda dig inte!' },
    ],
    motivationColumn2: [
      { emoji: '🤝', title: 'Be om Hjälp', body: 'Om du inte förstår något, fråga din familj eller lärare!' },
      { emoji: '🎉', title: 'Fira Dina Framgångar', body: 'Varje liten framgång är viktig, uppskatta dig själv!' },
      { emoji: '😊', title: 'Ha Kul!', body: 'Lärande ska vara roligt, prova spelen!' },
    ],

    quickTricksHeading: 'Snabbtips Guide 🔑',
    quickTricksCards: [
      { title: 'Multiplikation med 0', body: 'Allt blir noll! 0×1000=0' },
      { title: 'Multiplikation med 1', body: 'Talet förblir sig själv! 1×7=7' },
      { title: 'Multiplikation med 2', body: 'Dubbla talet! 2×6=12' },
      { title: 'Multiplikation med 5', body: 'Resultatet slutar på 0 eller 5!' },
      { title: 'Multiplikation med 9', body: 'Siffrorna summerar till 9! Fingertrick!' },
      { title: 'Multiplikation med 10', body: 'Lägg till en nolla! 10×8=80' },
    ],

    ctaHeading: 'Dags att Börja Nu! 🚀',
    ctaBody: 'Nu är du redo! Kom ihåg, varje stor matematikhjälte började med små steg. Du kan också göra det! 💪✨',
    ctaButton1Label: 'Börja Omedelbart',
    ctaButton2Label: 'Tillbaka till Startsidan',
    ctaTipLabel: 'Tips:',
    ctaTipBody: 'Att öva 10-15 minuter om dagen är mycket effektivare än att studera i 1 timme med uttråkning!',
  },

  // DATA QUALITY FLAG: this locale's source file (para-estudantes/page.tsx) mixes Spanish
  // text into what should be Portuguese content — the "Why Learn" cards 1 & 2, all of Step
  // 4, and the entire Visual Learning section are verbatim Spanish in the original. Preserved
  // as-is below (not translated/fixed), per the verbatim-extraction requirement.
  pt: {
    heroTitle: 'Aprender Tabuada é Muito Fácil! 🎯',
    heroSubtitle:
      'Avance no seu próprio ritmo, aprenda enquanto se diverte e torne-se um herói da matemática! Este guia vai ajudá-lo a aprender tabuada passo a passo.',
    heroCaption: 'Você também pode fazer isso!',

    whyLearnHeading: 'Por Que Devo Aprender Tabuada? 🤔',
    whyLearnIntro: 'A tabuada é o super poder do mundo matemático! Isto é o que ela lhe dará:',
    whyLearnCards: [
      { emoji: '⚡', title: 'Cálculo Rápido', body: '¡Podrás resolver problemas matemáticos mucho más rápido!' },
      { emoji: '🎮', title: 'Uso en la Vida Diaria', body: '¡Te será útil al hacer compras, en juegos, en todas partes!' },
      { emoji: '🏆', title: 'Aumento de Confianza', body: 'Sua confiança em matemática aumentará e você terá mais sucesso!' },
      { emoji: '🧠', title: 'Poder Cerebral', body: 'Sua memória ficará mais forte e você aprenderá a pensar mais rápido!' },
    ],

    learningPathHeading: 'Caminho de Aprendizado Passo a Passo 🚀',
    learningPathSteps: [
      {
        title: 'Comece com as Tabuadas Fáceis (1, 2, 5, 10)',
        body: 'Começar com as tabuadas mais fáceis vai te dar confiança! São muito simples e você as aprenderá rápido.',
        boxLabel: 'Por que essas tabuadas são fáceis?',
        bullets: [
          'Tabuada do 1: Cada número fica igual! (1×5=5)',
          'Tabuada do 2: Some o número duas vezes! (2×4 = 4+4 = 8)',
          'Tabuada do 5: Sempre termina em 5 ou 0!',
          'Tabuada do 10: Adicione um zero no final! (10×3 = 30)',
        ],
        linkLabel: 'Ir para Tabuadas 1-10 →',
      },
      {
        title: 'Avance para Tabuadas de Nível Médio (3, 4, 6)',
        body: 'Agora você está pronto para tabuadas um pouco mais desafiadoras! Não se preocupe, também há truques para essas.',
        boxLabel: 'Truques:',
        bullets: [
          'Tabuada do 3: Some o número 3 vezes (3×4 = 4+4+4 = 12)',
          'Tabuada do 4: Multiplique por 2, depois duplique (4×5 = 2×5×2 = 20)',
          'Tabuada do 6: Use a tabuada do 5 e adicione 1 mais (6×4 = 5×4 + 4 = 24)',
        ],
      },
      {
        title: 'Desafie-se com as Tabuadas Difíceis (7, 8, 9)',
        body: 'Essas tabuadas são um pouco mais difíceis, mas você já aprendeu muito até agora! Com técnicas especiais você também dominará essas.',
        boxLabel: 'Técnicas Especiais:',
        bullets: [
          'Tabuada do 9 - Truque dos Dedos: Abra suas mãos, abaixe o dedo do número que você vai multiplicar. Dedos abertos à esquerda = dezenas, dedos à direita = unidades!',
          'Tabuada do 8: Multiplique por 10, depois subtraia 2 vezes (8×7 = 10×7 - 2×7 = 70-14 = 56)',
          'Tabuada do 7: Para as difíceis use a tabuada do 5 (7×6 = 5×6 + 2×6 = 30+12 = 42)',
        ],
      },
      {
        title: 'Practica Constantemente 💪',
        body: 'Para no olvidar todo lo que has aprendido, practica un poco cada día. ¡Lo mejor es practicar poco pero regularmente!',
        boxLabel: 'Consejos de Práctica Diaria:',
        bullets: [
          'Estudia 10-15 minutos cada día (¡no mucho, pero regular!)',
          'Practica jugando - ¡es divertido!',
          'Organiza competencias con tu familia',
          'Cuando veas multiplicaciones en la vida diaria, calcúlalas (ej: "3 cajas, 5 chocolates en cada una, ¿cuántos en total?")',
        ],
      },
    ],

    visualLearningHeading: 'Aprendizaje Visual - Entiende con Imágenes 🎨',
    visualLearningIntro: '¡Visualizar la multiplicación en tu mente facilita el aprendizaje! Aquí hay algunas técnicas visuales:',
    arraysTitle: 'Arreglos (Arrays)',
    arraysExample: 'Ejemplo de 4 × 3 = 12:',
    arraysCaption: '4 columnas × 3 filas = 12',
    numberLineTitle: 'Saltos en la Recta Numérica',
    numberLineExample: '3 × 4: saltos de 4 (0→4→8→12)',
    numberLineCaption: '3 pasos, cada paso 4 unidades',
    skipCountingTitle: 'Conteo Saltado',
    skipCountingExample: 'Cuenta de 5 en 5: 5, 10, 15, 20, 25...',
    skipCountingTip: '¡Si memorizas estos números, la tabla del 5 es muy fácil!',
    patternsTitle: 'Nota los Patrones',
    patternsIntro: 'El secreto de la tabla del 9:',
    patternsNote: '¡Los dígitos siempre suman 9!',

    practiceTipsHeading: 'Dicas para Praticar 🎯',
    practiceTipsCards: [
      { emoji: '🎮', title: 'Jogue', body: 'Pratique com os jogos divertidos deste site. Aprender enquanto joga é muito mais divertido!', linkLabel: 'Descubra os Jogos →' },
      { emoji: '📝', title: 'Faça Testes', body: 'Use cartões ou peça a alguém para fazer perguntas. Fazer testes acelera seu aprendizado!' },
      { emoji: '🎵', title: 'Canções e Ritmos', body: 'Transforme a tabuada em canções! É mais fácil memorizar com música.' },
      { emoji: '🏆', title: 'Recompense-se', body: 'Quando aprender uma tabuada, recompense-se! Colecione adesivos ou faça algo pequeno.' },
    ],

    progressHeading: 'Acompanhe seu Progresso 📊',
    progressIntro: 'Ver quanto você progrediu te motiva! Aqui estão métodos de acompanhamento:',
    progressCards: [
      { title: '✅ Lista de Verificação de Tabuadas', body: 'Escreva em um papel as tabuadas de 1 a 10. Cada vez que aprender uma, coloque um grande check! Quando todos os checks estiverem completos, você será um herói da tabuada! 🌟' },
      { title: '📈 Gráfico de Progresso', body: 'Registre quantas perguntas você respondeu corretamente a cada semana. Desenhe um gráfico e veja seu progresso. Cada semana você está melhorando!' },
      { title: '⭐ Sistema de Estrelas', body: 'Para cada resposta correta, desenhe uma estrela. Quando chegar a 100 estrelas, dê a si mesmo um prêmio especial!' },
    ],

    motivationHeading: 'Segredos de Motivação e Sucesso 💫',
    motivationColumn1: [
      { emoji: '🌟', title: 'Seja Paciente', body: 'Tudo leva tempo. Você consegue, apenas pratique!' },
      { emoji: '💪', title: 'Erros são Normais', body: 'Não se sinta mal quando errar, faz parte do aprendizado!' },
      { emoji: '🎯', title: 'Estabeleça Metas Pequenas', body: 'Uma tabuada por dia é suficiente, não se apresse!' },
    ],
    motivationColumn2: [
      { emoji: '🤝', title: 'Peça Ajuda', body: 'Se há algo que você não entende, pergunte à sua família ou professor!' },
      { emoji: '🎉', title: 'Celebre suas Conquistas', body: 'Cada pequena conquista é importante, valorize a si mesmo!' },
      { emoji: '😊', title: 'Divirta-se!', body: 'Aprender deve ser divertido, experimente os jogos!' },
    ],

    quickTricksHeading: 'Guia Rápido de Truques 🔑',
    quickTricksCards: [
      { title: 'Multiplicar por 0', body: 'Tudo é zero! 0×1000=0' },
      { title: 'Multiplicar por 1', body: 'O número fica igual! 1×7=7' },
      { title: 'Multiplicar por 2', body: 'Duplique o número! 2×6=12' },
      { title: 'Multiplicar por 5', body: 'O resultado termina em 0 ou 5!' },
      { title: 'Multiplicar por 9', body: 'Os dígitos somam 9! Truque dos dedos!' },
      { title: 'Multiplicar por 10', body: 'Adicione um 0! 10×8=80' },
    ],

    ctaHeading: 'É Hora de Começar! 🚀',
    ctaBody: 'Agora você está pronto! Lembre-se, cada grande herói da matemática começou com pequenos passos. Você também consegue! 💪✨',
    ctaButton1Label: 'Começar Agora',
    ctaButton2Label: 'Voltar ao Início',
    ctaTipLabel: 'Dica:',
    ctaTipBody: 'Estudar 10-15 minutos por dia é muito mais eficaz do que estudar 1 hora entediante!',
  },

  en: {
    heroTitle: 'Learning Times Tables is Really Easy! 🎯',
    heroSubtitle:
      'Progress at your own pace, learn while having fun, and become a math hero! This guide will help you learn times tables step by step.',
    heroCaption: 'You can do this too!',

    whyLearnHeading: 'Why Should I Learn Times Tables? 🤔',
    whyLearnIntro: "Times tables are the superpower of the math world! Here's what they'll give you:",
    whyLearnCards: [
      { emoji: '⚡', title: 'Fast Calculation', body: "You'll be able to solve math problems much faster!" },
      { emoji: '🎮', title: 'Use in Daily Life', body: "It'll be useful when shopping, in games, everywhere!" },
      { emoji: '🏆', title: 'Confidence Boost', body: "Your math confidence will increase and you'll be more successful!" },
      { emoji: '🧠', title: 'Brain Power', body: "Your memory will get stronger and you'll learn to think faster!" },
    ],

    learningPathHeading: 'Step-by-Step Learning Path 🚀',
    learningPathSteps: [
      {
        title: 'Start with the Easy Tables (1, 2, 5, 10)',
        body: "Starting with the easiest tables will give you confidence! They're very simple and you'll learn them quickly.",
        boxLabel: 'Why are these tables easy?',
        bullets: [
          '1 Times Table: Every number stays the same! (1×5=5)',
          '2 Times Table: Add the number twice! (2×4 = 4+4 = 8)',
          '5 Times Table: Always ends in 5 or 0!',
          '10 Times Table: Add a zero at the end! (10×3 = 30)',
        ],
        linkLabel: 'Go to Times Tables 1-10 →',
      },
      {
        title: 'Move on to Medium-Level Tables (3, 4, 6)',
        body: "Now you're ready for slightly more challenging tables! Don't worry, there are tricks for these too.",
        boxLabel: 'Tricks:',
        bullets: [
          '3 Times Table: Add the number 3 times (3×4 = 4+4+4 = 12)',
          '4 Times Table: Multiply by 2, then double it (4×5 = 2×5×2 = 20)',
          '6 Times Table: Use the 5 times table and add 1 more (6×4 = 5×4 + 4 = 24)',
        ],
      },
      {
        title: 'Challenge Yourself with the Hard Tables (7, 8, 9)',
        body: "These tables are a bit harder, but you've learned so much by now! With special techniques you'll master these too.",
        boxLabel: 'Special Techniques:',
        bullets: [
          "9 Times Table - Finger Trick: Hold up both hands, lower the finger of the number you're multiplying. Fingers up on the left = tens, fingers on the right = ones!",
          '8 Times Table: Multiply by 10, then subtract 2 times (8×7 = 10×7 - 2×7 = 70-14 = 56)',
          '7 Times Table: For the tricky ones use the 5 times table (7×6 = 5×6 + 2×6 = 30+12 = 42)',
        ],
      },
      {
        title: 'Practice Constantly 💪',
        body: "To not forget everything you've learned, practice a little each day. It's best to practice a little but regularly!",
        boxLabel: 'Daily Practice Tips:',
        bullets: [
          'Study 10-15 minutes each day (not much, but regular!)',
          "Practice by playing - it's fun!",
          'Organize competitions with your family',
          'When you see multiplication in daily life, calculate it (e.g., "3 boxes, 5 chocolates in each, how many total?")',
        ],
      },
    ],

    visualLearningHeading: 'Visual Learning - Understand with Pictures 🎨',
    visualLearningIntro: 'Visualizing multiplication in your mind makes learning easier! Here are some visual techniques:',
    arraysTitle: 'Arrays',
    arraysExample: 'Example of 4 × 3 = 12:',
    arraysCaption: '4 columns × 3 rows = 12',
    numberLineTitle: 'Jumps on the Number Line',
    numberLineExample: '3 × 4: jumps of 4 (0→4→8→12)',
    numberLineCaption: '3 steps, each step 4 units',
    skipCountingTitle: 'Skip Counting',
    skipCountingExample: 'Count by 5s: 5, 10, 15, 20, 25...',
    skipCountingTip: 'If you memorize these numbers, the 5 times table is super easy!',
    patternsTitle: 'Notice the Patterns',
    patternsIntro: 'The secret of the 9 times table:',
    patternsNote: 'The digits always add up to 9!',

    practiceTipsHeading: 'Practice Tips 🎯',
    practiceTipsCards: [
      { emoji: '🎮', title: 'Play Games', body: 'Practice with the fun games on this site. Learning while playing is much more fun!', linkLabel: 'Discover the Games →' },
      { emoji: '📝', title: 'Take Tests', body: 'Use flashcards or ask someone to quiz you. Testing yourself speeds up your learning!' },
      { emoji: '🎵', title: 'Songs and Rhythms', body: "Turn times tables into songs! It's easier to memorize with music." },
      { emoji: '🏆', title: 'Reward Yourself', body: 'When you learn a times table, reward yourself! Collect stickers or treat yourself to something small.' },
    ],

    progressHeading: 'Track Your Progress 📊',
    progressIntro: "Seeing how much you've progressed motivates you! Here are tracking methods:",
    progressCards: [
      { title: '✅ Times Tables Checklist', body: "Write times tables 1-10 on paper. Each time you learn one, put a big check! When all checks are complete, you're a times tables hero! 🌟" },
      { title: '📈 Progress Chart', body: "Record how many questions you answered correctly each week. Draw a chart and see your progress. Each week you're getting better!" },
      { title: '⭐ Star System', body: 'For each correct answer, draw a star. When you reach 100 stars, give yourself a special prize!' },
    ],

    motivationHeading: 'Motivation and Success Secrets 💫',
    motivationColumn1: [
      { emoji: '🌟', title: 'Be Patient', body: 'Everything takes time. You can do it, just practice!' },
      { emoji: '💪', title: 'Mistakes are Normal', body: "Don't feel bad when you make mistakes, it's part of learning!" },
      { emoji: '🎯', title: 'Set Small Goals', body: "One times table per day is enough, don't rush!" },
    ],
    motivationColumn2: [
      { emoji: '🤝', title: 'Ask for Help', body: "If there's something you don't understand, ask your family or teacher!" },
      { emoji: '🎉', title: 'Celebrate Your Achievements', body: 'Every little achievement is important, value yourself!' },
      { emoji: '😊', title: 'Have Fun!', body: 'Learning should be fun, try the games!' },
    ],

    quickTricksHeading: 'Quick Tricks Guide 🔑',
    quickTricksCards: [
      { title: 'Multiply by 0', body: 'Everything is zero! 0×1000=0' },
      { title: 'Multiply by 1', body: 'The number stays the same! 1×7=7' },
      { title: 'Multiply by 2', body: 'Double the number! 2×6=12' },
      { title: 'Multiply by 5', body: 'The result ends in 0 or 5!' },
      { title: 'Multiply by 9', body: 'The digits add up to 9! Finger trick!' },
      { title: 'Multiply by 10', body: 'Add a 0! 10×8=80' },
    ],

    ctaHeading: 'Time to Start! 🚀',
    ctaBody: "Now you're ready! Remember, every great math hero started with small steps. You can do it too! 💪✨",
    ctaButton1Label: 'Start Now',
    ctaButton2Label: 'Back to Home',
    ctaTipLabel: 'Tip:',
    ctaTipBody: 'Studying 10-15 minutes per day is much more effective than studying 1 boring hour!',
  },

  pl: {
    heroTitle: 'Nauka Tabliczki Mnożenia Jest Naprawdę Łatwa! 🎯',
    heroSubtitle:
      'Postępuj we własnym tempie, ucz się bawiąc i zostań bohaterem matematyki! Ten przewodnik pomoże Ci nauczyć się tabliczki mnożenia krok po kroku.',
    heroCaption: 'Ty też możesz to zrobić!',

    whyLearnHeading: 'Dlaczego Powinienem Się Uczyć Tabliczki Mnożenia? 🤔',
    whyLearnIntro: 'Tabliczka mnożenia to supermoc w świecie matematyki! Oto, co Ci da:',
    whyLearnCards: [
      { emoji: '⚡', title: 'Szybkie Obliczenia', body: 'Będziesz rozwiązywać problemy matematyczne znacznie szybciej!' },
      { emoji: '🎮', title: 'Użycie w Codziennym Życiu', body: 'Przydatne podczas zakupów, w grach, wszędzie!' },
      { emoji: '🏆', title: 'Wzrost Pewności Siebie', body: 'Twoja pewność siebie w matematyce wzrośnie i odniesiesz większy sukces!' },
      { emoji: '🧠', title: 'Moc Mózgu', body: 'Twoja pamięć stanie się silniejsza i nauczysz się szybciej myśleć!' },
    ],

    learningPathHeading: 'Ścieżka Nauki Krok po Kroku 🚀',
    learningPathSteps: [
      {
        title: 'Zacznij od Łatwych Tabliczek (1, 2, 5, 10)',
        body: 'Zaczynanie od najłatwiejszych tabliczek da Ci pewność siebie! Są bardzo proste i nauczysz się ich szybko.',
        boxLabel: 'Dlaczego te tabliczki są łatwe?',
        bullets: [
          'Tabliczka 1: Każda liczba pozostaje taka sama! (1×5=5)',
          'Tabliczka 2: Dodaj liczbę dwa razy! (2×4 = 4+4 = 8)',
          'Tabliczka 5: Zawsze kończy się na 5 lub 0!',
          'Tabliczka 10: Dodaj zero na końcu! (10×3 = 30)',
        ],
        linkLabel: 'Przejdź do Tabliczek 1-10 →',
      },
      {
        title: 'Przejdź do Średnio Trudnych Tabliczek (3, 4, 6)',
        body: 'Teraz jesteś gotowy na nieco trudniejsze tabliczki! Nie martw się, dla nich też są sztuczki.',
        boxLabel: 'Sztuczki:',
        bullets: [
          'Tabliczka 3: Dodaj liczbę 3 razy (3×4 = 4+4+4 = 12)',
          'Tabliczka 4: Pomnóż przez 2, potem podwój (4×5 = 2×5×2 = 20)',
          'Tabliczka 6: Użyj tabliczki 5 i dodaj jeszcze raz (6×4 = 5×4 + 4 = 24)',
        ],
      },
      {
        title: 'Wyzwij Się z Trudnymi Tabliczkami (7, 8, 9)',
        body: 'Te tabliczki są nieco trudniejsze, ale nauczyłeś się już tak dużo! Dzięki specjalnym technikom opanujesz też te.',
        boxLabel: 'Specjalne Techniki:',
        bullets: [
          'Tabliczka 9 - Trik z Palcami: Wyciągnij obie ręce, opuść palec liczby, którą mnożysz. Palce w górę po lewej = dziesiątki, palce po prawej = jedności!',
          'Tabliczka 8: Pomnóż przez 10, potem odejmij 2 razy (8×7 = 10×7 - 2×7 = 70-14 = 56)',
          'Tabliczka 7: Dla trudnych użyj tabliczki 5 (7×6 = 5×6 + 2×6 = 30+12 = 42)',
        ],
      },
      {
        title: 'Ćwicz Regularnie 💪',
        body: 'Aby nie zapomnieć tego, czego się nauczyłeś, ćwicz trochę każdego dnia. Najlepiej ćwiczyć mało, ale regularnie!',
        boxLabel: 'Wskazówki Dotyczące Codziennego Ćwiczenia:',
        bullets: [
          'Ucz się 10-15 minut każdego dnia (niewiele, ale regularnie!)',
          'Ćwicz grając - to zabawne!',
          'Organizuj zawody z rodziną',
          'Gdy zobaczysz mnożenie w codziennym życiu, oblicz (np. "3 pudełka, 5 czekoladek w każdym, ile razem?")',
        ],
      },
    ],

    visualLearningHeading: 'Nauka Wizualna - Zrozum z Obrazkami 🎨',
    visualLearningIntro: 'Wizualizowanie mnożenia w umyśle ułatwia naukę! Oto kilka technik wizualnych:',
    arraysTitle: 'Tablice',
    arraysExample: 'Przykład 4 × 3 = 12:',
    arraysCaption: '4 kolumny × 3 rzędy = 12',
    numberLineTitle: 'Skoki na Osi Liczbowej',
    numberLineExample: '3 × 4: skoki po 4 (0→4→8→12)',
    numberLineCaption: '3 kroki, każdy krok 4 jednostki',
    skipCountingTitle: 'Liczenie z Pomijaniem',
    skipCountingExample: 'Licz po 5: 5, 10, 15, 20, 25...',
    skipCountingTip: 'Jeśli zapamiętasz te liczby, tabliczka 5 jest super łatwa!',
    patternsTitle: 'Zauważ Wzory',
    patternsIntro: 'Sekret tabliczki 9:',
    patternsNote: 'Cyfry zawsze sumują się do 9!',

    practiceTipsHeading: 'Wskazówki Dotyczące Ćwiczeń 🎯',
    practiceTipsCards: [
      { emoji: '🎮', title: 'Graj w Gry', body: 'Ćwicz z zabawnymi grami na tej stronie. Nauka podczas zabawy jest o wiele przyjemniejsza!', linkLabel: 'Odkryj Gry →' },
      { emoji: '📝', title: 'Rozwiązuj Testy', body: 'Używaj fiszek lub poproś kogoś, aby Cię przepytał. Testowanie siebie przyspiesza naukę!' },
      { emoji: '🎵', title: 'Piosenki i Rytmy', body: 'Zamień tabliczki mnożenia w piosenki! Z muzyką łatwiej zapamiętać.' },
      { emoji: '🏆', title: 'Nagradzaj Siebie', body: 'Kiedy nauczysz się tabliczki mnożenia, nagródź siebie! Zbieraj naklejki lub zrób sobie małą przyjemność.' },
    ],

    progressHeading: 'Śledź Swoje Postępy 📊',
    progressIntro: 'Widząc, jak bardzo się rozwinąłeś, motywujesz się! Oto metody śledzenia:',
    progressCards: [
      { title: '✅ Lista Kontrolna Tabliczek', body: 'Zapisz tabliczki 1-10 na papierze. Za każdym razem, gdy się jednej nauczysz, postaw duży znacznik! Kiedy wszystkie znaczniki są kompletne, jesteś bohaterem tabliczki mnożenia! 🌟' },
      { title: '📈 Wykres Postępów', body: 'Zapisuj, ile pytań odpowiedziałeś poprawnie każdego tygodnia. Narysuj wykres i zobacz swoje postępy. Każdego tygodnia stajesz się lepszy!' },
      { title: '⭐ System Gwiazdek', body: 'Za każdą poprawną odpowiedź narysuj gwiazdkę. Kiedy osiągniesz 100 gwiazdek, daj sobie specjalną nagrodę!' },
    ],

    motivationHeading: 'Motywacja i Sekrety Sukcesu 💫',
    motivationColumn1: [
      { emoji: '🌟', title: 'Bądź Cierpliwy', body: 'Wszystko wymaga czasu. Możesz to zrobić, tylko ćwicz!' },
      { emoji: '💪', title: 'Błędy Są Normalne', body: 'Nie czuj się źle, gdy popełniasz błędy, to część nauki!' },
      { emoji: '🎯', title: 'Ustal Małe Cele', body: 'Jedna tabliczka dziennie wystarczy, nie spiesz się!' },
    ],
    motivationColumn2: [
      { emoji: '🤝', title: 'Proś o Pomoc', body: 'Jeśli jest coś, czego nie rozumiesz, zapytaj rodzinę lub nauczyciela!' },
      { emoji: '🎉', title: 'Świętuj Swoje Osiągnięcia', body: 'Każde małe osiągnięcie jest ważne, doceniaj siebie!' },
      { emoji: '😊', title: 'Baw Się Dobrze!', body: 'Nauka powinna być zabawna, spróbuj gier!' },
    ],

    quickTricksHeading: 'Przewodnik po Szybkich Sztuczkach 🔑',
    quickTricksCards: [
      { title: 'Mnożenie przez 0', body: 'Wszystko to zero! 0×1000=0' },
      { title: 'Mnożenie przez 1', body: 'Liczba pozostaje taka sama! 1×7=7' },
      { title: 'Mnożenie przez 2', body: 'Podwój liczbę! 2×6=12' },
      { title: 'Mnożenie przez 5', body: 'Wynik kończy się na 0 lub 5!' },
      { title: 'Mnożenie przez 9', body: 'Cyfry sumują się do 9! Trik z palcami!' },
      { title: 'Mnożenie przez 10', body: 'Dodaj 0! 10×8=80' },
    ],

    ctaHeading: 'Czas Zacząć! 🚀',
    ctaBody: 'Teraz jesteś gotowy! Pamiętaj, każdy wspaniały bohater matematyki zaczynał od małych kroków. Ty też możesz to zrobić! 💪✨',
    ctaButton1Label: 'Zacznij Teraz',
    ctaButton2Label: 'Wróć do Strony Głównej',
    ctaTipLabel: 'Wskazówka:',
    ctaTipBody: 'Nauka 10-15 minut dziennie jest o wiele bardziej efektywna niż nauka 1 nudnej godziny!',
  },

  id: {
    heroTitle: 'Belajar Tabel Perkalian itu Sangat Mudah! 🎯',
    heroSubtitle:
      'Belajar sesuai kecepatan Anda sendiri, belajar sambil bersenang-senang, dan menjadi pahlawan matematika! Panduan ini akan membantu Anda mempelajari tabel perkalian langkah demi langkah.',
    heroCaption: 'Kamu juga bisa melakukannya!',

    whyLearnHeading: 'Mengapa Saya Harus Belajar Tabel Perkalian? 🤔',
    whyLearnIntro: 'Tabel perkalian adalah kekuatan super dalam dunia matematika! Inilah yang akan Anda dapatkan:',
    whyLearnCards: [
      { emoji: '⚡', title: 'Perhitungan Cepat', body: 'Anda akan dapat menyelesaikan soal matematika jauh lebih cepat!' },
      { emoji: '🎮', title: 'Berguna dalam Kehidupan Sehari-hari', body: 'Berguna saat berbelanja, dalam permainan, di mana-mana!' },
      { emoji: '🏆', title: 'Meningkatkan Kepercayaan Diri', body: 'Kepercayaan diri Anda dalam matematika akan meningkat dan Anda akan lebih sukses!' },
      { emoji: '🧠', title: 'Kekuatan Otak', body: 'Ingatan Anda akan lebih kuat dan Anda akan belajar berpikir lebih cepat!' },
    ],

    learningPathHeading: 'Jalur Pembelajaran Langkah demi Langkah 🚀',
    learningPathSteps: [
      {
        title: 'Mulai dengan Tabel yang Mudah (1, 2, 5, 10)',
        body: 'Memulai dengan tabel yang paling mudah akan memberi Anda kepercayaan diri! Mereka sangat sederhana dan Anda akan mempelajarinya dengan cepat.',
        boxLabel: 'Mengapa tabel ini mudah?',
        bullets: [
          'Tabel 1: Setiap angka tetap sama! (1×5=5)',
          'Tabel 2: Tambahkan angka dua kali! (2×4 = 4+4 = 8)',
          'Tabel 5: Selalu berakhiran 5 atau 0!',
          'Tabel 10: Tambahkan nol di belakang! (10×3 = 30)',
        ],
        linkLabel: 'Ke Tabel Perkalian 1-10 →',
      },
      {
        title: 'Lanjutkan ke Tabel Tingkat Menengah (3, 4, 6)',
        body: 'Sekarang Anda siap untuk tabel yang sedikit lebih menantang! Jangan khawatir, ada trik untuk tabel ini juga.',
        boxLabel: 'Trik:',
        bullets: [
          'Tabel 3: Tambahkan angka 3 kali (3×4 = 4+4+4 = 12)',
          'Tabel 4: Kalikan dengan 2, lalu gandakan (4×5 = 2×5×2 = 20)',
          'Tabel 6: Gunakan tabel 5 dan tambahkan 1 lagi (6×4 = 5×4 + 4 = 24)',
        ],
      },
      {
        title: 'Tantang Diri Anda dengan Tabel yang Sulit (7, 8, 9)',
        body: 'Tabel ini sedikit lebih sulit, tetapi Anda sudah belajar banyak sekarang! Dengan teknik khusus Anda akan menguasai ini juga.',
        boxLabel: 'Teknik Khusus:',
        bullets: [
          'Tabel 9 - Trik Jari: Angkat kedua tangan, turunkan jari dari angka yang Anda kalikan. Jari naik di kiri = puluhan, jari di kanan = satuan!',
          'Tabel 8: Kalikan dengan 10, lalu kurangi 2 kali (8×7 = 10×7 - 2×7 = 70-14 = 56)',
          'Tabel 7: Untuk yang rumit gunakan tabel 5 (7×6 = 5×6 + 2×6 = 30+12 = 42)',
        ],
      },
      {
        title: 'Berlatih Terus-menerus 💪',
        body: 'Untuk tidak lupa semua yang sudah Anda pelajari, berlatihlah sedikit setiap hari. Yang terbaik adalah berlatih sedikit tetapi teratur!',
        boxLabel: 'Tips Latihan Harian:',
        bullets: [
          'Belajar 10-15 menit setiap hari (tidak banyak, tetapi teratur!)',
          'Latihan dengan bermain - sangat menyenangkan!',
          'Adakan kompetisi dengan keluarga Anda',
          'Lihat perkalian di kehidupan nyata? Hitung! (misal: "3 kotak, 5 cokelat per kotak, berapa total?")',
        ],
      },
    ],

    visualLearningHeading: 'Pembelajaran Visual - Pahami dengan Gambar 🎨',
    visualLearningIntro: 'Memvisualisasikan perkalian dalam pikiran Anda membuat pembelajaran lebih mudah! Berikut adalah beberapa teknik visual:',
    arraysTitle: 'Susunan Array',
    arraysExample: 'Contoh 4 × 3 = 12:',
    arraysCaption: '4 kolom × 3 baris = 12',
    numberLineTitle: 'Lompatan pada Garis Bilangan',
    numberLineExample: '3 × 4: lompatan 4 (0→4→8→12)',
    numberLineCaption: '3 langkah, setiap langkah 4 satuan',
    skipCountingTitle: 'Menghitung Lompat',
    skipCountingExample: 'Hitung dengan 5: 5, 10, 15, 20, 25...',
    skipCountingTip: 'Jika Anda menghafal angka-angka ini, tabel 5 sangat mudah!',
    patternsTitle: 'Perhatikan Pola',
    patternsIntro: 'Rahasia tabel 9:',
    patternsNote: 'Digit selalu berjumlah 9!',

    practiceTipsHeading: 'Tips Berlatih 🎯',
    practiceTipsCards: [
      { emoji: '🎮', title: 'Bermain Game', body: 'Latihan dengan permainan yang menyenangkan di situs ini. Belajar sambil bermain jauh lebih menyenangkan!', linkLabel: 'Jelajahi Permainan →' },
      { emoji: '📝', title: 'Ikuti Tes', body: 'Gunakan kartu flash atau minta seseorang untuk menguji Anda. Menguji diri sendiri mempercepat pembelajaran Anda!' },
      { emoji: '🎵', title: 'Lagu dan Ritme', body: 'Ubah tabel perkalian menjadi lagu! Lebih mudah mengingat dengan musik.' },
      { emoji: '🏆', title: 'Beri Hadiah pada Diri Sendiri', body: 'Ketika Anda mempelajari tabel perkalian, beri hadiah pada diri sendiri! Kumpulkan stiker atau manjakan diri dengan sesuatu yang kecil.' },
    ],

    progressHeading: 'Lacak Kemajuan Anda 📊',
    progressIntro: 'Melihat seberapa banyak kemajuan Anda memotivasi Anda! Berikut adalah metode pelacakan:',
    progressCards: [
      { title: '✅ Daftar Periksa Tabel Perkalian', body: 'Tulis tabel perkalian 1-10 di kertas. Setiap kali Anda mempelajari satu, beri tanda centang besar! Ketika semua tanda centang selesai, Anda adalah pahlawan tabel perkalian! 🌟' },
      { title: '📈 Grafik Kemajuan', body: 'Catat berapa banyak pertanyaan yang Anda jawab dengan benar setiap minggu. Buat grafik dan lihat kemajuan Anda. Setiap minggu Anda semakin baik!' },
      { title: '⭐ Sistem Bintang', body: 'Untuk setiap jawaban yang benar, gambar bintang. Ketika Anda mencapai 100 bintang, beri diri Anda hadiah istimewa!' },
    ],

    motivationHeading: 'Motivasi dan Rahasia Sukses 💫',
    motivationColumn1: [
      { emoji: '🌟', title: 'Bersabar', body: 'Semua butuh waktu. Anda bisa melakukannya, praktikkan saja!' },
      { emoji: '💪', title: 'Kesalahan itu Normal', body: 'Jangan merasa buruk ketika Anda membuat kesalahan, itu bagian dari pembelajaran!' },
      { emoji: '🎯', title: 'Tetapkan Tujuan Kecil', body: 'Satu tabel perkalian per hari sudah cukup, jangan terburu-buru!' },
    ],
    motivationColumn2: [
      { emoji: '🤝', title: 'Minta Bantuan', body: 'Jika ada sesuatu yang tidak Anda mengerti, tanya keluarga atau guru Anda!' },
      { emoji: '🎉', title: 'Rayakan Pencapaian Anda', body: 'Setiap pencapaian kecil penting, hargai diri Anda sendiri!' },
      { emoji: '😊', title: 'Bersenang-senanglah!', body: 'Belajar harus menyenangkan, coba permainannya!' },
    ],

    quickTricksHeading: 'Panduan Trik Cepat 🔑',
    quickTricksCards: [
      { title: 'Kalikan dengan 0', body: 'Semuanya nol! 0×1000=0' },
      { title: 'Kalikan dengan 1', body: 'Angka tetap sama! 1×7=7' },
      { title: 'Kalikan dengan 2', body: 'Gandakan angka! 2×6=12' },
      { title: 'Kalikan dengan 5', body: 'Hasilnya berakhiran 0 atau 5!' },
      { title: 'Kalikan dengan 9', body: 'Digitnya berjumlah 9! Trik jari!' },
      { title: 'Kalikan dengan 10', body: 'Tambahkan 0! 10×8=80' },
    ],

    ctaHeading: 'Saatnya Memulai! 🚀',
    ctaBody: 'Sekarang Anda siap! Ingat, setiap pahlawan matematika hebat dimulai dengan langkah kecil. Anda juga bisa melakukannya! 💪✨',
    ctaButton1Label: 'Mulai Sekarang',
    ctaButton2Label: 'Kembali ke Beranda',
    ctaTipLabel: 'Tips:',
    ctaTipBody: 'Belajar 10-15 menit per hari jauh lebih efektif daripada belajar 1 jam yang membosankan!',
  },
}
