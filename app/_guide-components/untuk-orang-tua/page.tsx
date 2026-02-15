import Link from 'next/link'
import Header from '@/app/components/id/Header'
import Footer from '@/app/components/id/Footer'

export const metadata = {
  title: 'Panduan Tabel Perkalian untuk Orang Tua | Mendukung Pembelajaran di Rumah',
  description: 'Cara membantu anak Anda belajar tabel perkalian di rumah. Tips praktis, permainan edukatif, dan strategi motivasi.',
  keywords: 'membantu anak dengan tabel perkalian, matematika di rumah, pendidikan untuk orang tua, aktivitas edukatif',
  alternates: {
    canonical: '/untuk-orang-tua',
  },
}

export default function UntukOrangTua() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white pt-20 pb-12 md:pt-24 md:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
                Panduan Tabel Perkalian untuk Orang Tua
              </h1>
              <p className="text-lg sm:text-xl text-purple-100 mb-6 md:mb-8">
                Bagaimana mendukung anak Anda dalam belajar tabel perkalian? 
                Panduan ini berisi strategi efektif dan saran praktis.
              </p>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                <span className="text-purple-100">Panduan Anda untuk kesuksesan anak Anda</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Why It Matters */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Mengapa Ini Penting?
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4">
                Tabel perkalian adalah salah satu langkah paling penting dalam perjalanan matematika anak Anda. 
                Tidak hanya untuk matematika, tetapi mereka juga memiliki kepentingan kritis untuk mengembangkan keterampilan pemecahan masalah, pemikiran logis, dan kepercayaan diri.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">Dasar untuk Matematika Lanjutan</h3>
                  <p className="text-slate-700 text-sm">Pembagian, pecahan, aljabar - semuanya bergantung pada tabel perkalian.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Kepercayaan Diri Akademis</h3>
                  <p className="text-slate-700 text-sm">Keberhasilan dalam tabel perkalian meningkatkan kepercayaan diri secara keseluruhan di sekolah.</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Keterampilan Hidup</h3>
                  <p className="text-slate-700 text-sm">Perhitungan cepat berguna saat berbelanja, memasak, dan dalam kehidupan sehari-hari.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Support Strategies */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Strategi Dukungan di Rumah
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                    🎯
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Jadikan Konkret</h3>
                    <p className="text-slate-700 mb-3">
                      Ajarkan tabel perkalian dengan situasi kehidupan nyata daripada angka abstrak.
                    </p>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>"Jika kamu punya 3 kotak dan 4 apel di setiap kotak, berapa total apelnya?"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>"Karton telur berisi 6 telur. Berapa telur dalam 4 karton?"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Gunakan objek fisik (kancing, permen, mainan) untuk memvisualisasikan</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                    ⏰
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Latihan Singkat tetapi Teratur</h3>
                    <p className="text-slate-700 mb-3">
                      Lebih efektif berlatih 10-15 menit per hari daripada 1 jam seminggu sekali.
                    </p>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      <li>• Saat sarapan - 5 pertanyaan cepat</li>
                      <li>• Dalam perjalanan ke sekolah - hitung dengan 2, dengan 5</li>
                      <li>• Sebelum tidur - review 5 menit</li>
                      <li>• Di akhir pekan - permainan perkalian</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-2xl">
                    🎮
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Pembelajaran Berbasis Permainan</h3>
                    <p className="text-slate-700 mb-3">
                      Mengubah pembelajaran menjadi permainan meningkatkan motivasi dan retensi.
                    </p>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      <li>• Gunakan permainan di situs ini</li>
                      <li>• Mainkan permainan kartu perkalian</li>
                      <li>• Adakan kompetisi keluarga</li>
                      <li>• Tawarkan hadiah kecil untuk pencapaian</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-2xl">
                    🎨
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Visualisasi dan Seni</h3>
                    <p className="text-slate-700 mb-3">
                      Buat pembelajaran visual dan kreatif untuk meningkatkan pemahaman.
                    </p>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      <li>• Buat poster tabel perkalian berwarna-warni bersama</li>
                      <li>• Gambar array dan pola</li>
                      <li>• Gunakan krayon atau spidol untuk membuat grafik</li>
                      <li>• Buat kartu flash yang dihias sendiri</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-2xl">
                    💬
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Dorongan Positif</h3>
                    <p className="text-slate-700 mb-3">
                      Fokus pada kemajuan dan usaha, bukan hanya hasil akhir.
                    </p>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      <li>• "Saya bangga dengan usahamu!" bukan "Kenapa kamu tidak bisa?"</li>
                      <li>• Rayakan setiap kemajuan kecil</li>
                      <li>• Buat lingkungan belajar yang bebas dari kritik</li>
                      <li>• Tunjukkan bahwa kesalahan adalah bagian dari pembelajaran</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Fun Activities */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Aktivitas Menyenangkan di Rumah
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">🏏 Permainan Kartu</h3>
                <div className="space-y-3 text-slate-700 text-sm">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">Perang Perkalian</h4>
                    <p className="text-slate-600">Ambil dua kartu dan kalikan. Jawaban yang benar mendapat poin!</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">Ingatan Perkalian</h4>
                    <p className="text-slate-600">Cocokkan kartu pertanyaan dengan kartu jawaban - seperti permainan memori!</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">UNO Perkalian</h4>
                    <p className="text-slate-600">Sebelum meletakkan kartu, kalikan angkanya dengan angka di atas kartu!</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">🍳 Matematika Dapur</h3>
                <div className="space-y-3 text-slate-700 text-sm">
                  <p>Gunakan tabel perkalian saat memasak:</p>
                  <ul className="space-y-2">
                    <li>• "Jika kita butuh 2 telur per pancake dan kita membuat 4 pancake, berapa telur yang kita butuhkan?"</li>
                    <li>• "Jika resep untuk 3 orang dan kita 6 orang, berapa banyak yang kita butuhkan?"</li>
                    <li>• Menghitung sendok, mengukur bahan</li>
                    <li>• Menggandakan atau membagi resep</li>
                    <li>• "Berapa potong pizza untuk semua orang jika setiap orang makan 2 potong?"</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">🛒 Latihan Perkalian di Toko Kelontong</h3>
                <div className="space-y-3 text-slate-700 text-sm">
                  <ul className="space-y-2">
                    <li>• "3 yogurt masing-masing Rp10.000, berapa totalnya?"</li>
                    <li>• "Sekantong apel berisi 6 apel. Jika kita beli 4 kantong, berapa apelnya?"</li>
                    <li>• Bandingkan harga, hitung penghematan</li>
                    <li>• "Jika kita beli 5 kotak dengan masing-masing 8 batang cokelat, berapa total batangnya?"</li>
                    <li>• Hitung total belanjaan dengan perkalian mental</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">🎨 Aktivitas Kreatif</h3>
                <div className="space-y-3 text-slate-700 text-sm">
                  <ul className="space-y-2">
                    <li>• Buat poster tabel perkalian</li>
                    <li>• Tulis lagu atau sajak perkalian</li>
                    <li>• Lempar dadu dan kalikan hasilnya</li>
                    <li>• Buat cerita dengan soal perkalian</li>
                    <li>• Buat rangkaian bunga atau manik-manik dalam kelompok (3 kelompok dari 4 = 12)</li>
                    <li>• Lukis pola perkalian dengan cat</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">🎵 Musik dan Gerakan</h3>
                <div className="space-y-3 text-slate-700 text-sm">
                  <ul className="space-y-2">
                    <li>• Nyanyikan tabel perkalian mengikuti melodi favorit</li>
                    <li>• Buat rap atau irama dengan tabel perkalian</li>
                    <li>• Loncati tali sambil menyanyikan tabel perkalian</li>
                    <li>• Gunakan gerakan tangan untuk setiap tabel</li>
                    <li>• Cari lagu perkalian di YouTube atau musik anak-anak</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">🎯 Permainan Keluarga</h3>
                <div className="space-y-3 text-slate-700 text-sm">
                  <ul className="space-y-2">
                    <li>• Kompetisi mingguan dengan papan skor</li>
                    <li>• "Siapa yang bisa menjawab 10 soal paling cepat?"</li>
                    <li>• Buat perburuan harta karun dengan soal perkalian</li>
                    <li>• Permainan papan dengan tantangan perkalian</li>
                    <li>• Video game edukatif tentang perkalian</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Common Challenges */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Tantangan Umum dan Solusi
            </h2>
            <div className="space-y-4">
              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
                <summary className="font-semibold text-slate-900 text-lg flex items-center gap-3">
                  <span className="text-purple-500">❓</span>
                  Anak saya takut/menghindari tabel perkalian
                </summary>
                <div className="mt-4 text-slate-700 space-y-2 text-sm">
                  <p><strong>Solusi:</strong> Mulai dengan tabel yang mudah (1, 2, 5, 10) untuk membangun kepercayaan diri. Fokus pada kemajuan, bukan kesempurnaan. Rayakan setiap pencapaian kecil.</p>
                  <p>Hindari menekan atau menciptakan kecemasan. Pembelajaran harus menyenangkan, bukan stres.</p>
                  <p className="text-purple-700 italic">💡 Tip: Ubah tabel perkalian menjadi permainan, bukan "pekerjaan rumah".</p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
                <summary className="font-semibold text-slate-900 text-lg flex items-center gap-3">
                  <span className="text-blue-500">❓</span>
                  Menghafal tetapi tidak memahami konsepnya
                </summary>
                <div className="mt-4 text-slate-700 space-y-2 text-sm">
                  <p><strong>Solusi:</strong> Gunakan objek konkret dan model visual. Tunjukkan bahwa 3×4 berarti "3 kelompok dari 4" atau "4+4+4".</p>
                  <p>Gunakan array objek, gambar, manipulatif. Pemahaman konseptual lebih penting dari hafalan mekanis.</p>
                  <p className="text-blue-700 italic">💡 Tip: Selalu tanyakan "Bisakah kamu menunjukkan padaku bagaimana kamu mendapat jawaban itu?"</p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
                <summary className="font-semibold text-slate-900 text-lg flex items-center gap-3">
                  <span className="text-green-500">❓</span>
                  Membingungkan tabel perkalian satu sama lain
                </summary>
                <div className="mt-4 text-slate-700 space-y-2 text-sm">
                  <p><strong>Solusi:</strong> Fokus pada satu tabel pada satu waktu. Latih satu dengan baik sebelum pindah ke yang berikutnya.</p>
                  <p>Gunakan kode warna atau asosiasi visual untuk tabel yang berbeda. Latih diferensiasi: "Apakah ini 3×4 atau 4×3?"</p>
                  <p className="text-green-700 italic">💡 Tip: Buat kartu flash berwarna - satu warna untuk setiap tabel.</p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
                <summary className="font-semibold text-slate-900 text-lg flex items-center gap-3">
                  <span className="text-yellow-500">❓</span>
                  Melupakan apa yang sudah dipelajari sebelumnya
                </summary>
                <div className="mt-4 text-slate-700 space-y-2 text-sm">
                  <p><strong>Solusi:</strong> Review teratur adalah kunci. Latih tabel yang sudah dipelajari sebelumnya bersama dengan yang baru.</p>
                  <p>Buat jadwal review: setiap minggu sertakan tabel lama. Gunakan permainan untuk membuat review menyenangkan.</p>
                  <p className="text-yellow-700 italic">💡 Tip: Review pagi 5 menit dari semua tabel yang sudah dipelajari mencegah lupa.</p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
                <summary className="font-semibold text-slate-900 text-lg flex items-center gap-3">
                  <span className="text-pink-500">❓</span>
                  Terlalu lambat dalam menghitung
                </summary>
                <div className="mt-4 text-slate-700 space-y-2 text-sm">
                  <p><strong>Solusi:</strong> Kecepatan datang dengan latihan teratur. Mulai dengan akurasi, kecepatan akan mengikuti.</p>
                  <p>Gunakan latihan waktu dalam dosis kecil (1-2 menit), tingkatkan secara bertahap. Jangan buat anak tertekan.</p>
                  <p className="text-pink-700 italic">💡 Tip: Rekam waktu anak sendiri dan dorong mereka untuk mengalahkan rekor pribadi mereka, bukan anak lain.</p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
                <summary className="font-semibold text-slate-900 text-lg flex items-center gap-3">
                  <span className="text-red-500">❓</span>
                  Kehilangan motivasi atau frustrasi
                </summary>
                <div className="mt-4 text-slate-700 space-y-2 text-sm">
                  <p><strong>Solusi:</strong> Jadikan pembelajaran menyenangkan dengan permainan dan aktivitas. Beri mereka pilihan dalam cara mereka berlatih.</p>
                  <p>Istirahat teratur, jangan memaksa sesi panjang. Rayakan upaya dan kemajuan, bukan hanya hasil akhir.</p>
                  <p className="text-red-700 italic">💡 Tip: Jika anak frustrasi, berhenti dan lakukan sesuatu yang menyenangkan. Kembali lagi nanti dengan sikap segar.</p>
                </div>
              </details>
            </div>
          </section>

          {/* Motivation Tips */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Cara Menjaga Motivasi Tetap Tinggi
            </h2>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg shadow-md p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-4">✅ Lakukan</h3>
                  <ul className="space-y-3 text-slate-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Puji usaha, bukan hanya jawaban yang benar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Rayakan kemajuan dengan hadiah kecil</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Jadikan pembelajaran sebagai permainan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Tetapkan tujuan yang dapat dicapai</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Ciptakan lingkungan yang mendukung, bebas tekanan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Belajar bersama dan tunjukkan minat Anda</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Gunakan sistem reward yang jelas (stiker, bintang)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-pink-900 mb-4">❌ Hindari</h3>
                  <ul className="space-y-3 text-slate-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Membandingkan dengan saudara atau anak lain</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Menciptakan tekanan atau kecemasan tentang kesalahan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Sesi latihan yang panjang dan membosankan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Menggunakan bahasa negatif ("Ini mudah, kenapa kamu tidak bisa?")</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Mengharapkan kesempurnaan segera</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Berlatih ketika anak lelah atau lapar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Membuat tabel perkalian terasa seperti hukuman</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Weekly Plan */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Rencana Mingguan yang Disarankan
            </h2>
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <p className="text-slate-700 mb-6">
                Berikut adalah struktur mingguan yang dapat Anda ikuti di rumah untuk membantu anak Anda belajar tabel perkalian secara sistematis:
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-6 py-3 bg-blue-50 rounded-r-lg">
                  <h4 className="font-bold text-lg text-blue-900 mb-2">Senin & Selasa: Pelajari Tabel Baru</h4>
                  <p className="text-slate-700 text-sm">Perkenalkan satu tabel baru. Gunakan manipulatif, gambar, dan aplikasi dunia nyata. 15-20 menit per hari.</p>
                </div>

                <div className="border-l-4 border-green-500 pl-6 py-3 bg-green-50 rounded-r-lg">
                  <h4 className="font-bold text-lg text-green-900 mb-2">Rabu & Kamis: Latih dan Perkuat</h4>
                  <p className="text-slate-700 text-sm">Latih tabel baru dengan permainan dan aktivitas. Mulai review tabel sebelumnya. 15 menit per hari.</p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-6 py-3 bg-yellow-50 rounded-r-lg">
                  <h4 className="font-bold text-lg text-yellow-900 mb-2">Jumat: Review Semua Tabel</h4>
                  <p className="text-slate-700 text-sm">Review semua tabel yang sudah dipelajari dengan permainan cepat atau kuis. 10-15 menit.</p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6 py-3 bg-purple-50 rounded-r-lg">
                  <h4 className="font-bold text-lg text-purple-900 mb-2">Akhir Pekan: Aktivitas Menyenangkan</h4>
                  <p className="text-slate-700 text-sm">Gunakan tabel perkalian dalam aktivitas kehidupan nyata: memasak, berbelanja, permainan keluarga. Santai dan menyenangkan!</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg">
                <p className="text-sm text-slate-700">
                  <strong>💡 Ingat:</strong> Ini adalah panduan fleksibel. Sesuaikan dengan jadwal keluarga Anda dan kecepatan belajar anak Anda. Yang paling penting adalah konsistensi, bukan kesempurnaan!
                </p>
              </div>
            </div>
          </section>

          {/* When to Seek Help */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Kapan Harus Mencari Bantuan
            </h2>
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <p className="text-slate-700 mb-6">
                Sebagian besar anak akan menguasai tabel perkalian dengan latihan dan dukungan yang tepat. 
                Namun, jika Anda melihat tanda-tanda berikut, pertimbangkan untuk berbicara dengan guru atau spesialis:
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">⚠️</span>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Kesulitan Berkelanjutan</h4>
                      <p className="text-slate-700 text-sm">Setelah berbulan-bulan latihan teratur, anak masih sangat kesulitan mengingat bahkan tabel yang paling mudah.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">😰</span>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Kecemasan Ekstrem</h4>
                      <p className="text-slate-700 text-sm">Anak menunjukkan tanda-tanda kecemasan atau stres yang signifikan ketika menghadapi matematika.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">🔢</span>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Masalah Pemrosesan Angka</h4>
                      <p className="text-slate-700 text-sm">Anak memiliki kesulitan dengan konsep angka dasar, tidak hanya tabel perkalian.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">📉</span>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Regresi</h4>
                      <p className="text-slate-700 text-sm">Anak yang sebelumnya menguasai tabel perkalian tiba-tiba kehilangan kemampuan tersebut.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">🎯</span>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Kesenjangan Besar</h4>
                      <p className="text-slate-700 text-sm">Anak jauh di belakang teman sebaya meskipun upaya dan dukungan yang memadai.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">💔</span>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Kepercayaan Diri Rendah</h4>
                      <p className="text-slate-700 text-sm">Anak secara konsisten mengatakan "Saya bodoh" atau "Saya tidak bisa melakukan matematika."</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <p className="text-slate-700 text-sm">
                  <strong>Sumber Bantuan:</strong> Mulai dengan guru kelas anak Anda. Mereka dapat merekomendasikan tutor, spesialis pendidikan, atau evaluasi untuk kesulitan belajar seperti diskalkulia jika diperlukan.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-lg p-6 sm:p-8 text-white text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Mulai Perjalanan Tabel Perkalian dengan Anak Anda Hari Ini
            </h2>
            <p className="text-base sm:text-lg text-purple-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Ingat, setiap anak belajar dengan kecepatan mereka sendiri. Dengan dukungan Anda dan strategi yang tepat, 
              anak Anda akan menguasai tabel perkalian. Kesabaran, latihan, dan positivitas!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/id/tabel-perkalian/1-10"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center justify-center"
              >
                <span className="mr-2">🎯</span>
                Jelajahi Tabel Perkalian
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/untuk-siswa"
                className="bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors inline-flex items-center justify-center"
              >
                Lihat Panduan untuk Siswa
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-purple-400">
              <p className="text-purple-100 text-sm">
                💡 <strong>Tip Emas:</strong> Sikap positif Anda terhadap matematika mempengaruhi sikap anak Anda. 
                Tunjukkan antusiasme dan anak Anda juga akan bersemangat!
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
