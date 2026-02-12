import NumberPage from '../../components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mathematives.com/sayi/1#webpage",
      "url": "https://mathematives.com/sayi/1",
      "name": "1 Çarpım Tablosu - Özdeşlik Özelliği",
      "description": "1 çarpım tablosu ile çarpmanın temel kavramını öğrenin. Özdeşlik özelliği, desenler ve pratik stratejilerle 1 ile çarpma işlemini anlayın.",
      "isPartOf": {
        "@id": "https://mathematives.com/#website"
      },
      "about": {
        "@id": "https://mathematives.com/sayi/1#learningresource"
      },
      "breadcrumb": {
        "@id": "https://mathematives.com/sayi/1#breadcrumb"
      },
      "inLanguage": "tr-TR"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mathematives.com/sayi/1#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@id": "https://mathematives.com/",
            "name": "Ana Sayfa"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@id": "https://mathematives.com/1-10",
            "name": "1-10 Çarpım Tablosu"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://mathematives.com/sayi/1",
            "name": "1 Çarpım Tablosu"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://mathematives.com/sayi/1#learningresource",
      "name": "1 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "1 ile çarpma özdeşlik özelliği: 1 ile çarpılan her sayı kendisine eşittir. Çarpmanın temel kurallarını öğrenin.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "1 çarpım tablosu, özdeşlik özelliği, çarpmanın temel kavramları",
      "typicalAgeRange": "6-8",
      "inLanguage": "tr-TR",
      "educationalUse": ["practice", "self-study"],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": ["student"]
      },
      "isPartOf": {
        "@id": "https://mathematives.com/1-10#learningresource"
      }
    }
  ]
}

export const metadata = {
  title: '1 Çarpım Tablosu | 1 İle Çarpmayı Öğrenin',
  description: '1 çarpım tablosunda ustalaşın. Açık açıklamalar, desenler ve pratik stratejilerle özdeşlik özelliğini anlayın ve tüm çarpma işlemleri için temel oluşturun.',
  alternates: {
    canonical: '/sayi/1',
  },
}

export default function MultiplicationTableOf1() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={1} rangeStart={1} rangeEnd={10} />
    </>
  )
}
