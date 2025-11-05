let mapSections = [
  "planning_app_map_0_wrapper",
  "approved_opas_map_0_wrapper",
  "approved_siteplans_map_0_wrapper",
  "units_proposed_map_0_wrapper",
  "units_created_map_0_wrapper",
  "units_inspected_map_0_wrapper",
]
const getWards = async (page) => {
  const wards = [];
  for (let i = 0; i < mapSections.length; i++) {
    const mapSectionLocator = await page.locator(`#${mapSections[i]}`);
    const mapSectionText = await mapSectionLocator.textContent();
    wards.push(mapSectionText);
  }
  return wards;
}
export default getWards;