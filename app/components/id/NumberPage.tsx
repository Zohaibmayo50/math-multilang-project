'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Footer from './Footer'
import PracticePreview from './PracticePreview'
import PrintableExercises from './PrintableExercises'
import NumberGames from './NumberGames'

interface NumberPageIdProps {
  number: number
  rangeStart: number
  rangeEnd: number
}

export default function NumberPageId({ number, rangeStart, rangeEnd }: NumberPageIdProps) {
  const tableRef = useRef<HTMLDivElement>(null)
  
  const colors = [
    'from-blue-500 to-indigo-600',
    'from-purple-500 to-pink-600',
    'from-green-500 to-teal-600',
    'from-orange-500 to-red-600',
    'from-cyan-500 to-blue-600',
  ]
  
  const colorIndex = (number - 1) % colors.length

  // Print function
  const handlePrint = () => {
    if (tableRef.current) {
      const printWindow = window.open('', '', 'width=800,height=600')
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>Tabel Perkalian ${number}</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  padding: 20px;
                  max-width: 600px;
                  margin: 0 auto;
                }
                h1 {
                  text-align: center;
                  color: #1e40af;
                  margin-bottom: 30px;
                }
                .table-item {
                  display: flex;
                  justify-content: space-between;
                  padding: 12px 20px;
                  margin: 8px 0;
                  background: #f0f9ff;
                  border-radius: 8px;
                  font-size: 18px;
                }
                .equation {
                  font-weight: 500;
                }
                .result {
                  font-weight: bold;
                  color: #1e40af;
                }
                @media print {
                  body { padding: 10px; }
                  .table-item { page-break-inside: avoid; }
                }
              </style>
            </head>
            <body>
              <h1>Tabel Perkalian ${number}</h1>
              ${Array.from({ length: 10 }, (_, i) => `
                <div class="table-item">
                  <span class="equation">${number} × ${i + 1}</span>
                  <span class="result">= ${number * (i + 1)}</span>
                </div>
              `).join('')}
            </body>
          </html>
        `)
        printWindow.document.close()
        printWindow.focus()
        setTimeout(() => {
          printWindow.print()
          printWindow.close()
        }, 250)
      }
    }
  }

  // Download as image function
  const handleDownload = async () => {
    if (tableRef.current) {
      try {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        canvas.width = 600
        canvas.height = 700
        
        const gradient = ctx.createLinearGradient(0, 0, 600, 700)
        const gradients: { [key: number]: [string, string] } = {
          0: ['#3b82f6', '#4f46e5'],
          1: ['#a855f7', '#ec4899'],
          2: ['#10b981', '#14b8a6'],
          3: ['#f97316', '#ef4444'],
          4: ['#06b6d4', '#3b82f6']
        }
        const [color1, color2] = gradients[colorIndex]
        gradient.addColorStop(0, color1)
        gradient.addColorStop(1, color2)
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, 600, 700)

        ctx.fillStyle = '#ffffff'
        ctx.font = 'bold 36px Arial'
        ctx.textAlign = 'center'
        ctx.fillText('Tabel Perkalian ' + number, 300, 60)

        ctx.font = '24px Arial'
        let y = 120
        for (let i = 1; i <= 10; i++) {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'
          ctx.beginPath()
          ctx.roundRect(30, y - 30, 540, 50, 10)
          ctx.fill()

          ctx.fillStyle = '#ffffff'
          ctx.textAlign = 'left'
          ctx.font = '22px Arial'
          ctx.fillText(number + ' × ' + i, 50, y)
          
          ctx.textAlign = 'right'
          ctx.font = 'bold 26px Arial'
          ctx.fillText('= ' + (number * i), 550, y)
          
          y += 60
        }

        canvas.toBlob((blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = url
            link.download = number + '-tabel-perkalian.png'
            link.click()
            URL.revokeObjectURL(url)
          }
        })
      } catch (error) {
        console.error('Download failed:', error)
      }
    }
  }

  const getNumberMeaning = () => {
    return `Mengalikan dengan ${number} berarti mengambil kelipatan dari ${number}. Setiap kali Anda mengalikan, Anda menghitung grup yang masing-masing berisi ${number} item. Ini adalah konsep fundamental dalam matematika yang membantu dalam banyak aplikasi praktis kehidupan sehari-hari.`
  }

  const getWhyImportant = () => {
    return `Mempelajari tabel perkalian ${number} sangat penting karena membantu Anda melakukan perhitungan mental dengan cepat. Ini adalah keterampilan dasar yang akan Anda gunakan sepanjang hidup Anda, dari berbelanja hingga menghitung waktu. Menguasai tabel ini akan membuat matematika lebih mudah dan lebih menyenangkan.`
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${colors[colorIndex]} pt-20 pb-16`}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-1/4 text-8xl font-bold opacity-10 animate-float">{number}</div>
          <div className="absolute top-40 left-1/4 text-9xl font-bold opacity-5 animate-float-delayed">×</div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-block bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6">
              <span className="text-sm font-bold text-blue-600">Tabel Perkalian</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
              {number}
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Pelajari tabel perkalian {number} dengan cara yang menyenangkan dan interaktif
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <a href="#table" className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-md">
              📊 Lihat Tabel
            </a>
            <a href="#practice" className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all">
              ⚡ Latihan
            </a>
            <a href="#games" className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all">
              🎮 Permainan
            </a>
          </div>
        </div>
      </section>

      {/* Multiplication Table */}
      <section id="table" className="section-container bg-white" ref={tableRef}>
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900">Tabel Perkalian {number}</h2>
            <div className="flex gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm"
              >
                🖨️ Cetak
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm"
              >
                📥 Unduh
              </button>
            </div>
          </div>

          <div className={`bg-gradient-to-br ${colors[colorIndex]} rounded-2xl p-8 shadow-xl`}>
            <div className="space-y-3">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="flex justify-between items-center bg-white/20 backdrop-blur-sm rounded-xl px-6 py-4 hover:bg-white/30 transition-all group">
                  <span className="text-xl font-medium text-white">
                    {number} × {i + 1}
                  </span>
                  <span className="text-2xl font-bold text-white group-hover:scale-110 transition-transform">
                    = {number * (i + 1)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-6">
            <h3 className="font-semibold text-slate-900 mb-2">💡 Tips Cepat</h3>
            <p className="text-slate-700">
              Untuk menghafal tabel ini, coba lakukan latihan setiap hari selama 10 menit. 
              Mulai dari atas ke bawah, lalu coba secara acak!
            </p>
          </div>
        </div>
      </section>

      {/* What Does It Mean */}
      <section className="section-container bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Apa Arti Mengalikan dengan {number}?
          </h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              {getNumberMeaning()}
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-4">Contoh Visual:</h3>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="text-center">
                  <div className="text-4xl mb-2">{number}</div>
                  <div className="text-sm text-slate-600">× 3 =</div>
                </div>
                <div className="flex gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="bg-blue-500 text-white rounded-lg p-4 font-bold">
                      {number}
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">= {number * 3}</div>
                  <div className="text-sm text-slate-600">Total</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Important */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Mengapa Ini Penting?
          </h2>
          
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-200">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              {getWhyImportant()}
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 border border-amber-200">
                <div className="text-3xl mb-2">🧮</div>
                <h4 className="font-semibold text-slate-900 mb-1">Perhitungan Cepat</h4>
                <p className="text-sm text-slate-600">Hitung dengan cepat tanpa kalkulator</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-amber-200">
                <div className="text-3xl mb-2">📚</div>
                <h4 className="font-semibold text-slate-900 mb-1">Dasar Matematika</h4>
                <p className="text-sm text-slate-600">Fondasi untuk topik lanjutan</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-amber-200">
                <div className="text-3xl mb-2">🌟</div>
                <h4 className="font-semibold text-slate-900 mb-1">Kehidupan Sehari-hari</h4>
                <p className="text-sm text-slate-600">Berguna dalam aktivitas harian</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patterns & Observations */}
      <section className="section-container bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Pola & Pengamatan
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">🔢 Pola Angka</h3>
              <p className="text-slate-700 mb-4">
                Perhatikan bagaimana digit terakhir berubah saat Anda melalui tabel perkalian {number}. 
                Ada pola yang berulang yang dapat membantu Anda mengingat!
              </p>
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-sm text-slate-600 mb-2">Digit terakhir:</div>
                <div className="font-mono font-bold text-blue-600">
                  {[...Array(10)].map((_, i) => (number * (i + 1)) % 10).join(', ')}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-purple-600 mb-3">✨ Fakta Menarik</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>{number} × 5 = {number * 5} (Setengah dari {number} × 10)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>{number} × 10 = {number * 10} (Tambahkan 0)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>{number} × 1 = {number} (Angka itu sendiri)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <PracticePreview rangeStart={number} rangeEnd={number} />

      {/* Games Section */}
      <NumberGames number={number} />

      {/* Printable Exercises */}
      <PrintableExercises rangeStart={number} rangeEnd={number} />

      {/* Learning Strategies */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Strategi Pembelajaran
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">1. Metode Pengulangan</h3>
              <p className="text-slate-700 leading-relaxed">
                Ulangi tabel perkalian {number} setiap hari. Mulai dari {number} × 1 hingga {number} × 10, 
                lalu coba dari bawah ke atas. Konsistensi adalah kunci!
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">2. Visualisasi</h3>
              <p className="text-slate-700 leading-relaxed">
                Bayangkan objek fisik dalam grup {number}. Misalnya, {number} × 3 adalah tiga grup yang masing-masing berisi {number} item.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">3. Permainan & Aktivitas</h3>
              <p className="text-slate-700 leading-relaxed">
                Gunakan permainan interaktif di halaman ini untuk membuat pembelajaran menjadi menyenangkan. 
                Bermain selama 10-15 menit setiap hari!
              </p>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border-l-4 border-amber-500">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">4. Tes Diri Sendiri</h3>
              <p className="text-slate-700 leading-relaxed">
                Tutup jawabannya dan coba ingat hasil dari {number} × 1 hingga {number} × 10. 
                Tuliskan jawaban Anda dan periksa!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="section-container bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Kesalahan Umum
          </h2>
          
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <div className="space-y-4">
              <div className="flex items-start p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                <span className="text-2xl mr-4">⚠️</span>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Mencampuradukkan dengan Tabel Lain</h4>
                  <p className="text-slate-700 text-sm">
                    Pastikan Anda fokus pada {number} dan tidak tertukar dengan tabel perkalian lain. 
                    Latihan terpisah untuk setiap tabel.
                  </p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                <span className="text-2xl mr-4">⚠️</span>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Terburu-buru</h4>
                  <p className="text-slate-700 text-sm">
                    Akurasi lebih penting daripada kecepatan di awal. Kecepatan akan datang dengan latihan.
                  </p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                <span className="text-2xl mr-4">⚠️</span>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Tidak Berlatih Secara Teratur</h4>
                  <p className="text-slate-700 text-sm">
                    Latihan 10 menit setiap hari lebih baik daripada satu jam seminggu sekali. 
                    Konsistensi adalah kunci!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Tips */}
      <section className="section-container bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Tips Latihan</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-3">📅</div>
              <h3 className="text-xl font-semibold mb-2">Latihan Harian</h3>
              <p className="text-white/90">
                Luangkan 10-15 menit setiap hari untuk berlatih tabel perkalian {number}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Tetapkan Tujuan</h3>
              <p className="text-white/90">
                Mulai dengan mengingat 5 perkalian pertama, lalu tingkatkan secara bertahap
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-3">🎮</div>
              <h3 className="text-xl font-semibold mb-2">Buat Menyenangkan</h3>
              <p className="text-white/90">
                Gunakan permainan dan aktivitas interaktif untuk membuat pembelajaran menjadi menarik
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="text-xl font-semibold mb-2">Lacak Kemajuan</h3>
              <p className="text-white/90">
                Catat kemajuan Anda dan rayakan pencapaian kecil di sepanjang jalan
              </p>
            </div>
          </div>

          <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <p className="text-lg">
              💡 <strong>Ingat:</strong> Setiap ahli pernah menjadi pemula. Terus berlatih dan Anda akan menguasai tabel perkalian {number}!
            </p>
          </div>
        </div>
      </section>

      {/* Related Tables */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Tabel Perkalian Terkait
          </h2>
          
          <p className="text-lg text-slate-700 mb-8">
            Setelah Anda menguasai tabel perkalian {number}, coba tabel-tabel terkait ini:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {number > 2 && (
              <Link
                href={`/id/tabel-perkalian/${number - 1}`}
                className="block bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all group"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">{number - 1}</div>
                <p className="text-slate-700">Tabel Perkalian {number - 1}</p>
                <div className="text-blue-600 group-hover:translate-x-1 transition-transform inline-block mt-2">→</div>
              </Link>
            )}
            
            {number < 12 && (
              <Link
                href={`/id/tabel-perkalian/${number + 1}`}
                className="block bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all group"
              >
                <div className="text-3xl font-bold text-purple-600 mb-2">{number + 1}</div>
                <p className="text-slate-700">Tabel Perkalian {number + 1}</p>
                <div className="text-purple-600 group-hover:translate-x-1 transition-transform inline-block mt-2">→</div>
              </Link>
            )}

            <Link
              href={`/id/tabel-perkalian/${rangeStart}-${rangeEnd}`}
              className="block bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200 hover:border-green-400 hover:shadow-lg transition-all group"
            >
              <div className="text-3xl font-bold text-green-600 mb-2">{rangeStart}-{rangeEnd}</div>
              <p className="text-slate-700">Rentang {rangeStart}-{rangeEnd}</p>
              <div className="text-green-600 group-hover:translate-x-1 transition-transform inline-block mt-2">→</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
