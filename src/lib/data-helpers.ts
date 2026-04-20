import type { DataItem } from "@/types/data";

/**
 * Resolves the display title of a DataItem.
 * Uses titleKey for translation if available, falls back to title.
 */
export const getItemTitle = (
  item: DataItem,
  tr: (key: string | undefined) => string,
) => {
  if (item.titleKey) return tr(item.titleKey);
  return item.title;
};

/**
 * Resolves the display org/company of a DataItem.
 * Uses orgKey for translation if available, falls back to org.
 */
export const getItemOrg = (
  item: DataItem,
  tr: (key: string | undefined) => string,
) => {
  if (item.orgKey) return tr(item.orgKey);
  return item.org;
};

/**
 * Returns a year string from a Date.
 */
export const getYear = (date: Date): number => date.getFullYear();

/**
 * Returns end year or null for ongoing items.
 */
export const getEndYear = (item: DataItem): number | null => {
  if (item.dateEnd === null || item.dateEnd === undefined) return null;
  return item.dateEnd.getFullYear();
};
