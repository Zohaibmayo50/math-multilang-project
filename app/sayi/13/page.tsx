import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '13 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '13 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '13 çarpım tablosu, on üç çarpım tablosu, 13 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number13Page() {
  return <NumberPage number={13} rangeStart={11} rangeEnd={20} />
}
