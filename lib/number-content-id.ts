// Per-number curated content for locale: id
import type { PatternItem, MistakeItem, RealLifeItem, FunFactItem } from './number-content-types'

const meanings: { [key: number]: string } = {
      1: "Mengalikan dengan 1 adalah kasus istimewa dalam matematika. Berapa pun bilangan yang dikalikan dengan 1, hasilnya selalu bilangan itu sendiri. Sifat ini disebut sifat identitas perkalian — bayangkan seperti bertanya 'berapa banyak kelompok yang saya punya?' Kalau hanya ada 1 kelompok, jumlahnya persis seperti semula.",
      2: "Mengalikan dengan 2 berarti melipatgandakan sebuah bilangan. Ketika kita mengalikan sesuatu dengan 2, kita menjumlahkannya dengan dirinya sendiri. Ini salah satu perkalian paling berguna karena kita sering menggandakan sesuatu dalam kehidupan sehari-hari — menghitung pasangan sepatu, roda sepeda, atau membagi sesuatu sama rata untuk dua orang.",
      3: "Mengalikan dengan 3 berarti mengambil sebuah bilangan sebanyak tiga kali. Bisa dibayangkan sebagai menjumlahkan bilangan yang sama dengan dirinya sendiri tiga kali. Tabel ini penting untuk memahami segitiga, kelompok bertiga, dan segala sesuatu yang datang dalam kelompok tiga.",
      4: "Mengalikan dengan 4 seperti melipatgandakan dua kali. Karena 4 = 2 × 2, kita bisa melipatgandakan sebuah bilangan lalu melipatgandakan hasilnya sekali lagi. Ini membuat tabel 4 lebih mudah dipelajari jika sudah menguasai tabel 2. Angka 4 sering muncul dalam geometri (persegi punya 4 sisi) dan pengukuran waktu (1 jam punya 4 seperempat).",
      5: "Mengalikan dengan 5 menciptakan salah satu pola paling indah dalam matematika. Semua kelipatan 5 berakhiran 0 atau 5, sehingga tabel ini sangat mudah ditebak. Sangat berguna untuk menghitung uang (koin atau uang kertas kelipatan 5) dan membaca jam (interval 5 menit).",
      6: "Mengalikan dengan 6 berarti mengambil enam kelompok sebuah bilangan. Angka 6 adalah tabel perkalian 'sungguhan' pertama karena bukan sekadar kelipatan 2 atau 3 yang sederhana. Namun karena 6 = 2 × 3, kita bisa mengalikan sebuah bilangan dengan 2 lalu dengan 3 (atau sebaliknya) untuk mengalikan dengan 6.",
      7: "Mengalikan dengan 7 umumnya salah satu tabel yang paling sulit bagi siswa karena 7 adalah bilangan prima dan tidak bisa diturunkan dengan mudah dari tabel lain. Namun semua kelipatan 7 memiliki pola yang indah dan bisa dipelajari lewat latihan. Angka 7 penting untuk hari dalam seminggu, benua di dunia, dan banyak rujukan budaya.",
      8: "Mengalikan dengan 8 seperti melipatgandakan tiga kali (8 = 2 × 2 × 2). Gandakan sebuah bilangan, gandakan lagi hasilnya, dan gandakan sekali lagi — hasil akhirnya adalah bilangan itu dikalikan 8. Tabel ini lebih mudah dipelajari jika sudah menguasai tabel 2 dan 4 dengan baik.",
      9: "Mengalikan dengan 9 memiliki salah satu pola paling menakjubkan dalam matematika. Jika kita menjumlahkan digit dari setiap kelipatan 9, hasilnya selalu bisa dibagi 9. Selain itu, digit puluhan dari 9 × n selalu sama dengan n-1. Karena 9 hanya 1 kurang dari 10, tabel ini juga bisa dihitung menggunakan tabel 10.",
      10: "Mengalikan dengan 10 adalah salah satu tabel perkalian yang paling mudah. Ketika mengalikan bilangan apa pun dengan 10, kita cukup menambahkan angka nol di akhir. Ini menjadi dasar dari sistem bilangan desimal kita.",
      11: "Mengalikan dengan 11 memiliki salah satu pola paling menarik dalam matematika. Ketika mengalikan bilangan satu digit dengan 11, hasilnya adalah bilangan itu diulang dua kali (11×3=33, 11×7=77). Untuk perkalian bilangan dua digit dengan 11, ada pola indah lainnya: jumlahkan digitnya dan letakkan di tengah.",
      12: "Mengalikan dengan 12 adalah salah satu tabel paling praktis karena 12 habis dibagi banyak bilangan (1, 2, 3, 4, 6, 12). Sifat ini membuat 12 sangat berguna dalam kehidupan sehari-hari — 1 lusin berisi 12 benda, 1 jam memiliki 12 angka, dan 1 tahun memiliki 12 bulan.",
      13: "Mengalikan dengan 13 melatih kemampuan siswa mengenali pola. 13 adalah bilangan prima, jadi tidak bisa diturunkan dengan mudah dari tabel lain. Namun sangat membantu membayangkan 13 sebagai 10+3: mengalikan bilangan dengan 13 berarti mengalikannya dengan 10 lalu menambahkan hasil kali dengan 3.",
      14: "Mengalikan dengan 14 adalah dua kali lipat tabel 7. Karena 14 = 2 × 7, jika sudah menguasai tabel 7, kita bisa melipatgandakan setiap hasilnya untuk mendapatkan tabel 14. Angka 14 penting dalam perencanaan mingguan (2 minggu = 14 hari) dan menunjukkan sifat bilangan genap.",
      15: "Mengalikan dengan 15 menggabungkan kelipatan 3 dan 5. Karena 15 = 3 × 5, tabel ini mewarisi sifat dari kedua bilangan itu. Semua kelipatan 15 habis dibagi 3 maupun 5. Karena 15 menit adalah seperempat jam, angka ini sering digunakan dalam perhitungan waktu.",
      16: "Mengalikan dengan 16 adalah pangkat empat dari 2 (2×2×2×2=16). Ini membuat tabel 16 bisa dipelajari lewat rantai penggandaan. Kita bisa melipatgandakan 8 untuk mendapatkan 16. Dalam dunia komputer, 16 adalah bilangan penting (sistem heksadesimal), dan juga sering muncul dalam kehidupan sehari-hari.",
      17: "Mengalikan dengan 17 bisa sulit karena sifatnya sebagai bilangan prima. 17 tidak bisa diturunkan dengan mudah dari tabel lain. Namun membayangkan 17 sebagai 20-3 atau 10+7 mempermudah perhitungan. Mempelajari tabel 17 melatih kemampuan berhitung mental dan strategi pemecahan masalah.",
      18: "Mengalikan dengan 18 memiliki banyak pendekatan. Karena 18 = 2 × 9 = 3 × 6, tabel ini bisa dipelajari dengan beberapa cara. Melipatgandakan tabel 9 atau melipattigakan tabel 6 sama-sama menghasilkan tabel 18. Angka 18 juga penting sebagai usia dewasa di banyak negara, termasuk Indonesia.",
      19: "Mengalikan dengan 19 tidak bisa diturunkan dari tabel lain karena 19 adalah bilangan prima. Namun sangat praktis membayangkan 19 sebagai 20-1: kalikan bilangan dengan 20 lalu kurangi bilangan itu sendiri. Strategi ini sangat mempermudah perhitungan mental tabel 19.",
      20: "Mengalikan dengan 20 adalah perluasan alami dari tabel 10. Ketika mengalikan bilangan apa pun dengan 20, kita bisa mengalikannya dengan 10 lalu melipatgandakan hasilnya. Atau cukup tambahkan nol di akhir lalu lipatgandakan.",
      21: "Mengalikan dengan 21 bisa diperoleh dengan menguraikan 21 menjadi 20+1: kalikan dengan 20, lalu tambahkan satu kelompok lagi dari bilangan aslinya. Karena 21 = 3 × 7, cara ini juga bisa dicapai dengan melipattigakan tabel 7 atau mengalikan tabel 3 dengan 7. Angka 21 adalah skor target dalam permainan kartu blackjack, sehingga banyak siswa sudah punya gambaran intuitif tentang kelipatannya.",
      22: "Mengalikan dengan 22 melipatgandakan tabel yang sudah dikenal siswa dengan baik: karena 22 = 2 × 11, setiap fakta perkalian 22 adalah fakta tabel 11 yang sepadan, dilipatgandakan. Dipadukan dengan pola cermin dari tabel 11, ini membuat 22 salah satu tabel yang lebih mudah di rentang dua puluhan.",
      23: "Mengalikan dengan 23 tidak bisa diturunkan dari tabel lain karena 23 adalah bilangan prima. Cara paling praktis adalah membayangkan 23 sebagai 20+3: kalikan dengan 20, kalikan dengan 3, lalu jumlahkan hasilnya. Sebagai alternatif, bisa juga menggunakan 25−2 jika tabel 25 sudah dikuasai dengan baik.",
      24: "Mengalikan dengan 24 memiliki banyak jalan menuju jawaban, karena 24 = 4×6 = 3×8 = 2×12. Kita bisa memilih pasangan faktor yang paling dikuasai dan membangun seluruh tabel dari situ. Angka 24 selalu muncul dalam kehidupan sehari-hari — jumlah jam dalam sehari.",
      25: "Mengalikan dengan 25 bersandar pada hubungan 5×5 (5²). Karena 25 adalah seperempat dari 100, setiap fakta perkalian 25 bisa ditemukan dengan mengalikan 100 lalu membagi 4. Semua kelipatan 25 berakhiran 25, 50, 75, atau 00 — pola yang sangat teratur.",
      26: "Mengalikan dengan 26 melipatgandakan tabel 13: karena 26 = 2×13, setiap fakta perkalian 26 adalah fakta tabel 13 yang sepadan, dilipatgandakan. Bisa juga dibayangkan sebagai 25+1 kalau tabel 25 sudah lancar.",
      27: "Mengalikan dengan 27 bersandar pada hubungan kubik: 27 = 3³ = 3×3×3. Cara paling praktis adalah membayangkan 27 sebagai 30−3: kalikan dengan 30 lalu kurangi tiga kali bilangan aslinya.",
      28: "Mengalikan dengan 28 bisa diperoleh dari tabel 7 lewat penggandaan ganda: 28 = 4×7. Angka 28 istimewa karena termasuk bilangan sempurna — jumlah pembagi positifnya (1+2+4+7+14) sama dengan bilangan itu sendiri.",
      29: "Mengalikan dengan 29 tidak bisa diturunkan dari tabel lain karena 29 adalah bilangan prima. Cara paling praktis adalah membayangkan 29 sebagai 30−1: kalikan dengan 30 lalu kurangi bilangan aslinya.",
      30: "Mengalikan dengan 30 bersandar pada tabel 3: kalikan dengan 10, lalu kalikan dengan 3 (atau sebaliknya). Karena 30 = 3×10, tabel ini dibangun langsung dari dua tabel yang sudah dikuasai siswa.",
      31: "Mengalikan dengan 31 tidak bisa diturunkan dari tabel lain karena 31 adalah bilangan prima. Cara paling praktis adalah membayangkan 31 sebagai 30+1: kalikan dengan 30 lalu tambahkan bilangan aslinya.",
      32: "Mengalikan dengan 32 adalah pangkat lima dari 2 (2×2×2×2×2=32), yang bisa dicapai lewat rantai penggandaan dari 1. Cara tercepat adalah melipatgandakan tabel 16.",
      33: "Mengalikan dengan 33 menggabungkan dua tabel yang sudah dikenal: karena 33 = 3×11, kita bisa melipattigakan tabel 11 atau mengalikan tabel 3 dengan 11.",
      34: "Mengalikan dengan 34 melipatgandakan tabel 17: karena 34 = 2×17, setiap fakta perkalian 34 adalah fakta tabel 17 yang sepadan, dilipatgandakan.",
      35: "Mengalikan dengan 35 menggabungkan dua tabel yang sudah dikenal: karena 35 = 5×7, kita bisa memakai salah satunya — kalikan dulu dengan 5, lalu dengan 7, atau sebaliknya.",
      36: "Mengalikan dengan 36 memiliki banyak jalan, karena 36 = 6×6 = 4×9 = 3×12 = 2×18. Ini juga kuadrat sempurna (6²), sehingga layak dihafal sebagai patokan tersendiri.",
      37: "Mengalikan dengan 37 tidak bisa diturunkan dari tabel lain karena 37 adalah bilangan prima. Cara paling praktis adalah membayangkan 37 sebagai 40−3: kalikan dengan 40 lalu kurangi tiga kali bilangan aslinya.",
      38: "Mengalikan dengan 38 melipatgandakan tabel 19: karena 38 = 2×19, setiap fakta perkalian 38 adalah fakta tabel 19 yang sepadan, dilipatgandakan.",
      39: "Mengalikan dengan 39 menggabungkan tabel 3 dan tabel 13: karena 39 = 3×13, kita bisa melipattigakan tabel 13. Cara paling praktis adalah membayangkan 39 sebagai 40−1.",
      40: "Mengalikan dengan 40 dibangun langsung dari tabel 4: kalikan dengan 10, lalu kalikan dengan 4 (atau sebaliknya). Karena 40 = 4×10, tabel ini sangat teratur.",
      41: "Mengalikan dengan 41 tidak bisa diturunkan dari tabel lain karena 41 adalah bilangan prima. Cara paling praktis adalah membayangkan 41 sebagai 40+1: kalikan dengan 40 lalu tambahkan bilangan aslinya.",
      42: "Mengalikan dengan 42 menggabungkan dua tabel penting: karena 42 = 6×7, kita bisa memakai salah satunya. Angka 42 juga terkenal dalam budaya populer sebagai 'jawaban atas pertanyaan tentang kehidupan, alam semesta, dan segalanya' dari novel 'The Hitchhiker's Guide to the Galaxy'.",
      43: "Mengalikan dengan 43 tidak bisa diturunkan dari tabel lain karena 43 adalah bilangan prima. Bisa dibayangkan sebagai 40+3 atau 45−2, tergantung tabel mana yang lebih dikuasai.",
      44: "Mengalikan dengan 44 bisa diperoleh dari tabel 11 lewat penggandaan ganda: karena 44 = 4×11, gandakan tabel 11 sebanyak dua kali atau lipatgandakan tabel 22.",
      45: "Mengalikan dengan 45 menggabungkan tabel 5 dan tabel 9: karena 45 = 5×9, kita bisa memakai salah satunya. Angka 45 juga bilangan segitiga: 45 = 1+2+...+9. Tahun 1945 adalah tahun kemerdekaan Indonesia.",
      46: "Mengalikan dengan 46 melipatgandakan tabel 23: karena 46 = 2×23, setiap fakta perkalian 46 adalah fakta tabel 23 yang sepadan, dilipatgandakan.",
      47: "Mengalikan dengan 47 tidak bisa diturunkan dari tabel lain karena 47 adalah bilangan prima. Cara paling praktis adalah membayangkan 47 sebagai 50−3: kalikan dengan 50 lalu kurangi tiga kali bilangan aslinya.",
      48: "Mengalikan dengan 48 memiliki banyak jalan, karena 48 = 6×8 = 4×12 = 3×16 = 2×24. Bisa juga dibayangkan sebagai 50−2.",
      49: "Mengalikan dengan 49 bersandar pada hubungan 7×7 (7²). Cara paling praktis adalah membayangkan 49 sebagai 50−1: kalikan dengan 50 lalu kurangi bilangan aslinya.",
      50: "Mengalikan dengan 50 adalah salah satu tabel dua digit yang paling mudah, karena 50 = 100÷2. Kalikan dengan 100 (tambahkan dua nol) lalu bagi dua.",
      51: "Mengalikan dengan 51 memakai strategi 50+1: kalikan dengan 50 lalu tambahkan bilangan aslinya. Karena 51 = 3×17, ada juga jalan lain lewat pelipattigaan tabel 17.",
      52: "Mengalikan dengan 52 bisa diperoleh dengan menggandakan tabel 13 dua kali. Angka 52 dikenal siswa sebagai jumlah minggu dalam setahun dan jumlah kartu dalam satu set.",
      53: "Mengalikan dengan 53 tidak bisa diturunkan dari tabel lain karena 53 adalah bilangan prima. Bisa dibayangkan sebagai 50+3 atau 55−2, tergantung tabel mana yang lebih dikuasai.",
      54: "Mengalikan dengan 54 menggabungkan tabel 6 dan tabel 9: karena 54 = 6×9, kita bisa memakai salah satunya.",
      55: "Mengalikan dengan 55 menggabungkan tabel 5 dan tabel 11: karena 55 = 5×11, kita bisa memakai salah satunya. Angka 55 juga bilangan segitiga: 55 = 1+2+...+10.",
      56: "Mengalikan dengan 56 menggabungkan dua tabel satu digit yang sulit: karena 56 = 7×8, tabel ini langsung terkait dengan fakta tunggal tersulit dalam tabel perkalian standar.",
      57: "Mengalikan dengan 57 menggabungkan tabel 3 dan tabel 19: karena 57 = 3×19, kita bisa melipattigakan tabel 19. Cara paling praktis adalah membayangkan 57 sebagai 60−3.",
      58: "Mengalikan dengan 58 melipatgandakan tabel 29: karena 58 = 2×29, setiap fakta perkalian 58 adalah fakta tabel 29 yang sepadan, dilipatgandakan.",
      59: "Mengalikan dengan 59 tidak bisa diturunkan dari tabel lain karena 59 adalah bilangan prima. Cara paling praktis adalah membayangkan 59 sebagai 60−1: kalikan dengan 60 lalu kurangi bilangan aslinya.",
      60: "Mengalikan dengan 60 dibangun langsung dari tabel 6: kalikan dengan 10, lalu kalikan dengan 6 (atau sebaliknya). Angka 60 sangat penting untuk pengukuran waktu.",
      61: "Mengalikan dengan 61 tidak bisa diturunkan dari tabel lain karena 61 adalah bilangan prima. Cara paling praktis adalah membayangkan 61 sebagai 60+1: kalikan dengan 60 lalu tambahkan bilangan aslinya.",
      62: "Mengalikan dengan 62 melipatgandakan tabel 31: karena 62 = 2×31, setiap fakta perkalian 62 adalah fakta tabel 31 yang sepadan, dilipatgandakan.",
      63: "Mengalikan dengan 63 menggabungkan dua tabel satu digit penting: karena 63 = 7×9, kita bisa memakai salah satunya.",
      64: "Mengalikan dengan 64 adalah pangkat enam dari 2 (2⁶=64) sekaligus kuadrat dari 8 (8×8=64). Cara tercepat adalah melipatgandakan tabel 32.",
      65: "Mengalikan dengan 65 menggabungkan tabel 5 dan tabel 13: karena 65 = 5×13, kita bisa memakai salah satunya.",
      66: "Mengalikan dengan 66 memiliki beberapa jalan: karena 66 = 6×11 = 2×33 = 3×22, kita bisa memilih pasangan faktor yang paling nyaman. Angka 66 juga terdiri dari digit yang sama.",
      67: "Mengalikan dengan 67 tidak bisa diturunkan dari tabel lain karena 67 adalah bilangan prima. Cara paling praktis adalah membayangkan 67 sebagai 70−3: kalikan dengan 70 lalu kurangi tiga kali bilangan aslinya.",
      68: "Mengalikan dengan 68 bisa diperoleh dari tabel 17 lewat penggandaan ganda: karena 68 = 4×17.",
      69: "Mengalikan dengan 69 menggabungkan tabel 3 dan tabel 23: karena 69 = 3×23, kita bisa melipattigakan tabel 23. Cara paling praktis adalah membayangkan 69 sebagai 70−1.",
      70: "Mengalikan dengan 70 dibangun langsung dari tabel 7: kalikan dengan 10, lalu kalikan dengan 7 (atau sebaliknya). Angka 70 sering muncul dalam rujukan budaya sebagai perkiraan usia harapan hidup.",
      71: "Mengalikan dengan 71 tidak bisa diturunkan dari tabel lain karena 71 adalah bilangan prima. Cara paling praktis adalah membayangkan 71 sebagai 70+1: kalikan dengan 70 lalu tambahkan bilangan aslinya.",
      72: "Mengalikan dengan 72 memiliki banyak jalan, karena 72 = 8×9 = 6×12 = 4×18 = 3×24. Angka 72 juga sama dengan 72 jam, yaitu tiga hari penuh.",
      73: "Mengalikan dengan 73 tidak bisa diturunkan dari tabel lain karena 73 adalah bilangan prima. Bisa dibayangkan sebagai 70+3 atau 75−2, tergantung tabel mana yang lebih dikuasai.",
      74: "Mengalikan dengan 74 melipatgandakan tabel 37: karena 74 = 2×37, setiap fakta perkalian 74 adalah fakta tabel 37 yang sepadan, dilipatgandakan.",
      75: "Mengalikan dengan 75 bersandar pada hubungan seperempat: 75 adalah tiga perempat dari 100. Kalikan dengan 100, lalu lipattigakan dan bagi 4 (atau pakai 100×n×3÷4).",
      76: "Mengalikan dengan 76 bisa diperoleh dari tabel 19 lewat penggandaan ganda: karena 76 = 4×19.",
      77: "Mengalikan dengan 77 menggabungkan tabel 7 dan tabel 11: karena 77 = 7×11, kita bisa memakai salah satunya. Angka 77 juga terdiri dari digit yang sama.",
      78: "Mengalikan dengan 78 memiliki beberapa jalan: karena 78 = 6×13 = 2×39 = 3×26, kita bisa memilih pasangan faktor yang paling nyaman.",
      79: "Mengalikan dengan 79 tidak bisa diturunkan dari tabel lain karena 79 adalah bilangan prima. Cara paling praktis adalah membayangkan 79 sebagai 80−1: kalikan dengan 80 lalu kurangi bilangan aslinya.",
      80: "Mengalikan dengan 80 dibangun langsung dari tabel 8: kalikan dengan 10, lalu kalikan dengan 8 (atau sebaliknya). Angka 80 terkenal lewat novel Jules Verne 'Keliling Dunia dalam 80 Hari'.",
      81: "Mengalikan dengan 81 bersandar pada hubungan 9×9 (9²), sekaligus sama dengan 3⁴. Cara paling praktis adalah membayangkan 81 sebagai 80+1.",
      82: "Mengalikan dengan 82 melipatgandakan tabel 41: karena 82 = 2×41, setiap fakta perkalian 82 adalah fakta tabel 41 yang sepadan, dilipatgandakan.",
      83: "Mengalikan dengan 83 tidak bisa diturunkan dari tabel lain karena 83 adalah bilangan prima. Bisa dibayangkan sebagai 80+3 atau 85−2, tergantung tabel mana yang lebih dikuasai.",
      84: "Mengalikan dengan 84 memiliki banyak jalan, karena 84 = 7×12 = 6×14 = 4×21 = 3×28. Kita bisa memilih pasangan faktor yang paling nyaman.",
      85: "Mengalikan dengan 85 menggabungkan tabel 5 dan tabel 17: karena 85 = 5×17, kita bisa memakai salah satunya.",
      86: "Mengalikan dengan 86 melipatgandakan tabel 43: karena 86 = 2×43, setiap fakta perkalian 86 adalah fakta tabel 43 yang sepadan, dilipatgandakan.",
      87: "Mengalikan dengan 87 menggabungkan tabel 3 dan tabel 29: karena 87 = 3×29, kita bisa melipattigakan tabel 29. Cara paling praktis adalah membayangkan 87 sebagai 90−3.",
      88: "Mengalikan dengan 88 bisa diperoleh dari tabel 11 lewat penggandaan ganda: karena 88 = 8×11 = 4×22. Angka 88 juga terdiri dari digit yang sama.",
      89: "Mengalikan dengan 89 tidak bisa diturunkan dari tabel lain karena 89 adalah bilangan prima. Cara paling praktis adalah membayangkan 89 sebagai 90−1: kalikan dengan 90 lalu kurangi bilangan aslinya.",
      90: "Mengalikan dengan 90 dibangun langsung dari tabel 9: kalikan dengan 10, lalu kalikan dengan 9 (atau sebaliknya). Angka 90 adalah besar sudut siku-siku dalam derajat, salah satu bilangan terpenting dalam geometri.",
      91: "Mengalikan dengan 91 menggabungkan tabel 7 dan tabel 13: karena 91 = 7×13, kita bisa memakai salah satunya. Cara paling praktis adalah membayangkan 91 sebagai 90+1.",
      92: "Mengalikan dengan 92 bisa diperoleh dari tabel 23 lewat penggandaan ganda: karena 92 = 4×23.",
      93: "Mengalikan dengan 93 menggabungkan tabel 3 dan tabel 31: karena 93 = 3×31, kita bisa melipattigakan tabel 31. Cara paling praktis adalah membayangkan 93 sebagai 90+3.",
      94: "Mengalikan dengan 94 melipatgandakan tabel 47: karena 94 = 2×47, setiap fakta perkalian 94 adalah fakta tabel 47 yang sepadan, dilipatgandakan.",
      95: "Mengalikan dengan 95 menggabungkan tabel 5 dan tabel 19: karena 95 = 5×19, kita bisa memakai salah satunya. Cara paling praktis adalah membayangkan 95 sebagai 100−5.",
      96: "Mengalikan dengan 96 memiliki banyak jalan, karena 96 = 8×12 = 6×16 = 4×24. Cara paling praktis adalah membayangkan 96 sebagai 100−4.",
      97: "Mengalikan dengan 97 tidak bisa diturunkan dari tabel lain karena 97 adalah bilangan prima. Cara paling praktis adalah membayangkan 97 sebagai 100−3: kalikan dengan 100 lalu kurangi tiga kali bilangan aslinya.",
      98: "Mengalikan dengan 98 melipatgandakan tabel 49: karena 98 = 2×49, setiap fakta perkalian 98 adalah fakta tabel 49 yang sepadan, dilipatgandakan. Cara paling praktis adalah membayangkan 98 sebagai 100−2.",
      99: "Mengalikan dengan 99 adalah salah satu tabel paling mudah di antara bilangan dua digit, karena 99 = 100−1. Kalikan dengan 100 lalu kurangi bilangan aslinya.",
      100: "Mengalikan dengan 100 adalah tabel paling mudah dari semuanya. Cukup tambahkan dua nol di akhir bilangan aslinya.",
    }

