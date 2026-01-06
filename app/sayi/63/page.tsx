import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '63 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '63 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '63 çarpım tablosu, altmış üç çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
}

export default function Number63Page() {
  return <NumberPage number={63} rangeStart={61} rangeEnd={70} />
}
