export const CATEGORIES = ["experience", "projects", "education", "certifications"] as const;
export type CATEGORIES_TYPES = (typeof CATEGORIES)[number];
