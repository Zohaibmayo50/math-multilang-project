import NumberPage from '@/app/components/NumberPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '91 Çarpım Tablosu - Kolay Öğrenme Yöntemleri',
  description: '91 çarpım tablosunu öğrenmek için eğlenceli ve etkili yöntemler. Görsel araçlar ve pratik ipuçlarıyla 91 tablosunda ustalaşın.',
  keywords: '91 çarpım tablosu, 91 tablosu, çarpım tablosu 91, matematik, çarpma işlemi',
}

export default function Number91Page() {
  return <NumberPage number={91} rangeStart={1} rangeEnd={10} />
}
