import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '81 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '81 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '81 çarpım tablosu, seksen bir çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
}

export default function Number81Page() {
  return <NumberPage number={81} rangeStart={81} rangeEnd={90} />
}
