import NumberPage from '@/app/components/NumberPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '93 Çarpım Tablosu - Kolay Öğrenme Yöntemleri',
  description: '93 çarpım tablosunu öğrenmek için eğlenceli ve etkili yöntemler. Görsel araçlar ve pratik ipuçlarıyla 93 tablosunda ustalaşın.',
  keywords: '93 çarpım tablosu, 93 tablosu, çarpım tablosu 93, matematik, çarpma işlemi',
}

export default function Number93Page() {
  return <NumberPage number={93} rangeStart={1} rangeEnd={10} />
}
