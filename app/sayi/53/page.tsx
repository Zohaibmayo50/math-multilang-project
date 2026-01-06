import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '53 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '53 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '53 çarpım tablosu, elli üç çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
}

export default function Number53Page() {
  return <NumberPage number={53} rangeStart={51} rangeEnd={60} />
}
