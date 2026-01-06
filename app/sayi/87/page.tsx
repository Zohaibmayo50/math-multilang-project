import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '87 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '87 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '87 çarpım tablosu, seksen yedi çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
}

export default function Number87Page() {
  return <NumberPage number={87} rangeStart={81} rangeEnd={90} />
}
