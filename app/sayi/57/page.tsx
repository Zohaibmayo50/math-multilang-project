import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '57 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '57 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '57 çarpım tablosu, elli yedi çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
}

export default function Number57Page() {
  return <NumberPage number={57} rangeStart={51} rangeEnd={60} />
}
