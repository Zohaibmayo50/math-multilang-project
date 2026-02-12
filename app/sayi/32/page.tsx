import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mathematives.com/sayi/32#webpage",
      "url": "https://mathematives.com/sayi/32",
      "name": "32 Çarpım Tablosu - 2 Üssü 5",
      "description": "32 çarpım tablosu ile 2⁵=32 kavramını öğrenin. İkinin kuvvetleri ve geometrik desenler.",
      "isPartOf": {"@id": "https://mathematives.com/#website"},
      "about": {"@id": "https://mathematives.com/sayi/32#learningresource"},
      "breadcrumb": {"@id": "https://mathematives.com/sayi/32#breadcrumb"},
      "inLanguage": "tr-TR"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mathematives.com/sayi/32#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "item": {"@id": "https://mathematives.com/", "name": "Ana Sayfa"}},
        {"@type": "ListItem", "position": 2, "item": {"@id": "https://mathematives.com/31-40", "name": "31-40 Çarpım Tablosu"}},
        {"@type": "ListItem", "position": 3, "item": {"@id": "https://mathematives.com/sayi/32", "name": "32 Çarpım Tablosu"}}
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://mathematives.com/sayi/32#learningresource",
      "name": "32 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "32 ile çarpma: 2 üssü 5 (2⁵=32), ikinin kuvvetleri ve 4×8 ilişkisi.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "32 çarpım tablosu, 2⁵ kavramı, ikinin kuvvetleri",
      "typicalAgeRange": "8-11",
      "inLanguage": "tr-TR",
      "educationalUse": ["practice", "self-study"],
      "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]},
      "isPartOf": {"@id": "https://mathematives.com/31-40#learningresource"}
    }
  ]
}

export const metadata = {
  title: '32 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '32 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '32 çarpım tablosu, otuz iki çarpım tablosu, 32 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
  alternates: {
    canonical: '/sayi/32',
  },
}

export default function Number32Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={32} rangeStart={31} rangeEnd={40} />
    </>
  )
}
