import { promises as fs } from 'fs';

export const readProblem = async (filename) => {
  let clicks = [];
  try {
    const data = await fs.readFile(filename, "utf-8");
    clicks = JSON.parse(data);
  } catch {
    console.error(`Click file not found at ${filename}`);
  }
  return clicks;
}

export const writeSolution = async (clicks, filename) => {
  try {
    await fs.writeFile(filename, JSON.stringify(clicks, undefined, 2));
  } catch {
    console.error(`Click file not written at ${filename}`);
  }
}