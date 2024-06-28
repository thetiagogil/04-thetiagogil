const groupedTechsObject = {
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
    "Ruby",
    "Ruby on Rails",
    "SCSS",
    "CSS",
    "Supabase",
    "TypeScript",
    "OutSystems",
  ],
  Architecture: ["AutoCAD", "Revit", "SketchUp"],
  "Project Management": [
    "Agile Methodologies",
    "Jira",
    "Kanban",
    "Lean Principles",
    "Notion",
  ],
  "Design Tools": ["Adobe Photoshop", "Figma"],
  "General Tools": ["Microsoft Office"],
  Other: [],
};

export const groupTechs = (techsArray) => {
  const allTechs = techsArray;
  const categorizedTechsObject = {
    ...groupedTechsObject,
    Other: [...groupedTechsObject.Other],
  };

  allTechs.forEach((tech) => {
    let found = false;
    for (const category in groupedTechsObject) {
      if (groupedTechsObject[category].includes(tech)) {
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
