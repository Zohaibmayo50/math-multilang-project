import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '72 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '72 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '72 çarpım tablosu, yetmiş iki çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
}

export default function Number72Page() {
  return <NumberPage number={72} rangeStart={71} rangeEnd={80} />
}
