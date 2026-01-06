import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '9 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '9 çarpım tablosunu eğlenceli oyunlar, interaktif alıştırmalar ve yazdırılabilir çalışma kağıtları ile öğrenin. Ücretsiz pratik araçları keşfedin.',
  keywords: '9 çarpım tablosu, dokuz çarpım tablosu, matematik oyunları, çarpma alıştırmaları',
}

export default function Number9Page() {
  return <NumberPage number={9} rangeStart={1} rangeEnd={10} />
}
