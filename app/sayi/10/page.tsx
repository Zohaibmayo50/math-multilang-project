import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '10 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '10 çarpım tablosunu eğlenceli oyunlar, interaktif alıştırmalar ve yazdırılabilir çalışma kağıtları ile öğrenin. Ücretsiz pratik araçları keşfedin.',
  keywords: '10 çarpım tablosu, on çarpım tablosu, matematik oyunları, çarpma alıştırmaları',
}

export default function Number10Page() {
  return <NumberPage number={10} rangeStart={1} rangeEnd={10} />
}
