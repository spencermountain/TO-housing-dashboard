import { cleanValue, cleanText } from './fns.js';
const getCards = async (page) => {
  const cards = [];

  const chartsLocator = await page.locator('cotui-chart');
  const count = await chartsLocator.count();

  for (let i = 0; i < count; i++) {
    const chart = await chartsLocator.nth(i);
    let section = await chart.getAttribute('chart-title');

    const valueEl = await chart.locator('.chart--value', { timeout: 1000 });
    let isFound = await valueEl.count();
    if (isFound === 0) {
      continue;
    }
    const captionEl = await chart.locator('.chart--caption', { timeout: 1000 });
    const value = await valueEl.textContent();
    const desc = await captionEl.textContent();

    let { num, total } = cleanValue(value);
    let res = {
      section: cleanText(section),
      desc: cleanText(desc),
      value: num,
    }
    if (total) {
      res.goal = total;
    }
    if (!res.section || !res.desc || typeof res.value !== 'number') {
      continue;
    }
    cards.push(res);
  }
  return cards;
}

export default getCards;