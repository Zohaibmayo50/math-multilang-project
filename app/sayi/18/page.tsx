import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mathematives.com/sayi/18#webpage",
      "url": "https://mathematives.com/sayi/18",
      "name": "18 Çarpım Tablosu - Reşitlik Yaşı",
      "description": "18 çarpım tablosu ile çarpma becerilerinizi güçlendirin. 9×2 ve 6×3 ilişkileri ile 18 ile çarpma stratejileri.",
      "isPartOf": {
        "@id": "https://mathematives.com/#website"
      },
      "about": {
        "@id": "https://mathematives.com/sayi/18#learningresource"
      },
      "breadcrumb": {
        "@id": "https://mathematives.com/sayi/18#breadcrumb"
      },
      "inLanguage": "tr-TR"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mathematives.com/sayi/18#breadcrumb",
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
            "@id": "https://mathematives.com/11-20",
            "name": "11-20 Çarpım Tablosu"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://mathematives.com/sayi/18",
            "name": "18 Çarpım Tablosu"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://mathematives.com/sayi/18#learningresource",
      "name": "18 Çarpım Tablosu Öğrenme Kaynağı",
      "description": "18 ile çarpma: 9×2 ve 6×3 ilişkisi, çift sayı desenleri, rakamlar toplamı 9'un katı kuralı.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "18 çarpım tablosu, 9 ve 6 tablolarının ilişkisi, 9'un katları kuralı",
      "typicalAgeRange": "7-10",
      "inLanguage": "tr-TR",
      "educationalUse": ["practice", "self-study"],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": ["student"]
      },
      "isPartOf": {
        "@id": "https://mathematives.com/11-20#learningresource"
      }
    }
  ]
}

export const metadata = {
  title: '18 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '18 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '18 çarpım tablosu, on sekiz çarpım tablosu, 18 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
  alternates: {
    canonical: '/sayi/18',
  },
}

export default function Number18Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={18} rangeStart={11} rangeEnd={20} />
    </>
  )
}
