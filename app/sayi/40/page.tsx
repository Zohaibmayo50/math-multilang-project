import NumberPage from '@/app/components/NumberPage'

const schemaData = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://mathematives.com/sayi/40#webpage", "url": "https://mathematives.com/sayi/40", "name": "40 Çarpım Tablosu - Kırk Sistem", "description": "40 çarpım tablosu ile 4×10, 5×8 ilişkileri ve onluk katlama.", "isPartOf": {"@id": "https://mathematives.com/#website"}, "about": {"@id": "https://mathematives.com/sayi/40#learningresource"}, "breadcrumb": {"@id": "https://mathematives.com/sayi/40#breadcrumb"}, "inLanguage": "tr-TR"}, {"@type": "BreadcrumbList", "@id": "https://mathematives.com/sayi/40#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://mathematives.com/", "name": "Ana Sayfa"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://mathematives.com/31-40", "name": "31-40 Çarpım Tablosu"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://mathematives.com/sayi/40", "name": "40 Çarpım Tablosu"}}]}, {"@type": "LearningResource", "@id": "https://mathematives.com/sayi/40#learningresource", "name": "40 Çarpım Tablosu", "description": "40 ile çarpma: 4×10, 5×8 ilişkisi", "educationalLevel": "Intermediate", "learningResourceType": ["Interactive Resource", "Practice Material"], "teaches": "40 çarpım tablosu", "typicalAgeRange": "8-11", "inLanguage": "tr-TR", "educationalUse": ["practice"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://mathematives.com/31-40#learningresource"}}]}

export const metadata = {
  title: '40 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '40 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '40 çarpım tablosu, kırk çarpım tablosu, 40 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
  alternates: {
    canonical: '/sayi/40',
  },
}

export default function Number40Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><NumberPage number={40} rangeStart={31} rangeEnd={40} /></>)
}
