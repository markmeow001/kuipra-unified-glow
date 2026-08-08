// Ask Kuipra — self-contained floating chat widget.
// Injects its own DOM + styles; talks to /api/chat.
(function () {
  if (window.__askKuipraLoaded) return;
  window.__askKuipraLoaded = true;

  var zh =
    document.documentElement.lang === 'zh' ||
    location.pathname.indexOf('/zh/') === 0 ||
    location.pathname === '/zh';

  var t = {
    button: 'Ask Kuipra',
    title: 'Ask Kuipra',
    greeting: zh
      ? '嗨！我是 Kuipra 的 AI 助理。想了解我們的服務、雙語行銷，或不確定從哪開始？都可以問我。'
      : "Hi! I'm Kuipra's AI assistant. Ask me about our services, bilingual marketing, or where to start.",
    placeholder: zh ? '輸入你的問題…' : 'Type your question…',
    send: zh ? '送出' : 'Send',
    error: zh
      ? '暫時連不上，請稍後再試，或直接來信 info@kuipra.ca'
      : 'Connection hiccup — try again shortly, or email info@kuipra.ca',
    disclosure: zh ? 'AI 助理・回覆僅供參考' : 'AI assistant · answers are informational',
  };

  var css =
    '.akw-btn{position:fixed;right:22px;bottom:22px;z-index:9000;display:flex;align-items:center;gap:8px;' +
    'background:#0d1b2e;color:#f5f1e8;border:1px solid rgba(245,241,232,.25);border-radius:999px;' +
    'padding:12px 20px;font-size:14px;letter-spacing:.04em;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.28);transition:transform .15s}' +
    '.akw-btn:hover{transform:translateY(-2px)}' +
    '.akw-btn .akw-dot{width:8px;height:8px;border-radius:50%;background:#e8853d}' +
    '.akw-panel{position:fixed;right:22px;bottom:84px;z-index:9001;width:min(380px,calc(100vw - 32px));' +
    'height:min(540px,calc(100vh - 120px));background:#0d1b2e;color:#f5f1e8;border:1px solid rgba(245,241,232,.15);' +
    'border-radius:14px;display:none;flex-direction:column;overflow:hidden;box-shadow:0 16px 48px rgba(0,0,0,.4);' +
    'font-size:14.5px;line-height:1.6}' +
    '.akw-panel.open{display:flex}' +
    '.akw-head{display:flex;align-items:center;justify-content:space-between;padding:14px 18px;border-bottom:1px solid rgba(245,241,232,.12)}' +
    '.akw-head b{font-weight:600;letter-spacing:.03em}' +
    '.akw-head small{display:block;opacity:.55;font-size:11px;margin-top:2px}' +
    '.akw-close{background:none;border:none;color:rgba(245,241,232,.6);font-size:22px;cursor:pointer;line-height:1}' +
    '.akw-close:hover{color:#fff}' +
    '.akw-msgs{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px}' +
    '.akw-m{max-width:85%;padding:10px 14px;border-radius:12px;white-space:pre-wrap;word-break:break-word}' +
    '.akw-m.bot{background:rgba(245,241,232,.08);align-self:flex-start;border-bottom-left-radius:4px}' +
    '.akw-m.user{background:#e8853d;color:#141414;align-self:flex-end;border-bottom-right-radius:4px}' +
    '.akw-m.wait span{display:inline-block;width:6px;height:6px;margin-right:4px;border-radius:50%;background:rgba(245,241,232,.5);animation:akwb 1.2s infinite}' +
    '.akw-m.wait span:nth-child(2){animation-delay:.2s}.akw-m.wait span:nth-child(3){animation-delay:.4s}' +
    '@keyframes akwb{0%,60%,100%{opacity:.3}30%{opacity:1}}' +
    '.akw-form{display:flex;gap:8px;padding:12px;border-top:1px solid rgba(245,241,232,.12)}' +
    '.akw-form input{flex:1;background:rgba(245,241,232,.07);border:1px solid rgba(245,241,232,.18);' +
    'border-radius:8px;color:#f5f1e8;padding:10px 12px;font-size:14px;outline:none}' +
    '.akw-form input:focus{border-color:#e8853d}' +
    '.akw-form button{background:#e8853d;color:#141414;border:none;border-radius:8px;padding:0 16px;font-size:14px;cursor:pointer}' +
    '.akw-form button:disabled{opacity:.5;cursor:default}' +
    '@media (max-width:480px){.akw-btn{right:14px;bottom:14px}.akw-panel{right:8px;bottom:72px}}';

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var btn = document.createElement('button');
  btn.className = 'akw-btn';
  btn.setAttribute('aria-label', t.button);
  btn.innerHTML = '<span class="akw-dot"></span>' + t.button;

  var panel = document.createElement('div');
  panel.className = 'akw-panel';
  panel.innerHTML =
    '<div class="akw-head"><div><b>' + t.title + '</b><small>' + t.disclosure + '</small></div>' +
    '<button class="akw-close" aria-label="close">&times;</button></div>' +
    '<div class="akw-msgs"></div>' +
    '<form class="akw-form"><input type="text" maxlength="1000" placeholder="' + t.placeholder + '">' +
    '<button type="submit">' + t.send + '</button></form>';

  document.body.appendChild(btn);
  document.body.appendChild(panel);

  var msgs = panel.querySelector('.akw-msgs');
  var form = panel.querySelector('.akw-form');
  var input = form.querySelector('input');
  var sendBtn = form.querySelector('button');
  var history = [];

  function add(role, text) {
    var el = document.createElement('div');
    el.className = 'akw-m ' + (role === 'user' ? 'user' : 'bot');
    el.textContent = text;
    msgs.appendChild(el);
    msgs.scrollTop = msgs.scrollHeight;
    return el;
  }

  add('bot', t.greeting);

  btn.addEventListener('click', function () {
    panel.classList.toggle('open');
    if (panel.classList.contains('open')) input.focus();
  });
  panel.querySelector('.akw-close').addEventListener('click', function () {
    panel.classList.remove('open');
  });

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    var text = input.value.trim();
    if (!text || sendBtn.disabled) return;
    input.value = '';
    add('user', text);
    history.push({ role: 'user', content: text });

    var wait = document.createElement('div');
    wait.className = 'akw-m bot wait';
    wait.innerHTML = '<span></span><span></span><span></span>';
    msgs.appendChild(wait);
    msgs.scrollTop = msgs.scrollHeight;
    sendBtn.disabled = true;

    try {
      var r = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ messages: history.slice(-12) }),
      });
      var data = await r.json();
      wait.remove();
      if (!r.ok || !data.reply) throw new Error('bad response');
      add('bot', data.reply);
      history.push({ role: 'assistant', content: data.reply });
    } catch (err) {
      wait.remove();
      add('bot', t.error);
    } finally {
      sendBtn.disabled = false;
      input.focus();
    }
  });
})();
