import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '90 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '90 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '90 çarpım tablosu, doksan çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
}

export default function Number90Page() {
  return <NumberPage number={90} rangeStart={81} rangeEnd={90} />
}
