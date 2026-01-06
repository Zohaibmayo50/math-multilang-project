import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '58 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '58 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '58 çarpım tablosu, elli sekiz çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
}

export default function Number58Page() {
  return <NumberPage number={58} rangeStart={51} rangeEnd={60} />
}
