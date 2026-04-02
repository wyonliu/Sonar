# 06 · 技术架构

## 设计原则

1. **AI-First**：每个核心功能都有 AI 参与，不是事后加 AI
2. **Mobile-First**：用户主要在手机上体验，Web 是补充
3. **隐私优先**：关系数据极其敏感，最小化收集，最大化保护
4. **可迭代**：MVP 先跑通核心链路，后续快速迭代

---

## 系统架构总览

```
┌─────────────────────────────────────────────────────┐
│                    客户端层                           │
│  React Native App (iOS/Android)  Next.js Web         │
└─────────────────────┬───────────────────────────────┘
                      │ HTTPS / WebSocket
┌─────────────────────▼───────────────────────────────┐
│                   API 网关层                          │
│         Nginx + Rate Limiting + Auth JWT              │
└──────┬──────────────┬──────────────┬────────────────┘
       │              │              │
┌──────▼──────┐ ┌─────▼──────┐ ┌───▼──────────────┐
│  用户服务    │ │  测试服务   │ │    AI 服务        │
│  User API   │ │  Test API  │ │   AI Engine       │
└──────┬──────┘ └─────┬──────┘ └───┬──────────────┘
       │              │              │
┌──────▼──────────────▼──────────────▼──────────────┐
│                  数据层                              │
│  PostgreSQL (主数据)  Redis (缓存/会话)              │
│  Cloudflare R2 (媒体存储)  Pinecone (向量数据库)     │
└────────────────────────────────────────────────────┘
```

---

## 技术栈选型

### 前端

```yaml
移动端:
  框架: React Native (Expo SDK 51)
  状态管理: Zustand
  导航: Expo Router
  动画: React Native Reanimated 3
  视频: Expo Video
  UI 组件: 完全自定义（无通用 UI 库，保持视觉独特性）

Web 端:
  框架: Next.js 14 (App Router)
  样式: Tailwind CSS + Framer Motion
  状态: Zustand + React Query
```

### 后端

```yaml
主服务:
  语言: Python 3.12
  框架: FastAPI
  异步: asyncio + uvicorn
  任务队列: Celery + Redis

数据库:
  主库: PostgreSQL 16 (Supabase)
  缓存: Redis 7 (Upstash)
  向量库: Pinecone (匹配向量存储)
  媒体: Cloudflare R2 + Stream
```

### AI 组件

```yaml
大语言模型:
  主力: Claude claude-sonnet-4-6 (关系故事生成、洞察文字)
  备用: GPT-4o (多模型验证)

语音分析:
  转录: Whisper API
  情感分析: 自研模型（基于叙事心理学标注数据）

图像分析:
  荣格原型分类: 自研分类器
  用户头像分析: 仅用于防止假账号，不用于匹配

匹配算法:
  Embedding: text-embedding-3-large
  向量匹配: Pinecone ANN
  兼容性模型: 自研 XGBoost + 深度学习混合模型
```

---

## 数据模型

### 核心实体

```sql
-- 用户表
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    phone VARCHAR(20) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE,
    gender CHAR(1) CHECK (gender IN ('M', 'F', 'X')),
    birth_date DATE,
    city VARCHAR(100),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    is_verified BOOLEAN DEFAULT FALSE,
    verification_level INTEGER DEFAULT 0  -- 0:手机 1:身份证 2:学历 3:收入
);

-- 测试会话表
CREATE TABLE test_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    chapter INTEGER NOT NULL,  -- 1,2,3
    started_at TIMESTAMPTZ DEFAULT NOW(),
    completed_at TIMESTAMPTZ,
    raw_choices JSONB NOT NULL DEFAULT '{}',
    voice_transcript TEXT,
    image_selections JSONB DEFAULT '[]'
);

-- 关系星图表（核心数据）
CREATE TABLE relationship_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) UNIQUE,
    generated_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),

    -- 7 维度分数 (0-100)
    intimacy_pace INTEGER,        -- 亲密节奏
    expression_intensity INTEGER, -- 表达强度
    autonomy_need INTEGER,        -- 自主需求
    conflict_style INTEGER,       -- 冲突风格 (回避←0→追近)
    security_baseline INTEGER,    -- 安全基线
    commitment_depth INTEGER,     -- 承诺深度
    growth_orientation INTEGER,   -- 成长取向

    -- 分类标签
    fisher_type VARCHAR(20),      -- Explorer/Builder/Director/Negotiator
    attachment_style VARCHAR(20), -- Secure/Anxious/Avoidant/Disorganized
    enneagram_type INTEGER,       -- 1-9
    jungian_archetype VARCHAR(50),

    -- 生成内容
    star_map_svg TEXT,            -- 星图 SVG
    shadow_insight TEXT,          -- 关系阴影洞察文字
    relationship_story TEXT,      -- AI 生成的关系故事
    matching_vector VECTOR(1536), -- 用于相似度计算的向量

    -- 元数据
    accuracy_rating FLOAT,        -- 用户评分（1-5）
    share_count INTEGER DEFAULT 0
);

-- 匹配表
CREATE TABLE matches (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_a_id UUID REFERENCES users(id),
    user_b_id UUID REFERENCES users(id),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    compatibility_score FLOAT NOT NULL,  -- 0-1
    compatibility_detail JSONB,          -- 各维度兼容性详情
    ai_introduction TEXT,                -- AI 生成的匹配介绍
    status VARCHAR(20) DEFAULT 'pending', -- pending/unlocked/connected/ended
    outcome VARCHAR(20),                  -- dating/relationship/married/ended
    outcome_reported_at TIMESTAMPTZ,
    UNIQUE(user_a_id, user_b_id)
);

-- 双人模式表
CREATE TABLE duo_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    initiator_id UUID REFERENCES users(id),
    partner_id UUID REFERENCES users(id),
    relationship_type VARCHAR(20),  -- couple/friend/family
    created_at TIMESTAMPTZ DEFAULT NOW(),
    resonance_map JSONB,            -- 共鸣图数据
    ai_analysis TEXT,               -- AI 分析文字
    is_paid BOOLEAN DEFAULT FALSE
);
```

