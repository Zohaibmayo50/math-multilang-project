import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '23 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '23 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '23 çarpım tablosu, yirmi üç çarpım tablosu, 23 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number23Page() {
  return <NumberPage number={23} rangeStart={21} rangeEnd={30} />
}
