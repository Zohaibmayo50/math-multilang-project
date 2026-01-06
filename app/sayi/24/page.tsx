import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '24 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '24 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '24 çarpım tablosu, yirmi dört çarpım tablosu, 24 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number24Page() {
  return <NumberPage number={24} rangeStart={21} rangeEnd={30} />
}
