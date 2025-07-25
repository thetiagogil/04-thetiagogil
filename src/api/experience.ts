import { Data } from "../types/data";

export const experience: Data[] = [
  {
    id: 0,
    category: "experience",
    nameKey: "experience_cr_espassos_name",
    place: "CR espassos",
    descriptionKey: "experience_cr_espassos_description",
    link: "https://www.linkedin.com/company/cr-espassos/about/",
    techs: ["Revit", "AutoCAD", "Microsoft Office"],
    dateStart: new Date("2022-09"),
    dateEnd: new Date("2023-08"),
    img: "experience/crespassos.jpeg"
  },
  {
    id: 1,
    category: "experience",
    nameKey: "Full-stack Developer",
    place: "Talent Protocol",
    descriptionKey: "experience_talent_protocol_description",
    link: "https://www.talentprotocol.com/",
    techs: [
      "React",
      "Next.js",
      "TypeScript",
      "MUI",
      "Wagmi",
      "Supabase",
      "PostgreSQL",
      "Git",
      "Notion",
      "Figma",
      "Blockchain"
    ],
    dateStart: new Date("2024-03"),
    dateEnd: new Date("2024-08"),
    img: "experience/talentprotocol.jpeg"
  },
  {
    id: 2,
    category: "experience",
    nameKey: "Full-stack Developer",
    place: "Subvisual",
    descriptionKey: "experience_subvisual_description",
    link: "https://subvisual.com/",
    techs: [
      "React",
      "TypeScript",
      "MUI",
      "Wagmi",
      "Solidity",
      "Supabase",
      "PostgreSQL",
      "Git",
      "Notion",
      "Figma",
      "Blockchain"
    ],
    dateStart: new Date("2024-12"),
    dateEnd: new Date("2025-02"),
    img: "experience/subvisual.jpeg"
  },
  {
    id: 2,
    category: "experience",
    nameKey: "Frontend Developer",
    place: "Aquasis",
    descriptionKey: "",
    link: "https://www.aquasis.pt/",
    techs: [],
    dateStart: new Date("2025-04"),
    dateEnd: "Present",
    img: "experience/aquasis.jpeg"
  }
];