const importance: { [key: number]: string } = {
      1: "Perkalian dengan 1 adalah dasar dari semua operasi perkalian. Memahami bahwa bilangan tetap sama ketika dikalikan 1 membantu siswa membangun rasa percaya diri sebelum mempelajari tabel yang lebih rumit.",
      2: "Tabel perkalian 2 biasanya menjadi tabel pertama yang benar-benar dipelajari siswa. Penggandaan adalah konsep alami yang sering ditemui anak-anak, sehingga tabel ini mempercepat kemampuan berhitung dan menyiapkan siswa memahami bilangan genap serta pecahan setengah.",
      3: "Tabel perkalian 3 mengisi jarak antara tabel yang mudah dan yang lebih rumit. Siswa harus melampaui sekadar melipatgandakan dan mulai mengenali pola baru — kemampuan penting menuju berhitung yang lebih fleksibel.",
      4: "Tabel perkalian 4 memperkenalkan gagasan bahwa satu tabel bisa dibangun dari tabel lain melalui penggandaan berulang. Hubungan ini membantu siswa melihat perkalian sebagai sistem yang saling berkaitan, bukan sekadar fakta terpisah yang harus dihafal.",
      5: "Tabel perkalian 5 adalah salah satu yang paling mudah dipahami siswa karena polanya yang sangat sederhana — setiap hasil berakhiran 0 atau 5. Kepastian ini membangun rasa percaya diri sebelum siswa menghadapi tabel yang kurang jelas polanya.",
      6: "Tabel perkalian 6 sering menjadi titik ketika siswa mulai menggabungkan dua strategi berbeda. Karena 6 = 2 × 3, tabel ini bisa diperoleh dengan melipatgandakan tabel 3 atau melipattigakan tabel 2 — menunjukkan bahwa satu fakta sering bisa dicapai lewat beberapa jalan yang benar.",
      7: "Tujuh adalah bilangan prima — hanya habis dibagi 1 dan dirinya sendiri, menjadikannya bilangan prima keempat setelah 2, 3, dan 5. Tidak seperti 4, 6, 8, 9, atau 10, tabel perkalian 7 tidak bisa dibangun sebagai jalan pintas dari tabel yang lebih kecil. Kuadratnya, 7 × 7 = 49, layak dihafal sebagai patokan dalam tabel ini.",
      8: "Tabel perkalian 8 dibangun langsung dari tabel 2 melalui tiga putaran penggandaan, karena 8 = 2 × 2 × 2 = 2³. Ini contoh yang jelas bahwa tabel perkalian tidak harus dihafal dari nol — bisa dibangun dari tabel yang lebih sederhana yang sudah dikuasai siswa.",
      9: "Tabel perkalian 9 memiliki pola paling jelas di antara semua tabel bilangan satu digit, menjadikannya favorit untuk melatih pengenalan pola. Karena 9 kurang satu dari 10, setiap fakta perkalian 9 bisa ditemukan dengan mengambil fakta perkalian 10 lalu mengurangi bilangan aslinya — trik ini selalu berhasil.",
      10: "Tabel perkalian 10 adalah tumpuan seluruh sistem bilangan desimal yang digunakan hampir semua orang. Karena mengalikan dengan 10 hanya menggeser setiap digit satu posisi ke kiri, tabel ini biasanya paling mudah dikuasai siswa dan menjadi patokan untuk mempelajari tabel yang lebih rumit.",
      11: "Tabel perkalian 11 istimewa karena untuk pengali satu digit, hasilnya menunjukkan pola cermin yang sangat sederhana: jawabannya adalah pengali itu sendiri, ditulis dua kali (11×4 = 44). Ini membuat sembilan fakta pertama hampir otomatis begitu siswa menyadari polanya.",
      12: "Tabel perkalian 12 sangat berguna dalam praktik karena 12 adalah bilangan sangat komposit yang habis dibagi rata oleh 1, 2, 3, 4, 6, dan 12. Karena fleksibilitas inilah begitu banyak sistem sehari-hari dibangun di sekitar lusinan.",
      13: "13 adalah bilangan prima sehingga tidak bisa dibangun sebagai jalan pintas dari tabel yang lebih kecil. Pendekatan paling andal adalah menguraikannya menjadi 10 + 3: kalikan dengan 10, kalikan dengan 3, lalu jumlahkan hasilnya.",
      14: "14 adalah hadiah langsung dari tabel 7 yang sudah dipelajari: karena 14 = 2 × 7, melipatgandakan setiap fakta tabel 7 memberikan fakta tabel 14 yang sepadan secara gratis. Ini membuat 14 salah satu tabel dua digit paling mudah, asalkan tabel 7 sudah dikuasai dengan baik.",
      15: "15 langsung menggabungkan dua tabel yang sudah dikenal, karena 15 = 3 × 5. Selain perkalian, 15 adalah bilangan segitiga (1+2+3+4+5=15), memberi siswa contoh awal keluarga pola bilangan lain.",
      16: "16 adalah tonggak penting: bilangan ini adalah 2 pangkat empat (2×2×2×2=16) yang bisa dicapai dengan empat kali penggandaan berturut-turut, sekaligus juga bilangan kuadrat sempurna (4×4=16). Karena 16 sering muncul di luar kelas, menguasainya memberi manfaat lebih luas dari sekadar tabel perkalian.",
      17: "Tabel perkalian 17 tidak memiliki apa pun untuk disandarkan: 17 adalah bilangan prima, jadi tidak bisa dibangun dengan melipatgandakan atau melipattigakan tabel yang lebih kecil. Strategi paling andal adalah menguraikan 17 menjadi 10 + 7.",
      18: "18 bisa didekati dari beberapa arah sekaligus, karena 18 = 2 × 9 = 3 × 6. Karena setiap kelipatan 18 juga kelipatan 9, aturan jumlah digit tabel 9 juga berlaku di sini, memberi siswa cara bawaan untuk memeriksa pekerjaannya.",
      19: "19 adalah contoh yang jelas bagaimana kedekatan dengan '20' bisa membuat tabel bilangan prima menjadi mudah dikelola. Karena 19 = 20 − 1, setiap fakta perkalian 19 bisa ditemukan dengan mengalikan 20 lalu mengurangi bilangan aslinya satu kali.",
      20: "Tabel perkalian 20 dibangun langsung dari tabel 10 yang sudah dikuasai siswa: karena 20 = 2 × 10, setiap fakta perkalian 20 hanyalah fakta tabel 10 yang sepadan, dilipatgandakan.",
      21: "Tabel perkalian 21 menunjukkan bahwa bilangan komposit sering memiliki beberapa jalan yang benar menuju jawaban: lewat uraian 20+1 atau lewat faktor 3 dan 7. Ini langkah penting menuju cara berpikir yang fleksibel tentang perkalian.",
      22: "22 menunjukkan bahwa bilangan dua digit yang tampak rumit sering menyimpan struktur sederhana: 22 hanyalah 11 yang dilipatgandakan. Mengenali penggandaan tersembunyi seperti ini adalah keterampilan penting untuk berhitung cepat.",
      23: "23 adalah bilangan prima tanpa jalan pintas lewat penggandaan atau pelipattigaan, sehingga tabel ini benar-benar membutuhkan penguraian. Berlatih dengan 23 memperkuat strategi 'uraikan lalu jumlahkan'.",
      24: "Tabel 24 menunjukkan bahwa semakin banyak faktor yang dimiliki sebuah bilangan, semakin banyak cara untuk sampai pada jawaban yang benar. Ini menyiapkan siswa untuk berpikir fleksibel yang dibutuhkan saat bekerja dengan pecahan dan pembagian di kelas lebih tinggi.",
      25: "Tabel 25 sangat berguna dalam kehidupan nyata — inilah dasar dari perhitungan seperempat dan uang koin 25 sen. Memahami 25 sebagai seperempat dari 100 mempersiapkan siswa untuk bekerja dengan persen dan pecahan.",
      26: "26 menunjukkan bahwa bahkan tabel bilangan prima (13), yang sulit diturunkan langsung, bisa dikelola dengan mudah lewat penggandaan sederhana.",
      27: "27 adalah bilangan kubik dua digit pertama (selain 8) yang ditemui siswa, memperkenalkan konsep pangkat ke dalam tabel perkalian yang sudah dikenal.",
      28: "28 adalah satu dari sedikit bilangan sempurna yang ditemui siswa di sekolah, menjadikan tabel ini kesempatan mengenalkan konsep matematika yang langka ini.",
      29: "29 dekat dengan bilangan nyaman 30, sehingga tabel ini contoh bagus bagaimana kedekatan dengan bilangan bulat bisa membuat bilangan prima menjadi mudah dikelola.",
      30: "Tabel 30 menunjukkan bagaimana dua tabel sederhana (3 dan 10) bisa digabungkan untuk menghasilkan tabel yang lebih rumit — keterampilan penting untuk bekerja dengan bilangan besar nantinya.",
      31: "31 adalah jumlah hari maksimum dalam sebulan, sehingga tabel ini sering muncul dalam soal terkait kalender, meski tidak memiliki jalan pintas matematis.",
      32: "32 melanjutkan keluarga pangkat dua (2, 4, 8, 16, 32) yang terus muncul dalam ilmu komputer, sehingga tabel ini memberi jembatan berguna ke topik masa depan.",
      33: "33 adalah bilangan dua digit dengan digit yang sama (repdigit), sehingga secara visual menunjukkan bagaimana pola sederhana tabel 11 juga berlaku pada kelipatannya.",
      34: "34 menunjukkan bahwa bahkan tabel bilangan prima (17), yang sulit diturunkan langsung, bisa dibuat mudah dengan penggandaan sederhana.",
      35: "35 adalah contoh bagus bagaimana hasil kali dua tabel bilangan satu digit menengah (5 dan 7) membentuk tabel dua digit yang mudah dikelola.",
      36: "36 adalah bilangan dengan banyak pembagi, membuat tabel ini sangat berguna untuk bekerja dengan pecahan dan penyederhanaan bentuk di kemudian hari.",
      37: "37 memiliki sifat unik: 37×3=111, dan setiap kelipatan 3 berikutnya menghasilkan bilangan dengan digit yang sama (222, 333...) — pola langka dan menarik untuk dihafal.",
      38: "38 melanjutkan gagasan yang sama seperti 34 dan 26: penggandaan mengubah tabel bilangan prima yang sulit menjadi mudah dikelola.",
      39: "39 adalah contoh lain bilangan dekat dengan bilangan bulat 40, menunjukkan bagaimana kedekatan dengan patokan nyaman mempermudah perhitungan.",
      40: "40 sering muncul dalam rujukan budaya dan keagamaan ('empat puluh hari empat puluh malam'), sehingga tabel ini punya makna tambahan di luar matematika murni.",
      41: "41 dekat dengan bilangan nyaman 40, sehingga tabel ini contoh lain bagaimana kedekatan dengan bilangan bulat menyelamatkan situasi tabel bilangan prima.",
      42: "42 menunjukkan kepada siswa bahwa matematika bisa terhubung dengan sastra dan humor — fakta budaya ini sering membantu angka tersebut diingat lebih lama.",
      43: "43 adalah contoh bilangan prima dengan beberapa uraian yang hampir sama mudahnya, memberi siswa kebebasan memilih strategi.",
      44: "44 adalah bilangan dua digit dengan digit yang sama lainnya, sehingga secara visual melanjutkan rangkaian repdigit (11, 22, 33, 44) yang sudah dilihat siswa.",
      45: "45 derajat adalah setengah sudut siku-siku, salah satu sudut terpenting dalam geometri, sehingga tabel ini punya penerapan langsung dalam mempelajari sudut.",
      46: "46 melanjutkan rangkaian bilangan yang diselamatkan penggandaan dari kesulitan tabel bilangan prima (23) yang seharusnya diuraikan langsung.",
      47: "47 dekat dengan bilangan sangat nyaman 50, sehingga tabel ini contoh bagus bagaimana tabel 50 (setengah dari 100) menyelamatkan situasi bilangan prima.",
      48: "48 adalah bilangan dengan banyak pembagi, memberi siswa kebebasan memilih pasangan faktor yang paling nyaman.",
      49: "49 adalah kuadrat dari tabel 7, sehingga tabel ini erat terkait dengan salah satu tabel satu digit tersulit sekaligus memiliki jalan pintas sangat sederhana lewat 50.",
      50: "50 adalah setengah dari 100, sehingga tabel ini terkait langsung dengan persen (50% = setengah) dan selalu muncul dalam perhitungan uang.",
      51: "51 menunjukkan bagaimana tabel 50 (mudah berkat hubungannya dengan 100) bisa menjadi tumpuan untuk bilangan-bilangan di sekitarnya.",
      52: "52 langsung terkait dengan kalender dan permainan kartu, sehingga tabel ini memiliki dua penerapan sehari-hari yang jelas.",
      53: "53 adalah contoh lain bilangan prima dengan beberapa uraian yang hampir sama mudahnya, memberi siswa kebebasan memilih strategi yang lebih nyaman.",
      54: "54 adalah jumlah kotak kecil pada kubus Rubik (9 kotak di setiap 6 sisinya), sehingga tabel ini punya penerapan tak terduga dalam permainan puzzle populer.",
      55: "55 adalah jumlah sepuluh bilangan asli pertama, memberi siswa contoh lain bilangan segitiga dalam tabel perkalian yang sudah dikenal.",
      56: "56 memperkuat fakta 7×8=56 — salah satu yang paling sulit dihafal — sehingga mempelajari tabel ini sekaligus memperkuat tabel dasarnya.",
      57: "57 menunjukkan bagaimana tabel 60 (sangat nyaman berkat hubungannya dengan jam dan menit) bisa menjadi tumpuan untuk bilangan di sekitarnya.",
      58: "58 melanjutkan rangkaian bilangan yang diselamatkan penggandaan dari kesulitan tabel bilangan prima.",
      59: "59 sangat dekat dengan bilangan nyaman 60 (menit dalam sejam), sehingga tabel ini contoh jelas bagaimana kedekatan dengan bilangan bulat menyelamatkan situasi bilangan prima.",
      60: "60 detik dalam semenit dan 60 menit dalam sejam membuat tabel ini salah satu yang paling praktis dalam kehidupan sehari-hari.",
      61: "61 dekat dengan bilangan nyaman 60, sehingga tabel ini contoh lain bagaimana kedekatan dengan bilangan bulat menyelamatkan situasi bilangan prima.",
      62: "62 melanjutkan gagasan penggandaan yang menyelamatkan tabel bilangan prima seperti 31.",
      63: "63 memperkuat fakta 7×9=63 — sering tertukar dengan fakta di sekitarnya dari tabel 7 dan 9 — sehingga mempelajari tabel ini memperkuat keduanya.",
      64: "64 adalah jumlah kotak pada papan catur (8×8), sekaligus bilangan penting dalam ilmu komputer (sistem 64-bit), sehingga tabel ini punya dua penerapan yang jelas.",
      65: "65 adalah usia yang di banyak negara dianggap sebagai usia pensiun, sehingga tabel ini sering muncul dalam soal terkait usia.",
      66: "66 melanjutkan rangkaian bilangan repdigit (11, 22, 33, 44, 55, 66) yang sudah dikenal siswa, sehingga mereka bisa mengenali pola ini dan menerapkan strategi yang sudah dikuasai.",
      67: "67 dekat dengan bilangan nyaman 70, sehingga tabel ini contoh lain bagaimana kedekatan dengan bilangan bulat menyelamatkan situasi bilangan prima.",
      68: "68 menunjukkan gagasan yang sama seperti 44 dan 52: penggandaan dua kali berturut-turut mengubah tabel yang lebih rumit menjadi mudah dikelola.",
      69: "69 menunjukkan bagaimana tabel 70 bisa menjadi tumpuan untuk bilangan di sekitarnya, meskipun bilangan itu sendiri komposit.",
      70: "70 sering muncul dalam teks budaya dan keagamaan, sehingga tabel ini punya makna tambahan di luar matematika murni.",
      71: "71 dekat dengan bilangan nyaman 70, sehingga tabel ini contoh lain bagaimana kedekatan dengan bilangan bulat menyelamatkan situasi bilangan prima.",
      72: "72 adalah bilangan dengan banyak pembagi, membuat tabel ini sangat berguna untuk bekerja dengan pecahan dan perhitungan waktu praktis.",
      73: "73 adalah contoh bilangan prima dengan beberapa uraian yang hampir sama mudahnya, memberi siswa kebebasan memilih strategi.",
      74: "74 melanjutkan gagasan penggandaan yang sama, dan mewarisi hubungan menarik 37 dengan angka 111.",
      75: "75% = tiga perempat — salah satu pecahan yang paling sering dipakai dalam perhitungan persen, sehingga tabel 75 punya penerapan langsung di luar kelas.",
      76: "76 melanjutkan gagasan penggandaan ganda yang sama seperti 44, 52, dan 68 — mengubah tabel yang lebih rumit menjadi mudah dikelola lewat penggandaan berulang.",
      77: "77 menunjukkan bagaimana hasil kali bilangan prima (7) dan 11 membentuk bilangan repdigit lainnya — kebetulan menarik yang bisa disadari siswa sendiri.",
      78: "78 adalah contoh bilangan komposit dengan beberapa uraian yang mungkin, memberi siswa kebebasan memilih strategi tergantung tabel mana yang lebih dikuasai.",
      79: "79 sangat dekat dengan bilangan nyaman 80, sehingga tabel ini contoh jelas lain bagaimana kedekatan dengan bilangan bulat menyelamatkan situasi bilangan prima.",
      80: "80 memiliki rujukan sastra yang terkenal, yang sering membantu siswa mengingat angka ini lebih lama.",
      81: "81 adalah kuadrat dari tabel 9, sehingga tabel ini erat terkait dengan salah satu tabel satu digit paling mencolok dalam matematika.",
      82: "82 melanjutkan gagasan penggandaan yang menyelamatkan tabel bilangan prima.",
      83: "83 adalah contoh bilangan prima dengan beberapa uraian yang hampir sama mudahnya.",
      84: "84 adalah bilangan dengan banyak pembagi, memberi siswa kebebasan memilih strategi.",
      85: "85 menunjukkan bagaimana tabel 5 (salah satu yang paling mudah) bisa menjadi tumpuan bahkan untuk bilangan tetangga yang lebih rumit lewat uraian.",
      86: "86 melanjutkan gagasan penggandaan yang menyelamatkan tabel bilangan prima.",
      87: "87 menunjukkan bagaimana tabel 90 bisa menjadi tumpuan untuk bilangan di sekitarnya, meski bilangan itu sendiri komposit.",
      88: "88 adalah jumlah tuts piano standar dan jumlah rasi bintang yang diakui secara resmi, sehingga tabel ini punya dua penerapan sehari-hari yang menarik.",
      89: "89 sangat dekat dengan bilangan nyaman 90, sehingga tabel ini contoh jelas lain bagaimana kedekatan dengan bilangan bulat menyelamatkan situasi bilangan prima.",
      90: "90 derajat menandai sudut siku-siku, dan 90 menit adalah durasi standar pertandingan sepak bola, sehingga tabel ini punya dua penerapan praktis sekaligus.",
      91: "91 pada pandangan pertama bisa terlihat seperti bilangan prima, padahal sebenarnya hasil kali 7×13 — kesempatan bagus mengingatkan siswa untuk memeriksa, bukan menebak.",
      92: "92 adalah jumlah unsur kimia alami dalam tabel periodik, sehingga tabel ini punya penerapan tak terduga dalam ilmu pengetahuan alam.",
      93: "93 menunjukkan bagaimana tabel 90 bisa menjadi tumpuan untuk bilangan di sekitarnya, meski bilangan itu sendiri komposit.",
      94: "94 melanjutkan gagasan penggandaan yang sama, sekaligus dekat dengan bilangan sangat nyaman 100.",
      95: "95 menunjukkan bagaimana kedekatan dengan 100 (patokan paling nyaman) menyelamatkan situasi bahkan untuk bilangan komposit.",
      96: "96 adalah bilangan dengan banyak pembagi yang letaknya sangat dekat dengan patokan nyaman 100, sehingga memiliki dua strategi yang sama-sama andal.",
      97: "97 adalah bilangan prima terdekat dengan 100 dari sisi yang lebih kecil, sehingga tabel ini salah satu contoh terbaik bagaimana kedekatan dengan 100 menyelamatkan situasi bilangan prima.",
      98: "98 menunjukkan hubungan ganda: bilangan ini adalah dua kali lipat 49 (yang merupakan kuadrat dari 7), sekaligus hampir 100 — sehingga punya dua strategi yang sama-sama andal.",
      99: "Harga yang berakhiran 99 sen (misalnya Rp9.990) adalah trik pemasaran terkenal yang memanfaatkan persepsi psikologis terhadap bilangan yang mendekati bilangan bulat.",
      100: "100 adalah dasar dari sistem persen dan sistem bilangan desimal, sekaligus suhu titik didih air dalam skala Celsius, sehingga tabel ini memiliki penerapan praktis yang sangat luas.",
    }

