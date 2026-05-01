import type { DataItem, ProjectItem } from "@/types/data";

const projectImagePathCollator = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: "base",
});

export const sortProjectImages = (images: string[]) =>
  [...images].sort(projectImagePathCollator.compare);

export const getProjectImages = (project: ProjectItem) => project.images ?? [];

export const isVisibleProject = (project: ProjectItem) =>
  project.visible !== false;

export const isVisibleItem = (item: DataItem) =>
  item.category !== "projects" || isVisibleProject(item);

export const shouldShowProjectStatus = (
  project: ProjectItem,
  surface: "details" | "summary",
) => surface === "details" || project.status !== "completed";
