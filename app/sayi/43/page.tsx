import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '43 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '43 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '43 çarpım tablosu, kırk üç çarpım tablosu, 43 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number43Page() {
  return <NumberPage number={43} rangeStart={41} rangeEnd={50} />
}
