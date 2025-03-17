type Category =
  | "frontend"
  | "backend"
  | "architecture"
  | "projectManagement"
  | "designTools"
  | "generalTools"
  | "other";

const groupedTechs: Record<string, string[]> = {
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

export const getGroupedTechs = (techsArray: string[]) => {
  const allTechs = techsArray;
  const categorizedTechsObject = { ...groupedTechs, other: [...groupedTechs.other] };

  allTechs.forEach((tech: string) => {
    let found = false;
    for (const category in groupedTechs) {
      if (groupedTechs[category as Category].includes(tech)) {
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
