import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '22 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '22 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '22 çarpım tablosu, yirmi iki çarpım tablosu, 22 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number22Page() {
  return <NumberPage number={22} rangeStart={21} rangeEnd={30} />
}
