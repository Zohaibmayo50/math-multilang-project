import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '89 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '89 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '89 çarpım tablosu, seksen dokuz çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
}

export default function Number89Page() {
  return <NumberPage number={89} rangeStart={81} rangeEnd={90} />
}
