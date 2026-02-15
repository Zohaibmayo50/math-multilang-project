import Link from 'next/link'
import Footer from '@/app/components/Footer'

export const metadata = {
  title: 'Ebeveynler İçin Çarpım Tablosu Rehberi | Çocuğunuza Nasıl Yardımcı Olabilirsiniz',
  description: 'Çocuğunuzun çarpım tablosu öğrenmesine nasıl destek olabilirsiniz? Etkili stratejiler, motivasyon teknikleri ve ev içi aktiviteler.',
  keywords: 'çarpım tablosu öğretme, ebeveyn rehberi, çocuklara matematik, ev ödevleri',
  alternates: {
    canonical: '/veliler-icin',
  },
}

export default function ForParents() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white pt-20 pb-12 md:pt-24 md:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
                Ebeveynler İçin Çarpım Tablosu Rehberi
              </h1>
              <p className="text-lg sm:text-xl text-purple-100 mb-6 md:mb-8">
                Çocuğunuzun çarpım tablosunu öğrenmesine nasıl destek olabilirsiniz? 
                Bu rehber, etkili stratejiler ve pratik öneriler içerir.
              </p>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                <span className="text-purple-100">Çocuğunuzun başarısı için rehberiniz</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Why It Matters */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Neden Önemli?
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4">
                Çarpım tablosu, çocuğunuzun matematik yolculuğunda atması gereken en önemli adımlardan biridir. 
                Sadece matematik değil, problem çözme, mantıksal düşünme ve özgüven gelişimi için de kritik öneme sahiptir.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">Temel Beceri</h3>
                  <p className="text-slate-700">Gelecekteki tüm matematik konuları için sağlam bir temel oluşturur.</p>
                </div>
                <div className="bg-pink-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-pink-900 mb-2">Özgüven</h3>
                  <p className="text-slate-700">Başarı, çocuğunuzun matematiğe olan güvenini artırır.</p>
                </div>
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-indigo-900 mb-2">Günlük Hayat</h3>
                  <p className="text-slate-700">Alışveriş, ölçüm ve zamanlama gibi günlük işlemlerde kullanılır.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Learning Strategies */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Etkili Öğrenme Stratejileri
            </h2>
            <div className="space-y-4 md:space-y-6">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-purple-600">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Küçük Adımlarla İlerleyin</h3>
                    <p className="text-slate-700 mb-4">
                      Tüm tabloları aynı anda öğretmeye çalışmayın. Önce basit tablolardan (1, 2, 5, 10) başlayın.
                    </p>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Günde sadece bir tabloya odaklanın</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Yeni tabloya geçmeden önce eski tabloyu pekiştirin</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Zor tabloları parçalara ayırın</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-pink-600">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Günlük Hayata Entegre Edin</h3>
                    <p className="text-slate-700 mb-4">
                      Çarpım tablosunu soyut sayılar yerine gerçek yaşam durumlarıyla öğretin.
                    </p>
                    <div className="bg-pink-50 p-4 rounded-lg mb-4">
                      <p className="text-slate-700 font-medium mb-2">Örnekler:</p>
                      <ul className="space-y-2 text-slate-600">
                        <li>"4 kişi var, herkese 3 çikolata verirsek kaç çikolata lazım?"</li>
                        <li>"6 günde her gün 5 sayfa okursan toplamda kaç sayfa okumuş olursun?"</li>
                        <li>"Alışverişte 7 lira olan üründen 4 tane alırsak ne kadar öderiz?"</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-indigo-600">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Görsel Araçlar Kullanın</h3>
                    <p className="text-slate-700 mb-4">
                      Soyut kavramları somutlaştırmak için nesneler, çizimler ve modellerden yararlanın.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-indigo-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-indigo-900 mb-2">Fiziksel Materyaller</h4>
                        <ul className="space-y-1 text-slate-600">
                          <li>• Lego blokları</li>
                          <li>• Taşlar veya düğmeler</li>
                          <li>• Meyve parçaları</li>
                        </ul>
                      </div>
                      <div className="bg-indigo-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-indigo-900 mb-2">Çizim ve Şemalar</h4>
                        <ul className="space-y-1 text-slate-600">
                          <li>• Diziler halinde nokta çizimi</li>
                          <li>• Dikdörtgen alanlar</li>
                          <li>• Sayı doğrusu</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-emerald-600">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Oyunlaştırma Tekniklerini Uygulayın</h3>
                    <p className="text-slate-700 mb-4">
                      Öğrenmeyi eğlenceli hale getirerek motivasyonu artırın.
                    </p>
                    <div className="space-y-3">
                      <div className="bg-emerald-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-emerald-900 mb-2">Kart Oyunları</h4>
                        <p className="text-slate-600">İki kart çekin ve çarpımlarını hesaplayın. Doğru cevap puanı getirir!</p>
                      </div>
                      <div className="bg-emerald-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-emerald-900 mb-2">Zaman Yarışı</h4>
                        <p className="text-slate-600">Kronometreyle 1 dakikada kaç soruya doğru cevap verilebileceğini ölçün.</p>
                      </div>
                      <div className="bg-emerald-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-emerald-900 mb-2">Ödül Sistemi</h4>
                        <p className="text-slate-600">Her tamamlanan tablo için çıkartma veya yıldız toplayın.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Motivation Tips */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Motivasyon Teknikleri
            </h2>
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                    <svg className="w-6 h-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Yapılması Gerekenler
                  </h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Çocuğunuzun çabalarını övün, sonucu değil süreci vurgulayın</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Küçük başarıları kutlayın</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Sabırlı olun ve pozitif kalın</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Öğrenmeyi günlük rutine dahil edin</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Hataları öğrenme fırsatı olarak görün</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                    <svg className="w-6 h-6 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Yapılmaması Gerekenler
                  </h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span>Başka çocuklarla karşılaştırmayın</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span>Baskı yapmayın veya cezalandırmayın</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span>Çok uzun çalışma seansları yapmayın</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span>Sadece ezbere dayalı öğretmeyin</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span>Olumsuz dil kullanmayın ("Matematik zordur" gibi)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Home Activities */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Ev İçi Pratik Aktiviteleri
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3">Mutfak Matematiği</h3>
                <p className="text-slate-700 mb-3">
                  Yemek yaparken çarpım tablosunu kullanın:
                </p>
                <ul className="text-slate-600 space-y-1 text-sm">
                  <li>• "4 kişi için 2'şer kurabiye = 4 × 2 = 8 kurabiye"</li>
                  <li>• Tarif miktarlarını 2 veya 3 ile çarpma</li>
                  <li>• Sofra düzeninde tabak sayısı hesaplama</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Alışveriş Hesaplamaları</h3>
                <p className="text-slate-700 mb-3">
                  Market veya mağazada çarpım pratiği:
                </p>
                <ul className="text-slate-600 space-y-1 text-sm">
                  <li>• "3 lira olan üründen 4 tane ne kadar eder?"</li>
                  <li>• İndirim hesaplamaları</li>
                  <li>• Toplam fiyat tahmini</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Zaman Yönetimi</h3>
                <p className="text-slate-700 mb-3">
                  Saat ve süre hesaplamalarıyla pratik:
                </p>
                <ul className="text-slate-600 space-y-1 text-sm">
                  <li>• "5 dakikada 3 sayfa okursan, 15 dakikada kaç sayfa?"</li>
                  <li>• Günlük rutin hesaplamaları</li>
                  <li>• Süre çarpanları</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Oyun Zamanı</h3>
                <p className="text-slate-700 mb-3">
                  Eğlenceli oyunlarla pekiştirme:
                </p>
                <ul className="text-slate-600 space-y-1 text-sm">
                  <li>• Araba yolculuğunda soru-cevap</li>
                  <li>• Zar atma ve çarpım hesaplama</li>
                  <li>• Online eğitici oyunlar</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Weekly Plan */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Örnek Haftalık Çalışma Planı
            </h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    <tr>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-base">Gün</th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-base">Aktivite</th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-base">Süre</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-3 sm:px-6 py-3 sm:py-4 font-semibold text-slate-900 text-sm sm:text-base">Pazartesi</td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-slate-700 text-sm sm:text-base">Yeni tablo öğrenme (görsel araçlarla)</td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-slate-600 text-sm sm:text-base whitespace-nowrap">15 dakika</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-3 sm:px-6 py-3 sm:py-4 font-semibold text-slate-900 text-sm sm:text-base">Salı</td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-slate-700 text-sm sm:text-base">Önceki gün öğrenilen tablonun tekrarı</td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-slate-600 text-sm sm:text-base whitespace-nowrap">10 dakika</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-3 sm:px-6 py-3 sm:py-4 font-semibold text-slate-900 text-sm sm:text-base">Çarşamba</td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-slate-700 text-sm sm:text-base">Oyunlarla pratik yapma</td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-slate-600 text-sm sm:text-base whitespace-nowrap">20 dakika</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-3 sm:px-6 py-3 sm:py-4 font-semibold text-slate-900 text-sm sm:text-base">Perşembe</td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-slate-700 text-sm sm:text-base">Günlük hayat problemleri</td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-slate-600 text-sm sm:text-base whitespace-nowrap">15 dakika</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-3 sm:px-6 py-3 sm:py-4 font-semibold text-slate-900 text-sm sm:text-base">Cuma</td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-slate-700 text-sm sm:text-base">Haftanın tüm tablolarını gözden geçirme</td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-slate-600 text-sm sm:text-base whitespace-nowrap">15 dakika</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-3 sm:px-6 py-3 sm:py-4 font-semibold text-slate-900 text-sm sm:text-base">Cumartesi</td>
                      <td className="px-6 py-4 text-slate-700">Eğlenceli oyunlar ve yarışmalar</td>
                      <td className="px-6 py-4 text-slate-600">30 dakika</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-slate-900">Pazar</td>
                      <td className="px-6 py-4 text-slate-700">Dinlenme (isteğe bağlı hafif tekrar)</td>
                      <td className="px-6 py-4 text-slate-600">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
              <p className="text-sm text-yellow-800">
                <strong>Not:</strong> Bu plan esnek tutulmalıdır. Çocuğunuzun yorgunluk durumuna göre süreleri ayarlayın.
              </p>
            </div>
          </section>

          {/* Progress Tracking */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              İlerleme Takip Yöntemleri
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">1. Görsel İlerleme Tablosu</h3>
                  <p className="text-slate-700 mb-3">
                    Duvara asabileceğiniz bir tablo oluşturun. Her öğrenilen tablo için bir çıkartma veya yıldız ekleyin.
                  </p>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-sm text-slate-600">
                      Örnek: 1-10 arası tablolar için 10 kutucuklu bir tablo, her başarılı tablo için bir kutu boyama.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">2. Haftalık Mini Testler</h3>
                  <p className="text-slate-700 mb-3">
                    Her hafta sonu 5 dakikalık bir quiz yapın. Sonuçları kaydedin.
                  </p>
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <p className="text-sm text-slate-600">
                      İpucu: Doğru/yanlış sayısı yerine "bu hafta şu kadar geliştin" şeklinde pozitif geri bildirim verin.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">3. Zaman Takibi</h3>
                  <p className="text-slate-700 mb-3">
                    Aynı soruları farklı zamanlarda çözdürün ve süreyi ölçün. Hız artışı motivasyon sağlar.
                  </p>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <p className="text-sm text-slate-600">
                      Önemli: Hızdan çok doğruluğu vurgulayın. Hız zaten zamanla gelecektir.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Common Challenges */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Yaygın Zorluklar ve Çözümleri
            </h2>
            <div className="space-y-4">
              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer group">
                <summary className="text-lg font-semibold text-slate-900 flex items-center justify-between">
                  <span>Çocuğum çarpım tablosundan korkuyor/kaçınıyor</span>
                  <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-slate-700 space-y-2">
                  <p><strong>Çözüm:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Basit tablolardan başlayarak özgüven oluşturun (1, 2, 5, 10)</li>
                    <li>Başarıları büyük yapın, küçük adımları kutlayın</li>
                    <li>Matematik yerine "oyun" veya "aktivite" olarak adlandırın</li>
                    <li>Baskı yapmayın, sabırlı olun</li>
                  </ul>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer group">
                <summary className="text-lg font-semibold text-slate-900 flex items-center justify-between">
                  <span>Öğrendiği tabloları unutuyor</span>
                  <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-slate-700 space-y-2">
                  <p><strong>Çözüm:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Düzenli tekrar yapın (günlük kısa seanslar)</li>
                    <li>Farklı yöntemlerle pekiştirin (yazma, söyleme, görsel)</li>
                    <li>Günlük hayatta kullanma fırsatları yaratın</li>
                    <li>Aralıklı tekrar sistemi uygulayın (1 gün, 3 gün, 1 hafta)</li>
                  </ul>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer group">
                <summary className="text-lg font-semibold text-slate-900 flex items-center justify-between">
                  <span>Bazı tablolarda takılıp kalıyor (özellikle 7, 8, 9)</span>
                  <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-slate-700 space-y-2">
                  <p><strong>Çözüm:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Bu tabloları daha küçük parçalara bölün</li>
                    <li>Özel püf noktaları ve desenler öğretin</li>
                    <li>9 tablosu için parmak yöntemi kullanın</li>
                    <li>Zor tablolara daha fazla zaman ayırın</li>
                    <li>İlişkileri gösterin (8×6 = 4×6 + 4×6)</li>
                  </ul>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer group">
                <summary className="text-lg font-semibold text-slate-900 flex items-center justify-between">
                  <span>Çalışmaya zaman ayıramıyoruz</span>
                  <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-slate-700 space-y-2">
                  <p><strong>Çözüm:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Günlük rutinlere entegre edin (kahvaltıda, arabada, yatmadan önce)</li>
                    <li>Kısa seanslar yapın (10-15 dakika yeterli)</li>
                    <li>Günlük aktivitelerde doğal olarak kullanın</li>
                    <li>Kalite, süredan önemlidir</li>
                  </ul>
                </div>
              </details>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-lg p-6 sm:p-8 text-white text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Hemen Başlayın!
            </h2>
            <p className="text-base sm:text-lg text-purple-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Çocuğunuzla birlikte çarpım tablosu yolculuğuna bugün başlayın. 
              Unutmayın, her çocuk kendi hızında öğrenir ve sizin desteğiniz en değerli kaynaktır.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link 
                href="/1-10"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center justify-center"
              >
                Tablolara Başla
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/"
                className="bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors inline-flex items-center justify-center"
              >
                Ana Sayfaya Dön
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
