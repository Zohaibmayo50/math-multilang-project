import RangePage from '../components/RangePage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mathematives.com/11-20#webpage",
      "url": "https://mathematives.com/11-20",
      "name": "11-20 Çarpım Tablosu - Orta Seviye",
      "description": "11'den 20'ye kadar çarpım tablolarını öğrenin. İki basamaklı sayıların çarpımı için interaktif alıştırmalar ve oyunlar.",
      "isPartOf": {
        "@id": "https://mathematives.com/#website"
      },
      "about": {
        "@id": "https://mathematives.com/11-20#learningresource"
      },
      "inLanguage": "tr-TR"
    },
    {
      "@type": "LearningResource",
      "@id": "https://mathematives.com/11-20#learningresource",
      "name": "11-20 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "İki basamaklı sayılarla çarpım: 11'den 20'ye kadar olan sayıların çarpım tablolarını pratik alıştırmalar ve interaktif oyunlar ile öğrenin.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "11, 12, 13, 14, 15, 16, 17, 18, 19, 20 çarpım tablolarını anlama ve uygulama becerileri",
      "typicalAgeRange": "7-10",
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
  title: '11-20 Çarpım Tablosu | İki Basamaklı Sayılar',
  description: '11, 12, 13, 14, 15, 16, 17, 18, 19, 20 çarpım tablolarını öğrenin. İki basamaklı sayılarla çarpma işlemlerinde ustalaşın.',
  keywords: '11-20 çarpım tablosu, çarpım tablosu, çarpma işlemi, matematik öğrenme',
  alternates: {
    canonical: '/11-20',
  },
}

export default function MultiplicationTable11to20() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <RangePage
        rangeStart={11}
        rangeEnd={20}
        nextRangeUrl="/21-30"
        prevRangeUrl="/1-10"
        difficultyLevel="intermediate"
        difficultyColor="from-yellow-50 to-orange-50"
      />
    </>
  )
}
