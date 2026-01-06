import NumberPage from '@/app/components/NumberPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '92 Çarpım Tablosu - Kolay Öğrenme Yöntemleri',
  description: '92 çarpım tablosunu öğrenmek için eğlenceli ve etkili yöntemler. Görsel araçlar ve pratik ipuçlarıyla 92 tablosunda ustalaşın.',
  keywords: '92 çarpım tablosu, 92 tablosu, çarpım tablosu 92, matematik, çarpma işlemi',
}

export default function Number92Page() {
  return <NumberPage number={92} rangeStart={1} rangeEnd={10} />
}
