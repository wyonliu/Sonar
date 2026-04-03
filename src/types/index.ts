export interface QuestionOption {
  id: string
  text: string
  scores: Record<string, number>
}

export interface Question {
  id: string
  chapter: number
  scene_text: string
  options: QuestionOption[]
  media_hint?: string
}

export interface Chapter {
  id: number
  title: string
  subtitle: string
  description: string
  questions: Question[]
}

export interface QuestionsData {
  version: string
  chapters: Chapter[]
}

export const DIMENSIONS = [
  { key: 'intimacy_pace', label: '亲密节奏', labelShort: '亲密' },
  { key: 'expression_intensity', label: '表达强度', labelShort: '表达' },
  { key: 'autonomy_need', label: '独立需求', labelShort: '独立' },
  { key: 'security_baseline', label: '安全基线', labelShort: '安全' },
  { key: 'conflict_style', label: '冲突风格', labelShort: '冲突' },
  { key: 'commitment_depth', label: '承诺深度', labelShort: '承诺' },
  { key: 'growth_orientation', label: '成长导向', labelShort: '成长' },
] as const

export type DimensionKey = typeof DIMENSIONS[number]['key']

export interface ProfileScores {
  intimacy_pace: number
  expression_intensity: number
  autonomy_need: number
  security_baseline: number
  conflict_style: number
  commitment_depth: number
  growth_orientation: number
}

export interface ProfileResult {
  scores: ProfileScores
  normalizedScores: ProfileScores
  selfPerception?: Record<string, number>
  insights: string[]
  shadow: string
  story: string
  archetype: string
}
