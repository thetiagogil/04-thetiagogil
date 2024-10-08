export const desiredIds = type => {
  switch (type) {
    case "projects":
      return [0, 1, 4, 9]; // <== change this values for PROJECTS
    case "education":
      return [0, 1, 2]; // <== change this values for EDUCATION
    case "experience":
      return [0, 1, 2]; // <== change this values for EXPERIENCE
    case "certifications":
      return [0, 1, 2]; // <== change this values for CERTIFICATIONS
    default:
      return null;
  }
};
