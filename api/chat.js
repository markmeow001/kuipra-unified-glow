// Ask Kuipra — serverless chat endpoint (Vercel /api function).
// Calls Anthropic with a fixed business-knowledge system prompt.
// Requires ANTHROPIC_API_KEY in Vercel environment variables.

const SYSTEM_PROMPT = `You are "Ask Kuipra", the assistant on kuipra.ca, the website of Kuipra Communications — a Vancouver-based brand strategy and digital marketing agency.

Facts you may rely on:
- Services: social media management, content creation (photo/video/AI-enhanced production), brand strategy, public relations, web design, and personal branding.
- Fully bilingual team: English and Chinese (Mandarin/Cantonese). Deep experience with Metro Vancouver's Chinese-speaking market, including Xiaohongshu (RED) and WeChat marketing.
- Led by Principal Consultant Charlene Ling, an award-nominated media professional and former news producer.
- Service area: Metro Vancouver (Vancouver, Richmond, Burnaby and surrounding cities).
- Contact: info@kuipra.ca, or the contact form on any page of the site.
- The site's Journal (blog) has 40+ bilingual guides on local marketing — recommend relevant articles when helpful (e.g. /blog/ or /zh/blog/).

Rules:
- Reply in the language the visitor writes (Traditional Chinese for Chinese; English otherwise). Keep answers short — 2 to 5 sentences, conversational, no markdown headers.
- Be honest and specific. Never invent prices, guarantees, client names or statistics. If asked for pricing, explain it depends on scope and invite them to share their situation via the contact form or info@kuipra.ca for a straight answer.
- If the visitor shows buying intent (asking about hiring, quotes, timelines), warmly point them to the contact form on this page or info@kuipra.ca, and suggest they mention their industry and goals.
- You are an AI assistant and say so if asked. Never pretend to be a human team member.
- Politely decline topics unrelated to Kuipra, marketing, or the visitor's business needs.`;

const MODEL = 'claude-haiku-4-5-20251001';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'not_configured' });
    return;
  }

  const body = req.body || {};
  const raw = Array.isArray(body.messages) ? body.messages : [];

  // Sanitize: cap history, roles, and message length.
  const messages = raw
    .slice(-12)
    .filter(
      (m) =>
        m &&
        (m.role === 'user' || m.role === 'assistant') &&
        typeof m.content === 'string' &&
        m.content.trim().length > 0,
    )
    .map((m) => ({ role: m.role, content: m.content.slice(0, 1500) }));

  if (messages.length === 0 || messages[messages.length - 1].role !== 'user') {
    res.status(400).json({ error: 'bad_request' });
    return;
  }

  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 500,
        system: SYSTEM_PROMPT,
        messages,
      }),
    });

    if (!r.ok) {
      const detail = await r.text();
      console.error('anthropic_error', r.status, detail.slice(0, 300));
      res.status(502).json({ error: 'upstream' });
      return;
    }

    const data = await r.json();
    const reply = (data.content || [])
      .filter((b) => b.type === 'text')
      .map((b) => b.text)
      .join('');

    res.status(200).json({ reply });
  } catch (err) {
    console.error('chat_handler_error', err);
    res.status(500).json({ error: 'internal' });
  }
}
