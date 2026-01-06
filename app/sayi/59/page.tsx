import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '59 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '59 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '59 çarpım tablosu, elli dokuz çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
}

export default function Number59Page() {
  return <NumberPage number={59} rangeStart={51} rangeEnd={60} />
}
