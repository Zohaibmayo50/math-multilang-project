import Link from 'next/link'
import Header from '@/app/components/id/Header'
import Footer from '@/app/components/id/Footer'

export const metadata = {
  title: 'Untuk Siswa: Panduan Tabel Perkalian | Pembelajaran Langkah demi Langkah',
  description: 'Panduan langkah demi langkah untuk mempelajari tabel perkalian dengan mudah. Belajar sesuai kecepatan Anda sendiri dengan materi visual, aktivitas praktis, dan permainan yang menyenangkan!',
  keywords: 'belajar tabel perkalian, matematika untuk siswa, panduan perkalian, perkalian langkah demi langkah',
  alternates: {
    canonical: '/untuk-siswa',
  },
}

export default function UntukSiswa() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white pt-20 pb-12 md:pt-24 md:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
                Belajar Tabel Perkalian itu Sangat Mudah! 🎯
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 mb-6 md:mb-8">
                Belajar sesuai kecepatan Anda sendiri, belajar sambil bersenang-senang, dan menjadi pahlawan matematika! 
                Panduan ini akan membantu Anda mempelajari tabel perkalian langkah demi langkah.
              </p>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-blue-100">Kamu juga bisa melakukannya!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Why Learn */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Mengapa Saya Harus Belajar Tabel Perkalian? 🤔
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">
                Tabel perkalian adalah kekuatan super dalam dunia matematika! Inilah yang akan Anda dapatkan:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                    ⚡
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Perhitungan Cepat</h3>
                    <p className="text-slate-700">Anda akan dapat menyelesaikan soal matematika jauh lebih cepat!</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-2xl">
                    🎮
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Berguna dalam Kehidupan Sehari-hari</h3>
                    <p className="text-slate-700">Berguna saat berbelanja, dalam permainan, di mana-mana!</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-2xl">
                    🏆
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Meningkatkan Kepercayaan Diri</h3>
                    <p className="text-slate-700">Kepercayaan diri Anda dalam matematika akan meningkat dan Anda akan lebih sukses!</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-2xl">
                    🧠
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Kekuatan Otak</h3>
                    <p className="text-slate-700">Ingatan Anda akan lebih kuat dan Anda akan belajar berpikir lebih cepat!</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Learning Path */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Jalur Pembelajaran Langkah demi Langkah 🚀
            </h2>
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border-l-4 border-green-500">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">Mulai dengan Tabel yang Mudah (1, 2, 5, 10)</h3>
                    <p className="text-slate-700 mb-3">
                      Memulai dengan tabel yang paling mudah akan memberi Anda kepercayaan diri! Mereka sangat sederhana dan Anda akan mempelajarinya dengan cepat.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-900 mb-2">Mengapa tabel ini mudah?</p>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• <strong>Tabel 1:</strong> Setiap angka tetap sama! (1×5=5)</li>
                        <li>• <strong>Tabel 2:</strong> Tambahkan angka dua kali! (2×4 = 4+4 = 8)</li>
                        <li>• <strong>Tabel 5:</strong> Selalu berakhiran 5 atau 0!</li>
                        <li>• <strong>Tabel 10:</strong> Tambahkan nol di belakang! (10×3 = 30)</li>
                      </ul>
                    </div>
                    <div className="mt-3">
                      <Link href="/id/tabel-perkalian/1-10" className="text-green-600 hover:text-green-700 font-medium inline-flex items-center">
                        Ke Tabel Perkalian 1-10 →
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
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">Lanjutkan ke Tabel Tingkat Menengah (3, 4, 6)</h3>
                    <p className="text-slate-700 mb-3">
                      Sekarang Anda siap untuk tabel yang sedikit lebih menantang! Jangan khawatir, ada trik untuk tabel ini juga.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-900 mb-2">Trik:</p>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• <strong>Tabel 3:</strong> Tambahkan angka 3 kali (3×4 = 4+4+4 = 12)</li>
                        <li>• <strong>Tabel 4:</strong> Kalikan dengan 2, lalu gandakan (4×5 = 2×5×2 = 20)</li>
                        <li>• <strong>Tabel 6:</strong> Gunakan tabel 5 dan tambahkan 1 lagi (6×4 = 5×4 + 4 = 24)</li>
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
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Tantang Diri Anda dengan Tabel yang Sulit (7, 8, 9)</h3>
                    <p className="text-slate-700 mb-3">
                      Tabel ini sedikit lebih sulit, tetapi Anda sudah belajar banyak sekarang! Dengan teknik khusus Anda akan menguasai ini juga.
                    </p>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-semibold text-yellow-900 mb-2">Teknik Khusus:</p>
                      <ul className="space-y-2 text-slate-700 text-sm">
                        <li>• <strong>Tabel 9 - Trik Jari:</strong> Angkat kedua tangan, turunkan jari dari angka yang Anda kalikan. Jari naik di kiri = puluhan, jari di kanan = satuan!</li>
                        <li>• <strong>Tabel 8:</strong> Kalikan dengan 10, lalu kurangi 2 kali (8×7 = 10×7 - 2×7 = 70-14 = 56)</li>
                        <li>• <strong>Tabel 7:</strong> Untuk yang rumit gunakan tabel 5 (7×6 = 5×6 + 2×6 = 30+12 = 42)</li>
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
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Berlatih Terus-menerus 💪</h3>
                    <p className="text-slate-700 mb-3">
                      Untuk tidak lupa semua yang sudah Anda pelajari, berlatihlah sedikit setiap hari. Yang terbaik adalah berlatih sedikit tetapi teratur!
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-900 mb-2">Tips Latihan Harian:</p>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• Belajar 10-15 menit setiap hari (tidak banyak, tetapi teratur!)</li>
                        <li>• Latihan dengan bermain - sangat menyenangkan!</li>
                        <li>• Adakan kompetisi dengan keluarga Anda</li>
                        <li>• Ketika Anda melihat perkalian dalam kehidupan sehari-hari, hitung itu (misalnya, "3 kotak, 5 cokelat di setiap kotak, berapa total?")</li>
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
              Pembelajaran Visual - Pahami dengan Gambar 🎨
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">
                Memvisualisasikan perkalian dalam pikiran Anda membuat pembelajaran lebih mudah! Berikut adalah beberapa teknik visual:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {/* Arrays */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Susunan Array</h3>
                  <p className="text-slate-700 mb-4 text-sm">Contoh 4 × 3 = 12:</p>
                  <div className="bg-white p-4 rounded inline-block">
                    <div className="grid grid-cols-4 gap-2">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="w-8 h-8 bg-blue-400 rounded"></div>
                      ))}
                    </div>
                    <p className="text-center mt-2 text-sm text-slate-600">4 kolom × 3 baris = 12</p>
                  </div>
                </div>

                {/* Number Line */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Lompatan pada Garis Bilangan</h3>
                  <p className="text-slate-700 mb-4 text-sm">3 × 4: lompatan 4 (0→4→8→12)</p>
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
                    <p className="text-center mt-2 text-xs text-slate-600">3 langkah, setiap langkah 4 satuan</p>
                  </div>
                </div>

                {/* Skip Counting */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Menghitung Lompat</h3>
                  <p className="text-slate-700 mb-3 text-sm">Hitung dengan 5: 5, 10, 15, 20, 25...</p>
                  <div className="bg-white p-3 rounded text-center">
                    <p className="text-purple-700 font-bold text-lg">5 - 10 - 15 - 20 - 25</p>
                    <p className="text-xs text-slate-600 mt-2">Jika Anda menghafal angka-angka ini, tabel 5 sangat mudah!</p>
                  </div>
                </div>

                {/* Patterns */}
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Perhatikan Pola</h3>
                  <p className="text-slate-700 mb-3 text-sm">Rahasia tabel 9:</p>
                  <div className="bg-white p-3 rounded">
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>9×1=<strong className="text-pink-600">09</strong> (0+9=9)</li>
                      <li>9×2=<strong className="text-pink-600">18</strong> (1+8=9)</li>
                      <li>9×3=<strong className="text-pink-600">27</strong> (2+7=9)</li>
                      <li>9×4=<strong className="text-pink-600">36</strong> (3+6=9)</li>
                      <li className="text-xs italic">Digit selalu berjumlah 9!</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Practice Tips */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Tips Berlatih 🎯
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  🎮
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Bermain Game</h3>
                <p className="text-slate-700 mb-3">
                  Latihan dengan permainan yang menyenangkan di situs ini. Belajar sambil bermain jauh lebih menyenangkan!
                </p>
                <Link href="/id/tabel-perkalian" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center text-sm">
                  Jelajahi Permainan →
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  📝
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Ikuti Tes</h3>
                <p className="text-slate-700 mb-3">
                  Gunakan kartu flash atau minta seseorang untuk menguji Anda. Menguji diri sendiri mempercepat pembelajaran Anda!
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  🎵
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Lagu dan Ritme</h3>
                <p className="text-slate-700 mb-3">
                  Ubah tabel perkalian menjadi lagu! Lebih mudah mengingat dengan musik.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  🏆
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Beri Hadiah pada Diri Sendiri</h3>
                <p className="text-slate-700 mb-3">
                  Ketika Anda mempelajari tabel perkalian, beri hadiah pada diri sendiri! Kumpulkan stiker atau manjakan diri dengan sesuatu yang kecil.
                </p>
              </div>
            </div>
          </section>

          {/* Progress Tracking */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Lacak Kemajuan Anda 📊
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">
                Melihat seberapa banyak kemajuan Anda memotivasi Anda! Berikut adalah metode pelacakan:
              </p>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">✅ Daftar Periksa Tabel Perkalian</h3>
                  <p className="text-slate-700 text-sm">
                    Tulis tabel perkalian 1-10 di kertas. Setiap kali Anda mempelajari satu, beri tanda centang besar! 
                    Ketika semua tanda centang selesai, Anda adalah pahlawan tabel perkalian! 🌟
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">📈 Grafik Kemajuan</h3>
                  <p className="text-slate-700 text-sm">
                    Catat berapa banyak pertanyaan yang Anda jawab dengan benar setiap minggu. Buat grafik dan lihat kemajuan Anda. 
                    Setiap minggu Anda semakin baik!
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">⭐ Sistem Bintang</h3>
                  <p className="text-slate-700 text-sm">
                    Untuk setiap jawaban yang benar, gambar bintang. Ketika Anda mencapai 100 bintang, beri diri Anda hadiah istimewa!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Motivation */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Motivasi dan Rahasia Sukses 💫
            </h2>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🌟</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Bersabar</h3>
                      <p className="text-slate-700 text-sm">Semua butuh waktu. Anda bisa melakukannya, praktikkan saja!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💪</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Kesalahan itu Normal</h3>
                      <p className="text-slate-700 text-sm">Jangan merasa buruk ketika Anda membuat kesalahan, itu bagian dari pembelajaran!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Tetapkan Tujuan Kecil</h3>
                      <p className="text-slate-700 text-sm">Satu tabel perkalian per hari sudah cukup, jangan terburu-buru!</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🤝</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Minta Bantuan</h3>
                      <p className="text-slate-700 text-sm">Jika ada sesuatu yang tidak Anda mengerti, tanya keluarga atau guru Anda!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎉</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Rayakan Pencapaian Anda</h3>
                      <p className="text-slate-700 text-sm">Setiap pencapaian kecil penting, hargai diri Anda sendiri!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">😊</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Bersenang-senanglah!</h3>
                      <p className="text-slate-700 text-sm">Belajar harus menyenangkan, coba permainannya!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Reference */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Panduan Trik Cepat 🔑
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-900 mb-2">Kalikan dengan 0</h4>
                  <p className="text-sm text-slate-700">Semuanya nol! 0×1000=0</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-green-900 mb-2">Kalikan dengan 1</h4>
                  <p className="text-sm text-slate-700">Angka tetap sama! 1×7=7</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold text-purple-900 mb-2">Kalikan dengan 2</h4>
                  <p className="text-sm text-slate-700">Gandakan angka! 2×6=12</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-bold text-pink-900 mb-2">Kalikan dengan 5</h4>
                  <p className="text-sm text-slate-700">Hasilnya berakhiran 0 atau 5!</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-900 mb-2">Kalikan dengan 9</h4>
                  <p className="text-sm text-slate-700">Digitnya berjumlah 9! Trik jari!</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-bold text-indigo-900 mb-2">Kalikan dengan 10</h4>
                  <p className="text-sm text-slate-700">Tambahkan 0! 10×8=80</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-6 sm:p-8 text-white text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Saatnya Memulai! 🚀
            </h2>
            <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Sekarang Anda siap! Ingat, setiap pahlawan matematika hebat dimulai dengan langkah kecil. 
              Anda juga bisa melakukannya! 💪✨
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/id/tabel-perkalian/1-10"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                <span className="mr-2">🎯</span>
                Mulai Sekarang
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/id/tabel-perkalian"
                className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-flex items-center justify-center"
              >
                Kembali ke Beranda
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-blue-400">
              <p className="text-blue-100 text-sm">
                💡 <strong>Tips:</strong> Belajar 10-15 menit per hari jauh lebih efektif daripada belajar 1 jam yang membosankan!
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
