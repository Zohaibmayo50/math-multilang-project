import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mathematives.com/sayi/28#webpage",
      "url": "https://mathematives.com/sayi/28",
      "name": "28 Çarpım Tablosu - 4×7 İlişkisi",
      "description": "28 çarpım tablosu ile 4×7 ilişkisini öğrenin. Hafta günleri ve ay kavramları ile pratik uygulamalar.",
      "isPartOf": {"@id": "https://mathematives.com/#website"},
      "about": {"@id": "https://mathematives.com/sayi/28#learningresource"},
      "breadcrumb": {"@id": "https://mathematives.com/sayi/28#breadcrumb"},
      "inLanguage": "tr-TR"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mathematives.com/sayi/28#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "item": {"@id": "https://mathematives.com/", "name": "Ana Sayfa"}},
        {"@type": "ListItem", "position": 2, "item": {"@id": "https://mathematives.com/21-30", "name": "21-30 Çarpım Tablosu"}},
        {"@type": "ListItem", "position": 3, "item": {"@id": "https://mathematives.com/sayi/28", "name": "28 Çarpım Tablosu"}}
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://mathematives.com/sayi/28#learningresource",
      "name": "28 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "28 ile çarpma: 4 hafta=28 gün, 4×7 ilişkisi ve zaman hesaplama becerileri.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "28 çarpım tablosu, 4×7 ilişkisi, ay ve hafta kavramı",
      "typicalAgeRange": "8-11",
      "inLanguage": "tr-TR",
      "educationalUse": ["practice", "self-study", "real-world application"],
      "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]},
      "isPartOf": {"@id": "https://mathematives.com/21-30#learningresource"}
    }
  ]
}

export const metadata = {
  title: '28 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '28 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '28 çarpım tablosu, yirmi sekiz çarpım tablosu, 28 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
  alternates: {
    canonical: '/sayi/28',
  },
}

export default function Number28Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={28} rangeStart={21} rangeEnd={30} />
    </>
  )
}
