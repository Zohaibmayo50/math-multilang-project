import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mathematives.com/sayi/15#webpage",
      "url": "https://mathematives.com/sayi/15",
      "name": "15 Çarpım Tablosu - Çeyrek Saat Kavramı",
      "description": "15 çarpım tablosu ile çeyrek saat ve zaman okumasını öğrenin. 3×5 ilişkisi ve pratik stratejilerle 15 ile çarpma.",
      "isPartOf": {
        "@id": "https://mathematives.com/#website"
      },
      "about": {
        "@id": "https://mathematives.com/sayi/15#learningresource"
      },
      "breadcrumb": {
        "@id": "https://mathematives.com/sayi/15#breadcrumb"
      },
      "inLanguage": "tr-TR"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mathematives.com/sayi/15#breadcrumb",
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
            "@id": "https://mathematives.com/sayi/15",
            "name": "15 Çarpım Tablosu"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://mathematives.com/sayi/15#learningresource",
      "name": "15 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "15 ile çarpma: Çeyrek saat (15 dakika), 3×5 ilişkisi, 5'in son rakam deseni (5-0-5-0) ve saat okuma uygulamaları.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "15 çarpım tablosu, çeyrek saat kavramı, saat okuma, 3 ve 5 tablolarının ilişkisi",
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
  title: '15 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '15 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '15 çarpım tablosu, on beş çarpım tablosu, 15 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
  alternates: {
    canonical: '/sayi/15',
  },
}

export default function Number15Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={15} rangeStart={11} rangeEnd={20} />
    </>
  )
}
