import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '18 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '18 çarpım tablosunu eğlenceli oyunlar ve interaktif alıştırmalarla öğrenin. Çocuklar için görsel yardımcılar, pratik ipuçları ve kolay ezber teknikleri.',
  keywords: '18 çarpım tablosu, on sekiz çarpım tablosu, 18 ile çarpma, çarpım tablosu öğrenme, matematik oyunları',
}

export default function Number18Page() {
  return <NumberPage number={18} rangeStart={11} rangeEnd={20} />
}
