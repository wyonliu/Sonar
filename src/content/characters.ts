// ============================================================
// Sonar - Character Stories
// Complete narrative content for the interactive love story
// ============================================================

export interface Character {
  id: string
  name: string
  subtitle: string
  description: string
  emoji: string
  gender: 'male' | 'female'
  color: string
  avatar_emoji: string
  quote: string
}

export interface StoryMessageData {
  type: 'scene' | 'narrator' | 'partner' | 'player_choice' | 'trait_unlock' | 'chapter_title' | 'emoji_reaction' | 'quick_swipe'
  text?: string
  emoji?: string
  gradient?: 'warm' | 'cool' | 'tense' | 'romantic' | 'neutral' | 'bittersweet' | 'hopeful'
  delay?: number
  partnerEmotion?: 'happy' | 'neutral' | 'sad' | 'shy' | 'angry' | 'vulnerable' | 'loving' | 'distant'
  // Micro-interaction: emoji_reaction
  reactionContext?: string
  reactionOptions?: { emoji: string; label: string; scores: Record<string, number> }[]
  // Micro-interaction: quick_swipe
  swipeStatement?: string
  agreeScores?: Record<string, number>
  disagreeScores?: Record<string, number>
}

export interface ChoiceOption {
  id: string
  text: string
  emoji?: string
  scores: Record<string, number>
  affinity_change: number
  trait_unlock?: { name: string; description: string; emoji: string }
}

export interface ChoicePointData {
  id: string
  messages_before: StoryMessageData[]
  choices: ChoiceOption[]
  response_high: StoryMessageData[]
  response_low: StoryMessageData[]
}

export interface ActData {
  id: number
  title: string
  subtitle: string
  emoji: string
  gradient: string
  choice_points: ChoicePointData[]
  closing_messages: StoryMessageData[]
}

export interface Ending {
  id: string
  name: string
  emoji: string
  condition: string
  messages: StoryMessageData[]
}

export interface CharacterStory {
  character: Character
  acts: ActData[]
  endings: Ending[]
}

// ============================================================
// Character definitions
// ============================================================

export const MALE_CHARACTERS: Character[] = [
  {
    id: 'luchen',
    name: '陆辰',
    subtitle: '温柔学长',
    description: '设计公司的青年设计师，温暖可靠，喜欢咖啡和阅读。看似温柔随和的表面下，藏着不轻易示人的心事。',
    emoji: '☕',
    gender: 'male',
    color: 'from-blue-900 to-indigo-900',
    avatar_emoji: '🌙',
    quote: '嗯……我帮你带了杯咖啡',
  },
]

export const FEMALE_CHARACTERS: Character[] = [
  {
    id: 'sunian',
    name: '苏念',
    subtitle: '邻家女孩',
    description: '儿童绘本插画师，甜美真诚，有着超越年龄的通透。相信美好的事情，偶尔也会因为太过信任而受伤。',
    emoji: '🎨',
    gender: 'female',
    color: 'from-pink-900 to-rose-900',
    avatar_emoji: '🌸',
    quote: '啊，你也喜欢这本！',
  },
]

export const ALL_CHARACTERS = [...MALE_CHARACTERS, ...FEMALE_CHARACTERS]

export function getCharacterById(id: string): Character | undefined {
  return ALL_CHARACTERS.find((c) => c.id === id)
}

// ============================================================
// Emotion emoji mapping
// ============================================================

export const EMOTION_EMOJIS: Record<string, string> = {
  happy: '😊',
  neutral: '😐',
  sad: '😢',
  shy: '😳',
  angry: '😤',
  vulnerable: '🥺',
  loving: '🥰',
  distant: '😶',
}

// ============================================================
// 陆辰 (Lù Chén) - Complete Story
// ============================================================

