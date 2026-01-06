import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '11 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '11 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '11 çarpım tablosu, on bir çarpım tablosu, 11 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number11Page() {
  return <NumberPage number={11} rangeStart={11} rangeEnd={20} />
}
