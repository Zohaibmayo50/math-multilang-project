import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '45 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '45 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '45 çarpım tablosu, kırk beş çarpım tablosu, 45 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number45Page() {
  return <NumberPage number={45} rangeStart={41} rangeEnd={50} />
}