const patterns: { [key: number]: PatternItem[] } = {
      1: [
        { title: "Pola identitas", description: "Setiap bilangan yang dikalikan 1 menghasilkan bilangan itu sendiri. Ini tidak pernah berubah: 1×1=1, 1×2=2, 1×3=3, dan seterusnya." },
        { title: "Urutan yang mudah ditebak", description: "Hasilnya hanya menghitung naik: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Kita hanya menuliskan bilangan secara berurutan." },
      ],
      2: [
        { title: "Hanya bilangan genap", description: "Semua kelipatan 2 adalah bilangan genap. Hasilnya selalu berakhiran 0, 2, 4, 6, atau 8." },
        { title: "Menghitung loncat dua", description: "Setiap jawaban 2 lebih besar dari sebelumnya: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20." },
      ],
      3: [
        { title: "Pola jumlah digit", description: "Jumlahkan digit setiap hasilnya: 3 (3), 6 (6), 9 (9), 12 (1+2=3), 15 (1+5=6), 18 (1+8=9). Pola 3-6-9 terus berulang!" },
        { title: "Menghitung loncat tiga", description: "Setiap jawaban bertambah 3: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30." },
      ],
      4: [
        { title: "Siklus digit terakhir: 4, 8, 2, 6, 0", description: "Digit terakhir dari 4×1 sampai 4×5: 4, 8, 2, 6, 0, lalu siklus berulang: 4×6=24, 4×7=28, 4×8=32, 4×9=36, 4×10=40." },
        { title: "Penggandaan ganda", description: "Karena 4 = 2 × 2, setiap fakta perkalian 4 adalah dua kali lipat tabel 2: 4×6 = 2×(2×6) = 2×12 = 24." },
      ],
      5: [
        { title: "Selalu berakhiran 0 atau 5", description: "Setiap kelipatan 5 berakhiran tepat pada salah satu dari dua digit: 0 (untuk pengali genap) atau 5 (untuk pengali ganjil)." },
        { title: "Setengah dari tabel 10", description: "Karena 5 adalah setengah dari 10, setiap fakta perkalian 5 adalah setengah dari fakta perkalian 10 yang sepadan: 5×6 = setengah dari 10×6 = setengah dari 60 = 30." },
      ],
      6: [
        { title: "Siklus digit terakhir: 6, 2, 8, 4, 0", description: "Digit terakhir dari 6×1 sampai 6×5: 6, 2, 8, 4, 0, lalu siklus berulang: 6×6=36, 6×7=42, 6×8=48, 6×9=54, 6×10=60." },
        { title: "6 = 5 + 1, dikalikan n", description: "Karena 6×n = 5×n + n, fakta perkalian 6 selalu bisa ditemukan dengan menambahkan satu kelompok lagi ke fakta perkalian 5: 6×7 = 5×7 + 7 = 35 + 7 = 42." },
      ],
      7: [
        { title: "Siklus digit terakhir — semua 10 digit", description: "Digit terakhir dari 7×1 sampai 7×10 adalah 7, 4, 1, 8, 5, 2, 9, 6, 3, 0 — melewati setiap digit sebelum berulang. Setelah 7×10=70, siklus yang sama dimulai lagi: 77, 84, 91, 98, 105..." },
        { title: "7 × 7 = 49 adalah patokan", description: "49 adalah kuadrat dari 7. Angka ini berada di tengah tabel dan layak dihafal langsung, bukan diturunkan dari fakta di sekitarnya." },
      ],
      8: [
        { title: "Siklus digit terakhir: 8, 6, 4, 2, 0", description: "Digit terakhir dari 8×1 sampai 8×5: 8, 6, 4, 2, 0, lalu siklus berulang: 8×6=48, 8×7=56, 8×8=64, 8×9=72, 8×10=80." },
        { title: "Penggandaan tiga kali", description: "Karena 8 = 2 × 2 × 2, setiap fakta perkalian 8 bisa ditemukan dengan melipatgandakan tiga kali: 8×5 → gandakan jadi 10, gandakan jadi 20, gandakan jadi 40." },
      ],
      9: [
        { title: "Digit selalu berjumlah 9", description: "Untuk setiap kelipatan 9 dari 9×1 sampai 9×10, jumlah digitnya selalu tepat 9: 9→9, 18→1+8=9, 27→2+7=9, 36→3+6=9, dan seterusnya sampai 90→9+0=9." },
        { title: "Puluhan naik, satuan turun", description: "Seiring pengali bertambah, digit puluhan naik (0,1,2,3...) sementara digit satuan turun (9,8,7,6...): 09, 18, 27, 36, 45, 54, 63, 72, 81, 90." },
      ],
      10: [
        { title: "Selalu berakhiran 0", description: "Setiap kelipatan 10 berakhiran angka 0, tanpa kecuali: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100." },
        { title: "Cukup tambahkan nol", description: "Mengalikan bilangan bulat apa pun dengan 10 sama saja dengan menuliskan bilangan itu lalu menambahkan 0 di akhir: 7×10 = 70, 23×10 = 230." },
      ],
      11: [
        { title: "Pola cermin untuk 1-9", description: "Untuk bilangan satu digit n dari 1 sampai 9, 11×n sama dengan n ditulis dua kali: 11×1=11, 11×2=22, 11×3=33, sampai 11×9=99." },
        { title: "Pola berhenti di 11×10", description: "11×10 = 110, bukan '1010' — begitu pengalinya sendiri menjadi dua digit, trik cermin sederhana berhenti berlaku." },
      ],
      12: [
        { title: "12 = 10 + 2, dikalikan n", description: "Karena 12×n = 10×n + 2×n, setiap fakta bisa dibangun dengan menjumlahkan fakta tabel 10 dan fakta tabel 2: 12×7 = 70 + 14 = 84." },
        { title: "Banyak pasangan faktor", description: "Karena 12 = 2×6 = 3×4, tabel 12 juga bisa diperoleh dengan melipatgandakan tabel 6 atau mengalikan tabel 4 dengan 3." },
      ],
      13: [
        { title: "Tidak ada jalan pintas — uraikan menjadi 10 + 3", description: "Karena 13 bilangan prima, tidak ada trik penggandaan atau pelipattigaan. Gunakan 13×n = 10×n + 3×n: untuk 13×6 hasilnya 60 + 18 = 78." },
        { title: "Digit terakhir sama dengan tabel 3", description: "Karena 13 = 10 + 3, digit terakhir 13×n selalu sama dengan digit terakhir 3×n: 13×4=52 (digit terakhir 2, sama seperti 3×4=12)." },
      ],
      14: [
        { title: "Dua kali lipat tabel 7", description: "Karena 14 = 2 × 7, setiap fakta perkalian 14 adalah dua kali lipat fakta tabel 7 yang sepadan: 14×6 = 2×(7×6) = 2×42 = 84." },
        { title: "Selalu bilangan genap", description: "Karena 14 adalah bilangan genap, setiap kelipatannya juga genap." },
      ],
      15: [
        { title: "15 = 10 + 5, dikalikan n", description: "Karena 15×n = 10×n + 5×n, setiap fakta bisa dibangun dengan menjumlahkan fakta tabel 10 dan fakta tabel 5: 15×6 = 60 + 30 = 90." },
        { title: "Selalu berakhiran 0 atau 5", description: "Karena 15 kelipatan 5, setiap hasil dalam tabel 15 berakhiran 0 atau 5, sama seperti tabel 5 itu sendiri." },
      ],
      16: [
        { title: "Dua kali lipat tabel 8", description: "Karena 16 = 2 × 8, setiap fakta perkalian 16 adalah dua kali lipat fakta tabel 8 yang sepadan: 16×5 = 2×(8×5) = 2×40 = 80." },
        { title: "16 adalah kuadrat sempurna", description: "16 = 4×4, jadi ini layak dihafal langsung sebagai patokan." },
      ],
      17: [
        { title: "Tidak ada jalan pintas — uraikan menjadi 10 + 7", description: "Karena 17 bilangan prima, gunakan 17×n = 10×n + 7×n: untuk 17×6 hasilnya 60 + 42 = 102." },
        { title: "Uraian alternatif: 20 − 3", description: "17×n juga sama dengan 20×n − 3×n, yang bisa lebih cepat begitu tabel 20 sudah otomatis." },
      ],
      18: [
        { title: "18 = 20 − 2, dikalikan n", description: "Karena 18×n = 20×n − 2×n, setiap fakta bisa ditemukan dengan mengalikan 20 lalu mengurangi dua kali bilangan aslinya: 18×6 = 120 − 12 = 108." },
        { title: "Jumlah digit habis dibagi 9", description: "Karena 18 = 2 × 9, setiap kelipatan 18 juga kelipatan 9 — sehingga digitnya selalu berjumlah kelipatan 9: 18×4=72, dan 7+2=9." },
      ],
      19: [
        { title: "19 = 20 − 1, dikalikan n", description: "Karena 19×n = 20×n − n, setiap fakta bisa ditemukan dengan mengalikan 20 lalu mengurangi bilangan aslinya sekali: 19×6 = 120 − 6 = 114." },
        { title: "Hasil sedikit lebih kecil dari kelipatan 20", description: "Karena 19 satu kurang dari 20, setiap hasil tabel 19 tepat n lebih kecil dari kelipatan 20 yang sepadan." },
      ],
      20: [
        { title: "Selalu berakhiran 0", description: "Karena 20 kelipatan 10, setiap hasil tabel 20 berakhiran 0, sama seperti tabel 10." },
        { title: "Dua kali lipat tabel 10", description: "Karena 20 = 2 × 10, setiap fakta perkalian 20 adalah dua kali lipat fakta tabel 10 yang sepadan: 20×7 = 2×(10×7) = 2×70 = 140." },
      ],
      21: [
        { title: "21 = 20 + 1, dikalikan n", description: "Karena 21×n = 20×n + n, setiap fakta bisa ditemukan dengan mengalikan 20 lalu menambahkan satu kelompok lagi: 21×6 = 120 + 6 = 126." },
        { title: "Tiga kali lipat tabel 7", description: "Karena 21 = 3 × 7, setiap fakta perkalian 21 adalah tiga kali lipat fakta tabel 7 yang sepadan: 21×4 = 3×(7×4) = 3×28 = 84." },
      ],
      22: [
        { title: "Dua kali lipat tabel 11", description: "Karena 22 = 2 × 11, setiap fakta perkalian 22 adalah dua kali lipat fakta tabel 11 yang sepadan: 22×4 = 2×(11×4) = 2×44 = 88." },
        { title: "22 = 20 + 2, dikalikan n", description: "Karena 22×n = 20×n + 2×n, setiap fakta bisa dibangun dengan menjumlahkan fakta tabel 20 dan fakta tabel 2: 22×5 = 100 + 10 = 110." },
      ],
      23: [
        { title: "23 = 20 + 3, dikalikan n", description: "Karena 23×n = 20×n + 3×n, setiap fakta bisa ditemukan dengan menjumlahkan fakta tabel 20 dan fakta tabel 3: 23×5 = 100 + 15 = 115." },
        { title: "Uraian alternatif: 25 − 2", description: "23×n juga sama dengan 25×n − 2×n, yang kadang lebih cepat kalau tabel 25 sudah lancar." },
      ],
      24: [
        { title: "Banyak pasangan faktor", description: "Karena 24 = 4×6 = 3×8 = 2×12, tabel ini bisa dibangun dengan beberapa cara: melipatgandakan tabel 12, melipattigakan tabel 8, atau mengalikan tabel 4 dengan 6." },
        { title: "Dua kali lipat tabel 12", description: "24×n = 2×(12×n): kalau tabel 12 sudah dikuasai, tabel ini hampir gratis." },
      ],
      25: [
        { title: "25 = 100 ÷ 4, dikalikan n", description: "Karena 25×n = 100×n ÷ 4, setiap fakta bisa ditemukan dengan mengalikan 100 lalu membagi 4: 25×8 = 800 ÷ 4 = 200." },
        { title: "Selalu berakhiran 25, 50, 75, atau 00", description: "Dua digit terakhir setiap kelipatan 25 berputar mengikuti empat pola ini: 25, 50, 75, 100, 125, 150..." },
      ],
      26: [
        { title: "Dua kali lipat tabel 13", description: "26×n = 2×(13×n): 26×4 = 2×52 = 104." },
        { title: "26 = 25 + 1, dikalikan n", description: "Karena 26×n = 25×n + n, bisa dikalikan dengan 25 (lewat 100÷4) lalu ditambah satu kelompok lagi." },
      ],
      27: [
        { title: "27 = 30 − 3, dikalikan n", description: "27×n = 30×n − 3×n: 27×6 = 180 − 18 = 162." },
        { title: "27 adalah pangkat tiga dari 3", description: "27 = 3×3×3, jadi bilangan ini layak dihafal sebagai patokan tersendiri di samping tabelnya." },
      ],
      28: [
        { title: "28 = 4 × 7", description: "Lipatgandakan tabel 7 dua kali: 28×n = 2×(2×(7×n))." },
        { title: "28 adalah bilangan sempurna", description: "Jumlah pembagi positif 28 (1+2+4+7+14) sama dengan bilangan 28 itu sendiri — sifat langka." },
      ],
      29: [
        { title: "29 = 30 − 1, dikalikan n", description: "29×n = 30×n − n: 29×7 = 210 − 7 = 203." },
        { title: "Hasil sedikit lebih kecil dari kelipatan 30", description: "Setiap hasil di tabel 29 tepat n lebih kecil dari kelipatan 30 yang sepadan." },
      ],
      30: [
        { title: "30 = 3 × 10, dikalikan n", description: "30×n = (10×n)×3: tambahkan nol dulu, lalu lipattigakan hasilnya. 30×7 = 70×3 = 210." },
        { title: "Selalu berakhiran 0", description: "Setiap kelipatan 30 berakhiran angka 0, sama seperti kelipatan 10 dan 3 sekaligus." },
      ],
      31: [
        { title: "31 = 30 + 1, dikalikan n", description: "31×n = 30×n + n: 31×8 = 240 + 8 = 248." },
        { title: "Hasil sedikit lebih besar dari kelipatan 30", description: "Setiap hasil di tabel 31 tepat n lebih besar dari kelipatan 30 yang sepadan." },
      ],
      32: [
        { title: "Dua kali lipat tabel 16", description: "32×n = 2×(16×n): 32×5 = 2×80 = 160." },
        { title: "32 adalah pangkat lima dari 2", description: "32 = 2×2×2×2×2, bisa dicapai lewat lima kali penggandaan berturut-turut dari 1." },
      ],
      33: [
        { title: "Tiga kali lipat tabel 11", description: "33×n = 3×(11×n): 33×4 = 3×44 = 132." },
        { title: "33 = 30 + 3, dikalikan n", description: "33×n = 30×n + 3×n: 33×5 = 150 + 15 = 165." },
      ],
      34: [
        { title: "Dua kali lipat tabel 17", description: "34×n = 2×(17×n): 34×4 = 2×68 = 136." },
        { title: "34 = 35 − 1, dikalikan n", description: "34×n = 35×n − n — berguna kalau tabel 35 (5×7) sudah lancar." },
      ],
      35: [
        { title: "35 = 5 × 7", description: "Pakai salah satu tabel yang dikenal: 35×4 = 5×4×7 = 20×7 = 140." },
        { title: "Selalu berakhiran 0 atau 5", description: "Karena 35 kelipatan 5, setiap hasilnya berakhiran 0 atau 5, sama seperti tabel 5." },
      ],
      36: [
        { title: "36 adalah kuadrat dari 6", description: "36 = 6×6, layak dihafal langsung sebagai patokan." },
        { title: "Banyak pasangan faktor", description: "36 = 4×9 = 3×12 = 2×18 — pilih pasangan yang paling dikuasai." },
      ],
      37: [
        { title: "37 = 40 − 3, dikalikan n", description: "37×n = 40×n − 3×n: 37×8 = 320 − 24 = 296." },
        { title: "Hubungan ajaib dengan 111", description: "37×3=111, 37×6=222, 37×9=333 — setiap kelipatan 3 menghasilkan bilangan dengan digit yang sama." },
      ],
      38: [
        { title: "Dua kali lipat tabel 19", description: "38×n = 2×(19×n): 38×5 = 2×95 = 190." },
        { title: "38 = 40 − 2, dikalikan n", description: "38×n = 40×n − 2×n: 38×6 = 240 − 12 = 228." },
      ],
      39: [
        { title: "39 = 40 − 1, dikalikan n", description: "39×n = 40×n − n: 39×7 = 280 − 7 = 273." },
        { title: "Tiga kali lipat tabel 13", description: "39×n = 3×(13×n): 39×4 = 3×52 = 156." },
      ],
      40: [
        { title: "40 = 4 × 10, dikalikan n", description: "40×n = (10×n)×4: tambahkan nol dulu, lalu kalikan 4. 40×6 = 60×4 = 240." },
        { title: "Selalu berakhiran 0", description: "Setiap kelipatan 40 berakhiran angka 0." },
      ],
      41: [
        { title: "41 = 40 + 1, dikalikan n", description: "41×n = 40×n + n: 41×7 = 280 + 7 = 287." },
        { title: "Hasil sedikit lebih besar dari kelipatan 40", description: "Setiap hasil di tabel 41 tepat n lebih besar dari kelipatan 40 yang sepadan." },
      ],
      42: [
        { title: "42 = 6 × 7", description: "Pakai salah satu tabel yang dikenal: 42×5 = 6×5×7 = 30×7 = 210." },
        { title: "Beberapa pasangan faktor", description: "42 = 6×7 = 2×21 = 3×14 — pilih pasangan yang paling dikuasai." },
      ],
      43: [
        { title: "43 = 40 + 3, dikalikan n", description: "43×n = 40×n + 3×n: 43×6 = 240 + 18 = 258." },
        { title: "Alternatif: 45 − 2", description: "43×n juga sama dengan 45×n − 2×n." },
      ],
      44: [
        { title: "44 = 4 × 11", description: "Lipatgandakan tabel 11 dua kali: 44×n = 2×(2×(11×n))." },
        { title: "44 = 45 − 1, dikalikan n", description: "44×n = 45×n − n — berguna kalau tabel 45 sudah lancar." },
      ],
      45: [
        { title: "45 = 5 × 9", description: "Pakai salah satu tabel yang dikenal: 45×4 = 5×4×9 = 20×9 = 180." },
        { title: "Selalu berakhiran 0 atau 5", description: "Karena 45 kelipatan 5, setiap hasilnya berakhiran 0 atau 5." },
      ],
      46: [
        { title: "Dua kali lipat tabel 23", description: "46×n = 2×(23×n): 46×5 = 2×115 = 230." },
        { title: "46 = 50 − 4, dikalikan n", description: "46×n = 50×n − 4×n — berguna kalau tabel 50 sudah otomatis." },
      ],
      47: [
        { title: "47 = 50 − 3, dikalikan n", description: "47×n = 50×n − 3×n: 47×7 = 350 − 21 = 329." },
        { title: "Hasil sedikit lebih kecil dari kelipatan 50", description: "Setiap hasil di tabel 47 tepat 3×n lebih kecil dari kelipatan 50 yang sepadan." },
      ],
      48: [
        { title: "Banyak pasangan faktor", description: "48 = 6×8 = 4×12 = 3×16 = 2×24 — pilih pasangan yang paling dikuasai." },
        { title: "48 = 50 − 2, dikalikan n", description: "48×n = 50×n − 2×n: 48×7 = 350 − 14 = 336." },
      ],
      49: [
        { title: "49 = 50 − 1, dikalikan n", description: "49×n = 50×n − n: 49×7 = 350 − 7 = 343." },
        { title: "49 adalah kuadrat dari 7", description: "49 = 7×7, layak dihafal langsung sebagai patokan." },
      ],
      50: [
        { title: "50 = 100 ÷ 2, dikalikan n", description: "50×n = (100×n)÷2: 50×7 = 700÷2 = 350." },
        { title: "Selalu berakhiran 0 atau 50", description: "Kelipatan 50 bergantian antara berakhiran 00 (pengali genap) dan 50 (pengali ganjil)." },
      ],
      51: [
        { title: "51 = 50 + 1, dikalikan n", description: "51×n = 50×n + n: 51×7 = 350 + 7 = 357." },
        { title: "Tiga kali lipat tabel 17", description: "51×n = 3×(17×n)." },
      ],
      52: [
        { title: "52 = 4 × 13", description: "Lipatgandakan tabel 13 dua kali: 52×n = 2×(2×(13×n))." },
        { title: "52 = 50 + 2, dikalikan n", description: "52×n = 50×n + 2×n: 52×5 = 250 + 10 = 260." },
      ],
      53: [
        { title: "53 = 50 + 3, dikalikan n", description: "53×n = 50×n + 3×n: 53×6 = 300 + 18 = 318." },
        { title: "Alternatif: 55 − 2", description: "53×n juga sama dengan 55×n − 2×n." },
      ],
      54: [
        { title: "54 = 6 × 9", description: "Pakai salah satu tabel yang dikenal: 54×5 = 6×5×9 = 30×9 = 270." },
        { title: "54 = 55 − 1, dikalikan n", description: "54×n = 55×n − n — berguna kalau tabel 55 (5×11) sudah lancar." },
      ],
      55: [
        { title: "55 = 5 × 11", description: "Pakai salah satu tabel yang dikenal: 55×4 = 5×4×11 = 20×11 = 220." },
        { title: "55 adalah bilangan segitiga", description: "55 = 1+2+3+...+10, jumlah sepuluh bilangan asli pertama." },
      ],
      56: [
        { title: "56 = 7 × 8", description: "Pakai salah satu tabel yang dikenal: 56×5 = 7×5×8 = 35×8 = 280." },
        { title: "56 = 55 + 1, dikalikan n", description: "56×n = 55×n + n — berguna kalau tabel 55 sudah lancar." },
      ],
      57: [
        { title: "57 = 60 − 3, dikalikan n", description: "57×n = 60×n − 3×n: 57×7 = 420 − 21 = 399." },
        { title: "Tiga kali lipat tabel 19", description: "57×n = 3×(19×n)." },
      ],
      58: [
        { title: "Dua kali lipat tabel 29", description: "58×n = 2×(29×n): 58×5 = 2×145 = 290." },
        { title: "58 = 60 − 2, dikalikan n", description: "58×n = 60×n − 2×n." },
      ],
      59: [
        { title: "59 = 60 − 1, dikalikan n", description: "59×n = 60×n − n: 59×7 = 420 − 7 = 413." },
        { title: "Hasil sedikit lebih kecil dari kelipatan 60", description: "Setiap hasil di tabel 59 tepat n lebih kecil dari kelipatan 60 yang sepadan." },
      ],
      60: [
        { title: "60 = 6 × 10, dikalikan n", description: "60×n = (10×n)×6: tambahkan nol dulu, lalu kalikan 6. 60×7 = 70×6 = 420." },
        { title: "Banyak pasangan faktor", description: "60 = 2×30 = 3×20 = 4×15 = 5×12 — bilangan yang sangat nyaman dengan banyak pembagi." },
      ],
      61: [
        { title: "61 = 60 + 1, dikalikan n", description: "61×n = 60×n + n: 61×7 = 420 + 7 = 427." },
        { title: "Hasil sedikit lebih besar dari kelipatan 60", description: "Setiap hasil di tabel 61 tepat n lebih besar dari kelipatan 60 yang sepadan." },
      ],
      62: [
        { title: "Dua kali lipat tabel 31", description: "62×n = 2×(31×n): 62×5 = 2×155 = 310." },
        { title: "62 = 60 + 2, dikalikan n", description: "62×n = 60×n + 2×n." },
      ],
      63: [
        { title: "63 = 7 × 9", description: "Pakai salah satu tabel yang dikenal: 63×5 = 7×5×9 = 35×9 = 315." },
        { title: "63 = 60 + 3, dikalikan n", description: "63×n = 60×n + 3×n." },
      ],
      64: [
        { title: "Dua kali lipat tabel 32", description: "64×n = 2×(32×n)." },
        { title: "64 adalah kuadrat dari 8", description: "64 = 8×8, layak dihafal langsung sebagai patokan." },
      ],
      65: [
        { title: "65 = 5 × 13", description: "Pakai salah satu tabel yang dikenal: 65×4 = 5×4×13 = 20×13 = 260." },
        { title: "Selalu berakhiran 0 atau 5", description: "Karena 65 kelipatan 5, setiap hasilnya berakhiran 0 atau 5." },
      ],
      66: [
        { title: "Dua kali lipat tabel 33", description: "66×n = 2×(33×n)." },
        { title: "66 = 6 × 11", description: "Pakai salah satu tabel yang dikenal: 66×5 = 6×5×11 = 30×11 = 330." },
      ],
      67: [
        { title: "67 = 70 − 3, dikalikan n", description: "67×n = 70×n − 3×n: 67×7 = 490 − 21 = 469." },
        { title: "Hasil sedikit lebih kecil dari kelipatan 70", description: "Setiap hasil di tabel 67 tepat 3×n lebih kecil dari kelipatan 70 yang sepadan." },
      ],
      68: [
        { title: "68 = 4 × 17", description: "Lipatgandakan tabel 17 dua kali: 68×n = 2×(2×(17×n))." },
        { title: "68 = 70 − 2, dikalikan n", description: "68×n = 70×n − 2×n." },
      ],
      69: [
        { title: "69 = 70 − 1, dikalikan n", description: "69×n = 70×n − n: 69×6 = 420 − 6 = 414." },
        { title: "Tiga kali lipat tabel 23", description: "69×n = 3×(23×n)." },
      ],
      70: [
        { title: "70 = 7 × 10, dikalikan n", description: "70×n = (10×n)×7: tambahkan nol dulu, lalu kalikan 7. 70×6 = 60×7 = 420." },
        { title: "Selalu berakhiran 0", description: "Setiap kelipatan 70 berakhiran angka 0." },
      ],
      71: [
        { title: "71 = 70 + 1, dikalikan n", description: "71×n = 70×n + n: 71×7 = 490 + 7 = 497." },
        { title: "Hasil sedikit lebih besar dari kelipatan 70", description: "Setiap hasil di tabel 71 tepat n lebih besar dari kelipatan 70 yang sepadan." },
      ],
      72: [
        { title: "72 = 8 × 9", description: "Pakai salah satu tabel yang dikenal: 72×5 = 8×5×9 = 40×9 = 360." },
        { title: "Banyak pasangan faktor", description: "72 = 6×12 = 4×18 = 3×24 = 2×36 — pilih pasangan yang paling dikuasai." },
      ],
      73: [
        { title: "73 = 70 + 3, dikalikan n", description: "73×n = 70×n + 3×n: 73×5 = 350 + 15 = 365." },
        { title: "Alternatif: 75 − 2", description: "73×n juga sama dengan 75×n − 2×n." },
      ],
      74: [
        { title: "Dua kali lipat tabel 37", description: "74×n = 2×(37×n): 74×5 = 2×185 = 370." },
        { title: "74 = 75 − 1, dikalikan n", description: "74×n = 75×n − n." },
      ],
      75: [
        { title: "75 = 100 × 3 ÷ 4, dikalikan n", description: "75×n = (100×n)×3÷4: 75×8 = 800×3÷4 = 2400÷4 = 600." },
        { title: "75 = 3 × 25", description: "Pakai tabel 25 (lewat 100÷4) lalu lipattigakan hasilnya." },
      ],
      76: [
        { title: "76 = 4 × 19", description: "Lipatgandakan tabel 19 dua kali: 76×n = 2×(2×(19×n))." },
        { title: "76 = 80 − 4, dikalikan n", description: "76×n = 80×n − 4×n." },
      ],
      77: [
        { title: "77 = 7 × 11", description: "Pakai salah satu tabel yang dikenal: 77×5 = 7×5×11 = 35×11 = 385." },
        { title: "77 = 80 − 3, dikalikan n", description: "77×n = 80×n − 3×n." },
      ],
      78: [
        { title: "78 = 80 − 2, dikalikan n", description: "78×n = 80×n − 2×n: 78×7 = 560 − 14 = 546." },
        { title: "78 = 6 × 13", description: "Pakai salah satu tabel yang dikenal: 78×5 = 6×5×13 = 30×13 = 390." },
      ],
      79: [
        { title: "79 = 80 − 1, dikalikan n", description: "79×n = 80×n − n: 79×7 = 560 − 7 = 553." },
        { title: "Hasil sedikit lebih kecil dari kelipatan 80", description: "Setiap hasil di tabel 79 tepat n lebih kecil dari kelipatan 80 yang sepadan." },
      ],
      80: [
        { title: "80 = 8 × 10, dikalikan n", description: "80×n = (10×n)×8: tambahkan nol dulu, lalu kalikan 8. 80×6 = 60×8 = 480." },
        { title: "Selalu berakhiran 0", description: "Setiap kelipatan 80 berakhiran angka 0." },
      ],
      81: [
        { title: "81 = 80 + 1, dikalikan n", description: "81×n = 80×n + n: 81×7 = 560 + 7 = 567." },
        { title: "81 adalah kuadrat dari 9", description: "81 = 9×9, layak dihafal langsung sebagai patokan." },
      ],
      82: [
        { title: "Dua kali lipat tabel 41", description: "82×n = 2×(41×n): 82×5 = 2×205 = 410." },
        { title: "82 = 80 + 2, dikalikan n", description: "82×n = 80×n + 2×n." },
      ],
      83: [
        { title: "83 = 80 + 3, dikalikan n", description: "83×n = 80×n + 3×n: 83×6 = 480 + 18 = 498." },
        { title: "Alternatif: 85 − 2", description: "83×n juga sama dengan 85×n − 2×n." },
      ],
      84: [
        { title: "84 = 7 × 12", description: "Pakai salah satu tabel yang dikenal: 84×5 = 7×5×12 = 35×12 = 420." },
        { title: "84 = 85 − 1, dikalikan n", description: "84×n = 85×n − n." },
      ],
      85: [
        { title: "85 = 5 × 17", description: "Pakai salah satu tabel yang dikenal: 85×4 = 5×4×17 = 20×17 = 340." },
        { title: "Selalu berakhiran 0 atau 5", description: "Karena 85 kelipatan 5, setiap hasilnya berakhiran 0 atau 5." },
      ],
      86: [
        { title: "Dua kali lipat tabel 43", description: "86×n = 2×(43×n): 86×5 = 2×215 = 430." },
        { title: "86 = 90 − 4, dikalikan n", description: "86×n = 90×n − 4×n." },
      ],
      87: [
        { title: "87 = 90 − 3, dikalikan n", description: "87×n = 90×n − 3×n: 87×7 = 630 − 21 = 609." },
        { title: "Tiga kali lipat tabel 29", description: "87×n = 3×(29×n)." },
      ],
      88: [
        { title: "88 = 8 × 11", description: "Pakai salah satu tabel yang dikenal: 88×5 = 8×5×11 = 40×11 = 440." },
        { title: "88 = 90 − 2, dikalikan n", description: "88×n = 90×n − 2×n." },
      ],
      89: [
        { title: "89 = 90 − 1, dikalikan n", description: "89×n = 90×n − n: 89×7 = 630 − 7 = 623." },
        { title: "Hasil sedikit lebih kecil dari kelipatan 90", description: "Setiap hasil di tabel 89 tepat n lebih kecil dari kelipatan 90 yang sepadan." },
      ],
      90: [
        { title: "90 = 9 × 10, dikalikan n", description: "90×n = (10×n)×9: tambahkan nol dulu, lalu kalikan 9. 90×6 = 60×9 = 540." },
        { title: "Selalu berakhiran 0", description: "Setiap kelipatan 90 berakhiran angka 0." },
      ],
      91: [
        { title: "91 = 90 + 1, dikalikan n", description: "91×n = 90×n + n: 91×7 = 630 + 7 = 637." },
        { title: "91 = 7 × 13", description: "Pakai salah satu tabel yang dikenal: 91×5 = 7×5×13 = 35×13 = 455." },
      ],
      92: [
        { title: "92 = 4 × 23", description: "Lipatgandakan tabel 23 dua kali: 92×n = 2×(2×(23×n))." },
        { title: "92 = 90 + 2, dikalikan n", description: "92×n = 90×n + 2×n." },
      ],
      93: [
        { title: "93 = 90 + 3, dikalikan n", description: "93×n = 90×n + 3×n: 93×7 = 630 + 21 = 651." },
        { title: "Tiga kali lipat tabel 31", description: "93×n = 3×(31×n)." },
      ],
      94: [
        { title: "Dua kali lipat tabel 47", description: "94×n = 2×(47×n): 94×5 = 2×235 = 470." },
        { title: "94 = 100 − 6, dikalikan n", description: "94×n = 100×n − 6×n." },
      ],
      95: [
        { title: "95 = 100 − 5, dikalikan n", description: "95×n = 100×n − 5×n: 95×6 = 600 − 30 = 570." },
        { title: "95 = 5 × 19", description: "Pakai salah satu tabel yang dikenal: 95×4 = 5×4×19 = 20×19 = 380." },
      ],
      96: [
        { title: "96 = 100 − 4, dikalikan n", description: "96×n = 100×n − 4×n: 96×7 = 700 − 28 = 672." },
        { title: "Banyak pasangan faktor", description: "96 = 8×12 = 6×16 = 4×24 = 3×32 — pilih pasangan yang paling dikuasai." },
      ],
      97: [
        { title: "97 = 100 − 3, dikalikan n", description: "97×n = 100×n − 3×n: 97×7 = 700 − 21 = 679." },
        { title: "Hasil sedikit lebih kecil dari kelipatan 100", description: "Setiap hasil di tabel 97 tepat 3×n lebih kecil dari kelipatan 100 yang sepadan." },
      ],
      98: [
        { title: "98 = 100 − 2, dikalikan n", description: "98×n = 100×n − 2×n: 98×6 = 600 − 12 = 588." },
        { title: "Dua kali lipat tabel 49", description: "98×n = 2×(49×n)." },
      ],
      99: [
        { title: "99 = 100 − 1, dikalikan n", description: "99×n = 100×n − n: 99×7 = 700 − 7 = 693." },
        { title: "99 = 9 × 11", description: "Pakai salah satu tabel yang dikenal: 99×5 = 9×5×11 = 45×11 = 495." },
      ],
      100: [
        { title: "100 = 10 × 10, dikalikan n", description: "100×n: cukup tambahkan dua nol. 100×7 = 700." },
        { title: "Selalu berakhiran 00", description: "Setiap kelipatan 100 berakhiran dua nol." },
      ],
    }

