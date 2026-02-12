import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mathematives.com/sayi/6#webpage",
      "url": "https://mathematives.com/sayi/6",
      "name": "6 Çarpım Tablosu - Altışar Sayma",
      "description": "6 çarpım tablosu ile altışar sayma öğrenin. 2×3 ve 3×2 ilişkileri ile geometrik desenleri keşfedin.",
      "isPartOf": {
        "@id": "https://mathematives.com/#website"
      },
      "about": {
        "@id": "https://mathematives.com/sayi/6#learningresource"
      },
      "breadcrumb": {
        "@id": "https://mathematives.com/sayi/6#breadcrumb"
      },
      "inLanguage": "tr-TR"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mathematives.com/sayi/6#breadcrumb",
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
            "@id": "https://mathematives.com/1-10",
            "name": "1-10 Çarpım Tablosu"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://mathematives.com/sayi/6",
            "name": "6 Çarpım Tablosu"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://mathematives.com/sayi/6#learningresource",
      "name": "6 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "6 ile çarpma: 2 ve 3 tablolarının birleşimi (2×3), altışar sayma ve çift sayı desenleri.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "6 çarpım tablosu, altışar sayma, 2 ve 3 tablolarının ilişkisi",
      "typicalAgeRange": "6-9",
      "inLanguage": "tr-TR",
      "educationalUse": ["practice", "self-study"],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": ["student"]
      },
      "isPartOf": {
        "@id": "https://mathematives.com/1-10#learningresource"
      }
    }
  ]
}

export const metadata = {
  title: '6 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '6 çarpım tablosunu eğlenceli oyunlar, interaktif alıştırmalar ve yazdırılabilir çalışma kağıtları ile öğrenin. Ücretsiz pratik araçları keşfedin.',
  keywords: '6 çarpım tablosu, altı çarpım tablosu, matematik oyunları, çarpma alıştırmaları',
  alternates: {
    canonical: '/sayi/6',
  },
}

export default function Number6Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={6} rangeStart={1} rangeEnd={10} />
    </>
  )
}
