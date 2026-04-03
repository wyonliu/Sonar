// ============================================================
// Sonar - 叶知秋 (Yè Zhīqiū) Character Story
// 文艺摄影师 - Freelance Photographer
// ============================================================

import { Character, CharacterStory, StoryMessageData, ChoicePointData, ActData, Ending } from './characters'

const CHARACTER: Character = {
  id: 'yezhiqiu',
  name: '叶知秋',
  subtitle: '文艺摄影师',
  description: '自由职业摄影师，敏感细腻，用镜头捕捉别人忽略的美。总觉得自己在观察生活而非参与其中。',
  emoji: '📸',
  gender: 'female',
  color: 'from-violet-900 to-purple-900',
  avatar_emoji: '🦋',
  quote: '等一下，这个光线太好了',
}

const STORY: CharacterStory = {
  character: CHARACTER,
  acts: [
    // ==================== ACT 1: 相遇 ====================
    {
      id: 1,
      title: '相遇',
      subtitle: '取景框之外',
      emoji: '🌇',
      gradient: 'from-slate-900/50 to-violet-900/50',
      choice_points: [
        // --- Choice Point 1_1: First encounter ---
        {
          id: 'yezhiqiu_1_1',
          messages_before: [
            { type: 'chapter_title', text: '第一章 · 相遇', emoji: '🌇', gradient: 'warm' },
            {
              type: 'scene',
              text: '傍晚六点。城市边缘的一条废弃铁轨。夕阳把锈迹斑斑的铁轨染成金色，杂草在风里轻轻摇晃。',
              emoji: '🌇',
              gradient: 'warm',
            },
            {
              type: 'narrator',
              text: '你一个人在这里散步，想清静一下。远远地看到一个女生蹲在铁轨旁边，举着相机对着一朵长在枕木缝隙里的野花拍照。',
              delay: 1800,
            },
            {
              type: 'narrator',
              text: '她穿着一件宽大的亚麻衬衫，头发随意地扎着。你走过去的时候不小心踩到了碎石，她猛地回头。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '等一下——别动！',
              partnerEmotion: 'neutral',
              delay: 800,
            },
            {
              type: 'narrator',
              text: '她举起相机对着你按了一下快门。然后放下相机，有点不好意思地笑了。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '抱歉……你身后的光实在太好了。逆光的轮廓很好看。不介意吧？',
              partnerEmotion: 'shy',
              delay: 2000,
            },
          ],
          choices: [
            {
              id: 'yezhiqiu_1_1_a',
              text: '"没关系，如果拍得好看的话，可以发给我吗？"',
              emoji: '😊',
              scores: { intimacy_pace: 4, expression_intensity: 3, security_baseline: 3 },
              affinity_change: 5,
              trait_unlock: {
                name: '顺势而为',
                description: '你擅长把意外变成缘分，自然而然地靠近他人',
                emoji: '🍃',
              },
            },
            {
              id: 'yezhiqiu_1_1_b',
              text: '"你拍什么呢？"——走过去看她的相机屏幕',
              emoji: '📷',
              scores: { intimacy_pace: 3, growth_orientation: 3, expression_intensity: 2 },
              affinity_change: 6,
            },
            {
              id: 'yezhiqiu_1_1_c',
              text: '"下次拍之前先说一声吧。"——虽然语气平淡，但你确实有点在意',
              emoji: '🤨',
              scores: { autonomy_need: 4, conflict_style: 3, security_baseline: -2, expression_intensity: 2 },
              affinity_change: 0,
            },
            {
              id: 'yezhiqiu_1_1_d',
              text: '摆个夸张的pose："这个角度好看吗？"——逗她开心',
              emoji: '🤪',
              scores: { expression_intensity: 5, intimacy_pace: 5, security_baseline: 2, autonomy_need: -2 },
              affinity_change: 4,
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '她笑了起来，笑的时候眼睛弯成两道月牙。',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '你是第一个没觉得我奇怪的人。大部分人看到有人蹲在铁轨边上拍野花都会绕着走。',
              partnerEmotion: 'happy',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '我叫叶知秋。知道的知，秋天的秋。你呢？',
              partnerEmotion: 'happy',
              delay: 1500,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '嗯……好的，对不起。我以后会注意。',
              partnerEmotion: 'sad',
              delay: 1200,
            },
            {
              type: 'narrator',
              text: '她有点局促地把相机挂回脖子上。好像受惊的猫一样，往后退了半步。',
              delay: 1500,
            },
          ],
        },
        // --- Choice Point 1_2: The photos ---
        {
          id: 'yezhiqiu_1_2',
          messages_before: [
            {
              type: 'narrator',
              text: '你们沿着铁轨走了一段。她一边走一边拍照，有时候会突然停下来对着一片影子、一截断裂的栏杆按快门。',
              delay: 1800,
            },
            {
              type: 'partner',
              text: '你看——这个锈迹的纹路像不像一张地图？',
              partnerEmotion: 'happy',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '她把相机屏幕递到你面前。屏幕上是一个铁栓的特写，锈蚀的花纹确实像某种古老的地图。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '我总觉得所有东西都有自己的故事，只是大部分人没时间停下来听。',
              partnerEmotion: 'neutral',
              delay: 2000,
            },
          ],
          choices: [
            {
              id: 'yezhiqiu_1_2_a',
              text: '"你看世界的方式好特别。我从来没这么看过一个铁栓。"',
              emoji: '✨',
              scores: { expression_intensity: 4, intimacy_pace: 3, growth_orientation: 3 },
              affinity_change: 6,
            },
            {
              id: 'yezhiqiu_1_2_b',
              text: '也试着观察周围的东西，跟她分享你发现的"故事"',
              emoji: '🔍',
              scores: { growth_orientation: 5, intimacy_pace: 3, expression_intensity: 2, autonomy_need: -1 },
              affinity_change: 7,
            },
            {
              id: 'yezhiqiu_1_2_c',
              text: '"好看是好看……但你一个人跑到这种偏僻的地方拍照不危险吗？"',
              emoji: '⚠️',
              scores: { security_baseline: -3, commitment_depth: 3, autonomy_need: -3, expression_intensity: 3 },
              affinity_change: 2,
            },
            {
              id: 'yezhiqiu_1_2_d',
              text: '认真看了照片，但没有特别的感触。诚实地说"我不太懂摄影，但我觉得你很投入"',
              emoji: '🤷',
              scores: { autonomy_need: 3, expression_intensity: -2, security_baseline: 4, conflict_style: 2 },
              affinity_change: 3,
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '她看你的眼神变了——从好奇变成了某种更柔和的东西。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '你知道吗，大部分人会说"哦，挺好看的"然后就滑过去了。但你真的在认真看。',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '我有一个线上摄影展下周开。你……如果有空的话，可以来看看。不来也没关系。',
              partnerEmotion: 'shy',
              delay: 2000,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '嗯……谢谢。很少有人跟我聊这些。',
              partnerEmotion: 'neutral',
              delay: 1200,
            },
            {
              type: 'narrator',
              text: '她又把相机举起来，重新躲到取景框后面。你感觉到她在某个瞬间打开的门，又轻轻关上了。',
              delay: 1800,
            },
          ],
        },
      ],
      closing_messages: [
        {
          type: 'narrator',
          text: '天完全黑了。你们从铁轨走回主路上。她往左，你往右。分开之前她停了一下。',
          gradient: 'romantic',
          delay: 1500,
        },
        {
          type: 'partner',
          text: '今天谢谢你陪我走了这一段。很久没有人愿意跟我一起在这种地方待这么久了。',
          partnerEmotion: 'shy',
          delay: 2000,
        },
        {
          type: 'emoji_reaction',
          reactionContext: '和她分开之后，你心里最大的感觉是',
          reactionOptions: [
            { emoji: '🦋', label: '被她吸引了', scores: { intimacy_pace: 3, expression_intensity: 2 } },
            { emoji: '🤔', label: '她很有意思', scores: { growth_orientation: 3, autonomy_need: 1 } },
            { emoji: '😌', label: '很舒服的相处', scores: { security_baseline: 3, commitment_depth: 1 } },
            { emoji: '📸', label: '想看她更多的照片', scores: { intimacy_pace: 2, growth_orientation: 2 } },
          ],
        },
        {
          type: 'quick_swipe',
          swipeStatement: '你觉得她身上有一种你生活中缺少的东西',
          agreeScores: { growth_orientation: 3, intimacy_pace: 2 },
          disagreeScores: { autonomy_need: 2, security_baseline: 2 },
        },
        {
          type: 'narrator',
          text: '回家之后你打开她发来的那张照片——逆光中你的剪影。说不清为什么，你觉得那个轮廓比镜子里的自己更真实。',
          gradient: 'romantic',
          delay: 2000,
        },
      ],
    },

    // ==================== ACT 2: 心动 ====================
    {
      id: 2,
      title: '心动',
      subtitle: '镜头内外',
      emoji: '🌸',
      gradient: 'from-violet-900/50 to-rose-900/50',
      choice_points: [
        // --- Choice Point 2_1: The online exhibition ---
        {
          id: 'yezhiqiu_2_1',
          messages_before: [
            { type: 'chapter_title', text: '第二章 · 心动', emoji: '🌸', gradient: 'romantic' },
            {
              type: 'scene',
              text: '一周后。你去了她的线上摄影展——一个小众的艺术平台，主题叫"看不见的城市"。',
              emoji: '🖼️',
              gradient: 'cool',
            },
            {
              type: 'narrator',
              text: '所有照片都是城市角落的细节：裂缝里长出的草、深夜路灯下空荡荡的长椅、雨后水洼里倒映的天空。每张照片旁边都有一段很短的文字。',
              delay: 2000,
            },
            {
              type: 'narrator',
              text: '其中一张是一个人在便利店门口低头看手机。文字写着："每个人都有一个回不去的凌晨。"',
              delay: 1800,
            },
            {
              type: 'partner',
              text: '你来了啊。怎么样？别敷衍我，我受得了真话。',
              partnerEmotion: 'shy',
              delay: 1500,
            },
          ],
          choices: [
            {
              id: 'yezhiqiu_2_1_a',
              text: '"那张便利店的照片让我想到了自己。你怎么能把孤独拍得这么美？"',
              emoji: '💫',
              scores: { expression_intensity: 5, intimacy_pace: 4, growth_orientation: 3 },
              affinity_change: 7,
              trait_unlock: {
                name: '共鸣体质',
                description: '你能从艺术中看到情感，并且不吝于表达出来',
                emoji: '🎵',
              },
            },
            {
              id: 'yezhiqiu_2_1_b',
              text: '"说实话我不太懂摄影，但我能感受到你想表达的那种……安静的忧伤。"',
              emoji: '🌊',
              scores: { expression_intensity: 3, security_baseline: 3, autonomy_need: 2, growth_orientation: 2 },
              affinity_change: 5,
            },
            {
              id: 'yezhiqiu_2_1_c',
              text: '"都很好看。你考虑过做更商业化的方向吗？这种才华应该让更多人看到。"',
              emoji: '💼',
              scores: { growth_orientation: -2, autonomy_need: 3, conflict_style: 3, commitment_depth: 2 },
              affinity_change: 0,
            },
            {
              id: 'yezhiqiu_2_1_d',
              text: '把自己最喜欢的三张照片截图发给她，附上每张的感受——用行动代替评价',
              emoji: '📱',
              scores: { intimacy_pace: 3, expression_intensity: 4, growth_orientation: 4, commitment_depth: 2 },
              affinity_change: 6,
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '电话那头安静了几秒。你听到她深吸了一口气。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '……你知道这个展览一共有几个人看过吗？加上你，十三个。',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '但你是第一个让我觉得"被看见了"的人。不是看见照片，是看见……我想说的话。',
              partnerEmotion: 'shy',
              delay: 2500,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '嗯，谢谢你来看。',
              partnerEmotion: 'distant',
              delay: 1000,
            },
            {
              type: 'narrator',
              text: '她的回复很简短。你感觉到，她刚才那句"别敷衍我"不是客套话——她是真的在测试你是否认真。',
              delay: 2000,
            },
          ],
        },
        // --- Choice Point 2_2: The midnight walk ---
        {
          id: 'yezhiqiu_2_2',
          messages_before: [
            {
              type: 'scene',
              text: '某个周末的深夜。她突然给你发消息：今晚的月亮好圆，要不要出来走走？',
              emoji: '🌕',
              gradient: 'romantic',
            },
            {
              type: 'narrator',
              text: '你看了一下时间——晚上十一点四十。明天还要上班。',
              delay: 1200,
            },
            {
              type: 'narrator',
              text: '但你想起她说过的话——"大部分人没时间停下来听"。也许她需要的是一个愿意停下来的人。',
              delay: 1800,
            },
            {
              type: 'partner',
              text: '不方便的话就算了。我只是……今晚有点睡不着。',
              partnerEmotion: 'vulnerable',
              delay: 1500,
            },
          ],
          choices: [
            {
              id: 'yezhiqiu_2_2_a',
              text: '换衣服出门。有些夜晚只有一次。',
              emoji: '🚶',
              scores: { intimacy_pace: 5, commitment_depth: 3, autonomy_need: -3, expression_intensity: 2 },
              affinity_change: 7,
            },
            {
              id: 'yezhiqiu_2_2_b',
              text: '"出来可以，但别走太远。明天我还得上班，你也要注意安全。"',
              emoji: '🕐',
              scores: { security_baseline: 2, commitment_depth: 3, autonomy_need: 2, intimacy_pace: 2 },
              affinity_change: 4,
            },
            {
              id: 'yezhiqiu_2_2_c',
              text: '"太晚了，我们可以视频聊天吗？看月亮的话，阳台上也可以看到。"',
              emoji: '📹',
              scores: { autonomy_need: 4, security_baseline: 3, intimacy_pace: -2, expression_intensity: 2 },
              affinity_change: 3,
            },
            {
              id: 'yezhiqiu_2_2_d',
              text: '"你经常半夜出去走吗？一个人的话不安全吧……"',
              emoji: '😟',
              scores: { security_baseline: -3, commitment_depth: 3, autonomy_need: -4, conflict_style: 2 },
              affinity_change: 1,
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '你在小区门口见到她的时候，她手里抱着相机，头发披散着。月光下她的轮廓像一幅水墨画。',
              delay: 1800,
            },
            {
              type: 'partner',
              text: '你真的来了。我还以为你会说太晚了改天吧。',
              partnerEmotion: 'happy',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '你知道吗，我最怕的不是一个人，而是在最想分享的时刻身边没有人。',
              partnerEmotion: 'vulnerable',
              delay: 2200,
            },
            {
              type: 'narrator',
              text: '她说这话的时候没有看你，而是看着月亮。但你知道这句话是说给你听的。',
              delay: 1800,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '也对，太晚了。那……晚安。',
              partnerEmotion: 'sad',
              delay: 1200,
            },
            {
              type: 'narrator',
              text: '消息发出去之后，她没有再回复。你看了看窗外——月亮确实很圆。',
              delay: 1800,
            },
          ],
        },
      ],
      closing_messages: [
        {
          type: 'narrator',
          text: '那天晚上你们在河边走了很久。她拍了很多照片——月光下的水面、桥上的路灯、你的侧脸。',
          gradient: 'romantic',
          delay: 1500,
        },
        {
          type: 'partner',
          text: '有你在的时候，我拍出来的照片好像都不太一样了。更暖一点。',
          partnerEmotion: 'shy',
          delay: 1800,
        },
        {
          type: 'emoji_reaction',
          reactionContext: '她说"更暖一点"的时候，你的反应是',
          reactionOptions: [
            { emoji: '💓', label: '心动了', scores: { intimacy_pace: 3, expression_intensity: 2 } },
            { emoji: '🥹', label: '被触动了', scores: { commitment_depth: 2, security_baseline: 2 } },
            { emoji: '😊', label: '觉得很自然', scores: { security_baseline: 3, autonomy_need: 1 } },
            { emoji: '🌙', label: '想陪她更久', scores: { intimacy_pace: 3, commitment_depth: 3 } },
          ],
        },
        {
          type: 'quick_swipe',
          swipeStatement: '你愿意为了一个人的深夜邀约打乱自己的生活节奏',
          agreeScores: { intimacy_pace: 3, commitment_depth: 2 },
          disagreeScores: { autonomy_need: 3, security_baseline: 2 },
        },
        {
          type: 'narrator',
          text: '凌晨两点回到家，你发现她把今晚拍的照片发了一组朋友圈。配文只有一个字："暖。"',
          gradient: 'romantic',
          delay: 2000,
        },
      ],
    },

    // ==================== ACT 3: 走近 ====================
    {
      id: 3,
      title: '走近',
      subtitle: '暗房与明亮',
      emoji: '🎞️',
      gradient: 'from-purple-900/50 to-indigo-900/50',
      choice_points: [
        // --- Choice Point 3_1: Her studio ---
        {
          id: 'yezhiqiu_3_1',
          messages_before: [
            { type: 'chapter_title', text: '第三章 · 走近', emoji: '🎞️', gradient: 'warm' },
            {
              type: 'scene',
              text: '一个阳光很好的下午。她邀请你去她的工作室——一个老小区顶楼改造的Loft。',
              emoji: '🏠',
              gradient: 'warm',
            },
            {
              type: 'narrator',
              text: '推门进去的瞬间，你被满墙的照片震住了。从地板到天花板，贴满了各种尺寸的黑白和彩色照片。角落里有一台老式胶片冲洗设备。',
              delay: 2000,
            },
            {
              type: 'narrator',
              text: '她的生活就在这些照片中间——桌上散落着咖啡杯、几本摄影集、一些手写的便签。窗边有一把旧吉他。',
              delay: 1800,
            },
            {
              type: 'partner',
              text: '这就是我的全部了。工作的地方，生活的地方，胡思乱想的地方。有点乱，别嫌弃。',
              partnerEmotion: 'shy',
              delay: 1800,
            },
          ],
          choices: [
            {
              id: 'yezhiqiu_3_1_a',
              text: '一张一张认真看墙上的照片，问她每张背后的故事',
              emoji: '👀',
              scores: { intimacy_pace: 4, growth_orientation: 4, expression_intensity: 2, commitment_depth: 2 },
              affinity_change: 6,
            },
            {
              id: 'yezhiqiu_3_1_b',
              text: '"我喜欢这里。它很像你——有点混乱，但充满生命力。"',
              emoji: '🌿',
              scores: { expression_intensity: 5, intimacy_pace: 4, security_baseline: 2 },
              affinity_change: 5,
            },
            {
              id: 'yezhiqiu_3_1_c',
              text: '注意到窗台上的吉他，问她"你还会弹吉他？"',
              emoji: '🎸',
              scores: { growth_orientation: 3, intimacy_pace: 2, autonomy_need: 2, expression_intensity: 1 },
              affinity_change: 4,
              trait_unlock: {
                name: '细节猎手',
                description: '你关注那些被忽略的角落，往往在那里找到真正的故事',
                emoji: '🔎',
              },
            },
            {
              id: 'yezhiqiu_3_1_d',
              text: '"你一个人住在这里？平时不会觉得孤独吗？"',
              emoji: '🏚️',
              scores: { intimacy_pace: 3, security_baseline: -2, commitment_depth: 3, autonomy_need: -3 },
              affinity_change: 2,
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '她靠在满是照片的墙上，阳光从天窗照下来，在她脸上画出光斑。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '很少有人来这里。我一直觉得……让别人看到这些会很不好意思。',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '但你来了之后，我觉得这个房间好像变大了一点。',
              partnerEmotion: 'happy',
              delay: 1800,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '不会啊，我习惯了一个人。而且有这些照片陪着我。',
              partnerEmotion: 'neutral',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '她说"不会"的时候笑了一下。但你注意到那个笑容没有到达眼睛。',
              delay: 1500,
            },
          ],
        },
        // --- Choice Point 3_2: Developing photos together ---
        {
          id: 'yezhiqiu_3_2',
          messages_before: [
            {
              type: 'scene',
              text: '她带你进了暗房——一个只有红色安全灯的小房间。空气里有化学药水的味道。',
              emoji: '🔴',
              gradient: 'romantic',
            },
            {
              type: 'partner',
              text: '来，我教你冲洗胶片。这是我最喜欢的过程——等待影像慢慢浮现。就像……等一个人慢慢走近你。',
              partnerEmotion: 'happy',
              delay: 2000,
            },
            {
              type: 'narrator',
              text: '红色的光把一切都笼上了一层暧昧的色调。她站在你旁边，手把手地教你把相纸放进显影液。',
              delay: 1800,
            },
            {
              type: 'narrator',
              text: '你能闻到她身上淡淡的洗衣液味道，混着化学药水，奇怪地让人安心。',
              delay: 1500,
            },
          ],
          choices: [
            {
              id: 'yezhiqiu_3_2_a',
              text: '安静地跟着她的步骤，认真学习每一个环节。她的世界值得你了解。',
              emoji: '📝',
              scores: { growth_orientation: 5, intimacy_pace: 3, autonomy_need: -2, commitment_depth: 3 },
              affinity_change: 5,
            },
            {
              id: 'yezhiqiu_3_2_b',
              text: '"你刚才说等影像浮现像等一个人走近……你在等谁？"',
              emoji: '💭',
              scores: { expression_intensity: 5, intimacy_pace: 5, conflict_style: 3, security_baseline: -1 },
              affinity_change: 5,
            },
            {
              id: 'yezhiqiu_3_2_c',
              text: '趁着暗房的暧昧氛围，轻轻握住她教你的那只手',
              emoji: '🤝',
              scores: { intimacy_pace: 7, expression_intensity: 4, security_baseline: -2, autonomy_need: -3 },
              affinity_change: 6,
            },
            {
              id: 'yezhiqiu_3_2_d',
              text: '"这种慢节奏的事情现在很少见了。我觉得你活得比大部分人都清醒。"',
              emoji: '🧘',
              scores: { autonomy_need: 3, security_baseline: 4, growth_orientation: 3, expression_intensity: 2 },
              affinity_change: 4,
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '红色的光里，你看到她的睫毛轻轻颤了一下。',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '你知道吗……我一直觉得自己是在隔着镜头观察生活的人。',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '但跟你在一起的时候，我想放下相机。用自己的眼睛看。',
              partnerEmotion: 'loving',
              delay: 2200,
            },
          ],
          response_low: [
            {
              type: 'narrator',
              text: '她低下头看着显影液里慢慢浮现的影像。没有接你的话。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '……影像出来了。你看。',
              partnerEmotion: 'neutral',
              delay: 1200,
            },
          ],
        },
        // --- Choice Point 3_3: Her vulnerability ---
        {
          id: 'yezhiqiu_3_3',
          messages_before: [
            {
              type: 'scene',
              text: '从暗房出来，你们坐在窗边喝茶。夕阳把整个Loft染成了金色。',
              emoji: '☕',
              gradient: 'warm',
            },
            {
              type: 'narrator',
              text: '她翻到手机相册里一张旧照片——一个男人的背影。她看了几秒，然后快速滑过去了。但你看到了。',
              delay: 1800,
            },
            {
              type: 'partner',
              text: '前任。一年前分的。他说我太"活在自己的世界里"。',
              partnerEmotion: 'sad',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '也许他说得没错。我确实……不太会"参与"生活。',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
          ],
          choices: [
            {
              id: 'yezhiqiu_3_3_a',
              text: '"他不懂你。观察生活也是一种参与——只是方式不同。"',
              emoji: '🛡️',
              scores: { expression_intensity: 4, security_baseline: 3, autonomy_need: 3, intimacy_pace: 2 },
              affinity_change: 5,
            },
            {
              id: 'yezhiqiu_3_3_b',
              text: '"你觉得他说得对吗？你自己怎么看？"——你想听她的真实想法',
              emoji: '🪞',
              scores: { growth_orientation: 5, expression_intensity: 2, conflict_style: 3, security_baseline: 2 },
              affinity_change: 4,
            },
            {
              id: 'yezhiqiu_3_3_c',
              text: '不接这个话题。她也许还没准备好。"这个茶很好喝，叫什么？"',
              emoji: '🍵',
              scores: { autonomy_need: 4, security_baseline: 4, expression_intensity: -4, conflict_style: -3 },
              affinity_change: 1,
            },
            {
              id: 'yezhiqiu_3_3_d',
              text: '"每段关系都是一面镜子。他让你看到了什么，比他对不对更重要。"',
              emoji: '💎',
              scores: { growth_orientation: 6, expression_intensity: 4, commitment_depth: 2, intimacy_pace: 3 },
              affinity_change: 6,
              trait_unlock: {
                name: '洞察之眼',
                description: '你能在他人的伤痕中看到成长的可能，而不是简单地否定或附和',
                emoji: '🔮',
              },
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '她端着茶杯的手停在半空中。然后放下杯子，直直地看着你。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '你说的话……我想了很久都没有想通的事情，你用一句话就说清楚了。',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '我有点害怕。因为被看透的感觉，又舒服又不安。',
              partnerEmotion: 'shy',
              delay: 2000,
            },
          ],
          response_low: [
            {
              type: 'narrator',
              text: '她的目光飘向窗外。过了一会儿才轻声说：',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '嗯……也许吧。不说这个了。',
              partnerEmotion: 'distant',
              delay: 1200,
            },
          ],
        },
      ],
      closing_messages: [
        {
          type: 'narrator',
          text: '你离开她的工作室的时候，发现门口多了一张便签。上面画了一只猫，旁边写着："谢谢你来我的世界坐了一会儿。"',
          gradient: 'romantic',
          delay: 2000,
        },
        {
          type: 'partner',
          text: '便签看到了吗？别丢。',
          partnerEmotion: 'shy',
          delay: 1200,
        },
        {
          type: 'emoji_reaction',
          reactionContext: '她用这种方式表达感情，你觉得',
          reactionOptions: [
            { emoji: '🥰', label: '太可爱了', scores: { intimacy_pace: 3, expression_intensity: 2 } },
            { emoji: '🤔', label: '为什么不直接说', scores: { expression_intensity: 3, conflict_style: 2 } },
            { emoji: '💕', label: '这就是她的方式', scores: { security_baseline: 3, autonomy_need: 2 } },
            { emoji: '😢', label: '有点心疼', scores: { commitment_depth: 3, intimacy_pace: 2 } },
          ],
        },
        {
          type: 'quick_swipe',
          swipeStatement: '你觉得比起直接说"我喜欢你"，她的方式更动人',
          agreeScores: { security_baseline: 2, autonomy_need: 2 },
          disagreeScores: { expression_intensity: 3, conflict_style: 2 },
        },
        {
          type: 'narrator',
          text: '那天晚上你把便签小心地夹在了书里。上面有一股淡淡的暗房药水味。',
          gradient: 'warm',
          delay: 1800,
        },
      ],
    },

    // ==================== ACT 4: 摩擦 ====================
    {
      id: 4,
      title: '摩擦',
      subtitle: '失焦与对焦',
      emoji: '🌧️',
      gradient: 'from-gray-900/50 to-violet-900/50',
      choice_points: [
        // --- Choice Point 4_1: She cancels plans ---
        {
          id: 'yezhiqiu_4_1',
          messages_before: [
            { type: 'chapter_title', text: '第四章 · 摩擦', emoji: '🌧️', gradient: 'tense' },
            {
              type: 'scene',
              text: '周六。你们约好了一起去看一个画展。但她前一天晚上突然发消息说不想去了。',
              emoji: '🖼️',
              gradient: 'tense',
            },
            {
              type: 'partner',
              text: '明天能不能不去了？我今天状态不太好。不想见人。',
              partnerEmotion: 'sad',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '这已经不是第一次了。你注意到她有一种周期性的"低潮期"——会突然变得很沉默，不想出门，不想社交。',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '不是因为你。是我自己的问题。对不起。',
              partnerEmotion: 'vulnerable',
              delay: 1800,
            },
          ],
          choices: [
            {
              id: 'yezhiqiu_4_1_a',
              text: '"没关系，不想出门就不出门。我可以来找你，或者你想一个人待也行。你决定。"',
              emoji: '🤗',
              scores: { security_baseline: 5, autonomy_need: 3, commitment_depth: 3, expression_intensity: -1 },
              affinity_change: 5,
            },
            {
              id: 'yezhiqiu_4_1_b',
              text: '"你经常这样吗？我有点担心你。你有没有考虑过跟专业的人聊聊？"',
              emoji: '🧠',
              scores: { growth_orientation: 5, conflict_style: 3, intimacy_pace: -2, autonomy_need: -2 },
              affinity_change: 1,
            },
            {
              id: 'yezhiqiu_4_1_c',
              text: '"好的，那改天再约。你好好休息。"——给她空间，不追问',
              emoji: '🌿',
              scores: { autonomy_need: 5, security_baseline: 3, expression_intensity: -3, intimacy_pace: -2 },
              affinity_change: 3,
            },
            {
              id: 'yezhiqiu_4_1_d',
              text: '"你可以不想见别人，但我不是别人。至少让我了解你在经历什么。"',
              emoji: '❤️',
              scores: { expression_intensity: 6, intimacy_pace: 5, conflict_style: 4, security_baseline: -2 },
              affinity_change: 4,
              trait_unlock: {
                name: '穿越壁垒',
                description: '你不接受被推开，因为你知道有些人越需要陪伴越习惯推开人',
                emoji: '🚪',
              },
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '她很久没回消息。你以为她不想聊了。但十分钟后：',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '……你可以来吗？不用说话。就待着就好。',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '带一杯热可可好吗？谢谢你。',
              partnerEmotion: 'sad',
              delay: 1500,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '嗯，谢谢。',
              partnerEmotion: 'distant',
              delay: 1000,
            },
            {
              type: 'narrator',
              text: '两个字的回复。你盯着屏幕，不知道该再说什么。有些人的壳太硬了，你不确定自己是不是那个能敲开的人。',
              delay: 2000,
            },
          ],
        },
        // --- Choice Point 4_2: The argument about life choices ---
        {
          id: 'yezhiqiu_4_2',
          messages_before: [
            {
              type: 'scene',
              text: '一次吃饭的时候，你随口提起你的一个朋友最近跳槽涨薪了。她突然变得沉默。',
              emoji: '🍽️',
              gradient: 'tense',
            },
            {
              type: 'narrator',
              text: '你没在意，继续说着。但你注意到她一直在机械地戳着盘子里的沙拉，一口都没吃。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '你是不是觉得……像我这样的人挺没用的？自由职业，收入不稳定，没有五险一金。',
              partnerEmotion: 'sad',
              delay: 2000,
            },
            {
              type: 'narrator',
              text: '她的声音很轻，但你能听出里面的刺——不是刺你，是刺自己。',
              delay: 1500,
            },
          ],
          choices: [
            {
              id: 'yezhiqiu_4_2_a',
              text: '"我不是那个意思。你的才华不能用收入来衡量。"——赶紧澄清',
              emoji: '🙅',
              scores: { expression_intensity: 3, security_baseline: 2, conflict_style: -2, commitment_depth: 3 },
              affinity_change: 3,
            },
            {
              id: 'yezhiqiu_4_2_b',
              text: '"你这是在用别人的标准来评判自己。你觉得你没用吗？"——把问题还给她',
              emoji: '🪞',
              scores: { growth_orientation: 5, conflict_style: 4, expression_intensity: 3, security_baseline: -1 },
              affinity_change: 2,
            },
            {
              id: 'yezhiqiu_4_2_c',
              text: '"说实话我确实有时候会担心。但不是觉得你没用，是担心你的生活保障。"',
              emoji: '💬',
              scores: { expression_intensity: 5, conflict_style: 5, commitment_depth: 4, security_baseline: -3 },
              affinity_change: 3,
            },
            {
              id: 'yezhiqiu_4_2_d',
              text: '放下筷子，安静地看着她。等她说完。有时候最好的回应是不急着回应。',
              emoji: '👂',
              scores: { autonomy_need: 3, security_baseline: 4, expression_intensity: -3, conflict_style: -2 },
              affinity_change: 4,
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '她抬起头看你。眼眶有一点红。',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '我知道你不是那个意思。但我有时候真的很焦虑。大家都在往前走，我好像一直在原地打转。',
              partnerEmotion: 'vulnerable',
              delay: 2200,
            },
            {
              type: 'partner',
              text: '谢谢你没有敷衍我说"不会啊你很棒"。你认真对待了我的担心。',
              partnerEmotion: 'sad',
              delay: 2000,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '算了，别聊这个了。我买单吧。',
              partnerEmotion: 'distant',
              delay: 1200,
            },
            {
              type: 'narrator',
              text: '她站起来去结账。你看着她的背影，觉得你们之间好像隔了一层很薄但很坚硬的玻璃。',
              delay: 2000,
            },
          ],
        },
        // --- Choice Point 4_3: The disappearing act ---
        {
          id: 'yezhiqiu_4_3',
          messages_before: [
            {
              type: 'scene',
              text: '连续三天。她没有回你的任何消息。朋友圈也没有更新。电话打不通。',
              emoji: '📵',
              gradient: 'tense',
            },
            {
              type: 'narrator',
              text: '你开始有点慌了。是你上次说了什么不该说的话？还是她又进入了"低潮期"？',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '第四天早上，她突然发来一条消息。',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '对不起，这几天一个人去了大理。临时决定的。需要一个人待一待。现在在洱海边。',
              partnerEmotion: 'neutral',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '我知道这样很不好。但我不知道怎么解释。有时候我就是需要消失一阵子。',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
          ],
          choices: [
            {
              id: 'yezhiqiu_4_3_a',
              text: '"你需要自己的空间我理解。但至少告诉我一声你是安全的。这三天我真的很担心。"',
              emoji: '😰',
              scores: { expression_intensity: 5, conflict_style: 3, security_baseline: -2, commitment_depth: 4 },
              affinity_change: 4,
            },
            {
              id: 'yezhiqiu_4_3_b',
              text: '"大理好不好？拍了什么好看的照片吗？"——你选择先接住她，之后再谈',
              emoji: '🏔️',
              scores: { security_baseline: 4, autonomy_need: 3, expression_intensity: -3, conflict_style: -3 },
              affinity_change: 5,
            },
            {
              id: 'yezhiqiu_4_3_c',
              text: '"我们需要聊一下。不是现在，等你回来。这样突然消失我没办法接受。"',
              emoji: '📋',
              scores: { conflict_style: 5, growth_orientation: 4, expression_intensity: 4, commitment_depth: 3 },
              affinity_change: 2,
            },
            {
              id: 'yezhiqiu_4_3_d',
              text: '"你开心就好。只是下次出发之前，能不能给我发一条消息？就一条就够了。"',
              emoji: '💌',
              scores: { security_baseline: 3, commitment_depth: 4, expression_intensity: 3, autonomy_need: 2 },
              affinity_change: 6,
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '她沉默了一会儿。然后发来一张照片——洱海边的日出，天空是一片橘红色的渐变。',
              delay: 1800,
            },
            {
              type: 'partner',
              text: '你说得对。我总是在逃跑——从人群里逃，从关系里逃，从自己的情绪里逃。',
              partnerEmotion: 'vulnerable',
              delay: 2200,
            },
            {
              type: 'partner',
              text: '但你是第一个让我想回去的人。',
              partnerEmotion: 'loving',
              delay: 2000,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '嗯，我知道了。',
              partnerEmotion: 'distant',
              delay: 1000,
            },
            {
              type: 'narrator',
              text: '你不知道她到底知道了什么。也许在她的世界里，自由比任何关系都重要。而你不确定自己能不能接受这一点。',
              delay: 2200,
            },
          ],
        },
      ],
      closing_messages: [
        {
          type: 'narrator',
          text: '她从大理回来的时候给你带了一条手编的手绳。红色和蓝色交织在一起，编得有点歪歪扭扭。',
          gradient: 'bittersweet',
          delay: 1800,
        },
        {
          type: 'partner',
          text: '在洱海边一个老奶奶那里学的。编了三条才编出一条能看的。另外两条丢在路上了。',
          partnerEmotion: 'shy',
          delay: 2000,
        },
        {
          type: 'emoji_reaction',
          reactionContext: '看着她笨拙地把手绳系在你手腕上，你的感受是',
          reactionOptions: [
            { emoji: '🥹', label: '她在努力', scores: { commitment_depth: 3, security_baseline: 2 } },
            { emoji: '💕', label: '被治愈了', scores: { intimacy_pace: 3, expression_intensity: 2 } },
            { emoji: '😔', label: '不确定这够不够', scores: { security_baseline: -2, conflict_style: 2 } },
            { emoji: '🌈', label: '还是喜欢她', scores: { commitment_depth: 3, growth_orientation: 2 } },
          ],
        },
        {
          type: 'quick_swipe',
          swipeStatement: '你能接受一个需要"消失"来充电的伴侣',
          agreeScores: { autonomy_need: 3, security_baseline: 3 },
          disagreeScores: { commitment_depth: 2, expression_intensity: 3 },
        },
        {
          type: 'narrator',
          text: '她走了之后，你低头看了看手腕上的手绳。有一个结打得特别紧，像是她在编的时候用了太大的力。',
          gradient: 'bittersweet',
          delay: 2000,
        },
      ],
    },

    // ==================== ACT 5: 抉择 ====================
    {
      id: 5,
      title: '抉择',
      subtitle: '最后一卷胶片',
      emoji: '🎞️',
      gradient: 'from-violet-900/50 to-amber-900/50',
      choice_points: [
        // --- Choice Point 5_1: The exhibition opportunity ---
        {
          id: 'yezhiqiu_5_1',
          messages_before: [
            { type: 'chapter_title', text: '第五章 · 抉择', emoji: '🎞️', gradient: 'hopeful' },
            {
              type: 'scene',
              text: '她收到了一个国际摄影杂志的邀请——去冰岛拍一组长期项目。为期半年。这是她梦寐以求的机会。',
              emoji: '🇮🇸',
              gradient: 'cool',
            },
            {
              type: 'narrator',
              text: '你们坐在铁轨旁——就是第一次见面的那条铁轨。野花还在枕木缝隙里开着，只是换了一种颜色。',
              delay: 1800,
            },
            {
              type: 'partner',
              text: '这是我等了好多年的机会。但去了之后……可能信号很差，联系会很少。',
              partnerEmotion: 'sad',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '我不知道该怎么办。你是我第一个不想逃开的人，但这个机会……我也不想错过。',
              partnerEmotion: 'vulnerable',
              delay: 2500,
            },
          ],
          choices: [
            {
              id: 'yezhiqiu_5_1_a',
              text: '"去吧。你一直在拍别人的故事，该拍属于自己的了。我在这里等你。"',
              emoji: '🌍',
              scores: { commitment_depth: 6, security_baseline: 5, autonomy_need: 4, intimacy_pace: -2 },
              affinity_change: 7,
              trait_unlock: {
                name: '放手的勇气',
                description: '你懂得真正的爱不是占有，而是让对方成为完整的自己',
                emoji: '🕊️',
              },
            },
            {
              id: 'yezhiqiu_5_1_b',
              text: '"半年不联系……说实话我不确定我能做到。但我愿意试试。"',
              emoji: '🌊',
              scores: { expression_intensity: 4, commitment_depth: 3, security_baseline: -2, growth_orientation: 3 },
              affinity_change: 4,
            },
            {
              id: 'yezhiqiu_5_1_c',
              text: '"你能不能不要总是一个人做决定？我们一起想办法好不好？"',
              emoji: '🤝',
              scores: { conflict_style: 4, expression_intensity: 5, commitment_depth: 5, autonomy_need: -4 },
              affinity_change: 3,
            },
            {
              id: 'yezhiqiu_5_1_d',
              text: '"如果你选择留下来是因为我，你以后会后悔的。去做你想做的事。"',
              emoji: '✨',
              scores: { autonomy_need: 6, growth_orientation: 5, commitment_depth: -1, intimacy_pace: -3 },
              affinity_change: 2,
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '她没有说话。只是把相机举起来，拍了一张你的照片——正面的，认真的，不是逆光的剪影。',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '第一次拍你正脸。因为这次我不想只记住你的轮廓。我想记住你的表情。',
              partnerEmotion: 'loving',
              delay: 2500,
            },
            {
              type: 'partner',
              text: '谢谢你没有让我在梦想和你之间做选择。',
              partnerEmotion: 'vulnerable',
              delay: 2000,
            },
          ],
          response_low: [
            {
              type: 'partner',
              text: '嗯。我知道了。',
              partnerEmotion: 'sad',
              delay: 1200,
            },
            {
              type: 'narrator',
              text: '她低头摆弄着相机镜头盖。那是她紧张或者不安的时候的习惯动作。',
              delay: 1800,
            },
          ],
        },
        // --- Choice Point 5_2: The last evening ---
        {
          id: 'yezhiqiu_5_2',
          messages_before: [
            {
              type: 'scene',
              text: '她出发的前一晚。你们在她的工作室里。窗外的城市灯火像另一条银河。',
              emoji: '🌃',
              gradient: 'bittersweet',
            },
            {
              type: 'narrator',
              text: '她把最后一卷胶片装进相机。"最后36张"，她说。"只够拍36个瞬间了。"',
              delay: 1800,
            },
            {
              type: 'partner',
              text: '我想把最后一张拍什么，留给你决定。',
              partnerEmotion: 'loving',
              delay: 1500,
            },
            {
              type: 'narrator',
              text: '她把相机递给你。你拿着它，感受着胶片相机的重量——比你以为的要重得多。就像这段关系一样。',
              delay: 2000,
            },
            {
              type: 'partner',
              text: '拍什么都好。这一张我不看取景框。',
              partnerEmotion: 'shy',
              delay: 1500,
            },
          ],
          choices: [
            {
              id: 'yezhiqiu_5_2_a',
              text: '拍她。认认真真地拍她——不是她的作品，不是她的工作室，就是她这个人。',
              emoji: '📸',
              scores: { intimacy_pace: 5, expression_intensity: 5, commitment_depth: 5, security_baseline: 3 },
              affinity_change: 8,
            },
            {
              id: 'yezhiqiu_5_2_b',
              text: '把相机朝向窗外的夜景："你看——这就是你要离开的城市。但它会一直在这里等你。"',
              emoji: '🌃',
              scores: { security_baseline: 5, commitment_depth: 4, expression_intensity: 3, autonomy_need: 2 },
              affinity_change: 5,
            },
            {
              id: 'yezhiqiu_5_2_c',
              text: '拍你们两个人的合影。用倒计时功能，把相机架在书架上。',
              emoji: '🤳',
              scores: { intimacy_pace: 4, commitment_depth: 4, expression_intensity: 3, growth_orientation: 2 },
              affinity_change: 6,
            },
            {
              id: 'yezhiqiu_5_2_d',
              text: '不拍。把相机还给她说："留一张空白。给冰岛留着。"',
              emoji: '⬜',
              scores: { autonomy_need: 5, growth_orientation: 5, commitment_depth: -2, intimacy_pace: -3 },
              affinity_change: 2,
            },
          ],
          response_high: [
            {
              type: 'narrator',
              text: '快门声在安静的房间里格外清脆。她听到声音之后，睁开了眼睛。',
              delay: 1500,
            },
            {
              type: 'partner',
              text: '你拍到了什么？',
              partnerEmotion: 'shy',
              delay: 1200,
            },
            {
              type: 'narrator',
              text: '你把相机还给她。她看了一眼取景框，然后抬头看你。眼睛里有泪光。',
              delay: 1800,
            },
            {
              type: 'partner',
              text: '我一直在拍别人。原来被拍的感觉是这样的——被看见。被记住。',
              partnerEmotion: 'loving',
              delay: 2500,
            },
          ],
          response_low: [
            {
              type: 'narrator',
              text: '她接过相机，沉默了一会儿。',
              delay: 1200,
            },
            {
              type: 'partner',
              text: '嗯。也好。',
              partnerEmotion: 'neutral',
              delay: 1000,
            },
            {
              type: 'narrator',
              text: '她把相机放回包里。你不确定她是感动还是失望。也许两者兼有。',
              delay: 1800,
            },
          ],
        },
      ],
      closing_messages: [
        {
          type: 'narrator',
          text: '第二天清晨，你送她去机场。她的行李很少——一个背包，三台相机，几件换洗衣服。她的人生好像永远都装在一个背包里。',
          gradient: 'bittersweet',
          delay: 2000,
        },
        {
          type: 'partner',
          text: '我会给你写信的。不是微信，是信。纸的那种。冰岛应该有邮局。',
          partnerEmotion: 'shy',
          delay: 1800,
        },
        {
          type: 'emoji_reaction',
          reactionContext: '看着她走进安检口，你此刻的感受是',
          reactionOptions: [
            { emoji: '😢', label: '舍不得', scores: { intimacy_pace: 3, expression_intensity: 3 } },
            { emoji: '💪', label: '相信她', scores: { security_baseline: 3, commitment_depth: 3 } },
            { emoji: '🌅', label: '新的篇章', scores: { growth_orientation: 3, autonomy_need: 2 } },
            { emoji: '💌', label: '期待她的信', scores: { commitment_depth: 2, intimacy_pace: 2 } },
          ],
        },
        {
          type: 'quick_swipe',
          swipeStatement: '你愿意爱一个永远在路上的人',
          agreeScores: { autonomy_need: 3, commitment_depth: 3 },
          disagreeScores: { security_baseline: 3, intimacy_pace: 2 },
        },
        {
          type: 'narrator',
          text: '两周后你收到了第一封信。信封上贴着冰岛的邮票，里面只有一张照片和一行字："这里的极光，像你笑起来的样子。"',
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
      condition: 'high commitment + high expression',
      messages: [
        {
          type: 'scene',
          text: '六个月后。机场。',
          emoji: '✈️',
          gradient: 'warm',
        },
        {
          type: 'narrator',
          text: '你站在到达大厅。手里攥着她寄来的最后一封信——信上说了航班号和到达时间，还画了一只丑丑的北极狐。',
          delay: 2000,
        },
        {
          type: 'narrator',
          text: '她从人群里走出来的时候，你差点没认出来——皮肤晒黑了，头发剪短了，但眼睛比以前更亮。',
          delay: 1800,
        },
        {
          type: 'partner',
          text: '我回来了。',
          partnerEmotion: 'loving',
          delay: 1200,
        },
        {
          type: 'narrator',
          text: '她没有先拥抱你，而是举起相机拍了一张。然后放下相机说："这次不只是记录了。这次是回来。"',
          delay: 2200,
        },
        {
          type: 'narrator',
          text: '在这段关系里，你展现了一种罕见的能力——你能承受不确定性，给予空间，但从不放弃连接。你没有试图改变她，而是给了她一个值得回来的理由。',
          gradient: 'warm',
          delay: 3000,
        },
        {
          type: 'narrator',
          text: '最好的爱，是让对方自由，同时让她知道——有一个地方，永远为她亮着灯。',
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
          text: '一年后。不同的城市，不同的时区。',
          emoji: '🌍',
          gradient: 'cool',
        },
        {
          type: 'narrator',
          text: '她留在了冰岛，接了更多项目。你也有了自己新的发展。你们的聊天变成了不定期的——有时候一周三封信，有时候一个月没有消息。',
          delay: 2000,
        },
        {
          type: 'partner',
          text: '今天在黑沙滩拍到了一张很喜欢的照片。想到你了。发现"想到你"和"想你"是不一样的——前者更自由。',
          partnerEmotion: 'happy',
          delay: 2200,
        },
        {
          type: 'narrator',
          text: '你看了她的消息笑了一下，然后放下手机继续忙自己的事。不是不在乎，而是你们找到了属于自己的节奏。',
          delay: 1800,
        },
        {
          type: 'narrator',
          text: '在你的关系观里，爱不是一条直线，而是两条时而平行、时而交叉的轨道。你不需要时刻确认对方的存在，因为你知道——就算看不见，她也在某个角落用镜头记录着同一个世界。',
          gradient: 'hopeful',
          delay: 3000,
        },
        {
          type: 'narrator',
          text: '也许有一天你们会重新靠近。也许不会。但这不重要。重要的是，你学会了一种不占有的爱。',
          gradient: 'hopeful',
          delay: 2500,
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
          text: '三个月后。她的工作室。',
          emoji: '🏠',
          gradient: 'bittersweet',
        },
        {
          type: 'narrator',
          text: '你路过她住的那条巷子。Loft的灯没有亮。她已经走了三个月了。',
          delay: 1800,
        },
        {
          type: 'narrator',
          text: '你想起那张贴在门口的便签——画着猫的那张。你当时夹在书里了，但后来搬家的时候弄丢了。就像很多东西一样。',
          delay: 2200,
        },
        {
          type: 'narrator',
          text: '她没有写信来。你也没有主动联系她。你们都在等对方先迈出那一步，结果谁都没有动。',
          delay: 2000,
        },
        {
          type: 'narrator',
          text: '在这段关系里，你和她太像了——都习惯观察而不参与，都害怕先伸出手。两个人都在取景框后面看着对方，却没有人走到镜头前面。',
          gradient: 'bittersweet',
          delay: 3000,
        },
        {
          type: 'narrator',
          text: '有些人错过不是因为不合适，而是因为太小心。但这份遗憾也许会教会你——下一次心动的时候，别再只是看着。走过去。',
          gradient: 'bittersweet',
          delay: 3000,
        },
        {
          type: 'narrator',
          text: '你抬头看了看天。今天的光线很好。但你没有相机。',
          gradient: 'bittersweet',
          delay: 2000,
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
          text: '四个月后。那条废弃的铁轨。',
          emoji: '🛤️',
          gradient: 'hopeful',
        },
        {
          type: 'narrator',
          text: '你一个人走在铁轨上，想清静一下。然后你看到枕木缝隙里那朵野花——它又开了。换了一种颜色，但还是那个位置。',
          delay: 2000,
        },
        {
          type: 'narrator',
          text: '手机震了一下。一个陌生的号码。',
          delay: 1200,
        },
        {
          type: 'partner',
          text: '猜猜我在哪。提示：我面前有一朵花，它长在一个不可能的地方。',
          partnerEmotion: 'happy',
          delay: 1800,
        },
        {
          type: 'narrator',
          text: '你抬起头。远远地，铁轨的另一端，一个剪了短发的女生站在那里。手里举着相机，对着你。',
          delay: 2000,
        },
        {
          type: 'narrator',
          text: '你们的故事不是一条直线。有过走近也有过推开，有过心动也有过逃离。但你身上最珍贵的品质是——即使在混乱中，你也没有停止成长。每一次摩擦都让你更清楚自己想要什么。',
          gradient: 'hopeful',
          delay: 3000,
        },
        {
          type: 'narrator',
          text: '最好的重逢不是回到过去，而是带着更好的自己，走向同一个未来。她按下了快门。这一次，她没有躲在取景框后面。',
          gradient: 'hopeful',
          delay: 3000,
        },
      ],
    },
  ],
}

export default STORY
export { CHARACTER }
