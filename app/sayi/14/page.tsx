import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '14 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '14 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '14 çarpım tablosu, on dört çarpım tablosu, 14 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number14Page() {
  return <NumberPage number={14} rangeStart={11} rangeEnd={20} />
}
