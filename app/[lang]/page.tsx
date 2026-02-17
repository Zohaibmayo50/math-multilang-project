import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { i18n, Locale, topicSlugs, languageNames, siteConfig } from '@/lib/i18n-config'
import { buildAlternatesMetadata } from '@/lib/url-helpers'

interface PageProps {
  params: {
    lang: string
  }
}

// Topic metadata for each language
const topicMetadata: Record<Locale, {
  title: string
  description: string
  shortDescription: string
  icon: string
  status: 'available' | 'coming-soon'
}[]> = {
  en: [
    {
      title: 'Multiplication Tables',
      description: 'Master multiplication tables from 1 to 100 with interactive lessons, practice exercises, and fun games.',
      shortDescription: 'Learn tables 1-100',
      icon: '✖️',
      status: 'available'
    },
    {
      title: 'Addition Tables',
      description: 'Coming soon: Interactive addition tables to build strong mental math skills.',
      shortDescription: 'Tables 1-100 (Coming Soon)',
      icon: '➕',
      status: 'coming-soon'
    }
  ],
  tr: [
    {
      title: 'Çarpım Tablosu',
      description: '1\'den 100\'e kadar çarpım tablolarını interaktif dersler, pratik alıştırmalar ve eğlenceli oyunlarla öğrenin.',
      shortDescription: '1-100 arası tablolar',
      icon: '✖️',
      status: 'available'
    },
    {
      title: 'Toplama Tablosu',
      description: 'Yakında: Zihinsel matematik becerilerini geliştirmek için interaktif toplama tabloları.',
      shortDescription: '1-100 arası tablolar (Yakında)',
      icon: '➕',
      status: 'coming-soon'
    }
  ],
  es: [
    {
      title: 'Tablas de Multiplicar',
      description: 'Domina las tablas de multiplicar del 1 al 100 con lecciones interactivas, ejercicios prácticos y juegos divertidos.',
      shortDescription: 'Aprende las tablas 1-100',
      icon: '✖️',
      status: 'available'
    },
    {
      title: 'Tablas de Suma',
      description: 'Próximamente: Tablas de suma interactivas para desarrollar habilidades matemáticas mentales.',
      shortDescription: 'Tablas 1-100 (Próximamente)',
      icon: '➕',
      status: 'coming-soon'
    }
  ],
  de: [
    {
      title: 'Einmaleins',
      description: 'Meistere das Einmaleins von 1 bis 100 mit interaktiven Lektionen, Übungen und unterhaltsamen Spielen.',
      shortDescription: 'Lerne Tabellen 1-100',
      icon: '✖️',
      status: 'available'
    },
    {
      title: 'Additionstabellen',
      description: 'Demnächst: Interaktive Additionstabellen zum Aufbau starker Kopfrechenfähigkeiten.',
      shortDescription: 'Tabellen 1-100 (Demnächst)',
      icon: '➕',
      status: 'coming-soon'
    }
  ],
  cs: [
    {
      title: 'Násobilka',
      description: 'Ovládněte malou násobilku od 1 do 100 s interaktivními lekcemi, cvičeními a zábavnými hrami.',
      shortDescription: 'Naučte se tabulky 1-100',
      icon: '✖️',
      status: 'available'
    },
    {
      title: 'Tabulky sčítání',
      description: 'Již brzy: Interaktivní tabulky sčítání pro rozvoj dovedností mentální matematiky.',
      shortDescription: 'Tabulky 1-100 (Již brzy)',
      icon: '➕',
      status: 'coming-soon'
    }
  ],
  uk: [
    {
      title: 'Таблиця множення',
      description: 'Опануйте таблицю множення від 1 до 100 з інтерактивними уроками, вправами та веселими іграми.',
      shortDescription: 'Вивчіть таблиці 1-100',
      icon: '✖️',
      status: 'available'
    },
    {
      title: 'Таблиця додавання',
      description: 'Найближчим часом: Інтерактивні таблиці додавання для розвитку навичок ментальної математики.',
      shortDescription: 'Таблиці 1-100 (Найближчим часом)',
      icon: '➕',
      status: 'coming-soon'
    }
  ],
  fi: [
    {
      title: 'Kertotaulut',
      description: 'Hallitse kertotaulut 1:stä 100:aan interaktiivisten oppituntien, harjoitusten ja hauskojenpelien avulla.',
      shortDescription: 'Opi taulut 1-100',
      icon: '✖️',
      status: 'available'
    },
    {
      title: 'Yhteenlaskutaulut',
      description: 'Tulossa pian: Interaktiiviset yhteenlaskutaulut vahvojen päässälaskutaitojen rakentamiseen.',
      shortDescription: 'Taulut 1-100 (Tulossa pian)',
      icon: '➕',
      status: 'coming-soon'
    }
  ],
  fr: [
    {
      title: 'Table de Multiplication',
      description: 'Maîtrisez les tables de multiplication de 1 à 100 avec des leçons interactives, des exercices pratiques et des jeux amusants.',
      shortDescription: 'Apprenez les tables 1-100',
      icon: '✖️',
      status: 'available'
    },
    {
      title: "Tables d'Addition",
      description: "Bientôt disponible : Tables d'addition interactives pour développer de solides compétences en calcul mental.",
      shortDescription: 'Tables 1-100 (Bientôt)',
      icon: '➕',
      status: 'coming-soon'
    }
  ],
  sv: [
    {
      title: 'Multiplikationstabeller',
      description: 'Bemästra multiplikationstabeller från 1 till 100 med interaktiva lektioner, övningar och roliga spel.',
      shortDescription: 'Lär dig tabeller 1-100',
      icon: '✖️',
      status: 'available'
    },
    {
      title: 'Additionstabeller',
      description: 'Kommer snart: Interaktiva additionstabeller för att bygga starka mentala matematikfärdigheter.',
      shortDescription: 'Tabeller 1-100 (Kommer snart)',
      icon: '➕',
      status: 'coming-soon'
    }
  ],
  pt: [
    {
      title: 'Tabuada',
      description: 'Domine a tabuada de 1 a 100 com aulas interativas, exercícios práticos e jogos divertidos.',
      shortDescription: 'Aprenda tabuadas 1-100',
      icon: '✖️',
      status: 'available'
    },
    {
      title: 'Tabuada de Adição',
      description: 'Em breve: Tabuadas de adição interativas para desenvolver habilidades matemáticas mentais fortes.',
      shortDescription: 'Tabuadas 1-100 (Em breve)',
      icon: '➕',
      status: 'coming-soon'
    }
  ],
  pl: [
    {
      title: 'Tabliczki Mnożenia',
      description: 'Opanuj tabliczki mnożenia od 1 do 100 dzięki interaktywnym lekcjom, ćwiczeniom i zabawnym grom.',
      shortDescription: 'Naucz się tabliczek 1-100',
      icon: '✖️',
      status: 'available'
    },
    {
      title: 'Tabliczki Dodawania',
      description: 'Wkrótce: Interaktywne tabliczki dodawania do budowania silnych umiejętności rachunku pamięciowego.',
      shortDescription: 'Tabliczki 1-100 (Wkrótce)',
      icon: '➕',
      status: 'coming-soon'
    }
  ],
  id: [
    {
      title: 'Tabel Perkalian',
      description: 'Kuasai tabel perkalian dari 1 hingga 100 dengan pelajaran interaktif, latihan praktis, dan permainan yang menyenangkan.',
      shortDescription: 'Pelajari tabel 1-100',
      icon: '✖️',
      status: 'available'
    },
    {
      title: 'Tabel Penjumlahan',
      description: 'Segera hadir: Tabel penjumlahan interaktif untuk membangun keterampilan matematika mental yang kuat.',
      shortDescription: 'Tabel 1-100 (Segera hadir)',
      icon: '➕',
      status: 'coming-soon'
    }
  ]
}

