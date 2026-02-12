import RangePage from '../components/RangePage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mathematives.com/41-50#webpage",
      "url": "https://mathematives.com/41-50",
      "name": "41-50 Çarpım Tablosu - Orta Seviye",
      "description": "41'den 50'ye kadar çarpım tablolarını öğrenin. Orta seviye matematik becerilerini geliştirmek için kapsamlı eğitim materyalleri.",
      "isPartOf": {
        "@id": "https://mathematives.com/#website"
      },
      "about": {
        "@id": "https://mathematives.com/41-50#learningresource"
      },
      "inLanguage": "tr-TR"
    },
    {
      "@type": "LearningResource",
      "@id": "https://mathematives.com/41-50#learningresource",
      "name": "41-50 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "Orta seviye çarpım tabloları: 41'den 50'ye kadar olan sayıların çarpım tablolarını pratik alıştırmalar ile öğrenin.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "41-50 arası çarpım tablolarını anlama ve uygulama becerileri",
      "typicalAgeRange": "8-11",
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
  title: '41-50 Çarpım Tablosu | Orta-İleri Seviye',
  description: '41\'den 50\'ye kadar çarpım tablolarını öğrenin. Büyük sayılarla çarpma işlemlerinde ustalaşmak için interaktif alıştırmalar.',
  keywords: '41-50 çarpım tablosu, çarpım tablosu, çarpma işlemi, matematik öğrenme',
  alternates: {
    canonical: '/41-50',
  },
}

export default function MultiplicationTable41to50() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <RangePage
        rangeStart={41}
        rangeEnd={50}
        nextRangeUrl="/51-60"
        prevRangeUrl="/31-40"
        difficultyLevel="intermediate"
        difficultyColor="from-rose-50 to-red-50"
      />
    </>
  )
}
