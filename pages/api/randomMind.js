export default async function handler(req, res) {
  const topics = [ 'Mindset',      'Belief',       'Growth', 'Ambition',     'Motivation',   'Inspiration', 'Positivity',   'Confidence',   'Success', 'Empowerment',  'Resilience',   'Determination', 'Abundance',    'Achievements', 'Thriving', 'Excellence',   'Gratitude',    'Fulfillment', 'Happiness',    'Joy',          'Love', 'Kindness',     'Optimism',     'Courage', 'Peace',        'Serenity',     'Prosperity', 'Harmony',      'Wisdom',       'Laughter', 'Hope',         'Satisfaction', 'Vibrant', 'Blessings',    'Radiance',     'Positive', 'Influence',    'Dreams',       'Accomplishment', 'Triumph',      'Victory',      'Elevation', 'Brilliance',   'Creativity',   'Kindheartedness', 'Perseverance', 'Optimistic',   'Affirmation', 'Self-love',    'Self-esteem',  'Inspire', 'Motivate',     'Empower',      'Encourage', 'Grateful',     'Succeed',      'Transform', 'Elevate',      'Uplift',       'Radiate', 'Harmonious',   'Benevolent',   'Enthusiasm' ] 
  const topic = topics[Math.floor(Math.random() * topics.length)];
  const audio = `https://gitlab.com/dexoshi/calm-music/-/raw/main/${Math.floor(Math.random() * 55) + 1}.mp3`;
  const video1 = `https://gitlab.com/dexoshi/calm-vid/-/raw/main/${Math.floor(Math.random() * 55) + 1}.mp4`;
  const video2 = `https://gitlab.com/dexoshi/calm-vid/-/raw/main/${Math.floor(Math.random() * 55) + 1}.mp4`;
  const factNum = Math.floor(Math.random() * 10000);
  const output = { audio, video1, video2, factNum, topic };
  res.json(output);
}
