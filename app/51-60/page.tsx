import RangePage from '../components/RangePage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mathematives.com/51-60#webpage",
      "url": "https://mathematives.com/51-60",
      "name": "51-60 Çarpım Tablosu - İleri Seviye",
      "description": "51'den 60'a kadar çarpım tablolarını öğrenin. İleri seviye öğrenciler için büyük sayılarla çarpma pratikleri.",
      "isPartOf": {
        "@id": "https://mathematives.com/#website"
      },
      "about": {
        "@id": "https://mathematives.com/51-60#learningresource"
      },
      "inLanguage": "tr-TR"
    },
    {
      "@type": "LearningResource",
      "@id": "https://mathematives.com/51-60#learningresource",
      "name": "51-60 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "İleri seviye çarpım tabloları: 51'den 60'a kadar olan sayıların çarpım tablolarını pratik alıştırmalar ile öğrenin.",
      "educationalLevel": "Advanced",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "51-60 arası çarpım tablolarını anlama ve uygulama becerileri",
      "typicalAgeRange": "9-12",
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
  title: '51-60 Çarpım Tablosu | İleri Seviye Tablolar',
  description: '51, 52, 53, 54, 55, 56, 57, 58, 59, 60 çarpım tablolarını öğrenin. İleri seviye öğrenciler için detaylı çalışma materyalleri.',
  keywords: '51-60 çarpım tablosu, çarpım tablosu, çarpma işlemi, matematik öğrenme',
  alternates: {
    canonical: '/51-60',
  },
}

export default function MultiplicationTable51to60() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <RangePage
        rangeStart={51}
        rangeEnd={60}
        prevRangeUrl="/41-50"
        nextRangeUrl="/61-70"
        difficultyLevel="advanced"
        difficultyColor="from-violet-50 to-purple-50"
      />
    </>
  )
}
