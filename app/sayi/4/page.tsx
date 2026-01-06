import NumberPage from '../../components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://carpimtablosu.com.tr/sayi/4#webpage",
      "url": "https://carpimtablosu.com.tr/sayi/4",
      "name": "4 Çarpım Tablosu - Dörtlü Desenler",
      "description": "4 çarpım tablosu ile ikiye katlama tekniklerini ve dörtgen şekil ilişkilerini öğrenin. 2 tablosunu ikiye katlayarak 4 tablosunu keşfedin.",
      "isPartOf": {
        "@id": "https://carpimtablosu.com.tr/#website"
      },
      "about": {
        "@id": "https://carpimtablosu.com.tr/sayi/4#learningresource"
      },
      "breadcrumb": {
        "@id": "https://carpimtablosu.com.tr/sayi/4#breadcrumb"
      },
      "inLanguage": "tr-TR"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://carpimtablosu.com.tr/sayi/4#breadcrumb",
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
            "@id": "https://carpimtablosu.com.tr/sayi/4",
            "name": "4 Çarpım Tablosu"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://carpimtablosu.com.tr/sayi/4#learningresource",
      "name": "4 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "4 ile çarpma: İkiye katlama stratejisi (2×2=4), dörtgen şekiller ve geometrik desenler ile 4 tablosunu anlayın.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "4 çarpım tablosu, ikiye katlama, dörtgen kavramı, çift sayılar",
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
  title: '4 Çarpım Tablosu | 4 İle Çarpmayı Öğrenin',
  description: '4 çarpım tablosunda ikiye katlama teknikleri, geometrik desenler ve etkili pratik yöntemleri kullanarak ustalaşın. Güçlü çarpma becerileri oluşturun.',
}

export default function MultiplicationTableOf4() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={4} rangeStart={1} rangeEnd={10} />
    </>
  )
}
