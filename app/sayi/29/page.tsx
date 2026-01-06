import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '29 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '29 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '29 çarpım tablosu, yirmi dokuz çarpım tablosu, 29 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number29Page() {
  return <NumberPage number={29} rangeStart={21} rangeEnd={30} />
}