const mistakes: { [key: number]: MistakeItem[] } = {
      1: [
        { mistake: "Mengira 1×1=2", solution: "Ingat: apa pun yang dikalikan 1 tetap sama. 1 kelompok berisi 1 benda tetaplah 1." },
        { mistake: "Bingung dengan penjumlahan", solution: "Mengalikan dengan 1 berbeda dari menjumlahkan. 5+1=6, tetapi 5×1=5." },
      ],
      2: [
        { mistake: "Bingung antara 2×6=12 dan 2×7=14", solution: "Gunakan hitungan loncat dua: 2, 4, 6, 8, 10, 12, 14. Hitung perlahan tanpa melompat." },
        { mistake: "Bingung dengan bilangan besar", solution: "Uraikan saja: 2×8 sama dengan 8+8. Melipatgandakan hanyalah penjumlahan sederhana." },
      ],
      3: [
        { mistake: "Bingung antara 3×6=18 dan 3×7=21", solution: "Ingat pola +3: setelah 18 datang 21. Hitung loncat tiga untuk memastikan." },
        { mistake: "Bingung antara 3×8=24 dan 3×9=27", solution: "Gunakan trik jumlah digit: 24 (2+4=6) dan 27 (2+7=9), keduanya mengikuti pola 3-6-9." },
      ],
      4: [
        { mistake: "Hanya melipatgandakan sekali, bukan dua kali", solution: "Ingat: 4 = 2 × 2, jadi harus dilipatgandakan, lalu dilipatgandakan lagi. 4×6 BUKAN 6+6=12 (itu baru 2×6) — jawabannya adalah 12 dilipatgandakan lagi, yaitu 24." },
        { mistake: "Bingung antara 4×7=28 dan 4×8=32", solution: "Hitung dengan hati-hati loncat empat: 24, 28, 32, 36. Ucapkan setiap bilangan agar tidak terlewat." },
      ],
      5: [
        { mistake: "Kehilangan hitungan antara pengali ganjil dan genap", solution: "Pengali ganjil (1,3,5,7,9) menghasilkan angka berakhiran 5; pengali genap (2,4,6,8,10) menghasilkan angka berakhiran 0. Periksa dulu apakah pengalinya ganjil atau genap." },
        { mistake: "Salah hitung setelah 25", solution: "Perlambat di sekitar tengah: ...20, 25, 30... mudah tanpa sadar melompat ke 35 tanpa menyebut 30." },
      ],
      6: [
        { mistake: "Lupa menambahkan kelompok tambahan pada trik 5×n + n", solution: "6×n adalah 5×n DITAMBAH satu n lagi — jangan berhenti di jawaban tabel 5. 6×8 = 40 + 8 = 48, bukan 40." },
        { mistake: "Bingung antara 6×7=42 dengan 7×7=49 atau 6×8=48", solution: "Tiga fakta ini berdekatan. Kuatkan 6×7=42 dengan mengingat bahwa ini satu kelompok 7 lebih banyak dari 5×7=35." },
      ],
      7: [
        { mistake: "Bingung antara 7×8=56 dengan fakta di sekitarnya", solution: "Gunakan pantun: 5, 6, 7, 8 — 56 adalah 7 kali 8. Empat bilangan ini berurutan sehingga mudah diingat saat terdesak." },
        { mistake: "Menukar 6×7 (42), 7×7 (49), dan 7×8 (56)", solution: "Ketiga fakta ini berdekatan dan paling sering tertukar. Hafalkan sebagai satu kelompok: 42, 49, 56 — masing-masing 7 lebih besar dari sebelumnya." },
        { mistake: "Mencoba trik digit terakhir dari tabel 2 atau 5", solution: "Digit terakhir tabel 7 melewati semua 10 kemungkinan — tidak ada pola pendek yang berulang. Sadari ini sejak awal dan hafalkan seluruh siklusnya." },
      ],
      8: [
        { mistake: "Kehilangan hitungan di tengah penggandaan tiga kali", solution: "Ucapkan setiap langkah penggandaan dengan suara keras: 'gandakan, gandakan, gandakan' — untuk 8×5: 5→10→20→40." },
        { mistake: "Menganggap 8×7=56 dan 7×8=56 sebagai fakta berbeda", solution: "Perkalian bersifat komutatif — 8×7 dan 7×8 selalu menghasilkan jawaban yang sama, 56." },
      ],
      9: [
        { mistake: "Lupa mengurangi bilangan asli setelah trik ×10", solution: "9×n = (10×n) − n. Jangan berhenti di jawaban untuk 10 — masih harus dikurangi n. Untuk 9×7: 70 − 7 = 63, bukan 70." },
        { mistake: "Salah dalam trik jari", solution: "Untuk 9×n, lipat jari ke-n dihitung dari kiri. Jari di sebelah kiri jari yang dilipat adalah puluhan; jari di sebelah kanan adalah satuan." },
      ],
      10: [
        { mistake: "Menambahkan nol di tempat yang salah pada bilangan desimal", solution: "Trik 'tambah nol' berlaku untuk bilangan bulat. Untuk bilangan desimal, mengalikan dengan 10 justru menggeser koma desimal satu tempat ke kanan." },
        { mistake: "Menyamakan ×10 dan ×100", solution: "×10 menambahkan satu nol; ×100 menambahkan dua nol. Perhatikan berapa banyak nol pada pengalinya." },
      ],
      11: [
        { mistake: "Menganggap pola cermin tetap berlaku setelah 11×9", solution: "Trik digit ganda hanya berlaku untuk pengali dari 1 sampai 9. Untuk 11×10 dan seterusnya, gunakan 11×n = 10×n + n." },
        { mistake: "Lupa menambahkan n setelah trik ×10", solution: "11×n adalah 10×n DITAMBAH n, bukan sekadar jawaban tabel 10. 11×12 = 120 + 12 = 132." },
      ],
      12: [
        { mistake: "Lupa menjumlahkan kedua bagian dari uraian 10+2", solution: "12×n membutuhkan penjumlahan KEDUA 10×n dan 2×n. 12×8 = 80 + 16 = 96 — jangan berhenti setelah bagian 10×n." },
        { mistake: "Bingung antara 12×11=132 dan 12×12=144", solution: "Kedua fakta ini berdekatan di akhir tabel standar. Kuatkan 12×12=144 sebagai bilangan kuadrat yang layak dihafal langsung." },
      ],
      13: [
        { mistake: "Lupa menjumlahkan kedua bagian dari uraian 10+3", solution: "13×n membutuhkan penjumlahan KEDUA 10×n dan 3×n. 13×7 = 70 + 21 = 91 — jangan berhenti setelah bagian 10×n." },
        { mistake: "Bingung antara 13×6=78 dan 13×7=91", solution: "Periksa uraiannya satu per satu: 13×6 = 60+18=78, 13×7 = 70+21=91. Hitung ulang kedua bagian." },
      ],
      14: [
        { mistake: "Lupa melipatgandakan setelah trik tabel 7", solution: "14×n adalah fakta tabel 7 yang dilipatgandakan, bukan bilangan yang sama. 14×5 = 2×(7×5) = 2×35 = 70, bukan 35." },
        { mistake: "Bingung antara 14×6=84 dengan 7×6=42", solution: "Ingat bahwa 14 tepat dua kali 7, jadi setiap jawaban untuk 14 harus tepat dua kali jawaban untuk 7 yang sepadan." },
      ],
      15: [
        { mistake: "Hanya menjumlahkan satu bagian dari uraian 10+5", solution: "15×n membutuhkan penjumlahan KEDUA 10×n dan 5×n. 15×7 = 70 + 35 = 105 — jangan berhenti setelah bagian 10×n." },
        { mistake: "Kehilangan hitungan antara pengali ganjil dan genap", solution: "Karena 15 kelipatan 5, hasilnya tetap berakhiran 0 atau 5 tergantung ganjil-genapnya pengali." },
      ],
      16: [
        { mistake: "Kehilangan hitungan saat rantai penggandaan empat kali", solution: "Ucapkan setiap langkah keras-keras: 'gandakan, gandakan, gandakan, gandakan' — untuk 16×3: 3→6→12→24→48." },
        { mistake: "Bingung antara 16×6=96 dan 16×7=112", solution: "Periksa lewat tabel 8: 16×6 harus tepat dua kali 8×6=48, yaitu 96." },
      ],
      17: [
        { mistake: "Lupa menjumlahkan kedua bagian dari uraian 10+7", solution: "17×n membutuhkan penjumlahan KEDUA 10×n dan 7×n. 17×5 = 50 + 35 = 85 — jangan berhenti setelah bagian 10×n." },
        { mistake: "Mencoba mencari jalan pintas lewat penggandaan atau pelipattigaan", solution: "17 adalah bilangan prima, jadi tidak ada tabel lebih kecil yang bisa dilipatgandakan atau dilipattigakan untuk mendapatkannya." },
      ],
      18: [
        { mistake: "Mengurangi jumlah yang salah dalam trik 20−2", solution: "18×n = 20×n − 2×n, bukan 20×n − 2. Pastikan mengurangi dua kali bilangan asli, bukan sekadar 2. 18×5 = 100 − 10 = 90." },
        { mistake: "Bingung antara 18×9=162 dan 18×8=144", solution: "Memeriksa jumlah digit saja tidak membantu membedakan keduanya karena keduanya berjumlah 9. Hitung ulang dengan 20×n − 2×n." },
      ],
      19: [
        { mistake: "Mengurangi jumlah yang salah dalam trik 20−1", solution: "19×n = 20×n − n, bukan 20×n − 1. Pastikan mengurangi seluruh bilangan asli. 19×8 = 160 − 8 = 152." },
        { mistake: "Lupa bahwa 19 bilangan prima dan mencari jalan pintas lewat faktor", solution: "Tidak ada tabel lebih kecil yang bisa dilipatgandakan atau dilipattigakan untuk 19." },
      ],
      20: [
        { mistake: "Lupa melipatgandakan setelah trik tabel 10", solution: "20×n adalah fakta tabel 10 yang dilipatgandakan, bukan bilangan yang sama dengan tambahan nol. 20×6 = 2×(10×6) = 2×60 = 120, bukan 60." },
        { mistake: "Bingung antara 20×n dan 2×n", solution: "20×n selalu berakhiran 0 dan tepat sepuluh kali lebih besar dari 2×n." },
      ],
      21: [
        { mistake: "Lupa menambahkan kelompok tambahan pada trik 20+1", solution: "21×n adalah 20×n DITAMBAH satu n lagi — jangan berhenti di jawaban tabel 20. 21×7 = 140 + 7 = 147, bukan 140." },
        { mistake: "Bingung antara 21×n dan 12×n", solution: "21 dan 12 memakai digit yang sama, tapi keduanya bilangan yang sangat berbeda. Jaga uraian tetap terpisah: 21×n = 20×n+n, sedangkan 12×n = 10×n+2×n." },
      ],
      22: [
        { mistake: "Lupa melipatgandakan setelah trik tabel 11", solution: "22×n adalah fakta tabel 11 yang dilipatgandakan, bukan fakta yang sama. 22×4 = 2×44 = 88, bukan 44." },
        { mistake: "Bingung antara 22×n dan 2×n", solution: "Periksa: 22×n selalu jauh lebih besar daripada 2×n — bandingkan dengan fakta tabel 2 yang sepadan sebagai pemeriksaan kasar." },
      ],
      23: [
        { mistake: "Lupa menjumlahkan kedua bagian dari uraian 20+3", solution: "23×n membutuhkan penjumlahan KEDUA 20×n dan 3×n. 23×6 = 120 + 18 = 138 — jangan berhenti setelah bagian 20×n." },
        { mistake: "Mencari jalan pintas lewat faktor yang tidak ada", solution: "23 adalah bilangan prima, jadi tidak ada tabel lebih kecil yang bisa dilipatgandakan atau dilipattigakan. Uraian 20+3 adalah cara paling andal." },
      ],
      24: [
        { mistake: "Bingung antara 24×n dan 12×n", solution: "Ingat bahwa 24 tepat dua kali 12 — setiap jawaban untuk 24 harus tepat dua kali jawaban untuk 12 yang sepadan." },
        { mistake: "Lupa uraian mana yang sedang dipakai", solution: "Setelah memilih satu cara (misalnya 4×6), pertahankan cara itu untuk memeriksa — jangan mencampur beberapa uraian dalam satu perhitungan." },
      ],
      25: [
        { mistake: "Salah membagi dengan 4", solution: "25×n = (100×n)÷4 — kalikan dulu dengan 100 (tambahkan dua nol), baru bagi dengan 4. 25×7 = 700÷4 = 175." },
        { mistake: "Menebak dua digit terakhir", solution: "Kelipatan 25 selalu berakhiran tepat 25, 50, 75, atau 00 — tidak mungkin selain itu, jadi periksa dengan aturan ini." },
      ],
      26: [
        { mistake: "Lupa melipatgandakan setelah trik tabel 13", solution: "26×n adalah fakta tabel 13 yang dilipatgandakan, bukan fakta yang sama." },
        { mistake: "Bingung antara 26 dengan 62", solution: "Baca urutan digit dengan hati-hati — 26×n dan 62×n memberi hasil yang sangat berbeda." },
      ],
      27: [
        { mistake: "Mengurangi jumlah yang salah dalam trik 30−3", solution: "27×n = 30×n − 3×n, bukan 30×n − 3. 27×5 = 150 − 15 = 135." },
        { mistake: "Salah urutan saat menguraikan 27=9×3", solution: "Kalikan dulu dengan 9, baru dengan 3 (atau sebaliknya) — urutan pengali tidak mengubah hasil." },
      ],
      28: [
        { mistake: "Hanya melipatgandakan sekali, bukan dua kali", solution: "28 = 4×7, jadi tabel 7 harus dilipatgandakan dua kali berturut-turut, bukan sekali (itu baru menghasilkan 14)." },
        { mistake: "Bingung antara 28 dengan 82", solution: "Periksa urutan digit dengan teliti — 28×n dan 82×n memberi hasil yang sangat berbeda." },
      ],
      29: [
        { mistake: "Mengurangi jumlah yang salah dalam trik 30−1", solution: "29×n = 30×n − n, bukan 30×n − 1. 29×8 = 240 − 8 = 232." },
        { mistake: "Lupa bahwa 29 bilangan prima", solution: "Tidak ada tabel lebih kecil yang bisa dilipatgandakan atau dilipattigakan untuk 29 — uraian 30−1 paling andal." },
      ],
      30: [
        { mistake: "Lupa melipattigakan setelah menambah nol", solution: "30×n bukan sekadar 10×n dengan tambahan nol; masih perlu dilipattigakan. 30×7 = 70×3 = 210, bukan 70." },
        { mistake: "Bingung urutan langkah", solution: "Mengalikan dengan 10 lalu 3 — atau sebaliknya — memberi hasil yang sama, jadi pilih urutan yang lebih nyaman." },
      ],
      31: [
        { mistake: "Lupa menambahkan bilangan asli setelah trik ×30", solution: "31×n = 30×n + n. 31×7 = 210 + 7 = 217, bukan 210." },
        { mistake: "Bingung antara 31 dengan 13", solution: "Kedua bilangan ini memakai digit yang sama dalam urutan terbalik — periksa dengan teliti bilangan mana yang sedang dikalikan." },
      ],
      32: [
        { mistake: "Kehilangan hitungan saat rantai penggandaan", solution: "Ucapkan setiap langkah keras-keras: 1→2→4→8→16→32, agar tidak salah hitung." },
        { mistake: "Bingung antara 32×n dengan 23×n", solution: "Periksa urutan digit — 32 dan 23 memakai digit yang sama, tapi keduanya bilangan berbeda." },
      ],
      33: [
        { mistake: "Bingung antara 33 dengan 3 atau 13", solution: "33 bukan sekadar '3 dengan nol' atau 13 dengan digit terbalik; periksa setiap digit satu per satu." },
        { mistake: "Lupa melipattigakan, bukan melipatgandakan", solution: "33 = 3×11, jadi tabel 11 harus DILIPATTIGAKAN, bukan dilipatgandakan." },
      ],
      34: [
        { mistake: "Lupa melipatgandakan setelah trik tabel 17", solution: "34×n adalah fakta tabel 17 yang dilipatgandakan, bukan fakta yang sama. 34×4 = 2×68 = 136, bukan 68." },
        { mistake: "Bingung antara 34 dengan 43", solution: "Periksa urutan digit dengan teliti — 34×n dan 43×n memberi hasil yang berbeda." },
      ],
      35: [
        { mistake: "Lupa bahwa urutan perkalian bisa dipilih", solution: "35×n bisa dihitung sebagai (5×n)×7 atau (7×n)×5 — pilih urutan yang lebih mudah dihitung dalam hati." },
        { mistake: "Bingung antara 35 dengan 53", solution: "Periksa urutan digit — 35×n dan 53×n memberi hasil yang berbeda." },
      ],
      36: [
        { mistake: "Bingung antara 36 dengan 63", solution: "Periksa urutan digit dengan teliti — 36×n dan 63×n memberi hasil yang berbeda." },
        { mistake: "Lupa bahwa 36 kuadrat sempurna", solution: "36 = 6×6 — layak dihafal langsung, bukan dihitung ulang setiap kali." },
      ],
      37: [
        { mistake: "Mengurangi jumlah yang salah dalam trik 40−3", solution: "37×n = 40×n − 3×n, bukan 40×n − 3. 37×5 = 200 − 15 = 185." },
        { mistake: "Lupa hubungan dengan 111", solution: "Kalau ingat 37×3=111, bisa cepat memeriksa 37×6 dan 37×9 dengan melipatgandakan dan melipattigakan 111." },
      ],
      38: [
        { mistake: "Lupa melipatgandakan setelah trik tabel 19", solution: "38×n adalah fakta tabel 19 yang dilipatgandakan, bukan fakta yang sama." },
        { mistake: "Bingung antara 38 dengan 83", solution: "Periksa urutan digit — 38×n dan 83×n memberi hasil yang berbeda." },
      ],
      39: [
        { mistake: "Mengurangi jumlah yang salah dalam trik 40−1", solution: "39×n = 40×n − n, bukan 40×n − 1. 39×6 = 240 − 6 = 234." },
        { mistake: "Bingung antara 39 dengan 93", solution: "Periksa urutan digit — 39×n dan 93×n memberi hasil yang berbeda." },
      ],
      40: [
        { mistake: "Lupa mengalikan dengan 4 setelah menambah nol", solution: "40×n bukan sekadar 10×n dengan tambahan nol; masih perlu dikalikan 4. 40×6 = 60×4 = 240, bukan 60." },
        { mistake: "Menyamakan ×40 dengan ×4", solution: "×40 selalu sepuluh kali lebih besar dari ×4 — periksa dengan membandingkan hasilnya." },
      ],
      41: [
        { mistake: "Lupa menambahkan bilangan asli setelah trik ×40", solution: "41×n = 40×n + n. 41×6 = 240 + 6 = 246, bukan 240." },
        { mistake: "Bingung antara 41 dengan 14", solution: "Kedua bilangan ini memakai digit yang sama dalam urutan terbalik — periksa dengan teliti." },
      ],
      42: [
        { mistake: "Bingung antara 42 dengan 24", solution: "Kedua bilangan ini memakai digit yang sama dalam urutan terbalik — periksa dengan teliti bilangan mana yang sedang dikalikan." },
        { mistake: "Lupa bahwa uraian bisa dipilih", solution: "42×n bisa dihitung lewat 6×7, 2×21, atau 3×14 — pilih cara tercepat menurutmu sendiri." },
      ],
      43: [
        { mistake: "Lupa menjumlahkan kedua bagian uraian", solution: "43×n membutuhkan penjumlahan KEDUA 40×n dan 3×n. 43×5 = 200 + 15 = 215." },
        { mistake: "Mencari jalan pintas lewat faktor yang tidak ada", solution: "43 adalah bilangan prima, jadi uraian adalah satu-satunya metode yang andal." },
      ],
      44: [
        { mistake: "Hanya melipatgandakan sekali, bukan dua kali", solution: "44 = 4×11, jadi tabel 11 harus dilipatgandakan dua kali berturut-turut." },
        { mistake: "Bingung antara 44 dengan 4", solution: "44 bukan sekadar '4 dengan digit tambahan'; periksa setiap fakta satu per satu." },
      ],
      45: [
        { mistake: "Bingung antara 45 dengan 54", solution: "Periksa urutan digit — 45×n dan 54×n memberi hasil yang berbeda." },
        { mistake: "Lupa sifat bilangan segitiga", solution: "45 = 1+2+3+...+9 — fakta ini tidak membantu perkalian secara langsung, tapi sifat menarik yang layak diingat terpisah." },
      ],
      46: [
        { mistake: "Lupa melipatgandakan setelah trik tabel 23", solution: "46×n adalah fakta tabel 23 yang dilipatgandakan, bukan fakta yang sama." },
        { mistake: "Bingung antara 46 dengan 64", solution: "Periksa urutan digit — 46×n dan 64×n memberi hasil yang sangat berbeda." },
      ],
      47: [
        { mistake: "Mengurangi jumlah yang salah dalam trik 50−3", solution: "47×n = 50×n − 3×n, bukan 50×n − 3. 47×6 = 300 − 18 = 282." },
        { mistake: "Bingung antara 47 dengan 74", solution: "Periksa urutan digit — 47×n dan 74×n memberi hasil yang berbeda." },
      ],
      48: [
        { mistake: "Bingung antara 48 dengan 84", solution: "Periksa urutan digit — 48×n dan 84×n memberi hasil yang berbeda." },
        { mistake: "Lupa uraian mana yang sedang dipakai", solution: "Setelah memilih satu cara, pertahankan cara itu untuk memeriksa jawaban." },
      ],
      49: [
        { mistake: "Mengurangi jumlah yang salah dalam trik 50−1", solution: "49×n = 50×n − n, bukan 50×n − 1. 49×6 = 300 − 6 = 294." },
        { mistake: "Bingung antara 49 dengan 94", solution: "Periksa urutan digit — 49×n dan 94×n memberi hasil yang berbeda." },
      ],
      50: [
        { mistake: "Lupa membagi dua", solution: "50×n bukan sekadar 100×n; masih perlu dibagi dua. 50×7 = 700÷2 = 350, bukan 700." },
        { mistake: "Menyamakan 50% dengan 5%", solution: "50% berarti setengah, sedangkan 5% hanya seperdua puluh; jangan tertukar jumlah nolnya." },
      ],
      51: [
        { mistake: "Lupa menambahkan bilangan asli setelah trik ×50", solution: "51×n = 50×n + n. 51×6 = 300 + 6 = 306." },
        { mistake: "Bingung antara 51 dengan 15", solution: "Kedua bilangan ini memakai digit yang sama dalam urutan terbalik." },
      ],
      52: [
        { mistake: "Bingung antara 52 dengan 25", solution: "Kedua bilangan ini memakai digit yang sama dalam urutan terbalik — periksa dengan teliti." },
        { mistake: "Lupa melipatgandakan dua kali, bukan sekali", solution: "52 = 4×13, jadi tabel 13 harus dilipatgandakan dua kali berturut-turut." },
      ],
      53: [
        { mistake: "Lupa menjumlahkan kedua bagian uraian", solution: "53×n membutuhkan penjumlahan KEDUA 50×n dan 3×n." },
        { mistake: "Mencari jalan pintas lewat faktor yang tidak ada", solution: "53 adalah bilangan prima, jadi uraian adalah satu-satunya metode yang andal." },
      ],
      54: [
        { mistake: "Bingung antara 54 dengan 45", solution: "Periksa urutan digit — 54×n dan 45×n memberi hasil yang berbeda." },
        { mistake: "Lupa uraian mana yang sedang dipakai", solution: "Setelah memilih 6×9 atau 55−1, pertahankan satu cara untuk memeriksa jawaban." },
      ],
      55: [
        { mistake: "Bingung antara 55 dengan 5 atau 15", solution: "55 bukan sekadar kelanjutan sederhana dari tabel 5; periksa setiap fakta satu per satu." },
        { mistake: "Lupa sifat bilangan segitiga", solution: "55 = 1+2+...+10 — sifat tersendiri yang menarik untuk diingat, meski tidak membantu perkalian langsung." },
      ],
      56: [
        { mistake: "Bingung antara 56×n dan 65×n", solution: "Periksa urutan digit — 56×n dan 65×n memberi hasil yang berbeda." },
        { mistake: "Lupa fakta dasar 7×8=56", solution: "Kuatkan 7×8=56 secara terpisah — inilah dasar dari seluruh tabel 56." },
      ],
      57: [
        { mistake: "Mengurangi jumlah yang salah dalam trik 60−3", solution: "57×n = 60×n − 3×n, bukan 60×n − 3." },
        { mistake: "Bingung antara 57 dengan 75", solution: "Periksa urutan digit — 57×n dan 75×n memberi hasil yang sangat berbeda." },
      ],
      58: [
        { mistake: "Lupa melipatgandakan setelah trik tabel 29", solution: "58×n adalah fakta tabel 29 yang dilipatgandakan, bukan fakta yang sama." },
        { mistake: "Bingung antara 58 dengan 85", solution: "Periksa urutan digit — 58×n dan 85×n memberi hasil yang berbeda." },
      ],
      59: [
        { mistake: "Mengurangi jumlah yang salah dalam trik 60−1", solution: "59×n = 60×n − n, bukan 60×n − 1." },
        { mistake: "Lupa bahwa 59 bilangan prima", solution: "Tidak ada tabel lebih kecil untuk dilipatgandakan atau dilipattigakan — uraian 60−1 paling andal." },
      ],
      60: [
        { mistake: "Lupa mengalikan dengan 6 setelah menambah nol", solution: "60×n bukan sekadar 10×n dengan tambahan nol; masih perlu dikalikan 6." },
        { mistake: "Bingung antara menit dan detik dalam soal", solution: "60 detik = 1 menit, 60 menit = 1 jam — baca dengan teliti satuan mana yang dimaksud." },
      ],
      61: [
        { mistake: "Lupa menambahkan bilangan asli setelah trik ×60", solution: "61×n = 60×n + n." },
        { mistake: "Bingung antara 61 dengan 16", solution: "Kedua bilangan ini memakai digit yang sama dalam urutan terbalik." },
      ],
      62: [
        { mistake: "Lupa melipatgandakan setelah trik tabel 31", solution: "62×n adalah fakta tabel 31 yang dilipatgandakan, bukan fakta yang sama." },
        { mistake: "Bingung antara 62 dengan 26", solution: "Kedua bilangan ini memakai digit yang sama dalam urutan terbalik." },
      ],
      63: [
        { mistake: "Bingung antara 63 dengan 36", solution: "Kedua bilangan ini memakai digit yang sama dalam urutan terbalik." },
        { mistake: "Lupa fakta dasar 7×9=63", solution: "Kuatkan 7×9=63 secara terpisah — inilah dasar dari seluruh tabel 63." },
      ],
      64: [
        { mistake: "Kehilangan hitungan saat rantai penggandaan", solution: "Ucapkan setiap langkah keras-keras: 1→2→4→8→16→32→64." },
        { mistake: "Bingung antara 64 dengan 46", solution: "Periksa urutan digit — 64×n dan 46×n memberi hasil yang berbeda." },
      ],
      65: [
        { mistake: "Bingung antara 65 dengan 56", solution: "Periksa urutan digit — 65×n dan 56×n memberi hasil yang berbeda." },
        { mistake: "Lupa bahwa urutan perkalian bisa dipilih", solution: "65×n bisa dihitung sebagai (5×n)×13 atau (13×n)×5 — pilih yang lebih mudah." },
      ],
      66: [
        { mistake: "Bingung antara 66 dengan 6", solution: "66 bukan sekadar '6 dengan digit tambahan'; periksa setiap fakta satu per satu." },
        { mistake: "Lupa uraian mana yang sedang dipakai", solution: "Setelah memilih satu cara (6×11, 2×33, atau 3×22), pertahankan untuk memeriksa jawaban." },
      ],
      67: [
        { mistake: "Mengurangi jumlah yang salah dalam trik 70−3", solution: "67×n = 70×n − 3×n, bukan 70×n − 3." },
        { mistake: "Bingung antara 67 dengan 76", solution: "Periksa urutan digit — 67×n dan 76×n memberi hasil yang berbeda." },
      ],
      68: [
        { mistake: "Hanya melipatgandakan sekali, bukan dua kali", solution: "68 = 4×17, jadi tabel 17 harus dilipatgandakan dua kali berturut-turut." },
        { mistake: "Bingung antara 68 dengan 86", solution: "Periksa urutan digit — 68×n dan 86×n memberi hasil yang berbeda." },
      ],
      69: [
        { mistake: "Mengurangi jumlah yang salah dalam trik 70−1", solution: "69×n = 70×n − n, bukan 70×n − 1." },
        { mistake: "Bingung antara 69 dengan 96", solution: "Periksa urutan digit — 69×n dan 96×n memberi hasil yang sangat berbeda." },
      ],
      70: [
        { mistake: "Lupa mengalikan dengan 7 setelah menambah nol", solution: "70×n bukan sekadar 10×n dengan tambahan nol; masih perlu dikalikan 7." },
        { mistake: "Menyamakan ×70 dengan ×7", solution: "×70 selalu sepuluh kali lebih besar dari ×7 — periksa dengan membandingkan hasilnya." },
      ],
      71: [
        { mistake: "Lupa menambahkan bilangan asli setelah trik ×70", solution: "71×n = 70×n + n." },
        { mistake: "Bingung antara 71 dengan 17", solution: "Kedua bilangan ini memakai digit yang sama dalam urutan terbalik." },
      ],
      72: [
        { mistake: "Bingung antara 72 dengan 27", solution: "Kedua bilangan ini memakai digit yang sama dalam urutan terbalik." },
        { mistake: "Lupa fakta dasar 8×9=72", solution: "Kuatkan 8×9=72 secara terpisah — inilah dasar dari seluruh tabel 72." },
      ],
      73: [
        { mistake: "Lupa menjumlahkan kedua bagian uraian", solution: "73×n membutuhkan penjumlahan KEDUA 70×n dan 3×n." },
        { mistake: "Mencari jalan pintas lewat faktor yang tidak ada", solution: "73 adalah bilangan prima, jadi uraian adalah satu-satunya metode yang andal." },
      ],
      74: [
        { mistake: "Lupa melipatgandakan setelah trik tabel 37", solution: "74×n adalah fakta tabel 37 yang dilipatgandakan, bukan fakta yang sama." },
        { mistake: "Bingung antara 74 dengan 47", solution: "Kedua bilangan ini memakai digit yang sama dalam urutan terbalik." },
      ],
      75: [
        { mistake: "Salah urutan langkah dalam uraian", solution: "75×n = (100×n)×3÷4 — kalikan dulu dengan 100, lalu dengan 3, baru dibagi 4, agar tidak muncul pecahan." },
        { mistake: "Menyamakan 75% dengan 25%", solution: "75% berarti tiga perempat, sedangkan 25% hanya seperempat; jangan tertukar bagian yang dihitung." },
      ],
      76: [
        { mistake: "Hanya melipatgandakan sekali, bukan dua kali", solution: "76 = 4×19, jadi tabel 19 harus dilipatgandakan dua kali berturut-turut." },
        { mistake: "Bingung antara 76 dengan 67", solution: "Periksa urutan digit — 76×n dan 67×n memberi hasil yang berbeda." },
      ],
      77: [
        { mistake: "Bingung antara 77 dengan 7", solution: "77 bukan sekadar '7 dengan digit tambahan'; periksa setiap fakta satu per satu." },
        { mistake: "Lupa fakta dasar 7×11=77", solution: "Kuatkan 7×11=77 secara terpisah — inilah dasar dari seluruh tabel 77." },
      ],
      78: [
        { mistake: "Bingung antara 78 dengan 87", solution: "Periksa urutan digit — 78×n dan 87×n memberi hasil yang berbeda." },
        { mistake: "Lupa uraian mana yang sedang dipakai", solution: "Setelah memilih satu cara (6×13, 80−2), pertahankan cara itu untuk memeriksa." },
      ],
      79: [
        { mistake: "Mengurangi jumlah yang salah dalam trik 80−1", solution: "79×n = 80×n − n, bukan 80×n − 1." },
        { mistake: "Lupa bahwa 79 bilangan prima", solution: "Tidak ada tabel lebih kecil untuk dilipatgandakan atau dilipattigakan — uraian 80−1 paling andal." },
      ],
      80: [
        { mistake: "Lupa mengalikan dengan 8 setelah menambah nol", solution: "80×n bukan sekadar 10×n dengan tambahan nol; masih perlu dikalikan 8." },
        { mistake: "Menyamakan ×80 dengan ×8", solution: "×80 selalu sepuluh kali lebih besar dari ×8 — periksa dengan membandingkan hasilnya." },
      ],
      81: [
        { mistake: "Lupa menambahkan bilangan asli setelah trik ×80", solution: "81×n = 80×n + n." },
        { mistake: "Bingung antara 81 dengan 18", solution: "Kedua bilangan ini memakai digit yang sama dalam urutan terbalik." },
      ],
      82: [
        { mistake: "Lupa melipatgandakan setelah trik tabel 41", solution: "82×n adalah fakta tabel 41 yang dilipatgandakan, bukan fakta yang sama." },
        { mistake: "Bingung antara 82 dengan 28", solution: "Kedua bilangan ini memakai digit yang sama dalam urutan terbalik." },
      ],
      83: [
        { mistake: "Lupa menjumlahkan kedua bagian uraian", solution: "83×n membutuhkan penjumlahan KEDUA 80×n dan 3×n." },
        { mistake: "Mencari jalan pintas lewat faktor yang tidak ada", solution: "83 adalah bilangan prima, jadi uraian adalah satu-satunya metode yang andal." },
      ],
      84: [
        { mistake: "Bingung antara 84 dengan 48", solution: "Kedua bilangan ini memakai digit yang sama dalam urutan terbalik." },
        { mistake: "Lupa uraian mana yang sedang dipakai", solution: "Setelah memilih satu cara (7×12, 6×14), pertahankan untuk memeriksa jawaban." },
      ],
      85: [
        { mistake: "Bingung antara 85 dengan 58", solution: "Periksa urutan digit — 85×n dan 58×n memberi hasil yang berbeda." },
        { mistake: "Lupa bahwa urutan perkalian bisa dipilih", solution: "85×n bisa dihitung sebagai (5×n)×17 atau (17×n)×5 — pilih yang lebih mudah." },
      ],
      86: [
        { mistake: "Lupa melipatgandakan setelah trik tabel 43", solution: "86×n adalah fakta tabel 43 yang dilipatgandakan, bukan fakta yang sama." },
        { mistake: "Bingung antara 86 dengan 68", solution: "Kedua bilangan ini memakai digit yang sama dalam urutan terbalik." },
      ],
      87: [
        { mistake: "Mengurangi jumlah yang salah dalam trik 90−3", solution: "87×n = 90×n − 3×n, bukan 90×n − 3." },
        { mistake: "Bingung antara 87 dengan 78", solution: "Periksa urutan digit — 87×n dan 78×n memberi hasil yang berbeda." },
      ],
      88: [
        { mistake: "Bingung antara 88 dengan 8", solution: "88 bukan sekadar '8 dengan digit tambahan'; periksa setiap fakta satu per satu." },
        { mistake: "Lupa uraian mana yang sedang dipakai", solution: "Setelah memilih satu cara (8×11, 90−2), pertahankan untuk memeriksa jawaban." },
      ],
      89: [
        { mistake: "Mengurangi jumlah yang salah dalam trik 90−1", solution: "89×n = 90×n − n, bukan 90×n − 1." },
        { mistake: "Lupa bahwa 89 bilangan prima", solution: "Tidak ada tabel lebih kecil untuk dilipatgandakan atau dilipattigakan — uraian 90−1 paling andal." },
      ],
      90: [
        { mistake: "Lupa mengalikan dengan 9 setelah menambah nol", solution: "90×n bukan sekadar 10×n dengan tambahan nol; masih perlu dikalikan 9." },
        { mistake: "Bingung antara 90° dengan 180°", solution: "90° adalah sudut siku-siku, sedangkan 180° adalah sudut lurus; jangan tertukar kedua patokan ini dalam geometri." },
      ],
      91: [
        { mistake: "Mengira 91 bilangan prima", solution: "91 = 7×13, jadi ini bilangan komposit meskipun sekilas terlihat seperti bilangan prima." },
        { mistake: "Lupa menambahkan bilangan asli setelah trik ×90", solution: "91×n = 90×n + n." },
      ],
      92: [
        { mistake: "Hanya melipatgandakan sekali, bukan dua kali", solution: "92 = 4×23, jadi tabel 23 harus dilipatgandakan dua kali berturut-turut." },
        { mistake: "Bingung antara 92 dengan 29", solution: "Kedua bilangan ini memakai digit yang sama dalam urutan terbalik." },
      ],
      93: [
        { mistake: "Lupa menjumlahkan kedua bagian uraian", solution: "93×n membutuhkan penjumlahan KEDUA 90×n dan 3×n." },
        { mistake: "Bingung antara 93 dengan 39", solution: "Kedua bilangan ini memakai digit yang sama dalam urutan terbalik." },
      ],
      94: [
        { mistake: "Lupa melipatgandakan setelah trik tabel 47", solution: "94×n adalah fakta tabel 47 yang dilipatgandakan, bukan fakta yang sama." },
        { mistake: "Mengurangi jumlah yang salah dalam trik 100−6", solution: "94×n = 100×n − 6×n, bukan 100×n − 6." },
      ],
      95: [
        { mistake: "Mengurangi jumlah yang salah dalam trik 100−5", solution: "95×n = 100×n − 5×n, bukan 100×n − 5." },
        { mistake: "Bingung antara 95 dengan 59", solution: "Kedua bilangan ini memakai digit yang sama dalam urutan terbalik." },
      ],
      96: [
        { mistake: "Mengurangi jumlah yang salah dalam trik 100−4", solution: "96×n = 100×n − 4×n, bukan 100×n − 4." },
        { mistake: "Bingung antara 96 dengan 69", solution: "Kedua bilangan ini memakai digit yang sama dalam urutan terbalik." },
      ],
      97: [
        { mistake: "Mengurangi jumlah yang salah dalam trik 100−3", solution: "97×n = 100×n − 3×n, bukan 100×n − 3." },
        { mistake: "Bingung antara 97 dengan 79", solution: "Kedua bilangan ini memakai digit yang sama dalam urutan terbalik." },
      ],
      98: [
        { mistake: "Mengurangi jumlah yang salah dalam trik 100−2", solution: "98×n = 100×n − 2×n, bukan 100×n − 2." },
        { mistake: "Bingung antara 98 dengan 89", solution: "Kedua bilangan ini memakai digit yang sama dalam urutan terbalik." },
      ],
      99: [
        { mistake: "Mengurangi jumlah yang salah dalam trik 100−1", solution: "99×n = 100×n − n, bukan 100×n − 1." },
        { mistake: "Bingung antara 99 dengan 9", solution: "99 bukan sekadar '9 dengan digit tambahan'; periksa setiap fakta satu per satu." },
      ],
      100: [
        { mistake: "Hanya menambahkan satu nol, bukan dua", solution: "×100 menambahkan DUA nol, bukan satu. 100×9=900, bukan 90." },
        { mistake: "Menyamakan ×100 dengan ×10", solution: "×10 menambahkan satu nol, ×100 menambahkan dua — hitung dengan teliti jumlah nol pada pengalinya." },
      ],
    }

