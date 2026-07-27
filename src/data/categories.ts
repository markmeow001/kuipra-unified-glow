export const CATEGORY_SLUGS = [
  'brand-strategy',
  'case-studies',
  'local-marketing',
  'ai-marketing',
] as const;

export type CategorySlug = (typeof CATEGORY_SLUGS)[number];

export const CATEGORIES: Record<
  CategorySlug,
  { en: string; zh: string; descEn: string; descZh: string }
> = {
  'brand-strategy': {
    en: 'Brand Strategy',
    zh: '品牌策略',
    descEn:
      'Brand positioning, storytelling, and marketing strategy insights for growing businesses.',
    descZh: '品牌定位、品牌敘事與行銷策略——寫給成長中企業的實戰洞察。',
  },
  'case-studies': {
    en: 'Case Studies',
    zh: '案例拆解',
    descEn:
      'Real campaign breakdowns: what we did, why it worked, and the numbers behind it.',
    descZh: '真實行銷案例完整拆解：我們做了什麼、為什麼有效、數據成果如何。',
  },
  'local-marketing': {
    en: 'Vancouver Marketing',
    zh: '溫哥華在地行銷',
    descEn:
      'Local marketing playbooks for Vancouver and BC businesses, including the Chinese-Canadian market.',
    descZh: '溫哥華與 BC 省在地行銷攻略，包含大溫華人市場的深度觀察。',
  },
  'ai-marketing': {
    en: 'AI Marketing',
    zh: 'AI 行銷應用',
    descEn:
      'How AI is reshaping search, content, and brand visibility — and how to stay ahead.',
    descZh: 'AI 如何改寫搜尋、內容與品牌曝光的遊戲規則，以及企業如何搶得先機。',
  },
};
