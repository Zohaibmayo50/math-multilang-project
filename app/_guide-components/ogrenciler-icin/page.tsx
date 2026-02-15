import Link from 'next/link'
import Footer from '@/app/components/Footer'

export const metadata = {
  title: 'Öğrenciler İçin Çarpım Tablosu Rehberi | Adım Adım Öğrenme',
  description: 'Çarpım tablosunu kolayca öğrenmek için adım adım rehber. Görsel materyaller, pratik aktiviteler ve eğlenceli oyunlarla kendi hızında öğren!',
  keywords: 'çarpım tablosu öğrenme, matematik öğrenme, öğrenci rehberi, adım adım çarpım',
  alternates: {
    canonical: '/ogrenciler-icin',
  },
}

export default function ForStudents() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white pt-20 pb-12 md:pt-24 md:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
                Çarpım Tablosunu Öğrenmek Çok Kolay! 🎯
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 mb-6 md:mb-8">
                Kendi hızında ilerle, eğlenerek öğren ve matematik kahramanı ol! 
                Bu rehber, çarpım tablosunu adım adım öğrenmene yardımcı olacak.
              </p>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-blue-100">Sen de yapabilirsin!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Why Learn */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Neden Çarpım Tablosu Öğrenmeliyim? 🤔
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">
                Çarpım tablosu, matematik dünyasının süper gücü! İşte sana neler kazandıracak:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                    ⚡
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Hızlı Hesaplama</h3>
                    <p className="text-slate-700">Matematik sorularını çok daha hızlı çözebileceksin!</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-2xl">
                    🎮
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Günlük Hayatta Kullanım</h3>
                    <p className="text-slate-700">Alışverişte, oyunlarda, her yerde işine yarayacak!</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-2xl">
                    🏆
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Özgüven Artışı</h3>
                    <p className="text-slate-700">Matematikte kendine güvenin artacak ve daha başarılı olacaksın!</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-2xl">
                    🧠
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Beyin Gücü</h3>
                    <p className="text-slate-700">Hafızan güçlenecek ve daha hızlı düşünmeyi öğreneceksin!</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Learning Path */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Adım Adım Öğrenme Yolu 🚀
            </h2>
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border-l-4 border-green-500">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">Basit Tablolarla Başla (1, 2, 5, 10)</h3>
                    <p className="text-slate-700 mb-3">
                      En kolay tablolardan başlamak sana güven verecek! Bunlar çok basit ve çabuk öğreneceksin.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-900 mb-2">Neden bu tablolar kolay?</p>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• <strong>1 Tablosu:</strong> Her sayı kendisiyle kalır! (1×5=5)</li>
                        <li>• <strong>2 Tablosu:</strong> Sayıyı iki kere topla! (2×4 = 4+4 = 8)</li>
                        <li>• <strong>5 Tablosu:</strong> Her zaman 5 veya 0 ile biter!</li>
                        <li>• <strong>10 Tablosu:</strong> Sonuna sıfır ekle! (10×3 = 30)</li>
                      </ul>
                    </div>
                    <div className="mt-3">
                      <Link href="/1-10" className="text-green-600 hover:text-green-700 font-medium inline-flex items-center">
                        1-10 Tablolarına Git →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border-l-4 border-blue-500">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">Orta Seviye Tablolara Geç (3, 4, 6)</h3>
                    <p className="text-slate-700 mb-3">
                      Artık biraz daha zorlayıcı tablolara hazırsın! Endişelenme, bunlar için de püf noktalar var.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-900 mb-2">Püf Noktalar:</p>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• <strong>3 Tablosu:</strong> Sayıyı 3 kere topla (3×4 = 4+4+4 = 12)</li>
                        <li>• <strong>4 Tablosu:</strong> 2 ile çarp, sonra iki katına çıkar (4×5 = 2×5×2 = 20)</li>
                        <li>• <strong>6 Tablosu:</strong> 5 tablosuna 1 tane daha ekle (6×4 = 5×4 + 4 = 24)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-500">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Zor Tablolarla Kendini Zorla (7, 8, 9)</h3>
                    <p className="text-slate-700 mb-3">
                      Bu tablolar biraz daha zor ama sen şimdiye kadar çok şey öğrendin! Özel tekniklerle bunları da halledeceksin.
                    </p>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-semibold text-yellow-900 mb-2">Özel Teknikler:</p>
                      <ul className="space-y-2 text-slate-700 text-sm">
                        <li>• <strong>9 Tablosu - Parmak Hilesi:</strong> Ellerini aç, hangi sayıyla çarpacaksan o parmağı kapat. Solda kaç parmak açık = onlar basamağı, sağda kaç parmak = birler basamağı!</li>
                        <li>• <strong>8 Tablosu:</strong> 10'la çarp, 2 tane çıkar (8×7 = 10×7 - 2×7 = 70-14 = 56)</li>
                        <li>• <strong>7 Tablosu:</strong> Zor olanlarda 5 tablosunu kullan (7×6 = 5×6 + 2×6 = 30+12 = 42)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Sürekli Pratik Yap 💪</h3>
                    <p className="text-slate-700 mb-3">
                      Öğrendiğin her şeyi unutmamak için her gün biraz pratik yap. Kısa ama düzenli çalışma en iyisi!
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-900 mb-2">Günlük Pratik İpuçları:</p>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• Her gün 10-15 dakika çalış (uzun değil, düzenli!)</li>
                        <li>• Oyunlar oynayarak pratik yap - eğlenceli!</li>
                        <li>• Aileyle yarışmalar düzenle</li>
                        <li>• Günlük hayatta çarpım görünce hesapla (örn: "3 kutu, her kutuda 5 çikolata var, toplam kaç?")</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Visual Learning */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Görsel Öğrenme - Resimlerle Anla 🎨
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">
                Çarpımı gözünde canlandırmak öğrenmeni kolaylaştırır! İşte bazı görsel teknikler:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {/* Arrays */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Diziler (Arrays)</h3>
                  <p className="text-slate-700 mb-4 text-sm">4 × 3 = 12 örneği:</p>
                  <div className="bg-white p-4 rounded inline-block">
                    <div className="grid grid-cols-4 gap-2">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="w-8 h-8 bg-blue-400 rounded"></div>
                      ))}
                    </div>
                    <p className="text-center mt-2 text-sm text-slate-600">4 sütun × 3 satır = 12</p>
                  </div>
                </div>

                {/* Number Line */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Sayı Doğrusu Sıçramaları</h3>
                  <p className="text-slate-700 mb-4 text-sm">3 × 4: 4'erli sıçramalar (0→4→8→12)</p>
                  <div className="bg-white p-4 rounded">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-green-700">0</span>
                      <span className="text-green-500">→</span>
                      <span className="text-sm font-bold text-green-700">4</span>
                      <span className="text-green-500">→</span>
                      <span className="text-sm font-bold text-green-700">8</span>
                      <span className="text-green-500">→</span>
                      <span className="text-sm font-bold text-green-700">12</span>
                    </div>
                    <p className="text-center mt-2 text-xs text-slate-600">3 adım, her adım 4 birim</p>
                  </div>
                </div>

                {/* Skip Counting */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Atlamalı Sayma</h3>
                  <p className="text-slate-700 mb-3 text-sm">5'erli say: 5, 10, 15, 20, 25...</p>
                  <div className="bg-white p-3 rounded text-center">
                    <p className="text-purple-700 font-bold text-lg">5 - 10 - 15 - 20 - 25</p>
                    <p className="text-xs text-slate-600 mt-2">Bu sayıları ezberlersen 5 tablosu çok kolay!</p>
                  </div>
                </div>

                {/* Patterns */}
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Örüntüleri Fark Et</h3>
                  <p className="text-slate-700 mb-3 text-sm">9 tablosunun sırrı:</p>
                  <div className="bg-white p-3 rounded">
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>9×1=<strong className="text-pink-600">09</strong> (0+9=9)</li>
                      <li>9×2=<strong className="text-pink-600">18</strong> (1+8=9)</li>
                      <li>9×3=<strong className="text-pink-600">27</strong> (2+7=9)</li>
                      <li>9×4=<strong className="text-pink-600">36</strong> (3+6=9)</li>
                      <li className="text-xs italic">Rakamlar toplamı hep 9!</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Practice Tips */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Pratik Yapma İpuçları 🎯
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  🎮
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Oyunlar Oyna</h3>
                <p className="text-slate-700 mb-3">
                  Bu sitedeki eğlenceli oyunlarla pratik yap. Oynarken öğrenmek çok daha eğlenceli!
                </p>
                <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center text-sm">
                  Oyunları Keşfet →
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  📝
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Kendi Kendine Test Et</h3>
                <p className="text-slate-700 mb-3">
                  Kartları kullan veya birini sana soru sordur. Kendin test etmek öğrenmeni hızlandırır!
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  🎵
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Şarkılar ve Ritmler</h3>
                <p className="text-slate-700 mb-3">
                  Çarpım tablolarını şarkı haline getir! Müzikle ezberlenmek daha kolay.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  🏆
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Kendini Ödüllendir</h3>
                <p className="text-slate-700 mb-3">
                  Bir tabloyu öğrendiğinde kendini ödüllendir! Çıkartma topla veya küçük bir şey yap.
                </p>
              </div>
            </div>
          </section>

          {/* Progress Tracking */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              İlerlemeni Takip Et 📊
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">
                Ne kadar ilerlediğini görmek seni motive eder! İşte takip yöntemleri:
              </p>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">✅ Tablo Kontrol Listesi</h3>
                  <p className="text-slate-700 text-sm">
                    Bir kağıda 1'den 10'a kadar tabloları yaz. Her birini öğrendiğinde yanına büyük bir tik at! 
                    Tüm tikler tamamlanınca çarpım tablosu kahramanı olacaksın! 🌟
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">📈 İlerleme Grafiği</h3>
                  <p className="text-slate-700 text-sm">
                    Her hafta kaç soru doğru yaptığını kaydet. Grafik çiz ve ilerlemeyi gör. 
                    Her hafta daha iyiye gidiyorsun!
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">⭐ Yıldız Sistemi</h3>
                  <p className="text-slate-700 text-sm">
                    Her doğru cevap için kendin yıldız çiz. 100 yıldıza ulaşınca kendine özel bir ödül ver!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Motivation */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Motivasyon ve Başarı Sırları 💫
            </h2>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🌟</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Sabırlı Ol</h3>
                      <p className="text-slate-700 text-sm">Her şey zaman alır. Sen de yapabilirsin, sadece pratik yap!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💪</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Hatalar Normaldir</h3>
                      <p className="text-slate-700 text-sm">Yanlış yapınca üzülme, bu öğrenmenin bir parçası!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Küçük Hedefler Koy</h3>
                      <p className="text-slate-700 text-sm">Günde bir tablo yeterli, acele etme!</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🤝</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Yardım İste</h3>
                      <p className="text-slate-700 text-sm">Anlamadığın bir şey olursa aileden veya öğretmeninden sor!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎉</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Başarılarını Kutla</h3>
                      <p className="text-slate-700 text-sm">Her küçük başarın önemli, kendini takdir et!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">😊</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Eğlen!</h3>
                      <p className="text-slate-700 text-sm">Öğrenme eğlenceli olmalı, oyunları dene!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Reference */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Hızlı Püf Noktaları Rehberi 🔑
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-900 mb-2">0 ile Çarpım</h4>
                  <p className="text-sm text-slate-700">Her şey sıfır olur! 0×1000=0</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-green-900 mb-2">1 ile Çarpım</h4>
                  <p className="text-sm text-slate-700">Sayı kendisi kalır! 1×7=7</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold text-purple-900 mb-2">2 ile Çarpım</h4>
                  <p className="text-sm text-slate-700">Sayıyı ikiye katla! 2×6=12</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-bold text-pink-900 mb-2">5 ile Çarpım</h4>
                  <p className="text-sm text-slate-700">Sonuç 0 veya 5 ile biter!</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-900 mb-2">9 ile Çarpım</h4>
                  <p className="text-sm text-slate-700">Rakamların toplamı 9! Parmak hilesi!</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-bold text-indigo-900 mb-2">10 ile Çarpım</h4>
                  <p className="text-sm text-slate-700">Sonuna 0 ekle! 10×8=80</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-6 sm:p-8 text-white text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Şimdi Başlama Zamanı! 🚀
            </h2>
            <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Artık hazırsın! Unutma, her büyük matematik kahramanı küçük adımlarla başladı. 
              Sen de yapabilirsin! 💪✨
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/1-10"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                <span className="mr-2">🎯</span>
                Hemen Başla
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/"
                className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-flex items-center justify-center"
              >
                Ana Sayfaya Dön
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-blue-400">
              <p className="text-blue-100 text-sm">
                💡 <strong>İpucu:</strong> Günde 10-15 dakika çalışmak, 1 saat boyunca sıkılarak çalışmaktan çok daha etkilidir!
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
