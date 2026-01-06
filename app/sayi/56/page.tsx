import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '56 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '56 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '56 çarpım tablosu, elli altı çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
}

export default function Number56Page() {
  return <NumberPage number={56} rangeStart={51} rangeEnd={60} />
}
