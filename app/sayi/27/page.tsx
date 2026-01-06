import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '27 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '27 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '27 çarpım tablosu, yirmi yedi çarpım tablosu, 27 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number27Page() {
  return <NumberPage number={27} rangeStart={21} rangeEnd={30} />
}
