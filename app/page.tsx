import Hero from './components/Hero'
import DefinitionSection from './components/DefinitionSection'
import WhyItMatters from './components/WhyItMatters'
import HowToLearn from './components/HowToLearn'
import LearningPaths from './components/LearningPaths'
import PracticePreview from './components/PracticePreview'
import GamesSection from './components/GamesSection'
import PrintableExercises from './components/PrintableExercises'
import AudienceSection from './components/AudienceSection'
import Footer from './components/Footer'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://carpimtablosu.com.tr/#website",
      "url": "https://carpimtablosu.com.tr/",
      "name": "Çarpım Tablosu",
      "description": "1'den 100'e kadar çarpım tablolarını öğrenmek için interaktif eğitim platformu. Çocuklar için görsel öğrenme araçları, pratik alıştırmaları ve eğitici oyunlar.",
      "inLanguage": "tr-TR",
      "publisher": {
        "@id": "https://carpimtablosu.com.tr/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://carpimtablosu.com.tr/sayi/{search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://carpimtablosu.com.tr/#webpage",
      "url": "https://carpimtablosu.com.tr/",
      "name": "Çarpım Tablosu - 1'den 100'e Kadar Tüm Tablolar",
      "description": "Çocuklar için interaktif çarpım tablosu öğrenme platformu. 1-100 arası tüm çarpım tablolarını pratik yaparak öğrenin. Görsel alıştırmalar, oyunlar ve yazdırılabilir çalışma sayfaları.",
      "isPartOf": {
        "@id": "https://carpimtablosu.com.tr/#website"
      },
      "about": {
        "@id": "https://carpimtablosu.com.tr/#learningresource"
      },
      "inLanguage": "tr-TR",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://carpimtablosu.com.tr/og-image.jpg",
        "width": 1200,
        "height": 630
      }
    },
    {
      "@type": "EducationalOrganization",
      "@id": "https://carpimtablosu.com.tr/#organization",
      "name": "Çarpım Tablosu",
      "url": "https://carpimtablosu.com.tr/",
      "description": "İlkokul öğrencilerine çarpım tablolarını öğreten eğitim platformu",
      "areaServed": "TR",
      "availableLanguage": "tr"
    },
    {
      "@type": "LearningResource",
      "@id": "https://carpimtablosu.com.tr/#learningresource",
      "name": "Çarpım Tablosu Öğrenme Platformu",
      "description": "1'den 100'e kadar çarpım tablolarını öğrenmek için kapsamlı eğitim kaynağı. Her sayı için detaylı açıklamalar, desenler, pratik stratejileri ve interaktif alıştırmalar.",
      "educationalLevel": "Elementary",
      "learningResourceType": [
        "Interactive Resource",
        "Practice Material",
        "Educational Game",
        "Worksheet"
      ],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": [
          "student",
          "parent",
          "teacher"
        ]
      },
      "inLanguage": "tr-TR",
      "educationalUse": [
        "practice",
        "self-study",
        "homework",
        "classroom activity"
      ],
      "keywords": [
        "çarpım tablosu",
        "matematik öğrenme",
        "ilkokul matematik",
        "çarpma işlemi",
        "çarpım tablosu ezberleme",
        "matematik pratik",
        "çarpma alıştırmaları",
        "çarpım tablosu oyunları"
      ],
      "teaches": "Çarpma işlemi ve çarpım tablolarını anlama, uygulama ve ezberleme becerileri",
      "typicalAgeRange": "6-12"
    }
  ]
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <main className="min-h-screen">
        {/* Hero Section - Contains the only H1 on the page */}
        <Hero />
      
      {/* Contextual Bridge: Learning Paths (Core Content Links) */}
      <LearningPaths />
      
      {/* Supplementary: Practice and Games */}
      <PracticePreview />
      
      {/* Games Section */}
      <GamesSection />
      
      {/* Printable Exercises */}
      <PrintableExercises />
      
      {/* Macro Context: Definition Section */}
      <DefinitionSection />
      
      {/* Attribute Processing: Why It Matters */}
      <WhyItMatters />
      
      {/* Learning Methodology */}
      <HowToLearn />
      
      {/* Trust & Audience Expansion */}
      <AudienceSection />
      
      {/* Footer */}
      <Footer />
    </main>
    </>
  )
}
