import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '68 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '68 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '68 çarpım tablosu, altmış sekiz çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
}

export default function Number68Page() {
  return <NumberPage number={68} rangeStart={61} rangeEnd={70} />
}
