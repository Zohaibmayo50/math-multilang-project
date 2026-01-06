import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '80 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '80 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '80 çarpım tablosu, seksen çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
}

export default function Number80Page() {
  return <NumberPage number={80} rangeStart={71} rangeEnd={80} />
}
