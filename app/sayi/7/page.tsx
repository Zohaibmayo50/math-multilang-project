import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '7 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '7 çarpım tablosunu eğlenceli oyunlar, interaktif alıştırmalar ve yazdırılabilir çalışma kağıtları ile öğrenin. Ücretsiz pratik araçları keşfedin.',
  keywords: '7 çarpım tablosu, yedi çarpım tablosu, matematik oyunları, çarpma alıştırmaları',
}

export default function Number7Page() {
  return <NumberPage number={7} rangeStart={1} rangeEnd={10} />
}
