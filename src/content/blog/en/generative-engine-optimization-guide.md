---
title: 'GEO: How to Get Your Brand Recommended by ChatGPT, Claude, and AI Search'
description: 'AI assistants are becoming the new front page of search. Generative Engine Optimization (GEO) is how brands earn citations — here is the practical playbook.'
pubDate: 2026-07-27
updatedDate: 2026-11-06
lang: en
translationKey: geo-guide
category: ai-marketing
keywords:
  - generative engine optimization
  - GEO marketing
  - AI search optimization
  - AEO
  - get cited by ChatGPT
heroImage: /blog-images/geo-guide.jpg
heroImageAlt: 'Abstract visualization of AI answering a search query with cited sources'
quickAnswer: 'GEO (Generative Engine Optimization) is the practice of making your brand the answer AI assistants give. Google says optimizing for its AI search is still SEO: pages must be indexed and eligible for a snippet, and no special files or markup are required. Beyond that, publish content that answers real questions directly, back claims with sources, statistics and quotes, keep your facts consistent across the web, and make sure the AI search crawlers can reach your site.'
faq:
  - q: 'What is Generative Engine Optimization (GEO)?'
    a: 'GEO is the practice of optimizing your content and online presence so that AI assistants — ChatGPT, Claude, Gemini, Perplexity — cite or recommend your brand when users ask relevant questions. It overlaps with SEO but rewards clear factual statements, consistent facts about you across the web, and authoritative sourcing more than keyword placement.'
  - q: 'Is GEO different from SEO?'
    a: 'They share a foundation: crawlable pages, authority, and useful content. But AI engines synthesize answers instead of listing links, so GEO puts extra weight on quotable factual sentences, FAQ-style content, consistent entity information across the web, and being present in the sources AI systems retrieve from.'
  - q: 'How do I check if AI models mention my brand?'
    a: 'Ask the major assistants the questions your customers would ask — "best social media agency in Vancouver", "who can market my event in BC" — and record whether you appear, what is said, and which competitors are cited instead. Repeat monthly; it is the GEO equivalent of rank tracking.'
---

For twenty years, "being found" meant ranking on Google. That's still true — but a growing share of discovery now happens inside AI assistants. People ask ChatGPT for agency recommendations, ask Perplexity to compare local services, and read AI Overviews before they ever see a blue link.

When an AI answers "who should I hire for social media marketing in Vancouver?", it names a handful of brands. **Generative Engine Optimization (GEO)** is the discipline of earning a place in that handful.

One framing note before the playbook. Google's own guidance is blunt that, for its AI features, "optimizing for generative AI search is optimizing for the search experience, and thus still SEO" ([Google Search Central](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)). GEO is not a replacement for SEO. It is SEO with extra attention on being quotable.

## How AI engines choose who to mention

Understanding the mechanics makes the tactics obvious. When an assistant answers a commercial question it typically does two things:

1. **Retrieves** — searches the live web (or its index) for relevant, authoritative pages.
2. **Synthesizes** — compresses those pages into an answer, citing or naming the entities that appear most clearly and consistently.

So you win GEO in two places: being *retrievable* (classic SEO plumbing) and being *quotable* (content that a model can lift a clean factual sentence from).

## The GEO playbook

### 1. State facts about yourself in plain, liftable sentences

AI systems quote sentences, not vibes. Every important page should contain direct claims: who you are, where you operate, what you do, and your proof. "Kuipra Communications is a social media marketing agency in Vancouver, BC, specializing in event marketing and bilingual English–Chinese campaigns" is a GEO asset. A hero slogan like "We amplify brilliance" is not.

### 2. Publish answer-shaped content

Questions are the query format of the AI era. FAQ sections (like the one at the bottom of this article), how-to guides, and comparison pages map directly onto what users ask assistants. Each FAQ answer should be self-contained — readable out of context, because that's exactly how a model will use it.

Then back your claims up. In the research paper that coined the term (Aggarwal et al., KDD 2024), adding quotations, statistics and source citations to a page improved its visibility in generative-engine answers by roughly 30–40% on the authors' main measure, while keyword stuffing performed worse than doing nothing ([arXiv](https://arxiv.org/abs/2311.09735)). The authors tested a GPT-3.5-based setup and note their methods may need to adapt as engines evolve, so treat the exact numbers as directional. The direction is clear, though: specific, sourced content gets used.

