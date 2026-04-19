import { type DataCategoryType } from "@/types/common";

export const categoriesIds = (category: DataCategoryType) => {
  switch (category) {
    case "education":
      return [0, 1, 2];
    case "projects":
      return [0, 10, 11];
    case "experience":
      return [0, 1, 2, 3];
    case "certifications":
      return [0, 1, 2];
  }
};
