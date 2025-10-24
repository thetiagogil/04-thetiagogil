import type { DataCategoryType, DataStatusType } from "@/types/common";

export interface DataType {
  id: number;
  category: DataCategoryType;
  name?: string;
  nameKey?: string;
  place?: string;
  placeKey?: string;
  subject?: string;
  subjectKey?: string;
  descriptionKey?: string;
  link: string;
  techs: string[];
  dateStart: Date;
  dateEnd?: Date | "Present";
  status?: DataStatusType;
  img?: string;
}
