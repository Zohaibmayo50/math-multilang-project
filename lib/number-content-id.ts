// No curated per-number data exists in app/components/id/NumberPage.tsx (id uses
// fixed generic template content instead of per-number data). Per product decision,
// id's generic sections are NOT ported into the universal template — all functions
// return null/[] unconditionally.
import type { PatternItem, MistakeItem, RealLifeItem, FunFactItem } from './number-content-types'

export function getNumberMeaning(_n: number): string | null {
  return null
}

export function getWhyImportant(_n: number): string | null {
  return null
}

export function getPatterns(_n: number): PatternItem[] {
  return []
}

export function getCommonMistakes(_n: number): MistakeItem[] {
  return []
}

export function getPracticeStrategies(_n: number): string[] {
  return []
}

export function getRealLifeExamples(_n: number): RealLifeItem[] | null {
  return null
}

export function getFunFacts(_n: number): FunFactItem[] | null {
  return null
}
