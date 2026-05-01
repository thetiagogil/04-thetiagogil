import { certifications } from "@/database/certifications";
import { education } from "@/database/education";
import { experience } from "@/database/experience";
import { projects } from "@/database/projects";
import { getItemSlug } from "@/lib/details";
import type { Category } from "@/types/common";
import type { DataItem, DetailItem } from "@/types/data";

export { certifications } from "@/database/certifications";
export { education } from "@/database/education";
export { experience } from "@/database/experience";
export { person } from "@/database/person";
export { projects } from "@/database/projects";

export const allItems: DataItem[] = [
  ...experience,
  ...projects,
  ...education,
  ...certifications,
];

export const getFeatured = () => allItems.filter((i) => i.featured);

export const getByCategory = (category: string) =>
  allItems.filter((i) => i.category === category);

export const getItemById = (id: string) =>
  allItems.find((item) => item.id === id);

export const getDetailItemByCategoryAndSlug = (
  category: Category,
  slug: string,
) =>
  allItems.find(
    (item): item is DetailItem =>
      item.category === category &&
      item.hasDetailsPage === true &&
      getItemSlug(item) === slug,
  );

export const getSorted = (items: DataItem[]) =>
  [...items].sort((a, b) => {
    const aStart = a.dateStart.getTime();
    const bStart = b.dateStart.getTime();
    if (bStart !== aStart) return bStart - aStart;

    const aEnd =
      a.dateEnd === null
        ? Number.POSITIVE_INFINITY
        : (a.dateEnd?.getTime() ?? a.dateStart.getTime());
    const bEnd =
      b.dateEnd === null
        ? Number.POSITIVE_INFINITY
        : (b.dateEnd?.getTime() ?? b.dateStart.getTime());
    if (bEnd !== aEnd) return bEnd - aEnd;

    return a.id.localeCompare(b.id);
  });
