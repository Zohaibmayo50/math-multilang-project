import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '66 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '66 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '66 çarpım tablosu, altmış altı çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
}

export default function Number66Page() {
  return <NumberPage number={66} rangeStart={61} rangeEnd={70} />
}
