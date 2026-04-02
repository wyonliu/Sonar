// Story content for the interactive love story test
// Each question from questions.json is transformed into a story beat
// with scene cards, partner messages, narrator text, and choices

export type MessageType = 'narrator' | 'scene' | 'partner' | 'choice' | 'trait_unlock' | 'chapter_transition'
export type SceneGradient = 'warm' | 'cool' | 'tense' | 'romantic' | 'neutral' | 'bittersweet' | 'hopeful'

export interface StoryChoice {
  id: string
  text: string
  emoji?: string
  scores: Record<string, number>
}

export interface StoryMessage {
  type: MessageType
  text?: string
  delay?: number
  sceneGradient?: SceneGradient
  sceneEmoji?: string
  choices?: StoryChoice[]
  traitName?: string
  chapterTitle?: string
  chapterSubtitle?: string
  chapterDescription?: string
  chapterId?: number
}

export interface StoryBeat {
  id: string
  questionRef: string
  chapter: number
  messages: StoryMessage[]
}

// Trait unlocks at specific question indices (0-based across all 45 questions)
export const TRAIT_UNLOCK_MAP: Record<number, string> = {
  2: '安全感雷达',
  5: '社交直觉',
  9: '边界意识',
  13: '心动阈值',
  17: '冲突本能',
  21: '信任底色',
  25: '独立基因',
  29: '承诺温度',
  33: '脆弱开关',
  37: '成长密码',
  41: '爱的底线',
  44: '关系蓝图',
}

// Every 5 choices (index 4, 9, 14, etc.) show mini star map
export function shouldShowStarMap(choiceIndex: number): boolean {
  return (choiceIndex + 1) % 5 === 0
}

