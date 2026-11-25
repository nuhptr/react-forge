/** Opsi filter warna yang tersedia. */
export const colors = ["black", "brown", "red", "white", "golden"] as const;

/** Opsi rentang harga yang tersedia. */
export const priceRanges = [
  { label: "Below $300", min: 0, max: 300 },
  { label: "$300 - $600", min: 300, max: 600 },
  { label: "Above $600", min: 600, max: Infinity },
] as const;

export type PriceRange = (typeof priceRanges)[number];
