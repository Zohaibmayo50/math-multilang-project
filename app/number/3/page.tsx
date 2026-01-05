import NumberPage from '../../components/NumberPage'

export const metadata = {
  title: 'Multiplication Table of 3 | Learn 3 Times Table',
  description: 'Learn the multiplication table of 3 with digit sum patterns, skip counting strategies, and practical tips. Master this essential table with proven methods.',
}

export default function MultiplicationTableOf3() {
  return <NumberPage number={3} rangeStart={1} rangeEnd={10} />
}
