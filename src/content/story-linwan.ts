import { Character, CharacterStory, StoryMessageData, ChoicePointData, ActData, Ending } from './characters'

const CHARACTER: Character = {
  id: 'linwan',
  name: '林晚',
  subtitle: '冷面学姐',
  description: '心理学研究生，理性克制，说话直接。看起来什么都不在乎，但日记本写满了她从不说出口的心事。',
  emoji: '📓',
  gender: 'female',
  color: 'from-slate-900 to-zinc-900',
  avatar_emoji: '🌙',
  quote: '我不是冷，我只是需要时间确认',
}

const STORY: CharacterStory = {
  character: CHARACTER,
  acts: [
    // ==================== ACT 1: 相遇 ====================
    {
      id: 1,
      title: '相遇',
      subtitle: '图书馆的备注',
      emoji: '📚',
      gradient: 'from-slate-900/50 to-indigo-900/50',
      choice_points: [
        // --- Choice Point 1_1: 图书馆初遇 ---
        {
          id: 'linwan_1_1',
          messages_before: [
            { type: 'chapter_title', text: '第一章 · 相遇', emoji: '📚', gradient: 'cool' },
            {
              type: 'scene',
              text: '周三下午。大学图书馆四楼，心理学区。窗外的梧桐树把阳光切成碎片，洒在书架之间。',
              emoji: '📚',
              gradient: 'cool',
            },
            {
              type: 'narrator',
              text: '你在找一本关于依恋理论的书。找了半天，终于在最高层的书架上看到了——但你够不着。',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '一只手从你旁边伸过来，把那本书抽了出来。是一个短发的女生，戴着银色耳钉，表情淡淡的。',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '《依恋与失去》？你是心理学专业的？',
              partnerEmotion: 'neutral',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '我要用这本书，不过我可以先给你看。三天够吗？',
              partnerEmotion: 'neutral',
              delay: 1500,
            },
          ],
          choices: [
            {
              id: 'linwan_1_1_a',
              text: '"谢谢学姐。三天肯定够。加个微信方便还书？"',
              emoji: '📲',
              scores: { intimacy_pace: 4, expression_intensity: 3, commitment_depth: 2 },
              affinity_change: 5,
            },
            {
              id: 'linwan_1_1_b',
              text: '"不用了，我可以在这里看完。你先用吧。"',
              emoji: '🙏',
              scores: { autonomy_need: 4, expression_intensity: -2, security_baseline: 3 },
              affinity_change: 2,
            },
            {
              id: 'linwan_1_1_c',
              text: '"你也在研究依恋理论？太巧了。你觉得Bowlby的模型有没有局限性？"',
              emoji: '🧠',
              scores: { growth_orientation: 5, expression_intensity: 4, intimacy_pace: 3 },
              affinity_change: 7,
              trait_unlock: {
                name: '智识共振',
                description: '你习惯用知识和思考作为建立连接的桥梁',
                emoji: '🧠',
              },
            },
            {
              id: 'linwan_1_1_d',
              text: '"那我们一起看？反正这个区域有双人桌。"',
              emoji: '👥',
              scores: { intimacy_pace: 5, expression_intensity: 3, security_baseline: -1 },
              affinity_change: 4,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '她微微挑了一下眉毛，嘴角有一个很小的弧度。',
              partnerEmotion: 'neutral',
              delay: 800,
            },
            {
              type: 'partner',
              text: '行。你倒是个有想法的人。',
              partnerEmotion: 'happy',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '她把书递给你的时候，你注意到书的空白页上有很多铅笔批注。字迹很小很密，像是一整个思考的宇宙。',
              delay: 1200,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '她点了点头，没有多说什么。',
              partnerEmotion: 'neutral',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '那你看吧。我去别的区域找找。',
              partnerEmotion: 'distant',
              delay: 1200,
            },
          ],
        },
        // --- Choice Point 1_2: 咖啡馆偶遇 ---
        {
          id: 'linwan_1_2',
          messages_before: [
            {
              type: 'scene',
              text: '三天后。你去学校旁边的咖啡馆还书，发现她坐在角落里，面前摊着笔记本电脑和一杯已经凉了的美式。',
              emoji: '☕',
              gradient: 'neutral',
            },
            {
              type: 'narrator',
              text: '她的眉头紧锁着，盯着屏幕上的数据。旁边的本子上写满了公式和箭头。',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '（抬头看到你）哦，你来了。放这儿吧。',
              partnerEmotion: 'neutral',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '她的语气很平，好像你们约好了一样。但她旁边的椅子上放着一本新书，上面贴了一张便利贴："你可能也会感兴趣。"',
              delay: 1500,
            },
          ],
          choices: [
            {
              id: 'linwan_1_2_a',
              text: '拿起那本书，看了看便利贴，笑了："你记得我在研究什么？"',
              emoji: '😊',
              scores: { intimacy_pace: 4, expression_intensity: 3, security_baseline: 3 },
              affinity_change: 6,
            },
            {
              id: 'linwan_1_2_b',
              text: '"你看起来很忙。要不要帮你买杯热的？你那杯已经凉了。"',
              emoji: '☕',
              scores: { expression_intensity: 4, commitment_depth: 3, security_baseline: 2 },
              affinity_change: 5,
            },
            {
              id: 'linwan_1_2_c',
              text: '把书还了就准备走，不想打扰她工作。',
              emoji: '🚶',
              scores: { autonomy_need: 5, expression_intensity: -3, intimacy_pace: -2 },
              affinity_change: 0,
            },
            {
              id: 'linwan_1_2_d',
              text: '"你写论文呢？什么课题？讲给我听听，也许我可以提供一个外行视角。"',
              emoji: '📝',
              scores: { growth_orientation: 4, intimacy_pace: 3, expression_intensity: 3 },
              affinity_change: 6,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '她摘下眼镜揉了揉眼睛，然后看着你。',
              partnerEmotion: 'happy',
              delay: 800,
            },
            {
              type: 'partner',
              text: '你知道吗，大部分人看到我在忙就走了。你是第一个想留下来的。',
              partnerEmotion: 'shy',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '她说这话的时候语气还是平平的，但你注意到她的耳朵尖微微泛红。',
              delay: 1200,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '她点点头，重新把目光放回了屏幕上。',
              partnerEmotion: 'neutral',
              delay: 1000,
            },
            {
              type: 'narrator',
              text: '你走出咖啡馆的时候，不确定她是真的不在意，还是把在意藏得太深。',
              delay: 1200,
            },
          ],
        },
      ],
      closing_messages: [
        {
          type: 'narrator',
          text: '那天晚上，她给你发了一条微信。只有一句话和一个链接。',
          gradient: 'cool',
          delay: 1500,
        },
        {
          type: 'partner',
          text: '这篇论文和你的研究方向有关。仅供参考。',
          partnerEmotion: 'neutral',
          delay: 1200,
        },
        {
          type: 'emoji_reaction',
          reactionContext: '收到她的消息，你心里的感觉是',
          reactionOptions: [
            { emoji: '😊', label: '她记得我', scores: { intimacy_pace: 3, security_baseline: 2 } },
            { emoji: '🤔', label: '她什么意思', scores: { autonomy_need: 2, security_baseline: -1 } },
            { emoji: '🥰', label: '好细心', scores: { intimacy_pace: 4, commitment_depth: 2 } },
            { emoji: '😎', label: '有点意思', scores: { growth_orientation: 2, expression_intensity: 1 } },
          ],
        },
        {
          type: 'quick_swipe',
          swipeStatement: '你想回一条很长的消息，但最后只发了"谢谢学姐"',
          agreeScores: { expression_intensity: -2, security_baseline: 2 },
          disagreeScores: { expression_intensity: 3, intimacy_pace: 2 },
        },
        {
          type: 'narrator',
          text: '她的微信头像是一弯月亮。你盯着看了很久。',
          gradient: 'romantic',
          delay: 1500,
        },
      ],
    },

    // ==================== ACT 2: 心动 ====================
    {
      id: 2,
      title: '心动',
      subtitle: '实验室的秘密',
      emoji: '🔬',
      gradient: 'from-indigo-900/50 to-slate-900/50',
      choice_points: [
        // --- Choice Point 2_1: 一起做实验 ---
        {
          id: 'linwan_2_1',
          messages_before: [
            { type: 'chapter_title', text: '第二章 · 心动', emoji: '🔬', gradient: 'romantic' },
            {
              type: 'scene',
              text: '两周后。她邀请你参加她的一个心理学实验——关于"亲密关系中的信任建立"。你是被试。',
              emoji: '🔬',
              gradient: 'cool',
            },
            {
              type: 'narrator',
              text: '实验室很小，白墙，一张桌子，两把椅子。她坐在对面，手里拿着问卷。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '规则很简单。我问你问题，你如实回答。没有对错之分。',
              partnerEmotion: 'neutral',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '第一个问题：你最近一次对一个人完全坦诚，是什么时候？',
              partnerEmotion: 'neutral',
              delay: 2000,
            },
          ],
          choices: [
            {
              id: 'linwan_2_1_a',
              text: '"说实话？大概是现在。因为你在问，我就想认真答。"',
              emoji: '💬',
              scores: { expression_intensity: 6, intimacy_pace: 5, security_baseline: 2 },
              affinity_change: 7,
            },
            {
              id: 'linwan_2_1_b',
              text: '"我不太确定。我好像很少对人完全坦诚。你呢？"',
              emoji: '🪞',
              scores: { conflict_style: 3, growth_orientation: 3, security_baseline: -2 },
              affinity_change: 4,
            },
            {
              id: 'linwan_2_1_c',
              text: '"这是实验问题还是你自己想知道的？"',
              emoji: '🎯',
              scores: { conflict_style: 5, autonomy_need: 4, expression_intensity: 3 },
              affinity_change: 3,
            },
            {
              id: 'linwan_2_1_d',
              text: '认真想了一会儿，然后说出一段真实的经历。关于你曾经信任一个人、却被辜负的事。',
              emoji: '📖',
              scores: { expression_intensity: 5, intimacy_pace: 4, security_baseline: -3, growth_orientation: 3 },
              affinity_change: 6,
              trait_unlock: {
                name: '裂缝之光',
                description: '你愿意展示伤疤，因为你知道那也是光照进来的地方',
                emoji: '✨',
              },
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '她放下了手里的笔。第一次在你面前露出了不像"研究者"的表情。',
              delay: 800,
            },
            {
              type: 'partner',
              text: '你比我预期的……真实。这不在我的实验变量里。',
              partnerEmotion: 'shy',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '她说的"不在实验变量里"的时候，声音比平时轻了一点。',
              delay: 1200,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '她记录了什么，没有抬头。',
              partnerEmotion: 'neutral',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '嗯，知道了。下一个问题。',
              partnerEmotion: 'distant',
              delay: 1200,
            },
          ],
        },
        // --- Choice Point 2_2: 实验后的散步 ---
        {
          id: 'linwan_2_2',
          messages_before: [
            {
              type: 'scene',
              text: '实验结束后，你们走出教学楼。校园的黄昏安静得像一幅画。梧桐叶慢慢落在脚边。',
              emoji: '🍂',
              gradient: 'romantic',
            },
            {
              type: 'partner',
              text: '谢谢你今天来。数据很有用。',
              partnerEmotion: 'neutral',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '她走了几步又停下来，好像在犹豫什么。',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '你刚才回答那个问题的时候……我差点也想回答了。',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '我的实验不允许我这样做。但如果不是实验，我可能会告诉你。',
              partnerEmotion: 'vulnerable',
              delay: 1800,
            },
          ],
          choices: [
            {
              id: 'linwan_2_2_a',
              text: '"那现在实验结束了。你可以告诉我了。"',
              emoji: '🤲',
              scores: { intimacy_pace: 6, expression_intensity: 4, commitment_depth: 3 },
              affinity_change: 7,
            },
            {
              id: 'linwan_2_2_b',
              text: '"不急。等你想说的时候自然会说。我有耐心。"',
              emoji: '🌿',
              scores: { security_baseline: 6, commitment_depth: 4, expression_intensity: -2 },
              affinity_change: 6,
            },
            {
              id: 'linwan_2_2_c',
              text: '"你说你的实验不允许。那你的心呢？你的心允许吗？"',
              emoji: '❤️',
              scores: { expression_intensity: 7, intimacy_pace: 5, conflict_style: 3 },
              affinity_change: 5,
            },
            {
              id: 'linwan_2_2_d',
              text: '"每个人都有自己的节奏。你习惯用研究的框架保护自己，对吧？"',
              emoji: '🛡️',
              scores: { growth_orientation: 5, conflict_style: 4, security_baseline: 2 },
              affinity_change: 4,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '她站住了，认真地看着你。',
              partnerEmotion: 'vulnerable',
              delay: 800,
            },
            {
              type: 'partner',
              text: '你不怕被人看穿吗？你说话的方式，让人觉得自己也被看穿了。',
              partnerEmotion: 'shy',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '她的声音很轻，像是怕被风听到。这是你第一次看到她的防线出现裂缝。',
              delay: 1500,
              gradient: 'romantic',
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '她转过头去，继续往前走。',
              partnerEmotion: 'distant',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '走吧，天快黑了。',
              partnerEmotion: 'neutral',
              delay: 1200,
            },
          ],
        },
      ],
      closing_messages: [
        {
          type: 'narrator',
          text: '分开的时候，她在你面前站了三秒。三秒对她来说可能已经是很长的犹豫。',
          gradient: 'romantic',
          delay: 1500,
        },
        {
          type: 'partner',
          text: '周末……如果你没事的话，我认识一家书店，书架上有一些很冷门的心理学读物。',
          partnerEmotion: 'shy',
          delay: 1800,
        },
        {
          type: 'emoji_reaction',
          reactionContext: '听到她的邀约，你心里想的是',
          reactionOptions: [
            { emoji: '💓', label: '她在约我', scores: { intimacy_pace: 4, expression_intensity: 2 } },
            { emoji: '🤓', label: '学术交流', scores: { growth_orientation: 3, autonomy_need: 1 } },
            { emoji: '😳', label: '有点意外', scores: { security_baseline: -1, intimacy_pace: 2 } },
            { emoji: '🌙', label: '期待', scores: { commitment_depth: 3, intimacy_pace: 3 } },
          ],
        },
        {
          type: 'quick_swipe',
          swipeStatement: '她主动约你，这意味着她比表面上更在乎',
          agreeScores: { intimacy_pace: 3, security_baseline: 2 },
          disagreeScores: { autonomy_need: 2, security_baseline: -1 },
        },
        {
          type: 'narrator',
          text: '你答应了。走远以后回头看了一眼，她还站在原地。月亮刚好升到她身后。',
          gradient: 'romantic',
          delay: 1500,
        },
      ],
    },

    // ==================== ACT 3: 走近 ====================
    {
      id: 3,
      title: '走近',
      subtitle: '日记本的边缘',
      emoji: '📓',
      gradient: 'from-violet-900/50 to-slate-900/50',
      choice_points: [
        // --- Choice Point 3_1: 她的日记本 ---
        {
          id: 'linwan_3_1',
          messages_before: [
            { type: 'chapter_title', text: '第三章 · 走近', emoji: '📓', gradient: 'romantic' },
            {
              type: 'scene',
              text: '一个下雨的周末。你们在她的宿舍里看书。她去倒水的时候，一本厚厚的笔记本从桌上滑落，翻开了。',
              emoji: '📓',
              gradient: 'cool',
            },
            {
              type: 'narrator',
              text: '不是学术笔记。是日记。你一眼扫到了几行字：\n"……他好像真的在听我说话。不是敷衍的那种。是那种——会因为我的一句话而安静下来的那种。"',
              delay: 2000,
            },
            {
              type: 'narrator',
              text: '她端着两杯水回来了。',
              delay: 1000,
            },
            {
              type: 'narrator',
              text: '她看到了翻开的日记本和你的表情。空气凝固了。',
              delay: 1200,
              gradient: 'tense',
            },
          ],
          choices: [
            {
              id: 'linwan_3_1_a',
              text: '立刻合上日记本，说："不好意思，掉下来的时候翻开了。我没有看。"',
              emoji: '🙈',
              scores: { security_baseline: 4, expression_intensity: -3, autonomy_need: 3 },
              affinity_change: 3,
            },
            {
              id: 'linwan_3_1_b',
              text: '看着她的眼睛，诚实地说："掉下来的时候我看到了一些。我不该看，对不起。"',
              emoji: '😔',
              scores: { expression_intensity: 5, conflict_style: 3, security_baseline: 2 },
              affinity_change: 5,
            },
            {
              id: 'linwan_3_1_c',
              text: '"我看到你写的了。写得很好。你应该多说出来，而不是只写在本子里。"',
              emoji: '💬',
              scores: { conflict_style: 5, expression_intensity: 6, intimacy_pace: 4, security_baseline: -3 },
              affinity_change: 2,
            },
            {
              id: 'linwan_3_1_d',
              text: '什么都没说，拿起日记本递给她。然后打开手机备忘录，给她看了一段你自己写的东西。',
              emoji: '📱',
              scores: { intimacy_pace: 5, expression_intensity: 4, growth_orientation: 4, commitment_depth: 3 },
              affinity_change: 7,
              trait_unlock: {
                name: '等价交换',
                description: '你用同等的坦诚回应对方的暴露，这是最高级的尊重',
                emoji: '⚖️',
              },
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '她接过日记本，紧紧抱在胸前。但她没有生气。',
              partnerEmotion: 'vulnerable',
              delay: 800,
            },
            {
              type: 'partner',
              text: '你是第一个……没有因为我写日记这件事觉得我奇怪的人。',
              partnerEmotion: 'shy',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '窗外的雨变小了。她的眼眶有一点红，但她很快别过头去。',
              delay: 1200,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '她一把抢过日记本，表情冷了下来。',
              partnerEmotion: 'angry',
              delay: 800,
            },
            {
              type: 'partner',
              text: '以后不要碰我桌上的东西。',
              partnerEmotion: 'angry',
              delay: 1200,
            },
          ],
        },
        // --- Choice Point 3_2: 深夜天台 ---
        {
          id: 'linwan_3_2',
          messages_before: [
            {
              type: 'scene',
              text: '那天晚上。你们坐在宿舍楼的天台上。她很少来这里，但今晚她带了一瓶红酒上来。',
              emoji: '🌃',
              gradient: 'romantic',
            },
            {
              type: 'partner',
              text: '我小时候成绩一直很好。因为好成绩是唯一能让我爸妈注意到我的方式。',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '后来我发现，就算考第一名，他们也只是说"嗯，继续保持"。连一个拥抱都没有。',
              partnerEmotion: 'sad',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '所以我就不要拥抱了。我告诉自己我不需要。',
              partnerEmotion: 'sad',
              delay: 1800,
            },
            {
              type: 'narrator',
              text: '她喝了一口酒，手指在瓶身上无意识地画着圈。',
              delay: 1200,
              gradient: 'bittersweet',
            },
          ],
          choices: [
            {
              id: 'linwan_3_2_a',
              text: '靠近她一点，但没有触碰。只是让她知道你在这里。',
              emoji: '🌿',
              scores: { security_baseline: 6, expression_intensity: -2, commitment_depth: 4, intimacy_pace: 3 },
              affinity_change: 7,
            },
            {
              id: 'linwan_3_2_b',
              text: '"你现在需要一个拥抱吗？如果你愿意的话。"',
              emoji: '🤗',
              scores: { expression_intensity: 5, intimacy_pace: 6, security_baseline: 2 },
              affinity_change: 6,
            },
            {
              id: 'linwan_3_2_c',
              text: '"你学心理学，应该比谁都清楚——说\'我不需要\'的时候，往往最需要。"',
              emoji: '🔍',
              scores: { conflict_style: 5, growth_orientation: 4, expression_intensity: 4, security_baseline: -3 },
              affinity_change: 2,
            },
            {
              id: 'linwan_3_2_d',
              text: '"谢谢你告诉我。你很勇敢。"',
              emoji: '💪',
              scores: { expression_intensity: 3, security_baseline: 4, commitment_depth: 3 },
              affinity_change: 5,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '她的身体微微倾向你这边，虽然还隔着一拳的距离。',
              partnerEmotion: 'vulnerable',
              delay: 800,
            },
            {
              type: 'partner',
              text: '我有时候觉得……你好像能听懂我没说的部分。',
              partnerEmotion: 'loving',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '天台上的风很凉，但你身边那一小块空气好像是暖的。',
              delay: 1500,
              gradient: 'romantic',
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '她缩了缩肩膀，没有再说话。',
              partnerEmotion: 'distant',
              delay: 1000,
            },
            {
              type: 'narrator',
              text: '你感觉她刚刚打开的门又关上了一半。',
              delay: 1200,
              gradient: 'cool',
            },
          ],
        },
        // --- Choice Point 3_3: 雨中的选择 ---
        {
          id: 'linwan_3_3',
          messages_before: [
            {
              type: 'scene',
              text: '一周后的晚上。你们从电影院出来，突然下起了大雨。只有一把伞。',
              emoji: '🌧️',
              gradient: 'romantic',
            },
            {
              type: 'narrator',
              text: '她打开伞，犹豫了一秒，然后把伞递给你。',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '你撑着，我没关系，我不怕淋雨。',
              partnerEmotion: 'neutral',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '但你看得出来她在发抖。',
              delay: 1000,
              gradient: 'bittersweet',
            },
          ],
          choices: [
            {
              id: 'linwan_3_3_a',
              text: '不接伞，直接拉住她的手跑进雨里："一起淋！跑到对面有屋檐！"',
              emoji: '🏃',
              scores: { intimacy_pace: 6, expression_intensity: 5, growth_orientation: 3, security_baseline: -1 },
              affinity_change: 7,
            },
            {
              id: 'linwan_3_3_b',
              text: '接过伞，举高一点，让两个人都撑在下面。安静地走。',
              emoji: '☂️',
              scores: { security_baseline: 5, commitment_depth: 4, expression_intensity: -1 },
              affinity_change: 6,
            },
            {
              id: 'linwan_3_3_c',
              text: '"你明明冷得发抖，为什么还要逞强？让我帮你可以吗？"',
              emoji: '🥺',
              scores: { conflict_style: 4, expression_intensity: 5, intimacy_pace: 4 },
              affinity_change: 5,
            },
            {
              id: 'linwan_3_3_d',
              text: '脱下自己的外套披在她身上，然后接过伞。什么话都不用说。',
              emoji: '🧥',
              scores: { expression_intensity: -2, commitment_depth: 5, security_baseline: 4, intimacy_pace: 3 },
              affinity_change: 7,
              trait_unlock: {
                name: '无声照顾',
                description: '你用行动代替语言，这比说一百句"我在乎你"更有力',
                emoji: '🧥',
              },
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '她愣住了。过了好几秒才动。',
              partnerEmotion: 'shy',
              delay: 800,
            },
            {
              type: 'partner',
              text: '你怎么……总是做出让我不知道该怎么回应的事。',
              partnerEmotion: 'loving',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '雨很大。但你发现，她的手悄悄抓住了你衣服的下摆。',
              delay: 1500,
              gradient: 'romantic',
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '她接过伞，自己撑着，保持着距离。',
              partnerEmotion: 'neutral',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '走吧，别淋感冒了。',
              partnerEmotion: 'neutral',
              delay: 1200,
            },
          ],
        },
      ],
      closing_messages: [
        {
          type: 'narrator',
          text: '那天之后，你发现她给你发消息的频率高了一点。虽然还是很简短，但每一条你都能感觉到温度。',
          gradient: 'warm',
          delay: 1500,
        },
        {
          type: 'emoji_reaction',
          reactionContext: '和她相处的模式像是',
          reactionOptions: [
            { emoji: '🧩', label: '拼图', scores: { commitment_depth: 3, growth_orientation: 2 } },
            { emoji: '🌊', label: '潮汐', scores: { intimacy_pace: 2, autonomy_need: 2 } },
            { emoji: '🔐', label: '解密', scores: { growth_orientation: 3, conflict_style: 2 } },
            { emoji: '🕯️', label: '暖炉', scores: { security_baseline: 3, expression_intensity: 2 } },
          ],
        },
        {
          type: 'quick_swipe',
          swipeStatement: '她的冷只是外壳，里面住着一个很软的人',
          agreeScores: { security_baseline: 3, commitment_depth: 2 },
          disagreeScores: { autonomy_need: 2, conflict_style: 2 },
        },
        {
          type: 'narrator',
          text: '你开始懂得，有些人表达喜欢的方式，是"我给你发了一篇论文，你看了吗"。',
          gradient: 'warm',
          delay: 1500,
        },
      ],
    },

    // ==================== ACT 4: 摩擦 ====================
    {
      id: 4,
      title: '摩擦',
      subtitle: '理性的围墙',
      emoji: '🧊',
      gradient: 'from-zinc-900/50 to-slate-900/50',
      choice_points: [
        // --- Choice Point 4_1: 她突然冷了 ---
        {
          id: 'linwan_4_1',
          messages_before: [
            { type: 'chapter_title', text: '第四章 · 摩擦', emoji: '🧊', gradient: 'tense' },
            {
              type: 'scene',
              text: '某天你约她出来，她说在忙。第二天又说在忙。第三天她回消息的速度慢了很多。',
              emoji: '📵',
              gradient: 'tense',
            },
            {
              type: 'narrator',
              text: '你隐约感觉到什么变了。不是她更忙了，而是她在后退。',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '第四天，你在校园里偶然碰到了她。她的表情和第一次在图书馆见到时一模一样——礼貌的、冷的。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '最近论文deadline，不太方便出来。等我忙完再说吧。',
              partnerEmotion: 'distant',
              delay: 1800,
            },
          ],
          choices: [
            {
              id: 'linwan_4_1_a',
              text: '"好的，你忙完告诉我。我不打扰你了。"',
              emoji: '🙂',
              scores: { autonomy_need: 4, expression_intensity: -3, security_baseline: 3, conflict_style: -3 },
              affinity_change: 2,
            },
            {
              id: 'linwan_4_1_b',
              text: '"你不是在忙。你是在躲我。我说错什么了吗？"',
              emoji: '🎯',
              scores: { conflict_style: 6, expression_intensity: 5, security_baseline: -2 },
              affinity_change: 3,
            },
            {
              id: 'linwan_4_1_c',
              text: '没有追问，但第二天买了一杯她常喝的美式放在实验室门口，附了一张纸条："加油。"',
              emoji: '☕',
              scores: { security_baseline: 5, commitment_depth: 4, expression_intensity: 2, conflict_style: -2 },
              affinity_change: 6,
              trait_unlock: {
                name: '安静的坚持',
                description: '你不用言语施压，用行动表达在乎——这是对回避型最好的温柔',
                emoji: '☕',
              },
            },
            {
              id: 'linwan_4_1_d',
              text: '"我理解你需要空间。但你能不能至少告诉我一声，而不是直接消失？"',
              emoji: '💬',
              scores: { conflict_style: 4, expression_intensity: 4, commitment_depth: 3, security_baseline: 2 },
              affinity_change: 5,
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '过了一天，她终于主动发了消息。',
              delay: 800,
            },
            {
              type: 'partner',
              text: '对不起。我不是在躲你。我是……在躲自己。',
              partnerEmotion: 'vulnerable',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '我开始在乎你了，这让我害怕。所以我本能地想拉开距离。心理学叫这个"回避性依恋"。我自己研究这个，却还是这样。很可笑对吧。',
              partnerEmotion: 'sad',
              delay: 2500,
            },
          ],
          response_low: [
            {
              type: 'narrator',
              text: '她没有回你的消息。两天后才发来两个字。',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '抱歉。',
              partnerEmotion: 'distant',
              delay: 1200,
            },
          ],
        },
        // --- Choice Point 4_2: 正面对话 ---
        {
          id: 'linwan_4_2',
          messages_before: [
            {
              type: 'scene',
              text: '一周后。她终于愿意见面了。你们坐在图书馆旁边的长椅上，和第一次遇见的地方只隔了一面墙。',
              emoji: '🪑',
              gradient: 'neutral',
            },
            {
              type: 'partner',
              text: '我跟你说实话。我以前交过一个男朋友，很好的人。但我把他推走了。',
              partnerEmotion: 'sad',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '每次他靠近一步，我就后退两步。直到他觉得我根本不爱他。但我爱他。我只是不知道怎么表达。',
              partnerEmotion: 'sad',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '现在同样的事又在发生了。你明白我在说什么吗？',
              partnerEmotion: 'vulnerable',
              delay: 1800,
            },
          ],
          choices: [
            {
              id: 'linwan_4_2_a',
              text: '"我明白。你怕历史重演。但你告诉我了，这就已经不一样了。"',
              emoji: '🤝',
              scores: { security_baseline: 6, commitment_depth: 5, expression_intensity: 3 },
              affinity_change: 7,
            },
            {
              id: 'linwan_4_2_b',
              text: '"你知道问题在哪里，这是好事。但光知道不够，你得行动。"',
              emoji: '💪',
              scores: { conflict_style: 5, growth_orientation: 5, expression_intensity: 4 },
              affinity_change: 3,
            },
            {
              id: 'linwan_4_2_c',
              text: '"我不想做那个被推走的人。但我也不会强迫你。你想清楚了再来找我。"',
              emoji: '🚶',
              scores: { autonomy_need: 6, conflict_style: 3, commitment_depth: -2, security_baseline: 2 },
              affinity_change: 0,
            },
            {
              id: 'linwan_4_2_d',
              text: '"我们可以一起想办法。你后退的时候，我不追。但我也不走。我就站在这里。"',
              emoji: '🧱',
              scores: { commitment_depth: 7, security_baseline: 5, expression_intensity: 4, growth_orientation: 3 },
              affinity_change: 8,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '她的眼泪终于掉下来了。她用手背很快地擦掉，好像怕被人看到。',
              partnerEmotion: 'vulnerable',
              delay: 800,
            },
            {
              type: 'partner',
              text: '你怎么可以这么好。',
              partnerEmotion: 'loving',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '她往你的方向挪了一小步。对林晚来说，这一步可能比跑一百米还难。',
              delay: 1500,
              gradient: 'romantic',
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '她点了点头，又恢复了那个淡淡的表情。',
              partnerEmotion: 'distant',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '也许你是对的。我需要再想想。',
              partnerEmotion: 'neutral',
              delay: 1200,
            },
          ],
        },
        // --- Choice Point 4_3: 她的导师说 ---
        {
          id: 'linwan_4_3',
          messages_before: [
            {
              type: 'scene',
              text: '几天后。她突然发来一段很长的消息。你能感觉到她打字的时候在发抖。',
              emoji: '📱',
              gradient: 'tense',
            },
            {
              type: 'partner',
              text: '今天导师跟我谈了。他说我的论文需要大改，可能要延毕半年。',
              partnerEmotion: 'sad',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '他还说我太追求完美了，反而阻碍了进度。他说得对。但我不知道怎么改。我从小就是这样。',
              partnerEmotion: 'sad',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '我现在状态很不好。但我不想在你面前崩溃。所以我就发个消息。你不用回。',
              partnerEmotion: 'vulnerable',
              delay: 1800,
            },
          ],
          choices: [
            {
              id: 'linwan_4_3_a',
              text: '立刻打电话过去。不管她说不用回，你知道"不用回"就是"请你回"。',
              emoji: '📞',
              scores: { expression_intensity: 5, intimacy_pace: 5, security_baseline: -2, conflict_style: 3 },
              affinity_change: 6,
            },
            {
              id: 'linwan_4_3_b',
              text: '回一条很短的消息："我在。需要我的时候说。"然后安静地等。',
              emoji: '💬',
              scores: { security_baseline: 6, autonomy_need: 3, commitment_depth: 4, expression_intensity: -2 },
              affinity_change: 5,
            },
            {
              id: 'linwan_4_3_c',
              text: '回消息说："你有没有考虑过，不完美的东西也可以很好？你的论文、你自己，都是。"',
              emoji: '🌸',
              scores: { growth_orientation: 6, expression_intensity: 4, security_baseline: 3 },
              affinity_change: 6,
            },
            {
              id: 'linwan_4_3_d',
              text: '直接去找她。带着她喜欢的零食和一杯热美式。不说什么大道理，就陪着她。',
              emoji: '🚶',
              scores: { commitment_depth: 5, intimacy_pace: 4, expression_intensity: -1, security_baseline: 3 },
              affinity_change: 7,
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '你到的时候，她打开门，眼睛是红的，但没有哭。',
              delay: 800,
            },
            {
              type: 'partner',
              text: '我不是说了不用来吗。',
              partnerEmotion: 'vulnerable',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '但她让开了门。你知道，"让开门"就是林晚说"谢谢你来"的方式。',
              delay: 1500,
              gradient: 'warm',
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '她过了很久才回复。',
              partnerEmotion: 'distant',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '谢谢。我没事。',
              partnerEmotion: 'distant',
              delay: 1200,
            },
          ],
        },
      ],
      closing_messages: [
        {
          type: 'narrator',
          text: '那天晚上你离开的时候，她站在门口犹豫了很久。然后做了一件她从来没做过的事。',
          gradient: 'romantic',
          delay: 1500,
        },
        {
          type: 'partner',
          text: '等一下。',
          partnerEmotion: 'shy',
          delay: 800,
        },
        {
          type: 'narrator',
          text: '她快步走过来，轻轻抱了你一下。很快，不到两秒。然后转身就进了门。',
          gradient: 'romantic',
          delay: 1500,
        },
        {
          type: 'emoji_reaction',
          reactionContext: '被她短暂地抱了一下，你心里的感觉是',
          reactionOptions: [
            { emoji: '💓', label: '心要化了', scores: { intimacy_pace: 4, expression_intensity: 3 } },
            { emoji: '🥹', label: '很心疼', scores: { commitment_depth: 3, security_baseline: 2 } },
            { emoji: '💪', label: '值得的', scores: { commitment_depth: 4, growth_orientation: 2 } },
            { emoji: '🌙', label: '懂了', scores: { security_baseline: 3, autonomy_need: 2 } },
          ],
        },
        {
          type: 'quick_swipe',
          swipeStatement: '林晚的拥抱比任何人的都珍贵，因为你知道她有多不容易',
          agreeScores: { commitment_depth: 3, security_baseline: 3 },
          disagreeScores: { autonomy_need: 2, conflict_style: 2 },
        },
      ],
    },

    // ==================== ACT 5: 抉择 ====================
    {
      id: 5,
      title: '抉择',
      subtitle: '最后一页',
      emoji: '📖',
      gradient: 'from-slate-900/50 to-rose-900/50',
      choice_points: [
        // --- Choice Point 5_1: 她的选择 ---
        {
          id: 'linwan_5_1',
          messages_before: [
            { type: 'chapter_title', text: '第五章 · 抉择', emoji: '📖', gradient: 'bittersweet' },
            {
              type: 'scene',
              text: '一个月后。她的论文问题解决了，但她收到了一个交换项目的通知——去维也纳大学访学一年。',
              emoji: '✈️',
              gradient: 'tense',
            },
            {
              type: 'narrator',
              text: '你们坐在那个图书馆旁边的长椅上，和第一次正式谈话的地方一样。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '我申请的时候还没认识你。现在通知下来了，我不知道该怎么办。',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '如果是以前的我，我会直接去。不问任何人。但现在我不想那样了。',
              partnerEmotion: 'loving',
              delay: 1800,
            },
            {
              type: 'partner',
              text: '你觉得我该去吗？',
              partnerEmotion: 'vulnerable',
              delay: 1500,
            },
          ],
          choices: [
            {
              id: 'linwan_5_1_a',
              text: '"你应该去。这对你的学术生涯很重要。一年很快的，我会在这里等你。"',
              emoji: '🕊️',
              scores: { commitment_depth: 7, security_baseline: 5, autonomy_need: 3 },
              affinity_change: 8,
              trait_unlock: {
                name: '深水信任',
                description: '你敢于放手，因为你相信真正的连接不会被距离稀释',
                emoji: '🌊',
              },
            },
            {
              id: 'linwan_5_1_b',
              text: '"我不想替你做决定。但不管你选什么，我都支持你。"',
              emoji: '🤲',
              scores: { autonomy_need: 5, security_baseline: 4, commitment_depth: 3 },
              affinity_change: 5,
            },
            {
              id: 'linwan_5_1_c',
              text: '"说实话？我不想你走。但我知道我不能因为这个理由拦你。"',
              emoji: '💔',
              scores: { expression_intensity: 7, security_baseline: -3, intimacy_pace: 5, commitment_depth: 3 },
              affinity_change: 6,
            },
            {
              id: 'linwan_5_1_d',
              text: '"你问我该不该去，其实你心里已经有答案了。你只是需要有人告诉你——你可以的。"',
              emoji: '🌟',
              scores: { growth_orientation: 6, security_baseline: 4, expression_intensity: 3 },
              affinity_change: 7,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '她低下头，沉默了很久。你看到她的肩膀在微微发抖。',
              partnerEmotion: 'vulnerable',
              delay: 800,
            },
            {
              type: 'partner',
              text: '你知道吗，我研究了这么久的依恋理论，到头来……我自己才是最需要被治愈的那个人。',
              partnerEmotion: 'sad',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '但遇到你以后，我开始相信……也许安全型依恋不只是书上的理论。',
              partnerEmotion: 'loving',
              delay: 2000,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '她点了点头，表情又变回了那种你很熟悉的平静。',
              partnerEmotion: 'neutral',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '嗯。我知道了。',
              partnerEmotion: 'distant',
              delay: 1200,
            },
          ],
        },
        // --- Choice Point 5_2: 离开前的夜晚 ---
        {
          id: 'linwan_5_2',
          messages_before: [
            {
              type: 'scene',
              text: '她出发前的最后一个晚上。你们在校园的操场上散步。星星很亮，像碎钻撒在黑色绒布上。',
              emoji: '🌟',
              gradient: 'romantic',
            },
            {
              type: 'narrator',
              text: '她从包里拿出一个东西——她的日记本。那个你曾经不小心翻开的本子。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '我想了很久，决定把这个留给你。',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '里面有我从认识你到现在写的所有东西。我说不出口的，都在里面了。',
              partnerEmotion: 'loving',
              delay: 1800,
            },
            {
              type: 'narrator',
              text: '对一个把日记本看得比命还重要的人来说，把它交出去意味着什么，你心里清楚。',
              delay: 1500,
              gradient: 'romantic',
            },
          ],
          choices: [
            {
              id: 'linwan_5_2_a',
              text: '郑重地接过日记本，说："我会一页一页读完的。等你回来，我一页一页讲给你听我的感受。"',
              emoji: '📖',
              scores: { commitment_depth: 6, expression_intensity: 5, security_baseline: 4 },
              affinity_change: 8,
            },
            {
              id: 'linwan_5_2_b',
              text: '"你确定吗？这个对你很重要。你可以带去维也纳，继续写。"',
              emoji: '🤔',
              scores: { autonomy_need: 4, security_baseline: 5, commitment_depth: 2, expression_intensity: -2 },
              affinity_change: 4,
            },
            {
              id: 'linwan_5_2_c',
              text: '接过日记本，然后把自己手机里的一个加密相册打开给她看——全是和她在一起时偷偷拍的照片。',
              emoji: '📸',
              scores: { expression_intensity: 6, intimacy_pace: 5, commitment_depth: 4 },
              affinity_change: 7,
            },
            {
              id: 'linwan_5_2_d',
              text: '什么都没说，翻到日记本最后一页空白处，写下："第一章：等你回来。"',
              emoji: '✒️',
              scores: { commitment_depth: 7, expression_intensity: 4, intimacy_pace: 4, growth_orientation: 3 },
              affinity_change: 8,
            },
          ],
          response_high: [
            {
              type: 'partner',
              text: '她终于没有忍住，眼泪掉下来了。但她笑着。你第一次看到她哭着笑。',
              partnerEmotion: 'loving',
              delay: 800,
            },
            {
              type: 'partner',
              text: '我以为我永远学不会。但你教会了我一件事——',
              partnerEmotion: 'loving',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '被看见，没有那么可怕。',
              partnerEmotion: 'loving',
              delay: 2000,
            },
            {
              type: 'narrator',
              text: '操场的灯灭了，只剩下星光。她第一次主动把头靠在了你的肩膀上。',
              delay: 2000,
              gradient: 'romantic',
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '她的表情很复杂。收回了日记本，抱在胸前。',
              partnerEmotion: 'sad',
              delay: 1000,
            },
            {
              type: 'partner',
              text: '也许……还不是时候。',
              partnerEmotion: 'sad',
              delay: 1500,
            },
          ],
        },
      ],
      closing_messages: [
        {
          type: 'narrator',
          text: '第二天一早，你送她到机场。她拖着行李箱，走进安检口之前停了下来。',
          gradient: 'bittersweet',
          delay: 1500,
        },
        {
          type: 'partner',
          text: '我不会像以前一样消失的。我保证。',
          partnerEmotion: 'loving',
          delay: 1500,
        },
        {
          type: 'emoji_reaction',
          reactionContext: '看着她走进安检通道的背影，你的感觉是',
          reactionOptions: [
            { emoji: '🥲', label: '不舍', scores: { commitment_depth: 3, expression_intensity: 3 } },
            { emoji: '💪', label: '相信她', scores: { security_baseline: 4, commitment_depth: 2 } },
            { emoji: '🌙', label: '会再见', scores: { commitment_depth: 3, growth_orientation: 3 } },
            { emoji: '🌅', label: '新起点', scores: { growth_orientation: 4, autonomy_need: 2 } },
          ],
        },
        {
          type: 'quick_swipe',
          swipeStatement: '分开的时候你没有哭，因为你知道这不是结束',
          agreeScores: { security_baseline: 4, commitment_depth: 2 },
          disagreeScores: { expression_intensity: 3, intimacy_pace: 2 },
        },
        {
          type: 'narrator',
          text: '飞机起飞后十分钟，你收到了一条微信。只有一个字：\n"嗯。"',
          gradient: 'warm',
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
          text: '一年后。维也纳飞回来的航班落地。',
          emoji: '🌅',
          gradient: 'warm',
        },
        {
          type: 'narrator',
          text: '你站在到达大厅的出口处。手里拿着一束白色洋桔梗——她日记本里写过的、她最喜欢的花。',
          delay: 2000,
        },
        {
          type: 'narrator',
          text: '她出来的时候，短发比走的时候长了一些。她看到你，站住了。然后走过来。没有跑，但步伐比平时快。',
          delay: 2000,
        },
        {
          type: 'partner',
          text: '你来了。',
          partnerEmotion: 'loving',
          delay: 1500,
        },
        {
          type: 'narrator',
          text: '她伸出手，不是拥抱，而是很自然地牵起了你的手。十指相扣。对林晚来说，这比说一百次"我爱你"更重要。',
          delay: 2500,
          gradient: 'warm',
        },
        {
          type: 'narrator',
          text: '你学会了一件事：爱一个慢热的人，需要耐心、安全感和大量的"我就在这里"。而你做到了。',
          delay: 2000,
          gradient: 'warm',
        },
        {
          type: 'narrator',
          text: '你的关系底色是——用等待融化防线，用安静的陪伴重建信任。',
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
          text: '半年后。你收到了她从维也纳寄来的明信片。',
          emoji: '🌊',
          gradient: 'cool',
        },
        {
          type: 'narrator',
          text: '明信片的正面是维也纳的多瑙河，背面是她的笔迹。依然很小很密。',
          delay: 2000,
        },
        {
          type: 'narrator',
          text: '"这里的冬天很冷，但实验室很暖。我的论文进展很好。偶尔会想起我们在天台喝酒的晚上。你呢？"',
          delay: 2000,
        },
        {
          type: 'narrator',
          text: '你们保持着一种不紧不松的联系。不是每天聊天，但每一次对话都很深。像两颗在不同轨道上运行的星星，偶尔交汇，发出一点光。',
          delay: 2500,
          gradient: 'cool',
        },
        {
          type: 'narrator',
          text: '也许她回来以后，一切会不一样。也许不会。但你学会了一件事：有些关系不需要定义，只需要尊重。',
          delay: 2000,
          gradient: 'cool',
        },
        {
          type: 'narrator',
          text: '你的关系底色是——在独立中保持连接，在距离中感受存在。',
          delay: 2000,
          gradient: 'cool',
        },
      ],
    },
    {
      id: 'regret',
      name: '🌧️ 遗憾',
      emoji: '🌧️',
      condition: 'low security + low expression',
      messages: [
        {
          type: 'scene',
          text: '三个月后。你在图书馆四楼，心理学那一排书架前。',
          emoji: '🌧️',
          gradient: 'bittersweet',
        },
        {
          type: 'narrator',
          text: '那本《依恋与失去》还在老位置。你抽出来翻了翻，空白页上的铅笔批注已经被擦掉了。',
          delay: 2000,
        },
        {
          type: 'narrator',
          text: '她走之前没有把日记本给你。你也没有问她要。两个人都在等对方先迈出那一步，结果谁都没有动。',
          delay: 2500,
        },
        {
          type: 'narrator',
          text: '她的微信头像换了，不再是月亮。你们的对话停在两个月前的一个"嗯"字上。你不确定那个"嗯"是句号还是省略号。',
          delay: 2500,
          gradient: 'bittersweet',
        },
        {
          type: 'narrator',
          text: '有些人就像一本你差一点读完的书。合上的那一刻，你才意识到——最好的部分就在下一页。',
          delay: 2000,
          gradient: 'bittersweet',
        },
        {
          type: 'narrator',
          text: '你的关系底色是——在沉默中错过，在未说出口的话里，藏着另一种可能。',
          delay: 2000,
          gradient: 'bittersweet',
        },
      ],
    },
    {
      id: 'rebirth',
      name: '🌱 重生',
      emoji: '🌱',
      condition: 'high growth + balanced dimensions',
      messages: [
        {
          type: 'scene',
          text: '四个月后。你在一个新的城市，一份新的工作。',
          emoji: '🌱',
          gradient: 'hopeful',
        },
        {
          type: 'narrator',
          text: '和林晚的故事让你明白了一件很重要的事：爱一个人不是破解一道密码，而是学会在不确定中保持安心。',
          delay: 2000,
        },
        {
          type: 'narrator',
          text: '你买了一个日记本，开始每天写一些东西。不是给谁看的，是给自己的。你理解了她为什么要写日记——有些话，写下来就不会消失。',
          delay: 2500,
        },
        {
          type: 'narrator',
          text: '有一天你在翻旧照片的时候，看到一张在操场上拍的星空。你记得那个晚上，她靠在你肩膀上。你记得星星很亮。',
          delay: 2500,
        },
        {
          type: 'narrator',
          text: '你在日记本上写："谢谢你教会我，\'慢\'不是问题。\'不说\'不代表\'不想\'。真正的安全感，从来不是靠确认，是靠理解。"',
          delay: 2500,
          gradient: 'hopeful',
        },
        {
          type: 'narrator',
          text: '你的关系底色是——因为曾经耐心地等一个人，你学会了如何温柔地对待自己。',
          delay: 2000,
          gradient: 'hopeful',
        },
        {
          type: 'narrator',
          text: '翻到日记本的最后一页，你发现有人用铅笔写了一行很小的字：\n"第一章：等你回来。——来自一个正在学习勇敢的人"',
          delay: 2500,
          gradient: 'hopeful',
        },
      ],
    },
  ],
}

export default STORY
export { CHARACTER }
