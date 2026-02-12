import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mathematives.com/sayi/34#webpage",
      "url": "https://mathematives.com/sayi/34",
      "name": "34 Çarpım Tablosu - 2×17 İlişkisi",
      "description": "34 çarpım tablosu ile 2×17 ilişkisini öğrenin. Çift sayı desenleri ve çarpma becerileri.",
      "isPartOf": {"@id": "https://mathematives.com/#website"},
      "about": {"@id": "https://mathematives.com/sayi/34#learningresource"},
      "breadcrumb": {"@id": "https://mathematives.com/sayi/34#breadcrumb"},
      "inLanguage": "tr-TR"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mathematives.com/sayi/34#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "item": {"@id": "https://mathematives.com/", "name": "Ana Sayfa"}},
        {"@type": "ListItem", "position": 2, "item": {"@id": "https://mathematives.com/31-40", "name": "31-40 Çarpım Tablosu"}},
        {"@type": "ListItem", "position": 3, "item": {"@id": "https://mathematives.com/sayi/34", "name": "34 Çarpım Tablosu"}}
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://mathematives.com/sayi/34#learningresource",
      "name": "34 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "34 ile çarpma: 2×17 ilişkisi, çift sayı özellikleri ve ikiye katlama.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "34 çarpım tablosu, 2×17 ilişkisi, çift sayılar",
      "typicalAgeRange": "8-11",
      "inLanguage": "tr-TR",
      "educationalUse": ["practice", "self-study"],
      "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]},
      "isPartOf": {"@id": "https://mathematives.com/31-40#learningresource"}
    }
  ]
}

export const metadata = {
  title: '34 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '34 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '34 çarpım tablosu, otuz dört çarpım tablosu, 34 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
  alternates: {
    canonical: '/sayi/34',
  },
}

export default function Number34Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={34} rangeStart={31} rangeEnd={40} />
    </>
  )
}
