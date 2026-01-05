'use client'

import Link from 'next/link'
import Footer from './Footer'
import PracticePreview from './PracticePreview'
import PrintableExercises from './PrintableExercises'
import NumberGames from './NumberGames'

interface NumberPageProps {
  number: number
  rangeStart: number
  rangeEnd: number
}

export default function NumberPage({ number, rangeStart, rangeEnd }: NumberPageProps) {
  const colors = [
    'from-blue-500 to-indigo-600',
    'from-purple-500 to-pink-600',
    'from-green-500 to-teal-600',
    'from-orange-500 to-red-600',
    'from-cyan-500 to-blue-600',
  ]
  
  const colorIndex = (number - 1) % colors.length

  // Number-specific content
  const getNumberMeaning = () => {
    const meanings: { [key: number]: string } = {
      1: "1 ile çarpmak, matematikte özel bir durumdur. Herhangi bir sayıyı 1 ile çarptığınızda, sonuç her zaman aynı sayıdır. Buna çarpmanın özdeşlik özelliği denir. Bunu 'bir şeyden kaç grubum var?' diye sormak gibi düşünün. Sadece 1 grubunuz olduğunda, tam olarak başladığınız şeye sahipsiniz.",
      2: "2 ile çarpmak, bir sayıyı ikiye katlamak demektir. Bir şeyi 2 ile çarptığınızda, onu kendi üzerine ekliyorsunuz. Bu, en pratik çarpma işlemlerinden biridir çünkü gerçek hayatta sıklıkla şeyleri ikiye katlamaya ihtiyaç duyarız—ayakkabı çiftlerini saymak, bisiklet tekerlekleri ya da bir şeyi iki kişi arasında eşit olarak bölmek gibi.",
      3: "3 ile çarpmak, bir sayıyı üç kez almak demektir. Bunu aynı sayıyı kendine üç kez eklemek olarak düşünebilirsiniz. Bu tablo, üçgenler, üçlüler ve üçerli gelen her şeyi anlamak için gereklidir.",
      4: "4 ile çarpmak, iki kez ikiye katlamak gibidir. 4 = 2 × 2 olduğundan, bir sayıyı ikiye katlayabilir ve sonra sonucu tekrar ikiye katlayabilirsiniz. Bu, 2'leri zaten biliyorsanız 4 çarpım tablosunu öğrenmeyi kolaylaştırır. 4 sayısı geometride (karelerin 4 kenarı vardır) ve zamanı ölçmede (bir saatte 4 çeyrek) sıklıkla görülür.",
      5: "5 ile çarpmak, matematikteki en güzel desenlerden birini oluşturur. 5'in tüm katları 0 veya 5 ile biter, bu da bu tabloyu çok öngörülebilir yapar. Bu, para saymak (5 kuruş, 5 lira) ve saati söylemek (5 dakikalık aralıklar) için son derece kullanışlıdır.",
    }
    return meanings[number] || `${number} ile çarpmak, ${number} sayısını tekrar tekrar ekleme demektir. Her çarptığınızda, ${number}'lik grupları sayıyorsunuz.`
  }

  const getWhyImportant = () => {
    const importance: { [key: number]: string } = {
      1: "1'in çarpım tablosu, tüm çarpma işlemlerinin temelidir. Öğrencilere sayıların bir kimliği olduğunu öğretir—1 ile çarpıldıklarında kendileri olarak kalırlar. Bu kavram, daha sonra cebirsel özellikleri anlamak için çok önemlidir. Basit görünse de, bu tabloyu öğrenmek güven oluşturur ve çarpmanın düzenli ve öngörülebilir olduğu kalıbını kurar.",
      2: "2 çarpım tablosu, genellikle öğrencilerin öğrendiği ilk gerçek çarpım tablosudur ve bunun iyi bir nedeni vardır. İkiye katlama, çocukların günlük olarak karşılaştığı doğal bir kavramdır. Bu tabloyu öğrenmek, zihinsel hesaplamayı çok daha hızlı hale getirir ve öğrencileri çift sayılara, kesirlere (yarılar) ve temel bölmeye hazırlar. Birçok öğrenci bunu en kolay tablo olarak bulur, bu da daha zor tablolar için güven oluşturur.",
      3: "3'ün çarpım tablosu, kolay ve zorlu tablolar arasındaki boşluğu kapatır. Öğrencilerin basit ikiye katlamanın ötesine geçmesini ve yeni örüntüleri tanımaya başlamasını gerektirir. Bu tablo, üçerli sayma, üçgen şekilleri anlama ve zamanla çalışma (günde üç dönem) gibi gerçek dünya bağlamlarında sürekli görülür. 3 çarpım tablosunu öğrenen öğrenciler, soyut saymayı yapabileceklerini gösterirler.",
      4: "4 çarpım tablosunu öğrenmek, öğrencilerin çift sayıları ve geometrik düşünmeyi anlamalarını güçlendirir. 4, 2'nin iki katı olduğundan, öğrenciler 2 çarpım tablosunu bir basamak taşı olarak kullanabilirler, bu da matematiksel verimliliği öğretir. Bu tablo, kareleri, alan hesaplamalarını ve çeyrek bölmeleri anlamak için gereklidir. Ayrıca sandalye ayaklarını veya araba tekerleklerini saymak gibi günlük durumlarda sıkça kullanılır.",
      5: "5'in çarpım tablosu, en pratik ve örüntü açısından zengin tablolardan biridir. Öğrenciler bunu severler çünkü her cevap 0 veya 5 ile biter, bu da onu son derece öngörülebilir yapar. Bu tablo doğrudan parayla (beşerli sayma), saati söylemekle (5 dakikalık aralıklar) ve ölçüm sistemleriyle bağlantılıdır. 5 çarpım tablosunu öğrenmek öğrencilere güven verir ve matematiğin güzel, tutarlı örüntüleri olduğunu gösterir.",
    }
    return importance[number] || `${number} çarpım tablosunu öğrenmek, öğrencilerin bu önemli sayıyla akıcılık geliştirmelerine yardımcı olur. Matematik ve günlük hayatta sıkça görülür, bu da güçlü hesaplama becerileri oluşturmak için gerekli kılar.`
  }

  const getPatterns = () => {
    const patterns: { [key: number]: { title: string; description: string }[] } = {
      1: [
        { title: "Özdeşlik Deseni", description: "1 ile çarpılan her sayı kendisine eşittir. Bu asla değişmez: 1×1=1, 1×2=2, 1×3=3, ve böyle devam eder." },
        { title: "Öngörülebilir Sıra", description: "Sonuçlar basitçe yukarı doğru sayar: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Sadece sırayla sayıları listeliyorsunuz." },
        { title: "Tüm Tabloların Temeli", description: "Her çarpım tablosu 1 ile çarpmakla başlar, bu yüzden bu desen her tabloda görülür." },
      ],
      2: [
        { title: "Sadece Çift Sayılar", description: "2'nin tüm katları çift sayılardır. Sonuçlar her zaman 0, 2, 4, 6 veya 8 ile biter." },
        { title: "İkişerli Atlayarak Sayma", description: "Her cevap bir öncekinden 2 fazladır: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20." },
        { title: "İkiye Katlama Deseni", description: "Her sonuç çarpanın tam iki katıdır: 2×5=10, 5'in iki katıdır." },
      ],
      3: [
        { title: "Basamak Toplama Deseni", description: "Her sonucun basamaklarını toplayın: 3 (3), 6 (6), 9 (9), 12 (1+2=3), 15 (1+5=6), 18 (1+8=9). 3-6-9 deseni tekrar eder!" },
        { title: "Üçerli Atlayarak Sayma", description: "Her cevap 3 artar: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30." },
        { title: "Tek-Çift Değişimi", description: "Sonuçlar değişir: tek (3), çift (6), tek (9), çift (12), öngörülebilir bir ritim oluşturur." },
      ],
      4: [
        { title: "Hep Çift Sayılar", description: "2 çarpım tablosu gibi, 4'ün tüm katları çifttir, 0, 2, 4, 6 veya 8 ile biter." },
        { title: "2'ler Tablosunun İki Katı", description: "Her cevap 2 çarpım tablosundaki karşılık gelen cevabın tam iki katıdır: 4×3=12, 2×3=6'nın iki katıdır." },
        { title: "Dörderli Atlayarak Sayma", description: "Her cevap 4 artar: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40." },
      ],
      5: [
        { title: "0 veya 5 ile Biter", description: "5'in her katı 0 veya 5 ile biter. Bu, deseni anında tanınabilir yapar." },
        { title: "Değişen Desen", description: "Sonuçlar 5 (tek) ve 0 (çift) ile bitme arasında değişir: 5, 10, 15, 20, 25, 30..." },
        { title: "10'lar Tablosunun Yarısı", description: "Her sonuç 10 çarpım tablosunun tam yarısıdır: 5×4=20, 10×4=40'ın yarısıdır." },
      ],
    }
    return patterns[number] || []
  }

  const getCommonMistakes = () => {
    const mistakes: { [key: number]: { mistake: string; solution: string }[] } = {
      1: [
        { mistake: "1×1=2 olduğunu düşünmek", solution: "Unutmayın: 1 ile çarpılan her şey kendisine eşittir. 1 grubun 1'i sadece 1'dir." },
        { mistake: "Toplama ile karıştırmak", solution: "1 ile çarpma toplamadan farklıdır. 5+1=6, ama 5×1=5." },
      ],
      2: [
        { mistake: "2×6=12 ile 2×7=14'ü karıştırmak", solution: "Atlayarak saymayı kullanın: 2, 4, 6, 8, 10, 12, 14. Atlamadan dikkatli sayın." },
        { mistake: "Büyük sayılarla kafası karışmak", solution: "Parçalara ayırın: 2×8 sadece 8+8'dir. İkiye katlamak basit toplamadır." },
      ],
      3: [
        { mistake: "3×6=18 ile 3×7=21'i karıştırmak", solution: "+3 desenini hatırlayın: 18'den sonra 21 gelir. Doğrulamak için üçerli sayın." },
        { mistake: "3×8=24 ile 3×9=27'yi karıştırmak", solution: "Basamak toplama hilesini kullanın: 24 (2+4=6) ve 27 (2+7=9), 3-6-9 desenini takip eder." },
      ],
      4: [
        { mistake: "4×7=24 olduğunu düşünmek (28 yerine)", solution: "Hatırlayın: 4×6=24, bu yüzden 4×7, 4 fazla olmalı, yani 28." },
        { mistake: "2 çarpım tablosu ile karıştırmak", solution: "4 çarpım tablosu her zaman 2 çarpım tablosunun iki katıdır. İki katına çıkararak kontrol edin." },
      ],
      5: [
        { mistake: "Sırayı karıştırmak (20'den önce 25)", solution: "Desen tutarlıdır: 5, 10, 15, 20, 25. Her biri 5 artar." },
        { mistake: "5×tek sayının her zaman 5 ile bittiğini düşünmek", solution: "Aslında 5×çift 0 ile, 5×tek 5 ile biter." },
      ],
    }
    return mistakes[number] || []
  }

  const getPracticeStrategies = () => {
    const strategies: { [key: number]: string[] } = {
      1: [
        "Her çarpmayı yüksek sesle söyleyin: '1 çarpı 1 eşittir 1, 1 çarpı 2 eşittir 2...'",
        "Tabloyu bir hafta boyunca her gün bir kez yazmayı pratik edin",
        "Deseni arayın: cevap her zaman ikinci sayıyla aynıdır",
        "Flash kartları kullanın, ancak bu tablo genellikle çok hızlı öğrenilir",
      ],
      2: [
        "Yürürken veya merdiven çıkarken ikişerli sayın: 2, 4, 6, 8...",
        "Parmaklarınızı kullanın: parmakları çift olarak tutun ve ikişerli sayın",
        "Gün boyunca kafanızda sayıları ikiye katlamayı pratik edin",
        "Yüksek sesle söyleyin: '2 çarpı 5, 5 artı 5'tir, bu da 10 eder'",
      ],
      3: [
        "Ritmik olarak üçerli sayın: 3, 6, 9, 12, 15...",
        "Parmak hilesini kullanın: parmakları 3'lü gruplar halinde tutun",
        "Cevaplarınızı kontrol etmek için basamak toplama desenine bakın (3-6-9 tekrarı)",
        "Uzun bir seans yerine günde 5-10 dakika pratik yapın",
      ],
      4: [
        "Önce 2 çarpım tablosunu öğrenin, sonra 4'leri elde etmek için her cevabı ikiye katlayın",
        "Dörderli sayın: 4, 8, 12, 16, 20...",
        "Görselleştirmek için 4'lü gruplar halindeki nesneleri kullanın (sandalye ayakları, araba tekerlekleri)",
        "Daha zor olanları (4×6, 4×7, 4×8, 4×9) ayrı olarak pratik edin",
      ],
      5: [
        "Parmaklarınızı kullanarak beşerli sayın—her parmak 5'i temsil eder",
        "Bir saate bakın ve 5 dakikalık aralıklarla sayın",
        "Parayla pratik yapın: beşlik madeni paraları sayın (5 kuruş)",
        "Unutmayın: çift çarpanlar 0 ile, tek çarpanlar 5 ile biter",
      ],
    }
    return strategies[number] || [
      `Yüksek sesle ${number}'erli saymayı pratik edin`,
      "Tabloyu bir hafta boyunca her gün yazın",
      "Kendinizi rastgele test etmek için flash kartları kullanın",
      "Bir seferde uzun çalışmak yerine her gün 5-10 dakika pratik yapın",
    ]
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Hero Section */}
      <section className="section-container bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl font-bold text-indigo-600">{number}</div>
          <div className="absolute bottom-10 right-10 text-9xl font-bold text-blue-600">×</div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 mb-6 shadow-lg">
            <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              {number}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {number} Çarpım Tablosu
          </h1>
          
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto">
            Bu sayfa, {number} çarpım tablosunu öğrenmenize ve anlamanıza yardımcı olacaktır. 
            {number}'in çarpmada nasıl davrandığını keşfedecek, desenlerini görecek ve 
            ustalaşmak için pratik yollar öğreneceksiniz. {number} çarpım tablosu, her öğrencinin 
            bilmesi gereken tam çarpma sisteminin önemli bir parçasıdır.
          </p>
        </div>
      </section>

      {/* Number Context & Meaning + Table Combined */}
      <section className="section-container bg-white py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left: Explanation */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  {number} Sayısı Çarpmada Ne Anlama Gelir?
                </h2>
                
                <p className="text-base text-slate-700 leading-relaxed mb-6">
                  {getNumberMeaning()}
                </p>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 border-2 border-blue-100">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">💡</span>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Basit Açıklama</h3>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {number} × 4 gördüğünüzde şunu düşünün: "4 grubum var ve her grupta {number} öğe var." 
                        Yani {number} × 4 = {number} + {number} + {number} + {number} = {number * 4}.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  {number} Çarpım Tablosunu Öğrenmek Neden Önemlidir
                </h2>
                
                <p className="text-base text-slate-700 leading-relaxed">
                  {getWhyImportant()}
                </p>
              </div>
            </div>

            {/* Right: Multiplication Table */}
            <div className="lg:sticky lg:top-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 text-center lg:text-left">
                {number} Çarpım Tablosu
              </h2>
              
              <div className={`bg-gradient-to-br ${colors[colorIndex]} rounded-2xl p-6 text-white shadow-xl`}>
                <div className="space-y-2">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="flex justify-between items-center bg-white/20 backdrop-blur-sm rounded-lg px-5 py-2.5 hover:bg-white/30 transition-colors">
                      <span className="font-medium text-base">{number} × {i + 1}</span>
                      <span className="font-bold text-lg">= {number * (i + 1)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patterns & Observations */}
      <section className="section-container bg-white py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            {number} Çarpım Tablosundaki Desenler
          </h2>
          
          <p className="text-base text-slate-700 mb-6 leading-relaxed">
            Desenleri anlamak öğrenmeyi daha kolay ve eğlenceli hale getirir. {number} çarpım tablosu, 
            salt ezberleme yapmadan hatırlamanıza yardımcı olabilecek güzel desenlere sahiptir.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            {getPatterns().map((pattern, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 border-2 border-amber-100">
                <h3 className="text-lg font-semibold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="text-xl">{index === 0 ? '🔄' : index === 1 ? '📊' : '✨'}</span>
                  {pattern.title}
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {pattern.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <PracticePreview rangeStart={number} rangeEnd={number} />

      {/* Interactive Games */}
      <NumberGames number={number} />

      {/* Printable Worksheets */}
      <PrintableExercises rangeStart={number} rangeEnd={number} />

      {/* How to Practice */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            {number} Çarpım Tablosu Nasıl Pratik Yapılır
          </h2>
          
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Çarpım tablolarını öğrenmek doğru stratejilerle tutarlı pratik gerektirir. 
            İşte özellikle {number} çarpım tablosunda ustalaşmak için kanıtlanmış yöntemler:
          </p>
          
          <div className="grid gap-4">
            {getPracticeStrategies().map((strategy, index) => (
              <div key={index} className="flex items-start gap-4 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-5 border-2 border-green-100">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <p className="text-slate-700 leading-relaxed pt-1">
                  {strategy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="section-container bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            {number} Tablosunu Öğrenirken Yapılan Yaygın Hatalar
          </h2>
          
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Birçok öğrenci bu tabloyu öğrenirken benzer hatalar yapar. Bu yaygın hataların 
            farkında olmak, onlardan kaçınmanıza ve daha verimli öğrenmenize yardımcı olacaktır.
          </p>
          
          <div className="space-y-6">
            {getCommonMistakes().map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border-l-4 border-red-500 shadow-md">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">⚠️</span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {item.mistake}
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      <span className="font-semibold text-green-600">Çözüm:</span> {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Multiplication Tables */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            İlgili Çarpım Tabloları
          </h2>
          
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            {number} çarpım tablosu daha büyük bir öğrenme sisteminin parçasıdır. 
            Aynı aralıktaki diğer tabloları keşfedebilir veya bir sonraki mantıksal sayıya geçebilirsiniz.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {number > 1 && (
              <Link
                href={`/number/${number - 1}`}
                className="block bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-600 mb-1">← Önceki Sayı</div>
                    <div className="text-2xl font-bold text-slate-900">
                      {number - 1} Çarpım Tablosu
                    </div>
                  </div>
                  <svg className="w-6 h-6 text-blue-600 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
              </Link>
            )}
            
            {number < 100 && (
              <Link
                href={`/number/${number + 1}`}
                className="block bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-600 mb-1">Sonraki Sayı →</div>
                    <div className="text-2xl font-bold text-slate-900">
                      {number + 1} Çarpım Tablosu
                    </div>
                  </div>
                  <svg className="w-6 h-6 text-purple-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            )}
            
            <Link
              href={`/${rangeStart}-to-${rangeEnd}`}
              className="block bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border-2 border-green-200 hover:border-green-400 hover:shadow-lg transition-all group md:col-span-2"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-600 mb-1">↑ Üst Aralık</div>
                  <div className="text-2xl font-bold text-slate-900">
                    {rangeStart}'den {rangeEnd}'a Çarpım Tabloları
                  </div>
                  <p className="text-slate-600 mt-2">
                    Bu aralıktaki tüm çarpım tablolarını pratik araçları ve oyunlarla keşfedin
                  </p>
                </div>
                <svg className="w-6 h-6 text-green-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
