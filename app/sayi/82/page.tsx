import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '82 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '82 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '82 çarpım tablosu, seksen iki çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
}

export default function Number82Page() {
  return <NumberPage number={82} rangeStart={81} rangeEnd={90} />
}
