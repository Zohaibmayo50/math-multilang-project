import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '54 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '54 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '54 çarpım tablosu, elli dört çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
}

export default function Number54Page() {
  return <NumberPage number={54} rangeStart={51} rangeEnd={60} />
}
