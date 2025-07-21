import { TechsCategory } from "../types/common";
import { Data } from "../types/data";
import { GROUPED_TECHS } from "./contants";

export const getDateYear = (date: Date) => (date instanceof Date ? date.getFullYear() : null);

export const capFirstLetter = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const getColorTransparency = (hex: string, percentage: number) => {
  if (!hex?.startsWith("#")) hex = `#${hex}`;
  const alpha = Math.round((percentage / 100) * 255)
    .toString(16)
    .padStart(2, "0");
  return `${hex}${alpha}` as string;
};

export const getDateMonth = (date: Date, locale: string = "en") =>
  date instanceof Date
    ? capFirstLetter(new Intl.DateTimeFormat(locale, { month: "short" }).format(date).replace(".", ""))
    : null;

export const getGroupedTechs = (techsArray: string[]) => {
  const allTechs = techsArray;
  const categorizedTechsObject = { ...GROUPED_TECHS, other: [...GROUPED_TECHS.other] };

  allTechs.forEach((tech: string) => {
    let found = false;
    for (const category in GROUPED_TECHS) {
      if (GROUPED_TECHS[category as TechsCategory].includes(tech)) {
        found = true;
        break;
      }
    }
    if (!found) {
      categorizedTechsObject.other.push(tech);
    }
  });

  return categorizedTechsObject;
};

export const sortData = (data: Data[]) => {
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
