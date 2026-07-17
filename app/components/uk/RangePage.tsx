// Thin locale wrapper — all logic lives in UniversalRangePage.tsx
// Do not add content here. To change rendering, edit UniversalRangePage.tsx
import UniversalRangePage from '@/app/components/shared/UniversalRangePage'

interface RangePageProps {
  rangeStart: number
  rangeEnd: number
  nextRangeUrl?: string
  prevRangeUrl?: string
  difficultyLevel: 'beginner' | 'intermediate' | 'advanced'
  difficultyColor: string
}

export default function RangePageUk(props: RangePageProps) {
  return <UniversalRangePage lang="uk" {...props} />
}
