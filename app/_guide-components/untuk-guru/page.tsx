import Link from 'next/link'
import Header from '@/app/components/id/Header'
import Footer from '@/app/components/id/Footer'

export const metadata = {
  title: 'Untuk Guru: Panduan Tabel Perkalian | Materi Pengajaran Kelas',
  description: 'Sumber daya profesional untuk mengajar tabel perkalian di kelas, strategi pedagogis, saran aktivitas, dan alat penilaian.',
  keywords: 'mengajar tabel perkalian, aktivitas kelas, metode pedagogis, pengajaran matematika',
  alternates: {
    canonical: '/untuk-guru',
  },
}

export default function UntukGuru() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Panduan Tabel Perkalian untuk Guru
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Strategi efektif, aktivitas kelas, dan sumber daya untuk mengajar 
              tabel perkalian dengan cara yang dapat dikuasai semua siswa.
            </p>
          </div>
        </div>
      </section>

      {/* Teaching Strategies Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Strategi Mengajar yang Efektif
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Strategy 1 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">👁️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Visualisasi</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Gunakan representasi visual untuk membantu siswa memahami 
                perkalian sebagai kelompok yang berulang.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Array persegi panjang (misalnya, 3×4 sebagai 3 baris 4 objek)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Model area menggunakan kertas kotak-kotak</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Diagram lompat pada garis bilangan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Manipulatif konkret (balok, penghitung, kubus)</span>
                </li>
              </ul>
            </div>

            {/* Strategy 2 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🧩</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Dekomposisi</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Ajarkan siswa untuk memecah perkalian yang sulit 
                menjadi operasi yang lebih sederhana.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>7×6 = (5×6) + (2×6) = 30 + 12 = 42</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>9×8 = (10×8) - (1×8) = 80 - 8 = 72</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Gunakan penggandaan: 6×4 = 2×(3×4)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Sifat distributif dalam tindakan</span>
                </li>
              </ul>
            </div>

            {/* Strategy 3 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🔢</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Pola</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Bantu siswa menemukan dan menggunakan pola untuk memfasilitasi 
                pembelajaran dan hafalan.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Tabel 2: semua bilangan genap</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Tabel 5: berakhiran 0 atau 5</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Tabel 9: jumlah digit = 9, pola menurun</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Sifat komutatif: 3×7 = 7×3</span>
                </li>
              </ul>
            </div>

            {/* Strategy 4 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Aplikasi Dunia Nyata</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Hubungkan perkalian dengan situasi sehari-hari untuk memberi 
                makna dan konteks pada pembelajaran.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Berbelanja dan masalah uang</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Mengatur objek dalam baris dan kolom</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Resep masakan dan pengukuran</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Olahraga, permainan, dan aktivitas kelompok</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Classroom Activities Section */}
      <section className="py-12 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Aktivitas Kelas
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Activity 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🎯</span>
                Bingo Perkalian
              </h3>
              <p className="text-gray-700 mb-3">
                Siswa membuat kartu bingo dengan produk. 
                Sebutkan perkalian dan siswa menandai jawabannya.
              </p>
              <div className="bg-blue-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Tingkat:</strong> Pemula hingga Menengah<br/>
                <strong>Waktu:</strong> 15-20 menit
              </div>
            </div>

            {/* Activity 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🏃</span>
                Lomba Lari Perkalian
              </h3>
              <p className="text-gray-700 mb-3">
                Tim berlomba untuk menyelesaikan soal perkalian. 
                Setiap anggota menyelesaikan satu soal sebelum lari ke tim.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Tingkat:</strong> Semua tingkat<br/>
                <strong>Waktu:</strong> 20-30 menit
              </div>
            </div>

            {/* Activity 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🎴</span>
                Kartu Flash Perkalian
              </h3>
              <p className="text-gray-700 mb-3">
                Latihan berpasangan dengan kartu flash. 
                Siswa saling menguji dan mencatat kemajuan.
              </p>
              <div className="bg-purple-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Tingkat:</strong> Semua tingkat<br/>
                <strong>Waktu:</strong> 10-15 menit
              </div>
            </div>

            {/* Activity 4 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🎨</span>
                Seni Array Perkalian
              </h3>
              <p className="text-gray-700 mb-3">
                Siswa membuat array visual dengan menggambar atau 
                menggunakan stiker untuk menggambarkan tabel perkalian.
              </p>
              <div className="bg-pink-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Tingkat:</strong> Pemula<br/>
                <strong>Waktu:</strong> 30-40 menit
              </div>
            </div>

            {/* Activity 5 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🎲</span>
                Permainan Dadu Perkalian
              </h3>
              <p className="text-gray-700 mb-3">
                Lempar dua dadu dan kalikan angkanya. 
                Siswa mendapat poin untuk jawaban yang benar.
              </p>
              <div className="bg-yellow-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Tingkat:</strong> Pemula hingga Menengah<br/>
                <strong>Waktu:</strong> 15-25 menit
              </div>
            </div>

            {/* Activity 6 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🎭</span>
                Drama Perkalian
              </h3>
              <p className="text-gray-700 mb-3">
                Siswa membuat dan memerankan skenario yang melibatkan 
                perkalian (misalnya, berbelanja di toko).
              </p>
              <div className="bg-indigo-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Tingkat:</strong> Semua tingkat<br/>
                <strong>Waktu:</strong> 30-45 menit
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Methods */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Metode Penilaian
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-3">📊</span>
                Penilaian Formatif
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">✓</span>
                  <div>
                    <strong>Kuis Harian:</strong> Kuis singkat 5 menit di awal kelas untuk mengecek retensi
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">✓</span>
                  <div>
                    <strong>Papan Tulis Mini:</strong> Siswa menunjukkan jawaban mereka secara simultan
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">✓</span>
                  <div>
                    <strong>Tiket Keluar:</strong> 3-5 soal perkalian sebelum meninggalkan kelas
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">✓</span>
                  <div>
                    <strong>Observasi:</strong> Catat kemajuan siswa selama aktivitas kelompok
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-3">📝</span>
                Penilaian Sumatif
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <div>
                    <strong>Tes Tertulis:</strong> Tes komprehensif semua tabel perkalian
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <div>
                    <strong>Tes Waktu:</strong> Berapa banyak soal yang dapat diselesaikan dalam 5 menit
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <div>
                    <strong>Proyek:</strong> Siswa membuat poster atau presentasi tentang tabel perkalian
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <div>
                    <strong>Tes Lisan:</strong> Penilaian satu-satu untuk mengecek kefasihan
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiated Instruction */}
      <section className="py-12 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Instruksi Terdiferensiasi
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-green-900 mb-4">
                🌱 Siswa yang Kesulitan
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Mulai dengan tabel yang paling mudah (1, 2, 5, 10)</li>
                <li>• Gunakan manipulatif konkret dan banyak</li>
                <li>• Berikan waktu ekstra untuk latihan</li>
                <li>• Gunakan mnemonik dan lagu</li>
                <li>• Latihan satu-satu atau kelompok kecil</li>
                <li>• Bagi tugas menjadi langkah-langkah kecil</li>
                <li>• Rayakan setiap kemajuan kecil</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                📚 Siswa Rata-rata
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Perkuat dengan latihan yang bervariasi</li>
                <li>• Tawarkan pilihan aktivitas</li>
                <li>• Dorong penggunaan strategi yang berbeda</li>
                <li>• Kerja kelompok untuk pembelajaran peer-to-peer</li>
                <li>• Gunakan permainan dan kompetisi yang sehat</li>
                <li>• Aplikasi dunia nyata dan soal cerita</li>
                <li>• Penilaian diri dan pelacakan kemajuan</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-4">
                🚀 Siswa Canggih
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Perkenalkan tabel perkalian yang lebih besar (11, 12)</li>
                <li>• Tantangan dengan perkalian multi-digit</li>
                <li>• Jelajahi pola dan hubungan matematika</li>
                <li>• Proyek dan presentasi kreatif</li>
                <li>• Peran sebagai tutor untuk teman sebaya</li>
                <li>• Aplikasi aljabar dasar</li>
                <li>• Masalah pemecahan yang kompleks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Integration */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Menggunakan Teknologi dalam Pengajaran
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-3">💻</span>
                  Sumber Daya Digital
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <div>
                      <strong>Platform Interaktif:</strong> Gunakan situs web ini untuk latihan dan permainan interaktif
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <div>
                      <strong>Video Edukatif:</strong> Gunakan video untuk memperkenalkan konsep baru
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <div>
                      <strong>Aplikasi Mobile:</strong> Rekomendasikan aplikasi untuk latihan di rumah
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <div>
                      <strong>Gamifikasi:</strong> Gunakan sistem poin dan lencana untuk memotivasi
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-3">📱</span>
                  Pembelajaran Blended
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <div>
                      <strong>Flipped Classroom:</strong> Siswa menonton video di rumah, berlatih di kelas
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <div>
                      <strong>Stasi Rotasi:</strong> Siswa berputar antara aktivitas digital dan manual
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <div>
                      <strong>Pekerjaan Rumah Online:</strong> Tetapkan latihan digital untuk dikerjakan di rumah
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <div>
                      <strong>Progress Tracking:</strong> Gunakan dashboard untuk memantau kemajuan siswa
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-xl mr-2">🌐</span>
                Gunakan Situs Ini di Kelas Anda
              </h4>
              <p className="text-gray-700 mb-4">
                Platform ini menawarkan berbagai alat interaktif yang sempurna untuk pengajaran di kelas:
              </p>
              <div className="grid sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Latihan interaktif untuk semua tabel perkalian</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Permainan yang menyenangkan dan memotivasi</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Pelacakan kemajuan untuk setiap siswa</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Konten yang disesuaikan dengan tingkat kesulitan</span>
                </div>
              </div>
              <div className="mt-4">
                <Link 
                  href="/id/tabel-perkalian"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Jelajahi Sumber Daya
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="py-12 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Tantangan Umum Siswa dan Solusi
          </h2>
          
          <div className="space-y-4">
            <details className="bg-white rounded-xl shadow-lg p-6 cursor-pointer">
              <summary className="font-bold text-lg text-gray-900 flex items-center">
                <span className="text-2xl mr-3">❓</span>
                Siswa menghafal tanpa memahami konsep
              </summary>
              <div className="mt-4 pl-10 text-gray-700 space-y-2">
                <p><strong>Solusi:</strong> Gunakan manipulatif konkret untuk menunjukkan bahwa 3×4 berarti "3 kelompok dari 4" atau "4+4+4".</p>
                <p>Buat array dengan objek fisik, gunakan gambar, dan hubungkan dengan situasi dunia nyata. Pemahaman konseptual lebih penting daripada hafalan mekanis.</p>
                <p className="text-sm italic text-gray-600">Tip: Selalu tanyakan "Mengapa?" untuk memeriksa pemahaman.</p>
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-lg p-6 cursor-pointer">
              <summary className="font-bold text-lg text-gray-900 flex items-center">
                <span className="text-2xl mr-3">❓</span>
                Siswa membingungkan tabel perkalian satu sama lain
              </summary>
              <div className="mt-4 pl-10 text-gray-700 space-y-2">
                <p><strong>Solusi:</strong> Fokus pada satu tabel pada satu waktu. Kuasai satu dengan baik sebelum beralih ke yang berikutnya.</p>
                <p>Gunakan kode warna atau asosiasi visual untuk tabel yang berbeda. Latih diferensiasi: "Apakah ini 3×4 atau 4×3?"</p>
                <p className="text-sm italic text-gray-600">Tip: Ajarkan sifat komutatif untuk mengurangi jumlah fakta yang perlu diingat.</p>
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-lg p-6 cursor-pointer">
              <summary className="font-bold text-lg text-gray-900 flex items-center">
                <span className="text-2xl mr-3">❓</span>
                Siswa cepat melupakan apa yang sudah dipelajari
              </summary>
              <div className="mt-4 pl-10 text-gray-700 space-y-2">
                <p><strong>Solusi:</strong> Review teratur adalah kunci. Sertakan tabel yang sudah dipelajari sebelumnya bersama dengan yang baru.</p>
                <p>Buat jadwal review: setiap minggu review tabel lama. Gunakan permainan untuk membuat review menyenangkan.</p>
                <p className="text-sm italic text-gray-600">Tip: "Pemanasan" 5 menit di awal setiap pelajaran untuk review tabel sebelumnya.</p>
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-lg p-6 cursor-pointer">
              <summary className="font-bold text-lg text-gray-900 flex items-center">
                <span className="text-2xl mr-3">❓</span>
                Siswa lambat dalam menghitung
              </summary>
              <div className="mt-4 pl-10 text-gray-700 space-y-2">
                <p><strong>Solusi:</strong> Kecepatan datang dengan latihan teratur. Mulai dengan akurasi, kecepatan akan mengikuti.</p>
                <p>Gunakan latihan waktu dalam dosis kecil, tingkatkan ekspektasi secara bertahap. Rayakan peningkatan kecepatan, tidak hanya akurasi.</p>
                <p className="text-sm italic text-gray-600">Tip: Tetapkan tujuan pribadi untuk setiap siswa, bukan standar kelas.</p>
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-lg p-6 cursor-pointer">
              <summary className="font-bold text-lg text-gray-900 flex items-center">
                <span className="text-2xl mr-3">❓</span>
                Siswa kehilangan motivasi atau mengembangkan kecemasan matematika
              </summary>
              <div className="mt-4 pl-10 text-gray-700 space-y-2">
                <p><strong>Solusi:</strong> Buat pembelajaran menyenangkan dengan permainan dan aktivitas. Hindari tekanan dan lingkungan kompetitif yang berlebihan.</p>
                <p>Rayakan upaya dan kemajuan, bukan hanya hasil akhir. Gunakan penguatan positif secara konsisten.</p>
                <p className="text-sm italic text-gray-600">Tip: Izinkan siswa memilih aktivitas atau metode latihan mereka untuk meningkatkan kepemilikan.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Planning Guide */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Panduan Perencanaan Unit
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Program 6-8 Minggu yang Disarankan
            </h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-6 py-3">
                <h4 className="font-bold text-lg text-gray-900 mb-2">Minggu 1-2: Dasar-Dasar dan Tabel Mudah</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Perkenalkan konsep perkalian sebagai penjumlahan berulang</li>
                  <li>• Ajarkan tabel 0, 1, 2, 5, dan 10</li>
                  <li>• Gunakan manipulatif konkret dan representasi visual</li>
                  <li>• Aktivitas: Array, permainan hitungan lompat, bingo</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-6 py-3">
                <h4 className="font-bold text-lg text-gray-900 mb-2">Minggu 3-4: Tabel Tingkat Menengah</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Ajarkan tabel 3, 4, dan 6</li>
                  <li>• Perkenalkan strategi (penggandaan, penambahan)</li>
                  <li>• Review teratur tabel sebelumnya</li>
                  <li>• Aktivitas: Kartu flash, lomba lari, permainan dadu</li>
                </ul>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6 py-3">
                <h4 className="font-bold text-lg text-gray-900 mb-2">Minggu 5-6: Tabel yang Menantang</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Ajarkan tabel 7, 8, dan 9</li>
                  <li>• Ajarkan trik khusus (jari untuk 9, dekomposisi untuk 7 dan 8)</li>
                  <li>• Latihan intensif dan konsolidasi</li>
                  <li>• Aktivitas: Drama, proyek, kompetisi tim</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-6 py-3">
                <h4 className="font-bold text-lg text-gray-900 mb-2">Minggu 7-8: Review dan Penilaian</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Review komprehensif semua tabel</li>
                  <li>• Latihan fakta campuran</li>
                  <li>• Aplikasi dunia nyata dan soal cerita</li>
                  <li>• Penilaian sumatif dan proyek akhir</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-3">💡 Tips Perencanaan:</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Sisihkan 15-20 menit setiap hari untuk latihan tabel perkalian</li>
                <li>• Selalu mulai dengan pemanasan review tabel sebelumnya</li>
                <li>• Variasikan aktivitas untuk menjaga keterlibatan</li>
                <li>• Sesuaikan kecepatan berdasarkan kebutuhan siswa Anda</li>
                <li>• Integrasikan tabel perkalian ke dalam pelajaran matematika lainnya</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mulai Transformasi Kelas Anda Hari Ini
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Dengan strategi yang tepat, setiap siswa dapat menguasai tabel perkalian. 
              Mari buat matematika menyenangkan dan dapat diakses untuk semua!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/id/tabel-perkalian"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center justify-center"
              >
                <span className="mr-2">🎯</span>
                Jelajahi Sumber Daya
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/untuk-orang-tua"
                className="bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors inline-flex items-center justify-center border-2 border-purple-400"
              >
                Panduan untuk Orang Tua
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-purple-400">
              <p className="text-purple-100">
                💡 <strong>Ingat:</strong> Antusiasme Anda bersifat menular. Ketika Anda bersemangat tentang matematika, siswa Anda juga akan bersemangat!
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
