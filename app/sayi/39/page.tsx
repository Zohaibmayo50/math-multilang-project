import NumberPage from '@/app/components/NumberPage'

const schemaData = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://mathematives.com/sayi/39#webpage", "url": "https://mathematives.com/sayi/39", "name": "39 Çarpım Tablosu", "description": "39 çarpım tablosu ile 3×13 ilişkisi.", "isPartOf": {"@id": "https://mathematives.com/#website"}, "about": {"@id": "https://mathematives.com/sayi/39#learningresource"}, "breadcrumb": {"@id": "https://mathematives.com/sayi/39#breadcrumb"}, "inLanguage": "tr-TR"}, {"@type": "BreadcrumbList", "@id": "https://mathematives.com/sayi/39#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://mathematives.com/", "name": "Ana Sayfa"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://mathematives.com/31-40", "name": "31-40 Çarpım Tablosu"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://mathematives.com/sayi/39", "name": "39 Çarpım Tablosu"}}]}, {"@type": "LearningResource", "@id": "https://mathematives.com/sayi/39#learningresource", "name": "39 Çarpım Tablosu", "description": "39 ile çarpma", "educationalLevel": "Intermediate", "learningResourceType": ["Interactive Resource", "Practice Material"], "teaches": "39 çarpım tablosu", "typicalAgeRange": "8-11", "inLanguage": "tr-TR", "educationalUse": ["practice"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://mathematives.com/31-40#learningresource"}}]}

export const metadata = {
  title: '39 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '39 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '39 çarpım tablosu, otuz dokuz çarpım tablosu, 39 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
  alternates: {
    canonical: '/sayi/39',
  },
}

export default function Number39Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><NumberPage number={39} rangeStart={31} rangeEnd={40} /></>)
}
