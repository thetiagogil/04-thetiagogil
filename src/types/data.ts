import type { Category, ItemStatus, Lang } from "@/types/common";

export type Localized = Record<Lang, string>;

export interface DataItem {
  id: string;
  category: Category;
  slug?: string;
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
  roleKey?: string;
}
