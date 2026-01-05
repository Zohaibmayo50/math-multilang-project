import NumberPage from '../../components/NumberPage'

export const metadata = {
  title: 'Multiplication Table of 5 | Learn 5 Times Table',
  description: 'Learn the multiplication table of 5 with beautiful patterns, money-counting connections, and time-telling applications. Master this highly practical table.',
}

export default function MultiplicationTableOf5() {
  return <NumberPage number={5} rangeStart={1} rangeEnd={10} />
}
