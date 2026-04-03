import { Character, CharacterStory, StoryMessageData, ChoicePointData, ActData, Ending } from './characters'

const CHARACTER: Character = {
  id: 'jiangyu',
  name: '江屿',
  subtitle: '霸总学霸',
  description: '投资公司合伙人，逻辑缜密，目标明确。习惯用理性解决一切的他，唯独在感情面前束手无策。',
  emoji: '💼',
  gender: 'male',
  color: 'from-gray-900 to-slate-900',
  avatar_emoji: '🏔️',
  quote: '我分析过了，我们很合适',
}

const STORY: CharacterStory = {
  character: CHARACTER,
  acts: [
    // ==================== ACT 1: 相遇 ====================
    {
      id: 1,
      title: '相遇',
      subtitle: '高空中的意外',
      emoji: '✈️',
      gradient: 'from-slate-900/50 to-gray-900/50',
      choice_points: [
        // --- Choice Point 1-1 ---
        {
          id: 'jiangyu_1_1',
          messages_before: [
            { type: 'chapter_title', text: '第一章 · 相遇', emoji: '✈️', gradient: 'cool' },
            {
              type: 'scene',
              text: '深夜的航班。你被临时调到商务舱，座位旁边的男人正在笔记本上快速打字。\n机舱灯光昏暗，只有他的屏幕亮着冷白色的光。',
              emoji: '✈️',
              gradient: 'cool',
            },
            {
              type: 'narrator',
              text: '你刚坐下，就感觉到旁边投来一瞥——精准而短暂，像扫描了一下你这个人。',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '飞机遇到气流颠簸，你手里的书滑落了。',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '你的书。',
              partnerEmotion: 'neutral',
              delay: 800,
            },
            {
              type: 'narrator',
              text: '他头也没抬，一只手精准地接住了那本书，递到你面前。动作自然得像是排练过一样。',
              delay: 1500,
            },
          ],
          choices: [
            {
              id: 'jiangyu_1_1_a',
              text: '谢谢。你反应真快，是不是经常飞？',
              emoji: '😊',
              scores: { intimacy_pace: 3, expression_intensity: 2 },
              affinity_change: 3,
            },
            {
              id: 'jiangyu_1_1_b',
              text: '接住书然后默默点头致意，继续看书。',
              emoji: '📖',
              scores: { autonomy_need: 3, security_baseline: 2 },
              affinity_change: 2,
            },
            {
              id: 'jiangyu_1_1_c',
              text: '哇，帅到了。你是不是也看过这本书？',
              emoji: '✨',
              scores: { expression_intensity: 5, intimacy_pace: 3 },
              affinity_change: 4,
              trait_unlock: { name: '直球信号', description: '你倾向于直接表达好感', emoji: '🎯' },
            },
            {
              id: 'jiangyu_1_1_d',
              text: '谢谢。不过我自己能接住的。',
              emoji: '💪',
              scores: { autonomy_need: 4, conflict_style: 2 },
              affinity_change: 0,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '嗯。一年飞差不多八十次。',
              partnerEmotion: 'neutral',
              delay: 1000,
            },
            {
              type: 'narrator',
              text: '他终于抬头看了你一眼。镜片后面的眼神很沉，但嘴角有一点不易察觉的弧度。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '……你看的这本我也看过。作者的前一本更好。',
              partnerEmotion: 'neutral',
              delay: 1800,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '嗯。',
              partnerEmotion: 'distant',
              delay: 600,
            },
            {
              type: 'narrator',
              text: '他重新低下头，继续打字。指尖敲击键盘的声音很有节奏，像一种无形的结界。',
              delay: 1500,
            },
          ],
        },
        // --- Choice Point 1-2 ---
        {
          id: 'jiangyu_1_2',
          messages_before: [
            {
              type: 'narrator',
              text: '航班延误了两个小时。机舱里大多数人都睡着了。',
              delay: 1200,
            },
            {
              type: 'narrator',
              text: '他合上电脑，揉了一下眉心。你注意到他的屏幕上全是密密麻麻的财务模型。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '延误了。你着急吗？',
              partnerEmotion: 'neutral',
              delay: 1000,
            },
            {
              type: 'narrator',
              text: '他的语气平淡得像在问天气，但这是他第一次主动跟你说话。',
              delay: 1500,
            },
          ],
          choices: [
            {
              id: 'jiangyu_1_2_a',
              text: '还好，反正也没人在等我。你呢，这么晚还在加班？',
              emoji: '🌙',
              scores: { intimacy_pace: 4, expression_intensity: 3 },
              affinity_change: 5,
            },
            {
              id: 'jiangyu_1_2_b',
              text: '有点急，明天早上有个重要的会。不过也没办法。',
              emoji: '😤',
              scores: { conflict_style: 2, autonomy_need: 2 },
              affinity_change: 2,
            },
            {
              id: 'jiangyu_1_2_c',
              text: '不急。延误的时间刚好用来看书。你要不要也休息一下？',
              emoji: '😌',
              scores: { security_baseline: 3, commitment_depth: 2 },
              affinity_change: 4,
            },
            {
              id: 'jiangyu_1_2_d',
              text: '无所谓，反正我习惯了一个人应对各种状况。',
              emoji: '🤷',
              scores: { autonomy_need: 5, security_baseline: -2 },
              affinity_change: 1,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '我？……习惯了。工作就是这样。',
              partnerEmotion: 'neutral',
              delay: 1200,
            },
            {
              type: 'narrator',
              text: '他停顿了一下，像是在考虑要不要继续。',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '不过你说得对，该休息了。你叫什么？',
              partnerEmotion: 'shy',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '他问名字的方式很直接，像在做一个商务确认。但你看到他合上了电脑。',
              delay: 1800,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '嗯，也是。',
              partnerEmotion: 'distant',
              delay: 800,
            },
            {
              type: 'narrator',
              text: '他重新打开电脑，但没有再打字了。你不确定他是在工作还是在想什么。',
              delay: 1500,
            },
          ],
        },
      ],
      closing_messages: [
        {
          type: 'narrator',
          text: '飞机终于降落了。夜里两点的机场空荡荡的，只有行李转盘还在运转。',
          gradient: 'cool',
          delay: 1500,
        },
        {
          type: 'partner',
          text: '你怎么回去？我叫了车，可以顺路送你。',
          partnerEmotion: 'neutral',
          delay: 1200,
        },
        {
          type: 'emoji_reaction',
          reactionContext: '深夜的机场，他提出送你回家',
          reactionOptions: [
            { emoji: '😊', label: '感动', scores: { intimacy_pace: 3, security_baseline: 2 } },
            { emoji: '😏', label: '意外', scores: { autonomy_need: 1, expression_intensity: 2 } },
            { emoji: '🥰', label: '心动', scores: { intimacy_pace: 4, commitment_depth: 2 } },
            { emoji: '😐', label: '犹豫', scores: { autonomy_need: 3, security_baseline: -1 } },
          ],
        },
        {
          type: 'narrator',
          text: '上车后他给你发了一条微信：「到了告诉我一声。」\n简短，却让你在深夜的出租车里笑了一下。',
          gradient: 'warm',
          delay: 2000,
        },
        {
          type: 'quick_swipe',
          swipeStatement: '你觉得他这种冷淡外表下的细心很吸引人',
          agreeScores: { intimacy_pace: 3, security_baseline: 2 },
          disagreeScores: { autonomy_need: 2, expression_intensity: -1 },
        },
        {
          type: 'narrator',
          text: '到家的时候已经凌晨三点。手机亮了一下。\n是他：「好，早点休息。」',
          gradient: 'warm',
          delay: 1500,
        },
      ],
    },
    // ==================== ACT 2: 心动 ====================
    {
      id: 2,
      title: '心动',
      subtitle: '理性的裂缝',
      emoji: '📊',
      gradient: 'from-indigo-900/50 to-slate-900/50',
      choice_points: [
        // --- Choice Point 2-1 ---
        {
          id: 'jiangyu_2_1',
          messages_before: [
            { type: 'chapter_title', text: '第二章 · 心动', emoji: '📊', gradient: 'romantic' },
            {
              type: 'scene',
              text: '一周后。他约你在一家安静的日料店吃晚饭。\n包间里只有你们两个人，窗外是城市的灯火。',
              emoji: '🍣',
              gradient: 'warm',
            },
            {
              type: 'narrator',
              text: '他穿了一件深灰色的毛衣，比飞机上显得柔和了一些。\n点菜的时候很果断，但先问了你有没有忌口。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '我查过了，这家的食材是当天从筑地空运的。你喜欢清淡还是浓郁的口味？',
              partnerEmotion: 'neutral',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '"查过了"——你注意到他用了这个词。他大概做什么事都要先调研一下。',
              delay: 1500,
            },
          ],
          choices: [
            {
              id: 'jiangyu_2_1_a',
              text: '你连吃饭都要做调研啊？有点可爱。交给你了，你来点。',
              emoji: '😄',
              scores: { expression_intensity: 4, intimacy_pace: 2 },
              affinity_change: 5,
            },
            {
              id: 'jiangyu_2_1_b',
              text: '我喜欢清淡的。谢谢你想这么周到。',
              emoji: '😊',
              scores: { security_baseline: 3, commitment_depth: 2 },
              affinity_change: 4,
            },
            {
              id: 'jiangyu_2_1_c',
              text: '我自己看菜单吧，有些东西还是亲自挑比较好。',
              emoji: '📋',
              scores: { autonomy_need: 4, conflict_style: 2 },
              affinity_change: 1,
            },
            {
              id: 'jiangyu_2_1_d',
              text: '你平时也这样吗？做每件事之前都要先分析一遍？',
              emoji: '🤔',
              scores: { growth_orientation: 3, intimacy_pace: 2 },
              affinity_change: 3,
              trait_unlock: { name: '深潜直觉', description: '你擅长看穿别人行为背后的动机', emoji: '🔍' },
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '……被你发现了。',
              partnerEmotion: 'shy',
              delay: 1000,
            },
            {
              type: 'narrator',
              text: '他难得地笑了一下。不是社交性的微笑，而是真正的、不设防的那种。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '习惯了。我做投资的，什么都要先看数据。但今天这顿饭……不是调研。',
              partnerEmotion: 'shy',
              delay: 2000,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '好，那你自己看。',
              partnerEmotion: 'neutral',
              delay: 800,
            },
            {
              type: 'narrator',
              text: '他没有再多说什么，但你注意到他的筷子在桌上轻轻调整了一下角度。有点不自在。',
              delay: 1500,
            },
          ],
        },
        // --- Choice Point 2-2 ---
        {
          id: 'jiangyu_2_2',
          messages_before: [
            {
              type: 'narrator',
              text: '饭吃到一半，他突然放下筷子，认真地看着你。',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '我跟你说个事。',
              partnerEmotion: 'neutral',
              delay: 800,
            },
            {
              type: 'partner',
              text: '上次飞机上，我本来不想跟任何人说话。但你坐在旁边看那本书，我看到你在某一页折了角……那一页我也折过。',
              partnerEmotion: 'vulnerable',
              delay: 2500,
            },
            {
              type: 'narrator',
              text: '他说这话的时候语速比平时慢。\n对于一个习惯掌控全局的人来说，这种坦白显然需要勇气。',
              delay: 2000,
            },
          ],
          choices: [
            {
              id: 'jiangyu_2_2_a',
              text: '所以你今天约我吃饭，是因为一个折页？……这是我听过最理性的浪漫了。',
              emoji: '💕',
              scores: { expression_intensity: 4, intimacy_pace: 3, security_baseline: 2 },
              affinity_change: 6,
            },
            {
              id: 'jiangyu_2_2_b',
              text: '我也注意到你了。不过我想先了解更多关于你的事。',
              emoji: '🧐',
              scores: { intimacy_pace: -2, growth_orientation: 3, security_baseline: 3 },
              affinity_change: 3,
            },
            {
              id: 'jiangyu_2_2_c',
              text: '你不觉得一个折页就下结论，样本量太小了吗？',
              emoji: '📉',
              scores: { conflict_style: 3, autonomy_need: 2, expression_intensity: -2 },
              affinity_change: 2,
            },
            {
              id: 'jiangyu_2_2_d',
              text: '这种巧合确实少见。但巧合不等于缘分，你说是吗？',
              emoji: '🎲',
              scores: { security_baseline: -3, autonomy_need: 3, commitment_depth: -2 },
              affinity_change: 0,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '理性的浪漫？',
              partnerEmotion: 'happy',
              delay: 1000,
            },
            {
              type: 'narrator',
              text: '他想了一下，然后很认真地点了点头。',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '嗯，大概是吧。不过如果你觉得样本量不够，我可以继续收集数据。',
              partnerEmotion: 'happy',
              delay: 1800,
            },
            {
              type: 'narrator',
              text: '这是江屿式的幽默。你差点没反应过来——他在用投资术语跟你调情。',
              delay: 1500,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '你说得对。样本量确实不够。',
              partnerEmotion: 'distant',
              delay: 1200,
            },
            {
              type: 'narrator',
              text: '他重新拿起筷子，表情恢复了平时的镇定。但你知道他刚才那一瞬间是真的在冒险。',
              delay: 1800,
            },
          ],
        },
      ],
      closing_messages: [
        {
          type: 'narrator',
          text: '饭后他送你到地铁口。夜风有点凉，他下意识地站在了你的上风处。',
          gradient: 'romantic',
          delay: 1500,
        },
        {
          type: 'partner',
          text: '今晚……很开心。谢谢你愿意来。',
          partnerEmotion: 'shy',
          delay: 1200,
        },
        {
          type: 'emoji_reaction',
          reactionContext: '他说"很开心"的时候，表情有一瞬间不像平时那个严肃的投资人',
          reactionOptions: [
            { emoji: '💓', label: '心动了', scores: { intimacy_pace: 4, expression_intensity: 2 } },
            { emoji: '😌', label: '很温暖', scores: { security_baseline: 3, commitment_depth: 2 } },
            { emoji: '🦋', label: '有点紧张', scores: { intimacy_pace: 2, security_baseline: -1 } },
            { emoji: '🤔', label: '还在观察', scores: { autonomy_need: 2, growth_orientation: 2 } },
          ],
        },
        {
          type: 'quick_swipe',
          swipeStatement: '你喜欢他用自己的方式表达在乎，哪怕方式有点笨拙',
          agreeScores: { security_baseline: 3, commitment_depth: 2 },
          disagreeScores: { expression_intensity: 2, autonomy_need: 2 },
        },
        {
          type: 'narrator',
          text: '回家的地铁上，你翻开那本书，找到了那个折角的页面。\n上面写着："所有的相遇，都是蓄谋已久。"',
          gradient: 'romantic',
          delay: 2000,
        },
      ],
    },
    // ==================== ACT 3: 走近 ====================
    {
      id: 3,
      title: '走近',
      subtitle: '数据之外',
      emoji: '🌃',
      gradient: 'from-violet-900/50 to-indigo-900/50',
      choice_points: [
        // --- Choice Point 3-1 ---
        {
          id: 'jiangyu_3_1',
          messages_before: [
            { type: 'chapter_title', text: '第三章 · 走近', emoji: '🌃', gradient: 'romantic' },
            {
              type: 'scene',
              text: '周末的下午。他第一次带你去他的公寓。\n整个房间整洁得不像有人住，书架上的书按类别严格排列。',
              emoji: '🏠',
              gradient: 'warm',
            },
            {
              type: 'narrator',
              text: '厨房里，他正在给你煮咖啡。动作精确得像在做实验——称豆子、量水温、计时。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '你随便坐。不过——沙发上那个垫子不要动，有固定的位置。',
              partnerEmotion: 'neutral',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '你看到茶几上有一个相框，是他小时候的照片。穿着校服，表情跟现在一样严肃。旁边站着一个女人，笑得很温柔。',
              delay: 2000,
            },
          ],
          choices: [
            {
              id: 'jiangyu_3_1_a',
              text: '拿起相框看了看，笑着说：你从小就这么严肃啊？这是你妈妈吗？',
              emoji: '👀',
              scores: { intimacy_pace: 4, expression_intensity: 3 },
              affinity_change: 3,
            },
            {
              id: 'jiangyu_3_1_b',
              text: '没有去碰相框，而是安静地坐下来等他煮好咖啡。',
              emoji: '☕',
              scores: { security_baseline: 3, autonomy_need: 2 },
              affinity_change: 4,
            },
            {
              id: 'jiangyu_3_1_c',
              text: '你家也太整齐了吧……你不觉得有点强迫症吗？',
              emoji: '😅',
              scores: { conflict_style: 3, expression_intensity: 3 },
              affinity_change: 1,
            },
            {
              id: 'jiangyu_3_1_d',
              text: '走到书架前，开始翻看他的藏书，试图从书里了解他。',
              emoji: '📚',
              scores: { growth_orientation: 4, intimacy_pace: 2 },
              affinity_change: 5,
              trait_unlock: { name: '读心术', description: '你习惯从细节中读懂一个人', emoji: '📖' },
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '他端着两杯咖啡走过来，看到你在翻他的书架，愣了一下。',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '……你居然从这个开始。',
              partnerEmotion: 'shy',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '大部分人会先问我做什么工作，赚多少钱。你是第一个先翻我书架的。',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '嗯……有人说过。',
              partnerEmotion: 'distant',
              delay: 1000,
            },
            {
              type: 'narrator',
              text: '他把咖啡放在你面前，杯子精确地放在了杯垫中央。沉默了几秒，气氛有点微妙。',
              delay: 1500,
            },
          ],
        },
        // --- Choice Point 3-2 ---
        {
          id: 'jiangyu_3_2',
          messages_before: [
            {
              type: 'narrator',
              text: '喝咖啡的时候，他突然接了一个电话。你听到电话那头的人在大声说什么。',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '知道了，我回头看。先挂了。',
              partnerEmotion: 'neutral',
              delay: 800,
            },
            {
              type: 'narrator',
              text: '他挂了电话，揉了一下太阳穴。你看到他脸上闪过一丝疲惫——那种平时绝不会让别人看到的疲惫。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '抱歉。公司的事。',
              partnerEmotion: 'neutral',
              delay: 1000,
            },
          ],
          choices: [
            {
              id: 'jiangyu_3_2_a',
              text: '没关系。你看起来很累。要不要先处理工作？我可以等你。',
              emoji: '🤝',
              scores: { security_baseline: 4, commitment_depth: 3 },
              affinity_change: 6,
            },
            {
              id: 'jiangyu_3_2_b',
              text: '你每次都这样随时待命吗？有没有真正属于自己的时间？',
              emoji: '⏰',
              scores: { growth_orientation: 4, conflict_style: 2, intimacy_pace: 2 },
              affinity_change: 3,
            },
            {
              id: 'jiangyu_3_2_c',
              text: '假装没注意到他的疲惫，换个话题聊别的。',
              emoji: '💬',
              scores: { security_baseline: 2, expression_intensity: -2, autonomy_need: 2 },
              affinity_change: 2,
            },
            {
              id: 'jiangyu_3_2_d',
              text: '走过去帮他揉了揉肩。什么也没说。',
              emoji: '💆',
              scores: { intimacy_pace: 5, expression_intensity: 4, commitment_depth: 2 },
              affinity_change: 7,
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '他的身体僵了一瞬，然后慢慢放松下来。',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '……你怎么知道我肩膀疼。',
              partnerEmotion: 'vulnerable',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '他没有回头看你，但你感觉到他的呼吸变慢了。\n有些墙，不是被推倒的，而是被温柔融化的。',
              delay: 2000,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '嗯，换个话题吧。',
              partnerEmotion: 'neutral',
              delay: 800,
            },
            {
              type: 'narrator',
              text: '他很快调整好了状态，但你能感觉到一层薄薄的隔膜又回来了。',
              delay: 1500,
            },
          ],
        },
        // --- Choice Point 3-3 ---
        {
          id: 'jiangyu_3_3',
          messages_before: [
            {
              type: 'scene',
              text: '傍晚，他开车带你去了一个地方。\n城市边缘的一座小山坡，可以看到整个城市的天际线。',
              emoji: '🌇',
              gradient: 'romantic',
            },
            {
              type: 'narrator',
              text: '夕阳正在往下沉。金色的光铺在城市上面，像一层温柔的膜。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '这个地方很少有人知道。我压力大的时候会来这里。',
              partnerEmotion: 'vulnerable',
              delay: 1800,
            },
            {
              type: 'partner',
              text: '带你来，是因为……我也不知道为什么。可能是想让你看到这个版本的我。',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
          ],
          choices: [
            {
              id: 'jiangyu_3_3_a',
              text: '这个版本的你很好。不用一直那么强。',
              emoji: '🌅',
              scores: { intimacy_pace: 4, security_baseline: 4, expression_intensity: 3 },
              affinity_change: 7,
            },
            {
              id: 'jiangyu_3_3_b',
              text: '谢谢你信任我。不过你不需要刻意展示什么，做你自己就好。',
              emoji: '🤗',
              scores: { security_baseline: 5, autonomy_need: 2 },
              affinity_change: 5,
            },
            {
              id: 'jiangyu_3_3_c',
              text: '你有压力的时候，只会一个人来这里吗？不会找人说吗？',
              emoji: '💭',
              scores: { growth_orientation: 4, conflict_style: 2, commitment_depth: 2 },
              affinity_change: 3,
            },
            {
              id: 'jiangyu_3_3_d',
              text: '风景确实不错。不过我更好奇——你把这里告诉过几个人？',
              emoji: '🧐',
              scores: { autonomy_need: 3, security_baseline: -2, intimacy_pace: -2 },
              affinity_change: 0,
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '他看着远方的城市，沉默了很久。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '我从来没有不强的选项。从小就没有。',
              partnerEmotion: 'vulnerable',
              delay: 1800,
            },
            {
              type: 'partner',
              text: '但你说的话，让我觉得……好像可以试试。',
              partnerEmotion: 'loving',
              delay: 2000,
            },
            {
              type: 'narrator',
              text: '夕阳最后的光照在他脸上。你看到一个平时藏在西装和数据背后的人，第一次卸下了铠甲。',
              delay: 2500,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '……只有你。',
              partnerEmotion: 'distant',
              delay: 1200,
            },
            {
              type: 'narrator',
              text: '他说完这两个字就不再说话了。你不确定他是在期待你的回应，还是在后悔说了太多。',
              delay: 1800,
            },
          ],
        },
      ],
      closing_messages: [
        {
          type: 'narrator',
          text: '回去的路上，车里很安静。他放了一首老歌，你们都没说话，但沉默不让人难受。',
          gradient: 'romantic',
          delay: 1500,
        },
        {
          type: 'partner',
          text: '下次……还可以带你去别的地方。如果你愿意的话。',
          partnerEmotion: 'shy',
          delay: 1500,
        },
        {
          type: 'emoji_reaction',
          reactionContext: '他用"如果你愿意"这种小心翼翼的语气说话，和平时的果断完全不同',
          reactionOptions: [
            { emoji: '🥰', label: '被打动了', scores: { intimacy_pace: 4, commitment_depth: 3 } },
            { emoji: '😊', label: '很期待', scores: { security_baseline: 3, expression_intensity: 2 } },
            { emoji: '🤔', label: '需要时间', scores: { autonomy_need: 3, growth_orientation: 1 } },
            { emoji: '😶', label: '不确定', scores: { security_baseline: -2, commitment_depth: -1 } },
          ],
        },
        {
          type: 'quick_swipe',
          swipeStatement: '你觉得他正在一点一点地向你打开自己',
          agreeScores: { intimacy_pace: 3, security_baseline: 3 },
          disagreeScores: { autonomy_need: 2, security_baseline: -2 },
        },
        {
          type: 'narrator',
          text: '他把你送到楼下。车窗摇下来，他说了句"晚安"。\n声音比平时轻了很多。',
          gradient: 'romantic',
          delay: 2000,
        },
      ],
    },
    // ==================== ACT 4: 摩擦 ====================
    {
      id: 4,
      title: '摩擦',
      subtitle: '控制与失控',
      emoji: '⚡',
      gradient: 'from-red-900/50 to-slate-900/50',
      choice_points: [
        // --- Choice Point 4-1 ---
        {
          id: 'jiangyu_4_1',
          messages_before: [
            { type: 'chapter_title', text: '第四章 · 摩擦', emoji: '⚡', gradient: 'tense' },
            {
              type: 'scene',
              text: '又是一个深夜。你已经三天没有收到他的消息了。\n上一条微信是他发的：「最近项目很忙，先不聊了。」',
              emoji: '📱',
              gradient: 'tense',
            },
            {
              type: 'narrator',
              text: '第一天你觉得正常。第二天开始有点不安。第三天，你在朋友圈看到他参加了一个行业峰会的照片，西装笔挺，旁边站着一个笑得很得体的女人。',
              delay: 2500,
            },
            {
              type: 'narrator',
              text: '他有时间发朋友圈，却没有时间回你的消息。',
              delay: 1500,
            },
          ],
          choices: [
            {
              id: 'jiangyu_4_1_a',
              text: '直接打电话给他：你忙没关系，但三天不回消息我会想多。',
              emoji: '📞',
              scores: { conflict_style: 5, expression_intensity: 4, security_baseline: -2 },
              affinity_change: 3,
              trait_unlock: { name: '边界守望者', description: '你不回避冲突，会主动表达需求', emoji: '🛡️' },
            },
            {
              id: 'jiangyu_4_1_b',
              text: '没有联系他，继续过自己的生活。他忙完了自然会找你。',
              emoji: '🧘',
              scores: { autonomy_need: 5, security_baseline: 3, intimacy_pace: -3 },
              affinity_change: 2,
            },
            {
              id: 'jiangyu_4_1_c',
              text: '发了一条轻松的消息：峰会怎么样？看到照片了，西装挺帅的。',
              emoji: '😎',
              scores: { expression_intensity: 2, security_baseline: 2, intimacy_pace: 2 },
              affinity_change: 4,
            },
            {
              id: 'jiangyu_4_1_d',
              text: '翻来覆去地看那张照片，越看越不舒服，但还是没有问。',
              emoji: '😔',
              scores: { security_baseline: -4, expression_intensity: -3, conflict_style: -3 },
              affinity_change: -2,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '……抱歉。我确实应该跟你说一声。',
              partnerEmotion: 'neutral',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '那个人是合作方的VP。你不用在意。',
              partnerEmotion: 'neutral',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '他顿了一下。',
              delay: 800,
            },
            {
              type: 'partner',
              text: '我不太习惯向人报告行踪。但我会学着调整。',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
          ],
          response_low: [
            {
              type: 'narrator',
              text: '又过了一天，他才回了消息。语气跟平时一样冷静，好像什么都没发生过。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '忙完了。最近怎么样？',
              partnerEmotion: 'distant',
              delay: 1000,
            },
          ],
        },
        // --- Choice Point 4-2 ---
        {
          id: 'jiangyu_4_2',
          messages_before: [
            {
              type: 'scene',
              text: '一周后。他终于有了空闲，约你出来吃饭。\n饭后在商场逛街，他走在前面，步伐很快。',
              emoji: '🏬',
              gradient: 'neutral',
            },
            {
              type: 'narrator',
              text: '你看到一家甜品店，想进去看看。但他已经径直走向了电梯。',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '走了，时间不早了。我八点还有个电话会。',
              partnerEmotion: 'neutral',
              delay: 1000,
            },
            {
              type: 'narrator',
              text: '你突然意识到，他总是在安排一切。行程、节奏、什么时候见面什么时候结束。你们之间，好像只有他的时间表。',
              delay: 2000,
            },
          ],
          choices: [
            {
              id: 'jiangyu_4_2_a',
              text: '你先走吧。我想逛一下这家店。你的电话会跟我无关。',
              emoji: '🚶‍♀️',
              scores: { autonomy_need: 5, conflict_style: 4, expression_intensity: 3 },
              affinity_change: 1,
            },
            {
              id: 'jiangyu_4_2_b',
              text: '好吧，走。但下次我们能不能不要总是按你的时间来？',
              emoji: '⏱️',
              scores: { conflict_style: 3, growth_orientation: 3, commitment_depth: 2 },
              affinity_change: 3,
            },
            {
              id: 'jiangyu_4_2_c',
              text: '默默跟上他的步伐，心里有点闷但不想扫兴。',
              emoji: '😶',
              scores: { security_baseline: -2, expression_intensity: -3, conflict_style: -4 },
              affinity_change: -1,
            },
            {
              id: 'jiangyu_4_2_d',
              text: '拉住他的手臂：五分钟。甜品店，我请你。你的电话会还有一个小时。',
              emoji: '🍰',
              scores: { expression_intensity: 4, intimacy_pace: 3, conflict_style: 2 },
              affinity_change: 5,
              trait_unlock: { name: '柔性边界', description: '你擅长用温和的方式争取自己的需求', emoji: '🌊' },
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '他低头看了一眼你拉住他的手，没有甩开。',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '……五分钟。',
              partnerEmotion: 'neutral',
              delay: 800,
            },
            {
              type: 'narrator',
              text: '最后他在甜品店坐了二十分钟。你们分享了一个提拉米苏。他用勺子把最上面那层可可粉刮到了你那边。',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '嗯……下次你想去哪里，你定。',
              partnerEmotion: 'shy',
              delay: 1500,
            },
          ],
          response_low: [
            {
              type: 'narrator',
              text: '他看了一眼手表，眉头微皱。',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '下次吧。真的来不及了。',
              partnerEmotion: 'distant',
              delay: 1200,
            },
            {
              type: 'narrator',
              text: '你跟着他上了电梯。空气里有一种微妙的不舒服，你们都感觉到了，但谁都没提。',
              delay: 1800,
            },
          ],
        },
        // --- Choice Point 4-3 ---
        {
          id: 'jiangyu_4_3',
          messages_before: [
            {
              type: 'scene',
              text: '凌晨一点。你被一个电话吵醒。\n是江屿。',
              emoji: '🌙',
              gradient: 'tense',
            },
            {
              type: 'partner',
              text: '在吗？',
              partnerEmotion: 'vulnerable',
              delay: 800,
            },
            {
              type: 'narrator',
              text: '他的声音跟平时不一样。没有那种掌控一切的沉稳，而是有点发抖。',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '项目出了问题。很大的问题。合伙人想撤资。我可能……会输掉这一轮。',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
            {
              type: 'narrator',
              text: '你从没听过他这样说话。那个永远冷静、永远正确的江屿，此刻声音里全是裂痕。',
              delay: 1800,
            },
          ],
          choices: [
            {
              id: 'jiangyu_4_3_a',
              text: '你在哪？我现在过来。',
              emoji: '🏃',
              scores: { commitment_depth: 5, intimacy_pace: 4, security_baseline: 2 },
              affinity_change: 8,
            },
            {
              id: 'jiangyu_4_3_b',
              text: '深呼吸。跟我说说怎么回事。我们一起想办法。',
              emoji: '🧠',
              scores: { security_baseline: 4, growth_orientation: 3, conflict_style: 2 },
              affinity_change: 6,
            },
            {
              id: 'jiangyu_4_3_c',
              text: '你先冷静一下。工作的事明天再处理。现在最重要的是你自己。',
              emoji: '💙',
              scores: { security_baseline: 4, expression_intensity: 3, autonomy_need: 2 },
              affinity_change: 5,
            },
            {
              id: 'jiangyu_4_3_d',
              text: '心疼他，但也有点不高兴——他只有脆弱的时候才想到你。',
              emoji: '😞',
              scores: { conflict_style: 3, security_baseline: -3, autonomy_need: 3, expression_intensity: -2 },
              affinity_change: -1,
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '电话那头沉默了很久。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '我在公司。',
              partnerEmotion: 'vulnerable',
              delay: 800,
            },
            {
              type: 'partner',
              text: '……你真的会来？',
              partnerEmotion: 'vulnerable',
              delay: 1200,
            },
            {
              type: 'narrator',
              text: '他问这句话的方式不像在确认，更像在难以置信。\n好像从来没有人在他最低落的时候说过"我来"。',
              delay: 2500,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '嗯。你说得对。抱歉，打扰你休息了。',
              partnerEmotion: 'distant',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '他挂了电话。你躺在黑暗里，不知道自己是做了正确的事还是错过了什么。',
              delay: 2000,
            },
          ],
        },
      ],
      closing_messages: [
        {
          type: 'narrator',
          text: '那天晚上之后，你们之间有什么东西变了。\n不是更好或更坏，而是更真实了。',
          gradient: 'bittersweet',
          delay: 1500,
        },
        {
          type: 'emoji_reaction',
          reactionContext: '经历了这些摩擦之后，你对这段关系的感受是',
          reactionOptions: [
            { emoji: '💪', label: '更确定了', scores: { commitment_depth: 4, security_baseline: 2 } },
            { emoji: '😰', label: '有点累', scores: { security_baseline: -2, autonomy_need: 2 } },
            { emoji: '🤝', label: '在磨合', scores: { growth_orientation: 3, conflict_style: 2 } },
            { emoji: '💔', label: '开始怀疑', scores: { commitment_depth: -2, security_baseline: -3 } },
          ],
        },
        {
          type: 'quick_swipe',
          swipeStatement: '你觉得爱一个人就是接受他不完美的部分',
          agreeScores: { commitment_depth: 3, growth_orientation: 2 },
          disagreeScores: { autonomy_need: 2, security_baseline: -1 },
        },
        {
          type: 'narrator',
          text: '江屿发来一条消息：「谢谢你。不管结果怎样，谢谢你没有走。」\n你看了很久，没有回复。不是不想，是不知道该怎么回应这种笨拙的真诚。',
          gradient: 'bittersweet',
          delay: 2500,
        },
      ],
    },
    // ==================== ACT 5: 抉择 ====================
    {
      id: 5,
      title: '抉择',
      subtitle: '理性的尽头',
      emoji: '🔥',
      gradient: 'from-amber-900/50 to-red-900/50',
      choice_points: [
        // --- Choice Point 5-1 ---
        {
          id: 'jiangyu_5_1',
          messages_before: [
            { type: 'chapter_title', text: '第五章 · 抉择', emoji: '🔥', gradient: 'tense' },
            {
              type: 'scene',
              text: '两个月后。一个雨天的下午。他约你在那个山坡上见面。\n他的车停在路边，人站在雨里，没有打伞。',
              emoji: '🌧️',
              gradient: 'bittersweet',
            },
            {
              type: 'narrator',
              text: '你打着伞走过去。他看到你，第一次没有笑，也没有说"你来了"。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '我要去北京了。总部那边的项目需要我。可能……半年，也可能更久。',
              partnerEmotion: 'sad',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '我想了很久怎么跟你说这件事。列了很多方案，做了很多推演。但最后发现……这件事没办法用逻辑解决。',
              partnerEmotion: 'vulnerable',
              delay: 2500,
            },
          ],
          choices: [
            {
              id: 'jiangyu_5_1_a',
              text: '半年而已，又不是永别。我等你。',
              emoji: '💫',
              scores: { commitment_depth: 6, security_baseline: 4, intimacy_pace: 3 },
              affinity_change: 8,
            },
            {
              id: 'jiangyu_5_1_b',
              text: '你做你的决定，我做我的。我们各自努力，保持联系就好。',
              emoji: '🤝',
              scores: { autonomy_need: 5, growth_orientation: 3, commitment_depth: 2 },
              affinity_change: 4,
            },
            {
              id: 'jiangyu_5_1_c',
              text: '你列了方案，那你的推演结果是什么？你想要什么答案？',
              emoji: '📊',
              scores: { conflict_style: 3, growth_orientation: 4, expression_intensity: 2 },
              affinity_change: 3,
              trait_unlock: { name: '灵魂拷问', description: '你会在关键时刻把问题抛回对方', emoji: '⚡' },
            },
            {
              id: 'jiangyu_5_1_d',
              text: '沉默了很久，然后说：如果你真的在乎我，不会是在决定之后才告诉我。',
              emoji: '😢',
              scores: { security_baseline: -4, conflict_style: 4, expression_intensity: 4, commitment_depth: -2 },
              affinity_change: -3,
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '他听到你的话，身体明显颤了一下。',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '我想要的答案……',
              partnerEmotion: 'vulnerable',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '我想要你说"半年很快"。我想要你说"我等你"。但我不敢要。因为这不是一个理性的要求。',
              partnerEmotion: 'vulnerable',
              delay: 2500,
            },
            {
              type: 'narrator',
              text: '雨打在伞面上。你看到他的眼眶红了——这个从不在人前示弱的男人，此刻的脆弱比任何时候都真实。',
              delay: 2000,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '……你说得对。我应该更早告诉你。',
              partnerEmotion: 'sad',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '雨越下越大。他站在那里，像一棵被风吹弯了的树，但还是没有倒下。',
              delay: 2000,
            },
          ],
        },
        // --- Choice Point 5-2 ---
        {
          id: 'jiangyu_5_2',
          messages_before: [
            {
              type: 'narrator',
              text: '你们在车里坐着。车窗上全是雨珠，外面的世界模糊成一片。',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '我有一句话，一直没跟你说。',
              partnerEmotion: 'vulnerable',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '我分析了很多次我们的关系。性格匹配度、生活习惯兼容性、长期发展可行性……结论都是"可行"。',
              partnerEmotion: 'neutral',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '但那些分析都没有回答一个问题——我为什么半夜会突然想听你的声音。',
              partnerEmotion: 'loving',
              delay: 2500,
            },
            {
              type: 'narrator',
              text: '他转过头看你。这一次，没有分析，没有逻辑，只有一双坦诚到近乎脆弱的眼睛。',
              delay: 2000,
            },
          ],
          choices: [
            {
              id: 'jiangyu_5_2_a',
              text: '你不需要分析。有些事情，感觉到了就够了。',
              emoji: '❤️',
              scores: { intimacy_pace: 5, expression_intensity: 5, commitment_depth: 4 },
              affinity_change: 8,
              trait_unlock: { name: '心之锚', description: '你愿意成为别人情感的安全港', emoji: '⚓' },
            },
            {
              id: 'jiangyu_5_2_b',
              text: '你的分析能力很强，但感情不是一道题。答案不在你的脑子里，在你心里。',
              emoji: '💡',
              scores: { growth_orientation: 5, expression_intensity: 3, security_baseline: 3 },
              affinity_change: 6,
            },
            {
              id: 'jiangyu_5_2_c',
              text: '我也会想听你的声音。但我不确定这够不够支撑异地。',
              emoji: '🌉',
              scores: { security_baseline: -2, commitment_depth: -1, conflict_style: 2, growth_orientation: 3 },
              affinity_change: 1,
            },
            {
              id: 'jiangyu_5_2_d',
              text: '握住他的手，什么都不说。有些时刻，语言是多余的。',
              emoji: '🤲',
              scores: { intimacy_pace: 4, security_baseline: 4, expression_intensity: -2, commitment_depth: 3 },
              affinity_change: 7,
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '他握紧你的手。他的手指有点凉，但握得很用力。',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '好。那我就不分析了。',
              partnerEmotion: 'loving',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '我喜欢你。不是"分析过后觉得合适"。是那种，不讲道理的喜欢。',
              partnerEmotion: 'loving',
              delay: 2500,
            },
            {
              type: 'narrator',
              text: '窗外的雨小了。光线从云层的缝隙里透出来。\n你想，原来理性的尽头，是心动。',
              delay: 2500,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '……嗯。我理解。',
              partnerEmotion: 'sad',
              delay: 1200,
            },
            {
              type: 'narrator',
              text: '他松开了你的手。车里安静得只能听到雨声。有些话说了就回不去，不说也一样。',
              delay: 2000,
            },
          ],
        },
      ],
      closing_messages: [
        {
          type: 'narrator',
          text: '雨停了。他发动了车，送你回家。\n这一次，他没有说"到了告诉我一声"。他等在楼下，看着你走进去，然后才开走。',
          gradient: 'bittersweet',
          delay: 2000,
        },
        {
          type: 'emoji_reaction',
          reactionContext: '这段故事走到了最后，你现在的心情是',
          reactionOptions: [
            { emoji: '💕', label: '很幸福', scores: { commitment_depth: 4, intimacy_pace: 3 } },
            { emoji: '🌅', label: '释然', scores: { growth_orientation: 3, security_baseline: 2 } },
            { emoji: '💧', label: '不舍', scores: { commitment_depth: 2, security_baseline: -1 } },
            { emoji: '🔥', label: '坚定', scores: { commitment_depth: 4, conflict_style: 2 } },
          ],
        },
        {
          type: 'quick_swipe',
          swipeStatement: '你相信真正的爱可以超越距离和逻辑',
          agreeScores: { commitment_depth: 4, security_baseline: 3 },
          disagreeScores: { autonomy_need: 3, growth_orientation: 2 },
        },
        {
          type: 'narrator',
          text: '那天晚上，你收到了他最后一条消息：\n「我从来没有对任何人说过那三个字。今天差点说了。下次见面，我一定说。」',
          gradient: 'romantic',
          delay: 3000,
        },
      ],
    },
  ],
  endings: [
    {
      id: 'warm',
      name: '🌅 温暖',
      emoji: '🌅',
      condition: 'high commitment + high expression',
      messages: [
        {
          type: 'scene',
          text: '三个月后。北京。',
          emoji: '🌅',
          gradient: 'warm',
        },
        {
          type: 'narrator',
          text: '你在机场到达厅看到他。穿着你送的那条围巾，手里拿着一杯热咖啡——不是他喝的黑咖啡，而是你喜欢的拿铁。',
          delay: 2000,
        },
        {
          type: 'partner',
          text: '你来了。',
          partnerEmotion: 'loving',
          delay: 1000,
        },
        {
          type: 'partner',
          text: '我想说的那三个字——我爱你。提前两个月说了，因为实在忍不了了。',
          partnerEmotion: 'loving',
          delay: 2500,
        },
        {
          type: 'narrator',
          text: '他笑得有点不好意思。这个曾经用数据衡量一切的人，最终学会了用心去丈量。',
          delay: 2000,
        },
        {
          type: 'narrator',
          text: '你在这段关系里展现了难得的勇气——你愿意靠近一个不完美的人，用温暖融化他的理性外壳。你让他知道，被爱不需要数据支撑。',
          gradient: 'warm',
          delay: 3000,
        },
        {
          type: 'narrator',
          text: '有些人，值得你等在理性的尽头。',
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
          text: '半年后。两座城市之间。',
          emoji: '🌊',
          gradient: 'cool',
        },
        {
          type: 'narrator',
          text: '你们建立了一种独特的关系模式：每两周见一次面，平时各自忙碌。他在北京做他的项目，你在这里过你的生活。',
          delay: 2000,
        },
        {
          type: 'partner',
          text: '今天投委会通过了那个项目。我第一个想告诉你。',
          partnerEmotion: 'happy',
          delay: 1500,
        },
        {
          type: 'narrator',
          text: '你回了一个竖起大拇指的表情，然后继续做手上的事。不是冷漠，而是信任。',
          delay: 1500,
        },
        {
          type: 'narrator',
          text: '你在这段关系里展现了一种成熟的独立——你不需要时刻黏在一起才觉得安全。你给了他空间，也给了自己自由。这种关系需要极强的安全感，而你做到了。',
          gradient: 'hopeful',
          delay: 3000,
        },
        {
          type: 'narrator',
          text: '最好的关系，不是合二为一，而是两个完整的人选择同行。',
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
          text: '一年后。那个山坡。',
          emoji: '🌧️',
          gradient: 'bittersweet',
        },
        {
          type: 'narrator',
          text: '你一个人来了这里。他带你来过一次的地方。\n城市的天际线还是一样的，但旁边少了一个人。',
          delay: 2000,
        },
        {
          type: 'narrator',
          text: '他去了北京之后，你们联系越来越少。不是谁的错，是两个人都不知道怎么维持一段没有确定性的关系。',
          delay: 2500,
        },
        {
          type: 'narrator',
          text: '你有时候会想——如果当时再坚定一点，再主动一点，结局会不一样吗？',
          delay: 2000,
        },
        {
          type: 'narrator',
          text: '在这段故事里，你总是在靠近和退缩之间摇摆。不是不勇敢，而是太害怕失去。你需要的不是更好的对象，而是对自己更多的信任。',
          gradient: 'bittersweet',
          delay: 3000,
        },
        {
          type: 'narrator',
          text: '有些遗憾不是句号，是逗号。下一段故事，你会写得更好。',
          gradient: 'bittersweet',
          delay: 2000,
        },
      ],
    },
    {
      id: 'rebirth',
      name: '🔥 重生',
      emoji: '🔥',
      condition: 'fluctuating scores, high growth',
      messages: [
        {
          type: 'scene',
          text: '四个月后。深夜的航班。',
          emoji: '✈️',
          gradient: 'hopeful',
        },
        {
          type: 'narrator',
          text: '你坐在商务舱里，翻着一本新书。旁边的座位空着。\n然后有人坐下来了。',
          delay: 2000,
        },
        {
          type: 'partner',
          text: '你的书——这次没掉。',
          partnerEmotion: 'shy',
          delay: 1500,
        },
        {
          type: 'narrator',
          text: '他瘦了一点，眼底有淡淡的青色。但他在笑——不是社交性的笑，而是看到你那种，真正的笑。',
          delay: 2000,
        },
        {
          type: 'partner',
          text: '项目结束了。我回来了。这次，是为了你回来的。',
          partnerEmotion: 'loving',
          delay: 2000,
        },
        {
          type: 'narrator',
          text: '你的感情之路像这架飞机一样，经历过颠簸和延误。但你始终没有放弃寻找答案。每一次冲突、每一次犹豫，都让你更清楚自己要什么。',
          gradient: 'hopeful',
          delay: 3000,
        },
        {
          type: 'narrator',
          text: '最好的重逢不是回到从前，而是带着成长重新出发。',
          gradient: 'hopeful',
          delay: 2000,
        },
      ],
    },
  ],
}

export default STORY
export { CHARACTER }
