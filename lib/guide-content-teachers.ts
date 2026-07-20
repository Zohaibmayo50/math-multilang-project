import type { Locale } from './i18n-config'

// Data for the "teachers" guide-page type (12 locales), extracted verbatim from the
// original app/_guide-components/{slug}/page.tsx files.
//
// Structural notes shared across locales (confirmed while reading all 12 files):
// - Two Hero visual families exist in the originals: a centered hero with no icon
//   (es/de/cs/uk/pl/en/pt/fi/id) and a left-aligned banner hero with a star icon +
//   caption line (tr/fr/sv). `hero.caption` is only populated for the latter family;
//   the component renders one canonical visual treatment and null-gates the caption row.
// - Teaching Strategies: 8 locales (es/de/cs/uk/pl/en/pt/fi/id) use ONE heading with
//   4 strategy cards (`teachingStrategies`). tr/fr/sv instead split this into TWO
//   headings — a short "pedagogical approach" intro (3 cards) followed by a
//   "teaching methods" list (3-4 heterogeneous method entries) — captured in
//   `teachingStrategiesSplit`. Exactly one of the two is populated per locale.
// - Classroom Activities cards come in two formats: "level/time" (es/de/cs/uk/pl/en/
//   pt/fi/fr/id — a level + time meta line) and "numbered badge + goal" (tr/sv — a
//   gradient number badge and a single "Hedef/Mål" goal box instead of level/time).
// - Differentiated Instruction: always 3 tiers. Baseline locales render the tier
//   emoji as a separate icon span; fr/id embed the emoji directly in the heading text
//   (preserved verbatim in `title`); tr/sv use no emoji at all for this section.
// - Assessment Strategies: always Formative + Summative, optionally a distinct
//   Progress Tracking block. Item shape varies: multi-item card lists (baseline,
//   tr, sv, id) vs. a single descriptive paragraph per category (fr). Progress
//   Tracking itself renders as a 3-card grid (baseline), a bullet list (tr/sv), or a
//   single paragraph folded into the third assessment category (fr); fi and id have
//   no distinct Progress Tracking block at all.
// - Common Misconceptions: baseline (es/de/cs/uk/pl/en/pt) uses 5 static cards with a
//   "why it's problematic" / "how to fix it" pair. tr/sv instead use a 3-item
//   <details> accordion with a "misconception / reality / solution" triple. Both are
//   folded into the single `commonMisconceptions` field per the product decision,
//   distinguished by `format`. fr and fi have no misconceptions section.
// - id has two sections found in no other locale: `technologyIntegration` (two
//   columns of tech-integration ideas plus a "use this site" callout box) and
//   `unitPlanningGuide` (a 6-8 week suggested unit plan). id's misconceptions-
//   equivalent, "Tantangan Umum Siswa dan Solusi", is structurally an accordion
//   (question + labeled solution + optional extra paragraph + tip) and is kept in
//   its own field `commonChallengesAccordion` rather than merged into
//   `commonMisconceptions`, since its shape doesn't match either format above.
// - CTA button hrefs are stored verbatim as literal strings (not re-derived via
//   getLocalizedPath) because targets are inconsistent across locales — most point
//   at the 1-10 range or topic home, but fi points at the student guide + the "1"
//   number page, and id's second button points at the parents guide.
//
// DATA QUALITY FLAGS (preserved verbatim, NOT fixed, per the verbatim-extraction
// requirement — see final report for details):
// - de: the "Common Misconceptions" heading is stored in the source file as the
//   mojibake string "HÃ¤ufige Fehlvorstellungen" (should read "Häufige
//   Fehlvorstellungen"). Preserved exactly as found.
// - pt (para-professores): several passages are contaminated with Spanish instead
//   of Portuguese — all 4 bullets of Teaching Strategy 4, one bullet of the
//   Intermediate Learners list, the entire Summative Assessment heading + 4 items,
//   and the entire Progress Tracking heading + 3 items. This mirrors the same
//   known bug already flagged in lib/guide-content-students.ts for the students
//   guide's pt content — apparent copy/paste from the es source. Preserved exactly
//   as found, not translated or "fixed".

export interface TeacherHero {
  title: string
  subtitle: string
  /** Only present for tr/fr/sv (the split-teaching-strategies locales). */
  caption?: string
}

export interface StrategyItem {
  emoji: string
  title: string
  body: string
  bullets: string[]
}

export interface SplitApproachCard {
  title: string
  body: string
}

export interface SplitMethodItem {
  emoji: string
  title: string
  body: string
  applicationLabel?: string
  applicationBullets?: string[]
  exampleLabel?: string
  exampleIntro?: string
  exampleVisualCaption?: string
  exampleLines?: string[]
  tipLabel?: string
  tipBody?: string
}

export interface TeachingStrategiesSplit {
  heading1: string
  intro1: string
  cards1: SplitApproachCard[]
  heading2: string
  methods2: SplitMethodItem[]
}

export interface ActivityCard {
  /** "level/time" format (most locales). */
  emoji?: string
  level?: string
  time?: string
  /** "numbered badge + goal" format (tr/sv). */
  number?: number
  goalLabel?: string
  goalBody?: string
  title: string
  body: string
}

export interface ClassroomActivities {
  heading: string
  levelLabel?: string
  timeLabel?: string
  cards: ActivityCard[]
}

export interface DifferentiatedLevel {
  /** Separate icon span — only baseline locales render this apart from the title. */
  emoji?: string
  title: string
  items: string[]
}

export interface DifferentiatedInstruction {
  heading: string
  intro?: string
  levels: DifferentiatedLevel[]
}

export interface AssessmentItem {
  title: string
  body: string
}

export interface ProgressTracking {
  heading: string
  intro?: string
  items?: AssessmentItem[]
  bullets?: string[]
  body?: string
}

export interface AssessmentStrategies {
  heading: string
  formativeHeading: string
  formativeIntro?: string
  formativeBody?: string
  formativeItems?: AssessmentItem[]
  summativeHeading: string
  summativeIntro?: string
  summativeBody?: string
  summativeItems?: AssessmentItem[]
  progressTracking?: ProgressTracking
}

export interface MisconceptionItem {
  format: 'card' | 'accordion'
  title: string
  whyLabel?: string
  whyBody?: string
  fixLabel?: string
  fixBody?: string
  misconceptionLabel?: string
  misconceptionBody?: string
  realityLabel?: string
  realityBody?: string
  solutionLabel?: string
  solutionBody?: string
}

export interface CommonMisconceptions {
  heading: string
  intro?: string
  items: MisconceptionItem[]
}

export interface AccordionChallenge {
  question: string
  solutionLabel: string
  solutionBody: string
  extraBody?: string
  tip?: string
}

export interface CommonChallengesAccordion {
  heading: string
  items: AccordionChallenge[]
}

export interface SequenceStep {
  number: number
  body: string
}

export interface TipsAndBestPractices {
  heading: string
  successHeading?: string
  successTips?: string[]
  sequenceHeading?: string
  sequenceSteps?: SequenceStep[]
  /** fi's single-column variant. */
  singleColumnItems?: { emoji: string; title: string; body: string }[]
}

export interface ResourceCard {
  emoji: string
  title: string
  body: string
  href?: string
}

export interface ResourceColumn {
  heading: string
  items: string[]
}

export interface AdditionalResources {
  heading: string
  cards?: ResourceCard[]
  columns?: ResourceColumn[]
}

export interface TechListItem {
  label: string
  body: string
}

export interface TechColumn {
  heading: string
  icon: string
  items: TechListItem[]
}

export interface TechUseSiteBox {
  heading: string
  intro: string
  checklist: string[]
  buttonLabel: string
  buttonHref: string
}

export interface TechnologyIntegration {
  heading: string
  columns: TechColumn[]
  useSiteBox: TechUseSiteBox
}

export interface PlanWeekBlock {
  heading: string
  items: string[]
}

export interface UnitPlanningGuide {
  heading: string
  subheading: string
  weeks: PlanWeekBlock[]
  tipsHeading: string
  tips: string[]
}

export interface TeacherCTA {
  heading: string
  body: string
  button1Label: string
  button1Href: string
  button2Label?: string
  button2Href?: string
  tipLabel?: string
  tipBody?: string
}

export interface TeachersContent {
  hero: TeacherHero
  teachingStrategiesHeading?: string
  teachingStrategies?: StrategyItem[]
  teachingStrategiesSplit?: TeachingStrategiesSplit
  classroomActivities: ClassroomActivities
  differentiatedInstruction: DifferentiatedInstruction
  assessment: AssessmentStrategies
  commonMisconceptions?: CommonMisconceptions
  commonChallengesAccordion?: CommonChallengesAccordion
  tipsAndBestPractices?: TipsAndBestPractices
  additionalResources?: AdditionalResources
  technologyIntegration?: TechnologyIntegration
  unitPlanningGuide?: UnitPlanningGuide
  cta: TeacherCTA
}

