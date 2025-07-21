import { DataCategory, DataStatus } from "./common";

export interface Data {
  id: number;
  category: DataCategory;
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
  status?: DataStatus;
  img?: string;
}
