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
    slug: 'public-relations',
    formValue: 'Public Relations',
    related: [
      'event-marketing-guide-three-phase-framework',
      'google-reviews-management-guide',
      'brand-strategy-vs-marketing-tactics',
    ],
    en: {
      name: 'Public Relations & Communications',
      metaTitle: 'PR & Communications Vancouver | Media & Events | Kuipra',
      metaDescription:
        'Strategic media outreach, event amplification and communications for Vancouver brands — including Chinese-language media.',
      tagline: 'PR · Vancouver',
      intro:
        'Strategic outreach and communications that shape how Vancouver sees your brand: media relations, event marketing and amplification, influencer partnerships, and reputation care — across English and Chinese-language media landscapes.',
      pains: [
        'Your events fill rooms but leave no digital trace — no coverage, no content, no lasting reach.',
        'Competitors keep appearing in local media and roundups while you stay invisible.',
        'Your brand story only exists in English, missing the entire Chinese-language media ecosystem in Metro Vancouver.',
      ],
      deliverables: [
        'Media strategy and press outreach',
        'Event marketing: pre-event buzz, live coverage, post-event amplification',
        'Influencer and community partnership programs',
        'Chinese-language media and KOL relations',
        'Crisis and reputation communications support',
        'Press materials, briefing docs and spokesperson prep',
      ],
      process: [
        {
          title: 'Narrative',
          body: 'We define the stories your brand can credibly own and the outlets and voices that matter for them.',
        },
        {
          title: 'Outreach',
          body: 'Targeted pitching and partnership building — quality relationships over spray-and-pray press releases.',
        },
        {
          title: 'Amplification',
          body: 'Every placement, event and collaboration gets repurposed across your owned channels for maximum mileage.',
        },
        {
          title: 'Measurement',
          body: 'Coverage quality, audience reach and referral signals — reported plainly, without PR-speak.',
        },
      ],
      faq: [
        {
          q: 'Do you handle event marketing?',
          a: 'Yes — it is one of our core specialties. We run a three-phase framework covering pre-event anticipation, strategic live coverage and post-event amplification, so a one-day event generates weeks of visibility instead of disappearing overnight.',
        },
        {
          q: 'Can you get us into Chinese-language media in Vancouver?',
          a: 'Yes. Metro Vancouver has a substantial Chinese-language media and KOL ecosystem that most agencies cannot access. We operate natively in it — outreach, materials and relationships are handled in Chinese, not through translation.',
        },
        {
          q: 'How do you measure PR results?',
          a: 'We track placements and their quality, audience reach, branded-search movement and referral traffic where measurable. We are upfront that PR compounds over quarters — anyone promising instant front-page results is selling something else.',
        },
      ],
    },
    zh: {
      name: '公共關係與企業傳播',
      metaTitle: '溫哥華公關與企業傳播｜媒體與活動行銷｜Kuipra',
      metaDescription:
        '策略性媒體公關、活動行銷放大與企業傳播——同時深耕大溫的英文與中文媒體生態。',
      tagline: '公關傳播 · 溫哥華',
      intro:
        '用策略性的媒體公關與傳播，塑造溫哥華看待你品牌的方式：媒體關係、活動行銷與放大、KOL 合作、聲譽管理——橫跨英文與中文兩個媒體生態。',
      pains: [
        '活動場場爆滿，數位足跡卻是零——沒報導、沒內容、沒有延續的觸及。',
        '競爭對手不斷出現在本地媒體和推薦清單上，你卻始終隱形。',
        '品牌故事只有英文版，大溫整個中文媒體生態圈完全缺席。',
      ],
      deliverables: [
        '媒體策略與新聞公關',
        '活動行銷：事前造勢、現場報導、事後放大',
        'KOL 與社群合作計畫',
        '中文媒體與 KOL 關係經營',
        '危機與聲譽傳播支援',
        '新聞資料、簡報文件與發言人培訓',
      ],
      process: [
        {
          title: '敘事',
          body: '定義你的品牌能可信地擁有的故事，以及對這些故事真正重要的媒體與聲音。',
        },
        {
          title: '公關觸達',
          body: '精準提案與關係建立——重質的關係，不是亂槍打鳥的新聞稿。',
        },
        {
          title: '放大',
          body: '每一次曝光、活動與合作，都在你的自有渠道重製再利用，效益吃好吃滿。',
        },
        {
          title: '衡量',
          body: '報導品質、受眾觸及、referral 訊號——用白話報告，不講公關黑話。',
        },
      ],
      faq: [
        {
          q: '你們做活動行銷嗎？',
          a: '做——這是我們的核心強項之一。我們用三階段框架：事前造勢、有策略的現場報導、事後放大，讓一天的活動創造數週的能見度，而不是隔天就蒸發。',
        },
        {
          q: '可以幫我們上溫哥華的中文媒體嗎？',
          a: '可以。大溫有一個規模可觀、多數代理商進不去的中文媒體與 KOL 生態。我們原生在裡面運作——提案、資料、關係全部用中文直接經營，不經翻譯。',
        },
        {
          q: '公關成效怎麼衡量？',
          a: '我們追蹤曝光數量與品質、受眾觸及、品牌搜尋量變化、可歸因的 referral 流量。我們也坦白說：公關是以季為單位複利的，承諾你「馬上上頭版」的人是在賣別的東西。',
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
];
