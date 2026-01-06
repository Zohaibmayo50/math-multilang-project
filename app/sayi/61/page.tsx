import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '61 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '61 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '61 çarpım tablosu, altmış bir çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
}

export default function Number61Page() {
  return <NumberPage number={61} rangeStart={61} rangeEnd={70} />
}
