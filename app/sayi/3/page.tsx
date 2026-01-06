import NumberPage from '../../components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://carpimtablosu.com.tr/sayi/3#webpage",
      "url": "https://carpimtablosu.com.tr/sayi/3",
      "name": "3 Çarpım Tablosu - Üçerli Sayma",
      "description": "3 çarpım tablosu ile üçerli sayma ve basamak toplama desenlerini öğrenin. Ügenler ve geometrik şekillerde uygulayın.",
      "isPartOf": {
        "@id": "https://carpimtablosu.com.tr/#website"
      },
      "about": {
        "@id": "https://carpimtablosu.com.tr/sayi/3#learningresource"
      },
      "breadcrumb": {
        "@id": "https://carpimtablosu.com.tr/sayi/3#breadcrumb"
      },
      "inLanguage": "tr-TR"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://carpimtablosu.com.tr/sayi/3#breadcrumb",
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
            "@id": "https://carpimtablosu.com.tr/sayi/3",
            "name": "3 Çarpım Tablosu"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://carpimtablosu.com.tr/sayi/3#learningresource",
      "name": "3 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "3 ile çarpma: Üçerli sayma, basamak toplama desenleri ve geometrik şekil ilişkileri ile 3 tablosunu öğrenin.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "3 çarpım tablosu, üçerli sayma, basamak toplama, üçgen kavramı",
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
  title: '3 Çarpım Tablosu | 3 İle Çarpmayı Öğrenin',
  description: '3 çarpım tablosunu basamak toplama desenleri, atlayıcı sayma stratejileri ve pratik ipuclarıyla öğrenin. Kanıtlanmış yöntemlerle bu önemli tabloda ustalaşın.',
}

export default function MultiplicationTableOf3() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={3} rangeStart={1} rangeEnd={10} />
    </>
  )
}
