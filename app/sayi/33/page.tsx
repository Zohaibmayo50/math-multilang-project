import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '33 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '33 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '33 çarpım tablosu, otuz üç çarpım tablosu, 33 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number33Page() {
  return <NumberPage number={33} rangeStart={31} rangeEnd={40} />
}
