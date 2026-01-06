import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '78 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '78 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '78 çarpım tablosu, yetmiş sekiz çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
}

export default function Number78Page() {
  return <NumberPage number={78} rangeStart={71} rangeEnd={80} />
}
