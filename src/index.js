import { chromium } from 'playwright';
import spacetime from 'spacetime';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url'
import getCards from './getCards.js';
import getWards from './getWards.js';
const dir = path.dirname(fileURLToPath(import.meta.url))

// const url = 'https://www.toronto.ca/city-government/data-research-maps/toronto-housing-data-hub/housing-data/'
// const url = `file://${path.join(dir, '../_cache/2025-11-05.html')}`
const url = `file://${path.join(dir, '../_cache/part2.html')}`
const today = spacetime.now('America/Toronto').format('YYYY-MM-DD');
const output = `data/${today}.json`;


const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

// this page loads very slowly, so we wait for 60 seconds
await page.goto(url, {
  waitUntil: 'networkidle',
  timeout: 3 * 60000 // 3 minutes
});
await page.waitForTimeout(1000) // wait for 1 seconds

const cards = await getCards(page);
const wards = await getWards(page);

let data = {
  date: today,
  cards,
  wards
}

await browser.close();

await fs.writeFile(output, JSON.stringify(data, null, 2));
console.log(`Saved ${cards.length} cards to ${output}`);
console.log(`Saved ${wards.length} wards to ${output}`);