import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://carpimtablosu.com.tr/sayi/9#webpage",
      "url": "https://carpimtablosu.com.tr/sayi/9",
      "name": "9 Çarpım Tablosu - Dokuzlu Sihirli Desenler",
      "description": "9 çarpım tablosu ile parmak triklerini ve basamak toplama sihirli kurallarını öğrenin. En eğlenceli çarpım tablosu desenlerini keşfedin.",
      "isPartOf": {
        "@id": "https://carpimtablosu.com.tr/#website"
      },
      "about": {
        "@id": "https://carpimtablosu.com.tr/sayi/9#learningresource"
      },
      "breadcrumb": {
        "@id": "https://carpimtablosu.com.tr/sayi/9#breadcrumb"
      },
      "inLanguage": "tr-TR"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://carpimtablosu.com.tr/sayi/9#breadcrumb",
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
            "@id": "https://carpimtablosu.com.tr/sayi/9",
            "name": "9 Çarpım Tablosu"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://carpimtablosu.com.tr/sayi/9#learningresource",
      "name": "9 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "9 ile çarpma: Parmak trikleri, basamak toplama kuralı (sonuçların rakamları toplamı=9), 10-1 ilişkisi ve sihirli desenler.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "9 çarpım tablosu, parmak trikeri, basamak toplama kuralı, 3²=9",
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
  title: '9 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '9 çarpım tablosunu eğlenceli oyunlar, interaktif alıştırmalar ve yazdırılabilir çalışma kağıtları ile öğrenin. Ücretsiz pratik araçları keşfedin.',
  keywords: '9 çarpım tablosu, dokuz çarpım tablosu, matematik oyunları, çarpma alıştırmaları',
}

export default function Number9Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={9} rangeStart={1} rangeEnd={10} />
    </>
  )
}
