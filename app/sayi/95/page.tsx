import NumberPage from '@/app/components/NumberPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '95 Çarpım Tablosu - Kolay Öğrenme Yöntemleri',
  description: '95 çarpım tablosunu öğrenmek için eğlenceli ve etkili yöntemler. Görsel araçlar ve pratik ipuçlarıyla 95 tablosunda ustalaşın.',
  keywords: '95 çarpım tablosu, 95 tablosu, çarpım tablosu 95, matematik, çarpma işlemi',
}

export default function Number95Page() {
  return <NumberPage number={95} rangeStart={91} rangeEnd={100} />
}
