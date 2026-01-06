import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://carpimtablosu.com.tr/sayi/50#webpage",
      "url": "https://carpimtablosu.com.tr/sayi/50",
      "name": "50 Çarpım Tablosu - Yarım ve Yüzde Kavramı",
      "description": "50 çarpım tablosu ile yarım (1/2) kavramı ve yüzde hesaplamalarını öğrenin. 100'ün yarısı olarak pratik hesaplama yöntemleri.",
      "isPartOf": {
        "@id": "https://carpimtablosu.com.tr/#website"
      },
      "about": {
        "@id": "https://carpimtablosu.com.tr/sayi/50#learningresource"
      },
      "breadcrumb": {
        "@id": "https://carpimtablosu.com.tr/sayi/50#breadcrumb"
      },
      "inLanguage": "tr-TR"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://carpimtablosu.com.tr/sayi/50#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@id": "https://carpimtablosu.com.tr/",
            "name": "Ana Sayfa"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@id": "https://carpimtablosu.com.tr/41-50",
            "name": "41-50 Çarpım Tablosu"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://carpimtablosu.com.tr/sayi/50",
            "name": "50 Çarpım Tablosu"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://carpimtablosu.com.tr/sayi/50#learningresource",
      "name": "50 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "50 ile çarpma: Yarım (1/2) kavramı, yüzde hesaplamaları (50%=1/2), 100'ün yarısı stratejisi ve 5×10 ilişkisi.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "50 çarpım tablosu, yarım kavramı, yüzde hesaplama, 5×10 ilişkisi",
      "typicalAgeRange": "8-11",
      "inLanguage": "tr-TR",
      "educationalUse": ["practice", "self-study", "real-world application"],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": ["student"]
      },
      "isPartOf": {
        "@id": "https://carpimtablosu.com.tr/41-50#learningresource"
      }
    }
  ]
}

export const metadata = {
  title: '50 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '50 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '50 çarpım tablosu, elli çarpım tablosu, 50 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number50Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={50} rangeStart={41} rangeEnd={50} />
    </>
  )
}
