import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '49 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '49 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '49 çarpım tablosu, kırk dokuz çarpım tablosu, 49 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number49Page() {
  return <NumberPage number={49} rangeStart={41} rangeEnd={50} />
}
