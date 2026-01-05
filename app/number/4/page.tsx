import NumberPage from '../../components/NumberPage'

export const metadata = {
  title: '4 Çarpım Tablosu | 4 İle Çarpmayı Öğrenin',
  description: '4 çarpım tablosunda ikiye katlama teknikleri, geometrik desenler ve etkili pratik yöntemleri kullanarak ustalaşın. Güçlü çarpma becerileri oluşturun.',
}

export default function MultiplicationTableOf4() {
  return <NumberPage number={4} rangeStart={1} rangeEnd={10} />
}
