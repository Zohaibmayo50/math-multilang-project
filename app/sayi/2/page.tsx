import NumberPage from '../../components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://carpimtablosu.com.tr/sayi/2#webpage",
      "url": "https://carpimtablosu.com.tr/sayi/2",
      "name": "2 Çarpım Tablosu - İkişerli Sayma",
      "description": "2 çarpım tablosu ile ikişerli sayma ve ikiye katlama becerilerini geliştirin. Çift sayı desenleri ve pratik stratejilerle öğrenin.",
      "isPartOf": {
        "@id": "https://carpimtablosu.com.tr/#website"
      },
      "about": {
        "@id": "https://carpimtablosu.com.tr/sayi/2#learningresource"
      },
      "breadcrumb": {
        "@id": "https://carpimtablosu.com.tr/sayi/2#breadcrumb"
      },
      "inLanguage": "tr-TR"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://carpimtablosu.com.tr/sayi/2#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@id": "https://carpimtablosu.com.tr/",
            "name": "Ana Sayfa"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@id": "https://carpimtablosu.com.tr/1-10",
            "name": "1-10 Çarpım Tablosu"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://carpimtablosu.com.tr/sayi/2",
            "name": "2 Çarpım Tablosu"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://carpimtablosu.com.tr/sayi/2#learningresource",
      "name": "2 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "2 ile çarpma: İkişerli sayma, ikiye katlama ve çift sayı desenleri ile 2 çarpım tablosunu öğrenin.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "2 çarpım tablosu, ikişerli sayma, ikiye katlama, çift sayılar",
      "typicalAgeRange": "6-8",
      "inLanguage": "tr-TR",
      "educationalUse": ["practice", "self-study"],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": ["student"]
      },
      "isPartOf": {
        "@id": "https://carpimtablosu.com.tr/1-10#learningresource"
      }
    }
  ]
}

export const metadata = {
  title: '2 Çarpım Tablosu | 2 İle Çarpmayı Öğrenin',
  description: '2 çarpım tablosunda ustalaşın. İkiye katlama stratejileri, desenler ve pratik örneklerle en temel çarpım tablosunu güvenle öğrenin.',
  alternates: {
    canonical: '/sayi/2',
  },
}

export default function MultiplicationTableOf2() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={2} rangeStart={1} rangeEnd={10} />
    </>
  )
}
