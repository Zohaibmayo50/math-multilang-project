import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://carpimtablosu.com.tr/sayi/13#webpage",
      "url": "https://carpimtablosu.com.tr/sayi/13",
      "name": "13 Çarpım Tablosu - Uğurlu Sayı Desenleri",
      "description": "13 çarpım tablosu ile matematik becerilerinizi geliştirin. Desenler ve kolay stratejilerle 13 ile çarpma işleminde ustalaşın.",
      "isPartOf": {
        "@id": "https://carpimtablosu.com.tr/#website"
      },
      "about": {
        "@id": "https://carpimtablosu.com.tr/sayi/13#learningresource"
      },
      "breadcrumb": {
        "@id": "https://carpimtablosu.com.tr/sayi/13#breadcrumb"
      },
      "inLanguage": "tr-TR"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://carpimtablosu.com.tr/sayi/13#breadcrumb",
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
            "@id": "https://carpimtablosu.com.tr/sayi/13",
            "name": "13 Çarpım Tablosu"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://carpimtablosu.com.tr/sayi/13#learningresource",
      "name": "13 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "13 ile çarpma: Asal sayı özellikleri, zihinsel matematik stratejileri, 10+3 ayrıştırma yöntemi.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "13 çarpım tablosu, asal sayılar, zihinsel matematik",
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
  title: '13 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '13 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '13 çarpım tablosu, on üç çarpım tablosu, 13 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number13Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={13} rangeStart={11} rangeEnd={20} />
    </>
  )
}
