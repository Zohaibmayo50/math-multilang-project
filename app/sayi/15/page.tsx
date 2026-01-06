import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '15 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '15 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '15 çarpım tablosu, on beş çarpım tablosu, 15 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number15Page() {
  return <NumberPage number={15} rangeStart={11} rangeEnd={20} />
}