export const LUCHEN_STORY: CharacterStory = {
  character: MALE_CHARACTERS[0],
  acts: [
    // ==================== ACT 1: 相遇 ====================
    {
      id: 1,
      title: '相遇',
      subtitle: '雨天的书签',
      emoji: '🌧️',
      gradient: 'from-slate-900/50 to-amber-900/50',
      choice_points: [
        // --- Choice Point 1: How do you respond to his first question? ---
        {
          id: 'luchen_1_1',
          messages_before: [
            { type: 'chapter_title', text: '第一章 · 相遇', emoji: '🌧️', gradient: 'warm' },
            {
              type: 'scene',
              text: '雨天的午后。一家藏在巷子里的书店咖啡馆，空气里混着咖啡香和旧书的味道。',
              emoji: '🌧️',
              gradient: 'warm',
            },
            {
              type: 'narrator',
              text: '你推开门，抖了抖伞上的雨水。角落的位置只剩一个，旁边坐着一个穿米色毛衣的男生，正低头看书。',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '你在他旁边坐下。他抬头看了你一眼，礼貌地把桌上的东西往自己那边挪了挪。',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '嗯，外面雨好大。',
              partnerEmotion: 'neutral',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '你也是来躲雨的？还是专门来这家店的？',
              partnerEmotion: 'neutral',
              delay: 1500,
            },
          ],
          choices: [
            {
              id: 'luchen_1_1_a',
              text: '"专门来的，这家店的手冲很不错。你呢？"',
              emoji: '☕',
              scores: { intimacy_pace: 4, expression_intensity: 3, security_baseline: 2, growth_orientation: 2 },
              affinity_change: 5,
            },
            {
              id: 'luchen_1_1_b',
              text: '"躲雨。不过既然来了，点杯咖啡也不错。"',
              emoji: '🌧️',
              scores: { intimacy_pace: -2, expression_intensity: -1, autonomy_need: 4, conflict_style: 2 },
              affinity_change: 2,
            },
            {
              id: 'luchen_1_1_c',
              text: '"两者都有吧。你在看什么书？看起来很投入。"',
              emoji: '📖',
              scores: { intimacy_pace: 5, expression_intensity: 4, security_baseline: 3 },
              affinity_change: 7,
              trait_unlock: {
                name: '好奇心引力',
                description: '你对他人世界的真诚好奇，是关系的起点',
                emoji: '🔍',
              },
            },
            {
              id: 'luchen_1_1_d',
              text: '微微点头，然后低头看自己的手机。不太想和陌生人闲聊。',
              emoji: '📱',
              scores: { intimacy_pace: -4, expression_intensity: -3, autonomy_need: 5, security_baseline: -1 },
              affinity_change: -3,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '嗯，是《小王子》。',
              partnerEmotion: 'shy',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '别笑我。二十八岁的人还在看童话。',
              partnerEmotion: 'happy',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '但你有没有觉得，有些书小时候读和长大后读，完全不是同一本书。',
              partnerEmotion: 'neutral',
              delay: 2000,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '哦，随便翻翻。',
              partnerEmotion: 'neutral',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '这家店的咖啡确实不错。',
              partnerEmotion: 'distant',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '他转回去继续看书了，但似乎没有之前那么投入。',
              delay: 1200,
            },
          ],
        },
        // --- Choice Point 2: He shares something personal ---
        {
          id: 'luchen_1_2',
          messages_before: [
            {
              type: 'narrator',
              text: '聊着聊着，话题从书聊到了工作，又从工作聊到了生活。窗外的雨不知什么时候变小了。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '我是做设计的。说起来挺矛盾的，工作上要不断创造新的东西，但我这个人其实挺怕变化的。',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '上一段感情就是因为这个。她觉得我太"稳"了，没意思。',
              partnerEmotion: 'sad',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '不好意思，跟你说这些。刚认识就聊这么深，有点奇怪吧。',
              partnerEmotion: 'shy',
              delay: 1800,
            },
          ],
          choices: [
            {
              id: 'luchen_1_2_a',
              text: '"不奇怪。我觉得\'稳\'是很珍贵的品质。其实我也有过类似的经历。"',
              emoji: '💬',
              scores: { expression_intensity: 5, intimacy_pace: 4, security_baseline: 3, commitment_depth: 2 },
              affinity_change: 7,
              trait_unlock: {
                name: '共鸣体质',
                description: '你愿意在他人袒露脆弱时回应以真诚',
                emoji: '🤝',
              },
            },
            {
              id: 'luchen_1_2_b',
              text: '"每个人的节奏不一样，没有什么好不好意思的。"',
              emoji: '😊',
              scores: { expression_intensity: 2, security_baseline: 4, autonomy_need: 3, growth_orientation: 2 },
              affinity_change: 4,
            },
            {
              id: 'luchen_1_2_c',
              text: '"哈哈，是有点奇怪。但这种聊天挺舒服的。"',
              emoji: '😄',
              scores: { expression_intensity: 4, intimacy_pace: 3, security_baseline: 2, conflict_style: 2 },
              affinity_change: 5,
            },
            {
              id: 'luchen_1_2_d',
              text: '"嗯。"然后沉默了一会儿，不知道该怎么接。感情的话题让你有点不自在。',
              emoji: '😶',
              scores: { expression_intensity: -4, intimacy_pace: -3, security_baseline: -2, autonomy_need: 4 },
              affinity_change: -2,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '真的吗？',
              partnerEmotion: 'happy',
              delay: 800,
            },
            {
              type: 'partner',
              text: '……谢谢你这样说。',
              partnerEmotion: 'loving',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '我叫陆辰，你呢？',
              partnerEmotion: 'happy',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '他笑起来的时候眼睛弯弯的，很好看。',
              delay: 1200,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '嗯，也是。',
              partnerEmotion: 'neutral',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '对了，我叫陆辰。',
              partnerEmotion: 'neutral',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '他似乎察觉到你的保留，话题也跟着变得轻松表面了。',
              delay: 1200,
            },
          ],
        },
      ],
      closing_messages: [
        {
          type: 'narrator',
          text: '雨停了。光线从云层的缝隙里透出来，洒在书店的木地板上。',
          gradient: 'warm',
          delay: 1500,
        },
        {
          type: 'partner',
          text: '雨停了。你要走了吗？',
          partnerEmotion: 'neutral',
          delay: 1200,
        },
        {
          type: 'partner',
          text: '嗯……方便加个微信吗？这家店新出的豆子下周到，到时候可以再来。',
          partnerEmotion: 'shy',
          delay: 2000,
        },
        {
          type: 'emoji_reaction',
          reactionContext: '他有点紧张地等着你的回应',
          reactionOptions: [
            { emoji: '😊', label: '开心', scores: { intimacy_pace: 3, expression_intensity: 2 } },
            { emoji: '😏', label: '有趣', scores: { autonomy_need: 2, expression_intensity: 1 } },
            { emoji: '🥰', label: '心动', scores: { intimacy_pace: 4, security_baseline: 2 } },
            { emoji: '😐', label: '平静', scores: { autonomy_need: 3, intimacy_pace: -2 } },
          ],
        },
        {
          type: 'narrator',
          text: '你们交换了联系方式。他的头像是一杯咖啡，朋友圈里都是设计作品和偶尔的读书笔记。',
          delay: 1500,
        },
        {
          type: 'quick_swipe',
          swipeStatement: '他说"下周再来"的时候，你已经有点期待了',
          agreeScores: { intimacy_pace: 3, commitment_depth: 2 },
          disagreeScores: { autonomy_need: 2, intimacy_pace: -1 },
        },
        {
          type: 'narrator',
          text: '走出书店的时候，你发现雨后的空气格外清新。',
          gradient: 'hopeful',
          delay: 1200,
        },
      ],
    },

    // ==================== ACT 2: 心动 ====================
    {
      id: 2,
      title: '心动',
      subtitle: '深夜的信号',
      emoji: '✨',
      gradient: 'from-rose-900/50 to-purple-900/50',
      choice_points: [
        // --- Choice Point 3: He goes quiet for 2 days ---
        {
          id: 'luchen_2_1',
          messages_before: [
            { type: 'chapter_title', text: '第二章 · 心动', emoji: '✨', gradient: 'romantic' },
            {
              type: 'narrator',
              text: '过去一周，你们几乎每天都在聊天。从早安到晚安，消息来来回回，像两条交织的线。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '今天项目汇报完了，终于可以松口气',
              partnerEmotion: 'happy',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '你吃晚饭了没',
              partnerEmotion: 'neutral',
              delay: 800,
            },
            {
              type: 'narrator',
              text: '然后，他突然消失了。',
              delay: 2000,
            },
            {
              type: 'scene',
              text: '两天没有任何消息。微信对话停在他最后那条"你吃晚饭了没"。你的消息显示已读，但没有回复。',
              emoji: '📱',
              gradient: 'tense',
            },
          ],
          choices: [
            {
              id: 'luchen_2_1_a',
              text: '再发一条："嘿，这两天忙吗？有点想你。"直接表达。',
              emoji: '💬',
              scores: { security_baseline: 6, expression_intensity: 7, intimacy_pace: 5 },
              affinity_change: 10,
            },
            {
              id: 'luchen_2_1_b',
              text: '什么都不发。他有他的节奏，不回就不回，我也有自己的生活。',
              emoji: '🤷',
              scores: { security_baseline: -4, autonomy_need: 7, expression_intensity: -5, intimacy_pace: -3 },
              affinity_change: -2,
            },
            {
              id: 'luchen_2_1_c',
              text: '发一张好看的食物照片，附一句"今天发现一家不错的店"，给个台阶。',
              emoji: '📷',
              scores: { security_baseline: 3, expression_intensity: 2, intimacy_pace: 2, conflict_style: 3 },
              affinity_change: 7,
              trait_unlock: {
                name: '安全感雷达',
                description: '你在不确定时选择温和试探，而非直接对抗',
                emoji: '📡',
              },
            },
            {
              id: 'luchen_2_1_d',
              text: '翻看他的朋友圈，看看有没有什么线索。心里开始胡思乱想。',
              emoji: '😰',
              scores: { security_baseline: -7, expression_intensity: -3, autonomy_need: -4 },
              affinity_change: 0,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '对不起对不起！！',
              partnerEmotion: 'sad',
              delay: 800,
            },
            {
              type: 'partner',
              text: '这两天项目出了大问题，一直在加班改方案，手机都没怎么看',
              partnerEmotion: 'sad',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '嗯……我也有点想你。说出来有点不好意思',
              partnerEmotion: 'shy',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '明天晚上有空吗？想见你',
              partnerEmotion: 'loving',
              delay: 1500,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '不好意思，这两天太忙了',
              partnerEmotion: 'neutral',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '项目上出了点事',
              partnerEmotion: 'neutral',
              delay: 1200,
            },
            {
              type: 'narrator',
              text: '他的回复来得有些慢，语气也比之前客气了。',
              delay: 1500,
            },
          ],
        },
        // --- Choice Point 4: Late night deep conversation ---
        {
          id: 'luchen_2_2',
          messages_before: [
            {
              type: 'scene',
              text: '深夜11点。你们坐在他常去的那家咖啡馆的露天位，街灯把影子拉得很长。',
              emoji: '🌙',
              gradient: 'romantic',
            },
            {
              type: 'partner',
              text: '你有没有那种……特别害怕的东西？不是蟑螂那种，是更深层的。',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '我最怕的是被需要，又不被看见。',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '就是……你一直在付出，对方觉得理所当然，但从来不问你过得好不好。',
              partnerEmotion: 'sad',
              delay: 2000,
            },
            {
              type: 'narrator',
              text: '夜风吹过来，带着一点秋天的凉意。他没有看你，而是看着街对面某个不存在的地方。',
              delay: 1500,
            },
          ],
          choices: [
            {
              id: 'luchen_2_2_a',
              text: '"我理解。我怕的是……投入了全部，最后发现对方不是真的想留下来。"',
              emoji: '🌙',
              scores: { commitment_depth: 6, expression_intensity: 8, security_baseline: 4, intimacy_pace: 5 },
              affinity_change: 8,
            },
            {
              id: 'luchen_2_2_b',
              text: '"听你这样说，我觉得你一定是一个很好的人。但你也要学会对自己好。"',
              emoji: '💛',
              scores: { expression_intensity: 4, commitment_depth: 3, security_baseline: 5 },
              affinity_change: 8,
            },
            {
              id: 'luchen_2_2_c',
              text: '"太深了太深了，再聊下去我要哭了哈哈。来，干杯，换个轻松的话题。"',
              emoji: '🍻',
              scores: { expression_intensity: -5, security_baseline: -3, intimacy_pace: -2, conflict_style: -2 },
              affinity_change: -5,
            },
            {
              id: 'luchen_2_2_d',
              text: '默默握住他的手。什么都没说。',
              emoji: '🤝',
              scores: { expression_intensity: 5, intimacy_pace: 8, commitment_depth: 5, security_baseline: 6 },
              affinity_change: 7,
              trait_unlock: {
                name: '心动阈值',
                description: '在对的时刻，你选择行动而非语言',
                emoji: '💓',
              },
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '他低头看着你们握在一起的手，沉默了很久。',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '……你知道吗，我好久没有跟人说过这些了。',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '嗯。',
              partnerEmotion: 'loving',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '谢谢你。',
              partnerEmotion: 'loving',
              delay: 1000,
            },
            {
              type: 'narrator',
              text: '那个晚上，有什么东西悄悄改变了。',
              gradient: 'romantic',
              delay: 2000,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '哈哈，好，不说了。',
              partnerEmotion: 'neutral',
              delay: 1000,
            },
            {
              type: 'narrator',
              text: '他笑了一下，但笑容没有到达眼睛。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '不早了，我送你回去吧。',
              partnerEmotion: 'distant',
              delay: 1500,
            },
          ],
        },
      ],
      closing_messages: [
        {
          type: 'narrator',
          text: '从咖啡馆走回去的路上，你们走得很近。肩膀偶尔碰到一起，谁都没有刻意避开。',
          gradient: 'romantic',
          delay: 1500,
        },
        {
          type: 'emoji_reaction',
          reactionContext: '走在一起的时候，你心里的感觉是',
          reactionOptions: [
            { emoji: '💓', label: '心跳加速', scores: { intimacy_pace: 3, expression_intensity: 2 } },
            { emoji: '😌', label: '很安心', scores: { security_baseline: 3, commitment_depth: 2 } },
            { emoji: '🦋', label: '有点紧张', scores: { intimacy_pace: 2, security_baseline: -1 } },
            { emoji: '🤔', label: '在想什么', scores: { autonomy_need: 2, growth_orientation: 2 } },
          ],
        },
        {
          type: 'partner',
          text: '到了。',
          partnerEmotion: 'shy',
          delay: 1000,
        },
        {
          type: 'partner',
          text: '晚安。',
          partnerEmotion: 'loving',
          delay: 1200,
        },
        {
          type: 'narrator',
          text: '他转身走了几步，又回头看了你一眼。',
          delay: 1500,
        },
        {
          type: 'quick_swipe',
          swipeStatement: '你希望他再多走慢一点',
          agreeScores: { intimacy_pace: 3, commitment_depth: 2 },
          disagreeScores: { autonomy_need: 2, intimacy_pace: -1 },
        },
        {
          type: 'narrator',
          text: '你知道，有些事情正在发生。',
          gradient: 'hopeful',
          delay: 1500,
        },
      ],
    },

    // ==================== ACT 3: 走近 ====================
    {
      id: 3,
      title: '走近',
      subtitle: '两个人的轮廓',
      emoji: '🌸',
      gradient: 'from-pink-900/50 to-rose-900/50',
      choice_points: [
        // --- Choice Point 5: Meeting friends ---
        {
          id: 'luchen_3_1',
          messages_before: [
            { type: 'chapter_title', text: '第三章 · 走近', emoji: '🌸', gradient: 'romantic' },
            {
              type: 'narrator',
              text: '在一起的第三周。"在一起"这三个字谁都没正式说过，但你们都心知肚明。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '这周六我几个大学同学聚会',
              partnerEmotion: 'neutral',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '要不要一起来？',
              partnerEmotion: 'shy',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '他们都挺好相处的，不过你要是不想来也没关系',
              partnerEmotion: 'neutral',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '你能感觉到他在小心翼翼地措辞，怕给你压力。',
              delay: 1200,
            },
          ],
          choices: [
            {
              id: 'luchen_3_1_a',
              text: '"好啊，我也想认识你的朋友们。穿什么风格比较好？"',
              emoji: '👋',
              scores: { autonomy_need: -3, intimacy_pace: 5, commitment_depth: 4, security_baseline: 4 },
              affinity_change: 10,
            },
            {
              id: 'luchen_3_1_b',
              text: '"这周六我本来约了朋友，下次吧？"',
              emoji: '📅',
              scores: { autonomy_need: 7, intimacy_pace: -3, commitment_depth: -2 },
              affinity_change: -3,
            },
            {
              id: 'luchen_3_1_c',
              text: '"说实话有点紧张，但我想去。你到时候要罩着我哦。"',
              emoji: '😬',
              scores: { autonomy_need: -1, expression_intensity: 6, intimacy_pace: 4, security_baseline: 3 },
              affinity_change: 7,
            },
            {
              id: 'luchen_3_1_d',
              text: '"我去可以，但我不太擅长社交，可能会比较安静。"',
              emoji: '🤫',
              scores: { autonomy_need: 3, expression_intensity: 3, security_baseline: 2 },
              affinity_change: 5,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '哈哈哈你放心！',
              partnerEmotion: 'happy',
              delay: 800,
            },
            {
              type: 'partner',
              text: '他们都是很随意的人，你做你自己就好',
              partnerEmotion: 'happy',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '而且……我也想让他们见见你',
              partnerEmotion: 'shy',
              delay: 1800,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '好的，那下次吧',
              partnerEmotion: 'neutral',
              delay: 1000,
            },
            {
              type: 'narrator',
              text: '"好的"两个字很轻，但你总觉得背后有些什么沉了下去。',
              delay: 1500,
            },
          ],
        },
        // --- Choice Point 6: First disagreement ---
        {
          id: 'luchen_3_2',
          messages_before: [
            {
              type: 'narrator',
              text: '周五晚上，你们在讨论周末的安排。',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '我想带你去郊外一个很美的地方，开车大概一个半小时',
              partnerEmotion: 'happy',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '有一片芦苇荡，这个季节特别好看',
              partnerEmotion: 'happy',
              delay: 1200,
            },
            {
              type: 'narrator',
              text: '但你其实已经计划好了周末要宅在家里，追一部新出的剧，享受一下独处的时光。',
              delay: 1500,
            },
          ],
          choices: [
            {
              id: 'luchen_3_2_a',
              text: '"听起来不错，但我这周有点累，想在家休息。下周去好不好？"',
              emoji: '🛋️',
              scores: { conflict_style: 5, autonomy_need: 5, expression_intensity: 4, security_baseline: 3 },
              affinity_change: 5,
              trait_unlock: {
                name: '边界意识',
                description: '你能温和但清楚地表达自己的需求',
                emoji: '🛡️',
              },
            },
            {
              id: 'luchen_3_2_b',
              text: '"好呀好呀，你安排就行。"虽然不太想去，但看他那么开心也不好拒绝。',
              emoji: '😊',
              scores: { conflict_style: -6, autonomy_need: -5, expression_intensity: -4, security_baseline: 2 },
              affinity_change: 3,
            },
            {
              id: 'luchen_3_2_c',
              text: '"这样吧，周六我在家休息，周日我们去？各取所需。"',
              emoji: '🤝',
              scores: { conflict_style: 7, autonomy_need: 4, expression_intensity: 3, commitment_depth: 3 },
              affinity_change: 8,
            },
            {
              id: 'luchen_3_2_d',
              text: '"我周末有安排了。"不想解释太多。',
              emoji: '✋',
              scores: { conflict_style: -3, autonomy_need: 8, expression_intensity: -6, security_baseline: -4 },
              affinity_change: -8,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '周日去，没问题！',
              partnerEmotion: 'happy',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '嗯，你需要休息就好好休息',
              partnerEmotion: 'loving',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '我周六去工作室画点东西，正好也有个项目要改',
              partnerEmotion: 'neutral',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '周日见 ☀️',
              partnerEmotion: 'happy',
              delay: 1000,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '哦，好吧。',
              partnerEmotion: 'sad',
              delay: 1000,
            },
            {
              type: 'narrator',
              text: '一个"哦"字里装了很多东西。你们第一次感觉到了不同频的摩擦。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '那就下次吧',
              partnerEmotion: 'distant',
              delay: 1200,
            },
          ],
        },
        // --- Choice Point 7: Vulnerability - he cries ---
        {
          id: 'luchen_3_3',
          messages_before: [
            {
              type: 'scene',
              text: '一个普通的晚上，你们在他的公寓里做饭。他接了一个电话，是他妈妈打来的。',
              emoji: '🏠',
              gradient: 'warm',
            },
            {
              type: 'narrator',
              text: '你听到他在阳台上压低声音说话，语气从耐心慢慢变成疲惫。',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '挂了电话，他回到厨房，沉默了一会儿。然后你看到他的眼眶红了。',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '对不起……',
              partnerEmotion: 'vulnerable',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '我妈又在催我相亲了。她觉得我一个人不正常。每次都这样，我跟她说我有喜欢的人了，她不信。',
              partnerEmotion: 'sad',
              delay: 2500,
            },
            {
              type: 'narrator',
              text: '他偏过头去，不想让你看到他流泪的样子。',
              delay: 1500,
            },
          ],
          choices: [
            {
              id: 'luchen_3_3_a',
              text: '走过去，从背后抱住他。什么都不说。',
              emoji: '🫂',
              scores: { expression_intensity: 6, security_baseline: 7, intimacy_pace: 5, commitment_depth: 4 },
              affinity_change: 8,
            },
            {
              id: 'luchen_3_3_b',
              text: '"没关系，哭出来也没什么。你不用在我面前逞强。"',
              emoji: '💧',
              scores: { expression_intensity: 5, security_baseline: 6, intimacy_pace: 4 },
              affinity_change: 10,
            },
            {
              id: 'luchen_3_3_c',
              text: '递给他一张纸巾，然后说："你妈妈只是担心你。她会理解的。"',
              emoji: '🩹',
              scores: { expression_intensity: 2, security_baseline: 3, conflict_style: 2 },
              affinity_change: 4,
            },
            {
              id: 'luchen_3_3_d',
              text: '有点手足无措。你不太习惯处理别人的情绪，默默退到一边，给他空间。',
              emoji: '🚶',
              scores: { expression_intensity: -5, security_baseline: -4, autonomy_need: 5, intimacy_pace: -3 },
              affinity_change: -5,
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '他的身体僵了一下，然后慢慢放松下来，靠在你身上。',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '你知道吗……',
              partnerEmotion: 'vulnerable',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '从小到大，别人都觉得我很好，很温柔，很体贴。但没有人问过我累不累。',
              partnerEmotion: 'sad',
              delay: 2500,
            },
            {
              type: 'partner',
              text: '谢谢你。在你面前我好像可以不用那么"好"。',
              partnerEmotion: 'loving',
              delay: 2000,
            },
            {
              type: 'trait_unlock',
              text: '脆弱开关',
              emoji: '🔓',
            },
          ],
          response_low: [
            {
              type: 'narrator',
              text: '他很快擦掉眼泪，重新露出那个礼貌的笑容。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '没事没事，我好了。我们继续做饭吧。',
              partnerEmotion: 'neutral',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '那面具戴回去的速度，快得让人心疼。',
              delay: 1500,
            },
          ],
        },
      ],
      closing_messages: [
        {
          type: 'narrator',
          text: '那天晚上你们第一次睡在同一张床上。什么都没发生，但你听着他均匀的呼吸声，觉得世界很安静。',
          gradient: 'romantic',
          delay: 2000,
        },
        {
          type: 'emoji_reaction',
          reactionContext: '听着他的呼吸声，你在想',
          reactionOptions: [
            { emoji: '🥰', label: '好幸福', scores: { commitment_depth: 3, security_baseline: 3 } },
            { emoji: '😊', label: '很平静', scores: { security_baseline: 3, autonomy_need: 1 } },
            { emoji: '🤗', label: '想靠近', scores: { intimacy_pace: 3, expression_intensity: 2 } },
            { emoji: '😶', label: '有点怕', scores: { security_baseline: -2, commitment_depth: -1 } },
          ],
        },
        {
          type: 'quick_swipe',
          swipeStatement: '你已经开始想象和他在一起更久的未来',
          agreeScores: { commitment_depth: 3, growth_orientation: 2 },
          disagreeScores: { autonomy_need: 2, commitment_depth: -1 },
        },
        {
          type: 'narrator',
          text: '你们在一起了。不是某一个戏剧性的瞬间，而是很多个这样安静的时刻叠加起来的。',
          gradient: 'warm',
          delay: 2000,
        },
      ],
    },

    // ==================== ACT 4: 摩擦 ====================
    {
      id: 4,
      title: '摩擦',
      subtitle: '裂缝与真相',
      emoji: '⛈️',
      gradient: 'from-gray-900/50 to-indigo-900/50',
      choice_points: [
        // --- Choice Point 8: Ex sends a message ---
        {
          id: 'luchen_4_1',
          messages_before: [
            { type: 'chapter_title', text: '第四章 · 摩擦', emoji: '⛈️', gradient: 'tense' },
            {
              type: 'narrator',
              text: '在一起两个月了。热恋期的滤镜慢慢褪去，生活开始显露它真实的纹理。',
              delay: 1500,
            },
            {
              type: 'scene',
              text: '你无意间看到他手机屏幕亮了一下。一条微信消息，备注名是一个女生的名字，后面跟着"前"字。',
              emoji: '📱',
              gradient: 'tense',
            },
            {
              type: 'narrator',
              text: '"陆辰，好久不见。最近还好吗？我搬回这个城市了。"',
              delay: 2000,
            },
            {
              type: 'narrator',
              text: '他还没看到这条消息。你先看到了。',
              delay: 1500,
            },
          ],
          choices: [
            {
              id: 'luchen_4_1_a',
              text: '假装没看到。他会处理好的，我选择信任。',
              emoji: '🙈',
              scores: { security_baseline: 6, conflict_style: -2, autonomy_need: 4, commitment_depth: 3 },
              affinity_change: 5,
            },
            {
              id: 'luchen_4_1_b',
              text: '"你前任给你发消息了。"直接告诉他，然后观察他的反应。',
              emoji: '👀',
              scores: { security_baseline: 3, conflict_style: 5, expression_intensity: 5, commitment_depth: 4 },
              affinity_change: 6,
              trait_unlock: {
                name: '信任底色',
                description: '面对不安时，你选择坦诚而非回避',
                emoji: '🔑',
              },
            },
            {
              id: 'luchen_4_1_c',
              text: '心里很不舒服，但不说。等他自己提起来。如果他不说，那就是有问题。',
              emoji: '😤',
              scores: { security_baseline: -6, conflict_style: -5, expression_intensity: -4, autonomy_need: 2 },
              affinity_change: -5,
            },
            {
              id: 'luchen_4_1_d',
              text: '"她搬回来了？你们还有联系？"语气里带了点质问。',
              emoji: '😠',
              scores: { security_baseline: -5, conflict_style: -4, expression_intensity: 4, commitment_depth: 2 },
              affinity_change: -8,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '哦，她啊。',
              partnerEmotion: 'neutral',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '谢谢你告诉我。我回一下，就说"好的，祝你一切顺利"。',
              partnerEmotion: 'neutral',
              delay: 1800,
            },
            {
              type: 'partner',
              text: '你放心，那一页早就翻过去了。',
              partnerEmotion: 'loving',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '现在这一页上只有你。',
              partnerEmotion: 'loving',
              delay: 1200,
            },
            {
              type: 'narrator',
              text: '他说这话的时候看着你的眼睛，很认真。',
              delay: 1500,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '……你看到了？',
              partnerEmotion: 'neutral',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '那是之前的事了。不用担心。',
              partnerEmotion: 'distant',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '他的解释很简短。你不确定这是因为真的不在意，还是不想和你深聊这个话题。',
              delay: 1800,
            },
          ],
        },
        // --- Choice Point 9: A real fight ---
        {
          id: 'luchen_4_2',
          messages_before: [
            {
              type: 'narrator',
              text: '一周后的某个傍晚。你们约好了一起吃饭，但他又因为加班迟到了一个小时。这已经是这个月第三次了。',
              delay: 1800,
            },
            {
              type: 'partner',
              text: '到了到了，不好意思！',
              partnerEmotion: 'sad',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '领导临时加了个需求，我也没办法……',
              partnerEmotion: 'sad',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '你的菜已经凉了。你等了一个小时。',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '你不是生气他迟到，你生气的是——他好像永远把所有人的需求排在你前面。领导的、同事的、家人的。唯独你的，总是"下次"。',
              delay: 2500,
            },
          ],
          choices: [
            {
              id: 'luchen_4_2_a',
              text: '"陆辰，我不想每次都说\'没关系\'。我们需要谈谈。"',
              emoji: '💢',
              scores: { conflict_style: 7, growth_orientation: 6, expression_intensity: 6, commitment_depth: 5 },
              affinity_change: 5,
            },
            {
              id: 'luchen_4_2_b',
              text: '"没事，来了就好。快吃吧。"把不满咽下去。',
              emoji: '😶',
              scores: { conflict_style: -7, expression_intensity: -6, growth_orientation: -3, security_baseline: -2 },
              affinity_change: -3,
            },
            {
              id: 'luchen_4_2_c',
              text: '"你自己吃吧，我先走了。"站起来就走，你需要冷静一下。',
              emoji: '🚪',
              scores: { conflict_style: -4, autonomy_need: 5, expression_intensity: 3, security_baseline: -5 },
              affinity_change: -6,
            },
            {
              id: 'luchen_4_2_d',
              text: '"我理解工作忙，但我也需要被重视。我们能不能找个办法？"',
              emoji: '🤝',
              scores: { conflict_style: 8, growth_orientation: 7, expression_intensity: 5, commitment_depth: 6 },
              affinity_change: 10,
              trait_unlock: {
                name: '冲突本能',
                description: '你不回避矛盾，而是把它变成关系升级的契机',
                emoji: '⚡',
              },
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '他放下筷子，沉默了几秒。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '你说得对。',
              partnerEmotion: 'sad',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '我确实……有这个毛病。总觉得对别人的要求不好说"不"，但是对你，反而觉得你会理解，会体谅。',
              partnerEmotion: 'vulnerable',
              delay: 2500,
            },
            {
              type: 'partner',
              text: '但这不公平。你不应该因为对我好，就得到最少的重视。',
              partnerEmotion: 'sad',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '我会改的。不是说说而已。',
              partnerEmotion: 'loving',
              delay: 1500,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '……',
              partnerEmotion: 'sad',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '你要这样的话，我也没什么好说的。',
              partnerEmotion: 'distant',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '沉默像一堵透明的墙，横在你们中间。',
              delay: 1500,
            },
          ],
        },
        // --- Choice Point 10: Needs space ---
        {
          id: 'luchen_4_3',
          messages_before: [
            {
              type: 'narrator',
              text: '那次吵架之后，表面上和好了，但你能感觉到有什么东西变了。',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '一个周三的晚上，你照常给他发消息。',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '嗯……我跟你说件事',
              partnerEmotion: 'neutral',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '最近我状态不太好。工作上压力很大，我觉得我可能需要一些自己的时间',
              partnerEmotion: 'sad',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '不是不想和你在一起',
              partnerEmotion: 'sad',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '只是……我怕这样的我会影响到你',
              partnerEmotion: 'vulnerable',
              delay: 1800,
            },
          ],
          choices: [
            {
              id: 'luchen_4_3_a',
              text: '"好。你需要多少时间都可以。我就在这里，不会走。"',
              emoji: '🌿',
              scores: { autonomy_need: 6, security_baseline: 7, commitment_depth: 6, growth_orientation: 4 },
              affinity_change: 10,
            },
            {
              id: 'luchen_4_3_b',
              text: '"你能不能不要每次都自己扛？我是你的伴侣，不是外人。"',
              emoji: '😟',
              scores: { autonomy_need: -5, expression_intensity: 6, commitment_depth: 5, security_baseline: 2 },
              affinity_change: 2,
            },
            {
              id: 'luchen_4_3_c',
              text: '"你需要空间"是不是"想分手"的委婉说法？你直说。',
              emoji: '💔',
              scores: { security_baseline: -8, conflict_style: -3, expression_intensity: 4, autonomy_need: -3 },
              affinity_change: -7,
            },
            {
              id: 'luchen_4_3_d',
              text: '"好的，我也正好有些自己的事情想做。我们各自调整一下。"',
              emoji: '🤝',
              scores: { autonomy_need: 7, security_baseline: 4, growth_orientation: 5, commitment_depth: 3 },
              affinity_change: 7,
              trait_unlock: {
                name: '独立基因',
                description: '你能在亲密关系中保持自我的完整',
                emoji: '🧬',
              },
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '……',
              partnerEmotion: 'vulnerable',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '你怎么每次都知道该说什么。',
              partnerEmotion: 'loving',
              delay: 1800,
            },
            {
              type: 'partner',
              text: '给我一两周好吗。我会想你的。',
              partnerEmotion: 'loving',
              delay: 1500,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '不是想分手……',
              partnerEmotion: 'sad',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '算了，你不理解也没关系。',
              partnerEmotion: 'distant',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '他关掉了对话框。屏幕暗了下去。',
              delay: 2000,
            },
          ],
        },
      ],
      closing_messages: [
        {
          type: 'scene',
          text: '接下来的日子，你们之间隔着一段说不清的距离。不是分开，但也不像之前那么近。',
          emoji: '🌫️',
          gradient: 'bittersweet',
        },
        {
          type: 'emoji_reaction',
          reactionContext: '这段沉默的日子里，你内心最强烈的感受是',
          reactionOptions: [
            { emoji: '😢', label: '难过', scores: { security_baseline: -2, commitment_depth: 2 } },
            { emoji: '😤', label: '不甘', scores: { conflict_style: 3, growth_orientation: 2 } },
            { emoji: '🧘', label: '接受', scores: { autonomy_need: 3, security_baseline: 2 } },
            { emoji: '💪', label: '想改变', scores: { growth_orientation: 3, commitment_depth: 2 } },
          ],
        },
        {
          type: 'quick_swipe',
          swipeStatement: '你觉得这段关系值得你去争取',
          agreeScores: { commitment_depth: 3, growth_orientation: 2 },
          disagreeScores: { autonomy_need: 2, commitment_depth: -2 },
        },
        {
          type: 'narrator',
          text: '你开始想，这段感情是不是到了一个路口。',
          delay: 1500,
        },
        {
          type: 'narrator',
          text: '而你，需要做出选择。',
          gradient: 'tense',
          delay: 1500,
        },
      ],
    },

    // ==================== ACT 5: 抉择 ====================
    {
      id: 5,
      title: '抉择',
      subtitle: '最后的书签',
      emoji: '🌅',
      gradient: 'from-orange-900/50 to-amber-900/50',
      choice_points: [
        // --- Choice Point 11: Life change ---
        {
          id: 'luchen_5_1',
          messages_before: [
            { type: 'chapter_title', text: '第五章 · 抉择', emoji: '🌅', gradient: 'hopeful' },
            {
              type: 'narrator',
              text: '两周后，他主动联系了你。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '能见面吗？有件事想跟你说',
              partnerEmotion: 'neutral',
              delay: 1500,
            },
            {
              type: 'scene',
              text: '还是那家书店咖啡馆。你们坐在第一次见面的位置。',
              emoji: '☕',
              gradient: 'bittersweet',
            },
            {
              type: 'partner',
              text: '公司给了我一个机会，去深圳带一个新的项目组。至少一年。',
              partnerEmotion: 'neutral',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '这是我一直想要的机会。',
              partnerEmotion: 'sad',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '但是……',
              partnerEmotion: 'vulnerable',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '他没有把那个"但是"说完。你们都知道那意味着什么。',
              delay: 2000,
            },
          ],
          choices: [
            {
              id: 'luchen_5_1_a',
              text: '"你去吧。这个机会太好了，我不想成为你犹豫的理由。我们可以试试异地。"',
              emoji: '✈️',
              scores: { commitment_depth: 7, growth_orientation: 8, autonomy_need: 5, security_baseline: 4 },
              affinity_change: 10,
            },
            {
              id: 'luchen_5_1_b',
              text: '"我不想做异地恋。要么你留下，要么……我们想别的办法。"',
              emoji: '🏠',
              scores: { commitment_depth: 5, growth_orientation: -3, security_baseline: -4, autonomy_need: -3 },
              affinity_change: -3,
            },
            {
              id: 'luchen_5_1_c',
              text: '"这件事我们需要一起决定。你先别急着答复公司，我们好好想想。"',
              emoji: '🤔',
              scores: { commitment_depth: 8, growth_orientation: 5, conflict_style: 6, expression_intensity: 5 },
              affinity_change: 7,
              trait_unlock: {
                name: '承诺温度',
                description: '在关系的岔路口，你选择"我们"而非"我"',
                emoji: '🌡️',
              },
            },
            {
              id: 'luchen_5_1_d',
              text: '"……你是来告诉我，还是来问我意见？"',
              emoji: '😔',
              scores: { commitment_depth: -2, security_baseline: -5, expression_intensity: 3, conflict_style: -3 },
              affinity_change: -8,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '嗯。你说得对。',
              partnerEmotion: 'loving',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '是"我们"的事。不是"我"的。',
              partnerEmotion: 'loving',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '我之前一个人做决定做惯了，忘了现在有你了。',
              partnerEmotion: 'shy',
              delay: 2000,
            },
            {
              type: 'narrator',
              text: '他伸手过来，轻轻握住了你的手。就像那个深夜的咖啡馆外一样。',
              gradient: 'romantic',
              delay: 2000,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '我……我是来问你的。',
              partnerEmotion: 'sad',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '但你这个反应让我觉得，也许答案已经很明显了。',
              partnerEmotion: 'distant',
              delay: 2000,
            },
            {
              type: 'narrator',
              text: '咖啡凉了。窗外的天色暗了下来。',
              delay: 1500,
            },
          ],
        },
        // --- Choice Point 12: Final moment ---
        {
          id: 'luchen_5_2',
          messages_before: [
            {
              type: 'narrator',
              text: '你们走出咖啡馆。雨后的空气清新得像第一次见面的那个下午。',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '他站在你面前，目光里有很多东西——期待、不安、温柔、还有一点点恐惧。',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '不管结果怎样，遇见你是这一年最好的事。',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '你呢？你觉得我们……',
              partnerEmotion: 'vulnerable',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '他没有把话说完。这一次，轮到你了。',
              delay: 2000,
            },
          ],
          choices: [
            {
              id: 'luchen_5_2_a',
              text: '"我愿意跟你走下去。不管是异地，还是别的什么困难。因为遇到对的人比什么都重要。"',
              emoji: '💕',
              scores: { commitment_depth: 7, expression_intensity: 5, security_baseline: 4, growth_orientation: 3, intimacy_pace: 3 },
              affinity_change: 8,
              trait_unlock: {
                name: '关系蓝图',
                description: '你心中有一幅清晰的画面——关于爱，关于你想成为的人',
                emoji: '🗺️',
              },
            },
            {
              id: 'luchen_5_2_b',
              text: '"我觉得我们可以试试。但我需要你答应我，有问题的时候别一个人扛。"',
              emoji: '🤝',
              scores: { commitment_depth: 5, growth_orientation: 5, conflict_style: 4, expression_intensity: 4, autonomy_need: 2 },
              affinity_change: 10,
            },
            {
              id: 'luchen_5_2_c',
              text: '"说实话，我不确定。但我不想就这样结束。给我一点时间好吗？"',
              emoji: '⏳',
              scores: { commitment_depth: 2, security_baseline: -2, expression_intensity: 3, growth_orientation: 3, autonomy_need: 4 },
              affinity_change: 0,
            },
            {
              id: 'luchen_5_2_d',
              text: '"也许……这就是我们的终点。不是不喜欢，是我给不了你想要的那种确定。"',
              emoji: '🍂',
              scores: { commitment_depth: -5, security_baseline: -6, expression_intensity: 4, autonomy_need: 6, growth_orientation: -2 },
              affinity_change: -8,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '……',
              partnerEmotion: 'loving',
              delay: 1000,
            },
            {
              type: 'narrator',
              text: '他什么都没说，只是走上前，紧紧抱住了你。',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '嗯。',
              partnerEmotion: 'loving',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '嗯。',
              partnerEmotion: 'loving',
              delay: 1000,
            },
            {
              type: 'narrator',
              text: '一个"嗯"字，包含了他所有不善言辞的温柔。',
              gradient: 'romantic',
              delay: 2000,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '嗯，我知道了。',
              partnerEmotion: 'sad',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '谢谢你的坦诚。',
              partnerEmotion: 'distant',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '他转过身，背影在黄昏的光线里显得很单薄。',
              gradient: 'bittersweet',
              delay: 2000,
            },
          ],
        },
      ],
      closing_messages: [
        {
          type: 'quick_swipe',
          swipeStatement: '不管结局如何，你不后悔这段经历',
          agreeScores: { growth_orientation: 3, security_baseline: 2 },
          disagreeScores: { security_baseline: -2, commitment_depth: -1 },
        },
        {
          type: 'narrator',
          text: '故事到这里，画上了一个属于你的句号。',
          gradient: 'warm',
          delay: 2000,
        },
        {
          type: 'narrator',
          text: '但真正的故事，才刚刚开始。',
          gradient: 'hopeful',
          delay: 2000,
        },
      ],
    },
  ],

  // ==================== ENDINGS ====================
  endings: [
    {
      id: 'warm',
      name: '🌅 温暖',
      emoji: '🌅',
      condition: 'high commitment + high expression',
      messages: [
        {
          type: 'scene',
          text: '三个月后。深圳。',
          emoji: '🌅',
          gradient: 'warm',
        },
        {
          type: 'narrator',
          text: '你收到陆辰发来的照片——他新工作室窗外的日落，和桌上那杯他亲手冲的咖啡。',
          delay: 2000,
        },
        {
          type: 'partner',
          text: '今天的日落很好看。想你了。下周见。',
          partnerEmotion: 'loving',
          delay: 2000,
        },
        {
          type: 'narrator',
          text: '你笑着回了一句："咖啡给我留一杯。"',
          delay: 1500,
        },
        {
          type: 'narrator',
          text: '有些人让你觉得，距离不是问题，因为方向相同。你在这段关系里展现了深度的承诺和真诚的表达。你不害怕靠近，也不害怕被看见。',
          gradient: 'warm',
          delay: 3000,
        },
        {
          type: 'narrator',
          text: '你是那种让人心安的存在。',
          gradient: 'warm',
          delay: 2000,
        },
      ],
    },
    {
      id: 'open',
      name: '🌊 开放',
      emoji: '🌊',
      condition: 'high autonomy + high growth',
      messages: [
        {
          type: 'scene',
          text: '半年后。各自的城市。',
          emoji: '🌊',
          gradient: 'cool',
        },
        {
          type: 'narrator',
          text: '你们还在一起，但方式变得不同了。不再是每天早安晚安的黏腻，而是各自忙碌、偶尔交汇的默契。',
          delay: 2000,
        },
        {
          type: 'partner',
          text: '今天做了一个很满意的方案。想第一个告诉你。',
          partnerEmotion: 'happy',
          delay: 1800,
        },
        {
          type: 'narrator',
          text: '你给他发了一个大拇指，然后继续忙自己的事。',
          delay: 1500,
        },
        {
          type: 'narrator',
          text: '在你的关系观里，爱不是融为一体，而是两个独立的人选择并肩而行。你给了彼此最珍贵的东西——空间与信任。',
          gradient: 'hopeful',
          delay: 3000,
        },
        {
          type: 'narrator',
          text: '这或许是最成熟的爱的样子。',
          gradient: 'hopeful',
          delay: 2000,
        },
      ],
    },
    {
      id: 'regret',
      name: '💔 遗憾',
      emoji: '💔',
      condition: 'high avoidance + low security',
      messages: [
        {
          type: 'scene',
          text: '一年后。某个下雨的午后。',
          emoji: '🌧️',
          gradient: 'bittersweet',
        },
        {
          type: 'narrator',
          text: '你路过那家书店咖啡馆，脚步不自觉地慢了下来。',
          delay: 2000,
        },
        {
          type: 'narrator',
          text: '不知道他在深圳过得好不好。你们没有再联系。不是不想，是不敢。',
          delay: 2000,
        },
        {
          type: 'narrator',
          text: '你心里始终有一个问号——如果当时再勇敢一点，再确定一点，结局会不一样吗？',
          delay: 2500,
        },
        {
          type: 'narrator',
          text: '在这段故事里，你总是在靠近和后退之间犹豫。不是不在乎，恰恰是因为太在乎，反而害怕了。你的内心有很多柔软的部分，但那扇门始终没有完全打开。',
          gradient: 'bittersweet',
          delay: 3000,
        },
        {
          type: 'narrator',
          text: '有些遗憾不是结束，是提醒。',
          gradient: 'bittersweet',
          delay: 2000,
        },
      ],
    },
    {
      id: 'rebirth',
      name: '🔥 重燃',
      emoji: '🔥',
      condition: 'fluctuating scores, high growth',
      messages: [
        {
          type: 'scene',
          text: '三个月后。那家书店咖啡馆。',
          emoji: '🔥',
          gradient: 'hopeful',
        },
        {
          type: 'narrator',
          text: '你们约在老地方见面。他从深圳回来了——不是回来找你，是项目结束了。但他回来后第一个联系的人，是你。',
          delay: 2500,
        },
        {
          type: 'partner',
          text: '嘿。',
          partnerEmotion: 'shy',
          delay: 1000,
        },
        {
          type: 'partner',
          text: '你好像瘦了。',
          partnerEmotion: 'sad',
          delay: 1200,
        },
        {
          type: 'narrator',
          text: '你们像两个重新学走路的人，小心翼翼地靠近。不是回到从前，而是带着伤痕和成长，试着重新开始。',
          delay: 2500,
        },
        {
          type: 'narrator',
          text: '你的感情之路不是一帆风顺的，但你有一种少见的品质——摔倒之后，依然愿意站起来。每一次矛盾和挣扎，都让你更了解自己想要什么。',
          gradient: 'hopeful',
          delay: 3000,
        },
        {
          type: 'narrator',
          text: '最好的爱情，或许不是从不受伤，而是一起愈合。',
          gradient: 'hopeful',
          delay: 2000,
        },
      ],
    },
  ],
}

