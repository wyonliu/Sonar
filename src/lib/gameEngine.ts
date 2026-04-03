import {
  CharacterStory,
  StoryMessageData,
  ChoiceOption,
  ChoicePointData,
  ActData,
  CHARACTER_STORIES,
  getCharacterById,
} from '@/content/characters'

export interface CollectedTrait {
  name: string
  description: string
  emoji: string
  dimension?: string
}

export interface GameState {
  characterId: string
  currentAct: number
  currentChoicePoint: number
  phase: 'messages_before' | 'choosing' | 'response' | 'closing' | 'act_transition' | 'ending' | 'finished'
  messageQueue: StoryMessageData[]
  displayedMessages: StoryMessageData[]
  affinity: number
  scores: Record<string, number>
  collectedTraits: CollectedTrait[]
  totalChoicesMade: number
  selectedEndingId: string | null
  selfPerception: Record<string, number>
}

export function createInitialState(characterId: string): GameState {
  return {
    characterId,
    currentAct: 0,
    currentChoicePoint: 0,
    phase: 'act_transition',
    messageQueue: [],
    displayedMessages: [],
    affinity: 50,
    scores: {},
    collectedTraits: [],
    totalChoicesMade: 0,
    selectedEndingId: null,
    selfPerception: {},
  }
}

export function getStory(characterId: string): CharacterStory | null {
  return CHARACTER_STORIES[characterId] || null
}

export function getCurrentAct(story: CharacterStory, state: GameState): ActData | null {
  return story.acts[state.currentAct] || null
}

export function getCurrentChoicePoint(story: CharacterStory, state: GameState): ChoicePointData | null {
  const act = getCurrentAct(story, state)
  if (!act) return null
  return act.choice_points[state.currentChoicePoint] || null
}

export function getActChapterTitle(act: ActData): StoryMessageData {
  return {
    type: 'chapter_title',
    text: act.title,
    emoji: act.emoji,
  }
}

export function loadMessagesForPhase(story: CharacterStory, state: GameState): StoryMessageData[] {
  const act = getCurrentAct(story, state)
  if (!act) return []

  switch (state.phase) {
    case 'messages_before': {
      const cp = getCurrentChoicePoint(story, state)
      return cp ? cp.messages_before : []
    }
    case 'closing':
      return act.closing_messages
    case 'ending': {
      const ending = determineEnding(story, state)
      return ending ? ending.messages : []
    }
    default:
      return []
  }
}

export function handleChoice(
  story: CharacterStory,
  state: GameState,
  choice: ChoiceOption
): {
  newState: GameState
  responseMessages: StoryMessageData[]
  traitUnlocked: CollectedTrait | null
} {
  const newScores = { ...state.scores }
  for (const [key, value] of Object.entries(choice.scores)) {
    newScores[key] = (newScores[key] || 0) + value
  }

  const newAffinity = Math.max(0, Math.min(100, state.affinity + choice.affinity_change))

  // Determine response based on affinity
  const cp = getCurrentChoicePoint(story, state)
  const isHighAffinity = newAffinity >= 50
  const responseMessages = cp
    ? isHighAffinity
      ? cp.response_high
      : cp.response_low
    : []

  // Check trait unlock
  let traitUnlocked: CollectedTrait | null = null
  const newTraits = [...state.collectedTraits]
  if (choice.trait_unlock) {
    traitUnlocked = {
      name: choice.trait_unlock.name,
      description: choice.trait_unlock.description,
      emoji: choice.trait_unlock.emoji,
    }
    newTraits.push(traitUnlocked)
  }

  const newState: GameState = {
    ...state,
    affinity: newAffinity,
    scores: newScores,
    collectedTraits: newTraits,
    totalChoicesMade: state.totalChoicesMade + 1,
    phase: 'response',
  }

  return { newState, responseMessages, traitUnlocked }
}

export function advanceAfterResponse(story: CharacterStory, state: GameState): GameState {
  const act = getCurrentAct(story, state)
  if (!act) return { ...state, phase: 'finished' }

  const nextCPIndex = state.currentChoicePoint + 1

  if (nextCPIndex < act.choice_points.length) {
    // More choice points in this act
    return {
      ...state,
      currentChoicePoint: nextCPIndex,
      phase: 'messages_before',
    }
  }

  // End of act - show closing messages
  return {
    ...state,
    phase: 'closing',
  }
}

export function advanceAfterClosing(story: CharacterStory, state: GameState): GameState {
  const nextActIndex = state.currentAct + 1

  if (nextActIndex < story.acts.length) {
    // Next act
    return {
      ...state,
      currentAct: nextActIndex,
      currentChoicePoint: 0,
      phase: 'act_transition',
    }
  }

  // Game over - show ending
  return {
    ...state,
    phase: 'ending',
  }
}

