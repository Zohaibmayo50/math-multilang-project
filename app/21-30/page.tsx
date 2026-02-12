import RangePage from '../components/RangePage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mathematives.com/21-30#webpage",
      "url": "https://mathematives.com/21-30",
      "name": "21-30 Çarpım Tablosu - Orta Seviye",
      "description": "21'den 30'a kadar çarpım tablolarını öğrenin. Orta seviye öğrenciler için interaktif alıştırmalar ve pratik materyalleri.",
      "isPartOf": {
        "@id": "https://mathematives.com/#website"
      },
      "about": {
        "@id": "https://mathematives.com/21-30#learningresource"
      },
      "inLanguage": "tr-TR"
    },
    {
      "@type": "LearningResource",
      "@id": "https://mathematives.com/21-30#learningresource",
      "name": "21-30 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "Orta seviye çarpım tabloları: 21'den 30'a kadar olan sayıların çarpım tablolarını pratik alıştırmalar ile öğrenin.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "21-30 arası çarpım tablolarını anlama ve uygulama becerileri",
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
  title: '21-30 Çarpım Tablosu | Orta Seviye Tablolar',
  description: '21\'den 30\'a kadar çarpım tablolarını öğrenin. Orta seviye öğrenciler için detaylı açıklamalar ve pratik egzersizleri.',
  keywords: '21-30 çarpım tablosu, çarpım tablosu, çarpma işlemi, matematik öğrenme',
  alternates: {
    canonical: '/21-30',
  },
}

export default function MultiplicationTable21to30() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <RangePage
        rangeStart={21}
        rangeEnd={30}
        prevRangeUrl="/11-20"
        nextRangeUrl="/31-40"
        difficultyLevel="intermediate"
        difficultyColor="from-purple-50 to-pink-50"
      />
    </>
  )
}
