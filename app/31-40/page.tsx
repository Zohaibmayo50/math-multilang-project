import RangePage from '../components/RangePage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mathematives.com/31-40#webpage",
      "url": "https://mathematives.com/31-40",
      "name": "31-40 Çarpım Tablosu - Orta Seviye",
      "description": "31'den 40'a kadar çarpım tablolarını öğrenin. Orta seviye matematik becerileri geliştirmek için interaktif kaynaklar.",
      "isPartOf": {
        "@id": "https://mathematives.com/#website"
      },
      "about": {
        "@id": "https://mathematives.com/31-40#learningresource"
      },
      "inLanguage": "tr-TR"
    },
    {
      "@type": "LearningResource",
      "@id": "https://mathematives.com/31-40#learningresource",
      "name": "31-40 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "Orta seviye çarpım tabloları: 31'den 40'a kadar olan sayıların çarpım tablolarını pratik alıştırmalar ile öğrenin.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "31-40 arası çarpım tablolarını anlama ve uygulama becerileri",
      "typicalAgeRange": "8-10",
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
  title: '31-40 Çarpım Tablosu | İleri Seviye Çarpma',
  description: '31, 32, 33, 34, 35, 36, 37, 38, 39, 40 çarpım tablolarını öğrenin. İleri seviye çarpma becerileri için kapsamlı eğitim materyalleri.',
  keywords: '31-40 çarpım tablosu, çarpım tablosu, çarpma işlemi, matematik öğrenme',
  alternates: {
    canonical: '/31-40',
  },
}

export default function MultiplicationTable31to40() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <RangePage
        rangeStart={31}
        rangeEnd={40}
        prevRangeUrl="/21-30"
        nextRangeUrl="/41-50"
        difficultyLevel="intermediate"
        difficultyColor="from-orange-50 to-amber-50"
      />
    </>
  )
}
