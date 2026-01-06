import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '31 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '31 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '31 çarpım tablosu, otuz bir çarpım tablosu, 31 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number31Page() {
  return <NumberPage number={31} rangeStart={31} rangeEnd={40} />
}
