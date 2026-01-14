// Number-specific metadata for Turkish language
export const numberTitles: Record<number, string> = {
  1: '1 Çarpım Tablosu | 1 İle Çarpmayı Öğrenin',
  2: '2 Çarpım Tablosu | 2 İle Çarpmayı Öğrenin',
  3: '3 Çarpım Tablosu | 3 İle Çarpmayı Öğrenin',
  4: '4 Çarpım Tablosu | 4 İle Çarpmayı Öğrenin',
  5: '5 Çarpım Tablosu | 5 İle Çarpmayı Öğrenin',
  6: '6 Çarpım Tablosu | 6 İle Çarpmayı Öğrenin',
  7: '7 Çarpım Tablosu | 7 İle Çarpmayı Öğrenin',
  8: '8 Çarpım Tablosu | 8 İle Çarpmayı Öğrenin',
  9: '9 Çarpım Tablosu | 9 İle Çarpmayı Öğrenin',
  10: '10 Çarpım Tablosu | 10 İle Çarpmayı Öğrenin',
}

// Generate titles for 11-100 (following the pattern)
for (let i = 11; i <= 100; i++) {
  numberTitles[i] = `${i} Çarpım Tablosu | ${i} İle Çarpmayı Öğrenin`
}

export const numberDescriptions: Record<number, string> = {
  1: '1 çarpım tablosunda ustalaşın. Açık açıklamalar, desenler ve pratik stratejilerle özdeşlik özelliğini anlayın ve tüm çarpma işlemleri için temel oluşturun.',
  2: '2 çarpım tablosunda ustalaşın. İkiye katlama tekniği, desenler ve pratik stratejilerle 2 ile çarpmayı kolayca öğrenin.',
  3: '3 çarpım tablosunda ustalaşın. Üçerli gruplama, desenler ve pratik alıştırmalarla 3 ile çarpmayı kolayca öğrenin.',
  4: '4 çarpım tablosunda ustalaşın. İki kez ikiye katlama tekniği ve pratik stratejilerle 4 ile çarpmayı kolayca öğrenin.',
  5: '5 çarpım tablosunda ustalaşın. 5\'erli gruplama, saat okuma benzerlikleri ve pratik alıştırmalarla kolay öğrenin.',
  6: '6 çarpım tablosunda ustalaşın. 6\'lı gruplama teknikleri, desenler ve pratik stratejilerle 6 ile çarpmayı öğrenin.',
  7: '7 çarpım tablosunda ustalaşın. 7 ile çarpma stratejileri, desenler ve pratik alıştırmalarla zorlanmadan öğrenin.',
  8: '8 çarpım tablosunda ustalaşın. İki kez dört, iki kez iki kez iki stratejileri ve pratik tekniklerle öğrenin.',
  9: '9 çarpım tablosunda ustalaşın. Parmak tekniği, 10 eksi 1 stratejisi ve desenlerle kolay öğrenin.',
  10: '10 Çarpım tablosunda ustalaşın. Sıfır ekleme kuralı ve pratik stratejilerle en kolay çarpım tablosunu öğrenin.',
}

// Generate descriptions for 11-100 (generic pattern)
for (let i = 11; i <= 100; i++) {
  numberDescriptions[i] = `${i} çarpım tablosunda ustalaşın. Pratik alıştırmalar, desenler ve stratejilerle ${i} ile çarpmayı kolayca öğrenin.`
}

export const numberSpecialProperties: Record<number, string> = {
  1: 'Özdeşlik Özelliği',
  2: 'İkiye Katlama',
  3: 'Üçerli Gruplama',
  4: 'İki Kez İkiye Katlama',
  5: 'Beşerli Sayma',
  6: 'Çift Sayı Desenleri',
  7: 'Yedi Günlük Hafta',
  8: 'Sekizlik Sistemler',
  9: 'Parmak Tekniği',
  10: 'Onluk Sistem',
}

// Generic property for higher numbers
for (let i = 11; i <= 100; i++) {
  numberSpecialProperties[i] = `${i} ile Çarpma`
}
