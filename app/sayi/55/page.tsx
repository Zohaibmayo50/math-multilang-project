import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '55 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '55 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '55 çarpım tablosu, elli beş çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
}

export default function Number55Page() {
  return <NumberPage number={55} rangeStart={51} rangeEnd={60} />
}
