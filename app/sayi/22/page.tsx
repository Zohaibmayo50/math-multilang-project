import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mathematives.com/sayi/22#webpage",
      "url": "https://mathematives.com/sayi/22",
      "name": "22 Çarpım Tablosu - Çift Sayı Desenleri",
      "description": "22 çarpım tablosu ile 2 ve 11 tablolarının ilişkisini öğrenin. Çift sayı desenleri ve kolay çarpma stratejileri.",
      "isPartOf": {
        "@id": "https://mathematives.com/#website"
      },
      "about": {
        "@id": "https://mathematives.com/sayi/22#learningresource"
      },
      "breadcrumb": {
        "@id": "https://mathematives.com/sayi/22#breadcrumb"
      },
      "inLanguage": "tr-TR"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mathematives.com/sayi/22#breadcrumb",
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
            "@id": "https://mathematives.com/sayi/22",
            "name": "22 Çarpım Tablosu"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://mathematives.com/sayi/22#learningresource",
      "name": "22 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "22 ile çarpma: 2 ve 11 tablolarının birleşimi (2×11=22), çift sayı desenleri ve ikiye katlama.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "22 çarpım tablosu, 2×11 ilişkisi, çift sayılar",
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
  title: '22 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '22 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '22 çarpım tablosu, yirmi iki çarpım tablosu, 22 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
  alternates: {
    canonical: '/sayi/22',
  },
}

export default function Number22Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={22} rangeStart={21} rangeEnd={30} />
    </>
  )
}
