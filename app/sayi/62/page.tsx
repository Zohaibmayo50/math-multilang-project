import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '62 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '62 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '62 çarpım tablosu, altmış iki çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
}

export default function Number62Page() {
  return <NumberPage number={62} rangeStart={61} rangeEnd={70} />
}
