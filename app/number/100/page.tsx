import NumberPage from '@/app/components/NumberPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '100 Çarpım Tablosu - Kolay Öğrenme Yöntemleri',
  description: '100 çarpım tablosunu öğrenmek için eğlenceli ve etkili yöntemler. Görsel araçlar ve pratik ipuçlarıyla 100 tablosunda ustalaşın.',
  keywords: '100 çarpım tablosu, 100 tablosu, çarpım tablosu 100, matematik, çarpma işlemi',
}

export default function Number100Page() {
  return <NumberPage number={100} rangeStart={1} rangeEnd={10} />
}
