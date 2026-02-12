import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {"@type": "WebPage", "@id": "https://mathematives.com/sayi/36#webpage", "url": "https://mathematives.com/sayi/36", "name": "36 Çarpım Tablosu - 6 Kare Kavramı", "description": "36 çarpım tablosu ile 6²=36 kare kavramını öğrenin. 4×9, 6×6 ilişkileri ve geometrik desenler.", "isPartOf": {"@id": "https://mathematives.com/#website"}, "about": {"@id": "https://mathematives.com/sayi/36#learningresource"}, "breadcrumb": {"@id": "https://mathematives.com/sayi/36#breadcrumb"}, "inLanguage": "tr-TR"},
    {"@type": "BreadcrumbList", "@id": "https://mathematives.com/sayi/36#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://mathematives.com/", "name": "Ana Sayfa"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://mathematives.com/31-40", "name": "31-40 Çarpım Tablosu"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://mathematives.com/sayi/36", "name": "36 Çarpım Tablosu"}}]},
    {"@type": "LearningResource", "@id": "https://mathematives.com/sayi/36#learningresource", "name": "36 Çarpım Tablosu Öğrenme Kaynağı", "description": "36 ile çarpma: 6 kare (6²=36), 4×9 ilişkisi ve çoklu çarpan kombinasyonları.", "educationalLevel": "Intermediate", "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"], "teaches": "36 çarpım tablosu, 6² kavramı, 4×9 ve 6×6 ilişkisi", "typicalAgeRange": "8-11", "inLanguage": "tr-TR", "educationalUse": ["practice", "self-study"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://mathematives.com/31-40#learningresource"}}
  ]
}

export const metadata = {
  title: '36 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '36 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '36 çarpım tablosu, otuz altı çarpım tablosu, 36 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
  alternates: {
    canonical: '/sayi/36',
  },
}

export default function Number36Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={36} rangeStart={31} rangeEnd={40} />
    </>
  )
}
