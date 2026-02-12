import NumberPage from '@/app/components/NumberPage'

const schemaData = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://mathematives.com/sayi/76#webpage", "url": "https://mathematives.com/sayi/76", "name": "76 Çarpım Tablosu", "description": "76 çarpım tablosu ile çarpma becerileri.", "isPartOf": {"@id": "https://mathematives.com/#website"}, "about": {"@id": "https://mathematives.com/sayi/76#learningresource"}, "breadcrumb": {"@id": "https://mathematives.com/sayi/76#breadcrumb"}, "inLanguage": "tr-TR"}, {"@type": "BreadcrumbList", "@id": "https://mathematives.com/sayi/76#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://mathematives.com/", "name": "Ana Sayfa"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://mathematives.com/71-80", "name": "71-80 Çarpım Tablosu"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://mathematives.com/sayi/76", "name": "76 Çarpım Tablosu"}}]}, {"@type": "LearningResource", "@id": "https://mathematives.com/sayi/76#learningresource", "name": "76 Çarpım Tablosu", "description": "76 ile çarpma", "educationalLevel": "Advanced", "learningResourceType": ["Interactive Resource", "Practice Material"], "teaches": "76 çarpım tablosu", "typicalAgeRange": "10-12", "inLanguage": "tr-TR", "educationalUse": ["practice"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://mathematives.com/71-80#learningresource"}}]}

export const metadata = {
  title: '76 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '76 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '76 çarpım tablosu, yetmiş altı çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
  alternates: {
    canonical: '/sayi/76',
  },
}

export default function Number76Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><NumberPage number={76} rangeStart={71} rangeEnd={80} /></>)
}
