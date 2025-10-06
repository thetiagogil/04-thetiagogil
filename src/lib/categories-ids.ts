import { DataCategory } from "../types/common";

export const categoriesIds = (category: DataCategory) => {
  switch (category) {
    case "education":
      return [0, 1, 2];
    case "projects":
      return [0, 11, 12];
    case "experience":
      return [0, 1, 2, 3];
    case "certifications":
      return [0, 1, 2];
  }
};
