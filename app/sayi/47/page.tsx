import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '47 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '47 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '47 çarpım tablosu, kırk yedi çarpım tablosu, 47 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number47Page() {
  return <NumberPage number={47} rangeStart={41} rangeEnd={50} />
}
