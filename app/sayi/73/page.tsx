import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '73 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '73 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '73 çarpım tablosu, yetmiş üç çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
}

export default function Number73Page() {
  return <NumberPage number={73} rangeStart={71} rangeEnd={80} />
}
