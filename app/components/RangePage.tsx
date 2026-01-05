import Link from 'next/link'
import PracticePreview from './PracticePreview'
import GamesSection from './GamesSection'
import PrintableExercises from './PrintableExercises'

interface RangePageProps {
  rangeStart: number
  rangeEnd: number
  nextRangeUrl?: string
  prevRangeUrl?: string
  difficultyLevel: 'beginner' | 'intermediate' | 'advanced'
  difficultyColor: string
}

export default function RangePage({ 
  rangeStart, 
  rangeEnd, 
  nextRangeUrl, 
  prevRangeUrl,
  difficultyLevel,
  difficultyColor
}: RangePageProps) {
  const rangeNumbers = Array.from(
    { length: rangeEnd - rangeStart + 1 }, 
    (_, i) => rangeStart + i
  )
  
  const difficultyLabels = {
    beginner: 'Başlangıç Seviyesi',
    intermediate: 'Orta Seviye',
    advanced: 'İleri Seviye'
  }
  
  const difficultyDescriptions = {
    beginner: 'Bu aralık çarpma işlemine yeni başlayan öğrenciler için idealdir.',
    intermediate: 'Bu aralık temel çarpım tablolarını bilen ve becerilerini geliştirmek isteyen öğrenciler içindir.',
    advanced: 'Bu aralık daha büyük sayılarla çarpma işlemini pratik etmek isteyen ileri seviye öğrenciler içindir.'
  }
  
  const colors = [
    'from-blue-500 to-blue-600',
    'from-indigo-500 to-indigo-600',
    'from-purple-500 to-purple-600',
    'from-pink-500 to-pink-600',
    'from-rose-500 to-rose-600',
    'from-orange-500 to-orange-600',
    'from-amber-500 to-amber-600',
    'from-yellow-500 to-yellow-600',
    'from-lime-500 to-lime-600',
    'from-emerald-500 to-emerald-600'
  ]
  
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero / Range Introduction */}
      <section className={`section-container bg-gradient-to-br ${difficultyColor} border-b border-gray-200`}>
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold text-slate-900 mb-4">
            {difficultyLabels[difficultyLevel]}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Çarpım Tablosu {rangeStart}'den {rangeEnd}'a
          </h1>
          
          <p className="text-lg text-slate-700 mb-4 leading-relaxed">
            {rangeStart}'den {rangeEnd}'a kadar olan çarpım tablosu, matematik öğreniminde önemli bir aşamayı 
            temsil eder. Bu aralık, {rangeNumbers.length} farklı sayının çarpım tablolarını kapsar ve 
            toplamda {rangeNumbers.length * 10} farklı çarpma işlemini öğrenmenizi sağlar.
          </p>
          
          <p className="text-lg text-slate-700 leading-relaxed">
            {difficultyDescriptions[difficultyLevel]} Her sayının kendi örüntüleri ve öğrenme stratejileri vardır.
          </p>
        </div>
      </section>

      {/* Learning Context */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            {rangeStart}'den {rangeEnd}'a Çarpım Tablosu Neyi Kapsar?
          </h2>
          
          <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            Bu aralık, {rangeStart} ile {rangeEnd} arasındaki her sayının kendi içindeki çarpım tablosunu içerir. 
            Bu sayıların her biri, 1'den 10'a kadar olan sayılarla çarpılarak öğrenilir.
          </p>
          
          <div className="bg-blue-50 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Kapsanan Sayılar:</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {rangeNumbers.map((num) => (
                <div key={num} className="flex items-center text-slate-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  {num} çarpım tablosu
                </div>
              ))}
            </div>
          </div>
          
          <p className="text-lg text-slate-700 leading-relaxed">
            Öğrenciler bu aralıkta toplam {rangeNumbers.length * 10} çarpma işlemini öğrenirler. 
            Simetri özelliği sayesinde gerçekte ezberlemeleri gereken işlem sayısı daha azdır 
            (örneğin {rangeStart} × {rangeEnd} = {rangeEnd} × {rangeStart}).
          </p>
        </div>
      </section>

      {/* Practice Area */}
      <PracticePreview rangeStart={rangeStart} rangeEnd={rangeEnd} />

      {/* Games Section */}
      <GamesSection rangeStart={rangeStart} rangeEnd={rangeEnd} />

      {/* Printable Worksheets */}
      <PrintableExercises rangeStart={rangeStart} rangeEnd={rangeEnd} />

      {/* Difficulty & Progression */}
      <section className="section-container bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Bu Aralık Neden Önemlidir?
          </h2>
          
          <div className="space-y-6">
            <div className={`bg-white rounded-xl p-6 border-l-4 ${
              difficultyLevel === 'beginner' ? 'border-green-500' : 
              difficultyLevel === 'intermediate' ? 'border-yellow-500' : 
              'border-red-500'
            }`}>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                🎯 {difficultyLabels[difficultyLevel]}
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {difficultyDescriptions[difficultyLevel]} {rangeStart === 1 ? 
                  'Sayılar küçük olduğu için öğrenciler sonuçları daha kolay anlayabilir ve doğrulayabilir.' :
                  'Bu aralık, bir önceki aralıkta kazanılan bilgilerin üzerine inşa edilir.'}
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                🧠 Bilişsel Gelişim
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Bu aralık, öğrencilerin zihinsel hesaplama becerilerini geliştirmelerine yardımcı olur. 
                Düzenli pratik yaparak, bu sayıların çarpımlarını otomatik olarak hatırlamaya başlarlar.
              </p>
            </div>
            
            {nextRangeUrl && (
              <div className="bg-white rounded-xl p-6 border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  📈 Sonraki Adıma Hazırlık
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Bu aralığı iyi öğrenen öğrenciler, bir sonraki aralığa geçmeye hazırdır. 
                  Her aralık, çarpma mantığını daha da pekiştirir ve matematiksel düşünceyi geliştirir.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Patterns & Observations */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            {rangeStart}'den {rangeEnd}'a Çarpım Tablosundaki Örüntüler
          </h2>
          
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Çarpım tablosunu ezberlemeye çalışmak yerine, içindeki örüntüleri anlamak 
            öğrenme sürecini hem hızlandırır hem de kalıcı hale getirir.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🔄</span>
                Simetri (Değişme Özelliği)
              </h3>
              <p className="text-slate-700 mb-3">
                Çarpma işleminde sıralama değiştirilebilir: {rangeStart} × {rangeEnd} = {rangeEnd} × {rangeStart}. 
                Bu özellik öğrenmeyi kolaylaştırır.
              </p>
              <p className="text-sm text-slate-600 italic">
                Örnek: Bir sayıyı biliyorsanız, tersini de biliyorsunuz demektir.
              </p>
            </div>
            
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">➕</span>
                Tekrar Eden Toplama
              </h3>
              <p className="text-slate-700 mb-3">
                {rangeStart} × 3 = {rangeStart} + {rangeStart} + {rangeStart} = {rangeStart * 3}. 
                Çarpma, aynı sayının tekrar toplanmasıdır.
              </p>
              <p className="text-sm text-slate-600 italic">
                Bu mantık, çarpmanın temel anlamını kavramak için önemlidir.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">✖️</span>
                Çift Sayı Örüntüleri
              </h3>
              <p className="text-slate-700 mb-3">
                {rangeNumbers.filter(n => n % 2 === 0).length > 0 ? 
                  `Bu aralıktaki çift sayılar (${rangeNumbers.filter(n => n % 2 === 0).join(', ')}) her zaman çift sonuçlar verir.` :
                  'Bu aralıktaki sayıların çarpım tabloları belirli örüntüler gösterir.'
                }
              </p>
              <p className="text-sm text-slate-600 italic">
                Çift ve tek sayı mantığını anlamak, hata yapmayı azaltır.
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🔢</span>
                Son Rakam Örüntüleri
              </h3>
              <p className="text-slate-700 mb-3">
                Her sayının çarpım tablosunda son rakamlar belirli bir düzen içinde tekrarlanır. 
                Bu örüntüyü fark etmek doğrulama için yararlıdır.
              </p>
              <p className="text-sm text-slate-600 italic">
                Örneğin: 5 ile biten sayılar her zaman 0 veya 5 ile biter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Study This Range */}
      <section className="section-container bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            {rangeStart}'den {rangeEnd}'a Çarpım Tablosu Nasıl Öğrenilir?
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                1. Sistematik Yaklaşım
              </h3>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                Bu aralıktaki sayıları bir anda öğrenmeye çalışmak yerine, her gün 1-2 sayı 
                üzerinde yoğunlaşın. Bir sayıyı iyice öğrendikten sonra diğerine geçin.
              </p>
              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-600">
                <p className="text-slate-700">
                  <strong>Öneri:</strong> Her sayıyı 3-4 gün üst üste tekrar ettikten sonra, 
                  karışık sorular çözmeye başlayın.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                2. Görselleştirme Teknikleri
              </h3>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                Sayıları görsel olarak hayal etmek, hafızada tutmayı kolaylaştırır:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-700">
                  <span className="text-blue-600 font-bold mr-3 mt-1">•</span>
                  <div>
                    <strong>Gruplar halinde düşünün:</strong> {rangeStart} × 4'ü, {rangeStart} kişinin 
                    4 grup oluşturması şeklinde hayal edin.
                  </div>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="text-blue-600 font-bold mr-3 mt-1">•</span>
                  <div>
                    <strong>Hikaye oluşturun:</strong> Her sayı için kısa bir hikaye oluşturmak, 
                    hatırlamayı eğlenceli hale getirir.
                  </div>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="text-blue-600 font-bold mr-3 mt-1">•</span>
                  <div>
                    <strong>Renkli kartlar kullanın:</strong> Her sayıya farklı renk atamak, 
                    görsel hafızayı güçlendirir.
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                3. Pratik Egzersizleri
              </h3>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                Düzenli pratik yapmak, öğrenilen bilgilerin kalıcı olmasını sağlar:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <p className="font-semibold text-slate-900 mb-2">Hızlı Soru-Cevap</p>
                  <p className="text-slate-700 text-sm">
                    Günde en az 10 rastgele soru çözün ve zamanınızı ölçün.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <p className="font-semibold text-slate-900 mb-2">Yazılı Testler</p>
                  <p className="text-slate-700 text-sm">
                    Haftada bir kez yazılı test yapın ve hatalarınızı analiz edin.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <p className="font-semibold text-slate-900 mb-2">Oyunlar</p>
                  <p className="text-slate-700 text-sm">
                    Çarpım tablosu oyunları oynamak, eğlenerek öğrenmeyi sağlar.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <p className="font-semibold text-slate-900 mb-2">Arkadaşlarla Yarış</p>
                  <p className="text-slate-700 text-sm">
                    Arkadaşlarınızla yarışarak motivasyonunuzu artırabilirsiniz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Range Table */}
      <section className="section-container bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
            {rangeStart}'den {rangeEnd}'a Çarpım Tablosu - Tam Liste
          </h2>
          
          <p className="text-center text-slate-700 mb-8 max-w-3xl mx-auto">
            Aşağıda {rangeStart}'den {rangeEnd}'a kadar tüm çarpım tablolarını bir arada görebilirsiniz. 
            Her sayının kendi renkli kutusu vardır.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {rangeNumbers.map((num, index) => {
              const colorIndex = index % colors.length
              
              return (
                <div key={num} className={`bg-gradient-to-br ${colors[colorIndex]} rounded-xl p-4 text-white`}>
                  <div className="font-bold text-lg mb-3 text-center">{num} Çarpım Tablosu</div>
                  <div className="space-y-1 text-sm">
                    {[...Array(10)].map((_, i) => (
                      <div key={i} className="flex justify-between items-center bg-white/20 rounded px-2 py-1">
                        <span>{num} × {i + 1}</span>
                        <span className="font-semibold">= {num * (i + 1)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Links to Number Pages */}
      <section className="section-container bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Bu Aralıktaki Bireysel Çarpım Tabloları
          </h2>
          
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Her sayının çarpım tablosunu ayrıntılı olarak öğrenmek isterseniz, aşağıdaki 
            bağlantılardan ilgili sayfaya gidebilirsiniz. Her sayfa, o sayıya özel 
            örüntüler, ipuçları ve pratik araçları içerir.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {rangeNumbers.map((num) => (
              <Link
                key={num}
                href={`/number/${num}`}
                className="block bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-slate-900 mb-1">
                      {num} Çarpım Tablosu
                    </div>
                    <p className="text-slate-600">
                      {num} sayısının detaylı açıklaması ve örnekleri
                    </p>
                  </div>
                  <svg 
                    className="w-6 h-6 text-blue-600 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation: Previous & Next Range */}
      <section className="section-container bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            {nextRangeUrl ? 'Öğrenme Yolculuğunuza Devam Edin' : 'Tebrikler!'}
          </h2>
          
          {nextRangeUrl ? (
            <>
              <p className="text-xl mb-8 leading-relaxed opacity-95 text-center">
                {rangeStart}'den {rangeEnd}'a kadar olan çarpım tablosunu rahatlıkla kullanabiliyorsanız, 
                bir sonraki adıma geçmeye hazırsınız!
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                {prevRangeUrl && (
                  <Link
                    href={prevRangeUrl}
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                    Önceki Aralık
                  </Link>
                )}
                
                <Link
                  href={nextRangeUrl}
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
                >
                  Sonraki Aralığa Geç
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </>
          ) : (
            <p className="text-xl leading-relaxed opacity-95 text-center">
              Tüm çarpım tablolarını tamamladınız! Artık 1'den 100'e kadar tüm çarpma işlemlerini biliyorsunuz.
            </p>
          )}
          
          <p className="mt-6 text-sm opacity-80 text-center">
            Tüm çarpım tablolarını öğrenmek için sabırlı ve düzenli olun. Her aralık bir öncekinin üzerine inşa edilir.
          </p>
        </div>
      </section>
    </main>
  )
}
