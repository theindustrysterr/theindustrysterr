// One month of follower-growth content for @playlistpulse.co: 1–31 Jan 2027.
const DROP = (k) => ({ k, t: 'Drop your <em>track</em> below.', b: 'Comment your Spotify link. We listen to every one and share our favourites in Stories this weekend.', drop: true });

const days = [
  ['2027-01-01', { k: 'New year', t: 'Your first release of 2027: <em>checklist</em>', q: 'When is your first 2027 release?', cta: 'LAUNCH', pts: [
    ['Ready', 'Finish and master early.', 'Don’t rush the most important part.'],
    ['Upload', 'Distribute 3–4 weeks ahead.', 'Gives time for pitching and pre-saves.'],
    ['Pitch', 'Pitch 7+ days before.', 'Submit in Spotify for Artists early.'],
    ['Content', 'Plan 4 weeks of posts.', 'Before, during and after release.']] }, DROP('New year shoutout')],
  ['2027-01-02', { k: 'Release strategy', t: 'How to choose your next <em>single</em>', q: 'How do you pick your singles?', cta: 'PLAN', pts: [
    ['Hook', 'Strongest hook wins.', 'The part people hum after one listen.'],
    ['Fit', 'Fits your audience.', 'Give your current fans what they came for.'],
    ['Content', 'Easy to make content for.', 'Can you build 10 Reels around it?'],
    ['Test', 'Test it first.', 'Play it for people and watch their reaction.']] }, { k: 'Real talk', t: 'Your best song isn’t always your best <em>single.</em>', b: 'Pick the one people replay.' }],
  ['2027-01-03', { k: 'Goal setting', t: 'Set your 2027 music <em>goals</em>', q: 'What’s your #1 music goal for 2027?', cta: 'GROW', pts: [
    ['Big goal', 'One goal for the year.', 'Listeners, followers or releases.'],
    ['Quarters', 'Break it into quarters.', 'Smaller targets every 3 months.'],
    ['Habits', 'Set weekly habits.', 'Posting, writing and outreach.'],
    ['Review', 'Review every month.', 'Adjust what isn’t working.']] }, { k: 'New year', t: 'Goals without a plan are just <em>wishes.</em>', b: 'Write yours down today.' }],
  ['2027-01-04', { k: 'Spotify growth', t: 'How to grow your monthly <em>listeners</em>', q: 'How many monthly listeners do you have now?', cta: 'SPOTIFY', pts: [
    ['Release', 'Release consistently.', 'New music keeps you in front of listeners.'],
    ['Pitch', 'Pitch every release.', 'Editors and curators, every single time.'],
    ['Video', 'Post short videos daily.', 'Send new people to your Spotify.'],
    ['Collab', 'Collaborate.', 'Share audiences with other artists.']] }, { k: 'Spotify tip', t: 'Listeners follow <em>consistency.</em>', b: 'Show up every release.' }],
  ['2027-01-05', { k: 'Release basics', t: 'Distributor basics for <em>independent artists</em>', q: 'Which distributor do you use?', cta: 'GROW', pts: [
    ['Choose', 'Pick a reliable distributor.', 'Check support, payouts and features.'],
    ['Timing', 'Upload 3–4 weeks early.', 'Never upload the night before.'],
    ['Metadata', 'Get your details right.', 'Names, credits and genre must be correct.'],
    ['Splits', 'Agree splits in writing.', 'Avoid problems with collaborators later.']] }, { k: 'Release tip', t: 'Metadata <em>matters.</em>', b: 'Wrong credits cause problems later.' }],
  ['2027-01-06', { k: 'Content strategy', t: '4 content pillars for <em>musicians</em>', q: 'Which pillar do you post most?', cta: 'CONTENT', pts: [
    ['Music', 'Snippets and performances.', 'Let people hear the song.'],
    ['Story', 'Who you are.', 'Your journey, your city, your why.'],
    ['Process', 'Behind the scenes.', 'Writing, recording and creating.'],
    ['Community', 'Your fans.', 'Reactions, comments and shoutouts.']] }, { k: 'Content tip', t: 'Fans follow <em>people,</em> not just songs.', b: 'Show who you are.' }],
  ['2027-01-07', { k: 'Pre-release', t: 'Build hype <em>before</em> you announce', q: 'How do you tease new music?', cta: 'LAUNCH', pts: [
    ['Visuals', 'Tease the visuals.', 'Colours, outfits and locations.'],
    ['Lyrics', 'Hint at the lyrics.', 'Post one line without context.'],
    ['Countdown', 'Start a countdown.', 'Give fans a date to wait for.'],
    ['Reveal', 'Reveal the cover art.', 'Make it an event.']] }, { k: 'Hype tip', t: 'Hype is built, not <em>hoped for.</em>', b: 'Start teasing early.' }],
  ['2027-01-08', { k: 'TikTok growth', t: 'How to grow on <em>TikTok</em> in 2027', q: 'How often do you post on TikTok?', cta: 'TIKTOK', pts: [
    ['Daily', 'Post every day.', 'Volume gives you more chances.'],
    ['Sound', 'Use your sound every time.', 'Make it easy for others to use it.'],
    ['Replies', 'Reply to comments with video.', 'Turns comments into new content.'],
    ['Trends', 'Move fast on trends.', 'The earlier you join, the better.']] }, DROP('Friday feature')],
  ['2027-01-09', { k: 'Community', t: 'Make fans feel <em>part of it</em>', q: 'How do you involve your fans?', cta: 'GROW', pts: [
    ['Opinions', 'Ask for their opinion.', 'Let them vote on covers or snippets.'],
    ['First', 'Give them first access.', 'Share snippets with fans before anyone else.'],
    ['DMs', 'Reply to messages.', 'Personal replies create loyal fans.'],
    ['Shoutouts', 'Shout out supporters.', 'Repost fans who share your music.']] }, { k: 'Community', t: 'Fans who feel <em>seen</em> stay.', b: 'Talk to them, not at them.' }],
  ['2027-01-10', { k: 'Mindset', t: 'How to avoid artist <em>burnout</em>', q: 'How do you stay consistent without burning out?', cta: 'GROW', pts: [
    ['Batch', 'Batch your content.', 'Film a week of posts in one day.'],
    ['Schedule', 'Set posting days.', 'A plan you can actually keep.'],
    ['Rest', 'Take real breaks.', 'Creativity needs recovery.'],
    ['Help', 'Get help where you need it.', 'You don’t have to do everything alone.']] }, { k: 'Sunday reminder', t: 'Rest is part of the <em>process.</em>', b: 'Consistency needs energy.' }],
  ['2027-01-11', { k: 'Spotify tip', t: 'How to increase your <em>save rate</em>', q: 'Do you ask fans to save your songs?', cta: 'SPOTIFY', pts: [
    ['Intro', 'Start strong.', 'Get to the good part quickly.'],
    ['Ask', 'Ask fans to save.', 'Say it in captions and Stories.'],
    ['Share', 'Share where fans are.', 'Send the song to people who already like you.'],
    ['Replay', 'Make replayable music.', 'Songs people want again and again.']] }, { k: 'Spotify tip', t: 'Make it worth <em>saving.</em>', b: 'Saves tell Spotify the song matters.' }],
  ['2027-01-12', { k: 'Protect your music', t: 'The real risks of <em>fake streams</em>', q: 'Have you seen artists get hit by fake streams?', cta: 'REAL', pts: [
    ['Removed', 'Streams can be removed.', 'Platforms filter artificial plays.'],
    ['Takedowns', 'Releases can be taken down.', 'Your music could disappear.'],
    ['Royalties', 'Royalties can be withheld.', 'You may not get paid for those plays.'],
    ['Data', 'Your data gets ruined.', 'You can’t learn who your real fans are.']] }, { k: 'Real talk', t: 'Fake streams cost more than they <em>look.</em>', b: 'Protect your catalog.' }],
  ['2027-01-13', { k: 'Reels ideas', t: '15-second Reel ideas for <em>artists</em>', q: 'Which idea will you film first?', cta: 'REELS', pts: [
    ['Lyrics', 'Lyric on screen.', 'Your best line, big and bold.'],
    ['Studio', 'Before and after.', 'Demo vs final version.'],
    ['POV', 'Point-of-view story.', 'Act out what the song is about.'],
    ['Duet', 'React to a fan.', 'Duet or stitch someone using your sound.']] }, { k: 'Content tip', t: '15 seconds can change <em>everything.</em>', b: 'Make every second count.' }],
  ['2027-01-14', { k: 'Pre-release', t: 'Your checklist <em>2 weeks out</em>', q: 'What do you always forget before release?', cta: 'LAUNCH', pts: [
    ['Pre-save', 'Pre-save is live.', 'Link in bio and Stories.'],
    ['Pitch', 'Pitch is submitted.', 'Editors have time to listen.'],
    ['Content', 'Content is ready.', 'At least 2 weeks of posts planned.'],
    ['Ads', 'Ads are planned.', 'Know who you’re targeting.']] }, { k: 'Release tip', t: 'Two weeks out is <em>go time.</em>', b: 'Have everything ready.' }],
  ['2027-01-15', { k: 'Playlist curators', t: 'Get featured by <em>playlist curators</em>', q: 'Have you ever pitched a curator directly?', cta: 'PITCH', pts: [
    ['Research', 'Find the right curators.', 'Playlists that match your genre.'],
    ['Engage', 'Engage before you pitch.', 'Follow, listen and support first.'],
    ['Pitch', 'Personalise your pitch.', 'Show you know their playlist.'],
    ['Thank', 'Thank them after.', 'Good relationships bring repeat adds.']] }, DROP('Artist shoutout')],
  ['2027-01-16', { k: 'YouTube growth', t: 'Use YouTube to grow your <em>fanbase</em>', q: 'Is your YouTube channel set up properly?', cta: 'YOUTUBE', pts: [
    ['Trailer', 'Add a channel trailer.', 'Introduce yourself to new visitors.'],
    ['Playlists', 'Organise your songs.', 'Playlists make it easy to binge.'],
    ['Uploads', 'Upload consistently.', 'Videos, Shorts and live sessions.'],
    ['Community', 'Use the community tab.', 'Polls, updates and teasers.']] }, { k: 'YouTube tip', t: 'Your channel is your <em>home base.</em>', b: 'Make it easy to binge.' }],
  ['2027-01-17', { k: 'Smart spending', t: 'What independent artists should <em>invest in</em>', q: 'Where do you spend most of your budget?', cta: 'GROW', pts: [
    ['Sound', 'Mixing and mastering.', 'Your music has to sound professional.'],
    ['Artwork', 'Strong cover art.', 'People judge a song by its cover.'],
    ['Promotion', 'Real promotion.', 'Getting it in front of the right people.'],
    ['Content', 'Good content.', 'Videos that make people stop scrolling.']] }, { k: 'Real talk', t: 'Invest in what fans <em>hear and see.</em>', b: 'Quality first.' }],
  ['2027-01-18', { k: 'Spotify profile', t: 'Spotify profile <em>mistakes</em> to fix', q: 'Which one is on your profile right now?', cta: 'AUDIT', pts: [
    ['Photo', 'Old profile photo.', 'Update it to match your current era.'],
    ['Bio', 'Empty bio.', 'Tell listeners who you are.'],
    ['Artist Pick', 'No Artist Pick.', 'Pin your newest release.'],
    ['Canvas', 'No Canvas.', 'Add a looping video to your single.']] }, { k: 'Spotify tip', t: 'First impressions <em>count.</em>', b: 'Update your profile today.' }],
  ['2027-01-19', { k: 'Protect your music', t: 'Red flags in <em>playlist offers</em>', q: 'Ever received a suspicious playlist offer?', cta: 'REAL', pts: [
    ['Red flag 1', 'Guaranteed placement for cash.', 'Real curators choose what they add.'],
    ['Red flag 2', 'Sudden follower jumps.', 'Playlists that grew overnight are suspicious.'],
    ['Red flag 3', 'No genre focus.', 'Random songs mean random listeners.'],
    ['Red flag 4', 'Too cheap to be real.', 'Huge results for tiny prices are a warning.']] }, { k: 'Rule of thumb', t: 'If it’s guaranteed, be <em>careful.</em>', b: 'Real curators choose music.' }],
  ['2027-01-20', { k: 'Video tip', t: 'How to film a <em>performance Reel</em>', q: 'Have you posted a performance Reel this month?', cta: 'REELS', pts: [
    ['Light', 'Use good light.', 'Face a window or use a ring light.'],
    ['Stability', 'Keep it steady.', 'Tripod or a stable surface.'],
    ['Sync', 'Lip-sync to the master.', 'Clean audio, real performance.'],
    ['Frame', 'Strong first frame.', 'Start mid-performance, full energy.']] }, { k: 'Video tip', t: 'Performance sells the <em>song.</em>', b: 'Let people see you feel it.' }],
  ['2027-01-21', { k: 'Budget', t: 'How to split a release <em>budget</em>', q: 'Do you plan your release budget?', cta: 'PLAN', pts: [
    ['Content', 'Content first.', 'Videos and visuals for every platform.'],
    ['Ads', 'Targeted ads.', 'Reach fans of similar artists.'],
    ['Outreach', 'Playlist and PR outreach.', 'Get in front of curators and media.'],
    ['Reserve', 'Keep a reserve.', 'Double down if something takes off.']] }, { k: 'Money tip', t: 'Spend with a <em>plan.</em>', b: 'Every rupee needs a job.' }],
  ['2027-01-22', { k: 'Reach', t: 'How to reach <em>new fans</em>', q: 'Where did your last new fan find you?', cta: 'GROW', pts: [
    ['Targeting', 'Target similar artists’ fans.', 'They already like your kind of music.'],
    ['Collabs', 'Collaborate.', 'Swap audiences with other artists.'],
    ['Live', 'Go live.', 'Live sessions build real connection.'],
    ['Communities', 'Join niche communities.', 'Groups and pages built around your genre.']] }, DROP('Friday feature')],
  ['2027-01-23', { k: 'Superfans', t: 'Turn listeners into <em>superfans</em>', q: 'What would make you a superfan of an artist?', cta: 'GROW', pts: [
    ['Exclusive', 'Give exclusive content.', 'Things only true fans get to see.'],
    ['Personal', 'Message them directly.', 'A personal touch goes a long way.'],
    ['Early', 'Offer early access.', 'Merch, tickets or new music first.'],
    ['Thanks', 'Thank them publicly.', 'Make them proud to support you.']] }, { k: 'Fan tip', t: 'Superfans start as <em>listeners.</em>', b: 'Treat every fan like your first.' }],
  ['2027-01-24', { k: 'Mindset', t: 'Why growth takes <em>patience</em>', q: 'How long have you been releasing music?', cta: 'GROW', pts: [
    ['Compound', 'Growth compounds.', 'Small gains add up over time.'],
    ['Catalog', 'Every release builds.', 'New fans discover your older songs too.'],
    ['Data', 'Your data gets smarter.', 'Each release teaches you more.'],
    ['Consistency', 'Keep showing up.', 'The artists who last are the ones who win.']] }, { k: 'Sunday reminder', t: 'Overnight success takes <em>years.</em>', b: 'Keep building.' }],
  ['2027-01-25', { k: 'Branding', t: 'Write an artist bio that <em>works</em>', q: 'Can you describe your music in one line?', cta: 'AUDIT', pts: [
    ['Who', 'Who you are.', 'Name, city and genre.'],
    ['Sound', 'Your sound.', 'Describe it in a few words.'],
    ['Highlights', 'Your highlights.', 'Real milestones you’re proud of.'],
    ['Action', 'A call to action.', 'Tell people where to listen.']] }, { k: 'Branding tip', t: 'Tell your story in <em>3 lines.</em>', b: 'Make people care.' }],
  ['2027-01-26', { k: 'Real growth', t: 'Why organic growth <em>wins</em>', q: 'Organic or paid: what works best for you?', cta: 'REAL', pts: [
    ['Engagement', 'Real engagement.', 'Real people like, comment and share.'],
    ['Signals', 'Better algorithm signals.', 'Platforms reward genuine interest.'],
    ['Fans', 'Real fans show up.', 'They buy tickets and merch.'],
    ['Lasting', 'It lasts.', 'Built on people, not tricks.']] }, { k: 'Real talk', t: 'Organic is slower. And <em>stronger.</em>', b: 'Build on solid ground.' }],
  ['2027-01-27', { k: 'Instagram Stories', t: 'Instagram Stories for <em>artists</em>', q: 'How often do you post Stories?', cta: 'INSTA', pts: [
    ['Interact', 'Use polls and questions.', 'Get fans talking to you.'],
    ['Behind', 'Show behind the scenes.', 'Daily life, studio and shows.'],
    ['Countdown', 'Use countdown stickers.', 'Fans get reminded on release day.'],
    ['Reshare', 'Reshare your fans.', 'Show love to people who support you.']] }, { k: 'Instagram tip', t: 'Stories build <em>connection.</em>', b: 'Post them daily.' }],
  ['2027-01-28', { k: 'Release day', t: 'Release day, <em>hour by hour</em>', q: 'What’s your release day routine?', cta: 'LAUNCH', pts: [
    ['Morning', 'Share the link everywhere.', 'Bio, Stories, groups and status.'],
    ['Midday', 'Post a Reel.', 'Use the new song as the audio.'],
    ['Evening', 'Go live.', 'Celebrate with your fans.'],
    ['Night', 'Thank everyone.', 'Repost every share you can.']] }, { k: 'Release tip', t: 'Release day is a show. <em>Perform.</em>', b: 'Make noise all day.' }],
  ['2027-01-29', { k: 'Collabs', t: 'Collab with producers and <em>creators</em>', q: 'Who’s your dream collaborator?', cta: 'COLLAB', pts: [
    ['Find', 'Find creators in your genre.', 'Dancers, video creators and producers.'],
    ['Value', 'Offer value first.', 'Support their work before you ask.'],
    ['Easy', 'Make it easy.', 'Send clips, stems and clear ideas.'],
    ['Credit', 'Credit and share.', 'Tag them and promote their work too.']] }, DROP('Weekend listening')],
  ['2027-01-30', { k: 'Review', t: 'Your monthly growth <em>review</em>', q: 'Do you review your growth every month?', cta: 'GROW', pts: [
    ['Listeners', 'Check your listeners.', 'Up, down or flat?'],
    ['Posts', 'Find your top posts.', 'What did people love most?'],
    ['Learn', 'Note what worked.', 'Do more of it.'],
    ['Plan', 'Plan next month.', 'Set goals for February.']] }, { k: 'Growth tip', t: 'Review. Adjust. <em>Repeat.</em>', b: 'Growth is a cycle.' }],
  ['2027-01-31', { k: 'Month one done', t: 'January done. <em>What’s next?</em>', q: 'What was your biggest win this January?', cta: 'PLAN', pts: [
    ['Celebrate', 'Celebrate your wins.', 'Big or small, they count.'],
    ['Learn', 'Learn from the misses.', 'Every setback teaches something.'],
    ['Goals', 'Set February goals.', 'Clear targets for next month.'],
    ['Release', 'Keep releasing.', 'Momentum is everything.']] }, { k: 'Keep going', t: 'One month down. <em>Eleven to go.</em>', b: 'Let’s keep growing.' }],
];

module.exports = { days };
