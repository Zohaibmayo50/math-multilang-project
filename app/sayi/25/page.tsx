import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mathematives.com/sayi/25#webpage",
      "url": "https://mathematives.com/sayi/25",
      "name": "25 Çarpım Tablosu - Çeyrek ve Yüzde Kavramı",
      "description": "25 çarpım tablosu ile çeyrek kavramı ve yüzde hesaplamalarını öğrenin. Para hesaplama için kritik öneme sahip desenleri keşfedin.",
      "isPartOf": {
        "@id": "https://mathematives.com/#website"
      },
      "about": {
        "@id": "https://mathematives.com/sayi/25#learningresource"
      },
      "breadcrumb": {
        "@id": "https://mathematives.com/sayi/25#breadcrumb"
      },
      "inLanguage": "tr-TR"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mathematives.com/sayi/25#breadcrumb",
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
            "@id": "https://mathematives.com/sayi/25",
            "name": "25 Çarpım Tablosu"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://mathematives.com/sayi/25#learningresource",
      "name": "25 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "25 ile çarpma: Çeyrek (1/4) kavramı, yüzde hesaplamaları (25%=1/4), para hesaplama ve 25-50-75-00 son rakam deseni.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "25 çarpım tablosu, çeyrek kavramı, yüzde hesaplama, para hesaplama, 5'in karesi",
      "typicalAgeRange": "8-11",
      "inLanguage": "tr-TR",
      "educationalUse": ["practice", "self-study", "real-world application"],
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
  title: '25 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '25 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '25 çarpım tablosu, yirmi beş çarpım tablosu, 25 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
  alternates: {
    canonical: '/sayi/25',
  },
}

export default function Number25Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={25} rangeStart={21} rangeEnd={30} />
    </>
  )
}
