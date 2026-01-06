import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '25 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '25 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '25 çarpım tablosu, yirmi beş çarpım tablosu, 25 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number25Page() {
  return <NumberPage number={25} rangeStart={21} rangeEnd={30} />
}
