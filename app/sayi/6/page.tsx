import NumberPage from '@/app/components/NumberPage'

export const metadata = {
  title: '6 Çarpım Tablosu - Eğlenceli Oyunlar ve Pratik Egzersizleri',
  description: '6 çarpım tablosunu eğlenceli oyunlar, interaktif alıştırmalar ve yazdırılabilir çalışma kağıtları ile öğrenin. Ücretsiz pratik araçları keşfedin.',
  keywords: '6 çarpım tablosu, altı çarpım tablosu, matematik oyunları, çarpma alıştırmaları',
}

export default function Number6Page() {
  return <NumberPage number={6} rangeStart={1} rangeEnd={10} />
}
