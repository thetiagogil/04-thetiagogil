import type { ItemStatus, Lang } from "@/types/common";

export type Localized = Record<Lang, string>;

export interface BaseDataItem {
  id: string;
  title: string;
  titleKey?: string;
  org: string;
  orgKey?: string;
  subjectKey?: string;
  descriptionKey?: string;
  link?: string;
  repo?: string;
  techs: string[];
  dateStart: Date;
  dateEnd?: Date | null;
  status?: ItemStatus;
  featured?: boolean;
  img?: string;
  longDescriptionKey?: string;
}

export interface ExperienceItem extends BaseDataItem {
  category: "experience";
  roleKey?: string;
  hasDetailsPage: boolean;
}

export interface ProjectItem extends BaseDataItem {
  category: "projects";
  img?: never;
  hasDetailsPage: boolean;
  images: string[];
}

export interface EducationItem extends BaseDataItem {
  category: "education";
}

export interface CertificationItem extends BaseDataItem {
  category: "certifications";
}

export type DataItem =
  | ExperienceItem
  | ProjectItem
  | EducationItem
  | CertificationItem;

export type DetailItem = ExperienceItem | ProjectItem;
