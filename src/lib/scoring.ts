import { DimensionKey, DIMENSIONS, ProfileScores, QuestionOption } from '@/types'
import { CHARACTER_STORIES } from '@/content/characters'
import { calculateDimensionRanges, normalizeGameScores } from '@/lib/gameEngine'

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

export function normalizeScores(scores: ProfileScores, characterId?: string): ProfileScores {
  // Try to use actual ranges from story data
  const storyId = characterId || 'luchen'
  const story = CHARACTER_STORIES[storyId]

  if (story) {
    const ranges = calculateDimensionRanges(story)
    const rawRecord: Record<string, number> = {}
    for (const dim of DIMENSIONS) {
      rawRecord[dim.key] = scores[dim.key as DimensionKey] || 0
    }
    const normalized = normalizeGameScores(rawRecord, ranges)

    // Ensure all dimensions present
    const result: Record<string, number> = {}
    for (const dim of DIMENSIONS) {
      result[dim.key] = normalized[dim.key] ?? 50
    }
    return result as unknown as ProfileScores
  }

  // Fallback: use estimated ranges
  const normalized: Record<string, number> = {}
  for (const dim of DIMENSIONS) {
    const raw = scores[dim.key as DimensionKey]
    // Estimate range based on ~12 choices * ~6 avg score = [-72, 72]
    const mapped = Math.round(((raw + 72) / 144) * 100)
    normalized[dim.key] = Math.max(5, Math.min(95, mapped))
  }

  return normalized as unknown as ProfileScores
}

const DIMENSION_LABELS: Record<string, string> = {
  intimacy_pace: '亲密节奏',
  expression_intensity: '表达强度',
  autonomy_need: '独立需求',
  security_baseline: '安全基线',
  conflict_style: '冲突风格',
  commitment_depth: '承诺深度',
  growth_orientation: '成长导向',
}

const SHADOW_TEMPLATES: Record<string, { high: string; low: string }> = {
  intimacy_pace: {
    high: '你以为自己在亲密关系中是慢热的，但实际上你一旦感到安全就会迅速投入——这种"快进"模式可能让你忽略了一些早期的警示信号。',
    low: '你觉得自己是热情主动的人，但在关键时刻你却下意识地保持距离——这种无意识的退缩可能让对方感到困惑。',
  },
  expression_intensity: {
    high: '你以为自己很含蓄，但你的行为其实在大声表达着你的需求——当对方没有回应时，你感受到的失落远比你承认的要强烈。',
    low: '你觉得自己足够坦诚，但面对真正重要的事情时，你选择了沉默——那些没说出口的话可能正在你们之间堆积。',
  },
  autonomy_need: {
    high: '你以为自己很需要陪伴，但当对方真的一直在身边时，你又会感到窒息——你需要的不是更多的在一起，而是更高质量的在一起。',
    low: '你觉得自己是独立的，但你对对方的回应其实有很强的依赖——"不在乎"可能只是你保护自己的方式。',
  },
  security_baseline: {
    high: '你以为自己缺乏安全感，但你在故事中展现出了很强的信任能力——也许你低估了自己在关系中的韧性。',
    low: '你觉得自己很安心，但当不确定性出现时，你的焦虑浮出了水面——这种落差提醒你，真正的安全感需要建立在面对不确定性之上。',
  },
  conflict_style: {
    high: '你以为自己回避冲突，但在重要时刻你选择了面对——你内心其实有一个勇敢的声音，只是平时被"维持和谐"的习惯压住了。',
    low: '你觉得自己很擅长处理矛盾，但你在故事中多次选择了绕开问题——直面冲突和"赢"是两回事，你可能更在意的是不被否定。',
  },
  commitment_depth: {
    high: '你以为自己是走一步看一步的人，但你的选择显示出强烈的承诺欲望——你不是不敢承诺，而是害怕承诺后被辜负。',
    low: '你觉得自己很坚定，但面对真正的考验时你犹豫了——这不是软弱，而是你在保护那个曾经受过伤的自己。',
  },
  growth_orientation: {
    high: '你以为自己追求稳定，但你其实一直在推动关系向前——你是那种"嘴上说着不想改变、行动上已经在进化"的人。',
    low: '你觉得自己很注重成长，但你在舒适区待得比想象中更久——真正的成长有时候需要从"理解"走向"行动"。',
  },
}

export function generateShadowFromGap(
  selfPerception: Record<string, number>,
  normalizedScores: Record<string, number>
): string {
  // Find dimension with biggest gap
  const gaps = Object.keys(selfPerception).map(dim => ({
    dimension: dim,
    gap: Math.abs((selfPerception[dim] || 50) - (normalizedScores[dim] || 50)),
    selfValue: selfPerception[dim] || 50,
    actualValue: normalizedScores[dim] || 50,
  }))

  const sorted = gaps.sort((a, b) => b.gap - a.gap)
  const biggest = sorted[0]

  if (!biggest || biggest.gap < 10) {
    return '你对自己的认知和实际行为高度一致——你是一个有自我觉察力的人。但要小心，太一致有时意味着你在无意识地"表演"自己期望中的样子。'
  }

  const template = SHADOW_TEMPLATES[biggest.dimension]
  if (!template) {
    const label = DIMENSION_LABELS[biggest.dimension] || biggest.dimension
    return `你在"${label}"这个维度上，自我认知（${biggest.selfValue}）和实际行为（${biggest.actualValue}）之间存在明显落差。这个盲区值得你去探索。`
  }

  // If actual > self: they underestimate themselves on this dimension
  // If actual < self: they overestimate themselves on this dimension
  if (biggest.actualValue > biggest.selfValue) {
    return template.high
  } else {
    return template.low
  }
}

export function generateLocalInsights(
  normalized: ProfileScores,
  selfPerception?: Record<string, number>
): {
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

  // Shadow - use gap-based analysis if self-perception is available
  let shadow: string
  if (selfPerception && Object.keys(selfPerception).length > 0) {
    const normalizedRecord: Record<string, number> = {}
    for (const dim of DIMENSIONS) {
      normalizedRecord[dim.key] = normalized[dim.key as DimensionKey]
    }
    shadow = generateShadowFromGap(selfPerception, normalizedRecord)
  } else {
    shadow = `你的关系阴影可能在于：当${bottom[1].label}受到挑战时，你会不自觉地用${top[0].label}来防御，` +
      `形成一种"用力过猛"的模式。意识到这一点，是改变的开始。`
  }

  // Archetype based on dominant pattern
  const archetypes = [
    '探索者', '守护者', '连接者', '独行者',
    '调和者', '挑战者', '成长者',
  ]
  const topIdx = DIMENSIONS.findIndex(d => d.key === top[0].key)
  const archetype = archetypes[topIdx] || '探索者'

  return { insights, shadow, archetype }
}