const strategies: { [key: number]: string[] } = {
      1: [
        "Ucapkan setiap perkalian dengan suara keras: 'satu kali satu sama dengan satu, satu kali dua sama dengan dua...'",
        "Latih menuliskan tabel ini sekali sehari selama seminggu.",
        "Cari polanya: jawabannya selalu sama dengan bilangan kedua.",
        "Gunakan kartu latihan, meskipun tabel ini biasanya cepat dikuasai.",
      ],
      2: [
        "Hitung loncat dua sambil berjalan atau naik tangga: 2, 4, 6, 8...",
        "Gunakan jari: pegang jari berpasangan lalu hitung loncat dua.",
        "Latih melipatgandakan bilangan dalam hati sepanjang hari.",
        "Ucapkan: 'dua kali lima sama dengan lima ditambah lima, yaitu sepuluh'.",
      ],
      3: [
        "Hitung berirama loncat tiga: 3, 6, 9, 12, 15...",
        "Gunakan trik jari: pegang jari berkelompok tiga.",
        "Periksa jawaban dengan trik jumlah digit (pola berulang 3-6-9).",
        "Latih 5-10 menit setiap hari daripada satu sesi panjang.",
      ],
      4: [
        "Lipatgandakan sebuah bilangan, lalu lipatgandakan hasilnya lagi: untuk 4×6, gandakan 6 menjadi 12, lalu gandakan 12 menjadi 24.",
        "Kuasai dulu tabel 2 sampai lancar — tabel 4 jadi jauh lebih mudah begitu penggandaan sudah otomatis.",
        "Hitung loncat 4 dengan suara keras: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40.",
        "Bayangkan bentuk meja: meja dengan 4 kaki adalah pengingat visual sederhana bahwa 4 berasal dari kelompok empat.",
      ],
      5: [
        "Ambil fakta tabel 10 yang sepadan lalu bagi dua: untuk 5×7, gunakan 10×7=70, lalu bagi dua menjadi 35.",
        "Hitung loncat lima dengan jari, satu tangan setiap kali, sampai 50.",
        "Kaitkan dengan jam dinding: setiap angka di jam mewakili 5 menit.",
        "Hitung dengan suara keras: 5, 10, 15, 20, 25, 30, 35, 40, 45, 50.",
      ],
      6: [
        "Gunakan 6×n = 5×n + n: temukan dulu fakta untuk 5, lalu tambahkan satu kelompok n lagi.",
        "Atau lipatgandakan tabel 3: 6×7 = 2×(3×7) = 2×21 = 42.",
        "Hitung loncat 6 dengan suara keras: 6, 12, 18, 24, 30, 36, 42, 48, 54, 60.",
        "Bayangkan dadu biasa: setiap sisinya punya sampai 6 titik, dan sepasang dadu memberi contoh visual kelipatan kecil dari 6.",
      ],
      7: [
        "Ucapkan '5, 6, 7, 8 — 56 adalah 7 kali 8!' dengan suara keras sampai otomatis. Ini mencakup fakta tunggal tersulit dalam tabel ini.",
        "Anggap 7 × 7 = 49 sebagai patokan tersendiri untuk dihafal, bukan sesuatu yang perlu dihitung.",
        "Uraikan 7 menjadi 5 + 2 untuk fakta yang lupa: 7 × 6 = (5 × 6) + (2 × 6) = 30 + 12 = 42.",
        "Atau gunakan 10 − 3: 7 × 6 = (10 × 6) − (3 × 6) = 60 − 18 = 42. Pilih cara mana yang terasa lebih cepat.",
      ],
      8: [
        "Lipatgandakan sebuah bilangan tiga kali berturut-turut: untuk 8×6, jalankan 6→12→24→48.",
        "Jika sudah menguasai tabel 4, cukup gandakan sekali lagi: 8×6 = 2×(4×6) = 2×24 = 48.",
        "Hitung loncat 8 dengan suara keras: 8, 16, 24, 32, 40, 48, 56, 64, 72, 80.",
        "Kaitkan dengan laba-laba dan gurita: keduanya sama-sama punya 8 kaki atau lengan.",
      ],
      9: [
        "Gunakan trik '×10 dikurangi n': kalikan dengan 10, lalu kurangi bilangan aslinya. 9×8 = 80 − 8 = 72.",
        "Coba trik jari: angkat semua 10 jari, lipat jari ke-n untuk 9×n, lalu baca puluhan dan satuan.",
        "Periksa jawaban dengan aturan jumlah digit: digit dari setiap fakta tabel 9 harus berjumlah 9.",
        "Hitung dengan suara keras: 9, 18, 27, 36, 45, 54, 63, 72, 81, 90.",
      ],
      10: [
        "Cukup tambahkan 0 di akhir bilangan: untuk 6×10, tulis 6, lalu tambahkan 0 menjadi 60.",
        "Gunakan ini sebagai jalan pintas untuk tabel lain: untuk memeriksa 9×6, hitung 10×6=60 lalu kurangi 6 menjadi 54.",
        "Latih menghitung loncat sepuluh dengan suara keras: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100.",
        "Kaitkan dengan sistem desimal: 10 jari tangan dan 10 jari kaki menjadi alasan kita menghitung berbasis 10.",
      ],
      11: [
        "Untuk pengali 1-9, cukup tulis digitnya dua kali: 11×6 = 66.",
        "Untuk pengali lebih besar, gunakan 11×n = 10×n + n: 11×15 = 150 + 15 = 165.",
        "Periksa perkalian dua digit dengan menjumlahkan digitnya dan menyisipkan di tengah: untuk 11×23, jumlahkan 2+3=5 dan sisipkan di tengah: 253.",
        "Ucapkan pola untuk 1-9 dengan suara keras sampai otomatis: 11, 22, 33, 44, 55, 66, 77, 88, 99.",
      ],
      12: [
        "Uraikan 12 menjadi 10 + 2: kalikan dengan 10, kalikan dengan 2, lalu jumlahkan hasilnya. 12×9 = 90 + 18 = 108.",
        "Jika sudah menguasai tabel 6, cukup lipatgandakan: 12×5 = 2×(6×5) = 2×30 = 60.",
        "Hafalkan 12×12=144 sebagai patokan tersendiri.",
        "Kaitkan dengan lusin sungguhan: sekotak telur berisi satu lusin — contoh visual untuk menghitung kelipatan 12.",
      ],
      13: [
        "Uraikan 13 menjadi 10 + 3: kalikan dengan 10, kalikan dengan 3, lalu jumlahkan hasilnya. 13×6 = 60 + 18 = 78.",
        "Ucapkan uraiannya keras-keras setiap kali sampai otomatis: 'sepuluh enam ditambah tiga enam'.",
        "Ingat bahwa 13 bilangan prima, jadi tidak ada jalan pintas lewat penggandaan atau pelipattigaan.",
        "Latih dengan setumpuk kartu: setiap set kartu punya 13 kartu — cara visual membayangkan kelipatan kecil dari 13.",
      ],
      14: [
        "Lipatgandakan setiap fakta tabel 7: 14×n = 2×(7×n). Kuasai dulu tabel 7, dan tabel ini datang hampir gratis.",
        "Kaitkan dengan konsep 'dua minggu': dua minggu adalah 14 hari, patokan sehari-hari yang berguna.",
        "Hitung loncat 14 dengan suara keras: 14, 28, 42, 56, 70, 84, 98, 112, 126, 140.",
        "Periksa jawaban mana pun untuk 14 dengan membaginya dua — hasilnya harus persis sama dengan fakta tabel 7 yang sepadan.",
      ],
      15: [
        "Trik jam: 15 menit adalah seperempat jam. 15×4=60 menit = 1 jam.",
        "Gunakan tabel 3 atau 5: 15=3×5, jadi 15×4 = 3×4×5 = 12×5 = 60.",
        "Ikuti pola berakhiran 0 atau 5: 15, 30, 45, 60, 75, 90...",
        "Hafalkan kelipatan 15 yang paling berguna: 15×4=60, 15×6=90, 15×8=120.",
      ],
      16: [
        "Lipatgandakan tabel 8: 16×n = 2×(8×n). Biasanya lebih cepat daripada melipatgandakan empat kali terpisah.",
        "Atau lipatgandakan empat kali berturut-turut dari bilangan asli: untuk 16×3, jalankan 3→6→12→24→48.",
        "Hafalkan 16×16=256 sebagai patokan tersendiri jika melanjutkan di luar rentang standar 1-10.",
        "Kaitkan dengan berat: 16 ons setara dengan 1 pon dalam sistem imperial.",
      ],
      17: [
        "Uraikan 17 menjadi 10 + 7: kalikan dengan 10, kalikan dengan 7, lalu jumlahkan hasilnya. 17×6 = 60 + 42 = 102.",
        "Atau coba 20 − 3: kalikan dengan 20, lalu kurangi tiga kali bilangan aslinya.",
        "Terima bahwa 17 tidak punya jalan pintas dan perlu pengulangan ekstra — ucapkan setiap fakta keras-keras beberapa kali.",
        "Hitung loncat 17 dengan suara keras untuk memperkuat urutannya: 17, 34, 51, 68, 85, 102, 119, 136, 153, 170.",
      ],
      18: [
        "Gunakan 18×n = 20×n − 2×n: kalikan dengan 20, lalu kurangi dua kali bilangan aslinya. 18×6 = 120 − 12 = 108.",
        "Atau lipatgandakan tabel 9: 18×n = 2×(9×n).",
        "Atau lipattigakan tabel 6: 18×n = 3×(6×n) — pilih tabel yang lebih dikuasai.",
        "Periksa jawaban dengan aturan jumlah digit: digit dari fakta tabel 18 selalu berjumlah kelipatan 9.",
      ],
      19: [
        "Gunakan 19×n = 20×n − n: kalikan dengan 20, kurangi bilangan aslinya.",
        "Ucapkan sebagai kebiasaan: 'dua puluh kelompok, dikurangi satu kelompok'.",
        "Hitung loncat 19 dengan suara keras: 19, 38, 57, 76, 95, 114, 133, 152, 171, 190.",
        "Periksa dengan membandingkan fakta tabel 20 yang sepadan — jawaban harus selalu tepat n lebih kecil.",
      ],
      20: [
        "Kalikan dengan 10, lalu lipatgandakan hasilnya: 20×6 = 2×(10×6) = 2×60 = 120.",
        "Atau lipatgandakan tabel 10 langsung.",
        "Kaitkan dengan tes penglihatan 20/20 sebagai standar penglihatan normal.",
        "Hitung loncat 20 dengan suara keras: 20, 40, 60, 80, 100, 120, 140, 160, 180, 200.",
      ],
      21: [
        "Gunakan 21×n = 20×n + n: kalikan dengan 20, lalu tambahkan satu kelompok lagi. 21×6 = 120 + 6 = 126.",
        "Atau lipattigakan tabel 7: 21×n = 3×(7×n).",
        "Kaitkan dengan blackjack: skor target 21 memberi gambaran intuitif tentang kelipatannya.",
        "Hitung loncat 21 dengan suara keras: 21, 42, 63, 84, 105, 126, 147, 168, 189, 210.",
      ],
      22: [
        "Lipatgandakan tabel 11: 22×n = 2×(11×n).",
        "Atau uraikan menjadi 20+2: kalikan dengan 20, kalikan dengan 2, jumlahkan hasilnya.",
        "Kaitkan dengan sepak bola: di lapangan ada 22 pemain sekaligus (11 di tiap tim).",
        "Hitung loncat 22 dengan suara keras: 22, 44, 66, 88, 110, 132, 154, 176, 198, 220.",
      ],
      23: [
        "Uraikan 23 menjadi 20 + 3: kalikan dengan 20, kalikan dengan 3, jumlahkan hasilnya. 23×6 = 120 + 18 = 138.",
        "Atau coba 25 − 2 kalau tabel 25 sudah lancar.",
        "Terima bahwa 23 tidak punya jalan pintas dan ulangi setiap fakta beberapa kali dengan suara keras.",
        "Hitung loncat 23 dengan suara keras: 23, 46, 69, 92, 115, 138, 161, 184, 207, 230.",
      ],
      24: [
        "Lipatgandakan tabel 12: 24×n = 2×(12×n).",
        "Atau lipattigakan tabel 8: 24×n = 3×(8×n).",
        "Kaitkan dengan sehari: 24 jam adalah patokan sehari-hari yang jelas.",
        "Hitung loncat 24 dengan suara keras: 24, 48, 72, 96, 120, 144, 168, 192, 216, 240.",
      ],
      25: [
        "Kalikan dengan 100, lalu bagi dengan 4: 25×7 = 700÷4 = 175.",
        "Ingat bahwa 25 = 5×5 — kuadrat dari 5, patokan yang berguna.",
        "Kaitkan dengan koin 25 sen: empat koin seperti itu menjadi satu unit penuh.",
        "Hitung dengan suara keras: 25, 50, 75, 100, 125, 150, 175, 200, 225, 250.",
      ],
      26: [
        "Lipatgandakan tabel 13: 26×n = 2×(13×n).",
        "Atau uraikan menjadi 25+1.",
        "Kaitkan dengan alfabet Latin: ada 26 huruf di dalamnya.",
        "Hitung loncat 26 dengan suara keras: 26, 52, 78, 104, 130, 156, 182, 208, 234, 260.",
      ],
      27: [
        "Uraikan 27 menjadi 30 − 3: kalikan dengan 30, kurangi tiga kali bilangan aslinya.",
        "Atau lipattigakan tabel 9: 27×n = 3×(9×n).",
        "Ingat bahwa 27 = 3³ — pangkat tiga dari 3.",
        "Hitung loncat 27 dengan suara keras: 27, 54, 81, 108, 135, 162, 189, 216, 243, 270.",
      ],
      28: [
        "Lipatgandakan tabel 7 dua kali: 28×n = 2×(2×(7×n)).",
        "Atau pakai 4×7 langsung kalau kedua tabelnya sudah lancar.",
        "Kaitkan dengan bulan Februari: pada tahun biasa (bukan kabisat), Februari punya 28 hari.",
        "Hitung loncat 28 dengan suara keras: 28, 56, 84, 112, 140, 168, 196, 224, 252, 280.",
      ],
      29: [
        "Gunakan 29×n = 30×n − n: kalikan dengan 30, kurangi bilangan aslinya.",
        "Ucapkan sebagai kebiasaan: 'tiga puluh kelompok, dikurangi satu kelompok'.",
        "Kaitkan dengan tahun kabisat: Februari punya 29 hari pada tahun kabisat.",
        "Hitung loncat 29 dengan suara keras: 29, 58, 87, 116, 145, 174, 203, 232, 261, 290.",
      ],
      30: [
        "Kalikan dengan 10, lalu lipattigakan hasilnya: 30×7 = 70×3 = 210.",
        "Atau lipattigakan tabel 10 langsung.",
        "Kaitkan dengan bulan: April, Juni, September, dan November punya 30 hari.",
        "Hitung loncat 30 dengan suara keras: 30, 60, 90, 120, 150, 180, 210, 240, 270, 300.",
      ],
      31: [
        "Gunakan 31×n = 30×n + n: kalikan dengan 30, tambahkan bilangan aslinya.",
        "Kaitkan dengan kalender: 31 adalah jumlah hari maksimum dalam sebulan.",
        "Ucapkan setiap fakta dengan suara keras beberapa kali karena tidak ada jalan pintas.",
        "Hitung loncat 31 dengan suara keras: 31, 62, 93, 124, 155, 186, 217, 248, 279, 310.",
      ],
      32: [
        "Lipatgandakan tabel 16: 32×n = 2×(16×n).",
        "Atau ikuti rantai penggandaan dari bilangan aslinya: n→2n→4n→8n→16n→32n.",
        "Kaitkan dengan suhu: 32°F adalah titik beku air dalam skala Fahrenheit.",
        "Hitung loncat 32 dengan suara keras: 32, 64, 96, 128, 160, 192, 224, 256, 288, 320.",
      ],
      33: [
        "Lipattigakan tabel 11: 33×n = 3×(11×n).",
        "Atau uraikan menjadi 30+3.",
        "Perhatikan bahwa 33 terdiri dari digit yang sama — mudah dikenali di antara bilangan lain.",
        "Hitung loncat 33 dengan suara keras: 33, 66, 99, 132, 165, 198, 231, 264, 297, 330.",
      ],
      34: [
        "Lipatgandakan tabel 17: 34×n = 2×(17×n).",
        "Atau uraikan menjadi 35−1 kalau tabel 35 lebih lancar.",
        "Hitung loncat 34 dengan suara keras: 34, 68, 102, 136, 170, 204, 238, 272, 306, 340.",
        "Periksa jawaban dengan membagi dua — hasilnya harus persis sama dengan fakta tabel 17 yang sepadan.",
      ],
      35: [
        "Pakai tabel 5 atau tabel 7: 35×n = (5×n)×7 = (7×n)×5.",
        "Ingat bahwa hasilnya selalu berakhiran 0 atau 5.",
        "Hitung loncat 35 dengan suara keras: 35, 70, 105, 140, 175, 210, 245, 280, 315, 350.",
        "Kaitkan dengan waktu: 35 menit adalah 5 menit lebih dari setengah jam.",
      ],
      36: [
        "Ingat 36 = 6×6 sebagai patokan tersendiri.",
        "Atau pakai uraian 4×9 atau 3×12 — pilih yang lebih nyaman.",
        "Kaitkan dengan yard: 36 inci sama dengan 1 yard.",
        "Hitung loncat 36 dengan suara keras: 36, 72, 108, 144, 180, 216, 252, 288, 324, 360.",
      ],
      37: [
        "Uraikan 37 menjadi 40 − 3: kalikan dengan 40, kurangi tiga kali bilangan aslinya.",
        "Hafalkan 37×3=111 sebagai patokan tersendiri — dari situ mudah sampai ke 37×6=222 dan 37×9=333.",
        "Ucapkan setiap fakta dengan suara keras karena tidak ada jalan pintas lewat faktor.",
        "Hitung loncat 37 dengan suara keras: 37, 74, 111, 148, 185, 222, 259, 296, 333, 370.",
      ],
      38: [
        "Lipatgandakan tabel 19: 38×n = 2×(19×n).",
        "Atau uraikan menjadi 40−2.",
        "Hitung loncat 38 dengan suara keras: 38, 76, 114, 152, 190, 228, 266, 304, 342, 380.",
        "Periksa dengan membagi dua — hasilnya harus sama dengan fakta tabel 19 yang sepadan.",
      ],
      39: [
        "Gunakan 39×n = 40×n − n: kalikan dengan 40, kurangi bilangan aslinya.",
        "Atau lipattigakan tabel 13.",
        "Ucapkan sebagai kebiasaan: 'empat puluh kelompok, dikurangi satu kelompok'.",
        "Hitung loncat 39 dengan suara keras: 39, 78, 117, 156, 195, 234, 273, 312, 351, 390.",
      ],
      40: [
        "Tambahkan nol, lalu kalikan dengan 4: 40×6 = 60×4 = 240.",
        "Atau kalikan dengan 4 dulu, baru tambahkan nol.",
        "Kaitkan dengan ungkapan 'empat puluh hari empat puluh malam'.",
        "Hitung loncat 40 dengan suara keras: 40, 80, 120, 160, 200, 240, 280, 320, 360, 400.",
      ],
      41: [
        "Gunakan 41×n = 40×n + n: kalikan dengan 40, tambahkan bilangan aslinya.",
        "Ucapkan setiap fakta dengan suara keras beberapa kali karena tidak ada jalan pintas.",
        "Hitung loncat 41 dengan suara keras: 41, 82, 123, 164, 205, 246, 287, 328, 369, 410.",
        "Periksa dengan membandingkan fakta tabel 40 yang sepadan — selisihnya selalu tepat n.",
      ],
      42: [
        "Pakai tabel 6 atau tabel 7: 42×n = (6×n)×7 = (7×n)×6.",
        "Kaitkan dengan novel 'The Hitchhiker's Guide to the Galaxy', di mana 42 adalah 'jawaban atas segalanya'.",
        "Hitung loncat 42 dengan suara keras: 42, 84, 126, 168, 210, 252, 294, 336, 378, 420.",
        "Periksa dengan uraian 40+2 kalau cara utama terlupa.",
      ],
      43: [
        "Uraikan 43 menjadi 40 + 3: kalikan dengan 40, kalikan dengan 3, jumlahkan hasilnya.",
        "Atau coba 45 − 2 kalau lebih nyaman.",
        "Ucapkan setiap fakta dengan suara keras beberapa kali.",
        "Hitung loncat 43 dengan suara keras: 43, 86, 129, 172, 215, 258, 301, 344, 387, 430.",
      ],
      44: [
        "Lipatgandakan tabel 11 dua kali: 44×n = 2×(2×(11×n)).",
        "Atau lipatgandakan tabel 22.",
        "Perhatikan bahwa 44 terdiri dari digit yang sama, seperti 11, 22, dan 33.",
        "Hitung loncat 44 dengan suara keras: 44, 88, 132, 176, 220, 264, 308, 352, 396, 440.",
      ],
      45: [
        "Pakai tabel 5 atau tabel 9: 45×n = (5×n)×9 = (9×n)×5.",
        "Kaitkan dengan sudut: 45° adalah setengah sudut siku-siku.",
        "Kaitkan dengan sejarah Indonesia: tahun 1945 adalah tahun kemerdekaan.",
        "Hitung loncat 45 dengan suara keras: 45, 90, 135, 180, 225, 270, 315, 360, 405, 450.",
      ],
      46: [
        "Lipatgandakan tabel 23: 46×n = 2×(23×n).",
        "Atau uraikan menjadi 50−4.",
        "Hitung loncat 46 dengan suara keras: 46, 92, 138, 184, 230, 276, 322, 368, 414, 460.",
        "Periksa dengan membagi dua — hasilnya harus sama dengan fakta tabel 23 yang sepadan.",
      ],
      47: [
        "Uraikan 47 menjadi 50 − 3: kalikan dengan 50 (setengah dari ×100), kurangi tiga kali bilangan aslinya.",
        "Ucapkan setiap fakta dengan suara keras beberapa kali.",
        "Hitung loncat 47 dengan suara keras: 47, 94, 141, 188, 235, 282, 329, 376, 423, 470.",
        "Periksa dengan membandingkan fakta tabel 50 yang sepadan.",
      ],
      48: [
        "Pakai pasangan faktor yang nyaman: 6×8, 4×12, 3×16, atau 2×24.",
        "Atau uraikan menjadi 50−2.",
        "Hitung loncat 48 dengan suara keras: 48, 96, 144, 192, 240, 288, 336, 384, 432, 480.",
        "Periksa dengan membagi dua dua kali — hasilnya harus sama dengan fakta tabel 12 yang sepadan.",
      ],
      49: [
        "Gunakan 49×n = 50×n − n: kalikan dengan 50, kurangi bilangan aslinya.",
        "Ingat bahwa 49 = 7×7 — kuadrat dari 7.",
        "Hitung loncat 49 dengan suara keras: 49, 98, 147, 196, 245, 294, 343, 392, 441, 490.",
        "Periksa dengan membandingkan fakta tabel 50 yang sepadan.",
      ],
      50: [
        "Kalikan dengan 100, lalu bagi dua: 50×7 = 700÷2 = 350.",
        "Kaitkan dengan setengah abad: 50 tahun disebut setengah abad.",
        "Hitung loncat 50 dengan suara keras: 50, 100, 150, 200, 250, 300, 350, 400, 450, 500.",
        "Kaitkan dengan persen: 50% = 1/2, hubungan persen yang paling penting.",
      ],
      51: [
        "Gunakan 51×n = 50×n + n: kalikan dengan 50, tambahkan bilangan aslinya.",
        "Atau lipattigakan tabel 17.",
        "Hitung loncat 51 dengan suara keras: 51, 102, 153, 204, 255, 306, 357, 408, 459, 510.",
        "Periksa dengan membandingkan fakta tabel 50 yang sepadan.",
      ],
      52: [
        "Lipatgandakan tabel 13 dua kali: 52×n = 2×(2×(13×n)).",
        "Atau uraikan menjadi 50+2.",
        "Kaitkan dengan kalender: setahun ada 52 minggu, dan satu set kartu berisi 52 kartu.",
        "Hitung loncat 52 dengan suara keras: 52, 104, 156, 208, 260, 312, 364, 416, 468, 520.",
      ],
      53: [
        "Uraikan 53 menjadi 50 + 3: kalikan dengan 50, kalikan dengan 3, jumlahkan hasilnya.",
        "Atau coba 55 − 2.",
        "Ucapkan setiap fakta dengan suara keras beberapa kali.",
        "Hitung loncat 53 dengan suara keras: 53, 106, 159, 212, 265, 318, 371, 424, 477, 530.",
      ],
      54: [
        "Pakai tabel 6 atau tabel 9: 54×n = (6×n)×9 = (9×n)×6.",
        "Kaitkan dengan kubus Rubik: ada 54 kotak kecil (9 di setiap 6 sisinya).",
        "Hitung loncat 54 dengan suara keras: 54, 108, 162, 216, 270, 324, 378, 432, 486, 540.",
        "Periksa dengan uraian 55−1 kalau cara utama terlupa.",
      ],
      55: [
        "Pakai tabel 5 atau tabel 11: 55×n = (5×n)×11 = (11×n)×5.",
        "Ingat bahwa hasilnya selalu berakhiran 0 atau 5.",
        "Hitung loncat 55 dengan suara keras: 55, 110, 165, 220, 275, 330, 385, 440, 495, 550.",
        "Kaitkan dengan bilangan segitiga: 55 = 1+2+3+...+10.",
      ],
      56: [
        "Pakai tabel 7 atau tabel 8: 56×n = (7×n)×8 = (8×n)×7.",
        "Kaitkan dengan fakta dasar 7×8=56 yang layak dihafal luar kepala.",
        "Hitung loncat 56 dengan suara keras: 56, 112, 168, 224, 280, 336, 392, 448, 504, 560.",
        "Periksa dengan uraian 4×14 kalau cara utama terlupa.",
      ],
      57: [
        "Uraikan 57 menjadi 60 − 3: kalikan dengan 60, kurangi tiga kali bilangan aslinya.",
        "Atau lipattigakan tabel 19.",
        "Hitung loncat 57 dengan suara keras: 57, 114, 171, 228, 285, 342, 399, 456, 513, 570.",
        "Periksa dengan membandingkan fakta tabel 60 yang sepadan.",
      ],
      58: [
        "Lipatgandakan tabel 29: 58×n = 2×(29×n).",
        "Atau uraikan menjadi 60−2.",
        "Hitung loncat 58 dengan suara keras: 58, 116, 174, 232, 290, 348, 406, 464, 522, 580.",
        "Periksa dengan membagi dua — hasilnya harus sama dengan fakta tabel 29 yang sepadan.",
      ],
      59: [
        "Gunakan 59×n = 60×n − n: kalikan dengan 60, kurangi bilangan aslinya.",
        "Ucapkan sebagai kebiasaan: 'enam puluh kelompok, dikurangi satu kelompok'.",
        "Kaitkan dengan jam: 59 menit adalah satu menit kurang dari satu jam penuh.",
        "Hitung loncat 59 dengan suara keras: 59, 118, 177, 236, 295, 354, 413, 472, 531, 590.",
      ],
      60: [
        "Tambahkan nol, lalu kalikan dengan 6: 60×7 = 70×6 = 420.",
        "Kaitkan dengan waktu: 60 detik dalam semenit, 60 menit dalam sejam.",
        "Hitung loncat 60 dengan suara keras: 60, 120, 180, 240, 300, 360, 420, 480, 540, 600.",
        "Periksa dengan pasangan faktor mana pun: 60 = 5×12 = 4×15 = 3×20.",
      ],
      61: [
        "Gunakan 61×n = 60×n + n: kalikan dengan 60, tambahkan bilangan aslinya.",
        "Ucapkan setiap fakta dengan suara keras beberapa kali.",
        "Hitung loncat 61 dengan suara keras: 61, 122, 183, 244, 305, 366, 427, 488, 549, 610.",
        "Periksa dengan membandingkan fakta tabel 60 yang sepadan.",
      ],
      62: [
        "Lipatgandakan tabel 31: 62×n = 2×(31×n).",
        "Atau uraikan menjadi 60+2.",
        "Hitung loncat 62 dengan suara keras: 62, 124, 186, 248, 310, 372, 434, 496, 558, 620.",
        "Periksa dengan membagi dua — hasilnya harus sama dengan fakta tabel 31 yang sepadan.",
      ],
      63: [
        "Pakai tabel 7 atau tabel 9: 63×n = (7×n)×9 = (9×n)×7.",
        "Atau uraikan menjadi 60+3.",
        "Hitung loncat 63 dengan suara keras: 63, 126, 189, 252, 315, 378, 441, 504, 567, 630.",
        "Periksa dengan uraian 3×21 kalau cara utama terlupa.",
      ],
      64: [
        "Lipatgandakan tabel 32: 64×n = 2×(32×n).",
        "Ingat 64 = 8×8 sebagai patokan tersendiri.",
        "Kaitkan dengan papan catur: ada 64 kotak (8×8).",
        "Hitung loncat 64 dengan suara keras: 64, 128, 192, 256, 320, 384, 448, 512, 576, 640.",
      ],
      65: [
        "Pakai tabel 5 atau tabel 13: 65×n = (5×n)×13 = (13×n)×5.",
        "Ingat bahwa hasilnya selalu berakhiran 0 atau 5.",
        "Hitung loncat 65 dengan suara keras: 65, 130, 195, 260, 325, 390, 455, 520, 585, 650.",
        "Periksa dengan uraian 60+5.",
      ],
      66: [
        "Lipatgandakan tabel 33: 66×n = 2×(33×n).",
        "Atau pakai 6×11 langsung.",
        "Perhatikan bahwa 66 terdiri dari digit yang sama, seperti 11, 22, 33, 44, dan 55.",
        "Hitung loncat 66 dengan suara keras: 66, 132, 198, 264, 330, 396, 462, 528, 594, 660.",
      ],
      67: [
        "Uraikan 67 menjadi 70 − 3: kalikan dengan 70, kurangi tiga kali bilangan aslinya.",
        "Ucapkan setiap fakta dengan suara keras beberapa kali.",
        "Hitung loncat 67 dengan suara keras: 67, 134, 201, 268, 335, 402, 469, 536, 603, 670.",
        "Periksa dengan membandingkan fakta tabel 70 yang sepadan.",
      ],
      68: [
        "Lipatgandakan tabel 17 dua kali: 68×n = 2×(2×(17×n)).",
        "Atau uraikan menjadi 70−2.",
        "Hitung loncat 68 dengan suara keras: 68, 136, 204, 272, 340, 408, 476, 544, 612, 680.",
        "Periksa lewat tabel 34, dengan membagi hasilnya dua.",
      ],
      69: [
        "Gunakan 69×n = 70×n − n: kalikan dengan 70, kurangi bilangan aslinya.",
        "Atau lipattigakan tabel 23.",
        "Ucapkan sebagai kebiasaan: 'tujuh puluh kelompok, dikurangi satu kelompok'.",
        "Hitung loncat 69 dengan suara keras: 69, 138, 207, 276, 345, 414, 483, 552, 621, 690.",
      ],
      70: [
        "Tambahkan nol, lalu kalikan dengan 7: 70×6 = 60×7 = 420.",
        "Kaitkan dengan ungkapan usia harapan hidup 'tujuh puluh tahun'.",
        "Hitung loncat 70 dengan suara keras: 70, 140, 210, 280, 350, 420, 490, 560, 630, 700.",
        "Periksa dengan membandingkan fakta tabel 7 yang sepadan (tambahkan nol).",
      ],
      71: [
        "Gunakan 71×n = 70×n + n: kalikan dengan 70, tambahkan bilangan aslinya.",
        "Ucapkan setiap fakta dengan suara keras beberapa kali.",
        "Hitung loncat 71 dengan suara keras: 71, 142, 213, 284, 355, 426, 497, 568, 639, 710.",
        "Periksa dengan membandingkan fakta tabel 70 yang sepadan.",
      ],
      72: [
        "Pakai tabel 8 atau tabel 9: 72×n = (8×n)×9 = (9×n)×8.",
        "Kaitkan dengan waktu: 72 jam sama dengan tepat 3 hari.",
        "Hitung loncat 72 dengan suara keras: 72, 144, 216, 288, 360, 432, 504, 576, 648, 720.",
        "Periksa dengan uraian 6×12 kalau cara utama terlupa.",
      ],
      73: [
        "Uraikan 73 menjadi 70 + 3: kalikan dengan 70, kalikan dengan 3, jumlahkan hasilnya.",
        "Atau coba 75 − 2.",
        "Ucapkan setiap fakta dengan suara keras beberapa kali.",
        "Hitung loncat 73 dengan suara keras: 73, 146, 219, 292, 365, 438, 511, 584, 657, 730.",
      ],
      74: [
        "Lipatgandakan tabel 37: 74×n = 2×(37×n).",
        "Atau uraikan menjadi 75−1.",
        "Hitung loncat 74 dengan suara keras: 74, 148, 222, 296, 370, 444, 518, 592, 666, 740.",
        "Periksa dengan membagi dua — hasilnya harus sama dengan fakta tabel 37 yang sepadan.",
      ],
      75: [
        "Kalikan dengan 100, lipattigakan, lalu bagi 4: 75×8 = 800×3÷4 = 600.",
        "Atau pakai tabel 25 lalu lipattigakan hasilnya.",
        "Kaitkan dengan persen: 75% adalah tiga perempat dari keseluruhan.",
        "Hitung loncat 75 dengan suara keras: 75, 150, 225, 300, 375, 450, 525, 600, 675, 750.",
      ],
      76: [
        "Lipatgandakan tabel 19 dua kali: 76×n = 2×(2×(19×n)).",
        "Atau uraikan menjadi 80−4.",
        "Hitung loncat 76 dengan suara keras: 76, 152, 228, 304, 380, 456, 532, 608, 684, 760.",
        "Periksa lewat tabel 38, dengan membagi hasilnya dua.",
      ],
      77: [
        "Pakai tabel 7 atau tabel 11: 77×n = (7×n)×11 = (11×n)×7.",
        "Perhatikan bahwa 77 terdiri dari digit yang sama.",
        "Hitung loncat 77 dengan suara keras: 77, 154, 231, 308, 385, 462, 539, 616, 693, 770.",
        "Periksa dengan uraian 80−3 kalau cara utama terlupa.",
      ],
      78: [
        "Uraikan 78 menjadi 80 − 2: kalikan dengan 80, kurangi dua kali bilangan aslinya.",
        "Atau pakai 6×13 langsung.",
        "Hitung loncat 78 dengan suara keras: 78, 156, 234, 312, 390, 468, 546, 624, 702, 780.",
        "Periksa dengan uraian 3×26 kalau cara utama terlupa.",
      ],
      79: [
        "Gunakan 79×n = 80×n − n: kalikan dengan 80, kurangi bilangan aslinya.",
        "Ucapkan sebagai kebiasaan: 'delapan puluh kelompok, dikurangi satu kelompok'.",
        "Hitung loncat 79 dengan suara keras: 79, 158, 237, 316, 395, 474, 553, 632, 711, 790.",
        "Periksa dengan membandingkan fakta tabel 80 yang sepadan.",
      ],
      80: [
        "Tambahkan nol, lalu kalikan dengan 8: 80×6 = 60×8 = 480.",
        "Kaitkan dengan novel Jules Verne 'Keliling Dunia dalam 80 Hari'.",
        "Hitung loncat 80 dengan suara keras: 80, 160, 240, 320, 400, 480, 560, 640, 720, 800.",
        "Periksa dengan membandingkan fakta tabel 8 yang sepadan (tambahkan nol).",
      ],
      81: [
        "Gunakan 81×n = 80×n + n: kalikan dengan 80, tambahkan bilangan aslinya.",
        "Ingat bahwa 81 = 9×9 — kuadrat dari 9.",
        "Hitung loncat 81 dengan suara keras: 81, 162, 243, 324, 405, 486, 567, 648, 729, 810.",
        "Periksa dengan membandingkan fakta tabel 80 yang sepadan.",
      ],
      82: [
        "Lipatgandakan tabel 41: 82×n = 2×(41×n).",
        "Atau uraikan menjadi 80+2.",
        "Hitung loncat 82 dengan suara keras: 82, 164, 246, 328, 410, 492, 574, 656, 738, 820.",
        "Periksa dengan membagi dua — hasilnya harus sama dengan fakta tabel 41 yang sepadan.",
      ],
      83: [
        "Uraikan 83 menjadi 80 + 3: kalikan dengan 80, kalikan dengan 3, jumlahkan hasilnya.",
        "Atau coba 85 − 2.",
        "Ucapkan setiap fakta dengan suara keras beberapa kali.",
        "Hitung loncat 83 dengan suara keras: 83, 166, 249, 332, 415, 498, 581, 664, 747, 830.",
      ],
      84: [
        "Pakai tabel 7 atau tabel 12: 84×n = (7×n)×12 = (12×n)×7.",
        "Atau uraikan menjadi 85−1.",
        "Hitung loncat 84 dengan suara keras: 84, 168, 252, 336, 420, 504, 588, 672, 756, 840.",
        "Periksa dengan uraian 4×21 kalau cara utama terlupa.",
      ],
      85: [
        "Pakai tabel 5 atau tabel 17: 85×n = (5×n)×17 = (17×n)×5.",
        "Atau uraikan menjadi 90−5.",
        "Hitung loncat 85 dengan suara keras: 85, 170, 255, 340, 425, 510, 595, 680, 765, 850.",
        "Ingat bahwa hasilnya selalu berakhiran 0 atau 5.",
      ],
      86: [
        "Lipatgandakan tabel 43: 86×n = 2×(43×n).",
        "Atau uraikan menjadi 90−4.",
        "Hitung loncat 86 dengan suara keras: 86, 172, 258, 344, 430, 516, 602, 688, 774, 860.",
        "Periksa dengan membagi dua — hasilnya harus sama dengan fakta tabel 43 yang sepadan.",
      ],
      87: [
        "Uraikan 87 menjadi 90 − 3: kalikan dengan 90, kurangi tiga kali bilangan aslinya.",
        "Atau lipattigakan tabel 29.",
        "Hitung loncat 87 dengan suara keras: 87, 174, 261, 348, 435, 522, 609, 696, 783, 870.",
        "Periksa dengan membandingkan fakta tabel 90 yang sepadan.",
      ],
      88: [
        "Pakai tabel 8 atau tabel 11: 88×n = (8×n)×11 = (11×n)×8.",
        "Kaitkan dengan piano: ada 88 tuts pada piano standar.",
        "Perhatikan bahwa 88 terdiri dari digit yang sama.",
        "Hitung loncat 88 dengan suara keras: 88, 176, 264, 352, 440, 528, 616, 704, 792, 880.",
      ],
      89: [
        "Gunakan 89×n = 90×n − n: kalikan dengan 90, kurangi bilangan aslinya.",
        "Ucapkan sebagai kebiasaan: 'sembilan puluh kelompok, dikurangi satu kelompok'.",
        "Hitung loncat 89 dengan suara keras: 89, 178, 267, 356, 445, 534, 623, 712, 801, 890.",
        "Periksa dengan membandingkan fakta tabel 90 yang sepadan.",
      ],
      90: [
        "Tambahkan nol, lalu kalikan dengan 9: 90×6 = 60×9 = 540.",
        "Kaitkan dengan geometri: 90° adalah sudut siku-siku.",
        "Kaitkan dengan sepak bola: pertandingan standar berlangsung 90 menit.",
        "Hitung loncat 90 dengan suara keras: 90, 180, 270, 360, 450, 540, 630, 720, 810, 900.",
      ],
      91: [
        "Gunakan 91×n = 90×n + n: kalikan dengan 90, tambahkan bilangan aslinya.",
        "Atau pakai tabel 7 atau 13 langsung.",
        "Ingat: 91 = 7×13 — bukan bilangan prima, meski sekilas mirip.",
        "Hitung loncat 91 dengan suara keras: 91, 182, 273, 364, 455, 546, 637, 728, 819, 910.",
      ],
      92: [
        "Lipatgandakan tabel 23 dua kali: 92×n = 2×(2×(23×n)).",
        "Atau uraikan menjadi 90+2.",
        "Kaitkan dengan kimia: tabel periodik memiliki 92 unsur alami (sampai uranium).",
        "Hitung loncat 92 dengan suara keras: 92, 184, 276, 368, 460, 552, 644, 736, 828, 920.",
      ],
      93: [
        "Uraikan 93 menjadi 90 + 3: kalikan dengan 90, kalikan dengan 3, jumlahkan hasilnya.",
        "Atau lipattigakan tabel 31.",
        "Hitung loncat 93 dengan suara keras: 93, 186, 279, 372, 465, 558, 651, 744, 837, 930.",
        "Periksa dengan membandingkan fakta tabel 90 yang sepadan.",
      ],
      94: [
        "Lipatgandakan tabel 47: 94×n = 2×(47×n).",
        "Atau uraikan menjadi 100−6.",
        "Hitung loncat 94 dengan suara keras: 94, 188, 282, 376, 470, 564, 658, 752, 846, 940.",
        "Periksa dengan membagi dua — hasilnya harus sama dengan fakta tabel 47 yang sepadan.",
      ],
      95: [
        "Uraikan 95 menjadi 100 − 5: kalikan dengan 100, kurangi lima kali bilangan aslinya.",
        "Atau pakai tabel 5 atau 19 langsung.",
        "Ingat bahwa hasilnya selalu berakhiran 0 atau 5.",
        "Hitung loncat 95 dengan suara keras: 95, 190, 285, 380, 475, 570, 665, 760, 855, 950.",
      ],
      96: [
        "Uraikan 96 menjadi 100 − 4: kalikan dengan 100, kurangi empat kali bilangan aslinya.",
        "Atau pakai pasangan faktor yang nyaman: 8×12 atau 6×16.",
        "Hitung loncat 96 dengan suara keras: 96, 192, 288, 384, 480, 576, 672, 768, 864, 960.",
        "Periksa dengan uraian 2×48 kalau cara utama terlupa.",
      ],
      97: [
        "Uraikan 97 menjadi 100 − 3: kalikan dengan 100, kurangi tiga kali bilangan aslinya.",
        "Ingat bahwa 97 adalah bilangan prima terdekat dengan 100.",
        "Hitung loncat 97 dengan suara keras: 97, 194, 291, 388, 485, 582, 679, 776, 873, 970.",
        "Periksa dengan membandingkan fakta tabel 100 yang sepadan.",
      ],
      98: [
        "Uraikan 98 menjadi 100 − 2: kalikan dengan 100, kurangi dua kali bilangan aslinya.",
        "Atau lipatgandakan tabel 49.",
        "Hitung loncat 98 dengan suara keras: 98, 196, 294, 392, 490, 588, 686, 784, 882, 980.",
        "Periksa dengan membandingkan fakta tabel 100 yang sepadan.",
      ],
      99: [
        "Gunakan 99×n = 100×n − n: kalikan dengan 100, kurangi bilangan aslinya.",
        "Kaitkan dengan harga seperti 'Rp9.990' — trik pemasaran yang memanfaatkan kedekatan dengan 100.",
        "Hitung loncat 99 dengan suara keras: 99, 198, 297, 396, 495, 594, 693, 792, 891, 990.",
        "Periksa dengan membandingkan fakta tabel 100 yang sepadan.",
      ],
      100: [
        "Cukup tambahkan dua nol: 100×7 = 700.",
        "Kaitkan dengan satu abad: 100 tahun adalah satu abad.",
        "Kaitkan dengan suhu: air mendidih pada 100°C.",
        "Hitung loncat 100 dengan suara keras: 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000.",
      ],
    }

