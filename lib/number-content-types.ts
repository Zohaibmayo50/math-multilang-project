/**
 * Shared shapes for per-number curated content, used by all `lib/number-content-*.ts`
 * locale modules and consumed by `app/components/shared/UniversalNumberPage.tsx`.
 */

export interface PatternItem {
  title: string
  description: string
}

export interface MistakeItem {
  mistake: string
  solution: string
}

export interface RealLifeItem {
  context: string
  detail: string
}

export interface FunFactItem {
  fact: string
}
