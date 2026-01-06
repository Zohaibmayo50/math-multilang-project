import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '46 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '46 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '46 çarpım tablosu, kırk altı çarpım tablosu, 46 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number46Page() {
  return <NumberPage number={46} rangeStart={41} rangeEnd={50} />
}
