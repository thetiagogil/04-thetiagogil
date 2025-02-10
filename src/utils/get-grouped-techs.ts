type Category = "Web Development" | "Architecture" | "Project Management" | "Design Tools" | "General Tools" | "Other";

const groupedTechs: Record<Category, string[]> = {
  "Web Development": [
    "DOM Manipulation",
    "Express.js",
    "HTML",
    "JavaScript",
    "MongoDB",
    "Next.js",
    "Node.js",
    "Postman",
    "React",
    "React Native",
    "REST API",
    "Ruby on Rails",
    "CSS",
    "Supabase",
    "TypeScript",
    "OutSystems",
    "Joy UI",
    "Solidity",
    "SQL"
  ],
  Architecture: ["AutoCAD", "Revit", "SketchUp"],
  "Project Management": ["Agile Methodologies", "Jira", "Kanban", "Lean Principles", "Notion"],
  "Design Tools": ["Adobe Photoshop", "Figma"],
  "General Tools": ["Microsoft Office"],
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
