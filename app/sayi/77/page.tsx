import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '77 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '77 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '77 çarpım tablosu, yetmiş yedi çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
}

export default function Number77Page() {
  return <NumberPage number={77} rangeStart={71} rangeEnd={80} />
}