export const teachersContent: Record<Locale, TeachersContent> = {
  tr: {
    hero: {
      title: 'Öğretmenler İçin Çarpım Tablosu Rehberi',
      subtitle: 'Sınıfınızda çarpım tablosu öğretimi için profesyonel kaynaklar, pedagojik stratejiler ve aktivite önerileri.',
      caption: 'Etkili öğretim için profesyonel destek',
    },
    teachingStrategiesSplit: {
      heading1: 'Pedagojik Yaklaşım',
      intro1: 'Çarpım tablosu öğretimi, sadece ezber değil, kavramsal anlama üzerine inşa edilmelidir. Öğrencilerin çarpmanın anlamını anlaması ve farklı stratejiler geliştirmesi önemlidir.',
      cards1: [
        { title: 'Somuttan Soyuta', body: 'Fiziksel materyallerle başlayıp, görsel temsiller üzerinden soyut sayısal işlemlere geçiş.' },
        { title: 'Strateji Geliştirme', body: 'Öğrencilere birden fazla çözüm yolu göstererek esnek düşünme becerilerini geliştirme.' },
        { title: 'Anlamlı Öğrenme', body: 'Çarpım tablosunu gerçek yaşam problemleriyle ilişkilendirme ve bağlam oluşturma.' },
      ],
      heading2: 'Öğretim Yöntemleri',
      methods2: [
        {
          emoji: '📦',
          title: 'Diziler ve Gruplamalar',
          body: 'Çarpmanın tekrarlı toplama olduğunu göstermek için nesneleri diziler halinde gruplandırın.',
          applicationLabel: 'Uygulama:',
          applicationBullets: [
            'Öğrencilerden 4 sıra × 6 öğrenci olacak şekilde oturmalarını isteyin',
            'Blokları veya sayaçları diziler halinde düzenleyin',
            'Tahtada nokta dizileri çizerek görselleştirin',
          ],
        },
        {
          emoji: '🔢',
          title: 'Alan Modeli (Area Model)',
          body: 'Dikdörtgen alanları kullanarak çarpımı görselleştirme.',
          exampleLabel: 'Örnek:',
          exampleIntro: '5 × 3 için:',
          exampleVisualCaption: '5 sütun × 3 satır = 15 birim kare',
        },
        {
          emoji: '➗',
          title: 'Parçalama Stratejisi',
          body: 'Karmaşık çarpımları daha basit parçalara ayırarak çözme.',
          exampleLabel: 'Örnek: 7 × 8',
          exampleLines: [
            'Yöntem 1: (5 × 8) + (2 × 8) = 40 + 16 = 56',
            'Yöntem 2: (7 × 5) + (7 × 3) = 35 + 21 = 56',
            'Yöntem 3: (7 × 10) - (7 × 2) = 70 - 14 = 56',
          ],
        },
        {
          emoji: '🔄',
          title: 'Değişme Özelliği (Commutative Property)',
          body: "Öğrencilere 3 × 4 ile 4 × 3'ün aynı olduğunu göstererek öğrenme yükünü yarıya indirin.",
          tipLabel: 'İpucu:',
          tipBody: 'Fiziksel bir materyali (örneğin kart dizisi) 90 derece çevirerek görsel olarak değişme özelliğini gösterin.',
        },
      ],
    },
    classroomActivities: {
      heading: 'Sınıf İçi Aktivite Önerileri',
      cards: [
        { number: 1, title: 'Çarpım Tablosu Bingo', body: 'Her öğrenciye 4×4 veya 5×5 bingo kartı verin. Çarpım sorularını sesli okuyun, öğrenciler sonucu kartlarında işaretlesin.', goalLabel: 'Hedef:', goalBody: 'Hızlı hatırlama, dikkat, eğlenceli pekiştirme' },
        { number: 2, title: 'Çarpım Köşeleri', body: 'Sınıfın dört köşesine farklı sayılar (örneğin 6, 7, 8, 9) atayın. Bir çarpan söyleyin, öğrenciler doğru sonucun olduğu köşeye koşsun.', goalLabel: 'Hedef:', goalBody: 'Kinetik öğrenme, hızlı düşünme, enerji atma' },
        { number: 3, title: 'Çarpım Domino', body: 'Her kartın bir yüzünde çarpım sorusu, diğer yüzünde başka bir sorunun cevabı olsun. Öğrenciler domino gibi eşleştirerek zincir oluştursun.', goalLabel: 'Hedef:', goalBody: 'Problem çözme, işbirliği, mantıksal düşünme' },
        { number: 4, title: 'Gerçek Hayat Problemleri', body: 'Öğrencilerden kendi hayatlarından çarpım problemi oluşturmalarını isteyin (örneğin: sınıfta 6 sıra, her sırada 4 kitap).', goalLabel: 'Hedef:', goalBody: 'Bağlam oluşturma, yaratıcılık, anlamlı öğrenme' },
        { number: 5, title: 'Çarpım Sanatı', body: 'Kareli kağıtta dikdörtgenler çizerek çarpım sonuçlarını görselleştirin. Farklı renklerle desenlere dönüştürün.', goalLabel: 'Hedef:', goalBody: 'Görsel-uzamsal zeka, sanatla entegrasyon' },
        { number: 6, title: 'Çarpım Zinciri Yarışması', body: 'Gruplar halinde, her öğrenci bir çarpım sorusu çözer ve sonucunu bir sonraki arkadaşına verir. En hızlı bitiren grup kazanır.', goalLabel: 'Hedef:', goalBody: 'Takım çalışması, hız, motivasyon' },
      ],
    },
    differentiatedInstruction: {
      heading: 'Farklılaştırılmış Öğretim',
      intro: 'Her öğrencinin öğrenme hızı ve stili farklıdır. Sınıfınızda farklı seviyelerdeki öğrencilere uygun stratejiler geliştirin.',
      levels: [
        { title: 'Zorlan öğrenciler', items: ['Daha fazla somut materyal kullanın', 'Daha küçük gruplar halinde öğretin (2-5 arası)', 'Çarpım tablosu çizelgeleri sağlayın', 'Tekrarlı pratik ve pekiştirme yapın', 'Birebim veya küçük grup desteği verin'] },
        { title: 'Seviyesinde öğrenciler', items: ['Dengeli somut ve soyut materyal kullanımı', 'İşbirlikçi aktiviteler', 'Oyunlar ve yarışmalar', 'Farklı strateji öğretimi', 'Düzenli değerlendirme ve geri bildirim'] },
        { title: 'İleri seviye öğrenciler', items: ['Karmaşık problemler ve uzantılar', "10'dan büyük sayılarla çarpım (11-20)", 'Matematiksel örüntüleri keşfetme', 'Liderlik rolleri (akran öğretimi)', 'Proje tabanlı öğrenme'] },
      ],
    },
    assessment: {
      heading: 'Ölçme ve Değerlendirme Araçları',
      formativeHeading: 'Biçimlendirici Değerlendirme',
      formativeIntro: 'Öğrenme sürecinde öğrencilerin ilerlemesini izlemek ve öğretimi ayarlamak için:',
      formativeItems: [
        { title: 'Çıkış Kartları', body: 'Ders sonunda 3-5 çarpım sorusu içeren kart. Anlık anlama kontrolü sağlar.' },
        { title: 'Beyaz Tahta Cevapları', body: 'Tüm öğrenciler aynı anda cevaplarını mini tahtalarında gösterir. Sınıf geneli izleme.' },
        { title: 'Gözlem Notları', body: 'Aktiviteler sırasında öğrencilerin stratejilerini ve zorlandıkları noktaları kaydedin.' },
        { title: 'Akran Değerlendirmesi', body: 'Öğrenciler birbirlerinin çalışmalarını kontrol eder, öğrenmeyi pekiştirir.' },
      ],
      summativeHeading: 'Düzey Belirleme Değerlendirmesi',
      summativeIntro: 'Belirli periyotlarda öğrenme çıktılarını değerlendirmek için:',
      summativeItems: [
        { title: 'Haftalık Sınavlar', body: 'Her hafta öğrenilen tabloları içeren 20 soruluk kısa test.' },
        { title: 'Zaman Testleri', body: '1-2 dakika içinde tamamlanması gereken hızlı hatırlama testleri.' },
        { title: 'Problem Çözme Görevleri', body: 'Çarpım tablosunu gerçek hayat problemlerinde uygulama becerisini ölçme.' },
      ],
      progressTracking: {
        heading: 'İlerleme Takibi',
        intro: 'Her öğrenci için bireysel ilerleme grafiği tutun:',
        bullets: [
          'Hangi tablolarda ustalaştı, hangilerde zorlanıyor',
          'Zaman içinde gelişim trendi (doğruluk oranı ve hız)',
          'Kullandığı stratejiler ve tercih ettiği yöntemler',
        ],
      },
    },
    commonMisconceptions: {
      heading: 'Yaygın Kavram Yanılgıları ve Çözümleri',
      items: [
        {
          format: 'accordion',
          title: '"Çarpma her zaman büyütür"',
          misconceptionLabel: 'Yanılgı:',
          misconceptionBody: 'Öğrenciler çarpımın sonucunun her zaman çarpanlardan büyük olduğunu düşünür.',
          realityLabel: 'Gerçek:',
          realityBody: '1 ile çarpma sonucu değiştirmez, 0 ile çarpma sonucu sıfırlar.',
          solutionLabel: 'Çözüm:',
          solutionBody: '0×5=0 ve 1×7=7 gibi örneklerle bu özel durumları açıkça gösterin.',
        },
        {
          format: 'accordion',
          title: '"Çarpanların sırası önemli"',
          misconceptionLabel: 'Yanılgı:',
          misconceptionBody: "3×4 ile 4×3'ün farklı olduğunu düşünme.",
          realityLabel: 'Gerçek:',
          realityBody: 'Değişme özelliği gereği ikisi de aynı sonucu verir.',
          solutionLabel: 'Çözüm:',
          solutionBody: 'Dizi modellerini fiziksel olarak döndürerek görsel kanıt sağlayın.',
        },
        {
          format: 'accordion',
          title: '"Çarpım sadece ezber"',
          misconceptionLabel: 'Yanılgı:',
          misconceptionBody: 'Çarpım tablosunun sadece ezberlenmesi gereken bir liste olduğu düşüncesi.',
          realityLabel: 'Gerçek:',
          realityBody: 'Çarpım örüntüler, ilişkiler ve stratejiler içerir.',
          solutionLabel: 'Çözüm:',
          solutionBody: 'Parçalama, değişme özelliği gibi stratejiler öğreterek esnek düşünmeyi geliştirin.',
        },
      ],
    },
    additionalResources: {
      heading: 'Ek Kaynaklar ve Materyaller',
      columns: [
        { heading: 'Yazdırılabilir Materyaller', items: ['Çarpım tablosu çizelgeleri (1-10, 1-12)', 'Boş çarpım tablosu şablonları', 'Flash card setleri', 'Çalışma yaprakları (farklı seviyeler)'] },
        { heading: 'Dijital Araçlar', items: ['Bu web sitesindeki interaktif oyunlar', 'Online alıştırma platformları', 'Eğitici matematik oyunları', 'İlerleme takip uygulamaları'] },
      ],
    },
    cta: {
      heading: 'Sınıfınızda Kullanmaya Başlayın!',
      body: 'Bu platformu sınıfınızda kullanın. Öğrencilerinize etkili ve eğlenceli bir çarpım tablosu deneyimi sunun.',
      button1Label: 'Tablolara Göz Atın',
      button1Href: '/tr/carpim-tablosu/1-10',
      button2Label: 'Ana Sayfaya Dön',
      button2Href: '/tr/carpim-tablosu',
    },
  },
  es: {
    hero: {
      title: 'Guía de Tablas de Multiplicar para Profesores',
      subtitle: 'Estrategias efectivas y actividades de aula para enseñar las tablas de multiplicar. Recursos para que todos los estudiantes las dominen.',
    },
    teachingStrategiesHeading: 'Estrategias de Enseñanza Efectivas',
    teachingStrategies: [
      {
        emoji: '👁️',
        title: 'Visualización',
        body: 'Use representaciones visuales para ayudar a los estudiantes a comprender la multiplicación como grupos repetidos.',
        bullets: [
          'Arreglos rectangulares (ej: 3×4 como 3 filas de 4 objetos)',
          'Modelos de área usando papel cuadriculado',
          'Diagramas de saltos en la recta numérica',
          'Manipulativos concretos (bloques, fichas, cubos)',
        ],
      },
      {
        emoji: '🧩',
        title: 'Descomposición',
        body: 'Enseñe a los estudiantes a descomponer multiplicaciones difíciles en operaciones más simples.',
        bullets: [
          '7×6 = (5×6) + (2×6) = 30 + 12 = 42',
          '9×8 = (10×8) - (1×8) = 80 - 8 = 72',
          'Usar duplicación: 6×4 = 2×(3×4)',
          'Propiedad distributiva en acción',
        ],
      },
      {
        emoji: '🔢',
        title: 'Patrones',
        body: 'Ayude a los estudiantes a descubrir patrones. Estos facilitan el aprendizaje y la memorización.',
        bullets: [
          'Tabla del 2: todos los números pares',
          'Tabla del 5: terminan en 0 o 5',
          'Tabla del 9: suma de dígitos = 9, patrón descendente',
          'Propiedad conmutativa: 3×7 = 7×3',
        ],
      },
      {
        emoji: '🌍',
        title: 'Aplicaciones Reales',
        body: 'Conecte la multiplicación con situaciones cotidianas para dar significado y contexto al aprendizaje.',
        bullets: [
          'Problemas de compras y dinero',
          'Organización de objetos en filas y columnas',
          'Recetas de cocina y medidas',
          'Deportes, juegos y actividades grupales',
        ],
      },
    ],
    classroomActivities: {
      heading: 'Actividades para el Aula',
      levelLabel: 'Nivel:',
      timeLabel: 'Tiempo:',
      cards: [
        { emoji: '🎯', title: 'Bingo de Multiplicación', body: 'Los estudiantes crean tarjetas de bingo con productos. Llame multiplicaciones y los estudiantes marcan las respuestas.', level: 'Principiante a Intermedio', time: '15-20 minutos' },
        { emoji: '🏃', title: 'Carreras de Multiplicación', body: 'Equipos compiten respondiendo problemas de multiplicación en un formato de relevos en el pizarrón.', level: 'Todos los niveles', time: '10-15 minutos' },
        { emoji: '🎲', title: 'Dominó de Multiplicación', body: 'Fichas de dominó modificadas donde los estudiantes emparejan multiplicaciones con sus productos.', level: 'Intermedio', time: '20-30 minutos' },
        { emoji: '🎨', title: 'Arte con Arreglos', body: 'Los estudiantes crean diseños artísticos usando arreglos rectangulares y etiquetan las multiplicaciones correspondientes.', level: 'Principiante', time: '30-40 minutos' },
        { emoji: '🎪', title: 'Estaciones de Práctica', body: 'Configure estaciones rotativas con diferentes actividades: tarjetas didácticas, juegos digitales, problemas escritos, manipulativos.', level: 'Todos los niveles', time: '40-50 minutos' },
        { emoji: '📖', title: 'Historias de Multiplicación', body: 'Los estudiantes escriben e ilustran problemas de multiplicación basados en situaciones reales o imaginarias.', level: 'Intermedio a Avanzado', time: '30-45 minutos' },
      ],
    },
    differentiatedInstruction: {
      heading: 'Instrucción Diferenciada',
      levels: [
        { emoji: '🌱', title: 'Estudiantes Principiantes', items: ['Comenzar con tablas del 1, 2, 5 y 10', 'Usar muchos manipulativos concretos', 'Enfatizar suma repetida inicialmente', 'Proporcionar tablas de referencia', 'Práctica diaria breve (5-10 minutos)', 'Celebrar pequeños logros'] },
        { emoji: '📚', title: 'Estudiantes Intermedios', items: ['Introducir tablas del 3, 4, 6 y 7', 'Enseñar estrategias de descomposición', 'Practicar propiedad conmutativa', 'Juegos de velocidad moderada', 'Problemas de aplicación en contexto', 'Trabajo en parejas y grupos pequeños'] },
        { emoji: '🚀', title: 'Estudiantes Avanzados', items: ['Tablas del 8, 9, 11 y 12', 'Problemas de múltiples pasos', 'Conexión con división y fracciones', 'Desafíos de lógica matemática', 'Crear sus propios problemas', 'Tutorear a compañeros'] },
      ],
    },
    assessment: {
      heading: 'Estrategias de Evaluación',
      formativeHeading: 'Evaluación Formativa',
      formativeItems: [
        { title: 'Observación Diaria', body: 'Observe a los estudiantes durante la práctica, tome notas sobre estrategias usadas y errores comunes.' },
        { title: 'Mini Pruebas Rápidas', body: '1-2 minutos al inicio de la clase: 10 problemas para evaluar fluidez y retención.' },
        { title: 'Pizarras Individuales', body: 'Los estudiantes muestran respuestas simultáneamente, permitiendo verificación rápida de toda la clase.' },
        { title: 'Entrevistas Matemáticas', body: 'Conversaciones breves uno-a-uno para entender el razonamiento y estrategias del estudiante.' },
      ],
      summativeHeading: 'Evaluación Sumativa',
      summativeItems: [
        { title: 'Pruebas de Fluidez', body: 'Evaluaciones cronometradas para medir velocidad y precisión en rangos específicos de tablas.' },
        { title: 'Proyectos Aplicados', body: 'Los estudiantes resuelven problemas del mundo real que requieren multiplicación en varios contextos.' },
        { title: 'Portafolios', body: 'Colección de trabajo a lo largo del tiempo mostrando progreso y dominio creciente.' },
        { title: 'Autoevaluación', body: 'Los estudiantes rastrean su propio progreso, identifican tablas dominadas y establecen metas.' },
      ],
      progressTracking: {
        heading: 'Seguimiento del Progreso',
        items: [
          { title: 'Gráficas de Dominio', body: 'Los estudiantes colorean tablas dominadas en una cuadrícula visual de 12×12 para ver su progreso.' },
          { title: 'Registro de Tiempo', body: 'Rastrear mejoras en velocidad con gráficas que muestran tiempos decrecientes.' },
          { title: 'Insignias de Logro', body: 'Sistema de recompensas por dominar cada tabla, motivando el progreso continuo.' },
        ],
      },
    },
    commonMisconceptions: {
      heading: 'Errores Conceptuales Comunes',
      intro: 'Reconozca y aborde estos malentendidos frecuentes para asegurar una comprensión sólida de la multiplicación:',
      items: [
        { format: 'card', title: '"La multiplicación siempre hace los números más grandes"', whyLabel: 'Por qué es problemático:', whyBody: 'Los estudiantes se confunden al multiplicar por fracciones o decimales.', fixLabel: 'Cómo corregirlo:', fixBody: 'Mostrar ejemplos como 5 × 0.5 = 2.5 o 3 × 0 = 0. Explicar que multiplicar por números menores que 1 reduce el resultado.' },
        { format: 'card', title: '"El orden no importa en los problemas verbales"', whyLabel: 'Por qué es problemático:', whyBody: '3×4 = 4×3 matemáticamente. Pero el contexto puede variar: 3 grupos de 4 vs. 4 grupos de 3.', fixLabel: 'Cómo corregirlo:', fixBody: 'Discutir la propiedad conmutativa pero enfatizar la importancia de entender el contexto del problema.' },
        { format: 'card', title: '"Multiplicar es solo memorización"', whyLabel: 'Por qué es problemático:', whyBody: 'Los estudiantes pueden memorizar sin entender, dificultando la aplicación y retención.', fixLabel: 'Cómo corregirlo:', fixBody: 'Siempre enseñar conceptos antes de la memorización. Usar modelos visuales y estrategias de comprensión.' },
        { format: 'card', title: '"Los patrones siempre funcionan sin entenderlos"', whyLabel: 'Por qué es problemático:', whyBody: 'Los estudiantes aplican patrones mecánicamente sin comprender el "por qué" matemático.', fixLabel: 'Cómo corregirlo:', fixBody: 'Al enseñar patrones (ej: tabla del 9), siempre explicar por qué funcionan usando propiedades matemáticas.' },
        { format: 'card', title: '"Solo hay una manera correcta de resolver"', whyLabel: 'Por qué es problemático:', whyBody: 'Limita el pensamiento creativo y la flexibilidad numérica.', fixLabel: 'Cómo corregirlo:', fixBody: 'Celebrar múltiples estrategias. Pedir que compartan métodos distintos. Discutir cuándo usar cada uno.' },
      ],
    },
    tipsAndBestPractices: {
      heading: 'Consejos y Mejores Prácticas',
      successHeading: 'Consejos para el Éxito',
      successTips: [
        'Práctica corta y diaria es mejor que sesiones largas esporádicas',
        'Celebre el progreso, no solo la perfección',
        'Varíe los métodos de práctica para mantener el interés',
        'Conecte con otras áreas: arte, música, educación física',
        'Involucre a las familias con actividades para el hogar',
        'Use tecnología como complemento, no reemplazo',
      ],
      sequenceHeading: 'Secuencia Sugerida',
      sequenceSteps: [
        { number: 1, body: 'Tablas del 1, 2, 10, 5' },
        { number: 2, body: 'Propiedad conmutativa (reduce la carga)' },
        { number: 3, body: 'Tablas del 4 (duplicar el 2)' },
        { number: 4, body: 'Tabla del 9 (patrones especiales)' },
        { number: 5, body: 'Tablas del 3 y 6 (relación triple)' },
        { number: 6, body: 'Tablas del 7, 8 (más desafiantes)' },
        { number: 7, body: 'Tablas del 11, 12 (patrones avanzados)' },
      ],
    },
    additionalResources: {
      heading: 'Recursos Adicionales',
      cards: [
        { emoji: '📘', title: 'Tablas 1-10', body: 'Recursos básicos', href: '/es/tablas-de-multiplicar/1-10' },
        { emoji: '📗', title: 'Tablas 11-20', body: 'Nivel intermedio', href: '/es/tablas-de-multiplicar/11-20' },
        { emoji: '👨‍🎓', title: 'Para Estudiantes', body: 'Guía de aprendizaje', href: '/es/tablas-de-multiplicar/para-estudiantes' },
        { emoji: '👨‍👩‍👧', title: 'Para Padres', body: 'Apoyo en casa', href: '/es/tablas-de-multiplicar/para-padres' },
      ],
    },
    cta: {
      heading: '¿Necesita Más Ayuda?',
      body: 'Explore nuestras tablas individuales para recursos específicos, ejercicios descargables y actividades interactivas.',
      button1Label: 'Ver Todas las Tablas',
      button1Href: '/es/tablas-de-multiplicar',
    },
  },
  de: {
    hero: {
      title: 'Einmaleins-Leitfaden für Lehrer',
      subtitle: 'Effektive Strategien, Klassenzimmeraktivitäten und Ressourcen zum Unterrichten des Einmaleins, damit alle Schüler es meistern können.',
    },
    teachingStrategiesHeading: 'Effektive Unterrichtsstrategien',
    teachingStrategies: [
      {
        emoji: '👁️',
        title: 'Visualisierung',
        body: 'Verwenden Sie visuelle Darstellungen, um Schülern zu helfen, die Multiplikation als wiederholte Gruppen zu verstehen.',
        bullets: [
          'Rechteckige Anordnungen (z.B.: 3×4 als 3 Reihen von 4 Objekten)',
          'Flächenmodelle mit Karopapier',
          'Sprungdiagramme auf dem Zahlenstrahl',
          'Konkrete Manipulativa (Blöcke, Chips, Würfel)',
        ],
      },
      {
        emoji: '🧩',
        title: 'Zerlegung',
        body: 'Lehren Sie Schüler, schwierige Multiplikationen in einfachere Operationen zu zerlegen.',
        bullets: [
          '7×6 = (5×6) + (2×6) = 30 + 12 = 42',
          '9×8 = (10×8) - (1×8) = 80 - 8 = 72',
          'Verdopplung verwenden: 6×4 = 2×(3×4)',
          'Distributiveigenschaft in Aktion',
        ],
      },
      {
        emoji: '🔢',
        title: 'Muster',
        body: 'Helfen Sie Schülern, Muster zu entdecken und zu nutzen, um das Lernen und Auswendiglernen zu erleichtern.',
        bullets: [
          '2er-Reihe: alle geraden Zahlen',
          '5er-Reihe: enden auf 0 oder 5',
          '9er-Reihe: Quersumme = 9, absteigendes Muster',
          'Kommutativeigenschaft: 3×7 = 7×3',
        ],
      },
      {
        emoji: '🌍',
        title: 'Reale Anwendungen',
        body: 'Verknüpfen Sie die Multiplikation mit alltäglichen Situationen, um dem Lernen Bedeutung und Kontext zu geben.',
        bullets: [
          'Einkaufs- und Geldprobleme',
          'Anordnung von Objekten in Reihen und Spalten',
          'Kochrezepte und Messungen',
          'Sport, Spiele und Gruppenaktivitäten',
        ],
      },
    ],
    classroomActivities: {
      heading: 'Aktivitäten für das Klassenzimmer',
      levelLabel: 'Niveau:',
      timeLabel: 'Zeit:',
      cards: [
        { emoji: '🎯', title: 'Einmaleins-Bingo', body: 'Schüler erstellen Bingo-Karten mit Produkten. Rufen Sie Multiplikationen auf und Schüler markieren die Antworten.', level: 'Anfänger bis Fortgeschrittene', time: '15-20 Minuten' },
        { emoji: '🏃', title: 'Einmaleins-Rennen', body: 'Teams treten gegeneinander an, indem sie Multiplikationsaufgaben in einem Staffelformat an der Tafel lösen.', level: 'Alle Niveaus', time: '10-15 Minuten' },
        { emoji: '🎲', title: 'Einmaleins-Domino', body: 'Modifizierte Domino-Steine, bei denen Schüler Multiplikationen mit ihren Produkten zusammenbringen.', level: 'Fortgeschrittene', time: '20-30 Minuten' },
        { emoji: '🎨', title: 'Kunst mit Anordnungen', body: 'Schüler erstellen künstlerische Designs mit rechteckigen Anordnungen und beschriften die entsprechenden Multiplikationen.', level: 'Anfänger', time: '30-40 Minuten' },
        { emoji: '🎪', title: 'Übungsstationen', body: 'Richten Sie rotierende Stationen mit verschiedenen Aktivitäten ein: Lernkarten, digitale Spiele, schriftliche Aufgaben, Manipulativa.', level: 'Alle Niveaus', time: '40-50 Minuten' },
        { emoji: '📖', title: 'Einmaleins-Geschichten', body: 'Schüler schreiben und illustrieren Multiplikationsaufgaben basierend auf realen oder imaginären Situationen.', level: 'Fortgeschrittene bis Experten', time: '30-45 Minuten' },
      ],
    },
    differentiatedInstruction: {
      heading: 'Differenzierter Unterricht',
      levels: [
        { emoji: '🌱', title: 'Anfänger-Schüler', items: ['Mit den Reihen 1, 2, 5 und 10 beginnen', 'Viele konkrete Manipulativa verwenden', 'Zunächst wiederholte Addition betonen', 'Referenztabellen bereitstellen', 'Kurze tägliche Übung (5-10 Minuten)', 'Kleine Erfolge feiern'] },
        { emoji: '📚', title: 'Fortgeschrittene Schüler', items: ['Reihen 3, 4, 6 und 7 einführen', 'Zerlegungsstrategien lehren', 'Kommutativeigenschaft üben', 'Geschwindigkeitsspiele mit moderatem Tempo', 'Kontextbezogene Anwendungsprobleme', 'Partner- und Kleingruppenarbeit'] },
        { emoji: '🚀', title: 'Experten-Schüler', items: ['Reihen 8, 9, 11 und 12', 'Mehrschrittige Probleme', 'Verknüpfung mit Division und Brüchen', 'Mathematische Logik-Herausforderungen', 'Eigene Probleme erstellen', 'Mitschüler unterrichten'] },
      ],
    },
    assessment: {
      heading: 'Bewertungsstrategien',
      formativeHeading: 'Formative Bewertung',
      formativeItems: [
        { title: 'Tägliche Beobachtung', body: 'Beobachten Sie Schüler während der Übung, machen Sie Notizen über verwendete Strategien und häufige Fehler.' },
        { title: 'Kurze Mini-Tests', body: '1-2 Minuten zu Beginn des Unterrichts: 10 Aufgaben zur Bewertung von Flüssigkeit und Merkfähigkeit.' },
        { title: 'Einzeltafeln', body: 'Schüler zeigen gleichzeitig Antworten, was eine schnelle Überprüfung der ganzen Klasse ermöglicht.' },
        { title: 'Mathematik-Interviews', body: 'Kurze Einzelgespräche, um das Denken und die Strategien der Schüler zu verstehen.' },
      ],
      summativeHeading: 'Summative Bewertung',
      summativeItems: [
        { title: 'Flüssigkeitstests', body: 'Zeitlich begrenzte Tests zur Messung von Geschwindigkeit und Genauigkeit bei bestimmten Einmaleins-Reihen.' },
        { title: 'Angewandte Projekte', body: 'Schüler lösen reale Probleme, die Multiplikation in verschiedenen Kontexten erfordern.' },
        { title: 'Portfolios', body: 'Sammlung von Arbeiten im Laufe der Zeit, die Fortschritt und wachsende Beherrschung zeigen.' },
        { title: 'Selbstbewertung', body: 'Schüler verfolgen ihren eigenen Fortschritt, identifizieren beherrschte Reihen und setzen Ziele.' },
      ],
      progressTracking: {
        heading: 'Fortschrittsverfolgung',
        items: [
          { title: 'Beherrschungsdiagramme', body: 'Schüler färben beherrschte Reihen in einem visuellen 12×12-Raster ein, um ihren Fortschritt zu sehen.' },
          { title: 'Zeiterfassung', body: 'Verbesserungen bei der Geschwindigkeit mit Diagrammen verfolgen, die abnehmende Zeiten zeigen.' },
          { title: 'Erfolgsabzeichen', body: 'Belohnungssystem für die Beherrschung jeder Reihe, das kontinuierlichen Fortschritt motiviert.' },
        ],
      },
    },
    commonMisconceptions: {
      heading: 'HÃ¤ufige Fehlvorstellungen',
      intro: 'Erkennen und adressieren Sie diese häufigen Missverständnisse, um ein solides Verständnis der Multiplikation sicherzustellen:',
      items: [
        { format: 'card', title: '"Multiplikation macht Zahlen immer größer"', whyLabel: 'Warum das problematisch ist:', whyBody: 'Schüler werden verwirrt, wenn sie mit Brüchen oder Dezimalzahlen multiplizieren.', fixLabel: 'So korrigieren Sie es:', fixBody: 'Zeigen Sie Beispiele wie 5 × 0,5 = 2,5 oder 3 × 0 = 0. Erklären Sie, dass Multiplikation mit Zahlen kleiner als 1 das Ergebnis verkleinert.' },
        { format: 'card', title: '"Die Reihenfolge spielt bei Textaufgaben keine Rolle"', whyLabel: 'Warum das problematisch ist:', whyBody: 'Obwohl 3×4 = 4×3 ist, kann die kontextuelle Bedeutung unterschiedlich sein (3 Gruppen von 4 vs. 4 Gruppen von 3).', fixLabel: 'So korrigieren Sie es:', fixBody: 'Besprechen Sie die Kommutativeigenschaft, betonen Sie aber die Wichtigkeit, den Kontext des Problems zu verstehen.' },
        { format: 'card', title: '"Multiplizieren ist nur Auswendiglernen"', whyLabel: 'Warum das problematisch ist:', whyBody: 'Schüler können auswendig lernen ohne zu verstehen, was die Anwendung und Merkfähigkeit erschwert.', fixLabel: 'So korrigieren Sie es:', fixBody: 'Immer Konzepte vor dem Auswendiglernen lehren. Visuelle Modelle und Verständnisstrategien verwenden.' },
        { format: 'card', title: '"Muster funktionieren immer ohne sie zu verstehen"', whyLabel: 'Warum das problematisch ist:', whyBody: 'Schüler wenden Muster mechanisch an, ohne das mathematische "Warum" zu verstehen.', fixLabel: 'So korrigieren Sie es:', fixBody: 'Beim Lehren von Mustern (z.B. 9er-Reihe) immer erklären, warum sie funktionieren, unter Verwendung mathematischer Eigenschaften.' },
        { format: 'card', title: '"Es gibt nur einen richtigen Lösungsweg"', whyLabel: 'Warum das problematisch ist:', whyBody: 'Begrenzt kreatives Denken und numerische Flexibilität.', fixLabel: 'So korrigieren Sie es:', fixBody: 'Feiern Sie mehrere Strategien. Bitten Sie Schüler, verschiedene Methoden zu teilen und diskutieren Sie, wann jede am nützlichsten ist.' },
      ],
    },
    tipsAndBestPractices: {
      heading: 'Tipps und Best Practices',
      successHeading: 'Tipps für Erfolg',
      successTips: [
        'Kurze tägliche Übung ist besser als lange sporadische Sitzungen',
        'Feiern Sie den Fortschritt, nicht nur die Perfektion',
        'Variieren Sie die Übungsmethoden, um das Interesse aufrechtzuerhalten',
        'Verknüpfen Sie mit anderen Bereichen: Kunst, Musik, Sport',
        'Beziehen Sie Familien mit Aktivitäten für zu Hause ein',
        'Nutzen Sie Technologie als Ergänzung, nicht als Ersatz',
      ],
      sequenceHeading: 'Empfohlene Reihenfolge',
      sequenceSteps: [
        { number: 1, body: 'Reihen 1, 2, 10, 5' },
        { number: 2, body: 'Kommutativeigenschaft (reduziert die Last)' },
        { number: 3, body: '4er-Reihe (2er verdoppeln)' },
        { number: 4, body: '9er-Reihe (spezielle Muster)' },
        { number: 5, body: '3er und 6er-Reihen (Dreifachbeziehung)' },
        { number: 6, body: '7er und 8er-Reihen (herausfordernder)' },
        { number: 7, body: '11er und 12er-Reihen (Experten-Muster)' },
      ],
    },
    additionalResources: {
      heading: 'Zusätzliche Ressourcen',
      cards: [
        { emoji: '📘', title: 'Reihen 1-10', body: 'Grundlegende Ressourcen', href: '/de/einmaleins/1-10' },
        { emoji: '📗', title: 'Reihen 11-20', body: 'Mittleres Niveau', href: '/de/einmaleins/11-20' },
        { emoji: '👨‍🎓', title: 'Für Schüler', body: 'Lernleitfaden', href: '/de/einmaleins/fuer-schueler' },
        { emoji: '👨‍👩‍👧', title: 'Für Eltern', body: 'Unterstützung zu Hause', href: '/de/einmaleins/fuer-eltern' },
      ],
    },
    cta: {
      heading: 'Benötigen Sie weitere Hilfe?',
      body: 'Erkunden Sie unsere einzelnen Reihen für spezifische Ressourcen, herunterladbare Übungen und interaktive Aktivitäten.',
      button1Label: 'Alle Reihen ansehen',
      button1Href: '/de/einmaleins',
    },
  },
  cs: {
    hero: {
      title: 'Průvodce Násobilkou Pro Učitele',
      subtitle: 'Efektivní strategie, aktivity ve třídě a zdroje pro výuku násobilky, aby ji všichni studenti zvládli.',
    },
    teachingStrategiesHeading: 'Efektivní Strategie Výuky',
    teachingStrategies: [
      {
        emoji: '👁️',
        title: 'Vizualizace',
        body: 'Používejte vizuální reprezentace, abyste pomohli studentům pochopit násobení jako opakované skupiny.',
        bullets: [
          'Obdélníková pole (např.: 3×4 jako 3 řady po 4 objektech)',
          'Plošné modely s čtverečkovaným papírem',
          'Skokové diagramy na číselné ose',
          'Konkrétní manipulativy (kostky, žetony, kostky)',
        ],
      },
      {
        emoji: '🧩',
        title: 'Dekompozice',
        body: 'Naučte studenty rozložit těžká násobení na jednodušší operace.',
        bullets: [
          '7×6 = (5×6) + (2×6) = 30 + 12 = 42',
          '9×8 = (10×8) - (1×8) = 80 - 8 = 72',
          'Použití zdvojení: 6×4 = 2×(3×4)',
          'Distributivní vlastnost v akci',
        ],
      },
      {
        emoji: '🔢',
        title: 'Vzory',
        body: 'Pomozte studentům objevit a využít vzory pro usnadnění učení a zapamatování.',
        bullets: [
          'Řada 2: všechna sudá čísla',
          'Řada 5: končí na 0 nebo 5',
          'Řada 9: ciferný součet = 9, klesající vzor',
          'Komutativní vlastnost: 3×7 = 7×3',
        ],
      },
      {
        emoji: '🌍',
        title: 'Reálné Aplikace',
        body: 'Propojte násobení s každodenními situacemi, abyste dali učení význam a kontext.',
        bullets: [
          'Nákupní a peněžní problémy',
          'Uspořádání objektů do řad a sloupců',
          'Kuchařské recepty a měření',
          'Sport, hry a skupinové aktivity',
        ],
      },
    ],
    classroomActivities: {
      heading: 'Aktivity Pro Třídu',
      levelLabel: 'Úroveň:',
      timeLabel: 'Čas:',
      cards: [
        { emoji: '🎯', title: 'Násobilkové Bingo', body: 'Studenti vytvoří bingo karty s produkty. Volejte násobení a studenti označují odpovědi.', level: 'Začátečník až Pokročilý', time: '15-20 minut' },
        { emoji: '🏃', title: 'Násobilkový Závod', body: 'Týmy soutěží proti sobě řešením násobilkových úkolů v štafetovém formátu na tabuli.', level: 'Všechny úrovně', time: '10-15 minut' },
        { emoji: '🎲', title: 'Násobilkové Domino', body: 'Upravené domino kameny, kde studenti spojují násobení s jejich produkty.', level: 'Pokročilý', time: '20-30 minut' },
        { emoji: '🎨', title: 'Umění s Poli', body: 'Studenti vytvářejí umělecké návrhy s obdélníkovými poli a označují odpovídající násobení.', level: 'Začátečník', time: '30-40 minut' },
        { emoji: '🎪', title: 'Cvičební Stanice', body: 'Zřiďte rotující stanice s různými aktivitami: kartičky, digitální hry, písemné úkoly, manipulativy.', level: 'Všechny úrovně', time: '40-50 minut' },
        { emoji: '📖', title: 'Násobilkové Příběhy', body: 'Studenti píší a ilustrují násobilkové úlohy založené na reálných nebo imaginárních situacích.', level: 'Pokročilý až Expert', time: '30-45 minut' },
      ],
    },
    differentiatedInstruction: {
      heading: 'Diferencovaná Výuka',
      levels: [
        { emoji: '🌱', title: 'Začátečníci', items: ['Začít s řadami 1, 2, 5 a 10', 'Používat mnoho konkrétních manipulativů', 'Nejprve zdůraznit opakované sčítání', 'Poskytnout referenční tabulky', 'Krátké denní cvičení (5-10 minut)', 'Slavit malé úspěchy'] },
        { emoji: '📚', title: 'Pokročilí Studenti', items: ['Zavést řady 3, 4, 6 a 7', 'Učit strategie dekompozice', 'Cvičit komutativní vlastnost', 'Rychlostní hry s mírným tempem', 'Kontextové aplikační problémy', 'Partnerská a malá skupinová práce'] },
        { emoji: '🚀', title: 'Expertní Studenti', items: ['Řady 8, 9, 11 a 12', 'Vícekrokové problémy', 'Propojení s dělením a zlomky', 'Matematické logické výzvy', 'Vytvářet vlastní problémy', 'Učit spolužáky'] },
      ],
    },
    assessment: {
      heading: 'Strategie Hodnocení',
      formativeHeading: 'Formativní Hodnocení',
      formativeItems: [
        { title: 'Denní Pozorování', body: 'Pozorujte studenty během cvičení, dělejte si poznámky o použitých strategiích a častých chybách.' },
        { title: 'Krátké Mini-Testy', body: '1-2 minuty na začátku výuky: 10 úkolů pro hodnocení plynulosti a zapamatování.' },
        { title: 'Individuální Tabule', body: 'Studenti zobrazují odpovědi současně, což umožňuje rychlou kontrolu celé třídy.' },
        { title: 'Matematické Rozhovory', body: 'Krátké individuální rozhovory pro pochopení myšlení a strategií studentů.' },
      ],
      summativeHeading: 'Sumativní Hodnocení',
      summativeItems: [
        { title: 'Testy Plynulosti', body: 'Časově omezené testy pro měření rychlosti a přesnosti u konkrétních násobilkových řad.' },
        { title: 'Aplikované Projekty', body: 'Studenti řeší reálné problémy, které vyžadují násobení v různých kontextech.' },
        { title: 'Portfolia', body: 'Sbírka prací v průběhu času, která ukazuje pokrok a rostoucí zvládnutí.' },
        { title: 'Sebehodnocení', body: 'Studenti sledují svůj vlastní pokrok, identifikují zvládnuté řady a stanovují cíle.' },
      ],
      progressTracking: {
        heading: 'Sledování Pokroku',
        items: [
          { title: 'Grafy Zvládnutí', body: 'Studenti vybarvují zvládnuté řady ve vizuálním 12×12 mřížce, aby viděli svůj pokrok.' },
          { title: 'Sledování Času', body: 'Sledujte zlepšení rychlosti pomocí grafů, které zobrazují klesající časy.' },
          { title: 'Úspěšné Odznaky', body: 'Odměňovací systém za zvládnutí každé řady, který motivuje kontinuální pokrok.' },
        ],
      },
    },
    commonMisconceptions: {
      heading: 'Časté Mylné Představy',
      intro: 'Rozpoznejte a řešte tyto časté nepochopení, abyste zajistili solidní porozumění násobení:',
      items: [
        { format: 'card', title: '"Násobení vždy dělá čísla větší"', whyLabel: 'Proč je to problematické:', whyBody: 'Studenti budou zmatení, když násobí zlomky nebo desetinná čísla.', fixLabel: 'Jak to opravit:', fixBody: 'Ukažte příklady jako 5 × 0,5 = 2,5 nebo 3 × 0 = 0. Vysvětlete, že násobení čísly menšími než 1 výsledek zmenšuje.' },
        { format: 'card', title: '"Pořadí v slovních úlohách nezáleží"', whyLabel: 'Proč je to problematické:', whyBody: 'Ačkoli 3×4 = 4×3, kontextový význam může být odlišný (3 skupiny po 4 vs. 4 skupiny po 3).', fixLabel: 'Jak to opravit:', fixBody: 'Diskutujte o komutativní vlastnosti, ale zdůrazněte důležitost pochopení kontextu problému.' },
        { format: 'card', title: '"Násobení je jen učení nazpaměť"', whyLabel: 'Proč je to problematické:', whyBody: 'Studenti mohou učit se nazpaměť bez pochopení, což ztěžuje aplikaci a zapamatování.', fixLabel: 'Jak to opravit:', fixBody: 'Vždy učte koncepty před učením nazpaměť. Používejte vizuální modely a strategie porozumění.' },
        { format: 'card', title: '"Vzory vždy fungují bez jejich pochopení"', whyLabel: 'Proč je to problematické:', whyBody: 'Studenti aplikují vzory mechanicky bez pochopení matematického "proč".', fixLabel: 'Jak to opravit:', fixBody: 'Při učení vzorů (např. řada 9) vždy vysvětlete, proč fungují, pomocí matematických vlastností.' },
        { format: 'card', title: '"Existuje pouze jeden správný způsob řešení"', whyLabel: 'Proč je to problematické:', whyBody: 'Omezuje kreativní myšlení a numerickou flexibilitu.', fixLabel: 'Jak to opravit:', fixBody: 'Slavte více strategií. Požádejte studenty, aby sdíleli různé metody a diskutujte, kdy je která nejužitečnější.' },
      ],
    },
    tipsAndBestPractices: {
      heading: 'Tipy a Osvědčené Postupy',
      successHeading: 'Tipy Pro Úspěch',
      successTips: [
        'Krátké denní cvičení je lepší než dlouhé sporadické lekce',
        'Slavte pokrok, nejen dokonalost',
        'Obměňujte metody cvičení pro udržení zájmu',
        'Propojte s jinými oblastmi: umění, hudba, sport',
        'Zapojte rodiny s domácími aktivitami',
        'Využijte technologie jako doplněk, ne náhradu',
      ],
      sequenceHeading: 'Doporučené Pořadí',
      sequenceSteps: [
        { number: 1, body: 'Řady 1, 2, 10, 5' },
        { number: 2, body: 'Komutativní vlastnost (snižuje zátěž)' },
        { number: 3, body: 'Řada 4 (zdvojit 2)' },
        { number: 4, body: 'Řada 9 (speciální vzory)' },
        { number: 5, body: 'Řady 3 a 6 (trojitý vztah)' },
        { number: 6, body: 'Řady 7 a 8 (náročnější)' },
        { number: 7, body: 'Řady 11 a 12 (expertní vzory)' },
      ],
    },
    additionalResources: {
      heading: 'Další Zdroje',
      cards: [
        { emoji: '📘', title: 'Řady 1-10', body: 'Základní zdroje', href: '/cs/nasobilka/1-10' },
        { emoji: '📗', title: 'Řady 11-20', body: 'Střední úroveň', href: '/cs/nasobilka/11-20' },
        { emoji: '👨‍🎓', title: 'Pro Studenty', body: 'Průvodce učením', href: '/cs/nasobilka/pro-studenty' },
        { emoji: '👨‍👩‍👧', title: 'Pro Rodiče', body: 'Podpora doma', href: '/cs/nasobilka/pro-rodice' },
      ],
    },
    cta: {
      heading: 'Potřebujete Další Pomoc?',
      body: 'Prozkoumejte naše jednotlivé řady pro specifické zdroje, ke stažení cvičení a interaktivní aktivity.',
      button1Label: 'Zobrazit Všechny Řady',
      button1Href: '/cs/nasobilka',
    },
  },
  uk: {
    hero: {
      title: 'Посібник з Таблиці Множення Для Вчителів',
      subtitle: 'Ефективні стратегії, активності в класі та ресурси для викладання таблиці множення, щоб усі учні впоралися.',
    },
    teachingStrategiesHeading: 'Ефективні Стратегії Викладання',
    teachingStrategies: [
      {
        emoji: '👁️',
        title: 'Візуалізація',
        body: 'Використовуйте візуальні представлення, щоб допомогти учням зрозуміти множення як повторювані групи.',
        bullets: [
          "Прямокутні поля (наприклад: 3×4 як 3 ряди по 4 об'єкти)",
          'Площинні моделі з клітинчастим папером',
          'Стрибкові діаграми на числовій прямій',
          'Конкретні маніпулятиви (кубики, жетони, фішки)',
        ],
      },
      {
        emoji: '🧩',
        title: 'Декомпозиція',
        body: 'Навчіть учнів розкладати складні множення на простіші операції.',
        bullets: [
          '7×6 = (5×6) + (2×6) = 30 + 12 = 42',
          '9×8 = (10×8) - (1×8) = 80 - 8 = 72',
          'Використання подвоєння: 6×4 = 2×(3×4)',
          'Дистрибутивна властивість в дії',
        ],
      },
      {
        emoji: '🔢',
        title: 'Візерунки',
        body: "Допоможіть учням виявити та використати візерунки для полегшення навчання та запам'ятовування.",
        bullets: [
          'Ряд 2: всі парні числа',
          'Ряд 5: закінчується на 0 або 5',
          'Ряд 9: сума цифр = 9, спадний візерунок',
          'Комутативна властивість: 3×7 = 7×3',
        ],
      },
      {
        emoji: '🌍',
        title: 'Реальні Застосування',
        body: "Пов'яжіть множення з повсякденними ситуаціями, щоб надати навчанню значення та контекст.",
        bullets: [
          'Покупки та грошові завдання',
          "Розташування об'єктів у ряди та стовпці",
          'Кулінарні рецепти та вимірювання',
          'Спорт, ігри та групові активності',
        ],
      },
    ],
    classroomActivities: {
      heading: 'Активності Для Класу',
      levelLabel: 'Рівень:',
      timeLabel: 'Час:',
      cards: [
        { emoji: '🎯', title: 'Бінго Таблиці Множення', body: 'Учні створюють картки бінго з результатами. Називайте множення і учні відзначають відповіді.', level: 'Початківець до Просунутого', time: '15-20 хвилин' },
        { emoji: '🏃', title: 'Перегони Множення', body: "Команди змагаються одна з одною, розв'язуючи завдання множення в естафетному форматі на дошці.", level: 'Всі рівні', time: '10-15 хвилин' },
        { emoji: '🎲', title: 'Доміно Множення', body: "Модифіковані кістки доміно, де учні з'єднують множення з їх результатами.", level: 'Просунутий', time: '20-30 хвилин' },
        { emoji: '🎨', title: 'Мистецтво з Масивами', body: 'Учні створюють художні дизайни з прямокутними масивами та позначають відповідне множення.', level: 'Початківець', time: '30-40 хвилин' },
        { emoji: '🎪', title: 'Станції Вправ', body: 'Встановіть ротаційні станції з різними активностями: картки, цифрові ігри, письмові завдання, маніпулятиви.', level: 'Всі рівні', time: '40-50 хвилин' },
        { emoji: '📖', title: 'Історії Множення', body: 'Учні пишуть та ілюструють завдання множення на основі реальних або уявних ситуацій.', level: 'Просунутий до Експертного', time: '30-45 хвилин' },
      ],
    },
    differentiatedInstruction: {
      heading: 'Диференційоване Навчання',
      levels: [
        { emoji: '🌱', title: 'Початківці', items: ['Почати з рядів 1, 2, 5 та 10', 'Використовувати багато конкретних маніпулятивів', 'Спершу акцентувати повторне додавання', 'Надати довідкові таблиці', 'Короткі щоденні вправи (5-10 хвилин)', 'Святкувати маленькі успіхи'] },
        { emoji: '📚', title: 'Просунуті Учні', items: ['Запровадити ряди 3, 4, 6 та 7', 'Навчити стратегій декомпозиції', 'Практикувати комутативну властивість', 'Швидкісні ігри з помірним темпом', 'Контекстні прикладні завдання', 'Партнерська та малогрупова робота'] },
        { emoji: '🚀', title: 'Експертні Учні', items: ['Ряди 8, 9, 11 та 12', 'Багатокрокові завдання', "Зв'язок з діленням та дробами", 'Математичні логічні виклики', 'Створювати власні завдання', 'Навчати однокласників'] },
      ],
    },
    assessment: {
      heading: 'Стратегії Оцінювання',
      formativeHeading: 'Формативне Оцінювання',
      formativeItems: [
        { title: 'Щоденні Спостереження', body: 'Спостерігайте за учнями під час вправ, робіть нотатки про використані стратегії та типові помилки.' },
        { title: 'Короткі Міні-Тести', body: "1-2 хвилини на початку уроку: 10 завдань для оцінки швидкості та запам'ятовування." },
        { title: 'Індивідуальні Дошки', body: 'Учні показують відповіді одночасно, що дозволяє швидку перевірку всього класу.' },
        { title: 'Математичні Бесіди', body: 'Короткі індивідуальні розмови для розуміння мислення та стратегій учнів.' },
      ],
      summativeHeading: 'Підсумкове Оцінювання',
      summativeItems: [
        { title: 'Тести Швидкості', body: 'Обмежені за часом тести для вимірювання швидкості та точності у конкретних рядах множення.' },
        { title: 'Прикладні Проєкти', body: "Учні розв'язують реальні завдання, які вимагають множення в різних контекстах." },
        { title: 'Портфоліо', body: 'Збірка робіт протягом часу, яка показує прогрес та зростаюче опанування.' },
        { title: 'Самооцінювання', body: 'Учні відстежують власний прогрес, ідентифікують опановані ряди та встановлюють цілі.' },
      ],
      progressTracking: {
        heading: 'Відстеження Прогресу',
        items: [
          { title: 'Графіки Опанування', body: 'Учні розфарбовують опановані ряди у візуальній 12×12 сітці, щоб бачити свій прогрес.' },
          { title: 'Відстеження Часу', body: 'Відстежуйте покращення швидкості за допомогою графіків, які показують зменшення часу.' },
          { title: 'Значки Успіху', body: 'Система винагород за опанування кожного ряду, яка мотивує безперервний прогрес.' },
        ],
      },
    },
    commonMisconceptions: {
      heading: 'Типові Помилкові Уявлення',
      intro: 'Розпізнавайте та вирішуйте ці типові непорозуміння, щоб забезпечити міцне розуміння множення:',
      items: [
        { format: 'card', title: '"Множення завжди робить числа більшими"', whyLabel: 'Чому це проблематично:', whyBody: 'Учні будуть заплутані, коли множать дроби або десяткові числа.', fixLabel: 'Як це виправити:', fixBody: 'Покажіть приклади як 5 × 0,5 = 2,5 або 3 × 0 = 0. Поясніть, що множення числами меншими за 1 зменшує результат.' },
        { format: 'card', title: '"Порядок у словесних задачах не має значення"', whyLabel: 'Чому це проблематично:', whyBody: 'Хоча 3×4 = 4×3, контекстуальне значення може бути різним (3 групи по 4 vs. 4 групи по 3).', fixLabel: 'Як це виправити:', fixBody: 'Обговоріть комутативну властивість, але підкресліть важливість розуміння контексту задачі.' },
        { format: 'card', title: '"Множення - це лише вивчення напам\'ять"', whyLabel: 'Чому це проблематично:', whyBody: "Учні можуть вчити напам'ять без розуміння, що ускладнює застосування та запам'ятовування.", fixLabel: 'Як це виправити:', fixBody: "Завжди навчайте концепціям перед вивченням напам'ять. Використовуйте візуальні моделі та стратегії розуміння." },
        { format: 'card', title: '"Візерунки завжди працюють без їх розуміння"', whyLabel: 'Чому це проблематично:', whyBody: 'Учні застосовують візерунки механічно без розуміння математичного "чому".', fixLabel: 'Як це виправити:', fixBody: 'При навчанні візерунків (наприклад, ряд 9) завжди пояснюйте, чому вони працюють, використовуючи математичні властивості.' },
        { format: 'card', title: '"Існує лише один правильний спосіб розв\'язання"', whyLabel: 'Чому це проблематично:', whyBody: 'Обмежує творче мислення та числову гнучкість.', fixLabel: 'Як це виправити:', fixBody: 'Святкуйте різні стратегії. Попросіть учнів ділитися різними методами та обговоріть, коли яка найкорисніша.' },
      ],
    },
    tipsAndBestPractices: {
      heading: 'Поради та Найкращі Практики',
      successHeading: 'Поради Для Успіху',
      successTips: [
        'Короткі щоденні вправи краще, ніж довгі спорадичні уроки',
        'Святкуйте прогрес, а не лише досконалість',
        'Змінюйте методи вправ для підтримки інтересу',
        "Пов'язуйте з іншими областями: мистецтво, музика, спорт",
        'Залучайте родини до домашніх активностей',
        'Використовуйте технології як доповнення, а не заміну',
      ],
      sequenceHeading: 'Рекомендований Порядок',
      sequenceSteps: [
        { number: 1, body: 'Ряди 1, 2, 10, 5' },
        { number: 2, body: 'Комутативна властивість (зменшує навантаження)' },
        { number: 3, body: 'Ряд 4 (подвоїти 2)' },
        { number: 4, body: 'Ряд 9 (спеціальні візерунки)' },
        { number: 5, body: "Ряди 3 та 6 (потрійний зв'язок)" },
        { number: 6, body: 'Ряди 7 та 8 (складніші)' },
        { number: 7, body: 'Ряди 11 та 12 (експертні візерунки)' },
      ],
    },
    additionalResources: {
      heading: 'Додаткові Ресурси',
      cards: [
        { emoji: '📘', title: 'Ряди 1-10', body: 'Базові ресурси', href: '/uk/tablycya-mnozhennya/1-10' },
        { emoji: '📗', title: 'Ряди 11-20', body: 'Середній рівень', href: '/uk/tablycya-mnozhennya/11-20' },
        { emoji: '👨‍🎓', title: 'Для Учнів', body: 'Посібник з навчання', href: '/uk/tablycya-mnozhennya/dlya-uchniv' },
        { emoji: '👨‍👩‍👧', title: 'Для Батьків', body: 'Підтримка вдома', href: '/uk/tablycya-mnozhennya/dlya-batkiv' },
      ],
    },
    cta: {
      heading: 'Потрібна Додаткова Допомога?',
      body: 'Досліджуйте наші окремі ряди для специфічних ресурсів, завдань для завантаження та інтерактивних активностей.',
      button1Label: 'Переглянути Всі Ряди',
      button1Href: '/uk/tablycya-mnozhennya',
    },
  },
  fi: {
    hero: {
      title: 'Kertotaulujen Opas Opettajille',
      subtitle: 'Tehokkaat strategiat, luokkahuoneaktiviteetit ja resurssit kertotaulujen opettamiseen niin, että kaikki oppilaat menestyvät.',
    },
    teachingStrategiesHeading: 'Tehokkaat Opetusstrategiat',
    teachingStrategies: [
      {
        emoji: '👁️',
        title: 'Visualisointi',
        body: 'Käytä visuaalisia esityksiä auttamaan oppilaita ymmärtämään kertolaskun toistuvina ryhminä.',
        bullets: [
          'Suorakaiteen muotoiset ruudukot (esim. 3×4 kolmena rivinä, 4 kohdetta)',
          'Pinta-alamallit ruutupaperilla',
          'Hyppykaaviot lukusuoralla',
          'Konkreettiset manipulaatiot (palikat, pelilastut, nappulat)',
        ],
      },
      {
        emoji: '🧩',
        title: 'Hajottaminen',
        body: 'Opeta oppilaita hajottamaan vaikeat kertolaskut yksinkertaisempiin operaatioihin.',
        bullets: [
          '7×6 = (5×6) + (2×6) = 30 + 12 = 42',
          '9×8 = (10×8) - (1×8) = 80 - 8 = 72',
          'Tuplauksen käyttö: 6×4 = 2×(3×4)',
          'Jakautumislaki toiminnassa',
        ],
      },
      {
        emoji: '🔢',
        title: 'Kaavat',
        body: 'Auta oppilaita tunnistamaan ja hyödyntämään kaavoja helpottamaan oppimista ja muistamista.',
        bullets: [
          'Kertolasku 2: kaikki parilliset luvut',
          'Kertolasku 5: päättyy 0:aan tai 5:een',
          'Kertolasku 9: numeroiden summa = 9, laskeva kaava',
          'Vaihdantalaki: 3×7 = 7×3',
        ],
      },
      {
        emoji: '🌍',
        title: 'Tosielämän Sovellukset',
        body: 'Yhdistä kertolasku jokapäiväisiin tilanteisiin antaaksesi oppimiselle merkityksen ja kontekstin.',
        bullets: [
          'Ostokset ja rahatehtävät',
          'Esineiden järjestäminen riveihin ja sarakkeisiin',
          'Ruokareseptit ja mittaukset',
          'Urheilu, pelit ja ryhmäaktiviteetit',
        ],
      },
    ],
    classroomActivities: {
      heading: 'Luokkahuoneaktiviteetit',
      levelLabel: 'Taso:',
      timeLabel: 'Aika:',
      cards: [
        { emoji: '🎯', title: 'Kertotaulu-Bingo', body: 'Oppilaat luovat bingo-kortit vastauksilla. Sano kertolaskuja ja oppilaat merkitsevät vastaukset.', level: 'Aloittelija - Edistynyt', time: '15-20 minuuttia' },
        { emoji: '🏃', title: 'Kertolaskukilpailu', body: 'Joukkueet kilpailevat toisiaan vastaan ratkaisten kertolaskutehtäviä viestijuoksumuodossa taululla.', level: 'Kaikki tasot', time: '10-15 minuuttia' },
        { emoji: '🎲', title: 'Kertotauludomino', body: 'Muokatut dominonappulat, joissa oppilaat yhdistävät kertolaskut niiden vastauksiin.', level: 'Edistynyt', time: '20-30 minuuttia' },
        { emoji: '🎨', title: 'Taidetta Taulukoilla', body: 'Oppilaat luovat taiteellisia malleja suorakaiteen muotoisilla taulukoilla ja merkitsevät vastaavan kertolaskun.', level: 'Aloittelija', time: '30-40 minuuttia' },
        { emoji: '🎪', title: 'Harjoituspisteet', body: 'Perusta kiertäviä pisteitä erilaisilla aktiviteeteilla: kortit, digitaaliset pelit, kirjalliset tehtävät, manipulaatiot.', level: 'Kaikki tasot', time: '40-50 minuuttia' },
        { emoji: '📖', title: 'Kertolaskutarinat', body: 'Oppilaat kirjoittavat ja kuvittavat sanallisia kertolaskutehtäviä todellisten tai kuvitteellisten tilanteiden pohjalta.', level: 'Edistynyt - Asiantuntija', time: '30-45 minuuttia' },
      ],
    },
    differentiatedInstruction: {
      heading: 'Eriytetty Opetus',
      levels: [
        { emoji: '🌱', title: 'Aloittelijat', items: ['Aloita kertolaskuilla 1, 2, 5 ja 10', 'Käytä runsaasti konkreettisia manipulaatioita', 'Korosta aluksi toistuvaa yhteenlaskua', 'Tarjoa viitekaavioita', 'Lyhyet päivittäiset harjoitukset (5-10 min)', 'Juhli pieniä onnistumisia'] },
        { emoji: '📚', title: 'Keskitason Oppilaat', items: ['Esittele kertolaskut 3, 4, 6 ja 7', 'Opeta hajottamisstrategioita', 'Harjoittele vaihdantalakia', 'Nopeuspelit maltillisella tahdilla', 'Kontekstuaaliset sovellustehtävät', 'Pari- ja pienryhmätyö'] },
        { emoji: '🚀', title: 'Asiantuntijat', items: ['Kertolaskut 8, 9, 11 ja 12', 'Monivaiheisia tehtäviä', 'Yhdistä jakoon ja murtolukuihin', 'Matemaattisia loogisia haasteita', 'Luo omia tehtäviä', 'Opeta luokkatovereita'] },
      ],
    },
    assessment: {
      heading: 'Arviointistrategiat',
      formativeHeading: 'Formatiivinen Arviointi',
      formativeItems: [
        { title: 'Päivittäiset Pikatarkistukset', body: '3-5 minuutin tehtävät kertaamaan edellisen päivän oppimista ja tunnistamaan aukkoja.' },
        { title: 'Väliportaat', body: 'Käytä välikorteja (vihreä/punainen) tai peukaloita (ylös/alas) nopeaan ymmärryksen tarkistamiseen.' },
        { title: 'Havainnointi', body: 'Tarkkaile oppilaita aktiviteettien aikana ja merkitse muistiin strategioiden käyttöä ja ymmärrystä.' },
        { title: 'Digitaaliset Työkalut', body: 'Käytä verkkoalustoja, jotka tarjoavat välitöntä palautetta ja seuraavat edistymistä ajan mittaan.' },
      ],
      summativeHeading: 'Summatiivinen Arviointi',
      summativeItems: [
        { title: 'Ajoitetut Testit', body: 'Asteittain lisää nopeusvaatimuksia, kun tarkkuus paranee. Aloita 5 minuutista ja lyhennä 2-3 minuuttiin.' },
        { title: 'Projektipohjainen Arviointi', body: 'Oppilaat luovat postereita, pelejä tai esityksiä, jotka osoittavat kertolaskujen ymmärrystä.' },
        { title: 'Suulliset Tentit', body: 'Yksilöllisiä arvioita, joissa oppilaat selittävät strategioitaan ja ajatteluprosessejaan.' },
        { title: 'Edistymisen Seuranta', body: 'Säilytä kaavioita, jotka näyttävät opitut kertolaskut ajan mittaan, juhlistaen virstanpylväitä.' },
      ],
    },
    tipsAndBestPractices: {
      heading: 'Vinkkejä Menestykseen',
      singleColumnItems: [
        { emoji: '💡', title: 'Johdonmukaisuus on Avain', body: 'Lyhyet, päivittäiset harjoitustuokiot (5-10 minuuttia) ovat tehokkaampla kuin pitkät satunnaiset istunnot.' },
        { emoji: '🎉', title: 'Juhli Edistymistä', body: 'Tunnusta kaikki saavutukset, olipa kyseessä sitten yksi uusi opittu kertolasku tai nopean testin suorittaminen.' },
        { emoji: '🎮', title: 'Tee siitä Hauskaa', body: 'Käytä pelejä, lauluja ja kilpailuja pitääksesi oppilaat kiinnostuneina ja motivoituneina.' },
        { emoji: '👨‍👩‍👧‍👦', title: 'Osallista Vanhemmat', body: 'Lähetä kotiin harjoitusideoita ja kannusta vanhempia harjoittelemaan lastensa kanssa.' },
        { emoji: '📈', title: 'Seuraa Edistymistä', body: 'Käytä kaavioita ja taulukoita auttaaksesi oppilaita näkemään kehityksensä ja asettamaan tavoitteita.' },
        { emoji: '🤝', title: 'Vertaisopetus', body: 'Anna vahvempien oppilaiden opettaa heikompia - molemmat hyötyvät kokemuksesta.' },
      ],
    },
    additionalResources: {
      heading: 'Opettajan Resurssit',
      cards: [
        { emoji: '📋', title: 'Tulostettavat Työkirjat', body: 'Lataa ja tulosta harjoitusarkit, pelit ja aktiviteetit.' },
        { emoji: '💻', title: 'Digitaaliset Työkalut', body: 'Interaktiiviset pelit ja sovellukset, jotka tekevät harjoittelusta hauskaa.' },
        { emoji: '📚', title: 'Tuntisuunnitelmat', body: 'Valmiit tuntisuunnitelmat kaikille vaikeusasteille.' },
        { emoji: '🎯', title: 'Arviointityökalut', body: 'Testejä, tarkistuslistoja ja edistymisen seurantamalleja.' },
      ],
    },
    cta: {
      heading: 'Aloita Oppilaiden Menestyksen Tukeminen Tänään',
      body: 'Tutustu kertotauluihimme ja löydä täydelliset resurssit luokkahuoneeseesi.',
      button1Label: 'Oppilasresurssit',
      button1Href: '/fi/kertotaulut/oppilaille',
      button2Label: 'Selaa Kertotauluja',
      button2Href: '/fi/kertotaulut/1',
    },
  },
  fr: {
    hero: {
      title: 'Guide Enseignants : Tables de Multiplication',
      subtitle: "Ressources pédagogiques, stratégies d'enseignement et activités pour enseigner efficacement les tables de multiplication en classe.",
      caption: 'Accompagnement professionnel pour un enseignement efficace',
    },
    teachingStrategiesSplit: {
      heading1: 'Approche Pédagogique',
      intro1: "L'enseignement des tables de multiplication doit reposer sur la compréhension conceptuelle, pas uniquement sur la mémorisation. Les élèves doivent saisir le sens de la multiplication et développer plusieurs stratégies de résolution.",
      cards1: [
        { title: "Du Concret à l'Abstrait", body: 'Commencez par du matériel physique, passez aux représentations visuelles puis aux opérations numériques abstraites.' },
        { title: 'Développement de Stratégies', body: 'Développez la pensée flexible en montrant aux élèves plusieurs chemins de résolution.' },
        { title: 'Apprentissage Signifiant', body: 'Reliez les tables de multiplication à des problèmes réels pour créer du sens et de la motivation.' },
      ],
      heading2: "Méthodes d'Enseignement",
      methods2: [
        {
          emoji: '📦',
          title: 'Matrices et Regroupements',
          body: 'Regroupez des objets en matrices pour montrer que la multiplication est une addition répétée.',
          applicationLabel: 'Application :',
          applicationBullets: [
            "Demandez aux élèves de s'asseoir en 4 rangées × 6 élèves",
            'Arrangez des blocs ou des jetons en matrices',
            'Dessinez des matrices de points au tableau pour visualiser',
          ],
        },
        {
          emoji: '🔢',
          title: "Modèle d'Aire",
          body: "Visualisez la multiplication à l'aide de surfaces rectangulaires.",
          exampleLabel: 'Exemple : 5 × 3',
          exampleLines: [
            'Représentez 5 colonnes × 3 rangées = 15 carrés unitaires.',
            "Les élèves découvrent ainsi que l'aire d'un rectangle est liée à la multiplication.",
          ],
        },
        {
          emoji: '➗',
          title: 'Stratégie de Décomposition',
          body: 'Résolvez des multiplications complexes en les décomposant en parties plus simples.',
          exampleLabel: 'Exemple : 7 × 8',
          exampleLines: [
            'Méthode 1 : (5 × 8) + (2 × 8) = 40 + 16 = 56',
            'Méthode 2 : (7 × 5) + (7 × 3) = 35 + 21 = 56',
            'Méthode 3 : (7 × 10) - (7 × 2) = 70 - 14 = 56',
          ],
        },
      ],
    },
    classroomActivities: {
      heading: 'Activités en Classe',
      levelLabel: 'Niveau :',
      timeLabel: 'Durée :',
      cards: [
        { emoji: '🎲', title: 'Bingo Multiplication', body: 'Créez des cartes de bingo avec les résultats. Annoncez les opérations et les élèves marquent les résultats correspondants.', level: 'CE1-CM2', time: '20 min' },
        { emoji: '🏃', title: 'Course de Relais Mathématique', body: 'Divisez la classe en équipes. Chaque coureur résout une multiplication avant de passer le relais.', level: 'CE2-CM2', time: '15 min' },
        { emoji: '🃏', title: 'Mémory des Tables', body: "Paires de cartes : une avec l'opération (6×7), l'autre avec le résultat (42). Les élèves trouvent les paires.", level: 'CE1-CE2', time: '25 min' },
        { emoji: '📐', title: 'Chasse aux Motifs', body: 'Les élèves colorient les multiples sur une grille de 100 pour découvrir les motifs de chaque table.', level: 'CE1-CM1', time: '30 min' },
      ],
    },
    differentiatedInstruction: {
      heading: 'Enseignement Différencié',
      intro: 'Adaptez votre enseignement aux besoins de chaque élève pour maximiser la progression de tous.',
      levels: [
        { title: '🌱 Élèves en Difficulté', items: ['Matériel concret obligatoire', 'Tables de 1, 2, 5, 10 d\'abord', 'Temps supplémentaire accordé', 'Évaluation orale privilégiée', 'Support visuel permanent'] },
        { title: '📚 Niveau Standard', items: ['Progression structurée', 'Mélange concret et abstrait', 'Exercices variés et réguliers', 'Travail en binômes', 'Auto-évaluation guidée'] },
        { title: '🚀 Élèves Avancés', items: ['Défis et problèmes ouverts', 'Tables au-delà de 10', 'Problèmes complexes', 'Rôle de tuteur pour les pairs', 'Projets mathématiques créatifs'] },
      ],
    },
    assessment: {
      heading: "Méthodes d'Évaluation",
      formativeHeading: '📋 Évaluation Formative',
      formativeBody: "Observation quotidienne, questions orales rapides, mini-quiz de 5 minutes en début de cours. Identifiez les difficultés avant qu'elles ne s'installent.",
      summativeHeading: '📊 Évaluation Sommative',
      summativeBody: 'Tests chronométrés, résolution de problèmes contextualisés, évaluation de la compréhension des propriétés (commutativité, associativité).',
      progressTracking: {
        heading: '🎯 Suivi de Progression',
        body: 'Grille de suivi individuel par table maîtrisée. Chaque élève peut visualiser sa progression et célébrer ses réussites.',
      },
    },
    cta: {
      heading: 'Commencez à Utiliser ces Ressources ! 🚀',
      body: 'Exercices interactifs, fiches PDF imprimables et jeux éducatifs pour enrichir vos séances de mathématiques.',
      button1Label: 'Découvrir les Exercices',
      button1Href: '/fr/table-de-multiplication/1-10',
      button2Label: "Retour à l'Accueil",
      button2Href: '/fr/table-de-multiplication',
      tipLabel: 'Conseil :',
      tipBody: "10-15 minutes de pratique quotidienne sont bien plus efficaces qu'une longue séance hebdomadaire !",
    },
  },
  sv: {
    hero: {
      title: 'För Lärare: Multiplikationstabell Guide',
      subtitle: 'Professionella resurser, pedagogiska strategier och aktivitetsförslag för undervisning i multiplikationstabeller i klassrummet.',
      caption: 'Professionellt stöd för effektiv undervisning',
    },
    teachingStrategiesSplit: {
      heading1: 'Pedagogisk Metod',
      intro1: 'Undervisning i multiplikationstabeller bör byggas på konceptuell förståelse, inte bara utantillinlärning. Det är viktigt att eleverna förstår innebörden av multiplikation och utvecklar olika strategier.',
      cards1: [
        { title: 'Från Konkret till Abstrakt', body: 'Börja med fysiska material, gå via visuella representationer till abstrakta numeriska operationer.' },
        { title: 'Strategiutveckling', body: 'Utveckla flexibelt tänkande genom att visa eleverna flera lösningsvägar.' },
        { title: 'Meningsfullt Lärande', body: 'Relatera multiplikationstabeller till verkliga problem och skapa sammanhang.' },
      ],
      heading2: 'Undervisningsmetoder',
      methods2: [
        {
          emoji: '📦',
          title: 'Matriser och Grupperingar',
          body: 'Gruppera objekt i matriser för att visa att multiplikation är upprepad addition.',
          applicationLabel: 'Tillämpning:',
          applicationBullets: [
            'Be eleverna sitta i 4 rader × 6 elever',
            'Arrangera block eller räknare i matriser',
            'Rita punktmatriser på tavlan för visualisering',
          ],
        },
        {
          emoji: '🔢',
          title: 'Areamodell (Area Model)',
          body: 'Visualisera multiplikation med rektangulära ytor.',
          exampleLabel: 'Exempel:',
          exampleIntro: 'För 5 × 3:',
          exampleVisualCaption: '5 kolumner × 3 rader = 15 enhetsrutor',
        },
        {
          emoji: '➗',
          title: 'Uppdelningsstrategi',
          body: 'Lös komplexa multiplikationer genom att dela upp dem i enklare delar.',
          exampleLabel: 'Exempel: 7 × 8',
          exampleLines: [
            'Metod 1: (5 × 8) + (2 × 8) = 40 + 16 = 56',
            'Metod 2: (7 × 5) + (7 × 3) = 35 + 21 = 56',
            'Metod 3: (7 × 10) - (7 × 2) = 70 - 14 = 56',
          ],
        },
        {
          emoji: '🔄',
          title: 'Kommutativa Lagen (Commutative Property)',
          body: 'Visa eleverna att 3 × 4 och 4 × 3 ger samma resultat. Det halverar inlärningsbördan.',
          tipLabel: 'Tips:',
          tipBody: 'Vänd ett fysiskt material (t.ex. kortmatris) 90 grader för att visuellt demonstrera den kommutativa lagen.',
        },
      ],
    },
    classroomActivities: {
      heading: 'Klassrumsaktivitetsförslag',
      cards: [
        { number: 1, title: 'Multiplikationstabell Bingo', body: 'Ge varje elev ett 4×4 eller 5×5 bingokort. Läs upp multiplikationsfrågor, eleverna markerar svaret på sina kort.', goalLabel: 'Mål:', goalBody: 'Snabb återkallning, uppmärksamhet, rolig repetition' },
        { number: 2, title: 'Multiplikationshörn', body: 'Tilldela olika tal (t.ex. 6, 7, 8, 9) till klassrummets fyra hörn. Säg en faktor, eleverna springer till hörnet med rätt svar.', goalLabel: 'Mål:', goalBody: 'Kinetiskt lärande, snabbtänkande, energiutsläpp' },
        { number: 3, title: 'Multiplikationsdomino', body: 'Varje kort har en fråga på ena sidan och ett svar på andra sidan. Eleverna matchar korten som domino.', goalLabel: 'Mål:', goalBody: 'Problemlösning, samarbete, logiskt tänkande' },
        { number: 4, title: 'Verkliga Problem', body: 'Be eleverna skapa egna problem från vardagen (t.ex: 6 rader, 4 böcker per rad).', goalLabel: 'Mål:', goalBody: 'Kontextskapande, kreativitet, meningsfullt lärande' },
        { number: 5, title: 'Multiplikationskonst', body: 'Rita rektanglar på rutat papper för att visualisera multiplikationsresultat. Förvandla till mönster med olika färger.', goalLabel: 'Mål:', goalBody: 'Visuell-rumslig intelligens, integration med konst' },
        { number: 6, title: 'Multiplikationskedjetävling', body: 'I grupper löser varje elev en multiplikationsfråga och skickar resultatet till nästa kompis. Snabbaste gruppen vinner.', goalLabel: 'Mål:', goalBody: 'Teamwork, hastighet, motivation' },
      ],
    },
    differentiatedInstruction: {
      heading: 'Differentierad Undervisning',
      intro: 'Varje elevs inlärningshastighet och stil är olika. Utveckla strategier som passar elever på olika nivåer i klassrummet.',
      levels: [
        { title: 'Kämpande elever', items: ['Använd mer konkret material', 'Undervisa i mindre grupper (2-5)', 'Tillhandahåll multiplikationstabelldiagram', 'Gör upprepad övning och förstärkning', 'Ge individuellt eller smågruppsstöd'] },
        { title: 'Elever på rätt nivå', items: ['Balanserad användning av konkret och abstrakt material', 'Samarbetsaktiviteter', 'Spel och tävlingar', 'Undervisning i olika strategier', 'Regelbunden utvärdering och återkoppling'] },
        { title: 'Avancerade elever', items: ['Komplexa problem och utvidgningar', 'Multiplikation med tal större än 10 (11-20)', 'Upptäcka matematiska mönster', 'Ledarroller (kamratundervisning)', 'Projektbaserat lärande'] },
      ],
    },
    assessment: {
      heading: 'Bedömnings- och Utvärderingsverktyg',
      formativeHeading: 'Formativ Bedömning',
      formativeIntro: 'För att följa elevers framsteg under inlärningsprocessen och justera undervisningen:',
      formativeItems: [
        { title: 'Exitkort', body: 'Kort med 3-5 multiplikationsfrågor i slutet av lektionen. Ger omedelbar förståelsekontroll.' },
        { title: 'Whiteboardsvar', body: 'Alla elever visar sina svar på mini-whiteboards samtidigt. Övervakning av hela klassen.' },
        { title: 'Observationsanteckningar', body: 'Registrera elevers strategier och svårigheter under aktiviteter.' },
        { title: 'Kamratbedömning', body: 'Elever kontrollerar varandras arbete, förstärker inlärningen.' },
      ],
      summativeHeading: 'Summativ Bedömning',
      summativeIntro: 'För att utvärdera läranderesultat vid specifika perioder:',
      summativeItems: [
        { title: 'Veckotest', body: 'Korta test med 20 frågor varje vecka som täcker inlärda tabeller.' },
        { title: 'Tidstester', body: 'Snabba återkallningstest som ska slutföras inom 1-2 minuter.' },
        { title: 'Problemlösningsuppgifter', body: 'Mät förmågan att tillämpa multiplikationstabeller i verkliga problem.' },
      ],
      progressTracking: {
        heading: 'Framstegsuppföljning',
        intro: 'Håll individuella framstegsgraf för varje elev:',
        bullets: [
          'Vilka tabeller de behärskar, vilka de kämpar med',
          'Utvecklingstrend över tid (noggrannhet och hastighet)',
          'Strategier de använder och föredragna metoder',
        ],
      },
    },
    commonMisconceptions: {
      heading: 'Vanliga Missuppfattningar och Lösningar',
      items: [
        {
          format: 'accordion',
          title: '"Multiplikation gör alltid större"',
          misconceptionLabel: 'Missuppfattning:',
          misconceptionBody: 'Elever tror att resultatet av multiplikation alltid är större än faktorerna.',
          realityLabel: 'Verklighet:',
          realityBody: 'Multiplikation med 1 ändrar inte resultatet, multiplikation med 0 ger noll.',
          solutionLabel: 'Lösning:',
          solutionBody: 'Visa tydligt dessa specialfall med exempel som 0×5=0 och 1×7=7.',
        },
        {
          format: 'accordion',
          title: '"Ordningen av faktorer spelar roll"',
          misconceptionLabel: 'Missuppfattning:',
          misconceptionBody: 'Att tro att 3×4 och 4×3 är olika.',
          realityLabel: 'Verklighet:',
          realityBody: 'Enligt kommutativa lagen ger båda samma resultat.',
          solutionLabel: 'Lösning:',
          solutionBody: 'Vänd fysiskt matrismodeller för att ge visuellt bevis.',
        },
        {
          format: 'accordion',
          title: '"Multiplikation är bara utantillärning"',
          misconceptionLabel: 'Missuppfattning:',
          misconceptionBody: 'Uppfattningen att multiplikationstabeller bara är en lista att memorera.',
          realityLabel: 'Verklighet:',
          realityBody: 'Multiplikation innehåller mönster, relationer och strategier.',
          solutionLabel: 'Lösning:',
          solutionBody: 'Utveckla flexibelt tänkande genom att lära ut strategier som uppdelning och kommutativa lagen.',
        },
      ],
    },
    additionalResources: {
      heading: 'Ytterligare Resurser och Material',
      columns: [
        { heading: 'Utskrivbart Material', items: ['Multiplikationstabelldiagram (1-10, 1-12)', 'Tomma multiplikationstabellmallar', 'Flashkortsset', 'Arbetsblad (olika nivåer)'] },
        { heading: 'Digitala Verktyg', items: ['Interaktiva spel på denna webbplats', 'Online övningsplattformar', 'Pedagogiska matematikspel', 'Framstegsuppföljningsappar'] },
      ],
    },
    cta: {
      heading: 'Börja Använda i Ditt Klassrum!',
      body: 'Ge dina elever en effektiv och rolig inlärning av multiplikationstabeller. Använd plattformen i ditt klassrum idag.',
      button1Label: 'Utforska Tabellerna',
      button1Href: '/sv/multiplikationstabeller/1-10',
      button2Label: 'Tillbaka till Startsidan',
      button2Href: '/sv/multiplikationstabeller',
    },
  },
  pt: {
    hero: {
      title: 'Guia de Tabuada para Professores',
      subtitle: 'Estratégias eficazes e atividades em sala de aula para ensinar tabuada. Recursos para que todos os alunos a dominem.',
    },
    teachingStrategiesHeading: 'Estratégias de Ensino Eficazes',
    teachingStrategies: [
      {
        emoji: '👁️',
        title: 'Visualização',
        body: 'Use representações visuais para ajudar os alunos a compreender a multiplicação como grupos repetidos.',
        bullets: [
          'Arranjos retangulares (ex: 3×4 como 3 linhas de 4 objetos)',
          'Modelos de área usando papel quadriculado',
          'Diagramas de saltos na reta numérica',
          'Manipulativos concretos (blocos, fichas, cubos)',
        ],
      },
      {
        emoji: '🧩',
        title: 'Decomposição',
        body: 'Ensine os alunos a decompor multiplicações difíceis em operações mais simples.',
        bullets: [
          '7×6 = (5×6) + (2×6) = 30 + 12 = 42',
          '9×8 = (10×8) - (1×8) = 80 - 8 = 72',
          'Usar duplicação: 6×4 = 2×(3×4)',
          'Propriedade distributiva em ação',
        ],
      },
      {
        emoji: '🔢',
        title: 'Padrões',
        body: 'Ajude os alunos a descobrir e usar padrões para facilitar o aprendizado e a memorização.',
        bullets: [
          'Tabuada do 2: todos os números pares',
          'Tabuada do 5: terminam em 0 ou 5',
          'Tabuada do 9: soma de dígitos = 9, padrão descendente',
          'Propriedade comutativa: 3×7 = 7×3',
        ],
      },
      {
        emoji: '🌍',
        title: 'Aplicações Reais',
        body: 'Conecte a multiplicação com situações cotidianas para dar significado e contexto ao aprendizado.',
        // DATA QUALITY FLAG: all 4 bullets below are in Spanish in the pt source file
        // (should be Portuguese) — preserved verbatim, see file header note.
        bullets: [
          'Problemas de compras y dinero',
          'Organización de objetos en filas y columnas',
          'Recetas de cocina y medidas',
          'Deportes, juegos y actividades grupales',
        ],
      },
    ],
    classroomActivities: {
      heading: 'Atividades para a Sala de Aula',
      levelLabel: 'Nível:',
      timeLabel: 'Tempo:',
      cards: [
        { emoji: '🎯', title: 'Bingo de Multiplicação', body: 'Os alunos criam cartões de bingo com produtos. Chame multiplicações e os alunos marcam as respostas.', level: 'Iniciante a Intermediário', time: '15-20 minutos' },
        { emoji: '🏃', title: 'Corridas de Multiplicação', body: 'Equipes competem respondendo problemas de multiplicação em um formato de revezamento no quadro.', level: 'Todos os níveis', time: '10-15 minutos' },
        { emoji: '🎲', title: 'Dominó de Multiplicação', body: 'Fichas de dominó modificadas onde os alunos emparelham multiplicações com seus produtos.', level: 'Intermediário', time: '20-30 minutos' },
        { emoji: '🎨', title: 'Arte com Arranjos', body: 'Os alunos criam desenhos artísticos usando arranjos retangulares e rotulam as multiplicações correspondentes.', level: 'Iniciante', time: '30-40 minutos' },
        { emoji: '🎪', title: 'Estações de Prática', body: 'Configure estações rotativas com diferentes atividades: cartões didáticos, jogos digitais, problemas escritos, manipulativos.', level: 'Todos os níveis', time: '40-50 minutos' },
        { emoji: '📖', title: 'Histórias de Multiplicação', body: 'Os alunos escrevem e ilustram problemas de multiplicação baseados em situações reais ou imaginárias.', level: 'Intermediário a Avançado', time: '30-45 minutos' },
      ],
    },
    differentiatedInstruction: {
      heading: 'Instrução Diferenciada',
      levels: [
        { emoji: '🌱', title: 'Alunos Iniciantes', items: ['Começar com tabuadas do 1, 2, 5 e 10', 'Usar muitos manipulativos concretos', 'Enfatizar soma repetida inicialmente', 'Fornecer tabelas de referência', 'Prática diária breve (5-10 minutos)', 'Celebrar pequenas conquistas'] },
        {
          emoji: '📚',
          title: 'Alunos Intermediários',
          // DATA QUALITY FLAG: last bullet is in Spanish in the pt source file — preserved verbatim.
          items: ['Introduzir tabuadas do 3, 4, 6 e 7', 'Ensinar estratégias de decomposição', 'Praticar propriedade comutativa', 'Jogos de velocidade moderada', 'Problemas de aplicação em contexto', 'Trabajo en parejas y grupos pequeños'],
        },
        { emoji: '🚀', title: 'Alunos Avançados', items: ['Tabuadas do 8, 9, 11 e 12', 'Problemas de múltiplas etapas', 'Conexão com divisão e frações', 'Desafios de lógica matemática', 'Criar seus próprios problemas', 'Tutorear colegas'] },
      ],
    },
    assessment: {
      heading: 'Estratégias de Avaliação',
      formativeHeading: 'Avaliação Formativa',
      formativeItems: [
        { title: 'Observação Diária', body: 'Observe os alunos durante a prática, faça anotações sobre estratégias usadas e erros comuns.' },
        { title: 'Mini Testes Rápidos', body: '1-2 minutos no início da aula: 10 problemas para avaliar fluência e retenção.' },
        { title: 'Lousas Individuais', body: 'Os alunos mostram respostas simultaneamente, permitindo verificação rápida de toda a turma.' },
        { title: 'Entrevistas Matemáticas', body: 'Conversas breves um-a-um para entender o raciocínio e estratégias do aluno.' },
      ],
      // DATA QUALITY FLAG: the entire Summative Assessment heading + all 4 items below are
      // in Spanish in the pt source file (should be Portuguese) — preserved verbatim.
      summativeHeading: 'Evaluación Sumativa',
      summativeItems: [
        { title: 'Pruebas de Fluidez', body: 'Evaluaciones cronometradas para medir velocidad y precisión en rangos específicos de tablas.' },
        { title: 'Proyectos Aplicados', body: 'Os alunos resolvem problemas do mundo real que requerem multiplicação em vários contextos.' },
        { title: 'Portafolios', body: 'Colección de trabajo a lo largo del tiempo mostrando progreso y dominio creciente.' },
        { title: 'Autoevaluación', body: 'Os alunos acompanham seu próprio progresso, identificam tabuadas dominadas e estabelecem metas.' },
      ],
      // DATA QUALITY FLAG: the entire Progress Tracking heading + all 3 items below are
      // in Spanish in the pt source file (should be Portuguese) — preserved verbatim.
      progressTracking: {
        heading: 'Seguimiento del Progreso',
        items: [
          { title: 'Gráficas de Dominio', body: 'Os alunos colorem tabuadas dominadas em uma grade visual de 12×12 para ver seu progresso.' },
          { title: 'Registro de Tiempo', body: 'Rastrear mejoras en velocidad con gráficas que muestran tiempos decrecientes.' },
          { title: 'Insignias de Logro', body: 'Sistema de recompensas por dominar cada tabla, motivando el progreso continuo.' },
        ],
      },
    },
    commonMisconceptions: {
      heading: 'Erros Conceituais Comuns',
      intro: 'Reconheça e aborde estes mal-entendidos frequentes para assegurar uma compreensão sólida da multiplicação:',
      items: [
        { format: 'card', title: '"A multiplicação sempre torna os números maiores"', whyLabel: 'Por que é problemático:', whyBody: 'Os alunos ficam confusos ao multiplicar por frações ou decimais.', fixLabel: 'Como corrigir:', fixBody: 'Mostrar exemplos como 5 × 0,5 = 2,5 ou 3 × 0 = 0. Explicar que multiplicar por números menores que 1 reduz o resultado.' },
        { format: 'card', title: '"A ordem não importa nos problemas verbais"', whyLabel: 'Por que é problemático:', whyBody: '3×4 = 4×3 na matemática. Mas o contexto pode variar: 3 grupos de 4 vs. 4 grupos de 3.', fixLabel: 'Como corrigir:', fixBody: 'Discutir a propriedade comutativa mas enfatizar a importância de entender o contexto do problema.' },
        { format: 'card', title: '"Multiplicar é apenas memorização"', whyLabel: 'Por que é problemático:', whyBody: 'Os alunos podem memorizar sem entender, dificultando a aplicação e retenção.', fixLabel: 'Como corrigir:', fixBody: 'Sempre ensinar conceitos antes da memorização. Usar modelos visuais e estratégias de compreensão.' },
        { format: 'card', title: '"Os padrões sempre funcionam sem entendê-los"', whyLabel: 'Por que é problemático:', whyBody: 'Os alunos aplicam padrões mecanicamente sem compreender o "porquê" matemático.', fixLabel: 'Como corrigir:', fixBody: 'Ao ensinar padrões (ex: tabuada do 9), sempre explicar por que funcionam usando propriedades matemáticas.' },
        { format: 'card', title: '"Só há uma maneira correta de resolver"', whyLabel: 'Por que é problemático:', whyBody: 'Limita o pensamento criativo e a flexibilidade numérica.', fixLabel: 'Como corrigir:', fixBody: 'Celebrar múltiplas estratégias. Pedir aos alunos que compartilhem diferentes métodos e discutir quando cada um é mais útil.' },
      ],
    },
    tipsAndBestPractices: {
      heading: 'Conselhos e Melhores Práticas',
      successHeading: 'Dicas para o Sucesso',
      successTips: [
        'Prática curta e diária é melhor que sessões longas esporádicas',
        'Celebre o progresso, não apenas a perfeição',
        'Varie os métodos de prática para manter o interesse',
        'Conecte com outras áreas: arte, música, educação física',
        'Envolva as famílias com atividades para casa',
        'Use tecnologia como complemento, não substituição',
      ],
      sequenceHeading: 'Sequência Sugerida',
      sequenceSteps: [
        { number: 1, body: 'Tabuadas do 1, 2, 10, 5' },
        { number: 2, body: 'Propriedade comutativa (reduz a carga)' },
        { number: 3, body: 'Tabuadas do 4 (duplicar o 2)' },
        { number: 4, body: 'Tabuada do 9 (padrões especiais)' },
        { number: 5, body: 'Tabuadas do 3 e 6 (relação tripla)' },
        { number: 6, body: 'Tabuadas do 7, 8 (mais desafiadoras)' },
        { number: 7, body: 'Tabuadas do 11, 12 (padrões avançados)' },
      ],
    },
    additionalResources: {
      heading: 'Recursos Adicionais',
      cards: [
        { emoji: '📘', title: 'Tabuadas 1-10', body: 'Recursos básicos', href: '/pt/tabuada/1-10' },
        { emoji: '📗', title: 'Tabuadas 11-20', body: 'Nível intermediário', href: '/pt/tabuada/11-20' },
        { emoji: '👨‍🎓', title: 'Para Estudantes', body: 'Guia de aprendizagem', href: '/pt/tabuada/para-estudantes' },
        { emoji: '👨‍👩‍👧', title: 'Para Pais', body: 'Apoio em casa', href: '/pt/tabuada/para-pais' },
      ],
    },
    cta: {
      heading: 'Precisa de Mais Ajuda?',
      body: 'Explore nossas tabuadas individuais para recursos específicos, exercícios para download e atividades interativas.',
      button1Label: 'Ver Todas as Tabuadas',
      button1Href: '/pt/tabuada',
    },
  },
  en: {
    hero: {
      title: 'Times Tables Guide for Teachers',
      subtitle: 'Effective strategies, classroom activities, and resources for teaching times tables in a way that all students can master them.',
    },
    teachingStrategiesHeading: 'Effective Teaching Strategies',
    teachingStrategies: [
      {
        emoji: '👁️',
        title: 'Visualization',
        body: 'Use visual representations to help students understand multiplication as repeated groups.',
        bullets: [
          'Rectangular arrays (e.g., 3×4 as 3 rows of 4 objects)',
          'Area models using grid paper',
          'Jump diagrams on the number line',
          'Concrete manipulatives (blocks, counters, cubes)',
        ],
      },
      {
        emoji: '🧩',
        title: 'Decomposition',
        body: 'Teach students to break down difficult multiplications into simpler operations.',
        bullets: [
          '7×6 = (5×6) + (2×6) = 30 + 12 = 42',
          '9×8 = (10×8) - (1×8) = 80 - 8 = 72',
          'Use doubling: 6×4 = 2×(3×4)',
          'Distributive property in action',
        ],
      },
      {
        emoji: '🔢',
        title: 'Patterns',
        body: 'Help students discover and use patterns to facilitate learning and memorization.',
        bullets: [
          '2 times table: all even numbers',
          '5 times table: ends in 0 or 5',
          '9 times table: digit sum = 9, descending pattern',
          'Commutative property: 3×7 = 7×3',
        ],
      },
      {
        emoji: '🌍',
        title: 'Real-World Applications',
        body: 'Connect multiplication with everyday situations to give meaning and context to learning.',
        bullets: [
          'Shopping and money problems',
          'Organizing objects in rows and columns',
          'Cooking recipes and measurements',
          'Sports, games, and group activities',
        ],
      },
    ],
    classroomActivities: {
      heading: 'Classroom Activities',
      levelLabel: 'Level:',
      timeLabel: 'Time:',
      cards: [
        { emoji: '🎯', title: 'Multiplication Bingo', body: 'Students create bingo cards with products. Call out multiplications and students mark the answers.', level: 'Beginner to Intermediate', time: '15-20 minutes' },
        { emoji: '🏃', title: 'Multiplication Races', body: 'Teams compete by answering multiplication problems in a relay format at the board.', level: 'All levels', time: '10-15 minutes' },
        { emoji: '🎲', title: 'Multiplication Dominoes', body: 'Modified domino tiles where students match multiplications with their products.', level: 'Intermediate', time: '20-30 minutes' },
        { emoji: '🎨', title: 'Array Art', body: 'Students create artistic designs using rectangular arrays and label the corresponding multiplications.', level: 'Beginner', time: '30-40 minutes' },
        { emoji: '🎪', title: 'Practice Stations', body: 'Set up rotating stations with different activities: flashcards, digital games, written problems, manipulatives.', level: 'All levels', time: '40-50 minutes' },
        { emoji: '📖', title: 'Multiplication Stories', body: 'Students write and illustrate multiplication problems based on real or imaginary situations.', level: 'Intermediate to Advanced', time: '30-45 minutes' },
      ],
    },
    differentiatedInstruction: {
      heading: 'Differentiated Instruction',
      levels: [
        { emoji: '🌱', title: 'Beginning Learners', items: ['Start with 1, 2, 5, and 10 times tables', 'Use lots of concrete manipulatives', 'Emphasize repeated addition initially', 'Provide reference charts', 'Brief daily practice (5-10 minutes)', 'Celebrate small achievements'] },
        { emoji: '📚', title: 'Intermediate Learners', items: ['Introduce 3, 4, 6, and 7 times tables', 'Teach decomposition strategies', 'Practice commutative property', 'Moderate speed games', 'Problems with contextual application', 'Partner and small group work'] },
        { emoji: '🚀', title: 'Advanced Learners', items: ['8, 9, 11, and 12 times tables', 'Multi-step problems', 'Connection to division and fractions', 'Math logic challenges', 'Create their own problems', 'Peer tutoring'] },
      ],
    },
    assessment: {
      heading: 'Assessment Strategies',
      formativeHeading: 'Formative Assessment',
      formativeItems: [
        { title: 'Daily Observation', body: 'Observe students during practice, make notes about strategies used and common errors.' },
        { title: 'Quick Mini-Tests', body: '1-2 minutes at the start of class: 10 problems to assess fluency and retention.' },
        { title: 'Individual Whiteboards', body: 'Students show answers simultaneously, allowing quick check of the entire class.' },
        { title: 'Math Interviews', body: "Brief one-on-one conversations to understand the student's reasoning and strategies." },
      ],
      summativeHeading: 'Summative Assessment',
      summativeItems: [
        { title: 'Fluency Tests', body: 'Timed assessments to measure speed and accuracy in specific table ranges.' },
        { title: 'Applied Projects', body: 'Students solve real-world problems that require multiplication in various contexts.' },
        { title: 'Portfolios', body: 'Collection of work over time showing progress and growing mastery.' },
        { title: 'Self-Assessment', body: 'Students track their own progress, identify mastered tables, and set goals.' },
      ],
      progressTracking: {
        heading: 'Progress Tracking',
        items: [
          { title: 'Mastery Charts', body: 'Students color in mastered tables on a 12×12 visual grid to see their progress.' },
          { title: 'Time Tracking', body: 'Track speed improvements with charts showing decreasing completion times.' },
          { title: 'Achievement Badges', body: 'Reward system for mastering each table, motivating continued progress.' },
        ],
      },
    },
    commonMisconceptions: {
      heading: 'Common Misconceptions',
      intro: 'Recognize and address these frequent misunderstandings to ensure a solid understanding of multiplication:',
      items: [
        { format: 'card', title: '"Multiplication always makes numbers bigger"', whyLabel: "Why it's problematic:", whyBody: 'Students get confused when multiplying by fractions or decimals.', fixLabel: 'How to fix it:', fixBody: 'Show examples like 5 × 0.5 = 2.5 or 3 × 0 = 0. Explain that multiplying by numbers less than 1 reduces the result.' },
        { format: 'card', title: '"Order doesn\'t matter in word problems"', whyLabel: "Why it's problematic:", whyBody: 'Although 3×4 = 4×3, the contextual meaning can be different (3 groups of 4 vs. 4 groups of 3).', fixLabel: 'How to fix it:', fixBody: "Discuss the commutative property but emphasize the importance of understanding the problem's context." },
        { format: 'card', title: '"Multiplying is just memorization"', whyLabel: "Why it's problematic:", whyBody: 'Students may memorize without understanding, making application and retention harder.', fixLabel: 'How to fix it:', fixBody: 'Always teach concepts before memorization. Use visual models and understanding strategies.' },
        { format: 'card', title: '"Patterns always work without understanding them"', whyLabel: "Why it's problematic:", whyBody: 'Students apply patterns mechanically without understanding the mathematical "why."', fixLabel: 'How to fix it:', fixBody: 'When teaching patterns (e.g., 9 times table), always explain why they work using mathematical properties.' },
        { format: 'card', title: '"There\'s only one right way to solve"', whyLabel: "Why it's problematic:", whyBody: 'Limits creative thinking and numerical flexibility.', fixLabel: 'How to fix it:', fixBody: 'Celebrate multiple strategies. Ask students to share different methods and discuss when each is most useful.' },
      ],
    },
    tipsAndBestPractices: {
      heading: 'Tips and Best Practices',
      successHeading: 'Success Tips',
      successTips: [
        'Short, daily practice is better than long sporadic sessions',
        'Celebrate progress, not just perfection',
        'Vary practice methods to maintain interest',
        'Connect with other subjects: art, music, physical education',
        'Involve families with home activities',
        'Use technology as a supplement, not replacement',
      ],
      sequenceHeading: 'Suggested Sequence',
      sequenceSteps: [
        { number: 1, body: '1, 2, 10, 5 times tables' },
        { number: 2, body: 'Commutative property (reduces load)' },
        { number: 3, body: '4 times table (double the 2s)' },
        { number: 4, body: '9 times table (special patterns)' },
        { number: 5, body: '3 and 6 times tables (triple relationship)' },
        { number: 6, body: '7, 8 times tables (more challenging)' },
        { number: 7, body: '11, 12 times tables (advanced patterns)' },
      ],
    },
    additionalResources: {
      heading: 'Additional Resources',
      cards: [
        { emoji: '📘', title: 'Times Tables 1-10', body: 'Basic resources', href: '/en/multiplication-tables/1-10' },
        { emoji: '📗', title: 'Times Tables 11-20', body: 'Intermediate level', href: '/en/multiplication-tables/11-20' },
        { emoji: '👨‍🎓', title: 'For Students', body: 'Learning guide', href: '/en/multiplication-tables/for-students' },
        { emoji: '👨‍👩‍👧', title: 'For Parents', body: 'Home support', href: '/en/multiplication-tables/for-parents' },
      ],
    },
    cta: {
      heading: 'Need More Help?',
      body: 'Explore our individual times tables for specific resources, downloadable exercises, and interactive activities.',
      button1Label: 'View All Times Tables',
      button1Href: '/en/multiplication-tables',
    },
  },
  pl: {
    hero: {
      title: 'Przewodnik po Tabliczkach Mnożenia dla Nauczycieli',
      subtitle: 'Skuteczne strategie i zajęcia w klasie do nauczania tabliczki mnożenia. Zasoby, dzięki którym wszyscy uczniowie ją opanują.',
    },
    teachingStrategiesHeading: 'Skuteczne Strategie Nauczania',
    teachingStrategies: [
      {
        emoji: '👁️',
        title: 'Wizualizacja',
        body: 'Używaj reprezentacji wizualnych, aby pomóc uczniom zrozumieć mnożenie jako powtarzające się grupy.',
        bullets: [
          'Prostokątne tablice (np. 3×4 jako 3 rzędy po 4 obiekty)',
          'Modele powierzchniowe używając papieru milimetrowego',
          'Diagramy skoków na osi liczbowej',
          'Konkretne manipulatywne (klocki, liczniki, kostki)',
        ],
      },
      {
        emoji: '🧩',
        title: 'Dekompozycja',
        body: 'Naucz uczniów rozkładać trudne mnożenia na prostsze operacje.',
        bullets: [
          '7×6 = (5×6) + (2×6) = 30 + 12 = 42',
          '9×8 = (10×8) - (1×8) = 80 - 8 = 72',
          'Użyj podwajania: 6×4 = 2×(3×4)',
          'Własność rozdzielności w akcji',
        ],
      },
      {
        emoji: '🔢',
        title: 'Wzory',
        body: 'Pomóż uczniom odkryć i używać wzorów, aby ułatwić naukę i zapamiętywanie.',
        bullets: [
          'Tabliczka 2: wszystkie liczby parzyste',
          'Tabliczka 5: kończy się na 0 lub 5',
          'Tabliczka 9: suma cyfr = 9, malejący wzór',
          'Własność przemienna: 3×7 = 7×3',
        ],
      },
      {
        emoji: '🌍',
        title: 'Zastosowania w Rzeczywistym Świecie',
        body: 'Połącz mnożenie z codziennymi sytuacjami, aby nadać znaczenie i kontekst nauce.',
        bullets: [
          'Zakupy i problemy z pieniędzmi',
          'Organizowanie przedmiotów w rzędy i kolumny',
          'Przepisy kulinarne i pomiary',
          'Sport, gry i zajęcia grupowe',
        ],
      },
    ],
    classroomActivities: {
      heading: 'Zajęcia w Klasie',
      levelLabel: 'Poziom:',
      timeLabel: 'Czas:',
      cards: [
        { emoji: '🎯', title: 'Bingo Mnożenia', body: 'Uczniowie tworzą karty bingo z iloczynami. Wyczytuj mnożenia, a uczniowie zaznaczają odpowiedzi.', level: 'Początkujący do Średnio zaawansowany', time: '15-20 minut' },
        { emoji: '🏃', title: 'Wyścigi Mnożenia', body: 'Zespoły rywalizują, odpowiadając na problemy mnożenia w formacie sztafety przy tablicy.', level: 'Wszystkie poziomy', time: '10-15 minut' },
        { emoji: '🎲', title: 'Domino Mnożenia', body: 'Zmodyfikowane kostki domina, gdzie uczniowie dopasowują mnożenia do ich iloczynów.', level: 'Średnio zaawansowany', time: '20-30 minut' },
        { emoji: '🎨', title: 'Sztuka Tablic', body: 'Uczniowie tworzą artystyczne projekty używając prostokątnych tablic i oznaczają odpowiednie mnożenia.', level: 'Początkujący', time: '30-40 minut' },
        { emoji: '🎪', title: 'Stacje Ćwiczeń', body: 'Ustaw rotujące stacje z różnymi zajęciami: fiszki, gry cyfrowe, problemy pisemne, manipulatywne.', level: 'Wszystkie poziomy', time: '40-50 minut' },
        { emoji: '📖', title: 'Historie Mnożenia', body: 'Uczniowie piszą i ilustrują problemy mnożenia oparte na rzeczywistych lub wyimaginowanych sytuacjach.', level: 'Średnio zaawansowany do Zaawansowany', time: '30-45 minut' },
      ],
    },
    differentiatedInstruction: {
      heading: 'Zróżnicowane Nauczanie',
      levels: [
        { emoji: '🌱', title: 'Uczniowie Początkujący', items: ['Zacznij od tabliczek 1, 2, 5 i 10', 'Używaj dużo konkretnych manipulatywnych', 'Podkreśl początkowo powtarzane dodawanie', 'Dostarcz wykresy referencyjne', 'Krótkie codzienne ćwiczenia (5-10 minut)', 'Świętuj małe osiągnięcia'] },
        { emoji: '📚', title: 'Uczniowie Średnio Zaawansowani', items: ['Wprowadź tabliczki 3, 4, 6 i 7', 'Ucz strategii dekompozycji', 'Ćwicz własność przemienną', 'Gry o umiarkowanej prędkości', 'Problemy z zastosowaniem kontekstowym', 'Praca partnerska i w małych grupach'] },
        { emoji: '🚀', title: 'Uczniowie Zaawansowani', items: ['Tabliczki 8, 9, 11 i 12', 'Problemy wieloetapowe', 'Połączenie z dzieleniem i ułamkami', 'Wyzwania logiczne z matematyki', 'Tworzenie własnych problemów', 'Korepetycje rówieśnicze'] },
      ],
    },
    assessment: {
      heading: 'Strategie Oceniania',
      formativeHeading: 'Ocenianie Formujące',
      formativeItems: [
        { title: 'Codzienna Obserwacja', body: 'Obserwuj uczniów podczas ćwiczeń, rób notatki o używanych strategiach i typowych błędach.' },
        { title: 'Szybkie Mini-testy', body: '1-2 minuty na początku lekcji: 10 problemów do oceny płynności i zapamiętywania.' },
        { title: 'Indywidualne Tabliczki', body: 'Uczniowie pokazują odpowiedzi jednocześnie, umożliwiając szybkie sprawdzenie całej klasy.' },
        { title: 'Wywiady Matematyczne', body: 'Krótkie rozmowy jeden na jeden, aby zrozumieć rozumowanie i strategie ucznia.' },
      ],
      summativeHeading: 'Ocenianie Podsumowujące',
      summativeItems: [
        { title: 'Testy Płynności', body: 'Oceny czasowe do pomiaru szybkości i dokładności w określonych zakresach tabliczek.' },
        { title: 'Projekty Stosowane', body: 'Uczniowie rozwiązują problemy z życia, które wymagają mnożenia w różnych kontekstach.' },
        { title: 'Portfolio', body: 'Kolekcja prac w czasie pokazująca postępy i rosnące mistrzostwo.' },
        { title: 'Samoocena', body: 'Uczniowie śledzą własne postępy, identyfikują opanowane tabliczki i ustalają cele.' },
      ],
      progressTracking: {
        heading: 'Śledzenie Postępów',
        items: [
          { title: 'Wykresy Mistrzostwa', body: 'Uczniowie kolorują opanowane tabliczki na wizualnej siatce 12×12, aby zobaczyć swoje postępy.' },
          { title: 'Śledzenie Czasu', body: 'Śledź poprawę prędkości za pomocą wykresów pokazujących malejący czas realizacji.' },
          { title: 'Odznaki Osiągnięć', body: 'System nagród za opanowanie każdej tabliczki, motywujący do ciągłych postępów.' },
        ],
      },
    },
    commonMisconceptions: {
      heading: 'Typowe Nieporozumienia',
      intro: 'Rozpoznaj i rozwiąż te częste nieporozumienia, aby zapewnić solidne zrozumienie mnożenia:',
      items: [
        { format: 'card', title: '"Mnożenie zawsze zwiększa liczby"', whyLabel: 'Dlaczego jest problematyczne:', whyBody: 'Uczniowie są zdezorientowani, gdy mnożą przez ułamki lub liczby dziesiętne.', fixLabel: 'Jak to naprawić:', fixBody: 'Pokaż przykłady jak 5 × 0,5 = 2,5 lub 3 × 0 = 0. Wyjaśnij, że mnożenie przez liczby mniejsze niż 1 zmniejsza wynik.' },
        { format: 'card', title: '"Kolejność nie ma znaczenia w problemach słownych"', whyLabel: 'Dlaczego jest problematyczne:', whyBody: '3×4 = 4×3 w matematyce. Ale kontekst może być różny: 3 grupy po 4 vs. 4 grupy po 3.', fixLabel: 'Jak to naprawić:', fixBody: 'Omów własność przemienną, ale podkreśl znaczenie zrozumienia kontekstu problemu.' },
        { format: 'card', title: '"Mnożenie to tylko zapamiętywanie"', whyLabel: 'Dlaczego jest problematyczne:', whyBody: 'Uczniowie mogą zapamiętywać bez zrozumienia, co utrudnia zastosowanie i zapamiętywanie.', fixLabel: 'Jak to naprawić:', fixBody: 'Zawsze ucz koncepcji przed zapamiętywaniem. Używaj modeli wizualnych i strategii zrozumienia.' },
        { format: 'card', title: '"Wzory zawsze działają bez ich zrozumienia"', whyLabel: 'Dlaczego jest problematyczne:', whyBody: 'Uczniowie stosują wzory mechanicznie bez zrozumienia matematycznego "dlaczego".', fixLabel: 'Jak to naprawić:', fixBody: 'Ucząc wzorów (np. tabliczka 9), zawsze wyjaśniaj, dlaczego działają, używając właściwości matematycznych.' },
        { format: 'card', title: '"Jest tylko jeden prawidłowy sposób rozwiązania"', whyLabel: 'Dlaczego jest problematyczne:', whyBody: 'Ogranicza kreatywne myślenie i elastyczność numeryczną.', fixLabel: 'Jak to naprawić:', fixBody: 'Świętuj wiele strategii. Poproś uczniów o dzielenie się różnymi metodami i omów, kiedy każda jest najbardziej przydatna.' },
      ],
    },
    tipsAndBestPractices: {
      heading: 'Wskazówki i Najlepsze Praktyki',
      successHeading: 'Wskazówki Sukcesu',
      successTips: [
        'Krótkie, codzienne ćwiczenia są lepsze niż długie sporadyczne sesje',
        'Świętuj postępy, a nie tylko perfekcję',
        'Różnicuj metody ćwiczeń, aby utrzymać zainteresowanie',
        'Łącz z innymi przedmiotami: sztuka, muzyka, wychowanie fizyczne',
        'Angażuj rodziny w zajęcia domowe',
        'Używaj technologii jako uzupełnienia, nie zastępstwa',
      ],
      sequenceHeading: 'Sugerowana Sekwencja',
      sequenceSteps: [
        { number: 1, body: 'Tabliczki 1, 2, 10, 5' },
        { number: 2, body: 'Własność przemienna (zmniejsza obciążenie)' },
        { number: 3, body: 'Tabliczka 4 (podwójne 2)' },
        { number: 4, body: 'Tabliczka 9 (specjalne wzory)' },
        { number: 5, body: 'Tabliczki 3 i 6 (relacja potrójnej)' },
        { number: 6, body: 'Tabliczki 7, 8 (bardziej wymagające)' },
        { number: 7, body: 'Tabliczki 11, 12 (zaawansowane wzory)' },
      ],
    },
    additionalResources: {
      heading: 'Dodatkowe Zasoby',
      cards: [
        { emoji: '📘', title: 'Tabliczki 1-10', body: 'Podstawowe zasoby', href: '/pl/tabliczki-mnozenia/1-10' },
        { emoji: '📗', title: 'Tabliczki 11-20', body: 'Poziom średnio zaawansowany', href: '/pl/tabliczki-mnozenia/11-20' },
        { emoji: '👨‍🎓', title: 'Dla Uczniów', body: 'Przewodnik nauki', href: '/pl/tabliczki-mnozenia/dla-uczniow' },
        { emoji: '👨‍👩‍👧', title: 'Dla Rodziców', body: 'Wsparcie domowe', href: '/pl/tabliczki-mnozenia/dla-rodzicow' },
      ],
    },
    cta: {
      heading: 'Potrzebujesz Więcej Pomocy?',
      body: 'Poznaj nasze indywidualne tabliczki mnożenia z konkretnymi zasobami, ćwiczeniami do druku i interaktywnymi zajęciami.',
      button1Label: 'Zobacz Wszystkie Tabliczki Mnożenia',
      button1Href: '/pl/tabliczki-mnozenia',
    },
  },
  id: {
    hero: {
      title: 'Panduan Tabel Perkalian untuk Guru',
      subtitle: 'Strategi efektif, aktivitas kelas, dan sumber daya untuk mengajar tabel perkalian dengan cara yang dapat dikuasai semua siswa.',
    },
    teachingStrategiesHeading: 'Strategi Mengajar yang Efektif',
    teachingStrategies: [
      {
        emoji: '👁️',
        title: 'Visualisasi',
        body: 'Gunakan representasi visual untuk membantu siswa memahami perkalian sebagai kelompok yang berulang.',
        bullets: [
          'Array persegi panjang (misalnya, 3×4 sebagai 3 baris 4 objek)',
          'Model area menggunakan kertas kotak-kotak',
          'Diagram lompat pada garis bilangan',
          'Manipulatif konkret (balok, penghitung, kubus)',
        ],
      },
      {
        emoji: '🧩',
        title: 'Dekomposisi',
        body: 'Ajarkan siswa untuk memecah perkalian yang sulit menjadi operasi yang lebih sederhana.',
        bullets: [
          '7×6 = (5×6) + (2×6) = 30 + 12 = 42',
          '9×8 = (10×8) - (1×8) = 80 - 8 = 72',
          'Gunakan penggandaan: 6×4 = 2×(3×4)',
          'Sifat distributif dalam tindakan',
        ],
      },
      {
        emoji: '🔢',
        title: 'Pola',
        body: 'Bantu siswa menemukan dan menggunakan pola untuk memfasilitasi pembelajaran dan hafalan.',
        bullets: [
          'Tabel 2: semua bilangan genap',
          'Tabel 5: berakhiran 0 atau 5',
          'Tabel 9: jumlah digit = 9, pola menurun',
          'Sifat komutatif: 3×7 = 7×3',
        ],
      },
      {
        emoji: '🌍',
        title: 'Aplikasi Dunia Nyata',
        body: 'Hubungkan perkalian dengan situasi sehari-hari untuk memberi makna dan konteks pada pembelajaran.',
        bullets: [
          'Berbelanja dan masalah uang',
          'Mengatur objek dalam baris dan kolom',
          'Resep masakan dan pengukuran',
          'Olahraga, permainan, dan aktivitas kelompok',
        ],
      },
    ],
    classroomActivities: {
      heading: 'Aktivitas Kelas',
      levelLabel: 'Tingkat:',
      timeLabel: 'Waktu:',
      cards: [
        { emoji: '🎯', title: 'Bingo Perkalian', body: 'Siswa membuat kartu bingo dengan produk. Sebutkan perkalian dan siswa menandai jawabannya.', level: 'Pemula hingga Menengah', time: '15-20 menit' },
        { emoji: '🏃', title: 'Lomba Lari Perkalian', body: 'Tim berlomba untuk menyelesaikan soal perkalian. Setiap anggota menyelesaikan satu soal sebelum lari ke tim.', level: 'Semua tingkat', time: '20-30 menit' },
        { emoji: '🎴', title: 'Kartu Flash Perkalian', body: 'Latihan berpasangan dengan kartu flash. Siswa saling menguji dan mencatat kemajuan.', level: 'Semua tingkat', time: '10-15 menit' },
        { emoji: '🎨', title: 'Seni Array Perkalian', body: 'Siswa membuat array visual dengan menggambar atau menggunakan stiker untuk menggambarkan tabel perkalian.', level: 'Pemula', time: '30-40 menit' },
        { emoji: '🎲', title: 'Permainan Dadu Perkalian', body: 'Lempar dua dadu dan kalikan angkanya. Siswa mendapat poin untuk jawaban yang benar.', level: 'Pemula hingga Menengah', time: '15-25 menit' },
        { emoji: '🎭', title: 'Drama Perkalian', body: 'Siswa membuat dan memerankan skenario yang melibatkan perkalian (misalnya, berbelanja di toko).', level: 'Semua tingkat', time: '30-45 menit' },
      ],
    },
    assessment: {
      heading: 'Metode Penilaian',
      formativeHeading: 'Penilaian Formatif',
      formativeItems: [
        { title: 'Kuis Harian', body: 'Kuis singkat 5 menit di awal kelas untuk mengecek retensi' },
        { title: 'Papan Tulis Mini', body: 'Siswa menunjukkan jawaban mereka secara simultan' },
        { title: 'Tiket Keluar', body: '3-5 soal perkalian sebelum meninggalkan kelas' },
        { title: 'Observasi', body: 'Catat kemajuan siswa selama aktivitas kelompok' },
      ],
      summativeHeading: 'Penilaian Sumatif',
      summativeItems: [
        { title: 'Tes Tertulis', body: 'Tes komprehensif semua tabel perkalian' },
        { title: 'Tes Waktu', body: 'Berapa banyak soal yang dapat diselesaikan dalam 5 menit' },
        { title: 'Proyek', body: 'Siswa membuat poster atau presentasi tentang tabel perkalian' },
        { title: 'Tes Lisan', body: 'Penilaian satu-satu untuk mengecek kefasihan' },
      ],
    },
    differentiatedInstruction: {
      heading: 'Instruksi Terdiferensiasi',
      levels: [
        { title: '🌱 Siswa yang Kesulitan', items: ['Mulai dengan tabel yang paling mudah (1, 2, 5, 10)', 'Gunakan manipulatif konkret dan banyak', 'Berikan waktu ekstra untuk latihan', 'Gunakan mnemonik dan lagu', 'Latihan satu-satu atau kelompok kecil', 'Bagi tugas menjadi langkah-langkah kecil', 'Rayakan setiap kemajuan kecil'] },
        { title: '📚 Siswa Rata-rata', items: ['Perkuat dengan latihan yang bervariasi', 'Tawarkan pilihan aktivitas', 'Dorong penggunaan strategi yang berbeda', 'Kerja kelompok untuk pembelajaran peer-to-peer', 'Gunakan permainan dan kompetisi yang sehat', 'Aplikasi dunia nyata dan soal cerita', 'Penilaian diri dan pelacakan kemajuan'] },
        { title: '🚀 Siswa Canggih', items: ['Perkenalkan tabel perkalian yang lebih besar (11, 12)', 'Tantangan dengan perkalian multi-digit', 'Jelajahi pola dan hubungan matematika', 'Proyek dan presentasi kreatif', 'Peran sebagai tutor untuk teman sebaya', 'Aplikasi aljabar dasar', 'Masalah pemecahan yang kompleks'] },
      ],
    },
    technologyIntegration: {
      heading: 'Menggunakan Teknologi dalam Pengajaran',
      columns: [
        {
          heading: 'Sumber Daya Digital',
          icon: '💻',
          items: [
            { label: 'Platform Interaktif:', body: 'Gunakan situs web ini untuk latihan dan permainan interaktif' },
            { label: 'Video Edukatif:', body: 'Gunakan video untuk memperkenalkan konsep baru' },
            { label: 'Aplikasi Mobile:', body: 'Rekomendasikan aplikasi untuk latihan di rumah' },
            { label: 'Gamifikasi:', body: 'Gunakan sistem poin dan lencana untuk memotivasi' },
          ],
        },
        {
          heading: 'Pembelajaran Blended',
          icon: '📱',
          items: [
            { label: 'Flipped Classroom:', body: 'Siswa menonton video di rumah, berlatih di kelas' },
            { label: 'Stasi Rotasi:', body: 'Siswa berputar antara aktivitas digital dan manual' },
            { label: 'Pekerjaan Rumah Online:', body: 'Tetapkan latihan digital untuk dikerjakan di rumah' },
            { label: 'Progress Tracking:', body: 'Gunakan dashboard untuk memantau kemajuan siswa' },
          ],
        },
      ],
      useSiteBox: {
        heading: 'Gunakan Situs Ini di Kelas Anda',
        intro: 'Platform ini menawarkan berbagai alat interaktif yang sempurna untuk pengajaran di kelas:',
        checklist: [
          'Latihan interaktif untuk semua tabel perkalian',
          'Permainan yang menyenangkan dan memotivasi',
          'Pelacakan kemajuan untuk setiap siswa',
          'Konten yang disesuaikan dengan tingkat kesulitan',
        ],
        buttonLabel: 'Jelajahi Sumber Daya',
        buttonHref: '/id/tabel-perkalian',
      },
    },
    commonChallengesAccordion: {
      heading: 'Tantangan Umum Siswa dan Solusi',
      items: [
        {
          question: 'Siswa menghafal tanpa memahami konsep',
          solutionLabel: 'Solusi:',
          solutionBody: 'Gunakan manipulatif konkret untuk menunjukkan bahwa 3×4 berarti "3 kelompok dari 4" atau "4+4+4".',
          extraBody: 'Buat array dengan objek fisik, gunakan gambar, dan hubungkan dengan situasi dunia nyata. Pemahaman konseptual lebih penting daripada hafalan mekanis.',
          tip: 'Tip: Selalu tanyakan "Mengapa?" untuk memeriksa pemahaman.',
        },
        {
          question: 'Siswa membingungkan tabel perkalian satu sama lain',
          solutionLabel: 'Solusi:',
          solutionBody: 'Fokus pada satu tabel pada satu waktu. Kuasai satu dengan baik sebelum beralih ke yang berikutnya.',
          extraBody: 'Gunakan kode warna atau asosiasi visual untuk tabel yang berbeda. Latih diferensiasi: "Apakah ini 3×4 atau 4×3?"',
          tip: 'Tip: Ajarkan sifat komutatif untuk mengurangi jumlah fakta yang perlu diingat.',
        },
        {
          question: 'Siswa cepat melupakan apa yang sudah dipelajari',
          solutionLabel: 'Solusi:',
          solutionBody: 'Review teratur adalah kunci. Sertakan tabel yang sudah dipelajari sebelumnya bersama dengan yang baru.',
          extraBody: 'Buat jadwal review: setiap minggu review tabel lama. Gunakan permainan untuk membuat review menyenangkan.',
          tip: 'Tip: "Pemanasan" 5 menit di awal setiap pelajaran untuk review tabel sebelumnya.',
        },
        {
          question: 'Siswa lambat dalam menghitung',
          solutionLabel: 'Solusi:',
          solutionBody: 'Kecepatan datang dengan latihan teratur. Mulai dengan akurasi, kecepatan akan mengikuti.',
          extraBody: 'Gunakan latihan waktu dalam dosis kecil, tingkatkan ekspektasi secara bertahap. Rayakan peningkatan kecepatan, tidak hanya akurasi.',
          tip: 'Tip: Tetapkan tujuan pribadi untuk setiap siswa, bukan standar kelas.',
        },
        {
          question: 'Siswa kehilangan motivasi atau mengembangkan kecemasan matematika',
          solutionLabel: 'Solusi:',
          solutionBody: 'Buat pembelajaran menyenangkan dengan permainan dan aktivitas. Hindari tekanan dan lingkungan kompetitif yang berlebihan.',
          extraBody: 'Rayakan upaya dan kemajuan, bukan hanya hasil akhir. Gunakan penguatan positif secara konsisten.',
          tip: 'Tip: Izinkan siswa memilih aktivitas atau metode latihan mereka untuk meningkatkan kepemilikan.',
        },
      ],
    },
    unitPlanningGuide: {
      heading: 'Panduan Perencanaan Unit',
      subheading: 'Program 6-8 Minggu yang Disarankan',
      weeks: [
        { heading: 'Minggu 1-2: Dasar-Dasar dan Tabel Mudah', items: ['Perkenalkan konsep perkalian sebagai penjumlahan berulang', 'Ajarkan tabel 0, 1, 2, 5, dan 10', 'Gunakan manipulatif konkret dan representasi visual', 'Aktivitas: Array, permainan hitungan lompat, bingo'] },
        { heading: 'Minggu 3-4: Tabel Tingkat Menengah', items: ['Ajarkan tabel 3, 4, dan 6', 'Perkenalkan strategi (penggandaan, penambahan)', 'Review teratur tabel sebelumnya', 'Aktivitas: Kartu flash, lomba lari, permainan dadu'] },
        { heading: 'Minggu 5-6: Tabel yang Menantang', items: ['Ajarkan tabel 7, 8, dan 9', 'Ajarkan trik khusus (jari untuk 9, dekomposisi untuk 7 dan 8)', 'Latihan intensif dan konsolidasi', 'Aktivitas: Drama, proyek, kompetisi tim'] },
        { heading: 'Minggu 7-8: Review dan Penilaian', items: ['Review komprehensif semua tabel', 'Latihan fakta campuran', 'Aplikasi dunia nyata dan soal cerita', 'Penilaian sumatif dan proyek akhir'] },
      ],
      tipsHeading: '💡 Tips Perencanaan:',
      tips: [
        'Sisihkan 15-20 menit setiap hari untuk latihan tabel perkalian',
        'Selalu mulai dengan pemanasan review tabel sebelumnya',
        'Variasikan aktivitas untuk menjaga keterlibatan',
        'Sesuaikan kecepatan berdasarkan kebutuhan siswa Anda',
        'Integrasikan tabel perkalian ke dalam pelajaran matematika lainnya',
      ],
    },
    cta: {
      heading: 'Mulai Transformasi Kelas Anda Hari Ini',
      body: 'Dengan strategi yang tepat, setiap siswa dapat menguasai tabel perkalian. Mari buat matematika menyenangkan dan dapat diakses untuk semua!',
      button1Label: 'Jelajahi Sumber Daya',
      button1Href: '/id/tabel-perkalian',
      button2Label: 'Panduan untuk Orang Tua',
      button2Href: '/id/tabel-perkalian/untuk-orang-tua',
      tipLabel: 'Ingat:',
      tipBody: 'Antusiasme Anda bersifat menular. Ketika Anda bersemangat tentang matematika, siswa Anda juga akan bersemangat!',
    },
  },
}
