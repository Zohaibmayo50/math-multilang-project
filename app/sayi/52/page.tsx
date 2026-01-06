import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '52 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '52 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '52 çarpım tablosu, elli iki çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
}

export default function Number52Page() {
  return <NumberPage number={52} rangeStart={51} rangeEnd={60} />
}
