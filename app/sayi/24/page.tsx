import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mathematives.com/sayi/24#webpage",
      "url": "https://mathematives.com/sayi/24",
      "name": "24 Çarpım Tablosu - 24 Saat Sistemi",
      "description": "24 çarpım tablosu ile 24 saat sistemi ve günlük zaman hesaplamalarını öğrenin. 3×8, 4×6, 2×12 ilişkilerini keşfedin.",
      "isPartOf": {
        "@id": "https://mathematives.com/#website"
      },
      "about": {
        "@id": "https://mathematives.com/sayi/24#learningresource"
      },
      "breadcrumb": {
        "@id": "https://mathematives.com/sayi/24#breadcrumb"
      },
      "inLanguage": "tr-TR"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mathematives.com/sayi/24#breadcrumb",
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
            "@id": "https://mathematives.com/21-30",
            "name": "21-30 Çarpım Tablosu"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://mathematives.com/sayi/24",
            "name": "24 Çarpım Tablosu"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://mathematives.com/sayi/24#learningresource",
      "name": "24 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "24 ile çarpma: 24 saat gün sistemi, 3×8, 4×6, 2×12 çarpan ilişkileri ve zaman hesaplama.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "24 çarpım tablosu, 24 saat sistemi, çoklu çarpan ilişkileri",
      "typicalAgeRange": "8-11",
      "inLanguage": "tr-TR",
      "educationalUse": ["practice", "self-study", "real-world application"],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": ["student"]
      },
      "isPartOf": {
        "@id": "https://mathematives.com/21-30#learningresource"
      }
    }
  ]
}

export const metadata = {
  title: '24 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '24 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '24 çarpım tablosu, yirmi dört çarpım tablosu, 24 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
  alternates: {
    canonical: '/sayi/24',
  },
}

export default function Number24Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={24} rangeStart={21} rangeEnd={30} />
    </>
  )
}
