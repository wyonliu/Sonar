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

export function determineEnding(story: CharacterStory, state: GameState) {
  if (!story.endings.length) return null

  const s = state.scores
  const commitment = s.commitment_depth || 0
  const expression = s.expression_intensity || 0
  const autonomy = s.autonomy_need || 0
  const growth = s.growth_orientation || 0
  const security = s.security_baseline || 0
  const affinity = state.affinity

  const findEnding = (id: string) => story.endings.find((e) => e.id === id)

  // Warm: high commitment + high expression + high affinity
  if (affinity >= 65 && commitment > 15 && expression > 10) {
    return findEnding('warm') || story.endings[0]
  }

  // Open: high autonomy + high growth
  if (autonomy > 15 && growth > 10 && affinity >= 40) {
    return findEnding('open') || story.endings[0]
  }

  // Rebirth: fluctuating (moderate affinity) + high growth
  if (growth > 10 && affinity >= 30 && affinity < 65) {
    return findEnding('rebirth') || story.endings[story.endings.length - 1]
  }

  // Regret: low affinity or low security
  if (affinity < 40 || security < -10) {
    return findEnding('regret') || story.endings[story.endings.length - 1]
  }

  // Default: pick based on highest signal
  if (commitment + expression > autonomy + growth) {
    return findEnding('warm') || story.endings[0]
  }
  return findEnding('open') || story.endings[0]
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
