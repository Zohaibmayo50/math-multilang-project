import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '70 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '70 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '70 çarpım tablosu, yetmiş çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
}

export default function Number70Page() {
  return <NumberPage number={70} rangeStart={61} rangeEnd={70} />
}
