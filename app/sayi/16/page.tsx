import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '16 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '16 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '16 çarpım tablosu, on altı çarpım tablosu, 16 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number16Page() {
  return <NumberPage number={16} rangeStart={11} rangeEnd={20} />
}
