import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mathematives.com/sayi/21#webpage",
      "url": "https://mathematives.com/sayi/21",
      "name": "21 Çarpım Tablosu - Yirmili Sistemler",
      "description": "21 çarpım tablosu ile yirmili sayı sistemini keşfedin. 3×7 ilişkisi ve iki basamaklı sayı desenleri.",
      "isPartOf": {
        "@id": "https://mathematives.com/#website"
      },
      "about": {
        "@id": "https://mathematives.com/sayi/21#learningresource"
      },
      "breadcrumb": {
        "@id": "https://mathematives.com/sayi/21#breadcrumb"
      },
      "inLanguage": "tr-TR"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mathematives.com/sayi/21#breadcrumb",
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
            "@id": "https://mathematives.com/21-30",
            "name": "21-30 Çarpım Tablosu"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://mathematives.com/sayi/21",
            "name": "21 Çarpım Tablosu"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://mathematives.com/sayi/21#learningresource",
      "name": "21 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "21 ile çarpma: 3 ve 7 tablolarının birleşimi (3×7=21), yirmili sistem ve orta seviye çarpma becerileri.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "21 çarpım tablosu, 3×7 ilişkisi, iki basamaklı çarpma",
      "typicalAgeRange": "8-11",
      "inLanguage": "tr-TR",
      "educationalUse": ["practice", "self-study"],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": ["student"]
      },
      "isPartOf": {
        "@id": "https://mathematives.com/21-30#learningresource"
      }
    }
  ]
}

export const metadata = {
  title: '21 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '21 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '21 çarpım tablosu, yirmi bir çarpım tablosu, 21 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
  alternates: {
    canonical: '/sayi/21',
  },
}

export default function Number21Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={21} rangeStart={21} rangeEnd={30} />
    </>
  )
}
