import { Character, CharacterStory, StoryMessageData, ChoicePointData, ActData, Ending } from './characters'

const CHARACTER: Character = {
  id: 'jiye',
  name: '季野',
  subtitle: '浪子诗人',
  description: '独立乐队主唱，自由不羁，总在路上。用音乐和旅行治愈一切的他，骨子里其实比谁都渴望一个"留下来的理由"。',
  emoji: '🎸',
  gender: 'male',
  color: 'from-amber-900 to-orange-900',
  avatar_emoji: '🔥',
  quote: '走吧，今晚月亮很好',
}

const STORY: CharacterStory = {
  character: CHARACTER,
  acts: [
    // ==================== ACT 1: 相遇 ====================
    {
      id: 1,
      title: '相遇',
      subtitle: '深夜的和弦',
      emoji: '🌙',
      gradient: 'from-amber-900/50 to-slate-900/50',
      choice_points: [
        // --- Choice Point 1_1: 深夜酒吧初遇 ---
        {
          id: 'jiye_1_1',
          messages_before: [
            { type: 'chapter_title', text: '第一章 · 相遇', emoji: '🌙', gradient: 'warm' },
            {
              type: 'scene',
              text: '周五深夜。一家藏在老城区地下的live house，灯光昏暗，空气里混着酒精和汗水的味道。',
              emoji: '🎵',
              gradient: 'warm',
            },
            {
              type: 'narrator',
              text: '台上的乐队刚结束最后一首歌。主唱把吉他往背后一甩，跳下舞台，径直走向吧台。',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '他刚好坐在你旁边。近距离看，他比台上更真实——额头上还挂着汗，T恤领口松松的，手指上有弹琴留下的茧。',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '两杯威士忌，一杯给这位。',
              partnerEmotion: 'happy',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '别推辞，你刚才在底下跟着唱了对吧？我看到了。',
              partnerEmotion: 'happy',
              delay: 1500,
            },
          ],
          choices: [
            {
              id: 'jiye_1_1_a',
              text: '"被发现了。你们那首《公路尽头》我听了不下一百遍。"',
              emoji: '🎵',
              scores: { intimacy_pace: 5, expression_intensity: 4, security_baseline: 2 },
              affinity_change: 7,
              trait_unlock: {
                name: '共鸣触发器',
                description: '你善于用真诚的回应打开别人的心门',
                emoji: '🎶',
              },
            },
            {
              id: 'jiye_1_1_b',
              text: '"谢谢酒。不过你们是不是经常这样请陌生人喝？"',
              emoji: '🥃',
              scores: { autonomy_need: 4, security_baseline: -2, conflict_style: 3 },
              affinity_change: 2,
            },
            {
              id: 'jiye_1_1_c',
              text: '接过酒杯，轻轻碰了一下他的杯子，没说话，只是笑了笑。',
              emoji: '🤫',
              scores: { intimacy_pace: 3, expression_intensity: -3, security_baseline: 3 },
              affinity_change: 5,
            },
            {
              id: 'jiye_1_1_d',
              text: '"你们乐队叫什么？我想关注一下，下次演出我还来。"',
              emoji: '📱',
              scores: { commitment_depth: 3, growth_orientation: 2, intimacy_pace: 2 },
              affinity_change: 4,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '他眼睛突然亮了。',
              partnerEmotion: 'happy',
              delay: 800,
            },
            {
              type: 'partner',
              text: '有意思。你是第一个让我觉得……值得从台上走下来聊聊的人。',
              partnerEmotion: 'happy',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '他说话的时候看着你的眼睛，像在舞台上唱歌一样认真。',
              delay: 1200,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '他端起酒杯，笑了一下，但笑意没到眼底。',
              partnerEmotion: 'neutral',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '行吧，干杯。',
              partnerEmotion: 'distant',
              delay: 1200,
            },
          ],
        },
        // --- Choice Point 1_2: 酒吧外的对话 ---
        {
          id: 'jiye_1_2',
          messages_before: [
            {
              type: 'scene',
              text: '凌晨一点。你们从酒吧走出来，巷子里很安静，路灯把两个人的影子拉得很长。',
              emoji: '🌃',
              gradient: 'cool',
            },
            {
              type: 'partner',
              text: '你平时都这么晚还在外面？',
              partnerEmotion: 'neutral',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '他从口袋里掏出一根烟，想了想，又放了回去。',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '我下周要去大理，乐队在那边有个小演出。你有没有兴趣……算了，太突然了。',
              partnerEmotion: 'shy',
              delay: 2000,
            },
          ],
          choices: [
            {
              id: 'jiye_1_2_a',
              text: '"大理？我正好想出去走走。什么时候出发？"',
              emoji: '✈️',
              scores: { intimacy_pace: 6, growth_orientation: 4, autonomy_need: -2 },
              affinity_change: 8,
            },
            {
              id: 'jiye_1_2_b',
              text: '"我们才刚认识耶。不过……可以先加个微信，到时候再说？"',
              emoji: '📲',
              scores: { security_baseline: 4, intimacy_pace: -2, commitment_depth: 2 },
              affinity_change: 3,
            },
            {
              id: 'jiye_1_2_c',
              text: '"你经常这样邀请刚认识的人一起旅行吗？"',
              emoji: '🤨',
              scores: { conflict_style: 4, security_baseline: -3, autonomy_need: 3 },
              affinity_change: 0,
            },
            {
              id: 'jiye_1_2_d',
              text: '"去不了大理，但你回来以后可以约我喝咖啡。"',
              emoji: '☕',
              scores: { security_baseline: 5, commitment_depth: 3, expression_intensity: 2 },
              affinity_change: 5,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '他的嘴角弯起一个很真的弧度。',
              partnerEmotion: 'happy',
              delay: 800,
            },
            {
              type: 'partner',
              text: '我就知道你不是那种活在框框里的人。',
              partnerEmotion: 'happy',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '凌晨的风吹过来，带着一点点初夏的温度。你觉得今晚出门是对的。',
              delay: 1200,
              gradient: 'warm',
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '他往后退了半步，耸耸肩。',
              partnerEmotion: 'distant',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '也是。那今晚就先这样吧。',
              partnerEmotion: 'neutral',
              delay: 1200,
            },
          ],
        },
      ],
      closing_messages: [
        {
          type: 'narrator',
          text: '你们在巷口分开。他往左走，走了几步又转过头来。',
          gradient: 'warm',
          delay: 1500,
        },
        {
          type: 'partner',
          text: '对了，我叫季野。记住了啊。',
          partnerEmotion: 'happy',
          delay: 1200,
        },
        {
          type: 'emoji_reaction',
          reactionContext: '看着他的背影消失在巷子尽头，你心里的感觉是',
          reactionOptions: [
            { emoji: '💫', label: '有点兴奋', scores: { intimacy_pace: 3, expression_intensity: 2 } },
            { emoji: '🤔', label: '不太确定', scores: { security_baseline: 2, autonomy_need: 2 } },
            { emoji: '😏', label: '挺有趣的', scores: { growth_orientation: 2, conflict_style: 1 } },
            { emoji: '💓', label: '心在跳', scores: { intimacy_pace: 4, commitment_depth: 2 } },
          ],
        },
        {
          type: 'quick_swipe',
          swipeStatement: '回家路上你忍不住搜了他们乐队的歌',
          agreeScores: { intimacy_pace: 3, commitment_depth: 2 },
          disagreeScores: { autonomy_need: 3, intimacy_pace: -1 },
        },
        {
          type: 'narrator',
          text: '那天晚上你睡得很迟。耳机里循环的是他在台上唱的最后一首歌。',
          gradient: 'romantic',
          delay: 1500,
        },
      ],
    },

    // ==================== ACT 2: 心动 ====================
    {
      id: 2,
      title: '心动',
      subtitle: '公路上的信号',
      emoji: '🚗',
      gradient: 'from-orange-900/50 to-amber-900/50',
      choice_points: [
        // --- Choice Point 2_1: 第二次见面 ---
        {
          id: 'jiye_2_1',
          messages_before: [
            { type: 'chapter_title', text: '第二章 · 心动', emoji: '🚗', gradient: 'warm' },
            {
              type: 'scene',
              text: '一周后。他从大理回来了，发消息约你去一个城郊的湖边。',
              emoji: '🏞️',
              gradient: 'warm',
            },
            {
              type: 'narrator',
              text: '他开一辆旧的吉普车来接你，后座堆满了乐器和背包。副驾驶上放着一束不知道从哪摘的野花。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '上车。花是路上随手摘的，别多想。',
              partnerEmotion: 'shy',
              delay: 2000,
            },
            {
              type: 'narrator',
              text: '他说别多想的时候，耳朵有一点点红。',
              delay: 1200,
            },
          ],
          choices: [
            {
              id: 'jiye_2_1_a',
              text: '拿起花闻了闻，笑着说："嗯，确实很随便。但我喜欢。"',
              emoji: '🌸',
              scores: { expression_intensity: 5, intimacy_pace: 4, security_baseline: 2 },
              affinity_change: 7,
            },
            {
              id: 'jiye_2_1_b',
              text: '"你倒是挺会的。走吧，我今天刚好也想出去透透气。"',
              emoji: '😎',
              scores: { autonomy_need: 3, expression_intensity: -2, growth_orientation: 2 },
              affinity_change: 3,
            },
            {
              id: 'jiye_2_1_c',
              text: '接过花，仔细看了一会儿，说："这是金银花，你知道花语是什么吗？"',
              emoji: '🌿',
              scores: { intimacy_pace: 3, growth_orientation: 4, commitment_depth: 2 },
              affinity_change: 5,
            },
            {
              id: 'jiye_2_1_d',
              text: '"花我收了。不过下次约我提前说，我今天差点有别的安排。"',
              emoji: '📅',
              scores: { autonomy_need: 5, conflict_style: 3, security_baseline: -2 },
              affinity_change: 1,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '他发动车子，嘴角一直翘着。',
              partnerEmotion: 'happy',
              delay: 800,
            },
            {
              type: 'partner',
              text: '你知道吗，大理的时候我写了首新歌。回来的路上一直在想该唱给谁听。',
              partnerEmotion: 'shy',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '车窗外的风灌进来，吹乱了你的头发。他伸手帮你把车窗关小了一点。',
              delay: 1200,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '他笑了一下，把花扔到后座。',
              partnerEmotion: 'neutral',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '行，走吧。路上你想听什么歌？',
              partnerEmotion: 'neutral',
              delay: 1200,
            },
          ],
        },
        // --- Choice Point 2_2: 湖边弹唱 ---
        {
          id: 'jiye_2_2',
          messages_before: [
            {
              type: 'scene',
              text: '傍晚的湖边。他从车里拿出吉他，坐在草地上开始弹。夕阳把湖面染成金色。',
              emoji: '🌅',
              gradient: 'romantic',
            },
            {
              type: 'narrator',
              text: '他唱的是那首新歌。词很简单，像是在讲一个人在路上遇见另一个人的故事。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '（唱完后安静了几秒）这首歌还没有名字。你觉得叫什么好？',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
            {
              type: 'narrator',
              text: '他看着你的眼神，认真得不像一个在台上永远嬉皮笑脸的人。',
              delay: 1200,
            },
          ],
          choices: [
            {
              id: 'jiye_2_2_a',
              text: '"叫《留下来的理由》吧。"',
              emoji: '🏠',
              scores: { commitment_depth: 6, intimacy_pace: 4, security_baseline: 3 },
              affinity_change: 8,
              trait_unlock: {
                name: '锚点直觉',
                description: '你能准确感知到对方内心深处真正渴望的东西',
                emoji: '⚓',
              },
            },
            {
              id: 'jiye_2_2_b',
              text: '"我不擅长起名字，但这首歌让我想到了远方。"',
              emoji: '🌄',
              scores: { growth_orientation: 4, expression_intensity: 3, autonomy_need: 2 },
              affinity_change: 5,
            },
            {
              id: 'jiye_2_2_c',
              text: '"先别急着起名字。好歌不需要名字也能让人记住。"',
              emoji: '✨',
              scores: { autonomy_need: 3, security_baseline: 2, expression_intensity: -2 },
              affinity_change: 3,
            },
            {
              id: 'jiye_2_2_d',
              text: '"你为什么问我？我们才见第二面。"',
              emoji: '❓',
              scores: { conflict_style: 4, security_baseline: -4, intimacy_pace: -3 },
              affinity_change: -2,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '他沉默了一会儿，然后轻轻笑了。',
              partnerEmotion: 'vulnerable',
              delay: 800,
            },
            {
              type: 'partner',
              text: '你怎么什么都懂。',
              partnerEmotion: 'loving',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '夕阳沉下去的时候，他的手指在琴弦上弹了一个很轻很轻的和弦。像是句号，又像是省略号。',
              delay: 1500,
              gradient: 'romantic',
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '他低头拨了几下琴弦，没再说话。',
              partnerEmotion: 'sad',
              delay: 1000,
            },
            {
              type: 'narrator',
              text: '湖面上的光暗了下来。安静变得有一点点尴尬。',
              delay: 1200,
              gradient: 'cool',
            },
          ],
        },
      ],
      closing_messages: [
        {
          type: 'narrator',
          text: '回去的路上，车里放着很老的歌。他哼着旋律，偶尔看你一眼。',
          gradient: 'romantic',
          delay: 1500,
        },
        {
          type: 'partner',
          text: '今天很开心。真的。',
          partnerEmotion: 'happy',
          delay: 1200,
        },
        {
          type: 'emoji_reaction',
          reactionContext: '他说"真的"的时候，声音很轻，你的反应是',
          reactionOptions: [
            { emoji: '🥰', label: '心被击中', scores: { intimacy_pace: 4, expression_intensity: 3 } },
            { emoji: '😊', label: '很温暖', scores: { security_baseline: 3, commitment_depth: 2 } },
            { emoji: '🙃', label: '有点慌', scores: { intimacy_pace: -1, autonomy_need: 3 } },
            { emoji: '🤗', label: '想靠近', scores: { intimacy_pace: 3, commitment_depth: 3 } },
          ],
        },
        {
          type: 'quick_swipe',
          swipeStatement: '你已经开始期待下次见面了',
          agreeScores: { commitment_depth: 3, intimacy_pace: 2 },
          disagreeScores: { autonomy_need: 3, security_baseline: 1 },
        },
        {
          type: 'narrator',
          text: '他把你送到楼下，没有熄火。你知道他想说什么，但他只是冲你挥了挥手。',
          gradient: 'bittersweet',
          delay: 1500,
        },
      ],
    },

    // ==================== ACT 3: 走近 ====================
    {
      id: 3,
      title: '走近',
      subtitle: '未读消息',
      emoji: '📱',
      gradient: 'from-rose-900/50 to-amber-900/50',
      choice_points: [
        // --- Choice Point 3_1: 凌晨电话 ---
        {
          id: 'jiye_3_1',
          messages_before: [
            { type: 'chapter_title', text: '第三章 · 走近', emoji: '📱', gradient: 'romantic' },
            {
              type: 'scene',
              text: '凌晨两点。你已经睡了，手机突然响了。是季野。',
              emoji: '📞',
              gradient: 'cool',
            },
            {
              type: 'narrator',
              text: '你犹豫了两秒，还是接了。',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '（声音有点沙哑）醒了？对不起，我知道很晚了。',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '我刚从排练室出来，走在路上……突然特别想听你说话。',
              partnerEmotion: 'vulnerable',
              delay: 1500,
            },
          ],
          choices: [
            {
              id: 'jiye_3_1_a',
              text: '"没事，我也没睡踏实。怎么了？排练不顺利？"',
              emoji: '💭',
              scores: { expression_intensity: 3, security_baseline: 4, intimacy_pace: 3 },
              affinity_change: 6,
            },
            {
              id: 'jiye_3_1_b',
              text: '"你知道现在几点吗？下次想聊天可以早一点打。"',
              emoji: '⏰',
              scores: { conflict_style: 5, autonomy_need: 4, security_baseline: -2 },
              affinity_change: -1,
            },
            {
              id: 'jiye_3_1_c',
              text: '没有说话，就安静地听着，等他继续说。',
              emoji: '🤫',
              scores: { expression_intensity: -3, security_baseline: 5, commitment_depth: 3 },
              affinity_change: 5,
            },
            {
              id: 'jiye_3_1_d',
              text: '"那就说吧。我把灯打开了，今晚陪你。"',
              emoji: '💡',
              scores: { intimacy_pace: 6, commitment_depth: 4, expression_intensity: 4 },
              affinity_change: 7,
              trait_unlock: {
                name: '深夜港湾',
                description: '在别人最脆弱的时候，你选择了在场',
                emoji: '🌊',
              },
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '电话那头沉默了两秒。然后你听到他笑了，很轻。',
              partnerEmotion: 'vulnerable',
              delay: 800,
            },
            {
              type: 'partner',
              text: '谢谢你。你不知道你这句话对我来说有多重要。',
              partnerEmotion: 'loving',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '他开始讲大理的事，讲路上遇到的人，讲他为什么开始做音乐。你从来没听他说过这么多话。',
              delay: 1500,
              gradient: 'warm',
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '他愣了一下。',
              partnerEmotion: 'sad',
              delay: 800,
            },
            {
              type: 'partner',
              text: '……也是。抱歉，那你早点睡。',
              partnerEmotion: 'distant',
              delay: 1200,
            },
            {
              type: 'narrator',
              text: '电话挂断了。屏幕暗下去以后，房间安静得有点空。',
              delay: 1200,
              gradient: 'cool',
            },
          ],
        },
        // --- Choice Point 3_2: 他带你见乐队的朋友 ---
        {
          id: 'jiye_3_2',
          messages_before: [
            {
              type: 'scene',
              text: '周末。他带你去了乐队的排练室，介绍你认识他的朋友们。',
              emoji: '🎸',
              gradient: 'warm',
            },
            {
              type: 'narrator',
              text: '排练室在一个老厂房里，墙上贴满了演出海报。鼓手、贝斯手看到你，交换了一个心照不宣的眼神。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '别理他们，一群八卦精。来，我带你看个好玩的。',
              partnerEmotion: 'happy',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '他递给你一把木吉他，站到你身后，手把手教你按和弦。他的下巴几乎碰到你的头顶。',
              delay: 1500,
            },
          ],
          choices: [
            {
              id: 'jiye_3_2_a',
              text: '认真地学，虽然手指很疼，但不想让他失望。',
              emoji: '🎸',
              scores: { commitment_depth: 4, growth_orientation: 4, intimacy_pace: 3 },
              affinity_change: 6,
            },
            {
              id: 'jiye_3_2_b',
              text: '笑着把吉他还给他："我还是当观众比较适合。你弹给我听吧。"',
              emoji: '👀',
              scores: { autonomy_need: 2, expression_intensity: 3, security_baseline: 3 },
              affinity_change: 4,
            },
            {
              id: 'jiye_3_2_c',
              text: '把吉他放下，走向鼓手那边："教我打鼓吧，我喜欢更带劲的。"',
              emoji: '🥁',
              scores: { autonomy_need: 5, growth_orientation: 3, conflict_style: 2 },
              affinity_change: 2,
            },
            {
              id: 'jiye_3_2_d',
              text: '靠在他身上，让他的手覆在你手上。和弦学不学得会不重要。',
              emoji: '💕',
              scores: { intimacy_pace: 6, expression_intensity: 5, commitment_depth: 2 },
              affinity_change: 7,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '他低头看着你，眼神变得很柔。',
              partnerEmotion: 'loving',
              delay: 800,
            },
            {
              type: 'partner',
              text: '嗯，就是这个感觉。你学什么都特别快。',
              partnerEmotion: 'happy',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '旁边的鼓手开始起哄："哥，你从来没这么有耐心教过人啊。"',
              delay: 1200,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '他愣了一下，有点尴尬地挠了挠头。',
              partnerEmotion: 'neutral',
              delay: 800,
            },
            {
              type: 'partner',
              text: '也行吧。那随便逛逛。',
              partnerEmotion: 'neutral',
              delay: 1200,
            },
          ],
        },
        // --- Choice Point 3_3: 排练结束后的夜谈 ---
        {
          id: 'jiye_3_3',
          messages_before: [
            {
              type: 'scene',
              text: '深夜。排练结束了，朋友们都走了。排练室里只剩你们两个人，和一盏昏黄的灯。',
              emoji: '🌃',
              gradient: 'romantic',
            },
            {
              type: 'partner',
              text: '你知道我为什么做音乐吗？',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '因为我爸妈从小就吵架。家里永远很吵。只有戴上耳机的时候，世界才是安静的。',
              partnerEmotion: 'sad',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '后来我就想，不如自己做能让自己安静下来的音乐。',
              partnerEmotion: 'vulnerable',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '这是他第一次在你面前放下那个总是笑着的面具。',
              delay: 1200,
              gradient: 'bittersweet',
            },
          ],
          choices: [
            {
              id: 'jiye_3_3_a',
              text: '"谢谢你告诉我这些。你能说出来，说明你已经比当时那个小孩强大了很多。"',
              emoji: '🤝',
              scores: { expression_intensity: 4, security_baseline: 5, growth_orientation: 3 },
              affinity_change: 7,
            },
            {
              id: 'jiye_3_3_b',
              text: '伸出手握住他的手，什么都没说。',
              emoji: '🫂',
              scores: { intimacy_pace: 5, expression_intensity: -2, commitment_depth: 4 },
              affinity_change: 6,
            },
            {
              id: 'jiye_3_3_c',
              text: '"所以你一直在路上，是因为不想停下来？"',
              emoji: '🛤️',
              scores: { growth_orientation: 5, conflict_style: 3, security_baseline: -2 },
              affinity_change: 3,
            },
            {
              id: 'jiye_3_3_d',
              text: '"我小时候也是。不过我是靠看书逃走的。"',
              emoji: '📖',
              scores: { expression_intensity: 3, intimacy_pace: 4, security_baseline: 3, growth_orientation: 2 },
              affinity_change: 6,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '他转过头来看你，目光里有一种你从没在他脸上看到过的东西。',
              partnerEmotion: 'loving',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '你是第一个让我觉得……就算停下来也没关系的人。',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
            {
              type: 'narrator',
              text: '排练室外面传来火车经过的声音，轰隆隆的，但你觉得这是今晚最安静的一刻。',
              delay: 1500,
              gradient: 'romantic',
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '他轻轻抽回了手，站起来开始收拾东西。',
              partnerEmotion: 'distant',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '太晚了，走吧。说多了，抱歉。',
              partnerEmotion: 'distant',
              delay: 1200,
            },
          ],
        },
      ],
      closing_messages: [
        {
          type: 'narrator',
          text: '他送你回家的路上，车里没有放音乐。你们就这么安静地坐着，但那种安静让人觉得很安全。',
          gradient: 'warm',
          delay: 1500,
        },
        {
          type: 'emoji_reaction',
          reactionContext: '你开始意识到，和他在一起的感觉像是',
          reactionOptions: [
            { emoji: '🏠', label: '回家', scores: { commitment_depth: 4, security_baseline: 3 } },
            { emoji: '🎢', label: '冒险', scores: { growth_orientation: 3, intimacy_pace: 2 } },
            { emoji: '🌊', label: '潮汐', scores: { autonomy_need: 2, conflict_style: 2 } },
            { emoji: '🔥', label: '篝火', scores: { expression_intensity: 3, intimacy_pace: 3 } },
          ],
        },
        {
          type: 'quick_swipe',
          swipeStatement: '你想成为他愿意停下来的那个理由',
          agreeScores: { commitment_depth: 4, intimacy_pace: 2 },
          disagreeScores: { autonomy_need: 3, growth_orientation: 2 },
        },
        {
          type: 'narrator',
          text: '走到楼下的时候，他突然说了一句话。',
          delay: 1000,
        },
        {
          type: 'partner',
          text: '我好像……有一段时间没有想出发了。',
          partnerEmotion: 'shy',
          delay: 2000,
        },
      ],
    },

    // ==================== ACT 4: 摩擦 ====================
    {
      id: 4,
      title: '摩擦',
      subtitle: '不接的电话',
      emoji: '🌧️',
      gradient: 'from-slate-900/50 to-zinc-900/50',
      choice_points: [
        // --- Choice Point 4_1: 他突然消失了 ---
        {
          id: 'jiye_4_1',
          messages_before: [
            { type: 'chapter_title', text: '第四章 · 摩擦', emoji: '🌧️', gradient: 'tense' },
            {
              type: 'scene',
              text: '你已经三天没有收到季野的消息了。上次这样是从来没有过的。',
              emoji: '📵',
              gradient: 'tense',
            },
            {
              type: 'narrator',
              text: '你的微信消息显示"已读"但没有回复。朋友圈里他什么都没发。',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '第四天的时候，你在社交媒体上看到鼓手发的照片——季野在一个陌生的城市，身边是一群你不认识的人。',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '他没有跟你说过要出门。',
              delay: 1000,
              gradient: 'tense',
            },
          ],
          choices: [
            {
              id: 'jiye_4_1_a',
              text: '直接打电话给他，问他在哪里、为什么不告诉你。',
              emoji: '📞',
              scores: { conflict_style: 6, expression_intensity: 5, security_baseline: -3 },
              affinity_change: 0,
            },
            {
              id: 'jiye_4_1_b',
              text: '没有联系他，但把自己的日常发了朋友圈。让他知道你过得很好。',
              emoji: '📸',
              scores: { autonomy_need: 5, expression_intensity: -2, conflict_style: -3 },
              affinity_change: 1,
            },
            {
              id: 'jiye_4_1_c',
              text: '发一条简短的微信："看到你在外面。玩开心。回来找我。"',
              emoji: '💬',
              scores: { security_baseline: 5, commitment_depth: 3, expression_intensity: 2 },
              affinity_change: 5,
              trait_unlock: {
                name: '安全感锚点',
                description: '你能在不安中保持信任，给对方空间也给自己底气',
                emoji: '⚓',
              },
            },
            {
              id: 'jiye_4_1_d',
              text: '联系鼓手，旁敲侧击地问季野的情况。',
              emoji: '🕵️',
              scores: { security_baseline: -4, conflict_style: -2, intimacy_pace: 2, commitment_depth: 2 },
              affinity_change: -2,
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '很快，你的手机振动了。',
              delay: 800,
            },
            {
              type: 'partner',
              text: '对不起。临时接了个外地的活，走得太急了。',
              partnerEmotion: 'sad',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '我不是故意不说的。就是……不太习惯跟谁报备。但我知道这样不对。',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
          ],
          response_low: [
            {
              type: 'narrator',
              text: '又过了一天，他才回消息。',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '我回来了。你还好吗？',
              partnerEmotion: 'neutral',
              delay: 1200,
            },
          ],
        },
        // --- Choice Point 4_2: 正面冲突 ---
        {
          id: 'jiye_4_2',
          messages_before: [
            {
              type: 'scene',
              text: '他回来的那天晚上，你们在他的公寓见面了。屋子里很乱，到处是行李箱和散落的衣服。',
              emoji: '🏠',
              gradient: 'tense',
            },
            {
              type: 'partner',
              text: '你是不是生气了？',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
            {
              type: 'narrator',
              text: '他坐在沙发上，没有开灯，只有窗外的路灯照进来。',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '我知道我有问题。我从小就这样，一有什么事就想跑。这是我的应对方式。',
              partnerEmotion: 'sad',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '但这次不一样。我跑了，可我一直在想你。',
              partnerEmotion: 'vulnerable',
              delay: 1800,
            },
          ],
          choices: [
            {
              id: 'jiye_4_2_a',
              text: '"想我不代表什么。你需要学会的是，跑之前至少告诉我一声。"',
              emoji: '🗣️',
              scores: { conflict_style: 6, security_baseline: 3, commitment_depth: 4 },
              affinity_change: 4,
            },
            {
              id: 'jiye_4_2_b',
              text: '"我没有生气。我只是……害怕你有一天跑了就不回来了。"',
              emoji: '😢',
              scores: { expression_intensity: 6, security_baseline: -4, intimacy_pace: 5 },
              affinity_change: 6,
            },
            {
              id: 'jiye_4_2_c',
              text: '"也许我们需要一些规则。不是束缚你，是让我安心。"',
              emoji: '📋',
              scores: { commitment_depth: 5, security_baseline: 4, conflict_style: 3, autonomy_need: -3 },
              affinity_change: 4,
            },
            {
              id: 'jiye_4_2_d',
              text: '"你的自由我不想干涉。但如果你连基本的尊重都做不到，那我也没必要等。"',
              emoji: '🚪',
              scores: { autonomy_need: 6, conflict_style: 5, commitment_depth: -3 },
              affinity_change: -3,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '他站起来，走到你面前。',
              partnerEmotion: 'vulnerable',
              delay: 800,
            },
            {
              type: 'partner',
              text: '你说得对。我会改的。我不想失去你。',
              partnerEmotion: 'loving',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '他伸出手，犹豫了一下，然后把你拉进了怀里。',
              delay: 1500,
              gradient: 'romantic',
            },
            {
              type: 'partner',
              text: '给我一点时间。我在学怎么留下来。',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '他低着头，不看你。',
              partnerEmotion: 'sad',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '我知道了。',
              partnerEmotion: 'distant',
              delay: 1200,
            },
            {
              type: 'narrator',
              text: '空气很沉，两个人之间好像隔了一层什么东西。',
              delay: 1200,
              gradient: 'tense',
            },
          ],
        },
        // --- Choice Point 4_3: 演出那晚 ---
        {
          id: 'jiye_4_3',
          messages_before: [
            {
              type: 'scene',
              text: '两周后。他们乐队有一场很重要的演出，在市中心的大场馆。',
              emoji: '🎤',
              gradient: 'neutral',
            },
            {
              type: 'narrator',
              text: '他给你留了前排的票，但你到的时候发现旁边坐着一个女生，在跟旁边的人说："季野以前跟我在一起过，他写的那首歌就是给我的。"',
              delay: 2000,
            },
            {
              type: 'narrator',
              text: '你不确定她说的是不是真的。演出开始了，季野在台上看到你，对你笑了一下。',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '他唱的是你们在湖边一起起名字的那首歌。',
              delay: 1200,
              gradient: 'bittersweet',
            },
          ],
          choices: [
            {
              id: 'jiye_4_3_a',
              text: '听完演出，什么都不问。如果他想说，他会自己告诉你。',
              emoji: '🤐',
              scores: { security_baseline: 5, conflict_style: -4, autonomy_need: 3 },
              affinity_change: 3,
            },
            {
              id: 'jiye_4_3_b',
              text: '演出结束后直接问他："旁边那个女生是谁？你们什么关系？"',
              emoji: '❓',
              scores: { conflict_style: 6, expression_intensity: 5, security_baseline: -3 },
              affinity_change: 1,
            },
            {
              id: 'jiye_4_3_c',
              text: '不问那个女生的事，但告诉他："你唱那首歌的时候，我哭了。"',
              emoji: '💧',
              scores: { expression_intensity: 7, intimacy_pace: 5, vulnerability: 4 },
              affinity_change: 7,
              trait_unlock: {
                name: '柔软铠甲',
                description: '你懂得用真实的脆弱化解猜疑和距离',
                emoji: '🦋',
              },
            },
            {
              id: 'jiye_4_3_d',
              text: '演出结束就走了，给他发消息说："演出很好。我先回去了。"',
              emoji: '🚶',
              scores: { autonomy_need: 5, conflict_style: -3, security_baseline: -2, expression_intensity: -3 },
              affinity_change: -2,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '他从后台跑出来找你，还穿着演出的衣服，额头全是汗。',
              partnerEmotion: 'happy',
              delay: 800,
            },
            {
              type: 'partner',
              text: '你还在！我就知道你会在。',
              partnerEmotion: 'loving',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '他在嘈杂的人群里抓住你的手。握得很紧。',
              delay: 1200,
              gradient: 'romantic',
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '他给你发了一条语音，声音里有疲惫。',
              partnerEmotion: 'sad',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '你走了？我还想介绍你认识几个人的……',
              partnerEmotion: 'sad',
              delay: 1500,
            },
          ],
        },
      ],
      closing_messages: [
        {
          type: 'narrator',
          text: '那天晚上，你开始认真想一个问题：你能接受一个永远在路上的人吗？',
          gradient: 'bittersweet',
          delay: 1500,
        },
        {
          type: 'emoji_reaction',
          reactionContext: '想到这个问题的时候，你心里最先冒出来的情绪是',
          reactionOptions: [
            { emoji: '😰', label: '焦虑', scores: { security_baseline: -3, commitment_depth: 2 } },
            { emoji: '🤔', label: '思考', scores: { growth_orientation: 3, autonomy_need: 2 } },
            { emoji: '💪', label: '坚定', scores: { commitment_depth: 4, security_baseline: 3 } },
            { emoji: '🥲', label: '心疼', scores: { expression_intensity: 3, intimacy_pace: 2 } },
          ],
        },
        {
          type: 'quick_swipe',
          swipeStatement: '你相信他会为你改变',
          agreeScores: { commitment_depth: 3, security_baseline: 2 },
          disagreeScores: { autonomy_need: 2, growth_orientation: 3 },
        },
        {
          type: 'narrator',
          text: '但有些问题，答案不在脑子里。在心里。',
          gradient: 'bittersweet',
          delay: 1500,
        },
      ],
    },

    // ==================== ACT 5: 抉择 ====================
    {
      id: 5,
      title: '抉择',
      subtitle: '最后一首歌',
      emoji: '🔥',
      gradient: 'from-red-900/50 to-amber-900/50',
      choice_points: [
        // --- Choice Point 5_1: 他说他要去远方 ---
        {
          id: 'jiye_5_1',
          messages_before: [
            { type: 'chapter_title', text: '第五章 · 抉择', emoji: '🔥', gradient: 'tense' },
            {
              type: 'scene',
              text: '一个月后。你们在天台上。城市的灯光铺在下面，风很大。',
              emoji: '🌃',
              gradient: 'tense',
            },
            {
              type: 'partner',
              text: '我有件事要跟你说。',
              partnerEmotion: 'neutral',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '乐队接到一个机会，去东南亚巡演三个月。可能会更久。这是我们等了很久的机会。',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '但这一次，我不想像以前一样直接走了。我想先问你。',
              partnerEmotion: 'loving',
              delay: 1800,
            },
            {
              type: 'narrator',
              text: '他看着你，等你的答案。风把他的头发吹得很乱。',
              delay: 1200,
              gradient: 'bittersweet',
            },
          ],
          choices: [
            {
              id: 'jiye_5_1_a',
              text: '"去吧。这是你的梦想，我不会拦你。三个月我等得起。"',
              emoji: '🕊️',
              scores: { commitment_depth: 7, autonomy_need: 3, security_baseline: 4 },
              affinity_change: 8,
              trait_unlock: {
                name: '放手的勇气',
                description: '真正的爱不是抓紧，是信任彼此的选择',
                emoji: '🕊️',
              },
            },
            {
              id: 'jiye_5_1_b',
              text: '"我能跟你一起去吗？我可以请假，或者辞职。"',
              emoji: '✈️',
              scores: { intimacy_pace: 7, commitment_depth: 5, autonomy_need: -5 },
              affinity_change: 4,
            },
            {
              id: 'jiye_5_1_c',
              text: '"你每次都是这样。你真的有认真想过我们的未来吗？"',
              emoji: '💔',
              scores: { conflict_style: 6, expression_intensity: 5, security_baseline: -5 },
              affinity_change: -3,
            },
            {
              id: 'jiye_5_1_d',
              text: '"我需要想想。给我两天时间，我给你答复。"',
              emoji: '⏳',
              scores: { security_baseline: 4, autonomy_need: 4, growth_orientation: 3 },
              affinity_change: 3,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '他深吸一口气，像是卸下了什么很重的东西。',
              partnerEmotion: 'loving',
              delay: 800,
            },
            {
              type: 'partner',
              text: '你知道吗，我一直怕你让我选。因为如果你让我选……我不确定我会选什么。',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '但你没有。你才是我们两个人里更自由的那个。',
              partnerEmotion: 'loving',
              delay: 1800,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '他的表情变了，退后了一步。',
              partnerEmotion: 'sad',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '我懂了。',
              partnerEmotion: 'distant',
              delay: 1200,
            },
          ],
        },
        // --- Choice Point 5_2: 最后一晚 ---
        {
          id: 'jiye_5_2',
          messages_before: [
            {
              type: 'scene',
              text: '他出发前的最后一个晚上。你们在他的公寓里。行李箱已经收好了，吉他靠在门边。',
              emoji: '🧳',
              gradient: 'bittersweet',
            },
            {
              type: 'narrator',
              text: '他翻出一个很旧的MP3播放器，递给你。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '里面存了100首歌。每一首都是我这几年在路上的时候听的。',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '现在它们有了一个听众。你听的时候，就当我在你旁边吧。',
              partnerEmotion: 'loving',
              delay: 1800,
            },
            {
              type: 'narrator',
              text: '他的手微微发抖。你从来没见过他这么不像他自己。',
              delay: 1200,
              gradient: 'bittersweet',
            },
          ],
          choices: [
            {
              id: 'jiye_5_2_a',
              text: '收下MP3，然后从自己口袋里拿出一样东西交给他——你一直随身带的护身符。',
              emoji: '🔮',
              scores: { commitment_depth: 6, expression_intensity: 5, intimacy_pace: 4 },
              affinity_change: 8,
            },
            {
              id: 'jiye_5_2_b',
              text: '"我不要这个。我要你回来以后当面唱给我听。这是约定。"',
              emoji: '🤙',
              scores: { commitment_depth: 7, security_baseline: 4, conflict_style: 2 },
              affinity_change: 7,
            },
            {
              id: 'jiye_5_2_c',
              text: '沉默了很久，然后说："如果你到了那边，遇到了更好的风景……也没关系。"',
              emoji: '🌅',
              scores: { autonomy_need: 6, security_baseline: -4, expression_intensity: 4, growth_orientation: 3 },
              affinity_change: 1,
            },
            {
              id: 'jiye_5_2_d',
              text: '接过MP3，戴上耳机，靠在他肩膀上。"现在就开始听，你在旁边呢。"',
              emoji: '🎧',
              scores: { intimacy_pace: 5, expression_intensity: 3, security_baseline: 4, commitment_depth: 3 },
              affinity_change: 7,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '他抬手揉了一下眼睛，假装是灯光太亮。',
              partnerEmotion: 'vulnerable',
              delay: 800,
            },
            {
              type: 'partner',
              text: '你知道我以前觉得什么是自由吗？是一个人走得越远越好。',
              partnerEmotion: 'loving',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '但现在我觉得，自由是……有一个值得回来的地方。',
              partnerEmotion: 'loving',
              delay: 2000,
            },
            {
              type: 'narrator',
              text: '窗外的城市还醒着。但这个房间里的时间好像停了。',
              delay: 1500,
              gradient: 'romantic',
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '他低下头，把帽子拉低了一点。',
              partnerEmotion: 'sad',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '我会回来的。不管怎样。',
              partnerEmotion: 'sad',
              delay: 1500,
            },
          ],
        },
      ],
      closing_messages: [
        {
          type: 'narrator',
          text: '第二天清晨，他走了。你站在阳台上，看着他的车拐过街角，消失不见。',
          gradient: 'bittersweet',
          delay: 1500,
        },
        {
          type: 'emoji_reaction',
          reactionContext: '看着他离开的那一刻，你的感觉是',
          reactionOptions: [
            { emoji: '🥲', label: '舍不得', scores: { commitment_depth: 3, expression_intensity: 3 } },
            { emoji: '💪', label: '我可以的', scores: { security_baseline: 4, autonomy_need: 2 } },
            { emoji: '🙏', label: '等你回来', scores: { commitment_depth: 4, intimacy_pace: 2 } },
            { emoji: '🌅', label: '新的开始', scores: { growth_orientation: 4, autonomy_need: 3 } },
          ],
        },
        {
          type: 'quick_swipe',
          swipeStatement: '他离开以后，你每天都会听MP3里的歌',
          agreeScores: { commitment_depth: 3, intimacy_pace: 2 },
          disagreeScores: { autonomy_need: 3, growth_orientation: 2 },
        },
        {
          type: 'narrator',
          text: '你打开MP3，按下播放。第一首歌的标题是——你的名字。',
          gradient: 'romantic',
          delay: 2000,
        },
      ],
    },
  ],

  // ============================================================
  // Endings
  // ============================================================
  endings: [
    {
      id: 'warm',
      name: '🌅 温暖',
      emoji: '🌅',
      condition: 'high commitment + high security',
      messages: [
        {
          type: 'scene',
          text: '三个月后。一个阳光很好的午后。',
          emoji: '🌅',
          gradient: 'warm',
        },
        {
          type: 'narrator',
          text: '你收到一条短视频。季野站在泰国清迈的一个夜市上，背后是他们乐队的简易舞台。他对着镜头举起了那个你给他的护身符。',
          delay: 2000,
        },
        {
          type: 'partner',
          text: '嘿。我写了一首新歌，名字叫《回去》。下周的飞机。等我。',
          partnerEmotion: 'loving',
          delay: 2000,
        },
        {
          type: 'narrator',
          text: '你发现自己在笑，笑得根本停不下来。MP3里的歌你已经听了不下200遍，但你知道，最好听的那首歌还在路上。',
          delay: 2000,
          gradient: 'warm',
        },
        {
          type: 'narrator',
          text: '有些人是风，注定要去远方。但风也会记得那扇一直为它开着的窗。',
          delay: 2000,
          gradient: 'warm',
        },
        {
          type: 'narrator',
          text: '你学会了一件事：爱一个自由的人，不是困住他，而是成为他自由的一部分。',
          delay: 2500,
          gradient: 'warm',
        },
        {
          type: 'narrator',
          text: '而你的关系底色是——信任中带着温度，自由中写着归途。',
          delay: 2000,
          gradient: 'warm',
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
          text: '两个月后。你在一家新的咖啡馆里，窗外下着雨。',
          emoji: '🌊',
          gradient: 'cool',
        },
        {
          type: 'narrator',
          text: '季野偶尔会发来一段语音。有时是他在路上录的风声，有时是一段没有完成的旋律。你听完，有时回复，有时不回复。',
          delay: 2000,
        },
        {
          type: 'narrator',
          text: '你们没有明确的关系定义。但每次他回到这个城市的时候，他会第一个找你。而你会去接他。',
          delay: 2000,
        },
        {
          type: 'narrator',
          text: '朋友问你们算什么，你说不出来。但你知道这个回答本身就是答案。',
          delay: 2000,
          gradient: 'cool',
        },
        {
          type: 'narrator',
          text: '也许不是所有的感情都需要一个终点。有些关系的美好，恰恰在于它的未完成。',
          delay: 2000,
          gradient: 'bittersweet',
        },
        {
          type: 'narrator',
          text: '你的关系底色是——不定义，不占有，在每一次重逢里确认彼此的存在。',
          delay: 2000,
          gradient: 'cool',
        },
      ],
    },
    {
      id: 'regret',
      name: '🌧️ 遗憾',
      emoji: '🌧️',
      condition: 'low security + low commitment',
      messages: [
        {
          type: 'scene',
          text: '半年后。你路过那家live house，里面传来陌生乐队的歌声。',
          emoji: '🌧️',
          gradient: 'bittersweet',
        },
        {
          type: 'narrator',
          text: '季野已经很久没有出现在这个城市了。你们的对话停在三个月前的一句"保重"。',
          delay: 2000,
        },
        {
          type: 'narrator',
          text: '你不确定是谁先放手的。也许是你的犹豫让他觉得不够坚定，也许是他的自由让你无法安心。',
          delay: 2000,
        },
        {
          type: 'narrator',
          text: '你偶尔会在深夜打开那个MP3。第37首歌的备注写着："这首是给你的。"你一直没有勇气听完。',
          delay: 2500,
          gradient: 'bittersweet',
        },
        {
          type: 'narrator',
          text: '有些人路过你的生命，不是为了留下来，而是为了教会你——你到底需要什么样的爱。',
          delay: 2000,
          gradient: 'bittersweet',
        },
        {
          type: 'narrator',
          text: '你的关系底色是——在犹豫中错过，在遗憾中认清自己真正的渴望。',
          delay: 2000,
          gradient: 'bittersweet',
        },
      ],
    },
    {
      id: 'rebirth',
      name: '🌱 重生',
      emoji: '🌱',
      condition: 'high growth + balanced conflict',
      messages: [
        {
          type: 'scene',
          text: '四个月后。你一个人站在海边。不是任何人约你来的，是你自己想来。',
          emoji: '🌱',
          gradient: 'hopeful',
        },
        {
          type: 'narrator',
          text: '和季野的故事在你心里留下了一些东西。不是伤疤，是新长出来的肌肉。',
          delay: 2000,
        },
        {
          type: 'narrator',
          text: '他教会你：感情不是非此即彼的选择题。一个人可以既渴望自由，又渴望连接。重要的不是选哪个，而是找到平衡。',
          delay: 2500,
        },
        {
          type: 'narrator',
          text: '你掏出手机，发了一条朋友圈：海边的照片，配文只有一个字："嗯。"',
          delay: 2000,
        },
        {
          type: 'narrator',
          text: '过了一会儿，有人点了赞。头像是一团火焰，旁边写着"季野"。',
          delay: 2000,
          gradient: 'hopeful',
        },
        {
          type: 'narrator',
          text: '你笑了。这一次，不是因为心动，是因为释然。',
          delay: 2000,
          gradient: 'hopeful',
        },
        {
          type: 'narrator',
          text: '你的关系底色是——在经历中成长，在告别中遇见更完整的自己。',
          delay: 2000,
          gradient: 'hopeful',
        },
      ],
    },
  ],
}

export default STORY
export { CHARACTER }
