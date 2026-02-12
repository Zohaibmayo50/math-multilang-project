import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mathematives.com/sayi/29#webpage",
      "url": "https://mathematives.com/sayi/29",
      "name": "29 Çarpım Tablosu - Asal Sayı Desenleri",
      "description": "29 çarpım tablosu ile asal sayı özelliklerini keşfedin. İleri seviye çarpma becerileri geliştirin.",
      "isPartOf": {"@id": "https://mathematives.com/#website"},
      "about": {"@id": "https://mathematives.com/sayi/29#learningresource"},
      "breadcrumb": {"@id": "https://mathematives.com/sayi/29#breadcrumb"},
      "inLanguage": "tr-TR"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mathematives.com/sayi/29#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "item": {"@id": "https://mathematives.com/", "name": "Ana Sayfa"}},
        {"@type": "ListItem", "position": 2, "item": {"@id": "https://mathematives.com/21-30", "name": "21-30 Çarpım Tablosu"}},
        {"@type": "ListItem", "position": 3, "item": {"@id": "https://mathematives.com/sayi/29", "name": "29 Çarpım Tablosu"}}
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://mathematives.com/sayi/29#learningresource",
      "name": "29 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "29 ile çarpma: Asal sayı özellikleri ve ileri düzey çarpma pratikleri.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "29 çarpım tablosu, asal sayı kavramı, ileri çarpma",
      "typicalAgeRange": "8-11",
      "inLanguage": "tr-TR",
      "educationalUse": ["practice", "self-study"],
      "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]},
      "isPartOf": {"@id": "https://mathematives.com/21-30#learningresource"}
    }
  ]
}

export const metadata = {
  title: '29 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '29 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '29 çarpım tablosu, yirmi dokuz çarpım tablosu, 29 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
  alternates: {
    canonical: '/sayi/29',
  },
}

export default function Number29Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={29} rangeStart={21} rangeEnd={30} />
    </>
  )
}