export function getNumberMeaning(n: number): string | null {
  return meanings[n] ?? null
}

export function getWhyImportant(n: number): string | null {
  return importance[n] ?? null
}

export function getPatterns(n: number): PatternItem[] {
  return patterns[n] ?? []
}

export function getCommonMistakes(n: number): MistakeItem[] {
  return mistakes[n] ?? []
}

export function getPracticeStrategies(n: number): string[] {
  return strategies[n] ?? []
}

const realLifeExamples: { [key: number]: RealLifeItem[] } = {
      5: [
        { context: "5 sila Pancasila", detail: "Pancasila, dasar negara Indonesia, terdiri dari 5 sila yang menjadi pedoman hidup berbangsa dan bernegara." },
      ],
      7: [
        { context: "7 hari dalam seminggu", detail: "Digunakan di hampir semua sistem kalender di dunia saat ini." },
        { context: "7 benua", detail: "Afrika, Antartika, Asia, Australia, Eropa, Amerika Utara, dan Amerika Selatan — menurut model yang paling umum diajarkan di sekolah." },
      ],
      8: [
        { context: "Laba-laba berkaki 8", detail: "Semua laba-laba dan arakhnida lainnya memiliki 8 kaki, berbeda dari serangga yang memiliki 6 kaki." },
        { context: "Gurita berlengan 8", detail: "Gurita memiliki 8 lengan — asal katanya dari bahasa Yunani 'okto' yang berarti delapan." },
      ],
      9: [
        { context: "Wali Songo", detail: "Wali Songo adalah sembilan wali yang menyebarkan agama Islam di Pulau Jawa, salah satu bagian penting sejarah Indonesia." },
      ],
      10: [
        { context: "Sistem bilangan desimal", detail: "Hampir semua sistem hitung modern berbasis 10, dibangun sepenuhnya dari kelompok sepuluh." },
        { context: "10 jari tangan dan kaki", detail: "Kebanyakan orang memiliki 10 jari tangan dan 10 jari kaki, salah satu alasan sistem desimal begitu tersebar luas secara historis." },
      ],
      12: [
        { context: "12 bulan dalam setahun", detail: "Kalender terbagi menjadi 12 bulan." },
        { context: "Selusin telur", detail: "Telur dan kue sering dijual per lusin — kelompok berisi 12." },
      ],
      14: [
        { context: "14 hari = dua minggu", detail: "Perencanaan dua mingguan sering digunakan dalam jadwal kerja dan sekolah." },
      ],
      15: [
        { context: "15 menit = seperempat jam", detail: "Konsep ini sering digunakan saat membaca jam dan mengatur jadwal." },
      ],
      18: [
        { context: "Usia dewasa di Indonesia", detail: "18 tahun adalah usia dewasa secara hukum di Indonesia." },
      ],
      20: [
        { context: "Penglihatan 20/20", detail: "Penglihatan 20/20 dianggap sebagai standar penglihatan normal dalam tes mata." },
      ],
      21: [
        { context: "Blackjack", detail: "Dalam permainan kartu blackjack, 21 adalah skor target yang ingin dicapai pemain tanpa melebihinya." },
        { context: "Batas usia minum di Amerika Serikat", detail: "Di Amerika Serikat, 21 tahun adalah usia minimum yang sah untuk membeli minuman beralkohol." },
      ],
      22: [
        { context: "Pemain di lapangan sepak bola", detail: "Dalam pertandingan sepak bola, ada 22 pemain di lapangan sekaligus — 11 dari tiap tim." },
      ],
      24: [
        { context: "Jam dalam sehari", detail: "Sehari terdiri dari 24 jam — salah satu patokan sehari-hari yang paling sering digunakan." },
        { context: "Emas 24 karat", detail: "24 karat menandakan emas murni tanpa campuran — kadar tertinggi logam mulia." },
      ],
      25: [
        { context: "Seperempat dari 100", detail: "25 adalah seperempat dari 100 — dasar perhitungan seperempatan dan uang koin 25 sen." },
      ],
      26: [
        { context: "26 huruf alfabet Latin", detail: "Alfabet Latin yang digunakan dalam bahasa Indonesia dan banyak bahasa lain terdiri dari 26 huruf." },
      ],
      28: [
        { context: "Februari 28 hari", detail: "Pada tahun biasa (bukan kabisat), bulan Februari memiliki 28 hari." },
      ],
      30: [
        { context: "Bulan dengan 30 hari", detail: "April, Juni, September, dan November memiliki 30 hari." },
      ],
      32: [
        { context: "Titik beku air dalam Fahrenheit", detail: "Dalam skala Fahrenheit, air membeku tepat pada suhu 32 derajat." },
      ],
      36: [
        { context: "36 inci = 1 yard", detail: "Dalam sistem imperial, 36 inci sama dengan tepat 1 yard." },
      ],
      40: [
        { context: "Empat puluh hari empat puluh malam", detail: "Ungkapan ini muncul dalam banyak kisah, termasuk kisah banjir besar dalam tradisi keagamaan." },
      ],
      45: [
        { context: "Sudut 45 derajat", detail: "45° adalah setengah dari sudut siku-siku (90°), salah satu sudut yang paling sering digunakan dalam geometri dan menggambar." },
        { context: "Kemerdekaan Indonesia 1945", detail: "Indonesia memproklamasikan kemerdekaannya pada 17 Agustus 1945 — tahun 45 memiliki makna sejarah yang sangat penting." },
      ],
      50: [
        { context: "Setengah abad", detail: "50 tahun disebut setengah abad." },
      ],
      52: [
        { context: "Minggu dalam setahun", detail: "Dalam satu tahun biasa ada 52 minggu." },
        { context: "Kartu dalam satu set", detail: "Satu set kartu remi standar berisi 52 kartu." },
      ],
      54: [
        { context: "Kotak kubus Rubik", detail: "Kubus Rubik 3×3 klasik memiliki 54 kotak kecil berwarna — 9 pada setiap 6 sisinya." },
      ],
      60: [
        { context: "Detik dan menit", detail: "Dalam satu menit ada 60 detik, dan dalam satu jam ada 60 menit." },
      ],
      64: [
        { context: "Kotak papan catur", detail: "Papan catur standar memiliki 64 kotak — susunan 8×8." },
      ],
      70: [
        { context: "Ungkapan usia harapan hidup", detail: "Angka 70 tahun sering disebut sebagai perkiraan usia harapan hidup manusia dalam berbagai teks budaya." },
      ],
      72: [
        { context: "72 jam", detail: "72 jam sama dengan tepat 3 hari penuh." },
      ],
      75: [
        { context: "Tiga perempat dari 100", detail: "75% berarti tiga perempat dari keseluruhan — pecahan yang sering dipakai dalam perhitungan persen." },
      ],
      80: [
        { context: "Keliling Dunia dalam 80 Hari", detail: "Novel klasik karya Jules Verne mengisahkan perjalanan keliling dunia dalam waktu tepat 80 hari." },
      ],
      88: [
        { context: "Tuts piano", detail: "Piano standar memiliki 88 tuts — 52 putih dan 36 hitam." },
        { context: "Rasi bintang", detail: "Ahli astronomi secara resmi mengakui 88 rasi bintang di langit malam." },
      ],
      90: [
        { context: "Sudut siku-siku", detail: "90° adalah sudut siku-siku, salah satu patokan terpenting dalam geometri." },
        { context: "Durasi pertandingan sepak bola", detail: "Pertandingan sepak bola standar berlangsung 90 menit (dua babak masing-masing 45 menit)." },
      ],
      92: [
        { context: "Unsur kimia alami", detail: "Di alam terdapat 92 unsur kimia, dari hidrogen sampai uranium." },
      ],
      99: [
        { context: "Psikologi penetapan harga", detail: "Harga seperti Rp9.990 dibanding Rp10.000 adalah trik pemasaran terkenal yang memanfaatkan persepsi kedekatan dengan bilangan bulat." },
      ],
      100: [
        { context: "Satu abad", detail: "100 tahun disebut satu abad." },
        { context: "Titik didih air dalam Celsius", detail: "Dalam skala Celsius, air mendidih tepat pada suhu 100 derajat di permukaan laut." },
      ],
    }

