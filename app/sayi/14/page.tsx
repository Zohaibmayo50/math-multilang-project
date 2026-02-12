import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mathematives.com/sayi/14#webpage",
      "url": "https://mathematives.com/sayi/14",
      "name": "14 Çarpım Tablosu - İki Haftalık Döngü",
      "description": "14 çarpım tablosu ile hafta ve zaman kavramlarını öğrenin. 7×2 ilişkisi ve pratik stratejilerle 14 ile çarpma.",
      "isPartOf": {
        "@id": "https://mathematives.com/#website"
      },
      "about": {
        "@id": "https://mathematives.com/sayi/14#learningresource"
      },
      "breadcrumb": {
        "@id": "https://mathematives.com/sayi/14#breadcrumb"
      },
      "inLanguage": "tr-TR"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mathematives.com/sayi/14#breadcrumb",
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
            "@id": "https://mathematives.com/11-20",
            "name": "11-20 Çarpım Tablosu"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://mathematives.com/sayi/14",
            "name": "14 Çarpım Tablosu"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://mathematives.com/sayi/14#learningresource",
      "name": "14 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "14 ile çarpma: İki hafta (14 gün), 7×2 ilişkisi, çift sayı desenleri ve günlük hayat uygulamaları.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "14 çarpım tablosu, hafta hesaplama, 7 tablosunun katları",
      "typicalAgeRange": "7-10",
      "inLanguage": "tr-TR",
      "educationalUse": ["practice", "self-study", "real-world application"],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": ["student"]
      },
      "isPartOf": {
        "@id": "https://mathematives.com/11-20#learningresource"
      }
    }
  ]
}

export const metadata = {
  title: '14 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '14 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '14 çarpım tablosu, on dört çarpım tablosu, 14 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
  alternates: {
    canonical: '/sayi/14',
  },
}

export default function Number14Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={14} rangeStart={11} rangeEnd={20} />
    </>
  )
}
