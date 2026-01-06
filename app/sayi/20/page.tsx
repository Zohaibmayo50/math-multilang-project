import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://carpimtablosu.com.tr/sayi/20#webpage",
      "url": "https://carpimtablosu.com.tr/sayi/20",
      "name": "20 Çarpım Tablosu - Yirmili Sistem",
      "description": "20 çarpım tablosu ile yirmili sayma sistemini öğrenin. Kolay 0 ekleme stratejisi ve pratik uygulamalar.",
      "isPartOf": {
        "@id": "https://carpimtablosu.com.tr/#website"
      },
      "about": {
        "@id": "https://carpimtablosu.com.tr/sayi/20#learningresource"
      },
      "breadcrumb": {
        "@id": "https://carpimtablosu.com.tr/sayi/20#breadcrumb"
      },
      "inLanguage": "tr-TR"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://carpimtablosu.com.tr/sayi/20#breadcrumb",
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
            "@id": "https://carpimtablosu.com.tr/sayi/20",
            "name": "20 Çarpım Tablosu"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://carpimtablosu.com.tr/sayi/20#learningresource",
      "name": "20 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "20 ile çarpma: Yirmili sayma sistemi, 2×10 ilişkisi, sonu 0 ile biten sayı deseni, para hesaplama (20 TL).",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "20 çarpım tablosu, yirmili sistem, 10 tablosunun katları, para hesaplama",
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
  title: '20 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '20 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '20 çarpım tablosu, yirmi çarpım tablosu, 20 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number20Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={20} rangeStart={11} rangeEnd={20} />
    </>
  )
}
