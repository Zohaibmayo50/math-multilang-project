import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mathematives.com/sayi/26#webpage",
      "url": "https://mathematives.com/sayi/26",
      "name": "26 Çarpım Tablosu - İki Kat 13",
      "description": "26 çarpım tablosu ile 2×13 ilişkisini ve çift sayı desenlerini öğrenin. Orta seviye çarpma becerileri.",
      "isPartOf": {
        "@id": "https://mathematives.com/#website"
      },
      "about": {
        "@id": "https://mathematives.com/sayi/26#learningresource"
      },
      "breadcrumb": {
        "@id": "https://mathematives.com/sayi/26#breadcrumb"
      },
      "inLanguage": "tr-TR"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mathematives.com/sayi/26#breadcrumb",
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
            "@id": "https://mathematives.com/sayi/26",
            "name": "26 Çarpım Tablosu"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://mathematives.com/sayi/26#learningresource",
      "name": "26 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "26 ile çarpma: 2 ve 13 tablolarının birleşimi (2×13=26), çift sayı desenleri.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "26 çarpım tablosu, 2×13 ilişkisi, çift sayılar",
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
  title: '26 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '26 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '26 çarpım tablosu, yirmi altı çarpım tablosu, 26 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
  alternates: {
    canonical: '/sayi/26',
  },
}

export default function Number26Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={26} rangeStart={21} rangeEnd={30} />
    </>
  )
}
