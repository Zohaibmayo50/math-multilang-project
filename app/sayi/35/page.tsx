import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '35 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '35 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '35 çarpım tablosu, otuz beş çarpım tablosu, 35 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number35Page() {
  return <NumberPage number={35} rangeStart={31} rangeEnd={40} />
}