---

## AI 服务设计

### 模块 1：关系画像生成器

```python
class RelationshipProfileGenerator:
    """
    输入：用户的所有测试数据
    输出：RelationshipProfile 对象
    """

    def generate(self, test_session: TestSession) -> RelationshipProfile:
        # Step 1: 多维度并行分析
        analyses = await asyncio.gather(
            self.analyze_fisher_type(test_session),
            self.analyze_attachment(test_session),
            self.analyze_gottman(test_session),
            self.analyze_enneagram(test_session),
            self.calculate_bazi(test_session.user.birth_date),
            self.analyze_jungian(test_session),
            self.analyze_narrative(test_session)
        )

        # Step 2: 收敛分析，找跨维度共同模式
        profile = self.converge(analyses)

        # Step 3: 计算关系阴影
        shadow = self.calculate_shadow(test_session, profile)

        # Step 4: 生成文字内容（Claude API）
        profile.shadow_insight = await self.generate_shadow_text(shadow)
        profile.relationship_story = await self.generate_story(profile)

        # Step 5: 生成匹配向量
        profile.matching_vector = await self.embed(profile)

        return profile

    async def generate_shadow_text(self, shadow: ShadowGap) -> str:
        prompt = f"""
        用户数据：
        - 自我描述偏好：{shadow.stated_preferences}
        - 实际场景选择：{shadow.actual_behavior}
        - 落差维度：{shadow.divergent_dimensions}

        请生成一段 150-200 字的「关系阴影」揭示文字，要求：
        1. 先说用户「认为自己是什么样的人」
        2. 再说「实际行为模式显示的真实情况」
        3. 解释这个落差通常意味着什么
        4. 以温暖、非评判的语气，让用户感到被深度理解
        5. 结尾留一句引人思考的话

        风格参照：像一个懂你 10 年的朋友，说出了你自己说不清楚的事。
        """
        return await claude.generate(prompt, max_tokens=300)
```

### 模块 2：匹配引擎

```python
class MatchingEngine:
    """
    不是找「和你最像的人」，而是找「和你最相容的人」
    兼容性 ≠ 相似性
    """

    def calculate_compatibility(
        self,
        profile_a: RelationshipProfile,
        profile_b: RelationshipProfile
    ) -> CompatibilityScore:

        dimensions = {}

        # 维度 1：冲突风格互补性
        # 回避型 + 温和追近型 = 高兼容
        # 回避型 + 激进追近型 = 低兼容
        dimensions['conflict'] = self.score_conflict_compatibility(
            profile_a.conflict_style,
            profile_b.conflict_style
        )

        # 维度 2：亲密节奏匹配性
        # 节奏差异 < 20 分 = 高兼容
        dimensions['pace'] = 1 - abs(
            profile_a.intimacy_pace - profile_b.intimacy_pace
        ) / 100

        # 维度 3：自主需求互补性
        # 高自主需求 + 高自主需求 = 高兼容（互相理解空间需求）
        # 高自主需求 + 低自主需求 = 低兼容（「你不爱我」vs「你太粘人」）
        dimensions['autonomy'] = self.score_autonomy_compatibility(
            profile_a.autonomy_need,
            profile_b.autonomy_need
        )

        # 维度 4：Fisher 类型化学反应
        # 基于 Fisher 研究的类型互吸矩阵
        dimensions['chemistry'] = FISHER_COMPATIBILITY_MATRIX[
            profile_a.fisher_type
        ][profile_b.fisher_type]

        # 维度 5：安全基线差异
        # 两人安全基线都高 = 最佳
        # 一方极低 = 风险（焦虑/回避 配对会触发「追-逃」循环）
        dimensions['security'] = self.score_security_compatibility(
            profile_a.security_baseline,
            profile_b.security_baseline
        )

        # 加权综合分
        weights = {'conflict': 0.30, 'pace': 0.20, 'autonomy': 0.20,
                   'chemistry': 0.15, 'security': 0.15}
        total = sum(dimensions[k] * weights[k] for k in weights)

        return CompatibilityScore(
            total=total,
            dimensions=dimensions,
            risk_factors=self.identify_risks(profile_a, profile_b)
        )
```

