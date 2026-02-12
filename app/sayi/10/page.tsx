import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mathematives.com/sayi/10#webpage",
      "url": "https://mathematives.com/sayi/10",
      "name": "10 Çarpım Tablosu - Onluk Sistem Temeli",
      "description": "10 çarpım tablosu ile onluk sistem ve yer değeri kavramını öğrenin. En kolay çarpım tablosu ile matematiğin temelini anlayın.",
      "isPartOf": {
        "@id": "https://mathematives.com/#website"
      },
      "about": {
        "@id": "https://mathematives.com/sayi/10#learningresource"
      },
      "breadcrumb": {
        "@id": "https://mathematives.com/sayi/10#breadcrumb"
      },
      "inLanguage": "tr-TR"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mathematives.com/sayi/10#breadcrumb",
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
            "@id": "https://mathematives.com/sayi/10",
            "name": "10 Çarpım Tablosu"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://mathematives.com/sayi/10#learningresource",
      "name": "10 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "10 ile çarpma: Onluk sistem temeli, yer değeri kavramı ve sonuna sıfır ekleme kuralı ile en kolay çarpım tablosu.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "10 çarpım tablosu, onluk sistem, yer değeri, sıfır ekleme kuralı",
      "typicalAgeRange": "6-9",
      "inLanguage": "tr-TR",
      "educationalUse": ["practice", "self-study", "foundational concept"],
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
  title: '10 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '10 çarpım tablosunu eğlenceli oyunlar, interaktif alıştırmalar ve yazdırılabilir çalışma kağıtları ile öğrenin. Ücretsiz pratik araçları keşfedin.',
  keywords: '10 çarpım tablosu, on çarpım tablosu, matematik oyunları, çarpma alıştırmaları',
  alternates: {
    canonical: '/sayi/10',
  },
}

export default function Number10Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={10} rangeStart={1} rangeEnd={10} />
    </>
  )
}
