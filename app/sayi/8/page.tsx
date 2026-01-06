import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://carpimtablosu.com.tr/sayi/8#webpage",
      "url": "https://carpimtablosu.com.tr/sayi/8",
      "name": "8 Çarpım Tablosu - Sekizli Desenler",
      "description": "8 çarpım tablosu ile ikiye ve dördüne katlama tekniklerini öğrenin. 2×2×2 ilişkisi ve sekizgen kavramını keşfedin.",
      "isPartOf": {
        "@id": "https://carpimtablosu.com.tr/#website"
      },
      "about": {
        "@id": "https://carpimtablosu.com.tr/sayi/8#learningresource"
      },
      "breadcrumb": {
        "@id": "https://carpimtablosu.com.tr/sayi/8#breadcrumb"
      },
      "inLanguage": "tr-TR"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://carpimtablosu.com.tr/sayi/8#breadcrumb",
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
            "@id": "https://carpimtablosu.com.tr/1-10",
            "name": "1-10 Çarpım Tablosu"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://carpimtablosu.com.tr/sayi/8",
            "name": "8 Çarpım Tablosu"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://carpimtablosu.com.tr/sayi/8#learningresource",
      "name": "8 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "8 ile çarpma: 4 tablosunu ikiye katlama (4×2=8), sekizli sayma ve 2ün kuvvetleri (2³=8).",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "8 çarpım tablosu, sekizli sayma, ikiye katlama, 2’nin kuvvetleri",
      "typicalAgeRange": "6-9",
      "inLanguage": "tr-TR",
      "educationalUse": ["practice", "self-study"],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": ["student"]
      },
      "isPartOf": {
        "@id": "https://carpimtablosu.com.tr/1-10#learningresource"
      }
    }
  ]
}

export const metadata = {
  title: '8 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '8 çarpım tablosunu eğlenceli oyunlar, interaktif alıştırmalar ve yazdırılabilir çalışma kağıtları ile öğrenin. Ücretsiz pratik araçları keşfedin.',
  keywords: '8 çarpım tablosu, sekiz çarpım tablosu, matematik oyunları, çarpma alıştırmaları',
}

export default function Number8Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={8} rangeStart={1} rangeEnd={10} />
    </>
  )
}
