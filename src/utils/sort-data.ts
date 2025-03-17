import { DataModel } from "../models/data.model";

export const sortData = (data: DataModel[]): DataModel[] => {
  const getDateEnd = (dateEnd?: Date | "Present"): number => {
    if (dateEnd === "Present") return Infinity;
    if (dateEnd instanceof Date) return dateEnd.getTime();
    return -1;
  };

  data.sort((a, b) => {
    const startDiff = b.dateStart.getTime() - a.dateStart.getTime();
    if (startDiff !== 0) return startDiff;

    const isAExperience = a.category.toLowerCase() === "experience";
    const isBExperience = b.category.toLowerCase() === "experience";
    if (isAExperience && !isBExperience) return 1;
    if (isBExperience && !isAExperience) return -1;

    const endDiff = getDateEnd(b.dateEnd) - getDateEnd(a.dateEnd);
    if (endDiff !== 0) return endDiff;

    return (a.name || "").localeCompare(b.name || "");
  });

  return data;
};
