import type { Bank, Banks } from "../types";
import defaultLogo from "../logos/default-image.png";
import allBanks from "../all_banks.json";
import { LOGOS } from "./generated-logos";


function createBank(
  b: Omit<Bank, "logo">
): Bank {
  const logo = LOGOS[b.slug] ?? defaultLogo;
  return { ...b, logo };
}

export const banks: Banks = [
  ...allBanks.map((e: any) =>
    createBank({
      id: String(e.id),
      name: String(e.name),
      slug: String(e.slug),
      code: String(e.code),
      ussd:
        typeof e.ussd === "string" && e.ussd.trim().length > 0
          ? e.ussd
          : undefined,
    })
  ),
];
