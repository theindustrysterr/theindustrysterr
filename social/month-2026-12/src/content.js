// Turns month.js into the posts list render.js expects, and builds captions + stories.
const { days } = require('./month');

const HANDLE = '@playlistpulse.co';
const BRAND = 'PLAYLIST PULSE';
const strip = (s) => s.replace(/<[^>]+>/g, '');
const NUM = ['1️⃣', '2️⃣', '3️⃣', '4️⃣'];
const TAGSETS = [
  '#musicmarketing #independentartist #newmusic #musicpromotion #spotifygrowth #artisttips #musicindustry #upcomingartist #promoteyourmusic #spotifyforartists #musicbusiness #playlistpitching',
  '#independentmusician #musicpromo #newartist #spotifyartist #indieartist #musicstrategy #artistdevelopment #musicadvice #releasestrategy #undergroundartist #musiccareer #growyourmusic',
  '#musicmarketingtips #indiemusic #singersongwriter #rapper #producer #musicians #spotifyplaylist #instagramreels #musicgrowth #artistsupport #newmusicfriday #musiclife',
  '#musicpromotion #artistgrowth #independentartists #hiphopartist #popartist #edmartist #desimusic #spotifytips #musicteam #artistmanagement #musicstartup #realfans',
];

const posts = [];
const captions = {};
const stories = [];

days.forEach(([date, topic, quote], i) => {
  const tags = TAGSETS[i % TAGSETS.length];
  const id = date.slice(5);

  posts.push({ id: `${id}-carousel`, type: 'carousel', slides: [
    { kind: 'cover', kicker: topic.k, title: topic.t, body: 'Swipe for the full breakdown.' },
    ...topic.pts.map((p, n) => ({ kind: 'point', num: `0${n + 1}`, kicker: p[0], title: p[1], body: p[2] })),
    { kind: 'cta', kicker: 'Found this useful?', title: 'Follow for <em>daily</em> artist tips', body: `Save this, send it to an artist friend, and DM us “${topic.cta}” for help.` },
  ] });
  captions[`${id}-carousel`] =
    `${strip(topic.t)} 👇 (save this)\n\n` +
    topic.pts.map((p, n) => `0${n + 1} ${p[1]} ${p[2]}`).join('\n') +
    `\n\n${topic.q} 👇\n\n💾 Save it · 📤 Send it to an artist friend\n➕ Follow ${HANDLE} for daily artist tips\n\nNeed help? DM us "${topic.cta}" 🎧\n\n${tags}`;

  posts.push({ id: `${id}-quote`, type: 'image', slides: [{ kind: 'statement', kicker: quote.k, title: quote.t, body: quote.b }] });
  captions[`${id}-quote`] = quote.drop
    ? `🎤 ARTIST SHOUTOUT\n\nDrop your Spotify link in the comments 👇\n\nWe listen to every track and share our favourites in our Stories this weekend.\n\n✅ Follow ${HANDLE} so you don't miss the shoutouts\n✅ Tag an artist friend who should drop theirs\n\n${tags}`
    : `${strip(quote.t)}\n\n${quote.b}\n\nDouble tap if you agree 💜\n➕ Follow ${HANDLE} for daily artist tips\n\n${tags}`;

  posts.push({ id: `${id}-reel`, type: 'reel', scenes: [
    { kind: 'hook', kicker: topic.k, title: topic.t },
    ...topic.pts.map((p, n) => ({ kind: 'step', num: `0${n + 1}`, title: strip(p[1]).replace(/\.$/, ''), body: p[2] })),
    { kind: 'cta', kicker: 'Follow for daily artist tips', title: `DM <em>“${topic.cta}”</em>` },
  ] });
  captions[`${id}-reel`] =
    `${strip(topic.t)} 🎧\n\n` +
    topic.pts.map((p, n) => `${NUM[n]} ${p[1]}`).join('\n') +
    `\n\n${topic.q} 👇\n\n➕ Follow ${HANDLE} for daily artist tips\n📤 Share this with an artist who needs it\n\nDM us "${topic.cta}" 🚀\n\n${tags}`;

  stories.push({ id: `${id}-story`, stories: [
    { kicker: 'New on our feed', title: topic.t, list: topic.pts.map((p) => p[1]), cta: 'Follow for daily artist tips' },
  ] });
});

module.exports = { posts, HANDLE, BRAND, captions, stories, days };
