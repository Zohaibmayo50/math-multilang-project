import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '83 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '83 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '83 çarpım tablosu, seksen üç çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
}

export default function Number83Page() {
  return <NumberPage number={83} rangeStart={81} rangeEnd={90} />
}
