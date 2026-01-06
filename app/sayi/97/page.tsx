import NumberPage from '@/app/components/NumberPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '97 Çarpım Tablosu - Kolay Öğrenme Yöntemleri',
  description: '97 çarpım tablosunu öğrenmek için eğlenceli ve etkili yöntemler. Görsel araçlar ve pratik ipuçlarıyla 97 tablosunda ustalaşın.',
  keywords: '97 çarpım tablosu, 97 tablosu, çarpım tablosu 97, matematik, çarpma işlemi',
}

export default function Number97Page() {
  return <NumberPage number={97} rangeStart={91} rangeEnd={100} />
}
