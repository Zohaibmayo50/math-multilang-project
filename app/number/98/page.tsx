import NumberPage from '@/app/components/NumberPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '98 Çarpım Tablosu - Kolay Öğrenme Yöntemleri',
  description: '98 çarpım tablosunu öğrenmek için eğlenceli ve etkili yöntemler. Görsel araçlar ve pratik ipuçlarıyla 98 tablosunda ustalaşın.',
  keywords: '98 çarpım tablosu, 98 tablosu, çarpım tablosu 98, matematik, çarpma işlemi',
}

export default function Number98Page() {
  return <NumberPage number={98} rangeStart={1} rangeEnd={10} />
}
