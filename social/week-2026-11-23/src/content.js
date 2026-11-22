// Content for the Playlist Pulse week of 23–29 Nov 2026.
// Each post: id, type (carousel | image | reel), slides/scenes.

const HANDLE = '@playlistpulse.co';
const BRAND = 'PLAYLIST PULSE';

const posts = [
  {
    id: '01-mon-services',
    type: 'carousel',
    slides: [
      { kind: 'cover', kicker: 'Music Marketing Agency', title: 'Your music deserves to be <em>heard.</em>', body: 'Here is how we help artists grow.' },
      { kind: 'point', num: '01', kicker: 'Spotify Growth', title: 'Playlists that move the needle.', body: 'Genre-matched pitching to real curators, Release Radar strategy and listener growth the algorithm notices.' },
      { kind: 'point', num: '02', kicker: 'YouTube Promotion', title: 'Views from real fans.', body: 'Targeted video campaigns and channel optimisation that put your music video in front of people who love your genre.' },
      { kind: 'point', num: '03', kicker: 'Instagram & TikTok', title: 'Turn a snippet into a moment.', body: 'Reels strategy, content planning and creator collaborations that get your sound used and shared.' },
      { kind: 'point', num: '04', kicker: 'Release Strategy', title: 'A plan before the drop.', body: 'Pre-save campaigns, rollout calendars and launch-week planning, from first teaser to post-release push.' },
      { kind: 'cta', kicker: 'Ready to grow?', title: 'DM us <em>“GROW”</em>', body: 'Send your track link and we will reply with a plan for your next release.' },
    ],
  },
  {
    id: '02-tue-reel-mistakes',
    type: 'reel',
    scenes: [
      { kind: 'hook', kicker: 'Artists, listen up', title: '3 mistakes that <em>kill</em> your release' },
      { kind: 'step', num: '01', title: 'No pre-save campaign', body: 'Day-one saves tell the algorithm your song matters.' },
      { kind: 'step', num: '02', title: 'Pitching too late', body: 'Pitch in Spotify for Artists at least 7 days before release.' },
      { kind: 'step', num: '03', title: 'Posting once, then silence', body: 'A release needs weeks of content, not one post.' },
      { kind: 'cta', kicker: 'We plan the whole rollout', title: 'DM <em>“RELEASE”</em>' },
    ],
  },
  {
    id: '03-wed-playlist-pitching',
    type: 'carousel',
    slides: [
      { kind: 'cover', kicker: 'Spotify 101', title: 'How playlist pitching <em>actually</em> works', body: 'Three kinds of playlists. Three different strategies.' },
      { kind: 'point', num: '01', kicker: 'Editorial playlists', title: 'Curated by Spotify’s team.', body: 'You pitch one unreleased song through Spotify for Artists. Strong story, clear genre and early submission all help.' },
      { kind: 'point', num: '02', kicker: 'Algorithmic playlists', title: 'Release Radar, Discover Weekly, Radio.', body: 'Driven by listener behaviour: saves, repeat plays, playlist adds and low skip rates.' },
      { kind: 'point', num: '03', kicker: 'Independent curators', title: 'Real people, real audiences.', body: 'Genre-specific curators with engaged followers. Avoid botted playlists: they can hurt your account.' },
      { kind: 'cta', kicker: 'Our approach', title: 'Real curators. <em>No bots.</em>', body: 'We pitch your track to vetted, genre-matched playlists. DM “PITCH” to start.' },
    ],
  },
  {
    id: '04-thu-reel-roadmap',
    type: 'reel',
    scenes: [
      { kind: 'hook', kicker: 'Behind the scenes', title: 'How we launch a song in <em>4 weeks</em>' },
      { kind: 'step', num: 'WEEK 1', title: 'Strategy & assets', body: 'Goals, audience, artwork, snippets and the full rollout calendar.' },
      { kind: 'step', num: 'WEEK 2', title: 'Pre-save & teasers', body: 'Pre-save link live, teaser Reels and countdown content.' },
      { kind: 'step', num: 'WEEK 3', title: 'Pitching & outreach', body: 'Editorial pitch, curator outreach and creator seeding.' },
      { kind: 'step', num: 'WEEK 4', title: 'Release week', body: 'Ads, playlist push, content every day and a results report.' },
      { kind: 'cta', kicker: 'Dropping soon?', title: 'DM <em>“LAUNCH”</em>' },
    ],
  },
  {
    id: '05-fri-streams',
    type: 'image',
    slides: [
      { kind: 'statement', kicker: 'Music Marketing Agency', title: 'Streams don’t just <em>happen.</em>', body: 'Behind every breakout track is a plan.', tags: ['Spotify', 'YouTube', 'Instagram', 'TikTok', 'SoundCloud', 'Apple Music'] },
    ],
  },
  {
    id: '06-sat-myths',
    type: 'carousel',
    slides: [
      { kind: 'cover', kicker: 'Myth vs Fact', title: 'Bought streams vs <em>real</em> promotion', body: 'Know the difference before you spend a rupee.' },
      { kind: 'myth', myth: 'More streams = success.', fact: 'Saves, follows and repeat listens are what the algorithm rewards.' },
      { kind: 'myth', myth: 'Botted plays are harmless.', fact: 'Spotify removes artificial streams and can take action against the release.' },
      { kind: 'myth', myth: 'Promotion is only for big artists.', fact: 'Independent artists grow fastest with a focused, genre-targeted plan.' },
      { kind: 'cta', kicker: '100% real promotion', title: 'Grow the <em>right</em> way.', body: 'Real listeners, real curators, real results. DM “REAL” to get started.' },
    ],
  },
  {
    id: '07-sun-reel-work-with-us',
    type: 'reel',
    scenes: [
      { kind: 'hook', kicker: 'Independent artist?', title: 'Grow your music in <em>3 steps</em>' },
      { kind: 'step', num: '01', title: 'Send your track', body: 'DM us your Spotify or YouTube link.' },
      { kind: 'step', num: '02', title: 'Get a custom plan', body: 'Playlists, ads and content built for your genre and goals.' },
      { kind: 'step', num: '03', title: 'Launch & track results', body: 'We run the campaign and report what is working.' },
      { kind: 'cta', kicker: 'Your next release starts here', title: 'DM <em>“GROW”</em>' },
    ],
  },
];

module.exports = { posts, HANDLE, BRAND };
