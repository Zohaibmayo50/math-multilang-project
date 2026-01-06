import NumberPage from '@/app/components/NumberPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '94 Çarpım Tablosu - Kolay Öğrenme Yöntemleri',
  description: '94 çarpım tablosunu öğrenmek için eğlenceli ve etkili yöntemler. Görsel araçlar ve pratik ipuçlarıyla 94 tablosunda ustalaşın.',
  keywords: '94 çarpım tablosu, 94 tablosu, çarpım tablosu 94, matematik, çarpma işlemi',
}

export default function Number94Page() {
  return <NumberPage number={94} rangeStart={91} rangeEnd={100} />
}
