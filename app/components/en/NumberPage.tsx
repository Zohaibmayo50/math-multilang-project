// Thin locale wrapper — all logic lives in UniversalNumberPage.tsx
// Do not add content here. To change rendering, edit UniversalNumberPage.tsx
import UniversalNumberPage from '@/app/components/shared/UniversalNumberPage'

interface NumberPageProps {
  number: number
  rangeStart: number
  rangeEnd: number
}

export default function NumberPageEn({ number, rangeStart, rangeEnd }: NumberPageProps) {
  return <UniversalNumberPage lang="en" number={number} rangeStart={rangeStart} rangeEnd={rangeEnd} />
}
