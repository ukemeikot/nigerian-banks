# nigerian-banks

[
  ![npm version](https://img.shields.io/npm/v/nigerian-banks-with-logos-codes-ussd)
](https://www.npmjs.com/package/nigerian-banks-with-logos-codes-ussd)
[
  ![npm downloads](https://img.shields.io/npm/dm/nigerian-banks-with-logos-codes-ussd)
](https://www.npmjs.com/package/nigerian-banks-with-logos-codes-ussd)
[
  ![license](https://img.shields.io/npm/l/nigerian-banks-with-logos-codes-ussd)
](./LICENSE)
[
  ![CI](https://github.com/ridbay/nigerian-banks/actions/workflows/ci.yml/badge.svg?branch=master)
](https://github.com/ridbay/nigerian-banks/actions/workflows/ci.yml)

Typed list of Nigerian banks with codes, slugs, USSD, and logos. Works in Node.js and the browser.

Data comes from `src/all_banks.json`. Logos are imported from `src/logos/` and an auto-generated map links each bank `slug` to its logo at build time.

## Install

```bash
npm i nigerian-banks-with-logos-codes-ussd
# or
yarn add nigerian-banks-with-logos-codes-ussd
# or
pnpm add nigerian-banks-with-logos-codes-ussd
```

## Usage

### TypeScript / ESM

```ts
import {
  getBanks,
  getBankByCode,
  getBankBySlug,
  searchBanks,
} from "nigerian-banks-with-logos-codes-ussd";

const all = getBanks();
const gt = getBankBySlug("guaranty-trust-bank");
const byCode = getBankByCode("058");
const matches = searchBanks("first");

// Each Bank has a logo string that points to a built asset (or default image)
console.log(all[0].logo);
```

### CommonJS

```js
const {
  getBanks,
  getBankByCode,
} = require("nigerian-banks-with-logos-codes-ussd");

console.log(getBanks());
console.log(getBankByCode("058"));
```

### Example bank shape

```json
{
  "id": "23",
  "name": "OPay",
  "slug": "paycom",
  "code": "999992",
  "ussd": "*955#",
  "logo": "/assets/paycom-<hash>.png"
}
```

## API

- **getBanks()**: `Bank[]` – all banks.
- **getBankByCode(code)**: `Bank | undefined`
- **getBankBySlug(slug)**: `Bank | undefined`
- **searchBanks(query)**: `Bank[]`
- **types**: `Bank`, `Banks`

## Notes

- **USSD**: may be missing (undefined) for some banks.
- **Data source**: `src/all_banks.json`. Update this file to change/add banks.
- **Logos**:
  - Add a PNG to `src/logos/{slug}.png` (slug must match the bank `slug`).
  - Run `npm run build` (or `npm run dev`). A generator creates `src/data/generated-logos.ts` so logos are picked up automatically.
  - If a logo is missing, a default image is used.
- Dataset is curated; PRs to add/update banks and logos are welcome.

## Contributing

- **Add or update a bank**
  - Edit `src/all_banks.json` and add an object with `id`, `name`, `slug`, `code`, and optional `ussd`.
  - Keep `slug` unique and URL-friendly (lowercase, hyphens).
- **Add a logo**
  - Save a PNG at `src/logos/{slug}.png` where `{slug}` matches the bank `slug`.
  - Run `npm run build` (or `npm run dev`) to regenerate the `LOGOS` map.
- **Develop locally**
  - `npm install`
  - `npm run dev` (watches and rebuilds, regenerates logos)

### Common slugs and filenames

| Bank name                    | Slug                      | PNG filename                            |
| ---------------------------- | ------------------------- | --------------------------------------- |
| Access Bank                  | access-bank               | src/logos/access-bank.png               |
| Access Bank (Diamond)        | access-bank-diamond       | src/logos/access-bank-diamond.png       |
| ALAT by WEMA                 | alat-by-wema              | src/logos/alat-by-wema.png              |
| Citibank Nigeria             | citibank-nigeria          | src/logos/citibank-nigeria.png          |
| Ecobank Nigeria              | ecobank-nigeria           | src/logos/ecobank-nigeria.png           |
| Ekondo Microfinance Bank     | ekondo-microfinance-bank  | src/logos/ekondo-microfinance-bank.png  |
| Fidelity Bank                | fidelity-bank             | src/logos/fidelity-bank.png             |
| First Bank of Nigeria        | first-bank-of-nigeria     | src/logos/first-bank-of-nigeria.png     |
| First City Monument Bank     | first-city-monument-bank  | src/logos/first-city-monument-bank.png  |
| Globus Bank                  | globus-bank               | src/logos/globus-bank.png               |
| Guaranty Trust Bank          | guaranty-trust-bank       | src/logos/guaranty-trust-bank.png       |
| Heritage Bank                | heritage-bank             | src/logos/heritage-bank.png             |
| Keystone Bank                | keystone-bank             | src/logos/keystone-bank.png             |
| Kuda Bank                    | kuda-bank                 | src/logos/kuda-bank.png                 |
| Lotus Bank                   | lotus-bank                | src/logos/lotus-bank.png                |
| Moniepoint MFB               | moniepoint-mfb-ng         | src/logos/moniepoint-mfb-ng.png         |
| Paga                         | paga                      | src/logos/paga.png                      |
| PalmPay                      | palmpay                   | src/logos/palmpay.png                   |
| PayCom / OPay                | paycom                    | src/logos/paycom.png                    |
| Polaris Bank                 | polaris-bank              | src/logos/polaris-bank.png              |
| Sparkle Microfinance Bank    | sparkle-microfinance-bank | src/logos/sparkle-microfinance-bank.png |
| Stanbic IBTC Bank            | stanbic-ibtc-bank         | src/logos/stanbic-ibtc-bank.png         |
| Standard Chartered Bank      | standard-chartered-bank   | src/logos/standard-chartered-bank.png   |
| Sterling Bank                | sterling-bank             | src/logos/sterling-bank.png             |
| TAJ Bank                     | taj-bank                  | src/logos/taj-bank.png                  |
| Union Bank of Nigeria        | union-bank-of-nigeria     | src/logos/union-bank-of-nigeria.png     |
| United Bank For Africa (UBA) | united-bank-for-africa    | src/logos/united-bank-for-africa.png    |
| Wema Bank                    | wema-bank                 | src/logos/wema-bank.png                 |
| Zenith Bank                  | zenith-bank               | src/logos/zenith-bank.png               |

## License

MIT
