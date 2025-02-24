import { CategoryType } from "../configs/contants";

type Status = "completed" | "outdated" | "inactive" | "open";

export type DataModel = {
  id: number;
  category: CategoryType;
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
