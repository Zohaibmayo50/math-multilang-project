import RangePage from '../components/RangePage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mathematives.com/91-100#webpage",
      "url": "https://mathematives.com/91-100",
      "name": "91-100 Çarpım Tablosu - İleri Seviye",
      "description": "91'den 100'e kadar çarpım tablolarını öğrenin. En ileri seviye çarpım tabloları için kapsamlı eğitim kaynakları.",
      "isPartOf": {
        "@id": "https://mathematives.com/#website"
      },
      "about": {
        "@id": "https://mathematives.com/91-100#learningresource"
      },
      "inLanguage": "tr-TR"
    },
    {
      "@type": "LearningResource",
      "@id": "https://mathematives.com/91-100#learningresource",
      "name": "91-100 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "En ileri seviye çarpım tabloları: 91'den 100'e kadar olan sayıların çarpım tablolarını pratik alıştırmalar ile öğrenin. 100 çarpım tablosu ile çarpma becerilerini tamamlayın.",
      "educationalLevel": "Advanced",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "91-100 arası çarpım tablolarını anlama ve uygulama becerileri",
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
  title: '91-100 Çarpım Tablosu | En Yüksek Seviye',
  description: '91, 92, 93, 94, 95, 96, 97, 98, 99, 100 çarpım tablolarını öğrenin. En yüksek seviye çarpma becerileri için komple eğitim.',
  keywords: '91-100 çarpım tablosu, çarpım tablosu, çarpma işlemi, matematik öğrenme',
  alternates: {
    canonical: '/91-100',
  },
}

export default function MultiplicationTable91to100() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <RangePage
        rangeStart={91}
        rangeEnd={100}
        prevRangeUrl="/81-90"
        difficultyLevel="advanced"
        difficultyColor="from-indigo-50 to-purple-50"
      />
    </>
  )
}
