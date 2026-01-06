import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://carpimtablosu.com.tr/sayi/19#webpage",
      "url": "https://carpimtablosu.com.tr/sayi/19",
      "name": "19 Çarpım Tablosu - Asal Sayı Ustası",
      "description": "19 çarpım tablosu ile asal sayılarda ustalaşın. 20-1 stratejisi ve zihinsel matematik teknikleri.",
      "isPartOf": {
        "@id": "https://carpimtablosu.com.tr/#website"
      },
      "about": {
        "@id": "https://carpimtablosu.com.tr/sayi/19#learningresource"
      },
      "breadcrumb": {
        "@id": "https://carpimtablosu.com.tr/sayi/19#breadcrumb"
      },
      "inLanguage": "tr-TR"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://carpimtablosu.com.tr/sayi/19#breadcrumb",
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
            "@id": "https://carpimtablosu.com.tr/sayi/19",
            "name": "19 Çarpım Tablosu"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://carpimtablosu.com.tr/sayi/19#learningresource",
      "name": "19 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "19 ile çarpma: Asal sayı özellikleri, 20-1 yaklaşım stratejisi, ileri düzey zihinsel matematik.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "19 çarpım tablosu, asal sayılar, 20-1 çıkarma stratejisi",
      "typicalAgeRange": "7-10",
      "inLanguage": "tr-TR",
      "educationalUse": ["practice", "self-study"],
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
  title: '19 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '19 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '19 çarpım tablosu, on dokuz çarpım tablosu, 19 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number19Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={19} rangeStart={11} rangeEnd={20} />
    </>
  )
}
