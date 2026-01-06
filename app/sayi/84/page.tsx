import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '84 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '84 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '84 çarpım tablosu, seksen dört çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
}

export default function Number84Page() {
  return <NumberPage number={84} rangeStart={81} rangeEnd={90} />
}
