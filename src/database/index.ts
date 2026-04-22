import { certifications } from "@/database/certifications";
import { education } from "@/database/education";
import { experience } from "@/database/experience";
import { projects } from "@/database/projects";
import { getExperienceSlug, getProjectSlug } from "@/lib/details";
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
  projects.find(
    (project) => project.hasDetailsPage && getProjectSlug(project) === slug,
  );

export const getExperienceBySlug = (slug: string) =>
  experience.find(
    (item) => item.hasDetailsPage && getExperienceSlug(item) === slug,
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
