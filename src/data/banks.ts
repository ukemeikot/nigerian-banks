import type { Bank, Banks } from "../types";
import allBanks from "../all_banks.json";
import { LOGOS, LOGO_FILES } from "./generated-logos";


const RAW_BASE =
  "https://raw.githubusercontent.com/ridbay/nigerian-banks/refs/heads/master/src/logos";

function createBank(
  b: Omit<Bank, "logo">
): Bank {
  // Use presence in LOGOS (generated at build) to know if a slug-specific PNG exists
  const hasCustomLogo = Boolean(LOGOS[b.slug]);
  const file = LOGO_FILES[b.slug];
  const logo = hasCustomLogo && file
    ? `${RAW_BASE}/${file}`
    : `${RAW_BASE}/default-image.png`;
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
