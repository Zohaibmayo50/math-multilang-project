import RangePage from '../components/RangePage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mathematives.com/61-70#webpage",
      "url": "https://mathematives.com/61-70",
      "name": "61-70 Çarpım Tablosu - İleri Seviye",
      "description": "61'den 70'e kadar çarpım tablolarını öğrenin. İleri seviye matematik becerileri için interaktif öğrenme kaynakları.",
      "isPartOf": {
        "@id": "https://mathematives.com/#website"
      },
      "about": {
        "@id": "https://mathematives.com/61-70#learningresource"
      },
      "inLanguage": "tr-TR"
    },
    {
      "@type": "LearningResource",
      "@id": "https://mathematives.com/61-70#learningresource",
      "name": "61-70 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "İleri seviye çarpım tabloları: 61'den 70'e kadar olan sayıların çarpım tablolarını pratik alıştırmalar ile öğrenin.",
      "educationalLevel": "Advanced",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "61-70 arası çarpım tablolarını anlama ve uygulama becerileri",
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
  title: '61-70 Çarpım Tablosu | Yüksek Sayılar',
  description: '61\'den 70\'e kadar çarpım tablolarını öğrenin. Yüksek sayılarla çarpma işlemleri için kapsamlı eğitim kaynakları.',
  keywords: '61-70 çarpım tablosu, çarpım tablosu, çarpma işlemi, matematik öğrenme',
  alternates: {
    canonical: '/61-70',
  },
}

export default function MultiplicationTable61to70() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <RangePage
        rangeStart={61}
        rangeEnd={70}
        prevRangeUrl="/51-60"
        nextRangeUrl="/71-80"
        difficultyLevel="advanced"
        difficultyColor="from-cyan-50 to-blue-50"
      />
    </>
  )
}
