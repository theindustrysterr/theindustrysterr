// Prints the Metricool post payloads for the month. Usage: node src/schedule.js <commit-sha> [fromIndex] [count]
const fs = require('fs');
const path = require('path');
const { posts, captions, stories } = require('./content');

const sha = process.argv[2];
const base = `https://raw.githubusercontent.com/theindustrysterr/theindustrysterr/${sha}/social/month-2026-12/out`;
const TIMES = { carousel: '10:00', quote: '14:00', reel: '18:00', story: '12:00' };

const items = [];
for (const p of [...posts, ...stories.map((s) => ({ id: s.id, type: 'story', slides: s.stories }))]) {
  const [mm, dd, kind] = p.id.split('-');
  const dir = path.join(__dirname, '..', 'out', p.id);
  const files = fs.readdirSync(dir).filter((f) => p.type === 'reel' ? f === 'reel.mp4' : f.startsWith('slide-'))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  const dateTime = `2026-${mm}-${dd}T${TIMES[kind]}:00`;
  const igType = p.type === 'reel' ? 'REEL' : p.type === 'story' ? 'STORY' : 'POST';
  const info = {
    autoPublish: true, descendants: [], draft: false, firstCommentText: '', hasNotReadNotes: false,
    media: files.map((f) => `${base}/${p.id}/${f}`), mediaAltText: [], providers: [{ network: 'instagram' }],
    publicationDate: { dateTime, timezone: 'Asia/Karachi' }, shortener: false, smartLinkData: { ids: [] },
    instagramData: { type: igType, isAiGenerated: false, ...(igType === 'REEL' ? { showReelOnFeed: true } : {}) },
  };
  if (igType !== 'STORY') info.text = captions[p.id];
  items.push({ date: `${dateTime}+05:00`, info: JSON.stringify(info) });
}
items.sort((a, b) => a.date.localeCompare(b.date));
fs.writeFileSync(path.join(__dirname, '..', 'schedule.json'), JSON.stringify(items, null, 1));
const from = +(process.argv[3] || 0), count = +(process.argv[4] || items.length);
console.log(`total ${items.length}`);
for (const it of items.slice(from, from + count)) console.log(it.date + '\n' + it.info + '\n');
