import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '40 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '40 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '40 çarpım tablosu, kırk çarpım tablosu, 40 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number40Page() {
  return <NumberPage number={40} rangeStart={31} rangeEnd={40} />
}
