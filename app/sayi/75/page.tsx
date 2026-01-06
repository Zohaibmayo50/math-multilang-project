import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '75 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '75 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '75 çarpım tablosu, yetmiş beş çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
}

export default function Number75Page() {
  return <NumberPage number={75} rangeStart={71} rangeEnd={80} />
}
