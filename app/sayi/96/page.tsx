import NumberPage from '@/app/components/NumberPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '96 Çarpım Tablosu - Kolay Öğrenme Yöntemleri',
  description: '96 çarpım tablosunu öğrenmek için eğlenceli ve etkili yöntemler. Görsel araçlar ve pratik ipuçlarıyla 96 tablosunda ustalaşın.',
  keywords: '96 çarpım tablosu, 96 tablosu, çarpım tablosu 96, matematik, çarpma işlemi',
}

export default function Number96Page() {
  return <NumberPage number={96} rangeStart={91} rangeEnd={100} />
}
