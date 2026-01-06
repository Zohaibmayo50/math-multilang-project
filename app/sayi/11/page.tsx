import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://carpimtablosu.com.tr/sayi/11#webpage",
      "url": "https://carpimtablosu.com.tr/sayi/11",
      "name": "11 Çarpım Tablosu - İki Basamaklı Sayılara Giriş",
      "description": "11 çarpım tablosu ile iki basamaklı sayılara geçiş yapın. Kolay desen ve stratejilerle 11 ile çarpma işlemini öğrenin.",
      "isPartOf": {
        "@id": "https://carpimtablosu.com.tr/#website"
      },
      "about": {
        "@id": "https://carpimtablosu.com.tr/sayi/11#learningresource"
      },
      "breadcrumb": {
        "@id": "https://carpimtablosu.com.tr/sayi/11#breadcrumb"
      },
      "inLanguage": "tr-TR"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://carpimtablosu.com.tr/sayi/11#breadcrumb",
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
            "@id": "https://carpimtablosu.com.tr/11-20",
            "name": "11-20 Çarpım Tablosu"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://carpimtablosu.com.tr/sayi/11",
            "name": "11 Çarpım Tablosu"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://carpimtablosu.com.tr/sayi/11#learningresource",
      "name": "11 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "11 ile çarpma: İki basamaklı sayılara giriş, rakam tekrarı deseni (11×2=22, 11×3=33), kolay ezber stratejileri.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "11 çarpım tablosu, iki basamaklı sayılar, rakam desenleri",
      "typicalAgeRange": "7-10",
      "inLanguage": "tr-TR",
      "educationalUse": ["practice", "self-study"],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": ["student"]
      },
      "isPartOf": {
        "@id": "https://carpimtablosu.com.tr/11-20#learningresource"
      }
    }
  ]
}

export const metadata = {
  title: '11 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '11 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '11 çarpım tablosu, on bir çarpım tablosu, 11 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number11Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={11} rangeStart={11} rangeEnd={20} />
    </>
  )
}
