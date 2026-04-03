import { Character, CharacterStory, StoryMessageData, ChoicePointData, ActData, Ending } from './characters'

const CHARACTER: Character = {
  id: 'xiacheng',
  name: '夏橙',
  subtitle: '元气甜妹',
  description: '美食博主，阳光开朗，永远充满能量。看起来没心没肺，其实比谁都在意身边人的感受。',
  emoji: '🍊',
  gender: 'female',
  color: 'from-orange-900 to-amber-900',
  avatar_emoji: '☀️',
  quote: '今天也要开开心心的！',
}

const STORY: CharacterStory = {
  character: CHARACTER,
  acts: [
    // ==================== ACT 1: 相遇 ====================
    {
      id: 1,
      title: '相遇',
      subtitle: '深巷里的味道',
      emoji: '🍜',
      gradient: 'from-orange-900/50 to-amber-900/50',
      choice_points: [
        // --- Choice Point 1-1 ---
        {
          id: 'xiacheng_1_1',
          messages_before: [
            { type: 'chapter_title', text: '第一章 · 相遇', emoji: '🍜', gradient: 'warm' },
            {
              type: 'scene',
              text: '周六中午。你在一条老巷子里找一家据说只有本地人知道的面馆。\n阳光很好，巷子里飘着各种食物的香气。',
              emoji: '🍜',
              gradient: 'warm',
            },
            {
              type: 'narrator',
              text: '你正低头看手机导航，突然被一个声音叫住了。',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '嘿！你也在找那家面馆吗？导航是不是把你带到死胡同了？',
              partnerEmotion: 'happy',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '你抬头，看到一个女生举着手机和自拍杆，脸上带着灿烂得有点过分的笑容。\n她穿着一件橘色的T恤，像一颗行走的小太阳。',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '我叫夏橙！美食博主！这条巷子我来过三次了都没找到，哈哈哈。要不要一起找？',
              partnerEmotion: 'happy',
              delay: 1800,
            },
          ],
          choices: [
            {
              id: 'xiacheng_1_1_a',
              text: '好啊，两个人总比一个人强。你之前的视频我好像看过？',
              emoji: '😊',
              scores: { intimacy_pace: 3, expression_intensity: 3 },
              affinity_change: 4,
            },
            {
              id: 'xiacheng_1_1_b',
              text: '嗯，一起找吧。不过你在录视频吗？我不太想入镜。',
              emoji: '🙈',
              scores: { autonomy_need: 3, expression_intensity: -2, security_baseline: 2 },
              affinity_change: 2,
            },
            {
              id: 'xiacheng_1_1_c',
              text: '三次都没找到还来第四次？你这个执着劲我佩服。走吧，我方向感不错。',
              emoji: '🧭',
              scores: { expression_intensity: 4, conflict_style: 2 },
              affinity_change: 5,
              trait_unlock: { name: '自来熟体质', description: '你擅长在陌生人面前展现自在', emoji: '🌟' },
            },
            {
              id: 'xiacheng_1_1_d',
              text: '我自己找就行，谢谢。不太习惯跟不认识的人一起吃饭。',
              emoji: '👋',
              scores: { autonomy_need: 5, intimacy_pace: -3, security_baseline: 2 },
              affinity_change: -1,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '真的吗！你看过我的视频！太开心了！',
              partnerEmotion: 'happy',
              delay: 1000,
            },
            {
              type: 'narrator',
              text: '她的眼睛亮了起来，然后自然地挽住你的手臂往巷子深处走。动作熟练得好像你们已经认识了很久。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '那你帮我指路，我负责到了之后帮你拍照！合作愉快！',
              partnerEmotion: 'happy',
              delay: 1500,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '哦……好吧！那祝你找到！',
              partnerEmotion: 'neutral',
              delay: 1000,
            },
            {
              type: 'narrator',
              text: '她笑着挥了挥手，但你注意到她的笑容收敛了一瞬间。很快又恢复了那种阳光灿烂的样子。',
              delay: 1500,
            },
          ],
        },
        // --- Choice Point 1-2 ---
        {
          id: 'xiacheng_1_2',
          messages_before: [
            {
              type: 'narrator',
              text: '终于找到了那家面馆。只有四张桌子，挤在一个老房子的底层。\n你们拼了一张桌，面对面坐着。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '老板！两碗招牌面！多加辣！——啊不好意思，你能吃辣吗？',
              partnerEmotion: 'happy',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '她说话的时候手舞足蹈的，差点打翻了桌上的醋瓶。\n旁边桌的老大爷笑着看了她一眼。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '你知道吗，我做美食博主三年了，最幸福的时刻就是找到一家没人知道的小店。比涨粉开心多了。',
              partnerEmotion: 'happy',
              delay: 2000,
            },
          ],
          choices: [
            {
              id: 'xiacheng_1_2_a',
              text: '那你最不开心的时刻呢？',
              emoji: '🤔',
              scores: { intimacy_pace: 4, growth_orientation: 3 },
              affinity_change: 3,
            },
            {
              id: 'xiacheng_1_2_b',
              text: '我能吃辣！而且我也喜欢探店。你推荐几个好地方呗。',
              emoji: '🌶️',
              scores: { expression_intensity: 3, intimacy_pace: 2, security_baseline: 2 },
              affinity_change: 5,
            },
            {
              id: 'xiacheng_1_2_c',
              text: '你做博主是全职的吗？靠这个能养活自己吗？',
              emoji: '💰',
              scores: { autonomy_need: 2, security_baseline: 3, growth_orientation: 2 },
              affinity_change: 1,
            },
            {
              id: 'xiacheng_1_2_d',
              text: '你每天都这么开心吗？有点羡慕。',
              emoji: '☀️',
              scores: { expression_intensity: -2, security_baseline: -1, growth_orientation: 3 },
              affinity_change: 2,
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '她听到你的话，愣了一秒。手里的筷子停在半空。',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '最不开心的时刻啊……你是第一个问我这个的人。',
              partnerEmotion: 'shy',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '大家都觉得我每天都很开心。嗯……大部分时候是的！面来了，快吃！',
              partnerEmotion: 'happy',
              delay: 1800,
            },
            {
              type: 'narrator',
              text: '她很快把话题转走了，但你注意到她夹面的动作慢了下来。有些人的开心是真的，但不一定是全部。',
              delay: 2000,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '哈哈，能养活自己的！放心！',
              partnerEmotion: 'happy',
              delay: 1000,
            },
            {
              type: 'narrator',
              text: '她笑着回答，但语气里少了刚才那种无拘无束的热情。你们开始安静地吃面。',
              delay: 1500,
            },
          ],
        },
      ],
      closing_messages: [
        {
          type: 'narrator',
          text: '吃完面，她坚持要请客。你们走出巷子的时候，阳光正好照在她的橘色T恤上。',
          gradient: 'warm',
          delay: 1500,
        },
        {
          type: 'partner',
          text: '今天超开心的！加个微信吧？下次我发现好吃的带你去！',
          partnerEmotion: 'happy',
          delay: 1200,
        },
        {
          type: 'emoji_reaction',
          reactionContext: '她加你微信的时候，笑得像刚认识了一个多年好友',
          reactionOptions: [
            { emoji: '😊', label: '被感染了', scores: { expression_intensity: 3, intimacy_pace: 2 } },
            { emoji: '😏', label: '有点好奇', scores: { growth_orientation: 2, autonomy_need: 1 } },
            { emoji: '🥰', label: '喜欢她', scores: { intimacy_pace: 4, commitment_depth: 2 } },
            { emoji: '😐', label: '保持距离', scores: { autonomy_need: 3, intimacy_pace: -2 } },
          ],
        },
        {
          type: 'quick_swipe',
          swipeStatement: '她的热情让你觉得很舒服，而不是有压力',
          agreeScores: { security_baseline: 3, intimacy_pace: 2 },
          disagreeScores: { autonomy_need: 3, expression_intensity: -1 },
        },
        {
          type: 'narrator',
          text: '晚上你收到她发来的一条消息，是你们今天在面馆的合照。\n旁边配了一行字：「遇到你是今天最好吃的意外！🍊」',
          gradient: 'warm',
          delay: 2000,
        },
      ],
    },
    // ==================== ACT 2: 心动 ====================
    {
      id: 2,
      title: '心动',
      subtitle: '甜味的真相',
      emoji: '🧁',
      gradient: 'from-pink-900/50 to-orange-900/50',
      choice_points: [
        // --- Choice Point 2-1 ---
        {
          id: 'xiacheng_2_1',
          messages_before: [
            { type: 'chapter_title', text: '第二章 · 心动', emoji: '🧁', gradient: 'romantic' },
            {
              type: 'scene',
              text: '两周后。她约你去一家新开的烘焙工坊。\n说是要拍视频素材，让你当"特约嘉宾"。',
              emoji: '🧁',
              gradient: 'warm',
            },
            {
              type: 'narrator',
              text: '她穿着围裙的样子跟平时不太一样。少了一些张扬，多了一些认真。\n揉面的时候很专注，手上沾满了面粉。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '来来来，你也试试！面团要揉到这个程度……诶不对，你太用力了，温柔一点！',
              partnerEmotion: 'happy',
              delay: 1800,
            },
            {
              type: 'narrator',
              text: '她伸手过来纠正你的动作，手指不经意地碰到了你的手背。\n她好像完全没注意到，继续讲解着，但你注意到了。',
              delay: 2000,
            },
          ],
          choices: [
            {
              id: 'xiacheng_2_1_a',
              text: '你教得真好。不过你刚才碰到我的手了，知道吗？',
              emoji: '😏',
              scores: { expression_intensity: 5, intimacy_pace: 4 },
              affinity_change: 4,
            },
            {
              id: 'xiacheng_2_1_b',
              text: '认真学着揉面，偶尔抬头看她专注的侧脸。',
              emoji: '👀',
              scores: { intimacy_pace: 3, expression_intensity: -1, security_baseline: 3 },
              affinity_change: 3,
            },
            {
              id: 'xiacheng_2_1_c',
              text: '你做博主的时候也这么认真吗？跟我之前印象里那个大大咧咧的女生不太一样。',
              emoji: '🤔',
              scores: { growth_orientation: 4, intimacy_pace: 2 },
              affinity_change: 5,
              trait_unlock: { name: '表里探测器', description: '你善于发现别人外表和内心的反差', emoji: '🔮' },
            },
            {
              id: 'xiacheng_2_1_d',
              text: '我揉得怎么样？给个分呗，满分十分。',
              emoji: '🏆',
              scores: { expression_intensity: 3, security_baseline: -1, conflict_style: 2 },
              affinity_change: 3,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '……哎呀，你怎么什么都注意得到！',
              partnerEmotion: 'shy',
              delay: 1200,
            },
            {
              type: 'narrator',
              text: '她的脸红了，然后迅速用沾着面粉的手去揉鼻子，结果鼻尖上多了一块白。\n你忍不住笑了。',
              delay: 1800,
            },
            {
              type: 'partner',
              text: '笑什么啦！快帮我擦掉！……不对你手上也是面粉！别碰我脸！',
              partnerEmotion: 'happy',
              delay: 1500,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '嗯……七分吧！继续努力！',
              partnerEmotion: 'neutral',
              delay: 1000,
            },
            {
              type: 'narrator',
              text: '她笑着打了个分，但话明显变少了。你们安静地揉着各自的面团，空气里只剩下面粉的香味。',
              delay: 1500,
            },
          ],
        },
        // --- Choice Point 2-2 ---
        {
          id: 'xiacheng_2_2',
          messages_before: [
            {
              type: 'narrator',
              text: '等蛋糕烤的时候，你们坐在工坊的角落聊天。\n她关掉了相机，第一次没有在镜头前。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '你知道我为什么做美食博主吗？',
              partnerEmotion: 'neutral',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '因为食物不会让人失望。你对它好，它就回报你好味道。不像人……',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
            {
              type: 'narrator',
              text: '她说到一半停住了，然后像是意识到自己说多了，赶紧笑着补了一句：',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '开玩笑的啦！主要是因为好吃！哈哈！',
              partnerEmotion: 'happy',
              delay: 1000,
            },
          ],
          choices: [
            {
              id: 'xiacheng_2_2_a',
              text: '你刚才说的不像玩笑。谁让你失望过？',
              emoji: '💙',
              scores: { intimacy_pace: 5, growth_orientation: 3, expression_intensity: 3 },
              affinity_change: 5,
            },
            {
              id: 'xiacheng_2_2_b',
              text: '食物确实很治愈。不过人也不全都会让人失望的。比如今天的我。',
              emoji: '😌',
              scores: { security_baseline: 4, expression_intensity: 3, commitment_depth: 2 },
              affinity_change: 6,
            },
            {
              id: 'xiacheng_2_2_c',
              text: '笑着接了她的话：那我可得好好表现，不能输给一个蛋糕。',
              emoji: '🍰',
              scores: { expression_intensity: 2, intimacy_pace: 2, security_baseline: 2 },
              affinity_change: 4,
            },
            {
              id: 'xiacheng_2_2_d',
              text: '没有追问，帮她把烤好的蛋糕取出来。有些事不需要现在就打开。',
              emoji: '🤫',
              scores: { autonomy_need: 3, security_baseline: 3, intimacy_pace: -2 },
              affinity_change: 2,
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '她的笑容僵了一秒。然后慢慢地，变成了一个不同的表情——不是那种对着镜头的灿烂，而是一种更小的、更真实的微笑。',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '……你真的很不一样。大多数人只看到我笑的那一面就够了。',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '蛋糕好了！我切给你吃！最大的一块归你！',
              partnerEmotion: 'happy',
              delay: 1500,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '哈哈，对吧！食物最棒了！',
              partnerEmotion: 'happy',
              delay: 1000,
            },
            {
              type: 'narrator',
              text: '她很快又切换回了那个元气满满的状态。你看着她，分不清刚才那一瞬间的脆弱是不是错觉。',
              delay: 1800,
            },
          ],
        },
      ],
      closing_messages: [
        {
          type: 'narrator',
          text: '离开烘焙工坊的时候，她往你手里塞了一盒自己烤的曲奇。\n盒子上用马克笔画了一个歪歪扭扭的笑脸。',
          gradient: 'romantic',
          delay: 1500,
        },
        {
          type: 'partner',
          text: '第一次给别人烤东西诶！不好吃不许说啊！',
          partnerEmotion: 'shy',
          delay: 1200,
        },
        {
          type: 'emoji_reaction',
          reactionContext: '她把亲手烤的曲奇塞到你手里的时候，眼神有一点点紧张',
          reactionOptions: [
            { emoji: '💓', label: '心动了', scores: { intimacy_pace: 4, expression_intensity: 2 } },
            { emoji: '😊', label: '很甜', scores: { security_baseline: 3, commitment_depth: 2 } },
            { emoji: '🤗', label: '想抱她', scores: { intimacy_pace: 5, expression_intensity: 3 } },
            { emoji: '🤔', label: '有点突然', scores: { autonomy_need: 2, intimacy_pace: -1 } },
          ],
        },
        {
          type: 'quick_swipe',
          swipeStatement: '你觉得她的开朗背后藏着一些不轻易展示的东西',
          agreeScores: { growth_orientation: 3, intimacy_pace: 2 },
          disagreeScores: { security_baseline: 2, expression_intensity: -1 },
        },
        {
          type: 'narrator',
          text: '回家的路上你打开盒子尝了一块。\n甜得有点过头，但不知道为什么，嘴角一直翘着。',
          gradient: 'romantic',
          delay: 2000,
        },
      ],
    },
    // ==================== ACT 3: 走近 ====================
    {
      id: 3,
      title: '走近',
      subtitle: '笑容的背面',
      emoji: '🌙',
      gradient: 'from-violet-900/50 to-orange-900/50',
      choice_points: [
        // --- Choice Point 3-1 ---
        {
          id: 'xiacheng_3_1',
          messages_before: [
            { type: 'chapter_title', text: '第三章 · 走近', emoji: '🌙', gradient: 'romantic' },
            {
              type: 'scene',
              text: '一个月后的某天晚上。她突然发消息说想出来走走。\n你在江边找到她的时候，她坐在台阶上，没有在笑。',
              emoji: '🌙',
              gradient: 'bittersweet',
            },
            {
              type: 'narrator',
              text: '这是你第一次看到不笑的夏橙。\n没有自拍杆，没有橘色衣服。穿着一件灰色的卫衣，像一颗熄灭了的小太阳。',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '……你来了。',
              partnerEmotion: 'sad',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '今天有个粉丝在评论区说我"卖笑营业"。我知道不该在意的。但就是……有点难受。',
              partnerEmotion: 'sad',
              delay: 2000,
            },
          ],
          choices: [
            {
              id: 'xiacheng_3_1_a',
              text: '坐到她旁边，肩膀挨着肩膀。什么都没说，就安静地陪着。',
              emoji: '🤝',
              scores: { security_baseline: 5, intimacy_pace: 3, expression_intensity: -1 },
              affinity_change: 6,
            },
            {
              id: 'xiacheng_3_1_b',
              text: '在意就在意啊，你又不是机器人。偶尔不开心很正常。',
              emoji: '💬',
              scores: { expression_intensity: 3, security_baseline: 4, growth_orientation: 2 },
              affinity_change: 5,
            },
            {
              id: 'xiacheng_3_1_c',
              text: '那个粉丝是傻的吧。你的快乐是真的，看过你视频的人都知道。',
              emoji: '😤',
              scores: { conflict_style: 3, expression_intensity: 4, commitment_depth: 2 },
              affinity_change: 4,
            },
            {
              id: 'xiacheng_3_1_d',
              text: '你不需要向任何人证明你的快乐是真是假。但你可以决定要不要跟我说真话。',
              emoji: '🌟',
              scores: { growth_orientation: 5, intimacy_pace: 3, autonomy_need: 2 },
              affinity_change: 5,
              trait_unlock: { name: '安全空间', description: '你擅长给别人创造可以卸下面具的环境', emoji: '🏡' },
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '她侧过头看你，眼睛有点红。',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '你知道吗……其实有时候我笑着笑着就忘了，我到底是真的开心还是习惯性开心。',
              partnerEmotion: 'vulnerable',
              delay: 2500,
            },
            {
              type: 'partner',
              text: '但在你面前，好像不笑也可以。',
              partnerEmotion: 'vulnerable',
              delay: 1800,
            },
            {
              type: 'narrator',
              text: '江风吹过来。她靠了你近一点。不多，就一点点。',
              delay: 1500,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '嗯……你说得对。我不在意了！走吧，去吃宵夜！',
              partnerEmotion: 'happy',
              delay: 1200,
            },
            {
              type: 'narrator',
              text: '她又笑了，但你觉得那个笑容像一扇门关上的声音。',
              delay: 1500,
            },
          ],
        },
        // --- Choice Point 3-2 ---
        {
          id: 'xiacheng_3_2',
          messages_before: [
            {
              type: 'narrator',
              text: '你们沿着江边走了很远。夜色里，她终于说了更多。',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '我从小就是这样的。家里人吵架的时候，我就笑嘻嘻地去逗他们开心，假装什么事都没有。',
              partnerEmotion: 'sad',
              delay: 2500,
            },
            {
              type: 'partner',
              text: '后来发现，只要我一直笑，所有人都觉得没问题。问题就真的消失了一样。',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
            {
              type: 'narrator',
              text: '她低头看着江水的倒影，声音比平时轻了很多。',
              delay: 1500,
            },
          ],
          choices: [
            {
              id: 'xiacheng_3_2_a',
              text: '但问题没有消失，是你替所有人扛了。',
              emoji: '💔',
              scores: { growth_orientation: 5, intimacy_pace: 4, expression_intensity: 3 },
              affinity_change: 7,
            },
            {
              id: 'xiacheng_3_2_b',
              text: '你不用一直当那个让别人开心的人。你也值得被别人照顾。',
              emoji: '🫂',
              scores: { security_baseline: 4, commitment_depth: 4, expression_intensity: 3 },
              affinity_change: 6,
            },
            {
              id: 'xiacheng_3_2_c',
              text: '听着她说，心里有一些复杂的感觉。你不确定自己能承接住这么重的信任。',
              emoji: '😶',
              scores: { autonomy_need: 3, security_baseline: -2, intimacy_pace: -1, commitment_depth: -2 },
              affinity_change: -1,
            },
            {
              id: 'xiacheng_3_2_d',
              text: '你现在还会这样吗？在我面前，你可以不用笑。',
              emoji: '🌙',
              scores: { intimacy_pace: 4, security_baseline: 5, commitment_depth: 3 },
              affinity_change: 7,
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '她沉默了很久。然后你感觉到她的手指轻轻勾住了你的小拇指。',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '你是第一个跟我说"不用笑"的人。',
              partnerEmotion: 'loving',
              delay: 1800,
            },
            {
              type: 'narrator',
              text: '月光洒在江面上，她没有笑，但她的眼睛比任何时候都亮。',
              delay: 1800,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '嗯……好了好了，说太多了！走吧，不早了！',
              partnerEmotion: 'neutral',
              delay: 1200,
            },
            {
              type: 'narrator',
              text: '她迅速站起来拍了拍裤子，声音又变回了平时那种明快的语调。但你知道她收了回去。',
              delay: 1800,
            },
          ],
        },
        // --- Choice Point 3-3 ---
        {
          id: 'xiacheng_3_3',
          messages_before: [
            {
              type: 'scene',
              text: '几天后。她邀请你去她的出租屋。\n说是要给你看"一个秘密"。',
              emoji: '🏠',
              gradient: 'warm',
            },
            {
              type: 'narrator',
              text: '她的房间跟你想象的不太一样。不是那种精致的ins风，而是到处堆满了食材、拍摄道具和手写菜谱。\n冰箱上贴满了便利贴，全是各种配方和灵感。',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '有点乱对不对？嘿嘿。但我有一个宝贝你肯定想不到——',
              partnerEmotion: 'happy',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '她从阳台角落搬出一个大箱子。里面全是笔记本。\n一打开，你看到密密麻麻的手写字，配着歪歪扭扭的插画。\n这是她三年来每一次探店的手写记录。',
              delay: 2500,
            },
            {
              type: 'partner',
              text: '从来没给别人看过。因为……字太丑了嘛！但内容是真的好！',
              partnerEmotion: 'shy',
              delay: 1800,
            },
          ],
          choices: [
            {
              id: 'xiacheng_3_3_a',
              text: '一页一页地认真翻看，被她的用心打动了。你有没有想过出一本书？',
              emoji: '📚',
              scores: { commitment_depth: 4, growth_orientation: 3, expression_intensity: 2 },
              affinity_change: 6,
            },
            {
              id: 'xiacheng_3_3_b',
              text: '字是有点丑。但画得挺可爱。这个包子画得像你。',
              emoji: '😆',
              scores: { expression_intensity: 4, intimacy_pace: 3, conflict_style: 2 },
              affinity_change: 5,
            },
            {
              id: 'xiacheng_3_3_c',
              text: '你把这些最私密的东西给我看——你真的信任我吗？还是只是一时冲动？',
              emoji: '🧐',
              scores: { security_baseline: -2, autonomy_need: 3, growth_orientation: 3 },
              affinity_change: 1,
            },
            {
              id: 'xiacheng_3_3_d',
              text: '谢谢你让我看。我也想给你看一些我平时不会让人知道的东西。',
              emoji: '🤝',
              scores: { intimacy_pace: 5, commitment_depth: 3, security_baseline: 3 },
              affinity_change: 7,
              trait_unlock: { name: '对等法则', description: '当别人展示脆弱时，你愿意同等回应', emoji: '⚖️' },
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '出书？我还没想过诶……你觉得真的可以吗？',
              partnerEmotion: 'happy',
              delay: 1200,
            },
            {
              type: 'narrator',
              text: '她的眼睛一下子亮了——不是对着镜头那种刻意的闪亮，而是被人认可后的、发自内心的光。',
              delay: 1800,
            },
            {
              type: 'partner',
              text: '你要是帮我写序的话，我就出！',
              partnerEmotion: 'loving',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '她笑着说，但你知道她是认真的。',
              delay: 1200,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '……不是冲动。我想了好几天的。',
              partnerEmotion: 'sad',
              delay: 1200,
            },
            {
              type: 'narrator',
              text: '她把笔记本放回箱子里，动作比拿出来的时候慢了很多。你感觉到空气里有一丝后悔。',
              delay: 1800,
            },
          ],
        },
      ],
      closing_messages: [
        {
          type: 'narrator',
          text: '离开她家的时候，她站在门口冲你挥手。\n背后是那个堆满梦想和杂物的小房间。',
          gradient: 'romantic',
          delay: 1500,
        },
        {
          type: 'partner',
          text: '今天谢谢你。下次我做新菜给你吃！试菜员就是你了！',
          partnerEmotion: 'happy',
          delay: 1500,
        },
        {
          type: 'emoji_reaction',
          reactionContext: '你走出她家楼道的时候，心里的感觉是',
          reactionOptions: [
            { emoji: '🥰', label: '越来越喜欢', scores: { intimacy_pace: 4, commitment_depth: 3 } },
            { emoji: '💪', label: '想保护她', scores: { commitment_depth: 4, security_baseline: 2 } },
            { emoji: '🤔', label: '有点沉重', scores: { autonomy_need: 2, security_baseline: -2 } },
            { emoji: '😊', label: '很安心', scores: { security_baseline: 3, expression_intensity: 2 } },
          ],
        },
        {
          type: 'quick_swipe',
          swipeStatement: '你愿意做那个她不需要笑也能待在一起的人',
          agreeScores: { commitment_depth: 4, security_baseline: 3 },
          disagreeScores: { autonomy_need: 3, intimacy_pace: -2 },
        },
        {
          type: 'narrator',
          text: '回去的路上，你收到她的消息：「今天给你看的东西，你不许告诉别人哦。不然……我请你吃一个月的饭赔罪！」\n你笑了。这大概是世界上最甜的威胁。',
          gradient: 'romantic',
          delay: 2500,
        },
      ],
    },
    // ==================== ACT 4: 摩擦 ====================
    {
      id: 4,
      title: '摩擦',
      subtitle: '阳光下的阴影',
      emoji: '🌧️',
      gradient: 'from-gray-900/50 to-orange-900/50',
      choice_points: [
        // --- Choice Point 4-1 ---
        {
          id: 'xiacheng_4_1',
          messages_before: [
            { type: 'chapter_title', text: '第四章 · 摩擦', emoji: '🌧️', gradient: 'tense' },
            {
              type: 'scene',
              text: '你们在一起快两个月了。\n今天你们约好了一起看电影，但她迟到了四十分钟。',
              emoji: '🎬',
              gradient: 'tense',
            },
            {
              type: 'narrator',
              text: '她到的时候气喘吁吁，手里提着一袋零食。',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '对不起对不起！路上碰到一个粉丝想合照，然后又顺路给你买了你上次说想吃的那个栗子！我知道迟到了！',
              partnerEmotion: 'happy',
              delay: 2000,
            },
            {
              type: 'narrator',
              text: '你已经等了四十分钟，电影错过了开头。她买的栗子确实是你上次随口说的。\n但这不是第一次了——她总是把时间花在照顾所有人身上，唯独忘了守时。',
              delay: 2500,
            },
          ],
          choices: [
            {
              id: 'xiacheng_4_1_a',
              text: '下次能不能先到了再去帮别人？每次迟到说声抱歉就翻篇，但我等的那四十分钟是真实的。',
              emoji: '😤',
              scores: { conflict_style: 5, expression_intensity: 4, autonomy_need: 2 },
              affinity_change: 2,
            },
            {
              id: 'xiacheng_4_1_b',
              text: '没关系，栗子很好吃。但真的别老迟到了，我会担心你路上出什么事。',
              emoji: '🤗',
              scores: { security_baseline: 3, expression_intensity: 3, commitment_depth: 3 },
              affinity_change: 5,
            },
            {
              id: 'xiacheng_4_1_c',
              text: '接过栗子没说话。心里有点不高兴但不想在公共场合计较。',
              emoji: '😶',
              scores: { conflict_style: -4, expression_intensity: -3, security_baseline: -2 },
              affinity_change: -1,
            },
            {
              id: 'xiacheng_4_1_d',
              text: '你总是把所有人放在自己前面。粉丝、朋友、甚至路边的陌生人。那我排第几？',
              emoji: '💢',
              scores: { conflict_style: 4, intimacy_pace: 3, commitment_depth: 3, security_baseline: -2 },
              affinity_change: 1,
              trait_unlock: { name: '排位意识', description: '你需要在关系中有明确的位置感', emoji: '📍' },
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '她听到你的话，手里的栗子袋子慢慢放下了。那种永远在线的笑容，终于消退了一些。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '……你说得对。我确实总是把别人排在前面。',
              partnerEmotion: 'sad',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '因为我怕——怕一拒绝别人，人家就不喜欢我了。但你……你不会因为我拒绝了一个粉丝就不喜欢我吧？',
              partnerEmotion: 'vulnerable',
              delay: 2500,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '好了好了，下次不迟到了！走吧走吧，电影要开始了！',
              partnerEmotion: 'happy',
              delay: 1200,
            },
            {
              type: 'narrator',
              text: '她拉着你往影院走，笑得没心没肺。但你知道她其实察觉到了你的不高兴——只是她习惯了用笑来化解所有不适。',
              delay: 2000,
            },
          ],
        },
        // --- Choice Point 4-2 ---
        {
          id: 'xiacheng_4_2',
          messages_before: [
            {
              type: 'scene',
              text: '第二天晚上。你看到她新发的视频下面，有个男生的暧昧评论。\n她回了一个可爱的表情包，语气很亲昵。',
              emoji: '📱',
              gradient: 'tense',
            },
            {
              type: 'narrator',
              text: '你知道她做博主就是这样的，跟粉丝互动是工作的一部分。\n但看到那条评论的时候，你心里还是咯噔了一下。',
              delay: 2000,
            },
            {
              type: 'narrator',
              text: '你纠结了半天，要不要跟她提这件事。',
              delay: 1200,
            },
          ],
          choices: [
            {
              id: 'xiacheng_4_2_a',
              text: '直接问她：那个评论你的男生是谁？你平时跟粉丝都这么亲昵吗？',
              emoji: '🤨',
              scores: { conflict_style: 4, expression_intensity: 4, security_baseline: -3 },
              affinity_change: 0,
            },
            {
              id: 'xiacheng_4_2_b',
              text: '没有提这件事。她的工作她自己把握分寸，你选择信任。',
              emoji: '🤝',
              scores: { autonomy_need: 4, security_baseline: 4, conflict_style: -2 },
              affinity_change: 4,
            },
            {
              id: 'xiacheng_4_2_c',
              text: '没有直接问，但旁敲侧击地聊了聊她跟粉丝的互动方式。',
              emoji: '💬',
              scores: { expression_intensity: 2, conflict_style: 2, growth_orientation: 2 },
              affinity_change: 3,
            },
            {
              id: 'xiacheng_4_2_d',
              text: '跟她坦白说：我看到了那条评论，理性上知道是工作，但感性上有点不舒服。',
              emoji: '💙',
              scores: { expression_intensity: 5, security_baseline: 2, conflict_style: 3, growth_orientation: 3 },
              affinity_change: 5,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '你吃醋了！',
              partnerEmotion: 'happy',
              delay: 800,
            },
            {
              type: 'narrator',
              text: '她说这话的时候有一点开心，但很快收起了笑。',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '谢谢你跟我说。以后这种边界感的事我会注意的。你不说我真的不会意识到。',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '还有——你是第一个对我吃醋的人。感觉……还挺好的。',
              partnerEmotion: 'shy',
              delay: 1800,
            },
          ],
          response_low: [
            {
              type: 'narrator',
              text: '你把手机放下，决定不去想这件事。但心里那个小疙瘩，一直在。',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '你不确定是你太敏感，还是她太大大咧咧。或许两者都有。',
              delay: 1500,
            },
          ],
        },
        // --- Choice Point 4-3 ---
        {
          id: 'xiacheng_4_3',
          messages_before: [
            {
              type: 'scene',
              text: '周末。她突然取消了跟你的约会，说要去帮一个朋友处理分手的事情。\n这已经是这个月第三次了。',
              emoji: '📅',
              gradient: 'tense',
            },
            {
              type: 'partner',
              text: '对不起宝！小雨跟她男朋友又吵架了，哭得好惨。我先过去陪她，晚上回来找你好不好？',
              partnerEmotion: 'sad',
              delay: 2000,
            },
            {
              type: 'narrator',
              text: '你看着这条消息，突然觉得有点累。\n不是不理解她的善良，而是你开始怀疑——在她的世界里，你和"小雨"、"小李"、"小张"有什么区别？',
              delay: 2500,
            },
          ],
          choices: [
            {
              id: 'xiacheng_4_3_a',
              text: '去吧。但今晚不用来找我了，我也想一个人待一下。',
              emoji: '🚪',
              scores: { autonomy_need: 5, conflict_style: 3, security_baseline: -1, intimacy_pace: -2 },
              affinity_change: 0,
            },
            {
              id: 'xiacheng_4_3_b',
              text: '你去吧，我理解。但我想认真跟你聊一次——关于我们之间的优先级。',
              emoji: '🗓️',
              scores: { conflict_style: 4, commitment_depth: 4, growth_orientation: 3 },
              affinity_change: 4,
            },
            {
              id: 'xiacheng_4_3_c',
              text: '好的，你去陪她。我改约朋友了，回来不用找我。',
              emoji: '👋',
              scores: { security_baseline: -3, expression_intensity: -3, conflict_style: -2, autonomy_need: 3 },
              affinity_change: -3,
            },
            {
              id: 'xiacheng_4_3_d',
              text: '你可以去。但你有没有想过，你不去，天也不会塌？你不需要拯救每一个人。',
              emoji: '🌊',
              scores: { growth_orientation: 5, conflict_style: 3, expression_intensity: 3 },
              affinity_change: 3,
              trait_unlock: { name: '镜子效应', description: '你能让对方看到自己的行为模式', emoji: '🪞' },
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '电话那头沉默了很久。你听到她深吸了一口气。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '……你说的对。我不是圣母。我只是……害怕别人不需要我。',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '我跟小雨说晚点去。今晚的时间，先给你。',
              partnerEmotion: 'loving',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '她第一次把你排在了前面。你知道这对她来说有多难。',
              delay: 1800,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '好……那你早点休息。',
              partnerEmotion: 'sad',
              delay: 1000,
            },
            {
              type: 'narrator',
              text: '她去了朋友那里。你一个人坐在沙发上，手机亮了又暗。你们之间好像隔着一整个世界的善意。',
              delay: 2000,
            },
          ],
        },
      ],
      closing_messages: [
        {
          type: 'narrator',
          text: '那天晚上很晚的时候，她发来一条语音。\n只有三秒钟。是她说的"对不起"。声音有点哑，像是哭过。',
          gradient: 'bittersweet',
          delay: 2000,
        },
        {
          type: 'emoji_reaction',
          reactionContext: '听到她沙哑的"对不起"的时候，你的反应是',
          reactionOptions: [
            { emoji: '💔', label: '心疼', scores: { commitment_depth: 3, expression_intensity: 2 } },
            { emoji: '😤', label: '复杂', scores: { conflict_style: 2, autonomy_need: 2 } },
            { emoji: '🤝', label: '想和好', scores: { security_baseline: 3, commitment_depth: 3 } },
            { emoji: '😶', label: '不知道', scores: { security_baseline: -2, expression_intensity: -2 } },
          ],
        },
        {
          type: 'quick_swipe',
          swipeStatement: '你相信她的善良不是问题，只是需要学会平衡',
          agreeScores: { growth_orientation: 3, commitment_depth: 3 },
          disagreeScores: { autonomy_need: 3, security_baseline: -2 },
        },
        {
          type: 'narrator',
          text: '你给她回了一条消息：「不用说对不起。但我们需要好好聊聊。」\n她秒回了一个字：「好。」',
          gradient: 'hopeful',
          delay: 2000,
        },
      ],
    },
    // ==================== ACT 5: 抉择 ====================
    {
      id: 5,
      title: '抉择',
      subtitle: '不笑的勇气',
      emoji: '🌅',
      gradient: 'from-rose-900/50 to-orange-900/50',
      choice_points: [
        // --- Choice Point 5-1 ---
        {
          id: 'xiacheng_5_1',
          messages_before: [
            { type: 'chapter_title', text: '第五章 · 抉择', emoji: '🌅', gradient: 'warm' },
            {
              type: 'scene',
              text: '一个月后。她打电话告诉你一个消息。\n一家MCN公司想签她，条件很好，但要她搬到上海。',
              emoji: '📞',
              gradient: 'bittersweet',
            },
            {
              type: 'partner',
              text: '他们说我有潜力做到百万粉，会给我配团队和专业设备。这是我做博主以来最好的机会。',
              partnerEmotion: 'neutral',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '但我不知道该怎么办。去了上海，我们就……',
              partnerEmotion: 'sad',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '你听到她的声音在发抖。这是那个永远开心的夏橙，第一次在一个选择面前犹豫不决。',
              delay: 2000,
            },
          ],
          choices: [
            {
              id: 'xiacheng_5_1_a',
              text: '去啊！这是你的梦想，不能因为我耽误。我们可以想办法的。',
              emoji: '✈️',
              scores: { autonomy_need: 4, growth_orientation: 5, security_baseline: 3 },
              affinity_change: 6,
            },
            {
              id: 'xiacheng_5_1_b',
              text: '我想让你留下来。但我不能这么自私。你自己决定，我支持你。',
              emoji: '💙',
              scores: { expression_intensity: 4, commitment_depth: 4, conflict_style: 2 },
              affinity_change: 5,
            },
            {
              id: 'xiacheng_5_1_c',
              text: '你先不要急着决定。我们一起分析一下利弊，然后再做选择。',
              emoji: '📋',
              scores: { security_baseline: 3, growth_orientation: 3, conflict_style: 2 },
              affinity_change: 4,
            },
            {
              id: 'xiacheng_5_1_d',
              text: '你做这个决定之前，有没有把"我们"算进去过？',
              emoji: '❓',
              scores: { conflict_style: 4, security_baseline: -3, commitment_depth: 3, intimacy_pace: 3 },
              affinity_change: 0,
              trait_unlock: { name: '关系天平', description: '你在意自己在对方决策中的重量', emoji: '⚖️' },
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '电话那头安静了很久。你听到她吸了吸鼻子。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '当然有。你是我想了最多遍的那个变量。',
              partnerEmotion: 'vulnerable',
              delay: 1800,
            },
            {
              type: 'partner',
              text: '以前做选择都是一个人。现在多了一个你，我突然不会选了。',
              partnerEmotion: 'loving',
              delay: 2000,
            },
            {
              type: 'narrator',
              text: '你心里涌起一种复杂的温暖。她终于开始把一段关系的重量放在心里，哪怕这让选择变得更难。',
              delay: 2000,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '……有。但我不知道答案。',
              partnerEmotion: 'sad',
              delay: 1200,
            },
            {
              type: 'narrator',
              text: '她没有再说了。你挂了电话，窗外的天色暗了下去。有些问题没有标准答案。',
              delay: 1800,
            },
          ],
        },
        // --- Choice Point 5-2 ---
        {
          id: 'xiacheng_5_2',
          messages_before: [
            {
              type: 'scene',
              text: '周末。你们约在第一次遇到的那条巷子见面。\n面馆还在，但老板换了新的菜单。',
              emoji: '🍜',
              gradient: 'warm',
            },
            {
              type: 'narrator',
              text: '她比你先到——这是她第一次没有迟到。\n坐在面馆门口的台阶上，手里抱着一个纸袋。',
              delay: 1800,
            },
            {
              type: 'partner',
              text: '你看，我没迟到。',
              partnerEmotion: 'shy',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '我想了很久。我做了一个决定。但在告诉你之前，我想先给你看一个东西。',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
            {
              type: 'narrator',
              text: '她从纸袋里拿出一个本子。不是她的探店笔记，而是一个新的本子。\n第一页写着一行字："和你在一起的日子。"\n后面是你们从认识到现在的每一次见面、每一顿饭、每一次对话的记录。\n用她那歪歪扭扭的字，认认真真地写满了半本。',
              delay: 3500,
            },
          ],
          choices: [
            {
              id: 'xiacheng_5_2_a',
              text: '眼眶有点湿了。你什么时候写的这些？',
              emoji: '🥺',
              scores: { expression_intensity: 5, intimacy_pace: 5, commitment_depth: 4 },
              affinity_change: 8,
            },
            {
              id: 'xiacheng_5_2_b',
              text: '合上本子递回去说：后面的空白页留给以后。不管你去哪里，我们都能写满它。',
              emoji: '📖',
              scores: { commitment_depth: 6, security_baseline: 4, growth_orientation: 3 },
              affinity_change: 8,
            },
            {
              id: 'xiacheng_5_2_c',
              text: '翻看本子，想了很久。然后说：你不需要用这些来挽留什么。你值得去追你的梦。',
              emoji: '🌟',
              scores: { autonomy_need: 4, growth_orientation: 5, commitment_depth: -1, security_baseline: 2 },
              affinity_change: 3,
            },
            {
              id: 'xiacheng_5_2_d',
              text: '你是怕我会忘了你吗？还是怕你自己走了之后会忘了我？',
              emoji: '🔮',
              scores: { growth_orientation: 4, conflict_style: 2, intimacy_pace: 3 },
              affinity_change: 4,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '每天晚上写的。你不知道的那些时间。',
              partnerEmotion: 'shy',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '以前我只会记食物。现在我发现，有一个人比所有食物都值得记录。',
              partnerEmotion: 'loving',
              delay: 2000,
            },
            {
              type: 'narrator',
              text: '阳光照进巷子里，照在她脸上。她没有笑——但她的表情比任何笑容都好看。\n因为那是一张不需要笑也能被爱的脸。',
              delay: 2500,
            },
            {
              type: 'partner',
              text: '所以我决定了——我不去上海。或者说，我不是不去，是想用我自己的方式做下去。在这里，有你的地方。',
              partnerEmotion: 'loving',
              delay: 2500,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '……都不是。是怕到了最后，只剩下这些字证明我们在一起过。',
              partnerEmotion: 'sad',
              delay: 2000,
            },
            {
              type: 'narrator',
              text: '你们面对面坐着，中间隔着一本写满了回忆的本子和一段不确定的未来。',
              delay: 2000,
            },
          ],
        },
      ],
      closing_messages: [
        {
          type: 'narrator',
          text: '你们最后一起吃了一碗面。\n跟第一次一样的店，不一样的心情。她吃面的时候偷偷看了你好几眼。',
          gradient: 'warm',
          delay: 2000,
        },
        {
          type: 'emoji_reaction',
          reactionContext: '走出巷子的时候，你看着她的背影',
          reactionOptions: [
            { emoji: '❤️', label: '确定了', scores: { commitment_depth: 5, intimacy_pace: 3 } },
            { emoji: '🌅', label: '释然', scores: { growth_orientation: 3, security_baseline: 3 } },
            { emoji: '💧', label: '不舍', scores: { commitment_depth: 2, expression_intensity: 3 } },
            { emoji: '☀️', label: '充满希望', scores: { growth_orientation: 4, security_baseline: 3 } },
          ],
        },
        {
          type: 'quick_swipe',
          swipeStatement: '你相信真正的爱是让对方做自己，包括不完美的自己',
          agreeScores: { growth_orientation: 4, commitment_depth: 3 },
          disagreeScores: { security_baseline: 2, autonomy_need: 2 },
        },
        {
          type: 'narrator',
          text: '那天晚上，她没有发微信。\n她发了一个快递——一盒曲奇，和第一次一样甜得过头。\n盒子上画着两个笑脸，一个大一个小。\n旁边写着：「你是我不用笑也敢哭的人。🍊」',
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
          text: '三个月后。你们的城市。',
          emoji: '🌅',
          gradient: 'warm',
        },
        {
          type: 'narrator',
          text: '她在社交账号上发了一个新视频。标题是：《和最重要的人一起做的菜》。\n画面里有两双手一起揉面团，有人把面粉弄到了对方鼻子上。评论区炸了。',
          delay: 2500,
        },
        {
          type: 'partner',
          text: '完了完了完了粉丝都在问你是谁！怎么办！',
          partnerEmotion: 'happy',
          delay: 1500,
        },
        {
          type: 'partner',
          text: '……不过说实话，我挺骄傲的。让全世界都知道吧。',
          partnerEmotion: 'loving',
          delay: 2000,
        },
        {
          type: 'narrator',
          text: '她笑的时候还是那么灿烂，但你知道现在的笑和以前不一样了——这个笑容不是给观众的，不是给粉丝的，是给你的。',
          delay: 2000,
        },
        {
          type: 'narrator',
          text: '你在这段关系里做了一件很了不起的事——你让一个习惯照顾全世界的人，学会了被照顾。你给了她一个不需要笑也安全的地方。',
          gradient: 'warm',
          delay: 3000,
        },
        {
          type: 'narrator',
          text: '最甜的味道，不在食物里，在有你的日子里。',
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
          text: '她最终还是去了上海。你们没有分手，而是发明了一种新的相处模式：每两周她回来一次，每次都带一家新发现的小店的外卖。',
          delay: 2500,
        },
        {
          type: 'partner',
          text: '今天发现一家巨好吃的重庆小面！下周末给你带！先发照片馋你一下！',
          partnerEmotion: 'happy',
          delay: 1800,
        },
        {
          type: 'narrator',
          text: '你给她回了一个"馋了"的表情，然后继续做自己的事。距离没有减少你们之间的温度，反而让每一次见面都像是节日。',
          delay: 2000,
        },
        {
          type: 'narrator',
          text: '你在这段关系里展现了一种珍贵的品质——你给了她飞的自由，而不是把她留在地面。你相信真正的爱不是捆绑，而是在她需要翅膀的时候，帮她检查风向。',
          gradient: 'hopeful',
          delay: 3000,
        },
        {
          type: 'narrator',
          text: '最远的距离不是分隔两地，而是心里没有对方。你们心里都有。',
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
          text: '一年后。那条巷子。',
          emoji: '🍜',
          gradient: 'bittersweet',
        },
        {
          type: 'narrator',
          text: '你路过那家面馆，发现它还在。老板还记得你——"上次那个橘色衣服的小姑娘呢？好久没来了。"',
          delay: 2500,
        },
        {
          type: 'narrator',
          text: '你笑了笑，没有回答。她去了上海之后，你们聊得越来越少。不是谁变了心，是两个人都不知道怎么跨过那段距离——不是地理上的，而是心理上的。',
          delay: 2500,
        },
        {
          type: 'narrator',
          text: '你有时候会想——如果当时多说一句话，多表达一点在乎，她还会走得那么远吗？',
          delay: 2000,
        },
        {
          type: 'narrator',
          text: '在这段故事里，你总是在表达和沉默之间选择了沉默。不是不在乎，而是害怕在乎的方式不对。你需要学会的不是如何去爱，而是如何让对方知道你在爱。',
          gradient: 'bittersweet',
          delay: 3000,
        },
        {
          type: 'narrator',
          text: '有些甜味是有保质期的。但记忆里的味道，永远新鲜。',
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
          text: '五个月后。一条陌生的巷子。',
          emoji: '🍊',
          gradient: 'hopeful',
        },
        {
          type: 'narrator',
          text: '你在另一个城市出差，钻进了一条老巷子找吃的。\n导航又把你带到了死胡同。你站在原地，想起了那个中午。',
          delay: 2500,
        },
        {
          type: 'partner',
          text: '嘿！你也在找那家面馆吗？',
          partnerEmotion: 'happy',
          delay: 1200,
        },
        {
          type: 'narrator',
          text: '你回头。\n她站在巷子口，穿着那件橘色T恤，笑得比阳光还亮。\n但这次的笑，眼角多了一点点不确定——像是不知道你会不会跟上次一样，跟她一起找路。',
          delay: 2500,
        },
        {
          type: 'partner',
          text: '我从上海回来了。听说这边有一家老店很厉害。你要不要……一起找？',
          partnerEmotion: 'shy',
          delay: 2000,
        },
        {
          type: 'narrator',
          text: '你们的故事不是一帆风顺的。你经历过犹豫、争吵、不确定。但每一次磕碰都让你更懂得：爱不是一道计算题，而是一道选择题——你选择了什么，就成为了什么。',
          gradient: 'hopeful',
          delay: 3000,
        },
        {
          type: 'narrator',
          text: '最好的重逢，不是命运安排的巧合，而是两个人都走了一大圈之后，还是选择走向彼此。',
          gradient: 'hopeful',
          delay: 2000,
        },
      ],
    },
  ],
}

export default STORY
export { CHARACTER }
