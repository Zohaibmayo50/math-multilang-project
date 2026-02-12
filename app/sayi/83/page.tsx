import NumberPage from '@/app/components/NumberPage'

const schemaData = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://mathematives.com/sayi/83#webpage", "url": "https://mathematives.com/sayi/83", "name": "83 Çarpım Tablosu", "description": "83 çarpım tablosu ile çarpma becerileri.", "isPartOf": {"@id": "https://mathematives.com/#website"}, "about": {"@id": "https://mathematives.com/sayi/83#learningresource"}, "breadcrumb": {"@id": "https://mathematives.com/sayi/83#breadcrumb"}, "inLanguage": "tr-TR"}, {"@type": "BreadcrumbList", "@id": "https://mathematives.com/sayi/83#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://mathematives.com/", "name": "Ana Sayfa"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://mathematives.com/81-90", "name": "81-90 Çarpım Tablosu"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://mathematives.com/sayi/83", "name": "83 Çarpım Tablosu"}}]}, {"@type": "LearningResource", "@id": "https://mathematives.com/sayi/83#learningresource", "name": "83 Çarpım Tablosu", "description": "83 ile çarpma", "educationalLevel": "Advanced", "learningResourceType": ["Interactive Resource", "Practice Material"], "teaches": "83 çarpım tablosu", "typicalAgeRange": "10-12", "inLanguage": "tr-TR", "educationalUse": ["practice"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://mathematives.com/81-90#learningresource"}}]}

export const metadata = {
  title: '83 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '83 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '83 çarpım tablosu, seksen üç çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
  alternates: {
    canonical: '/sayi/83',
  },
}

export default function Number83Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><NumberPage number={83} rangeStart={81} rangeEnd={90} /></>)
}
