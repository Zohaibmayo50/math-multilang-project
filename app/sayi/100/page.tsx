import NumberPage from '@/app/components/NumberPage'
import { Metadata } from 'next'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://carpimtablosu.com.tr/sayi/100#webpage",
      "url": "https://carpimtablosu.com.tr/sayi/100",
      "name": "100 Çarpım Tablosu - Onluk Sistemin Ustası",
      "description": "100 çarpım tablosu ile onluk sistem, yüzde hesaplamaları ve yer değeri kavramında ustalaşın. En önemli çarpım tablolarından biri.",
      "isPartOf": {
        "@id": "https://carpimtablosu.com.tr/#website"
      },
      "about": {
        "@id": "https://carpimtablosu.com.tr/sayi/100#learningresource"
      },
      "breadcrumb": {
        "@id": "https://carpimtablosu.com.tr/sayi/100#breadcrumb"
      },
      "inLanguage": "tr-TR"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://carpimtablosu.com.tr/sayi/100#breadcrumb",
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
            "@id": "https://carpimtablosu.com.tr/91-100",
            "name": "91-100 Çarpım Tablosu"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://carpimtablosu.com.tr/sayi/100",
            "name": "100 Çarpım Tablosu"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://carpimtablosu.com.tr/sayi/100#learningresource",
      "name": "100 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "100 ile çarpma: Onluk sistemin temeli, yer değeri kavramı, yüzde hesaplamaları (100%=tam), sonuna iki sıfır ekleme kuralı. En kullanışlı çarpım tablolarından biri.",
      "educationalLevel": "Advanced",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "100 çarpım tablosu, onluk sistem, yer değeri, yüzde hesaplama, 10'un karesi",
      "typicalAgeRange": "9-12",
      "inLanguage": "tr-TR",
      "educationalUse": ["practice", "self-study", "real-world application", "foundational concept"],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": ["student"]
      },
      "isPartOf": {
        "@id": "https://carpimtablosu.com.tr/91-100#learningresource"
      }
    }
  ]
}

export const metadata: Metadata = {
  title: '100 Çarpım Tablosu - Kolay Öğrenme Yöntemleri',
  description: '100 çarpım tablosunu öğrenmek için eğlenceli ve etkili yöntemler. Görsel araçlar ve pratik ipuçlarıyla 100 tablosunda ustalaşın.',
  keywords: '100 çarpım tablosu, 100 tablosu, çarpım tablosu 100, matematik, çarpma işlemi',
}

export default function Number100Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={100} rangeStart={91} rangeEnd={100} />
    </>
  )
}
