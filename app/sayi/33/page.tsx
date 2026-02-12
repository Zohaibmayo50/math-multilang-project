import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mathematives.com/sayi/33#webpage",
      "url": "https://mathematives.com/sayi/33",
      "name": "33 Çarpım Tablosu - 3×11 İlişkisi",
      "description": "33 çarpım tablosu ile 3×11 ilişkisini öğrenin. Basamak desenleri ve çarpma stratejileri.",
      "isPartOf": {"@id": "https://mathematives.com/#website"},
      "about": {"@id": "https://mathematives.com/sayi/33#learningresource"},
      "breadcrumb": {"@id": "https://mathematives.com/sayi/33#breadcrumb"},
      "inLanguage": "tr-TR"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mathematives.com/sayi/33#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "item": {"@id": "https://mathematives.com/", "name": "Ana Sayfa"}},
        {"@type": "ListItem", "position": 2, "item": {"@id": "https://mathematives.com/31-40", "name": "31-40 Çarpım Tablosu"}},
        {"@type": "ListItem", "position": 3, "item": {"@id": "https://mathematives.com/sayi/33", "name": "33 Çarpım Tablosu"}}
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://mathematives.com/sayi/33#learningresource",
      "name": "33 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "33 ile çarpma: 3 ve 11 tablolarının birleşimi (3×11=33), çift basamak desenleri.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "33 çarpım tablosu, 3×11 ilişkisi, basamak desenleri",
      "typicalAgeRange": "8-11",
      "inLanguage": "tr-TR",
      "educationalUse": ["practice", "self-study"],
      "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]},
      "isPartOf": {"@id": "https://mathematives.com/31-40#learningresource"}
    }
  ]
}

export const metadata = {
  title: '33 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '33 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '33 çarpım tablosu, otuz üç çarpım tablosu, 33 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
  alternates: {
    canonical: '/sayi/33',
  },
}

export default function Number33Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={33} rangeStart={31} rangeEnd={40} />
    </>
  )
}
