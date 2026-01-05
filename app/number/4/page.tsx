import NumberPage from '../../components/NumberPage'

export const metadata = {
  title: 'Multiplication Table of 4 | Learn 4 Times Table',
  description: 'Master the multiplication table of 4 using doubling techniques, geometric patterns, and effective practice methods. Build strong multiplication skills.',
}

export default function MultiplicationTableOf4() {
  return <NumberPage number={4} rangeStart={1} rangeEnd={10} />
}
