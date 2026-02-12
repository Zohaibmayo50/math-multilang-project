import RangePage from '../components/RangePage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mathematives.com/71-80#webpage",
      "url": "https://mathematives.com/71-80",
      "name": "71-80 Çarpım Tablosu - İleri Seviye",
      "description": "71'den 80'e kadar çarpım tablolarını öğrenin. İleri seviye büyük sayılarla çarpma becerileri için kapsamlı kaynaklar.",
      "isPartOf": {
        "@id": "https://mathematives.com/#website"
      },
      "about": {
        "@id": "https://mathematives.com/71-80#learningresource"
      },
      "inLanguage": "tr-TR"
    },
    {
      "@type": "LearningResource",
      "@id": "https://mathematives.com/71-80#learningresource",
      "name": "71-80 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "İleri seviye çarpım tabloları: 71'den 80'e kadar olan sayıların çarpım tablolarını pratik alıştırmalar ile öğrenin.",
      "educationalLevel": "Advanced",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "71-80 arası çarpım tablolarını anlama ve uygulama becerileri",
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
  title: '71-80 Çarpım Tablosu | İleri Düzey Çarpma',
  description: '71, 72, 73, 74, 75, 76, 77, 78, 79, 80 çarpım tablolarını öğrenin. İleri düzey matematik becerileri geliştirin.',
  keywords: '71-80 çarpım tablosu, çarpım tablosu, çarpma işlemi, matematik öğrenme',
  alternates: {
    canonical: '/71-80',
  },
}

export default function MultiplicationTable71to80() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <RangePage
        rangeStart={71}
        rangeEnd={80}
        prevRangeUrl="/61-70"
        nextRangeUrl="/81-90"
        difficultyLevel="advanced"
        difficultyColor="from-lime-50 to-green-50"
      />
    </>
  )
}
