import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '65 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '65 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '65 çarpım tablosu, altmış beş çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
}

export default function Number65Page() {
  return <NumberPage number={65} rangeStart={61} rangeEnd={70} />
}
