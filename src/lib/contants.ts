import { DataCategory, Languages, TechsCategory } from "../types/common";

export const CATEGORIES: DataCategory[] = ["experience", "projects", "education", "certifications"];
export const LANGUAGES: Languages[] = ["en", "pt", "es"];
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
    "Wagmi"
  ],
  backend: ["Node.js", "Express.js", "REST API", "Postman", "Supabase", "Solidity"],
  database: ["MongoDB", "PostgreSQL"],
  architecture: ["AutoCAD", "Revit", "SketchUp"],
  projectManagement: ["Agile Methodologies", "Jira", "Kanban", "Lean Principles", "Notion"],
  designTools: ["Adobe Photoshop", "Figma"],
  generalTools: ["Microsoft Office", "Git", "OutSystems", "Blockchain"],
  other: []
};
