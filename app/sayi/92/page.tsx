import NumberPage from '@/app/components/NumberPage'

const schemaData = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://mathematives.com/sayi/92#webpage", "url": "https://mathematives.com/sayi/92", "name": "92 Çarpım Tablosu", "description": "92 çarpım tablosu ile çarpma becerileri.", "isPartOf": {"@id": "https://mathematives.com/#website"}, "about": {"@id": "https://mathematives.com/sayi/92#learningresource"}, "breadcrumb": {"@id": "https://mathematives.com/sayi/92#breadcrumb"}, "inLanguage": "tr-TR"}, {"@type": "BreadcrumbList", "@id": "https://mathematives.com/sayi/92#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://mathematives.com/", "name": "Ana Sayfa"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://mathematives.com/91-100", "name": "91-100 Çarpım Tablosu"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://mathematives.com/sayi/92", "name": "92 Çarpım Tablosu"}}]}, {"@type": "LearningResource", "@id": "https://mathematives.com/sayi/92#learningresource", "name": "92 Çarpım Tablosu", "description": "92 ile çarpma", "educationalLevel": "Advanced", "learningResourceType": ["Interactive Resource", "Practice Material"], "teaches": "92 çarpım tablosu", "typicalAgeRange": "10-12", "inLanguage": "tr-TR", "educationalUse": ["practice"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://mathematives.com/91-100#learningresource"}}]}
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '92 Çarpım Tablosu - Kolay Öğrenme Yöntemleri',
  description: '92 çarpım tablosunu öğrenmek için eğlenceli ve etkili yöntemler. Görsel araçlar ve pratik ipuçlarıyla 92 tablosunda ustalaşın.',
  keywords: '92 çarpım tablosu, 92 tablosu, çarpım tablosu 92, matematik, çarpma işlemi',
  alternates: {
    canonical: '/sayi/92',
  },
}

export default function Number92Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><NumberPage number={92} rangeStart={91} rangeEnd={100} /></>)
}
