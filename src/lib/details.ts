import type {
  DataItem,
  DetailItem,
  ExperienceItem,
  ProjectItem,
} from "@/types/data";

const stripPrefix = (value: string, prefix: string) =>
  value.startsWith(prefix) ? value.slice(prefix.length) : value;

export const isProjectItem = (item: DataItem): item is ProjectItem =>
  item.category === "projects";

export const isExperienceItem = (item: DataItem): item is ExperienceItem =>
  item.category === "experience";

export const hasItemDetails = (item: DataItem): item is DetailItem =>
  (isProjectItem(item) || isExperienceItem(item)) && item.hasDetailsPage;

export const getProjectSlug = (project: ProjectItem) =>
  stripPrefix(project.id, "proj-");

export const getExperienceSlug = (experience: ExperienceItem) =>
  stripPrefix(experience.id, "exp-");

export const getItemSlug = (item: DetailItem) =>
  item.category === "projects" ? getProjectSlug(item) : getExperienceSlug(item);

export const getItemHref = (item: DataItem) =>
  hasItemDetails(item) ? `/${item.category}/${getItemSlug(item)}` : null;
