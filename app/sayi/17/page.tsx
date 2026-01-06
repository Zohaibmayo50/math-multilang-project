import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '17 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '17 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '17 çarpım tablosu, on yedi çarpım tablosu, 17 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number17Page() {
  return <NumberPage number={17} rangeStart={11} rangeEnd={20} />
}
