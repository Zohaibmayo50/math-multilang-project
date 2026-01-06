import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '60 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '60 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '60 çarpım tablosu, altmış çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
}

export default function Number60Page() {
  return <NumberPage number={60} rangeStart={51} rangeEnd={60} />
}
