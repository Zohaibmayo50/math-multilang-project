import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '51 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '51 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '51 çarpım tablosu, elli bir çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
}

export default function Number51Page() {
  return <NumberPage number={51} rangeStart={51} rangeEnd={60} />
}
