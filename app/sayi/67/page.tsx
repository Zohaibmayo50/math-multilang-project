import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '67 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '67 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '67 çarpım tablosu, altmış yedi çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
}

export default function Number67Page() {
  return <NumberPage number={67} rangeStart={61} rangeEnd={70} />
}
