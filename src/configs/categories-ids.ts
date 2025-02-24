import { CategoryType } from "./contants";

export const categoriesIds = (category: CategoryType) => {
  switch (category) {
    case "education":
      return [0, 1, 2]; // <== change this values for EDUCATION
    case "projects":
      return [0, 11, 12]; // <== change this values for PROJECTS
    case "experience":
      return [0, 1, 2]; // <== change this values for EXPERIENCE
    case "certifications":
      return [0, 1, 2]; // <== change this values for CERTIFICATIONS
  }
};
