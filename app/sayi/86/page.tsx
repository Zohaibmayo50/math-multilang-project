import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '86 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '86 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '86 çarpım tablosu, seksen altı çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
}

export default function Number86Page() {
  return <NumberPage number={86} rangeStart={81} rangeEnd={90} />
}
