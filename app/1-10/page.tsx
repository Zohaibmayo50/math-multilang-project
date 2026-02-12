import RangePage from '../components/RangePage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mathematives.com/1-10#webpage",
      "url": "https://mathematives.com/1-10",
      "name": "1-10 Çarpım Tablosu - Başlangıç Seviyesi",
      "description": "1'den 10'a kadar çarpım tablolarını öğrenin. Başlangıç seviyesi için ideal, interaktif alıştırmalar ve oyunlarla desteklenmiş eğitim materyalleri.",
      "isPartOf": {
        "@id": "https://mathematives.com/#website"
      },
      "about": {
        "@id": "https://mathematives.com/1-10#learningresource"
      },
      "inLanguage": "tr-TR"
    },
    {
      "@type": "LearningResource",
      "@id": "https://mathematives.com/1-10#learningresource",
      "name": "1-10 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "Başlangıç seviyesi çarpım tabloları: 1'den 10'a kadar olan sayıların çarpım tablolarını pratik alıştırmalar, interaktif oyunlar ve yazdırılabilir çalışma sayfaları ile öğrenin.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "1, 2, 3, 4, 5, 6, 7, 8, 9, 10 çarpım tablolarını anlama ve uygulama becerileri",
      "typicalAgeRange": "6-8",
      "inLanguage": "tr-TR",
      "educationalUse": ["practice", "self-study", "homework"],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": ["student"]
      },
      "hasPart": [
        {"@type": "LearningResource", "name": "1 Çarpım Tablosu", "url": "https://mathematives.com/sayi/1"},
        {"@type": "LearningResource", "name": "2 Çarpım Tablosu", "url": "https://mathematives.com/sayi/2"},
        {"@type": "LearningResource", "name": "3 Çarpım Tablosu", "url": "https://mathematives.com/sayi/3"},
        {"@type": "LearningResource", "name": "4 Çarpım Tablosu", "url": "https://mathematives.com/sayi/4"},
        {"@type": "LearningResource", "name": "5 Çarpım Tablosu", "url": "https://mathematives.com/sayi/5"},
        {"@type": "LearningResource", "name": "6 Çarpım Tablosu", "url": "https://mathematives.com/sayi/6"},
        {"@type": "LearningResource", "name": "7 Çarpım Tablosu", "url": "https://mathematives.com/sayi/7"},
        {"@type": "LearningResource", "name": "8 Çarpım Tablosu", "url": "https://mathematives.com/sayi/8"},
        {"@type": "LearningResource", "name": "9 Çarpım Tablosu", "url": "https://mathematives.com/sayi/9"},
        {"@type": "LearningResource", "name": "10 Çarpım Tablosu", "url": "https://mathematives.com/sayi/10"}
      ]
    }
  ]
}


export const metadata = {
  title: '1-10 Çarpım Tablosu | Başlangıç Seviyesi Tablolar',
  description: '1, 2, 3, 4, 5, 6, 7, 8, 9, 10 çarpım tablolarını öğrenin. Başlangıç seviyesi için kolay anlaşılır açıklamalar, görsel örnekler ve pratik alıştırmalar.',
  keywords: '1-10 çarpım tablosu, çarpım tablosu, çarpma işlemi, matematik öğrenme',
  alternates: {
    canonical: '/1-10',
  },
}

export default function MultiplicationTable1to10() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <RangePage
        rangeStart={1}
        rangeEnd={10}
        nextRangeUrl="/11-20"
        difficultyLevel="beginner"
        difficultyColor="from-blue-50 to-indigo-50"
      />
    </>
  )
}
