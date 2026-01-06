import NumberPage from '../../components/NumberPage'

export const metadata = {
  title: '3 Çarpım Tablosu | 3 İle Çarpmayı Öğrenin',
  description: '3 çarpım tablosunu basamak toplama desenleri, atlayıcı sayma stratejileri ve pratik ipuclarıyla öğrenin. Kanıtlanmış yöntemlerle bu önemli tabloda ustalaşın.',
}

export default function MultiplicationTableOf3() {
  return <NumberPage number={3} rangeStart={1} rangeEnd={10} />
}
