import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '21 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '21 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '21 çarpım tablosu, yirmi bir çarpım tablosu, 21 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number21Page() {
  return <NumberPage number={21} rangeStart={21} rangeEnd={30} />
}
