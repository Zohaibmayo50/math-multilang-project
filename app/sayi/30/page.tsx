import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mathematives.com/sayi/30#webpage",
      "url": "https://mathematives.com/sayi/30",
      "name": "30 Çarpım Tablosu - Yarım Saat Kavramı",
      "description": "30 çarpım tablosu ile yarım saat (30 dakika) ve ay kavramlarını öğrenin. 3×10, 5×6 ilişkileri.",
      "isPartOf": {"@id": "https://mathematives.com/#website"},
      "about": {"@id": "https://mathematives.com/sayi/30#learningresource"},
      "breadcrumb": {"@id": "https://mathematives.com/sayi/30#breadcrumb"},
      "inLanguage": "tr-TR"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mathematives.com/sayi/30#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "item": {"@id": "https://mathematives.com/", "name": "Ana Sayfa"}},
        {"@type": "ListItem", "position": 2, "item": {"@id": "https://mathematives.com/21-30", "name": "21-30 Çarpım Tablosu"}},
        {"@type": "ListItem", "position": 3, "item": {"@id": "https://mathematives.com/sayi/30", "name": "30 Çarpım Tablosu"}}
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://mathematives.com/sayi/30#learningresource",
      "name": "30 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "30 ile çarpma: Yarım saat (30 dakika), ay günleri (~30 gün), 3×10 ve 5×6 çarpan ilişkileri.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "30 çarpım tablosu, yarım saat kavramı, 3×10 ve 5×6 ilişkisi",
      "typicalAgeRange": "8-11",
      "inLanguage": "tr-TR",
      "educationalUse": ["practice", "self-study", "real-world application"],
      "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]},
      "isPartOf": {"@id": "https://mathematives.com/21-30#learningresource"}
    }
  ]
}

export const metadata = {
  title: '30 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '30 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '30 çarpım tablosu, otuz çarpım tablosu, 30 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
  alternates: {
    canonical: '/sayi/30',
  },
}

export default function Number30Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={30} rangeStart={21} rangeEnd={30} />
    </>
  )
}
