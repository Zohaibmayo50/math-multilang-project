import NumberPage from '../../components/NumberPage'

export const metadata = {
  title: 'Multiplication Table of 2 | Learn 2 Times Table',
  description: 'Master the multiplication table of 2 with doubling strategies, patterns, and practical examples. Learn the most fundamental multiplication table with confidence.',
}

export default function MultiplicationTableOf2() {
  return <NumberPage number={2} rangeStart={1} rangeEnd={10} />
}