const hubMeta: Record<Locale, { title: string; description: string }> = {
  en: {
    title: 'Learn Maths Online Free',
    description: 'Free interactive maths platform with exercises, games, and guides. Choose a topic and start learning at your own pace.',
  },
  tr: {
    title: 'Ücretsiz Online Matematik Öğren',
    description: 'Alıştırma, oyun ve rehberlerle ücretsiz interaktif matematik platformu. Kendi hızınızda öğrenmeye başlayın.',
  },
  es: {
    title: 'Aprende Matemáticas Gratis Online',
    description: 'Plataforma interactiva de matemáticas con ejercicios, juegos y guías. Elige un tema y aprende a tu ritmo.',
  },
  de: {
    title: 'Kostenlos Mathe Online Lernen',
    description: 'Kostenlose interaktive Mathe-Plattform mit Übungen, Spielen und Leitfäden. Wähle ein Thema und lerne in deinem Tempo.',
  },
  cs: {
    title: 'Matematika Online Zdarma',
    description: 'Bezplatná interaktivní matematická platforma s cvičeními, hrami a průvodci. Začněte se učit vlastním tempem.',
  },
  uk: {
    title: 'Математика Онлайн Безкоштовно',
    description: 'Безкоштовна інтерактивна математична платформа з вправами, іграми та посібниками. Почніть навчатися у своєму темпі.',
  },
  fi: {
    title: 'Opi Matematiikkaa Ilmaiseksi',
    description: 'Ilmainen interaktiivinen matematiikka-alusta harjoituksilla, peleillä ja oppailla. Aloita oppiminen omaan tahtiisi.',
  },
  fr: {
    title: 'Apprendre les Maths Gratuitement',
    description: 'Plateforme de maths interactive et gratuite avec exercices, jeux et guides. Choisissez un sujet et apprenez à votre rythme.',
  },
  sv: {
    title: 'Lär dig Matte Gratis Online',
    description: 'Gratis interaktiv matteplattform med övningar, spel och guider. Välj ett ämne och lär dig i din egen takt.',
  },
  pt: {
    title: 'Aprenda Matemática Grátis Online',
    description: 'Plataforma interativa de matemática com exercícios, jogos e guias. Escolha um tópico e aprenda no seu ritmo.',
  },
  pl: {
    title: 'Ucz się Matematyki Online',
    description: 'Bezpłatna interaktywna platforma matematyczna z ćwiczeniami, grami i poradnikami. Ucz się we własnym tempie.',
  },
  id: {
    title: 'Belajar Matematika Gratis Online',
    description: 'Platform matematika interaktif gratis dengan latihan, permainan, dan panduan. Mulai belajar sesuai kecepatan Anda.',
  },
}

const pageContent: Record<Locale, {
  heading: string
  subheading: string
  availableTopics: string
  comingSoon: string
}> = {
  en: {
    heading: 'Learn Mathematics',
    subheading: 'Choose a topic to begin your learning journey',
    availableTopics: 'Available Topics',
    comingSoon: 'Coming Soon'
  },
  tr: {
    heading: 'Matematik Öğren',
    subheading: 'Öğrenme yolculuğunuza başlamak için bir konu seçin',
    availableTopics: 'Mevcut Konular',
    comingSoon: 'Yakında'
  },
  es: {
    heading: 'Aprende Matemáticas',
    subheading: 'Elige un tema para comenzar tu viaje de aprendizaje',
    availableTopics: 'Temas Disponibles',
    comingSoon: 'Próximamente'
  },
  de: {
    heading: 'Mathematik Lernen',
    subheading: 'Wähle ein Thema, um deine Lernreise zu beginnen',
    availableTopics: 'Verfügbare Themen',
    comingSoon: 'Demnächst'
  },
  cs: {
    heading: 'Učte se matematiku',
    subheading: 'Vyberte si téma a začněte svou vzdělávací cestu',
    availableTopics: 'Dostupná témata',
    comingSoon: 'Již brzy'
  },
  uk: {
    heading: 'Вивчайте математику',
    subheading: 'Виберіть тему, щоб розпочати свою навчальну подорож',
    availableTopics: 'Доступні теми',
    comingSoon: 'Найближчим часом'
  },
  fi: {
    heading: 'Opi Matematiikkaa',
    subheading: 'Valitse aihe aloittaaksesi oppimismatkasi',
    availableTopics: 'Saatavilla olevat aiheet',
    comingSoon: 'Tulossa pian'
  },
  fr: {
    heading: 'Apprendre les Mathématiques',
    subheading: 'Choisissez un sujet pour commencer votre parcours d\'apprentissage',
    availableTopics: 'Sujets disponibles',
    comingSoon: 'Bientôt disponible'
  },
  sv: {
    heading: 'Lär dig Matematik',
    subheading: 'Välj ett ämne för att börja din inlärningsresa',
    availableTopics: 'Tillgängliga ämnen',
    comingSoon: 'Kommer snart'
  },
  pt: {
    heading: 'Aprenda Matemática',
    subheading: 'Escolha um tópico para começar sua jornada de aprendizado',
    availableTopics: 'Tópicos Disponíveis',
    comingSoon: 'Em breve'
  },
  pl: {
    heading: 'Ucz się Matematyki',
    subheading: 'Wybierz temat, aby rozpocząć swoją podróż edukacyjną',
    availableTopics: 'Dostępne tematy',
    comingSoon: 'Wkrótce'
  },
  id: {
    heading: 'Belajar Matematika',
    subheading: 'Pilih topik untuk memulai perjalanan belajar Anda',
    availableTopics: 'Topik Tersedia',
    comingSoon: 'Segera hadir'
  }
}