const funFacts: { [key: number]: FunFactItem[] } = {
      1: [
        { fact: "Bilangan 1 bukan bilangan prima maupun komposit — bilangan prima harus memiliki tepat dua faktor positif berbeda, sedangkan 1 hanya punya satu (dirinya sendiri)." },
      ],
      2: [
        { fact: "2 adalah satu-satunya bilangan prima genap — semua bilangan genap lainnya habis dibagi 2 sehingga menjadi bilangan komposit." },
      ],
      3: [
        { fact: "3 adalah bilangan prima ganjil terkecil." },
      ],
      4: [
        { fact: "4 adalah bilangan komposit terkecil — bilangan pertama di atas 1 yang bukan bilangan prima, karena habis dibagi 2." },
      ],
      5: [
        { fact: "5 terletak tepat di tengah antara 0 dan 10, sehingga tabel perkalian 5 selalu sama dengan setengah dari tabel perkalian 10 yang sepadan." },
      ],
      6: [
        { fact: "6 adalah bilangan sempurna terkecil: jumlah pembagi positifnya (1, 2, dan 3) sama dengan bilangan itu sendiri: 1+2+3=6." },
      ],
      7: [
        { fact: "Tujuh adalah bilangan prima Mersenne — sama dengan 2³ − 1, sehingga termasuk keluarga langka bilangan prima yang terkait pangkat dua." },
        { fact: "Minggu tujuh hari berasal dari astronomi Babilonia kuno, yang mengamati tepat 7 benda langit yang bisa dilihat tanpa teleskop." },
      ],
      8: [
        { fact: "8 = 2³, sehingga menjadi bilangan kubik pertama yang lebih besar dari 1." },
      ],
      9: [
        { fact: "9 adalah bilangan kuadrat: 9 = 3 × 3, atau 3²." },
        { fact: "Berapa pun besarnya kelipatan 9, menjumlahkan digitnya berulang kali akhirnya selalu menghasilkan 9 — sifat ini disebut 'akar digital'." },
      ],
      10: [
        { fact: "Kata 'desimal' berasal dari bahasa Latin 'decem' yang berarti sepuluh." },
      ],
      11: [
        { fact: "11 adalah bilangan prima dua digit terkecil." },
      ],
      12: [
        { fact: "12 adalah bilangan sangat komposit: memiliki lebih banyak pembagi (1, 2, 3, 4, 6, 12) dibandingkan bilangan positif lebih kecil mana pun." },
      ],
      13: [
        { fact: "13 sering dianggap angka sial di banyak budaya Barat, ketakutan formalnya disebut triskaidekafobia." },
      ],
      15: [
        { fact: "15 adalah bilangan segitiga: 15 = 1+2+3+4+5, jumlah lima bilangan asli pertama." },
      ],
      16: [
        { fact: "16 = 2⁴, sekaligus juga bilangan kuadrat sempurna karena 16 = 4×4." },
      ],
      21: [
        { fact: "21 = 3 × 7, hasil kali dua tabel perkalian yang lebih kecil yang mungkin sudah dikuasai siswa." },
      ],
      24: [
        { fact: "24 = 4! (faktorial empat) = 1×2×3×4 — banyaknya cara menyusun 4 benda berbeda dalam satu baris." },
      ],
      25: [
        { fact: "25 = 5² — bilangan kuadrat sempurna, sehingga akarnya (5) adalah bilangan bulat." },
      ],
      27: [
        { fact: "'Klub 27' adalah sebutan terkenal untuk para musisi yang meninggal di usia 27 tahun, termasuk Jimi Hendrix dan Amy Winehouse." },
      ],
      28: [
        { fact: "28 adalah bilangan sempurna: jumlah pembagi selain dirinya sendiri (1+2+4+7+14) sama dengan 28." },
      ],
      36: [
        { fact: "36 = 6² — kuadrat sempurna, sekaligus 36 = 1+2+3+...+8, bilangan segitiga kedelapan." },
      ],
      37: [
        { fact: "37×3=111, 37×6=222, 37×9=333 — setiap kelipatan tiga menghasilkan bilangan dengan tiga digit yang sama." },
      ],
      45: [
        { fact: "45 = 1+2+3+...+9 — bilangan segitiga kesembilan." },
      ],
      55: [
        { fact: "55 = 1+2+3+...+10 — bilangan segitiga kesepuluh." },
      ],
      64: [
        { fact: "64 = 2⁶, sekaligus juga 8² — bilangan yang merupakan pangkat dua sekaligus bilangan kuadrat sempurna." },
      ],
      81: [
        { fact: "81 = 9² = 3⁴ — bilangan yang merupakan kuadrat dari sembilan sekaligus pangkat empat dari tiga." },
      ],
      91: [
        { fact: "91 = 7×13 — sering dikira bilangan prima, padahal sebenarnya bilangan komposit." },
      ],
      97: [
        { fact: "97 adalah bilangan prima terbesar yang lebih kecil dari 100." },
      ],
    }

export function getRealLifeExamples(n: number): RealLifeItem[] | null {
  return realLifeExamples[n] ?? null
}

export function getFunFacts(n: number): FunFactItem[] | null {
  return funFacts[n] ?? null
}
