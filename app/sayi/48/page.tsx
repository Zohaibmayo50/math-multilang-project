import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '48 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '48 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '48 çarpım tablosu, kırk sekiz çarpım tablosu, 48 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number48Page() {
  return <NumberPage number={48} rangeStart={41} rangeEnd={50} />
}
