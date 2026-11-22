// Renders every slide and reel scene to PNG with Playwright.
// Usage: node src/render.js   (run from social/week-2026-11-23)
const path = require('path');
const fs = require('fs');
const { chromium } = require('playwright');
const { posts, HANDLE, BRAND } = require('./content');

const OUT = path.join(__dirname, '..', 'out');

const pulseSvg = (w, h, stroke = 'url(#g)', opacity = 1) => `
<svg width="${w}" height="${h}" viewBox="0 0 1000 200" preserveAspectRatio="none" style="opacity:${opacity}">
  <defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#ff2e88"/><stop offset=".5" stop-color="#8b5cff"/><stop offset="1" stop-color="#22d3ee"/></linearGradient></defs>
  <polyline fill="none" stroke="${stroke}" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"
    points="0,100 300,100 330,100 350,60 370,140 390,20 410,180 430,70 450,120 470,100 520,100 540,85 560,115 580,100 1000,100"/>
</svg>`;

const logo = `
<div class="logo">
  <div class="mark">${pulseSvg(58, 30, '#fff')}</div>
  <span>${BRAND}</span>
</div>`;

const css = (W, H, reel) => `
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:${W}px;height:${H}px}
body{font-family:'Inter','Inter Display',sans-serif;color:#f5f5f7;background:#07070c;overflow:hidden;position:relative}
.bg{position:absolute;inset:0;
  background:
   radial-gradient(${reel ? '900px 900px at 85% 12%' : '700px 700px at 90% 5%'}, rgba(255,46,136,.38), transparent 60%),
   radial-gradient(${reel ? '1000px 1000px at 0% 75%' : '800px 800px at 0% 100%'}, rgba(124,92,255,.40), transparent 60%),
   radial-gradient(600px 600px at 60% 60%, rgba(34,211,238,.12), transparent 60%),
   #07070c}
.grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);background-size:72px 72px;mask-image:radial-gradient(circle at 50% 45%,#000 30%,transparent 80%)}
.wave{position:absolute;left:0;right:0;${reel ? 'top:1520px' : 'top:1100px'};opacity:.3}
.frame{position:absolute;inset:0;padding:${reel ? '250px 96px 430px' : '84px 88px'};display:flex;flex-direction:column}
.top{display:flex;justify-content:space-between;align-items:center}
.logo{display:flex;align-items:center;gap:16px;font-weight:800;letter-spacing:.22em;font-size:${reel ? 30 : 24}px}
.mark{width:${reel ? 76 : 64}px;height:${reel ? 76 : 64}px;border-radius:18px;display:grid;place-items:center;background:linear-gradient(135deg,#ff2e88,#8b5cff 55%,#22d3ee)}
.count{font-size:24px;font-weight:600;color:rgba(255,255,255,.6);letter-spacing:.1em}
.main{flex:1;display:flex;flex-direction:column;justify-content:center}
.kicker{display:inline-block;align-self:flex-start;font-size:${reel ? 34 : 26}px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;padding:14px 24px;border-radius:999px;border:2px solid rgba(255,255,255,.18);background:rgba(255,255,255,.06);margin-bottom:${reel ? 48 : 40}px}
h1{font-family:'Inter Display','Inter',sans-serif;font-weight:800;letter-spacing:-.035em;line-height:1.02}
h1 em,.em{font-style:normal;background:linear-gradient(90deg,#ff4f9a,#9b6bff 55%,#3fe0f5);-webkit-background-clip:text;background-clip:text;color:transparent}
p.body{color:rgba(245,245,247,.78);font-weight:500;line-height:1.38;margin-top:${reel ? 48 : 40}px}
.num{font-family:'Inter Display','Inter',sans-serif;font-weight:800;line-height:1;letter-spacing:-.04em;background:linear-gradient(135deg,#ff4f9a,#9b6bff 55%,#3fe0f5);-webkit-background-clip:text;background-clip:text;color:transparent}
.bottom{display:flex;justify-content:space-between;align-items:center;font-size:${reel ? 32 : 26}px;font-weight:600;color:rgba(255,255,255,.75)}
.swipe{display:flex;align-items:center;gap:12px;padding:16px 28px;border-radius:999px;background:#fff;color:#07070c;font-weight:800}
.card{border-radius:36px;padding:44px 48px;border:2px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05)}
.card .lab{font-size:24px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;margin-bottom:18px}
.card .txt{font-size:46px;font-weight:700;line-height:1.18;letter-spacing:-.02em}
.myth .lab{color:#ff6b8f}.myth .txt{color:rgba(245,245,247,.6);text-decoration:line-through;text-decoration-thickness:4px;text-decoration-color:rgba(255,107,143,.7)}
.fact{margin-top:28px;border-color:rgba(63,224,245,.45);background:linear-gradient(135deg,rgba(139,92,255,.18),rgba(34,211,238,.10))}
.fact .lab{color:#3fe0f5}
.tags{display:flex;flex-wrap:wrap;gap:16px;margin-top:56px}
.tag{font-size:26px;font-weight:700;padding:14px 26px;border-radius:999px;border:2px solid rgba(255,255,255,.2);background:rgba(255,255,255,.06)}
.ctabtn{align-self:flex-start;margin-top:56px;font-size:${reel ? 40 : 32}px;font-weight:800;padding:${reel ? '28px 48px' : '24px 40px'};border-radius:999px;background:linear-gradient(90deg,#ff2e88,#8b5cff 55%,#22d3ee);color:#fff}
`;

