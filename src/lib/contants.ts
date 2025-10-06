import { DataCategory, LanguagesType, TechsCategory, ThemeType } from "../types/common";

export const DATA_CATEGORIES: DataCategory[] = ["experience", "projects", "education", "certifications"];
export const THEMES: ThemeType[] = ["dark", "light", "system"];
export const LANGUAGES: LanguagesType[] = ["en", "pt", "es"];
export const GROUPED_TECHS: Record<TechsCategory, string[]> = {
  frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Next.js",
    "DOM Manipulation",
    "MUI",
    "Wagmi",
    "Bootstrap"
  ],
  backend: ["Node.js", "Express.js", "REST API", "Postman", "Supabase", "Solidity"],
  database: ["MongoDB", "PostgreSQL"],
  architecture: ["AutoCAD", "Revit", "SketchUp"],
  projectManagement: ["Agile Methodologies", "Jira", "Kanban", "Lean Principles", "Notion"],
  designTools: ["Adobe Photoshop", "Figma"],
  generalTools: ["Microsoft Office", "Git", "GitHub", "OutSystems", "Blockchain", "Web3"],
  other: []
};
