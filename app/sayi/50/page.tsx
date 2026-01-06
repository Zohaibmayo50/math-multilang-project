import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '50 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '50 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '50 çarpım tablosu, elli çarpım tablosu, 50 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number50Page() {
  return <NumberPage number={50} rangeStart={41} rangeEnd={50} />
}
