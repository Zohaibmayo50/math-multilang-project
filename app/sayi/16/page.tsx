import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mathematives.com/sayi/16#webpage",
      "url": "https://mathematives.com/sayi/16",
      "name": "16 Çarpım Tablosu - Kare Sayı İlişkisi",
      "description": "16 çarpım tablosu ile kare sayı kavramını öğrenin. 4×4=16 ilişkisi ve kolay stratejilerle 16 ile çarpma.",
      "isPartOf": {
        "@id": "https://mathematives.com/#website"
      },
      "about": {
        "@id": "https://mathematives.com/sayi/16#learningresource"
      },
      "breadcrumb": {
        "@id": "https://mathematives.com/sayi/16#breadcrumb"
      },
      "inLanguage": "tr-TR"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mathematives.com/sayi/16#breadcrumb",
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
            "@id": "https://mathematives.com/sayi/16",
            "name": "16 Çarpım Tablosu"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://mathematives.com/sayi/16#learningresource",
      "name": "16 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "16 ile çarpma: 4'ün karesi (4×4=16), ikili katlar (8×2), çift sayı desenleri ve geometrik uygulamalar.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "16 çarpım tablosu, kare sayılar, 4 tablosunun katları",
      "typicalAgeRange": "7-10",
      "inLanguage": "tr-TR",
      "educationalUse": ["practice", "self-study"],
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
  title: '16 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '16 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '16 çarpım tablosu, on altı çarpım tablosu, 16 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
  alternates: {
    canonical: '/sayi/16',
  },
}

export default function Number16Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={16} rangeStart={11} rangeEnd={20} />
    </>
  )
}
