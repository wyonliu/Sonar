import { NextRequest, NextResponse } from 'next/server'
import { DIMENSIONS, DimensionKey, ProfileScores } from '@/types'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { scores } = body as { scores: ProfileScores }

    if (!scores) {
      return NextResponse.json({ error: 'Missing scores' }, { status: 400 })
    }

    // Check if Claude API key is available
    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) {
      // Return local analysis without AI
      return NextResponse.json(generateLocalAnalysis(scores))
    }

    // Call Claude API for enhanced analysis
    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1024,
          messages: [{
            role: 'user',
            content: buildPrompt(scores),
          }],
        }),
      })

      if (!response.ok) {
        return NextResponse.json(generateLocalAnalysis(scores))
      }

      const data = await response.json()
      const text = data.content?.[0]?.text || ''

      try {
        const parsed = JSON.parse(text)
        return NextResponse.json(parsed)
      } catch {
        return NextResponse.json(generateLocalAnalysis(scores))
      }
    } catch {
      return NextResponse.json(generateLocalAnalysis(scores))
    }
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}

function buildPrompt(scores: ProfileScores): string {
  const dims = DIMENSIONS.map(d => `${d.label}(${d.key}): ${scores[d.key as DimensionKey]}/100`).join('\n')

  return `你是一个专业的关系心理学分析师。根据以下7个维度的得分，生成一份简洁但有洞察力的关系自我报告。

维度得分:
${dims}

请返回严格的JSON格式（不要用markdown代码块包裹）：
{
  "archetype": "用2-3个字概括此人的关系类型，如'温柔守护者'、'自由探索者'",
  "insights": [
    "第一条核心洞察（关于此人在关系中最突出的特点）",
    "第二条洞察（关于此人的关系需求）",
    "第三条洞察（关于此人的成长方向）"
  ],
  "shadow": "关系阴影分析（约50字，指出此人在关系中可能的盲点和防御模式）",
  "story": "用第二人称，写一段50字左右的关系叙事，诗意而精准"
}`
}

function generateLocalAnalysis(scores: ProfileScores) {
  const entries = DIMENSIONS.map(d => ({
    key: d.key,
    label: d.label,
    value: scores[d.key as DimensionKey],
  })).sort((a, b) => b.value - a.value)

  const top = entries.slice(0, 2)
  const bottom = entries.slice(-2)

  return {
    archetype: getArchetype(top[0].key),
    insights: [
      `你的${top[0].label}和${top[1].label}最为突出，说明你在关系中倾向于主动投入，并且会清晰地表达自己的需求和边界。`,
      `在亲密关系中，你最核心的需求是：在情感连接与个人空间之间找到属于自己的平衡点。`,
      `你的成长方向在于${bottom[0].label}——尝试在这个维度上做一些微小的改变，可能会给关系带来意想不到的转变。`,
    ],
    shadow: `你的关系阴影可能在于：当${bottom[1].label}受到威胁时，你会本能地强化${top[0].label}作为防御，这种模式值得觉察。`,
    story: `你像是一个在深海中发出声呐的人，渴望回响，却又害怕回声太过清晰。学会在脆弱中停留，是你最大的功课。`,
  }
}

function getArchetype(topKey: string): string {
  const map: Record<string, string> = {
    intimacy_pace: '热情探索者',
    expression_intensity: '真诚表达者',
    autonomy_need: '自由守望者',
    security_baseline: '温暖守护者',
    conflict_style: '勇敢对话者',
    commitment_depth: '深情承诺者',
    growth_orientation: '成长引领者',
  }
  return map[topKey] || '探索者'
}
