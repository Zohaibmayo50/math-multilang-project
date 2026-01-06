import NumberPage from '@/app/components/NumberPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '99 Çarpım Tablosu - Kolay Öğrenme Yöntemleri',
  description: '99 çarpım tablosunu öğrenmek için eğlenceli ve etkili yöntemler. Görsel araçlar ve pratik ipuçlarıyla 99 tablosunda ustalaşın.',
  keywords: '99 çarpım tablosu, 99 tablosu, çarpım tablosu 99, matematik, çarpma işlemi',
}

export default function Number99Page() {
  return <NumberPage number={99} rangeStart={1} rangeEnd={10} />
}
