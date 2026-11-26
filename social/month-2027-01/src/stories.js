// Instagram Stories (25 Nov – 1 Dec 2026) and highlight covers for @playlistpulse.co.
// Usage: node social/stories-2026-11-25/src/stories.js
const path = require('path');
const fs = require('fs');
const { chromium } = require('playwright');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'out');
const HANDLE = '@playlistpulse.co';
const BRAND = 'PLAYLIST PULSE';
const LOGO = 'data:image/jpeg;base64,' +
  fs.readFileSync(path.join(__dirname, 'assets', 'logo.jpg')).toString('base64');

// Each day: highlight name + two stories.
const days = require('./content').stories;

const ICONS = {
  'SERVICES': '<path d="M9 18V6l12-2v12"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  'PROCESS': '<path d="M4 12h4l3-8 4 16 3-8h2"/>',
  'TIPS': '<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10.5c.8.8 1 1.5 1 2.5h6c0-1 .2-1.7 1-2.5A6 6 0 0 0 12 3z"/>',
  'START HERE': '<path d="M5 12h14M13 6l6 6-6 6"/>',
  'FAQ': '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.7M12 17h.01"/>',
  'RESULTS': '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
};

const css = `
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:1080px;height:1920px}
body{font-family:'Inter','Inter Display',sans-serif;color:#f5f5f7;background:#07070c;overflow:hidden;position:relative}
.bg{position:absolute;inset:0;background:
 radial-gradient(900px 900px at 85% 10%,rgba(255,46,136,.38),transparent 60%),
 radial-gradient(1000px 1000px at 0% 80%,rgba(124,92,255,.40),transparent 60%),
 radial-gradient(600px 600px at 60% 55%,rgba(34,211,238,.12),transparent 60%),#07070c}
.grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);background-size:72px 72px;mask-image:radial-gradient(circle at 50% 45%,#000 30%,transparent 80%)}
.frame{position:absolute;inset:0;padding:240px 90px 340px;display:flex;flex-direction:column}
.logo{display:flex;align-items:center;gap:18px;font-weight:800;letter-spacing:.22em;font-size:30px}
.mark{width:80px;height:80px;border-radius:20px;overflow:hidden;background:#fff;box-shadow:0 0 0 3px rgba(255,255,255,.15),0 8px 30px rgba(139,92,255,.35)}
.mark img{width:100%;height:100%;object-fit:cover}
.main{flex:1;display:flex;flex-direction:column;justify-content:center}
.kicker{align-self:flex-start;font-size:32px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;padding:14px 26px;border-radius:999px;border:2px solid rgba(255,255,255,.18);background:rgba(255,255,255,.06);margin-bottom:44px}
h1{font-family:'Inter Display','Inter',sans-serif;font-weight:800;letter-spacing:-.035em;line-height:1.03;font-size:118px}
h1 em{font-style:normal;background:linear-gradient(90deg,#ff4f9a,#9b6bff 55%,#3fe0f5);-webkit-background-clip:text;background-clip:text;color:transparent}
p.body{color:rgba(245,245,247,.8);font-weight:500;line-height:1.4;font-size:46px;margin-top:44px}
ul{list-style:none;margin-top:52px;display:flex;flex-direction:column;gap:22px}
li{font-size:44px;font-weight:700;padding:26px 34px;border-radius:28px;border:2px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);line-height:1.25}
.card{border-radius:36px;padding:44px 48px;border:2px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05)}
.card .lab{font-size:28px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;margin-bottom:18px}
.card .txt{font-size:60px;font-weight:700;line-height:1.15;letter-spacing:-.02em}
.myth .lab{color:#ff6b8f}.myth .txt{color:rgba(245,245,247,.6);text-decoration:line-through;text-decoration-thickness:5px;text-decoration-color:rgba(255,107,143,.7)}
.fact{margin-top:30px;border-color:rgba(63,224,245,.45);background:linear-gradient(135deg,rgba(139,92,255,.18),rgba(34,211,238,.10))}
.fact .lab{color:#3fe0f5}
.cta{align-self:flex-start;margin-top:56px;font-size:40px;font-weight:800;padding:28px 46px;border-radius:999px;background:linear-gradient(90deg,#ff2e88,#8b5cff 55%,#22d3ee);color:#fff}
.handle{font-size:32px;font-weight:600;color:rgba(255,255,255,.75)}
`;

function storyHtml(s) {
  let main = `<div class="kicker">${s.kicker}</div>`;
  if (s.myth) {
    main += `<div class="card myth"><div class="lab">✕ Myth</div><div class="txt">${s.myth}</div></div>
      <div class="card fact"><div class="lab">✓ Fact</div><div class="txt">${s.fact}</div></div>`;
  } else {
    main += `<h1>${s.title}</h1>`;
    if (s.body) main += `<p class="body">${s.body}</p>`;
    if (s.list) main += `<ul>${s.list.map(i => `<li>${i}</li>`).join('')}</ul>`;
  }
  if (s.cta) main += `<div class="cta">${s.cta}</div>`;
  return `<!doctype html><html><head><meta charset="utf-8"><style>${css}</style></head><body>
  <div class="bg"></div><div class="grid"></div>
  <div class="frame">
    <div class="logo"><div class="mark"><img src="${LOGO}"></div><span>${BRAND}</span></div>
    <div class="main">${main}</div>
    <div class="handle">${HANDLE}</div>
  </div></body></html>`;
}

function coverHtml(name) {
  return `<!doctype html><html><head><meta charset="utf-8"><style>
  *{margin:0;padding:0;box-sizing:border-box}
  html,body{width:1080px;height:1920px}
  body{background:#07070c;display:grid;place-items:center;font-family:'Inter',sans-serif;
    background:radial-gradient(700px 700px at 50% 50%,rgba(139,92,255,.35),transparent 70%),#07070c}
  .ring{width:820px;height:820px;border-radius:50%;display:grid;place-items:center;
    background:linear-gradient(135deg,#ff2e88,#8b5cff 55%,#22d3ee);padding:14px}
  .in{width:100%;height:100%;border-radius:50%;background:#0b0b12;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:40px}
  svg{width:330px;height:330px}
  .t{color:#fff;font-weight:800;font-size:64px;letter-spacing:.14em}
  </style></head><body><div class="ring"><div class="in">
    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]}</svg>
    <div class="t">${name}</div>
  </div></div></body></html>`;
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
  for (const d of days) {
    const dir = path.join(OUT, d.id);
    fs.mkdirSync(dir, { recursive: true });
    for (let i = 0; i < d.stories.length; i++) {
      await page.setContent(storyHtml(d.stories[i]), { waitUntil: 'load' });
      await page.evaluate(() => document.fonts.ready);
      await page.screenshot({ path: path.join(dir, `slide-${i + 1}.png`) });
    }
  }
  await browser.close();
  console.log('done');
})();
