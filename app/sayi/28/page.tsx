import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '28 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '28 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '28 çarpım tablosu, yirmi sekiz çarpım tablosu, 28 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number28Page() {
  return <NumberPage number={28} rangeStart={21} rangeEnd={30} />
}
