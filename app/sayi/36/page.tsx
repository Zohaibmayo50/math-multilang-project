import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '36 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '36 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '36 çarpım tablosu, otuz altı çarpım tablosu, 36 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number36Page() {
  return <NumberPage number={36} rangeStart={31} rangeEnd={40} />
}
