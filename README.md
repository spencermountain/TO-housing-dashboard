Scraper for Toronto's [housing dashboard](https://www.toronto.ca/city-government/data-research-maps/toronto-housing-data-hub/housing-data/) data

Built as a handy utility to get JSON from Toronto's public housing dashboard page.


### Output format
The data is split in two parts- `cards` and `wards`

```json
{
  "date": "2025-11-05",
  "cards": [
    {
      "section": "Provincial Housing 10-year Target",
      "desc": "Cumulative number of new homes created Jan 1, 2022 and Aug 31, 2025",
      "value": 80733,
      "goal": 285000
    },
    // ...
  ],
  "wards": [
    {
      "desc": "Planning Applications Under Review",
      "rows": [
        {
          "ward": "Etobicoke North",
          "value": 947
        },
        {
          "ward": "Etobicoke Centre",
          "value": 2892
        },
      //...
    ]
}
```

---

### Usage:
written in Node

this webpage loads slowly, so please wait 10-15 seconds for it to load.

to run:
```
npm install
npx playwright install #(takes a minute)
npm run start
```


MIT