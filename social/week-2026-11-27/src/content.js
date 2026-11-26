// Content for Playlist Pulse, 27 Nov – 3 Dec 2026 (adds to the posts already scheduled).
const HANDLE = '@playlistpulse.co';
const BRAND = 'PLAYLIST PULSE';
const TAGS = ['Spotify', 'YouTube', 'Instagram', 'TikTok', 'SoundCloud', 'Apple Music'];

const posts = [
  // ---------- Single tip posts (2 PM) ----------
  { id: 's1-fri-deadline', type: 'image', slides: [{ kind: 'statement', kicker: 'Release tip', title: 'Your release date is a <em>deadline.</em>', body: 'Start promoting 4 weeks before release, not on the day it drops.', tags: TAGS }] },
  { id: 's2-sat-playlist', type: 'image', slides: [{ kind: 'statement', kicker: 'Playlist tip', title: 'A playlist add is a <em>beginning.</em>', body: 'Keep new listeners with content, follow-ups and your next release.', tags: TAGS }] },
  { id: 's3-sun-consistency', type: 'image', slides: [{ kind: 'statement', kicker: 'Growth tip', title: 'Consistency beats <em>virality.</em>', body: 'A release every 6–8 weeks keeps the algorithm and your fans engaged.', tags: TAGS }] },
  { id: 's4-mon-storefront', type: 'image', slides: [{ kind: 'statement', kicker: 'Spotify tip', title: 'Your profile is your <em>storefront.</em>', body: 'Update your photo, bio, Artist Pick and Canvas before every release.', tags: TAGS }] },
  { id: 's5-tue-fans', type: 'image', slides: [{ kind: 'statement', kicker: 'Real talk', title: 'Don’t buy streams. <em>Build fans.</em>', body: 'Real listeners save, share and come back. Bots never do.', tags: TAGS }] },
  { id: 's6-wed-snippet', type: 'image', slides: [{ kind: 'statement', kicker: 'Content tip', title: 'Every snippet is an <em>ad.</em>', body: 'Post 15-second hooks of your song on Reels and TikTok weeks before release.', tags: TAGS }] },
  { id: 's7-thu-numbers', type: 'image', slides: [{ kind: 'statement', kicker: 'Data tip', title: 'Know your <em>numbers.</em>', body: 'Track saves, listeners and playlist adds, not just total plays.', tags: TAGS }] },

  // ---------- Carousels (10 AM) ----------
  { id: 'c1-sun-s4a-checklist', type: 'carousel', slides: [
    { kind: 'cover', kicker: 'Save this', title: 'Spotify for Artists <em>checklist</em>', body: 'Do these before every release.' },
    { kind: 'point', num: '01', kicker: 'Claim your profile', title: 'Get verified first.', body: 'Claim your artist profile in Spotify for Artists so you can pitch, edit and see your data.' },
    { kind: 'point', num: '02', kicker: 'Pitch early', title: '7+ days before release.', body: 'Pitch one unreleased song to editors with genre, mood and story filled in.' },
    { kind: 'point', num: '03', kicker: 'Dress your profile', title: 'Artist Pick & Canvas.', body: 'Pin the new song as your Artist Pick and add a looping Canvas video to it.' },
    { kind: 'point', num: '04', kicker: 'Build hype', title: 'Pre-save & countdown.', body: 'Share a pre-save link and a Countdown Page so fans can save before day one.' },
    { kind: 'cta', kicker: 'Want it done for you?', title: 'DM us <em>“CHECKLIST”</em>', body: 'We set up and run your full Spotify release plan.' },
  ] },
  { id: 'c2-mon-youtube', type: 'carousel', slides: [
    { kind: 'cover', kicker: 'YouTube for musicians', title: '4 ways to grow on <em>YouTube</em>', body: 'Swipe for the playbook.' },
    { kind: 'point', num: '01', kicker: 'More than one video', title: 'Official + lyric video.', body: 'Two formats of the same song reach two kinds of viewers.' },
    { kind: 'point', num: '02', kicker: 'Shorts', title: 'Put your hook in Shorts.', body: 'Short clips of the best 15 seconds send new viewers to the full song.' },
    { kind: 'point', num: '03', kicker: 'Titles & thumbnails', title: 'Make it searchable.', body: 'Artist name and song title in the title, a clear face or artwork in the thumbnail.' },
    { kind: 'point', num: '04', kicker: 'Launch it', title: 'Premiere + community posts.', body: 'Premiere the video, then keep fans talking with polls and posts.' },
    { kind: 'cta', kicker: 'YouTube promotion', title: 'DM us <em>“YOUTUBE”</em>', body: 'Targeted campaigns that bring real fans of your genre.' },
  ] },
  { id: 'c3-tue-curators', type: 'carousel', slides: [
    { kind: 'cover', kicker: 'Playlist guide', title: 'Get on playlists <em>without getting scammed</em>', body: 'What to look for in a curator.' },
    { kind: 'point', num: '01', kicker: 'Genre first', title: 'Find the right fit.', body: 'A small playlist in your exact genre beats a huge one that doesn’t match.' },
    { kind: 'point', num: '02', kicker: 'Check engagement', title: 'Followers aren’t everything.', body: 'Look for steady, believable growth, not sudden spikes in followers.' },
    { kind: 'point', num: '03', kicker: 'Red flag', title: 'Never pay for guaranteed streams.', body: 'Guaranteed numbers usually mean bots, and bots can get your music removed.' },
    { kind: 'point', num: '04', kicker: 'Pitch like a human', title: 'Short, personal, one link.', body: 'Say who you are, why your song fits, and share one clean link.' },
    { kind: 'cta', kicker: 'Vetted curators only', title: 'DM us <em>“PITCH”</em>', body: 'We pitch your track to real, genre-matched playlists.' },
  ] },
  { id: 'c4-wed-reels', type: 'carousel', slides: [
    { kind: 'cover', kicker: 'Instagram for artists', title: 'A Reels strategy that <em>works</em>', body: 'Swipe before your next release.' },
    { kind: 'point', num: '01', kicker: 'The hook', title: 'Win the first 2 seconds.', body: 'Open with the catchiest line, a bold caption or a strong visual.' },
    { kind: 'point', num: '02', kicker: 'The sound', title: 'Use your song as the audio.', body: 'Every Reel with your track is another chance for people to use your sound.' },
    { kind: 'point', num: '03', kicker: 'The rhythm', title: '3–5 Reels a week.', body: 'Post steadily in the weeks around release, not only on release day.' },
    { kind: 'point', num: '04', kicker: 'The community', title: 'Reply and reshare.', body: 'Answer comments and reshare fans who use your sound in your Stories.' },
    { kind: 'cta', kicker: 'Instagram growth', title: 'DM us <em>“REELS”</em>', body: 'We plan and run your Reels campaign.' },
  ] },
  { id: 'c5-thu-agency', type: 'carousel', slides: [
    { kind: 'cover', kicker: 'Behind the scenes', title: 'What a music marketing agency <em>actually</em> does', body: 'Here’s what you pay for.' },
    { kind: 'point', num: '01', kicker: 'Strategy', title: 'A plan for your song.', body: 'Audience, goals, timeline and budget, decided before anything goes live.' },
    { kind: 'point', num: '02', kicker: 'Pitching & outreach', title: 'Getting it heard.', body: 'Editorial pitches, curator outreach and creator collaborations.' },
    { kind: 'point', num: '03', kicker: 'Ads & content', title: 'Getting it seen.', body: 'Targeted ads and content that put your song in front of the right fans.' },
    { kind: 'point', num: '04', kicker: 'Reporting', title: 'Knowing what works.', body: 'Clear updates on streams, saves and listeners, and what to do next.' },
    { kind: 'cta', kicker: 'Ready?', title: 'DM us <em>“GROW”</em>', body: 'Send your track link and get a plan for your next release.' },
  ] },

  // ---------- Reels (6 PM) ----------
  { id: 'r1-fri-reel-profile', type: 'reel', scenes: [
    { kind: 'hook', kicker: 'Quick check', title: 'Is your Spotify profile <em>ready?</em>' },
    { kind: 'step', num: '01', title: 'Photo & header', body: 'Recent, high quality and on brand.' },
    { kind: 'step', num: '02', title: 'Bio with links', body: 'Who you are, plus your Instagram and YouTube.' },
    { kind: 'step', num: '03', title: 'Artist Pick', body: 'Pin your newest release at the top.' },
    { kind: 'step', num: '04', title: 'Canvas', body: 'A looping video on your single keeps people watching.' },
    { kind: 'cta', kicker: 'Want a free check?', title: 'DM <em>“AUDIT”</em>' },
  ] },
  { id: 'r2-sat-reel-growing', type: 'reel', scenes: [
    { kind: 'hook', kicker: 'Be honest', title: 'Why your song isn’t <em>growing</em>' },
    { kind: 'step', num: '01', title: 'No release plan', body: 'Dropping without a rollout means nobody is waiting for it.' },
    { kind: 'step', num: '02', title: 'Wrong audience', body: 'Promotion only works when it reaches fans of your genre.' },
    { kind: 'step', num: '03', title: 'Silence after release', body: 'The first 4 weeks after release matter most.' },
    { kind: 'cta', kicker: 'Let’s fix it', title: 'DM <em>“GROW”</em>' },
  ] },
  { id: 'r3-mon-reel-presave', type: 'reel', scenes: [
    { kind: 'hook', kicker: 'Spotify 101', title: 'What is a <em>pre-save?</em>' },
    { kind: 'step', num: '01', title: 'Fans save it early', body: 'Before the song is even out.' },
    { kind: 'step', num: '02', title: 'It lands on day one', body: 'Straight into their library at release.' },
    { kind: 'step', num: '03', title: 'Strong early signals', body: 'Day-one saves show the algorithm people want your song.' },
    { kind: 'cta', kicker: 'We run pre-save campaigns', title: 'DM <em>“PRESAVE”</em>' },
  ] },
  { id: 'r4-tue-reel-redflags', type: 'reel', scenes: [
    { kind: 'hook', kicker: 'Protect your music', title: '3 red flags in music <em>promotion</em>' },
    { kind: 'step', num: '01', title: '“Guaranteed streams”', body: 'Nobody honest can guarantee exact numbers.' },
    { kind: 'step', num: '02', title: 'Huge numbers, tiny price', body: '100K streams for a few dollars is almost always bots.' },
    { kind: 'step', num: '03', title: 'No targeting, no reports', body: 'If they can’t say who heard it, nobody real did.' },
    { kind: 'cta', kicker: 'We do it the real way', title: 'DM <em>“REAL”</em>' },
  ] },
  { id: 'r5-wed-reel-content', type: 'reel', scenes: [
    { kind: 'hook', kicker: 'Steal these', title: '4 content ideas for your <em>next release</em>' },
    { kind: 'step', num: '01', title: 'Studio moments', body: 'Behind-the-scenes clips from the session.' },
    { kind: 'step', num: '02', title: 'Lyric breakdown', body: 'Explain the line everyone will quote.' },
    { kind: 'step', num: '03', title: 'Fan reactions', body: 'Reshare people listening for the first time.' },
    { kind: 'step', num: '04', title: 'Countdown', body: 'Build the hype every day until release.' },
    { kind: 'cta', kicker: 'Need a content plan?', title: 'DM <em>“CONTENT”</em>' },
  ] },
  { id: 'r6-thu-reel-releaseday', type: 'reel', scenes: [
    { kind: 'hook', kicker: 'It’s out!', title: 'Your release day <em>checklist</em>' },
    { kind: 'step', num: '01', title: 'Post a Reel at launch', body: 'Use the song as the audio.' },
    { kind: 'step', num: '02', title: 'Link everywhere', body: 'Bio, Stories, YouTube and WhatsApp status.' },
    { kind: 'step', num: '03', title: 'Message your fans', body: 'A personal note gets more people to listen.' },
    { kind: 'step', num: '04', title: 'Thank the curators', body: 'Tag and thank every playlist that added you.' },
    { kind: 'cta', kicker: 'Launching soon?', title: 'DM <em>“LAUNCH”</em>' },
  ] },
];

module.exports = { posts, HANDLE, BRAND };
