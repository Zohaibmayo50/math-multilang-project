import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://carpimtablosu.com.tr/sayi/12#webpage",
      "url": "https://carpimtablosu.com.tr/sayi/12",
      "name": "12 Çarpım Tablosu - Düzine Kavramı",
      "description": "12 çarpım tablosu ile düzine kavramını öğrenin. Saat sistemi ve günlük hayatta sıkça kullanılan 12 tablosunda ustalaşın.",
      "isPartOf": {
        "@id": "https://carpimtablosu.com.tr/#website"
      },
      "about": {
        "@id": "https://carpimtablosu.com.tr/sayi/12#learningresource"
      },
      "breadcrumb": {
        "@id": "https://carpimtablosu.com.tr/sayi/12#breadcrumb"
      },
      "inLanguage": "tr-TR"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://carpimtablosu.com.tr/sayi/12#breadcrumb",
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
            "@id": "https://carpimtablosu.com.tr/11-20",
            "name": "11-20 Çarpım Tablosu"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://carpimtablosu.com.tr/sayi/12",
            "name": "12 Çarpım Tablosu"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://carpimtablosu.com.tr/sayi/12#learningresource",
      "name": "12 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "12 ile çarpma: Düzine kavramı, saat sistemi (12 saat), 3×4 ilişkisi ve günlük hayat uygulamaları.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "12 çarpım tablosu, düzine kavramı, saat okuma, 3 ve 4 tablolarının ilişkisi",
      "typicalAgeRange": "7-10",
      "inLanguage": "tr-TR",
      "educationalUse": ["practice", "self-study", "real-world application"],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": ["student"]
      },
      "isPartOf": {
        "@id": "https://carpimtablosu.com.tr/11-20#learningresource"
      }
    }
  ]
}

export const metadata = {
  title: '12 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '12 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '12 çarpım tablosu, on iki çarpım tablosu, 12 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number12Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={12} rangeStart={11} rangeEnd={20} />
    </>
  )
}
