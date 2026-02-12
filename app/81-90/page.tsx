import RangePage from '../components/RangePage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mathematives.com/81-90#webpage",
      "url": "https://mathematives.com/81-90",
      "name": "81-90 Çarpım Tablosu - İleri Seviye",
      "description": "81'den 90'a kadar çarpım tablolarını öğrenin. İleri seviye matematik becerilerini geliştirmek için interaktif materyaller.",
      "isPartOf": {
        "@id": "https://mathematives.com/#website"
      },
      "about": {
        "@id": "https://mathematives.com/81-90#learningresource"
      },
      "inLanguage": "tr-TR"
    },
    {
      "@type": "LearningResource",
      "@id": "https://mathematives.com/81-90#learningresource",
      "name": "81-90 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "İleri seviye çarpım tabloları: 81'den 90'a kadar olan sayıların çarpım tablolarını pratik alıştırmalar ile öğrenin.",
      "educationalLevel": "Advanced",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "81-90 arası çarpım tablolarını anlama ve uygulama becerileri",
      "typicalAgeRange": "10-12",
      "inLanguage": "tr-TR",
      "educationalUse": ["practice", "self-study", "homework"],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": ["student"]
      }
    }
  ]
}


export const metadata = {
  title: '81-90 Çarpım Tablosu | Uzman Seviye',
  description: '81\'den 90\'a kadar çarpım tablolarını öğrenin. Uzman seviye öğrenciler için zorlu çarpma işlemleri ve stratejiler.',
  keywords: '81-90 çarpım tablosu, çarpım tablosu, çarpma işlemi, matematik öğrenme',
  alternates: {
    canonical: '/81-90',
  },
}

export default function MultiplicationTable81to90() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <RangePage
        rangeStart={81}
        rangeEnd={90}
        nextRangeUrl="/91-100"
        prevRangeUrl="/71-80"
        difficultyLevel="advanced"
        difficultyColor="from-fuchsia-50 to-pink-50"
      />
    </>
  )
}
