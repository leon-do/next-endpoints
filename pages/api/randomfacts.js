const axios = require("axios");

export default async function handler(req, res) {
  const topics = await axios.get("https://gitlab.com/dexoshi/science-topics/-/raw/main/topics.json");
  const topic = topics[Math.floor(Math.random() * topics.length)];
  const audio = `https://gitlab.com/dexoshi/science-audio/-/raw/main/${Math.floor(Math.random() * 55) + 1}.mp3`;
  const video1 = `https://gitlab.com/dexoshi/science-vid/-/raw/main/${Math.floor(Math.random() * 55) + 1}.mp4`;
  const video2 = `https://gitlab.com/dexoshi/science-vid/-/raw/main/${Math.floor(Math.random() * 55) + 1}.mp4`;
  const factNum = Math.floor(Math.random() * 10000);
  const output = { audio, video1, video2, factNum, topic };
  res.json(output);
}
