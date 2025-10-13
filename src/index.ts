export { banks } from "./data/banks";
export type { Bank, Banks } from "./types";
export { getBanks, getBankByCode, getBankBySlug, searchBanks } from "./utils";

export { getBanks as default } from "./utils";
