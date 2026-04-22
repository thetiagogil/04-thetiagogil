import type { ItemStatus } from "@/types/common";

export interface DetailLink {
  href: string;
  label: string;
  labelKey?: string;
  variant?: "primary" | "secondary";
}

export interface BaseDataItem {
  id: string;
  title: string;
  titleKey?: string;
  org: string;
  orgKey?: string;
  subjectKey?: string;
  descriptionKey?: string;
  detailsKey?: string;
  link?: string;
  repo?: string;
  detailLinks?: DetailLink[];
  techs: string[];
  dateStart: Date;
  dateEnd?: Date | null;
  status?: ItemStatus;
  featured?: boolean;
  img?: string;
  hasDetailsPage: boolean;
}

export interface ExperienceItem extends BaseDataItem {
  category: "experience";
  roleKey?: string;
}

export interface ProjectItem extends BaseDataItem {
  category: "projects";
  img?: never;
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

export type DetailItem = DataItem & { hasDetailsPage: true };
