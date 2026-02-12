import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mathematives.com/sayi/7#webpage",
      "url": "https://mathematives.com/sayi/7",
      "name": "7 Çarpım Tablosu - Yedili Sistemler",
      "description": "7 çarpım tablosu ile yedili sayma desenlerini öğrenin. Hafta günleri ve periyodik desenlerle pratik uygulamalar.",
      "isPartOf": {
        "@id": "https://mathematives.com/#website"
      },
      "about": {
        "@id": "https://mathematives.com/sayi/7#learningresource"
      },
      "breadcrumb": {
        "@id": "https://mathematives.com/sayi/7#breadcrumb"
      },
      "inLanguage": "tr-TR"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mathematives.com/sayi/7#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@id": "https://mathematives.com/",
            "name": "Ana Sayfa"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@id": "https://mathematives.com/1-10",
            "name": "1-10 Çarpım Tablosu"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://mathematives.com/sayi/7",
            "name": "7 Çarpım Tablosu"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://mathematives.com/sayi/7#learningresource",
      "name": "7 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "7 ile çarpma: Yedili sayma, hafta günleri ilişkisi ve zorlayıcı ama düzenli desenleri ile 7 tablosunu keşfedin.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "7 çarpım tablosu, yedili sayma, hafta günleri kavramı",
      "typicalAgeRange": "6-9",
      "inLanguage": "tr-TR",
      "educationalUse": ["practice", "self-study"],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": ["student"]
      },
      "isPartOf": {
        "@id": "https://mathematives.com/1-10#learningresource"
      }
    }
  ]
}

export const metadata = {
  title: '7 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '7 çarpım tablosunu eğlenceli oyunlar, interaktif alıştırmalar ve yazdırılabilir çalışma kağıtları ile öğrenin. Ücretsiz pratik araçları keşfedin.',
  keywords: '7 çarpım tablosu, yedi çarpım tablosu, matematik oyunları, çarpma alıştırmaları',
  alternates: {
    canonical: '/sayi/7',
  },
}

export default function Number7Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={7} rangeStart={1} rangeEnd={10} />
    </>
  )
}
