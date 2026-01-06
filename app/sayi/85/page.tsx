import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '85 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '85 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '85 çarpım tablosu, seksen beş çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
}

export default function Number85Page() {
  return <NumberPage number={85} rangeStart={81} rangeEnd={90} />
}
