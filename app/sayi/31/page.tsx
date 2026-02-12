import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mathematives.com/sayi/31#webpage",
      "url": "https://mathematives.com/sayi/31",
      "name": "31 Çarpım Tablosu - Ay Günleri",
      "description": "31 çarpım tablosu ile ay günleri kavramını öğrenin. Asal sayı özellikleri ve zaman hesaplama.",
      "isPartOf": {"@id": "https://mathematives.com/#website"},
      "about": {"@id": "https://mathematives.com/sayi/31#learningresource"},
      "breadcrumb": {"@id": "https://mathematives.com/sayi/31#breadcrumb"},
      "inLanguage": "tr-TR"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mathematives.com/sayi/31#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "item": {"@id": "https://mathematives.com/", "name": "Ana Sayfa"}},
        {"@type": "ListItem", "position": 2, "item": {"@id": "https://mathematives.com/31-40", "name": "31-40 Çarpım Tablosu"}},
        {"@type": "ListItem", "position": 3, "item": {"@id": "https://mathematives.com/sayi/31", "name": "31 Çarpım Tablosu"}}
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://mathematives.com/sayi/31#learningresource",
      "name": "31 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "31 ile çarpma: Ay günleri (31 gün), asal sayı özellikleri ve ileri çarpma becerileri.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "31 çarpım tablosu, ay günleri kavramı, asal sayı",
      "typicalAgeRange": "8-11",
      "inLanguage": "tr-TR",
      "educationalUse": ["practice", "self-study", "real-world application"],
      "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]},
      "isPartOf": {"@id": "https://mathematives.com/31-40#learningresource"}
    }
  ]
}

export const metadata = {
  title: '31 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '31 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '31 çarpım tablosu, otuz bir çarpım tablosu, 31 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
  alternates: {
    canonical: '/sayi/31',
  },
}

export default function Number31Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={31} rangeStart={31} rangeEnd={40} />
    </>
  )
}
