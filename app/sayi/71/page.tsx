import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '71 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '71 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '71 çarpım tablosu, yetmiş bir çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
}

export default function Number71Page() {
  return <NumberPage number={71} rangeStart={71} rangeEnd={80} />
}
