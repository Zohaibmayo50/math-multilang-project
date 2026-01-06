import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '76 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '76 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '76 çarpım tablosu, yetmiş altı çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
}

export default function Number76Page() {
  return <NumberPage number={76} rangeStart={71} rangeEnd={80} />
}
