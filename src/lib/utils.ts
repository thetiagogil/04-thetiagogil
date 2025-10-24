import { GROUPED_TECHS } from "@/lib/contants";
import type { DataCategoryType, TechsCategoryType } from "@/types/common";
import type { DataType } from "@/types/data";
import type { Theme } from "@mui/joy";

export const getDateYear = (date: Date) =>
  date instanceof Date ? date.getFullYear() : null;

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
    ? capFirstLetter(
        new Intl.DateTimeFormat(locale, { month: "short" })
          .format(date)
          .replace(".", "")
      )
    : null;

export const getGroupedTechs = (techsArray: string[]) => {
  const allTechs = techsArray;
  const categorizedTechsObject = {
    ...GROUPED_TECHS,
    other: [...GROUPED_TECHS.other],
  };

  allTechs.forEach((tech: string) => {
    let found = false;
    for (const category in GROUPED_TECHS) {
      if (GROUPED_TECHS[category as TechsCategoryType].includes(tech)) {
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

export const sortData = (data: DataType[]) => {
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

export const chipColors = (category: DataCategoryType, theme: Theme) => {
  switch (category) {
    case "experience":
      return {
        bgcolor: getColorTransparency(theme.palette.main.green, 20),
        color: "main.green",
      };
    case "projects":
      return {
        bgcolor: getColorTransparency(theme.palette.main.blue, 20),
        color: "main.blue",
      };
    case "education":
      return {
        bgcolor: getColorTransparency(theme.palette.main.yellow, 20),
        color: "main.yellow",
      };
    case "certifications":
      return {
        bgcolor: getColorTransparency(theme.palette.main.pink, 20),
        color: "main.pink",
      };
  }
};
