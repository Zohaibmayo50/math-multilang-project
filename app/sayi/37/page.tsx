import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '37 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '37 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '37 çarpım tablosu, otuz yedi çarpım tablosu, 37 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number37Page() {
  return <NumberPage number={37} rangeStart={31} rangeEnd={40} />
}
