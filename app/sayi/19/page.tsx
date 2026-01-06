import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '19 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '19 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '19 çarpım tablosu, on dokuz çarpım tablosu, 19 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number19Page() {
  return <NumberPage number={19} rangeStart={11} rangeEnd={20} />
}
