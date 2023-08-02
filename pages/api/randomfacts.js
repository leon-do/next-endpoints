export default async function handler(req, res) {
  // ["birds", "universe", "carbon", "snakes", "fish", "dogs", "cats", "worms", "oxygen", "stars", "viruses", "rain", "flowers", "atoms", "mushrooms", "electrons", "liquids", "galaxy", "algae"]
  const topics = ["Atoms", "Carbon", "DNA", "Electricity", "Electrons", "Galaxy", "Gravity", "Heat", "Hydrogen", "Light", "Magnetism", "Molecules", "Neutrons", "Nitrogen", "Nucleus", "Oxygen", "Protons", "Sound", "Space", "Stars", "Time", "Universe", "Water", "algae", "amphibians", "bacteria", "birds", "cats", "cells", "clouds", "crustaceans", "dogs", "fish", "flowers", "fungi", "ice", "insects", "mollusks", "mushrooms", "plants", "rain", "reptiles", "rocks", "snakes", "snow", "spiders", "steam", "trees", "viruses", "worms"];
  const topic = topics[Math.floor(Math.random() * topics.length)];
  const audio = `https://gitlab.com/dexoshi/science-audio/-/raw/main/${Math.floor(Math.random() * 55) + 1}.mp3`;
  const video1 = `https://gitlab.com/dexoshi/science-vid/-/raw/main/${Math.floor(Math.random() * 55) + 1}.mp4`;
  const video2 = `https://gitlab.com/dexoshi/science-vid/-/raw/main/${Math.floor(Math.random() * 55) + 1}.mp4`;
  const factNum = Math.floor(Math.random() * 10000);
  const output = { audio, video1, video2, factNum, topic };
  res.json(output);
}
