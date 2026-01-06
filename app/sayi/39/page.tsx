import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '39 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '39 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '39 çarpım tablosu, otuz dokuz çarpım tablosu, 39 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number39Page() {
  return <NumberPage number={39} rangeStart={31} rangeEnd={40} />
}
