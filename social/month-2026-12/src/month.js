// One month of follower-growth content for @playlistpulse.co: 4–31 Dec 2026.
// Each day: a topic (carousel at 10:00 + reel at 18:00 + story) and a quote post (14:00).
const DROP = (k) => ({ k, t: 'Drop your <em>track</em> below.', b: 'Comment your Spotify link. We listen to every one and share our favourites in Stories this weekend.', drop: true });

const days = [
  ['2026-12-04', { k: 'Free promotion', t: '4 free ways to <em>promote</em> your music', q: 'Which one will you try this week?', cta: 'FREE', pts: [
    ['Pre-save', 'Share your pre-save everywhere.', 'Bio, Stories, WhatsApp status and every group you’re in.'],
    ['Reels', 'Post your hook as a Reel.', 'Your best 15 seconds is your best free ad.'],
    ['Spotify', 'Pitch to editors.', 'It’s free in Spotify for Artists. Pitch 7+ days before release.'],
    ['Collabs', 'Team up with artists.', 'Cross-post with artists your size in your genre.']] }, DROP('Artist shoutout')],
  ['2026-12-05', { k: 'TikTok for artists', t: 'TikTok basics every <em>musician</em> needs', q: 'Are you posting on TikTok yet?', cta: 'TIKTOK', pts: [
    ['The hook', 'Post the hook, not the song.', 'Lead with the part people will replay.'],
    ['The face', 'Show yourself.', 'People follow people. Tell the story behind the song.'],
    ['Trends', 'Use trends with your sound.', 'Put your track on formats people already love.'],
    ['Frequency', 'Post daily on release week.', 'More posts, more chances to land.']] }, { k: 'Remember', t: 'Your next fan is one <em>share</em> away.', b: 'Make content people want to send to a friend.' }],
  ['2026-12-06', { k: 'Mindset', t: 'Treat your music like a <em>business</em>', q: 'Do you set a budget for each release?', cta: 'GROW', pts: [
    ['Budget', 'Set a budget per release.', 'Even a small one. Plan it before you drop.'],
    ['Data', 'Track what works.', 'Check which posts and playlists brought listeners.'],
    ['Fans', 'Build your own list.', 'Email or WhatsApp: fans you can reach without an algorithm.'],
    ['Reinvest', 'Double down on what grows.', 'Put more into what actually moved the numbers.']] }, { k: 'Real talk', t: 'Talent starts it. <em>Strategy</em> grows it.', b: 'Great songs still need a plan to be heard.' }],
  ['2026-12-07', { k: 'Spotify 101', t: 'Signals the Spotify algorithm <em>loves</em>', q: 'Which of these do you track?', cta: 'SPOTIFY', pts: [
    ['Saves', 'People saving your song.', 'A save means they want to hear it again.'],
    ['Repeats', 'Listeners coming back.', 'Repeat plays show the song sticks.'],
    ['Skips', 'Few early skips.', 'A strong intro keeps people listening.'],
    ['Adds', 'Playlist adds.', 'Fans adding you to their own playlists is a strong signal.']] }, { k: 'Spotify tip', t: 'Saves are the new <em>streams.</em>', b: 'Ask fans to save, not just play.' }],
  ['2026-12-08', { k: 'Protect your music', t: 'How to spot a <em>fake</em> promoter', q: 'Ever been offered “guaranteed streams”?', cta: 'REAL', pts: [
    ['Red flag 1', 'Guaranteed numbers.', 'Nobody honest can guarantee exact streams.'],
    ['Red flag 2', 'No questions about you.', 'Real promoters ask about your genre and goals.'],
    ['Red flag 3', 'Pay per stream.', 'Pricing per 1,000 plays usually means bots.'],
    ['Red flag 4', 'No reports.', 'If they can’t show where plays came from, walk away.']] }, { k: 'Rule of thumb', t: 'Too good to be true? It’s <em>bots.</em>', b: 'Real growth has real listeners behind it.' }],
  ['2026-12-09', { k: 'Content plan', t: 'A 7-day content plan <em>before release</em>', q: 'Which day do you usually skip?', cta: 'CONTENT', pts: [
    ['Days 1–2', 'Tease it.', 'Cover art reveal and a 5-second sound clip.'],
    ['Days 3–4', 'Behind the scenes.', 'Studio clips and the story behind the song.'],
    ['Days 5–6', 'Snippet + pre-save.', 'Your hook as a Reel with the pre-save link.'],
    ['Day 7', 'Countdown.', 'Remind everyone it drops tomorrow.']] }, { k: 'Content tip', t: 'Post it. Then post it <em>again.</em>', b: 'Most of your followers missed it the first time.' }],
  ['2026-12-10', { k: 'Release strategy', t: 'Single or EP: what to <em>release first?</em>', q: 'Single or EP: what are you dropping next?', cta: 'PLAN', pts: [
    ['Momentum', 'Singles keep you visible.', 'Each release gives fans something new.'],
    ['Pitching', 'Each single gets its own pitch.', 'More releases, more chances at playlists.'],
    ['Timing', 'EP after 2–3 singles.', 'Bundle the singles with a few new songs.'],
    ['Order', 'Lead with your strongest.', 'Your first single sets the tone.']] }, { k: 'Release tip', t: 'Release with a <em>plan,</em> not randomly.', b: 'Consistency beats surprise drops.' }],
  ['2026-12-11', { k: 'Spotify pitching', t: 'Write a pitch editors <em>actually read</em>', q: 'What do you usually write in your pitch?', cta: 'PITCH', pts: [
    ['Story', 'Lead with the story.', 'What the song is about and why it matters.'],
    ['Details', 'Fill in every field.', 'Genre, mood, instruments, culture. Be specific.'],
    ['Plan', 'Mention your marketing.', 'Tell editors how you’ll promote it.'],
    ['Length', 'Keep it short.', 'A few strong sentences beat a long essay.']] }, DROP('Weekend listening')],
  ['2026-12-12', { k: 'YouTube Shorts', t: 'YouTube Shorts for <em>artists</em>', q: 'Have you posted a Short this month?', cta: 'YOUTUBE', pts: [
    ['Hook', 'Grab them in 1 second.', 'Start on the most exciting moment.'],
    ['Format', 'Vertical, best part only.', '15–30 seconds of your strongest section.'],
    ['Link', 'Point to the full video.', 'Link the official video so viewers can keep watching.'],
    ['Rhythm', 'Post 3 times a week.', 'Consistency teaches the algorithm who to show you to.']] }, { k: 'Growth', t: 'Short videos. <em>Long careers.</em>', b: 'Discovery starts in 15 seconds.' }],
  ['2026-12-13', { k: 'Mindset', t: '4 habits of artists who <em>grow</em>', q: 'Which habit are you building now?', cta: 'GROW', pts: [
    ['Release', 'They release consistently.', 'Every 6–8 weeks, not once a year.'],
    ['Engage', 'They talk to fans daily.', 'Comments, DMs and Stories.'],
    ['Learn', 'They study their data.', 'They know where their listeners come from.'],
    ['Improve', 'They invest in their craft.', 'Better songs make every campaign easier.']] }, { k: 'Sunday reminder', t: 'Small steps beat one big <em>push.</em>', b: 'Show up a little every day.' }],
  ['2026-12-14', { k: 'Spotify 101', t: 'Release Radar & Discover Weekly <em>explained</em>', q: 'Have you landed on Release Radar yet?', cta: 'SPOTIFY', pts: [
    ['Release Radar', 'New music for your followers.', 'Your followers can get your new songs here.'],
    ['How to land', 'Pitch before release.', 'Pitching early helps get your song in front of followers.'],
    ['Discover Weekly', 'Based on listener taste.', 'It suggests songs to people with similar taste.'],
    ['How to grow', 'Real saves and listens.', 'Engaged listeners help your song travel.']] }, { k: 'Spotify tip', t: 'Pitch early. <em>Every time.</em>', b: 'At least 7 days before release.' }],
  ['2026-12-15', { k: 'Myth vs Fact', t: 'Myths that keep artists <em>small</em>', q: 'Which myth did you believe?', cta: 'GROW', pts: [
    ['Myth', '“You need a label.”', 'Independent artists grow every day with a good plan.'],
    ['Myth', '“Promotion is cheating.”', 'Real promotion just helps the right people find you.'],
    ['Myth', '“Drop it and it’ll blow up.”', 'Almost every hit had a plan behind it.'],
    ['Myth', '“Followers = fans.”', 'Fans engage. Numbers alone don’t.']] }, { k: 'Real talk', t: 'Real growth is slower. And it <em>lasts.</em>', b: 'Build fans who stay.' }],
  ['2026-12-16', { k: 'Content tip', t: 'Pro-looking Reels on a <em>budget</em>', q: 'What do you film on?', cta: 'REELS', pts: [
    ['Light', 'Use natural light.', 'Face a window. It’s free and flattering.'],
    ['Stability', 'Use a tripod.', 'Steady shots look instantly more professional.'],
    ['Audio', 'Use your master.', 'Add the real song in the edit, not phone audio.'],
    ['Captions', 'Add on-screen text.', 'Most people watch on mute at first.']] }, { k: 'Content tip', t: 'Your phone is a <em>studio camera.</em>', b: 'Start with what you have.' }],
  ['2026-12-17', { k: 'After release', t: 'What to do <em>after</em> release week', q: 'What do you do after release week?', cta: 'LAUNCH', pts: [
    ['Content', 'Keep posting the song.', 'Most people haven’t heard it yet.'],
    ['Playlists', 'Pitch more curators.', 'Independent playlists add songs after release too.'],
    ['Ads', 'Run small targeted ads.', 'Aim at fans of similar artists.'],
    ['Next', 'Plan the next single.', 'Keep momentum with your next release.']] }, { k: 'Release tip', t: 'Release day is <em>day one.</em>', b: 'Not the finish line.' }],
  ['2026-12-18', { k: 'Instagram growth', t: 'Grow your <em>Instagram</em> as an artist', q: 'What’s in your bio right now?', cta: 'INSTA', pts: [
    ['Bio', 'Clear bio + link.', 'Who you are, your genre and your latest release.'],
    ['Pins', 'Pin your best 3 posts.', 'Make a great first impression.'],
    ['Replies', 'Reply to every comment.', 'Conversations boost your reach.'],
    ['Collabs', 'Use collab posts.', 'Share a post with another artist and reach both audiences.']] }, DROP('Friday feature')],
  ['2026-12-19', { k: 'Music video', t: 'A music video on a <em>small budget</em>', q: 'What’s your dream music video idea?', cta: 'VIDEO', pts: [
    ['Location', 'One strong location.', 'A single great spot beats five average ones.'],
    ['Concept', 'Keep it simple.', 'One clear idea people remember.'],
    ['Shots', 'Mix performance and story.', 'Gives you plenty of cuts in the edit.'],
    ['Bonus', 'Make a lyric video too.', 'A second video for the same song.']] }, { k: 'Video tip', t: 'A clear concept beats a <em>big budget.</em>', b: 'Ideas are free.' }],
  ['2026-12-20', { k: 'Planning', t: 'Set goals for your <em>next release</em>', q: 'What’s your goal for your next release?', cta: 'PLAN', pts: [
    ['Focus', 'Pick one main goal.', 'Listeners, followers or playlist adds.'],
    ['Target', 'Set a realistic number.', 'Based on your last release.'],
    ['Platforms', 'Focus on 2 platforms.', 'Do two well instead of six badly.'],
    ['Review', 'Check after 4 weeks.', 'Learn what worked for next time.']] }, { k: 'Growth', t: 'What gets measured gets <em>better.</em>', b: 'Track every release.' }],
  ['2026-12-21', { k: 'Spotify tools', t: 'Spotify tools most artists <em>ignore</em>', q: 'Which of these have you used?', cta: 'SPOTIFY', pts: [
    ['Canvas', 'Looping visuals.', 'A short video that plays with your track.'],
    ['Clips', 'Short vertical videos.', 'Talk to listeners right on your profile.'],
    ['Countdown', 'Countdown Pages.', 'Let fans pre-save and get hyped before release.'],
    ['Artist Pick', 'Pin what matters.', 'Feature your newest release at the top.']] }, { k: 'Spotify tip', t: 'Make your profile worth <em>visiting.</em>', b: 'New listeners check it first.' }],
  ['2026-12-22', { k: 'Protect your account', t: 'Why bought followers <em>hurt</em> you', q: 'Have you ever been tempted to buy followers?', cta: 'REAL', pts: [
    ['Engagement', 'Your engagement rate drops.', 'Fake followers never like or comment.'],
    ['Reach', 'The algorithm shows you less.', 'Low engagement means less reach.'],
    ['Reputation', 'People notice.', 'Labels, brands and fans can tell.'],
    ['Fans', 'Real fans get buried.', 'Your content reaches bots instead of people.']] }, { k: 'Real talk', t: '1,000 real fans beat 100,000 <em>fake</em> ones.', b: 'Every time.' }],
  ['2026-12-23', { k: 'Content tip', t: 'Hooks that <em>stop the scroll</em>', q: 'Which hook will you try first?', cta: 'CONTENT', pts: [
    ['Chorus', 'Start with the chorus.', 'Don’t make people wait for the best part.'],
    ['Question', 'Ask a question on screen.', '“Would you play this in the car?”'],
    ['Reaction', 'Show a reaction.', 'Someone hearing it for the first time.'],
    ['Drop', 'Cut straight to the drop.', 'Energy in the first second.']] }, { k: 'Content tip', t: 'You have 2 seconds. <em>Use them.</em>', b: 'Lead with your best moment.' }],
  ['2026-12-24', { k: 'Release timing', t: 'Should you release in <em>December?</em>', q: 'When is your next release?', cta: 'PLAN', pts: [
    ['Crowded', 'Holiday music takes over.', 'Playlists fill with seasonal songs.'],
    ['Quiet', 'Late December is slow.', 'Many artists wait for the new year.'],
    ['Hype', 'Build hype for January.', 'Tease your next release now.'],
    ['Plan', 'Plan your first quarter.', 'Map your releases for January to March.']] }, { k: 'Planning', t: 'Plan your <em>January</em> now.', b: 'The new year starts with a plan.' }],
  ['2026-12-25', { k: 'Collabs', t: 'Grow faster with <em>artist collabs</em>', q: 'Who would you love to collab with?', cta: 'COLLAB', pts: [
    ['Match', 'Pick artists your size.', 'Similar audiences, fair exchange.'],
    ['Share', 'Split the promotion.', 'Both artists push the release.'],
    ['Cross-post', 'Use collab Reels.', 'One post, two audiences.'],
    ['Features', 'Feature on each other’s songs.', 'Introduce your fans to each other.']] }, DROP('Holiday shoutout')],
  ['2026-12-26', { k: 'Every platform', t: 'Don’t ignore SoundCloud & <em>Apple Music</em>', q: 'Where do most of your fans listen?', cta: 'GROW', pts: [
    ['Apple Music', 'Claim your profile.', 'Set up Apple Music for Artists and update your page.'],
    ['SoundCloud', 'Share demos and remixes.', 'Great for early versions and fan community.'],
    ['Everywhere', 'Release on every platform.', 'Let fans listen where they already are.'],
    ['Data', 'See where fans listen.', 'Focus your promotion where they are.']] }, { k: 'Reach', t: 'Be everywhere your fans <em>listen.</em>', b: 'One release, every platform.' }],
  ['2026-12-27', { k: 'Year in review', t: '2026 lessons for <em>independent artists</em>', q: 'What did 2026 teach you?', cta: 'GROW', pts: [
    ['Consistency', 'Consistency won.', 'Regular releases kept artists growing.'],
    ['Video', 'Short video drove discovery.', 'Reels, Shorts and TikTok led the way.'],
    ['Real fans', 'Real fans beat numbers.', 'Engaged listeners mattered most.'],
    ['Planning', 'Plans beat surprises.', 'The best releases were planned weeks ahead.']] }, { k: 'Keep going', t: 'Your song deserves to be <em>heard.</em>', b: 'Keep going.' }],
  ['2026-12-28', { k: 'Spotify data', t: 'Read your Spotify for Artists <em>data</em>', q: 'Which stat do you check first?', cta: 'SPOTIFY', pts: [
    ['Sources', 'Where streams come from.', 'Playlists, profile, library or algorithm.'],
    ['Locations', 'Where listeners are.', 'Target your ads and shows there.'],
    ['Saves', 'Your save rate.', 'How many listeners save the song.'],
    ['Playlists', 'Who added you.', 'Thank them and pitch them next time.']] }, { k: 'Data tip', t: 'Your data is telling you <em>something.</em>', b: 'Check it every week.' }],
  ['2026-12-29', { k: 'New year', t: 'Mistakes to leave in <em>2026</em>', q: 'Which one are you leaving behind?', cta: 'GROW', pts: [
    ['Mistake 1', 'Releasing without a plan.', 'Plan at least 4 weeks ahead.'],
    ['Mistake 2', 'Buying streams.', 'It hurts more than it helps.'],
    ['Mistake 3', 'Ignoring your fans.', 'Reply, thank and engage.'],
    ['Mistake 4', 'Quitting too early.', 'Growth takes more than one release.']] }, { k: 'New year', t: 'Leave the <em>shortcuts</em> in 2026.', b: 'Build it the real way.' }],
  ['2026-12-30', { k: 'Content plan', t: 'Your January <em>content calendar</em>', q: 'What are you posting first in January?', cta: 'CONTENT', pts: [
    ['Week 1', 'Goals & intro.', 'Tell fans what’s coming this year.'],
    ['Week 2', 'Behind the scenes.', 'Studio, writing and creative process.'],
    ['Week 3', 'Snippets.', 'Tease your next single.'],
    ['Week 4', 'Release or countdown.', 'Drop it or build the final hype.']] }, { k: 'Planning', t: 'Plan the month, not just the <em>post.</em>', b: 'Consistency starts with a calendar.' }],
  ['2026-12-31', { k: '2027', t: 'Your 2027 <em>release plan</em>', q: 'How many songs will you release in 2027?', cta: 'PLAN', pts: [
    ['Map', 'Map 6 singles.', 'Know what you’re releasing and when.'],
    ['Rhythm', 'One every 6–8 weeks.', 'Steady releases keep you visible.'],
    ['Budget', 'Budget each release.', 'Plan promotion before you drop.'],
    ['Start', 'Start strong in January.', 'Your first release sets the pace.']] }, { k: 'Happy new year', t: 'New year. New music. <em>Real fans.</em>', b: 'Let’s grow in 2027.' }],
];

module.exports = { days };
