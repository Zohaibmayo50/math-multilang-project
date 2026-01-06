import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '41 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '41 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '41 çarpım tablosu, kırk bir çarpım tablosu, 41 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number41Page() {
  return <NumberPage number={41} rangeStart={41} rangeEnd={50} />
}
