import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '74 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '74 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '74 çarpım tablosu, yetmiş dört çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
}

export default function Number74Page() {
  return <NumberPage number={74} rangeStart={71} rangeEnd={80} />
}
