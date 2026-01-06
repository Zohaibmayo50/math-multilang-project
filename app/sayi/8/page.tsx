import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '8 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '8 çarpım tablosunu eğlenceli oyunlar, interaktif alıştırmalar ve yazdırılabilir çalışma kağıtları ile öğrenin. Ücretsiz pratik araçları keşfedin.',
  keywords: '8 çarpım tablosu, sekiz çarpım tablosu, matematik oyunları, çarpma alıştırmaları',
}

export default function Number8Page() {
  return <NumberPage number={8} rangeStart={1} rangeEnd={10} />
}
