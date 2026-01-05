import NumberPage from '../../components/NumberPage'

export const metadata = {
  title: '1 Çarpım Tablosu | 1 İle Çarpmayı Öğrenin',
  description: '1 çarpım tablosunda ustalaşın. Açık açıklamalar, desenler ve pratik stratejilerle özdeşlik özelliğini anlayın ve tüm çarpma işlemleri için temel oluşturun.',
}

export default function MultiplicationTableOf1() {
  return <NumberPage number={1} rangeStart={1} rangeEnd={10} />
}
