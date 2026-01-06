import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '26 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '26 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '26 çarpım tablosu, yirmi altı çarpım tablosu, 26 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number26Page() {
  return <NumberPage number={26} rangeStart={21} rangeEnd={30} />
}
