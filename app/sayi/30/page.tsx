import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '30 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '30 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '30 çarpım tablosu, otuz çarpım tablosu, 30 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number30Page() {
  return <NumberPage number={30} rangeStart={21} rangeEnd={30} />
}
