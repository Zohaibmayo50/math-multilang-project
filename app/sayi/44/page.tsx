import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '44 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '44 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '44 çarpım tablosu, kırk dört çarpım tablosu, 44 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number44Page() {
  return <NumberPage number={44} rangeStart={41} rangeEnd={50} />
}
