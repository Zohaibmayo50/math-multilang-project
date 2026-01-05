import NumberPage from '../../components/NumberPage'

export const metadata = {
  title: '2 Çarpım Tablosu | 2 İle Çarpmayı Öğrenin',
  description: '2 çarpım tablosunda ustalaşın. İkiye katlama stratejileri, desenler ve pratik örneklerle en temel çarpım tablosunu güvenle öğrenin.',
}

export default function MultiplicationTableOf2() {
  return <NumberPage number={2} rangeStart={1} rangeEnd={10} />
}
