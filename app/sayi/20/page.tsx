import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '20 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '20 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '20 çarpım tablosu, yirmi çarpım tablosu, 20 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number20Page() {
  return <NumberPage number={20} rangeStart={11} rangeEnd={20} />
}
