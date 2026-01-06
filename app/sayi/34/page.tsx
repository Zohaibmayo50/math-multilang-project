import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '34 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '34 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '34 çarpım tablosu, otuz dört çarpım tablosu, 34 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number34Page() {
  return <NumberPage number={34} rangeStart={31} rangeEnd={40} />
}