// Extended content for SEO-rich hub pages
const hubContent: Record<Locale, {
  introTitle: string
  introText: string
  whyTitle: string
  whyReasons: { icon: string; title: string; text: string }[]
  featuresTitle: string
  features: { icon: string; title: string; text: string }[]
  popularTitle: string
  popularDesc: string
  popularLabels: string[]
  faqTitle: string
  faqs: { q: string; a: string }[]
  footerText: string
}> = {
  en: {
    introTitle: 'Welcome to Mathematives — Your Free Maths Learning Platform',
    introText: 'Mathematives offers a completely free way to learn multiplication tables from 1 to 100 in English. Every table includes a clear chart, easy-to-follow strategies, number properties, and interactive practice exercises. Whether you are a student just starting out, a parent looking for homework help, or a teacher seeking classroom resources, our platform is built for you.',
    whyTitle: 'Why Multiplication Tables Matter',
    whyReasons: [
      { icon: '🧠', title: 'Build Mental Maths Skills', text: 'Knowing your times tables by heart makes addition, subtraction, division, and fractions significantly easier. It is the foundation of mathematical fluency.' },
      { icon: '📈', title: 'Improve Academic Performance', text: 'Studies show that students who memorise their multiplication tables perform better across all areas of maths, from algebra to geometry and beyond.' },
      { icon: '⏱️', title: 'Save Time on Calculations', text: 'Instant recall of multiplication facts means less time spent on basic calculations and more time for problem solving and critical thinking.' },
      { icon: '🎯', title: 'Preparation for Advanced Maths', text: 'Multiplication is essential for understanding long division, fractions, percentages, ratio, and algebraic expressions — topics students encounter every year.' },
    ],
    featuresTitle: 'What Makes Mathematives Different',
    features: [
      { icon: '📊', title: 'Full Tables 1 to 100', text: 'We cover every single multiplication table from 1 through 100 — not just the basic 1 to 12. Each number has its own dedicated page with a full chart.' },
      { icon: '🎓', title: 'Expert Learning Tips', text: 'Each table page includes specific strategies for that number — such as the finger trick for 9s, doubling for 4s, or pattern recognition for 11s.' },
      { icon: '🖨️', title: 'Printable Resources', text: 'Practice exercises and worksheets designed for classroom use or at-home learning. Print and work offline whenever needed.' },
      { icon: '📱', title: 'Works on All Devices', text: 'Mathematives works perfectly on phones, tablets, and computers. No app download required — just open your browser and start learning.' },
    ],
    popularTitle: 'Popular Multiplication Tables',
    popularDesc: 'Start with the most commonly studied tables. These are essential for building a strong foundation in maths.',
    popularLabels: ['Table of 1', 'Table of 2', 'Table of 3', 'Table of 4', 'Table of 5', 'Table of 6', 'Table of 7', 'Table of 8', 'Table of 9', 'Table of 10'],
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      { q: 'Is Mathematives really free?', a: 'Yes. All content — every table from 1 to 100, all learning tips, and practice exercises — is 100% free with no sign-up required.' },
      { q: 'What age group is this for?', a: 'Mathematives is suitable for all ages. Students aged 6–12 typically focus on tables 1–10, while older learners can explore tables up to 100.' },
      { q: 'How should I start learning?', a: 'We recommend starting with tables 1 through 5, then progressing to 6–10. Once those are memorised, move on to ranges 11–20 and beyond at your own pace.' },
      { q: 'Can teachers use this in the classroom?', a: 'Absolutely. Teachers are welcome to use Mathematives as a supplementary resource. Our content is accessible without accounts and includes printable materials.' },
    ],
    footerText: 'Free multiplication tables practice — learn at your own pace.',
  },
  tr: {
    introTitle: 'Mathematives\'e Hoş Geldiniz — Ücretsiz Çarpım Tablosu Öğrenme Platformu',
    introText: 'Mathematives, Türkçe olarak 1\'den 100\'e kadar çarpım tablolarını öğrenmenin tamamen ücretsiz bir yolunu sunmaktadır. Her tablo net bir grafik, kolay takip edilebilir stratejiler, sayı özellikleri ve interaktif alıştırmalar içerir. İster yeni başlayan bir öğrenci olun, ister ödev yardımı arayan bir ebeveyn, ister sınıf kaynakları arayan bir öğretmen — platformumuz sizin için tasarlanmıştır.',
    whyTitle: 'Neden Çarpım Tablosu Önemlidir?',
    whyReasons: [
      { icon: '🧠', title: 'Zihinsel Matematik Becerilerini Güçlendirin', text: 'Çarpım tablolarını ezbere bilmek; toplama, çıkarma, bölme ve kesirleri çok daha kolay hale getirir. Bu, matematiksel akıcılığın temelidir.' },
      { icon: '📈', title: 'Akademik Başarıyı Artırın', text: 'Araştırmalar, çarpım tablolarını ezberleyen öğrencilerin cebirden geometriye kadar tüm matematik alanlarında daha başarılı olduğunu göstermektedir.' },
      { icon: '⏱️', title: 'Hesaplamalarda Zaman Kazanın', text: 'Çarpım bilgisini anında hatırlamak, temel hesaplamalara daha az zaman harcamak ve problem çözmeye daha fazla zaman ayırmak demektir.' },
      { icon: '🎯', title: 'İleri Matematik İçin Hazırlık', text: 'Çarpma; uzun bölme, kesirler, yüzdeler, oran ve cebirsel ifadeleri anlamak için gereklidir — öğrencilerin her yıl karşılaştığı konular.' },
    ],
    featuresTitle: 'Mathematives\'i Farklı Kılan Nedir?',
    features: [
      { icon: '📊', title: '1\'den 100\'e Tüm Tablolar', text: 'Sadece 1-12 arası değil, 1\'den 100\'e kadar her çarpım tablosu yer almaktadır. Her sayının kendi sayfası ve tam grafik çizelgesi bulunur.' },
      { icon: '🎓', title: 'Uzman Öğrenme İpuçları', text: 'Her tablo sayfası o sayıya özel stratejiler içerir — 9\'lar için parmak numarası, 4\'ler için iki katına çıkarma gibi teknikler.' },
      { icon: '🖨️', title: 'Yazdırılabilir Kaynaklar', text: 'Sınıf içi veya evde kullanım için tasarlanmış alıştırma ve çalışma kağıtları. İstediğiniz zaman yazdırıp çevrimdışı çalışabilirsiniz.' },
      { icon: '📱', title: 'Tüm Cihazlarda Çalışır', text: 'Mathematives telefonlarda, tabletlerde ve bilgisayarlarda mükemmel çalışır. Uygulama indirmeye gerek yok — tarayıcınızı açın ve öğrenmeye başlayın.' },
    ],
    popularTitle: 'Popüler Çarpım Tabloları',
    popularDesc: 'En çok çalışılan tablolarla başlayın. Bunlar güçlü bir matematik temeli oluşturmak için olmazsa olmazdır.',
    popularLabels: ['1 Tablosu', '2 Tablosu', '3 Tablosu', '4 Tablosu', '5 Tablosu', '6 Tablosu', '7 Tablosu', '8 Tablosu', '9 Tablosu', '10 Tablosu'],
    faqTitle: 'Sıkça Sorulan Sorular',
    faqs: [
      { q: 'Mathematives gerçekten ücretsiz mi?', a: 'Evet. Tüm içerik — 1\'den 100\'e kadar her tablo, tüm öğrenme ipuçları ve alıştırmalar — kayıt gerektirmeden %100 ücretsizdir.' },
      { q: 'Hangi yaş grubuna uygundur?', a: 'Mathematives her yaşa uygundur. 6-12 yaş arası öğrenciler genellikle 1-10 arası tablolara odaklanırken, daha büyük öğrenciler 100\'e kadar tabloları keşfedebilir.' },
      { q: 'Öğrenmeye nasıl başlamalıyım?', a: '1\'den 5\'e kadar olan tablolarla başlamanızı, ardından 6-10\'a ilerlemenizi öneriyoruz. Bunlar ezberlendikten sonra 11-20 aralığına ve ötesine geçebilirsiniz.' },
      { q: 'Öğretmenler sınıfta kullanabilir mi?', a: 'Kesinlikle. Öğretmenler Mathematives\'i tamamlayıcı bir kaynak olarak kullanabilir. İçeriklerimiz hesap gerektirmez ve yazdırılabilir materyaller içerir.' },
    ],
    footerText: 'Ücretsiz çarpım tablosu alıştırmaları — kendi hızınızda öğrenin.',
  },
  es: {
    introTitle: 'Bienvenido a Mathematives — Tu Plataforma Gratuita de Multiplicación',
    introText: 'Mathematives ofrece una forma completamente gratuita de aprender las tablas de multiplicar del 1 al 100 en español. Cada tabla incluye una tabla visual clara, estrategias fáciles de seguir, propiedades numéricas y ejercicios de práctica interactivos. Ya seas un estudiante que empieza, un padre buscando ayuda con las tareas o un profesor que necesita recursos para el aula, nuestra plataforma está diseñada para ti.',
    whyTitle: '¿Por Qué Son Importantes las Tablas de Multiplicar?',
    whyReasons: [
      { icon: '🧠', title: 'Desarrolla el Cálculo Mental', text: 'Saber las tablas de memoria facilita enormemente la suma, resta, división y fracciones. Es la base de la fluidez matemática.' },
      { icon: '📈', title: 'Mejora el Rendimiento Académico', text: 'Los estudios demuestran que los estudiantes que memorizan sus tablas de multiplicar rinden mejor en todas las áreas de las matemáticas, desde álgebra hasta geometría.' },
      { icon: '⏱️', title: 'Ahorra Tiempo en los Cálculos', text: 'Recordar las multiplicaciones al instante significa menos tiempo en cálculos básicos y más tiempo para la resolución de problemas y el pensamiento crítico.' },
      { icon: '🎯', title: 'Preparación para Matemáticas Avanzadas', text: 'La multiplicación es esencial para entender la división larga, fracciones, porcentajes, proporciones y expresiones algebraicas.' },
    ],
    featuresTitle: '¿Qué Hace Diferente a Mathematives?',
    features: [
      { icon: '📊', title: 'Tablas Completas del 1 al 100', text: 'Cubrimos todas las tablas de multiplicar del 1 al 100 — no solo las básicas del 1 al 12. Cada número tiene su propia página dedicada con una tabla completa.' },
      { icon: '🎓', title: 'Consejos de Aprendizaje', text: 'Cada página incluye estrategias específicas para ese número — como el truco de los dedos para el 9, la técnica de duplicar para el 4 y el reconocimiento de patrones.' },
      { icon: '🖨️', title: 'Recursos Imprimibles', text: 'Ejercicios y hojas de trabajo diseñados para uso en el aula o en casa. Imprime y trabaja sin conexión cuando lo necesites.' },
      { icon: '📱', title: 'Funciona en Todos los Dispositivos', text: 'Mathematives funciona perfectamente en teléfonos, tabletas y ordenadores. No necesitas descargar ninguna aplicación.' },
    ],
    popularTitle: 'Tablas de Multiplicar Más Populares',
    popularDesc: 'Comienza con las tablas más estudiadas. Son esenciales para construir una base sólida en matemáticas.',
    popularLabels: ['Tabla del 1', 'Tabla del 2', 'Tabla del 3', 'Tabla del 4', 'Tabla del 5', 'Tabla del 6', 'Tabla del 7', 'Tabla del 8', 'Tabla del 9', 'Tabla del 10'],
    faqTitle: 'Preguntas Frecuentes',
    faqs: [
      { q: '¿Mathematives es realmente gratis?', a: 'Sí. Todo el contenido — cada tabla del 1 al 100, todos los consejos y ejercicios — es 100% gratis sin necesidad de registro.' },
      { q: '¿Para qué edades es adecuado?', a: 'Mathematives es apto para todas las edades. Los estudiantes de 6 a 12 años suelen centrarse en las tablas del 1 al 10, mientras que los mayores pueden explorar hasta el 100.' },
      { q: '¿Cómo debo empezar?', a: 'Recomendamos comenzar con las tablas del 1 al 5, luego avanzar al 6-10. Una vez memorizadas, continúa con los rangos 11-20 y más allá a tu propio ritmo.' },
      { q: '¿Los profesores pueden usarlo en clase?', a: 'Por supuesto. Los profesores pueden usar Mathematives como recurso complementario. El contenido es accesible sin cuentas e incluye materiales imprimibles.' },
    ],
    footerText: 'Practica las tablas de multiplicar gratis — aprende a tu propio ritmo.',
  },
  de: {
    introTitle: 'Willkommen bei Mathematives — Dein kostenloses Einmaleins',
    introText: 'Lerne das Einmaleins von 1 bis 100 gratis auf Deutsch. Jede Tabelle zeigt klare Ergebnisse, einfache Tipps und Übungen. Perfekt für Schüler, Eltern und Lehrkräfte.',
    whyTitle: 'Warum ist das Einmaleins so wichtig?',
    whyReasons: [
      { icon: '🧠', title: 'Kopfrechnen stärken', text: 'Wer das Einmaleins kann, rechnet schneller. Addition, Division und Brüche fallen leichter.' },
      { icon: '📈', title: 'Bessere Noten', text: 'Schüler mit gutem Einmaleins schneiden in Mathe besser ab. Das gilt für Algebra und Geometrie.' },
      { icon: '⏱️', title: 'Zeit sparen', text: 'Schnelles Wissen spart Zeit bei einfachen Rechnungen. So bleibt mehr Zeit zum Denken und Lösen.' },
      { icon: '🎯', title: 'Höhere Mathe meistern', text: 'Das Einmaleins ist die Basis. Division, Brüche und Prozente bauen darauf auf.' },
    ],
    featuresTitle: 'Was macht Mathematives besonders?',
    features: [
      { icon: '📊', title: 'Alle Reihen von 1 bis 100', text: 'Nicht nur 1 bis 12 — wir zeigen alle 100 Reihen. Jede Zahl hat eine eigene Seite.' },
      { icon: '🎓', title: 'Clevere Lerntipps', text: 'Jede Seite erklärt Tricks. Zum Beispiel den Fingertrick für die 9er-Reihe.' },
      { icon: '🖨️', title: 'Zum Ausdrucken', text: 'Lade Übungsblätter herunter. Übe auch ohne Internet, zu Hause oder in der Schule.' },
      { icon: '📱', title: 'Alle Geräte', text: 'Nutze Mathematives auf dem Handy, Tablet oder Computer. Kein Download nötig.' },
    ],
    popularTitle: 'Beliebte Einmaleins-Reihen',
    popularDesc: 'Starte mit den wichtigsten Reihen. Sie bilden die Grundlage für alles Weitere.',
    popularLabels: ['1er-Einmaleins', '2er-Einmaleins', '3er-Einmaleins', '4er-Einmaleins', '5er-Einmaleins', '6er-Einmaleins', '7er-Einmaleins', '8er-Einmaleins', '9er-Einmaleins', '10er-Einmaleins'],
    faqTitle: 'Häufig gestellte Fragen',
    faqs: [
      { q: 'Ist Mathematives wirklich kostenlos?', a: 'Ja, zu 100 %. Alle Tabellen, Tipps und Übungen sind gratis. Keine Anmeldung nötig.' },
      { q: 'Für welches Alter passt es?', a: 'Für alle. Kinder von 6 bis 12 lernen die Reihen 1 bis 10. Ältere können bis 100 üben.' },
      { q: 'Wo fange ich an?', a: 'Beginne mit den Reihen 1 bis 5. Dann lerne 6 bis 10. Danach geht es weiter bis 100.' },
      { q: 'Können Lehrer es nutzen?', a: 'Ja. Lehrkräfte können alle Inhalte frei im Unterricht nutzen. Es gibt auch druckbare Blätter.' },
    ],
    footerText: 'Kostenloses Einmaleins-Training — lerne in deinem Tempo.',
  },
  cs: {
    introTitle: 'Vítejte na Mathematives — Vaše bezplatná platforma pro učení násobilky',
    introText: 'Mathematives nabízí zcela bezplatný způsob, jak se naučit násobilku od 1 do 100 v češtině. Každá tabulka obsahuje přehlednou tabulku, srozumitelné strategie, vlastnosti čísel a interaktivní procvičování. Ať už jste student, rodič hledající pomoc s domácími úkoly, nebo učitel potřebující materiály do výuky — naše platforma je tu pro vás.',
    whyTitle: 'Proč je násobilka tak důležitá?',
    whyReasons: [
      { icon: '🧠', title: 'Posílení počítání zpaměti', text: 'Znalost násobilky zpaměti výrazně usnadňuje sčítání, odčítání, dělení a zlomky. Je to základ matematické zdatnosti.' },
      { icon: '📈', title: 'Zlepšení školních výsledků', text: 'Výzkumy ukazují, že žáci, kteří ovládají násobilku, dosahují lepších výsledků ve všech oblastech matematiky — od algebry po geometrii.' },
      { icon: '⏱️', title: 'Úspora času při počítání', text: 'Okamžité vybavení násobků znamená méně času stráveného základními výpočty a více času na řešení problémů a kritické myšlení.' },
      { icon: '🎯', title: 'Příprava na vyšší matematiku', text: 'Násobení je nezbytné pro pochopení dělení, zlomků, procent, poměrů a algebraických výrazů — témat, se kterými se žáci setkávají každý rok.' },
    ],
    featuresTitle: 'Čím je Mathematives výjimečný?',
    features: [
      { icon: '📊', title: 'Kompletní násobilka 1 až 100', text: 'Pokrýváme každou násobilku od 1 do 100 — nejen základní 1 až 12. Každé číslo má vlastní stránku s kompletní tabulkou.' },
      { icon: '🎓', title: 'Odborné tipy pro učení', text: 'Každá stránka obsahuje specifické strategie — jako trik s prsty pro 9, zdvojnásobování pro 4 nebo rozpoznávání vzorců pro 11.' },
      { icon: '🖨️', title: 'Tisknutelné materiály', text: 'Cvičení a pracovní listy určené pro použití ve třídě nebo doma. Vytiskněte si je a procvičujte kdykoli offline.' },
      { icon: '📱', title: 'Funguje na všech zařízeních', text: 'Mathematives funguje na telefonech, tabletech i počítačích. Není potřeba stahovat žádnou aplikaci — stačí otevřít prohlížeč.' },
    ],
    popularTitle: 'Oblíbené tabulky násobilky',
    popularDesc: 'Začněte s nejstudovanějšími tabulkami. Ty jsou nezbytné pro vybudování pevného základu v matematice.',
    popularLabels: ['Násobilka 1', 'Násobilka 2', 'Násobilka 3', 'Násobilka 4', 'Násobilka 5', 'Násobilka 6', 'Násobilka 7', 'Násobilka 8', 'Násobilka 9', 'Násobilka 10'],
    faqTitle: 'Často kladené otázky',
    faqs: [
      { q: 'Je Mathematives opravdu zdarma?', a: 'Ano. Veškerý obsah — každá tabulka od 1 do 100, všechny tipy a cvičení — je 100% zdarma bez nutnosti registrace.' },
      { q: 'Pro jakou věkovou skupinu je to vhodné?', a: 'Mathematives je vhodný pro všechny věkové skupiny. Žáci 6–12 let se obvykle zaměřují na tabulky 1–10, starší žáci mohou procvičovat až do 100.' },
      { q: 'Jak bych měl začít?', a: 'Doporučujeme začít s tabulkami 1 až 5, pak přejít na 6–10. Jakmile si je zapamatujete, pokračujte s rozsahy 11–20 a dále vlastním tempem.' },
      { q: 'Mohou učitelé používat Mathematives ve výuce?', a: 'Samozřejmě. Učitelé mohou využívat Mathematives jako doplňkový zdroj. Obsah je přístupný bez účtu a zahrnuje tisknutelné materiály.' },
    ],
    footerText: 'Bezplatné procvičování násobilky — učte se vlastním tempem.',
  },
  uk: {
    introTitle: 'Ласкаво просимо до Mathematives — Ваша безкоштовна платформа для вивчення таблиці множення',
    introText: 'Mathematives пропонує повністю безкоштовний спосіб вивчення таблиці множення від 1 до 100 українською мовою. Кожна таблиця включає наочну діаграму, зрозумілі стратегії, властивості чисел та інтерактивні вправи. Незалежно від того, чи ви учень-початківець, батько, який шукає допомогу з домашнім завданням, чи вчитель, якому потрібні навчальні матеріали — наша платформа створена для вас.',
    whyTitle: 'Чому таблиця множення така важлива?',
    whyReasons: [
      { icon: '🧠', title: 'Розвиток усного рахунку', text: 'Знання таблиці множення напам\'ять значно полегшує додавання, віднімання, ділення та дроби. Це основа математичної грамотності.' },
      { icon: '📈', title: 'Покращення успішності', text: 'Дослідження показують, що учні, які вивчили таблицю множення, краще справляються з усіма розділами математики — від алгебри до геометрії.' },
      { icon: '⏱️', title: 'Економія часу на обчисленнях', text: 'Миттєве згадування результатів множення означає менше часу на базові обчислення і більше — на розв\'язання задач та критичне мислення.' },
      { icon: '🎯', title: 'Підготовка до вищої математики', text: 'Множення необхідне для розуміння ділення, дробів, відсотків, пропорцій та алгебраїчних виразів — тем, з якими учні стикаються щороку.' },
    ],
    featuresTitle: 'Що відрізняє Mathematives?',
    features: [
      { icon: '📊', title: 'Повні таблиці від 1 до 100', text: 'Ми охоплюємо кожну таблицю множення від 1 до 100 — не лише базові від 1 до 12. Кожне число має свою власну сторінку з повною таблицею.' },
      { icon: '🎓', title: 'Експертні поради з навчання', text: 'Кожна сторінка містить конкретні стратегії — трюк з пальцями для 9, подвоєння для 4 або розпізнавання закономірностей для 11.' },
      { icon: '🖨️', title: 'Матеріали для друку', text: 'Вправи та робочі аркуші для використання в класі або вдома. Роздрукуйте та практикуйтесь офлайн будь-коли.' },
      { icon: '📱', title: 'Працює на всіх пристроях', text: 'Mathematives працює на телефонах, планшетах та комп\'ютерах. Завантаження додатку не потрібне — просто відкрийте браузер.' },
    ],
    popularTitle: 'Популярні таблиці множення',
    popularDesc: 'Почніть з найбільш вивчаємих таблиць. Вони є основою для міцного математичного фундаменту.',
    popularLabels: ['Таблиця 1', 'Таблиця 2', 'Таблиця 3', 'Таблиця 4', 'Таблиця 5', 'Таблиця 6', 'Таблиця 7', 'Таблиця 8', 'Таблиця 9', 'Таблиця 10'],
    faqTitle: 'Часті питання',
    faqs: [
      { q: 'Mathematives дійсно безкоштовний?', a: 'Так. Весь контент — кожна таблиця від 1 до 100, усі поради та вправи — на 100% безкоштовний без реєстрації.' },
      { q: 'Для якого віку це підходить?', a: 'Mathematives підходить для всіх вікових груп. Учні 6–12 років зазвичай зосереджуються на таблицях 1–10, старші можуть вивчати до 100.' },
      { q: 'Як почати вивчення?', a: 'Рекомендуємо почати з таблиць від 1 до 5, потім перейти до 6–10. Після їх засвоєння продовжуйте з діапазонами 11–20 і далі у своєму темпі.' },
      { q: 'Чи можуть вчителі використовувати це на уроках?', a: 'Звичайно. Вчителі можуть використовувати Mathematives як додатковий ресурс. Контент доступний без облікових записів і включає матеріали для друку.' },
    ],
    footerText: 'Безкоштовне вивчення таблиці множення — навчайтесь у своєму темпі.',
  },
  fi: {
    introTitle: 'Tervetuloa Mathemativesiin — Ilmainen kertotaulujen oppimisalusta',
    introText: 'Mathematives tarjoaa täysin ilmaisen tavan oppia kertotaulut 1:stä 100:aan suomeksi. Jokainen taulukko sisältää selkeän kaavion, helposti seurattavat strategiat, lukujen ominaisuudet ja interaktiivisia harjoituksia. Olitpa opiskelija, vanhempi tai opettaja — alustamme on suunniteltu sinulle.',
    whyTitle: 'Miksi kertotaulut ovat tärkeitä?',
    whyReasons: [
      { icon: '🧠', title: 'Vahvista päässälaskutaitoja', text: 'Kertotaulujen osaaminen ulkoa helpottaa merkittävästi yhteen- ja vähennyslaskua, jakamista ja murtolukuja. Se on matemaattisen sujuvuuden perusta.' },
      { icon: '📈', title: 'Paranna koulumenestystä', text: 'Tutkimukset osoittavat, että kertotaulut ulkoa osaavat oppilaat menestyvät paremmin kaikilla matematiikan osa-alueilla algebrasta geometriaan.' },
      { icon: '⏱️', title: 'Säästä aikaa laskemisessa', text: 'Kertolaskutulosten välitön muistaminen tarkoittaa vähemmän aikaa peruslaskuihin ja enemmän aikaa ongelmanratkaisuun ja kriittiseen ajatteluun.' },
      { icon: '🎯', title: 'Valmistaudu edistyneempään matematiikkaan', text: 'Kertolasku on välttämätöntä jakolaskun, murtolukujen, prosenttien ja algebrallisten lausekkeiden ymmärtämiseksi.' },
    ],
    featuresTitle: 'Mikä tekee Mathemativesista erilaisen?',
    features: [
      { icon: '📊', title: 'Täydelliset taulut 1–100', text: 'Kattamme jokaisen kertotaulun 1:stä 100:aan — emme vain perus 1–12. Jokaisella numerolla on oma sivu täydellisellä taulukolla.' },
      { icon: '🎓', title: 'Asiantuntevat oppimisvinkit', text: 'Jokainen sivu sisältää kyseiselle numerolle räätälöityjä strategioita — kuten sormitempun yhdeksikön tauluun tai tuplausstrategian nelosten tauluun.' },
      { icon: '🖨️', title: 'Tulostettavat materiaalit', text: 'Harjoituksia ja työkirjoja luokkahuoneeseen tai kotikäyttöön. Tulosta ja harjoittele offline milloin tahansa.' },
      { icon: '📱', title: 'Toimii kaikilla laitteilla', text: 'Mathematives toimii puhelimilla, tableteilla ja tietokoneilla. Sovelluksen lataamista ei tarvita — avaa selain ja aloita oppiminen.' },
    ],
    popularTitle: 'Suositut kertotaulut',
    popularDesc: 'Aloita eniten opiskelluilta tauluilta. Nämä ovat välttämättömiä vahvan matemaattisen perustan rakentamiseksi.',
    popularLabels: ['Kertotaulu 1', 'Kertotaulu 2', 'Kertotaulu 3', 'Kertotaulu 4', 'Kertotaulu 5', 'Kertotaulu 6', 'Kertotaulu 7', 'Kertotaulu 8', 'Kertotaulu 9', 'Kertotaulu 10'],
    faqTitle: 'Usein Kysytyt Kysymykset',
    faqs: [
      { q: 'Onko Mathematives todella ilmainen?', a: 'Kyllä. Kaikki sisältö — jokainen taulukko 1:stä 100:aan, kaikki vinkit ja harjoitukset — on 100% ilmaista ilman rekisteröintiä.' },
      { q: 'Mille ikäryhmälle tämä sopii?', a: 'Mathematives sopii kaikille ikäryhmille. 6–12-vuotiaat keskittyvät yleensä tauluihin 1–10, vanhemmat oppijat voivat tutkia tauluja 100 asti.' },
      { q: 'Miten minun pitäisi aloittaa?', a: 'Suosittelemme aloittamaan tauluista 1–5, sitten etenemään 6–10:een. Kun ne ovat muistissa, jatka alueilla 11–20 ja eteenpäin omaan tahtiisi.' },
      { q: 'Voivatko opettajat käyttää tätä luokassa?', a: 'Ehdottomasti. Opettajat voivat käyttää Mathemativesia lisäresurssina. Sisältö on saatavilla ilman tilejä ja sisältää tulostettavia materiaaleja.' },
    ],
    footerText: 'Ilmaista kertotauluharjoittelua — opi omaan tahtiisi.',
  },
  fr: {
    introTitle: 'Bienvenue sur Mathematives — Tables de multiplication gratuites',
    introText: 'Apprenez les tables de 1 à 100 gratuitement en français. Chaque table offre un tableau clair, des astuces simples et des exercices. Idéal pour les élèves, les parents et les enseignants.',
    whyTitle: 'Pourquoi les tables sont-elles importantes ?',
    whyReasons: [
      { icon: '🧠', title: 'Calcul mental plus rapide', text: 'Bien connaître ses tables aide pour l\'addition, la division et les fractions. C\'est la base des maths.' },
      { icon: '📈', title: 'De meilleurs résultats', text: 'Les élèves qui savent leurs tables réussissent mieux en maths. Cela vaut pour l\'algèbre et la géométrie.' },
      { icon: '⏱️', title: 'Gagner du temps', text: 'Savoir ses tables par cœur fait gagner du temps. On peut se concentrer sur les problèmes plus complexes.' },
      { icon: '🎯', title: 'Préparation aux maths avancées', text: 'Les tables sont la clé. Division, fractions et pourcentages en dépendent directement.' },
    ],
    featuresTitle: 'Pourquoi choisir Mathematives ?',
    features: [
      { icon: '📊', title: 'Toutes les tables de 1 à 100', text: 'Pas seulement 1 à 12. Nous couvrons les 100 tables. Chaque nombre a sa propre page.' },
      { icon: '🎓', title: 'Astuces pratiques', text: 'Chaque page donne des astuces. Par exemple, le truc des doigts pour la table de 9.' },
      { icon: '🖨️', title: 'Fiches à imprimer', text: 'Téléchargez des exercices. Travaillez hors ligne, à la maison ou en classe.' },
      { icon: '📱', title: 'Tous les appareils', text: 'Ça marche sur téléphone, tablette et ordinateur. Aucun téléchargement requis.' },
    ],
    popularTitle: 'Tables les plus populaires',
    popularDesc: 'Commencez par les tables les plus utiles. Elles forment la base de tout calcul.',
    popularLabels: ['Table de 1', 'Table de 2', 'Table de 3', 'Table de 4', 'Table de 5', 'Table de 6', 'Table de 7', 'Table de 8', 'Table de 9', 'Table de 10'],
    faqTitle: 'Questions Fréquentes',
    faqs: [
      { q: 'Est-ce vraiment gratuit ?', a: 'Oui, à 100 %. Toutes les tables, astuces et exercices sont gratuits. Pas besoin de s\'inscrire.' },
      { q: 'Pour quel âge ?', a: 'Pour tous. Les enfants de 6 à 12 ans apprennent les tables 1 à 10. Les plus grands vont jusqu\'à 100.' },
      { q: 'Par où commencer ?', a: 'Par les tables 1 à 5. Ensuite, passez à 6 à 10. Puis continuez avec 11 à 20 et plus.' },
      { q: 'Les enseignants peuvent-ils l\'utiliser ?', a: 'Oui. Tout est libre d\'accès pour la classe. Des fiches à imprimer sont incluses.' },
    ],
    footerText: 'Tables de multiplication gratuites — apprenez à votre rythme.',
  },
  sv: {
    introTitle: 'Välkommen till Mathematives — Gratis multiplikationstabeller',
    introText: 'Lär dig tabellerna från 1 till 100 gratis på svenska. Varje tabell har ett tydligt diagram, enkla tips och övningar. Perfekt för elever, föräldrar och lärare.',
    whyTitle: 'Varför är tabellerna viktiga?',
    whyReasons: [
      { icon: '🧠', title: 'Stärk huvudräkningen', text: 'Kan du tabellerna blir matte lättare. Addition, division och bråk går snabbare.' },
      { icon: '📈', title: 'Bättre betyg', text: 'Elever som kan sina tabeller klarar sig bättre i matte. Det gäller algebra och geometri.' },
      { icon: '⏱️', title: 'Spara tid', text: 'Snabb kunskap sparar tid vid enkel räkning. Du kan fokusera på svårare uppgifter.' },
      { icon: '🎯', title: 'Grund för avancerad matte', text: 'Tabellerna är grunden. Division, bråk och procent bygger på dem.' },
    ],
    featuresTitle: 'Vad gör Mathematives speciellt?',
    features: [
      { icon: '📊', title: 'Alla tabeller 1 till 100', text: 'Inte bara 1 till 12. Vi visar alla 100 tabeller. Varje tal har en egen sida.' },
      { icon: '🎓', title: 'Smarta inlärningstips', text: 'Varje sida visar enkla strategier. Till exempel fingertricket för 9:ans tabell.' },
      { icon: '🖨️', title: 'Skriv ut resurser', text: 'Ladda ner övningsblad. Öva offline hemma eller i skolan.' },
      { icon: '📱', title: 'Alla enheter', text: 'Fungerar på telefon, surfplatta och dator. Ingen app behövs.' },
    ],
    popularTitle: 'Populära tabeller',
    popularDesc: 'Börja med de viktigaste tabellerna. De bildar grunden för allt annat.',
    popularLabels: ['1:ans tabell', '2:ans tabell', '3:ans tabell', '4:ans tabell', '5:ans tabell', '6:ans tabell', '7:ans tabell', '8:ans tabell', '9:ans tabell', '10:ans tabell'],
    faqTitle: 'Vanliga Frågor',
    faqs: [
      { q: 'Är det verkligen gratis?', a: 'Ja, helt gratis. Alla tabeller, tips och övningar ingår. Ingen registrering krävs.' },
      { q: 'Vilken ålder passar det?', a: 'Alla åldrar. Barn 6–12 år lär sig tabellerna 1–10. Äldre elever kan öva upp till 100.' },
      { q: 'Hur börjar jag?', a: 'Börja med tabellerna 1 till 5. Gå sedan till 6–10. Fortsätt med 11–20 och uppåt.' },
      { q: 'Kan lärare använda det?', a: 'Ja. Allt innehåll är fritt att använda i skolan. Utskrivbart material ingår.' },
    ],
    footerText: 'Gratis tabellträning — lär dig i din egen takt.',
  },
  pt: {
    introTitle: 'Bem-vindo ao Mathematives — Sua plataforma gratuita para aprender a tabuada',
    introText: 'O Mathematives oferece uma forma totalmente gratuita de aprender a tabuada de 1 a 100 em português. Cada tabuada inclui um quadro visual claro, estratégias fáceis de seguir, propriedades dos números e exercícios interativos. Seja você um estudante iniciante, um pai procurando ajuda com a lição de casa ou um professor buscando recursos didáticos — nossa plataforma foi feita para você.',
    whyTitle: 'Por que a tabuada é tão importante?',
    whyReasons: [
      { icon: '🧠', title: 'Fortaleça o cálculo mental', text: 'Saber a tabuada de cor facilita enormemente a adição, subtração, divisão e frações. É a base da fluência matemática.' },
      { icon: '📈', title: 'Melhore o desempenho escolar', text: 'Pesquisas mostram que estudantes que dominam a tabuada têm melhor desempenho em todas as áreas da matemática, da álgebra à geometria.' },
      { icon: '⏱️', title: 'Economize tempo nos cálculos', text: 'A lembrança instantânea dos resultados de multiplicação significa menos tempo em cálculos básicos e mais tempo para resolução de problemas.' },
      { icon: '🎯', title: 'Preparação para matemática avançada', text: 'A multiplicação é essencial para entender divisão, frações, porcentagens, proporções e expressões algébricas.' },
    ],
    featuresTitle: 'O que torna o Mathematives diferente?',
    features: [
      { icon: '📊', title: 'Tabuadas completas de 1 a 100', text: 'Cobrimos todas as tabuadas de 1 a 100 — não apenas as básicas de 1 a 12. Cada número tem sua própria página dedicada com quadro completo.' },
      { icon: '🎓', title: 'Dicas de aprendizado especializadas', text: 'Cada página inclui estratégias específicas — como o truque dos dedos para a tabuada do 9, duplicação para a do 4 ou reconhecimento de padrões.' },
      { icon: '🖨️', title: 'Recursos para impressão', text: 'Exercícios e folhas de atividades projetados para uso em sala de aula ou em casa. Imprima e pratique offline quando quiser.' },
      { icon: '📱', title: 'Funciona em todos os dispositivos', text: 'O Mathematives funciona perfeitamente em celulares, tablets e computadores. Nenhum download de aplicativo necessário.' },
    ],
    popularTitle: 'Tabuadas mais populares',
    popularDesc: 'Comece pelas tabuadas mais estudadas. Elas são essenciais para construir uma base sólida em matemática.',
    popularLabels: ['Tabuada do 1', 'Tabuada do 2', 'Tabuada do 3', 'Tabuada do 4', 'Tabuada do 5', 'Tabuada do 6', 'Tabuada do 7', 'Tabuada do 8', 'Tabuada do 9', 'Tabuada do 10'],
    faqTitle: 'Perguntas Frequentes',
    faqs: [
      { q: 'O Mathematives é realmente gratis?', a: 'Sim. Todo o conteúdo — cada tabuada de 1 a 100, todas as dicas e exercícios — é 100% gratuito sem necessidade de cadastro.' },
      { q: 'Para qual faixa etária é adequado?', a: 'O Mathematives é adequado para todas as idades. Estudantes de 6 a 12 anos geralmente focam nas tabuadas de 1 a 10, estudantes mais velhos podem explorar até 100.' },
      { q: 'Como devo começar?', a: 'Recomendamos começar pelas tabuadas de 1 a 5, depois avançar para 6–10. Após memorizá-las, continue com os grupos 11–20 e além no seu próprio ritmo.' },
      { q: 'Professores podem usar em sala de aula?', a: 'Com certeza. Professores são bem-vindos para usar o Mathematives como recurso complementar. O conteúdo é acessível sem contas e inclui materiais para impressão.' },
    ],
    footerText: 'Prática gratuita de tabuada — aprenda no seu próprio ritmo.',
  },
  pl: {
    introTitle: 'Witamy w Mathematives — Twoja darmowa platforma do nauki tabliczki mnożenia',
    introText: 'Mathematives oferuje całkowicie darmowy sposób na naukę tabliczki mnożenia od 1 do 100 po polsku. Każda tabliczka zawiera przejrzystą tabelę, łatwe do naśladowania strategie, właściwości liczb i interaktywne ćwiczenia. Niezależnie od tego, czy jesteś uczniem na początku drogi, rodzicem szukającym pomocy z zadaniami domowymi, czy nauczycielem potrzebującym materiałów dydaktycznych — nasza platforma jest stworzona dla Ciebie.',
    whyTitle: 'Dlaczego tabliczka mnożenia jest tak ważna?',
    whyReasons: [
      { icon: '🧠', title: 'Wzmocnij rachowanie w pamięci', text: 'Znajomość tabliczki mnożenia na pamięć znacznie ułatwia dodawanie, odejmowanie, dzielenie i ułamki. To fundament biegłości matematycznej.' },
      { icon: '📈', title: 'Popraw wyniki w szkole', text: 'Badania pokazują, że uczniowie znający tabliczkę mnożenia na pamięć osiągają lepsze wyniki we wszystkich dziedzinach matematyki — od algebry po geometrię.' },
      { icon: '⏱️', title: 'Oszczędzaj czas na obliczeniach', text: 'Natychmiastowe przypominanie wyników mnożenia oznacza mniej czasu na podstawowe obliczenia i więcej na rozwiązywanie problemów i krytyczne myślenie.' },
      { icon: '🎯', title: 'Przygotowanie do wyższej matematyki', text: 'Mnożenie jest niezbędne do zrozumienia dzielenia, ułamków, procentów, proporcji i wyrażeń algebraicznych.' },
    ],
    featuresTitle: 'Co wyróżnia Mathematives?',
    features: [
      { icon: '📊', title: 'Kompletne tabliczki od 1 do 100', text: 'Obejmujemy każdą tabliczkę mnożenia od 1 do 100 — nie tylko podstawowe od 1 do 12. Każda liczba ma własną stronę z pełną tabelą.' },
      { icon: '🎓', title: 'Eksperckie wskazówki', text: 'Każda strona zawiera strategie specyficzne dla danej liczby — sztuczka z palcami dla 9, podwajanie dla 4 czy rozpoznawanie wzorców dla 11.' },
      { icon: '🖨️', title: 'Materiały do druku', text: 'Ćwiczenia i karty pracy zaprojektowane do użycia w klasie lub w domu. Wydrukuj i ćwicz offline kiedy chcesz.' },
      { icon: '📱', title: 'Działa na wszystkich urządzeniach', text: 'Mathematives działa na telefonach, tabletach i komputerach. Nie trzeba pobierać żadnej aplikacji — wystarczy otworzyć przeglądarkę.' },
    ],
    popularTitle: 'Popularne tabliczki mnożenia',
    popularDesc: 'Zacznij od najczęściej uczonych tabliczek. Są one niezbędne do zbudowania solidnych podstaw matematycznych.',
    popularLabels: ['Tabliczka 1', 'Tabliczka 2', 'Tabliczka 3', 'Tabliczka 4', 'Tabliczka 5', 'Tabliczka 6', 'Tabliczka 7', 'Tabliczka 8', 'Tabliczka 9', 'Tabliczka 10'],
    faqTitle: 'Najczęściej Zadawane Pytania',
    faqs: [
      { q: 'Czy Mathematives jest naprawdę darmowy?', a: 'Tak. Cała zawartość — każda tabliczka od 1 do 100, wszystkie wskazówki i ćwiczenia — jest w 100% darmowa bez konieczności rejestracji.' },
      { q: 'Dla jakiej grupy wiekowej to jest?', a: 'Mathematives jest odpowiedni dla wszystkich grup wiekowych. Uczniowie w wieku 6–12 lat koncentrują się zwykle na tabliczkach 1–10, starsi mogą ćwiczyć do 100.' },
      { q: 'Jak powinienem zacząć?', a: 'Zalecamy zacząć od tabliczek 1 do 5, a następnie przejść do 6–10. Po ich opanowaniu kontynuuj z zakresami 11–20 i dalej we własnym tempie.' },
      { q: 'Czy nauczyciele mogą używać tego na lekcjach?', a: 'Oczywiście. Nauczyciele mogą korzystać z Mathematives jako dodatkowego zasobu. Treści są dostępne bez kont i zawierają materiały do druku.' },
    ],
    footerText: 'Darmowe ćwiczenie tabliczki mnożenia — ucz się we własnym tempie.',
  },
  id: {
    introTitle: 'Selamat Datang di Mathematives — Platform Belajar Tabel Perkalian Gratis',
    introText: 'Mathematives menawarkan cara yang sepenuhnya gratis untuk belajar tabel perkalian dari 1 hingga 100 dalam bahasa Indonesia. Setiap tabel mencakup diagram yang jelas, strategi yang mudah diikuti, sifat-sifat bilangan, dan latihan interaktif. Baik Anda seorang siswa pemula, orang tua yang mencari bantuan PR, atau guru yang membutuhkan materi pelajaran — platform kami dirancang untuk Anda.',
    whyTitle: 'Mengapa Tabel Perkalian Penting?',
    whyReasons: [
      { icon: '🧠', title: 'Tingkatkan Kemampuan Berhitung Mental', text: 'Menguasai tabel perkalian sangat memudahkan penjumlahan, pengurangan, pembagian, dan pecahan. Ini adalah fondasi kelancaran matematika.' },
      { icon: '📈', title: 'Tingkatkan Prestasi Akademik', text: 'Penelitian menunjukkan bahwa siswa yang menghafal tabel perkalian berprestasi lebih baik di semua bidang matematika, dari aljabar hingga geometri.' },
      { icon: '⏱️', title: 'Hemat Waktu Perhitungan', text: 'Ingatan instan hasil perkalian berarti lebih sedikit waktu untuk perhitungan dasar dan lebih banyak waktu untuk pemecahan masalah dan berpikir kritis.' },
      { icon: '🎯', title: 'Persiapan Matematika Lanjutan', text: 'Perkalian sangat penting untuk memahami pembagian panjang, pecahan, persentase, rasio, dan ekspresi aljabar.' },
    ],
    featuresTitle: 'Apa yang Membuat Mathematives Berbeda?',
    features: [
      { icon: '📊', title: 'Tabel Lengkap 1 sampai 100', text: 'Kami mencakup setiap tabel perkalian dari 1 hingga 100 — bukan hanya dasar 1 sampai 12. Setiap angka memiliki halaman khusus dengan tabel lengkap.' },
      { icon: '🎓', title: 'Tips Belajar Ahli', text: 'Setiap halaman menyertakan strategi khusus — seperti trik jari untuk tabel 9, strategi penggandaan untuk tabel 4, atau pengenalan pola untuk tabel 11.' },
      { icon: '🖨️', title: 'Sumber Daya yang Bisa Dicetak', text: 'Latihan dan lembar kerja yang dirancang untuk penggunaan di kelas atau di rumah. Cetak dan berlatih offline kapan saja.' },
      { icon: '📱', title: 'Berfungsi di Semua Perangkat', text: 'Mathematives berfungsi sempurna di ponsel, tablet, dan komputer. Tidak perlu mengunduh aplikasi — cukup buka browser Anda.' },
    ],
    popularTitle: 'Tabel Perkalian Populer',
    popularDesc: 'Mulailah dengan tabel yang paling banyak dipelajari. Ini sangat penting untuk membangun fondasi matematika yang kuat.',
    popularLabels: ['Tabel 1', 'Tabel 2', 'Tabel 3', 'Tabel 4', 'Tabel 5', 'Tabel 6', 'Tabel 7', 'Tabel 8', 'Tabel 9', 'Tabel 10'],
    faqTitle: 'Pertanyaan yang Sering Diajukan',
    faqs: [
      { q: 'Apakah Mathematives benar-benar gratis?', a: 'Ya. Semua konten — setiap tabel dari 1 sampai 100, semua tips dan latihan — 100% gratis tanpa perlu mendaftar.' },
      { q: 'Untuk kelompok usia berapa ini?', a: 'Mathematives cocok untuk semua usia. Siswa usia 6–12 tahun biasanya fokus pada tabel 1–10, pelajar yang lebih tua bisa menjelajahi hingga 100.' },
      { q: 'Bagaimana saya harus mulai belajar?', a: 'Kami menyarankan mulai dengan tabel 1 sampai 5, lalu lanjut ke 6–10. Setelah dihafal, lanjutkan dengan rentang 11–20 dan seterusnya sesuai kecepatan Anda.' },
      { q: 'Bisakah guru menggunakan ini di kelas?', a: 'Tentu saja. Guru dipersilakan menggunakan Mathematives sebagai sumber daya pelengkap. Konten dapat diakses tanpa akun dan mencakup materi yang bisa dicetak.' },
    ],
    footerText: 'Latihan tabel perkalian gratis — belajar sesuai kecepatan Anda.',
  },
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang: langParam } = await params
  const lang = langParam as Locale
  
  if (!i18n.locales.includes(lang)) {
    return {}
  }

  const meta = hubMeta[lang]
  const config = siteConfig[lang]

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `${config.domain}/${lang}`,
      ...buildAlternatesMetadata('lang-hub'),
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${config.domain}/${lang}`,
      siteName: 'Mathematives',
      locale: lang,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    }
  }
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({
    lang: locale
  }))
}

export default async function LanguageHub({ params }: PageProps) {
  const { lang: langParam } = await params
  const lang = langParam as Locale

  if (!i18n.locales.includes(lang)) {
    notFound()
  }

  const content = pageContent[lang]
  const topics = topicMetadata[lang]
  const hub = hubContent[lang]
  const availableTopics = topics.filter(t => t.status === 'available')
  const comingSoonTopics = topics.filter(t => t.status === 'coming-soon')

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <Link 
            href="/" 
            className="inline-block mb-6 text-2xl font-bold text-slate-700 hover:text-slate-900 transition-colors"
          >
            ← Mathematives
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            {content.heading}
          </h1>
          <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto">
            {content.subheading}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
            <span className="text-2xl">{languageNames[lang] === 'English' ? '🇺🇸' : 
                                       languageNames[lang] === 'Türkçe' ? '🇹🇷' :
                                       languageNames[lang] === 'Español' ? '🇪🇸' :
                                       languageNames[lang] === 'Deutsch' ? '🇩🇪' :
                                       languageNames[lang] === 'Čeština' ? '🇨🇿' :
                                       languageNames[lang] === 'Українська' ? '🇺🇦' :
                                       languageNames[lang] === 'Suomi' ? '🇫🇮' :
                                       languageNames[lang] === 'Français' ? '🇫🇷' :
                                       languageNames[lang] === 'Svenska' ? '🇸🇪' :
                                       languageNames[lang] === 'Português' ? '🇧🇷' :
                                       languageNames[lang] === 'Polski' ? '🇵🇱' : '🇮🇩'}</span>
            <span className="font-semibold text-slate-700">{languageNames[lang]}</span>
          </div>
        </div>

        {/* Available Topics */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">{content.availableTopics}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {availableTopics.map((topic, index) => (
              <Link
                key={index}
                href={`/${lang}/${topicSlugs[lang]}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 hover:scale-105 border-2 border-transparent hover:border-blue-500"
              >
                <div className="flex items-start gap-4">
                  <div className="text-6xl flex-shrink-0">{topic.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-base text-slate-700 mb-3">
                      {topic.description}
                    </p>
                    <div className="inline-flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                      <span>{topic.shortDescription}</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Coming Soon Topics */}
        {comingSoonTopics.length > 0 && (
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">{content.comingSoon}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {comingSoonTopics.map((topic, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-60 rounded-2xl shadow-md p-6 border-2 border-dashed border-slate-300 opacity-75 cursor-not-allowed"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-6xl flex-shrink-0 opacity-50">{topic.icon}</div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-slate-700 mb-2">
                        {topic.title}
                      </h3>
                      <p className="text-base text-slate-600 mb-3">
                        {topic.description}
                      </p>
                      <div className="inline-flex items-center text-sm font-semibold text-slate-600">
                        <span>{topic.shortDescription}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Introduction Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-6">
            {hub.introTitle}
          </h2>
          <p className="text-lg text-slate-700 text-center max-w-3xl mx-auto leading-relaxed">
            {hub.introText}
          </p>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-12">
            {hub.whyTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {hub.whyReasons.map((reason, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0">{reason.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{reason.title}</h3>
                    <p className="text-slate-700">{reason.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-12">
            {hub.featuresTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {hub.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-5 rounded-xl bg-slate-50">
                <div className="text-2xl flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-slate-600">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tables Quick Links */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-4">
            {hub.popularTitle}
          </h2>
          <p className="text-lg text-slate-600 text-center max-w-2xl mx-auto mb-10">
            {hub.popularDesc}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {hub.popularLabels.map((label, index) => (
              <Link
                key={index}
                href={`/${lang}/${topicSlugs[lang]}/${index + 1}`}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 p-4 text-center hover:scale-105 border-2 border-transparent hover:border-blue-500"
              >
                <div className="text-2xl font-bold text-blue-600 mb-1">{index + 1}</div>
                <div className="text-xs text-slate-600 font-medium">{label}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-10">
            {hub.faqTitle}
          </h2>
          <div className="space-y-6">
            {hub.faqs.map((faq, index) => (
              <div key={index} className={index < hub.faqs.length - 1 ? 'border-b border-slate-200 pb-6' : 'pb-6'}>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Mathematives — {hub.footerText}
        </p>
      </footer>
    </main>
  )
}
