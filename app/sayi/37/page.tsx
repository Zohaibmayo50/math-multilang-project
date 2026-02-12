import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {"@type": "WebPage", "@id": "https://mathematives.com/sayi/37#webpage", "url": "https://mathematives.com/sayi/37", "name": "37 Çarpım Tablosu - Asal Sayı", "description": "37 çarpım tablosu ile asal sayı özelliklerini keşfedin. İleri seviye çarpma becerileri.", "isPartOf": {"@id": "https://mathematives.com/#website"}, "about": {"@id": "https://mathematives.com/sayi/37#learningresource"}, "breadcrumb": {"@id": "https://mathematives.com/sayi/37#breadcrumb"}, "inLanguage": "tr-TR"},
    {"@type": "BreadcrumbList", "@id": "https://mathematives.com/sayi/37#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://mathematives.com/", "name": "Ana Sayfa"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://mathematives.com/31-40", "name": "31-40 Çarpım Tablosu"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://mathematives.com/sayi/37", "name": "37 Çarpım Tablosu"}}]},
    {"@type": "LearningResource", "@id": "https://mathematives.com/sayi/37#learningresource", "name": "37 Çarpım Tablosu Öğrenme Kaynağı", "description": "37 ile çarpma: Asal sayı özellikleri ve ileri düzey çarpma pratikleri.", "educationalLevel": "Intermediate", "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"], "teaches": "37 çarpım tablosu, asal sayı kavramı", "typicalAgeRange": "8-11", "inLanguage": "tr-TR", "educationalUse": ["practice", "self-study"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://mathematives.com/31-40#learningresource"}}
  ]
}

export const metadata = {
  title: '37 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '37 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '37 çarpım tablosu, otuz yedi çarpım tablosu, 37 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
  alternates: {
    canonical: '/sayi/37',
  },
}

export default function Number37Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={37} rangeStart={31} rangeEnd={40} />
    </>
  )
}