export function calculateDimensionRanges(story: CharacterStory): Record<string, { min: number; max: number }> {
  const ranges: Record<string, { min: number; max: number }> = {}

  // Initialize all dimensions
  const allDimsSet: Record<string, boolean> = {}
  for (const act of story.acts) {
    for (const cp of act.choice_points) {
      for (const choice of cp.choices) {
        for (const key of Object.keys(choice.scores)) {
          allDimsSet[key] = true
        }
      }
    }
    // Also count micro-interactions in closing_messages
    for (const msg of act.closing_messages) {
      if (msg.type === 'emoji_reaction' && msg.reactionOptions) {
        for (const opt of msg.reactionOptions) {
          for (const key of Object.keys(opt.scores)) {
            allDimsSet[key] = true
          }
        }
      }
      if (msg.type === 'quick_swipe') {
        if (msg.agreeScores) for (const key of Object.keys(msg.agreeScores)) allDimsSet[key] = true
        if (msg.disagreeScores) for (const key of Object.keys(msg.disagreeScores)) allDimsSet[key] = true
      }
    }
  }

  const allDims = Object.keys(allDimsSet)

  for (const dim of allDims) {
    ranges[dim] = { min: 0, max: 0 }
  }

  // For each choice point, add the min/max possible contribution
  for (const act of story.acts) {
    for (const cp of act.choice_points) {
      for (const dim of allDims) {
        const values = cp.choices.map(c => c.scores[dim] || 0)
        ranges[dim].min += Math.min(...values)
        ranges[dim].max += Math.max(...values)
      }
    }
    // For micro-interactions, add min/max
    for (const msg of act.closing_messages) {
      if (msg.type === 'emoji_reaction' && msg.reactionOptions) {
        for (const dim of allDims) {
          const values = msg.reactionOptions.map(o => o.scores[dim] || 0)
          ranges[dim].min += Math.min(...values)
          ranges[dim].max += Math.max(...values)
        }
      }
      if (msg.type === 'quick_swipe') {
        for (const dim of allDims) {
          const agreeVal = msg.agreeScores?.[dim] || 0
          const disagreeVal = msg.disagreeScores?.[dim] || 0
          ranges[dim].min += Math.min(agreeVal, disagreeVal)
          ranges[dim].max += Math.max(agreeVal, disagreeVal)
        }
      }
    }
  }

  return ranges
}

export function normalizeGameScores(
  rawScores: Record<string, number>,
  ranges: Record<string, { min: number; max: number }>
): Record<string, number> {
  const normalized: Record<string, number> = {}
  for (const [dim, range] of Object.entries(ranges)) {
    const raw = rawScores[dim] || 0
    const span = range.max - range.min
    if (span === 0) {
      normalized[dim] = 50
    } else {
      normalized[dim] = Math.max(5, Math.min(95, Math.round(((raw - range.min) / span) * 100)))
    }
  }
  return normalized
}

export function determineEnding(story: CharacterStory, state: GameState) {
  if (!story.endings.length) return null

  const ranges = calculateDimensionRanges(story)
  const n = normalizeGameScores(state.scores, ranges)

  const commitment = n.commitment_depth ?? 50
  const expression = n.expression_intensity ?? 50
  const autonomy = n.autonomy_need ?? 50
  const growth = n.growth_orientation ?? 50
  const security = n.security_baseline ?? 50
  const conflict = n.conflict_style ?? 50

  const findEnding = (id: string) => story.endings.find((e) => e.id === id)

  // Multi-factor scoring for each ending
  const endingScores: Record<string, number> = {
    warm: commitment * 0.35 + expression * 0.25 + security * 0.25 + conflict * 0.15,
    open: autonomy * 0.35 + growth * 0.35 + (100 - commitment) * 0.15 + conflict * 0.15,
    regret: (100 - security) * 0.3 + (100 - expression) * 0.25 + (100 - commitment) * 0.3 + (100 - conflict) * 0.15,
    rebirth: growth * 0.4 + Math.abs(50 - commitment) * 0.2 + conflict * 0.25 + (100 - security) * 0.15,
  }

  // Pick highest scoring ending
  const sorted = Object.entries(endingScores).sort((a, b) => b[1] - a[1])
  const bestId = sorted[0][0]

  return findEnding(bestId) || story.endings[0]
}

export function getTotalTraitsForStory(story: CharacterStory): number {
  let count = 0
  for (const act of story.acts) {
    for (const cp of act.choice_points) {
      for (const choice of cp.choices) {
        if (choice.trait_unlock) count++
      }
    }
  }
  return count
}

export function convertScoresToAnswers(state: GameState) {
  // Convert accumulated scores into the format results page expects
  const answers = Object.entries(state.scores).map(([key, value]) => ({
    id: key,
    text: key,
    scores: { [key]: value },
  }))
  return answers
}
