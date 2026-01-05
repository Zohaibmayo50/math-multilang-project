import NumberPage from '../../components/NumberPage'

export const metadata = {
  title: 'Multiplication Table of 1 | Learn 1 Times Table',
  description: 'Master the multiplication table of 1 with clear explanations, patterns, and practice strategies. Understand the identity property and build a foundation for all multiplication.',
}

export default function MultiplicationTableOf1() {
  return <NumberPage number={1} rangeStart={1} rangeEnd={10} />
}