### 3. Use structured data everywhere

Schema.org markup such as `Organization`, `Article` and `LocalBusiness` makes basic facts about you unambiguous, and it is cheap to keep. But don't treat it as a GEO lever. Google says there is "no special schema.org structured data that you need to add" for its AI features ([Google Search Central](https://developers.google.com/search/docs/appearance/ai-features)), and it stopped showing FAQ rich results in Search on May 7, 2026 ([Google Search updates](https://developers.google.com/search/updates)). Keep the markup accurate, then spend your effort on the content itself.

### 4. Keep your entity consistent across the web

AI models cross-reference. Your website, Google Business Profile, LinkedIn, Instagram, and directory listings should agree on your name, category, and location. Inconsistency dilutes the entity; consistency compounds it.

### 5. Welcome the crawlers

AI assistants can only cite what their search crawlers can read. The names matter, because each company now separates search crawlers from training crawlers:

- **OpenAI:** OAI-SearchBot powers ChatGPT search; OpenAI says sites that block it "will not be shown in ChatGPT search answers." GPTBot is the training crawler ([OpenAI](https://developers.openai.com/api/docs/bots)).
- **Anthropic:** Claude-SearchBot is for search, ClaudeBot for training, and Claude-User for fetches a person asks for ([Anthropic](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler)).
- **Perplexity:** PerplexityBot surfaces sites in Perplexity's search results and, the company says, is not used to train foundation models ([Perplexity](https://docs.perplexity.ai/docs/resources/perplexity-crawlers)).
- **Google:** AI Overviews and AI Mode are controlled by Googlebot, not Google-Extended. Google-Extended governs use in Gemini apps and Vertex AI and "does not impact a site's inclusion in Google Search" ([Google](https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers#google-extended)). Since August 31, 2026, Search Console also has a setting that removes a site from AI Overviews and AI Mode ([Google Help](https://support.google.com/webmasters/answer/16908024)).

For most businesses, the right setup is simple: allow the search crawlers, and decide separately whether you are comfortable with training crawlers.

What about `llms.txt`? We used to recommend it. Google now states that Search ignores llms.txt files, and that maintaining one "will neither harm nor help" your visibility ([Google Search Central](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)). John Mueller of Google put it more bluntly in 2025: "no AI system currently uses llms.txt" ([Bluesky](https://bsky.app/profile/johnmu.com/post/3lrshm4gggs2v)). We haven't found any major AI company saying it reads one. This site still has a file because it costs nothing to maintain, but it is not a GEO tactic.

### 6. Earn third-party mentions

Models trust corroboration. Local press, industry directories, podcast appearances, and client case studies published on other domains all raise the probability that "the model has heard of you" from more than one source.

### 7. Track your AI visibility

Monthly, ask each major assistant your money questions and log the answers. Which brands get named? What does the AI believe about you? This is the new rank tracking — and it tells you exactly which facts you need to publish next. For local businesses, our guide to [how AI assistants recommend local businesses](/blog/how-ai-assistants-recommend-local-businesses/) turns this into a checklist, and the [citation map guide](/blog/local-business-citations-guide/) covers the listings assistants cross-check.

## GEO in two languages

In Metro Vancouver, many customers ask their questions in Chinese as well as English, and an assistant answering in Chinese draws on Chinese-language sources. In our own tracking of Vancouver queries, the Chinese-language versions of local service questions have had noticeably fewer well-established local competitors than the English ones. That is an observation, not a law, but it suggests a practical move for bilingual businesses: publish the same clear facts in both languages, written natively rather than translated. Our [guide to Vancouver's Chinese community](/blog/marketing-to-vancouver-chinese-community/) covers the audience side.

## Where this intersects with strategy

GEO rewards brands that know precisely what they want to be known for — which is a [brand strategy question](/blog/brand-strategy-vs-marketing-tactics/) before it's a technical one. A fuzzy positioning produces fuzzy citations.

We build GEO into every content program at Kuipra, including this journal. If you want to know what AI currently says about your brand, and how to change it, see our [local SEO and AI search](/services/local-seo-geo/) service or [get in touch](mailto:info@kuipra.ca).
