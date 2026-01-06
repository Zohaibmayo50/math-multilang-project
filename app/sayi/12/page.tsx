import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '12 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '12 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '12 çarpım tablosu, on iki çarpım tablosu, 12 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number12Page() {
  return <NumberPage number={12} rangeStart={11} rangeEnd={20} />
}
