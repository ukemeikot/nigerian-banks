import type { Bank, Banks } from "./types";
import { banks } from "./data/banks";

/** Return an immutable list of all banks */
export function getBanks(): Banks {
  return banks;
}

/** Find a bank by its slug (case-insensitive) */
export function getBankBySlug(slug: string): Bank | undefined {
  const s = slug.trim().toLowerCase();
  return banks.find((b) => b.slug.toLowerCase() === s);
}

/** Find a bank by its NUBAN bank code */
export function getBankByCode(code: string): Bank | undefined {
  const c = code.trim();
  return banks.find((b) => b.code === c);
}

/** Simple text search across name and slug */
export function searchBanks(query: string): Banks {
  const q = query.trim().toLowerCase();
  if (!q) return banks;
  return banks.filter(
    (b) => b.name.toLowerCase().includes(q) || b.slug.toLowerCase().includes(q)
  );
}

export type { Bank, Banks } from "./types";
