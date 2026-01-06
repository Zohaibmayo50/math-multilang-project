import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '64 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '64 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için mükemmel!',
  keywords: '64 çarpım tablosu, altmış dört çarpım tablosu, matematik oyunları, çarpım tablosu öğrenme',
}

export default function Number64Page() {
  return <NumberPage number={64} rangeStart={61} rangeEnd={70} />
}
