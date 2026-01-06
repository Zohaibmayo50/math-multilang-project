import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '42 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '42 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '42 çarpım tablosu, kırk iki çarpım tablosu, 42 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number42Page() {
  return <NumberPage number={42} rangeStart={41} rangeEnd={50} />
}
