import { certifications } from "@/database/certifications";
import { education } from "@/database/education";
import { experience } from "@/database/experience";
import { projects } from "@/database/projects";
import type { DataItem } from "@/types/data";

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

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);

export const getSorted = (items: DataItem[]) =>
  [...items].sort((a, b) => {
    const aEnd = a.dateEnd ? a.dateEnd.getFullYear() : 9999;
    const bEnd = b.dateEnd ? b.dateEnd.getFullYear() : 9999;
    if (bEnd !== aEnd) return bEnd - aEnd;
    return b.dateStart.getFullYear() - a.dateStart.getFullYear();
  });