// ============================================================
// 苏念 (Sū Niàn) - Complete Story
// ============================================================

export const SUNIAN_STORY: CharacterStory = {
  character: FEMALE_CHARACTERS[0],
  acts: [
    // ==================== ACT 1: 相遇 ====================
    {
      id: 1,
      title: '相遇',
      subtitle: '颜料与咖啡',
      emoji: '🌧️',
      gradient: 'from-slate-900/50 to-rose-900/50',
      choice_points: [
        // --- Choice Point 1: How do you respond? ---
        {
          id: 'sunian_1_1',
          messages_before: [
            { type: 'chapter_title', text: '第一章 · 相遇', emoji: '🌧️', gradient: 'warm' },
            {
              type: 'scene',
              text: '一个下雨的下午，你躲进巷子里的一家独立书店。空气里是纸张和咖啡的味道。',
              emoji: '🌧️',
              gradient: 'warm',
            },
            {
              type: 'narrator',
              text: '你走向书架最里面一排，抽出一本封面好看的绘本。翻开第一页，被里面的画吸引住了。',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '旁边传来一个声音。',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '啊，你也喜欢这本！',
              partnerEmotion: 'happy',
              delay: 1200,
            },
            {
              type: 'narrator',
              text: '一个扎着马尾的女生，穿着一件沾了颜料点的白衬衫，手里端着一杯拿铁。她的眼睛亮亮的。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '这个插画师是我最喜欢的 🥰 你觉得怎么样，这个画风？',
              partnerEmotion: 'happy',
              delay: 1800,
            },
          ],
          choices: [
            {
              id: 'sunian_1_1_a',
              text: '"很温暖，有种治愈的感觉。你也画画吗？"指了指她衬衫上的颜料。',
              emoji: '🎨',
              scores: { intimacy_pace: 7, expression_intensity: 5, security_baseline: 4 },
              affinity_change: 7,
              trait_unlock: {
                name: '好奇心引力',
                description: '你对他人世界的真诚好奇，是关系的起点',
                emoji: '🔍',
              },
            },
            {
              id: 'sunian_1_1_b',
              text: '"挺好看的。"简短地回应，然后继续翻。',
              emoji: '📖',
              scores: { intimacy_pace: -4, expression_intensity: -3, autonomy_need: 4 },
              affinity_change: -2,
            },
            {
              id: 'sunian_1_1_c',
              text: '"这种风格我不太懂，不过看起来确实挺舒服的。你好像很懂？"',
              emoji: '😊',
              scores: { intimacy_pace: 4, expression_intensity: 3, security_baseline: 3 },
              affinity_change: 8,
            },
            {
              id: 'sunian_1_1_d',
              text: '"第一次看，感觉画面里藏了很多故事。像在说什么但又没说完。"',
              emoji: '✨',
              scores: { intimacy_pace: 6, expression_intensity: 6, security_baseline: 5, commitment_depth: 2 },
              affinity_change: 7,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '哇你好会看！！！',
              partnerEmotion: 'happy',
              delay: 800,
            },
            {
              type: 'partner',
              text: '没错没错，这个插画师特别擅长"留白"，就是画面里没画出来的部分才是重点',
              partnerEmotion: 'happy',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '我也画画哈哈，被你发现了 😝',
              partnerEmotion: 'shy',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '我叫苏念，你呢？',
              partnerEmotion: 'happy',
              delay: 1200,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '嗯嗯，是挺好看的。',
              partnerEmotion: 'neutral',
              delay: 1000,
            },
            {
              type: 'narrator',
              text: '她笑了一下，有点不好意思地低下头喝了口咖啡。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '那，你慢慢看哈。',
              partnerEmotion: 'shy',
              delay: 1200,
            },
          ],
        },
        // --- Choice Point 2: She shares something personal ---
        {
          id: 'sunian_1_2',
          messages_before: [
            {
              type: 'narrator',
              text: '不知道聊了多久，你们已经从书架旁挪到了咖啡区的沙发上。她说话的时候习惯比划，咖啡差点洒了两次。',
              delay: 1800,
            },
            {
              type: 'partner',
              text: '其实我做儿童绘本插画，听起来很美好对吧？',
              partnerEmotion: 'neutral',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '但说实话有时候挺难的。自由职业嘛，收入不稳定，爸妈一直觉得我不务正业 😅',
              partnerEmotion: 'sad',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '上一个男朋友也是，总说"你画的那些能当饭吃吗"',
              partnerEmotion: 'sad',
              delay: 1800,
            },
            {
              type: 'partner',
              text: '啊，不好意思不好意思，我是不是说太多了 😂',
              partnerEmotion: 'shy',
              delay: 1500,
            },
          ],
          choices: [
            {
              id: 'sunian_1_2_a',
              text: '"没有，我觉得能做自己喜欢的事很酷。而且你的画真的很好。"',
              emoji: '💪',
              scores: { expression_intensity: 6, intimacy_pace: 4, security_baseline: 5 },
              affinity_change: 10,
              trait_unlock: {
                name: '共鸣体质',
                description: '你愿意看见别人的闪光点，并大声说出来',
                emoji: '🤝',
              },
            },
            {
              id: 'sunian_1_2_b',
              text: '"嗯，自由职业确实不容易。你有没有考虑过做其他副业来平衡一下？"',
              emoji: '💡',
              scores: { expression_intensity: 2, growth_orientation: 4, autonomy_need: 2, security_baseline: 2 },
              affinity_change: 3,
            },
            {
              id: 'sunian_1_2_c',
              text: '"能当饭吃的东西太多了，但能让人快乐的事不多。你前男友不懂。"',
              emoji: '🔥',
              scores: { expression_intensity: 7, intimacy_pace: 5, commitment_depth: 3, security_baseline: 4 },
              affinity_change: 7,
            },
            {
              id: 'sunian_1_2_d',
              text: '笑笑，没接话。刚认识就聊前任，信息量有点大。',
              emoji: '😅',
              scores: { expression_intensity: -5, intimacy_pace: -4, security_baseline: -2, autonomy_need: 4 },
              affinity_change: -5,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '呜呜呜你太会说话了吧',
              partnerEmotion: 'happy',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '不行我要加你微信！！',
              partnerEmotion: 'happy',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '你是第一个这样说的人 🥹',
              partnerEmotion: 'shy',
              delay: 1500,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '哈哈是哦，我话太多了',
              partnerEmotion: 'shy',
              delay: 1000,
            },
            {
              type: 'narrator',
              text: '她不好意思地摸了摸鼻子，话题就此岔开了。',
              delay: 1500,
            },
          ],
        },
      ],
      closing_messages: [
        {
          type: 'narrator',
          text: '雨停了。阳光从窗户照进来，照在她衬衫上的颜料斑点上，像一幅小小的画。',
          gradient: 'warm',
          delay: 1500,
        },
        {
          type: 'partner',
          text: '天晴了！我要去对面的公园画速写，你要不要一起？',
          partnerEmotion: 'happy',
          delay: 1500,
        },
        {
          type: 'emoji_reaction',
          reactionContext: '她眼睛亮亮地看着你，等你回答',
          reactionOptions: [
            { emoji: '😊', label: '想去', scores: { intimacy_pace: 3, expression_intensity: 2 } },
            { emoji: '🥰', label: '被打动', scores: { intimacy_pace: 4, security_baseline: 2 } },
            { emoji: '🤔', label: '犹豫', scores: { autonomy_need: 3, intimacy_pace: -1 } },
            { emoji: '😎', label: '随缘', scores: { autonomy_need: 2, security_baseline: 1 } },
          ],
        },
        {
          type: 'partner',
          text: '不去也没关系啦，我们加了微信了嘛 ☺️',
          partnerEmotion: 'shy',
          delay: 1500,
        },
        {
          type: 'quick_swipe',
          swipeStatement: '加完微信后你忍不住把她朋友圈翻了一遍',
          agreeScores: { intimacy_pace: 3, expression_intensity: 1 },
          disagreeScores: { autonomy_need: 2, intimacy_pace: -1 },
        },
        {
          type: 'narrator',
          text: '你看了看她亮晶晶的眼睛，心里升起了一种很久没有过的感觉——想多了解一个人的冲动。',
          gradient: 'hopeful',
          delay: 2000,
        },
        {
          type: 'narrator',
          text: '她的微信名叫"小念"，头像是一只她画的兔子，笑得眯起了眼。',
          delay: 1500,
        },
      ],
    },

    // ==================== ACT 2: 心动 ====================
    {
      id: 2,
      title: '心动',
      subtitle: '屏幕里的温度',
      emoji: '✨',
      gradient: 'from-pink-900/50 to-purple-900/50',
      choice_points: [
        // --- Choice Point 3: She goes quiet for 2 days ---
        {
          id: 'sunian_2_1',
          messages_before: [
            { type: 'chapter_title', text: '第二章 · 心动', emoji: '✨', gradient: 'romantic' },
            {
              type: 'narrator',
              text: '认识一周了。她几乎每天都给你发消息——有时是一张她画的速写，有时是路上看到的一朵花，有时就是一句"在干嘛呀"。',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '你看你看！！今天画的猫 🐱',
              partnerEmotion: 'happy',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '有点歪但是我觉得歪的很可爱哈哈哈',
              partnerEmotion: 'happy',
              delay: 1200,
            },
            {
              type: 'narrator',
              text: '然后，突然安静了。',
              delay: 2000,
            },
            {
              type: 'scene',
              text: '两天没有消息。她的朋友圈也没有更新。你发的那条"猫画得很可爱"底下，再没有新的对话。',
              emoji: '📱',
              gradient: 'tense',
            },
          ],
          choices: [
            {
              id: 'sunian_2_1_a',
              text: '发一条："两天没看到你的画了，有点不习惯。一切都好吗？"',
              emoji: '💬',
              scores: { security_baseline: 5, expression_intensity: 6, intimacy_pace: 5 },
              affinity_change: 10,
            },
            {
              id: 'sunian_2_1_b',
              text: '什么都不发。也许她只是忙，不用每条消息都秒回。',
              emoji: '🤷',
              scores: { security_baseline: -3, autonomy_need: 6, expression_intensity: -5, intimacy_pace: -3 },
              affinity_change: -3,
            },
            {
              id: 'sunian_2_1_c',
              text: '在她朋友圈一条旧状态下面点了个赞，制造一点存在感。',
              emoji: '👍',
              scores: { security_baseline: 2, expression_intensity: 1, intimacy_pace: 2 },
              affinity_change: 5,
              trait_unlock: {
                name: '安全感雷达',
                description: '你在不确定时选择含蓄的方式保持连接',
                emoji: '📡',
              },
            },
            {
              id: 'sunian_2_1_d',
              text: '直接给她打电话。发消息猜不出语气，听声音才知道怎么回事。',
              emoji: '📞',
              scores: { security_baseline: 4, expression_intensity: 7, intimacy_pace: 7, autonomy_need: -3 },
              affinity_change: 8,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '啊啊啊对不起！！！',
              partnerEmotion: 'sad',
              delay: 800,
            },
            {
              type: 'partner',
              text: '这两天赶稿赶疯了 😭 编辑说要修改，我改了三版还不满意',
              partnerEmotion: 'sad',
              delay: 1800,
            },
            {
              type: 'partner',
              text: '不过你说不习惯这句话',
              partnerEmotion: 'shy',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '让我开心了好久哈哈哈 ☺️',
              partnerEmotion: 'happy',
              delay: 1500,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '嗯嗯，在赶稿子',
              partnerEmotion: 'neutral',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '最近比较忙 😅',
              partnerEmotion: 'neutral',
              delay: 1200,
            },
            {
              type: 'narrator',
              text: '回复比以前短了不少。你不确定是真的忙，还是你们之间少了点什么。',
              delay: 1500,
            },
          ],
        },
        // --- Choice Point 4: Late night deep conversation ---
        {
          id: 'sunian_2_2',
          messages_before: [
            {
              type: 'scene',
              text: '晚上十一点。你躺在床上刷手机，她突然发来一张照片——她工作台上一堆揉皱的废稿。',
              emoji: '🌙',
              gradient: 'romantic',
            },
            {
              type: 'partner',
              text: '今天画废了一整天 😢',
              partnerEmotion: 'sad',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '有时候真的好怀疑自己到底有没有天赋',
              partnerEmotion: 'sad',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '你说，一个人做一件事，坚持了很久但一直没什么结果，到底应不应该继续？',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
            {
              type: 'narrator',
              text: '深夜的脆弱总是来得特别真实。你能感觉到屏幕那边的她，此刻很需要一个答案。',
              delay: 1800,
            },
          ],
          choices: [
            {
              id: 'sunian_2_2_a',
              text: '"应该。有些事的意义不在结果，在于你做的时候是什么样子。而你画画的样子很美。"',
              emoji: '🌙',
              scores: { commitment_depth: 5, expression_intensity: 8, security_baseline: 5, intimacy_pace: 5 },
              affinity_change: 8,
            },
            {
              id: 'sunian_2_2_b',
              text: '"我不知道该不该，但我知道你这么纠结说明你是真的热爱。不热爱的人不会心疼。"',
              emoji: '💛',
              scores: { expression_intensity: 6, commitment_depth: 4, growth_orientation: 5 },
              affinity_change: 7,
              trait_unlock: {
                name: '心动阈值',
                description: '你在别人脆弱时，给出的不是答案而是理解',
                emoji: '💓',
              },
            },
            {
              id: 'sunian_2_2_c',
              text: '"太晚了别想这些了，明天起来会好的。早点睡吧。"',
              emoji: '😴',
              scores: { expression_intensity: -4, security_baseline: -2, intimacy_pace: -3, conflict_style: -2 },
              affinity_change: -5,
            },
            {
              id: 'sunian_2_2_d',
              text: '"不然你把废稿发给我看看？也许没你想的那么差。"',
              emoji: '📷',
              scores: { expression_intensity: 4, intimacy_pace: 6, security_baseline: 4, growth_orientation: 3 },
              affinity_change: 10,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '……',
              partnerEmotion: 'vulnerable',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '你怎么可以这么会说话 😭😭😭',
              partnerEmotion: 'happy',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '我哭了。是被感动哭的那种',
              partnerEmotion: 'vulnerable',
              delay: 1800,
            },
            {
              type: 'partner',
              text: '谢谢你',
              partnerEmotion: 'loving',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '真的谢谢你',
              partnerEmotion: 'loving',
              delay: 1000,
            },
            {
              type: 'narrator',
              text: '那天晚上你们一直聊到凌晨两点。关于梦想，关于害怕，关于一些从没和别人说过的事。',
              gradient: 'romantic',
              delay: 2000,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '嗯好吧，晚安',
              partnerEmotion: 'sad',
              delay: 1000,
            },
            {
              type: 'narrator',
              text: '她发了一个"晚安"的表情包，但你总觉得那些没说出口的话还堆在屏幕后面。',
              delay: 1800,
            },
          ],
        },
      ],
      closing_messages: [
        {
          type: 'narrator',
          text: '第二天，她发了一条朋友圈。是一幅新画的插画——一个人在雨天的窗前，桌上放着一杯咖啡。',
          gradient: 'romantic',
          delay: 1800,
        },
        {
          type: 'narrator',
          text: '配文只有两个字："谢谢。"',
          delay: 1500,
        },
        {
          type: 'emoji_reaction',
          reactionContext: '看到她的朋友圈，你的第一反应是',
          reactionOptions: [
            { emoji: '💓', label: '心动了', scores: { intimacy_pace: 3, commitment_depth: 2 } },
            { emoji: '😊', label: '会心一笑', scores: { security_baseline: 3, expression_intensity: 1 } },
            { emoji: '🥹', label: '被感动', scores: { expression_intensity: 3, commitment_depth: 2 } },
            { emoji: '🤔', label: '是在说我吗', scores: { security_baseline: -1, autonomy_need: 2 } },
          ],
        },
        {
          type: 'narrator',
          text: '你点开她的头像看了很久。心跳变快了一点。',
          gradient: 'romantic',
          delay: 1500,
        },
        {
          type: 'quick_swipe',
          swipeStatement: '你已经开始期待每天收到她的消息了',
          agreeScores: { intimacy_pace: 3, commitment_depth: 2 },
          disagreeScores: { autonomy_need: 3, intimacy_pace: -1 },
        },
        {
          type: 'narrator',
          text: '你知道这不只是喜欢一幅画的那种心动。',
          gradient: 'hopeful',
          delay: 1500,
        },
      ],
    },

    // ==================== ACT 3: 走近 ====================
    {
      id: 3,
      title: '走近',
      subtitle: '画室的温度',
      emoji: '🌸',
      gradient: 'from-pink-900/50 to-rose-900/50',
      choice_points: [
        // --- Choice Point 5: Meeting friends ---
        {
          id: 'sunian_3_1',
          messages_before: [
            { type: 'chapter_title', text: '第三章 · 走近', emoji: '🌸', gradient: 'romantic' },
            {
              type: 'narrator',
              text: '在一起三周了。虽然谁也没正式说"在一起"，但你们都把对方的备注改了——从名字变成了一个特别的符号。',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '周末我们画室有个小展',
              partnerEmotion: 'neutral',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '就是几个画友一起，很小的那种',
              partnerEmotion: 'neutral',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '你要不要来看看呀？我朋友们都好想见你 😆',
              partnerEmotion: 'happy',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '她们说"能让苏念天天傻笑的人一定很特别"哈哈哈',
              partnerEmotion: 'shy',
              delay: 1800,
            },
          ],
          choices: [
            {
              id: 'sunian_3_1_a',
              text: '"好啊！我也好奇你平时在什么环境画画的。需要我带什么吗？"',
              emoji: '🎨',
              scores: { autonomy_need: -3, intimacy_pace: 5, commitment_depth: 4, security_baseline: 4 },
              affinity_change: 10,
            },
            {
              id: 'sunian_3_1_b',
              text: '"这周末我有点事，下次吧？你帮我跟她们打个招呼。"',
              emoji: '📅',
              scores: { autonomy_need: 7, intimacy_pace: -3, commitment_depth: -2 },
              affinity_change: -4,
            },
            {
              id: 'sunian_3_1_c',
              text: '"让我见你的朋友们？那我是不是得准备一下，表现得靠谱一点？"',
              emoji: '😬',
              scores: { autonomy_need: -1, expression_intensity: 5, intimacy_pace: 4, security_baseline: 3 },
              affinity_change: 7,
            },
            {
              id: 'sunian_3_1_d',
              text: '"我去看展可以，但社交我不太在行。我可能就安静看画。"',
              emoji: '🤫',
              scores: { autonomy_need: 4, expression_intensity: 2, security_baseline: 2 },
              affinity_change: 5,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '不用不用！你做自己就好！！',
              partnerEmotion: 'happy',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '她们都很随意的啦',
              partnerEmotion: 'happy',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '而且',
              partnerEmotion: 'shy',
              delay: 800,
            },
            {
              type: 'partner',
              text: '你本来就很好 ☺️',
              partnerEmotion: 'loving',
              delay: 1500,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '哦好叭 😅 那下次',
              partnerEmotion: 'sad',
              delay: 1000,
            },
            {
              type: 'narrator',
              text: '她的"好叭"后面跟了三个句号。你知道她有点失望，但她不会说。',
              delay: 1500,
            },
          ],
        },
        // --- Choice Point 6: First disagreement ---
        {
          id: 'sunian_3_2',
          messages_before: [
            {
              type: 'narrator',
              text: '周末早上，她兴冲冲地发来消息。',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '我发现一个超好的地方！！有一片向日葵花田！！🌻',
              partnerEmotion: 'happy',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '开车一个小时就到，我们今天去吧去吧去吧',
              partnerEmotion: 'happy',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '但你今天其实计划了在家看比赛，而且有点累，不太想出门。',
              delay: 1500,
            },
          ],
          choices: [
            {
              id: 'sunian_3_2_a',
              text: '"今天有点累，想在家休息。明天去好不好？我保证明天一定陪你。"',
              emoji: '🛋️',
              scores: { conflict_style: 5, autonomy_need: 5, expression_intensity: 4, commitment_depth: 3 },
              affinity_change: 5,
              trait_unlock: {
                name: '边界意识',
                description: '你能在表达爱意的同时守住自己的节奏',
                emoji: '🛡️',
              },
            },
            {
              id: 'sunian_3_2_b',
              text: '"好呀，走！"她这么开心的样子，不忍心拒绝。',
              emoji: '🌻',
              scores: { conflict_style: -5, autonomy_need: -5, expression_intensity: -3, security_baseline: 2 },
              affinity_change: 3,
            },
            {
              id: 'sunian_3_2_c',
              text: '"你自己去吧，拍几张好看的照片给我看。"',
              emoji: '📸',
              scores: { conflict_style: 3, autonomy_need: 7, expression_intensity: -2, intimacy_pace: -2 },
              affinity_change: -2,
            },
            {
              id: 'sunian_3_2_d',
              text: '"向日葵到处都有吧，有什么好特地跑一趟的。"',
              emoji: '🤨',
              scores: { conflict_style: -6, autonomy_need: 5, expression_intensity: -5, security_baseline: -4 },
              affinity_change: -6,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '好！那明天一定要去哦！说好了！',
              partnerEmotion: 'happy',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '你好好休息，我今天在家画画 ☺️',
              partnerEmotion: 'happy',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '晚上帮你点外卖好不好？你想吃什么',
              partnerEmotion: 'loving',
              delay: 1500,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '……好吧',
              partnerEmotion: 'sad',
              delay: 1000,
            },
            {
              type: 'narrator',
              text: '她没有再说话。你知道她不高兴了，但她不会跟你吵，只会自己消化。',
              delay: 1800,
            },
          ],
        },
        // --- Choice Point 7: Vulnerability - she cries ---
        {
          id: 'sunian_3_3',
          messages_before: [
            {
              type: 'scene',
              text: '某个周日的下午，你去她的画室找她。门没锁，推开的时候你看到她趴在桌上。',
              emoji: '🎨',
              gradient: 'bittersweet',
            },
            {
              type: 'narrator',
              text: '地上散落着几张打印的邮件。你瞥到了几个关键词："遗憾""未能通过""祝您"。',
              delay: 1800,
            },
            {
              type: 'narrator',
              text: '是她申请了很久的一个绘本出版项目，被退稿了。',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '她抬起头看到你，眼睛红红的，眼泪还挂在脸上。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '你怎么来了……',
              partnerEmotion: 'vulnerable',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '我不想让你看到我这个样子的……',
              partnerEmotion: 'sad',
              delay: 1500,
            },
          ],
          choices: [
            {
              id: 'sunian_3_3_a',
              text: '蹲下来，帮她把地上的纸捡起来。然后坐在她旁边，拍拍她的背。',
              emoji: '🫂',
              scores: { expression_intensity: 6, security_baseline: 7, intimacy_pace: 5, commitment_depth: 4 },
              affinity_change: 8,
            },
            {
              id: 'sunian_3_3_b',
              text: '"哭吧，想哭就哭。他们不选你是他们的损失。"',
              emoji: '💧',
              scores: { expression_intensity: 6, security_baseline: 6, intimacy_pace: 4, growth_orientation: 3 },
              affinity_change: 7,
            },
            {
              id: 'sunian_3_3_c',
              text: '"没事的，这种事很常见。你的画这么好，总会有人看到的。"',
              emoji: '🩹',
              scores: { expression_intensity: 2, security_baseline: 3, growth_orientation: 3 },
              affinity_change: 4,
            },
            {
              id: 'sunian_3_3_d',
              text: '有些不知所措。你不太会安慰人，想说点什么但又怕说错。最后只说了句"你饿不饿，我去买点吃的"。',
              emoji: '🍜',
              scores: { expression_intensity: -3, security_baseline: -2, autonomy_need: 3, intimacy_pace: -2 },
              affinity_change: -2,
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '她靠在你肩上，哭了好一会儿。你能感觉到她的眼泪浸湿了你的衬衫。',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '我好傻啊……花了半年准备的东西……',
              partnerEmotion: 'sad',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '但是有你在……好像也没那么难受了',
              partnerEmotion: 'vulnerable',
              delay: 1800,
            },
            {
              type: 'partner',
              text: '谢谢你没有说"别哭了"',
              partnerEmotion: 'loving',
              delay: 1500,
            },
            {
              type: 'trait_unlock',
              text: '脆弱开关',
              emoji: '🔓',
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '嗯，我知道……',
              partnerEmotion: 'sad',
              delay: 1000,
            },
            {
              type: 'narrator',
              text: '她擦了擦眼泪，开始收拾桌上的东西。恢复得很快，快到让你觉得她已经习惯了独自消化这些。',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '我没事了，你不用担心',
              partnerEmotion: 'neutral',
              delay: 1200,
            },
          ],
        },
      ],
      closing_messages: [
        {
          type: 'narrator',
          text: '那天晚上你们待在画室里，她教你用水彩画了一只丑丑的兔子。你们笑了很久。',
          gradient: 'warm',
          delay: 2000,
        },
        {
          type: 'partner',
          text: '虽然很丑但是我要把它贴在墙上 🐰',
          partnerEmotion: 'happy',
          delay: 1500,
        },
        {
          type: 'emoji_reaction',
          reactionContext: '她把你画的兔子贴在墙上，你的感觉是',
          reactionOptions: [
            { emoji: '🥰', label: '幸福', scores: { commitment_depth: 3, security_baseline: 3 } },
            { emoji: '😂', label: '好笑', scores: { expression_intensity: 2, intimacy_pace: 1 } },
            { emoji: '🤗', label: '温暖', scores: { security_baseline: 3, intimacy_pace: 2 } },
            { emoji: '😳', label: '不好意思', scores: { expression_intensity: -1, autonomy_need: 2 } },
          ],
        },
        {
          type: 'quick_swipe',
          swipeStatement: '你觉得自己可以在她面前完全放下防备',
          agreeScores: { security_baseline: 3, commitment_depth: 2 },
          disagreeScores: { autonomy_need: 2, security_baseline: -2 },
        },
        {
          type: 'narrator',
          text: '你看着她笑的样子，心想：就是现在了。',
          gradient: 'romantic',
          delay: 1500,
        },
        {
          type: 'narrator',
          text: '你们正式在一起了。',
          gradient: 'romantic',
          delay: 1500,
        },
      ],
    },

    // ==================== ACT 4: 摩擦 ====================
    {
      id: 4,
      title: '摩擦',
      subtitle: '颜色的裂痕',
      emoji: '⛈️',
      gradient: 'from-gray-900/50 to-indigo-900/50',
      choice_points: [
        // --- Choice Point 8: Ex sends a message ---
        {
          id: 'sunian_4_1',
          messages_before: [
            { type: 'chapter_title', text: '第四章 · 摩擦', emoji: '⛈️', gradient: 'tense' },
            {
              type: 'narrator',
              text: '在一起两个月了。生活慢慢从心动变成了日常，但日常里也藏着暗礁。',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '一天晚上，你们一起看电影。她的手机震了一下，她看了一眼，表情变了。',
              delay: 1800,
            },
            {
              type: 'partner',
              text: '……',
              partnerEmotion: 'neutral',
              delay: 1000,
            },
            {
              type: 'narrator',
              text: '你瞥到消息是一个男生发来的："念念，最近好吗？好久不见了，想你了。"备注名后面有个"前"字。',
              delay: 2000,
            },
            {
              type: 'narrator',
              text: '她把手机翻了过去，假装什么都没发生。',
              delay: 1500,
            },
          ],
          choices: [
            {
              id: 'sunian_4_1_a',
              text: '假装没看到。她会处理好的。',
              emoji: '🙈',
              scores: { security_baseline: 5, conflict_style: -3, autonomy_need: 4 },
              affinity_change: 3,
            },
            {
              id: 'sunian_4_1_b',
              text: '"前任找你？你可以回，我不介意。"保持轻松的语气。',
              emoji: '😌',
              scores: { security_baseline: 6, conflict_style: 4, expression_intensity: 4, autonomy_need: 3 },
              affinity_change: 8,
              trait_unlock: {
                name: '信任底色',
                description: '你有足够的安全感去相信对方的选择',
                emoji: '🔑',
              },
            },
            {
              id: 'sunian_4_1_c',
              text: '心里一紧。"想你了"？他们什么关系，分手了还"想你"？但你没说出来，只是不自觉地沉默了。',
              emoji: '😶',
              scores: { security_baseline: -6, conflict_style: -4, expression_intensity: -4 },
              affinity_change: -5,
            },
            {
              id: 'sunian_4_1_d',
              text: '"你前男友联系你了。"直接说出来。"我看到了。"',
              emoji: '👀',
              scores: { security_baseline: 2, conflict_style: 5, expression_intensity: 5, commitment_depth: 3 },
              affinity_change: 5,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '你看到了啊 😅',
              partnerEmotion: 'shy',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '就是以前的人，没什么的',
              partnerEmotion: 'neutral',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '我直接不回了',
              partnerEmotion: 'neutral',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '现在我的"想你"只发给你 ☺️',
              partnerEmotion: 'loving',
              delay: 1800,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '……就是以前的事了',
              partnerEmotion: 'neutral',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '你不用担心啦',
              partnerEmotion: 'distant',
              delay: 1200,
            },
            {
              type: 'narrator',
              text: '她的语气轻飘飘的，但你注意到她把手机往包里放了。那个动作有一点刻意。',
              delay: 1800,
            },
          ],
        },
        // --- Choice Point 9: A real fight ---
        {
          id: 'sunian_4_2',
          messages_before: [
            {
              type: 'narrator',
              text: '隔了几天，你偶然发现了一件事。',
              delay: 1200,
            },
            {
              type: 'narrator',
              text: '她借了两万块钱给她一个"关系很好的学姐"，而那个学姐已经三个月没还了。她从来没跟你提过。',
              delay: 2000,
            },
            {
              type: 'narrator',
              text: '你不是生气她借钱，你生气的是——她总是对别人有求必应，哪怕自己上个月连房租都差点交不上。',
              delay: 2200,
            },
            {
              type: 'partner',
              text: '你怎么知道的……',
              partnerEmotion: 'sad',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '那个学姐人很好的，她只是最近手头紧，她会还的',
              partnerEmotion: 'neutral',
              delay: 1800,
            },
          ],
          choices: [
            {
              id: 'sunian_4_2_a',
              text: '"苏念，我担心的不是钱。我担心的是你总是委屈自己去满足别人。我们谈谈好不好？"',
              emoji: '💬',
              scores: { conflict_style: 7, growth_orientation: 7, expression_intensity: 6, commitment_depth: 5 },
              affinity_change: 8,
              trait_unlock: {
                name: '冲突本能',
                description: '你关心的不是事情本身，而是事情背后的模式',
                emoji: '⚡',
              },
            },
            {
              id: 'sunian_4_2_b',
              text: '"你的钱你做主，但以后这种事能不能跟我说一声？我们是一起的。"',
              emoji: '🤝',
              scores: { conflict_style: 5, expression_intensity: 4, commitment_depth: 4, autonomy_need: 2 },
              affinity_change: 6,
            },
            {
              id: 'sunian_4_2_c',
              text: '"两万块，你房租都交不上了知道吗？你怎么这么不会保护自己？"',
              emoji: '😤',
              scores: { conflict_style: -4, expression_intensity: 5, security_baseline: -3, growth_orientation: 2 },
              affinity_change: -6,
            },
            {
              id: 'sunian_4_2_d',
              text: '叹了口气，不说了。她就是这种性格，说了也改不了。',
              emoji: '😮‍💨',
              scores: { conflict_style: -7, expression_intensity: -6, growth_orientation: -5, commitment_depth: -2 },
              affinity_change: -5,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '……',
              partnerEmotion: 'vulnerable',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '你说的对',
              partnerEmotion: 'sad',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '我确实……从小就这样。别人找我帮忙我不会拒绝。我怕拒绝了人家就不喜欢我了',
              partnerEmotion: 'vulnerable',
              delay: 2500,
            },
            {
              type: 'partner',
              text: '但你不一样。你不会因为我说"不"就不要我，对吧？',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '🥺',
              partnerEmotion: 'vulnerable',
              delay: 500,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '你又说我了……',
              partnerEmotion: 'sad',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '我知道我有问题，但你每次说的方式让我很难受',
              partnerEmotion: 'sad',
              delay: 1800,
            },
            {
              type: 'narrator',
              text: '她站起来去了阳台，关上了门。',
              delay: 1500,
            },
          ],
        },
        // --- Choice Point 10: Needs space ---
        {
          id: 'sunian_4_3',
          messages_before: [
            {
              type: 'narrator',
              text: '那次争执之后，她变得安静了很多。以前那个满屏emoji的女生，消息越来越短。',
              delay: 1800,
            },
            {
              type: 'partner',
              text: '我想了很久',
              partnerEmotion: 'neutral',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '我觉得我可能需要一点自己的时间',
              partnerEmotion: 'sad',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '不是不喜欢你了',
              partnerEmotion: 'sad',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '是我觉得我需要先想清楚一些事情。关于我自己的',
              partnerEmotion: 'vulnerable',
              delay: 1800,
            },
            {
              type: 'partner',
              text: '你能理解吗',
              partnerEmotion: 'vulnerable',
              delay: 1200,
            },
          ],
          choices: [
            {
              id: 'sunian_4_3_a',
              text: '"我理解。你去想清楚，我会等你。但别把我也关在外面好吗？"',
              emoji: '🌿',
              scores: { autonomy_need: 5, security_baseline: 6, commitment_depth: 6, expression_intensity: 5 },
              affinity_change: 10,
            },
            {
              id: 'sunian_4_3_b',
              text: '"你能不能别什么事都自己想？有我在呢。"',
              emoji: '😟',
              scores: { autonomy_need: -6, expression_intensity: 5, commitment_depth: 4, security_baseline: 2 },
              affinity_change: 0,
            },
            {
              id: 'sunian_4_3_c',
              text: '心里很慌。"你要想清楚什么？是不是想分手？直说好了。"',
              emoji: '💔',
              scores: { security_baseline: -8, conflict_style: -4, expression_intensity: 3, autonomy_need: -3 },
              affinity_change: -7,
            },
            {
              id: 'sunian_4_3_d',
              text: '"好。那我也整理一下自己。我们都需要成长。"',
              emoji: '🌱',
              scores: { autonomy_need: 7, growth_orientation: 6, security_baseline: 4, commitment_depth: 3 },
              affinity_change: 8,
              trait_unlock: {
                name: '独立基因',
                description: '在不确定中，你依然保持自我的完整',
                emoji: '🧬',
              },
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '嗯 🥹',
              partnerEmotion: 'loving',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '你真好',
              partnerEmotion: 'loving',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '给我一两周好不好。我不会跑远的',
              partnerEmotion: 'shy',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '毕竟跑到哪里都会想你 😤',
              partnerEmotion: 'happy',
              delay: 1500,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '不是想分手……',
              partnerEmotion: 'sad',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '算了不说了',
              partnerEmotion: 'distant',
              delay: 1200,
            },
            {
              type: 'narrator',
              text: '对话框里她的头像暗了下去。',
              delay: 1500,
            },
          ],
        },
      ],
      closing_messages: [
        {
          type: 'scene',
          text: '接下来的日子，她的朋友圈变成了只有画和猫，再没有任何关于你们的痕迹。',
          emoji: '🌫️',
          gradient: 'bittersweet',
        },
        {
          type: 'emoji_reaction',
          reactionContext: '翻看以前的聊天记录，你最大的感受是',
          reactionOptions: [
            { emoji: '😢', label: '心疼', scores: { security_baseline: -2, commitment_depth: 2 } },
            { emoji: '😤', label: '不甘心', scores: { conflict_style: 3, growth_orientation: 2 } },
            { emoji: '😔', label: '失落', scores: { security_baseline: -2, expression_intensity: -1 } },
            { emoji: '💪', label: '要挽回', scores: { commitment_depth: 3, growth_orientation: 2 } },
          ],
        },
        {
          type: 'narrator',
          text: '你翻看以前的聊天记录，满屏的emoji和感叹号，突然觉得那些快乐好像是很久以前的事了。',
          delay: 2000,
        },
        {
          type: 'quick_swipe',
          swipeStatement: '你觉得自己应该主动找她谈谈',
          agreeScores: { conflict_style: 3, commitment_depth: 2 },
          disagreeScores: { autonomy_need: 2, conflict_style: -2 },
        },
        {
          type: 'narrator',
          text: '但你知道，这不是结局。转折点就在前方。',
          gradient: 'tense',
          delay: 1500,
        },
      ],
    },

    // ==================== ACT 5: 抉择 ====================
    {
      id: 5,
      title: '抉择',
      subtitle: '最后一页',
      emoji: '🌅',
      gradient: 'from-orange-900/50 to-pink-900/50',
      choice_points: [
        // --- Choice Point 11: Life change ---
        {
          id: 'sunian_5_1',
          messages_before: [
            { type: 'chapter_title', text: '第五章 · 抉择', emoji: '🌅', gradient: 'hopeful' },
            {
              type: 'narrator',
              text: '两周后，她发来了一条语音消息。你犹豫了三秒，点开了。',
              delay: 1800,
            },
            {
              type: 'partner',
              text: '嗯……你方便见面吗？我有件事想跟你说',
              partnerEmotion: 'neutral',
              delay: 1500,
            },
            {
              type: 'scene',
              text: '你们约在那家书店咖啡馆。她穿了一件新的衬衫，没有颜料斑点。',
              emoji: '☕',
              gradient: 'bittersweet',
            },
            {
              type: 'partner',
              text: '之前投的那个出版项目……他们改主意了。要我去杭州做三个月的驻地创作',
              partnerEmotion: 'neutral',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '全程包吃住，还有导师带',
              partnerEmotion: 'neutral',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '这是我做梦都想要的机会',
              partnerEmotion: 'sad',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '但是……三个月不能回来',
              partnerEmotion: 'vulnerable',
              delay: 1500,
            },
          ],
          choices: [
            {
              id: 'sunian_5_1_a',
              text: '"去吧！这是你的梦想啊！三个月很快的，我们每天视频。"',
              emoji: '✈️',
              scores: { commitment_depth: 6, growth_orientation: 8, autonomy_need: 5, security_baseline: 5 },
              affinity_change: 7,
              trait_unlock: {
                name: '承诺温度',
                description: '真正的支持不是把人留在身边，而是推他们去想去的地方',
                emoji: '🌡️',
              },
            },
            {
              id: 'sunian_5_1_b',
              text: '"三个月太久了。我们能不能想想别的办法？比如我周末去看你？"',
              emoji: '🚄',
              scores: { commitment_depth: 7, growth_orientation: 3, security_baseline: -2, autonomy_need: -4 },
              affinity_change: 3,
            },
            {
              id: 'sunian_5_1_c',
              text: '"这是你的事，你自己决定。我会支持你的任何选择。"',
              emoji: '🤝',
              scores: { commitment_depth: 4, growth_orientation: 5, autonomy_need: 6, expression_intensity: 2 },
              affinity_change: 5,
            },
            {
              id: 'sunian_5_1_d',
              text: '"你是来告诉我你要走，还是来问我的意见？"心里那根弦又绷紧了。',
              emoji: '😔',
              scores: { commitment_depth: -3, security_baseline: -6, expression_intensity: 3, conflict_style: -3 },
              affinity_change: -8,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '呜呜呜你怎么这么好 😭',
              partnerEmotion: 'happy',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '我本来以为你会不高兴的',
              partnerEmotion: 'shy',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '我会每天给你画一幅画的！！每天！！',
              partnerEmotion: 'happy',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '等我回来，我要把最好的那幅送给你',
              partnerEmotion: 'loving',
              delay: 1800,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '我……是来问你的',
              partnerEmotion: 'sad',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '你说你支持我，但你的眼神不是这么说的',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
            {
              type: 'narrator',
              text: '她低下头，用手指绕着咖啡杯的把手，一圈又一圈。',
              delay: 1500,
            },
          ],
        },
        // --- Choice Point 12: Final moment ---
        {
          id: 'sunian_5_2',
          messages_before: [
            {
              type: 'narrator',
              text: '你们走出咖啡馆。傍晚的阳光把整条街染成了金色。',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '她站在你面前，手里还攥着咖啡杯的纸套，上面无意识地画了一个小太阳。',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '遇到你之前，我以为我一个人也可以的',
              partnerEmotion: 'vulnerable',
              delay: 1800,
            },
            {
              type: 'partner',
              text: '遇到你之后才发现，可以是可以，但有你在会更好',
              partnerEmotion: 'loving',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '你呢？你觉得我们……',
              partnerEmotion: 'vulnerable',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '她没有说完那句话。夕阳在她脸上镀了一层柔和的光。',
              delay: 1800,
            },
          ],
          choices: [
            {
              id: 'sunian_5_2_a',
              text: '"我也是。以前觉得一个人挺好的，但你让我想成为更好的人。我们走下去。"',
              emoji: '💕',
              scores: { commitment_depth: 7, expression_intensity: 5, security_baseline: 4, growth_orientation: 3, intimacy_pace: 3 },
              affinity_change: 8,
              trait_unlock: {
                name: '关系蓝图',
                description: '你心里有一幅清晰的画面——关于爱，关于你想给的未来',
                emoji: '🗺️',
              },
            },
            {
              id: 'sunian_5_2_b',
              text: '"我想和你在一起。但我需要你答应我，别什么事都自己扛，有我在呢。"',
              emoji: '🤝',
              scores: { commitment_depth: 5, growth_orientation: 5, conflict_style: 4, expression_intensity: 4, autonomy_need: 2 },
              affinity_change: 10,
            },
            {
              id: 'sunian_5_2_c',
              text: '"我不确定。但我不想放手。你先去杭州，我们走着看？"',
              emoji: '⏳',
              scores: { commitment_depth: 2, security_baseline: -2, expression_intensity: 3, growth_orientation: 3, autonomy_need: 5 },
              affinity_change: 0,
            },
            {
              id: 'sunian_5_2_d',
              text: '"也许你应该一个人去。没有牵挂地去追你的梦想。我怕我会拖累你。"',
              emoji: '🍂',
              scores: { commitment_depth: -6, security_baseline: -5, expression_intensity: 3, autonomy_need: 7, growth_orientation: -3 },
              affinity_change: -8,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '！！！',
              partnerEmotion: 'happy',
              delay: 500,
            },
            {
              type: 'narrator',
              text: '她直接扑过来抱住了你，差点撞掉了你手里的东西。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '你终于说出来了啊 😭',
              partnerEmotion: 'loving',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '我等这句话好久了笨蛋',
              partnerEmotion: 'loving',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '她笑着哭了。或者说，她哭着笑了。夕阳正好。',
              gradient: 'romantic',
              delay: 2000,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '嗯……好吧',
              partnerEmotion: 'sad',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '那我走了',
              partnerEmotion: 'distant',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '她转身走了。你注意到她手里的纸套被攥皱了，上面那个小太阳也皱成了一团。',
              gradient: 'bittersweet',
              delay: 2000,
            },
          ],
        },
      ],
      closing_messages: [
        {
          type: 'quick_swipe',
          swipeStatement: '不管结局如何，这段感情让你成为了更好的自己',
          agreeScores: { growth_orientation: 3, security_baseline: 2 },
          disagreeScores: { security_baseline: -2, growth_orientation: -1 },
        },
        {
          type: 'narrator',
          text: '故事到这里，画上了一个属于你的句号。',
          gradient: 'warm',
          delay: 2000,
        },
        {
          type: 'narrator',
          text: '但真正的故事，才刚刚开始。',
          gradient: 'hopeful',
          delay: 2000,
        },
      ],
    },
  ],

  // ==================== ENDINGS ====================
  endings: [
    {
      id: 'warm',
      name: '🌅 温暖',
      emoji: '🌅',
      condition: 'high commitment + high expression',
      messages: [
        {
          type: 'scene',
          text: '三个月后。杭州。',
          emoji: '🌅',
          gradient: 'warm',
        },
        {
          type: 'narrator',
          text: '你收到一个快递，里面是一本手工装帧的绘本。封面画着一家书店，窗外下着雨。',
          delay: 2000,
        },
        {
          type: 'narrator',
          text: '翻开第一页，是两个人在书架前相遇的画面。她画了你们的故事。',
          delay: 2000,
        },
        {
          type: 'partner',
          text: '最后一页还没画完 🥰 因为故事还在继续嘛',
          partnerEmotion: 'loving',
          delay: 2000,
        },
        {
          type: 'narrator',
          text: '你在这段关系里展现了温暖而坚定的爱。你不怕靠近，愿意被看见，也愿意看见对方最真实的样子。',
          gradient: 'warm',
          delay: 3000,
        },
        {
          type: 'narrator',
          text: '你是那种让人想画进故事里的人。',
          gradient: 'warm',
          delay: 2000,
        },
      ],
    },
    {
      id: 'open',
      name: '🌊 开放',
      emoji: '🌊',
      condition: 'high autonomy + high growth',
      messages: [
        {
          type: 'scene',
          text: '半年后。两座城市。',
          emoji: '🌊',
          gradient: 'cool',
        },
        {
          type: 'narrator',
          text: '她在杭州画画，你在这里过自己的生活。每周通一次长长的视频电话，其余时间各自精彩。',
          delay: 2000,
        },
        {
          type: 'partner',
          text: '今天画了一整天！超级满意！回去给你看 ☺️',
          partnerEmotion: 'happy',
          delay: 1500,
        },
        {
          type: 'narrator',
          text: '你发了一个"加油"的表情包，然后去忙自己的事了。',
          delay: 1500,
        },
        {
          type: 'narrator',
          text: '在你的关系观里，爱不需要时刻黏在一起。两个人各自发光，偶尔交汇的时刻才最珍贵。你给了彼此最好的礼物——自由与信任。',
          gradient: 'hopeful',
          delay: 3000,
        },
        {
          type: 'narrator',
          text: '这或许是最好的距离。',
          gradient: 'hopeful',
          delay: 2000,
        },
      ],
    },
    {
      id: 'regret',
      name: '💔 遗憾',
      emoji: '💔',
      condition: 'high avoidance + low security',
      messages: [
        {
          type: 'scene',
          text: '一年后。某个书店。',
          emoji: '🌧️',
          gradient: 'bittersweet',
        },
        {
          type: 'narrator',
          text: '你在书店里翻到一本新出的绘本，翻开扉页，看到了"苏念"两个字。',
          delay: 2000,
        },
        {
          type: 'narrator',
          text: '是她。她真的出书了。',
          delay: 1500,
        },
        {
          type: 'narrator',
          text: '你翻到最后一页。画面是一个人站在夕阳里，手上有一个皱巴巴的纸杯套。你的心抽了一下。',
          delay: 2500,
        },
        {
          type: 'narrator',
          text: '在这段故事里，你始终在付出和保留之间犹豫不定。不是不在乎，是太怕受伤。你有很多温柔的部分，但那扇门总是开了一半就停住了。',
          gradient: 'bittersweet',
          delay: 3000,
        },
        {
          type: 'narrator',
          text: '有些错过不是不爱，是还没学会怎么好好去爱。',
          gradient: 'bittersweet',
          delay: 2000,
        },
      ],
    },
    {
      id: 'rebirth',
      name: '🔥 重燃',
      emoji: '🔥',
      condition: 'fluctuating scores, high growth',
      messages: [
        {
          type: 'scene',
          text: '四个月后。那家书店咖啡馆。',
          emoji: '🔥',
          gradient: 'hopeful',
        },
        {
          type: 'narrator',
          text: '她从杭州回来了。你们在老地方碰面。她晒黑了一点，但笑容比以前更明亮了。',
          delay: 2000,
        },
        {
          type: 'partner',
          text: '好久不见',
          partnerEmotion: 'shy',
          delay: 1000,
        },
        {
          type: 'partner',
          text: '你衬衫上没有颜料斑点了诶',
          partnerEmotion: 'happy',
          delay: 1200,
        },
        {
          type: 'narrator',
          text: '你笑了："你在这儿呢，很快就会有了。"',
          delay: 1500,
        },
        {
          type: 'narrator',
          text: '你们不是回到了从前，而是变成了更好的两个人，重新选择了彼此。这一路上你有过退缩、犹豫、甚至想要放弃，但你最终选择了面对。',
          gradient: 'hopeful',
          delay: 3000,
        },
        {
          type: 'narrator',
          text: '最好的感情，不是完美无瑕，而是摔碎之后还愿意一起把它拼回去。',
          gradient: 'hopeful',
          delay: 2000,
        },
      ],
    },
  ],
}

// ============================================================
// Story map & exports
// ============================================================

export const CHARACTER_STORIES: Record<string, CharacterStory> = {
  luchen: LUCHEN_STORY,
  sunian: SUNIAN_STORY,
}
