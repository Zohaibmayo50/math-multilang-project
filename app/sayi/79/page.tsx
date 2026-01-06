import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '79 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '79 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '79 çarpım tablosu, yetmiş dokuz çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
}

export default function Number79Page() {
  return <NumberPage number={79} rangeStart={71} rangeEnd={80} />
}