export const storyBeats: StoryBeat[] = [
  // ============================================
  // CHAPTER 1: 相识 (Getting to Know)
  // ============================================

  // ch1_q01 - Meeting at a party
  {
    id: 'beat_01',
    questionRef: 'ch1_q01',
    chapter: 1,
    messages: [
      {
        type: 'scene',
        text: '一个周六的晚上。\n你被朋友拉去了一个生日聚会。',
        sceneEmoji: '🎉',
        sceneGradient: 'warm',
        delay: 600,
      },
      {
        type: 'narrator',
        text: '音乐不大不小，人不多不少。\n你端着一杯酒，在人群边缘晃着。',
        delay: 800,
      },
      {
        type: 'narrator',
        text: '然后你看到了角落里的那个人。\n正安静地翻看书架上的书。',
        delay: 700,
      },
      {
        type: 'narrator',
        text: '你们的目光偶然交汇。\n对方微微一笑。',
        delay: 600,
      },
      {
        type: 'narrator',
        text: '心里泛起一丝好奇。',
        delay: 500,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '端着酒杯走过去，随意聊聊那本书',
            emoji: '🍷',
            scores: { intimacy_pace: 6, expression_intensity: 3, autonomy_need: -2, security_baseline: 5 },
          },
          {
            id: 'B',
            text: '回以微笑，但不主动过去。有缘的话，后面自然会有交集',
            emoji: '😊',
            scores: { intimacy_pace: -4, expression_intensity: -3, autonomy_need: 4, security_baseline: 3 },
          },
          {
            id: 'C',
            text: '让朋友帮忙介绍一下，有个中间人会自在很多',
            emoji: '🤝',
            scores: { intimacy_pace: 2, expression_intensity: -2, security_baseline: -3, autonomy_need: -1 },
          },
          {
            id: 'D',
            text: '直接走过去："你好，我叫XXX，你看的那本书我也读过"',
            emoji: '💬',
            scores: { intimacy_pace: 8, expression_intensity: 7, autonomy_need: -1, conflict_style: 3 },
          },
        ],
      },
    ],
  },

  // ch1_q02 - Third date, late night
  {
    id: 'beat_02',
    questionRef: 'ch1_q02',
    chapter: 1,
    messages: [
      {
        type: 'scene',
        text: '两周后，你们的第三次约会。\n一家安静的小餐厅，窗外的城市灯火阑珊。',
        sceneEmoji: '🌃',
        sceneGradient: 'romantic',
        delay: 600,
      },
      {
        type: 'narrator',
        text: '聊得很投机。从书聊到电影，从电影聊到童年。\n夜色渐深。',
        delay: 700,
      },
      {
        type: 'partner',
        text: '今天真的很开心',
        delay: 500,
      },
      {
        type: 'partner',
        text: '我不想这个晚上就这样结束。',
        delay: 800,
      },
      {
        type: 'narrator',
        text: '语气里有一点试探。\nTA在看你的反应。',
        delay: 600,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '"那我们去找个安静的地方继续聊"',
            emoji: '🌙',
            scores: { intimacy_pace: 7, expression_intensity: 4, commitment_depth: 2, security_baseline: 4 },
          },
          {
            id: 'B',
            text: '"今天先到这里吧，下次我们再约"',
            emoji: '🕐',
            scores: { intimacy_pace: -6, expression_intensity: -2, autonomy_need: 5, security_baseline: 2 },
          },
          {
            id: 'C',
            text: '"我也是，但好的东西值得等"',
            emoji: '✨',
            scores: { intimacy_pace: -3, expression_intensity: 4, commitment_depth: 5, security_baseline: 6 },
          },
          {
            id: 'D',
            text: '有点紧张，赶紧聊起别的话题',
            emoji: '😅',
            scores: { intimacy_pace: -5, expression_intensity: -6, conflict_style: -5, security_baseline: -4 },
          },
        ],
      },
    ],
  },

  // ch1_q03 - Waiting for reply
  {
    id: 'beat_03',
    questionRef: 'ch1_q03',
    chapter: 1,
    messages: [
      {
        type: 'scene',
        text: '一个普通的下午。\n你发了条消息给TA。',
        sceneEmoji: '📱',
        sceneGradient: 'neutral',
        delay: 500,
      },
      {
        type: 'narrator',
        text: '三个小时了。\n没有回复。',
        delay: 600,
      },
      {
        type: 'narrator',
        text: '你看了眼手机。\n"最后上线：5分钟前"。',
        delay: 800,
      },
      {
        type: 'narrator',
        text: '已读，但没有回。',
        delay: 500,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '可能在忙吧。放下手机，做自己的事',
            emoji: '📖',
            scores: { security_baseline: 4, autonomy_need: 5, expression_intensity: -3, intimacy_pace: -2 },
          },
          {
            id: 'B',
            text: '发一条："忙呢？"',
            emoji: '💬',
            scores: { security_baseline: -2, expression_intensity: 3, intimacy_pace: 4, autonomy_need: -3 },
          },
          {
            id: 'C',
            text: '开始反复回想之前的对话，是不是自己说错了什么',
            emoji: '😰',
            scores: { security_baseline: -7, autonomy_need: -4, expression_intensity: -2, growth_orientation: -3 },
          },
          {
            id: 'D',
            text: '无所谓。想回自然会回，不需要时刻盯着手机',
            emoji: '🤷',
            scores: { security_baseline: 7, autonomy_need: 7, intimacy_pace: -4, commitment_depth: -2 },
          },
        ],
      },
    ],
  },

  // ch1_q04 - Cancelled plan
  {
    id: 'beat_04',
    questionRef: 'ch1_q04',
    chapter: 1,
    messages: [
      {
        type: 'scene',
        text: '周五晚上。\n你正在收拾明天爬山的装备。',
        sceneEmoji: '🎒',
        sceneGradient: 'cool',
        delay: 500,
      },
      {
        type: 'narrator',
        text: '为了这次约会，你推掉了其他安排。',
        delay: 600,
      },
      {
        type: 'partner',
        text: '明天那个... 我一个老朋友突然从外地来了',
        delay: 700,
      },
      {
        type: 'partner',
        text: '爬山能不能改个时间？🙏',
        delay: 600,
      },
      {
        type: 'narrator',
        text: '你看着已经打包好的登山背包。',
        delay: 500,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '"好啊，没关系的"',
            emoji: '😊',
            scores: { conflict_style: -5, expression_intensity: -4, security_baseline: -2, autonomy_need: -2 },
          },
          {
            id: 'B',
            text: '"我其实挺期待的，而且推掉了别的安排。能不能三个人一起？"',
            emoji: '🤔',
            scores: { expression_intensity: 5, conflict_style: 3, intimacy_pace: 4, security_baseline: 4 },
          },
          {
            id: 'C',
            text: '"行吧"  然后默默记下这件事',
            emoji: '😐',
            scores: { conflict_style: -4, security_baseline: -5, commitment_depth: -3, growth_orientation: -2 },
          },
          {
            id: 'D',
            text: '"理解，但下次能不能早点说？我为这次推掉了别的事"',
            emoji: '💭',
            scores: { conflict_style: 5, expression_intensity: 6, security_baseline: 5, growth_orientation: 5 },
          },
        ],
      },
    ],
  },

  // ch1_q05 - First physical contact
  {
    id: 'beat_05',
    questionRef: 'ch1_q05',
    chapter: 1,
    messages: [
      {
        type: 'scene',
        text: '第四次约会。电影散场。\n路边等车，风有点大。',
        sceneEmoji: '🌙',
        sceneGradient: 'romantic',
        delay: 600,
      },
      {
        type: 'narrator',
        text: 'TA自然地揽了一下你的肩膀。',
        delay: 700,
      },
      {
        type: 'narrator',
        text: '这是你们第一次身体接触。\n路灯把两个人的影子拉得很长。',
        delay: 600,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '微微靠过去，把头轻轻靠在TA肩上',
            emoji: '💕',
            scores: { intimacy_pace: 7, expression_intensity: 5, security_baseline: 5, autonomy_need: -3 },
          },
          {
            id: 'B',
            text: '心跳加速，但表面不动声色。没靠过去，也没躲开',
            emoji: '💓',
            scores: { intimacy_pace: 1, expression_intensity: -4, security_baseline: 1, autonomy_need: 2 },
          },
          {
            id: 'C',
            text: '有点不自在，找个借口轻轻侧了一步',
            emoji: '😶',
            scores: { intimacy_pace: -5, expression_intensity: -3, autonomy_need: 6, security_baseline: -2 },
          },
          {
            id: 'D',
            text: '转过身来，认真地看着TA的眼睛微笑',
            emoji: '👁',
            scores: { intimacy_pace: 5, expression_intensity: 8, security_baseline: 6, commitment_depth: 3 },
          },
        ],
      },
    ],
  },

  // ch1_q06 - Social media discovery
  {
    id: 'beat_06',
    questionRef: 'ch1_q06',
    chapter: 1,
    messages: [
      {
        type: 'scene',
        text: '你们在社交软件上聊了一周。\n感觉很合拍。',
        sceneEmoji: '📲',
        sceneGradient: 'neutral',
        delay: 500,
      },
      {
        type: 'partner',
        text: '周末见个面呗？聊了这么久，好想看看真人是什么样 😄',
        delay: 600,
      },
      {
        type: 'narrator',
        text: '你点开了TA的朋友圈。\n翻了翻。\n不少和不同异性的合照。',
        delay: 800,
      },
      {
        type: 'narrator',
        text: '社交达人？还是......',
        delay: 500,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '社交广泛是好事。按计划见面，用自己的判断力',
            emoji: '👍',
            scores: { security_baseline: 6, growth_orientation: 4, intimacy_pace: 3, autonomy_need: 3 },
          },
          {
            id: 'B',
            text: '见面可以，但会多观察一段时间再决定是否深入',
            emoji: '🧐',
            scores: { security_baseline: -1, commitment_depth: -3, intimacy_pace: -3, growth_orientation: 2 },
          },
          {
            id: 'C',
            text: '随意问问TA的社交圈，看怎么说，再决定要不要见',
            emoji: '💬',
            scores: { security_baseline: -3, conflict_style: 2, expression_intensity: 2, intimacy_pace: -2 },
          },
          {
            id: 'D',
            text: '取消见面。这种社交模式的人通常不适合认真交往',
            emoji: '🚫',
            scores: { security_baseline: -5, commitment_depth: -4, autonomy_need: 6, intimacy_pace: -6 },
          },
        ],
      },
    ],
  },

  // ch1_q07 - Independent afternoon
  {
    id: 'beat_07',
    questionRef: 'ch1_q07',
    chapter: 1,
    messages: [
      {
        type: 'scene',
        text: '周末。一个你特意留给自己的下午。\n咖啡馆，一本书，阳光刚好。',
        sceneEmoji: '☕',
        sceneGradient: 'warm',
        delay: 600,
      },
      {
        type: 'partner',
        text: '在干嘛呀！',
        delay: 500,
      },
      {
        type: 'partner',
        text: '我就在你附近 能过来一起待会儿吗？',
        delay: 600,
      },
      {
        type: 'narrator',
        text: '你看了一眼手里的书。\n今天明明计划好了一个人安安静静地待着。',
        delay: 600,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '"好呀！快来！"  书什么时候都能看',
            emoji: '🙋',
            scores: { autonomy_need: -6, intimacy_pace: 6, expression_intensity: 2, commitment_depth: 3 },
          },
          {
            id: 'B',
            text: '"今天想一个人待着，明天一起吃饭？"',
            emoji: '📚',
            scores: { autonomy_need: 7, expression_intensity: 4, intimacy_pace: -2, security_baseline: 5 },
          },
          {
            id: 'C',
            text: '"好"  但内心有点不情愿',
            emoji: '😐',
            scores: { autonomy_need: 3, conflict_style: -5, expression_intensity: -5, security_baseline: -2 },
          },
          {
            id: 'D',
            text: '"我在看书呢，你要是不介意我继续看的话可以来坐坐"',
            emoji: '🤝',
            scores: { autonomy_need: 5, intimacy_pace: 2, expression_intensity: 3, growth_orientation: 4 },
          },
        ],
      },
    ],
  },

  // ch1_q08 - Friend reveals past
  {
    id: 'beat_08',
    questionRef: 'ch1_q08',
    chapter: 1,
    messages: [
      {
        type: 'scene',
        text: '工作日的午餐时间。\n你和好朋友坐在老地方。',
        sceneEmoji: '🍜',
        sceneGradient: 'neutral',
        delay: 500,
      },
      {
        type: 'narrator',
        text: '朋友突然压低了声音。',
        delay: 500,
      },
      {
        type: 'narrator',
        text: '"我觉得你应该知道——你正在约会的那个人，\n之前有过一段很复杂的感情经历。"',
        delay: 800,
      },
      {
        type: 'narrator',
        text: '你放下了筷子。\n有点意外。',
        delay: 600,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '谢谢关心，但每个人都有过去。我更在意TA现在是什么样',
            emoji: '🤲',
            scores: { security_baseline: 6, growth_orientation: 6, commitment_depth: 4, intimacy_pace: 2 },
          },
          {
            id: 'B',
            text: '记在心里，下次约会时让TA自己聊聊过去',
            emoji: '📝',
            scores: { security_baseline: 2, conflict_style: 3, growth_orientation: 4, expression_intensity: 2 },
          },
          {
            id: 'C',
            text: '心里开始不安，忍不住想了解更多细节',
            emoji: '😟',
            scores: { security_baseline: -5, autonomy_need: -3, expression_intensity: -2, commitment_depth: -2 },
          },
          {
            id: 'D',
            text: '觉得朋友不该在背后说这些。什么时候说是对方的权利',
            emoji: '🤨',
            scores: { autonomy_need: 6, security_baseline: 3, intimacy_pace: -3, conflict_style: 4 },
          },
        ],
      },
    ],
  },

  // ch1_q09 - Going public
  {
    id: 'beat_09',
    questionRef: 'ch1_q09',
    chapter: 1,
    messages: [
      {
        type: 'scene',
        text: '正式在一起的第一天。',
        sceneEmoji: '💝',
        sceneGradient: 'romantic',
        delay: 500,
      },
      {
        type: 'partner',
        text: '我发了朋友圈！！！❤️',
        delay: 500,
      },
      {
        type: 'partner',
        text: '[图片]',
        delay: 300,
      },
      {
        type: 'partner',
        text: '还@了你 嘿嘿',
        delay: 400,
      },
      {
        type: 'narrator',
        text: '你的手机开始不断振动。\n点赞、评论、私信......\n"在一起了？？"\n"天呐恭喜！！"\n"什么时候的事？？"',
        delay: 800,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '也发一条！让全世界知道你的幸福',
            emoji: '📣',
            scores: { expression_intensity: 8, intimacy_pace: 5, commitment_depth: 5, autonomy_need: -4 },
          },
          {
            id: 'B',
            text: '在TA那条下面留个甜甜的评论就好',
            emoji: '💬',
            scores: { expression_intensity: 2, autonomy_need: 4, security_baseline: 4, commitment_depth: 3 },
          },
          {
            id: 'C',
            text: '开心，但有点不自在。希望TA发之前问过你',
            emoji: '😳',
            scores: { autonomy_need: 6, expression_intensity: -3, conflict_style: 2, intimacy_pace: -3 },
          },
          {
            id: 'D',
            text: '感到一阵压力。才第一天就这么高调...',
            emoji: '😨',
            scores: { security_baseline: -5, commitment_depth: -4, expression_intensity: -5, intimacy_pace: -4 },
          },
        ],
      },
    ],
  },

  // ch1_q10 - Partner's friend gathering
  {
    id: 'beat_10',
    questionRef: 'ch1_q10',
    chapter: 1,
    messages: [
      {
        type: 'scene',
        text: '周六晚上，TA朋友的聚会。\n你一个人都不认识。',
        sceneEmoji: '🍻',
        sceneGradient: 'warm',
        delay: 600,
      },
      {
        type: 'narrator',
        text: 'TA很快和老朋友们聊开了。\n笑声不断。',
        delay: 600,
      },
      {
        type: 'narrator',
        text: '而你端着一杯酒，\n站在角落。\nTA似乎忘了你的存在。',
        delay: 700,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '主动和旁边的人搭话。不需要时刻黏在一起',
            emoji: '🗣',
            scores: { autonomy_need: 6, security_baseline: 6, intimacy_pace: -1, expression_intensity: 2 },
          },
          {
            id: 'B',
            text: '走过去加入TA的圈子，让TA介绍一下你',
            emoji: '👋',
            scores: { intimacy_pace: 4, expression_intensity: 3, security_baseline: 3, autonomy_need: -2 },
          },
          {
            id: 'C',
            text: '心里有点委屈，但先不说。回去再聊',
            emoji: '😔',
            scores: { conflict_style: -2, expression_intensity: -2, security_baseline: -3, growth_orientation: 3 },
          },
          {
            id: 'D',
            text: '微信给TA发一条："嘿，别忘了我"',
            emoji: '📱',
            scores: { expression_intensity: 5, security_baseline: -1, intimacy_pace: 3, conflict_style: 1 },
          },
        ],
      },
    ],
  },

  // ch1_q11 - Ex follows you
  {
    id: 'beat_11',
    questionRef: 'ch1_q11',
    chapter: 1,
    messages: [
      {
        type: 'scene',
        text: '一个无聊的午后。\n你在刷社交媒体。',
        sceneEmoji: '👀',
        sceneGradient: 'neutral',
        delay: 500,
      },
      {
        type: 'narrator',
        text: 'TA的前任关注了你。\n还给你最近的几条动态都点了赞。',
        delay: 700,
      },
      {
        type: 'narrator',
        text: '你点进去看了一眼头像。\n嗯，还挺好看的。',
        delay: 600,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '一笑了之。前任关注你说明你有魅力',
            emoji: '😏',
            scores: { security_baseline: 7, autonomy_need: 4, expression_intensity: -1, growth_orientation: 2 },
          },
          {
            id: 'B',
            text: '和TA用轻松的语气提一嘴',
            emoji: '💬',
            scores: { expression_intensity: 4, conflict_style: 2, security_baseline: 2, intimacy_pace: 3 },
          },
          {
            id: 'C',
            text: '忍不住去翻那个前任的主页...',
            emoji: '🔍',
            scores: { security_baseline: -5, autonomy_need: -3, commitment_depth: 2, expression_intensity: -3 },
          },
          {
            id: 'D',
            text: '直接屏蔽。没必要让前任介入你们的世界',
            emoji: '🚫',
            scores: { security_baseline: -2, conflict_style: 5, commitment_depth: 3, autonomy_need: 5 },
          },
        ],
      },
    ],
  },

  // ch1_q12 - "I don't deserve you"
  {
    id: 'beat_12',
    questionRef: 'ch1_q12',
    chapter: 1,
    messages: [
      {
        type: 'scene',
        text: '凌晨一点。\n你们在一起快三个月了。',
        sceneEmoji: '🌃',
        sceneGradient: 'bittersweet',
        delay: 600,
      },
      {
        type: 'narrator',
        text: '深夜的电话。TA的声音突然低了下去。',
        delay: 600,
      },
      {
        type: 'partner',
        text: '有时候我觉得...',
        delay: 600,
      },
      {
        type: 'partner',
        text: '我配不上你。',
        delay: 800,
      },
      {
        type: 'narrator',
        text: '语气很认真。\n不像是在撒娇。',
        delay: 500,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '"你怎么会这么想？在我眼里你很好"',
            emoji: '💗',
            scores: { expression_intensity: 6, intimacy_pace: 4, commitment_depth: 5, security_baseline: 3 },
          },
          {
            id: 'B',
            text: '认真地问为什么这么觉得。想理解背后的原因',
            emoji: '🤔',
            scores: { growth_orientation: 7, expression_intensity: 3, security_baseline: 4, commitment_depth: 4 },
          },
          {
            id: 'C',
            text: '内心有点警觉。这种话有时候是分手的铺垫...',
            emoji: '⚠️',
            scores: { security_baseline: -6, commitment_depth: -3, growth_orientation: -2, conflict_style: 2 },
          },
          {
            id: 'D',
            text: '"配不配得上不是单方面决定的。我选择了你，这就够了"',
            emoji: '🤝',
            scores: { security_baseline: 5, commitment_depth: 6, expression_intensity: 5, growth_orientation: 3 },
          },
        ],
      },
    ],
  },

  // ch1_q13 - Hotel room
  {
    id: 'beat_13',
    questionRef: 'ch1_q13',
    chapter: 1,
    messages: [
      {
        type: 'scene',
        text: '你们第一次一起出门旅行。\n到了酒店。',
        sceneEmoji: '🏨',
        sceneGradient: 'romantic',
        delay: 600,
      },
      {
        type: 'partner',
        text: '前台说只剩一间大床房了 😶',
        delay: 600,
      },
      {
        type: 'narrator',
        text: '你们之前还没有过更进一步的亲密。\n前台在等你们的决定。',
        delay: 700,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '看着TA说："你觉得可以吗？"',
            emoji: '👀',
            scores: { intimacy_pace: 2, expression_intensity: 1, autonomy_need: 2, security_baseline: 3 },
          },
          {
            id: 'B',
            text: '"没关系啊"，自然一点就好',
            emoji: '😊',
            scores: { intimacy_pace: 6, security_baseline: 6, expression_intensity: 3, autonomy_need: -1 },
          },
          {
            id: 'C',
            text: '坚持让前台再找找，或者换一家酒店',
            emoji: '🔍',
            scores: { intimacy_pace: -6, autonomy_need: 7, conflict_style: 3, expression_intensity: 2 },
          },
          {
            id: 'D',
            text: '"那我睡地上？" 开个玩笑缓解尴尬',
            emoji: '😂',
            scores: { intimacy_pace: -2, expression_intensity: -1, conflict_style: -3, security_baseline: -1 },
          },
        ],
      },
    ],
  },

  // ch1_q14 - Falling for someone
  {
    id: 'beat_14',
    questionRef: 'ch1_q14',
    chapter: 1,
    messages: [
      {
        type: 'scene',
        text: '最近你变了。',
        sceneEmoji: '💭',
        sceneGradient: 'romantic',
        delay: 500,
      },
      {
        type: 'narrator',
        text: '和朋友聊天时会不自觉地提起TA。\n说到TA的时候会不自觉地笑。\n夜里会翻看之前的聊天记录。',
        delay: 800,
      },
      {
        type: 'narrator',
        text: '你意识到——\n你正在陷入深深的喜欢。',
        delay: 700,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '享受这种感觉。喜欢一个人是件幸福的事',
            emoji: '🥰',
            scores: { expression_intensity: 6, intimacy_pace: 5, commitment_depth: 5, security_baseline: 4 },
          },
          {
            id: 'B',
            text: '开心但有点慌。上一次这样，最后受了很深的伤...',
            emoji: '😢',
            scores: { security_baseline: -5, commitment_depth: -3, intimacy_pace: -4, growth_orientation: 1 },
          },
          {
            id: 'C',
            text: '理性提醒自己别"上头"。感情需要时间验证',
            emoji: '🧠',
            scores: { intimacy_pace: -4, commitment_depth: -2, autonomy_need: 5, growth_orientation: 3 },
          },
          {
            id: 'D',
            text: '直接告诉TA："我发现我好像很喜欢你"',
            emoji: '💌',
            scores: { expression_intensity: 9, intimacy_pace: 8, conflict_style: 3, commitment_depth: 4 },
          },
        ],
      },
    ],
  },

  // ch1_q15 - Partner's solo trip
  {
    id: 'beat_15',
    questionRef: 'ch1_q15',
    chapter: 1,
    messages: [
      {
        type: 'scene',
        text: '你们在一起一个月了。',
        sceneEmoji: '✈️',
        sceneGradient: 'cool',
        delay: 500,
      },
      {
        type: 'partner',
        text: '那个旅行的事... 我在认识你之前就计划好了',
        delay: 600,
      },
      {
        type: 'partner',
        text: '独自去两周',
        delay: 400,
      },
      {
        type: 'partner',
        text: '你介意吗？',
        delay: 600,
      },
      {
        type: 'narrator',
        text: '两周。\n你们刚在一起一个月。\n出发的日子就快到了。',
        delay: 600,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '"当然不介意，好好享受。"  真心支持',
            emoji: '👍',
            scores: { autonomy_need: 7, security_baseline: 6, commitment_depth: 3, intimacy_pace: -1 },
          },
          {
            id: 'B',
            text: '"不介意，但我会想你的"',
            emoji: '🥺',
            scores: { expression_intensity: 6, autonomy_need: 3, security_baseline: 4, commitment_depth: 5 },
          },
          {
            id: 'C',
            text: '嘴上说不介意，心里担心感情会冷却',
            emoji: '😟',
            scores: { security_baseline: -4, autonomy_need: -2, expression_intensity: -4, commitment_depth: 2 },
          },
          {
            id: 'D',
            text: '"要不我也一起去？"',
            emoji: '🙋',
            scores: { autonomy_need: -6, intimacy_pace: 6, commitment_depth: 4, security_baseline: -2 },
          },
        ],
      },
    ],
  },

  // ============================================
  // CHAPTER 2: 磨合 (Adjusting)
  // ============================================

  // ch2_q01 - Messy apartment
  {
    id: 'beat_16',
    questionRef: 'ch2_q01',
    chapter: 2,
    messages: [
      {
        type: 'scene',
        text: '同居半年了。\n你推开家门。',
        sceneEmoji: '🏠',
        sceneGradient: 'tense',
        delay: 600,
      },
      {
        type: 'narrator',
        text: '客厅又是一片混乱。\n衣服扔在沙发上。外卖盒留在茶几上。\n你已经提过很多次了。',
        delay: 800,
      },
      {
        type: 'narrator',
        text: '深呼吸。',
        delay: 400,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '忍住火气，默默收拾了。不想为这种小事吵架',
            emoji: '🧹',
            scores: { conflict_style: -6, expression_intensity: -5, autonomy_need: -3, growth_orientation: -3 },
          },
          {
            id: 'B',
            text: '"说好的事情你做不到，你现在来收拾"',
            emoji: '😠',
            scores: { conflict_style: 7, expression_intensity: 6, autonomy_need: 3, growth_orientation: 3 },
          },
          {
            id: 'C',
            text: '冷静坐下来，等TA注意到你的沉默',
            emoji: '😶',
            scores: { conflict_style: -3, expression_intensity: -4, security_baseline: -3, growth_orientation: -2 },
          },
          {
            id: 'D',
            text: '提议一起制定家务分工表，贴在冰箱上',
            emoji: '📋',
            scores: { growth_orientation: 7, conflict_style: 4, expression_intensity: 3, security_baseline: 4 },
          },
        ],
      },
    ],
  },

  // ch2_q02 - Partner working late
  {
    id: 'beat_17',
    questionRef: 'ch2_q02',
    chapter: 2,
    messages: [
      {
        type: 'scene',
        text: 'TA升职了。\n最近每天加班到很晚。\n已经连续两周了。',
        sceneEmoji: '🌙',
        sceneGradient: 'bittersweet',
        delay: 600,
      },
      {
        type: 'narrator',
        text: '你一个人吃了晚饭。\n桌上另一份已经凉了。',
        delay: 600,
      },
      {
        type: 'partner',
        text: '今晚又要加班 不用等我了',
        delay: 500,
      },
      {
        type: 'partner',
        text: '对不起啊 🙏',
        delay: 400,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '"没关系，注意身体。"  理解这只是一个阶段',
            emoji: '💪',
            scores: { autonomy_need: 4, security_baseline: 4, expression_intensity: -2, commitment_depth: 4 },
          },
          {
            id: 'B',
            text: '"我很想你。今天能不能早一点？"',
            emoji: '🥺',
            scores: { expression_intensity: 6, conflict_style: 2, autonomy_need: -2, commitment_depth: 5 },
          },
          {
            id: 'C',
            text: '开始怀疑TA是不是真的在加班...',
            emoji: '🤨',
            scores: { security_baseline: -7, autonomy_need: -3, growth_orientation: -3, conflict_style: 1 },
          },
          {
            id: 'D',
            text: '也把自己的时间安排满。不想让生活围着TA转',
            emoji: '📅',
            scores: { autonomy_need: 7, security_baseline: 3, intimacy_pace: -3, growth_orientation: 4 },
          },
        ],
      },
    ],
  },

  // ch2_q03 - Big fight
  {
    id: 'beat_18',
    questionRef: 'ch2_q03',
    chapter: 2,
    messages: [
      {
        type: 'scene',
        text: '你们吵架了。\n一场真正的大吵。',
        sceneEmoji: '⚡',
        sceneGradient: 'tense',
        delay: 600,
      },
      {
        type: 'partner',
        text: '你有时候真的很自私。',
        delay: 800,
      },
      {
        type: 'narrator',
        text: '摔门声。\n然后是寂静。\n房间里只剩下你和回荡的那句话。',
        delay: 700,
      },
      {
        type: 'narrator',
        text: '"自私。"',
        delay: 500,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '发消息："你说的话伤到我了。等你冷静了我们谈。"',
            emoji: '💬',
            scores: { conflict_style: 3, expression_intensity: 5, security_baseline: 3, growth_orientation: 5 },
          },
          {
            id: 'B',
            text: '追出去。不想让TA一个人带着怒气在外面',
            emoji: '🏃',
            scores: { commitment_depth: 6, intimacy_pace: 5, expression_intensity: 4, autonomy_need: -5 },
          },
          {
            id: 'C',
            text: '坐在原地，开始反思自己是不是真的自私...',
            emoji: '😔',
            scores: { security_baseline: -5, growth_orientation: 3, conflict_style: -4, expression_intensity: -3 },
          },
          {
            id: 'D',
            text: '"自私？你才自私。" 心里已经准备好了反驳',
            emoji: '😤',
            scores: { conflict_style: 8, expression_intensity: 5, security_baseline: -2, growth_orientation: -4 },
          },
        ],
      },
    ],
  },

  // ch2_q04 - Phone before bed
  {
    id: 'beat_19',
    questionRef: 'ch2_q04',
    chapter: 2,
    messages: [
      {
        type: 'scene',
        text: '又是一个夜晚。\n卧室的灯已经关了。',
        sceneEmoji: '📱',
        sceneGradient: 'cool',
        delay: 500,
      },
      {
        type: 'narrator',
        text: 'TA又在刷手机。\n屏幕的蓝光映在两个人的脸上。\n你试着搂过去说话。',
        delay: 700,
      },
      {
        type: 'partner',
        text: '嗯嗯',
        delay: 400,
      },
      {
        type: 'partner',
        text: '嗯',
        delay: 300,
      },
      {
        type: 'narrator',
        text: '这已经持续好几个月了。',
        delay: 500,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '拿过TA的手机扣在枕头下："手机里有什么比我好看的？"',
            emoji: '😏',
            scores: { expression_intensity: 5, conflict_style: 3, intimacy_pace: 4, autonomy_need: -4 },
          },
          {
            id: 'B',
            text: '选一个白天的时间认真谈这件事',
            emoji: '🗓',
            scores: { growth_orientation: 7, expression_intensity: 5, conflict_style: 4, commitment_depth: 5 },
          },
          {
            id: 'C',
            text: '也开始刷自己的手机',
            emoji: '📱',
            scores: { conflict_style: -4, expression_intensity: -5, growth_orientation: -4, security_baseline: -3 },
          },
          {
            id: 'D',
            text: '每晚你先睡。不让自己的作息被影响',
            emoji: '😴',
            scores: { autonomy_need: 6, security_baseline: 2, expression_intensity: -3, conflict_style: -1 },
          },
        ],
      },
    ],
  },

  // ch2_q05 - Suspicious message
  {
    id: 'beat_20',
    questionRef: 'ch2_q05',
    chapter: 2,
    messages: [
      {
        type: 'scene',
        text: '一个平常的晚上。\nTA在洗澡。',
        sceneEmoji: '🚿',
        sceneGradient: 'tense',
        delay: 500,
      },
      {
        type: 'narrator',
        text: 'TA的手机亮了。\n一条消息弹出来。\n你无意间瞥见了——',
        delay: 600,
      },
      {
        type: 'narrator',
        text: '一个你不认识的名字。\n"今天很开心，下次再约"',
        delay: 700,
      },
      {
        type: 'narrator',
        text: '浴室里传来哗哗的水声。',
        delay: 500,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '你信任TA。等TA出来也不打算提',
            emoji: '🤲',
            scores: { security_baseline: 7, autonomy_need: 5, conflict_style: -3, expression_intensity: -3 },
          },
          {
            id: 'B',
            text: '"刚才你手机响了，好像有人约你？" 给TA机会解释',
            emoji: '💬',
            scores: { expression_intensity: 3, conflict_style: 2, security_baseline: 1, growth_orientation: 3 },
          },
          {
            id: 'C',
            text: '假装没看到。但接下来几天会特别留意TA的行为',
            emoji: '👁',
            scores: { security_baseline: -6, expression_intensity: -5, conflict_style: -5, autonomy_need: -2 },
          },
          {
            id: 'D',
            text: '"这个人是谁？你们约了什么？" 你不喜欢猜来猜去',
            emoji: '❓',
            scores: { conflict_style: 7, expression_intensity: 6, security_baseline: -1, commitment_depth: 3 },
          },
        ],
      },
    ],
  },

  // ch2_q06 - Mother-in-law visit
  {
    id: 'beat_21',
    questionRef: 'ch2_q06',
    chapter: 2,
    messages: [
      {
        type: 'scene',
        text: 'TA的妈妈来家里住了一周。',
        sceneEmoji: '🏡',
        sceneGradient: 'tense',
        delay: 500,
      },
      {
        type: 'narrator',
        text: '"这个菜应该少放点盐。"\n"沙发上怎么摆了这么多靠枕？"\n"你们怎么这么晚还不睡？"',
        delay: 800,
      },
      {
        type: 'narrator',
        text: '建议。建议。建议。\n你的生活被逐条审阅。',
        delay: 600,
      },
      {
        type: 'narrator',
        text: 'TA在旁边一言不发。',
        delay: 500,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '忍。一周而已。为了TA，这点委屈能受',
            emoji: '😤',
            scores: { conflict_style: -6, expression_intensity: -4, autonomy_need: -5, commitment_depth: 3 },
          },
          {
            id: 'B',
            text: '私下找TA谈："你需要表明立场，这是我们的家"',
            emoji: '🗣',
            scores: { conflict_style: 5, expression_intensity: 5, autonomy_need: 6, growth_orientation: 5 },
          },
          {
            id: 'C',
            text: '自己直接跟TA妈客气但坚定地划边界',
            emoji: '✋',
            scores: { conflict_style: 7, autonomy_need: 7, expression_intensity: 6, security_baseline: 4 },
          },
          {
            id: 'D',
            text: 'TA妈在的时候就多在外面待着，减少正面冲突',
            emoji: '🚶',
            scores: { conflict_style: -3, autonomy_need: 4, expression_intensity: -5, growth_orientation: -3 },
          },
        ],
      },
    ],
  },

  // ch2_q07 - Slow replies (shadow pair with ch1_q03)
  {
    id: 'beat_22',
    questionRef: 'ch2_q07',
    chapter: 2,
    messages: [
      {
        type: 'scene',
        text: '在一起八个月了。',
        sceneEmoji: '🌧',
        sceneGradient: 'cool',
        delay: 500,
      },
      {
        type: 'narrator',
        text: 'TA回消息越来越慢了。\n以前秒回。现在隔几个小时。',
        delay: 700,
      },
      {
        type: 'partner',
        text: '嗯',
        delay: 400,
      },
      {
        type: 'partner',
        text: '好的',
        delay: 300,
      },
      {
        type: 'narrator',
        text: '以前不是这样的。',
        delay: 500,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '关系稳定了嘛。不可能永远秒回，很正常',
            emoji: '😌',
            scores: { security_baseline: 6, autonomy_need: 5, intimacy_pace: -2, growth_orientation: 3 },
          },
          {
            id: 'B',
            text: '"最近回消息变慢了，有什么事吗？"',
            emoji: '💬',
            scores: { expression_intensity: 4, conflict_style: 3, security_baseline: 1, growth_orientation: 5 },
          },
          {
            id: 'C',
            text: '你也开始有意拉长回复间隔',
            emoji: '😐',
            scores: { security_baseline: -4, expression_intensity: -5, growth_orientation: -4, conflict_style: -2 },
          },
          {
            id: 'D',
            text: '心里开始有不好的预感。是不是新鲜感过了？',
            emoji: '😰',
            scores: { security_baseline: -7, commitment_depth: -3, autonomy_need: -3, expression_intensity: -2 },
          },
        ],
      },
    ],
  },

  // ch2_q08 - Bar with friends
  {
    id: 'beat_23',
    questionRef: 'ch2_q08',
    chapter: 2,
    messages: [
      {
        type: 'scene',
        text: '周五傍晚。',
        sceneEmoji: '🍸',
        sceneGradient: 'warm',
        delay: 500,
      },
      {
        type: 'partner',
        text: '周末想和几个朋友去酒吧 你不介意吧？',
        delay: 600,
      },
      {
        type: 'narrator',
        text: '你知道那几个朋友里——\n有一个你觉得对TA有好感的异性。',
        delay: 700,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '"去吧，玩得开心。" 你信任TA的判断',
            emoji: '👋',
            scores: { security_baseline: 7, autonomy_need: 6, conflict_style: -2, commitment_depth: 3 },
          },
          {
            id: 'B',
            text: '"我也想去" 不一定是不信任，就是想参与',
            emoji: '🙋',
            scores: { autonomy_need: -4, security_baseline: -1, intimacy_pace: 4, commitment_depth: 3 },
          },
          {
            id: 'C',
            text: '坦诚说你对其中某个人不太放心',
            emoji: '😐',
            scores: { expression_intensity: 5, conflict_style: 4, security_baseline: -3, growth_orientation: 4 },
          },
          {
            id: 'D',
            text: '不说什么。等TA回来后看看状态再说',
            emoji: '👀',
            scores: { conflict_style: -4, expression_intensity: -5, security_baseline: -5, growth_orientation: -3 },
          },
        ],
      },
    ],
  },

  // ch2_q09 - Public joke
  {
    id: 'beat_24',
    questionRef: 'ch2_q09',
    chapter: 2,
    messages: [
      {
        type: 'scene',
        text: '朋友聚餐。\n大家聊得热闹。',
        sceneEmoji: '🍽',
        sceneGradient: 'warm',
        delay: 500,
      },
      {
        type: 'narrator',
        text: 'TA当众开了一个关于你的玩笑。\n大家都笑了。',
        delay: 600,
      },
      {
        type: 'narrator',
        text: '你知道TA没有恶意。\n但那个笑话......让你有点丢面子。',
        delay: 600,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '也回一个关于TA的玩笑。四两拨千斤',
            emoji: '😜',
            scores: { expression_intensity: 3, conflict_style: 1, security_baseline: 4, growth_orientation: 2 },
          },
          {
            id: 'B',
            text: '当场笑着，回家后说："那个笑话让我不太舒服"',
            emoji: '💬',
            scores: { expression_intensity: 5, conflict_style: 3, growth_orientation: 5, security_baseline: 3 },
          },
          {
            id: 'C',
            text: '假装无所谓，把这件事吞下去',
            emoji: '😐',
            scores: { conflict_style: -5, expression_intensity: -5, growth_orientation: -3, security_baseline: -1 },
          },
          {
            id: 'D',
            text: '当场脸就沉下来了。控制不住',
            emoji: '😑',
            scores: { expression_intensity: 6, conflict_style: 5, security_baseline: -3, autonomy_need: 2 },
          },
        ],
      },
    ],
  },

  // ch2_q10 - Cat debate
  {
    id: 'beat_25',
    questionRef: 'ch2_q10',
    chapter: 2,
    messages: [
      {
        type: 'scene',
        text: '一个老话题又被翻了出来。',
        sceneEmoji: '🐱',
        sceneGradient: 'tense',
        delay: 500,
      },
      {
        type: 'partner',
        text: '我说了，我过敏。不养。',
        delay: 600,
      },
      {
        type: 'narrator',
        text: '你非常想养一只猫。\nTA坚决反对。\n双方都不肯让步。',
        delay: 700,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '放弃养猫。关系比一只猫重要',
            emoji: '🤝',
            scores: { conflict_style: -5, commitment_depth: 5, autonomy_need: -5, growth_orientation: -2 },
          },
          {
            id: 'B',
            text: '提出折中方案——低敏品种，或者先去朋友家体验',
            emoji: '💡',
            scores: { growth_orientation: 6, conflict_style: 3, expression_intensity: 3, commitment_depth: 4 },
          },
          {
            id: 'C',
            text: '这个家不只是TA一个人的。重要的事应该有各自的决定权',
            emoji: '✊',
            scores: { autonomy_need: 6, conflict_style: 6, expression_intensity: 4, commitment_depth: -1 },
          },
          {
            id: 'D',
            text: '先答应不养，但心里不平衡。凭什么每次都是你让步？',
            emoji: '😤',
            scores: { conflict_style: -3, expression_intensity: -4, security_baseline: -4, growth_orientation: -4 },
          },
        ],
      },
    ],
  },

  // ch2_q11 - Weekend plans disagree
  {
    id: 'beat_26',
    questionRef: 'ch2_q11',
    chapter: 2,
    messages: [
      {
        type: 'scene',
        text: '又一个周末的早晨。\n窗外阳光正好。',
        sceneEmoji: '🌤',
        sceneGradient: 'warm',
        delay: 500,
      },
      {
        type: 'narrator',
        text: '你想出去hiking。\nTA只想窝在沙发上看剧。\n已经连续三个周末宅在家了。',
        delay: 700,
      },
      {
        type: 'partner',
        text: '好累 不想动 我们看剧吧',
        delay: 500,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '自己去。各做各的也挺好',
            emoji: '🥾',
            scores: { autonomy_need: 8, security_baseline: 5, intimacy_pace: -3, expression_intensity: -1 },
          },
          {
            id: 'B',
            text: '留下来陪TA看剧。在一起比做什么更重要',
            emoji: '📺',
            scores: { autonomy_need: -5, commitment_depth: 4, intimacy_pace: 3, conflict_style: -3 },
          },
          {
            id: 'C',
            text: '"这周陪我出去，下周陪你看剧。公平轮流"',
            emoji: '🤝',
            scores: { growth_orientation: 5, conflict_style: 3, expression_intensity: 3, commitment_depth: 4 },
          },
          {
            id: 'D',
            text: '"你能不能别天天这么宅"',
            emoji: '😒',
            scores: { conflict_style: 5, expression_intensity: 4, autonomy_need: 2, growth_orientation: -2 },
          },
        ],
      },
    ],
  },

  // ch2_q12 - New hobby with other people
  {
    id: 'beat_27',
    questionRef: 'ch2_q12',
    chapter: 2,
    messages: [
      {
        type: 'scene',
        text: 'TA最近迷上了摄影。',
        sceneEmoji: '📷',
        sceneGradient: 'neutral',
        delay: 500,
      },
      {
        type: 'partner',
        text: '这周末又约了摄影群的人出去拍照！',
        delay: 500,
      },
      {
        type: 'partner',
        text: '上次拍的你看了吗？真的进步好多！',
        delay: 500,
      },
      {
        type: 'narrator',
        text: '每个周末出去拍照。\n加入了一个摄影群，里面不少异性。\n你对摄影完全没兴趣。',
        delay: 700,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '很高兴TA有热情。你也可以做自己喜欢的事',
            emoji: '😊',
            scores: { autonomy_need: 7, security_baseline: 6, growth_orientation: 4, commitment_depth: 2 },
          },
          {
            id: 'B',
            text: '试着了解摄影，也许能找到共同语言',
            emoji: '📸',
            scores: { commitment_depth: 5, growth_orientation: 6, autonomy_need: -3, intimacy_pace: 3 },
          },
          {
            id: 'C',
            text: '不介意爱好，但群里那些异性让你有点在意',
            emoji: '🤨',
            scores: { security_baseline: -4, autonomy_need: -3, expression_intensity: 1, conflict_style: 1 },
          },
          {
            id: 'D',
            text: '"你还记得你有男/女朋友吗？"',
            emoji: '😤',
            scores: { autonomy_need: -5, conflict_style: 4, expression_intensity: 5, security_baseline: -3 },
          },
        ],
      },
    ],
  },

  // ch2_q13 - Partner sick, important meeting
  {
    id: 'beat_28',
    questionRef: 'ch2_q13',
    chapter: 2,
    messages: [
      {
        type: 'scene',
        text: '早上六点。闹钟响了。\n今天有一个准备了两周的重要汇报。',
        sceneEmoji: '🌡',
        sceneGradient: 'tense',
        delay: 600,
      },
      {
        type: 'narrator',
        text: '你摸了一下身边的TA。\n烫得吓了一跳。',
        delay: 600,
      },
      {
        type: 'partner',
        text: '有点难受... 你去上班吧不用管我',
        delay: 700,
      },
      {
        type: 'narrator',
        text: '39度。\n衣架上挂着你准备好的西装。\n床上躺着有气无力的TA。',
        delay: 600,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '请假在家照顾。工作的机会还有，TA此刻最需要你',
            emoji: '🏠',
            scores: { commitment_depth: 7, autonomy_need: -5, intimacy_pace: 4, expression_intensity: 4 },
          },
          {
            id: 'B',
            text: '准备好药和食物，去上班。中午抽空回来看一趟',
            emoji: '💊',
            scores: { autonomy_need: 4, commitment_depth: 4, growth_orientation: 4, security_baseline: 4 },
          },
          {
            id: 'C',
            text: '叫TA的家人或朋友来帮忙照顾',
            emoji: '📞',
            scores: { autonomy_need: 5, growth_orientation: 3, commitment_depth: 2, expression_intensity: -1 },
          },
          {
            id: 'D',
            text: '很纠结，两边都割舍不下。最后哪个都没做好',
            emoji: '😫',
            scores: { security_baseline: -3, commitment_depth: 2, autonomy_need: -2, conflict_style: -3 },
          },
        ],
      },
    ],
  },

  // ch2_q14 - Secret savings
  {
    id: 'beat_29',
    questionRef: 'ch2_q14',
    chapter: 2,
    messages: [
      {
        type: 'scene',
        text: '一个普通的周末。\n你在整理书架。',
        sceneEmoji: '💌',
        sceneGradient: 'romantic',
        delay: 500,
      },
      {
        type: 'narrator',
        text: '书架后面有一个信封。\n打开一看——\n是TA一直在偷偷给你们存的旅行基金。\n还有一张纸条："我们的旅行"。',
        delay: 800,
      },
      {
        type: 'narrator',
        text: '你完全不知道这件事。',
        delay: 500,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '感动到眼眶湿润。也开始悄悄为TA做一件事',
            emoji: '🥹',
            scores: { expression_intensity: 5, commitment_depth: 6, intimacy_pace: 4, security_baseline: 5 },
          },
          {
            id: 'B',
            text: '很感动，但有点不安。希望财务上是透明的',
            emoji: '🤔',
            scores: { autonomy_need: 4, growth_orientation: 4, conflict_style: 2, security_baseline: 1 },
          },
          {
            id: 'C',
            text: '开心但复杂。不喜欢被隐瞒，哪怕是善意的',
            emoji: '😐',
            scores: { security_baseline: -2, conflict_style: 4, autonomy_need: 5, growth_orientation: 5 },
          },
          {
            id: 'D',
            text: '"我发现了你的小秘密！" 提议一起规划这笔钱',
            emoji: '😄',
            scores: { expression_intensity: 7, intimacy_pace: 5, commitment_depth: 5, growth_orientation: 4 },
          },
        ],
      },
    ],
  },

  // ch2_q15 - Cold war ends
  {
    id: 'beat_30',
    questionRef: 'ch2_q15',
    chapter: 2,
    messages: [
      {
        type: 'scene',
        text: '冷战第三天。\n谁都没有先开口。',
        sceneEmoji: '🧊',
        sceneGradient: 'tense',
        delay: 600,
      },
      {
        type: 'narrator',
        text: '第三天晚上。\n你去厨房倒水。\nTA正好从卧室出来。',
        delay: 700,
      },
      {
        type: 'narrator',
        text: '四目相对。\n空气里还有火药味。',
        delay: 600,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '"我们谈谈吧。" 三天够了',
            emoji: '🤝',
            scores: { conflict_style: 4, growth_orientation: 6, commitment_depth: 5, expression_intensity: 4 },
          },
          {
            id: 'B',
            text: '倒了两杯水，递给TA一杯。不说话，但这本身就是橄榄枝',
            emoji: '🥛',
            scores: { expression_intensity: -1, commitment_depth: 4, conflict_style: -1, security_baseline: 3 },
          },
          {
            id: 'C',
            text: '低头走过去。你需要TA先承认错误',
            emoji: '😤',
            scores: { conflict_style: -4, expression_intensity: -4, security_baseline: -3, growth_orientation: -4 },
          },
          {
            id: 'D',
            text: '"我还在生气，但我更怕失去你"',
            emoji: '💔',
            scores: { expression_intensity: 8, security_baseline: 3, commitment_depth: 6, growth_orientation: 5 },
          },
        ],
      },
    ],
  },

  // ============================================
  // CHAPTER 3: 深水 (Deep Water)
  // ============================================

  // ch3_q01 - Long distance opportunity
  {
    id: 'beat_31',
    questionRef: 'ch3_q01',
    chapter: 3,
    messages: [
      {
        type: 'scene',
        text: '深夜。台灯下。\n桌上放着一份工作offer。',
        sceneEmoji: '🌙',
        sceneGradient: 'bittersweet',
        delay: 600,
      },
      {
        type: 'partner',
        text: '外地的那个机会... 薪资翻倍',
        delay: 600,
      },
      {
        type: 'partner',
        text: '但要两地分居至少一年',
        delay: 600,
      },
      {
        type: 'partner',
        text: '你觉得我们能扛过去吗？',
        delay: 800,
      },
      {
        type: 'narrator',
        text: 'TA看着你。\n灯光把你们的影子投在墙上。',
        delay: 600,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '"当然能。一年算什么，我等你"',
            emoji: '💪',
            scores: { commitment_depth: 8, security_baseline: 5, autonomy_need: -2, expression_intensity: 5 },
          },
          {
            id: 'B',
            text: '"我支持你，但异地恋很难。我们需要具体计划"',
            emoji: '📝',
            scores: { growth_orientation: 7, commitment_depth: 5, security_baseline: 3, expression_intensity: 4 },
          },
          {
            id: 'C',
            text: '沉默了很久。你不确定自己能不能承受一年的分离',
            emoji: '😶',
            scores: { security_baseline: -3, commitment_depth: -2, autonomy_need: 4, expression_intensity: -3 },
          },
          {
            id: 'D',
            text: '"如果你去的话... 我们的关系怎么办？"',
            emoji: '😟',
            scores: { security_baseline: -5, expression_intensity: 3, commitment_depth: 2, autonomy_need: -4 },
          },
        ],
      },
    ],
  },

  // ch3_q02 - Ex contact discovery
  {
    id: 'beat_32',
    questionRef: 'ch3_q02',
    chapter: 3,
    messages: [
      {
        type: 'scene',
        text: '一个你不想发现的东西。',
        sceneEmoji: '📞',
        sceneGradient: 'tense',
        delay: 500,
      },
      {
        type: 'narrator',
        text: 'TA的手机里。\n上周的一段通话记录。\n和前任打的。',
        delay: 700,
      },
      {
        type: 'narrator',
        text: 'TA从来没提过和前任还有联系。',
        delay: 600,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '深呼吸。选择相信，但会找时间坦诚地问',
            emoji: '🧘',
            scores: { security_baseline: 3, conflict_style: 3, growth_orientation: 5, expression_intensity: 3 },
          },
          {
            id: 'B',
            text: '"你上周和前任打电话了？" 直接摊开',
            emoji: '⚡',
            scores: { conflict_style: 7, expression_intensity: 7, security_baseline: -2, autonomy_need: 2 },
          },
          {
            id: 'C',
            text: '先冷静分析。也许只是普通事务。但会暗中留意',
            emoji: '🕵',
            scores: { security_baseline: -4, conflict_style: -3, expression_intensity: -4, growth_orientation: -2 },
          },
          {
            id: 'D',
            text: '被背叛的感觉瞬间涌上来。隐瞒本身就是欺骗',
            emoji: '💔',
            scores: { security_baseline: -6, conflict_style: 5, commitment_depth: -3, expression_intensity: 4 },
          },
        ],
      },
    ],
  },

  // ch3_q03 - Meeting the parents for Spring Festival
  {
    id: 'beat_33',
    questionRef: 'ch3_q03',
    chapter: 3,
    messages: [
      {
        type: 'scene',
        text: '在一起两年了。\n春节临近。',
        sceneEmoji: '🧧',
        sceneGradient: 'warm',
        delay: 600,
      },
      {
        type: 'partner',
        text: '我爸妈想让你来家里过年',
        delay: 500,
      },
      {
        type: 'partner',
        text: '你愿意吗？',
        delay: 500,
      },
      {
        type: 'narrator',
        text: '这意味着要面对那些问题——\n"你们打算什么时候结婚？"\n"有什么计划？"',
        delay: 700,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '欣然接受。见家长是自然的下一步',
            emoji: '😊',
            scores: { commitment_depth: 7, intimacy_pace: 5, security_baseline: 5, expression_intensity: 2 },
          },
          {
            id: 'B',
            text: '去，但先商量好"统一口径"',
            emoji: '🤝',
            scores: { commitment_depth: 3, growth_orientation: 4, autonomy_need: 4, conflict_style: 2 },
          },
          {
            id: 'C',
            text: '找个理由回避。两年还太早，不想制造不必要的期待',
            emoji: '😬',
            scores: { commitment_depth: -5, intimacy_pace: -5, autonomy_need: 6, conflict_style: -3 },
          },
          {
            id: 'D',
            text: '很矛盾。想去，但一想到被催婚就焦虑',
            emoji: '😰',
            scores: { security_baseline: -4, commitment_depth: -2, expression_intensity: -2, growth_orientation: 1 },
          },
        ],
      },
    ],
  },

  // ch3_q04 - Partner's major failure
  {
    id: 'beat_34',
    questionRef: 'ch3_q04',
    chapter: 3,
    messages: [
      {
        type: 'scene',
        text: 'TA的创业项目崩盘了。\n欠了一笔债。',
        sceneEmoji: '🌧',
        sceneGradient: 'cool',
        delay: 600,
      },
      {
        type: 'narrator',
        text: 'TA变得沉默寡言。\n不愿出门。不太和你说话。\n一天天消沉下去。',
        delay: 800,
      },
      {
        type: 'narrator',
        text: '窗外下着雨。\nTA坐在沙发上看着窗外。\n你站在身后，不知道该不该靠近。',
        delay: 700,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '每天陪在身边。不强迫说话，但让TA知道你在',
            emoji: '🤲',
            scores: { commitment_depth: 7, expression_intensity: -1, security_baseline: 5, autonomy_need: -3 },
          },
          {
            id: 'B',
            text: '帮TA分析问题，一起想出路。低谷不可怕，停在原地才可怕',
            emoji: '💡',
            scores: { growth_orientation: 7, commitment_depth: 5, conflict_style: 3, expression_intensity: 4 },
          },
          {
            id: 'C',
            text: '给空间，但坦白说"你这样让我很担心也很无力"',
            emoji: '😢',
            scores: { expression_intensity: 6, autonomy_need: 4, growth_orientation: 4, security_baseline: 2 },
          },
          {
            id: 'D',
            text: '心里开始犹豫这段关系的前景...',
            emoji: '🤔',
            scores: { commitment_depth: -5, security_baseline: -3, growth_orientation: 2, autonomy_need: 5 },
          },
        ],
      },
    ],
  },

  // ch3_q05 - Different life visions
  {
    id: 'beat_35',
    questionRef: 'ch3_q05',
    chapter: 3,
    messages: [
      {
        type: 'scene',
        text: '桌上并排放着两样东西。\n一本房产手册。一本世界地图。',
        sceneEmoji: '🗺',
        sceneGradient: 'bittersweet',
        delay: 600,
      },
      {
        type: 'partner',
        text: '我觉得我们应该先买房 在这个城市扎下根',
        delay: 600,
      },
      {
        type: 'narrator',
        text: '但你内心一直有一个梦想——\n用一年时间去国外生活一段。\n两个人对"未来的样子"有着截然不同的想象。',
        delay: 800,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '先买房吧。梦想可以延后，稳定的基础是前提',
            emoji: '🏠',
            scores: { commitment_depth: 5, growth_orientation: -4, autonomy_need: -5, conflict_style: -3 },
          },
          {
            id: 'B',
            text: '先去一年再回来买房。人生不只有一种时间表',
            emoji: '✈️',
            scores: { growth_orientation: 7, autonomy_need: 5, conflict_style: 3, expression_intensity: 4 },
          },
          {
            id: 'C',
            text: '这个分歧让你意识到底层逻辑可能不同...',
            emoji: '💭',
            scores: { growth_orientation: 5, commitment_depth: -2, security_baseline: -2, autonomy_need: 5 },
          },
          {
            id: 'D',
            text: '放弃自己的想法，但心里留下一根刺',
            emoji: '😔',
            scores: { conflict_style: -5, expression_intensity: -5, growth_orientation: -5, security_baseline: -3 },
          },
        ],
      },
    ],
  },

  // ch3_q06 - "Is this love or habit?"
  {
    id: 'beat_36',
    questionRef: 'ch3_q06',
    chapter: 3,
    messages: [
      {
        type: 'scene',
        text: '深夜。卧室。\n一盏小灯。',
        sceneEmoji: '💡',
        sceneGradient: 'bittersweet',
        delay: 600,
      },
      {
        type: 'partner',
        text: '有时候我觉得...',
        delay: 600,
      },
      {
        type: 'partner',
        text: '你不是真的爱我',
        delay: 700,
      },
      {
        type: 'partner',
        text: '只是习惯了我',
        delay: 600,
      },
      {
        type: 'narrator',
        text: '这不是在无理取闹。\n你能感觉到，这是发自内心的脆弱。',
        delay: 600,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '心被狠狠揪了一下。认真看着TA，说出你的感受',
            emoji: '💗',
            scores: { expression_intensity: 7, commitment_depth: 6, growth_orientation: 6, security_baseline: 3 },
          },
          {
            id: 'B',
            text: '觉得不公平。你默默做了那么多，为什么还被这样评价？',
            emoji: '😠',
            scores: { expression_intensity: -2, conflict_style: 3, security_baseline: -4, growth_orientation: -2 },
          },
          {
            id: 'C',
            text: '沉默。因为你自己也不确定，是爱还是习惯',
            emoji: '😶',
            scores: { commitment_depth: -4, expression_intensity: -5, security_baseline: -3, intimacy_pace: -4 },
          },
          {
            id: 'D',
            text: '拥抱TA："那我们一起找回那种感觉"',
            emoji: '🤗',
            scores: { commitment_depth: 7, growth_orientation: 7, expression_intensity: 5, intimacy_pace: 4 },
          },
        ],
      },
    ],
  },

  // ch3_q07 - Money crisis
  {
    id: 'beat_37',
    questionRef: 'ch3_q07',
    chapter: 3,
    messages: [
      {
        type: 'scene',
        text: '一个你从未见过的TA。',
        sceneEmoji: '💸',
        sceneGradient: 'tense',
        delay: 500,
      },
      {
        type: 'narrator',
        text: 'TA的家庭出了变故。需要一大笔钱。\n犹豫了很久才开口。',
        delay: 700,
      },
      {
        type: 'partner',
        text: '我不想问你借钱',
        delay: 600,
      },
      {
        type: 'partner',
        text: '但我真的走投无路了',
        delay: 700,
      },
      {
        type: 'narrator',
        text: 'TA的眼睛红红的。\n你有这笔积蓄。',
        delay: 600,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '二话不说转过去。你的就是我们的',
            emoji: '💰',
            scores: { commitment_depth: 8, autonomy_need: -5, security_baseline: 5, expression_intensity: 3 },
          },
          {
            id: 'B',
            text: '愿意帮，但提出写个借条。保护关系，钱和感情分开',
            emoji: '📝',
            scores: { autonomy_need: 6, growth_orientation: 5, commitment_depth: 3, security_baseline: 3 },
          },
          {
            id: 'C',
            text: '帮一部分，留一部分给自己。不能完全没有退路',
            emoji: '⚖️',
            scores: { autonomy_need: 5, security_baseline: 1, commitment_depth: 2, growth_orientation: 3 },
          },
          {
            id: 'D',
            text: '心情很复杂。想帮，但怕改变你们的关系',
            emoji: '😟',
            scores: { security_baseline: -5, commitment_depth: -2, expression_intensity: -3, conflict_style: -2 },
          },
        ],
      },
    ],
  },

  // ch3_q08 - Health scare
  {
    id: 'beat_38',
    questionRef: 'ch3_q08',
    chapter: 3,
    messages: [
      {
        type: 'scene',
        text: '医院走廊。白色的灯光。\n你坐在长椅上。',
        sceneEmoji: '🏥',
        sceneGradient: 'cool',
        delay: 600,
      },
      {
        type: 'narrator',
        text: '体检查出了一个需要进一步检查的问题。\n医生说大概率没事。\n但不能排除最坏的可能。',
        delay: 800,
      },
      {
        type: 'narrator',
        text: '你手里攥着检查单。\n手有点抖。',
        delay: 600,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '第一时间打给TA。你需要TA在你身边',
            emoji: '📞',
            scores: { expression_intensity: 6, autonomy_need: -5, intimacy_pace: 5, commitment_depth: 5 },
          },
          {
            id: 'B',
            text: '等结果出来再说。不想让TA跟着担心',
            emoji: '🤫',
            scores: { autonomy_need: 6, expression_intensity: -5, security_baseline: 2, conflict_style: -2 },
          },
          {
            id: 'C',
            text: '先打给最亲密的朋友或家人，而不是TA',
            emoji: '👨‍👩‍👧',
            scores: { security_baseline: -3, commitment_depth: -3, autonomy_need: 3, intimacy_pace: -4 },
          },
          {
            id: 'D',
            text: '谁也不说。自己消化。你不习惯把脆弱展示给任何人',
            emoji: '😐',
            scores: { expression_intensity: -7, autonomy_need: 8, intimacy_pace: -5, security_baseline: -2 },
          },
        ],
      },
    ],
  },

  // ch3_q09 - Emotional infidelity confession
  {
    id: 'beat_39',
    questionRef: 'ch3_q09',
    chapter: 3,
    messages: [
      {
        type: 'scene',
        text: '一个你没有准备好的夜晚。',
        sceneEmoji: '💔',
        sceneGradient: 'tense',
        delay: 600,
      },
      {
        type: 'partner',
        text: '有件事我一直没说',
        delay: 600,
      },
      {
        type: 'partner',
        text: '在我们刚在一起的时候',
        delay: 500,
      },
      {
        type: 'partner',
        text: '我和别人有过暧昧的聊天',
        delay: 700,
      },
      {
        type: 'partner',
        text: '没有任何实质行为 但... 我觉得你应该知道',
        delay: 700,
      },
      {
        type: 'narrator',
        text: 'TA低着头。\n说是因为愧疚才选择坦白。',
        delay: 600,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '"你愿意告诉我，说明你重视这段关系。我需要时间消化"',
            emoji: '🤝',
            scores: { growth_orientation: 7, commitment_depth: 4, security_baseline: 2, expression_intensity: 4 },
          },
          {
            id: 'B',
            text: '暧昧聊天就是越线。底线非常明确。信任一旦破裂...',
            emoji: '🚫',
            scores: { conflict_style: 6, commitment_depth: -4, security_baseline: -4, autonomy_need: 5 },
          },
          {
            id: 'C',
            text: '陷入自我怀疑——是不是自己做得不够好？',
            emoji: '😢',
            scores: { security_baseline: -7, expression_intensity: -2, growth_orientation: -3, autonomy_need: -4 },
          },
          {
            id: 'D',
            text: '"和谁？聊了多久？说了什么？" 必须知道全貌',
            emoji: '❓',
            scores: { conflict_style: 5, expression_intensity: 3, security_baseline: -3, growth_orientation: 1 },
          },
        ],
      },
    ],
  },

  // ch3_q10 - To have children or not
  {
    id: 'beat_40',
    questionRef: 'ch3_q10',
    chapter: 3,
    messages: [
      {
        type: 'scene',
        text: '这个问题悬在你们头上很久了。',
        sceneEmoji: '👶',
        sceneGradient: 'bittersweet',
        delay: 600,
      },
      {
        type: 'narrator',
        text: '要不要孩子。\n你不想要。TA非常想要。\n没有折中方案。',
        delay: 700,
      },
      {
        type: 'narrator',
        text: '你们在沉默中度过了好几个晚上。',
        delay: 600,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '爱TA就愿意改变。也许有了孩子会发现新的意义',
            emoji: '💝',
            scores: { commitment_depth: 6, autonomy_need: -7, conflict_style: -4, growth_orientation: 1 },
          },
          {
            id: 'B',
            text: '这是不可调和的分歧。也许应该考虑是否还适合继续',
            emoji: '💔',
            scores: { autonomy_need: 7, growth_orientation: 5, commitment_depth: -4, conflict_style: 5 },
          },
          {
            id: 'C',
            text: '建议一起去做婚姻咨询',
            emoji: '🏥',
            scores: { growth_orientation: 7, commitment_depth: 4, expression_intensity: 3, conflict_style: 2 },
          },
          {
            id: 'D',
            text: '请求再给一些时间。还没准备好做最终决定',
            emoji: '⏳',
            scores: { conflict_style: -3, commitment_depth: 1, security_baseline: -2, expression_intensity: -2 },
          },
        ],
      },
    ],
  },

  // ch3_q11 - Partner's chronic illness
  {
    id: 'beat_41',
    questionRef: 'ch3_q11',
    chapter: 3,
    messages: [
      {
        type: 'scene',
        text: '医院。\n诊断结果出来了。',
        sceneEmoji: '🏥',
        sceneGradient: 'cool',
        delay: 600,
      },
      {
        type: 'narrator',
        text: 'TA被确诊了一种慢性疾病。\n不致命，但会长期影响生活。\n需要长期治疗和照料。',
        delay: 800,
      },
      {
        type: 'narrator',
        text: 'TA坐在医院的椅子上。\n眼神里满是歉意。\n好像生病是TA的错一样。',
        delay: 700,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '握住TA的手："这是我们的事，不是你一个人的"',
            emoji: '🤝',
            scores: { commitment_depth: 9, expression_intensity: 6, security_baseline: 5, autonomy_need: -3 },
          },
          {
            id: 'B',
            text: '内心恐慌，但不表现出来。需要时间慢慢接受',
            emoji: '😶',
            scores: { commitment_depth: 3, expression_intensity: -4, security_baseline: -2, autonomy_need: 2 },
          },
          {
            id: 'C',
            text: '理性地研究疾病——治疗方案、费用、生活调整',
            emoji: '📋',
            scores: { growth_orientation: 6, commitment_depth: 5, expression_intensity: -2, security_baseline: 4 },
          },
          {
            id: 'D',
            text: '心里涌起一个不敢承认的念头... 为此感到愧疚',
            emoji: '😔',
            scores: { commitment_depth: -5, security_baseline: -4, growth_orientation: -1, expression_intensity: -3 },
          },
        ],
      },
    ],
  },

  // ch3_q12 - Soul connection with a stranger
  {
    id: 'beat_42',
    questionRef: 'ch3_q12',
    chapter: 3,
    messages: [
      {
        type: 'scene',
        text: '一个行业峰会。\n散场后。空旷的会议厅。',
        sceneEmoji: '✨',
        sceneGradient: 'romantic',
        delay: 600,
      },
      {
        type: 'narrator',
        text: '你遇到了一个人。\n聊了一整晚。\n那种思想碰撞的火花——\n是你和现任从未有过的。',
        delay: 800,
      },
      {
        type: 'narrator',
        text: '分别的时候。\n你知道，如果你要联系方式——\n这个人一定会给。',
        delay: 700,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '留了联系方式，只作为专业交流。不会越线',
            emoji: '📇',
            scores: { security_baseline: 3, commitment_depth: 3, autonomy_need: 4, growth_orientation: 3 },
          },
          {
            id: 'B',
            text: '礼貌道别，不留联系方式。你知道自己的软肋',
            emoji: '👋',
            scores: { commitment_depth: 6, security_baseline: -1, autonomy_need: -1, conflict_style: -2 },
          },
          {
            id: 'C',
            text: '开始反思和TA的关系——是不是缺少了某些东西？',
            emoji: '💭',
            scores: { growth_orientation: 5, commitment_depth: -3, security_baseline: -3, intimacy_pace: 2 },
          },
          {
            id: 'D',
            text: '回家告诉TA这件事："今天遇到一个有趣的人，让我想和你做一些改变"',
            emoji: '💬',
            scores: { expression_intensity: 7, growth_orientation: 6, commitment_depth: 5, conflict_style: 4 },
          },
        ],
      },
    ],
  },

  // ch3_q13 - Partner unemployed
  {
    id: 'beat_43',
    questionRef: 'ch3_q13',
    chapter: 3,
    messages: [
      {
        type: 'scene',
        text: '在一起五年了。\nTA失业三个月了。',
        sceneEmoji: '📊',
        sceneGradient: 'tense',
        delay: 600,
      },
      {
        type: 'narrator',
        text: '你的积蓄在迅速消耗。\n账单堆在桌上。\nTA似乎也没有太着急找工作。',
        delay: 700,
      },
      {
        type: 'narrator',
        text: '你打开电脑，看到TA的屏幕上——\n是招聘网站，但没有投递记录。',
        delay: 600,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '给TA时间和空间。低谷期你来养家',
            emoji: '💪',
            scores: { commitment_depth: 5, autonomy_need: -2, security_baseline: 3, expression_intensity: -3 },
          },
          {
            id: 'B',
            text: '"我需要你给我一个计划。这是两个人的生活"',
            emoji: '📋',
            scores: { conflict_style: 5, expression_intensity: 5, growth_orientation: 6, commitment_depth: 4 },
          },
          {
            id: 'C',
            text: '开始重新评估这段关系...',
            emoji: '🤔',
            scores: { commitment_depth: -4, autonomy_need: 5, growth_orientation: 3, security_baseline: -3 },
          },
          {
            id: 'D',
            text: '什么都不说，但内心怨气越来越重',
            emoji: '😤',
            scores: { expression_intensity: -6, conflict_style: -5, security_baseline: -4, growth_orientation: -4 },
          },
        ],
      },
    ],
  },

  // ch3_q14 - Welcome home surprise
  {
    id: 'beat_44',
    questionRef: 'ch3_q14',
    chapter: 3,
    messages: [
      {
        type: 'scene',
        text: '出差三天。\n你推开家门。',
        sceneEmoji: '🕯',
        sceneGradient: 'romantic',
        delay: 600,
      },
      {
        type: 'narrator',
        text: '蜡烛。鲜花。你最爱吃的菜。\nTA穿着你喜欢的衣服，站在门口。',
        delay: 800,
      },
      {
        type: 'partner',
        text: '欢迎回家 ❤️',
        delay: 700,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '放下行李箱，一把抱住TA',
            emoji: '🤗',
            scores: { expression_intensity: 7, intimacy_pace: 5, commitment_depth: 5, security_baseline: 5 },
          },
          {
            id: 'B',
            text: '"你搞这么大阵仗干嘛"  嘴上嫌弃，眼睛已经湿了',
            emoji: '🥹',
            scores: { expression_intensity: 2, commitment_depth: 5, security_baseline: 4, intimacy_pace: 2 },
          },
          {
            id: 'C',
            text: '开心，但有个声音说"是不是有什么事要说？"',
            emoji: '🤨',
            scores: { security_baseline: -5, expression_intensity: -3, growth_orientation: -2, commitment_depth: -1 },
          },
          {
            id: 'D',
            text: '很温暖。记住这个时刻，下次给TA一个更大的惊喜',
            emoji: '✨',
            scores: { commitment_depth: 5, growth_orientation: 4, expression_intensity: 3, security_baseline: 5 },
          },
        ],
      },
    ],
  },

  // ch3_q15 - Family criticism
  {
    id: 'beat_45',
    questionRef: 'ch3_q15',
    chapter: 3,
    messages: [
      {
        type: 'scene',
        text: '家庭聚餐。圆桌。\n满满一桌人。',
        sceneEmoji: '🍽',
        sceneGradient: 'tense',
        delay: 600,
      },
      {
        type: 'narrator',
        text: 'TA的家人当着所有人的面说——\n"做这行能养家吗？"',
        delay: 700,
      },
      {
        type: 'narrator',
        text: '所有人的目光聚焦在你身上。\nTA坐在旁边。低着头。\n一声不吭。',
        delay: 700,
      },
      {
        type: 'choice',
        choices: [
          {
            id: 'A',
            text: '"每个人的选择不同，我对自己的路很有信心"',
            emoji: '✊',
            scores: { autonomy_need: 7, conflict_style: 5, security_baseline: 5, expression_intensity: 5 },
          },
          {
            id: 'B',
            text: '当场不发作。回家后大吵："你怎么能一声不吭？"',
            emoji: '😡',
            scores: { conflict_style: 6, expression_intensity: 6, security_baseline: -3, autonomy_need: 3 },
          },
          {
            id: 'C',
            text: '笑笑不说话。但对TA的失望像一根刺扎进去了',
            emoji: '😔',
            scores: { conflict_style: -4, expression_intensity: -5, security_baseline: -5, commitment_depth: -3 },
          },
          {
            id: 'D',
            text: '回家后冷静地说："你在关键时刻的沉默让我很受伤"',
            emoji: '💬',
            scores: { growth_orientation: 6, expression_intensity: 5, conflict_style: 4, commitment_depth: 4 },
          },
        ],
      },
    ],
  },
]

// Chapter info (for transitions)
export const chapters = [
  {
    id: 1,
    title: '相识',
    subtitle: 'Getting to Know',
    description: '探索你在关系初期的样子',
    beatRange: [0, 14], // indices into storyBeats
  },
  {
    id: 2,
    title: '磨合',
    subtitle: 'Adjusting',
    description: '当激情退去，你如何经营关系的日常',
    beatRange: [15, 29],
  },
  {
    id: 3,
    title: '深水',
    subtitle: 'Deep Water',
    description: '在生命的重大时刻，你内心深处的声音',
    beatRange: [30, 44],
  },
]
