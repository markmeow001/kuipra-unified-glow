interface ServiceLocale {
  name: string;
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  intro: string;
  pains: string[];
  deliverables: string[];
  process: { title: string; body: string }[];
  faq: { q: string; a: string }[];
}

export interface Service {
  slug: string;
  /** Value matching the homepage contact-form "service" select option. */
  formValue: string;
  /** Related journal article slugs (language-neutral). */
  related: string[];
  en: ServiceLocale;
  zh: ServiceLocale;
}

export const SERVICES: Service[] = [
  {
    slug: 'social-media-management',
    formValue: 'Social Media Management',
    related: [
      'instagram-tiktok-xiaohongshu-which-platform-vancouver',
      'content-calendar-for-small-business',
      'bilingual-social-media-account-strategy',
    ],
    en: {
      name: 'Social Media Management',
      metaTitle: 'Social Media Management Vancouver | Kuipra Communications',
      metaDescription:
        'Full-service social media management for Vancouver businesses: strategy, content, community and reporting — in English and Chinese.',
      tagline: 'Social Media · Vancouver',
      intro:
        'We plan, produce, publish and manage your social presence end to end — so your brand shows up consistently, sounds like itself, and turns followers into customers. One team covering both English and Chinese-language platforms, from Instagram and TikTok to Xiaohongshu and WeChat.',
      pains: [
        'Posting is sporadic because nobody owns it — weeks of silence, then a burst of catch-up content.',
        'Engagement exists but never becomes enquiries, because content entertains instead of positioning.',
        'The Chinese-speaking half of your Vancouver audience never sees you, because you only publish in English.',
      ],
      deliverables: [
        'Platform strategy and account setup or cleanup',
        'Monthly content calendar mapped to your message pillars',
        'Content production: copy, graphics, short-form video',
        'Community management and enquiry handling',
        'Bilingual operation across Western and Chinese platforms',
        'Monthly reporting tied to business goals, not vanity metrics',
      ],
      process: [
        {
          title: 'Audit & strategy',
          body: 'We review your accounts, audience and competitors, then define positioning, pillars and a realistic cadence.',
        },
        {
          title: 'Content system',
          body: 'We build your calendar and produce the first month of content in your brand voice — both languages if needed.',
        },
        {
          title: 'Publish & manage',
          body: 'We run the accounts day to day: posting, stories, comments, DMs and community touchpoints.',
        },
        {
          title: 'Report & refine',
          body: 'Monthly numbers that matter — reach, saves, enquiries — and the next month planned from what worked.',
        },
      ],
      faq: [
        {
          q: 'Which platforms do you manage?',
          a: 'Instagram, TikTok, Facebook and LinkedIn on the Western side, plus Xiaohongshu (RED) and WeChat for Chinese-speaking audiences. We recommend the mix based on where your customers actually discover businesses like yours — usually one or two platforms done well.',
        },
        {
          q: 'Do you create the content or do we?',
          a: 'We handle strategy, copywriting, design and editing. We will occasionally need raw material from you — product shots, event access, subject-matter input — and we make that as light as possible with a simple monthly capture routine.',
        },
        {
          q: 'Can you run both English and Chinese accounts?',
          a: 'Yes — bilingual operation is our core strength. Content is developed natively for each language and platform culture, not translated, so both audiences get content that feels made for them.',
        },
      ],
    },
    zh: {
      name: '社群經營管理',
      metaTitle: '溫哥華社群代操與經營管理｜Kuipra Communications',
      metaDescription:
        '溫哥華企業的全方位社群經營：策略、內容、社群互動與月報，中英雙語一個團隊搞定，涵蓋 IG、TikTok、小紅書、微信。',
      tagline: '社群經營 · 溫哥華',
      intro:
        '從規劃、產製、發布到互動管理，我們把你的社群一手包辦——讓品牌穩定出現、口吻一致，把粉絲變成客人。一個團隊同時經營英文與中文平台，從 Instagram、TikTok 到小紅書、微信。',
      pains: [
        '沒有人專責經營，發文三天打魚兩天曬網——安靜好幾週，然後突然狂補貼文。',
        '有互動、沒詢問，因為內容在娛樂大眾，不在建立定位。',
        '只發英文內容，大溫一半說中文的潛在客群根本看不到你。',
      ],
      deliverables: [
        '平台策略與帳號建置／健檢',
        '對齊訊息支柱的每月內容日曆',
        '內容產製：文案、視覺、短影音',
        '社群互動與詢問訊息處理',
        '中英雙語、東西方平台同步經營',
        '對齊業務目標的月報（不看虛榮指標）',
      ],
      process: [
        {
          title: '健檢與策略',
          body: '盤點你的帳號、受眾與競品，定義定位、內容支柱和撐得住的發文節奏。',
        },
        {
          title: '內容系統',
          body: '建好內容日曆，用你的品牌語氣產出第一個月的內容——需要的話中英雙版。',
        },
        {
          title: '發布與經營',
          body: '日常全代管：貼文、限動、留言、私訊與社群互動。',
        },
        {
          title: '月報與優化',
          body: '每月只看有意義的數字——觸及、收藏、詢問——並根據有效的內容規劃下個月。',
        },
      ],
      faq: [
        {
          q: '你們經營哪些平台？',
          a: '西方平台包括 Instagram、TikTok、Facebook、LinkedIn；中文受眾則有小紅書和微信。我們會根據你的客人實際在哪裡「發現」同類型商家來建議組合——通常是一到兩個平台做深做好。',
        },
        {
          q: '內容是你們做還是我們做？',
          a: '策略、文案、設計、剪輯都由我們處理。偶爾需要你提供素材——產品照、活動現場、專業知識輸入——我們會用簡單的每月拍攝例行流程把你的負擔降到最低。',
        },
        {
          q: '可以同時經營英文和中文帳號嗎？',
          a: '可以——雙語經營正是我們的核心強項。內容為每個語言和平台文化原生開發，不是翻譯，讓兩邊受眾都覺得內容是為自己做的。',
        },
      ],
    },
  },
  {
    slug: 'content-creation',
    formValue: 'Content Creation',
    related: [
      'ai-content-workflow-without-sounding-like-ai',
      'building-a-brand-voice-guide',
      'content-calendar-for-small-business',
    ],
    en: {
      name: 'Content Creation',
      metaTitle: 'Content Creation Vancouver | Copy, Visuals & Video | Kuipra',
      metaDescription:
        'Original copy, visuals and short-form video for Vancouver brands — strategic content built to position, not just fill a feed.',
      tagline: 'Content · Vancouver',
      intro:
        'Original written, visual and video content that blends creativity with strategic intent. Every piece we make has a job: positioning your brand, answering a customer question, or moving someone one step closer to buying.',
      pains: [
        'Your feed fills up, but none of it says why customers should choose you over the shop next door.',
        'Content production burns out whoever owns it, because every post starts from a blank page.',
        'AI-generated content saved time but flattened your voice into generic mush.',
      ],
      deliverables: [
        'Brand voice guide and messaging alignment',
        'Copywriting: social, web, email and campaign copy',
        'Photography direction and visual assets',
        'Short-form video production and editing',
        'Bilingual content developed natively in English and Chinese',
        'Content batching systems so production is sustainable',
      ],
      process: [
        {
          title: 'Voice & angle',
          body: 'We define how your brand sounds and the recurring content angles that map to what customers ask.',
        },
        {
          title: 'Batch production',
          body: 'Shoot days and writing sprints that produce a month of content at once, not a daily scramble.',
        },
        {
          title: 'Review & polish',
          body: 'You approve fast in one pass — we handle revisions, adaptation and per-platform formatting.',
        },
        {
          title: 'Learn & iterate',
          body: 'We track which pieces earn saves, shares and enquiries, and double down on what works.',
        },
      ],
      faq: [
        {
          q: 'Do you use AI in your content process?',
          a: 'As a drafting and research tool, yes — but every published piece is human-directed and edited against your brand voice guide. Fact, opinion and final voice always come from people. We wrote publicly about exactly where we draw those lines.',
        },
        {
          q: 'Can you match our existing brand style?',
          a: 'Yes. We start by codifying your voice and visual language into a short practical guide, then produce against it. If you have no defined style yet, that same exercise becomes the foundation.',
        },
        {
          q: 'What does a typical monthly content package include?',
          a: 'Most clients combine a set number of written posts, designed graphics and short videos per month, planned on a shared calendar. Volume depends on your cadence and platforms — we scope it around what your audience needs, not a fixed bundle.',
        },
      ],
    },
    zh: {
      name: '傳達內容創作',
      metaTitle: '溫哥華內容創作｜文案、視覺與短影音｜Kuipra',
      metaDescription:
        '為溫哥華品牌打造原創文案、視覺與短影音——每件內容都有策略目的，不只是填滿版面。',
      tagline: '內容創作 · 溫哥華',
      intro:
        '原創的文字、視覺與影音內容，創意與策略意圖並重。我們做的每一件內容都有任務：建立品牌定位、回答客人的問題、或把人往購買推近一步。',
      pains: [
        '版面填滿了，但沒有一篇說得清楚客人為什麼該選你而不是隔壁那家。',
        '內容產製把負責的人燒乾，因為每篇貼文都從一張白紙開始。',
        '用 AI 生內容省了時間，卻把品牌的聲音磨平成千篇一律的糊。',
      ],
      deliverables: [
        '品牌語氣指南與訊息對齊',
        '文案撰寫：社群、網站、Email 與 campaign 文案',
        '攝影指導與視覺素材',
        '短影音企劃、拍攝與剪輯',
        '中英雙語原生內容開發',
        '內容批次產製系統，讓產出可長期維持',
      ],
      process: [
        {
          title: '語氣與角度',
          body: '定義品牌怎麼說話，以及對應客人真實提問的固定內容角度。',
        },
        {
          title: '批次產製',
          body: '用拍攝日和寫作衝刺一次產出一個月的內容，不再每天趕工。',
        },
        {
          title: '審核與打磨',
          body: '你一輪快速過稿——修訂、改編、各平台格式調整都由我們處理。',
        },
        {
          title: '學習與迭代',
          body: '追蹤哪些內容換來收藏、轉發與詢問，把有效的加倍做。',
        },
      ],
      faq: [
        {
          q: '你們的內容流程會用 AI 嗎？',
          a: '作為草稿和研究工具，會——但每件發布的內容都由人主導、並對照品牌語氣指南編修。事實、觀點和最終語氣永遠來自人。我們把界線畫在哪，都公開寫在專欄裡。',
        },
        {
          q: '可以配合我們既有的品牌風格嗎？',
          a: '可以。我們會先把你的語氣和視覺語言整理成一份簡短實用的指南，再據此產製。如果你還沒有明確風格，這個過程本身就是打地基。',
        },
        {
          q: '一般的每月內容方案包含什麼？',
          a: '多數客戶是每月固定數量的文案貼文、設計視覺與短影音，排進共享日曆。量體取決於你的節奏和平台——我們按受眾需要來規劃，不是賣固定套餐。',
        },
      ],
    },
  },
  {
    slug: 'brand-strategy',
    formValue: 'Brand Strategy',
    related: [
      'brand-strategy-vs-marketing-tactics',
      'how-to-write-a-positioning-statement',
      'building-a-brand-voice-guide',
    ],
    en: {
      name: 'Brand Strategy & Personal Branding',
      metaTitle: 'Brand Strategy Vancouver | Positioning & Personal Branding | Kuipra',
      metaDescription:
        'Brand positioning, messaging and personal branding for Vancouver businesses and founders — clarity first, then content.',
      tagline: 'Strategy · Vancouver',
      intro:
        'Define your identity, refine your message, and stand out with clarity in a crowded market. We build the strategic layer — positioning, audience, message house, voice — that makes every later marketing dollar work harder. For founders, we do the same for your personal brand.',
      pains: [
        'Your marketing could belong to any competitor — swap the logo and nobody would notice.',
        'Every campaign starts from a blank page because there is no message architecture to build on.',
        'As a founder you know your expertise should be visible, but you have no system for showing it.',
      ],
      deliverables: [
        'Positioning statement and competitive framing',
        'Audience portraits built on real motivations',
        'Message house: core claim, pillars and proof',
        'Brand voice guide with do/don\'t examples',
        'Personal branding strategy for founders and executives',
        'Rollout plan connecting strategy to channels and content',
      ],
      process: [
        {
          title: 'Discovery',
          body: 'Stakeholder interviews, competitor audit and customer-language mining — we learn how you actually win.',
        },
        {
          title: 'Positioning',
          body: 'We draft and pressure-test your positioning until it is specific, provable and ownable.',
        },
        {
          title: 'Message system',
          body: 'The message house and voice guide your whole team can execute from on day one.',
        },
        {
          title: 'Activation',
          body: 'We translate strategy into channel priorities and a first 90-day content direction.',
        },
      ],
      faq: [
        {
          q: 'How long does a brand strategy engagement take?',
          a: 'A focused strategy sprint typically runs a few weeks — discovery, positioning and message system — not a months-long branding ceremony. The deliverable is a working tool your team uses daily, not a thick deck that gathers dust.',
        },
        {
          q: 'Is this only for new brands?',
          a: 'No — most of our strategy work is for established businesses whose marketing has outgrown its foundations: new competition, new audiences, or growth that made the old messaging fuzzy. A reposition is often faster than a rebrand.',
        },
        {
          q: 'What is personal branding, practically?',
          a: 'A deliberate system for making a founder or executive\'s expertise visible: positioning, content themes, platform choice and a sustainable publishing rhythm. Done right it compounds into inbound opportunities — clients, speaking, press — that the business brand alone cannot attract.',
        },
      ],
    },
    zh: {
      name: '品牌策略及個人品牌塑造',
      metaTitle: '溫哥華品牌策略｜定位、訊息與個人品牌｜Kuipra',
      metaDescription:
        '為溫哥華企業與創辦人打造品牌定位、訊息系統與個人品牌——先有清晰，再談內容。',
      tagline: '品牌策略 · 溫哥華',
      intro:
        '定義你的身分、精煉你的訊息，在擁擠的市場中清晰地突圍。我們打造策略層——定位、受眾、訊息屋、語氣——讓之後花的每一塊行銷預算都更有效。針對創辦人，我們也用同一套方法打造個人品牌。',
      pains: [
        '你的行銷素材放到任何競爭對手身上都成立——換個 logo 沒人會發現。',
        '每次 campaign 都從白紙開始，因為沒有可以依循的訊息架構。',
        '身為創辦人，你知道自己的專業應該被看見，卻沒有一套讓它被看見的系統。',
      ],
      deliverables: [
        '定位宣言與競爭框架',
        '建立在真實動機上的受眾畫像',
        '訊息屋：核心主張、支柱與證據',
        '附「要／不要」範例的品牌語氣指南',
        '創辦人與高管的個人品牌策略',
        '把策略接上渠道與內容的落地計畫',
      ],
      process: [
        {
          title: '探索',
          body: '利害關係人訪談、競品盤點、客戶語言挖掘——先搞清楚你實際上靠什麼贏。',
        },
        {
          title: '定位',
          body: '起草並反覆壓力測試你的定位，直到它夠具體、可證明、且你能獨佔。',
        },
        {
          title: '訊息系統',
          body: '產出訊息屋與語氣指南，讓整個團隊第一天就能照著執行。',
        },
        {
          title: '啟動',
          body: '把策略轉成渠道優先序和首個 90 天的內容方向。',
        },
      ],
      faq: [
        {
          q: '品牌策略專案要做多久？',
          a: '聚焦的策略衝刺通常是幾週——探索、定位、訊息系統——不是動輒數月的品牌儀式。交付物是團隊每天都在用的工作工具，不是一份積灰塵的厚簡報。',
        },
        {
          q: '只有新品牌需要做嗎？',
          a: '不是——我們大部分的策略案來自「行銷已經長超過地基」的成熟企業：新競爭、新客群、或成長讓原本的訊息變模糊。重新定位往往比重新命名快得多。',
        },
        {
          q: '個人品牌實際上是做什麼？',
          a: '一套讓創辦人或高管的專業被看見的刻意系統：定位、內容主題、平台選擇、可持續的發布節奏。做得對，它會複利成主動上門的機會——客戶、演講、媒體——這些是公司品牌單獨吸引不到的。',
        },
      ],
    },
  },
  {
    slug: 'web-design',
    formValue: 'Web Design',
    related: [
      'local-seo-guide-vancouver-small-business',
      'generative-engine-optimization-guide',
      'how-ai-assistants-recommend-local-businesses',
    ],
    en: {
      name: 'Web Design & Development',
      metaTitle: 'Web Design Vancouver | SEO-Ready Brand Websites | Kuipra',
      metaDescription:
        'Elegant, fast, SEO- and AI-search-ready websites for Vancouver businesses — designed to convert and built to grow.',
      tagline: 'Web · Vancouver',
      intro:
        'Elegant, high-performance websites that reflect your brand identity — designed to convert visitors into clients and built to be found, by Google and by AI assistants alike. Bilingual builds are a specialty.',
      pains: [
        'Your website looks dated next to competitors and quietly costs you credibility on every first visit.',
        'Traffic arrives but nothing converts — no clear paths, no forms worth filling, no reasons to act.',
        'Search engines and AI assistants cannot parse your site, so it never gets recommended.',
      ],
      deliverables: [
        'Brand-aligned design, custom not templated',
        'Fast, responsive build with clean performance scores',
        'On-page SEO and structured data throughout',
        'AI-search readiness: crawlable facts, FAQ content, llms.txt',
        'Bilingual architecture with proper hreflang',
        'Analytics, forms and conversion tracking wired in',
      ],
      process: [
        {
          title: 'Blueprint',
          body: 'Sitemap, page goals and keyword mapping before any pixels — every page gets a job.',
        },
        {
          title: 'Design',
          body: 'A visual system that extends your brand, reviewed on real content, not lorem ipsum.',
        },
        {
          title: 'Build',
          body: 'Modern static-first stack for speed and security, with SEO and schema baked in from day one.',
        },
        {
          title: 'Launch & grow',
          body: 'Redirects, Search Console setup and measurement — plus a plan for content that compounds.',
        },
      ],
      faq: [
        {
          q: 'How much does a website cost?',
          a: 'It depends on scope — pages, languages, integrations and content needs. We scope precisely after a discovery call and quote a fixed project price, so there are no surprises mid-build.',
        },
        {
          q: 'Will the site be optimized for SEO and AI search?',
          a: 'Yes, as standard: technical SEO, structured data, fast Core Web Vitals, and AI-search readiness including crawlable factual content and llms.txt. Being findable by ChatGPT and Perplexity is now part of what a website is for.',
        },
        {
          q: 'Can you build bilingual English-Chinese websites?',
          a: 'Yes — bilingual architecture is a specialty, with native content in both languages and correct hreflang implementation so each audience and each search engine gets the right version.',
        },
      ],
    },
    zh: {
      name: '網頁設計與開發',
      metaTitle: '溫哥華網頁設計｜SEO 與 AI 搜尋就緒的品牌網站｜Kuipra',
      metaDescription:
        '為溫哥華企業打造優雅、快速、SEO 與 AI 搜尋就緒的網站——為轉換而設計，隨業務成長。',
      tagline: '網站 · 溫哥華',
      intro:
        '優雅、高效能、忠實反映品牌的網站——為「把訪客變客戶」而設計，也為「被找到」而打造：Google 找得到，AI 助理也推薦得出來。雙語網站是我們的專長。',
      pains: [
        '網站放在競爭對手旁邊顯得過時，每一次首訪都在悄悄扣你的信任分。',
        '流量進來了卻沒有轉換——沒有清楚的動線、沒有值得填的表單、沒有立刻行動的理由。',
        '搜尋引擎和 AI 助理讀不懂你的網站，所以永遠不會推薦你。',
      ],
      deliverables: [
        '對齊品牌的客製設計，不套模板',
        '快速、響應式、效能分數乾淨的網站',
        '全站 on-page SEO 與結構化資料',
        'AI 搜尋就緒：可爬取的事實內容、FAQ、llms.txt',
        '正確 hreflang 的雙語架構',
        '分析、表單與轉換追蹤全部接好',
      ],
      process: [
        {
          title: '藍圖',
          body: '先做網站地圖、頁面目標與關鍵字對應，再動任何像素——每一頁都有任務。',
        },
        {
          title: '設計',
          body: '延伸你品牌的視覺系統，用真實內容審稿，不用假文填充。',
        },
        {
          title: '開發',
          body: '現代 static-first 技術棧，快速又安全，SEO 與 schema 從第一天就內建。',
        },
        {
          title: '上線與成長',
          body: '轉址、Search Console 設定與數據追蹤——加上一套會複利的內容計畫。',
        },
      ],
      faq: [
        {
          q: '做一個網站要多少錢？',
          a: '取決於範圍——頁數、語言、串接與內容需求。我們會在探索會議後精確定義範圍、報固定專案價，過程中不會冒出驚喜加價。',
        },
        {
          q: '網站會做 SEO 和 AI 搜尋優化嗎？',
          a: '會，而且是標配：技術 SEO、結構化資料、快速的 Core Web Vitals，以及 AI 搜尋就緒——包括可爬取的事實內容和 llms.txt。能被 ChatGPT 和 Perplexity 找到，已經是網站存在的目的之一。',
        },
        {
          q: '可以做中英雙語網站嗎？',
          a: '可以——雙語架構是我們的專長：兩種語言都是原生內容，搭配正確的 hreflang 實作，讓每個受眾和每個搜尋引擎都拿到對的版本。',
        },
      ],
    },
  },
  {
    slug: 'local-seo-geo',
    formValue: 'Local SEO & GEO',
    related: [
      'local-seo-guide-vancouver-small-business',
      'generative-engine-optimization-guide',
      'how-ai-assistants-recommend-local-businesses',
      'google-reviews-management-guide',
    ],
    en: {
      name: 'Local SEO & AI Search (GEO)',
      metaTitle: 'Local SEO & AI Search Optimization (GEO) Vancouver | Kuipra',
      metaDescription:
        'Get found on Google Maps and recommended by AI assistants. Local SEO plus generative engine optimization (GEO) for Vancouver businesses — bilingual, measurable.',
      tagline: 'Local SEO · GEO · Vancouver',
      intro:
        'Customers now find businesses two ways: they search Google, or they ask an AI assistant. We optimize for both — local SEO so you win the map pack and "near me" searches, and generative engine optimization (GEO) so ChatGPT, Gemini and AI search actually recommend you. One system, in English and Chinese.',
      pains: [
        'Competitors with worse work outrank you on Google Maps because their profile and reviews are engineered and yours are left to luck.',
        'Your website gets visits but ranks for nothing — no structure, no answers, nothing for Google or AI to cite.',
        'Ask ChatGPT for "best [your industry] in Vancouver" and you are nowhere — AI assistants recommend competitors because your business is invisible to them.',
      ],
      deliverables: [
        'Google Business Profile optimization and review-growth system',
        'Local SEO: site structure, on-page optimization, citations and consistency',
        'GEO: structured answer content, schema markup and llms.txt so AI engines can cite you',
        'Bilingual keyword and content strategy (English + Chinese search)',
        'Monthly visibility reporting: rankings, map pack, and AI-assistant checks',
      ],
      process: [
        {
          title: 'Audit',
          body: 'We map where you actually stand: Google rankings, map pack position, profile health, and what AI assistants currently say when asked about your category in Vancouver.',
        },
        {
          title: 'Fix the foundation',
          body: 'Profile, citations, site structure and schema get corrected first — the unglamorous layer that every ranking and AI citation sits on.',
        },
        {
          title: 'Build the answers',
          body: 'We produce the structured, factual content that ranks for local searches and gets cited by AI engines — in both languages where your market needs it.',
        },
        {
          title: 'Measure and compound',
          body: 'Monthly reporting on rankings, map visibility and AI-assistant mentions, with the next round of content aimed at what the data shows.',
        },
      ],
      faq: [
        {
          q: 'What is GEO and how is it different from SEO?',
          a: 'SEO earns visibility in Google search results; GEO (generative engine optimization) earns citations and recommendations inside AI assistants like ChatGPT and Gemini. They overlap — both reward clear, factual, well-structured content — but GEO adds specific work: answer-formatted content, schema, llms.txt, and consistent business facts across the web. We build both in one system because your customers already use both.',
        },
        {
          q: 'How long does local SEO take to show results?',
          a: 'Typical Vancouver timelines: profile and map-pack improvements in 4–8 weeks, meaningful organic movement in 3–6 months, compounding after that. Anyone promising page one in 30 days is selling something else. We report monthly so you see the trajectory, not just the destination.',
        },
        {
          q: 'Does this include Chinese-language search?',
          a: 'Yes — this is our edge. We optimize your visibility for English and Chinese searches, which matters in Metro Vancouver where a large share of your customers search and ask AI in Chinese. Most local SEO vendors only see half your market.',
        },
      ],
    },
    zh: {
      name: '在地 SEO 與 AI 搜尋優化（GEO）',
      metaTitle: '溫哥華在地 SEO 與 AI 搜尋優化（GEO）｜Kuipra',
      metaDescription:
        '讓 Google 地圖找得到你、讓 AI 助理推薦你。溫哥華企業的在地 SEO＋生成式引擎優化（GEO）——中英雙語、可量測。',
      tagline: '在地 SEO · GEO · 溫哥華',
      intro:
        '現在的客人用兩種方式找商家：搜 Google，或問 AI 助理。我們兩邊都幫你優化——在地 SEO 讓你贏下地圖前三名和「附近」搜尋；生成式引擎優化（GEO）讓 ChatGPT、Gemini 和 AI 搜尋真的推薦你。一套系統，中英雙語。',
      pains: [
        '做得比你差的同行在 Google 地圖上排你前面——因為他們的檔案和評論是經營出來的，你的是碰運氣的。',
        '網站有流量卻什麼字都排不上——沒有結構、沒有答案，Google 和 AI 都沒有東西可以引用。',
        '問 ChatGPT「溫哥華最好的〔你的行業〕」，你完全不在名單上——AI 助理推薦的是同行,因為你的生意對它們是隱形的。',
      ],
      deliverables: [
        'Google 商家檔案優化＋評論成長系統',
        '在地 SEO：網站結構、頁面優化、目錄登錄與資料一致性',
        'GEO：結構化問答內容、schema 標記與 llms.txt，讓 AI 引擎能引用你',
        '中英雙語關鍵字與內容策略',
        '每月能見度報告：排名、地圖前三、AI 助理推薦檢測',
      ],
      process: [
        {
          title: '體檢',
          body: '先量出你的真實位置：Google 排名、地圖名次、檔案健康度，以及現在問 AI 助理你這個行業時，它到底說了誰。',
        },
        {
          title: '修地基',
          body: '檔案、目錄、網站結構和 schema 先修好——每個排名和每次 AI 引用都蓋在這層不性感的地基上。',
        },
        {
          title: '蓋答案',
          body: '生產能排上在地搜尋、也能被 AI 引擎引用的結構化事實內容——你的市場需要的語言,我們就用哪種寫。',
        },
        {
          title: '量測與複利',
          body: '每月報告排名、地圖能見度和 AI 助理提及狀況,下一輪內容照數據指的方向打。',
        },
      ],
      faq: [
        {
          q: 'GEO 是什麼？跟 SEO 有什麼不同？',
          a: 'SEO 賺的是 Google 搜尋結果的能見度；GEO（生成式引擎優化）賺的是 ChatGPT、Gemini 這類 AI 助理裡的引用與推薦。兩者有重疊——都獎勵清楚、事實、結構好的內容——但 GEO 有專屬的工作：問答格式內容、schema、llms.txt、全網一致的商家資訊。我們把兩者做成一套系統,因為你的客人已經兩邊都在用。',
        },
        {
          q: '在地 SEO 多久見效？',
          a: '溫哥華的常見時程：商家檔案和地圖名次 4-8 週有感、自然排名 3-6 個月有明顯起色、之後開始複利。保證 30 天上首頁的人賣的是別的東西。我們每月報告,讓你看到軌跡,不是只等終點。',
        },
        {
          q: '有包含中文搜尋的優化嗎？',
          a: '有——這正是我們的優勢。我們同時優化你在英文和中文搜尋的能見度;在大溫,你有一大塊客人是用中文搜尋、用中文問 AI 的。多數在地 SEO 廠商只看得見你市場的一半。',
        },
      ],
    },
  },
  {
    slug: 'chinese-marketing',
    formValue: 'Bilingual / Chinese Marketing',
    related: [
      'marketing-to-vancouver-chinese-community',
      'wechat-marketing-canadian-business',
      'bilingual-social-media-account-strategy',
      'instagram-tiktok-xiaohongshu-which-platform-vancouver',
    ],
    en: {
      name: 'Bilingual & Chinese-Market Marketing',
      metaTitle: 'Chinese Marketing Agency Vancouver | Bilingual EN/ZH | Kuipra',
      metaDescription:
        'Reach the 500,000+ Chinese-speaking customers of Metro Vancouver natively — Xiaohongshu, WeChat and bilingual campaigns run by a team that lives in both languages.',
      tagline: 'Bilingual Marketing · Vancouver',
      intro:
        'Half a million Metro Vancouver customers research, discuss and decide in Chinese — on Xiaohongshu, on WeChat, in group chats your English marketing never reaches. We build campaigns natively in both languages: not translated captions, but platform-native strategy for each audience, under one consistent brand.',
      pains: [
        'Your English marketing is invisible to the Chinese-speaking half of your market — they research on Xiaohongshu and WeChat, not on your Instagram.',
        'You tried translating your posts and it shows: machine-translated captions read as carelessness to native speakers, and the platforms where they decide never see you at all.',
        'Bilingual vendors you have met do translation, not marketing — same content, two languages, zero understanding of how the platforms, occasions and trust signals differ.',
      ],
      deliverables: [
        'Chinese-market strategy: audience, platforms, occasions and offers',
        'Xiaohongshu (RED) account operation and content production',
        'WeChat presence: official account content and community approach',
        'Bilingual campaigns with one brand voice, natively written in each language',
        'Chinese-language search and AI visibility (Chinese GEO) for your business',
      ],
      process: [
        {
          title: 'Market read',
          body: 'We map where your Chinese-speaking customers actually are — which platforms, which occasions, which trust signals — and what competitors are doing there, if anything.',
        },
        {
          title: 'Position once, express twice',
          body: 'One brand strategy, expressed natively in each language. We define what stays fixed (identity, promise) and what flexes (platform, tone, occasions).',
        },
        {
          title: 'Run the channels',
          body: 'Content production and account operation on both sides — Instagram and Google for the English market, Xiaohongshu and WeChat for the Chinese market — with a publishing rhythm your budget sustains.',
        },
        {
          title: 'Report in one language: results',
          body: 'Monthly reporting across both markets — reach, saves, enquiries and which audience they came from — so you see which half of your market each dollar is working.',
        },
      ],
      faq: [
        {
          q: 'Why is translated content not enough for the Chinese market?',
          a: 'Because the platforms, formats and trust mechanics are different, not just the language. Chinese-speaking customers in Vancouver decide on Xiaohongshu notes, WeChat group recommendations and community word-of-mouth — channels where a translated Instagram caption never appears. Localized marketing means native strategy per platform; translation is just the last step.',
        },
        {
          q: 'Which languages and platforms do you actually work in?',
          a: 'Mandarin and Cantonese, Traditional and Simplified Chinese writing, and English — across Xiaohongshu, WeChat, Instagram, TikTok, Google and AI search. We are a bilingual team, not an agency with a translator on call.',
        },
        {
          q: 'My business is not Chinese-owned — does this still work for me?',
          a: 'Yes — some of the biggest wins are non-Chinese businesses entering the market: restaurants, clinics, beauty, real estate and retail that Chinese-speaking customers already buy from, just via competitors who show up in their language. If your product serves this audience, the channel gap is your opportunity.',
        },
      ],
    },
    zh: {
      name: '雙語與華人市場行銷',
      metaTitle: '溫哥華華人行銷公司｜中英雙語行銷｜Kuipra',
      metaDescription:
        '用母語觸及大溫 50 萬華語客群——小紅書、微信與中英雙語行銷，由真正活在兩種語言裡的團隊操盤。',
      tagline: '雙語行銷 · 溫哥華',
      intro:
        '大溫有五十萬客人用中文做功課、討論、下決定——在小紅書、在微信、在你的英文行銷永遠到不了的群組裡。我們用兩種語言原生地做行銷：不是翻譯文案，而是為每個受眾做平台原生的策略，同一個品牌，兩個市場。',
      pains: [
        '你的英文行銷對市場的華語那一半是隱形的——他們在小紅書和微信做決定，不在你的 Instagram。',
        '你試過翻譯貼文，效果看得出來：機翻文案在母語者眼裡就是敷衍，而他們真正做決定的平台上根本沒有你。',
        '你遇過的「雙語」廠商做的是翻譯不是行銷——同樣的內容、兩種語言，對平台、檔期和信任機制的差異零理解。',
      ],
      deliverables: [
        '華人市場策略：受眾、平台、檔期與產品切角',
        '小紅書帳號代營運與內容製作',
        '微信經營：公眾號內容與私域社群方法',
        '中英雙語 campaign：一個品牌聲音，各自母語原生撰寫',
        '中文搜尋與 AI 能見度（中文 GEO）',
      ],
      process: [
        {
          title: '讀市場',
          body: '先摸清你的華語客群實際在哪裡——哪些平台、哪些檔期、哪些信任訊號——以及同行在那裡做了什麼（或什麼都沒做）。',
        },
        {
          title: '定位一次，表達兩次',
          body: '一套品牌策略，用兩種語言原生表達。我們定義什麼固定不動（識別、承諾）、什麼因地制宜（平台、語氣、檔期）。',
        },
        {
          title: '跑渠道',
          body: '兩邊的內容製作與帳號營運——英文市場的 Instagram 和 Google、華語市場的小紅書和微信——用你的預算撐得起的發布節奏。',
        },
        {
          title: '用同一種語言報告：成果',
          body: '每月跨市場報告——觸及、收藏、詢問、以及每筆詢問來自哪個受眾——讓你看見每塊錢在市場的哪一半做工。',
        },
      ],
      faq: [
        {
          q: '為什麼翻譯內容對華人市場不夠？',
          a: '因為不同的不只是語言，是平台、格式和信任機制。大溫的華語客人靠小紅書筆記、微信群推薦和社區口碑做決定——這些渠道上，翻譯過的 Instagram 文案永遠不會出現。在地化行銷是每個平台的原生策略；翻譯只是最後一步。',
        },
        {
          q: '你們實際支援哪些語言和平台？',
          a: '國語和粵語、繁體與簡體書寫、加上英文——涵蓋小紅書、微信、Instagram、TikTok、Google 與 AI 搜尋。我們是雙語團隊，不是「有配合譯者」的公司。',
        },
        {
          q: '我的生意不是華人開的，這對我有用嗎？',
          a: '有——最大的贏面常常來自進入這個市場的非華人生意：餐飲、診所、美業、地產、零售，華語客人本來就在消費這些品類，只是買的是「用他們的語言出現」的同行。只要你的產品服務得到這群人，這個渠道落差就是你的機會。',
        },
      ],
    },
  },
];
