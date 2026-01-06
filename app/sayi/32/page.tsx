import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '32 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '32 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '32 çarpım tablosu, otuz iki çarpım tablosu, 32 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number32Page() {
  return <NumberPage number={32} rangeStart={31} rangeEnd={40} />
}
