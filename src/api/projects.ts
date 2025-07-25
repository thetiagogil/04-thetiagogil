import { Data } from "../types/data";

export const projects: Data[] = [
  {
    id: 0,
    category: "projects",
    name: "Giraffes vs Sea",
    subjectKey: "project_giraffes_vs_sea_subject",
    descriptionKey: "project_giraffes_vs_sea_description",
    link: "https://giraffes-vs-sea.netlify.app/",
    techs: ["JavaScript", "HTML", "CSS", "DOM Manipulation"],
    dateStart: new Date("2023-09"),
    status: "completed",
    img: "projects/giraffes-vs-sea.png"
  },
  {
    id: 1,
    category: "projects",
    name: "House of Legends",
    link: "https://house-of-legends.netlify.app/",
    techs: ["React", "JavaScript", "CSS", "Node.js", "REST API"],
    dateStart: new Date("2023-10"),
    status: "outdated"
  },
  {
    id: 2,
    category: "projects",
    name: "FIN/ACE",
    subjectKey: "project_finace_subject",
    link: "https://finace.netlify.app/",
    techs: ["React", "JavaScript", "CSS", "Node.js", "Express.js", "MongoDB"],
    dateStart: new Date("2023-11"),
    dateEnd: new Date("2023-12"),
    status: "inactive"
  },
  {
    id: 3,
    category: "projects",
    name: "Personal website",
    link: "https://thetiagogil.com/",
    techs: ["React", "TypeScript", "MUI"],
    dateStart: new Date("2024-01"),
    status: "completed"
  },
  {
    id: 4,
    category: "projects",
    name: "FIN/ACE v2",
    descriptionKey: "project_finace_description",
    link: "https://finace-v2.netlify.app/",
    techs: ["React", "TypeScript", "MUI", "Node.js", "Express.js", "Supabase", "PostgreSQL"],
    dateStart: new Date("2024-07"),
    dateEnd: new Date("2024-08"),
    img: "../../../project-4.png",
    status: "outdated"
  },
  /* {
    id: 5,
    category: "projects",
    name: "FIN/ACE v3",
    link: "",
    techs: ["React", "TypeScript", "MUI", "Node.js", "Express.js", "Supabase", "PostgreSQL"],
    dateStart: new Date("2024-09"),
    status: "open"
  }, */
  {
    id: 6,
    category: "projects",
    name: "Passport by Talent Protocol",
    place: "Talent Protocol",
    link: "https://passport.talentprotocol.com/",
    techs: ["React", "TypeScript", "MUI", "Wagmi", "Blockchain"],
    dateStart: new Date("2024-04"),
    dateEnd: new Date("2024-08"),
    status: "completed"
  },
  {
    id: 7,
    category: "projects",
    name: "Build by Talent Protocol",
    place: "Talent Protocol",
    link: "https://build.top/",
    techs: ["Next.js", "TypeScript", "MUI", "Wagmi", "PostgreSQL", "Blockchain"],
    dateStart: new Date("2024-04"),
    dateEnd: new Date("2024-06"),
    status: "completed"
  },
  {
    id: 8,
    category: "projects",
    name: "Builderfi by Talent Protocol",
    place: "Talent Protocol",
    link: "https://mirror.xyz/talentprotocol.eth/dSkw_mNNOgs6GZEjZ3GTJMt0uJ5DjpWGkX3rncF1OD8/",
    techs: ["Next.js", "TypeScript", "MUI", "Wagmi", "Blockchain"],
    dateStart: new Date("2024-04"),
    dateEnd: new Date("2024-08"),
    status: "inactive"
  },
  {
    id: 9,
    category: "projects",
    name: "EASYQA OS",
    link: "https://personal-h9qyawdw.outsystemscloud.com/easyqa/",
    techs: ["OutSystems"],
    dateStart: new Date("2024-10"),
    status: "inactive"
  },
  {
    id: 10,
    category: "projects",
    name: "FIN/ACE OS",
    link: "https://personal-h9qyawdw.outsystemscloud.com/finace/",
    techs: ["OutSystems"],
    dateStart: new Date("2024-10"),
    status: "inactive"
  },
  {
    id: 11,
    category: "projects",
    name: "Wordlechain",
    place: "Subvisual",
    subjectKey: "project_wordlechain_subject",
    descriptionKey: "project_wordlechain_description",
    link: "https://wordlechain.netlify.app/",
    techs: ["React", "TypeScript", "MUI", "Wagmi", "Solidity", "Blockchain"],
    dateStart: new Date("2024-12"),
    status: "completed",
    img: "projects/wordlechain.png"
  },
  {
    id: 11,
    category: "projects",
    name: "Talentsy",
    place: "Subvisual",
    subjectKey: "project_talentsy_subject",
    descriptionKey: "project_talentsy_description",
    link: "https://talentsy.netlify.app/",
    techs: ["React", "TypeScript", "MUI", "Supabase", "PostgreSQL"],
    dateStart: new Date("2025-01"),
    status: "completed",
    img: "projects/talentsy.png"
  }
];
