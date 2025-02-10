import { DataModel } from "../models/data.model";

export const sortData = (data: DataModel[]): DataModel[] => {
  const getComparableEnd = (dateEnd?: Date | "Present"): number => {
    if (dateEnd === "Present") return Infinity;
    if (dateEnd instanceof Date) return dateEnd.getTime();
    return -1;
  };

  data.sort((a, b) => {
    const startDiff = b.dateStart.getTime() - a.dateStart.getTime();
    if (startDiff !== 0) {
      return startDiff;
    }

    return getComparableEnd(b.dateEnd) - getComparableEnd(a.dateEnd);
  });

  return data;
};