### 模块 3：AI 关系故事生成器

```python
async def generate_match_introduction(
    user: RelationshipProfile,
    match: RelationshipProfile,
    compatibility: CompatibilityScore
) -> str:
    """
    为 user 生成一段关于 match 的介绍
    让 user 在看到 match 的照片之前，先感受到这个人
    """
    prompt = f"""
    你是一位深刻理解人性的关系顾问。

    你需要为用户介绍一个你认为他们应该认识的人。
    不要透露任何可识别信息（年龄、职业、城市）。
    只描述这个人在关系里是什么样的人。

    这个人的关系画像：
    - 亲密节奏：{match.intimacy_pace}/100（{intimacy_description(match.intimacy_pace)}）
    - 表达强度：{match.expression_intensity}/100
    - 冲突风格：{conflict_style_description(match.conflict_style)}
    - 关系故事：{match.relationship_story}
    - 你们的主要共鸣点：{compatibility.top_resonance_points}

    生成一段 200-250 字的介绍，要求：
    1. 第一句话就要让用户心动或者好奇
    2. 描述这个人在关系里给人的「感觉」，而非「条件」
    3. 点出你们最有可能产生共鸣的一个具体场景
    4. 结尾留一个开放性的想象空间
    5. 不要用「他/她」，用「这个人」
    """
    return await claude.generate(prompt, max_tokens=400)
```

---

## API 设计

### 核心端点

```
POST   /api/v1/auth/send-otp          发送验证码
POST   /api/v1/auth/verify-otp        验证并登录/注册
GET    /api/v1/users/me               获取当前用户信息

POST   /api/v1/test/start             开始测试
POST   /api/v1/test/answer            提交单题答案
POST   /api/v1/test/complete          完成章节
GET    /api/v1/test/status            获取测试进度

GET    /api/v1/profile/star-map       获取关系星图
GET    /api/v1/profile/shadow         获取关系阴影洞察
GET    /api/v1/profile/story          获取关系故事

GET    /api/v1/matches                获取匹配列表（含兼容分）
POST   /api/v1/matches/{id}/unlock    解锁匹配（付费）
POST   /api/v1/matches/{id}/interest  表达意向

POST   /api/v1/duo/create             创建双人会话
GET    /api/v1/duo/{id}/resonance     获取共鸣图

POST   /api/v1/payments/create        创建支付订单
POST   /api/v1/payments/webhook       支付回调
```

---

## 隐私与安全设计

### 数据分级

```
Level 0 - 公开：星图形状（无维度值）、关系故事（AI 生成，非原始数据）
Level 1 - 授权可见：具体维度分数、匹配列表（对方匹配时才可见）
Level 2 - 完全私密：原始测试选择、语音数据（不对任何人开放）
Level 3 - 服务端加密：生日、手机号（不可反向访问）
```

### 关键安全措施

- 测试原始数据永远不出服务端（只输出分析结果）
- 照片直到双方互相解锁才显示
- 用户可随时删除账号，所有数据物理删除
- 向量数据库中不存储可识别信息，只存向量和匿名 ID
- 端对端加密私信（如果有）

---

## 部署架构

```yaml
生产环境:
  应用服务器: Railway (自动扩缩容)
  数据库: Supabase (PostgreSQL + 实时功能)
  缓存: Upstash Redis
  向量库: Pinecone
  媒体: Cloudflare R2 + Stream
  CDN: Cloudflare
  监控: Sentry + Grafana
  CI/CD: GitHub Actions

MVP 阶段成本估算（月）:
  Railway: ~$50
  Supabase: ~$25
  Upstash: ~$10
  Pinecone: ~$70
  Cloudflare: ~$20
  Claude API: ~$200（按用量）
  合计: ~$375/月
```
