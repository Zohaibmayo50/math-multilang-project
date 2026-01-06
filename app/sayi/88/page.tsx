import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '88 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '88 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '88 çarpım tablosu, seksen sekiz çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
}

export default function Number88Page() {
  return <NumberPage number={88} rangeStart={81} rangeEnd={90} />
}
