import { DimensionKey, DIMENSIONS, ProfileScores, QuestionOption } from '@/types'

export function calculateScores(answers: QuestionOption[]): ProfileScores {
  const raw: Record<string, number> = {}

  for (const dim of DIMENSIONS) {
    raw[dim.key] = 0
  }

  for (const answer of answers) {
    for (const [key, value] of Object.entries(answer.scores)) {
      if (key in raw) {
        raw[key] += value
      }
    }
  }

  return raw as unknown as ProfileScores
}

export function normalizeScores(scores: ProfileScores): ProfileScores {
  // Normalize to 0-100 scale
  // Raw scores can range roughly from -80 to +80 based on question design
  const normalized: Record<string, number> = {}

  for (const dim of DIMENSIONS) {
    const raw = scores[dim.key as DimensionKey]
    // Map from [-80, 80] to [0, 100]
    const mapped = Math.round(((raw + 80) / 160) * 100)
    normalized[dim.key] = Math.max(10, Math.min(95, mapped))
  }

  return normalized as unknown as ProfileScores
}

export function generateLocalInsights(normalized: ProfileScores): {
  insights: string[]
  shadow: string
  archetype: string
} {
  const insights: string[] = []

  // Find top 2 and bottom 2
  const entries = DIMENSIONS.map(d => ({
    key: d.key,
    label: d.label,
    value: normalized[d.key as DimensionKey],
  })).sort((a, b) => b.value - a.value)

  const top = entries.slice(0, 2)
  const bottom = entries.slice(-2)

  insights.push(
    `你的${top[0].label}和${top[1].label}最为突出，这意味着在关系中，你倾向于主动投入并清晰表达自己的需求。`
  )
  insights.push(
    `你的${bottom[0].label}相对内敛，这可能让伴侣有时难以读懂你的真实感受。`
  )
  insights.push(
    `你在关系中的核心驱动力是：在保持自我完整性的同时，寻找深层的情感连接。`
  )

  // Shadow
  const shadow = `你的关系阴影可能在于：当${bottom[1].label}受到挑战时，你会不自觉地用${top[0].label}来防御，` +
    `形成一种"用力过猛"的模式。意识到这一点，是改变的开始。`

  // Archetype based on dominant pattern
  const archetypes = [
    '探索者', '守护者', '连接者', '独行者',
    '调和者', '挑战者', '成长者',
  ]
  const topIdx = DIMENSIONS.findIndex(d => d.key === top[0].key)
  const archetype = archetypes[topIdx] || '探索者'

  return { insights, shadow, archetype }
}
