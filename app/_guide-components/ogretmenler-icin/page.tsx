import Link from 'next/link'
import Footer from '@/app/components/Footer'

export const metadata = {
  title: 'Öğretmenler İçin Çarpım Tablosu Rehberi | Sınıf İçi Öğretim Materyalleri',
  description: 'Sınıfınızda çarpım tablosu öğretimi için profesyonel kaynaklar, pedagojik stratejiler, aktivite önerileri ve değerlendirme araçları.',
  keywords: 'çarpım tablosu öğretimi, sınıf aktiviteleri, pedagojik yöntemler, matematik öğretimi',
  alternates: {
    canonical: '/ogretmenler-icin',
  },
}

export default function ForTeachers() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white pt-20 pb-12 md:pt-24 md:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
                Öğretmenler İçin Çarpım Tablosu Rehberi
              </h1>
              <p className="text-lg sm:text-xl text-emerald-100 mb-6 md:mb-8">
                Sınıfınızda çarpım tablosu öğretimi için profesyonel kaynaklar, pedagojik stratejiler ve aktivite önerileri.
              </p>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                <span className="text-emerald-100">Etkili öğretim için profesyonel destek</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Pedagogical Approach */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Pedagojik Yaklaşım
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">
                Çarpım tablosu öğretimi, sadece ezber değil, kavramsal anlama üzerine inşa edilmelidir. 
                Öğrencilerin çarpmanın anlamını anlaması ve farklı stratejiler geliştirmesi önemlidir.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-500">
                  <h3 className="text-lg font-semibold text-emerald-900 mb-3">Somuttan Soyuta</h3>
                  <p className="text-slate-700">Fiziksel materyallerle başlayıp, görsel temsiller üzerinden soyut sayısal işlemlere geçiş.</p>
                </div>
                <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500">
                  <h3 className="text-lg font-semibold text-teal-900 mb-3">Strateji Geliştirme</h3>
                  <p className="text-slate-700">Öğrencilere birden fazla çözüm yolu göstererek esnek düşünme becerilerini geliştirme.</p>
                </div>
                <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-500">
                  <h3 className="text-lg font-semibold text-cyan-900 mb-3">Anlamlı Öğrenme</h3>
                  <p className="text-slate-700">Çarpım tablosunu gerçek yaşam problemleriyle ilişkilendirme ve bağlam oluşturma.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Teaching Methods */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Öğretim Yöntemleri
            </h2>
            <div className="space-y-4 md:space-y-6">
              {/* Method 1 */}
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📦</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Diziler ve Gruplamalar</h3>
                    <p className="text-slate-700 mb-4">
                      Çarpmanın tekrarlı toplama olduğunu göstermek için nesneleri diziler halinde gruplandırın.
                    </p>
                    <div className="bg-emerald-50 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-emerald-900 mb-2">Uygulama:</h4>
                      <ul className="space-y-2 text-slate-700">
                        <li className="flex items-start">
                          <span className="text-emerald-600 mr-2">•</span>
                          <span>Öğrencilerden 4 sıra × 6 öğrenci olacak şekilde oturmalarını isteyin</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-600 mr-2">•</span>
                          <span>Blokları veya sayaçları diziler halinde düzenleyin</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-600 mr-2">•</span>
                          <span>Tahtada nokta dizileri çizerek görselleştirin</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Method 2 */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔢</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Alan Modeli (Area Model)</h3>
                    <p className="text-slate-700 mb-4">
                      Dikdörtgen alanları kullanarak çarpımı görselleştirme.
                    </p>
                    <div className="bg-teal-50 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-teal-900 mb-2">Örnek:</h4>
                      <p className="text-slate-700 mb-3">5 × 3 için:</p>
                      <div className="bg-white p-4 rounded border-2 border-teal-200 inline-block">
                        <div className="grid grid-cols-5 gap-1">
                          {[...Array(15)].map((_, i) => (
                            <div key={i} className="w-8 h-8 bg-teal-200 border border-teal-400"></div>
                          ))}
                        </div>
                        <p className="text-center mt-2 text-sm text-slate-600">5 sütun × 3 satır = 15 birim kare</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Method 3 */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">➗</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Parçalama Stratejisi</h3>
                    <p className="text-slate-700 mb-4">
                      Karmaşık çarpımları daha basit parçalara ayırarak çözme.
                    </p>
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-cyan-900 mb-2">Örnek: 7 × 8</h4>
                      <div className="space-y-2 text-slate-700">
                        <p>• Yöntem 1: (5 × 8) + (2 × 8) = 40 + 16 = 56</p>
                        <p>• Yöntem 2: (7 × 5) + (7 × 3) = 35 + 21 = 56</p>
                        <p>• Yöntem 3: (7 × 10) - (7 × 2) = 70 - 14 = 56</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Method 4 */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Değişme Özelliği (Commutative Property)</h3>
                    <p className="text-slate-700 mb-4">
                      Öğrencilere 3 × 4 ile 4 × 3'ün aynı olduğunu göstererek öğrenme yükünü yarıya indirin.
                    </p>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="text-slate-700">
                        <strong>İpucu:</strong> Fiziksel bir materyali (örneğin kart dizisi) 90 derece çevirerek 
                        görsel olarak değişme özelliğini gösterin.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Classroom Activities */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Sınıf İçi Aktivite Önerileri
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {/* Activity 1 */}
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900">Çarpım Tablosu Bingo</h3>
                </div>
                <p className="text-slate-700 mb-3">
                  Her öğrenciye 4×4 veya 5×5 bingo kartı verin. Çarpım sorularını sesli okuyun, 
                  öğrenciler sonucu kartlarında işaretlesin.
                </p>
                <div className="bg-emerald-50 p-3 rounded-lg text-sm">
                  <p className="font-semibold text-emerald-900 mb-1">Hedef:</p>
                  <p className="text-slate-700">Hızlı hatırlama, dikkat, eğlenceli pekiştirme</p>
                </div>
              </div>

              {/* Activity 2 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">Çarpım Köşeleri</h3>
                </div>
                <p className="text-slate-700 mb-3">
                  Sınıfın dört köşesine farklı sayılar (örneğin 6, 7, 8, 9) atayın. 
                  Bir çarpan söyleyin, öğrenciler doğru sonucun olduğu köşeye koşsun.
                </p>
                <div className="bg-teal-50 p-3 rounded-lg text-sm">
                  <p className="font-semibold text-teal-900 mb-1">Hedef:</p>
                  <p className="text-slate-700">Kinetik öğrenme, hızlı düşünme, enerji atma</p>
                </div>
              </div>

              {/* Activity 3 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">Çarpım Domino</h3>
                </div>
                <p className="text-slate-700 mb-3">
                  Her kartın bir yüzünde çarpım sorusu, diğer yüzünde başka bir sorunun cevabı olsun. 
                  Öğrenciler domino gibi eşleştirerek zincir oluştursun.
                </p>
                <div className="bg-cyan-50 p-3 rounded-lg text-sm">
                  <p className="font-semibold text-cyan-900 mb-1">Hedef:</p>
                  <p className="text-slate-700">Problem çözme, işbirliği, mantıksal düşünme</p>
                </div>
              </div>

              {/* Activity 4 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    4
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">Gerçek Hayat Problemleri</h3>
                </div>
                <p className="text-slate-700 mb-3">
                  Öğrencilerden kendi hayatlarından çarpım problemi oluşturmalarını isteyin 
                  (örneğin: sınıfta 6 sıra, her sırada 4 kitap).
                </p>
                <div className="bg-blue-50 p-3 rounded-lg text-sm">
                  <p className="font-semibold text-blue-900 mb-1">Hedef:</p>
                  <p className="text-slate-700">Bağlam oluşturma, yaratıcılık, anlamlı öğrenme</p>
                </div>
              </div>

              {/* Activity 5 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    5
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">Çarpım Sanatı</h3>
                </div>
                <p className="text-slate-700 mb-3">
                  Kareli kağıtta dikdörtgenler çizerek çarpım sonuçlarını görselleştirin. 
                  Farklı renklerle desenlere dönüştürün.
                </p>
                <div className="bg-indigo-50 p-3 rounded-lg text-sm">
                  <p className="font-semibold text-indigo-900 mb-1">Hedef:</p>
                  <p className="text-slate-700">Görsel-uzamsal zeka, sanatla entegrasyon</p>
                </div>
              </div>

              {/* Activity 6 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    6
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">Çarpım Zinciri Yarışması</h3>
                </div>
                <p className="text-slate-700 mb-3">
                  Gruplar halinde, her öğrenci bir çarpım sorusu çözer ve sonucunu bir sonraki 
                  arkadaşına verir. En hızlı bitiren grup kazanır.
                </p>
                <div className="bg-purple-50 p-3 rounded-lg text-sm">
                  <p className="font-semibold text-purple-900 mb-1">Hedef:</p>
                  <p className="text-slate-700">Takım çalışması, hız, motivasyon</p>
                </div>
              </div>
            </div>
          </section>

          {/* Differentiated Instruction */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Farklılaştırılmış Öğretim
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">
                Her öğrencinin öğrenme hızı ve stili farklıdır. Sınıfınızda farklı seviyelerdeki 
                öğrencilere uygun stratejiler geliştirin.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {/* Struggling Students */}
                <div className="bg-red-50 p-6 rounded-lg border-t-4 border-red-400">
                  <h3 className="text-lg font-semibold text-red-900 mb-4">Zorlan öğrenciler</h3>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Daha fazla somut materyal kullanın</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Daha küçük gruplar halinde öğretin (2-5 arası)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Çarpım tablosu çizelgeleri sağlayın</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Tekrarlı pratik ve pekiştirme yapın</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Birebim veya küçük grup desteği verin</span>
                    </li>
                  </ul>
                </div>

                {/* On-Level Students */}
                <div className="bg-yellow-50 p-6 rounded-lg border-t-4 border-yellow-400">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-4">Seviyesinde öğrenciler</h3>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Dengeli somut ve soyut materyal kullanımı</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>İşbirlikçi aktiviteler</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Oyunlar ve yarışmalar</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Farklı strateji öğretimi</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Düzenli değerlendirme ve geri bildirim</span>
                    </li>
                  </ul>
                </div>

                {/* Advanced Students */}
                <div className="bg-green-50 p-6 rounded-lg border-t-4 border-green-400">
                  <h3 className="text-lg font-semibold text-green-900 mb-4">İleri seviye öğrenciler</h3>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Karmaşık problemler ve uzantılar</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>10'dan büyük sayılarla çarpım (11-20)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Matematiksel örüntüleri keşfetme</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Liderlik rolleri (akran öğretimi)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Proje tabanlı öğrenme</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Assessment Tools */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Ölçme ve Değerlendirme Araçları
            </h2>
            <div className="space-y-4 md:space-y-6">
              {/* Formative Assessment */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Biçimlendirici Değerlendirme</h3>
                <p className="text-slate-700 mb-4">
                  Öğrenme sürecinde öğrencilerin ilerlemesini izlemek ve öğretimi ayarlamak için:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-emerald-900 mb-2">Çıkış Kartları</h4>
                    <p className="text-sm text-slate-700">
                      Ders sonunda 3-5 çarpım sorusu içeren kart. Anlık anlama kontrolü sağlar.
                    </p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-emerald-900 mb-2">Beyaz Tahta Cevapları</h4>
                    <p className="text-sm text-slate-700">
                      Tüm öğrenciler aynı anda cevaplarını mini tahtalarında gösterir. Sınıf geneli izleme.
                    </p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-emerald-900 mb-2">Gözlem Notları</h4>
                    <p className="text-sm text-slate-700">
                      Aktiviteler sırasında öğrencilerin stratejilerini ve zorlandıkları noktaları kaydedin.
                    </p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-emerald-900 mb-2">Akran Değerlendirmesi</h4>
                    <p className="text-sm text-slate-700">
                      Öğrenciler birbirlerinin çalışmalarını kontrol eder, öğrenmeyi pekiştirir.
                    </p>
                  </div>
                </div>
              </div>

              {/* Summative Assessment */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Düzey Belirleme Değerlendirmesi</h3>
                <p className="text-slate-700 mb-4">
                  Belirli periyotlarda öğrenme çıktılarını değerlendirmek için:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 bg-teal-50 p-4 rounded-lg">
                    <svg className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-teal-900 mb-1">Haftalık Sınavlar</h4>
                      <p className="text-sm text-slate-700">Her hafta öğrenilen tabloları içeren 20 soruluk kısa test.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-teal-50 p-4 rounded-lg">
                    <svg className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-teal-900 mb-1">Zaman Testleri</h4>
                      <p className="text-sm text-slate-700">1-2 dakika içinde tamamlanması gereken hızlı hatırlama testleri.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-teal-50 p-4 rounded-lg">
                    <svg className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-teal-900 mb-1">Problem Çözme Görevleri</h4>
                      <p className="text-sm text-slate-700">Çarpım tablosunu gerçek hayat problemlerinde uygulama becerisini ölçme.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Tracking */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8 border-2 border-purple-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">İlerleme Takibi</h3>
                <p className="text-slate-700 mb-4">
                  Her öğrenci için bireysel ilerleme grafiği tutun:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Hangi tablolarda ustalaştı, hangilerde zorlanıyor</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Zaman içinde gelişim trendi (doğruluk oranı ve hız)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Kullandığı stratejiler ve tercih ettiği yöntemler</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Common Misconceptions */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Yaygın Kavram Yanılgıları ve Çözümleri
            </h2>
            <div className="space-y-4">
              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer group">
                <summary className="text-lg font-semibold text-slate-900 flex items-center justify-between">
                  <span>"Çarpma her zaman büyütür"</span>
                  <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-slate-700">
                  <p className="mb-2"><strong>Yanılgı:</strong> Öğrenciler çarpımın sonucunun her zaman çarpanlardan büyük olduğunu düşünür.</p>
                  <p className="mb-2"><strong>Gerçek:</strong> 1 ile çarpma sonucu değiştirmez, 0 ile çarpma sonucu sıfırlar.</p>
                  <p className="bg-amber-50 p-3 rounded"><strong>Çözüm:</strong> 0×5=0 ve 1×7=7 gibi örneklerle bu özel durumları açıkça gösterin.</p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer group">
                <summary className="text-lg font-semibold text-slate-900 flex items-center justify-between">
                  <span>"Çarpanların sırası önemli"</span>
                  <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-slate-700">
                  <p className="mb-2"><strong>Yanılgı:</strong> 3×4 ile 4×3'ün farklı olduğunu düşünme.</p>
                  <p className="mb-2"><strong>Gerçek:</strong> Değişme özelliği gereği ikisi de aynı sonucu verir.</p>
                  <p className="bg-amber-50 p-3 rounded"><strong>Çözüm:</strong> Dizi modellerini fiziksel olarak döndürerek görsel kanıt sağlayın.</p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer group">
                <summary className="text-lg font-semibold text-slate-900 flex items-center justify-between">
                  <span>"Çarpım sadece ezber"</span>
                  <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-slate-700">
                  <p className="mb-2"><strong>Yanılgı:</strong> Çarpım tablosunun sadece ezberlenmesi gereken bir liste olduğu düşüncesi.</p>
                  <p className="mb-2"><strong>Gerçek:</strong> Çarpım örüntüler, ilişkiler ve stratejiler içerir.</p>
                  <p className="bg-amber-50 p-3 rounded"><strong>Çözüm:</strong> Parçalama, değişme özelliği gibi stratejiler öğreterek esnek düşünmeyi geliştirin.</p>
                </div>
              </details>
            </div>
          </section>

          {/* Resources */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Ek Kaynaklar ve Materyaller
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Yazdırılabilir Materyaller</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">📄</span>
                      <span>Çarpım tablosu çizelgeleri (1-10, 1-12)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">📄</span>
                      <span>Boş çarpım tablosu şablonları</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">📄</span>
                      <span>Flash card setleri</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">📄</span>
                      <span>Çalışma yaprakları (farklı seviyeler)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Dijital Araçlar</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2">💻</span>
                      <span>Bu web sitesindeki interaktif oyunlar</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2">💻</span>
                      <span>Online alıştırma platformları</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2">💻</span>
                      <span>Eğitici matematik oyunları</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2">💻</span>
                      <span>İlerleme takip uygulamaları</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg shadow-lg p-6 sm:p-8 text-white text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Sınıfınızda Kullanmaya Başlayın!
            </h2>
            <p className="text-base sm:text-lg text-emerald-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Bu platformu sınıfınızda kullanarak öğrencilerinize etkili, eğlenceli ve 
              anlamlı bir çarpım tablosu öğrenme deneyimi sunun.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link 
                href="/1-10"
                className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors inline-flex items-center justify-center"
              >
                Tablolara Göz Atın
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/"
                className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-800 transition-colors inline-flex items-center justify-center"
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
