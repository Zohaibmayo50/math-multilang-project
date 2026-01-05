import NumberPage from '../../components/NumberPage'

export const metadata = {
  title: '5 Çarpım Tablosu | 5 İle Çarpmayı Öğrenin',
  description: '5 çarpım tablosunu güzel desenleri, para sayma bağlantıları ve saat söyleme uygulamalarıyla öğrenin. Bu son derece pratik tabloda ustalaşın.',
}

export default function MultiplicationTableOf5() {
  return <NumberPage number={5} rangeStart={1} rangeEnd={10} />
}
