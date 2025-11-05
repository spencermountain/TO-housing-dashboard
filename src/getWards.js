import { cleanValue, cleanText } from './fns.js';

let mapSections = [
  "planning_app_map_0_wrapper",
  "approved_opas_map_0_wrapper",
  "approved_siteplans_map_0_wrapper",
  "units_proposed_map_0_wrapper",
  "units_created_map_0_wrapper",
  "units_inspected_map_0_wrapper",
]

const parseTable = async (table) => {
  const rowsLocator = await table.locator('tbody tr');
  let caption = await table.locator('caption')
  caption = await caption.first().textContent();
  caption = cleanText(caption);

  const rowCount = await rowsLocator.count();
  const results = [];
  for (let i = 0; i < rowCount; i++) {
    const row = rowsLocator.nth(i);
    const rowHeader = await row.locator('th').textContent();
    const cellLocator = row.locator('td');
    const cellTexts = await cellLocator.allTextContents();
    const rowData = cellTexts.map(text => cleanText(text));
    let value = Number(rowData[0]);
    results.push({ ward: cleanText(rowHeader), value });
  }
  console.log(results.length, 'wards in table - ', caption);
  return { desc: caption, rows: results };
}

const getWards = async (page) => {
  const wards = [];
  for (let i = 0; i < mapSections.length; i++) {
    const section = await page.locator(`#${mapSections[i]}`);
    const table = await section.locator('table').nth(0);
    const rows = await parseTable(table);
    wards.push(rows);
  }
  return wards;
}
export default getWards;