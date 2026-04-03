// ============================================================
// Sonar - 沈默 (Shěn Mò) Character Story
// 温柔医生 - Emergency Room Resident
// ============================================================

import { Character, CharacterStory, StoryMessageData, ChoicePointData, ActData, Ending } from './characters'

const CHARACTER: Character = {
  id: 'shenmo',
  name: '沈默',
  subtitle: '温柔医生',
  description: '急诊科住院医师，沉稳可靠，不善言辞但总在关键时刻出现。工作忙到没有私人时间，却从不抱怨。',
  emoji: '🩺',
  gender: 'male',
  color: 'from-teal-900 to-emerald-900',
  avatar_emoji: '💚',
  quote: '抱歉，又迟到了',
}

const STORY: CharacterStory = {
  character: CHARACTER,
  acts: [
    // ==================== ACT 1: 相遇 ====================
    {
      id: 1,
      title: '相遇',
      subtitle: '深夜便利店',
      emoji: '🏪',
      gradient: 'from-slate-900/50 to-teal-900/50',
      choice_points: [
        // --- Choice Point 1_1: First encounter ---
        {
          id: 'shenmo_1_1',
          messages_before: [
            { type: 'chapter_title', text: '第一章 · 相遇', emoji: '🏪', gradient: 'cool' },
            {
              type: 'scene',
              text: '凌晨一点。一家24小时便利店，白色灯光冷冷地照着空荡荡的货架。你加班到现在，终于下班了。',
              emoji: '🌙',
              gradient: 'cool',
            },
            {
              type: 'narrator',
              text: '你拿着一杯热咖啡和一个饭团，站在收银台前。门口的风铃响了。',
              delay: 1200,
            },
            {
              type: 'narrator',
              text: '一个穿着蓝色手术服的男人走了进来。他身上还带着消毒水的味道，眼底是明显的疲惫，但背挺得很直。',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '他在热饮区站了很久，像是在发呆。然后你注意到——他的手在微微发抖。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '……不好意思，请问这个咖啡机怎么用？我没在这家店买过。',
              partnerEmotion: 'neutral',
              delay: 1800,
            },
          ],
          choices: [
            {
              id: 'shenmo_1_1_a',
              text: '帮他操作咖啡机，顺便说"你看起来比我还累"',
              emoji: '☕',
              scores: { intimacy_pace: 4, expression_intensity: 3, security_baseline: 2 },
              affinity_change: 5,
              trait_unlock: {
                name: '温度直觉',
                description: '你能敏锐地感知他人的疲惫，并自然地给予关怀',
                emoji: '🌡️',
              },
            },
            {
              id: 'shenmo_1_1_b',
              text: '简单指一下操作步骤，然后继续吃自己的饭团',
              emoji: '👆',
              scores: { autonomy_need: 3, intimacy_pace: -2, security_baseline: 3 },
              affinity_change: 2,
            },
            {
              id: 'shenmo_1_1_c',
              text: '直接把自己刚买的咖啡递给他："我还没喝，你先喝这杯吧"',
              emoji: '🤲',
              scores: { intimacy_pace: 6, expression_intensity: 5, commitment_depth: 2 },
              affinity_change: 7,
            },
            {
              id: 'shenmo_1_1_d',
              text: '教他用咖啡机，但不多说别的——人家也许只是想安静一会儿',
              emoji: '🤫',
              scores: { autonomy_need: 4, security_baseline: 4, expression_intensity: -3 },
              affinity_change: 3,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '谢谢。',
              partnerEmotion: 'neutral',
              delay: 800,
            },
            {
              type: 'narrator',
              text: '他接过咖啡，喝了一口。然后肩膀微微松了下来，像是卸掉了什么很重的东西。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '今天急诊来了一个小孩……还好，抢救过来了。',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
            {
              type: 'narrator',
              text: '他说这话的时候声音很轻，像是自言自语。但他看了你一眼。',
              delay: 1500,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '嗯，谢谢。',
              partnerEmotion: 'neutral',
              delay: 800,
            },
            {
              type: 'narrator',
              text: '他接过咖啡点了点头，然后走到窗边的座位坐下。没有再说话。',
              delay: 1500,
            },
          ],
        },
        // --- Choice Point 1_2: After first conversation ---
        {
          id: 'shenmo_1_2',
          messages_before: [
            {
              type: 'narrator',
              text: '你们在便利店的塑料椅子上坐了下来。窗外偶尔有出租车驶过，车灯在地上拉出长长的光。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '你也加班到这么晚？',
              partnerEmotion: 'neutral',
              delay: 1200,
            },
            {
              type: 'narrator',
              text: '他问话的方式很简洁，但目光是认真的。好像真的在关心，而不是客套。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '我叫沈默。嗯……就是"沉默"的"沈默"。挺讽刺的名字对吧。',
              partnerEmotion: 'shy',
              delay: 1800,
            },
          ],
          choices: [
            {
              id: 'shenmo_1_2_a',
              text: '"一点都不讽刺，我觉得沉稳是一种很难得的品质"',
              emoji: '💬',
              scores: { expression_intensity: 4, intimacy_pace: 3, security_baseline: 2 },
              affinity_change: 5,
            },
            {
              id: 'shenmo_1_2_b',
              text: '笑着说"确实有点好笑"，用幽默化解尴尬',
              emoji: '😄',
              scores: { expression_intensity: 2, conflict_style: 2, intimacy_pace: 2 },
              affinity_change: 3,
            },
            {
              id: 'shenmo_1_2_c',
              text: '也介绍自己的名字，然后问他平时下班都这么晚吗',
              emoji: '🕐',
              scores: { intimacy_pace: 2, security_baseline: -2, autonomy_need: -1, commitment_depth: 2 },
              affinity_change: 4,
            },
            {
              id: 'shenmo_1_2_d',
              text: '"名字只是符号嘛。你今天辛苦了，早点回去休息吧"',
              emoji: '🌙',
              scores: { autonomy_need: 3, security_baseline: 3, expression_intensity: -2, intimacy_pace: -3 },
              affinity_change: 1,
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '他愣了一下，然后嘴角弯了弯——不是笑，更像是某种紧绷的东西松开了。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '很少有人这么说。大部分人都觉得我……太闷了。',
              partnerEmotion: 'shy',
              delay: 1800,
            },
            {
              type: 'partner',
              text: '你家住哪边？这么晚了，我送你到地铁站吧。虽然……可能也已经没有地铁了。',
              partnerEmotion: 'shy',
              delay: 2000,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '嗯，你也早点回去。注意安全。',
              partnerEmotion: 'neutral',
              delay: 1200,
            },
            {
              type: 'narrator',
              text: '他站起来，把杯子扔进垃圾桶。动作很利落，像是习惯了一个人的节奏。',
              delay: 1500,
            },
          ],
        },
      ],
      closing_messages: [
        {
          type: 'narrator',
          text: '那天晚上你们互相加了微信。他的头像是一张医院天台拍的日出照片。',
          gradient: 'warm',
          delay: 1500,
        },
        {
          type: 'partner',
          text: '到家了吗？',
          partnerEmotion: 'neutral',
          delay: 1200,
        },
        {
          type: 'emoji_reaction',
          reactionContext: '收到他的消息，你心里的感觉是',
          reactionOptions: [
            { emoji: '😊', label: '有点暖', scores: { intimacy_pace: 3, security_baseline: 2 } },
            { emoji: '😐', label: '还好', scores: { autonomy_need: 2, intimacy_pace: -1 } },
            { emoji: '🥰', label: '被关心的感觉真好', scores: { intimacy_pace: 4, commitment_depth: 2 } },
            { emoji: '🤔', label: '他会是怎样的人呢', scores: { growth_orientation: 2, security_baseline: -1 } },
          ],
        },
        {
          type: 'quick_swipe',
          swipeStatement: '凌晨的便利店遇到一个温柔的陌生人，你觉得这是某种缘分',
          agreeScores: { intimacy_pace: 2, commitment_depth: 2 },
          disagreeScores: { autonomy_need: 2, security_baseline: 2 },
        },
        {
          type: 'narrator',
          text: '那之后的几天，他没有再主动联系你。但你偶尔刷朋友圈的时候，会看到他半夜发的一杯咖啡。',
          gradient: 'cool',
          delay: 2000,
        },
      ],
    },

    // ==================== ACT 2: 心动 ====================
    {
      id: 2,
      title: '心动',
      subtitle: '错过与等待',
      emoji: '💓',
      gradient: 'from-teal-900/50 to-blue-900/50',
      choice_points: [
        // --- Choice Point 2_1: The missed date ---
        {
          id: 'shenmo_2_1',
          messages_before: [
            { type: 'chapter_title', text: '第二章 · 心动', emoji: '💓', gradient: 'romantic' },
            {
              type: 'scene',
              text: '两周后。你们约了周末一起吃饭——他难得的休息日。',
              emoji: '🍽️',
              gradient: 'warm',
            },
            {
              type: 'narrator',
              text: '你到了餐厅，点了水。十分钟过去了。二十分钟。半小时。',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '手机震了一下。',
              delay: 800,
            },
            {
              type: 'partner',
              text: '抱歉，临时来了个急诊，要上台。可能得两个小时以上。真的很抱歉。',
              partnerEmotion: 'sad',
              delay: 2000,
            },
          ],
          choices: [
            {
              id: 'shenmo_2_1_a',
              text: '"没关系，你忙吧。我在这附近逛逛，等你忙完再说"',
              emoji: '🚶',
              scores: { security_baseline: 5, autonomy_need: 3, intimacy_pace: -2 },
              affinity_change: 4,
            },
            {
              id: 'shenmo_2_1_b',
              text: '"我等你。你忙完了直接来找我，多晚都行"',
              emoji: '⏰',
              scores: { commitment_depth: 5, intimacy_pace: 4, autonomy_need: -4 },
              affinity_change: 6,
              trait_unlock: {
                name: '等待体质',
                description: '你愿意为在乎的人留出时间的空白',
                emoji: '⏳',
              },
            },
            {
              id: 'shenmo_2_1_c',
              text: '"好的，那今天就算了吧。你忙完好好休息，我们改天再约"',
              emoji: '📅',
              scores: { autonomy_need: 5, security_baseline: 3, intimacy_pace: -4, commitment_depth: -2 },
              affinity_change: 1,
            },
            {
              id: 'shenmo_2_1_d',
              text: '"你总是这样临时取消吗？"——虽然理解，但还是有点失望',
              emoji: '😔',
              scores: { conflict_style: 5, expression_intensity: 4, security_baseline: -3 },
              affinity_change: -2,
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '过了一会儿，他又发来一条消息。',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '手术顺利。我现在下来了。你……还在吗？',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '我知道这样很过分。但是你愿意等我，让我觉得……特别感激。',
              partnerEmotion: 'shy',
              delay: 2000,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '嗯。抱歉。',
              partnerEmotion: 'sad',
              delay: 1000,
            },
            {
              type: 'narrator',
              text: '简短的两个字。你分不清是他真的在忙，还是他就是这样——把所有情绪都压缩成最少的字数。',
              delay: 2000,
            },
          ],
        },
        // --- Choice Point 2_2: Late night call ---
        {
          id: 'shenmo_2_2',
          messages_before: [
            {
              type: 'scene',
              text: '某个工作日的深夜。你已经躺在床上了。手机突然亮了。',
              emoji: '📱',
              gradient: 'cool',
            },
            {
              type: 'narrator',
              text: '是沈默的来电。他几乎从不主动打电话。',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '……你睡了吗？',
              partnerEmotion: 'vulnerable',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '他的声音很低，带着一种不同于平时的沙哑。你能听到他呼吸的声音，微微不稳。',
              delay: 1800,
            },
            {
              type: 'partner',
              text: '今天没救回来。一个十六岁的女孩。',
              partnerEmotion: 'sad',
              delay: 2500,
            },
          ],
          choices: [
            {
              id: 'shenmo_2_2_a',
              text: '什么都不说，就安静地听着他呼吸。他需要的不是安慰，是陪伴。',
              emoji: '🤐',
              scores: { security_baseline: 5, expression_intensity: -3, intimacy_pace: 3, autonomy_need: -2 },
              affinity_change: 6,
            },
            {
              id: 'shenmo_2_2_b',
              text: '"你已经尽力了。这不是你的错。"——他需要听到这句话',
              emoji: '💪',
              scores: { expression_intensity: 4, security_baseline: 3, commitment_depth: 3 },
              affinity_change: 5,
            },
            {
              id: 'shenmo_2_2_c',
              text: '"要不要出来走走？我可以现在去找你。"',
              emoji: '🏃',
              scores: { intimacy_pace: 6, commitment_depth: 4, autonomy_need: -5 },
              affinity_change: 7,
            },
            {
              id: 'shenmo_2_2_d',
              text: '"你需要找个人聊聊吗？不一定是我，专业的心理咨询也可以"',
              emoji: '🧠',
              scores: { growth_orientation: 5, autonomy_need: 4, intimacy_pace: -3, expression_intensity: -2 },
              affinity_change: 0,
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '电话那头沉默了很久。然后你听到他深深地吸了一口气。',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '……谢谢。',
              partnerEmotion: 'vulnerable',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '我不太会表达这些。但是打给你的时候，我心里好像没那么难受了。',
              partnerEmotion: 'shy',
              delay: 2500,
            },
            {
              type: 'narrator',
              text: '你能感觉到，他把一个平时不会给任何人看的自己，小心翼翼地露出了一个角。',
              delay: 2000,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '嗯，你说得对。抱歉这么晚打扰你。',
              partnerEmotion: 'distant',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '他很快挂了电话。你能感觉到，那扇刚刚打开一条缝的门，又合上了。',
              delay: 2000,
            },
          ],
        },
      ],
      closing_messages: [
        {
          type: 'narrator',
          text: '那通电话之后，你们的关系好像微妙地变了。他还是不怎么主动聊天，但偶尔会发一张照片给你——医院天台的云，路边开的花。',
          gradient: 'romantic',
          delay: 2000,
        },
        {
          type: 'partner',
          text: '今天的云很好看。',
          partnerEmotion: 'happy',
          delay: 1200,
        },
        {
          type: 'emoji_reaction',
          reactionContext: '他用照片代替言语的方式，你觉得',
          reactionOptions: [
            { emoji: '🥰', label: '好可爱', scores: { intimacy_pace: 3, expression_intensity: 2 } },
            { emoji: '😌', label: '能感受到他的心意', scores: { security_baseline: 3, commitment_depth: 2 } },
            { emoji: '😕', label: '希望他能多说几句', scores: { expression_intensity: 3, conflict_style: 2 } },
            { emoji: '🤗', label: '这就是他的方式', scores: { autonomy_need: 2, growth_orientation: 2 } },
          ],
        },
        {
          type: 'quick_swipe',
          swipeStatement: '你觉得不善言辞的人，内心反而更深沉',
          agreeScores: { security_baseline: 3, commitment_depth: 2 },
          disagreeScores: { expression_intensity: 3, conflict_style: 2 },
        },
        {
          type: 'narrator',
          text: '你开始习惯了在深夜收到他的消息。那些没有说出口的话，好像都藏在那一张张安静的照片里。',
          gradient: 'romantic',
          delay: 2000,
        },
      ],
    },

    // ==================== ACT 3: 走近 ====================
    {
      id: 3,
      title: '走近',
      subtitle: '他的世界',
      emoji: '🏥',
      gradient: 'from-emerald-900/50 to-teal-900/50',
      choice_points: [
        // --- Choice Point 3_1: Visiting the hospital ---
        {
          id: 'shenmo_3_1',
          messages_before: [
            { type: 'chapter_title', text: '第三章 · 走近', emoji: '🏥', gradient: 'warm' },
            {
              type: 'scene',
              text: '一个月后。他值完夜班，约你在医院附近的早餐店吃粥。',
              emoji: '🌅',
              gradient: 'warm',
            },
            {
              type: 'narrator',
              text: '你到的时候，他已经在了。面前放着两碗粥，热气腾腾的。他的黑眼圈很重，但看到你来了，嘴角动了动。',
              delay: 1800,
            },
            {
              type: 'partner',
              text: '帮你点了皮蛋瘦肉粥，不知道你喜不喜欢。不喜欢的话可以换。',
              partnerEmotion: 'shy',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '吃到一半，他的手机突然响了。他看了一眼，眉头皱了一下，但没有接。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '同事打的。应该不是急事……吧。',
              partnerEmotion: 'neutral',
              delay: 1200,
            },
          ],
          choices: [
            {
              id: 'shenmo_3_1_a',
              text: '"你先接吧，万一是工作上的事。我不介意的"',
              emoji: '📞',
              scores: { security_baseline: 4, autonomy_need: 3, commitment_depth: 2 },
              affinity_change: 5,
            },
            {
              id: 'shenmo_3_1_b',
              text: '什么都没说，安静地继续喝粥。他有自己的判断。',
              emoji: '🥣',
              scores: { autonomy_need: 5, security_baseline: 4, expression_intensity: -3 },
              affinity_change: 3,
            },
            {
              id: 'shenmo_3_1_c',
              text: '"你可以设置一个规则，比如休息时间只接紧急电话。你也需要休息的"',
              emoji: '📋',
              scores: { growth_orientation: 4, conflict_style: 3, expression_intensity: 3, autonomy_need: -2 },
              affinity_change: 2,
            },
            {
              id: 'shenmo_3_1_d',
              text: '"你平时都是这样吗？连吃顿早饭都不安宁……"——你替他心疼',
              emoji: '😟',
              scores: { expression_intensity: 5, intimacy_pace: 3, security_baseline: -3, commitment_depth: 3 },
              affinity_change: 4,
              trait_unlock: {
                name: '心疼本能',
                description: '你会不自觉地关注他人的辛苦，即使对方从不抱怨',
                emoji: '💗',
              },
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '他放下手机，认真地看着你。',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '其实我已经习惯了。但是……有人在乎这件事的感觉，不太一样。',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '今天的粥是我排了二十分钟队买的。因为听说这家最好喝。',
              partnerEmotion: 'shy',
              delay: 1800,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '嗯。就是这样的。',
              partnerEmotion: 'neutral',
              delay: 1000,
            },
            {
              type: 'narrator',
              text: '他低头继续喝粥，没再多说什么。你不确定他是真的不介意，还是已经麻木了。',
              delay: 1800,
            },
          ],
        },
        // --- Choice Point 3_2: Meeting his colleague ---
        {
          id: 'shenmo_3_2',
          messages_before: [
            {
              type: 'scene',
              text: '从早餐店出来，经过医院门口的时候，一个穿白大褂的女同事叫住了他。',
              emoji: '👩‍⚕️',
              gradient: 'neutral',
            },
            {
              type: 'narrator',
              text: '"沈默！你不是下班了吗？怎么还在这——" 她看了你一眼，表情微妙地变了。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '这是我同事，林医生。这是……我朋友。',
              partnerEmotion: 'neutral',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '朋友。他用了"朋友"这个词。你注意到林医生有些意味深长的笑容。',
              delay: 1500,
            },
          ],
          choices: [
            {
              id: 'shenmo_3_2_a',
              text: '礼貌地微笑打招呼，不在意他怎么介绍你——关系是两个人的事',
              emoji: '😊',
              scores: { security_baseline: 5, autonomy_need: 3, expression_intensity: -2 },
              affinity_change: 4,
            },
            {
              id: 'shenmo_3_2_b',
              text: '心里有点在意他说"朋友"，但不会当面说——回去再聊',
              emoji: '🤔',
              scores: { conflict_style: -3, security_baseline: -2, expression_intensity: -2, intimacy_pace: 2 },
              affinity_change: 2,
            },
            {
              id: 'shenmo_3_2_c',
              text: '大方地做自我介绍，说"我是沈默的朋友，很高兴认识你"',
              emoji: '🤝',
              scores: { expression_intensity: 4, security_baseline: 4, conflict_style: 2 },
              affinity_change: 5,
            },
            {
              id: 'shenmo_3_2_d',
              text: '开玩笑说"对，他的\'朋友\'，带引号的那种"——试探他的反应',
              emoji: '😏',
              scores: { intimacy_pace: 5, expression_intensity: 5, conflict_style: 4, security_baseline: -2 },
              affinity_change: 3,
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '林医生走了之后，你们继续往前走。沈默突然停下来。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '刚才……我应该换个说法的。不是"朋友"。',
              partnerEmotion: 'shy',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '但是我还不知道……应该怎么介绍你。你能给我一点时间吗？',
              partnerEmotion: 'vulnerable',
              delay: 2200,
            },
          ],
          response_low: [
            {
              type: 'narrator',
              text: '林医生走了之后，你们继续往前走。谁都没提刚才的事。',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '有些话悬在空气里，像是等着谁先去碰。但你们都默契地绕开了。',
              delay: 1800,
            },
          ],
        },
        // --- Choice Point 3_3: His apartment ---
        {
          id: 'shenmo_3_3',
          messages_before: [
            {
              type: 'scene',
              text: '又过了一周。你第一次去他的住处。离医院步行十分钟的单身公寓。',
              emoji: '🏠',
              gradient: 'warm',
            },
            {
              type: 'narrator',
              text: '房间不大，但很整洁。墙上只有一张合照——他和一群穿手术服的同事。茶几上散落着几本医学期刊。冰箱里几乎是空的。',
              delay: 2000,
            },
            {
              type: 'narrator',
              text: '你注意到他的衣柜只有蓝色手术服和几件简单的T恤。这个人的生活里，似乎只有工作。',
              delay: 1800,
            },
            {
              type: 'partner',
              text: '有点乱……我不太会收拾。平时在家的时间也不多。',
              partnerEmotion: 'shy',
              delay: 1500,
            },
          ],
          choices: [
            {
              id: 'shenmo_3_3_a',
              text: '"已经很整洁了。不过你冰箱也太空了，平时都吃什么？"——忍不住关心',
              emoji: '🧊',
              scores: { intimacy_pace: 3, expression_intensity: 3, commitment_depth: 3, autonomy_need: -2 },
              affinity_change: 5,
            },
            {
              id: 'shenmo_3_3_b',
              text: '好奇地翻看他书架上的书，想通过这些细节了解他',
              emoji: '📚',
              scores: { growth_orientation: 3, intimacy_pace: 2, autonomy_need: 2 },
              affinity_change: 4,
            },
            {
              id: 'shenmo_3_3_c',
              text: '"你需要的话我可以帮你添置一些生活用品。你不能一直这样将就自己"',
              emoji: '🛒',
              scores: { commitment_depth: 5, expression_intensity: 4, autonomy_need: -4, intimacy_pace: 4 },
              affinity_change: 4,
              trait_unlock: {
                name: '照顾冲动',
                description: '你忍不住想要介入并改善对方的生活',
                emoji: '🏡',
              },
            },
            {
              id: 'shenmo_3_3_d',
              text: '"你一个人住习惯了吧？有自己的节奏挺好的"',
              emoji: '🧘',
              scores: { autonomy_need: 5, security_baseline: 3, intimacy_pace: -3, expression_intensity: -2 },
              affinity_change: 2,
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '他站在厨房门口，看着你的样子。目光里有一种你没见过的温柔。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '你知道吗，你是第一个来我这里的人。除了我妈。',
              partnerEmotion: 'shy',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '我给你泡杯茶吧。虽然……我只有速溶的。',
              partnerEmotion: 'happy',
              delay: 1500,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '嗯，习惯了。',
              partnerEmotion: 'neutral',
              delay: 1000,
            },
            {
              type: 'narrator',
              text: '三个字的回答。你开始理解他名字的含义——不是冷漠，是真的不知道怎么表达。',
              delay: 1800,
            },
          ],
        },
      ],
      closing_messages: [
        {
          type: 'narrator',
          text: '从他家离开的时候已经是傍晚了。夕阳把医院大楼的玻璃染成了橘色。',
          gradient: 'warm',
          delay: 1500,
        },
        {
          type: 'partner',
          text: '下次……如果你想来的话，我提前买点水果。',
          partnerEmotion: 'shy',
          delay: 1500,
        },
        {
          type: 'emoji_reaction',
          reactionContext: '他笨拙的邀约方式让你觉得',
          reactionOptions: [
            { emoji: '🥹', label: '好心疼', scores: { intimacy_pace: 3, commitment_depth: 2 } },
            { emoji: '😊', label: '好可爱', scores: { expression_intensity: 2, security_baseline: 2 } },
            { emoji: '😔', label: '他太不会表达了', scores: { conflict_style: 2, expression_intensity: 3 } },
            { emoji: '💕', label: '我愿意', scores: { commitment_depth: 3, intimacy_pace: 3 } },
          ],
        },
        {
          type: 'quick_swipe',
          swipeStatement: '你觉得他的生活里需要一个人来填补那些空白',
          agreeScores: { commitment_depth: 3, intimacy_pace: 2 },
          disagreeScores: { autonomy_need: 3, growth_orientation: 2 },
        },
        {
          type: 'narrator',
          text: '你坐上回家的地铁，发现他给你发了一条消息："速溶茶不好喝吧？下次我去买真正的茶叶。"',
          gradient: 'romantic',
          delay: 2000,
        },
      ],
    },

    // ==================== ACT 4: 摩擦 ====================
    {
      id: 4,
      title: '摩擦',
      subtitle: '看不见的距离',
      emoji: '🌧️',
      gradient: 'from-gray-900/50 to-slate-900/50',
      choice_points: [
        // --- Choice Point 4_1: The birthday ---
        {
          id: 'shenmo_4_1',
          messages_before: [
            { type: 'chapter_title', text: '第四章 · 摩擦', emoji: '🌧️', gradient: 'tense' },
            {
              type: 'scene',
              text: '你的生日。他答应了会来。但直到晚上九点，他还没出现。',
              emoji: '🎂',
              gradient: 'tense',
            },
            {
              type: 'narrator',
              text: '朋友们都在问"那个医生男朋友呢？"你笑着说"他今天值班"，心里却在一遍遍刷新微信。',
              delay: 2000,
            },
            {
              type: 'narrator',
              text: '十点半。他终于发来消息。',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '对不起，刚下手术台。生日快乐。我知道说什么都太晚了。',
              partnerEmotion: 'sad',
              delay: 2000,
            },
          ],
          choices: [
            {
              id: 'shenmo_4_1_a',
              text: '"没关系，人到了就好。蛋糕给你留了一块。"——压下委屈',
              emoji: '🍰',
              scores: { conflict_style: -5, security_baseline: -2, expression_intensity: -4, commitment_depth: 3 },
              affinity_change: 3,
            },
            {
              id: 'shenmo_4_1_b',
              text: '"我不是生气你没来，我是生气你总是让我猜——你到底能不能来，至少告诉我一声"',
              emoji: '😤',
              scores: { conflict_style: 5, expression_intensity: 6, security_baseline: -2, growth_orientation: 3 },
              affinity_change: -1,
              trait_unlock: {
                name: '底线信号',
                description: '你知道什么时候需要说出真实感受，哪怕会让气氛变僵',
                emoji: '🚨',
              },
            },
            {
              id: 'shenmo_4_1_c',
              text: '"今天真的挺难过的。但我理解你的工作。我只是需要你知道，我很在乎今天。"',
              emoji: '💔',
              scores: { expression_intensity: 5, security_baseline: 2, conflict_style: 2, growth_orientation: 4 },
              affinity_change: 4,
            },
            {
              id: 'shenmo_4_1_d',
              text: '不回消息。今晚不想和任何人说话。',
              emoji: '📵',
              scores: { conflict_style: -4, autonomy_need: 5, expression_intensity: -5, security_baseline: -4 },
              affinity_change: -3,
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '他很快回复了。你能想象他在手术室外的走廊上低头打字的样子。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '你说得对。我不应该让你猜。这是我的问题。',
              partnerEmotion: 'sad',
              delay: 1800,
            },
            {
              type: 'partner',
              text: '明天我休息。能不能让我补过？你想去哪里都行。',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
            {
              type: 'narrator',
              text: '他很少这么主动。也许在他的方式里，这已经是全力以赴了。',
              delay: 1800,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '……嗯。晚安。',
              partnerEmotion: 'sad',
              delay: 1200,
            },
            {
              type: 'narrator',
              text: '你盯着屏幕上的"晚安"两个字，心里有一种说不清的滋味。不是愤怒，是疲惫。',
              delay: 2000,
            },
          ],
        },
        // --- Choice Point 4_2: His ex ---
        {
          id: 'shenmo_4_2',
          messages_before: [
            {
              type: 'scene',
              text: '某天你翻到他手机上一条未读消息——来自一个叫"学姐"的人。',
              emoji: '📩',
              gradient: 'tense',
            },
            {
              type: 'narrator',
              text: '不是你故意看的。是他让你帮他看一下排班表，打开手机的时候弹出来的。',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '消息内容是："沈默，上次的东西我还没还你。最近方便见一面吗？"',
              delay: 1800,
            },
            {
              type: 'partner',
              text: '怎么了？找到排班表了吗？',
              partnerEmotion: 'neutral',
              delay: 1200,
            },
          ],
          choices: [
            {
              id: 'shenmo_4_2_a',
              text: '"有人找你。"——把手机递回去，不追问。信任他会告诉你。',
              emoji: '📱',
              scores: { security_baseline: 6, autonomy_need: 4, conflict_style: -3, expression_intensity: -3 },
              affinity_change: 4,
            },
            {
              id: 'shenmo_4_2_b',
              text: '"你有一条消息。一个叫学姐的人。她是谁？"——直接问',
              emoji: '❓',
              scores: { conflict_style: 4, expression_intensity: 4, security_baseline: -2, intimacy_pace: 3 },
              affinity_change: 2,
            },
            {
              id: 'shenmo_4_2_c',
              text: '假装没看到，把排班表的截图发给自己，然后把手机还他',
              emoji: '🙈',
              scores: { conflict_style: -5, security_baseline: -4, expression_intensity: -4, autonomy_need: 2 },
              affinity_change: -1,
            },
            {
              id: 'shenmo_4_2_d',
              text: '"是不是前女友？你可以告诉我，我不会生气。但我需要知道。"',
              emoji: '🗣️',
              scores: { conflict_style: 3, security_baseline: 2, expression_intensity: 5, growth_orientation: 4 },
              affinity_change: 5,
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '他看了一眼手机，然后放下了。',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '是大学时候的学姐。以前……交往过一段时间。已经过去很久了。',
              partnerEmotion: 'neutral',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '她借了我一本书，一直没还。就这样。你不需要担心。',
              partnerEmotion: 'vulnerable',
              delay: 1800,
            },
            {
              type: 'partner',
              text: '谢谢你愿意问我，而不是自己胡思乱想。',
              partnerEmotion: 'loving',
              delay: 1500,
            },
          ],
          response_low: [
            {
              type: 'narrator',
              text: '他看了一眼手机，眉头微微皱了一下。然后把手机放进口袋。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '没什么。只是以前的同学。',
              partnerEmotion: 'distant',
              delay: 1200,
            },
            {
              type: 'narrator',
              text: '"没什么"。他总是用这两个字来关上一扇门。你不确定那扇门后面是什么。',
              delay: 2000,
            },
          ],
        },
        // --- Choice Point 4_3: The argument ---
        {
          id: 'shenmo_4_3',
          messages_before: [
            {
              type: 'scene',
              text: '周六下午。你们难得一起在他家看电影。他接了一个电话之后，说要回医院一趟。',
              emoji: '🎬',
              gradient: 'tense',
            },
            {
              type: 'partner',
              text: '科里有个病人情况不太好，我得回去看看。大概……一两个小时。',
              partnerEmotion: 'neutral',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '这已经是这个月第三次了。你知道他的工作性质，但心里还是有什么东西在积累。',
              delay: 1800,
            },
            {
              type: 'narrator',
              text: '他穿上外套，在门口停了一下，回头看了你一眼。',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '……你生气了吗？',
              partnerEmotion: 'vulnerable',
              delay: 1500,
            },
          ],
          choices: [
            {
              id: 'shenmo_4_3_a',
              text: '"没有生气，去吧。"——你知道他也没办法',
              emoji: '👋',
              scores: { conflict_style: -4, security_baseline: -3, expression_intensity: -4, commitment_depth: 2 },
              affinity_change: 1,
            },
            {
              id: 'shenmo_4_3_b',
              text: '"说实话？有一点。但不是对你生气，是对这种情况。我想你有时候也需要学会拒绝。"',
              emoji: '💭',
              scores: { conflict_style: 4, expression_intensity: 5, growth_orientation: 5, security_baseline: 2 },
              affinity_change: 3,
            },
            {
              id: 'shenmo_4_3_c',
              text: '"不生气。但我们需要谈谈——不是现在，等你回来。关于怎么平衡工作和生活。"',
              emoji: '📝',
              scores: { growth_orientation: 6, conflict_style: 3, commitment_depth: 4, expression_intensity: 3 },
              affinity_change: 5,
              trait_unlock: {
                name: '建设者本能',
                description: '你面对问题时不回避，而是寻找共同成长的方式',
                emoji: '🔧',
              },
            },
            {
              id: 'shenmo_4_3_d',
              text: '"你去吧。我先走了。"——默默收拾东西离开',
              emoji: '🚪',
              scores: { autonomy_need: 4, conflict_style: -5, expression_intensity: -5, security_baseline: -5 },
              affinity_change: -4,
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '他在门口站了很久。然后走回来，在你面前蹲下。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '你说得对。我一直觉得工作是第一位的，因为病人需要我。但我忘了……你也需要我。',
              partnerEmotion: 'vulnerable',
              delay: 2500,
            },
            {
              type: 'partner',
              text: '等我回来，我们好好聊。我保证。',
              partnerEmotion: 'loving',
              delay: 1500,
            },
          ],
          response_low: [
            {
              type: 'narrator',
              text: '他沉默了几秒，然后转身出了门。',
              delay: 1200,
            },
            {
              type: 'narrator',
              text: '门关上的声音很轻。但在安静的房间里，格外清晰。',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '你一个人坐在沙发上，电影还在播放。屏幕上的光忽明忽暗地映在墙上。',
              delay: 2000,
            },
          ],
        },
      ],
      closing_messages: [
        {
          type: 'narrator',
          text: '那天他从医院回来的时候，带了一束花。花瓣上还沾着雨水。你不知道他是从哪里买的，半夜的医院附近应该什么都关了。',
          gradient: 'bittersweet',
          delay: 2000,
        },
        {
          type: 'partner',
          text: '我在想，也许我可以试着跟主任谈一下排班。不是不负责任，是……我也有想守护的人。',
          partnerEmotion: 'vulnerable',
          delay: 2500,
        },
        {
          type: 'emoji_reaction',
          reactionContext: '听到他这么说，你内心的感受是',
          reactionOptions: [
            { emoji: '🥹', label: '感动', scores: { commitment_depth: 3, intimacy_pace: 2 } },
            { emoji: '😟', label: '担心他是在勉强自己', scores: { autonomy_need: 3, security_baseline: -1 } },
            { emoji: '💪', label: '觉得你们在进步', scores: { growth_orientation: 3, commitment_depth: 2 } },
            { emoji: '😢', label: '有点心酸', scores: { expression_intensity: 2, security_baseline: -2 } },
          ],
        },
        {
          type: 'quick_swipe',
          swipeStatement: '在爱情和事业之间，你觉得总有一方需要妥协',
          agreeScores: { commitment_depth: 2, security_baseline: -2 },
          disagreeScores: { growth_orientation: 3, autonomy_need: 2 },
        },
        {
          type: 'narrator',
          text: '窗外的雨停了。他把花放在桌上，安静地坐在你旁边。两个人都没说话，但好像什么都说了。',
          gradient: 'bittersweet',
          delay: 2000,
        },
      ],
    },

    // ==================== ACT 5: 抉择 ====================
    {
      id: 5,
      title: '抉择',
      subtitle: '手术灯下的答案',
      emoji: '💡',
      gradient: 'from-teal-900/50 to-amber-900/50',
      choice_points: [
        // --- Choice Point 5_1: The opportunity ---
        {
          id: 'shenmo_5_1',
          messages_before: [
            { type: 'chapter_title', text: '第五章 · 抉择', emoji: '💡', gradient: 'hopeful' },
            {
              type: 'scene',
              text: '三个月后。他告诉你，他拿到了一个去北京三甲医院进修的机会。为期一年。',
              emoji: '✈️',
              gradient: 'neutral',
            },
            {
              type: 'narrator',
              text: '你们坐在他家的沙发上。他说这件事的时候，一直在看着窗外。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '这个机会对我来说很重要。但我也知道……一年很长。',
              partnerEmotion: 'sad',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '我不想让你等。但我也不想放弃。',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
          ],
          choices: [
            {
              id: 'shenmo_5_1_a',
              text: '"你去吧。一年而已，我们可以撑过去的。"——你相信这段关系经得起距离',
              emoji: '✈️',
              scores: { commitment_depth: 6, security_baseline: 5, autonomy_need: 3, intimacy_pace: -2 },
              affinity_change: 6,
            },
            {
              id: 'shenmo_5_1_b',
              text: '"我不确定我能等一年。但这是你的梦想，我不应该拦你。"',
              emoji: '🌊',
              scores: { autonomy_need: 5, expression_intensity: 4, commitment_depth: -2, security_baseline: -3 },
              affinity_change: 1,
            },
            {
              id: 'shenmo_5_1_c',
              text: '"我们一起想办法。也许我可以申请调到北京的公司？"',
              emoji: '💼',
              scores: { commitment_depth: 7, intimacy_pace: 5, autonomy_need: -5, growth_orientation: 3 },
              affinity_change: 7,
              trait_unlock: {
                name: '共同航线',
                description: '你愿意为了重要的关系重新规划自己的人生',
                emoji: '🧭',
              },
            },
            {
              id: 'shenmo_5_1_d',
              text: '"先不急着决定。我们把所有可能性都列出来再说。"',
              emoji: '📋',
              scores: { growth_orientation: 5, security_baseline: 3, conflict_style: 2, expression_intensity: -2 },
              affinity_change: 4,
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '他终于转过头来看你。眼眶微红。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '我一直觉得，我的生活里只有手术台和病历。遇到你之后我才知道——原来还有别的东西值得我珍惜。',
              partnerEmotion: 'loving',
              delay: 2500,
            },
            {
              type: 'partner',
              text: '不管怎样，我不想再一个人了。',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '你说得对。一年确实很长。',
              partnerEmotion: 'sad',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '他没再说别的。你们之间的沉默，这一次不再是安静，而是空旷。',
              delay: 2000,
            },
          ],
        },
        // --- Choice Point 5_2: The final moment ---
        {
          id: 'shenmo_5_2',
          messages_before: [
            {
              type: 'scene',
              text: '他出发的前一天晚上。你们又来到了最初遇见的那家便利店。',
              emoji: '🏪',
              gradient: 'bittersweet',
            },
            {
              type: 'narrator',
              text: '还是凌晨的白色灯光。还是热饮区旁边的塑料椅子。但一切都和那天不一样了。',
              delay: 1800,
            },
            {
              type: 'partner',
              text: '还记得第一次在这里见到你吗？我那天其实不是不会用咖啡机。',
              partnerEmotion: 'shy',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '是看到你一个人在那里，想找个借口跟你说话。',
              partnerEmotion: 'loving',
              delay: 2000,
            },
            {
              type: 'narrator',
              text: '他低着头，手指绕着纸杯的杯沿。你知道他不擅长告别。',
              delay: 1800,
            },
          ],
          choices: [
            {
              id: 'shenmo_5_2_a',
              text: '握住他的手说："我会等你。不管多久。"',
              emoji: '🤝',
              scores: { commitment_depth: 7, intimacy_pace: 5, security_baseline: 4, expression_intensity: 5 },
              affinity_change: 8,
            },
            {
              id: 'shenmo_5_2_b',
              text: '"不要说再见。就说……下次见。"——用微笑代替眼泪',
              emoji: '😊',
              scores: { security_baseline: 4, expression_intensity: -2, growth_orientation: 4, commitment_depth: 3 },
              affinity_change: 5,
            },
            {
              id: 'shenmo_5_2_c',
              text: '"我不会做什么承诺。但我希望一年后你回来的时候，我们都变成更好的自己。"',
              emoji: '🌱',
              scores: { growth_orientation: 7, autonomy_need: 5, commitment_depth: -2, intimacy_pace: -3 },
              affinity_change: 2,
            },
            {
              id: 'shenmo_5_2_d',
              text: '什么都不说，只是靠在他肩膀上。有些话不用说出来。',
              emoji: '💫',
              scores: { intimacy_pace: 4, expression_intensity: -3, security_baseline: 5, commitment_depth: 4 },
              affinity_change: 6,
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '便利店的灯光还是那么白，那么冷。但你能感觉到他手心的温度。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '我这个人不太会说话。但你应该知道……',
              partnerEmotion: 'loving',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '在所有我想守护的人里面，你排在最前面。',
              partnerEmotion: 'loving',
              delay: 2500,
            },
            {
              type: 'narrator',
              text: '窗外的天开始微微亮了。又是一个日出。',
              delay: 1800,
            },
          ],
          response_low: [
            {
              type: 'narrator',
              text: '他点了点头。然后站起来，把两个纸杯一起扔进了垃圾桶。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '那……保重。',
              partnerEmotion: 'sad',
              delay: 1500,
            },
          ],
        },
      ],
      closing_messages: [
        {
          type: 'narrator',
          text: '天亮的时候，他叫了一辆出租车去机场。你站在便利店门口，看着尾灯消失在晨曦里。',
          gradient: 'bittersweet',
          delay: 2000,
        },
        {
          type: 'partner',
          text: '到机场了。一切都好。谢谢你今天来。',
          partnerEmotion: 'neutral',
          delay: 1500,
        },
        {
          type: 'emoji_reaction',
          reactionContext: '看着他的消息，此刻你的心情是',
          reactionOptions: [
            { emoji: '😢', label: '想哭', scores: { expression_intensity: 3, intimacy_pace: 2 } },
            { emoji: '💪', label: '相信你们可以', scores: { commitment_depth: 3, security_baseline: 3 } },
            { emoji: '🌅', label: '新的开始', scores: { growth_orientation: 3, autonomy_need: 2 } },
            { emoji: '💔', label: '说不清的痛', scores: { security_baseline: -2, expression_intensity: 2 } },
          ],
        },
        {
          type: 'quick_swipe',
          swipeStatement: '有些人值得等待，不管结果如何',
          agreeScores: { commitment_depth: 3, security_baseline: 2 },
          disagreeScores: { autonomy_need: 3, growth_orientation: 2 },
        },
        {
          type: 'narrator',
          text: '你一个人走回家。路过花店的时候，看到他们刚刚开门。门口摆着他上次买过的那种花。你停了一下，然后继续走。',
          gradient: 'hopeful',
          delay: 2500,
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
      condition: 'high commitment + high security',
      messages: [
        {
          type: 'scene',
          text: '一年后。北京。',
          emoji: '🌅',
          gradient: 'warm',
        },
        {
          type: 'narrator',
          text: '你在北京南站的出口等他。他穿着一件你没见过的深蓝色外套，手里提着行李。看到你的瞬间，他的眼睛亮了。',
          delay: 2000,
        },
        {
          type: 'partner',
          text: '……瘦了。',
          partnerEmotion: 'loving',
          delay: 1500,
        },
        {
          type: 'narrator',
          text: '他还是不善言辞。但他走过来的步伐很快，像是忍了很久。',
          delay: 1800,
        },
        {
          type: 'narrator',
          text: '这一年里你们经历了时差、争吵、思念和妥协。但每一次想要放弃的时候，你都选择了留下来。不是因为你不怕受伤，而是因为你知道——有些人值得你坚定。',
          gradient: 'warm',
          delay: 3000,
        },
        {
          type: 'narrator',
          text: '在你的爱情观里，安全感不是没有风浪，而是知道无论风浪多大，你们都会选择同一个方向。你是那种能给人温暖的人。',
          gradient: 'warm',
          delay: 3000,
        },
        {
          type: 'narrator',
          text: '他拉住了你的手。他的手还是像第一次见面那样微微发抖。但这次，是因为高兴。',
          gradient: 'warm',
          delay: 2500,
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
          text: '一年后。各自的城市。',
          emoji: '🌊',
          gradient: 'cool',
        },
        {
          type: 'narrator',
          text: '他在北京留了下来。你在这边也有了新的发展。你们还在联系，但频率变得更自然了——不是每天，而是想说话的时候。',
          delay: 2000,
        },
        {
          type: 'partner',
          text: '今天又值了一个夜班。但我学会了跟主任说不了。你应该会为我骄傲吧。',
          partnerEmotion: 'happy',
          delay: 2000,
        },
        {
          type: 'narrator',
          text: '你笑着回了一句"进步了，沈医生。"然后关上手机，继续忙自己的事。',
          delay: 1500,
        },
        {
          type: 'narrator',
          text: '在你的关系观里，爱不是绑定，而是给彼此空间去成长。你不需要他每时每刻都在身边才能感到安心。你相信的是——哪怕分开，你们也在各自变好。',
          gradient: 'hopeful',
          delay: 3000,
        },
        {
          type: 'narrator',
          text: '这或许不是最浪漫的结局，但它是最真实的。因为你知道，好的关系不是两个人靠在一起取暖，而是两个人各自发光。',
          gradient: 'hopeful',
          delay: 3000,
        },
      ],
    },
    {
      id: 'regret',
      name: '💔 遗憾',
      emoji: '💔',
      condition: 'low expression + low security',
      messages: [
        {
          type: 'scene',
          text: '半年后。某个失眠的夜晚。',
          emoji: '🌙',
          gradient: 'bittersweet',
        },
        {
          type: 'narrator',
          text: '你翻到和他的聊天记录。最后一条消息停在三个月前。是他发的——"最近还好吗？"。你没有回。',
          delay: 2000,
        },
        {
          type: 'narrator',
          text: '不是不想回。是不知道怎么回。你们之间有太多没说出口的话，堵在那里，谁都不知道怎么开口。',
          delay: 2500,
        },
        {
          type: 'narrator',
          text: '也许你害怕的不是他的沉默，而是自己在沉默中看到的那些不确定。他不说，你也不问。两个人小心翼翼地维护着一个越来越远的距离。',
          delay: 3000,
        },
        {
          type: 'narrator',
          text: '在这段关系里，你总是在等一个信号——等他先开口，等他先表态，等他先确定。但有时候，爱情需要的不是等待，是勇气。',
          gradient: 'bittersweet',
          delay: 3000,
        },
        {
          type: 'narrator',
          text: '你关上手机，翻了个身。窗外有一辆救护车呼啸而过。你想起他说过，每次听到救护车的声音，他都会条件反射地想站起来。',
          gradient: 'bittersweet',
          delay: 2500,
        },
        {
          type: 'narrator',
          text: '有些遗憾不是错过了时间，而是错过了说出口的那一刻。但这份遗憾本身，也许会让你在下一次遇到对的人时，不再犹豫。',
          gradient: 'bittersweet',
          delay: 3000,
        },
      ],
    },
    {
      id: 'rebirth',
      name: '🔥 重生',
      emoji: '🔥',
      condition: 'fluctuating scores + high growth',
      messages: [
        {
          type: 'scene',
          text: '八个月后。那家便利店。',
          emoji: '🏪',
          gradient: 'hopeful',
        },
        {
          type: 'narrator',
          text: '你加班到很晚，走进便利店买咖啡的时候，看到角落里一个熟悉的背影。蓝色手术服，微微弯曲的肩膀。',
          delay: 2000,
        },
        {
          type: 'narrator',
          text: '他提前回来了。你们不约而同地在同一个凌晨，走进了同一家便利店。',
          delay: 1800,
        },
        {
          type: 'partner',
          text: '……你也失眠？',
          partnerEmotion: 'shy',
          delay: 1500,
        },
        {
          type: 'narrator',
          text: '他笑了。那种很浅的、只有嘴角弯一下的笑。但你知道，那是他最真实的表情。',
          delay: 2000,
        },
        {
          type: 'narrator',
          text: '你们经历了分开、冷却、各自面对生活的风雨。这段关系不是一帆风顺的，你在其中有过犹豫和退缩。但你最了不起的品质是——即使摔倒了，你还愿意重新站起来，用更成熟的方式去爱。',
          gradient: 'hopeful',
          delay: 3000,
        },
        {
          type: 'narrator',
          text: '最好的爱情也许不是从未受伤，而是在受伤之后，依然相信爱值得。便利店的灯还是那么白，但你不再觉得冷了。',
          gradient: 'hopeful',
          delay: 3000,
        },
      ],
    },
  ],
}

export default STORY
export { CHARACTER }
