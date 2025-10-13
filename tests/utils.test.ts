import { describe, it, expect } from 'vitest';
import { getBanks, getBankByCode, getBankBySlug, searchBanks } from '../src/utils';
import allBanks from '../src/all_banks.json';
import defaultLogo from '../src/logos/default-image.png';

describe('nigerian-banks utils', () => {
  it('getBanks returns all banks from JSON', () => {
    const banks = getBanks();
    expect(Array.isArray(banks)).toBe(true);
    expect(banks.length).toBeGreaterThan(0);
    expect(banks.length).toBe(allBanks.length);
  });

  it('each bank has required fields and a logo string', () => {
    const banks = getBanks();
    for (const b of banks) {
      expect(typeof b.id).toBe('string');
      expect(typeof b.name).toBe('string');
      expect(typeof b.slug).toBe('string');
      expect(typeof b.code).toBe('string');
      expect(typeof b.logo).toBe('string');
      expect(b.logo.length).toBeGreaterThan(0);
    }
  });

  it('finds by code', () => {
    const gt = getBankByCode('058');
    expect(gt?.slug).toBe('guaranty-trust-bank');
  });

  it('finds by slug (case-insensitive)', () => {
    const gt = getBankBySlug('Guaranty-Trust-Bank');
    expect(gt?.code).toBe('058');
  });

  it('search works across name and slug', () => {
    const results = searchBanks('first');
    expect(results.length).toBeGreaterThan(0);
    expect(results.some((b) => /first/i.test(b.name) || /first/i.test(b.slug))).toBe(true);
  });

  it('normalizes ussd: null/empty -> undefined', () => {
    // 78 FINANCE COMPANY LIMITED has null ussd in JSON
    const item = getBankBySlug('78-finance-company-limited');
    expect(item).toBeTruthy();
    expect(item!.ussd).toBeUndefined();
  });

  it('falls back to default logo when no PNG exists for slug', () => {
    // Choose a slug we know has no PNG in src/logos/
    const item = getBankBySlug('78-finance-company-limited');
    expect(item).toBeTruthy();
    expect(item!.logo).toBe(defaultLogo);
  });
});
