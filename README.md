Scraper for Toronto's [housing dashboard](https://www.toronto.ca/city-government/data-research-maps/toronto-housing-data-hub/housing-data/) data

Built as a handy utility to get structured JSON data from Toronto's public housing dashboard page.

Intended to be used lightly, as the dashboard updates infrequently. 

Please respect the city's web endpoint and [their legal terms](https://www.toronto.ca/city-government/data-research-maps/open-data/open-data-licence/).

---

### Output format
The data outputs can be viewed in the [`./data`](https://github.com/spencermountain/TO-housing-dashboard/tree/main/data) directory.

Results are split in two parts- `cards` and `wards`:

```js
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
written in Node using playwright.

this webpage loads slowly, so please wait 10-15 seconds as it loads.

to install:
```
npm install
npx playwright install #(takes a minute)
```

to run:
```
npm run start
```

when it's working, you data should appear in `./data` under the current date.

MIT