// Generates the static Traditional-Chinese homepage at public/zh/index.html
// from public/index.html, using the same data-en/data-zh attributes the
// client-side language toggle consumes. Single source of truth stays in
// public/index.html; this runs before `astro build` so the output ships as a
// real crawlable page (the JS toggle alone leaves Google indexing the English
// version only).
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { parse } from 'node-html-parser';

const SITE = 'https://www.kuipra.ca';
const ZH_TITLE =
  '溫哥華行銷公司｜中英雙語社群行銷・品牌策略・SEO 與 AI 搜尋優化 - Kuipra';
const ZH_DESCRIPTION =
  '在找溫哥華的行銷或廣告公司？Kuipra Communications 是大溫在地的中英雙語行銷團隊：社群經營、內容創作、品牌策略、在地 SEO 與 AI 搜尋優化（GEO），小紅書與微信原生操作，服務溫哥華、列治文、本拿比商家。';
const ZH_ORG_DESCRIPTION =
  'Kuipra Communications 是位於大溫哥華地區的品牌策略與數位行銷公司，專精社群經營、內容創作、品牌策略、個人品牌與在地 SEO／AI 搜尋優化（GEO），提供中英雙語服務。';

const escapeHtml = (s) =>
  s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');

const html = readFileSync('public/index.html', 'utf-8');
const root = parse(html);

// --- Collect the visible FAQ pairs (zh) before swapping text, so the
// FAQPage JSON-LD can be rebuilt to match the visible zh content.
const faqPairs = [];
for (const details of root.querySelectorAll('#faq details')) {
  const q = details.querySelector('summary')?.getAttribute('data-zh');
  const a = details.querySelector('p')?.getAttribute('data-zh');
  if (q && a) faqPairs.push({ q, a });
}
if (faqPairs.length < 4) {
  throw new Error(`FAQ extraction looks wrong: only ${faqPairs.length} pairs`);
}

// --- Swap every leaf [data-en]/[data-zh] element's text, mirroring setLang().
let swapped = 0;
for (const el of root.querySelectorAll('[data-zh]')) {
  const zh = el.getAttribute('data-zh');
  if (!zh) continue;
  const hasChildElements = el.childNodes.some((n) => n.nodeType === 1);
  if (hasChildElements) continue;
  if (['INPUT', 'TEXTAREA'].includes(el.tagName)) continue;
  el.set_content(escapeHtml(zh));
  swapped++;
}
if (swapped < 100) {
  throw new Error(`Only ${swapped} text swaps — data-zh coverage regressed?`);
}

// --- Language-specific link targets.
for (const el of root.querySelectorAll('[data-zh-href]')) {
  const href = el.getAttribute('data-zh-href');
  if (href) el.setAttribute('href', href);
}

// --- Form placeholders and submit button (mirrors setLang's special cases).
const placeholders = {
  'cf-name': '例：王小明',
  'cf-company': '您的公司名稱',
  'cf-message': '告訴我們您的品牌與目標...',
};
for (const [id, text] of Object.entries(placeholders)) {
  root.querySelector(`#${id}`)?.setAttribute('placeholder', text);
}
for (const opt of root.querySelectorAll('#cf-service option[data-zh]')) {
  const zh = opt.getAttribute('data-zh');
  if (zh) opt.set_content(escapeHtml(zh));
}
const submitBtn = root.querySelector('#submitBtn');
if (submitBtn) submitBtn.set_content('送出訊息 →');

// --- Language toggle buttons become real navigation back to the EN page.
for (const btn of root.querySelectorAll('.nav-lang-toggle, .lang-toggle-desktop')) {
  btn.set_content('EN');
  btn.setAttribute('onclick', "location.href='/'");
}

// --- <html lang>.
root.querySelector('html')?.setAttribute('lang', 'zh-Hant');

// --- Head: title, description, canonical, OG/Twitter, og:locale.
const head = root.querySelector('head');
root.querySelector('title')?.set_content(escapeHtml(ZH_TITLE));
root
  .querySelector('meta[name="description"]')
  ?.setAttribute('content', ZH_DESCRIPTION);
root
  .querySelector('link[rel="canonical"]')
  ?.setAttribute('href', `${SITE}/zh/`);
const metaSwaps = {
  'meta[property="og:url"]': `${SITE}/zh/`,
  'meta[property="og:title"]': ZH_TITLE,
  'meta[property="og:description"]': ZH_DESCRIPTION,
  'meta[property="og:locale"]': 'zh_TW',
  'meta[name="twitter:title"]': ZH_TITLE,
  'meta[name="twitter:description"]': ZH_DESCRIPTION,
};
for (const [sel, content] of Object.entries(metaSwaps)) {
  root.querySelector(sel)?.setAttribute('content', content);
}

// --- JSON-LD: zh org description; FAQPage rebuilt from the visible zh FAQ.
for (const script of root.querySelectorAll('script[type="application/ld+json"]')) {
  let data;
  try {
    data = JSON.parse(script.textContent);
  } catch {
    continue;
  }
  if (data['@type'] === 'FAQPage') {
    data.mainEntity = faqPairs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    }));
  } else if (data['@type'] === 'MarketingAgency') {
    if (data.description) data.description = ZH_ORG_DESCRIPTION;
  } else {
    continue;
  }
  script.set_content(JSON.stringify(data));
}

// --- Legacy `?lang=zh` links on the EN page redirect here; on this page the
// auto-toggle IIFE must not run (content is already zh) and localStorage
// should remember zh.
const legacy = root
  .querySelectorAll('script')
  .find((s) => s.textContent.includes("localStorage.getItem('kuipraLang')"));
if (legacy) {
  legacy.set_content(
    legacy.textContent
      .replace("let currentLang = 'en';", "let currentLang = 'zh';")
      .replace(
        /\(function \(\) \{\s*let want = null;[\s\S]*?\}\)\(\);/,
        "try { localStorage.setItem('kuipraLang', 'zh'); } catch (e) {}",
      ),
  );
}

// --- hreflang cluster (added on both pages; EN side lives in index.html).
head?.insertAdjacentHTML(
  'beforeend',
  `\n<link rel="alternate" hreflang="en" href="${SITE}/">` +
    `\n<link rel="alternate" hreflang="zh-Hant" href="${SITE}/zh/">` +
    `\n<link rel="alternate" hreflang="x-default" href="${SITE}/">\n`,
);

mkdirSync('public/zh', { recursive: true });
writeFileSync('public/zh/index.html', root.toString(), 'utf-8');
console.log(
  `zh homepage generated: ${swapped} text swaps, ${faqPairs.length} FAQ pairs`,
);
