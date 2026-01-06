import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '69 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '69 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '69 çarpım tablosu, altmış dokuz çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
}

export default function Number69Page() {
  return <NumberPage number={69} rangeStart={61} rangeEnd={70} />
}
