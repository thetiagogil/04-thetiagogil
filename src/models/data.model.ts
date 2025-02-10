import { CATEGORIES_TYPES } from "../configs/contants";

type Status = "completed" | "outdated" | "inactive" | "open";

export type DataModel = {
  id: number;
  category: CATEGORIES_TYPES;
  name: string;
  place?: string;
  subject?: string;
  description?: string;
  link: string;
  techs: string[];
  dateStart: Date;
  dateEnd?: Date | "Present";
  status: Status;
  img?: string;
};
