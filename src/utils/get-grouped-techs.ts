type Category = "Web Development" | "Architecture" | "Project Management" | "Design Tools" | "General Tools" | "Other";

const groupedTechs: Record<string, string[]> = {
  Frontend: [
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
  Backend: ["Node.js", "Express.js", "REST API", "Postman", "Supabase", "Solidity"],
  Database: ["MongoDB", "PostgreSQL"],
  Architecture: ["AutoCAD", "Revit", "SketchUp"],
  "Project Management": ["Agile Methodologies", "Jira", "Kanban", "Lean Principles", "Notion"],
  "Design Tools": ["Adobe Photoshop", "Figma"],
  "General Tools": ["Microsoft Office", "Git", "OutSystems", "Blockchain"],
  Other: []
};

export const getGroupedTechs = (techsArray: string[]) => {
  const allTechs = techsArray;
  const categorizedTechsObject = { ...groupedTechs, Other: [...groupedTechs.Other] };

  allTechs.forEach((tech: string) => {
    let found = false;
    for (const category in groupedTechs) {
      if (groupedTechs[category as Category].includes(tech)) {
        found = true;
        break;
      }
    }
    if (!found) {
      categorizedTechsObject.Other.push(tech);
    }
  });

  return categorizedTechsObject;
};
