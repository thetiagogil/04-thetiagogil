import { CATEGORIES_TYPES } from "./contants";

export const categoriesIds = (category: CATEGORIES_TYPES) => {
  switch (category) {
    case "education":
      return [0, 1, 2]; // <== change this values for EDUCATION
    case "projects":
      return [0, 1, 4]; // <== change this values for PROJECTS
    case "experience":
      return [0, 1, 2]; // <== change this values for EXPERIENCE
    case "certifications":
      return [0, 1, 2]; // <== change this values for CERTIFICATIONS
  }
};