function slideHtml(s, i, n, post) {
  const isCarousel = post.type === 'carousel';
  const last = i === n - 1;
  let main = '';
  if (s.kind === 'cover' || s.kind === 'statement') {
    main = `<div class="kicker">${s.kicker}</div>
      <h1 style="font-size:${s.kind === 'statement' ? 128 : 118}px">${s.title}</h1>
      <p class="body" style="font-size:40px">${s.body}</p>
      ${s.tags ? `<div class="tags">${s.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>` : ''}`;
  } else if (s.kind === 'point') {
    main = `<div class="num" style="font-size:200px;margin-bottom:24px">${s.num}</div>
      <div class="kicker">${s.kicker}</div>
      <h1 style="font-size:92px">${s.title}</h1>
      <p class="body" style="font-size:38px">${s.body}</p>`;
  } else if (s.kind === 'myth') {
    main = `<div class="card myth"><div class="lab">✕ Myth</div><div class="txt">${s.myth}</div></div>
      <div class="card fact"><div class="lab">✓ Fact</div><div class="txt" style="font-size:52px">${s.fact}</div></div>`;
  } else if (s.kind === 'cta') {
    main = `<div class="kicker">${s.kicker}</div>
      <h1 style="font-size:124px">${s.title}</h1>
      <p class="body" style="font-size:40px">${s.body}</p>
      <div class="ctabtn">Message ${HANDLE}</div>`;
  }
  return `<!doctype html><html><head><meta charset="utf-8"><style>${css(1080, 1350, false)}</style></head><body>
  <div class="bg"></div><div class="grid"></div><div class="wave">${pulseSvg(1080, 220, 'url(#g)', 1)}</div>
  <div class="frame">
    <div class="top">${logo}${isCarousel ? `<div class="count">${String(i + 1).padStart(2, '0')} / ${String(n).padStart(2, '0')}</div>` : ''}</div>
    <div class="main">${main}</div>
    <div class="bottom"><span>${HANDLE}</span>${isCarousel && !last ? '<span class="swipe">Swipe →</span>' : ''}</div>
  </div></body></html>`;
}

function sceneHtml(s) {
  let main = '';
  if (s.kind === 'hook') {
    main = `<div class="kicker">${s.kicker}</div><h1 style="font-size:150px">${s.title}</h1>`;
  } else if (s.kind === 'step') {
    const big = s.num.length <= 2;
    main = `<div class="num" style="font-size:${big ? 280 : 130}px;margin-bottom:${big ? 20 : 40}px">${s.num}</div>
      <h1 style="font-size:120px">${s.title}</h1>
      <p class="body" style="font-size:52px">${s.body}</p>`;
  } else if (s.kind === 'cta') {
    main = `<div class="kicker">${s.kicker}</div><h1 style="font-size:170px">${s.title}</h1>
      <div class="ctabtn">${HANDLE}</div>`;
  }
  return `<!doctype html><html><head><meta charset="utf-8"><style>${css(1080, 1920, true)}</style></head><body>
  <div class="bg"></div><div class="grid"></div><div class="wave">${pulseSvg(1080, 260, 'url(#g)', 1)}</div>
  <div class="frame">
    <div class="top">${logo}</div>
    <div class="main">${main}</div>
    <div class="bottom"><span>${HANDLE}</span></div>
  </div></body></html>`;
}

(async () => {
  const browser = await chromium.launch();
  for (const post of posts) {
    const dir = path.join(OUT, post.id);
    fs.mkdirSync(dir, { recursive: true });
    const reel = post.type === 'reel';
    const page = await browser.newPage({ viewport: { width: 1080, height: reel ? 1920 : 1350 }, deviceScaleFactor: 1 });
    const items = reel ? post.scenes : post.slides;
    for (let i = 0; i < items.length; i++) {
      const html = reel ? sceneHtml(items[i]) : slideHtml(items[i], i, items.length, post);
      await page.setContent(html, { waitUntil: 'load' });
      await page.evaluate(() => document.fonts.ready);
      const name = reel ? `scene-${i + 1}.png` : `slide-${i + 1}.png`;
      await page.screenshot({ path: path.join(dir, name), type: 'png' });
    }
    await page.close();
    console.log('rendered', post.id, items.length);
  }
  await browser.close();
})();
