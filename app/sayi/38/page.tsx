import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '38 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '38 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '38 çarpım tablosu, otuz sekiz çarpım tablosu, 38 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number38Page() {
  return <NumberPage number={38} rangeStart={31} rangeEnd={40} />
}
