import NumberPage from '../../components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://carpimtablosu.com.tr/sayi/5#webpage",
      "url": "https://carpimtablosu.com.tr/sayi/5",
      "name": "5 Çarpım Tablosu - Beşerli Sayma",
      "description": "5 çarpım tablosu ile beşerli sayma öğrenin. Saat okuma ve para hesaplama için kritik öneme sahip desenleri keşfedin.",
      "isPartOf": {
        "@id": "https://carpimtablosu.com.tr/#website"
      },
      "about": {
        "@id": "https://carpimtablosu.com.tr/sayi/5#learningresource"
      },
      "breadcrumb": {
        "@id": "https://carpimtablosu.com.tr/sayi/5#breadcrumb"
      },
      "inLanguage": "tr-TR"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://carpimtablosu.com.tr/sayi/5#breadcrumb",
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
            "@id": "https://carpimtablosu.com.tr/sayi/5",
            "name": "5 Çarpım Tablosu"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://carpimtablosu.com.tr/sayi/5#learningresource",
      "name": "5 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "5 ile çarpma: Beşerli sayma, 0 ve 5 ile biten desen. Saat okuma ve para hesaplama için temel beceriler.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "5 çarpım tablosu, beşerli sayma, saat okuma, para hesaplama",
      "typicalAgeRange": "6-9",
      "inLanguage": "tr-TR",
      "educationalUse": ["practice", "self-study", "real-world application"],
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
  title: '5 Çarpım Tablosu | 5 İle Çarpmayı Öğrenin',
  description: '5 çarpım tablosunu güzel desenleri, para sayma bağlantıları ve saat söyleme uygulamalarıyla öğrenin. Bu son derece pratik tabloda ustalaşın.',
  alternates: {
    canonical: '/sayi/5',
  },
}

export default function MultiplicationTableOf5() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={5} rangeStart={1} rangeEnd={10} />
    </>
  )
}
