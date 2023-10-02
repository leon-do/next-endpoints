export default async function handler(req, res) {
  // random number from 0 to 2000
  const random = Math.floor(Math.random() * 2000);
  const audio = `https://gitlab.com/dexoshi/science-audio/-/raw/main/${
    Math.floor(Math.random() * 55) + 1
  }.mp3`;
  const video1 = `https://gitlab.com/leon-do/find.emoji/-/raw/main/emojis/${random}.jpeg`;
  const output = { audio, video1 };
  res.json(output);
}
